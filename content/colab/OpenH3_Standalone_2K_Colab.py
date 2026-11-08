# -*- coding: utf-8 -*-
"""
Open-H3 Regenerate 2K —— Colab A100 一键「草稿视频 → 2560x1440 精修」脚本
================================================================================
把一段已经生成好的低分视频（H3 草稿、LTX/Wan 片段都行），用 NVIDIA 开源的
Open-H3-Regenerate-2K 在原尺寸上重绘细节：3 步 Euler、CFG 1、latent 放大不重编码，
输出 768P / 1080P / 2K / 4K，草稿的原声原封不动接回去。

用法（Colab）：
  1. 只上传本文件到 /content（工作流已内置，不用再传 json；传了也会用你传的那份）
  2. 上传要精修的视频，命名 /content/draft.mp4（没找到会弹窗让你选）
  3. 运行本单元格 → 它装好节点、下好模型、起 ComfyUI、开隧道，然后把地址打出来
  4. 你在 ComfyUI 界面里把工作流拖进去，LoadVideo 选 draft.mp4，点 Run
  5. 想要全自动提交（不开界面）：AUTO_RUN=1 再跑一次

启动方式照你三合一那套快速启动来：
  · 显存 < 60 GB 自动加 --async-offload 2 --reserve-vram 2.0
  · 装了 comfy-kitchen 才加 --use-ck-attention --fast fp16_accumulation
  · CF_TUNNEL_TOKEN 存在就走固定隧道，没有则开临时隧道并解析地址
  · 工作流会自动放进 ComfyUI 侧栏（Workflows → OpenH3_2K精修）

可调参数（改下面 CONFIG，或用环境变量覆盖）：
  SIZE=768p|576p       草稿统一尺寸（H3 草稿用 768p，别家模型用 576p）
  RES=2k|1080p|4k      输出分辨率（默认 auto：≥60GB 显存选 2k，否则 1080p）
  STEPS=3|2            3 步最稳，2 步快约 30% 但毛发/苔藓会软
  MAX_FRAMES=121       单次帧数上限（121 ≈ 5 秒；最长 360 ≈ 15 秒）
  START_SIGMA=0.0      0 用官方 0.909；想更贴近草稿、少飘脸就填 0.8
  PROMPT=...           画面描述（精修主要靠草稿，提示词别写和画面冲突的内容）

注意：普通版与保脸版只下载各自需要的组件，已有编码器、VAE 和放大模型会复用。
      保脸版使用 r384 refiner-only LoRA（约 5.87 GB），不下载普通版才使用的合并 LoRA、
      Sharp、ref2va 曲线来源和 Fast VAE。FACE_STRENGTH 默认 0.60，越高重绘越多。
      A100 40G 建议 RES=1080p；模型与视频放本地盘，预留足够空间。
"""

from __future__ import annotations

import json
import os
import re
import shutil
import socket
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import uuid
from pathlib import Path

# ============================== 配置 ==============================
BASE = Path("/content") if Path("/content").exists() else Path.cwd()
COMFY = BASE / "ComfyUI"
PORT = int(os.getenv("OPENH3_PORT", "8189"))  # 精修独立端口，避开原 ComfyUI / Pika 的 8188
PUBLIC_URL = os.getenv("PUBLIC_URL", "")   # 你固定隧道的域名
# 1 = 保脸版（人脸只重绘一半，口播/特写首选）；0 = 大细节版（全图 0.909 重绘，脸会变）
FACE_MASK = os.getenv("FACE_MASK", "1").strip() == "1"
FACE_STRENGTH = float(os.getenv("FACE_STRENGTH", "0.78"))  # 脸部重绘量；越高细节越多，身份保护越弱
if not 0.01 <= FACE_STRENGTH <= 1.0:
    raise ValueError("FACE_STRENGTH 必须在 0.01~1.0 之间")
WORKFLOW_JSON = BASE / ("OpenH3_2K精修_保脸版_工作流.json" if FACE_MASK else "OpenH3_2K精修_工作流.json")
HF_CACHE = BASE / ".hf_openh3"

AUTO_RUN = os.getenv("AUTO_RUN", "0").strip() == "1"    # 默认 0：脚本只备环境，工作流你自己在界面里跑
VIDEO_PATH = os.getenv("VIDEO_PATH", str(BASE / "draft.mp4")).strip()
SIZE = os.getenv("SIZE", "768p").strip()
RES = os.getenv("RES", "auto").strip()      # auto = 按显存自动选 2k / 1080p
STEPS = int(os.getenv("STEPS", "3"))
MAX_FRAMES = int(os.getenv("MAX_FRAMES", "121"))
START_SIGMA = float(os.getenv("START_SIGMA", "0.0"))
PROMPT = os.getenv(
    "PROMPT",
    "same content and motion as the draft video, photorealistic, natural skin texture, fine detail, sharp focus",
).strip()
OUT_PATH = BASE / "OPENH3_2K_OUT.mp4"

# 实验档：ref2va_pruned_int8 那 19.5 GB 只为读一张 32 KB 的 adaln 表，
# 设成 1 就改用 fl2va 自带的表（省 19.5 GB，但如果 LoRA 报“缺少 1025x8 曲线基”就改回 0）
USE_FL2VA_CURVE = os.getenv("USE_FL2VA_CURVE", "0").strip() == "1"

# 接管本脚本端口上的旧 ComfyUI：
#   0（默认）= 不接管，不停止其他实例；auto = 旧实例空闲时接管
#   1 = 强制接管   0 = 永不接管（直接报错）
TAKEOVER = os.getenv("TAKEOVER", "0").strip().lower()

# 设 1 就禁用“复用已有等价模型”，9 个文件全按本脚本清单重新下
NO_REUSE = os.getenv("NO_REUSE", "0").strip() == "1"

# 与你现有三合一环境同一个 ComfyUI 提交号，节点集合不会漂
COMFY_REPO = "https://github.com/Comfy-Org/ComfyUI.git"
COMFY_REV = "b1a247c9cf9dbfda4b2c0a0c1d50950667eeaa0c"

NODES = [
    ("https://github.com/rdh9616/ComfyUI-Open-H3-Regenerate.git", "ComfyUI-Open-H3-Regenerate"),
    ("https://github.com/LBH-123-AI/Comfyui_Minimax_h3_latent_Upscaler.git", "Comfyui_Minimax_h3_latent_Upscaler"),
    ("https://github.com/BennyDaBall930/ComfyUI-Open-H3-FaceRegion.git", "ComfyUI-Open-H3-FaceRegion"),
]

# (repo, 仓库内路径, ComfyUI 下的目标子目录)
WEIGHTS = [
    ("Efficient-Large-Model/Open-H3-Regenerate-2K",
     "lora/open_h3_regenerate_2k_lora.safetensors", "loras"),
    ("Efficient-Large-Model/Open-H3-Regenerate-2K",
     "lora/sharp_curve_branches.safetensors", "loras"),
    ("Efficient-Large-Model/Open-H3-Regenerate-2K",
     "vae_fast/fast_h3_vae_noncausal_24l.safetensors", "vae"),
    ("Efficient-Large-Model/Open-H3-Regenerate-2K",
     "latent_upsampler/minimax_h3_latent_upscaler_3d_conv_v1_bf16.safetensors", "latent_upscale_models"),
    ("Comfy-Org/MiniMax-H3",
     "diffusion_models/minimax_h3_fl2va_pruned_int8_convrot.safetensors", "diffusion_models"),
    ("Comfy-Org/MiniMax-H3",
     "diffusion_models/minimax_h3_ref2va_pruned_int8_convrot.safetensors", "diffusion_models"),
    ("Comfy-Org/MiniMax-H3",
     "text_encoders/qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors", "text_encoders"),
    ("Comfy-Org/MiniMax-H3",
     "vae/minimax_h3_video_vae_fp16.safetensors", "vae"),
    ("Comfy-Org/MiniMax-H3",
     "vae/minimax_h3_audio_vae_fp32.safetensors", "vae"),
]

# 同一模型的等价副本（不同量化/不同存放路径）。
# 逻辑：列表里**只要有一个存在就用它**，并把工作流里所有等价名统一改成它。
# 这样无论你是复用三合一的 int8，还是全新下载的 nvfp4/fp16/bf16，工作流都不会红。
MODEL_GROUPS = [
    ("text_encoders", [
        "qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors",
        "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
    ]),
    ("vae", [
        "minimax_h3_video_vae_fp16.safetensors",
        "minimax_h3_video_vae_int8_convrot.safetensors",
    ]),
    ("latent_upscale_models", [
        "minimax_h3_latent_upscaler_3d_conv_v1_bf16.safetensors",
        "minimax_h3_latent_upscaler_3d_conv_v1/minimax_h3_latent_upscaler_3d_conv_v1_fp16.safetensors",
    ]),
]


def group_existing(subdir: str, names: list) -> str:
    for name in names:
        if (COMFY / "models" / subdir / name).exists():
            return name
    return ""


def model_swaps() -> dict:
    """把工作流里所有等价的旧名字映射到磁盘上真实存在的那个。"""
    swaps = {}
    for subdir, names in MODEL_GROUPS:
        live = group_existing(subdir, names)
        if not live:
            continue
        for name in names:
            if name != live:
                swaps[name] = live
    return swaps


# ============================== 小工具 ==============================
def log(msg: str = "") -> None:
    print(msg, flush=True)


def step(title: str) -> None:
    log("\n" + "=" * 78)
    log(title)
    log("=" * 78)


def sh(cmd, cwd=None, check=True):
    log(f"$ {' '.join(cmd) if isinstance(cmd, list) else cmd}")
    return subprocess.run(cmd, cwd=cwd, check=check)


def get_secret(name: str) -> str:
    v = os.getenv(name, "").strip()
    if v:
        return v
    try:
        from google.colab import userdata  # type: ignore
        return (userdata.get(name) or "").strip()
    except Exception:
        return ""


def human_gb(num_bytes: float) -> str:
    return f"{num_bytes / 1024 ** 3:.1f} GB"


# 工作流内置副本：万一 json 没传上去 / 被改名，脚本自己写一份出来
WORKFLOW_FALLBACK = r"""{
  "last_node_id": 22,
  "last_link_id": 28,
  "nodes": [
    {
      "id": 1,
      "type": "LoadVideo",
      "pos": [
        40,
        120
      ],
      "size": [
        320,
        340
      ],
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "VIDEO",
          "type": "VIDEO",
          "links": [
            1
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "LoadVideo"
      },
      "widgets_values": [
        "draft.mp4"
      ],
      "_meta": {
        "title": "① 上传的草稿视频（放在 ComfyUI/input/draft.mp4）"
      },
      "title": "① 上传草稿视频"
    },
    {
      "id": 2,
      "type": "GetVideoComponents",
      "pos": [
        400,
        120
      ],
      "size": [
        260,
        130
      ],
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [
        {
          "name": "video",
          "type": "VIDEO",
          "link": 1
        }
      ],
      "outputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "links": [
            2
          ],
          "slot_index": 0
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "links": [
            3,
            4
          ],
          "slot_index": 1
        },
        {
          "name": "fps",
          "type": "FLOAT",
          "links": [
            5
          ],
          "slot_index": 2
        },
        {
          "name": "bit_depth",
          "type": "COMBO",
          "links": null,
          "slot_index": 3
        },
        {
          "name": "color_space",
          "type": "COMBO",
          "links": null,
          "slot_index": 4
        }
      ],
      "properties": {
        "Node name for S&R": "GetVideoComponents"
      },
      "title": "② 拆出视频帧、原声和帧率"
    },
    {
      "id": 3,
      "type": "OpenH3RegenPrepareDraft",
      "pos": [
        700,
        120
      ],
      "size": [
        320,
        130
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 2
        },
        {
          "name": "source_fps",
          "type": "FLOAT",
          "link": 5,
          "widget": {
            "name": "source_fps"
          }
        }
      ],
      "outputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "links": [
            6
          ],
          "slot_index": 0
        },
        {
          "name": "frame_count",
          "type": "INT",
          "links": [
            7,
            8
          ],
          "slot_index": 1
        },
        {
          "name": "width",
          "type": "INT",
          "links": null,
          "slot_index": 2
        },
        {
          "name": "height",
          "type": "INT",
          "links": null,
          "slot_index": 3
        }
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegenPrepareDraft"
      },
      "widgets_values": [
        "768p (1344x768)",
        121,
        24.0
      ],
      "_meta": {
        "title": "② 统一到 24fps / 1344x768 / 121 帧（5 秒）"
      },
      "title": "③ 草稿预处理 · 24fps / 最多121帧"
    },
    {
      "id": 4,
      "type": "VAELoader",
      "pos": [
        700,
        320
      ],
      "size": [
        320,
        60
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            9,
            10
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "minimax_h3_video_vae_fp16.safetensors"
      ],
      "_meta": {
        "title": "视频 VAE"
      }
    },
    {
      "id": 5,
      "type": "VAEEncode",
      "pos": [
        1060,
        120
      ],
      "size": [
        220,
        60
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "pixels",
          "type": "IMAGE",
          "link": 6
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 9
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            11
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEEncode"
      },
      "_meta": {
        "title": "③ 草稿编码成 H3 潜变量"
      },
      "title": "④ 编码草稿视频"
    },
    {
      "id": 6,
      "type": "UNETLoader",
      "pos": [
        40,
        520
      ],
      "size": [
        380,
        80
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            12
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "UNETLoader"
      },
      "widgets_values": [
        "minimax_h3_fl2va_pruned_int8_convrot.safetensors",
        "default"
      ],
      "_meta": {
        "title": "H3 FL2VA 底模（参考实现用的 pruned int8）"
      }
    },
    {
      "id": 7,
      "type": "OpenH3RegenLora",
      "pos": [
        460,
        520
      ],
      "size": [
        420,
        180
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 12
        }
      ],
      "outputs": [
        {
          "name": "model",
          "type": "MODEL",
          "links": [
            13
          ],
          "slot_index": 0
        },
        {
          "name": "report",
          "type": "STRING",
          "links": null,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegenLora"
      },
      "widgets_values": [
        "open_h3_regenerate_2k_lora.safetensors",
        "sharp_curve_branches.safetensors",
        "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
        1.0,
        1.0,
        "bf16"
      ],
      "_meta": {
        "title": "④ 合体 LoRA（Refiner + LightX2V Turbo + LMS Sharp）+ 50 条曲线分支"
      },
      "title": "⑥ Open-H3 2K精修 LoRA + Sharp曲线"
    },
    {
      "id": 8,
      "type": "CLIPLoader",
      "pos": [
        40,
        720
      ],
      "size": [
        380,
        100
      ],
      "flags": {},
      "order": 7,
      "mode": 0,
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            14
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPLoader"
      },
      "widgets_values": [
        "qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors",
        "minimax",
        "default"
      ],
      "_meta": {
        "title": "Qwen3-VL 32B 文本编码器"
      }
    },
    {
      "id": 9,
      "type": "CLIPTextEncode",
      "pos": [
        460,
        740
      ],
      "size": [
        420,
        140
      ],
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 14
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            15
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "same content and motion as the draft video, photorealistic, natural skin texture, fine detail, sharp focus"
      ],
      "_meta": {
        "title": "⑤ 提示词（写画面内容；精修主要靠草稿本身）"
      },
      "title": "画面描述 · 与草稿内容保持一致"
    },
    {
      "id": 10,
      "type": "VAELoader",
      "pos": [
        700,
        420
      ],
      "size": [
        320,
        60
      ],
      "flags": {},
      "order": 9,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            16
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "minimax_h3_audio_vae_fp32.safetensors"
      ],
      "_meta": {
        "title": "音频 VAE（精修时音频流被锁住）"
      }
    },
    {
      "id": 11,
      "type": "OpenH3RegenUpscale",
      "pos": [
        1060,
        240
      ],
      "size": [
        360,
        140
      ],
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "latent",
          "type": "LATENT",
          "link": 11
        }
      ],
      "outputs": [
        {
          "name": "latent",
          "type": "LATENT",
          "links": [
            17
          ],
          "slot_index": 0
        },
        {
          "name": "width",
          "type": "INT",
          "links": null,
          "slot_index": 1
        },
        {
          "name": "height",
          "type": "INT",
          "links": null,
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegenUpscale"
      },
      "widgets_values": [
        "minimax_h3_latent_upscaler_3d_conv_v1_bf16.safetensors",
        "2k (2560x1440)",
        "bf16",
        true
      ],
      "_meta": {
        "title": "⑥ 潜变量 3D 放大到 2K 网格（不解码重编码）"
      },
      "title": "⑤ 潜变量放大 · 2K"
    },
    {
      "id": 12,
      "type": "OpenH3RegenRefineLatent",
      "pos": [
        1460,
        240
      ],
      "size": [
        340,
        120
      ],
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "latent",
          "type": "LATENT",
          "link": 17
        },
        {
          "name": "audio_vae",
          "type": "VAE",
          "link": 16
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "link": null
        }
      ],
      "outputs": [
        {
          "name": "latent",
          "type": "LATENT",
          "links": [
            18
          ],
          "slot_index": 0
        },
        {
          "name": "frame_count",
          "type": "INT",
          "links": null,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegenRefineLatent"
      },
      "widgets_values": [
        "silence (reference)"
      ],
      "_meta": {
        "title": "⑦ 组 AV 潜变量：视频重绘，音频保持干净（静音轨道）"
      },
      "title": "准备精修潜变量 · 原声另路保留"
    },
    {
      "id": 13,
      "type": "OpenH3RegenSigmas",
      "pos": [
        1460,
        400
      ],
      "size": [
        340,
        100
      ],
      "flags": {},
      "order": 12,
      "mode": 0,
      "outputs": [
        {
          "name": "SIGMAS",
          "type": "SIGMAS",
          "links": [
            19
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegenSigmas"
      },
      "widgets_values": [
        3,
        0.0
      ],
      "_meta": {
        "title": "官方 3 步网格 0.909 → 0.857 → 0.667 → 0"
      },
      "title": "⑦ 精修采样 · 官方3步"
    },
    {
      "id": 14,
      "type": "RandomNoise",
      "pos": [
        1460,
        540
      ],
      "size": [
        340,
        80
      ],
      "flags": {},
      "order": 13,
      "mode": 0,
      "outputs": [
        {
          "name": "NOISE",
          "type": "NOISE",
          "links": [
            20
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "RandomNoise"
      },
      "widgets_values": [
        1766580932,
        "fixed"
      ],
      "_meta": {
        "title": "固定种子"
      }
    },
    {
      "id": 15,
      "type": "KSamplerSelect",
      "pos": [
        1460,
        660
      ],
      "size": [
        340,
        60
      ],
      "flags": {},
      "order": 14,
      "mode": 0,
      "outputs": [
        {
          "name": "SAMPLER",
          "type": "SAMPLER",
          "links": [
            21
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSamplerSelect"
      },
      "widgets_values": [
        "euler"
      ],
      "_meta": {
        "title": "Euler"
      }
    },
    {
      "id": 16,
      "type": "BasicGuider",
      "pos": [
        900,
        620
      ],
      "size": [
        300,
        80
      ],
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 13
        },
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 15
        }
      ],
      "outputs": [
        {
          "name": "GUIDER",
          "type": "GUIDER",
          "links": [
            22
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "BasicGuider"
      },
      "_meta": {
        "title": "CFG 1：每步只跑一次"
      }
    },
    {
      "id": 17,
      "type": "SamplerCustomAdvanced",
      "pos": [
        1820,
        400
      ],
      "size": [
        300,
        180
      ],
      "flags": {},
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "noise",
          "type": "NOISE",
          "link": 20
        },
        {
          "name": "guider",
          "type": "GUIDER",
          "link": 22
        },
        {
          "name": "sampler",
          "type": "SAMPLER",
          "link": 21
        },
        {
          "name": "sigmas",
          "type": "SIGMAS",
          "link": 19
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 18
        }
      ],
      "outputs": [
        {
          "name": "output",
          "type": "LATENT",
          "links": [
            23
          ],
          "slot_index": 0
        },
        {
          "name": "denoised_output",
          "type": "LATENT",
          "links": null,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "SamplerCustomAdvanced"
      },
      "_meta": {
        "title": "⑧ 3 步重绘（2K 全分辨率）"
      },
      "title": "⑧ 执行精修采样"
    },
    {
      "id": 18,
      "type": "OpenH3SaveRefinedLatent",
      "pos": [
        2160,
        400
      ],
      "size": [
        330,
        120
      ],
      "flags": {},
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 23
        },
        {
          "name": "frame_count",
          "type": "INT",
          "link": 7,
          "widget": {
            "name": "frame_count"
          }
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "link": 3
        }
      ],
      "outputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "links": [
            24
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "OpenH3SaveRefinedLatent"
      },
      "widgets_values": [
        121,
        "open_h3_regen"
      ],
      "_meta": {
        "title": "⑨ 先存潜变量（解码失败不用重跑精修）"
      },
      "title": "保存精修潜变量和原声"
    },
    {
      "id": 19,
      "type": "OpenH3RegenFastVAEDecode",
      "pos": [
        2520,
        400
      ],
      "size": [
        330,
        100
      ],
      "flags": {},
      "order": 18,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 24
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 10
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            25
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegenFastVAEDecode"
      },
      "widgets_values": [
        "fast_h3_vae_noncausal_24l.safetensors",
        false
      ],
      "_meta": {
        "title": "⑩ 快速 VAE 解码（2K 约 24 秒，不是 50 秒）"
      },
      "title": "⑨ Fast H3 VAE 解码"
    },
    {
      "id": 20,
      "type": "OpenH3RegenFinish",
      "pos": [
        2520,
        540
      ],
      "size": [
        340,
        120
      ],
      "flags": {},
      "order": 19,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 25
        },
        {
          "name": "frame_count",
          "type": "INT",
          "link": 8,
          "widget": {
            "name": "frame_count"
          }
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "link": 4
        }
      ],
      "outputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "links": [
            26
          ],
          "slot_index": 0
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "links": [
            27
          ],
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegenFinish"
      },
      "widgets_values": [
        121,
        "auto (1088 -> 1080, 2176 -> 2160)"
      ],
      "_meta": {
        "title": "⑪ 裁掉填充帧 + 接回草稿原声"
      },
      "title": "⑩ 裁齐帧数并接回草稿原声"
    },
    {
      "id": 21,
      "type": "CreateVideo",
      "pos": [
        2900,
        540
      ],
      "size": [
        300,
        100
      ],
      "flags": {},
      "order": 20,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 26
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "link": 27
        }
      ],
      "outputs": [
        {
          "name": "VIDEO",
          "type": "VIDEO",
          "links": [
            28
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CreateVideo"
      },
      "widgets_values": [
        24.0,
        8,
        "sRGB",
        "none"
      ],
      "_meta": {
        "title": "合成 24fps 视频"
      },
      "title": "⑪ 合成视频 · 24fps / 原声"
    },
    {
      "id": 22,
      "type": "SaveVideo",
      "pos": [
        3240,
        540
      ],
      "size": [
        320,
        100
      ],
      "flags": {},
      "order": 21,
      "mode": 0,
      "inputs": [
        {
          "name": "video",
          "type": "VIDEO",
          "link": 28
        }
      ],
      "outputs": [
        {
          "name": "video",
          "type": "VIDEO",
          "links": null,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "SaveVideo"
      },
      "widgets_values": [
        "video/open_h3_2k",
        "auto",
        "auto"
      ],
      "_meta": {
        "title": "⑫ 输出 → ComfyUI/output/video/open_h3_2k_*.mp4"
      },
      "title": "⑫ 保存精修视频"
    }
  ],
  "links": [
    [
      1,
      1,
      0,
      2,
      0,
      "VIDEO"
    ],
    [
      2,
      2,
      0,
      3,
      0,
      "IMAGE"
    ],
    [
      3,
      2,
      1,
      18,
      2,
      "AUDIO"
    ],
    [
      4,
      2,
      1,
      20,
      2,
      "AUDIO"
    ],
    [
      5,
      2,
      2,
      3,
      1,
      "FLOAT"
    ],
    [
      6,
      3,
      0,
      5,
      0,
      "IMAGE"
    ],
    [
      7,
      3,
      1,
      18,
      1,
      "INT"
    ],
    [
      8,
      3,
      1,
      20,
      1,
      "INT"
    ],
    [
      9,
      4,
      0,
      5,
      1,
      "VAE"
    ],
    [
      10,
      4,
      0,
      19,
      1,
      "VAE"
    ],
    [
      11,
      5,
      0,
      11,
      0,
      "LATENT"
    ],
    [
      12,
      6,
      0,
      7,
      0,
      "MODEL"
    ],
    [
      13,
      7,
      0,
      16,
      0,
      "MODEL"
    ],
    [
      14,
      8,
      0,
      9,
      0,
      "CLIP"
    ],
    [
      15,
      9,
      0,
      16,
      1,
      "CONDITIONING"
    ],
    [
      16,
      10,
      0,
      12,
      1,
      "VAE"
    ],
    [
      17,
      11,
      0,
      12,
      0,
      "LATENT"
    ],
    [
      18,
      12,
      0,
      17,
      4,
      "LATENT"
    ],
    [
      19,
      13,
      0,
      17,
      3,
      "SIGMAS"
    ],
    [
      20,
      14,
      0,
      17,
      0,
      "NOISE"
    ],
    [
      21,
      15,
      0,
      17,
      2,
      "SAMPLER"
    ],
    [
      22,
      16,
      0,
      17,
      1,
      "GUIDER"
    ],
    [
      23,
      17,
      0,
      18,
      0,
      "LATENT"
    ],
    [
      24,
      18,
      0,
      19,
      0,
      "LATENT"
    ],
    [
      25,
      19,
      0,
      20,
      0,
      "IMAGE"
    ],
    [
      26,
      20,
      0,
      21,
      0,
      "IMAGE"
    ],
    [
      27,
      20,
      1,
      21,
      1,
      "AUDIO"
    ],
    [
      28,
      21,
      0,
      22,
      0,
      "VIDEO"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.6,
      "offset": [
        40,
        40
      ]
    },
    "note": "Open-H3 Regenerate 2K — 草稿视频 → 2560x1440 三步重绘（接回原声）"
  },
  "version": 0.4
}
"""

# 保脸版工作流（方案A：满血 OpenH3RegenLora [Refiner+Turbo+Sharp 50曲线] + 五官核心保护 0.78 + 原声锁口型 + FastVAE）
WORKFLOW_FALLBACK_FACE = r"""{
  "last_node_id": 24,
  "last_link_id": 34,
  "nodes": [
    {
      "id": 1,
      "type": "LoadVideo",
      "pos": [
        40,
        120
      ],
      "size": [
        320,
        340
      ],
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "VIDEO",
          "type": "VIDEO",
          "links": [
            1
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        "draft.mp4"
      ],
      "properties": {
        "Node name for S&R": "LoadVideo"
      },
      "_meta": {
        "title": "① 草稿视频（点 choose file to upload）"
      },
      "title": "① 上传草稿视频"
    },
    {
      "id": 2,
      "type": "GetVideoComponents",
      "pos": [
        400,
        120
      ],
      "size": [
        260,
        130
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [
        {
          "name": "video",
          "type": "VIDEO",
          "link": 1
        }
      ],
      "outputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "links": [
            2
          ],
          "slot_index": 0
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "links": [
            3,
            4,
            34
          ],
          "slot_index": 1
        },
        {
          "name": "fps",
          "type": "FLOAT",
          "links": [
            5
          ],
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "GetVideoComponents"
      },
      "_meta": {
        "title": "② 拆成帧 / 原声 / 帧率"
      },
      "title": "② 拆出视频帧、原声和帧率"
    },
    {
      "id": 3,
      "type": "OpenH3RegenPrepareDraft",
      "pos": [
        700,
        120
      ],
      "size": [
        320,
        130
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 2
        },
        {
          "name": "source_fps",
          "type": "FLOAT",
          "link": 5,
          "widget": {
            "name": "source_fps"
          }
        }
      ],
      "outputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "links": [
            6,
            7
          ],
          "slot_index": 0
        },
        {
          "name": "frame_count",
          "type": "INT",
          "links": [
            8,
            9
          ],
          "slot_index": 1
        }
      ],
      "widgets_values": [
        "768p (1344x768)",
        121,
        24.0
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegenPrepareDraft"
      },
      "_meta": {
        "title": "③ 24fps / 768p / 121 帧"
      },
      "title": "③ 草稿预处理 · 24fps / 最多121帧"
    },
    {
      "id": 4,
      "type": "VAELoader",
      "pos": [
        700,
        320
      ],
      "size": [
        330,
        60
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            10,
            11
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        "minimax_h3_video_vae_fp16.safetensors"
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "_meta": {
        "title": "视频 VAE"
      }
    },
    {
      "id": 5,
      "type": "VAEEncode",
      "pos": [
        1060,
        120
      ],
      "size": [
        220,
        60
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "pixels",
          "type": "IMAGE",
          "link": 6
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 10
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            12
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEEncode"
      },
      "_meta": {
        "title": "④ 编码成潜变量"
      },
      "title": "④ 编码草稿视频"
    },
    {
      "id": 6,
      "type": "OpenH3RegenUpscale",
      "pos": [
        1060,
        240
      ],
      "size": [
        360,
        140
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "latent",
          "type": "LATENT",
          "link": 12
        }
      ],
      "outputs": [
        {
          "name": "latent",
          "type": "LATENT",
          "links": [
            13,
            14
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        "minimax_h3_latent_upscaler_3d_conv_v1_bf16.safetensors",
        "2k (2560x1440)",
        "bf16",
        false
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegenUpscale"
      },
      "_meta": {
        "title": "⑤ 潜变量放大到 1080p（40G 别选 2k）"
      },
      "title": "⑤ 潜变量放大 · 2K"
    },
    {
      "id": 7,
      "type": "VAELoader",
      "pos": [
        1060,
        440
      ],
      "size": [
        330,
        60
      ],
      "flags": {},
      "order": 7,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            15
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        "minimax_h3_audio_vae_fp32.safetensors"
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "_meta": {
        "title": "音频 VAE"
      }
    },
    {
      "id": 8,
      "type": "OpenH3FaceRegionMap",
      "pos": [
        1460,
        120
      ],
      "size": [
        380,
        220
      ],
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 7
        },
        {
          "name": "latent",
          "type": "LATENT",
          "link": 13
        }
      ],
      "outputs": [
        {
          "name": "mask_file",
          "type": "STRING",
          "links": [
            16,
            17
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        0.78,
        0.12,
        1.0,
        0.6,
        "",
        "open_h3_region"
      ],
      "properties": {
        "Node name for S&R": "OpenH3FaceRegionMap"
      },
      "_meta": {
        "title": "⑥ 自动人脸保护蒙版 (face_strength=0.78 · 仅护五官核心/头发满血2K)"
      },
      "title": "⑥ 自动人脸保护蒙版 (face_strength=0.78 · 仅护五官核心/头发满血2K)"
    },
    {
      "id": 9,
      "type": "OpenH3RegenRefineLatent",
      "pos": [
        1460,
        400
      ],
      "size": [
        350,
        120
      ],
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "latent",
          "type": "LATENT",
          "link": 14
        },
        {
          "name": "audio_vae",
          "type": "VAE",
          "link": 15
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "link": 3
        }
      ],
      "outputs": [
        {
          "name": "latent",
          "type": "LATENT",
          "links": [
            18
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        "draft audio (AUDIO input)"
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegenRefineLatent"
      },
      "_meta": {
        "title": "⑦ 组 AV latent：喂草稿原声，嘴巴继续说话"
      },
      "title": "准备精修潜变量 · 原声另路保留"
    },
    {
      "id": 10,
      "type": "UNETLoader",
      "pos": [
        40,
        520
      ],
      "size": [
        380,
        80
      ],
      "flags": {},
      "order": 10,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            19
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        "minimax_h3_fl2va_pruned_int8_convrot.safetensors",
        "default"
      ],
      "properties": {
        "Node name for S&R": "UNETLoader"
      },
      "_meta": {
        "title": "H3 FL2VA pruned int8"
      }
    },
    {
      "id": 11,
      "type": "OpenH3RegenLora",
      "pos": [
        460,
        520
      ],
      "size": [
        420,
        180
      ],
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 19
        }
      ],
      "outputs": [
        {
          "name": "model",
          "type": "MODEL",
          "links": [
            20
          ],
          "slot_index": 0
        },
        {
          "name": "report",
          "type": "STRING",
          "links": null,
          "slot_index": 1
        }
      ],
      "widgets_values": [
        "open_h3_regenerate_2k_lora.safetensors",
        "sharp_curve_branches.safetensors",
        "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
        1.0,
        1.0,
        "bf16"
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegenLora"
      },
      "_meta": {
        "title": "⑧ 满血 Open-H3 2K精修 LoRA（Refiner + Turbo + Sharp 50曲线）"
      },
      "title": "⑧ 满血 Open-H3 2K精修 LoRA（Refiner + Turbo + Sharp 50曲线）"
    },
    {
      "id": 12,
      "type": "OpenH3RegionModel",
      "pos": [
        920,
        520
      ],
      "size": [
        330,
        80
      ],
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 20
        },
        {
          "name": "mask_file",
          "type": "STRING",
          "link": 17
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            21
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegionModel"
      },
      "_meta": {
        "title": "⑨ 区域强度：每个 token 按自己的强度走"
      }
    },
    {
      "id": 13,
      "type": "CLIPLoader",
      "pos": [
        40,
        720
      ],
      "size": [
        380,
        100
      ],
      "flags": {},
      "order": 13,
      "mode": 0,
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            22
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        "qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors",
        "minimax",
        "default"
      ],
      "properties": {
        "Node name for S&R": "CLIPLoader"
      },
      "_meta": {
        "title": "Qwen3-VL 文本编码器"
      }
    },
    {
      "id": 14,
      "type": "CLIPTextEncode",
      "pos": [
        460,
        740
      ],
      "size": [
        420,
        140
      ],
      "flags": {},
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 22
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            23
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        "same content and motion as the draft video, photorealistic, natural skin texture, fine detail, sharp focus"
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "_meta": {
        "title": "⑩ 画面描述（已预填，可不动）"
      },
      "title": "画面描述 · 与草稿内容保持一致"
    },
    {
      "id": 15,
      "type": "BasicGuider",
      "pos": [
        920,
        660
      ],
      "size": [
        300,
        80
      ],
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 21
        },
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 23
        }
      ],
      "outputs": [
        {
          "name": "GUIDER",
          "type": "GUIDER",
          "links": [
            24
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "BasicGuider"
      },
      "_meta": {
        "title": "CFG 1"
      }
    },
    {
      "id": 16,
      "type": "OpenH3RegionNoise",
      "pos": [
        1460,
        560
      ],
      "size": [
        350,
        100
      ],
      "flags": {},
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "mask_file",
          "type": "STRING",
          "link": 16
        }
      ],
      "outputs": [
        {
          "name": "NOISE",
          "type": "NOISE",
          "links": [
            25
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        1766580932,
        "fixed"
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegionNoise"
      },
      "_meta": {
        "title": "⑪ 区域起始噪声"
      }
    },
    {
      "id": 17,
      "type": "KSamplerSelect",
      "pos": [
        1460,
        700
      ],
      "size": [
        350,
        60
      ],
      "flags": {},
      "order": 17,
      "mode": 0,
      "outputs": [
        {
          "name": "SAMPLER",
          "type": "SAMPLER",
          "links": [
            26
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        "euler"
      ],
      "properties": {
        "Node name for S&R": "KSamplerSelect"
      },
      "_meta": {
        "title": "Euler"
      }
    },
    {
      "id": 18,
      "type": "OpenH3RegenSigmas",
      "pos": [
        1460,
        800
      ],
      "size": [
        350,
        100
      ],
      "flags": {},
      "order": 18,
      "mode": 0,
      "outputs": [
        {
          "name": "SIGMAS",
          "type": "SIGMAS",
          "links": [
            27
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        3,
        0.0
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegenSigmas"
      },
      "_meta": {
        "title": "官方 3 步网格 0.909→0.857→0.667→0"
      },
      "title": "⑦ 精修采样 · 官方3步"
    },
    {
      "id": 19,
      "type": "SamplerCustomAdvanced",
      "pos": [
        1860,
        520
      ],
      "size": [
        300,
        180
      ],
      "flags": {},
      "order": 19,
      "mode": 0,
      "inputs": [
        {
          "name": "noise",
          "type": "NOISE",
          "link": 25
        },
        {
          "name": "guider",
          "type": "GUIDER",
          "link": 24
        },
        {
          "name": "sampler",
          "type": "SAMPLER",
          "link": 26
        },
        {
          "name": "sigmas",
          "type": "SIGMAS",
          "link": 27
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 18
        }
      ],
      "outputs": [
        {
          "name": "output",
          "type": "LATENT",
          "links": [
            28
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "SamplerCustomAdvanced"
      },
      "_meta": {
        "title": "⑫ 3 步重绘（脸轻、背景重）"
      },
      "title": "⑧ 执行精修采样"
    },
    {
      "id": 20,
      "type": "OpenH3SaveRefinedLatent",
      "pos": [
        2200,
        520
      ],
      "size": [
        330,
        120
      ],
      "flags": {},
      "order": 20,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 28
        },
        {
          "name": "frame_count",
          "type": "INT",
          "link": 8,
          "widget": {
            "name": "frame_count"
          }
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "link": 4
        }
      ],
      "outputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "links": [
            29
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        121,
        "open_h3_regen"
      ],
      "properties": {
        "Node name for S&R": "OpenH3SaveRefinedLatent"
      },
      "_meta": {
        "title": "⑬ 先存潜变量"
      },
      "title": "保存精修潜变量和原声"
    },
    {
      "id": 21,
      "type": "OpenH3RegenFastVAEDecode",
      "pos": [
        2520,
        520
      ],
      "size": [
        330,
        100
      ],
      "flags": {},
      "order": 21,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 29
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 11
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            30
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        "fast_h3_vae_noncausal_24l.safetensors",
        false
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegenFastVAEDecode"
      },
      "_meta": {
        "title": "⑭ 快速 VAE 解码（与普通2K版一致）"
      },
      "title": "⑭ Fast H3 VAE 快速解码"
    },
    {
      "id": 22,
      "type": "OpenH3RegenFinish",
      "pos": [
        2840,
        660
      ],
      "size": [
        340,
        120
      ],
      "flags": {},
      "order": 22,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 30
        },
        {
          "name": "frame_count",
          "type": "INT",
          "link": 9,
          "widget": {
            "name": "frame_count"
          }
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "link": 34
        }
      ],
      "outputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "links": [
            31
          ],
          "slot_index": 0
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "links": [
            32
          ],
          "slot_index": 1
        }
      ],
      "widgets_values": [
        121,
        "auto (1088 -> 1080, 2176 -> 2160)"
      ],
      "properties": {
        "Node name for S&R": "OpenH3RegenFinish"
      },
      "_meta": {
        "title": "⑮ 裁掉补帧 + 接回原声"
      },
      "title": "⑩ 裁齐帧数并接回草稿原声"
    },
    {
      "id": 23,
      "type": "CreateVideo",
      "pos": [
        3220,
        660
      ],
      "size": [
        300,
        100
      ],
      "flags": {},
      "order": 23,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 31
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "link": 32
        }
      ],
      "outputs": [
        {
          "name": "VIDEO",
          "type": "VIDEO",
          "links": [
            33
          ],
          "slot_index": 0
        }
      ],
      "widgets_values": [
        24.0,
        8,
        "sRGB",
        "none"
      ],
      "properties": {
        "Node name for S&R": "CreateVideo"
      },
      "_meta": {
        "title": "合成 24fps"
      },
      "title": "⑪ 合成视频 · 24fps / 原声"
    },
    {
      "id": 24,
      "type": "SaveVideo",
      "pos": [
        3560,
        660
      ],
      "size": [
        320,
        100
      ],
      "flags": {},
      "order": 24,
      "mode": 0,
      "inputs": [
        {
          "name": "video",
          "type": "VIDEO",
          "link": 33
        }
      ],
      "widgets_values": [
        "video/open_h3_face_2k",
        "auto",
        "auto"
      ],
      "properties": {
        "Node name for S&R": "SaveVideo"
      },
      "_meta": {
        "title": "⑯ 输出 mp4"
      },
      "title": "⑫ 保存精修视频",
      "outputs": [
        {
          "name": "video",
          "type": "VIDEO",
          "links": null,
          "slot_index": 0
        }
      ]
    }
  ],
  "links": [
    [
      1,
      1,
      0,
      2,
      0,
      "VIDEO"
    ],
    [
      2,
      2,
      0,
      3,
      0,
      "IMAGE"
    ],
    [
      3,
      2,
      1,
      9,
      2,
      "AUDIO"
    ],
    [
      4,
      2,
      1,
      20,
      2,
      "AUDIO"
    ],
    [
      5,
      2,
      2,
      3,
      1,
      "FLOAT"
    ],
    [
      6,
      3,
      0,
      5,
      0,
      "IMAGE"
    ],
    [
      7,
      3,
      0,
      8,
      0,
      "IMAGE"
    ],
    [
      8,
      3,
      1,
      20,
      1,
      "INT"
    ],
    [
      9,
      3,
      1,
      22,
      1,
      "INT"
    ],
    [
      10,
      4,
      0,
      5,
      1,
      "VAE"
    ],
    [
      11,
      4,
      0,
      21,
      1,
      "VAE"
    ],
    [
      12,
      5,
      0,
      6,
      0,
      "LATENT"
    ],
    [
      13,
      6,
      0,
      8,
      1,
      "LATENT"
    ],
    [
      14,
      6,
      0,
      9,
      0,
      "LATENT"
    ],
    [
      15,
      7,
      0,
      9,
      1,
      "VAE"
    ],
    [
      16,
      8,
      0,
      16,
      0,
      "STRING"
    ],
    [
      17,
      8,
      0,
      12,
      1,
      "STRING"
    ],
    [
      18,
      9,
      0,
      19,
      4,
      "LATENT"
    ],
    [
      19,
      10,
      0,
      11,
      0,
      "MODEL"
    ],
    [
      20,
      11,
      0,
      12,
      0,
      "MODEL"
    ],
    [
      21,
      12,
      0,
      15,
      0,
      "MODEL"
    ],
    [
      22,
      13,
      0,
      14,
      0,
      "CLIP"
    ],
    [
      23,
      14,
      0,
      15,
      1,
      "CONDITIONING"
    ],
    [
      24,
      15,
      0,
      19,
      1,
      "GUIDER"
    ],
    [
      25,
      16,
      0,
      19,
      0,
      "NOISE"
    ],
    [
      26,
      17,
      0,
      19,
      2,
      "SAMPLER"
    ],
    [
      27,
      18,
      0,
      19,
      3,
      "SIGMAS"
    ],
    [
      28,
      19,
      0,
      20,
      0,
      "LATENT"
    ],
    [
      29,
      20,
      0,
      21,
      0,
      "LATENT"
    ],
    [
      30,
      21,
      0,
      22,
      0,
      "IMAGE"
    ],
    [
      31,
      22,
      0,
      23,
      0,
      "IMAGE"
    ],
    [
      32,
      22,
      1,
      23,
      1,
      "AUDIO"
    ],
    [
      33,
      23,
      0,
      24,
      0,
      "VIDEO"
    ],
    [
      34,
      2,
      1,
      22,
      2,
      "AUDIO"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.55,
      "offset": [
        40,
        40
      ]
    },
    "note": "Open-H3 保脸真2K版（方案A）：满血 OpenH3RegenLora (Refiner+Turbo+Sharp 50曲线) + 自动人脸区域保护(0.58) + 原声锁口型 + FastVAE"
  },
  "version": 0.4
}
"""


# ============================== 1. ComfyUI ==============================
def ensure_comfy() -> None:
    step("[1/7] ComfyUI 本体")
    if (COMFY / "main.py").exists():
        log(f"✅ 复用已存在的 {COMFY}（你之前跑过三合一的话模型会直接用）")
        return
    sh(["git", "clone", COMFY_REPO, str(COMFY)])
    sh(["git", "checkout", COMFY_REV], cwd=COMFY)
    sh([sys.executable, "-m", "pip", "install", "-q", "-r", "requirements.txt"], cwd=COMFY)
    log("✅ ComfyUI 就绪")


def patch_custom_nodes() -> None:
    """给 Open-H3 节点打方案A兼容补丁：
    1) regen_core.invert_table 支持逐 Token 多维时间步去重与分块，使 50 条 Sharp 曲线与人脸区域蒙版共存；
    2) FaceRegion 蒙版做 0.002 步长量化，避免高斯羽化产生数万个冗余时间步拖慢 AdaLN。
    """
    regen_core_py = COMFY / "custom_nodes" / "ComfyUI-Open-H3-Regenerate" / "regen_core.py"
    if regen_core_py.exists():
        txt = regen_core_py.read_text(encoding="utf-8")
        if "torch.unique(flat" not in txt and "def invert_table(table, coords):" in txt:
            old_fn = (
                "def invert_table(table, coords):\n"
                "    \"\"\"Model time t of each row of `coords`, points on the piecewise-linear curve `table` (as ComfyUI's curve-form\n"
                "    H3 computes its AdaLN input).  Returns (t, max distance from the curve).\"\"\"\n"
                "    table = table.to(coords.device, torch.float32)\n"
                "    coords = coords.to(torch.float32)\n"
                "    p0, d = table[:-1], table[1:] - table[:-1]                       # segments [S, C]\n"
                "    rel = coords[:, None, :] - p0[None]                               # [M, S, C]\n"
                "    s = ((rel * d[None]).sum(-1) / (d * d).sum(-1).clamp(min=1e-20)[None]).clamp(0.0, 1.0)\n"
                "    dist = (rel - s[..., None] * d[None]).norm(dim=-1)               # [M, S]\n"
                "    best = dist.argmin(dim=1)\n"
                "    rows = torch.arange(coords.shape[0], device=coords.device)\n"
                "    t = (best.to(torch.float32) + s[rows, best]) / (table.shape[0] - 1)\n"
                "    return t, float(dist[rows, best].max()) if coords.shape[0] else 0.0"
            )
            new_fn = (
                "def invert_table(table, coords):\n"
                "    \"\"\"Model time t of each row of `coords` (supports 2D [M, C] and 3D [B, M, C] with deduplication).\"\"\"\n"
                "    table = table.to(coords.device, torch.float32)\n"
                "    orig_shape = coords.shape[:-1]\n"
                "    flat = coords.to(torch.float32).reshape(-1, coords.shape[-1])\n"
                "    if flat.shape[0] == 0:\n"
                "        return torch.empty(orig_shape, device=coords.device, dtype=torch.float32), 0.0\n"
                "    uniq, inv = torch.unique(flat, dim=0, return_inverse=True)\n"
                "    p0, d = table[:-1], table[1:] - table[:-1]\n"
                "    d_norm = (d * d).sum(-1).clamp(min=1e-20)[None]\n"
                "    t_chunks, max_err = [], 0.0\n"
                "    for start in range(0, uniq.shape[0], 2048):\n"
                "        u = uniq[start:start + 2048]\n"
                "        rel = u[:, None, :] - p0[None]\n"
                "        s = ((rel * d[None]).sum(-1) / d_norm).clamp(0.0, 1.0)\n"
                "        dist = (rel - s[..., None] * d[None]).norm(dim=-1)\n"
                "        best = dist.argmin(dim=1)\n"
                "        rows = torch.arange(u.shape[0], device=coords.device)\n"
                "        t_u = (best.to(torch.float32) + s[rows, best]) / (table.shape[0] - 1)\n"
                "        err_u = float(dist[rows, best].max())\n"
                "        if err_u > max_err:\n"
                "            max_err = err_u\n"
                "        t_chunks.append(t_u)\n"
                "    t = torch.cat(t_chunks, dim=0)[inv].reshape(orig_shape)\n"
                "    return t, max_err"
            )
            if old_fn in txt:
                regen_core_py.write_text(txt.replace(old_fn, new_fn), encoding="utf-8")
                log("   🔧 已打补丁：ComfyUI-Open-H3-Regenerate 支持 3D 区域时间步 + Sharp 50曲线")

    face_init_py = COMFY / "custom_nodes" / "ComfyUI-Open-H3-FaceRegion" / "__init__.py"
    if face_init_py.exists():
        ftxt = face_init_py.read_text(encoding="utf-8")
        old_line = "m = np.clip(m, 1e-3, 1).astype(np.float32)"
        new_line = "m = (np.round(np.clip(m, 1e-3, 1) * 500.0) / 500.0).astype(np.float32)"
        if old_line in ftxt:
            face_init_py.write_text(ftxt.replace(old_line, new_line), encoding="utf-8")
            log("   🔧 已打补丁：ComfyUI-Open-H3-FaceRegion 羽化掩码量化加速")


def install_nodes() -> None:
    step("[2/7] 精修节点 + 3D 潜变量放大节点")
    (COMFY / "custom_nodes").mkdir(parents=True, exist_ok=True)
    for url, name in NODES:
        dst = COMFY / "custom_nodes" / name
        if dst.exists():
            log(f"✅ {name} 已存在")
        else:
            sh(["git", "clone", "--depth", "1", url, str(dst)])
        req = dst / "requirements.txt"
        if req.exists():
            sh([sys.executable, "-m", "pip", "install", "-q", "-r", str(req)], check=False)
    patch_custom_nodes()
    log("✅ 节点就绪")


def download_weights(face_mode: bool | None = None) -> dict:
    """下载缺失权重；返回 {默认文件名: 实际复用文件名} 供工作流替换。"""
    step("[3/7] 准备本次工作流所需权重，已有同款会跳过")
    from huggingface_hub import hf_hub_download  # 延迟导入，失败信息更清楚

    total_new = 0
    swaps: dict[str, str] = {}
    for repo, remote, subdir in WEIGHTS:
        name = Path(remote).name
        target_dir = COMFY / "models" / subdir
        target_dir.mkdir(parents=True, exist_ok=True)
        dest = target_dir / name

        if dest.exists() and dest.stat().st_size > 1024 * 1024:
            log(f"   ✅ 已有 {name} ({human_gb(dest.stat().st_size)})")
            continue

        if name == "minimax_h3_ref2va_pruned_int8_convrot.safetensors" and USE_FL2VA_CURVE:
            swaps[name] = "minimax_h3_fl2va_pruned_int8_convrot.safetensors"
            log("   ⏭️  USE_FL2VA_CURVE=1：跳过 19.5 GB 的 ref2va，改用 fl2va 自带的曲线表")
            continue

        if not NO_REUSE:
            live = ""
            for subdir_g, names in MODEL_GROUPS:
                if name in names:
                    live = group_existing(subdir_g, names)
                    break
            if live and live != name:
                swaps[name] = live
                log(f"   ♻️  复用已存在的 {live}（省下 {name}）")
                continue

        log(f"   ⬇️  {repo} :: {remote}")
        cached = Path(hf_hub_download(repo_id=repo, filename=remote, cache_dir=str(HF_CACHE)))
        # HF 缓存里的快照是符号链接（指向 blobs/），直接 move 会把链接搬走导致文件“消失”，
        # 必须先 resolve 到真实文件再 move。
        real = cached.resolve()
        if not real.is_file():
            raise RuntimeError(f"下载后找不到真实文件：{cached} → {real}")
        if dest.is_symlink() or dest.exists():
            dest.unlink()
        shutil.move(str(real), str(dest))
        if not dest.is_file():
            raise RuntimeError(f"移动后文件不在预期位置：{dest}")
        total_new += dest.stat().st_size
        log(f"   ✅ {name} ({human_gb(dest.stat().st_size)})")

    log(f"✅ 本次新下载 {human_gb(total_new)}；复用 {len(swaps)} 个" if swaps
        else f"✅ 本次新下载 {human_gb(total_new)}")
    shutil.rmtree(HF_CACHE, ignore_errors=True)   # 缓存里的空壳/悬空链接清掉，别占盘
    return swaps


# ============================== 2. 启动服务 ==============================
def queue_busy() -> tuple:
    """旧 ComfyUI 队列里有没有正在跑/排队的任务，决定能不能安全接管。"""
    try:
        with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/queue", timeout=5) as r:
            data = json.loads(r.read().decode("utf-8"))
        running = data.get("queue_running") or []
        pending = data.get("queue_pending") or []
        return bool(running or pending), f"运行 {len(running)} / 等待 {len(pending)}"
    except Exception:
        return False, "队列查询失败"


def wait_port_free(timeout: float = 60) -> bool:
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            with socket.create_connection(("127.0.0.1", PORT), timeout=1):
                time.sleep(1)
        except OSError:
            return True
    return False


def comfy_flags(vram_gb: float) -> list:
    """照着你三合一那套快速启动参数来：小显存自动省显存，有 comfy-kitchen 才开 CK attention。"""
    flags = ["--listen", "0.0.0.0", "--port", str(PORT),
             "--disable-auto-launch", "--enable-cors-header", "*"]
    if 0 < vram_gb < 60:
        flags += ["--async-offload", "2", "--reserve-vram", "2.0"]
    try:
        import importlib.util
        if importlib.util.find_spec("comfy_kitchen") is not None:
            flags += ["--use-ck-attention", "--fast", "fp16_accumulation"]
    except Exception:
        pass
    return flags


def required_nodes() -> list:
    need = ["OpenH3RegenLora", "MinimaxH3LatentUpscaler3D"]
    if FACE_MASK:
        need += ["OpenH3FaceRegionMap", "OpenH3RegionNoise", "OpenH3RegionModel"]
    return need


def missing_nodes() -> list:
    gone = []
    for cls in required_nodes():
        try:
            object_info(cls)
        except Exception:
            gone.append(cls)
    return gone


def start_comfy(vram_gb: float = 0.0):
    step("[5/7] 启动 ComfyUI")
    try:
        with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/system_stats", timeout=2):
            log(f"ℹ️ 已经有 ComfyUI 在 {PORT} 上跑")
            gone = missing_nodes()
            if not gone:
                log("✅ 需要的节点都已加载，直接复用这个实例")
                return None, BASE / "openh3_comfyui.log"
            log(f"⚠️ 它缺这些节点：{', '.join(gone)}（节点是启动时加载的，必须重启一次）")
            busy, detail = queue_busy()
            if TAKEOVER == "0" or (busy and TAKEOVER != "1"):
                raise SystemExit(
                    f"❌ {PORT} 上的 ComfyUI 缺少节点：{', '.join(gone)}"
                    f"{'，而且队列里还有任务（' + detail + '）' if busy else ''}。\n"
                    "👉 先中断三合一那个单元格（否则它的看门狗每 30 秒会把 main.py 拉起来），"
                    "再重跑本脚本：它会自动接管并加载新节点。\n"
                    "   （队列空闲时 TAKEOVER=auto 会自己接管，无需改任何东西）")
            log(f"🔧 自动接管 {PORT}：停掉旧 ComfyUI，加载新节点")
            subprocess.run(["pkill", "-f", "main.py"], check=False)
            time.sleep(3)
            if not wait_port_free(60):
                raise SystemExit(
                    f"❌ {PORT} 还被占着，八成是三合一的看门狗又把它拉起来了。\n"
                    "👉 先中断三合一那个单元格，再重跑本脚本。")
            log("✅ 旧 ComfyUI 已停，开始启动本脚本的实例")
    except SystemExit:
        raise
    except Exception:
        pass

    os.environ.setdefault("PYTORCH_CUDA_ALLOC_CONF", "expandable_segments:True")
    os.environ.setdefault("CUDA_MODULE_LOADING", "LAZY")

    log_path = BASE / "openh3_comfyui.log"
    log_fp = open(log_path, "w", encoding="utf-8")
    cmd = [sys.executable, "main.py"] + comfy_flags(vram_gb)
    log(f"$ cd {COMFY} && {' '.join(cmd)}")
    proc = subprocess.Popen(cmd, cwd=str(COMFY), stdout=log_fp, stderr=subprocess.STDOUT,
                            start_new_session=True)

    deadline = time.time() + 300
    while time.time() < deadline:
        if proc.poll() is not None:
            tail = log_path.read_text(encoding="utf-8", errors="replace")[-4000:]
            raise RuntimeError(f"ComfyUI 启动失败，日志尾部：\n{tail}")
        try:
            with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/system_stats", timeout=3):
                log(f"✅ ComfyUI 在线：http://127.0.0.1:{PORT}   （日志 {log_path}）")
                return proc, log_path
        except Exception:
            time.sleep(3)
    raise RuntimeError(f"ComfyUI 300 秒内没起来，看日志：{log_path}")


def probe_url(url: str, timeout: float = 15) -> bool:
    try:
        req = urllib.request.Request(
            f"{url.rstrip('/')}/system_stats",
            headers={"User-Agent": "Mozilla/5.0 (compatible; openh3-check/1.0)"})
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status == 200
    except Exception:
        return False


def ensure_cloudflared() -> str:
    binary = shutil.which("cloudflared") or str(BASE / "cloudflared")
    if not os.path.exists(binary):
        log("   ⬇️ 下载 cloudflared…")
        urllib.request.urlretrieve(
            "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64",
            binary)
        os.chmod(binary, 0o755)
    return binary


def launch_tunnel() -> str:
    """8188 可用原固定隧道；独立精修端口使用自己的临时隧道。"""
    if PORT != 8188:
        log(f"ℹ️ 精修运行在 {PORT}；旧固定域名仍可能指向 8188，请使用本次打印的新地址。")
        try:
            from google.colab import output
            colab_url = str(output.eval_js(f"google.colab.kernel.proxyPort({PORT})", timeout_sec=5))
            if colab_url.startswith("https://"):
                log(f"🌐 Colab 内置精修入口：{colab_url}")
        except Exception:
            pass
    if PORT == 8188 and shutil.which("pgrep") and subprocess.run(
            ["pgrep", "-f", "cloudflared"], capture_output=True).returncode == 0:
        log("ℹ️ cloudflared 已在跑，复用现有隧道")
        if PUBLIC_URL and probe_url(PUBLIC_URL):
            log(f"✅ 隧道已连通：{PUBLIC_URL}")
            return PUBLIC_URL
        log("⚠️ 隧道进程在，但域名暂时连不通（刚接管时可能还没回源，10 秒后再试一次）")
        time.sleep(10)
        if PUBLIC_URL and probe_url(PUBLIC_URL):
            log(f"✅ 隧道已连通：{PUBLIC_URL}")
            return PUBLIC_URL
        return ""

    binary = ensure_cloudflared()
    log_path = BASE / "openh3_cloudflared.log"
    log_fp = open(log_path, "w", encoding="utf-8")
    token = get_secret("CF_TUNNEL_TOKEN")

    if token and PORT == 8188:
        subprocess.Popen([binary, "tunnel", "--protocol", "http2", "run", "--token", token],
                         stdout=log_fp, stderr=subprocess.STDOUT, start_new_session=True)
        time.sleep(8)
        log(f"✅ 固定隧道已启动：{PUBLIC_URL}")
        return PUBLIC_URL

    subprocess.Popen([binary, "tunnel", "--protocol", "http2", "--url",
                      f"http://127.0.0.1:{PORT}"],
                     stdout=log_fp, stderr=subprocess.STDOUT, start_new_session=True)
    log(f"ℹ️ 精修端口 {PORT} 使用独立临时隧道（地址每次变），请打开下面的新地址…")
    for _ in range(20):
        time.sleep(3)
        text = log_path.read_text(encoding="utf-8", errors="replace")
        for line in text.splitlines():
            match = re.search(r"https://[a-z0-9-]+\.trycloudflare\.com", line)
            if match:
                url = match.group(0)
                log(f"✅ 临时隧道：{url}")
                return url
    log(f"⚠️ 隧道地址没解析出来，看日志：{log_path}")
    return ""


# ============================== 3. 视频预处理 ==============================
def ffprobe(path: Path, entries: str) -> str:
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", entries, "-of", "default=nw=1:nk=1", str(path)],
        capture_output=True, text=True)
    return out.stdout.strip()


def prepare_video() -> str | None:
    """可选步骤：/content 里有视频就顺手放进 ComfyUI/input；
    没有也不拦着——你可以直接在 ComfyUI 界面里用 LoadVideo 上传。"""
    step("[4/7] 准备草稿视频（可选）")
    src = Path(VIDEO_PATH)
    if not src.exists():
        candidates = sorted(BASE.glob("*.mp4")) + sorted(BASE.glob("*.mov")) + sorted(BASE.glob("*.webm"))
        if candidates:
            src = candidates[0]
            log(f"ℹ️ 没找到 {VIDEO_PATH}，改用 {src}")
        elif AUTO_RUN:
            try:
                from google.colab import files  # type: ignore
                log("AUTO_RUN=1 需要输入视频，请上传…")
                uploaded = files.upload()
                src = BASE / next(iter(uploaded))
            except Exception as exc:
                raise SystemExit(f"找不到输入视频，也没法弹窗上传：{exc}")
        else:
            log("ℹ️ /content 里没有视频——跳过。稍后直接在 ComfyUI 的 LoadVideo 节点里上传即可。")
            return None

    dur = float(ffprobe(src, "format=duration") or 0)
    max_sec = MAX_FRAMES / 24.0
    log(f"输入：{src.name}  时长 {dur:.2f}s")

    has_audio = "audio" in ffprobe(src, "stream=codec_type")
    need_trim = dur > max_sec + 0.15
    work = BASE / "_openh3_input.mp4"
    (COMFY / "input").mkdir(parents=True, exist_ok=True)
    final = COMFY / "input" / "draft.mp4"

    if not need_trim and has_audio and src.suffix.lower() == ".mp4":
        shutil.copy2(src, final)          # 原样喂进去，避免二次压缩
        log("✅ 无需裁剪/补音轨，原文件直通（不重新编码）")
        return "draft.mp4"

    if need_trim:
        log(f"⚠️ 超过单次上限 {max_sec:.1f}s，本次只精修前 {max_sec:.1f}s"
            f"（要整段就把 MAX_FRAMES 调大、或先自己切段）")

    cmd = ["ffmpeg", "-y", "-loglevel", "error", "-i", str(src)]
    if not has_audio:
        log("ℹ️ 输入没有音轨，补一条静音轨（下游要接回原声）")
        cmd += ["-f", "lavfi", "-i", "anullsrc=r=48000:cl=stereo", "-shortest"]
    if need_trim:
        cmd += ["-t", f"{max_sec:.3f}"]
    cmd += ["-c:v", "libx264", "-crf", "16", "-preset", "veryfast", "-pix_fmt", "yuv420p"]
    cmd += ["-c:a", "aac", "-b:a", "192k", str(work)]
    sh(cmd)
    shutil.copy2(work, final)
    log("✅ 已放入 ComfyUI/input/draft.mp4")
    return "draft.mp4"


# ============================== 4. 提交工作流 ==============================
def resolve_workflow_path() -> Path:
    """三路兜底：指定路径 → 目录里被改名的副本 → 脚本内置副本。"""
    if WORKFLOW_JSON.exists():
        return WORKFLOW_JSON
    for cand in sorted(BASE.glob("*.json")):
        try:
            data = json.loads(cand.read_text(encoding="utf-8"))
        except Exception:
            continue
        if isinstance(data, dict) and data.get("nodes") and any(
                str(n.get("type", "")).startswith("OpenH3") for n in data["nodes"]):
            log(f"ℹ️ 自动找到工作流：{cand.name}")
            return cand
    WORKFLOW_JSON.write_text(WORKFLOW_FALLBACK_FACE if FACE_MASK else WORKFLOW_FALLBACK,
                             encoding="utf-8")
    log(f"ℹ️ 没找到工作流文件，已用脚本内置副本生成：{WORKFLOW_JSON.name}"
        f"（{'保脸版' if FACE_MASK else '大细节版'}）")
    return WORKFLOW_JSON


def upgrade_face_workflow(data: dict) -> bool:
    """将旧版 r16/r384 + LTXVSeparateAVLatent 保脸工作流自动升级为方案A（满血 OpenH3RegenLora + FastVAEDecode）。"""
    nodes = data.get("nodes") or []
    if not any(n.get("type") == "OpenH3FaceRegionMap" for n in nodes):
        return False
    has_old_lora = any(n.get("type") == "LoraLoaderModelOnly" for n in nodes)
    has_old_sep = any(n.get("type") == "LTXVSeparateAVLatent" for n in nodes)
    if not (has_old_lora or has_old_sep):
        return False
    fresh = json.loads(WORKFLOW_FALLBACK_FACE)
    data.clear()
    data.update(fresh)
    return True


def load_workflow() -> dict:
    path = resolve_workflow_path()
    data = json.loads(path.read_text(encoding="utf-8"))
    if upgrade_face_workflow(data):
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
        log("📝 保脸图已升级为方案A：满血 OpenH3RegenLora (Refiner+Turbo+Sharp 50曲线) + 人脸区域保护(0.58) + FastVAE 解码。")
    return data


def object_info(cls: str) -> dict:
    url = f"http://127.0.0.1:{PORT}/object_info/{urllib.parse.quote(cls)}"
    with urllib.request.urlopen(url, timeout=20) as r:
        data = json.loads(r.read().decode("utf-8"))
    if cls not in data:
        raise RuntimeError(f"ComfyUI 里没有节点类型 {cls}（自定义节点没加载成功？看启动日志）")
    return data[cls]


def ui_to_api(wf: dict) -> dict:
    """把界面格式工作流转成 /prompt 需要的 API 格式；输入名以服务端 /object_info 为准。"""
    links = {l[0]: l for l in wf["links"]}
    api: dict[str, dict] = {}
    for node in wf["nodes"]:
        cls = node["type"]
        info = object_info(cls)
        inputs: dict = {}
        for slot in node.get("inputs") or []:
            if slot.get("link") is not None:
                src = links[slot["link"]]
                inputs[slot["name"]] = [str(src[1]), src[2]]

        widget_order = []
        for section in ("required", "optional"):
            for name, spec_ in (info["input"].get(section) or {}).items():
                kind = spec_[0]
                cfg = spec_[1] if len(spec_) > 1 and isinstance(spec_[1], dict) else {}
                # 下拉框的三种序列化都要认：老版 [[...], {...}]、
                # 新版 ["COMBO", {...}]、动态下拉 ["COMFY_DYNAMICCOMBO_V3", {...}]。
                if (isinstance(kind, list) or "COMBO" in str(kind)
                        or kind in ("INT", "FLOAT", "STRING", "BOOLEAN")):
                    widget_order.append((name, cfg))

        values = list(node.get("widgets_values") or [])
        vi = 0
        for name, cfg in widget_order:
            if vi >= len(values):
                break
            # 关键：即使这个输入已经被连线占用，界面里它的 widget 值仍然占着一个位置，
            # 必须照样消耗掉，否则后面的值会整体错位（例如 121 被塞进 crop 下拉框）。
            value = values[vi]
            vi += 1
            if name not in inputs:
                inputs[name] = value
            if cfg.get("control_after_generate") and vi < len(values):
                vi += 1                        # 跳过 UI 的 fixed/randomize

        known = set((info["input"].get("required") or {})) | set((info["input"].get("optional") or {}))
        dropped = [k for k in inputs if k not in known]
        for k in dropped:
            inputs.pop(k)
        if dropped:
            log(f"   ⚠️ {cls} 丢弃了服务端不认识的参数：{dropped}")

        # 新版 SaveVideo 的 format/codec 是嵌套 DynamicCombo，而非两个字符串。
        format_spec = (info["input"].get("required") or {}).get("format", [None])
        if cls == "SaveVideo" and "DYNAMICCOMBO" in str(format_spec[0]):
            fmt = inputs.get("format", "auto")
            if isinstance(fmt, str):
                codec = inputs.pop("codec", "auto")
                inputs["format"] = {
                    "format": fmt,
                    "codec": {"codec": codec} if isinstance(codec, str) else codec,
                }

        api[str(node["id"])] = {"class_type": cls, "inputs": inputs}
    return api


def set_by_old_value(api: dict, node_id: str, old, new) -> bool:
    """按“工作流里的原值”定位参数，避免猜参数名。"""
    node = api.get(node_id)
    if not node:
        return False
    for key, value in node["inputs"].items():
        if isinstance(value, type(old)) and value == old:
            node["inputs"][key] = new
            return True
    return False


def apply_settings(api: dict, video_name: str) -> None:
    """按“值”定位参数（不按节点 id），这样保脸版 / 大细节版两套图都能正确改。"""
    size_label = "768p (1344x768)" if SIZE.lower().startswith("768") else "576p (1024x576)"
    res_label = {"2k": "2k (2560x1440)", "1080p": "1080p (1920x1080)", "4k": "4k (3840x2160)"}.get(
        RES.lower(), "1080p (1920x1080)")
    size_labels = {"768p (1344x768)", "576p (1024x576)"}
    res_labels = {"2k (2560x1440)", "1080p (1920x1080)", "4k (3840x2160)"}

    for node in api.values():
        for key, value in list(node["inputs"].items()):
            if isinstance(value, str):
                if value == "draft.mp4":
                    node["inputs"][key] = video_name
                elif value in size_labels:
                    node["inputs"][key] = size_label
                elif value in res_labels:
                    node["inputs"][key] = res_label
                elif value.startswith("same content and motion"):
                    node["inputs"][key] = PROMPT
            elif isinstance(value, int) and not isinstance(value, bool) and value == 121:
                node["inputs"][key] = MAX_FRAMES

        if node["class_type"] == "OpenH3RegenSigmas":
            for key, value in list(node["inputs"].items()):
                if isinstance(value, int) and not isinstance(value, bool) and value == 3:
                    node["inputs"][key] = STEPS
                elif isinstance(value, float) and START_SIGMA > 0:
                    node["inputs"][key] = START_SIGMA
        elif node["class_type"] == "OpenH3FaceRegionMap":
            node["inputs"]["face_strength"] = FACE_STRENGTH

    log(f"   参数：{size_label} → {res_label}｜{STEPS} 步｜{MAX_FRAMES} 帧"
        f"｜start_sigma={START_SIGMA or '官方 0.909'}")


def _patch_workflow_file(path: Path, swaps: dict) -> None:
    """把实际模型名和当前采样/分辨率设置同步给手动界面的工作流。"""
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        log(f"   （工作流改写跳过：{exc}）")
        return
    hits = 0
    for node in data.get("nodes", []):
        vals = node.get("widgets_values")
        if not isinstance(vals, list):
            continue
        for i, val in enumerate(vals):
            if isinstance(val, str) and val in swaps:
                vals[i] = swaps[val]
                hits += 1
        kind = node.get("type")
        if kind == "OpenH3RegenPrepareDraft" and len(vals) >= 2:
            vals[0] = "768p (1344x768)" if SIZE.lower().startswith("768") else "576p (1024x576)"
            vals[1] = MAX_FRAMES
        elif kind == "OpenH3RegenUpscale" and len(vals) >= 2:
            vals[1] = {"2k": "2k (2560x1440)", "1080p": "1080p (1920x1080)",
                       "4k": "4k (3840x2160)"}.get(RES.lower(), "1080p (1920x1080)")
        elif kind == "OpenH3RegenSigmas" and len(vals) >= 2:
            vals[0], vals[1] = STEPS, START_SIGMA
        elif kind in ("OpenH3SaveRefinedLatent", "OpenH3RegenFinish") and vals:
            vals[0] = MAX_FRAMES
        elif kind == "OpenH3FaceRegionMap" and vals:
            vals[0] = FACE_STRENGTH
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    if hits:
        log(f"   📝 工作流里 {hits} 处模型名已改成实际复用的文件")
    log(f"   📝 手动工作流参数已同步：{RES} / {STEPS} 步 / 最多 {MAX_FRAMES} 帧")


def patch_workflow_file(swaps: dict) -> None:
    # 普通版和保脸版同时适配本机模型，避免只改了侧栏默认版，手动导入另一份却缺模型。
    selected = resolve_workflow_path()
    paths = [selected, *sorted(BASE.glob("OpenH3_2K*工作流.json"))]
    for path in dict.fromkeys(paths):
        _patch_workflow_file(path, swaps)


def apply_swaps(api: dict, swaps: dict) -> None:
    if not swaps:
        return
    for node in api.values():
        for key, value in node["inputs"].items():
            if isinstance(value, str) and value in swaps:
                node["inputs"][key] = swaps[value]
                log(f"   复用：{value} → {swaps[value]}")


def submit_and_wait(api: dict) -> Path:
    log("\n开始采样：2K/5 秒在 A100 大概 6~15 分钟，冷启动更久")
    payload = json.dumps({"prompt": api, "client_id": uuid.uuid4().hex}).encode("utf-8")
    req = urllib.request.Request(f"http://127.0.0.1:{PORT}/prompt", data=payload,
                                 headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            resp = json.loads(r.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", "replace")
        raise SystemExit(
            "❌ ComfyUI 拒绝了这条工作流（多半是参数名/取值和这个 ComfyUI 版本不匹配）\n"
            f"{body[:2000]}\n\n"
            "👉 退路：打开 ComfyUI 界面，把桌面那个工作流 JSON 拖进去，手动点 Run，"
            "效果完全一样。")

    prompt_id = resp.get("prompt_id")
    log(f"✅ 已入队 prompt_id={prompt_id}")

    started = time.time()
    last_note = 0.0
    while True:
        time.sleep(5)
        try:
            with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/history/{prompt_id}", timeout=20) as r:
                hist = json.loads(r.read().decode("utf-8"))
        except Exception:
            hist = {}
        if prompt_id in hist:
            entry = hist[prompt_id]
            status = entry.get("status", {})
            if status.get("status_str") == "error":
                msgs = status.get("messages", [])
                raise SystemExit(f"❌ 采样阶段报错：{json.dumps(msgs, ensure_ascii=False)[:2000]}")
            outputs = entry.get("outputs") or {}
            if outputs:
                return find_output(outputs)
        elapsed = time.time() - started
        if elapsed - last_note > 60:
            last_note = elapsed
            queued = ""
            try:
                with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/queue", timeout=10) as r:
                    q = json.loads(r.read().decode("utf-8"))
                queued = f"｜队列 运行中 {len(q.get('queue_running', []))} / 等待 {len(q.get('queue_pending', []))}"
            except Exception:
                pass
            log(f"   ⏳ 已跑 {int(elapsed // 60)} 分 {int(elapsed % 60)} 秒{queued}")
        if elapsed > 3 * 3600:
            raise SystemExit("❌ 超过 3 小时还没出结果，先停掉看 openh3_comfyui.log")


def find_output(outputs: dict) -> Path:
    for _node_id, node_out in outputs.items():
        for _key, items in node_out.items():
            if not isinstance(items, list):
                continue
            for item in items:
                if isinstance(item, dict) and item.get("filename"):
                    p = COMFY / "output" / item.get("subfolder", "") / item["filename"]
                    if p.exists():
                        return p
    raise SystemExit(f"❌ 任务完成了但没找到输出文件：{json.dumps(outputs, ensure_ascii=False)[:1000]}")


# ============================== 主流程 ==============================
def detect_vram() -> float:
    try:
        import torch  # type: ignore
        if torch.cuda.is_available():
            return torch.cuda.get_device_properties(0).total_memory / 1024 ** 3
    except Exception:
        pass
    return 0.0


def export_workflow_to_ui() -> None:
    """顺便把工作流塞进 ComfyUI 的侧栏，打开界面点一下就能加载。"""
    dst_dir = COMFY / "user" / "default" / "workflows"
    try:
        dst_dir.mkdir(parents=True, exist_ok=True)
        dst = dst_dir / "OpenH3_2K精修.json"
        shutil.copy2(resolve_workflow_path(), dst)
        log(f"   📄 工作流已放进侧栏：Workflows → OpenH3_2K精修")
    except Exception as exc:
        log(f"   （侧栏导出失败，不影响手动拖拽：{exc}）")


def main() -> None:
    global RES
    if sys.platform != "linux":
        log("⚠️ 这个脚本是给 Colab / Linux GPU 环境用的")

    vram = detect_vram()
    if vram:
        log(f"🎮 显存 {vram:.0f} GB")
        if RES.lower() == "auto":
            RES = "2k" if vram >= 60 else "1080p"
            log(f"   分辨率自动选 RES={RES}")
        elif vram < 55 and RES.lower() == "2k":
            log("⚠️ 显存 < 55GB，2K 很可能 OOM —— 建议 RES=1080p")
    else:
        log("⚠️ 没检测到 CUDA，Colab 记得选 A100 运行时")
        if RES.lower() == "auto":
            RES = "1080p"

    proxy = os.getenv("http_proxy") or os.getenv("https_proxy") or os.getenv("HTTP_PROXY")
    if proxy and "127.0.0.1" not in proxy and "localhost" not in proxy:
        os.environ["NO_PROXY"] = os.environ.get("no_proxy", "") + ",127.0.0.1,localhost"

    wf = load_workflow()          # 先确认工作流在，别等 90GB 下载完才发现缺文件

    ensure_comfy()
    install_nodes()
    swaps = download_weights(face_mode=any(n.get("type") == "OpenH3FaceRegionMap" for n in wf.get("nodes", [])))
    swaps.update(model_swaps())        # 按磁盘上真实存在的文件再归一化一遍（双向都覆盖）
    patch_workflow_file(swaps)
    # 注意顺序：LoadVideo 的“可选文件”列表是 ComfyUI 启动时扫描 input/ 得到的，
    # 所以视频必须在启动之前就位，否则提交时会被判定“文件不在列表里”。
    video_name = prepare_video()
    start_comfy(vram)
    url = launch_tunnel()
    export_workflow_to_ui()

    if not AUTO_RUN:
        step("[6/7] 环境就绪 —— 去 ComfyUI 里跑")
        log(f"1. 打开 ComfyUI：{url or f'http://127.0.0.1:{PORT}'}")
        log("2. 左侧 Workflows 选「OpenH3_2K精修」（或把 json 拖进画布）")
        log("3. ① 号 LoadVideo 节点点上传/选文件，把你的视频选进来（建议先切 5~15 秒）")
        log("   · 下拉框里的 max_frames 之后会决定用多少帧：121≈5秒，360≈15秒")
        log(f"4. ⑥ 号分辨率节点选 {RES}（40G 卡别选 2k）")
        log("5. 点 Run。产物在 ComfyUI/output/video/open_h3_2k_*.mp4")
        step("[7/7] 等待你在界面里点 Run")
        return

    if not video_name:
        raise SystemExit("AUTO_RUN=1 需要输入视频：把片段放到 /content/draft.mp4 再重跑。")

    step("[6/7] 自动跑这条工作流")
    api = ui_to_api(wf)
    apply_swaps(api, swaps)
    apply_settings(api, video_name)
    out = submit_and_wait(api)

    shutil.copy2(out, OUT_PATH)
    dur = ffprobe(OUT_PATH, "format=duration")
    wh = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries",
                         "stream=width,height", "-of", "csv=p=0:s=x", str(OUT_PATH)],
                        capture_output=True, text=True).stdout.strip()
    step("[7/7] 完成")
    log(f"🎬 {OUT_PATH}")
    log(f"   分辨率 {wh or '?'}｜时长 {float(dur or 0):.2f}s｜大小 {human_gb(OUT_PATH.stat().st_size)}")
    log(f"   中间产物：{COMFY / 'output'}（refined latent 在 output/open_h3_latents/）")


if __name__ == "__main__":
    main()
