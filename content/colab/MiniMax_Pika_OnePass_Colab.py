# -*- coding: utf-8 -*-
"""
MiniMax H3 官方底模 + Pika H3 Flex (双 LoRA) + fal Realism People 6步极速一采 Colab 一键启动脚本
====================================================================================================
仓库来源：https://huggingface.co/Comfy-Org/MiniMax-H3
适用环境：Google Colab (推荐 A100 40GB / L4 24GB) 或 Linux NVIDIA GPU

核心功能：
1. 【官方纯净四大件】全部从 Comfy-Org/MiniMax-H3 官方仓库拉取，不含任何魔改或第三方杂乱插件：
   - 扩散主干 (默认下载 Ref2VA Pruned INT8，可按需开启 FL2VA)：
     diffusion_models/minimax_h3_ref2va_pruned_int8_convrot.safetensors
   - 多模态视觉/文本编码器 (A100 默认下 INT8，24GB 显卡自动可选 NVFP4 AWQ)：
     text_encoders/qwen3vl_32b_minimax_h3_int8_convrot.safetensors
   - 视频解码器：vae/minimax_h3_video_vae_int8_convrot.safetensors
   - 音频解码器：vae/minimax_h3_audio_vae_fp32.safetensors
2. 【算子加速】自动安装并验证官方 comfy-kitchen (0.2.39/0.2.38) CUDA INT8 Attention 算子。
3. 【开箱即用】自动将 3 套官方基础工作流（Ref2VA 多参考图 / T2V 文生视频 / FL2VA 首帧图生视频）写入 ComfyUI 菜单。
4. 【公网访问】支持自定义 CF_TUNNEL_TOKEN 固定域名，或免注册自动生成 trycloudflare.com 公网链接。
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
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

BASE = Path("/content") if Path("/content").exists() else Path.cwd()
COMFY = BASE / "ComfyUI"
PORT = 8188

# 固定经过验证的 ComfyUI 核心提交号（完整 40 位 SHA，防止主分支漂移）
COMFY_REV = "b1a247c9cf9dbfda4b2c0a0c1d50950667eeaa0c"
KITCHEN_VERSIONS = ("0.2.39", "0.2.38")

# 可选开关：设为 "1" 时额外下载 FL2VA 首尾帧专用底模；设为 "nvfp4" 时使用 24GB 显存友好的 NVFP4 文本编码器
DOWNLOAD_FL2VA = os.getenv("DOWNLOAD_FL2VA", "0").strip() == "1"
TE_QUANT_MODE = os.getenv("TE_QUANT_MODE", "int8").strip().lower()  # "int8" 或 "nvfp4"

TE_FILENAME = (
    "text_encoders/qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors"
    if TE_QUANT_MODE == "nvfp4"
    else "text_encoders/qwen3vl_32b_minimax_h3_int8_convrot.safetensors"
)

# ===== Comfy-Org/MiniMax-H3 官方基础版四大核心权重 + Pika Flex / LightX2V 双 LoRA 清单 =====
BASE_MODELS = [
    (
        "Comfy-Org/MiniMax-H3",
        "main",
        "diffusion_models/minimax_h3_ref2va_pruned_int8_convrot.safetensors",
        "diffusion_models",
    ),
    (
        "Comfy-Org/MiniMax-H3",
        "main",
        TE_FILENAME,
        "text_encoders",
    ),
    (
        "Comfy-Org/MiniMax-H3",
        "main",
        "vae/minimax_h3_video_vae_int8_convrot.safetensors",
        "vae",
    ),
    (
        "Comfy-Org/MiniMax-H3",
        "0543966fbdce5ba05709a8f2031c94bdba629b4a",
        "vae/minimax_h3_audio_vae_fp32.safetensors",
        "vae",
    ),
    # 1. Pika H3 Flex 2 款官方 LoRA (Ref2VA & FL2VA)
    (
        "Comfy-Org/MiniMax-H3",
        "main",
        "loras/pika_h3_flex_ref2va_v1_bf16.safetensors",
        "loras",
    ),
    (
        "Comfy-Org/MiniMax-H3",
        "main",
        "loras/pika_h3_flex_fl2va_v1_bf16.safetensors",
        "loras",
    ),
    # 1.5 fal 写实人像皮肤纹理 LoRA
    (
        "fal/MiniMax-H3-Realism-People-LoRA",
        "main",
        "h3-realism-people-t2v-i2v-r2v.safetensors",
        "loras",
    ),
    # 2. LightX2V Turbo 2 款极速蒸馏 LoRA (Ref2V & FL2V)
    (
        "Comfy-Org/MiniMax-H3",
        "main",
        "loras/minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors",
        "loras",
    ),
    (
        "Comfy-Org/MiniMax-H3",
        "main",
        "loras/minimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors",
        "loras",
    ),
]

if DOWNLOAD_FL2VA:
    BASE_MODELS.append(
        (
            "Comfy-Org/MiniMax-H3",
            "main",
            "diffusion_models/minimax_h3_fl2va_pruned_int8_convrot.safetensors",
            "diffusion_models",
        )
    )


def get_secret(name: str) -> str:
    value = os.getenv(name, "").strip()
    if value:
        return value
    try:
        from google.colab import userdata
        return (userdata.get(name) or "").strip()
    except Exception:
        return ""


def run(args, cwd=None, check=True, env=None):
    if isinstance(args, str):
        print("$", args, flush=True)
        p = subprocess.run(args, cwd=cwd, shell=True, check=False, env=env)
    else:
        print("$", " ".join(map(str, args)), flush=True)
        p = subprocess.run(list(map(str, args)), cwd=cwd, check=False, env=env)
    if check and p.returncode != 0:
        raise RuntimeError("命令执行失败: " + (args if isinstance(args, str) else " ".join(map(str, args))))
    return p.returncode


def clone_pinned(url: str, path: Path, revision: str):
    if len(revision) != 40 or any(c not in "0123456789abcdef" for c in revision):
        raise ValueError(f"必须提供完整 40 位 Git 提交号: {revision}")
    fresh = not path.exists()
    if fresh:
        run(["git", "clone", "--filter=blob:none", "--depth", "1", "--no-checkout", url, str(path)])
    if not (path / ".git").is_dir():
        shutil.rmtree(path, ignore_errors=True)
        run(["git", "clone", "--filter=blob:none", "--depth", "1", "--no-checkout", url, str(path)])
        fresh = True

    current = subprocess.run(
        ["git", "-C", str(path), "rev-parse", "HEAD"],
        text=True, capture_output=True, check=False,
    ).stdout.strip()
    if current == revision:
        ready = subprocess.run(
            ["git", "-C", str(path), "ls-files"],
            text=True, capture_output=True, check=False,
        ).stdout.strip()
        if ready:
            print(f"⏩ 固定版本已就绪：{path.name} @ {revision[:10]}", flush=True)
            return
    elif not fresh:
        dirty = subprocess.run(
            ["git", "-C", str(path), "diff", "--name-only", "HEAD"],
            text=True, capture_output=True, check=False,
        ).stdout.strip()
        if dirty:
            run(["git", "-C", str(path), "stash", "push", "-m", "minimax-h3-base-pin"], check=False)

    run(["git", "-C", str(path), "remote", "set-url", "origin", url])
    run(["git", "-C", str(path), "fetch", "--depth", "1", "origin", revision])
    run(["git", "-C", str(path), "checkout", "-f", "--detach", revision])
    print(f"✅ 固定版本：{path.name} @ {revision[:10]}", flush=True)


def ensure_cuda():
    code = (
        "import torch;"
        "print('Torch:', torch.__version__, 'CUDA:', torch.version.cuda);"
        "print('GPU:', torch.cuda.get_device_name(0) if torch.cuda.is_available() else 'NONE');"
        "raise SystemExit(0 if torch.cuda.is_available() else 2)"
    )
    p = subprocess.run([sys.executable, "-c", code], text=True, capture_output=True)
    print(p.stdout, flush=True)
    if p.returncode != 0:
        raise RuntimeError("未检测到可用 NVIDIA CUDA GPU，请在 Colab 菜单选择 GPU 运行时 (推荐 A100 / L4)。")


def install_if_needed(requirements, req_file=None):
    from importlib.metadata import PackageNotFoundError, version
    try:
        try:
            from packaging.requirements import Requirement
        except ImportError:
            from pip._vendor.packaging.requirements import Requirement
        ready = True
        for raw in requirements:
            raw = raw.strip()
            if not raw or raw.startswith("#"):
                continue
            if raw.startswith(("-r", "--", "http://", "https://", "git+")):
                ready = False
                break
            req = Requirement(raw.split(" #", 1)[0].strip())
            if req.marker and not req.marker.evaluate():
                continue
            if req.url or req.extras:
                ready = False
                break
            try:
                installed = version(req.name)
            except PackageNotFoundError:
                ready = False
                break
            if req.specifier and not req.specifier.contains(installed, prereleases=True):
                ready = False
                break
        if ready:
            print(f"⏩ 依赖已满足: {req_file or '基础依赖'}", flush=True)
            return
    except Exception:
        pass
    args = [sys.executable, "-m", "pip", "install", "-q", "--prefer-binary", "--disable-pip-version-check"]
    args += ["-r", str(req_file)] if req_file else list(requirements)
    run(args)


def install_comfy_requirements():
    req = COMFY / "requirements.txt"
    if not req.exists():
        raise RuntimeError("ComfyUI requirements.txt 不存在")

    skip = {"torch", "torchvision", "torchaudio", "triton", "comfy-kitchen"}
    kept = []
    for raw in req.read_text(encoding="utf-8").splitlines():
        s = raw.strip()
        if not s or s.startswith("#"):
            kept.append(raw)
            continue
        name = (
            s.split("=", 1)[0]
            .split("<", 1)[0]
            .split(">", 1)[0]
            .split("[", 1)[0]
            .strip()
            .lower()
            .replace("_", "-")
        )
        if name not in skip:
            kept.append(raw)

    tmp = BASE / "comfy_h3_base_requirements.txt"
    tmp.write_text("\n".join(kept) + "\n", encoding="utf-8")
    install_if_needed(kept, tmp)


def ensure_comfy_kitchen() -> str:
    from importlib.metadata import version
    try:
        cur = version("comfy-kitchen")
        if cur in KITCHEN_VERSIONS:
            print(f"⏩ 官方 comfy-kitchen {cur} 已安装", flush=True)
            return cur
    except Exception:
        pass

    for ver in KITCHEN_VERSIONS:
        print(f"⚡ 安装官方预编译 comfy-kitchen {ver}...", flush=True)
        rc = run([
            sys.executable, "-m", "pip", "install",
            "--index-url", "https://pypi.org/simple",
            "--only-binary=:all:", "--no-deps", "--force-reinstall",
            "--no-cache-dir", f"comfy-kitchen=={ver}",
        ], check=False)
        if rc == 0:
            return ver
    raise RuntimeError("comfy-kitchen 预编译 wheel 安装失败")


def verify_comfy_kitchen():
    code = r"""
import torch
import comfy_kitchen as ck
from importlib.metadata import version

v = version("comfy-kitchen")
assert torch.cuda.is_available(), "CUDA 不可用"
assert ck.list_backends().get("cuda", {}).get("available"), "Kitchen CUDA backend 不可用"
assert ck.int8_attention_is_available(), "Kitchen INT8 Attention 不可用"
print(f"KITCHEN_OK version={v} gpu={torch.cuda.get_device_name(0)}")
"""
    p = subprocess.run([sys.executable, "-c", code], cwd=str(COMFY), text=True, capture_output=True)
    if p.stdout:
        print(p.stdout.strip(), flush=True)
    if p.returncode != 0:
        if p.stderr:
            print(p.stderr, flush=True)
        raise RuntimeError("comfy-kitchen GPU 算子预检未通过")


_EXPECTED_SIZE_CACHE = {}


def expected_size(repo: str, rev: str, filename: str):
    key = (repo, rev, filename)
    if key in _EXPECTED_SIZE_CACHE:
        return _EXPECTED_SIZE_CACHE[key]
    size = None
    try:
        from huggingface_hub import HfApi
        info = HfApi().get_paths_info(
            repo_id=repo, paths=[filename], revision=rev,
            token=get_secret("HF_TOKEN") or None,
        )
        if info:
            size = getattr(info[0], "size", None)
    except Exception:
        pass
    _EXPECTED_SIZE_CACHE[key] = size
    return size


def _disable_hf_xet_runtime():
    """冷门分块 / 429 兜底：当前进程立即关闭 hf-xet，切回普通 HTTP 直下。"""
    os.environ["HF_HUB_DISABLE_XET"] = "1"
    os.environ.pop("HF_XET_HIGH_PERFORMANCE", None)
    try:
        import huggingface_hub.constants as hf_consts
        hf_consts.HF_HUB_DISABLE_XET = True
    except Exception:
        pass
    try:
        import huggingface_hub.utils._runtime as hf_runtime
        hf_runtime._is_xet_available = False
        hf_runtime.is_xet_available = lambda: False
    except Exception:
        pass
    try:
        import huggingface_hub.file_download as hf_fd
        hf_fd.is_xet_available = lambda: False
    except Exception:
        pass


def download_one(item):
    from huggingface_hub import hf_hub_download

    repo, rev, filename, category = item
    dst_dir = COMFY / "models" / category
    dst_dir.mkdir(parents=True, exist_ok=True)
    target = dst_dir / Path(filename).name
    expect = expected_size(repo, rev, filename)

    if target.is_file() and target.stat().st_size > 1024 * 1024:
        got = target.stat().st_size
        if expect is None or got == expect:
            print(f"⏩ 已就绪: {target.name} ({got / 1024 ** 3:.2f} GB)", flush=True)
            return target
        try:
            target.unlink()
        except Exception:
            pass

    print(f"⬇️ 开始下载: {target.name}", flush=True)
    downloaded = Path(
        hf_hub_download(
            repo_id=repo,
            revision=rev,
            filename=filename,
            local_dir=str(dst_dir),
            token=get_secret("HF_TOKEN") or None,
        )
    )

    if downloaded.resolve() != target.resolve():
        if target.exists() or target.is_symlink():
            target.unlink()
        try:
            target.symlink_to(downloaded)
        except Exception:
            shutil.copy2(downloaded, target)

    if not target.exists():
        raise RuntimeError(f"下载失败: {target.name}")

    got = target.stat().st_size
    if expect is not None and got != expect:
        raise RuntimeError(f"下载后大小不符: {target.name} ({got} != {expect})")
    print(f"✅ 完成: {target.name} ({got / 1024 ** 3:.2f} GB)", flush=True)
    return target


def download_all_base_models():
    os.environ["HF_XET_HIGH_PERFORMANCE"] = "1"
    failed = []
    with ThreadPoolExecutor(max_workers=4) as pool:
        fmap = {pool.submit(download_one, item): item for item in BASE_MODELS}
        for fut in as_completed(fmap):
            item = fmap[fut]
            try:
                fut.result()
            except Exception as exc:
                print(f"⚠️ Xet 通道异常，转入 HTTP 兜底: {Path(item[2]).name} ({exc})", flush=True)
                failed.append(item)

    if not failed:
        return

    _disable_hf_xet_runtime()
    for item in failed:
        name = Path(item[2]).name
        last_err = None
        for attempt, wait_s in enumerate((0, 10, 25), start=1):
            if wait_s:
                print(f"⏳ 等待 {wait_s}s 后重试 {name} ({attempt}/3)...", flush=True)
                time.sleep(wait_s)
            try:
                download_one(item)
                last_err = None
                break
            except Exception as exc:
                last_err = exc
        if last_err is not None:
            raise RuntimeError(f"模型下载失败: {name}") from last_err


def wait_port_and_verify_nodes(proc, log_path: Path, timeout=180):
    start = time.time()
    print(f"⏳ 正在启动 ComfyUI 后端 (端口 {PORT})", end="", flush=True)
    while time.time() - start < timeout:
        if proc.poll() is not None:
            print("\n❌ ComfyUI 进程异常退出！末尾日志：", flush=True)
            if log_path.exists():
                print(log_path.read_text(encoding="utf-8", errors="ignore")[-10000:])
            raise RuntimeError(f"ComfyUI exit={proc.returncode}")
        try:
            with socket.create_connection(("127.0.0.1", PORT), timeout=1):
                print(f" ✅ ({int(time.time() - start)}s)", flush=True)
                break
        except OSError:
            print(".", end="", flush=True)
            time.sleep(1)
    else:
        raise RuntimeError("ComfyUI 启动超时")

    with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/object_info", timeout=30) as resp:
        info = json.load(resp)

    required_nodes = [
        "UNETLoader",
        "CLIPLoader",
        "VAELoader",
        "MiniMaxH3ReferenceToVideo",
        "MiniMaxH3AddGuide",
        "MiniMaxH3SigmaShift",
        "SamplerCustomAdvanced",
        "VAEDecode",
        "VAEDecodeAudio",
        "CreateVideo",
        "SaveVideo",
    ]
    missing = [n for n in required_nodes if n not in info]
    if missing:
        raise RuntimeError("缺少核心节点: " + ", ".join(missing))
    print(f"✅ 全部 {len(required_nodes)} 个 MiniMax H3 官方核心节点校验通过！", flush=True)


def launch_cloudflare_tunnel() -> str | None:
    binary = shutil.which("cloudflared")
    if not binary:
        local = BASE / "cloudflared"
        if not local.is_file() or local.stat().st_size < 1024 * 1024:
            partial = local.with_suffix(".part")
            url = "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64"
            run(["curl", "-fL", "--retry", "3", "--connect-timeout", "15", "--max-time", "120", "-o", str(partial), url])
            partial.replace(local)
        local.chmod(0o755)
        binary = str(local)

    cf_log_path = BASE / "cloudflared_minimax_h3.log"
    cf_log = open(cf_log_path, "w", encoding="utf-8")
    token = get_secret("CF_TUNNEL_TOKEN")

    if token:
        cmd = [binary, "tunnel", "--protocol", "http2", "run", "--token", token]
        mode_desc = "固定域名隧道 (CF_TUNNEL_TOKEN)"
    else:
        cmd = [binary, "tunnel", "--protocol", "http2", "--url", f"http://127.0.0.1:{PORT}"]
        mode_desc = "免配置临时公网隧道 (Quick Tunnel)"

    print(f"🌐 启动 Cloudflare 隧道 [{mode_desc}]...", flush=True)
    cf_proc = subprocess.Popen(cmd, stdout=cf_log, stderr=subprocess.STDOUT, start_new_session=True)

    public_url = os.getenv("PUBLIC_URL", "").strip()
    url_pattern = re.compile(r"https://[a-zA-Z0-9-]+\.trycloudflare\.com")
    deadline = time.time() + 35

    while time.time() < deadline:
        if cf_proc.poll() is not None:
            break
        if cf_log_path.exists():
            txt = cf_log_path.read_text(encoding="utf-8", errors="ignore")
            if not token:
                m = url_pattern.search(txt)
                if m:
                    public_url = m.group(0)
                    break
            elif "Registered tunnel connection" in txt:
                break
        time.sleep(1)

    return public_url or None


def main():
    if sys.platform != "linux":
        raise RuntimeError("本脚本专为 Google Colab / Linux NVIDIA GPU 环境设计。")

    t0 = time.time()
    hf_token = get_secret("HF_TOKEN")
    if hf_token:
        os.environ["HF_TOKEN"] = hf_token

    os.environ["PYTORCH_CUDA_ALLOC_CONF"] = "expandable_segments:True"
    os.environ["CUDA_MODULE_LOADING"] = "LAZY"

    print("=" * 78, flush=True)
    print("🚀 MiniMax H3 开源音视频模型 · 官方纯净基础版 (Comfy-Org/MiniMax-H3) 一键部署", flush=True)
    print(f"📌 ComfyUI 固定提交: {COMFY_REV[:10]} | 存储路径: /content 本地高速盘", flush=True)
    print("=" * 78, flush=True)

    ensure_cuda()
    clone_pinned("https://github.com/Comfy-Org/ComfyUI.git", COMFY, COMFY_REV)
    install_if_needed(["huggingface_hub<2.0.0", "hf-xet", "pillow"])

    print("\n📦 [1/4] 后台并行启动官方四大基础权重下载...", flush=True)
    pool = ThreadPoolExecutor(max_workers=1)
    dl_future = pool.submit(download_all_base_models)

    try:
        print("\n🔧 [2/4] 安装 ComfyUI 依赖与 comfy-kitchen INT8 算子...", flush=True)
        install_if_needed(["transformers>=4.45.0", "safetensors>=0.4.3", "tokenizers>=0.19.0", "einops"])
        install_comfy_requirements()
        ensure_comfy_kitchen()
        verify_comfy_kitchen()

        print("\n⏳ [3/4] 等待官方四大基础权重下载完成...", flush=True)
        dl_future.result()
    finally:
        pool.shutdown(wait=False)

    out_dir = COMFY / "output_local"
    out_dir.mkdir(parents=True, exist_ok=True)

    print("\n🚀 [4/4] 启动 ComfyUI 服务与公网访问隧道...", flush=True)
    log_path = BASE / "comfyui_minimax_h3_base.log"
    log_fp = open(log_path, "w", encoding="utf-8")
    cmd = [
        sys.executable,
        "main.py",
        "--listen", "0.0.0.0",
        "--port", str(PORT),
        "--output-directory", str(out_dir),
        "--disable-auto-launch",
        "--enable-cors-header", "*",
        "--async-offload", "2",
        "--reserve-vram", "2.0",
        "--use-ck-attention",
        "--fast", "fp16_accumulation",
    ]
    proc = subprocess.Popen(cmd, cwd=str(COMFY), stdout=log_fp, stderr=subprocess.STDOUT, start_new_session=True)
    wait_port_and_verify_nodes(proc, log_path, timeout=180)
    tunnel_url = launch_cloudflare_tunnel()
    log_fp.close()

    print("\n" + "=" * 78, flush=True)
    print(f"🎉 MiniMax H3 官方基础版部署完成！(总耗时 {time.time() - t0:.1f}s)", flush=True)
    if tunnel_url:
        print(f"🌍 公网访问地址: {tunnel_url}")
    else:
        print("ℹ️ 如使用自定义 CF_TUNNEL_TOKEN，请直接打开你绑定的 Cloudflare 域名；或查看 cloudflared_minimax_h3.log")
    print("=" * 78, flush=True)


if __name__ == "__main__":
    main()
