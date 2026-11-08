# -*- coding: utf-8 -*-
import json
import pathlib

root = pathlib.Path(__file__).resolve().parent / "content"


def load_wf(name: str):
    return json.loads((root / "workflows" / name).read_text(encoding="utf-8"))


def load_colab(name: str) -> str:
    return (root / "colab" / name).read_text(encoding="utf-8")


# Module 01 workflows & colab
m01_ref2va = load_wf("01_MiniMax_H3_Base_Ref2VA.json")
m01_t2v = load_wf("02_MiniMax_H3_Base_T2V.json")
m01_fl2va = load_wf("03_MiniMax_H3_Base_FL2VA_I2V.json")
m01_colab = load_colab("MiniMax_H3_Base_Colab.py")

# Module 02 workflows & colab (MiniMax + Pika Flex One-Pass)
m02_cut = load_wf("01_MiniMax_Pika_OnePass_CUT.json")
m02_t2v = load_wf("02_MiniMax_Pika_OnePass_T2V.json")
m02_cont = load_wf("03_MiniMax_Pika_OnePass_CONTINUE.json")
m02_colab = load_colab("MiniMax_Pika_OnePass_Colab.py")

# Module 03 workflows & colab (Standalone Upload Video -> Open-H3 2K Refine)
m03_std = load_wf("01_OpenH3_2K_Standalone_Standard.json")
m03_face = load_wf("02_OpenH3_2K_Standalone_FaceLock.json")
m03_api = load_wf("03_OpenH3_2K_Standalone_API.json")
m03_colab = load_colab("OpenH3_Standalone_2K_Colab.py")

# Module 04 workflows & colab (Full Pipeline: MiniMax Base + Pika Flex + Open-H3 2K Two-Pass)
m04_cut = load_wf("01_MiniMax_Pika_OpenH3_2K_CUT.json")
m04_t2v = load_wf("02_MiniMax_Pika_OpenH3_2K_T2V.json")
m04_cont = load_wf("03_MiniMax_Pika_OpenH3_2K_CONTINUE.json")
m04_colab = load_colab("MiniMax_Pika_OpenH3_2K_Colab.py")

CATALOG = [
    {
        "id": "video",
        "icon": "🎬",
        "title": {"zh": "视频生成", "en": "Video Generation"},
        "groups": [
            {
                "id": "minimax-h3-series",
                "title": {"zh": "MiniMax H3 系列", "en": "MiniMax H3 Series"},
                "items": [
                    # =========================================================================
                    # MODULE 01: MiniMax H3 Base Models & Editions
                    # =========================================================================
                    {
                        "id": "h3-base",
                        "status": "live",
                        "short": {"zh": "01 · H3 基础模型与双 LoRA", "en": "01 · H3 Base & Dual LoRAs"},
                        "title": {
                            "zh": "MiniMax H3 完全指南：官方全版本、Pika Flex 与 LightX2V 双 LoRA 及原生工作流",
                            "en": "MiniMax H3 Complete Guide: Official Editions, Pika Flex & LightX2V LoRAs, and Workflows",
                        },
                        "tagline": {
                            "zh": "系统梳理 Comfy-Org/MiniMax-H3 官方四大件 · Pika Flex (2款) & LightX2V Turbo (2款) 双 LoRA · 三大原生工作流",
                            "en": "Complete map of Comfy-Org/MiniMax-H3 · Pika Flex (2 LoRAs) & LightX2V Turbo (2 LoRAs) · 3 Native Workflows",
                        },
                        "summary": {
                            "zh": "从零看懂开源音视频一体模型 MiniMax H3：官方仓库里 FL2VA 与 Ref2VA 有什么区别？Pika H3 Flex 的 2 个 LoRA 与 LightX2V Turbo 的 2 个加速 LoRA 怎么分别对应挂载？BF16、INT8 ConvRot、FP8、W6A8、NVFP4 该怎么按显卡选？一篇全部讲透。",
                            "en": "Understand MiniMax H3 from scratch: How do official FL2VA and Ref2VA differ? How do you pair the 2 Pika H3 Flex LoRAs and 2 LightX2V Turbo LoRAs with each backbone? Plus full GPU selection guide for BF16, INT8 ConvRot, FP8, W6A8, and NVFP4.",
                        },
                        "tags": {
                            "zh": ["Comfy-Org 官方底座", "Pika Flex 双 LoRA", "LightX2V Turbo 双 LoRA", "INT8 ConvRot / NVFP4"],
                            "en": ["Official Comfy-Org Base", "2 Pika Flex LoRAs", "2 LightX2V Turbo LoRAs", "INT8 ConvRot / NVFP4"],
                        },
                        "stats": [
                            {"value": "2 大主干", "label": {"zh": "Ref2VA 多参考图 · FL2VA 首尾帧", "en": "Ref2VA Multi-Ref · FL2VA First/Last Frame"}},
                            {"value": "2+2 LoRA", "label": {"zh": "Pika Flex 2款 · LightX2V Turbo 2款", "en": "2 Pika Flex · 2 LightX2V Turbo LoRAs"}},
                            {"value": "5 种精度", "label": {"zh": "BF16 / Pruned / INT8 / FP8 / W6A8", "en": "BF16 / Pruned / INT8 / FP8 / W6A8"}},
                            {"value": "24fps", "label": {"zh": "864×480 原生有声视频", "en": "864×480 Native Audio-Video"}},
                        ],
                        "hfRepos": [
                            {
                                "name": "Comfy-Org/MiniMax-H3",
                                "url": "https://huggingface.co/Comfy-Org/MiniMax-H3",
                                "desc": {"zh": "官方主干 / 32B编码器 / 双VAE / Pika Flex LoRA", "en": "Official Backbones / 32B VLM / Dual VAEs / Pika LoRAs"},
                            },
                            {
                                "name": "lightx2v/Minimax-h3-Turbo",
                                "url": "https://huggingface.co/lightx2v/Minimax-h3-Turbo",
                                "desc": {"zh": "LightX2V 4步/8步 Turbo 极速蒸馏 LoRA 官方仓库", "en": "LightX2V 4/8-Step Turbo Distillation LoRAs"},
                            },
                            {
                                "name": "Comfy-Org/ComfyUI",
                                "url": "https://github.com/Comfy-Org/ComfyUI",
                                "desc": {"zh": "原生支持 MiniMax H3 音视频节点的 ComfyUI 核心", "en": "ComfyUI Core with Native MiniMax H3 Nodes"},
                            },
                        ],
                        "versionGroups": [
                            {
                                "title": {
                                    "zh": "一、主干模型两大功能分支 (diffusion_models/)",
                                    "en": "1. Two Core Diffusion Branches (diffusion_models/)",
                                },
                                "desc": {
                                    "zh": "MiniMax H3 官方主干按控制方式分为两大分支（两者均支持不传图直接跑纯文生视频 T2V）：",
                                    "en": "Official MiniMax H3 diffusion backbones are divided into two functional branches (both also support pure T2V when no image is connected):",
                                },
                                "rows": {
                                    "zh": [
                                        [
                                            "Ref2VA (多参考图生音视频)",
                                            "minimax_h3_ref2va_*",
                                            "输入 1~4 张人物/场景设定图 + 提示词 <Picture 1>",
                                            "🔥 最通用首选：既能锁死主角五官衣服换机位，也能不连图直接跑文生视频 (T2V)",
                                        ],
                                        [
                                            "FL2VA (首尾帧/图生音视频)",
                                            "minimax_h3_fl2va_*",
                                            "输入第 0 帧起始图（或首尾两帧）+ 提示词",
                                            "适合让一张静态照片自然动起来，或接在已有视频末帧后面做长镜头续接",
                                        ],
                                    ],
                                    "en": [
                                        [
                                            "Ref2VA (Reference-to-Video-Audio)",
                                            "minimax_h3_ref2va_*",
                                            "1–4 character/scene ref images + <Picture 1> in prompt",
                                            "🔥 Best all-rounder: locks character identity across camera cuts, and also runs pure T2V",
                                        ],
                                        [
                                            "FL2VA (First/Last-Frame-to-Video-Audio)",
                                            "minimax_h3_fl2va_*",
                                            "Start frame (and optional end frame) + text prompt",
                                            "Best for animating a still image or continuing seamlessly from a previous shot",
                                        ],
                                    ],
                                },
                            },
                            {
                                "title": {
                                    "zh": "二、核心必装双 LoRA 体系：Pika H3 Flex (2款) 与 LightX2V Turbo (2款) (loras/)",
                                    "en": "2. Essential Dual LoRA Ecosystem: Pika H3 Flex (2 LoRAs) & LightX2V Turbo (2 LoRAs) (loras/)",
                                },
                                "desc": {
                                    "zh": "针对上述 Ref2VA 和 FL2VA 两大主干，Pika 官方与 LightX2V 团队各自推出了严格一一对应的 2 款专属 LoRA（共 2+2 四大核心 LoRA，挂载在 UNETLoader 与 MiniMaxH3SigmaShift 之间）：",
                                    "en": "Matched 1-to-1 with the Ref2VA and FL2VA backbones, Pika and LightX2V each provide 2 dedicated LoRAs (wired via LoraLoaderModelOnly between UNETLoader and MiniMaxH3SigmaShift):",
                                },
                                "rows": {
                                    "zh": [
                                        [
                                            "🔥 Pika Flex · Ref2VA 版 (Pika 第 1 款)",
                                            "loras/pika_h3_flex_ref2va_v1_bf16.safetensors",
                                            "专配 Ref2VA 底模 · 推荐 6 步 (strength=1.0)",
                                            "Pika 官方针对多参考图锁脸与文生视频调优，大幅强化人物动态表现力、光影质感与电影级运镜，并将采样压缩至 6 步",
                                        ],
                                        [
                                            "🔥 Pika Flex · FL2VA 版 (Pika 第 2 款)",
                                            "loras/pika_h3_flex_fl2va_v1_bf16.safetensors",
                                            "专配 FL2VA 底模 · 推荐 6 步 (strength=1.0)",
                                            "Pika 官方针对首尾帧/图生视频 (I2V) 及镜头接续调优，彻底解决首帧僵硬问题，让静态图起步动作更自然饱满",
                                        ],
                                        [
                                            "⚡ LightX2V Turbo · Ref2V 版 (LightX2V 第 1 款)",
                                            "loras/minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors\n(及 lightx2v 仓库 v1.0_4step / v1.1_8step)",
                                            "专配 Ref2VA 底模 · 4 步或 8 步极速蒸馏",
                                            "LightX2V 团队出品的多参考图/文生视频步数蒸馏 LoRA，把原生 20 步直接压缩至 4 步或 8 步，速度暴涨 3~4 倍",
                                        ],
                                        [
                                            "⚡ LightX2V Turbo · FL2V 版 (LightX2V 第 2 款)",
                                            "loras/minimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors\nloras/minimax_h3_fl2v_turbo_8step_v1.0_comfyui_bf16.safetensors",
                                            "专配 FL2VA 底模 · 4 步 (768p) 或 8 步极速蒸馏",
                                            "LightX2V 团队出品的首尾帧图生视频 (I2V) 步数蒸馏 LoRA（含最新 v1.3_4step_768p 与 v1.1_8step），极速驱动高清首尾帧",
                                        ],
                                    ],
                                    "en": [
                                        [
                                            "🔥 Pika Flex · Ref2VA Edition (Pika LoRA #1)",
                                            "loras/pika_h3_flex_ref2va_v1_bf16.safetensors",
                                            "For Ref2VA Backbone · 6 steps (strength=1.0)",
                                            "Pika's official LoRA for Multi-Ref & T2V—boosts motion expressiveness, cinematic lighting, and camera dynamics in 6 steps",
                                        ],
                                        [
                                            "🔥 Pika Flex · FL2VA Edition (Pika LoRA #2)",
                                            "loras/pika_h3_flex_fl2va_v1_bf16.safetensors",
                                            "For FL2VA Backbone · 6 steps (strength=1.0)",
                                            "Pika's official LoRA for First/Last-Frame I2V & shot continuation—eliminates first-frame stiffness",
                                        ],
                                        [
                                            "⚡ LightX2V Turbo · Ref2V Edition (LightX2V LoRA #1)",
                                            "loras/minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors\n(plus lightx2v repo v1.0_4step / v1.1_8step)",
                                            "For Ref2VA Backbone · 4-Step or 8-Step Distillation",
                                            "LightX2V's step-distilled LoRA for Ref2VA/T2V—compresses 20-step native sampling to 4 or 8 steps",
                                        ],
                                        [
                                            "⚡ LightX2V Turbo · FL2V Edition (LightX2V LoRA #2)",
                                            "loras/minimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors\nloras/minimax_h3_fl2v_turbo_8step_v1.0_comfyui_bf16.safetensors",
                                            "For FL2VA Backbone · 4-Step (768p) or 8-Step Distillation",
                                            "LightX2V's step-distilled LoRA for First/Last-Frame I2V (including v1.3_4step_768p & v1.1_8step)",
                                        ],
                                    ],
                                },
                            },
                            {
                                "title": {
                                    "zh": "三、主干模型的 5 种裁剪与量化精度怎么选？",
                                    "en": "3. Choosing Among the 5 Quantization & Pruning Editions",
                                },
                                "desc": {
                                    "zh": "在官方仓库中，Ref2VA 和 FL2VA 各自提供了 6 个不同后缀的文件，按显存大小对号入座：",
                                    "en": "Inside Comfy-Org/MiniMax-H3, both Ref2VA and FL2VA come in 6 weight variants. Pick based on your GPU VRAM:",
                                },
                                "rows": {
                                    "zh": [
                                        [
                                            "⭐ Pruned INT8 ConvRot (最推荐)",
                                            "minimax_h3_ref2va_pruned_int8_convrot.safetensors\nminimax_h3_fl2va_pruned_int8_convrot.safetensors",
                                            "约 27.3 GB · 推荐 A100 40G / RTX 4090 / 5090",
                                            "剔除冗余层 + 正交旋转 INT8 量化，配合 comfy-kitchen 算子，速度最快且画质与 BF16 几乎无差",
                                        ],
                                        [
                                            "Pruned FP8 Scaled",
                                            "minimax_h3_ref2va_pruned_fp8_scaled.safetensors\nminimax_h3_fl2va_pruned_fp8_scaled.safetensors",
                                            "约 27 GB · 适合 40系/H100 原生 FP8 显卡",
                                            "FP8 缩放量化，无需旋转算子即可直接加载，精度略逊于 INT8 ConvRot",
                                        ],
                                        [
                                            "Pruned W6A8 (低显存优选)",
                                            "minimax_h3_ref2va_pruned_w6a8.safetensors\nminimax_h3_fl2va_pruned_w6a8.safetensors",
                                            "约 20 GB · 适合 24GB 显卡 (L4 / 3090 / 4090)",
                                            "6-bit 权重 + 8-bit 激活极限压缩，显著缓解 24GB 显卡的内存交换压力",
                                        ],
                                        [
                                            "Pruned BF16 (无损裁剪版)",
                                            "minimax_h3_ref2va_pruned_bf16.safetensors\nminimax_h3_fl2va_pruned_bf16.safetensors",
                                            "约 54 GB · 适合 A100 80GB / H100",
                                            "16 位半精度无损版（已剔除无效层），单卡 80GB 追求极限基准画质时使用",
                                        ],
                                        [
                                            "Full BF16 / Full INT8 (未裁剪原版)",
                                            "minimax_h3_ref2va_bf16.safetensors\nminimax_h3_ref2va_int8_convrot.safetensors",
                                            "体积偏大 · 仅供研究对比",
                                            "包含未裁剪的冗余层，日常推理一律优先选带 pruned 的版本",
                                        ],
                                    ],
                                    "en": [
                                        [
                                            "⭐ Pruned INT8 ConvRot (Best Overall)",
                                            "minimax_h3_ref2va_pruned_int8_convrot.safetensors\nminimax_h3_fl2va_pruned_int8_convrot.safetensors",
                                            "~27.3 GB · Best for A100 40G / RTX 4090 / 5090",
                                            "Pruned + Hadamard rotation INT8 quantization with comfy-kitchen kernels—near-BF16 quality at 2x speed",
                                        ],
                                        [
                                            "Pruned FP8 Scaled",
                                            "minimax_h3_ref2va_pruned_fp8_scaled.safetensors\nminimax_h3_fl2va_pruned_fp8_scaled.safetensors",
                                            "~27 GB · Ada / Hopper FP8 GPUs",
                                            "Standard FP8 scaled weights; works without rotation kernels",
                                        ],
                                        [
                                            "Pruned W6A8 (24GB Friendly)",
                                            "minimax_h3_ref2va_pruned_w6a8.safetensors\nminimax_h3_fl2va_pruned_w6a8.safetensors",
                                            "~20 GB · Best for 24GB GPUs (L4 / 3090 / 4090)",
                                            "6-bit weights / 8-bit activations to reduce offloading overhead on 24GB cards",
                                        ],
                                        [
                                            "Pruned BF16 (Lossless Pruned)",
                                            "minimax_h3_ref2va_pruned_bf16.safetensors\nminimax_h3_fl2va_pruned_bf16.safetensors",
                                            "~54 GB · For A100 80GB / H100",
                                            "Full 16-bit precision with dead layers pruned",
                                        ],
                                        [
                                            "Full BF16 / Full INT8 (Unpruned)",
                                            "minimax_h3_ref2va_bf16.safetensors\nminimax_h3_ref2va_int8_convrot.safetensors",
                                            "Largest · Archival / Research only",
                                            "Contains unpruned layers; always prefer the pruned variants for inference",
                                        ],
                                    ],
                                },
                            },
                            {
                                "title": {
                                    "zh": "四、大脑（Qwen3-VL 32B 编码器）与眼耳（VAE）版本",
                                    "en": "4. Vision/Text Encoder (Qwen3-VL 32B) & VAE Variants",
                                },
                                "desc": {
                                    "zh": "除了主干模型与双 LoRA，另外三个配套零件也有不同精度版本：",
                                    "en": "The supporting encoder and VAE components also offer targeted precision tiers:",
                                },
                                "rows": {
                                    "zh": [
                                        [
                                            "大脑 · INT8 ConvRot (A100 推荐)",
                                            "text_encoders/qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                                            "约 32 GB",
                                            "8 位旋转量化版 32B 视觉大脑，精准识别提示词与 <Picture 1> 人物特征",
                                        ],
                                        [
                                            "大脑 · NVFP4 AWQ (24GB 显卡救星)",
                                            "text_encoders/qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors",
                                            "约 18 GB",
                                            "4 位 AWQ 量化版，把 32B 编码器体积再砍近一半，Colab L4 (24GB) 强烈推荐",
                                        ],
                                        [
                                            "眼睛 · Video VAE / SOL VAE",
                                            "vae/minimax_h3_video_vae_int8_convrot.safetensors\nvae/minimax_h3_sol_vae_int8_convrot.safetensors",
                                            "画面解码器 (均有 int8 与 fp16 版)",
                                            "标准版 video_vae 最稳；sol_vae 针对高频纹理做了锐化调优",
                                        ],
                                        [
                                            "耳朵 · Audio VAE (唯一 FP32)",
                                            "vae/minimax_h3_audio_vae_fp32.safetensors",
                                            "全精度 FP32",
                                            "音频波形对精度极敏感，官方仅提供 FP32 全精度版以确保人声清澈无电流声",
                                        ],
                                    ],
                                    "en": [
                                        [
                                            "Brain · INT8 ConvRot (A100 Default)",
                                            "text_encoders/qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                                            "~32 GB",
                                            "INT8 rotation-quantized 32B VLM for high-fidelity prompt & reference image understanding",
                                        ],
                                        [
                                            "Brain · NVFP4 AWQ (For 24GB GPUs)",
                                            "text_encoders/qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors",
                                            "~18 GB",
                                            "4-bit AWQ quantized 32B VLM—cuts memory nearly in half for L4 / 3090 / 4090 GPUs",
                                        ],
                                        [
                                            "Eyes · Video VAE / SOL VAE",
                                            "vae/minimax_h3_video_vae_int8_convrot.safetensors\nvae/minimax_h3_sol_vae_int8_convrot.safetensors",
                                            "Video Decoder (int8 & fp16)",
                                            "Standard video_vae is default; sol_vae is tuned for crisper high-frequency detail",
                                        ],
                                        [
                                            "Ears · Audio VAE (FP32 Only)",
                                            "vae/minimax_h3_audio_vae_fp32.safetensors",
                                            "Full FP32 Precision",
                                            "Audio waveforms require full FP32 precision to avoid metallic quantization artifacts",
                                        ],
                                    ],
                                },
                            },
                        ],
                        "workflows": [
                            {
                                "key": "ref2va",
                                "name": "01_MiniMax_H3_Base_Ref2VA.json",
                                "label": {"zh": "01 · 官方 Ref2VA 多参考图工作流", "en": "01 · Official Ref2VA Multi-Ref"},
                                "badge": {"zh": "官方基准", "en": "Official Base"},
                                "desc": {
                                    "zh": "使用官方 minimax_h3_ref2va_pruned_int8_convrot 底模，连入参考图并在提示词写 <Picture 1> 锁定人物。",
                                    "en": "Uses official minimax_h3_ref2va_pruned_int8_convrot and <Picture 1> prompt binding.",
                                },
                                "steps": {
                                    "zh": [
                                        ["加载官方四大件", "UNET · CLIP · 双 VAE", "加载官方 ref2va_pruned_int8、Qwen3-VL 32B 与双 VAE"],
                                        ["参考图 + 提示词", "LoadImage #901", "图片接 ref_image_0，提示词写 <Picture 1> 绑定身份"],
                                        ["信噪比偏移与潜空间", "SigmaShift #142 · RefToVideo #131", "shift 12.0 / 3.0，864×480，124 帧"],
                                        ["20 步原生采样", "SamplerCustomAdvanced #125", "res_multistep 采样器 + simple 调度 (20步)"],
                                        ["双路解码合成", "VAEDecode · VAEDecodeAudio", "画面与声音分别解码，24fps 合成 MP4"],
                                    ],
                                    "en": [
                                        ["Load 4 Official Weights", "UNET · CLIP · Dual VAE", "Official ref2va_pruned_int8, Qwen3-VL 32B & Dual VAEs"],
                                        ["Ref Image + Prompt", "LoadImage #901", "Connect to ref_image_0 and reference via <Picture 1>"],
                                        ["Shift & Latent", "SigmaShift #142 · RefToVideo #131", "shift 12.0 / 3.0, 864×480, 124 frames"],
                                        ["20-Step Sampling", "SamplerCustomAdvanced #125", "res_multistep sampler + simple scheduler (20 steps)"],
                                        ["Dual Decode & Mux", "VAEDecode · VAEDecodeAudio", "Decode video & audio latents, mux at 24fps"],
                                    ],
                                },
                                "content": m01_ref2va,
                            },
                            {
                                "key": "t2v",
                                "name": "02_MiniMax_H3_Base_T2V.json",
                                "label": {"zh": "02 · 官方 T2V 纯文生音视频工作流", "en": "02 · Official Pure T2V Workflow"},
                                "badge": {"zh": "", "en": ""},
                                "desc": {
                                    "zh": "不连接任何参考图，直接用文字提示词驱动官方底座生成 5.1 秒原生有声视频。",
                                    "en": "No reference image required—generate 5.1s of native audio-synced video purely from text.",
                                },
                                "steps": {
                                    "zh": [
                                        ["加载官方四大件", "UNET · CLIP · 双 VAE", "加载官方 ref2va/fl2va INT8 主干、32B 编码器与双 VAE"],
                                        ["编写分镜提示词", "PrimitiveStringMultiline #1", "描述画面景别、人物动作与环境声音"],
                                        ["信噪比偏移与潜空间", "SigmaShift #142 · RefToVideo #131", "不连 ref_images 端口即为纯文生视频模式"],
                                        ["20 步原生采样", "SamplerCustomAdvanced #125", "res_multistep 采样器 + simple 调度 (20步)"],
                                        ["双路解码合成", "VAEDecode · VAEDecodeAudio", "画面与声音分别解码，24fps 合成 MP4"],
                                    ],
                                    "en": [
                                        ["Load 4 Official Weights", "UNET · CLIP · Dual VAE", "Official INT8 backbone, 32B VLM & Dual VAEs"],
                                        ["Text Prompt", "PrimitiveStringMultiline #1", "Describe camera framing, motion, and audio"],
                                        ["Shift & Latent", "SigmaShift #142 · RefToVideo #131", "Leave ref_images unconnected for pure T2V"],
                                        ["20-Step Sampling", "SamplerCustomAdvanced #125", "res_multistep sampler + simple scheduler (20 steps)"],
                                        ["Dual Decode & Mux", "VAEDecode · VAEDecodeAudio", "Decode video & audio latents, mux at 24fps"],
                                    ],
                                },
                                "content": m01_t2v,
                            },
                            {
                                "key": "fl2va",
                                "name": "03_MiniMax_H3_Base_FL2VA_I2V.json",
                                "label": {"zh": "03 · 官方 FL2VA 首帧图生音视频工作流", "en": "03 · Official FL2VA First-Frame I2V"},
                                "badge": {"zh": "", "en": ""},
                                "desc": {
                                    "zh": "使用官方 minimax_h3_fl2va_pruned_int8_convrot 底模 + MiniMaxH3AddGuide 锁定第 0 帧起始画面。",
                                    "en": "Uses official minimax_h3_fl2va_pruned_int8_convrot + MiniMaxH3AddGuide to animate from frame 0.",
                                },
                                "steps": {
                                    "zh": [
                                        ["加载 FL2VA 四大件", "UNET (FL2VA) · CLIP · 双 VAE", "加载官方 fl2va_pruned_int8 主干、32B 编码器与双 VAE"],
                                        ["加载起始首帧图", "LoadImage #902", "输入想要动起来的静态图或上一镜末帧"],
                                        ["注入第 0 帧引导", "MiniMaxH3AddGuide #903", "设置 frame_idx = 0 锁定起始帧"],
                                        ["20 步原生采样", "SamplerCustomAdvanced #125", "连接 AddGuide 输出的条件与潜变量采样"],
                                        ["双路解码合成", "VAEDecode · VAEDecodeAudio", "画面与声音分别解码，24fps 合成 MP4"],
                                    ],
                                    "en": [
                                        ["Load FL2VA Weights", "UNET (FL2VA) · CLIP · Dual VAE", "Official fl2va_pruned_int8 backbone, 32B VLM & Dual VAEs"],
                                        ["Load Start Image", "LoadImage #902", "Input the starting still image or previous shot's last frame"],
                                        ["Inject Frame-0 Guide", "MiniMaxH3AddGuide #903", "Set frame_idx = 0 to lock the starting frame"],
                                        ["20-Step Sampling", "SamplerCustomAdvanced #125", "Sample using conditioning & latent from AddGuide"],
                                        ["Dual Decode & Mux", "VAEDecode · VAEDecodeAudio", "Decode video & audio latents, mux at 24fps"],
                                    ],
                                },
                                "content": m01_fl2va,
                            },
                        ],
                        "colab": {
                            "name": "MiniMax_H3_Base_Colab.py",
                            "gpu": {"zh": "A100 40GB（推荐）/ L4 24GB（可设 TE_QUANT_MODE=nvfp4）", "en": "A100 40GB (Recommended) / L4 24GB (supports TE_QUANT_MODE=nvfp4)"},
                            "secrets": {
                                "zh": [
                                    ["DOWNLOAD_FL2VA", "可选，设为 1 时额外下载 fl2va_pruned_int8_convrot 底模"],
                                    ["TE_QUANT_MODE", "默认 int8；24GB 显卡可设为 nvfp4 切换 18GB 轻量版 32B 编码器"],
                                    ["CF_TUNNEL_TOKEN", "可选，不填则自动生成 trycloudflare.com 免费公网链接"],
                                ],
                                "en": [
                                    ["DOWNLOAD_FL2VA", "Optional: set to 1 to also download fl2va_pruned_int8_convrot"],
                                    ["TE_QUANT_MODE", "Default int8; set to nvfp4 on 24GB GPUs to use the 18GB 4-bit 32B encoder"],
                                    ["CF_TUNNEL_TOKEN", "Optional custom tunnel token; auto-generates free trycloudflare.com URL if omitted"],
                                ],
                            },
                            "content": m01_colab,
                        },
                        "models": {
                            "zh": [
                                ["1. 大脑 · 视觉/文本编码器", "text_encoders/", "qwen3vl_32b_minimax_h3_int8_convrot.safetensors", "Comfy-Org/MiniMax-H3", "320 亿参数多模态视觉语言大脑（24GB 卡可换 nvfp4_awq 版）"],
                                ["2. 心脏 · 官方扩散主干", "diffusion_models/", "minimax_h3_ref2va_pruned_int8_convrot.safetensors", "Comfy-Org/MiniMax-H3", "官方多参考图/文生视频主干（首尾帧可用 fl2va_pruned_int8_convrot）"],
                                ["3. 眼睛 · 视频 VAE", "vae/", "minimax_h3_video_vae_int8_convrot.safetensors", "Comfy-Org/MiniMax-H3", "将去噪完成的视频潜变量还原为 RGB 图像帧"],
                                ["4. 耳朵 · 音频 VAE", "vae/", "minimax_h3_audio_vae_fp32.safetensors", "Comfy-Org/MiniMax-H3", "全精度 FP32 音频解码器，将音频潜变量还原为清晰人声与环境音"],
                                ["5. Pika Flex 双 LoRA (2款)", "loras/", "pika_h3_flex_ref2va_v1_bf16.safetensors · pika_h3_flex_fl2va_v1_bf16.safetensors", "Comfy-Org/MiniMax-H3", "Pika 官方出品的 Ref2VA 与 FL2VA 专属表现力与 6 步加速 LoRA"],
                                ["6. LightX2V Turbo 双 LoRA (2款)", "loras/", "minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors · minimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors", "Comfy-Org/MiniMax-H3 · lightx2v/Minimax-h3-Turbo", "LightX2V 出品的 Ref2V 与 FL2V 4步/8步极速蒸馏 LoRA"],
                            ],
                            "en": [
                                ["1. Brain · Vision/Text Encoder", "text_encoders/", "qwen3vl_32b_minimax_h3_int8_convrot.safetensors", "Comfy-Org/MiniMax-H3", "32B multimodal VLM (use nvfp4_awq on 24GB GPUs)"],
                                ["2. Heart · Official Backbone", "diffusion_models/", "minimax_h3_ref2va_pruned_int8_convrot.safetensors", "Comfy-Org/MiniMax-H3", "Official Ref2VA/T2V backbone (or fl2va_pruned_int8_convrot for I2V)"],
                                ["3. Eyes · Video VAE", "vae/", "minimax_h3_video_vae_int8_convrot.safetensors", "Comfy-Org/MiniMax-H3", "Decodes video latents into RGB frames"],
                                ["4. Ears · Audio VAE", "vae/", "minimax_h3_audio_vae_fp32.safetensors", "Comfy-Org/MiniMax-H3", "Full FP32 audio decoder for clean speech and ambient sound"],
                                ["5. Pika Flex Dual LoRAs (2)", "loras/", "pika_h3_flex_ref2va_v1_bf16.safetensors · pika_h3_flex_fl2va_v1_bf16.safetensors", "Comfy-Org/MiniMax-H3", "Pika's official Ref2VA & FL2VA motion/expressiveness 6-step LoRAs"],
                                ["6. LightX2V Turbo Dual LoRAs (2)", "loras/", "minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors · minimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors", "Comfy-Org/MiniMax-H3 · lightx2v/Minimax-h3-Turbo", "LightX2V's Ref2V & FL2V 4-step / 8-step distillation LoRAs"],
                            ],
                        },
                        "params": {
                            "zh": [
                                ["MiniMaxH3SigmaShift (#142)", "shift_video / shift_audio", "12.0 / 3.0", "视频与音频去噪时间步偏移，黄金固定值，切勿填反"],
                                ["MiniMaxH3ReferenceToVideo (#131)", "width × height", "864×480 (竖屏 480×864)", "基础单轮采样最稳的 0.4MP 分辨率；不要在单轮里直接跑 1080p"],
                                ["MiniMaxH3ReferenceToVideo (#131)", "length", "124", "24fps 下对应约 5.1 秒有声视频"],
                                ["KSamplerSelect + BasicScheduler", "sampler / steps", "res_multistep / 20步 (挂 Pika 设 6步)", "不挂加速 LoRA 时跑 20 步；挂载 Pika Flex 后设为 6 步"],
                                ["Prompt (#1) + LoadImage (#901)", "<Picture N>", "ref_image_0 → <Picture 1>", "插槽编号从 0 开始，提示词引用必须从 <Picture 1> 开始"],
                                ["MiniMaxH3AddGuide (#903)", "frame_idx", "0", "首帧引导/接续模式下锁定第 0 帧起始图"],
                            ],
                            "en": [
                                ["MiniMaxH3SigmaShift (#142)", "shift_video / shift_audio", "12.0 / 3.0", "Timestep shift for video vs audio latents—never swap them"],
                                ["MiniMaxH3ReferenceToVideo (#131)", "width × height", "864×480 (or 480×864)", "~0.4MP native resolution for single-pass generation"],
                                ["MiniMaxH3ReferenceToVideo (#131)", "length", "124", "124 frames at 24fps ≈ 5.1 seconds"],
                                ["KSamplerSelect + BasicScheduler", "sampler / steps", "res_multistep / 20 steps (6 with Pika)", "20 steps native; 6 steps when using Pika Flex LoRA"],
                                ["Prompt (#1) + LoadImage (#901)", "<Picture N>", "ref_image_0 → <Picture 1>", "Input slot is 0-indexed, prompt tag is 1-indexed (<Picture 1>)"],
                                ["MiniMaxH3AddGuide (#903)", "frame_idx", "0", "Locks frame 0 to your input image in I2V / continuation mode"],
                            ],
                        },
                    },
                    # =========================================================================
                    # MODULE 02: MiniMax Official + Pika Flex LoRA One-Pass 6-Step Workflow
                    # =========================================================================
                    {
                        "id": "h3-pika-lora",
                        "status": "live",
                        "short": {"zh": "02 · MiniMax + Pika LoRA 一采", "en": "02 · MiniMax + Pika LoRA (Pass 1)"},
                        "title": {
                            "zh": "MiniMax 官方底模 + Pika H3 Flex 双 LoRA：6 步极速一采工作流实战",
                            "en": "MiniMax Official Base + Pika H3 Flex Dual LoRAs: 6-Step Fast One-Pass Workflows",
                        },
                        "tagline": {
                            "zh": "官方 Ref2VA INT8 底模 + Pika Flex (ref2va / fl2va) + fal 写实皮肤 LoRA · 6 步极速直出",
                            "en": "Official Ref2VA INT8 + Pika Flex (ref2va / fl2va) + fal Realism People LoRA · 6-Step Generation",
                        },
                        "summary": {
                            "zh": "当前项目主力一采方案：用官方 minimax_h3_ref2va_pruned_int8_convrot 底模，串联 fal Realism People (0.5) 消除塑料感，再按镜头模式挂载 Pika H3 Flex 双 LoRA（CUT/T2V 挂 ref2va，CONTINUE 接续挂 fl2va），仅需 6 步即可生成高动态有声视频。",
                            "en": "Production One-Pass setup: Official minimax_h3_ref2va_pruned_int8_convrot chained with fal Realism People (0.5) and Pika H3 Flex LoRAs (ref2va for CUT/T2V, fl2va for CONTINUE), generating expressive audio-video in just 6 steps.",
                        },
                        "tags": {
                            "zh": ["Pika Flex 6步一采", "ref2va & fl2va 双分支", "fal Realism People 0.5", "CUT / T2V / CONTINUE"],
                            "en": ["Pika Flex 6-Step", "ref2va & fl2va Dual LoRA", "fal Realism People 0.5", "CUT / T2V / CONTINUE"],
                        },
                        "stats": [
                            {"value": "6 步", "label": {"zh": "Pika Flex 极速一采步数", "en": "Pika Flex Fast Pass-1 Steps"}},
                            {"value": "2 款 Pika", "label": {"zh": "ref2va (切镜) · fl2va (接续)", "en": "ref2va (CUT) · fl2va (CONTINUE)"}},
                            {"value": "0.5 权重", "label": {"zh": "fal Realism People 真实皮肤", "en": "fal Realism People Skin Texture"}},
                            {"value": "0.4 MP", "label": {"zh": "864×480 黄金一采分辨率", "en": "864×480 Optimal Pass-1 Res"}},
                        ],
                        "hfRepos": [
                            {
                                "name": "Comfy-Org/MiniMax-H3",
                                "url": "https://huggingface.co/Comfy-Org/MiniMax-H3",
                                "desc": {"zh": "官方 Ref2VA 主干与 Pika Flex 双 LoRA 所在仓库", "en": "Official Ref2VA Backbone & Pika Flex Dual LoRAs"},
                            },
                            {
                                "name": "fal/MiniMax-H3-Realism-People-LoRA",
                                "url": "https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA",
                                "desc": {"zh": "fal 出品的去塑料感写实人像皮肤 LoRA", "en": "fal's Photorealistic Skin & People LoRA"},
                            },
                            {
                                "name": "lightx2v/Minimax-h3-Turbo",
                                "url": "https://huggingface.co/lightx2v/Minimax-h3-Turbo",
                                "desc": {"zh": "LightX2V 4步/8步 Turbo 蒸馏 LoRA 备选仓库", "en": "LightX2V 4/8-Step Turbo Alternative LoRAs"},
                            },
                        ],
                        "versionGroups": [
                            {
                                "title": {
                                    "zh": "一、MiniMax 官方底模 + Pika Flex 双 LoRA 串联拓扑",
                                    "en": "1. MiniMax Official Backbone + Pika Flex Dual LoRA Chain Topology",
                                },
                                "desc": {
                                    "zh": "在 UNETLoader (#127) 与 MiniMaxH3SigmaShift (#142) 之间通过 LoraLoaderModelOnly 串联两级 LoRA，并根据分镜模式自动切换 Pika LoRA 分支：",
                                    "en": "Chain two LoraLoaderModelOnly nodes between UNETLoader (#127) and MiniMaxH3SigmaShift (#142), switching the Pika LoRA by shot mode:",
                                },
                                "rows": {
                                    "zh": [
                                        [
                                            "第 1 级 · fal 写实人像 LoRA (#943)",
                                            "h3-realism-people-t2v-i2v-r2v.safetensors",
                                            "strength_model = 0.5",
                                            "来自 fal/MiniMax-H3-Realism-People-LoRA，消除人物面部油光与 AI 塑料感，保留真实毛孔",
                                        ],
                                        [
                                            "第 2 级 (A) · Pika Flex Ref2VA (#944)",
                                            "pika_h3_flex_ref2va_v1_bf16.safetensors",
                                            "strength_model = 1.0 · 6 步",
                                            "用于 CUT（多参考图切镜）与 T2V（纯文生视频），6 步内赋予画面极强的动态张力与锁脸精度",
                                        ],
                                        [
                                            "第 2 级 (B) · Pika Flex FL2VA (#944)",
                                            "pika_h3_flex_fl2va_v1_bf16.safetensors",
                                            "strength_model = 1.0 · 6 步",
                                            "用于 CONTINUE（上一镜末帧无缝接续 + 母图锁脸），让第 0 帧起始画面顺滑运动不僵硬",
                                        ],
                                        [
                                            "备选方案 · LightX2V Turbo 双 LoRA",
                                            "minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors\nminimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors",
                                            "strength_model = 1.0 · 4 步 / 8 步",
                                            "追求极致 4 步出片速度时，可将 #944 替换为对应的 LightX2V Ref2V 或 FL2V Turbo LoRA",
                                        ],
                                    ],
                                    "en": [
                                        [
                                            "Stage 1 · fal Realism People (#943)",
                                            "h3-realism-people-t2v-i2v-r2v.safetensors",
                                            "strength_model = 0.5",
                                            "From fal/MiniMax-H3-Realism-People-LoRA—removes waxy AI skin and restores natural pores",
                                        ],
                                        [
                                            "Stage 2 (A) · Pika Flex Ref2VA (#944)",
                                            "pika_h3_flex_ref2va_v1_bf16.safetensors",
                                            "strength_model = 1.0 · 6 steps",
                                            "Used for CUT (Multi-Ref) and T2V modes—delivers punchy motion and strong face lock in 6 steps",
                                        ],
                                        [
                                            "Stage 2 (B) · Pika Flex FL2VA (#944)",
                                            "pika_h3_flex_fl2va_v1_bf16.safetensors",
                                            "strength_model = 1.0 · 6 steps",
                                            "Used for CONTINUE (shot continuation via MiniMaxH3AddGuide)—smooths motion onset from frame 0",
                                        ],
                                        [
                                            "Alternative · LightX2V Turbo Dual LoRAs",
                                            "minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors\nminimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors",
                                            "strength_model = 1.0 · 4 or 8 steps",
                                            "Swap #944 for LightX2V Ref2V or FL2V Turbo when 4-step ultra-fast draft speed is desired",
                                        ],
                                    ],
                                },
                            },
                        ],
                        "workflows": [
                            {
                                "key": "pika-cut",
                                "name": "01_MiniMax_Pika_OnePass_CUT.json",
                                "label": {"zh": "01 · CUT 多参考图 + Pika Ref2VA (6步一采)", "en": "01 · CUT Multi-Ref + Pika Ref2VA (6-Step)"},
                                "badge": {"zh": "项目主力一采", "en": "Main Pass-1"},
                                "desc": {
                                    "zh": "官方 Ref2VA 底模 + fal Realism (0.5) + Pika Flex Ref2VA (1.0)，输入角色设定图 <Picture 1>，6 步极速生成。",
                                    "en": "Official Ref2VA + fal Realism (0.5) + Pika Flex Ref2VA (1.0) with <Picture 1> character lock in 6 steps.",
                                },
                                "steps": {
                                    "zh": [
                                        ["加载官方底模", "UNETLoader #127", "加载 minimax_h3_ref2va_pruned_int8_convrot.safetensors"],
                                        ["双 LoRA 串联", "LoraLoader #943 → #944", "串联 fal Realism (0.5) 与 pika_h3_flex_ref2va (1.0)"],
                                        ["参考图锁脸", "LoadImage #901 → RefToVideo #131", "输入主角设定图，提示词写 <Picture 1> 锁死五官"],
                                        ["6 步极速采样", "BasicScheduler #124 · Sampler #125", "res_multistep + simple，步数设为 6 步 (0.4MP)"],
                                        ["音画解码直出", "VAEDecode #122 · VAEDecodeAudio #121", "解码 864×480 24fps 有声试片 MP4"],
                                    ],
                                    "en": [
                                        ["Load Official UNET", "UNETLoader #127", "minimax_h3_ref2va_pruned_int8_convrot.safetensors"],
                                        ["Chain Dual LoRAs", "LoraLoader #943 → #944", "Chain fal Realism (0.5) + pika_h3_flex_ref2va (1.0)"],
                                        ["Lock Identity", "LoadImage #901 → RefToVideo #131", "Bind character sheet via <Picture 1>"],
                                        ["6-Step Fast Sample", "BasicScheduler #124 · Sampler #125", "res_multistep + simple, 6 steps at 0.4MP"],
                                        ["Decode AV MP4", "VAEDecode #122 · VAEDecodeAudio #121", "Output 864×480 24fps audio-video draft"],
                                    ],
                                },
                                "content": m02_cut,
                            },
                            {
                                "key": "pika-t2v",
                                "name": "02_MiniMax_Pika_OnePass_T2V.json",
                                "label": {"zh": "02 · T2V 纯文生视频 + Pika Ref2VA (6步一采)", "en": "02 · T2V Pure Text + Pika Ref2VA (6-Step)"},
                                "badge": {"zh": "", "en": ""},
                                "desc": {
                                    "zh": "无需参考图，直接用 Pika Flex Ref2VA 6 步生成空镜、特效或大场景有声镜头。",
                                    "en": "Zero reference images—generate establishing shots or VFX scenes with audio in 6 steps.",
                                },
                                "steps": {
                                    "zh": [
                                        ["加载官方底模", "UNETLoader #127", "加载 minimax_h3_ref2va_pruned_int8_convrot.safetensors"],
                                        ["双 LoRA 串联", "LoraLoader #943 → #944", "串联 fal Realism (0.5) 与 pika_h3_flex_ref2va (1.0)"],
                                        ["纯文本条件", "RefToVideo #131 (无 ref_images)", "仅输入文本提示词与环境音效描述"],
                                        ["6 步极速采样", "BasicScheduler #124 · Sampler #125", "res_multistep + simple，6 步极速去噪"],
                                        ["音画解码直出", "VAEDecode #122 · VAEDecodeAudio #121", "合成 24fps 原生有声视频"],
                                    ],
                                    "en": [
                                        ["Load Official UNET", "UNETLoader #127", "minimax_h3_ref2va_pruned_int8_convrot.safetensors"],
                                        ["Chain Dual LoRAs", "LoraLoader #943 → #944", "Chain fal Realism (0.5) + pika_h3_flex_ref2va (1.0)"],
                                        ["Pure Text Prompt", "RefToVideo #131 (No ref_images)", "Text prompt describing motion and audio"],
                                        ["6-Step Fast Sample", "BasicScheduler #124 · Sampler #125", "res_multistep + simple, 6 steps"],
                                        ["Decode AV MP4", "VAEDecode #122 · VAEDecodeAudio #121", "Mux 24fps audio-video MP4"],
                                    ],
                                },
                                "content": m02_t2v,
                            },
                            {
                                "key": "pika-continue",
                                "name": "03_MiniMax_Pika_OnePass_CONTINUE.json",
                                "label": {"zh": "03 · CONTINUE 跨镜接续 + Pika FL2VA (6步一采)", "en": "03 · CONTINUE Shot Extension + Pika FL2VA (6-Step)"},
                                "badge": {"zh": "长镜头接续", "en": "Shot Continuation"},
                                "desc": {
                                    "zh": "同时输入角色母图 (#901 锁脸防崩) 与上一镜末帧 (#902 + MiniMaxH3AddGuide 锁首帧)，并切换为 pika_h3_flex_fl2va LoRA。",
                                    "en": "Combines character mother ref (#901) with previous shot's last frame (#902 + MiniMaxH3AddGuide) using pika_h3_flex_fl2va.",
                                },
                                "steps": {
                                    "zh": [
                                        ["切换 FL2VA Pika LoRA", "LoraLoader #944", "加载 pika_h3_flex_fl2va_v1_bf16.safetensors (1.0)"],
                                        ["双图输入防漂移", "LoadImage #901 (母图) + #902 (首帧)", "#901 接 RefToVideo 锁长相，#902 接 AddGuide 锁首帧"],
                                        ["第 0 帧引导注入", "MiniMaxH3AddGuide #903", "frame_idx = 0，无缝衔接上一镜头尾帧"],
                                        ["6 步极速采样", "SamplerCustomAdvanced #125", "6 步完成跨镜连贯动作与声音生成"],
                                        ["音画解码直出", "VAEDecode #122 · VAEDecodeAudio #121", "输出无缝接续镜头 MP4"],
                                    ],
                                    "en": [
                                        ["Switch to FL2VA LoRA", "LoraLoader #944", "Load pika_h3_flex_fl2va_v1_bf16.safetensors (1.0)"],
                                        ["Dual Image Inputs", "LoadImage #901 (Ref) + #902 (Start)", "#901 locks identity; #902 locks frame 0"],
                                        ["Frame-0 Guide", "MiniMaxH3AddGuide #903", "frame_idx = 0 for seamless shot continuation"],
                                        ["6-Step Fast Sample", "SamplerCustomAdvanced #125", "6 steps with continuous motion and audio"],
                                        ["Decode AV MP4", "VAEDecode #122 · VAEDecodeAudio #121", "Output seamlessly extended shot"],
                                    ],
                                },
                                "content": m02_cont,
                            },
                        ],
                        "colab": {
                            "name": "MiniMax_Pika_OnePass_Colab.py",
                            "gpu": {"zh": "A100 40GB（推荐）/ L4 24GB（设 TE_QUANT_MODE=nvfp4）", "en": "A100 40GB (Recommended) / L4 24GB (set TE_QUANT_MODE=nvfp4)"},
                            "secrets": {
                                "zh": [
                                    ["TE_QUANT_MODE", "默认 int8；24GB 显卡可设为 nvfp4 使用 4-bit 32B 编码器"],
                                    ["CF_TUNNEL_TOKEN", "可选，绑定自定义 Cloudflare 固定域名隧道"],
                                    ["HF_TOKEN", "可选，加速 HuggingFace 权重拉取"],
                                ],
                                "en": [
                                    ["TE_QUANT_MODE", "Default int8; set to nvfp4 on 24GB GPUs"],
                                    ["CF_TUNNEL_TOKEN", "Optional custom Cloudflare tunnel token"],
                                    ["HF_TOKEN", "Optional HuggingFace token for faster downloads"],
                                ],
                            },
                            "content": m02_colab,
                        },
                        "models": {
                            "zh": [
                                ["1. 官方扩散主干", "diffusion_models/", "minimax_h3_ref2va_pruned_int8_convrot.safetensors", "Comfy-Org/MiniMax-H3", "官方 Ref2VA 裁剪 INT8 主干，兼顾 CUT、T2V 与 CONTINUE"],
                                ["2. Pika Flex Ref2VA LoRA", "loras/", "pika_h3_flex_ref2va_v1_bf16.safetensors", "Comfy-Org/MiniMax-H3", "CUT / T2V 模式挂载 (strength=1.0)，6 步生成高动态画面"],
                                ["3. Pika Flex FL2VA LoRA", "loras/", "pika_h3_flex_fl2va_v1_bf16.safetensors", "Comfy-Org/MiniMax-H3", "CONTINUE 首帧接续模式挂载 (strength=1.0)，消除首帧僵硬"],
                                ["4. fal 写实人像 LoRA", "loras/", "h3-realism-people-t2v-i2v-r2v.safetensors", "fal/MiniMax-H3-Realism-People-LoRA", "串联在 Pika LoRA 之前 (strength=0.5)，消除皮肤塑料油腻感"],
                                ["5. 视觉/文本编码器", "text_encoders/", "qwen3vl_32b_minimax_h3_int8_convrot.safetensors", "Comfy-Org/MiniMax-H3", "32B 视觉语言编码器（24GB 卡可用 nvfp4_awq）"],
                                ["6. 视频与音频双 VAE", "vae/", "minimax_h3_video_vae_int8_convrot.safetensors · minimax_h3_audio_vae_fp32.safetensors", "Comfy-Org/MiniMax-H3", "画面解码器 (INT8) 与全精度音频解码器 (FP32)"],
                            ],
                            "en": [
                                ["1. Official Backbone", "diffusion_models/", "minimax_h3_ref2va_pruned_int8_convrot.safetensors", "Comfy-Org/MiniMax-H3", "Official pruned INT8 Ref2VA backbone"],
                                ["2. Pika Flex Ref2VA LoRA", "loras/", "pika_h3_flex_ref2va_v1_bf16.safetensors", "Comfy-Org/MiniMax-H3", "For CUT / T2V modes (strength=1.0, 6 steps)"],
                                ["3. Pika Flex FL2VA LoRA", "loras/", "pika_h3_flex_fl2va_v1_bf16.safetensors", "Comfy-Org/MiniMax-H3", "For CONTINUE / I2V modes (strength=1.0, 6 steps)"],
                                ["4. fal Realism People LoRA", "loras/", "h3-realism-people-t2v-i2v-r2v.safetensors", "fal/MiniMax-H3-Realism-People-LoRA", "Chained before Pika LoRA (strength=0.5) for natural skin"],
                                ["5. Vision/Text Encoder", "text_encoders/", "qwen3vl_32b_minimax_h3_int8_convrot.safetensors", "Comfy-Org/MiniMax-H3", "32B VLM encoder"],
                                ["6. Video & Audio VAEs", "vae/", "minimax_h3_video_vae_int8_convrot.safetensors · minimax_h3_audio_vae_fp32.safetensors", "Comfy-Org/MiniMax-H3", "INT8 Video VAE + FP32 Audio VAE"],
                            ],
                        },
                        "params": {
                            "zh": [
                                ["LoraLoaderModelOnly (#943)", "strength_model", "0.5", "fal Realism People 写实皮肤权重，0.5 甜点值自然不僵硬"],
                                ["LoraLoaderModelOnly (#944)", "strength_model", "1.0", "Pika H3 Flex LoRA 标准权重，CUT/T2V 选 ref2va，CONTINUE 选 fl2va"],
                                ["BasicScheduler (#124)", "steps / scheduler", "6 / simple", "挂载 Pika Flex 后仅需 6 步即可收敛，比原生 20 步快 3 倍以上"],
                                ["MiniMaxH3SigmaShift (#142)", "shift_video / shift_audio", "12.0 / 3.0", "挂载在双 LoRA 之后，固定 12.0 / 3.0"],
                            ],
                            "en": [
                                ["LoraLoaderModelOnly (#943)", "strength_model", "0.5", "Sweet-spot weight for fal Realism People LoRA"],
                                ["LoraLoaderModelOnly (#944)", "strength_model", "1.0", "Full weight for Pika H3 Flex (ref2va for CUT/T2V, fl2va for CONTINUE)"],
                                ["BasicScheduler (#124)", "steps / scheduler", "6 / simple", "6 steps with Pika Flex—over 3x faster than 20-step native"],
                                ["MiniMaxH3SigmaShift (#142)", "shift_video / shift_audio", "12.0 / 3.0", "Placed after both LoRAs; keep at 12.0 / 3.0"],
                            ],
                        },
                    },
                    # =========================================================================
                    # MODULE 03: Standalone Upload Video -> NVIDIA Open-H3 2K Refine
                    # =========================================================================
                    {
                        "id": "h3-standalone-2k",
                        "status": "live",
                        "short": {"zh": "03 · 单独上传视频 2K 精修", "en": "03 · Standalone Video 2K Refine"},
                        "title": {
                            "zh": "单独上传视频 2K 超分精修：英伟达 Open-H3-Regenerate-2K 独立工作流与脚本",
                            "en": "Standalone Video to 2K Refinement: NVIDIA Open-H3-Regenerate-2K Workflows & Colab",
                        },
                        "tagline": {
                            "zh": "上传任意低清视频 (draft.mp4) · 3D 潜空间放大 · 3 步 Euler 2K 重绘毛孔细节 · 原声无损保留",
                            "en": "Upload any draft MP4 · 3D Latent Upscale · 3-Step Euler 2K Detail Regeneration · Lossless Audio Passthrough",
                        },
                        "summary": {
                            "zh": "已经有了一采生成的 480p/768p 草稿视频（甚至其他模型生成的片段），想单独上传精修到 1080p / 2K（2560×1440）？本模块提供独立的英伟达 Open-H3-Regenerate-2K 标准版、人脸区域保脸版（FaceRegion）与 API 版三套工作流及专属 Colab 脚本。",
                            "en": "Already have a 480p/768p draft MP4 and want to refine it standalone to 1080p or 2K (2560×1440)? Includes Standard 2K, Face-Preserving (FaceRegion), and API-format workflows plus a dedicated Colab script.",
                        },
                        "tags": {
                            "zh": ["NVIDIA Open-H3-Regenerate-2K", "单独上传 draft.mp4", "标准版 & 保脸版", "3步 Euler 极速重绘"],
                            "en": ["NVIDIA Open-H3-Regenerate-2K", "Upload draft.mp4", "Standard & Face-Lock", "3-Step Euler Refine"],
                        },
                        "stats": [
                            {"value": "2560×1440", "label": {"zh": "支持 1080p / 2K / 4K 输出", "en": "1080p / 2K / 4K Output"}},
                            {"value": "3 步", "label": {"zh": "Euler 极速精修采样", "en": "3-Step Euler Refinement"}},
                            {"value": "0.78", "label": {"zh": "保脸/锁动作 start_sigma", "en": "Motion/Face-Lock start_sigma"}},
                            {"value": "100%", "label": {"zh": "原视频音轨无损接回", "en": "Lossless Original Audio"}},
                        ],
                        "hfRepos": [
                            {
                                "name": "Efficient-Large-Model/Open-H3-Regenerate-2K",
                                "url": "https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K",
                                "desc": {"zh": "英伟达官方 Open-H3 2K 精修 LoRA / Sharp 50层锐化曲线 / Fast VAE", "en": "NVIDIA Official 2K Refine LoRA / Sharp 50 Curves / Fast VAE"},
                            },
                            {
                                "name": "LBH-123-AI/Minimax_h3_latent_Upscaler",
                                "url": "https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler",
                                "desc": {"zh": "3D 潜变量放大器权重 (minimax_h3_latent_upscaler_3d_conv_v1)", "en": "3D Latent Upscaler Weights"},
                            },
                            {
                                "name": "Comfy-Org/MiniMax-H3",
                                "url": "https://huggingface.co/Comfy-Org/MiniMax-H3",
                                "desc": {"zh": "H3 基础底模、Qwen3-VL 32B 与音视频 VAE 官方仓库", "en": "Official H3 Backbones, 32B VLM & VAEs"},
                            },
                            {
                                "name": "rdh9616/ComfyUI-Open-H3-Regenerate",
                                "url": "https://github.com/rdh9616/ComfyUI-Open-H3-Regenerate",
                                "desc": {"zh": "Open-H3 2K 精修 ComfyUI 节点插件", "en": "ComfyUI Custom Nodes for Open-H3 Regenerate"},
                            },
                            {
                                "name": "BennyDaBall930/ComfyUI-Open-H3-FaceRegion",
                                "url": "https://github.com/BennyDaBall930/ComfyUI-Open-H3-FaceRegion",
                                "desc": {"zh": "保脸版专用人脸区域检测与局部降噪控制节点", "en": "Face Region Masking Node for Identity Preservation"},
                            },
                        ],
                        "versionGroups": [
                            {
                                "title": {
                                    "zh": "一、单独上传视频 2K 精修的三种模式怎么选？",
                                    "en": "1. Choosing Among the 3 Standalone 2K Refinement Modes",
                                },
                                "desc": {
                                    "zh": "针对风景大场面、特写口播保脸以及后端批量调用，我们准备了三套针对性的独立精修工作流：",
                                    "en": "Pick the workflow that matches your shot type—full-scene detail, close-up face preservation, or clean API pipeline:",
                                },
                                "rows": {
                                    "zh": [
                                        [
                                            "01 · 标准满细节 2K 版 (Standard)",
                                            "01_OpenH3_2K_Standalone_Standard.json",
                                            "OpenH3RegenLora + Sharp 50层曲线",
                                            "全图高细节重绘（默认 start_sigma=0.909 或手动调 0.78），适合奇幻巨兽、风景空镜、全身动作镜头",
                                        ],
                                        [
                                            "02 · 人脸保护 2K 版 (FaceLock) ⭐",
                                            "02_OpenH3_2K_Standalone_FaceLock.json",
                                            "ComfyUI-Open-H3-FaceRegion + r384 LoRA",
                                            "自动检测人脸区域并降低面部重绘幅度 (FACE_STRENGTH=0.60~0.78)，背景升 2K 同时严格保住主角五官不变脸",
                                        ],
                                        [
                                            "03 · 极简 API 单视频二采版",
                                            "03_OpenH3_2K_Standalone_API.json",
                                            "MinimaxH3LatentUpscaler3D (2.0x) + start_sigma=0.78",
                                            "与项目工作台完全一致的 API 结构：保持原视频比例 2.0 倍等比潜空间放大 + 3 步 Euler (0.78) 极速精修",
                                        ],
                                    ],
                                    "en": [
                                        [
                                            "01 · Standard Full-Detail 2K",
                                            "01_OpenH3_2K_Standalone_Standard.json",
                                            "OpenH3RegenLora + Sharp 50 Curves",
                                            "Full-frame detail regeneration—ideal for monsters, landscapes, VFX, and wide action shots",
                                        ],
                                        [
                                            "02 · Face-Preserving 2K (FaceLock) ⭐",
                                            "02_OpenH3_2K_Standalone_FaceLock.json",
                                            "ComfyUI-Open-H3-FaceRegion + r384 LoRA",
                                            "Detects faces and lowers facial redraw strength (0.60–0.78) so close-up characters never lose their identity",
                                        ],
                                        [
                                            "03 · Clean API Single-Video Refine",
                                            "03_OpenH3_2K_Standalone_API.json",
                                            "MinimaxH3LatentUpscaler3D (2.0x) + start_sigma=0.78",
                                            "Clean API graph: 2.0x proportional 3D latent upscale + 3-step Euler (start_sigma=0.78) refinement",
                                        ],
                                    ],
                                },
                            },
                        ],
                        "workflows": [
                            {
                                "key": "standalone-facelock",
                                "name": "02_OpenH3_2K_Standalone_FaceLock.json",
                                "label": {"zh": "01 · 单独上传视频 2K 保脸精修工作流 (推荐)", "en": "01 · Standalone 2K Face-Lock Workflow (Recommended)"},
                                "badge": {"zh": "不换脸首选", "en": "Face-Lock"},
                                "desc": {
                                    "zh": "在 LoadVideo 节点上传 draft.mp4，自动识别人脸区域降低重绘幅度，在升至 1080p/2K 的同时锁死主角五官。",
                                    "en": "Upload draft.mp4 in LoadVideo; automatically masks facial regions so 2K refinement preserves exact character identity.",
                                },
                                "steps": {
                                    "zh": [
                                        ["上传草稿视频", "LoadVideo #1 → GetVideoComponents #2", "上传低清视频 draft.mp4，自动拆出图像帧、原声与帧率"],
                                        ["尺寸对齐与编码", "OpenH3RegenPrepareDraft #3 → VAEEncode #5", "统一帧尺寸并编码为 H3 视频潜变量"],
                                        ["3D 潜空间放大", "OpenH3RegenUpscale #6", "在潜空间直接放大至 1080p 或 2K (2560×1440)"],
                                        ["人脸检测与 3 步精修", "FaceRegion + OpenH3RegenSigmas", "人脸区域降权保护，3 步 Euler 补齐高清皮肤与发丝细节"],
                                        ["无损合回原声", "OpenH3RegenFinish → SaveVideo", "裁齐帧数并将原视频音轨 100% 无损合回"],
                                    ],
                                    "en": [
                                        ["Upload Draft MP4", "LoadVideo #1 → GetVideoComponents #2", "Upload draft.mp4 and split frames, audio, and fps"],
                                        ["Align & Encode", "OpenH3RegenPrepareDraft #3 → VAEEncode #5", "Align dimensions and encode into H3 video latent"],
                                        ["3D Latent Upscale", "OpenH3RegenUpscale #6", "Upscale latent directly to 1080p or 2K (2560×1440)"],
                                        ["Face Mask + 3-Step Refine", "FaceRegion + OpenH3RegenSigmas", "Protect facial identity while refining 2K detail in 3 Euler steps"],
                                        ["Restore Audio & Save", "OpenH3RegenFinish → SaveVideo", "Trim frame count and mux original audio losslessly"],
                                    ],
                                },
                                "content": m03_face,
                            },
                            {
                                "key": "standalone-standard",
                                "name": "01_OpenH3_2K_Standalone_Standard.json",
                                "label": {"zh": "02 · 单独上传视频 2K 标准满细节工作流", "en": "02 · Standalone 2K Full-Detail Workflow"},
                                "badge": {"zh": "大场面/奇幻", "en": "Max Detail"},
                                "desc": {
                                    "zh": "使用 OpenH3RegenLora + sharp_curve_branches 50 层高频锐化曲线，全画幅爆发毛孔、鳞片、织物与风景纹理。",
                                    "en": "Uses OpenH3RegenLora + 50-layer sharp_curve_branches for maximum full-frame texture regeneration.",
                                },
                                "steps": {
                                    "zh": [
                                        ["上传草稿视频", "LoadVideo #1 → GetVideoComponents #2", "上传待超分的低清视频 draft.mp4"],
                                        ["编码与 3D 放大", "VAEEncode #5 → OpenH3RegenUpscale", "编码潜变量并放大至 1080p / 2K"],
                                        ["挂载 2K 精修 + 50层锐化", "OpenH3RegenLora #7", "加载 open_h3_regenerate_2k_lora 与 sharp_curve_branches"],
                                        ["3 步 Euler 重绘", "OpenH3RegenSigmas → SamplerCustomAdvanced", "3 步极速生成 2K 锐利高频纹理"],
                                        ["Fast VAE 解码合成", "VAEDecode → OpenH3RegenFinish", "解码高清帧并合回原视频声音"],
                                    ],
                                    "en": [
                                        ["Upload Draft MP4", "LoadVideo #1 → GetVideoComponents #2", "Select draft.mp4 to refine"],
                                        ["Encode & 3D Upscale", "VAEEncode #5 → OpenH3RegenUpscale", "Encode latent and upscale to 1080p / 2K"],
                                        ["Load 2K LoRA + 50 Curves", "OpenH3RegenLora #7", "open_h3_regenerate_2k_lora + sharp_curve_branches"],
                                        ["3-Step Euler Refine", "OpenH3RegenSigmas → SamplerCustomAdvanced", "3 Euler steps for razor-sharp 2K texture"],
                                        ["Decode & Mux Audio", "VAEDecode → OpenH3RegenFinish", "Decode frames and re-attach original audio"],
                                    ],
                                },
                                "content": m03_std,
                            },
                            {
                                "key": "standalone-api",
                                "name": "03_OpenH3_2K_Standalone_API.json",
                                "label": {"zh": "03 · 单视频 2.0x 等比放大二采 API 工作流", "en": "03 · 2.0x Proportional Upscale API Workflow"},
                                "badge": {"zh": "API 极简版", "en": "Clean API"},
                                "desc": {
                                    "zh": "保持输入视频原始宽高比（如 16:9 或 9:16），直接按 2.0 倍等比放大潜空间并跑 3 步 Euler (start_sigma=0.78) 精修。",
                                    "en": "Preserves original aspect ratio (16:9 or 9:16), scales latent 2.0x, and refines in 3 Euler steps (start_sigma=0.78).",
                                },
                                "steps": {
                                    "zh": [
                                        ["读取原视频", "LoadVideo #b15_load_video", "加载任意比例的一采草稿视频"],
                                        ["保持原尺寸编码", "OpenH3RegenPrepareDraft (keep) → VAEEncode", "不强制拉伸比例，按 32 倍数对齐后编码"],
                                        ["2.0x 等比 3D 放大", "MinimaxH3LatentUpscaler3D #b15_upscale", "mode.scale = 2.0（480p 直升 1080p+）"],
                                        ["0.78 锁动作 3 步精修", "OpenH3RegenLora + OpenH3RegenSigmas", "start_sigma = 0.78 严锁原片动作与脸型，3 步补细节"],
                                        ["合回原声输出", "OpenH3RegenFinish → SaveVideo", "输出精修后的高清有声成片"],
                                    ],
                                    "en": [
                                        ["Load Source Video", "LoadVideo #b15_load_video", "Load draft video of any aspect ratio"],
                                        ["Keep Aspect & Encode", "OpenH3RegenPrepareDraft (keep) → VAEEncode", "Snap to 32 without aspect distortion"],
                                        ["2.0x 3D Latent Scale", "MinimaxH3LatentUpscaler3D #b15_upscale", "mode.scale = 2.0"],
                                        ["0.78 3-Step Refine", "OpenH3RegenLora + OpenH3RegenSigmas", "start_sigma = 0.78 locks motion and identity"],
                                        ["Re-attach Audio", "OpenH3RegenFinish → SaveVideo", "Save refined high-res MP4 with original audio"],
                                    ],
                                },
                                "content": m03_api,
                            },
                        ],
                        "colab": {
                            "name": "OpenH3_Standalone_2K_Colab.py",
                            "gpu": {"zh": "A100 40GB（推荐 1080p）/ A100 80GB 或 H100（推荐 2K/4K）", "en": "A100 40GB (1080p) / A100 80GB or H100 (2K/4K)"},
                            "secrets": {
                                "zh": [
                                    ["FACE_MASK", "默认 1（启用保脸版工作流）；设为 0 切换标准满细节版"],
                                    ["FACE_STRENGTH", "默认 0.78（面部重绘强度，越低越保脸，越高细节越多）"],
                                    ["RES", "默认 auto（≥60GB 显存选 2k，40GB 显存自动选 1080p）"],
                                ],
                                "en": [
                                    ["FACE_MASK", "Default 1 (Face-Lock mode); set to 0 for Standard full-detail mode"],
                                    ["FACE_STRENGTH", "Default 0.78 (facial redraw strength; lower preserves identity more)"],
                                    ["RES", "Default auto (2k on ≥60GB VRAM, 1080p on 40GB VRAM)"],
                                ],
                            },
                            "content": m03_colab,
                        },
                        "models": {
                            "zh": [
                                ["1. Open-H3 2K 精修 LoRA", "loras/", "lora/open_h3_regenerate_2k_lora.safetensors", "Efficient-Large-Model/Open-H3-Regenerate-2K", "英伟达开源的 2K 二采精修核心合并 LoRA（含 Refiner + LightX2V Turbo）"],
                                ["2. Sharp 50层高频锐化曲线", "loras/", "lora/sharp_curve_branches.safetensors", "Efficient-Large-Model/Open-H3-Regenerate-2K", "50 层逐层高频时间步偏移分支，让皮肤毛孔、发丝与鳞片极度锐利"],
                                ["3. 3D 潜变量放大器", "latent_upscale_models/", "latent_upsampler/minimax_h3_latent_upscaler_3d_conv_v1_bf16.safetensors", "Efficient-Large-Model/Open-H3-Regenerate-2K · LBH-123-AI/Minimax_h3_latent_Upscaler", "在 3D 视频潜空间内直接将分辨率放大 2 倍，免去像素级解码再编码的画质折损"],
                                ["4. Fast 非因果高速 VAE", "vae/", "vae_fast/fast_h3_vae_noncausal_24l.safetensors", "Efficient-Large-Model/Open-H3-Regenerate-2K", "英伟达专为 2K 高清解码优化的轻量高速 VAE，大幅降低 2K 解码显存峰值"],
                                ["5. H3 主干与 32B 编码器", "diffusion_models/ · text_encoders/", "minimax_h3_ref2va_pruned_int8_convrot.safetensors · qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors", "Comfy-Org/MiniMax-H3", "提供精修去噪底座与文本理解（脚本会自动复用已有 INT8 或 NVFP4 权重）"],
                            ],
                            "en": [
                                ["1. Open-H3 2K Refine LoRA", "loras/", "lora/open_h3_regenerate_2k_lora.safetensors", "Efficient-Large-Model/Open-H3-Regenerate-2K", "NVIDIA's official 2K regeneration LoRA (Refiner + LightX2V Turbo)"],
                                ["2. Sharp 50-Layer Curves", "loras/", "lora/sharp_curve_branches.safetensors", "Efficient-Large-Model/Open-H3-Regenerate-2K", "50-layer per-block timestep curves for crisp high-frequency detail"],
                                ["3. 3D Latent Upscaler", "latent_upscale_models/", "latent_upsampler/minimax_h3_latent_upscaler_3d_conv_v1_bf16.safetensors", "Efficient-Large-Model/Open-H3-Regenerate-2K · LBH-123-AI/Minimax_h3_latent_Upscaler", "Upscales video latents 2x in 3D space without pixel round-trip loss"],
                                ["4. Fast Non-Causal VAE", "vae/", "vae_fast/fast_h3_vae_noncausal_24l.safetensors", "Efficient-Large-Model/Open-H3-Regenerate-2K", "NVIDIA's fast 24-layer VAE for low-VRAM 2K decoding"],
                                ["5. H3 Backbone & 32B VLM", "diffusion_models/ · text_encoders/", "minimax_h3_ref2va_pruned_int8_convrot.safetensors · qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors", "Comfy-Org/MiniMax-H3", "Base diffusion model and 32B encoder"],
                            ],
                        },
                        "params": {
                            "zh": [
                                ["OpenH3RegenSigmas", "steps / start_sigma", "3 步 / 0.78 (保脸锁动作) 或 0.909 (大重绘)", "0.78 能严格锁住草稿视频的动作与脸型不飘；0.909 重绘幅度更大适合风景特效"],
                                ["OpenH3RegenLora", "strength / curve_strength", "1.0 / 0.65", "精修 LoRA 设 1.0，Sharp 50层锐化曲线设 0.65 最自然不生硬"],
                                ["MinimaxH3LatentUpscaler3D", "mode.scale / enable_temporal_chunking", "2.0 / true", "开启时间分块 (temporal_chunking) 防止长视频 3D 放大时爆显存"],
                            ],
                            "en": [
                                ["OpenH3RegenSigmas", "steps / start_sigma", "3 steps / 0.78 (lock motion) or 0.909 (full redraw)", "0.78 strictly locks draft motion & facial structure; 0.909 adds more new detail"],
                                ["OpenH3RegenLora", "strength / curve_strength", "1.0 / 0.65", "1.0 LoRA strength + 0.65 sharp curve strength avoids over-sharpening"],
                                ["MinimaxH3LatentUpscaler3D", "mode.scale / enable_temporal_chunking", "2.0 / true", "Enable temporal chunking to prevent VRAM spikes during 3D latent upscaling"],
                            ],
                        },
                    },
                    # =========================================================================
                    # MODULE 04: Full Pipeline: MiniMax Base + Pika Flex + NVIDIA Open-H3 2K
                    # =========================================================================
                    {
                        "id": "h3-pika-2k-all",
                        "status": "live",
                        "short": {"zh": "04 · 全流程：MiniMax + Pika + 2K", "en": "04 · Full: MiniMax + Pika + 2K"},
                        "title": {
                            "zh": "终极全流程一体版：MiniMax 官方底模 + Pika 6步一采 + 英伟达 Open-H3 2K 精修二采",
                            "en": "Ultimate Full Pipeline: MiniMax Base + Pika 6-Step Pass 1 + NVIDIA Open-H3 2K Pass 2",
                        },
                        "tagline": {
                            "zh": "单张工作流一气呵成：0.4MP Pika 6步锁大动态 → 音画潜变量分离 → 3D 放大 2 倍 → Open-H3 3步 Euler 高清精修",
                            "en": "All-in-One Two-Pass Graph: 0.4MP Pika 6-Step Pass 1 → AV Latent Split → 2x 3D Upscale → 3-Step Open-H3 2K Refine",
                        },
                        "summary": {
                            "zh": "本项目默认旗舰生产管线（minimax_pika 两轮采样）：把第 01 篇的官方底模、第 02 篇的 Pika Flex 6 步一采与第 03 篇的英伟达 Open-H3 1080p/2K 3 步精修无缝串联在同一张 ComfyUI 画布中！既解决了单轮直出 1080p 变慢动作的顽疾，又在总共 6+3=9 步内直出影院级高清有声成片。",
                            "en": "Our flagship production pipeline (minimax_pika Two-Pass): Combines Official Ref2VA INT8 + Pika Flex 6-step Pass 1 with 2.0x 3D Latent Upscaling and NVIDIA Open-H3 3-step Pass 2 in a single unified workflow—delivering 1080p/2K audio-video in 6+3=9 total steps.",
                        },
                        "tags": {
                            "zh": ["6步一采 + 3步二采", "Pika Flex + Open-H3 2K", "音画潜变量分离再合成", "全流程一键 Colab"],
                            "en": ["6-Step Pass 1 + 3-Step Pass 2", "Pika Flex + Open-H3 2K", "AV Latent Split & Concat", "Full Pipeline Colab"],
                        },
                        "stats": [
                            {"value": "6 + 3 步", "label": {"zh": "一采 6 步 (Pika) + 二采 3 步 (Open-H3)", "en": "6-Step Pass 1 + 3-Step Pass 2"}},
                            {"value": "0.4 → 2.07MP", "label": {"zh": "480p 锁动作 → 1080p/2K 补毛孔", "en": "480p Motion → 1080p/2K Detail"}},
                            {"value": "0.78", "label": {"zh": "二采 start_sigma 严锁一采动作", "en": "Pass-2 start_sigma Locks Motion"}},
                            {"value": "3 套全流程", "label": {"zh": "CUT 切镜 · T2V 文生 · CONTINUE 接续", "en": "CUT · T2V · CONTINUE Graphs"}},
                        ],
                        "hfRepos": [
                            {
                                "name": "Comfy-Org/MiniMax-H3",
                                "url": "https://huggingface.co/Comfy-Org/MiniMax-H3",
                                "desc": {"zh": "MiniMax H3 官方底模 + Pika Flex (ref2va / fl2va) 双 LoRA + 32B 编码器 + 双 VAE", "en": "Official H3 Backbone + Pika Flex LoRAs + 32B VLM + Dual VAEs"},
                            },
                            {
                                "name": "Efficient-Large-Model/Open-H3-Regenerate-2K",
                                "url": "https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K",
                                "desc": {"zh": "英伟达 Open-H3 2K 精修 LoRA 与 Sharp 50层高频锐化曲线", "en": "NVIDIA Open-H3 2K Refine LoRA & Sharp 50-Layer Curves"},
                            },
                            {
                                "name": "LBH-123-AI/Minimax_h3_latent_Upscaler",
                                "url": "https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler",
                                "desc": {"zh": "一采转二采核心桥梁：3D 视频潜空间 2.0x 放大模型", "en": "3D Video Latent 2.0x Upscaler Model"},
                            },
                            {
                                "name": "fal/MiniMax-H3-Realism-People-LoRA",
                                "url": "https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA",
                                "desc": {"zh": "一采底座去塑料感写实皮肤 LoRA (strength=0.5)", "en": "fal Realism People Skin LoRA (strength=0.5)"},
                            },
                            {
                                "name": "rdh9616/ComfyUI-Open-H3-Regenerate",
                                "url": "https://github.com/rdh9616/ComfyUI-Open-H3-Regenerate",
                                "desc": {"zh": "二采精修核心节点插件（脚本已内置 3D 逐 Token 时间步去重补丁）", "en": "Open-H3 Regenerate Custom Nodes (with 3D token dedup patch)"},
                            },
                            {
                                "name": "LBH-123-AI/Comfyui_Minimax_h3_latent_Upscaler",
                                "url": "https://github.com/LBH-123-AI/Comfyui_Minimax_h3_latent_Upscaler",
                                "desc": {"zh": "MinimaxH3LatentUpscaler3D 自定义节点插件", "en": "MinimaxH3LatentUpscaler3D Custom Node Plugin"},
                            },
                        ],
                        "versionGroups": [
                            {
                                "title": {
                                    "zh": "一、为什么要把「MiniMax + Pika 一采」与「英伟达 2K 二采」结合？",
                                    "en": "1. Why Combine MiniMax + Pika (Pass 1) with NVIDIA Open-H3 2K (Pass 2)?",
                                },
                                "desc": {
                                    "zh": "如果直接在第一轮用 1080p/2K 分辨率采样，不仅显存暴涨、耗时长达数十分钟，还会因为 Token 密度过高导致人物变成「慢动作回放」。两轮结合架构完美解决这一矛盾：",
                                    "en": "Running 1080p/2K directly in a single pass causes slow-motion artifacts and massive VRAM overhead. The Two-Pass architecture solves both:",
                                },
                                "rows": {
                                    "zh": [
                                        [
                                            "阶段 1 · Pika 6步一采 (0.4MP)",
                                            "UNET (#127) → fal Realism (#943) → Pika Flex (#944) → Sampler (#125)",
                                            "864×480 · 6 步 res_multistep",
                                            "在 H3 最擅长的 0.4MP 甜点分辨率下，用 Pika Flex LoRA 仅花 6 步快速生成大动态自然、音画精准同步的潜变量",
                                        ],
                                        [
                                            "阶段 2 · 音画分离与 3D 潜变量放大",
                                            "LTXVSeparateAVLatent (#b15_split) → MinimaxH3LatentUpscaler3D (#b15_upscale) → LTXVConcatAVLatent (#b15_concat)",
                                            "仅放大视频潜变量 2.0x (至 1080p 2.07MP)",
                                            "关键秘诀：先用 SeparateAVLatent 把音频潜变量拆出来保护好，只将画面潜变量 3D 放大 2 倍，再与原音频潜变量拼回！",
                                        ],
                                        [
                                            "阶段 3 · 英伟达 Open-H3 3步精修",
                                            "OpenH3RegenLora (#b15_regen_lora) + OpenH3RegenSigmas (#b15_schedule) → Sampler (#b15_refine)",
                                            "1728×960 · 3 步 Euler (start_sigma=0.78)",
                                            "挂载 open_h3_regenerate_2k_lora 与 50 层锐化曲线 (0.65)，从 sigma=0.78 开始跑 3 步 Euler，锁死一采动作同时炸出毛孔级细节",
                                        ],
                                    ],
                                    "en": [
                                        [
                                            "Stage 1 · Pika 6-Step Pass 1 (0.4MP)",
                                            "UNET (#127) → fal Realism (#943) → Pika Flex (#944) → Sampler (#125)",
                                            "864×480 · 6 steps res_multistep",
                                            "Generates natural full-speed motion and synced audio latents in 6 steps at H3's native 0.4MP sweet spot",
                                        ],
                                        [
                                            "Stage 2 · AV Split & 3D Latent Upscale",
                                            "LTXVSeparateAVLatent (#b15_split) → MinimaxH3LatentUpscaler3D (#b15_upscale) → LTXVConcatAVLatent (#b15_concat)",
                                            "2.0x Video Latent Upscale (to 2.07MP)",
                                            "Splits audio & video latents so only the video latent is upscaled 2x in 3D space, then re-concatenates the untouched audio latent",
                                        ],
                                        [
                                            "Stage 3 · NVIDIA Open-H3 3-Step Refine",
                                            "OpenH3RegenLora (#b15_regen_lora) + OpenH3RegenSigmas (#b15_schedule) → Sampler (#b15_refine)",
                                            "1728×960 · 3 Euler steps (start_sigma=0.78)",
                                            "Applies Open-H3 2K LoRA + 50-layer sharp curves (0.65) for 3 Euler steps at start_sigma=0.78, adding pore-level detail without altering motion",
                                        ],
                                    ],
                                },
                            },
                        ],
                        "workflows": [
                            {
                                "key": "all-cut",
                                "name": "01_MiniMax_Pika_OpenH3_2K_CUT.json",
                                "label": {"zh": "01 · CUT 全流程：多参考图 + Pika 6步 + 2K 精修", "en": "01 · CUT Full: Multi-Ref + Pika 6-Step + 2K Refine"},
                                "badge": {"zh": "旗舰主力", "en": "Flagship"},
                                "desc": {
                                    "zh": "输入角色设定图 <Picture 1>，一采 Pika Ref2VA 6 步锁脸锁动作，二采 Open-H3 3 步直出 1080p/2K 电影级有声成片。",
                                    "en": "Input <Picture 1> character sheet: Pass 1 runs 6-step Pika Ref2VA; Pass 2 runs 3-step Open-H3 1080p/2K refinement.",
                                },
                                "steps": {
                                    "zh": [
                                        ["加载底模与 Pika LoRA", "UNET #127 → #943 (0.5) → #944 (1.0)", "官方 Ref2VA INT8 + fal Realism + Pika Flex Ref2VA"],
                                        ["一采 0.4MP 6 步生成", "RefToVideo #131 → Sampler #125", "绑定 <Picture 1>，864×480 跑 6 步生成音画潜变量"],
                                        ["音画分离与 2x 放大", "SeparateAV #b15_split → Upscaler3D #b15_upscale", "分离保护音频潜变量，画面潜变量 3D 放大 2.0 倍并拼回"],
                                        ["Open-H3 3 步精修", "OpenH3RegenLora → Sampler #b15_refine", "挂载 2K 精修 LoRA + 50层锐化曲线，3 步 Euler (0.78)"],
                                        ["高清双路解码合成", "VAEDecode #122 · VAEDecodeAudio #121", "直出 1080p/2K 24fps 影院级有声视频"],
                                    ],
                                    "en": [
                                        ["Load Base & Pika LoRA", "UNET #127 → #943 (0.5) → #944 (1.0)", "Official Ref2VA INT8 + fal Realism + Pika Flex Ref2VA"],
                                        ["Pass 1: 0.4MP 6 Steps", "RefToVideo #131 → Sampler #125", "Bind <Picture 1>, sample 6 steps at 864×480"],
                                        ["AV Split & 2x Upscale", "SeparateAV #b15_split → Upscaler3D #b15_upscale", "Split AV latent, upscale video 2.0x in 3D, re-concat audio"],
                                        ["Pass 2: Open-H3 3 Steps", "OpenH3RegenLora → Sampler #b15_refine", "2K Refine LoRA + 50 sharp curves, 3 Euler steps (0.78)"],
                                        ["High-Res Decode & Mux", "VAEDecode #122 · VAEDecodeAudio #121", "Output 1080p/2K 24fps audio-video master"],
                                    ],
                                },
                                "content": m04_cut,
                            },
                            {
                                "key": "all-t2v",
                                "name": "02_MiniMax_Pika_OpenH3_2K_T2V.json",
                                "label": {"zh": "02 · T2V 全流程：纯文生视频 + Pika 6步 + 2K 精修", "en": "02 · T2V Full: Pure Text + Pika 6-Step + 2K Refine"},
                                "badge": {"zh": "", "en": ""},
                                "desc": {
                                    "zh": "零参考图纯文本输入，6 步 Pika 一采生成大动态奇幻/空镜，再经 3 步 Open-H3 放大精修至满细节高清画面。",
                                    "en": "Pure text prompt: 6-step Pika Pass 1 for dynamic motion + 3-step Open-H3 Pass 2 for razor-sharp 1080p/2K detail.",
                                },
                                "steps": {
                                    "zh": [
                                        ["加载底模与 Pika LoRA", "UNET #127 → #943 (0.5) → #944 (1.0)", "官方 Ref2VA INT8 + fal Realism + Pika Flex Ref2VA"],
                                        ["一采纯文本 6 步生成", "RefToVideo #131 (无参考图) → Sampler #125", "0.4MP 下 6 步快速构建场景动态与环境音"],
                                        ["音画分离与 2x 放大", "SeparateAV #b15_split → Upscaler3D #b15_upscale", "画面潜变量 3D 放大 2.0 倍，音频潜变量原样保留"],
                                        ["Open-H3 3 步精修", "OpenH3RegenLora → Sampler #b15_refine", "3 步 Euler (start_sigma=0.78) 注入高清纹理"],
                                        ["高清双路解码合成", "VAEDecode #122 · VAEDecodeAudio #121", "合成 24fps 高清有声视频"],
                                    ],
                                    "en": [
                                        ["Load Base & Pika LoRA", "UNET #127 → #943 (0.5) → #944 (1.0)", "Official Ref2VA INT8 + fal Realism + Pika Flex Ref2VA"],
                                        ["Pass 1: Text 6 Steps", "RefToVideo #131 → Sampler #125", "6 steps at 0.4MP for full-speed motion & audio"],
                                        ["AV Split & 2x Upscale", "SeparateAV #b15_split → Upscaler3D #b15_upscale", "2.0x 3D upscale on video latent"],
                                        ["Pass 2: Open-H3 3 Steps", "OpenH3RegenLora → Sampler #b15_refine", "3 Euler steps (start_sigma=0.78) for high-res detail"],
                                        ["High-Res Decode & Mux", "VAEDecode #122 · VAEDecodeAudio #121", "Mux 24fps high-res audio-video"],
                                    ],
                                },
                                "content": m04_t2v,
                            },
                            {
                                "key": "all-continue",
                                "name": "03_MiniMax_Pika_OpenH3_2K_CONTINUE.json",
                                "label": {"zh": "03 · CONTINUE 全流程：跨镜接续 + Pika FL2VA + 2K 精修", "en": "03 · CONTINUE Full: Shot Extension + Pika FL2VA + 2K Refine"},
                                "badge": {"zh": "无缝长镜头", "en": "Seamless Continue"},
                                "desc": {
                                    "zh": "一采使用 AddGuide (#903) 锁定上一镜末帧并挂载 Pika FL2VA LoRA；二采自动移除跨镜首帧引导防闪跳，仅用角色母图条件 (#131) 做单视频精修！",
                                    "en": "Pass 1 locks frame 0 via AddGuide (#903) with Pika FL2VA; Pass 2 uses base ref conditioning (#131) without cross-shot guide to prevent first-frame flicker.",
                                },
                                "steps": {
                                    "zh": [
                                        ["挂载 Pika FL2VA LoRA", "LoraLoader #944", "使用 pika_h3_flex_fl2va_v1_bf16 (1.0) 保障首帧自然起步"],
                                        ["一采首帧接续 + 母图锁脸", "RefToVideo #131 (#901) + AddGuide #903 (#902)", "6 步完成与上一镜头的无缝动作续接"],
                                        ["音画分离与 2x 放大", "SeparateAV #b15_split → Upscaler3D #b15_upscale", "将一采接续好的视频潜变量放大 2.0 倍"],
                                        ["防闪跳二采条件注入", "BasicGuider #b15_guider (接 #131 而非 #903)", "二采不重复注入跨镜首帧 guide，彻底杜绝首帧跳帧与色偏累加"],
                                        ["3 步精修解码输出", "Sampler #b15_refine → VAEDecode", "输出高清且跨镜零闪跳的接续成片"],
                                    ],
                                    "en": [
                                        ["Load Pika FL2VA LoRA", "LoraLoader #944", "Use pika_h3_flex_fl2va_v1_bf16 (1.0) for smooth frame-0 onset"],
                                        ["Pass 1: AddGuide + Ref", "RefToVideo #131 (#901) + AddGuide #903 (#902)", "6 steps to extend seamlessly from previous shot"],
                                        ["AV Split & 2x Upscale", "SeparateAV #b15_split → Upscaler3D #b15_upscale", "Upscale video latent 2.0x in 3D space"],
                                        ["Flicker-Free Pass-2 Cond", "BasicGuider #b15_guider (wired to #131)", "Uses base ref conditioning (#131) in Pass 2 to prevent frame-0 color drift"],
                                        ["3-Step Refine & Decode", "Sampler #b15_refine → VAEDecode", "Output high-res seamless continuation shot"],
                                    ],
                                },
                                "content": m04_cont,
                            },
                        ],
                        "colab": {
                            "name": "MiniMax_Pika_OpenH3_2K_Colab.py",
                            "gpu": {"zh": "A100 40GB / 80GB（推荐，已内置 comfy-kitchen 与 Open-H3 3D 时间步去重补丁）", "en": "A100 40GB / 80GB (Includes comfy-kitchen & Open-H3 3D token dedup patch)"},
                            "secrets": {
                                "zh": [
                                    ["CF_TUNNEL_TOKEN", "可选，配置后自动启动 Cloudflare HTTP/2 固定域名隧道"],
                                    ["HF_TOKEN", "可选，加速 HuggingFace 权重并发拉取"],
                                    ["EXIT_AFTER_BOOT", "默认 0（常驻自动重连看门狗）；设为 1 启动后释放单元格"],
                                ],
                                "en": [
                                    ["CF_TUNNEL_TOKEN", "Optional token for persistent Cloudflare HTTP/2 custom domain"],
                                    ["HF_TOKEN", "Optional HuggingFace token for faster downloads"],
                                    ["EXIT_AFTER_BOOT", "Default 0 (watchdog mode); set to 1 to exit cell after boot"],
                                ],
                            },
                            "content": m04_colab,
                        },
                        "models": {
                            "zh": [
                                ["1. 官方扩散主干 (一采+二采共用)", "diffusion_models/", "minimax_h3_ref2va_pruned_int8_convrot.safetensors", "Comfy-Org/MiniMax-H3", "同时承担一采 6 步生成、二采去噪底座与 Open-H3 curve_table 曲线参考表"],
                                ["2. Pika Flex 双 LoRA (2款)", "loras/", "pika_h3_flex_ref2va_v1_bf16.safetensors · pika_h3_flex_fl2va_v1_bf16.safetensors", "Comfy-Org/MiniMax-H3", "一采核心加速与动态表现力 LoRA (strength=1.0, 6步)"],
                                ["3. fal 写实人像 LoRA", "loras/", "h3-realism-people-t2v-i2v-r2v.safetensors", "fal/MiniMax-H3-Realism-People-LoRA", "一采写实皮肤质感 LoRA (strength=0.5)"],
                                ["4. 3D 潜变量放大器", "latent_upscale_models/", "minimax_h3_latent_upscaler_3d_conv_v1/minimax_h3_latent_upscaler_3d_conv_v1_fp16.safetensors", "LBH-123-AI/Minimax_h3_latent_Upscaler", "连接一采与二采的桥梁：将 0.4MP 视频潜变量 2.0 倍放大至 1080p (2.07MP)"],
                                ["5. Open-H3 2K 精修 LoRA + 锐化曲线", "loras/", "lora/open_h3_regenerate_2k_lora.safetensors · lora/sharp_curve_branches.safetensors", "Efficient-Large-Model/Open-H3-Regenerate-2K", "二采 3 步 Euler 精修核心权重与 50 层高频锐化分支"],
                                ["6. 32B 视觉编码器与音视频双 VAE", "text_encoders/ · vae/", "qwen3vl_32b_minimax_h3_int8_convrot.safetensors · minimax_h3_video_vae_int8_convrot.safetensors · minimax_h3_audio_vae_fp32.safetensors", "Comfy-Org/MiniMax-H3", "全流程多模态编码器与音视频解码器"],
                            ],
                            "en": [
                                ["1. Official Backbone (Pass 1 & 2)", "diffusion_models/", "minimax_h3_ref2va_pruned_int8_convrot.safetensors", "Comfy-Org/MiniMax-H3", "Shared across Pass 1, Pass 2, and Open-H3 curve_table"],
                                ["2. Pika Flex Dual LoRAs (2)", "loras/", "pika_h3_flex_ref2va_v1_bf16.safetensors · pika_h3_flex_fl2va_v1_bf16.safetensors", "Comfy-Org/MiniMax-H3", "Pass-1 6-step motion & expressiveness LoRAs (strength=1.0)"],
                                ["3. fal Realism People LoRA", "loras/", "h3-realism-people-t2v-i2v-r2v.safetensors", "fal/MiniMax-H3-Realism-People-LoRA", "Pass-1 natural skin texture LoRA (strength=0.5)"],
                                ["4. 3D Latent Upscaler", "latent_upscale_models/", "minimax_h3_latent_upscaler_3d_conv_v1/minimax_h3_latent_upscaler_3d_conv_v1_fp16.safetensors", "LBH-123-AI/Minimax_h3_latent_Upscaler", "Bridges Pass 1 and Pass 2 via 2.0x 3D latent upscaling"],
                                ["5. Open-H3 2K LoRA & Sharp Curves", "loras/", "lora/open_h3_regenerate_2k_lora.safetensors · lora/sharp_curve_branches.safetensors", "Efficient-Large-Model/Open-H3-Regenerate-2K", "Pass-2 3-step Euler refinement LoRA & 50-layer sharp curves"],
                                ["6. 32B VLM & Dual VAEs", "text_encoders/ · vae/", "qwen3vl_32b_minimax_h3_int8_convrot.safetensors · minimax_h3_video_vae_int8_convrot.safetensors · minimax_h3_audio_vae_fp32.safetensors", "Comfy-Org/MiniMax-H3", "Multimodal encoder and audio/video decoders"],
                            ],
                        },
                        "params": {
                            "zh": [
                                ["BasicScheduler (#124 · 一采)", "steps / sampler", "6 步 / res_multistep", "一采由 Pika Flex 驱动，0.4MP 下 6 步锁死自然动作与音轨"],
                                ["LTXVSeparateAVLatent (#b15_split)", "av_latent", "拆分音画潜变量", "必须在 3D 放大前拆出音频潜变量，防止音频被 3D 卷积破坏"],
                                ["MinimaxH3LatentUpscaler3D (#b15_upscale)", "mode.scale", "2.0 (1080p) / 2.67 (2K)", "将一采视频潜变量放大 2 倍，开启 enable_temporal_chunking 省显存"],
                                ["OpenH3RegenLora (#b15_regen_lora)", "strength / curve_strength", "1.0 / 0.65", "挂载英伟达 2K 精修 LoRA 与 50 层高频锐化曲线"],
                                ["OpenH3RegenSigmas (#b15_schedule · 二采)", "steps / start_sigma", "3 步 Euler / 0.78", "二采仅需 3 步 Euler，start_sigma=0.78 保证不改变一采动作与五官"],
                            ],
                            "en": [
                                ["BasicScheduler (#124 · Pass 1)", "steps / sampler", "6 steps / res_multistep", "Pass 1 driven by Pika Flex at 0.4MP in 6 steps"],
                                ["LTXVSeparateAVLatent (#b15_split)", "av_latent", "Split Audio & Video", "Must separate audio latent before 3D spatial upscaling"],
                                ["MinimaxH3LatentUpscaler3D (#b15_upscale)", "mode.scale", "2.0 (1080p) / 2.67 (2K)", "Scales video latent 2x with temporal chunking enabled"],
                                ["OpenH3RegenLora (#b15_regen_lora)", "strength / curve_strength", "1.0 / 0.65", "Applies NVIDIA 2K refine LoRA + 50-layer sharp curve"],
                                ["OpenH3RegenSigmas (#b15_schedule · Pass 2)", "steps / start_sigma", "3 Euler steps / 0.78", "3 Euler steps at start_sigma=0.78 refines detail while locking Pass-1 motion"],
                            ],
                        },
                    },
                ],
            }
        ],
    },
    {
        "id": "image",
        "icon": "",
        "title": {"zh": "图像生成", "en": "Image Generation"},
        "groups": [
            {
                "id": "moss-image-series",
                "title": {"zh": "MOSS-Image 5B 系列", "en": "MOSS-Image 5B Series"},
                "items": [
                    {
                        "id": "moss-base",
                        "status": "soon",
                        "short": {"zh": "01 · MOSS 5B 基础模型与工作流", "en": "01 · MOSS 5B Base & Workflow"},
                        "title": {
                            "zh": "MOSS-Image 5B SFT 基础指南：三大件架构与 SLG=22 防崩工作流",
                            "en": "MOSS-Image 5B SFT Base Guide: Architecture & SLG=22 Workflow",
                        },
                        "tagline": {
                            "zh": "MOSS-Image 5B INT8 + Qwen3.5-9B + FLUX.2 VAE + SkipLayerGuidance",
                            "en": "MOSS-Image 5B INT8 + Qwen3.5-9B + FLUX.2 VAE + SkipLayerGuidance",
                        },
                        "summary": {
                            "zh": "从零看懂 OpenMOSS 5B 写实生图模型：为什么必须配合 Qwen3.5-9B 与 SkipLayerGuidanceDiTSimple (SLG=22)？附上原生 ComfyUI 工作流与 Colab 脚本。",
                            "en": "Understand OpenMOSS 5B from scratch: Why pair Qwen3.5-9B with SkipLayerGuidanceDiTSimple (SLG=22)? Includes native workflow and Colab script.",
                        },
                        "plan": {
                            "zh": [
                                "MOSS-Image 5B SFT INT8 + Qwen3.5-9B + FLUX.2 VAE 三大核心权重",
                                "SkipLayerGuidanceDiTSimple 跳过第 22 层防止人体折叠畸变的原理",
                                "896×1152 (9:16) 与 1344×768 (16:9) 原生分辨率设置",
                            ],
                            "en": [
                                "MOSS-Image 5B SFT INT8 + Qwen3.5-9B + FLUX.2 VAE core weights",
                                "How SkipLayerGuidanceDiTSimple (layer 22) prevents body folding",
                                "Native resolution buckets: 896×1152 (9:16) & 1344×768 (16:9)",
                            ],
                        },
                    },
                    {
                        "id": "moss-realism-prompt",
                        "status": "soon",
                        "short": {"zh": "02 · 去塑料感写实提示词工程", "en": "02 · Anti-Plastic Realism Prompts"},
                        "title": {
                            "zh": "MOSS-Image 5B 进阶篇：去 AI 塑料感的手机抓拍与纪实人像提示词",
                            "en": "MOSS-Image 5B Part 2: Candid Smartphone & Documentary Realism Prompting",
                        },
                        "tagline": {
                            "zh": "支援 4000 Tokens 长提示词 · 中英双语混合排版 · 官方护栏负向词拆解",
                            "en": "4000-Token Long Prompts · Bilingual Text Rendering · Guardrail Negative Prompts",
                        },
                        "summary": {
                            "zh": "如何写出毛孔真实、光影自然、没有影楼磨皮感的真人参考图，为下游 MiniMax H3 视频模型提供最佳首帧与设定图。",
                            "en": "How to craft prompts for natural skin texture and candid lighting to feed into downstream MiniMax H3 video workflows.",
                        },
                        "plan": {
                            "zh": [
                                "狙杀 plastic skin / waxy skin / beauty filter 的官方护栏反向词",
                                "利用 Qwen3.5-9B 编写高密度自然语言镜头描述",
                                "为视频模型准备四槽人物与环境设定图的构图留白技巧",
                            ],
                            "en": [
                                "Eliminating plastic/waxy skin with official negative guardrails",
                                "Writing dense natural-language scene descriptions with Qwen3.5-9B",
                                "Framing character & environment reference sheets for video generation",
                            ],
                        },
                    },
                ],
            }
        ],
    },
    {
        "id": "audio",
        "icon": "🎵",
        "title": {"zh": "音频 / 音乐", "en": "Audio & Music"},
        "groups": [
            {
                "id": "yue2-drama3-series",
                "title": {"zh": "YuE2 音乐 & Drama3 配音系列", "en": "YuE2 Music & Drama3 Voice Series"},
                "items": [
                    {
                        "id": "yue2-base",
                        "status": "soon",
                        "short": {"zh": "01 · YuE2 3B AI 写歌基础版", "en": "01 · YuE2 3B Song Gen Base"},
                        "title": {
                            "zh": "YuE2 3B INT8 开源写歌指南：Plan → Render Plan 双阶段工作流",
                            "en": "YuE2 3B INT8 Music Guide: Staged Plan → Render Plan Workflow",
                        },
                        "tagline": {
                            "zh": "在单张 Colab L4 (24GB) 上常驻显存直出 3 分钟完整人声歌曲",
                            "en": "Generate full 3-minute vocal songs on a single Colab L4 (24GB) GPU",
                        },
                        "summary": {
                            "zh": "拆解 Comfy-Org 的 yue2_3b_int8_convrot 模型与 YuE2-ComfyUI 分阶段节点（先写谱 Plan、再演唱解码 Render Plan），附 L4 极速脚本。",
                            "en": "Breaking down yue2_3b_int8_convrot and staged YuE2Plan → YuE2RenderPlan nodes, with an L4 24GB resident Colab script.",
                        },
                        "plan": {
                            "zh": [
                                "为什么用 YuE2Plan → YuE2RenderPlan 展开节点代替单节点黑盒",
                                "offload=off + keep_model_loaded=true 在 24GB L4 上的极速配置",
                                "Style 曲风标签与 [Verse] / [Chorus] 歌词结构编写规范",
                            ],
                            "en": [
                                "Why staged YuE2Plan → YuE2RenderPlan beats monolithic nodes",
                                "Zero-offload L4 24GB configuration (keep_model_loaded=true)",
                                "Formatting Style tags and [Verse] / [Chorus] lyrics",
                            ],
                        },
                    },
                    {
                        "id": "drama3-voice",
                        "status": "soon",
                        "short": {"zh": "02 · Drama3 35B 零样本配音克隆", "en": "02 · Drama3 35B Voice Cloning"},
                        "title": {
                            "zh": "Fish Audio Drama 3 (35B MoE) 零样本多角色声音克隆与情绪配音",
                            "en": "Fish Audio Drama 3 (35B MoE) Zero-Shot Multi-Speaker Voice Cloning",
                        },
                        "tagline": {
                            "zh": "35B MoE w6a8/w4a8 量化 · 零样本参考音频克隆 · 双人对话与情绪标签",
                            "en": "35B MoE w6a8/w4a8 · Zero-Shot Reference Cloning · Multi-Speaker Dialogue",
                        },
                        "summary": {
                            "zh": "详解 Fish Audio Drama 3 35B MoE 模型的 w6a8 与 w4a8 版本差异、单人独白与双人对话 ComfyUI 工作流，以及 Colab 一键脚本。",
                            "en": "Complete guide to Fish Audio Drama 3 35B MoE (w6a8 vs w4a8), single/dual-speaker ComfyUI workflows, and Colab deployment.",
                        },
                        "plan": {
                            "zh": [
                                "Drama 3 35B MoE w6a8 与 w4a8 权重按内存/显存自动优选",
                                "5~10 秒参考音频零样本克隆与情绪控制标签写法",
                                "单人旁白与双人角色对话工作流 JSON",
                            ],
                            "en": [
                                "Choosing between Drama 3 35B MoE w6a8 and w4a8 weights",
                                "5–10s reference audio zero-shot cloning & emotion tags",
                                "Single-speaker & dual-speaker dialogue ComfyUI workflows",
                            ],
                        },
                    },
                ],
            }
        ],
    },
]

out_path = pathlib.Path(__file__).resolve().parent / "src/catalog.js"
out_path.write_text("export const CATALOG = " + json.dumps(CATALOG, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
print("All 4 MiniMax H3 LIVE modules generated in src/catalog.js!")
