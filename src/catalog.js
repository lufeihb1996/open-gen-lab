export const CATALOG = [
  {
    "id": "video",
    "icon": "🎬",
    "title": {
      "zh": "视频生成",
      "en": "Video Generation"
    },
    "groups": [
      {
        "id": "minimax-h3-series",
        "title": {
          "zh": "MiniMax H3 系列",
          "en": "MiniMax H3 Series"
        },
        "items": [
          {
            "id": "h3-base",
            "status": "live",
            "short": {
              "zh": "01 · H3 基础模型与双 LoRA",
              "en": "01 · H3 Base & Dual LoRAs"
            },
            "title": {
              "zh": "MiniMax H3 完全指南：官方全版本、Pika Flex 与 LightX2V 双 LoRA 及原生工作流",
              "en": "MiniMax H3 Complete Guide: Official Editions, Pika Flex & LightX2V LoRAs, and Workflows"
            },
            "tagline": {
              "zh": "系统梳理 Comfy-Org/MiniMax-H3 官方四大件 · Pika Flex (2款) & LightX2V Turbo (2款) 双 LoRA · 三大原生工作流",
              "en": "Complete map of Comfy-Org/MiniMax-H3 · Pika Flex (2 LoRAs) & LightX2V Turbo (2 LoRAs) · 3 Native Workflows"
            },
            "summary": {
              "zh": "从零看懂开源音视频一体模型 MiniMax H3：官方仓库里 FL2VA 与 Ref2VA 有什么区别？Pika H3 Flex 的 2 个 LoRA 与 LightX2V Turbo 的 2 个加速 LoRA 怎么分别对应挂载？BF16、INT8 ConvRot、FP8、W6A8、NVFP4 该怎么按显卡选？一篇全部讲透。",
              "en": "Understand MiniMax H3 from scratch: How do official FL2VA and Ref2VA differ? How do you pair the 2 Pika H3 Flex LoRAs and 2 LightX2V Turbo LoRAs with each backbone? Plus full GPU selection guide for BF16, INT8 ConvRot, FP8, W6A8, and NVFP4."
            },
            "tags": {
              "zh": [
                "Comfy-Org 官方底座",
                "Pika Flex 双 LoRA",
                "LightX2V Turbo 双 LoRA",
                "INT8 ConvRot / NVFP4"
              ],
              "en": [
                "Official Comfy-Org Base",
                "2 Pika Flex LoRAs",
                "2 LightX2V Turbo LoRAs",
                "INT8 ConvRot / NVFP4"
              ]
            },
            "stats": [
              {
                "value": "2 大主干",
                "label": {
                  "zh": "Ref2VA 多参考图 · FL2VA 首尾帧",
                  "en": "Ref2VA Multi-Ref · FL2VA First/Last Frame"
                }
              },
              {
                "value": "2+2 LoRA",
                "label": {
                  "zh": "Pika Flex 2款 · LightX2V Turbo 2款",
                  "en": "2 Pika Flex · 2 LightX2V Turbo LoRAs"
                }
              },
              {
                "value": "5 种精度",
                "label": {
                  "zh": "BF16 / Pruned / INT8 / FP8 / W6A8",
                  "en": "BF16 / Pruned / INT8 / FP8 / W6A8"
                }
              },
              {
                "value": "24fps",
                "label": {
                  "zh": "864×480 原生有声视频",
                  "en": "864×480 Native Audio-Video"
                }
              }
            ],
            "hfRepos": [
              {
                "name": "Comfy-Org/MiniMax-H3",
                "url": "https://huggingface.co/Comfy-Org/MiniMax-H3",
                "desc": {
                  "zh": "官方主干 / 32B编码器 / 双VAE / Pika Flex LoRA",
                  "en": "Official Backbones / 32B VLM / Dual VAEs / Pika LoRAs"
                }
              },
              {
                "name": "lightx2v/Minimax-h3-Turbo",
                "url": "https://huggingface.co/lightx2v/Minimax-h3-Turbo",
                "desc": {
                  "zh": "LightX2V 4步/8步 Turbo 极速蒸馏 LoRA 官方仓库",
                  "en": "LightX2V 4/8-Step Turbo Distillation LoRAs"
                }
              },
              {
                "name": "Comfy-Org/ComfyUI",
                "url": "https://github.com/Comfy-Org/ComfyUI",
                "desc": {
                  "zh": "原生支持 MiniMax H3 音视频节点的 ComfyUI 核心",
                  "en": "ComfyUI Core with Native MiniMax H3 Nodes"
                }
              }
            ],
            "versionGroups": [
              {
                "title": {
                  "zh": "一、主干模型两大功能分支 (diffusion_models/)",
                  "en": "1. Two Core Diffusion Branches (diffusion_models/)"
                },
                "desc": {
                  "zh": "MiniMax H3 官方主干按控制方式分为两大分支（两者均支持不传图直接跑纯文生视频 T2V）：",
                  "en": "Official MiniMax H3 diffusion backbones are divided into two functional branches (both also support pure T2V when no image is connected):"
                },
                "rows": {
                  "zh": [
                    [
                      "Ref2VA (多参考图生音视频)",
                      "minimax_h3_ref2va_*",
                      "输入 1~4 张人物/场景设定图 + 提示词 <Picture 1>",
                      "🔥 最通用首选：既能锁死主角五官衣服换机位，也能不连图直接跑文生视频 (T2V)"
                    ],
                    [
                      "FL2VA (首尾帧/图生音视频)",
                      "minimax_h3_fl2va_*",
                      "输入第 0 帧起始图（或首尾两帧）+ 提示词",
                      "适合让一张静态照片自然动起来，或接在已有视频末帧后面做长镜头续接"
                    ]
                  ],
                  "en": [
                    [
                      "Ref2VA (Reference-to-Video-Audio)",
                      "minimax_h3_ref2va_*",
                      "1–4 character/scene ref images + <Picture 1> in prompt",
                      "🔥 Best all-rounder: locks character identity across camera cuts, and also runs pure T2V"
                    ],
                    [
                      "FL2VA (First/Last-Frame-to-Video-Audio)",
                      "minimax_h3_fl2va_*",
                      "Start frame (and optional end frame) + text prompt",
                      "Best for animating a still image or continuing seamlessly from a previous shot"
                    ]
                  ]
                }
              },
              {
                "title": {
                  "zh": "二、核心必装双 LoRA 体系：Pika H3 Flex (2款) 与 LightX2V Turbo (2款) (loras/)",
                  "en": "2. Essential Dual LoRA Ecosystem: Pika H3 Flex (2 LoRAs) & LightX2V Turbo (2 LoRAs) (loras/)"
                },
                "desc": {
                  "zh": "针对上述 Ref2VA 和 FL2VA 两大主干，Pika 官方与 LightX2V 团队各自推出了严格一一对应的 2 款专属 LoRA（共 2+2 四大核心 LoRA，挂载在 UNETLoader 与 MiniMaxH3SigmaShift 之间）：",
                  "en": "Matched 1-to-1 with the Ref2VA and FL2VA backbones, Pika and LightX2V each provide 2 dedicated LoRAs (wired via LoraLoaderModelOnly between UNETLoader and MiniMaxH3SigmaShift):"
                },
                "rows": {
                  "zh": [
                    [
                      "🔥 Pika Flex · Ref2VA 版 (Pika 第 1 款)",
                      "loras/pika_h3_flex_ref2va_v1_bf16.safetensors",
                      "专配 Ref2VA 底模 · 推荐 6 步 (strength=1.0)",
                      "Pika 官方针对多参考图锁脸与文生视频调优，大幅强化人物动态表现力、光影质感与电影级运镜，并将采样压缩至 6 步"
                    ],
                    [
                      "🔥 Pika Flex · FL2VA 版 (Pika 第 2 款)",
                      "loras/pika_h3_flex_fl2va_v1_bf16.safetensors",
                      "专配 FL2VA 底模 · 推荐 6 步 (strength=1.0)",
                      "Pika 官方针对首尾帧/图生视频 (I2V) 及镜头接续调优，彻底解决首帧僵硬问题，让静态图起步动作更自然饱满"
                    ],
                    [
                      "⚡ LightX2V Turbo · Ref2V 版 (LightX2V 第 1 款)",
                      "loras/minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors\n(及 lightx2v 仓库 v1.0_4step / v1.1_8step)",
                      "专配 Ref2VA 底模 · 4 步或 8 步极速蒸馏",
                      "LightX2V 团队出品的多参考图/文生视频步数蒸馏 LoRA，把原生 20 步直接压缩至 4 步或 8 步，速度暴涨 3~4 倍"
                    ],
                    [
                      "⚡ LightX2V Turbo · FL2V 版 (LightX2V 第 2 款)",
                      "loras/minimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors\nloras/minimax_h3_fl2v_turbo_8step_v1.0_comfyui_bf16.safetensors",
                      "专配 FL2VA 底模 · 4 步 (768p) 或 8 步极速蒸馏",
                      "LightX2V 团队出品的首尾帧图生视频 (I2V) 步数蒸馏 LoRA（含最新 v1.3_4step_768p 与 v1.1_8step），极速驱动高清首尾帧"
                    ]
                  ],
                  "en": [
                    [
                      "🔥 Pika Flex · Ref2VA Edition (Pika LoRA #1)",
                      "loras/pika_h3_flex_ref2va_v1_bf16.safetensors",
                      "For Ref2VA Backbone · 6 steps (strength=1.0)",
                      "Pika's official LoRA for Multi-Ref & T2V—boosts motion expressiveness, cinematic lighting, and camera dynamics in 6 steps"
                    ],
                    [
                      "🔥 Pika Flex · FL2VA Edition (Pika LoRA #2)",
                      "loras/pika_h3_flex_fl2va_v1_bf16.safetensors",
                      "For FL2VA Backbone · 6 steps (strength=1.0)",
                      "Pika's official LoRA for First/Last-Frame I2V & shot continuation—eliminates first-frame stiffness"
                    ],
                    [
                      "⚡ LightX2V Turbo · Ref2V Edition (LightX2V LoRA #1)",
                      "loras/minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors\n(plus lightx2v repo v1.0_4step / v1.1_8step)",
                      "For Ref2VA Backbone · 4-Step or 8-Step Distillation",
                      "LightX2V's step-distilled LoRA for Ref2VA/T2V—compresses 20-step native sampling to 4 or 8 steps"
                    ],
                    [
                      "⚡ LightX2V Turbo · FL2V Edition (LightX2V LoRA #2)",
                      "loras/minimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors\nloras/minimax_h3_fl2v_turbo_8step_v1.0_comfyui_bf16.safetensors",
                      "For FL2VA Backbone · 4-Step (768p) or 8-Step Distillation",
                      "LightX2V's step-distilled LoRA for First/Last-Frame I2V (including v1.3_4step_768p & v1.1_8step)"
                    ]
                  ]
                }
              },
              {
                "title": {
                  "zh": "三、主干模型的 5 种裁剪与量化精度怎么选？",
                  "en": "3. Choosing Among the 5 Quantization & Pruning Editions"
                },
                "desc": {
                  "zh": "在官方仓库中，Ref2VA 和 FL2VA 各自提供了 6 个不同后缀的文件，按显存大小对号入座：",
                  "en": "Inside Comfy-Org/MiniMax-H3, both Ref2VA and FL2VA come in 6 weight variants. Pick based on your GPU VRAM:"
                },
                "rows": {
                  "zh": [
                    [
                      "⭐ Pruned INT8 ConvRot (最推荐)",
                      "minimax_h3_ref2va_pruned_int8_convrot.safetensors\nminimax_h3_fl2va_pruned_int8_convrot.safetensors",
                      "约 27.3 GB · 推荐 A100 40G / RTX 4090 / 5090",
                      "剔除冗余层 + 正交旋转 INT8 量化，配合 comfy-kitchen 算子，速度最快且画质与 BF16 几乎无差"
                    ],
                    [
                      "Pruned FP8 Scaled",
                      "minimax_h3_ref2va_pruned_fp8_scaled.safetensors\nminimax_h3_fl2va_pruned_fp8_scaled.safetensors",
                      "约 27 GB · 适合 40系/H100 原生 FP8 显卡",
                      "FP8 缩放量化，无需旋转算子即可直接加载，精度略逊于 INT8 ConvRot"
                    ],
                    [
                      "Pruned W6A8 (低显存优选)",
                      "minimax_h3_ref2va_pruned_w6a8.safetensors\nminimax_h3_fl2va_pruned_w6a8.safetensors",
                      "约 20 GB · 适合 24GB 显卡 (L4 / 3090 / 4090)",
                      "6-bit 权重 + 8-bit 激活极限压缩，显著缓解 24GB 显卡的内存交换压力"
                    ],
                    [
                      "Pruned BF16 (无损裁剪版)",
                      "minimax_h3_ref2va_pruned_bf16.safetensors\nminimax_h3_fl2va_pruned_bf16.safetensors",
                      "约 54 GB · 适合 A100 80GB / H100",
                      "16 位半精度无损版（已剔除无效层），单卡 80GB 追求极限基准画质时使用"
                    ],
                    [
                      "Full BF16 / Full INT8 (未裁剪原版)",
                      "minimax_h3_ref2va_bf16.safetensors\nminimax_h3_ref2va_int8_convrot.safetensors",
                      "体积偏大 · 仅供研究对比",
                      "包含未裁剪的冗余层，日常推理一律优先选带 pruned 的版本"
                    ]
                  ],
                  "en": [
                    [
                      "⭐ Pruned INT8 ConvRot (Best Overall)",
                      "minimax_h3_ref2va_pruned_int8_convrot.safetensors\nminimax_h3_fl2va_pruned_int8_convrot.safetensors",
                      "~27.3 GB · Best for A100 40G / RTX 4090 / 5090",
                      "Pruned + Hadamard rotation INT8 quantization with comfy-kitchen kernels—near-BF16 quality at 2x speed"
                    ],
                    [
                      "Pruned FP8 Scaled",
                      "minimax_h3_ref2va_pruned_fp8_scaled.safetensors\nminimax_h3_fl2va_pruned_fp8_scaled.safetensors",
                      "~27 GB · Ada / Hopper FP8 GPUs",
                      "Standard FP8 scaled weights; works without rotation kernels"
                    ],
                    [
                      "Pruned W6A8 (24GB Friendly)",
                      "minimax_h3_ref2va_pruned_w6a8.safetensors\nminimax_h3_fl2va_pruned_w6a8.safetensors",
                      "~20 GB · Best for 24GB GPUs (L4 / 3090 / 4090)",
                      "6-bit weights / 8-bit activations to reduce offloading overhead on 24GB cards"
                    ],
                    [
                      "Pruned BF16 (Lossless Pruned)",
                      "minimax_h3_ref2va_pruned_bf16.safetensors\nminimax_h3_fl2va_pruned_bf16.safetensors",
                      "~54 GB · For A100 80GB / H100",
                      "Full 16-bit precision with dead layers pruned"
                    ],
                    [
                      "Full BF16 / Full INT8 (Unpruned)",
                      "minimax_h3_ref2va_bf16.safetensors\nminimax_h3_ref2va_int8_convrot.safetensors",
                      "Largest · Archival / Research only",
                      "Contains unpruned layers; always prefer the pruned variants for inference"
                    ]
                  ]
                }
              },
              {
                "title": {
                  "zh": "四、大脑（Qwen3-VL 32B 编码器）与眼耳（VAE）版本",
                  "en": "4. Vision/Text Encoder (Qwen3-VL 32B) & VAE Variants"
                },
                "desc": {
                  "zh": "除了主干模型与双 LoRA，另外三个配套零件也有不同精度版本：",
                  "en": "The supporting encoder and VAE components also offer targeted precision tiers:"
                },
                "rows": {
                  "zh": [
                    [
                      "大脑 · INT8 ConvRot (A100 推荐)",
                      "text_encoders/qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                      "约 32 GB",
                      "8 位旋转量化版 32B 视觉大脑，精准识别提示词与 <Picture 1> 人物特征"
                    ],
                    [
                      "大脑 · NVFP4 AWQ (24GB 显卡救星)",
                      "text_encoders/qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors",
                      "约 18 GB",
                      "4 位 AWQ 量化版，把 32B 编码器体积再砍近一半，Colab L4 (24GB) 强烈推荐"
                    ],
                    [
                      "眼睛 · Video VAE / SOL VAE",
                      "vae/minimax_h3_video_vae_int8_convrot.safetensors\nvae/minimax_h3_sol_vae_int8_convrot.safetensors",
                      "画面解码器 (均有 int8 与 fp16 版)",
                      "标准版 video_vae 最稳；sol_vae 针对高频纹理做了锐化调优"
                    ],
                    [
                      "耳朵 · Audio VAE (唯一 FP32)",
                      "vae/minimax_h3_audio_vae_fp32.safetensors",
                      "全精度 FP32",
                      "音频波形对精度极敏感，官方仅提供 FP32 全精度版以确保人声清澈无电流声"
                    ]
                  ],
                  "en": [
                    [
                      "Brain · INT8 ConvRot (A100 Default)",
                      "text_encoders/qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                      "~32 GB",
                      "INT8 rotation-quantized 32B VLM for high-fidelity prompt & reference image understanding"
                    ],
                    [
                      "Brain · NVFP4 AWQ (For 24GB GPUs)",
                      "text_encoders/qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors",
                      "~18 GB",
                      "4-bit AWQ quantized 32B VLM—cuts memory nearly in half for L4 / 3090 / 4090 GPUs"
                    ],
                    [
                      "Eyes · Video VAE / SOL VAE",
                      "vae/minimax_h3_video_vae_int8_convrot.safetensors\nvae/minimax_h3_sol_vae_int8_convrot.safetensors",
                      "Video Decoder (int8 & fp16)",
                      "Standard video_vae is default; sol_vae is tuned for crisper high-frequency detail"
                    ],
                    [
                      "Ears · Audio VAE (FP32 Only)",
                      "vae/minimax_h3_audio_vae_fp32.safetensors",
                      "Full FP32 Precision",
                      "Audio waveforms require full FP32 precision to avoid metallic quantization artifacts"
                    ]
                  ]
                }
              }
            ],
            "workflows": [
              {
                "key": "ref2va",
                "name": "01_MiniMax_H3_Base_Ref2VA.json",
                "label": {
                  "zh": "01 · 官方 Ref2VA 多参考图工作流",
                  "en": "01 · Official Ref2VA Multi-Ref"
                },
                "badge": {
                  "zh": "官方基准",
                  "en": "Official Base"
                },
                "desc": {
                  "zh": "使用官方 minimax_h3_ref2va_pruned_int8_convrot 底模，连入参考图并在提示词写 <Picture 1> 锁定人物。",
                  "en": "Uses official minimax_h3_ref2va_pruned_int8_convrot and <Picture 1> prompt binding."
                },
                "steps": {
                  "zh": [
                    [
                      "加载官方四大件",
                      "UNET · CLIP · 双 VAE",
                      "加载官方 ref2va_pruned_int8、Qwen3-VL 32B 与双 VAE"
                    ],
                    [
                      "参考图 + 提示词",
                      "LoadImage #901",
                      "图片接 ref_image_0，提示词写 <Picture 1> 绑定身份"
                    ],
                    [
                      "信噪比偏移与潜空间",
                      "SigmaShift #142 · RefToVideo #131",
                      "shift 12.0 / 3.0，864×480，124 帧"
                    ],
                    [
                      "20 步原生采样",
                      "SamplerCustomAdvanced #125",
                      "res_multistep 采样器 + simple 调度 (20步)"
                    ],
                    [
                      "双路解码合成",
                      "VAEDecode · VAEDecodeAudio",
                      "画面与声音分别解码，24fps 合成 MP4"
                    ]
                  ],
                  "en": [
                    [
                      "Load 4 Official Weights",
                      "UNET · CLIP · Dual VAE",
                      "Official ref2va_pruned_int8, Qwen3-VL 32B & Dual VAEs"
                    ],
                    [
                      "Ref Image + Prompt",
                      "LoadImage #901",
                      "Connect to ref_image_0 and reference via <Picture 1>"
                    ],
                    [
                      "Shift & Latent",
                      "SigmaShift #142 · RefToVideo #131",
                      "shift 12.0 / 3.0, 864×480, 124 frames"
                    ],
                    [
                      "20-Step Sampling",
                      "SamplerCustomAdvanced #125",
                      "res_multistep sampler + simple scheduler (20 steps)"
                    ],
                    [
                      "Dual Decode & Mux",
                      "VAEDecode · VAEDecodeAudio",
                      "Decode video & audio latents, mux at 24fps"
                    ]
                  ]
                },
                "content": {
                  "1": {
                    "class_type": "PrimitiveStringMultiline",
                    "inputs": {
                      "value": "Cinematic medium shot. Keep the character identity, facial features, and outfit from <Picture 1>. She turns toward the camera with a gentle smile and speaks naturally in a warm sunlit cafe."
                    },
                    "_meta": {
                      "title": "1. 正向提示词 (使用 <Picture 1> 引用参考图)"
                    }
                  },
                  "119": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_video_vae_int8_convrot.safetensors"
                    },
                    "_meta": {
                      "title": "2. 视频解码器 (Video VAE INT8)"
                    }
                  },
                  "120": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_audio_vae_fp32.safetensors"
                    },
                    "_meta": {
                      "title": "3. 音频解码器 (Audio VAE FP32)"
                    }
                  },
                  "128": {
                    "class_type": "CLIPLoader",
                    "inputs": {
                      "clip_name": "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                      "type": "minimax",
                      "device": "default"
                    },
                    "_meta": {
                      "title": "4. 多模态视觉/文本编码器 (Qwen3-VL 32B INT8)"
                    }
                  },
                  "127": {
                    "class_type": "UNETLoader",
                    "inputs": {
                      "unet_name": "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                      "weight_dtype": "default"
                    },
                    "_meta": {
                      "title": "5. MiniMax H3 官方基础主干 (Ref2VA Pruned INT8)"
                    }
                  },
                  "142": {
                    "class_type": "MiniMaxH3SigmaShift",
                    "inputs": {
                      "model": [
                        "127",
                        0
                      ],
                      "shift_video": 12.0,
                      "shift_audio": 3.0
                    },
                    "_meta": {
                      "title": "6. 音画信噪比时间步偏移 (Video=12.0, Audio=3.0)"
                    }
                  },
                  "131": {
                    "class_type": "MiniMaxH3ReferenceToVideo",
                    "inputs": {
                      "clip": [
                        "128",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ],
                      "audio_vae": [
                        "120",
                        0
                      ],
                      "prompt": [
                        "1",
                        0
                      ],
                      "width": 864,
                      "height": 480,
                      "length": 124,
                      "ref_image_size": "match",
                      "ref_images.ref_image_0": [
                        "901",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "7. 多参考图生音视频 (Ref2VA · 864x480 · 124帧)"
                    }
                  },
                  "129": {
                    "class_type": "RandomNoise",
                    "inputs": {
                      "noise_seed": 42
                    },
                    "_meta": {
                      "title": "8. 随机种子 (RandomNoise)"
                    }
                  },
                  "135": {
                    "class_type": "KSamplerSelect",
                    "inputs": {
                      "sampler_name": "res_multistep"
                    },
                    "_meta": {
                      "title": "9. 采样算法 (res_multistep)"
                    }
                  },
                  "124": {
                    "class_type": "BasicScheduler",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "scheduler": "simple",
                      "steps": 20,
                      "denoise": 1.0
                    },
                    "_meta": {
                      "title": "10. 步数调度器 (官方基础版 20 步)"
                    }
                  },
                  "126": {
                    "class_type": "BasicGuider",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "conditioning": [
                        "131",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "11. 基础条件引导 (BasicGuider)"
                    }
                  },
                  "125": {
                    "class_type": "SamplerCustomAdvanced",
                    "inputs": {
                      "noise": [
                        "129",
                        0
                      ],
                      "guider": [
                        "126",
                        0
                      ],
                      "sampler": [
                        "135",
                        0
                      ],
                      "sigmas": [
                        "124",
                        0
                      ],
                      "latent_image": [
                        "131",
                        1
                      ]
                    },
                    "_meta": {
                      "title": "12. 核心音视频联合采样器 (SamplerCustomAdvanced)"
                    }
                  },
                  "122": {
                    "class_type": "VAEDecode",
                    "inputs": {
                      "samples": [
                        "125",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "13. 画面潜变量解码 (VAEDecode)"
                    }
                  },
                  "121": {
                    "class_type": "VAEDecodeAudio",
                    "inputs": {
                      "samples": [
                        "125",
                        0
                      ],
                      "vae": [
                        "120",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "14. 声音潜变量解码 (VAEDecodeAudio)"
                    }
                  },
                  "130": {
                    "class_type": "CreateVideo",
                    "inputs": {
                      "images": [
                        "122",
                        0
                      ],
                      "audio": [
                        "121",
                        0
                      ],
                      "fps": 24,
                      "bit_depth": 8
                    },
                    "_meta": {
                      "title": "15. 音画合成视频 (24 FPS)"
                    }
                  },
                  "92": {
                    "class_type": "SaveVideo",
                    "inputs": {
                      "video": [
                        "130",
                        0
                      ],
                      "format": "auto",
                      "codec": "auto",
                      "filename_prefix": "minimax_h3/base_ref2va"
                    },
                    "_meta": {
                      "title": "16. 保存视频 (SaveVideo)"
                    }
                  },
                  "901": {
                    "class_type": "LoadImage",
                    "inputs": {
                      "image": "reference_1.png"
                    },
                    "_meta": {
                      "title": "2. 参考图 1 -> 对应提示词 <Picture 1>"
                    }
                  }
                }
              },
              {
                "key": "t2v",
                "name": "02_MiniMax_H3_Base_T2V.json",
                "label": {
                  "zh": "02 · 官方 T2V 纯文生音视频工作流",
                  "en": "02 · Official Pure T2V Workflow"
                },
                "badge": {
                  "zh": "",
                  "en": ""
                },
                "desc": {
                  "zh": "不连接任何参考图，直接用文字提示词驱动官方底座生成 5.1 秒原生有声视频。",
                  "en": "No reference image required—generate 5.1s of native audio-synced video purely from text."
                },
                "steps": {
                  "zh": [
                    [
                      "加载官方四大件",
                      "UNET · CLIP · 双 VAE",
                      "加载官方 ref2va/fl2va INT8 主干、32B 编码器与双 VAE"
                    ],
                    [
                      "编写分镜提示词",
                      "PrimitiveStringMultiline #1",
                      "描述画面景别、人物动作与环境声音"
                    ],
                    [
                      "信噪比偏移与潜空间",
                      "SigmaShift #142 · RefToVideo #131",
                      "不连 ref_images 端口即为纯文生视频模式"
                    ],
                    [
                      "20 步原生采样",
                      "SamplerCustomAdvanced #125",
                      "res_multistep 采样器 + simple 调度 (20步)"
                    ],
                    [
                      "双路解码合成",
                      "VAEDecode · VAEDecodeAudio",
                      "画面与声音分别解码，24fps 合成 MP4"
                    ]
                  ],
                  "en": [
                    [
                      "Load 4 Official Weights",
                      "UNET · CLIP · Dual VAE",
                      "Official INT8 backbone, 32B VLM & Dual VAEs"
                    ],
                    [
                      "Text Prompt",
                      "PrimitiveStringMultiline #1",
                      "Describe camera framing, motion, and audio"
                    ],
                    [
                      "Shift & Latent",
                      "SigmaShift #142 · RefToVideo #131",
                      "Leave ref_images unconnected for pure T2V"
                    ],
                    [
                      "20-Step Sampling",
                      "SamplerCustomAdvanced #125",
                      "res_multistep sampler + simple scheduler (20 steps)"
                    ],
                    [
                      "Dual Decode & Mux",
                      "VAEDecode · VAEDecodeAudio",
                      "Decode video & audio latents, mux at 24fps"
                    ]
                  ]
                },
                "content": {
                  "1": {
                    "class_type": "PrimitiveStringMultiline",
                    "inputs": {
                      "value": "A cinematic medium shot of a young woman standing on a rainy neon-lit balcony at night, looking at the city skyline. She speaks softly with natural lip movement while gentle rain and distant city ambience echo in the background."
                    },
                    "_meta": {
                      "title": "1. 正向提示词 (Prompt)"
                    }
                  },
                  "119": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_video_vae_int8_convrot.safetensors"
                    },
                    "_meta": {
                      "title": "2. 视频解码器 (Video VAE INT8)"
                    }
                  },
                  "120": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_audio_vae_fp32.safetensors"
                    },
                    "_meta": {
                      "title": "3. 音频解码器 (Audio VAE FP32)"
                    }
                  },
                  "128": {
                    "class_type": "CLIPLoader",
                    "inputs": {
                      "clip_name": "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                      "type": "minimax",
                      "device": "default"
                    },
                    "_meta": {
                      "title": "4. 多模态视觉/文本编码器 (Qwen3-VL 32B INT8)"
                    }
                  },
                  "127": {
                    "class_type": "UNETLoader",
                    "inputs": {
                      "unet_name": "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                      "weight_dtype": "default"
                    },
                    "_meta": {
                      "title": "5. MiniMax H3 官方基础主干 (Ref2VA Pruned INT8)"
                    }
                  },
                  "142": {
                    "class_type": "MiniMaxH3SigmaShift",
                    "inputs": {
                      "model": [
                        "127",
                        0
                      ],
                      "shift_video": 12.0,
                      "shift_audio": 3.0
                    },
                    "_meta": {
                      "title": "6. 音画信噪比时间步偏移 (Video=12.0, Audio=3.0)"
                    }
                  },
                  "131": {
                    "class_type": "MiniMaxH3ReferenceToVideo",
                    "inputs": {
                      "clip": [
                        "128",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ],
                      "audio_vae": [
                        "120",
                        0
                      ],
                      "prompt": [
                        "1",
                        0
                      ],
                      "width": 864,
                      "height": 480,
                      "length": 124,
                      "ref_image_size": "match"
                    },
                    "_meta": {
                      "title": "7. 文生音视频条件与潜空间 (864x480 · 124帧)"
                    }
                  },
                  "129": {
                    "class_type": "RandomNoise",
                    "inputs": {
                      "noise_seed": 42
                    },
                    "_meta": {
                      "title": "8. 随机种子 (RandomNoise)"
                    }
                  },
                  "135": {
                    "class_type": "KSamplerSelect",
                    "inputs": {
                      "sampler_name": "res_multistep"
                    },
                    "_meta": {
                      "title": "9. 采样算法 (res_multistep)"
                    }
                  },
                  "124": {
                    "class_type": "BasicScheduler",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "scheduler": "simple",
                      "steps": 20,
                      "denoise": 1.0
                    },
                    "_meta": {
                      "title": "10. 步数调度器 (官方基础版 20 步)"
                    }
                  },
                  "126": {
                    "class_type": "BasicGuider",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "conditioning": [
                        "131",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "11. 基础条件引导 (BasicGuider)"
                    }
                  },
                  "125": {
                    "class_type": "SamplerCustomAdvanced",
                    "inputs": {
                      "noise": [
                        "129",
                        0
                      ],
                      "guider": [
                        "126",
                        0
                      ],
                      "sampler": [
                        "135",
                        0
                      ],
                      "sigmas": [
                        "124",
                        0
                      ],
                      "latent_image": [
                        "131",
                        1
                      ]
                    },
                    "_meta": {
                      "title": "12. 核心音视频联合采样器 (SamplerCustomAdvanced)"
                    }
                  },
                  "122": {
                    "class_type": "VAEDecode",
                    "inputs": {
                      "samples": [
                        "125",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "13. 画面潜变量解码 (VAEDecode)"
                    }
                  },
                  "121": {
                    "class_type": "VAEDecodeAudio",
                    "inputs": {
                      "samples": [
                        "125",
                        0
                      ],
                      "vae": [
                        "120",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "14. 声音潜变量解码 (VAEDecodeAudio)"
                    }
                  },
                  "130": {
                    "class_type": "CreateVideo",
                    "inputs": {
                      "images": [
                        "122",
                        0
                      ],
                      "audio": [
                        "121",
                        0
                      ],
                      "fps": 24,
                      "bit_depth": 8
                    },
                    "_meta": {
                      "title": "15. 音画合成视频 (24 FPS)"
                    }
                  },
                  "92": {
                    "class_type": "SaveVideo",
                    "inputs": {
                      "video": [
                        "130",
                        0
                      ],
                      "format": "auto",
                      "codec": "auto",
                      "filename_prefix": "minimax_h3/base_t2v"
                    },
                    "_meta": {
                      "title": "16. 保存视频 (SaveVideo)"
                    }
                  }
                }
              },
              {
                "key": "fl2va",
                "name": "03_MiniMax_H3_Base_FL2VA_I2V.json",
                "label": {
                  "zh": "03 · 官方 FL2VA 首帧图生音视频工作流",
                  "en": "03 · Official FL2VA First-Frame I2V"
                },
                "badge": {
                  "zh": "",
                  "en": ""
                },
                "desc": {
                  "zh": "使用官方 minimax_h3_fl2va_pruned_int8_convrot 底模 + MiniMaxH3AddGuide 锁定第 0 帧起始画面。",
                  "en": "Uses official minimax_h3_fl2va_pruned_int8_convrot + MiniMaxH3AddGuide to animate from frame 0."
                },
                "steps": {
                  "zh": [
                    [
                      "加载 FL2VA 四大件",
                      "UNET (FL2VA) · CLIP · 双 VAE",
                      "加载官方 fl2va_pruned_int8 主干、32B 编码器与双 VAE"
                    ],
                    [
                      "加载起始首帧图",
                      "LoadImage #902",
                      "输入想要动起来的静态图或上一镜末帧"
                    ],
                    [
                      "注入第 0 帧引导",
                      "MiniMaxH3AddGuide #903",
                      "设置 frame_idx = 0 锁定起始帧"
                    ],
                    [
                      "20 步原生采样",
                      "SamplerCustomAdvanced #125",
                      "连接 AddGuide 输出的条件与潜变量采样"
                    ],
                    [
                      "双路解码合成",
                      "VAEDecode · VAEDecodeAudio",
                      "画面与声音分别解码，24fps 合成 MP4"
                    ]
                  ],
                  "en": [
                    [
                      "Load FL2VA Weights",
                      "UNET (FL2VA) · CLIP · Dual VAE",
                      "Official fl2va_pruned_int8 backbone, 32B VLM & Dual VAEs"
                    ],
                    [
                      "Load Start Image",
                      "LoadImage #902",
                      "Input the starting still image or previous shot's last frame"
                    ],
                    [
                      "Inject Frame-0 Guide",
                      "MiniMaxH3AddGuide #903",
                      "Set frame_idx = 0 to lock the starting frame"
                    ],
                    [
                      "20-Step Sampling",
                      "SamplerCustomAdvanced #125",
                      "Sample using conditioning & latent from AddGuide"
                    ],
                    [
                      "Dual Decode & Mux",
                      "VAEDecode · VAEDecodeAudio",
                      "Decode video & audio latents, mux at 24fps"
                    ]
                  ]
                },
                "content": {
                  "1": {
                    "class_type": "PrimitiveStringMultiline",
                    "inputs": {
                      "value": "Continue the motion naturally from the starting frame. The character slowly looks up toward the sky as wind gently moves her hair, with soft ambient breeze sound."
                    },
                    "_meta": {
                      "title": "1. 正向提示词 (Prompt)"
                    }
                  },
                  "119": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_video_vae_int8_convrot.safetensors"
                    },
                    "_meta": {
                      "title": "2. 视频解码器 (Video VAE INT8)"
                    }
                  },
                  "120": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_audio_vae_fp32.safetensors"
                    },
                    "_meta": {
                      "title": "3. 音频解码器 (Audio VAE FP32)"
                    }
                  },
                  "128": {
                    "class_type": "CLIPLoader",
                    "inputs": {
                      "clip_name": "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                      "type": "minimax",
                      "device": "default"
                    },
                    "_meta": {
                      "title": "4. 多模态视觉/文本编码器 (Qwen3-VL 32B INT8)"
                    }
                  },
                  "127": {
                    "class_type": "UNETLoader",
                    "inputs": {
                      "unet_name": "minimax_h3_fl2va_pruned_int8_convrot.safetensors",
                      "weight_dtype": "default"
                    },
                    "_meta": {
                      "title": "5. MiniMax H3 官方首尾帧主干 (FL2VA Pruned INT8)"
                    }
                  },
                  "142": {
                    "class_type": "MiniMaxH3SigmaShift",
                    "inputs": {
                      "model": [
                        "127",
                        0
                      ],
                      "shift_video": 12.0,
                      "shift_audio": 3.0
                    },
                    "_meta": {
                      "title": "6. 音画信噪比时间步偏移 (Video=12.0, Audio=3.0)"
                    }
                  },
                  "131": {
                    "class_type": "MiniMaxH3ReferenceToVideo",
                    "inputs": {
                      "clip": [
                        "128",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ],
                      "audio_vae": [
                        "120",
                        0
                      ],
                      "prompt": [
                        "1",
                        0
                      ],
                      "width": 864,
                      "height": 480,
                      "length": 124,
                      "ref_image_size": "match"
                    },
                    "_meta": {
                      "title": "7. 文生音视频条件与潜空间 (864x480 · 124帧)"
                    }
                  },
                  "129": {
                    "class_type": "RandomNoise",
                    "inputs": {
                      "noise_seed": 42
                    },
                    "_meta": {
                      "title": "8. 随机种子 (RandomNoise)"
                    }
                  },
                  "135": {
                    "class_type": "KSamplerSelect",
                    "inputs": {
                      "sampler_name": "res_multistep"
                    },
                    "_meta": {
                      "title": "9. 采样算法 (res_multistep)"
                    }
                  },
                  "124": {
                    "class_type": "BasicScheduler",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "scheduler": "simple",
                      "steps": 20,
                      "denoise": 1.0
                    },
                    "_meta": {
                      "title": "10. 步数调度器 (官方基础版 20 步)"
                    }
                  },
                  "126": {
                    "class_type": "BasicGuider",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "conditioning": [
                        "903",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "11. 基础条件引导 (BasicGuider)"
                    }
                  },
                  "125": {
                    "class_type": "SamplerCustomAdvanced",
                    "inputs": {
                      "noise": [
                        "129",
                        0
                      ],
                      "guider": [
                        "126",
                        0
                      ],
                      "sampler": [
                        "135",
                        0
                      ],
                      "sigmas": [
                        "124",
                        0
                      ],
                      "latent_image": [
                        "903",
                        1
                      ]
                    },
                    "_meta": {
                      "title": "12. 核心音视频联合采样器 (SamplerCustomAdvanced)"
                    }
                  },
                  "122": {
                    "class_type": "VAEDecode",
                    "inputs": {
                      "samples": [
                        "125",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "13. 画面潜变量解码 (VAEDecode)"
                    }
                  },
                  "121": {
                    "class_type": "VAEDecodeAudio",
                    "inputs": {
                      "samples": [
                        "125",
                        0
                      ],
                      "vae": [
                        "120",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "14. 声音潜变量解码 (VAEDecodeAudio)"
                    }
                  },
                  "130": {
                    "class_type": "CreateVideo",
                    "inputs": {
                      "images": [
                        "122",
                        0
                      ],
                      "audio": [
                        "121",
                        0
                      ],
                      "fps": 24,
                      "bit_depth": 8
                    },
                    "_meta": {
                      "title": "15. 音画合成视频 (24 FPS)"
                    }
                  },
                  "92": {
                    "class_type": "SaveVideo",
                    "inputs": {
                      "video": [
                        "130",
                        0
                      ],
                      "format": "auto",
                      "codec": "auto",
                      "filename_prefix": "minimax_h3/base_fl2va_i2v"
                    },
                    "_meta": {
                      "title": "16. 保存视频 (SaveVideo)"
                    }
                  },
                  "902": {
                    "class_type": "LoadImage",
                    "inputs": {
                      "image": "start_frame.png"
                    },
                    "_meta": {
                      "title": "2. 首帧引导图 (第 0 帧起始画面)"
                    }
                  },
                  "903": {
                    "class_type": "MiniMaxH3AddGuide",
                    "inputs": {
                      "positive": [
                        "131",
                        0
                      ],
                      "latent": [
                        "131",
                        1
                      ],
                      "vae": [
                        "119",
                        0
                      ],
                      "audio_vae": [
                        "120",
                        0
                      ],
                      "image": [
                        "902",
                        0
                      ],
                      "frame_idx": 0
                    },
                    "_meta": {
                      "title": "8. 注入首帧引导 (MiniMaxH3AddGuide · frame_idx=0)"
                    }
                  }
                }
              }
            ],
            "colab": {
              "name": "MiniMax_H3_Base_Colab.py",
              "gpu": {
                "zh": "A100 40GB（推荐）/ L4 24GB（可设 TE_QUANT_MODE=nvfp4）",
                "en": "A100 40GB (Recommended) / L4 24GB (supports TE_QUANT_MODE=nvfp4)"
              },
              "secrets": {
                "zh": [
                  [
                    "DOWNLOAD_FL2VA",
                    "可选，设为 1 时额外下载 fl2va_pruned_int8_convrot 底模"
                  ],
                  [
                    "TE_QUANT_MODE",
                    "默认 int8；24GB 显卡可设为 nvfp4 切换 18GB 轻量版 32B 编码器"
                  ],
                  [
                    "CF_TUNNEL_TOKEN",
                    "可选，不填则自动生成 trycloudflare.com 免费公网链接"
                  ]
                ],
                "en": [
                  [
                    "DOWNLOAD_FL2VA",
                    "Optional: set to 1 to also download fl2va_pruned_int8_convrot"
                  ],
                  [
                    "TE_QUANT_MODE",
                    "Default int8; set to nvfp4 on 24GB GPUs to use the 18GB 4-bit 32B encoder"
                  ],
                  [
                    "CF_TUNNEL_TOKEN",
                    "Optional custom tunnel token; auto-generates free trycloudflare.com URL if omitted"
                  ]
                ]
              },
              "content": "# -*- coding: utf-8 -*-\n\"\"\"\nMiniMax H3 开源音视频模型 · 官方基础版 (Official Base Edition) Colab 一键启动脚本\n====================================================================================================\n仓库来源：https://huggingface.co/Comfy-Org/MiniMax-H3\n适用环境：Google Colab (推荐 A100 40GB / L4 24GB) 或 Linux NVIDIA GPU\n\n核心功能：\n1. 【官方纯净四大件】全部从 Comfy-Org/MiniMax-H3 官方仓库拉取，不含任何魔改或第三方杂乱插件：\n   - 扩散主干 (默认下载 Ref2VA Pruned INT8，可按需开启 FL2VA)：\n     diffusion_models/minimax_h3_ref2va_pruned_int8_convrot.safetensors\n   - 多模态视觉/文本编码器 (A100 默认下 INT8，24GB 显卡自动可选 NVFP4 AWQ)：\n     text_encoders/qwen3vl_32b_minimax_h3_int8_convrot.safetensors\n   - 视频解码器：vae/minimax_h3_video_vae_int8_convrot.safetensors\n   - 音频解码器：vae/minimax_h3_audio_vae_fp32.safetensors\n2. 【算子加速】自动安装并验证官方 comfy-kitchen (0.2.39/0.2.38) CUDA INT8 Attention 算子。\n3. 【开箱即用】自动将 3 套官方基础工作流（Ref2VA 多参考图 / T2V 文生视频 / FL2VA 首帧图生视频）写入 ComfyUI 菜单。\n4. 【公网访问】支持自定义 CF_TUNNEL_TOKEN 固定域名，或免注册自动生成 trycloudflare.com 公网链接。\n\"\"\"\n\nfrom __future__ import annotations\n\nimport json\nimport os\nimport re\nimport shutil\nimport socket\nimport subprocess\nimport sys\nimport time\nimport urllib.request\nfrom concurrent.futures import ThreadPoolExecutor, as_completed\nfrom pathlib import Path\n\nBASE = Path(\"/content\") if Path(\"/content\").exists() else Path.cwd()\nCOMFY = BASE / \"ComfyUI\"\nPORT = 8188\n\n# 固定经过验证的 ComfyUI 核心提交号（完整 40 位 SHA，防止主分支漂移）\nCOMFY_REV = \"b1a247c9cf9dbfda4b2c0a0c1d50950667eeaa0c\"\nKITCHEN_VERSIONS = (\"0.2.39\", \"0.2.38\")\n\n# 可选开关：设为 \"1\" 时额外下载 FL2VA 首尾帧专用底模；设为 \"nvfp4\" 时使用 24GB 显存友好的 NVFP4 文本编码器\nDOWNLOAD_FL2VA = os.getenv(\"DOWNLOAD_FL2VA\", \"0\").strip() == \"1\"\nTE_QUANT_MODE = os.getenv(\"TE_QUANT_MODE\", \"int8\").strip().lower()  # \"int8\" 或 \"nvfp4\"\n\nTE_FILENAME = (\n    \"text_encoders/qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors\"\n    if TE_QUANT_MODE == \"nvfp4\"\n    else \"text_encoders/qwen3vl_32b_minimax_h3_int8_convrot.safetensors\"\n)\n\n# ===== Comfy-Org/MiniMax-H3 官方基础版四大核心权重 + Pika Flex / LightX2V 双 LoRA 清单 =====\nBASE_MODELS = [\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"diffusion_models/minimax_h3_ref2va_pruned_int8_convrot.safetensors\",\n        \"diffusion_models\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        TE_FILENAME,\n        \"text_encoders\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"vae/minimax_h3_video_vae_int8_convrot.safetensors\",\n        \"vae\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"0543966fbdce5ba05709a8f2031c94bdba629b4a\",\n        \"vae/minimax_h3_audio_vae_fp32.safetensors\",\n        \"vae\",\n    ),\n    # 1. Pika H3 Flex 2 款官方 LoRA (Ref2VA & FL2VA)\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"loras/pika_h3_flex_ref2va_v1_bf16.safetensors\",\n        \"loras\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"loras/pika_h3_flex_fl2va_v1_bf16.safetensors\",\n        \"loras\",\n    ),\n    # 2. LightX2V Turbo 2 款极速蒸馏 LoRA (Ref2V & FL2V)\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"loras/minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors\",\n        \"loras\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"loras/minimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors\",\n        \"loras\",\n    ),\n]\n\nif DOWNLOAD_FL2VA:\n    BASE_MODELS.append(\n        (\n            \"Comfy-Org/MiniMax-H3\",\n            \"main\",\n            \"diffusion_models/minimax_h3_fl2va_pruned_int8_convrot.safetensors\",\n            \"diffusion_models\",\n        )\n    )\n\n\ndef get_secret(name: str) -> str:\n    value = os.getenv(name, \"\").strip()\n    if value:\n        return value\n    try:\n        from google.colab import userdata\n        return (userdata.get(name) or \"\").strip()\n    except Exception:\n        return \"\"\n\n\ndef run(args, cwd=None, check=True, env=None):\n    if isinstance(args, str):\n        print(\"$\", args, flush=True)\n        p = subprocess.run(args, cwd=cwd, shell=True, check=False, env=env)\n    else:\n        print(\"$\", \" \".join(map(str, args)), flush=True)\n        p = subprocess.run(list(map(str, args)), cwd=cwd, check=False, env=env)\n    if check and p.returncode != 0:\n        raise RuntimeError(\"命令执行失败: \" + (args if isinstance(args, str) else \" \".join(map(str, args))))\n    return p.returncode\n\n\ndef clone_pinned(url: str, path: Path, revision: str):\n    if len(revision) != 40 or any(c not in \"0123456789abcdef\" for c in revision):\n        raise ValueError(f\"必须提供完整 40 位 Git 提交号: {revision}\")\n    fresh = not path.exists()\n    if fresh:\n        run([\"git\", \"clone\", \"--filter=blob:none\", \"--depth\", \"1\", \"--no-checkout\", url, str(path)])\n    if not (path / \".git\").is_dir():\n        shutil.rmtree(path, ignore_errors=True)\n        run([\"git\", \"clone\", \"--filter=blob:none\", \"--depth\", \"1\", \"--no-checkout\", url, str(path)])\n        fresh = True\n\n    current = subprocess.run(\n        [\"git\", \"-C\", str(path), \"rev-parse\", \"HEAD\"],\n        text=True, capture_output=True, check=False,\n    ).stdout.strip()\n    if current == revision:\n        ready = subprocess.run(\n            [\"git\", \"-C\", str(path), \"ls-files\"],\n            text=True, capture_output=True, check=False,\n        ).stdout.strip()\n        if ready:\n            print(f\"⏩ 固定版本已就绪：{path.name} @ {revision[:10]}\", flush=True)\n            return\n    elif not fresh:\n        dirty = subprocess.run(\n            [\"git\", \"-C\", str(path), \"diff\", \"--name-only\", \"HEAD\"],\n            text=True, capture_output=True, check=False,\n        ).stdout.strip()\n        if dirty:\n            run([\"git\", \"-C\", str(path), \"stash\", \"push\", \"-m\", \"minimax-h3-base-pin\"], check=False)\n\n    run([\"git\", \"-C\", str(path), \"remote\", \"set-url\", \"origin\", url])\n    run([\"git\", \"-C\", str(path), \"fetch\", \"--depth\", \"1\", \"origin\", revision])\n    run([\"git\", \"-C\", str(path), \"checkout\", \"-f\", \"--detach\", revision])\n    print(f\"✅ 固定版本：{path.name} @ {revision[:10]}\", flush=True)\n\n\ndef ensure_cuda():\n    code = (\n        \"import torch;\"\n        \"print('Torch:', torch.__version__, 'CUDA:', torch.version.cuda);\"\n        \"print('GPU:', torch.cuda.get_device_name(0) if torch.cuda.is_available() else 'NONE');\"\n        \"raise SystemExit(0 if torch.cuda.is_available() else 2)\"\n    )\n    p = subprocess.run([sys.executable, \"-c\", code], text=True, capture_output=True)\n    print(p.stdout, flush=True)\n    if p.returncode != 0:\n        raise RuntimeError(\"未检测到可用 NVIDIA CUDA GPU，请在 Colab 菜单选择 GPU 运行时 (推荐 A100 / L4)。\")\n\n\ndef install_if_needed(requirements, req_file=None):\n    from importlib.metadata import PackageNotFoundError, version\n    try:\n        try:\n            from packaging.requirements import Requirement\n        except ImportError:\n            from pip._vendor.packaging.requirements import Requirement\n        ready = True\n        for raw in requirements:\n            raw = raw.strip()\n            if not raw or raw.startswith(\"#\"):\n                continue\n            if raw.startswith((\"-r\", \"--\", \"http://\", \"https://\", \"git+\")):\n                ready = False\n                break\n            req = Requirement(raw.split(\" #\", 1)[0].strip())\n            if req.marker and not req.marker.evaluate():\n                continue\n            if req.url or req.extras:\n                ready = False\n                break\n            try:\n                installed = version(req.name)\n            except PackageNotFoundError:\n                ready = False\n                break\n            if req.specifier and not req.specifier.contains(installed, prereleases=True):\n                ready = False\n                break\n        if ready:\n            print(f\"⏩ 依赖已满足: {req_file or '基础依赖'}\", flush=True)\n            return\n    except Exception:\n        pass\n    args = [sys.executable, \"-m\", \"pip\", \"install\", \"-q\", \"--prefer-binary\", \"--disable-pip-version-check\"]\n    args += [\"-r\", str(req_file)] if req_file else list(requirements)\n    run(args)\n\n\ndef install_comfy_requirements():\n    req = COMFY / \"requirements.txt\"\n    if not req.exists():\n        raise RuntimeError(\"ComfyUI requirements.txt 不存在\")\n\n    skip = {\"torch\", \"torchvision\", \"torchaudio\", \"triton\", \"comfy-kitchen\"}\n    kept = []\n    for raw in req.read_text(encoding=\"utf-8\").splitlines():\n        s = raw.strip()\n        if not s or s.startswith(\"#\"):\n            kept.append(raw)\n            continue\n        name = (\n            s.split(\"=\", 1)[0]\n            .split(\"<\", 1)[0]\n            .split(\">\", 1)[0]\n            .split(\"[\", 1)[0]\n            .strip()\n            .lower()\n            .replace(\"_\", \"-\")\n        )\n        if name not in skip:\n            kept.append(raw)\n\n    tmp = BASE / \"comfy_h3_base_requirements.txt\"\n    tmp.write_text(\"\\n\".join(kept) + \"\\n\", encoding=\"utf-8\")\n    install_if_needed(kept, tmp)\n\n\ndef ensure_comfy_kitchen() -> str:\n    from importlib.metadata import version\n    try:\n        cur = version(\"comfy-kitchen\")\n        if cur in KITCHEN_VERSIONS:\n            print(f\"⏩ 官方 comfy-kitchen {cur} 已安装\", flush=True)\n            return cur\n    except Exception:\n        pass\n\n    for ver in KITCHEN_VERSIONS:\n        print(f\"⚡ 安装官方预编译 comfy-kitchen {ver}...\", flush=True)\n        rc = run([\n            sys.executable, \"-m\", \"pip\", \"install\",\n            \"--index-url\", \"https://pypi.org/simple\",\n            \"--only-binary=:all:\", \"--no-deps\", \"--force-reinstall\",\n            \"--no-cache-dir\", f\"comfy-kitchen=={ver}\",\n        ], check=False)\n        if rc == 0:\n            return ver\n    raise RuntimeError(\"comfy-kitchen 预编译 wheel 安装失败\")\n\n\ndef verify_comfy_kitchen():\n    code = r\"\"\"\nimport torch\nimport comfy_kitchen as ck\nfrom importlib.metadata import version\n\nv = version(\"comfy-kitchen\")\nassert torch.cuda.is_available(), \"CUDA 不可用\"\nassert ck.list_backends().get(\"cuda\", {}).get(\"available\"), \"Kitchen CUDA backend 不可用\"\nassert ck.int8_attention_is_available(), \"Kitchen INT8 Attention 不可用\"\nprint(f\"KITCHEN_OK version={v} gpu={torch.cuda.get_device_name(0)}\")\n\"\"\"\n    p = subprocess.run([sys.executable, \"-c\", code], cwd=str(COMFY), text=True, capture_output=True)\n    if p.stdout:\n        print(p.stdout.strip(), flush=True)\n    if p.returncode != 0:\n        if p.stderr:\n            print(p.stderr, flush=True)\n        raise RuntimeError(\"comfy-kitchen GPU 算子预检未通过\")\n\n\n_EXPECTED_SIZE_CACHE = {}\n\n\ndef expected_size(repo: str, rev: str, filename: str):\n    key = (repo, rev, filename)\n    if key in _EXPECTED_SIZE_CACHE:\n        return _EXPECTED_SIZE_CACHE[key]\n    size = None\n    try:\n        from huggingface_hub import HfApi\n        info = HfApi().get_paths_info(\n            repo_id=repo, paths=[filename], revision=rev,\n            token=get_secret(\"HF_TOKEN\") or None,\n        )\n        if info:\n            size = getattr(info[0], \"size\", None)\n    except Exception:\n        pass\n    _EXPECTED_SIZE_CACHE[key] = size\n    return size\n\n\ndef download_one_subprocess(item, disable_xet: bool = False):\n    repo, rev, filename, category = item\n    dst_dir = COMFY / \"models\" / category\n    dst_dir.mkdir(parents=True, exist_ok=True)\n    target = dst_dir / Path(filename).name\n    expect = expected_size(repo, rev, filename)\n\n    if target.is_file() and target.stat().st_size > 1024 * 1024:\n        got = target.stat().st_size\n        if expect is None or got == expect:\n            print(f\"⏩ 已就绪: {target.name} ({got / 1024 ** 3:.2f} GB)\", flush=True)\n            return target\n\n    mode_tag = \"HTTP 直下\" if disable_xet else \"hf-xet 加速\"\n    print(f\"⬇️ 开始下载 [{mode_tag}]: {target.name}\", flush=True)\n\n    env = os.environ.copy()\n    if disable_xet:\n        env[\"HF_HUB_DISABLE_XET\"] = \"1\"\n        env.pop(\"HF_XET_HIGH_PERFORMANCE\", None)\n    else:\n        env[\"HF_XET_HIGH_PERFORMANCE\"] = \"1\"\n\n    dl_code = (\n        \"import os, shutil; from pathlib import Path; from huggingface_hub import hf_hub_download; \"\n        f\"p = Path(hf_hub_download(repo_id={repo!r}, revision={rev!r}, filename={filename!r}, \"\n        f\"local_dir={str(dst_dir)!r}, token=os.getenv('HF_TOKEN') or None)); \"\n        f\"t = Path({str(target)!r}); \"\n        \"if p.resolve() != t.resolve():\\n\"\n        \"    if t.exists() or t.is_symlink(): t.unlink()\\n\"\n        \"    try: t.symlink_to(p)\\n\"\n        \"    except Exception: shutil.copy2(p, t)\\n\"\n    )\n    p = subprocess.run([sys.executable, \"-c\", dl_code], env=env, check=False)\n    if p.returncode != 0 or not target.exists():\n        raise RuntimeError(f\"下载失败: {target.name}\")\n\n    got = target.stat().st_size\n    if expect is not None and got != expect:\n        raise RuntimeError(f\"下载后大小不符: {target.name} ({got} != {expect})\")\n    print(f\"✅ 完成: {target.name} ({got / 1024 ** 3:.2f} GB)\", flush=True)\n    return target\n\n\ndef download_all_base_models():\n    failed = []\n    with ThreadPoolExecutor(max_workers=3) as pool:\n        fmap = {pool.submit(download_one_subprocess, item, False): item for item in BASE_MODELS}\n        for fut in as_completed(fmap):\n            item = fmap[fut]\n            try:\n                fut.result()\n            except Exception as exc:\n                print(f\"⚠️ Xet 通道异常，转入 HTTP 兜底: {Path(item[2]).name} ({exc})\", flush=True)\n                failed.append(item)\n\n    for item in failed:\n        name = Path(item[2]).name\n        last_err = None\n        for attempt, wait_s in enumerate((0, 10, 25), start=1):\n            if wait_s:\n                print(f\"⏳ 等待 {wait_s}s 后重试 {name} ({attempt}/3)...\", flush=True)\n                time.sleep(wait_s)\n            try:\n                download_one_subprocess(item, disable_xet=True)\n                last_err = None\n                break\n            except Exception as exc:\n                last_err = exc\n        if last_err is not None:\n            raise RuntimeError(f\"模型下载失败: {name}\") from last_err\n\n\ndef wait_port_and_verify_nodes(proc, log_path: Path, timeout=180):\n    start = time.time()\n    print(f\"⏳ 正在启动 ComfyUI 后端 (端口 {PORT})\", end=\"\", flush=True)\n    while time.time() - start < timeout:\n        if proc.poll() is not None:\n            print(\"\\n❌ ComfyUI 进程异常退出！末尾日志：\", flush=True)\n            if log_path.exists():\n                print(log_path.read_text(encoding=\"utf-8\", errors=\"ignore\")[-10000:])\n            raise RuntimeError(f\"ComfyUI exit={proc.returncode}\")\n        try:\n            with socket.create_connection((\"127.0.0.1\", PORT), timeout=1):\n                print(f\" ✅ ({int(time.time() - start)}s)\", flush=True)\n                break\n        except OSError:\n            print(\".\", end=\"\", flush=True)\n            time.sleep(1)\n    else:\n        raise RuntimeError(\"ComfyUI 启动超时\")\n\n    with urllib.request.urlopen(f\"http://127.0.0.1:{PORT}/object_info\", timeout=30) as resp:\n        info = json.load(resp)\n\n    required_nodes = [\n        \"UNETLoader\",\n        \"CLIPLoader\",\n        \"VAELoader\",\n        \"MiniMaxH3ReferenceToVideo\",\n        \"MiniMaxH3AddGuide\",\n        \"MiniMaxH3SigmaShift\",\n        \"SamplerCustomAdvanced\",\n        \"VAEDecode\",\n        \"VAEDecodeAudio\",\n        \"CreateVideo\",\n        \"SaveVideo\",\n    ]\n    missing = [n for n in required_nodes if n not in info]\n    if missing:\n        raise RuntimeError(\"缺少核心节点: \" + \", \".join(missing))\n    print(f\"✅ 全部 {len(required_nodes)} 个 MiniMax H3 官方核心节点校验通过！\", flush=True)\n\n\ndef launch_cloudflare_tunnel() -> str | None:\n    binary = shutil.which(\"cloudflared\")\n    if not binary:\n        local = BASE / \"cloudflared\"\n        if not local.is_file() or local.stat().st_size < 1024 * 1024:\n            partial = local.with_suffix(\".part\")\n            url = \"https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64\"\n            run([\"curl\", \"-fL\", \"--retry\", \"3\", \"--connect-timeout\", \"15\", \"--max-time\", \"120\", \"-o\", str(partial), url])\n            partial.replace(local)\n        local.chmod(0o755)\n        binary = str(local)\n\n    cf_log_path = BASE / \"cloudflared_minimax_h3.log\"\n    cf_log = open(cf_log_path, \"w\", encoding=\"utf-8\")\n    token = get_secret(\"CF_TUNNEL_TOKEN\")\n\n    if token:\n        cmd = [binary, \"tunnel\", \"--protocol\", \"http2\", \"run\", \"--token\", token]\n        mode_desc = \"固定域名隧道 (CF_TUNNEL_TOKEN)\"\n    else:\n        cmd = [binary, \"tunnel\", \"--protocol\", \"http2\", \"--url\", f\"http://127.0.0.1:{PORT}\"]\n        mode_desc = \"免配置临时公网隧道 (Quick Tunnel)\"\n\n    print(f\"🌐 启动 Cloudflare 隧道 [{mode_desc}]...\", flush=True)\n    cf_proc = subprocess.Popen(cmd, stdout=cf_log, stderr=subprocess.STDOUT, start_new_session=True)\n\n    public_url = os.getenv(\"PUBLIC_URL\", \"\").strip()\n    url_pattern = re.compile(r\"https://[a-zA-Z0-9-]+\\.trycloudflare\\.com\")\n    deadline = time.time() + 35\n\n    while time.time() < deadline:\n        if cf_proc.poll() is not None:\n            break\n        if cf_log_path.exists():\n            txt = cf_log_path.read_text(encoding=\"utf-8\", errors=\"ignore\")\n            if not token:\n                m = url_pattern.search(txt)\n                if m:\n                    public_url = m.group(0)\n                    break\n            elif \"Registered tunnel connection\" in txt:\n                break\n        time.sleep(1)\n\n    return public_url or None\n\n\ndef main():\n    if sys.platform != \"linux\":\n        raise RuntimeError(\"本脚本专为 Google Colab / Linux NVIDIA GPU 环境设计。\")\n\n    t0 = time.time()\n    hf_token = get_secret(\"HF_TOKEN\")\n    if hf_token:\n        os.environ[\"HF_TOKEN\"] = hf_token\n\n    os.environ[\"PYTORCH_CUDA_ALLOC_CONF\"] = \"expandable_segments:True\"\n    os.environ[\"CUDA_MODULE_LOADING\"] = \"LAZY\"\n\n    print(\"=\" * 78, flush=True)\n    print(\"🚀 MiniMax H3 开源音视频模型 · 官方纯净基础版 (Comfy-Org/MiniMax-H3) 一键部署\", flush=True)\n    print(f\"📌 ComfyUI 固定提交: {COMFY_REV[:10]} | 存储路径: /content 本地高速盘\", flush=True)\n    print(\"=\" * 78, flush=True)\n\n    ensure_cuda()\n    clone_pinned(\"https://github.com/Comfy-Org/ComfyUI.git\", COMFY, COMFY_REV)\n    install_if_needed([\"huggingface_hub<2.0.0\", \"hf-xet\", \"pillow\"])\n\n    print(\"\\n📦 [1/4] 后台并行启动官方四大基础权重下载...\", flush=True)\n    pool = ThreadPoolExecutor(max_workers=1)\n    dl_future = pool.submit(download_all_base_models)\n\n    try:\n        print(\"\\n🔧 [2/4] 安装 ComfyUI 依赖与 comfy-kitchen INT8 算子...\", flush=True)\n        install_if_needed([\"transformers>=4.45.0\", \"safetensors>=0.4.3\", \"tokenizers>=0.19.0\", \"einops\"])\n        install_comfy_requirements()\n        ensure_comfy_kitchen()\n        verify_comfy_kitchen()\n\n        print(\"\\n⏳ [3/4] 等待官方四大基础权重下载完成...\", flush=True)\n        dl_future.result()\n    finally:\n        pool.shutdown(wait=False)\n\n    out_dir = COMFY / \"output_local\"\n    out_dir.mkdir(parents=True, exist_ok=True)\n\n    print(\"\\n🚀 [4/4] 启动 ComfyUI 服务与公网访问隧道...\", flush=True)\n    log_path = BASE / \"comfyui_minimax_h3_base.log\"\n    log_fp = open(log_path, \"w\", encoding=\"utf-8\")\n    cmd = [\n        sys.executable,\n        \"main.py\",\n        \"--listen\", \"0.0.0.0\",\n        \"--port\", str(PORT),\n        \"--output-directory\", str(out_dir),\n        \"--disable-auto-launch\",\n        \"--enable-cors-header\", \"*\",\n        \"--async-offload\", \"2\",\n        \"--reserve-vram\", \"2.0\",\n        \"--use-ck-attention\",\n        \"--fast\", \"fp16_accumulation\",\n    ]\n    proc = subprocess.Popen(cmd, cwd=str(COMFY), stdout=log_fp, stderr=subprocess.STDOUT, start_new_session=True)\n    wait_port_and_verify_nodes(proc, log_path, timeout=180)\n    tunnel_url = launch_cloudflare_tunnel()\n    log_fp.close()\n\n    print(\"\\n\" + \"=\" * 78, flush=True)\n    print(f\"🎉 MiniMax H3 官方基础版部署完成！(总耗时 {time.time() - t0:.1f}s)\", flush=True)\n    if tunnel_url:\n        print(f\"🌍 公网访问地址: {tunnel_url}\")\n    else:\n        print(\"ℹ️ 如使用自定义 CF_TUNNEL_TOKEN，请直接打开你绑定的 Cloudflare 域名；或查看 cloudflared_minimax_h3.log\")\n    print(\"=\" * 78, flush=True)\n\n\nif __name__ == \"__main__\":\n    main()\n"
            },
            "models": {
              "zh": [
                [
                  "1. 大脑 · 视觉/文本编码器",
                  "text_encoders/",
                  "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "320 亿参数多模态视觉语言大脑（24GB 卡可换 nvfp4_awq 版）"
                ],
                [
                  "2. 心脏 · 官方扩散主干",
                  "diffusion_models/",
                  "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "官方多参考图/文生视频主干（首尾帧可用 fl2va_pruned_int8_convrot）"
                ],
                [
                  "3. 眼睛 · 视频 VAE",
                  "vae/",
                  "minimax_h3_video_vae_int8_convrot.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "将去噪完成的视频潜变量还原为 RGB 图像帧"
                ],
                [
                  "4. 耳朵 · 音频 VAE",
                  "vae/",
                  "minimax_h3_audio_vae_fp32.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "全精度 FP32 音频解码器，将音频潜变量还原为清晰人声与环境音"
                ],
                [
                  "5. Pika Flex 双 LoRA (2款)",
                  "loras/",
                  "pika_h3_flex_ref2va_v1_bf16.safetensors · pika_h3_flex_fl2va_v1_bf16.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "Pika 官方出品的 Ref2VA 与 FL2VA 专属表现力与 6 步加速 LoRA"
                ],
                [
                  "6. LightX2V Turbo 双 LoRA (2款)",
                  "loras/",
                  "minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors · minimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors",
                  "Comfy-Org/MiniMax-H3 · lightx2v/Minimax-h3-Turbo",
                  "LightX2V 出品的 Ref2V 与 FL2V 4步/8步极速蒸馏 LoRA"
                ]
              ],
              "en": [
                [
                  "1. Brain · Vision/Text Encoder",
                  "text_encoders/",
                  "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "32B multimodal VLM (use nvfp4_awq on 24GB GPUs)"
                ],
                [
                  "2. Heart · Official Backbone",
                  "diffusion_models/",
                  "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "Official Ref2VA/T2V backbone (or fl2va_pruned_int8_convrot for I2V)"
                ],
                [
                  "3. Eyes · Video VAE",
                  "vae/",
                  "minimax_h3_video_vae_int8_convrot.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "Decodes video latents into RGB frames"
                ],
                [
                  "4. Ears · Audio VAE",
                  "vae/",
                  "minimax_h3_audio_vae_fp32.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "Full FP32 audio decoder for clean speech and ambient sound"
                ],
                [
                  "5. Pika Flex Dual LoRAs (2)",
                  "loras/",
                  "pika_h3_flex_ref2va_v1_bf16.safetensors · pika_h3_flex_fl2va_v1_bf16.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "Pika's official Ref2VA & FL2VA motion/expressiveness 6-step LoRAs"
                ],
                [
                  "6. LightX2V Turbo Dual LoRAs (2)",
                  "loras/",
                  "minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors · minimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors",
                  "Comfy-Org/MiniMax-H3 · lightx2v/Minimax-h3-Turbo",
                  "LightX2V's Ref2V & FL2V 4-step / 8-step distillation LoRAs"
                ]
              ]
            },
            "params": {
              "zh": [
                [
                  "MiniMaxH3SigmaShift (#142)",
                  "shift_video / shift_audio",
                  "12.0 / 3.0",
                  "视频与音频去噪时间步偏移，黄金固定值，切勿填反"
                ],
                [
                  "MiniMaxH3ReferenceToVideo (#131)",
                  "width × height",
                  "864×480 (竖屏 480×864)",
                  "基础单轮采样最稳的 0.4MP 分辨率；不要在单轮里直接跑 1080p"
                ],
                [
                  "MiniMaxH3ReferenceToVideo (#131)",
                  "length",
                  "124",
                  "24fps 下对应约 5.1 秒有声视频"
                ],
                [
                  "KSamplerSelect + BasicScheduler",
                  "sampler / steps",
                  "res_multistep / 20步 (挂 Pika 设 6步)",
                  "不挂加速 LoRA 时跑 20 步；挂载 Pika Flex 后设为 6 步"
                ],
                [
                  "Prompt (#1) + LoadImage (#901)",
                  "<Picture N>",
                  "ref_image_0 → <Picture 1>",
                  "插槽编号从 0 开始，提示词引用必须从 <Picture 1> 开始"
                ],
                [
                  "MiniMaxH3AddGuide (#903)",
                  "frame_idx",
                  "0",
                  "首帧引导/接续模式下锁定第 0 帧起始图"
                ]
              ],
              "en": [
                [
                  "MiniMaxH3SigmaShift (#142)",
                  "shift_video / shift_audio",
                  "12.0 / 3.0",
                  "Timestep shift for video vs audio latents—never swap them"
                ],
                [
                  "MiniMaxH3ReferenceToVideo (#131)",
                  "width × height",
                  "864×480 (or 480×864)",
                  "~0.4MP native resolution for single-pass generation"
                ],
                [
                  "MiniMaxH3ReferenceToVideo (#131)",
                  "length",
                  "124",
                  "124 frames at 24fps ≈ 5.1 seconds"
                ],
                [
                  "KSamplerSelect + BasicScheduler",
                  "sampler / steps",
                  "res_multistep / 20 steps (6 with Pika)",
                  "20 steps native; 6 steps when using Pika Flex LoRA"
                ],
                [
                  "Prompt (#1) + LoadImage (#901)",
                  "<Picture N>",
                  "ref_image_0 → <Picture 1>",
                  "Input slot is 0-indexed, prompt tag is 1-indexed (<Picture 1>)"
                ],
                [
                  "MiniMaxH3AddGuide (#903)",
                  "frame_idx",
                  "0",
                  "Locks frame 0 to your input image in I2V / continuation mode"
                ]
              ]
            }
          },
          {
            "id": "h3-pika-lora",
            "status": "live",
            "short": {
              "zh": "02 · MiniMax + Pika LoRA 一采",
              "en": "02 · MiniMax + Pika LoRA (Pass 1)"
            },
            "title": {
              "zh": "MiniMax 官方底模 + Pika H3 Flex 双 LoRA：6 步极速一采工作流实战",
              "en": "MiniMax Official Base + Pika H3 Flex Dual LoRAs: 6-Step Fast One-Pass Workflows"
            },
            "tagline": {
              "zh": "官方 Ref2VA INT8 底模 + Pika Flex (ref2va / fl2va) + fal 写实皮肤 LoRA · 6 步极速直出",
              "en": "Official Ref2VA INT8 + Pika Flex (ref2va / fl2va) + fal Realism People LoRA · 6-Step Generation"
            },
            "summary": {
              "zh": "当前项目主力一采方案：用官方 minimax_h3_ref2va_pruned_int8_convrot 底模，串联 fal Realism People (0.5) 消除塑料感，再按镜头模式挂载 Pika H3 Flex 双 LoRA（CUT/T2V 挂 ref2va，CONTINUE 接续挂 fl2va），仅需 6 步即可生成高动态有声视频。",
              "en": "Production One-Pass setup: Official minimax_h3_ref2va_pruned_int8_convrot chained with fal Realism People (0.5) and Pika H3 Flex LoRAs (ref2va for CUT/T2V, fl2va for CONTINUE), generating expressive audio-video in just 6 steps."
            },
            "tags": {
              "zh": [
                "Pika Flex 6步一采",
                "ref2va & fl2va 双分支",
                "fal Realism People 0.5",
                "CUT / T2V / CONTINUE"
              ],
              "en": [
                "Pika Flex 6-Step",
                "ref2va & fl2va Dual LoRA",
                "fal Realism People 0.5",
                "CUT / T2V / CONTINUE"
              ]
            },
            "stats": [
              {
                "value": "6 步",
                "label": {
                  "zh": "Pika Flex 极速一采步数",
                  "en": "Pika Flex Fast Pass-1 Steps"
                }
              },
              {
                "value": "2 款 Pika",
                "label": {
                  "zh": "ref2va (切镜) · fl2va (接续)",
                  "en": "ref2va (CUT) · fl2va (CONTINUE)"
                }
              },
              {
                "value": "0.5 权重",
                "label": {
                  "zh": "fal Realism People 真实皮肤",
                  "en": "fal Realism People Skin Texture"
                }
              },
              {
                "value": "0.4 MP",
                "label": {
                  "zh": "864×480 黄金一采分辨率",
                  "en": "864×480 Optimal Pass-1 Res"
                }
              }
            ],
            "hfRepos": [
              {
                "name": "Comfy-Org/MiniMax-H3",
                "url": "https://huggingface.co/Comfy-Org/MiniMax-H3",
                "desc": {
                  "zh": "官方 Ref2VA 主干与 Pika Flex 双 LoRA 所在仓库",
                  "en": "Official Ref2VA Backbone & Pika Flex Dual LoRAs"
                }
              },
              {
                "name": "fal/MiniMax-H3-Realism-People-LoRA",
                "url": "https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA",
                "desc": {
                  "zh": "fal 出品的去塑料感写实人像皮肤 LoRA",
                  "en": "fal's Photorealistic Skin & People LoRA"
                }
              },
              {
                "name": "lightx2v/Minimax-h3-Turbo",
                "url": "https://huggingface.co/lightx2v/Minimax-h3-Turbo",
                "desc": {
                  "zh": "LightX2V 4步/8步 Turbo 蒸馏 LoRA 备选仓库",
                  "en": "LightX2V 4/8-Step Turbo Alternative LoRAs"
                }
              }
            ],
            "versionGroups": [
              {
                "title": {
                  "zh": "一、MiniMax 官方底模 + Pika Flex 双 LoRA 串联拓扑",
                  "en": "1. MiniMax Official Backbone + Pika Flex Dual LoRA Chain Topology"
                },
                "desc": {
                  "zh": "在 UNETLoader (#127) 与 MiniMaxH3SigmaShift (#142) 之间通过 LoraLoaderModelOnly 串联两级 LoRA，并根据分镜模式自动切换 Pika LoRA 分支：",
                  "en": "Chain two LoraLoaderModelOnly nodes between UNETLoader (#127) and MiniMaxH3SigmaShift (#142), switching the Pika LoRA by shot mode:"
                },
                "rows": {
                  "zh": [
                    [
                      "第 1 级 · fal 写实人像 LoRA (#943)",
                      "h3-realism-people-t2v-i2v-r2v.safetensors",
                      "strength_model = 0.5",
                      "来自 fal/MiniMax-H3-Realism-People-LoRA，消除人物面部油光与 AI 塑料感，保留真实毛孔"
                    ],
                    [
                      "第 2 级 (A) · Pika Flex Ref2VA (#944)",
                      "pika_h3_flex_ref2va_v1_bf16.safetensors",
                      "strength_model = 1.0 · 6 步",
                      "用于 CUT（多参考图切镜）与 T2V（纯文生视频），6 步内赋予画面极强的动态张力与锁脸精度"
                    ],
                    [
                      "第 2 级 (B) · Pika Flex FL2VA (#944)",
                      "pika_h3_flex_fl2va_v1_bf16.safetensors",
                      "strength_model = 1.0 · 6 步",
                      "用于 CONTINUE（上一镜末帧无缝接续 + 母图锁脸），让第 0 帧起始画面顺滑运动不僵硬"
                    ],
                    [
                      "备选方案 · LightX2V Turbo 双 LoRA",
                      "minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors\nminimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors",
                      "strength_model = 1.0 · 4 步 / 8 步",
                      "追求极致 4 步出片速度时，可将 #944 替换为对应的 LightX2V Ref2V 或 FL2V Turbo LoRA"
                    ]
                  ],
                  "en": [
                    [
                      "Stage 1 · fal Realism People (#943)",
                      "h3-realism-people-t2v-i2v-r2v.safetensors",
                      "strength_model = 0.5",
                      "From fal/MiniMax-H3-Realism-People-LoRA—removes waxy AI skin and restores natural pores"
                    ],
                    [
                      "Stage 2 (A) · Pika Flex Ref2VA (#944)",
                      "pika_h3_flex_ref2va_v1_bf16.safetensors",
                      "strength_model = 1.0 · 6 steps",
                      "Used for CUT (Multi-Ref) and T2V modes—delivers punchy motion and strong face lock in 6 steps"
                    ],
                    [
                      "Stage 2 (B) · Pika Flex FL2VA (#944)",
                      "pika_h3_flex_fl2va_v1_bf16.safetensors",
                      "strength_model = 1.0 · 6 steps",
                      "Used for CONTINUE (shot continuation via MiniMaxH3AddGuide)—smooths motion onset from frame 0"
                    ],
                    [
                      "Alternative · LightX2V Turbo Dual LoRAs",
                      "minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors\nminimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors",
                      "strength_model = 1.0 · 4 or 8 steps",
                      "Swap #944 for LightX2V Ref2V or FL2V Turbo when 4-step ultra-fast draft speed is desired"
                    ]
                  ]
                }
              }
            ],
            "workflows": [
              {
                "key": "pika-cut",
                "name": "01_MiniMax_Pika_OnePass_CUT.json",
                "label": {
                  "zh": "01 · CUT 多参考图 + Pika Ref2VA (6步一采)",
                  "en": "01 · CUT Multi-Ref + Pika Ref2VA (6-Step)"
                },
                "badge": {
                  "zh": "项目主力一采",
                  "en": "Main Pass-1"
                },
                "desc": {
                  "zh": "官方 Ref2VA 底模 + fal Realism (0.5) + Pika Flex Ref2VA (1.0)，输入角色设定图 <Picture 1>，6 步极速生成。",
                  "en": "Official Ref2VA + fal Realism (0.5) + Pika Flex Ref2VA (1.0) with <Picture 1> character lock in 6 steps."
                },
                "steps": {
                  "zh": [
                    [
                      "加载官方底模",
                      "UNETLoader #127",
                      "加载 minimax_h3_ref2va_pruned_int8_convrot.safetensors"
                    ],
                    [
                      "双 LoRA 串联",
                      "LoraLoader #943 → #944",
                      "串联 fal Realism (0.5) 与 pika_h3_flex_ref2va (1.0)"
                    ],
                    [
                      "参考图锁脸",
                      "LoadImage #901 → RefToVideo #131",
                      "输入主角设定图，提示词写 <Picture 1> 锁死五官"
                    ],
                    [
                      "6 步极速采样",
                      "BasicScheduler #124 · Sampler #125",
                      "res_multistep + simple，步数设为 6 步 (0.4MP)"
                    ],
                    [
                      "音画解码直出",
                      "VAEDecode #122 · VAEDecodeAudio #121",
                      "解码 864×480 24fps 有声试片 MP4"
                    ]
                  ],
                  "en": [
                    [
                      "Load Official UNET",
                      "UNETLoader #127",
                      "minimax_h3_ref2va_pruned_int8_convrot.safetensors"
                    ],
                    [
                      "Chain Dual LoRAs",
                      "LoraLoader #943 → #944",
                      "Chain fal Realism (0.5) + pika_h3_flex_ref2va (1.0)"
                    ],
                    [
                      "Lock Identity",
                      "LoadImage #901 → RefToVideo #131",
                      "Bind character sheet via <Picture 1>"
                    ],
                    [
                      "6-Step Fast Sample",
                      "BasicScheduler #124 · Sampler #125",
                      "res_multistep + simple, 6 steps at 0.4MP"
                    ],
                    [
                      "Decode AV MP4",
                      "VAEDecode #122 · VAEDecodeAudio #121",
                      "Output 864×480 24fps audio-video draft"
                    ]
                  ]
                },
                "content": {
                  "119": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_video_vae_int8_convrot.safetensors"
                    }
                  },
                  "120": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_audio_vae_fp32.safetensors"
                    }
                  },
                  "128": {
                    "class_type": "CLIPLoader",
                    "inputs": {
                      "clip_name": "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                      "type": "minimax",
                      "device": "default"
                    }
                  },
                  "127": {
                    "class_type": "UNETLoader",
                    "inputs": {
                      "unet_name": "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                      "weight_dtype": "default"
                    },
                    "_meta": {
                      "title": "MiniMax H3 Official Ref2VA INT8"
                    }
                  },
                  "943": {
                    "class_type": "LoraLoaderModelOnly",
                    "inputs": {
                      "model": [
                        "127",
                        0
                      ],
                      "lora_name": "h3-realism-people-t2v-i2v-r2v.safetensors",
                      "strength_model": 0.5
                    },
                    "_meta": {
                      "title": "fal Realism People (r34l1sm) / 0.5"
                    }
                  },
                  "129": {
                    "class_type": "RandomNoise",
                    "inputs": {
                      "noise_seed": 42
                    }
                  },
                  "135": {
                    "class_type": "KSamplerSelect",
                    "inputs": {
                      "sampler_name": "res_multistep"
                    }
                  },
                  "142": {
                    "class_type": "MiniMaxH3SigmaShift",
                    "inputs": {
                      "model": [
                        "944",
                        0
                      ],
                      "shift_video": 12.0,
                      "shift_audio": 3.0
                    }
                  },
                  "131": {
                    "class_type": "MiniMaxH3ReferenceToVideo",
                    "inputs": {
                      "clip": [
                        "128",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ],
                      "audio_vae": [
                        "120",
                        0
                      ],
                      "prompt": [
                        "1",
                        0
                      ],
                      "width": 864,
                      "height": 480,
                      "length": 124,
                      "ref_image_size": "match",
                      "ref_images.ref_image_0": [
                        "901",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "MiniMaxH3ReferenceToVideo"
                    }
                  },
                  "124": {
                    "class_type": "BasicScheduler",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "scheduler": "simple",
                      "steps": 6,
                      "denoise": 1.0
                    }
                  },
                  "126": {
                    "class_type": "BasicGuider",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "conditioning": [
                        "131",
                        0
                      ]
                    }
                  },
                  "125": {
                    "class_type": "SamplerCustomAdvanced",
                    "inputs": {
                      "noise": [
                        "129",
                        0
                      ],
                      "guider": [
                        "126",
                        0
                      ],
                      "sampler": [
                        "135",
                        0
                      ],
                      "sigmas": [
                        "124",
                        0
                      ],
                      "latent_image": [
                        "131",
                        1
                      ]
                    },
                    "_meta": {
                      "title": "MiniMax 官方 + Pika LoRA 一采 (CUT) · 0.4MP / 6步"
                    }
                  },
                  "122": {
                    "class_type": "VAEDecode",
                    "inputs": {
                      "samples": [
                        "125",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ]
                    }
                  },
                  "121": {
                    "class_type": "VAEDecodeAudio",
                    "inputs": {
                      "samples": [
                        "125",
                        0
                      ],
                      "vae": [
                        "120",
                        0
                      ]
                    }
                  },
                  "130": {
                    "class_type": "CreateVideo",
                    "inputs": {
                      "images": [
                        "122",
                        0
                      ],
                      "audio": [
                        "121",
                        0
                      ],
                      "fps": 24,
                      "bit_depth": 8
                    }
                  },
                  "92": {
                    "class_type": "SaveVideo",
                    "inputs": {
                      "video": [
                        "130",
                        0
                      ],
                      "format": "auto",
                      "codec": "auto",
                      "filename_prefix": "minimax_pika_pass1_cut"
                    }
                  },
                  "1": {
                    "class_type": "PrimitiveStringMultiline",
                    "inputs": {
                      "value": "Romantic anime shot. Keep character identity from <Picture 1>."
                    },
                    "_meta": {
                      "title": "PROMPT"
                    }
                  },
                  "901": {
                    "class_type": "LoadImage",
                    "inputs": {
                      "image": "reference_1.png"
                    },
                    "_meta": {
                      "title": "REFERENCE IMAGE 1 (<Picture 1>)"
                    }
                  },
                  "944": {
                    "class_type": "LoraLoaderModelOnly",
                    "inputs": {
                      "model": [
                        "943",
                        0
                      ],
                      "lora_name": "pika_h3_flex_ref2va_v1_bf16.safetensors",
                      "strength_model": 1.0
                    },
                    "_meta": {
                      "title": "Pika H3 Flex (CUT) / 1.0"
                    }
                  }
                }
              },
              {
                "key": "pika-t2v",
                "name": "02_MiniMax_Pika_OnePass_T2V.json",
                "label": {
                  "zh": "02 · T2V 纯文生视频 + Pika Ref2VA (6步一采)",
                  "en": "02 · T2V Pure Text + Pika Ref2VA (6-Step)"
                },
                "badge": {
                  "zh": "",
                  "en": ""
                },
                "desc": {
                  "zh": "无需参考图，直接用 Pika Flex Ref2VA 6 步生成空镜、特效或大场景有声镜头。",
                  "en": "Zero reference images—generate establishing shots or VFX scenes with audio in 6 steps."
                },
                "steps": {
                  "zh": [
                    [
                      "加载官方底模",
                      "UNETLoader #127",
                      "加载 minimax_h3_ref2va_pruned_int8_convrot.safetensors"
                    ],
                    [
                      "双 LoRA 串联",
                      "LoraLoader #943 → #944",
                      "串联 fal Realism (0.5) 与 pika_h3_flex_ref2va (1.0)"
                    ],
                    [
                      "纯文本条件",
                      "RefToVideo #131 (无 ref_images)",
                      "仅输入文本提示词与环境音效描述"
                    ],
                    [
                      "6 步极速采样",
                      "BasicScheduler #124 · Sampler #125",
                      "res_multistep + simple，6 步极速去噪"
                    ],
                    [
                      "音画解码直出",
                      "VAEDecode #122 · VAEDecodeAudio #121",
                      "合成 24fps 原生有声视频"
                    ]
                  ],
                  "en": [
                    [
                      "Load Official UNET",
                      "UNETLoader #127",
                      "minimax_h3_ref2va_pruned_int8_convrot.safetensors"
                    ],
                    [
                      "Chain Dual LoRAs",
                      "LoraLoader #943 → #944",
                      "Chain fal Realism (0.5) + pika_h3_flex_ref2va (1.0)"
                    ],
                    [
                      "Pure Text Prompt",
                      "RefToVideo #131 (No ref_images)",
                      "Text prompt describing motion and audio"
                    ],
                    [
                      "6-Step Fast Sample",
                      "BasicScheduler #124 · Sampler #125",
                      "res_multistep + simple, 6 steps"
                    ],
                    [
                      "Decode AV MP4",
                      "VAEDecode #122 · VAEDecodeAudio #121",
                      "Mux 24fps audio-video MP4"
                    ]
                  ]
                },
                "content": {
                  "119": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_video_vae_int8_convrot.safetensors"
                    }
                  },
                  "120": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_audio_vae_fp32.safetensors"
                    }
                  },
                  "128": {
                    "class_type": "CLIPLoader",
                    "inputs": {
                      "clip_name": "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                      "type": "minimax",
                      "device": "default"
                    }
                  },
                  "127": {
                    "class_type": "UNETLoader",
                    "inputs": {
                      "unet_name": "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                      "weight_dtype": "default"
                    },
                    "_meta": {
                      "title": "MiniMax H3 Official Ref2VA INT8"
                    }
                  },
                  "943": {
                    "class_type": "LoraLoaderModelOnly",
                    "inputs": {
                      "model": [
                        "127",
                        0
                      ],
                      "lora_name": "h3-realism-people-t2v-i2v-r2v.safetensors",
                      "strength_model": 0.5
                    },
                    "_meta": {
                      "title": "fal Realism People (r34l1sm) / 0.5"
                    }
                  },
                  "129": {
                    "class_type": "RandomNoise",
                    "inputs": {
                      "noise_seed": 42
                    }
                  },
                  "135": {
                    "class_type": "KSamplerSelect",
                    "inputs": {
                      "sampler_name": "res_multistep"
                    }
                  },
                  "142": {
                    "class_type": "MiniMaxH3SigmaShift",
                    "inputs": {
                      "model": [
                        "944",
                        0
                      ],
                      "shift_video": 12.0,
                      "shift_audio": 3.0
                    }
                  },
                  "131": {
                    "class_type": "MiniMaxH3ReferenceToVideo",
                    "inputs": {
                      "prompt": [
                        "1",
                        0
                      ],
                      "width": 864,
                      "height": 480,
                      "length": 124,
                      "clip": [
                        "128",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ],
                      "audio_vae": [
                        "120",
                        0
                      ],
                      "ref_image_size": "match"
                    },
                    "_meta": {
                      "title": "T2V ReferenceToVideo / No References (04 aligned)"
                    }
                  },
                  "124": {
                    "class_type": "BasicScheduler",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "scheduler": "simple",
                      "steps": 6,
                      "denoise": 1.0
                    }
                  },
                  "126": {
                    "class_type": "BasicGuider",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "conditioning": [
                        "131",
                        0
                      ]
                    }
                  },
                  "125": {
                    "class_type": "SamplerCustomAdvanced",
                    "inputs": {
                      "noise": [
                        "129",
                        0
                      ],
                      "guider": [
                        "126",
                        0
                      ],
                      "sampler": [
                        "135",
                        0
                      ],
                      "sigmas": [
                        "124",
                        0
                      ],
                      "latent_image": [
                        "131",
                        1
                      ]
                    },
                    "_meta": {
                      "title": "MiniMax 官方 + Pika LoRA 一采 (T2V) · 0.4MP / 6步"
                    }
                  },
                  "122": {
                    "class_type": "VAEDecode",
                    "inputs": {
                      "samples": [
                        "125",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ]
                    }
                  },
                  "121": {
                    "class_type": "VAEDecodeAudio",
                    "inputs": {
                      "samples": [
                        "125",
                        0
                      ],
                      "vae": [
                        "120",
                        0
                      ]
                    }
                  },
                  "130": {
                    "class_type": "CreateVideo",
                    "inputs": {
                      "images": [
                        "122",
                        0
                      ],
                      "audio": [
                        "121",
                        0
                      ],
                      "fps": 24,
                      "bit_depth": 8,
                      "color_space": "sRGB",
                      "codec": "none"
                    }
                  },
                  "92": {
                    "class_type": "SaveVideo",
                    "inputs": {
                      "video": [
                        "130",
                        0
                      ],
                      "format": "auto",
                      "codec": "auto",
                      "filename_prefix": "minimax_pika_pass1_t2v"
                    }
                  },
                  "1": {
                    "class_type": "PrimitiveStringMultiline",
                    "inputs": {
                      "value": "A cinematic shot of a mountain landscape at sunrise. Gentle clouds drift across the valley."
                    },
                    "_meta": {
                      "title": "PROMPT"
                    }
                  },
                  "944": {
                    "class_type": "LoraLoaderModelOnly",
                    "inputs": {
                      "model": [
                        "943",
                        0
                      ],
                      "lora_name": "pika_h3_flex_ref2va_v1_bf16.safetensors",
                      "strength_model": 1.0
                    },
                    "_meta": {
                      "title": "Pika H3 Flex (T2V) / 1.0"
                    }
                  }
                }
              },
              {
                "key": "pika-continue",
                "name": "03_MiniMax_Pika_OnePass_CONTINUE.json",
                "label": {
                  "zh": "03 · CONTINUE 跨镜接续 + Pika FL2VA (6步一采)",
                  "en": "03 · CONTINUE Shot Extension + Pika FL2VA (6-Step)"
                },
                "badge": {
                  "zh": "长镜头接续",
                  "en": "Shot Continuation"
                },
                "desc": {
                  "zh": "同时输入角色母图 (#901 锁脸防崩) 与上一镜末帧 (#902 + MiniMaxH3AddGuide 锁首帧)，并切换为 pika_h3_flex_fl2va LoRA。",
                  "en": "Combines character mother ref (#901) with previous shot's last frame (#902 + MiniMaxH3AddGuide) using pika_h3_flex_fl2va."
                },
                "steps": {
                  "zh": [
                    [
                      "切换 FL2VA Pika LoRA",
                      "LoraLoader #944",
                      "加载 pika_h3_flex_fl2va_v1_bf16.safetensors (1.0)"
                    ],
                    [
                      "双图输入防漂移",
                      "LoadImage #901 (母图) + #902 (首帧)",
                      "#901 接 RefToVideo 锁长相，#902 接 AddGuide 锁首帧"
                    ],
                    [
                      "第 0 帧引导注入",
                      "MiniMaxH3AddGuide #903",
                      "frame_idx = 0，无缝衔接上一镜头尾帧"
                    ],
                    [
                      "6 步极速采样",
                      "SamplerCustomAdvanced #125",
                      "6 步完成跨镜连贯动作与声音生成"
                    ],
                    [
                      "音画解码直出",
                      "VAEDecode #122 · VAEDecodeAudio #121",
                      "输出无缝接续镜头 MP4"
                    ]
                  ],
                  "en": [
                    [
                      "Switch to FL2VA LoRA",
                      "LoraLoader #944",
                      "Load pika_h3_flex_fl2va_v1_bf16.safetensors (1.0)"
                    ],
                    [
                      "Dual Image Inputs",
                      "LoadImage #901 (Ref) + #902 (Start)",
                      "#901 locks identity; #902 locks frame 0"
                    ],
                    [
                      "Frame-0 Guide",
                      "MiniMaxH3AddGuide #903",
                      "frame_idx = 0 for seamless shot continuation"
                    ],
                    [
                      "6-Step Fast Sample",
                      "SamplerCustomAdvanced #125",
                      "6 steps with continuous motion and audio"
                    ],
                    [
                      "Decode AV MP4",
                      "VAEDecode #122 · VAEDecodeAudio #121",
                      "Output seamlessly extended shot"
                    ]
                  ]
                },
                "content": {
                  "119": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_video_vae_int8_convrot.safetensors"
                    }
                  },
                  "120": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_audio_vae_fp32.safetensors"
                    }
                  },
                  "128": {
                    "class_type": "CLIPLoader",
                    "inputs": {
                      "clip_name": "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                      "type": "minimax",
                      "device": "default"
                    }
                  },
                  "127": {
                    "class_type": "UNETLoader",
                    "inputs": {
                      "unet_name": "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                      "weight_dtype": "default"
                    },
                    "_meta": {
                      "title": "MiniMax H3 Official Ref2VA INT8"
                    }
                  },
                  "943": {
                    "class_type": "LoraLoaderModelOnly",
                    "inputs": {
                      "model": [
                        "127",
                        0
                      ],
                      "lora_name": "h3-realism-people-t2v-i2v-r2v.safetensors",
                      "strength_model": 0.5
                    },
                    "_meta": {
                      "title": "fal Realism People (r34l1sm) / 0.5"
                    }
                  },
                  "129": {
                    "class_type": "RandomNoise",
                    "inputs": {
                      "noise_seed": 42
                    }
                  },
                  "135": {
                    "class_type": "KSamplerSelect",
                    "inputs": {
                      "sampler_name": "res_multistep"
                    }
                  },
                  "142": {
                    "class_type": "MiniMaxH3SigmaShift",
                    "inputs": {
                      "model": [
                        "944",
                        0
                      ],
                      "shift_video": 12.0,
                      "shift_audio": 3.0
                    }
                  },
                  "131": {
                    "class_type": "MiniMaxH3ReferenceToVideo",
                    "inputs": {
                      "clip": [
                        "128",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ],
                      "audio_vae": [
                        "120",
                        0
                      ],
                      "prompt": [
                        "1",
                        0
                      ],
                      "width": 864,
                      "height": 480,
                      "length": 124,
                      "ref_image_size": "match",
                      "ref_images.ref_image_0": [
                        "901",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "MiniMaxH3ReferenceToVideo"
                    }
                  },
                  "124": {
                    "class_type": "BasicScheduler",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "scheduler": "simple",
                      "steps": 6,
                      "denoise": 1.0
                    }
                  },
                  "126": {
                    "class_type": "BasicGuider",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "conditioning": [
                        "903",
                        0
                      ]
                    }
                  },
                  "125": {
                    "class_type": "SamplerCustomAdvanced",
                    "inputs": {
                      "noise": [
                        "129",
                        0
                      ],
                      "guider": [
                        "126",
                        0
                      ],
                      "sampler": [
                        "135",
                        0
                      ],
                      "sigmas": [
                        "124",
                        0
                      ],
                      "latent_image": [
                        "131",
                        1
                      ]
                    },
                    "_meta": {
                      "title": "MiniMax 官方 + Pika LoRA 一采 (CONTINUE) · 0.4MP / 6步"
                    }
                  },
                  "122": {
                    "class_type": "VAEDecode",
                    "inputs": {
                      "samples": [
                        "125",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ]
                    }
                  },
                  "121": {
                    "class_type": "VAEDecodeAudio",
                    "inputs": {
                      "samples": [
                        "125",
                        0
                      ],
                      "vae": [
                        "120",
                        0
                      ]
                    }
                  },
                  "130": {
                    "class_type": "CreateVideo",
                    "inputs": {
                      "images": [
                        "122",
                        0
                      ],
                      "audio": [
                        "121",
                        0
                      ],
                      "fps": 24,
                      "bit_depth": 8
                    }
                  },
                  "92": {
                    "class_type": "SaveVideo",
                    "inputs": {
                      "video": [
                        "130",
                        0
                      ],
                      "format": "auto",
                      "codec": "auto",
                      "filename_prefix": "minimax_pika_pass1_continue"
                    }
                  },
                  "1": {
                    "class_type": "PrimitiveStringMultiline",
                    "inputs": {
                      "value": "Romantic anime shot. Keep character identity from <Picture 1>."
                    },
                    "_meta": {
                      "title": "PROMPT"
                    }
                  },
                  "901": {
                    "class_type": "LoadImage",
                    "inputs": {
                      "image": "reference_1.png"
                    },
                    "_meta": {
                      "title": "REFERENCE IMAGE 1 (<Picture 1>)"
                    }
                  },
                  "902": {
                    "class_type": "LoadImage",
                    "inputs": {
                      "image": "selected_start.png"
                    },
                    "_meta": {
                      "title": "选定接续帧"
                    }
                  },
                  "903": {
                    "class_type": "MiniMaxH3AddGuide",
                    "inputs": {
                      "positive": [
                        "131",
                        0
                      ],
                      "latent": [
                        "131",
                        1
                      ],
                      "vae": [
                        "119",
                        0
                      ],
                      "audio_vae": [
                        "120",
                        0
                      ],
                      "image": [
                        "902",
                        0
                      ],
                      "frame_idx": 0
                    }
                  },
                  "944": {
                    "class_type": "LoraLoaderModelOnly",
                    "inputs": {
                      "model": [
                        "943",
                        0
                      ],
                      "lora_name": "pika_h3_flex_fl2va_v1_bf16.safetensors",
                      "strength_model": 1.0
                    },
                    "_meta": {
                      "title": "Pika H3 Flex (CONTINUE) / 1.0"
                    }
                  }
                }
              }
            ],
            "colab": {
              "name": "MiniMax_Pika_OnePass_Colab.py",
              "gpu": {
                "zh": "A100 40GB（推荐）/ L4 24GB（设 TE_QUANT_MODE=nvfp4）",
                "en": "A100 40GB (Recommended) / L4 24GB (set TE_QUANT_MODE=nvfp4)"
              },
              "secrets": {
                "zh": [
                  [
                    "TE_QUANT_MODE",
                    "默认 int8；24GB 显卡可设为 nvfp4 使用 4-bit 32B 编码器"
                  ],
                  [
                    "CF_TUNNEL_TOKEN",
                    "可选，绑定自定义 Cloudflare 固定域名隧道"
                  ],
                  [
                    "HF_TOKEN",
                    "可选，加速 HuggingFace 权重拉取"
                  ]
                ],
                "en": [
                  [
                    "TE_QUANT_MODE",
                    "Default int8; set to nvfp4 on 24GB GPUs"
                  ],
                  [
                    "CF_TUNNEL_TOKEN",
                    "Optional custom Cloudflare tunnel token"
                  ],
                  [
                    "HF_TOKEN",
                    "Optional HuggingFace token for faster downloads"
                  ]
                ]
              },
              "content": "# -*- coding: utf-8 -*-\n\"\"\"\nMiniMax H3 官方底模 + Pika H3 Flex (双 LoRA) + fal Realism People 6步极速一采 Colab 一键启动脚本\n====================================================================================================\n仓库来源：https://huggingface.co/Comfy-Org/MiniMax-H3\n适用环境：Google Colab (推荐 A100 40GB / L4 24GB) 或 Linux NVIDIA GPU\n\n核心功能：\n1. 【官方纯净四大件】全部从 Comfy-Org/MiniMax-H3 官方仓库拉取，不含任何魔改或第三方杂乱插件：\n   - 扩散主干 (默认下载 Ref2VA Pruned INT8，可按需开启 FL2VA)：\n     diffusion_models/minimax_h3_ref2va_pruned_int8_convrot.safetensors\n   - 多模态视觉/文本编码器 (A100 默认下 INT8，24GB 显卡自动可选 NVFP4 AWQ)：\n     text_encoders/qwen3vl_32b_minimax_h3_int8_convrot.safetensors\n   - 视频解码器：vae/minimax_h3_video_vae_int8_convrot.safetensors\n   - 音频解码器：vae/minimax_h3_audio_vae_fp32.safetensors\n2. 【算子加速】自动安装并验证官方 comfy-kitchen (0.2.39/0.2.38) CUDA INT8 Attention 算子。\n3. 【开箱即用】自动将 3 套官方基础工作流（Ref2VA 多参考图 / T2V 文生视频 / FL2VA 首帧图生视频）写入 ComfyUI 菜单。\n4. 【公网访问】支持自定义 CF_TUNNEL_TOKEN 固定域名，或免注册自动生成 trycloudflare.com 公网链接。\n\"\"\"\n\nfrom __future__ import annotations\n\nimport json\nimport os\nimport re\nimport shutil\nimport socket\nimport subprocess\nimport sys\nimport time\nimport urllib.request\nfrom concurrent.futures import ThreadPoolExecutor, as_completed\nfrom pathlib import Path\n\nBASE = Path(\"/content\") if Path(\"/content\").exists() else Path.cwd()\nCOMFY = BASE / \"ComfyUI\"\nPORT = 8188\n\n# 固定经过验证的 ComfyUI 核心提交号（完整 40 位 SHA，防止主分支漂移）\nCOMFY_REV = \"b1a247c9cf9dbfda4b2c0a0c1d50950667eeaa0c\"\nKITCHEN_VERSIONS = (\"0.2.39\", \"0.2.38\")\n\n# 可选开关：设为 \"1\" 时额外下载 FL2VA 首尾帧专用底模；设为 \"nvfp4\" 时使用 24GB 显存友好的 NVFP4 文本编码器\nDOWNLOAD_FL2VA = os.getenv(\"DOWNLOAD_FL2VA\", \"0\").strip() == \"1\"\nTE_QUANT_MODE = os.getenv(\"TE_QUANT_MODE\", \"int8\").strip().lower()  # \"int8\" 或 \"nvfp4\"\n\nTE_FILENAME = (\n    \"text_encoders/qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors\"\n    if TE_QUANT_MODE == \"nvfp4\"\n    else \"text_encoders/qwen3vl_32b_minimax_h3_int8_convrot.safetensors\"\n)\n\n# ===== Comfy-Org/MiniMax-H3 官方基础版四大核心权重 + Pika Flex / LightX2V 双 LoRA 清单 =====\nBASE_MODELS = [\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"diffusion_models/minimax_h3_ref2va_pruned_int8_convrot.safetensors\",\n        \"diffusion_models\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        TE_FILENAME,\n        \"text_encoders\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"vae/minimax_h3_video_vae_int8_convrot.safetensors\",\n        \"vae\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"0543966fbdce5ba05709a8f2031c94bdba629b4a\",\n        \"vae/minimax_h3_audio_vae_fp32.safetensors\",\n        \"vae\",\n    ),\n    # 1. Pika H3 Flex 2 款官方 LoRA (Ref2VA & FL2VA)\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"loras/pika_h3_flex_ref2va_v1_bf16.safetensors\",\n        \"loras\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"loras/pika_h3_flex_fl2va_v1_bf16.safetensors\",\n        \"loras\",\n    ),\n    # 1.5 fal 写实人像皮肤纹理 LoRA\n    (\n        \"fal/MiniMax-H3-Realism-People-LoRA\",\n        \"main\",\n        \"h3-realism-people-t2v-i2v-r2v.safetensors\",\n        \"loras\",\n    ),\n    # 2. LightX2V Turbo 2 款极速蒸馏 LoRA (Ref2V & FL2V)\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"loras/minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors\",\n        \"loras\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"loras/minimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors\",\n        \"loras\",\n    ),\n]\n\nif DOWNLOAD_FL2VA:\n    BASE_MODELS.append(\n        (\n            \"Comfy-Org/MiniMax-H3\",\n            \"main\",\n            \"diffusion_models/minimax_h3_fl2va_pruned_int8_convrot.safetensors\",\n            \"diffusion_models\",\n        )\n    )\n\n\ndef get_secret(name: str) -> str:\n    value = os.getenv(name, \"\").strip()\n    if value:\n        return value\n    try:\n        from google.colab import userdata\n        return (userdata.get(name) or \"\").strip()\n    except Exception:\n        return \"\"\n\n\ndef run(args, cwd=None, check=True, env=None):\n    if isinstance(args, str):\n        print(\"$\", args, flush=True)\n        p = subprocess.run(args, cwd=cwd, shell=True, check=False, env=env)\n    else:\n        print(\"$\", \" \".join(map(str, args)), flush=True)\n        p = subprocess.run(list(map(str, args)), cwd=cwd, check=False, env=env)\n    if check and p.returncode != 0:\n        raise RuntimeError(\"命令执行失败: \" + (args if isinstance(args, str) else \" \".join(map(str, args))))\n    return p.returncode\n\n\ndef clone_pinned(url: str, path: Path, revision: str):\n    if len(revision) != 40 or any(c not in \"0123456789abcdef\" for c in revision):\n        raise ValueError(f\"必须提供完整 40 位 Git 提交号: {revision}\")\n    fresh = not path.exists()\n    if fresh:\n        run([\"git\", \"clone\", \"--filter=blob:none\", \"--depth\", \"1\", \"--no-checkout\", url, str(path)])\n    if not (path / \".git\").is_dir():\n        shutil.rmtree(path, ignore_errors=True)\n        run([\"git\", \"clone\", \"--filter=blob:none\", \"--depth\", \"1\", \"--no-checkout\", url, str(path)])\n        fresh = True\n\n    current = subprocess.run(\n        [\"git\", \"-C\", str(path), \"rev-parse\", \"HEAD\"],\n        text=True, capture_output=True, check=False,\n    ).stdout.strip()\n    if current == revision:\n        ready = subprocess.run(\n            [\"git\", \"-C\", str(path), \"ls-files\"],\n            text=True, capture_output=True, check=False,\n        ).stdout.strip()\n        if ready:\n            print(f\"⏩ 固定版本已就绪：{path.name} @ {revision[:10]}\", flush=True)\n            return\n    elif not fresh:\n        dirty = subprocess.run(\n            [\"git\", \"-C\", str(path), \"diff\", \"--name-only\", \"HEAD\"],\n            text=True, capture_output=True, check=False,\n        ).stdout.strip()\n        if dirty:\n            run([\"git\", \"-C\", str(path), \"stash\", \"push\", \"-m\", \"minimax-h3-base-pin\"], check=False)\n\n    run([\"git\", \"-C\", str(path), \"remote\", \"set-url\", \"origin\", url])\n    run([\"git\", \"-C\", str(path), \"fetch\", \"--depth\", \"1\", \"origin\", revision])\n    run([\"git\", \"-C\", str(path), \"checkout\", \"-f\", \"--detach\", revision])\n    print(f\"✅ 固定版本：{path.name} @ {revision[:10]}\", flush=True)\n\n\ndef ensure_cuda():\n    code = (\n        \"import torch;\"\n        \"print('Torch:', torch.__version__, 'CUDA:', torch.version.cuda);\"\n        \"print('GPU:', torch.cuda.get_device_name(0) if torch.cuda.is_available() else 'NONE');\"\n        \"raise SystemExit(0 if torch.cuda.is_available() else 2)\"\n    )\n    p = subprocess.run([sys.executable, \"-c\", code], text=True, capture_output=True)\n    print(p.stdout, flush=True)\n    if p.returncode != 0:\n        raise RuntimeError(\"未检测到可用 NVIDIA CUDA GPU，请在 Colab 菜单选择 GPU 运行时 (推荐 A100 / L4)。\")\n\n\ndef install_if_needed(requirements, req_file=None):\n    from importlib.metadata import PackageNotFoundError, version\n    try:\n        try:\n            from packaging.requirements import Requirement\n        except ImportError:\n            from pip._vendor.packaging.requirements import Requirement\n        ready = True\n        for raw in requirements:\n            raw = raw.strip()\n            if not raw or raw.startswith(\"#\"):\n                continue\n            if raw.startswith((\"-r\", \"--\", \"http://\", \"https://\", \"git+\")):\n                ready = False\n                break\n            req = Requirement(raw.split(\" #\", 1)[0].strip())\n            if req.marker and not req.marker.evaluate():\n                continue\n            if req.url or req.extras:\n                ready = False\n                break\n            try:\n                installed = version(req.name)\n            except PackageNotFoundError:\n                ready = False\n                break\n            if req.specifier and not req.specifier.contains(installed, prereleases=True):\n                ready = False\n                break\n        if ready:\n            print(f\"⏩ 依赖已满足: {req_file or '基础依赖'}\", flush=True)\n            return\n    except Exception:\n        pass\n    args = [sys.executable, \"-m\", \"pip\", \"install\", \"-q\", \"--prefer-binary\", \"--disable-pip-version-check\"]\n    args += [\"-r\", str(req_file)] if req_file else list(requirements)\n    run(args)\n\n\ndef install_comfy_requirements():\n    req = COMFY / \"requirements.txt\"\n    if not req.exists():\n        raise RuntimeError(\"ComfyUI requirements.txt 不存在\")\n\n    skip = {\"torch\", \"torchvision\", \"torchaudio\", \"triton\", \"comfy-kitchen\"}\n    kept = []\n    for raw in req.read_text(encoding=\"utf-8\").splitlines():\n        s = raw.strip()\n        if not s or s.startswith(\"#\"):\n            kept.append(raw)\n            continue\n        name = (\n            s.split(\"=\", 1)[0]\n            .split(\"<\", 1)[0]\n            .split(\">\", 1)[0]\n            .split(\"[\", 1)[0]\n            .strip()\n            .lower()\n            .replace(\"_\", \"-\")\n        )\n        if name not in skip:\n            kept.append(raw)\n\n    tmp = BASE / \"comfy_h3_base_requirements.txt\"\n    tmp.write_text(\"\\n\".join(kept) + \"\\n\", encoding=\"utf-8\")\n    install_if_needed(kept, tmp)\n\n\ndef ensure_comfy_kitchen() -> str:\n    from importlib.metadata import version\n    try:\n        cur = version(\"comfy-kitchen\")\n        if cur in KITCHEN_VERSIONS:\n            print(f\"⏩ 官方 comfy-kitchen {cur} 已安装\", flush=True)\n            return cur\n    except Exception:\n        pass\n\n    for ver in KITCHEN_VERSIONS:\n        print(f\"⚡ 安装官方预编译 comfy-kitchen {ver}...\", flush=True)\n        rc = run([\n            sys.executable, \"-m\", \"pip\", \"install\",\n            \"--index-url\", \"https://pypi.org/simple\",\n            \"--only-binary=:all:\", \"--no-deps\", \"--force-reinstall\",\n            \"--no-cache-dir\", f\"comfy-kitchen=={ver}\",\n        ], check=False)\n        if rc == 0:\n            return ver\n    raise RuntimeError(\"comfy-kitchen 预编译 wheel 安装失败\")\n\n\ndef verify_comfy_kitchen():\n    code = r\"\"\"\nimport torch\nimport comfy_kitchen as ck\nfrom importlib.metadata import version\n\nv = version(\"comfy-kitchen\")\nassert torch.cuda.is_available(), \"CUDA 不可用\"\nassert ck.list_backends().get(\"cuda\", {}).get(\"available\"), \"Kitchen CUDA backend 不可用\"\nassert ck.int8_attention_is_available(), \"Kitchen INT8 Attention 不可用\"\nprint(f\"KITCHEN_OK version={v} gpu={torch.cuda.get_device_name(0)}\")\n\"\"\"\n    p = subprocess.run([sys.executable, \"-c\", code], cwd=str(COMFY), text=True, capture_output=True)\n    if p.stdout:\n        print(p.stdout.strip(), flush=True)\n    if p.returncode != 0:\n        if p.stderr:\n            print(p.stderr, flush=True)\n        raise RuntimeError(\"comfy-kitchen GPU 算子预检未通过\")\n\n\n_EXPECTED_SIZE_CACHE = {}\n\n\ndef expected_size(repo: str, rev: str, filename: str):\n    key = (repo, rev, filename)\n    if key in _EXPECTED_SIZE_CACHE:\n        return _EXPECTED_SIZE_CACHE[key]\n    size = None\n    try:\n        from huggingface_hub import HfApi\n        info = HfApi().get_paths_info(\n            repo_id=repo, paths=[filename], revision=rev,\n            token=get_secret(\"HF_TOKEN\") or None,\n        )\n        if info:\n            size = getattr(info[0], \"size\", None)\n    except Exception:\n        pass\n    _EXPECTED_SIZE_CACHE[key] = size\n    return size\n\n\ndef download_one_subprocess(item, disable_xet: bool = False):\n    repo, rev, filename, category = item\n    dst_dir = COMFY / \"models\" / category\n    dst_dir.mkdir(parents=True, exist_ok=True)\n    target = dst_dir / Path(filename).name\n    expect = expected_size(repo, rev, filename)\n\n    if target.is_file() and target.stat().st_size > 1024 * 1024:\n        got = target.stat().st_size\n        if expect is None or got == expect:\n            print(f\"⏩ 已就绪: {target.name} ({got / 1024 ** 3:.2f} GB)\", flush=True)\n            return target\n\n    mode_tag = \"HTTP 直下\" if disable_xet else \"hf-xet 加速\"\n    print(f\"⬇️ 开始下载 [{mode_tag}]: {target.name}\", flush=True)\n\n    env = os.environ.copy()\n    if disable_xet:\n        env[\"HF_HUB_DISABLE_XET\"] = \"1\"\n        env.pop(\"HF_XET_HIGH_PERFORMANCE\", None)\n    else:\n        env[\"HF_XET_HIGH_PERFORMANCE\"] = \"1\"\n\n    dl_code = (\n        \"import os, shutil; from pathlib import Path; from huggingface_hub import hf_hub_download; \"\n        f\"p = Path(hf_hub_download(repo_id={repo!r}, revision={rev!r}, filename={filename!r}, \"\n        f\"local_dir={str(dst_dir)!r}, token=os.getenv('HF_TOKEN') or None)); \"\n        f\"t = Path({str(target)!r}); \"\n        \"if p.resolve() != t.resolve():\\n\"\n        \"    if t.exists() or t.is_symlink(): t.unlink()\\n\"\n        \"    try: t.symlink_to(p)\\n\"\n        \"    except Exception: shutil.copy2(p, t)\\n\"\n    )\n    p = subprocess.run([sys.executable, \"-c\", dl_code], env=env, check=False)\n    if p.returncode != 0 or not target.exists():\n        raise RuntimeError(f\"下载失败: {target.name}\")\n\n    got = target.stat().st_size\n    if expect is not None and got != expect:\n        raise RuntimeError(f\"下载后大小不符: {target.name} ({got} != {expect})\")\n    print(f\"✅ 完成: {target.name} ({got / 1024 ** 3:.2f} GB)\", flush=True)\n    return target\n\n\ndef download_all_base_models():\n    failed = []\n    with ThreadPoolExecutor(max_workers=3) as pool:\n        fmap = {pool.submit(download_one_subprocess, item, False): item for item in BASE_MODELS}\n        for fut in as_completed(fmap):\n            item = fmap[fut]\n            try:\n                fut.result()\n            except Exception as exc:\n                print(f\"⚠️ Xet 通道异常，转入 HTTP 兜底: {Path(item[2]).name} ({exc})\", flush=True)\n                failed.append(item)\n\n    for item in failed:\n        name = Path(item[2]).name\n        last_err = None\n        for attempt, wait_s in enumerate((0, 10, 25), start=1):\n            if wait_s:\n                print(f\"⏳ 等待 {wait_s}s 后重试 {name} ({attempt}/3)...\", flush=True)\n                time.sleep(wait_s)\n            try:\n                download_one_subprocess(item, disable_xet=True)\n                last_err = None\n                break\n            except Exception as exc:\n                last_err = exc\n        if last_err is not None:\n            raise RuntimeError(f\"模型下载失败: {name}\") from last_err\n\n\ndef wait_port_and_verify_nodes(proc, log_path: Path, timeout=180):\n    start = time.time()\n    print(f\"⏳ 正在启动 ComfyUI 后端 (端口 {PORT})\", end=\"\", flush=True)\n    while time.time() - start < timeout:\n        if proc.poll() is not None:\n            print(\"\\n❌ ComfyUI 进程异常退出！末尾日志：\", flush=True)\n            if log_path.exists():\n                print(log_path.read_text(encoding=\"utf-8\", errors=\"ignore\")[-10000:])\n            raise RuntimeError(f\"ComfyUI exit={proc.returncode}\")\n        try:\n            with socket.create_connection((\"127.0.0.1\", PORT), timeout=1):\n                print(f\" ✅ ({int(time.time() - start)}s)\", flush=True)\n                break\n        except OSError:\n            print(\".\", end=\"\", flush=True)\n            time.sleep(1)\n    else:\n        raise RuntimeError(\"ComfyUI 启动超时\")\n\n    with urllib.request.urlopen(f\"http://127.0.0.1:{PORT}/object_info\", timeout=30) as resp:\n        info = json.load(resp)\n\n    required_nodes = [\n        \"UNETLoader\",\n        \"CLIPLoader\",\n        \"VAELoader\",\n        \"MiniMaxH3ReferenceToVideo\",\n        \"MiniMaxH3AddGuide\",\n        \"MiniMaxH3SigmaShift\",\n        \"SamplerCustomAdvanced\",\n        \"VAEDecode\",\n        \"VAEDecodeAudio\",\n        \"CreateVideo\",\n        \"SaveVideo\",\n    ]\n    missing = [n for n in required_nodes if n not in info]\n    if missing:\n        raise RuntimeError(\"缺少核心节点: \" + \", \".join(missing))\n    print(f\"✅ 全部 {len(required_nodes)} 个 MiniMax H3 官方核心节点校验通过！\", flush=True)\n\n\ndef launch_cloudflare_tunnel() -> str | None:\n    binary = shutil.which(\"cloudflared\")\n    if not binary:\n        local = BASE / \"cloudflared\"\n        if not local.is_file() or local.stat().st_size < 1024 * 1024:\n            partial = local.with_suffix(\".part\")\n            url = \"https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64\"\n            run([\"curl\", \"-fL\", \"--retry\", \"3\", \"--connect-timeout\", \"15\", \"--max-time\", \"120\", \"-o\", str(partial), url])\n            partial.replace(local)\n        local.chmod(0o755)\n        binary = str(local)\n\n    cf_log_path = BASE / \"cloudflared_minimax_h3.log\"\n    cf_log = open(cf_log_path, \"w\", encoding=\"utf-8\")\n    token = get_secret(\"CF_TUNNEL_TOKEN\")\n\n    if token:\n        cmd = [binary, \"tunnel\", \"--protocol\", \"http2\", \"run\", \"--token\", token]\n        mode_desc = \"固定域名隧道 (CF_TUNNEL_TOKEN)\"\n    else:\n        cmd = [binary, \"tunnel\", \"--protocol\", \"http2\", \"--url\", f\"http://127.0.0.1:{PORT}\"]\n        mode_desc = \"免配置临时公网隧道 (Quick Tunnel)\"\n\n    print(f\"🌐 启动 Cloudflare 隧道 [{mode_desc}]...\", flush=True)\n    cf_proc = subprocess.Popen(cmd, stdout=cf_log, stderr=subprocess.STDOUT, start_new_session=True)\n\n    public_url = os.getenv(\"PUBLIC_URL\", \"\").strip()\n    url_pattern = re.compile(r\"https://[a-zA-Z0-9-]+\\.trycloudflare\\.com\")\n    deadline = time.time() + 35\n\n    while time.time() < deadline:\n        if cf_proc.poll() is not None:\n            break\n        if cf_log_path.exists():\n            txt = cf_log_path.read_text(encoding=\"utf-8\", errors=\"ignore\")\n            if not token:\n                m = url_pattern.search(txt)\n                if m:\n                    public_url = m.group(0)\n                    break\n            elif \"Registered tunnel connection\" in txt:\n                break\n        time.sleep(1)\n\n    return public_url or None\n\n\ndef main():\n    if sys.platform != \"linux\":\n        raise RuntimeError(\"本脚本专为 Google Colab / Linux NVIDIA GPU 环境设计。\")\n\n    t0 = time.time()\n    hf_token = get_secret(\"HF_TOKEN\")\n    if hf_token:\n        os.environ[\"HF_TOKEN\"] = hf_token\n\n    os.environ[\"PYTORCH_CUDA_ALLOC_CONF\"] = \"expandable_segments:True\"\n    os.environ[\"CUDA_MODULE_LOADING\"] = \"LAZY\"\n\n    print(\"=\" * 78, flush=True)\n    print(\"🚀 MiniMax H3 开源音视频模型 · 官方纯净基础版 (Comfy-Org/MiniMax-H3) 一键部署\", flush=True)\n    print(f\"📌 ComfyUI 固定提交: {COMFY_REV[:10]} | 存储路径: /content 本地高速盘\", flush=True)\n    print(\"=\" * 78, flush=True)\n\n    ensure_cuda()\n    clone_pinned(\"https://github.com/Comfy-Org/ComfyUI.git\", COMFY, COMFY_REV)\n    install_if_needed([\"huggingface_hub<2.0.0\", \"hf-xet\", \"pillow\"])\n\n    print(\"\\n📦 [1/4] 后台并行启动官方四大基础权重下载...\", flush=True)\n    pool = ThreadPoolExecutor(max_workers=1)\n    dl_future = pool.submit(download_all_base_models)\n\n    try:\n        print(\"\\n🔧 [2/4] 安装 ComfyUI 依赖与 comfy-kitchen INT8 算子...\", flush=True)\n        install_if_needed([\"transformers>=4.45.0\", \"safetensors>=0.4.3\", \"tokenizers>=0.19.0\", \"einops\"])\n        install_comfy_requirements()\n        ensure_comfy_kitchen()\n        verify_comfy_kitchen()\n\n        print(\"\\n⏳ [3/4] 等待官方四大基础权重下载完成...\", flush=True)\n        dl_future.result()\n    finally:\n        pool.shutdown(wait=False)\n\n    out_dir = COMFY / \"output_local\"\n    out_dir.mkdir(parents=True, exist_ok=True)\n\n    print(\"\\n🚀 [4/4] 启动 ComfyUI 服务与公网访问隧道...\", flush=True)\n    log_path = BASE / \"comfyui_minimax_h3_base.log\"\n    log_fp = open(log_path, \"w\", encoding=\"utf-8\")\n    cmd = [\n        sys.executable,\n        \"main.py\",\n        \"--listen\", \"0.0.0.0\",\n        \"--port\", str(PORT),\n        \"--output-directory\", str(out_dir),\n        \"--disable-auto-launch\",\n        \"--enable-cors-header\", \"*\",\n        \"--async-offload\", \"2\",\n        \"--reserve-vram\", \"2.0\",\n        \"--use-ck-attention\",\n        \"--fast\", \"fp16_accumulation\",\n    ]\n    proc = subprocess.Popen(cmd, cwd=str(COMFY), stdout=log_fp, stderr=subprocess.STDOUT, start_new_session=True)\n    wait_port_and_verify_nodes(proc, log_path, timeout=180)\n    tunnel_url = launch_cloudflare_tunnel()\n    log_fp.close()\n\n    print(\"\\n\" + \"=\" * 78, flush=True)\n    print(f\"🎉 MiniMax H3 官方基础版部署完成！(总耗时 {time.time() - t0:.1f}s)\", flush=True)\n    if tunnel_url:\n        print(f\"🌍 公网访问地址: {tunnel_url}\")\n    else:\n        print(\"ℹ️ 如使用自定义 CF_TUNNEL_TOKEN，请直接打开你绑定的 Cloudflare 域名；或查看 cloudflared_minimax_h3.log\")\n    print(\"=\" * 78, flush=True)\n\n\nif __name__ == \"__main__\":\n    main()\n"
            },
            "models": {
              "zh": [
                [
                  "1. 官方扩散主干",
                  "diffusion_models/",
                  "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "官方 Ref2VA 裁剪 INT8 主干，兼顾 CUT、T2V 与 CONTINUE"
                ],
                [
                  "2. Pika Flex Ref2VA LoRA",
                  "loras/",
                  "pika_h3_flex_ref2va_v1_bf16.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "CUT / T2V 模式挂载 (strength=1.0)，6 步生成高动态画面"
                ],
                [
                  "3. Pika Flex FL2VA LoRA",
                  "loras/",
                  "pika_h3_flex_fl2va_v1_bf16.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "CONTINUE 首帧接续模式挂载 (strength=1.0)，消除首帧僵硬"
                ],
                [
                  "4. fal 写实人像 LoRA",
                  "loras/",
                  "h3-realism-people-t2v-i2v-r2v.safetensors",
                  "fal/MiniMax-H3-Realism-People-LoRA",
                  "串联在 Pika LoRA 之前 (strength=0.5)，消除皮肤塑料油腻感"
                ],
                [
                  "5. 视觉/文本编码器",
                  "text_encoders/",
                  "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "32B 视觉语言编码器（24GB 卡可用 nvfp4_awq）"
                ],
                [
                  "6. 视频与音频双 VAE",
                  "vae/",
                  "minimax_h3_video_vae_int8_convrot.safetensors · minimax_h3_audio_vae_fp32.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "画面解码器 (INT8) 与全精度音频解码器 (FP32)"
                ]
              ],
              "en": [
                [
                  "1. Official Backbone",
                  "diffusion_models/",
                  "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "Official pruned INT8 Ref2VA backbone"
                ],
                [
                  "2. Pika Flex Ref2VA LoRA",
                  "loras/",
                  "pika_h3_flex_ref2va_v1_bf16.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "For CUT / T2V modes (strength=1.0, 6 steps)"
                ],
                [
                  "3. Pika Flex FL2VA LoRA",
                  "loras/",
                  "pika_h3_flex_fl2va_v1_bf16.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "For CONTINUE / I2V modes (strength=1.0, 6 steps)"
                ],
                [
                  "4. fal Realism People LoRA",
                  "loras/",
                  "h3-realism-people-t2v-i2v-r2v.safetensors",
                  "fal/MiniMax-H3-Realism-People-LoRA",
                  "Chained before Pika LoRA (strength=0.5) for natural skin"
                ],
                [
                  "5. Vision/Text Encoder",
                  "text_encoders/",
                  "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "32B VLM encoder"
                ],
                [
                  "6. Video & Audio VAEs",
                  "vae/",
                  "minimax_h3_video_vae_int8_convrot.safetensors · minimax_h3_audio_vae_fp32.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "INT8 Video VAE + FP32 Audio VAE"
                ]
              ]
            },
            "params": {
              "zh": [
                [
                  "LoraLoaderModelOnly (#943)",
                  "strength_model",
                  "0.5",
                  "fal Realism People 写实皮肤权重，0.5 甜点值自然不僵硬"
                ],
                [
                  "LoraLoaderModelOnly (#944)",
                  "strength_model",
                  "1.0",
                  "Pika H3 Flex LoRA 标准权重，CUT/T2V 选 ref2va，CONTINUE 选 fl2va"
                ],
                [
                  "BasicScheduler (#124)",
                  "steps / scheduler",
                  "6 / simple",
                  "挂载 Pika Flex 后仅需 6 步即可收敛，比原生 20 步快 3 倍以上"
                ],
                [
                  "MiniMaxH3SigmaShift (#142)",
                  "shift_video / shift_audio",
                  "12.0 / 3.0",
                  "挂载在双 LoRA 之后，固定 12.0 / 3.0"
                ]
              ],
              "en": [
                [
                  "LoraLoaderModelOnly (#943)",
                  "strength_model",
                  "0.5",
                  "Sweet-spot weight for fal Realism People LoRA"
                ],
                [
                  "LoraLoaderModelOnly (#944)",
                  "strength_model",
                  "1.0",
                  "Full weight for Pika H3 Flex (ref2va for CUT/T2V, fl2va for CONTINUE)"
                ],
                [
                  "BasicScheduler (#124)",
                  "steps / scheduler",
                  "6 / simple",
                  "6 steps with Pika Flex—over 3x faster than 20-step native"
                ],
                [
                  "MiniMaxH3SigmaShift (#142)",
                  "shift_video / shift_audio",
                  "12.0 / 3.0",
                  "Placed after both LoRAs; keep at 12.0 / 3.0"
                ]
              ]
            }
          },
          {
            "id": "h3-standalone-2k",
            "status": "live",
            "short": {
              "zh": "03 · 单独上传视频 2K 精修",
              "en": "03 · Standalone Video 2K Refine"
            },
            "title": {
              "zh": "单独上传视频 2K 超分精修：英伟达 Open-H3-Regenerate-2K 独立工作流与脚本",
              "en": "Standalone Video to 2K Refinement: NVIDIA Open-H3-Regenerate-2K Workflows & Colab"
            },
            "tagline": {
              "zh": "上传任意低清视频 (draft.mp4) · 3D 潜空间放大 · 3 步 Euler 2K 重绘毛孔细节 · 原声无损保留",
              "en": "Upload any draft MP4 · 3D Latent Upscale · 3-Step Euler 2K Detail Regeneration · Lossless Audio Passthrough"
            },
            "summary": {
              "zh": "已经有了一采生成的 480p/768p 草稿视频（甚至其他模型生成的片段），想单独上传精修到 1080p / 2K（2560×1440）？本模块提供独立的英伟达 Open-H3-Regenerate-2K 标准版、人脸区域保脸版（FaceRegion）与 API 版三套工作流及专属 Colab 脚本。",
              "en": "Already have a 480p/768p draft MP4 and want to refine it standalone to 1080p or 2K (2560×1440)? Includes Standard 2K, Face-Preserving (FaceRegion), and API-format workflows plus a dedicated Colab script."
            },
            "tags": {
              "zh": [
                "NVIDIA Open-H3-Regenerate-2K",
                "单独上传 draft.mp4",
                "标准版 & 保脸版",
                "3步 Euler 极速重绘"
              ],
              "en": [
                "NVIDIA Open-H3-Regenerate-2K",
                "Upload draft.mp4",
                "Standard & Face-Lock",
                "3-Step Euler Refine"
              ]
            },
            "stats": [
              {
                "value": "2560×1440",
                "label": {
                  "zh": "支持 1080p / 2K / 4K 输出",
                  "en": "1080p / 2K / 4K Output"
                }
              },
              {
                "value": "3 步",
                "label": {
                  "zh": "Euler 极速精修采样",
                  "en": "3-Step Euler Refinement"
                }
              },
              {
                "value": "0.78",
                "label": {
                  "zh": "保脸/锁动作 start_sigma",
                  "en": "Motion/Face-Lock start_sigma"
                }
              },
              {
                "value": "100%",
                "label": {
                  "zh": "原视频音轨无损接回",
                  "en": "Lossless Original Audio"
                }
              }
            ],
            "hfRepos": [
              {
                "name": "Efficient-Large-Model/Open-H3-Regenerate-2K",
                "url": "https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K",
                "desc": {
                  "zh": "英伟达官方 Open-H3 2K 精修 LoRA / Sharp 50层锐化曲线 / Fast VAE",
                  "en": "NVIDIA Official 2K Refine LoRA / Sharp 50 Curves / Fast VAE"
                }
              },
              {
                "name": "LBH-123-AI/Minimax_h3_latent_Upscaler",
                "url": "https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler",
                "desc": {
                  "zh": "3D 潜变量放大器权重 (minimax_h3_latent_upscaler_3d_conv_v1)",
                  "en": "3D Latent Upscaler Weights"
                }
              },
              {
                "name": "Comfy-Org/MiniMax-H3",
                "url": "https://huggingface.co/Comfy-Org/MiniMax-H3",
                "desc": {
                  "zh": "H3 基础底模、Qwen3-VL 32B 与音视频 VAE 官方仓库",
                  "en": "Official H3 Backbones, 32B VLM & VAEs"
                }
              },
              {
                "name": "rdh9616/ComfyUI-Open-H3-Regenerate",
                "url": "https://github.com/rdh9616/ComfyUI-Open-H3-Regenerate",
                "desc": {
                  "zh": "Open-H3 2K 精修 ComfyUI 节点插件",
                  "en": "ComfyUI Custom Nodes for Open-H3 Regenerate"
                }
              },
              {
                "name": "BennyDaBall930/ComfyUI-Open-H3-FaceRegion",
                "url": "https://github.com/BennyDaBall930/ComfyUI-Open-H3-FaceRegion",
                "desc": {
                  "zh": "保脸版专用人脸区域检测与局部降噪控制节点",
                  "en": "Face Region Masking Node for Identity Preservation"
                }
              }
            ],
            "versionGroups": [
              {
                "title": {
                  "zh": "一、单独上传视频 2K 精修的三种模式怎么选？",
                  "en": "1. Choosing Among the 3 Standalone 2K Refinement Modes"
                },
                "desc": {
                  "zh": "针对风景大场面、特写口播保脸以及后端批量调用，我们准备了三套针对性的独立精修工作流：",
                  "en": "Pick the workflow that matches your shot type—full-scene detail, close-up face preservation, or clean API pipeline:"
                },
                "rows": {
                  "zh": [
                    [
                      "01 · 标准满细节 2K 版 (Standard)",
                      "01_OpenH3_2K_Standalone_Standard.json",
                      "OpenH3RegenLora + Sharp 50层曲线",
                      "全图高细节重绘（默认 start_sigma=0.909 或手动调 0.78），适合奇幻巨兽、风景空镜、全身动作镜头"
                    ],
                    [
                      "02 · 人脸保护 2K 版 (FaceLock) ⭐",
                      "02_OpenH3_2K_Standalone_FaceLock.json",
                      "ComfyUI-Open-H3-FaceRegion + r384 LoRA",
                      "自动检测人脸区域并降低面部重绘幅度 (FACE_STRENGTH=0.60~0.78)，背景升 2K 同时严格保住主角五官不变脸"
                    ],
                    [
                      "03 · 极简 API 单视频二采版",
                      "03_OpenH3_2K_Standalone_API.json",
                      "MinimaxH3LatentUpscaler3D (2.0x) + start_sigma=0.78",
                      "与项目工作台完全一致的 API 结构：保持原视频比例 2.0 倍等比潜空间放大 + 3 步 Euler (0.78) 极速精修"
                    ]
                  ],
                  "en": [
                    [
                      "01 · Standard Full-Detail 2K",
                      "01_OpenH3_2K_Standalone_Standard.json",
                      "OpenH3RegenLora + Sharp 50 Curves",
                      "Full-frame detail regeneration—ideal for monsters, landscapes, VFX, and wide action shots"
                    ],
                    [
                      "02 · Face-Preserving 2K (FaceLock) ⭐",
                      "02_OpenH3_2K_Standalone_FaceLock.json",
                      "ComfyUI-Open-H3-FaceRegion + r384 LoRA",
                      "Detects faces and lowers facial redraw strength (0.60–0.78) so close-up characters never lose their identity"
                    ],
                    [
                      "03 · Clean API Single-Video Refine",
                      "03_OpenH3_2K_Standalone_API.json",
                      "MinimaxH3LatentUpscaler3D (2.0x) + start_sigma=0.78",
                      "Clean API graph: 2.0x proportional 3D latent upscale + 3-step Euler (start_sigma=0.78) refinement"
                    ]
                  ]
                }
              }
            ],
            "workflows": [
              {
                "key": "standalone-facelock",
                "name": "02_OpenH3_2K_Standalone_FaceLock.json",
                "label": {
                  "zh": "01 · 单独上传视频 2K 保脸精修工作流 (推荐)",
                  "en": "01 · Standalone 2K Face-Lock Workflow (Recommended)"
                },
                "badge": {
                  "zh": "不换脸首选",
                  "en": "Face-Lock"
                },
                "desc": {
                  "zh": "在 LoadVideo 节点上传 draft.mp4，自动识别人脸区域降低重绘幅度，在升至 1080p/2K 的同时锁死主角五官。",
                  "en": "Upload draft.mp4 in LoadVideo; automatically masks facial regions so 2K refinement preserves exact character identity."
                },
                "steps": {
                  "zh": [
                    [
                      "上传草稿视频",
                      "LoadVideo #1 → GetVideoComponents #2",
                      "上传低清视频 draft.mp4，自动拆出图像帧、原声与帧率"
                    ],
                    [
                      "尺寸对齐与编码",
                      "OpenH3RegenPrepareDraft #3 → VAEEncode #5",
                      "统一帧尺寸并编码为 H3 视频潜变量"
                    ],
                    [
                      "3D 潜空间放大",
                      "OpenH3RegenUpscale #6",
                      "在潜空间直接放大至 1080p 或 2K (2560×1440)"
                    ],
                    [
                      "人脸检测与 3 步精修",
                      "FaceRegion + OpenH3RegenSigmas",
                      "人脸区域降权保护，3 步 Euler 补齐高清皮肤与发丝细节"
                    ],
                    [
                      "无损合回原声",
                      "OpenH3RegenFinish → SaveVideo",
                      "裁齐帧数并将原视频音轨 100% 无损合回"
                    ]
                  ],
                  "en": [
                    [
                      "Upload Draft MP4",
                      "LoadVideo #1 → GetVideoComponents #2",
                      "Upload draft.mp4 and split frames, audio, and fps"
                    ],
                    [
                      "Align & Encode",
                      "OpenH3RegenPrepareDraft #3 → VAEEncode #5",
                      "Align dimensions and encode into H3 video latent"
                    ],
                    [
                      "3D Latent Upscale",
                      "OpenH3RegenUpscale #6",
                      "Upscale latent directly to 1080p or 2K (2560×1440)"
                    ],
                    [
                      "Face Mask + 3-Step Refine",
                      "FaceRegion + OpenH3RegenSigmas",
                      "Protect facial identity while refining 2K detail in 3 Euler steps"
                    ],
                    [
                      "Restore Audio & Save",
                      "OpenH3RegenFinish → SaveVideo",
                      "Trim frame count and mux original audio losslessly"
                    ]
                  ]
                },
                "content": {
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
              },
              {
                "key": "standalone-standard",
                "name": "01_OpenH3_2K_Standalone_Standard.json",
                "label": {
                  "zh": "02 · 单独上传视频 2K 标准满细节工作流",
                  "en": "02 · Standalone 2K Full-Detail Workflow"
                },
                "badge": {
                  "zh": "大场面/奇幻",
                  "en": "Max Detail"
                },
                "desc": {
                  "zh": "使用 OpenH3RegenLora + sharp_curve_branches 50 层高频锐化曲线，全画幅爆发毛孔、鳞片、织物与风景纹理。",
                  "en": "Uses OpenH3RegenLora + 50-layer sharp_curve_branches for maximum full-frame texture regeneration."
                },
                "steps": {
                  "zh": [
                    [
                      "上传草稿视频",
                      "LoadVideo #1 → GetVideoComponents #2",
                      "上传待超分的低清视频 draft.mp4"
                    ],
                    [
                      "编码与 3D 放大",
                      "VAEEncode #5 → OpenH3RegenUpscale",
                      "编码潜变量并放大至 1080p / 2K"
                    ],
                    [
                      "挂载 2K 精修 + 50层锐化",
                      "OpenH3RegenLora #7",
                      "加载 open_h3_regenerate_2k_lora 与 sharp_curve_branches"
                    ],
                    [
                      "3 步 Euler 重绘",
                      "OpenH3RegenSigmas → SamplerCustomAdvanced",
                      "3 步极速生成 2K 锐利高频纹理"
                    ],
                    [
                      "Fast VAE 解码合成",
                      "VAEDecode → OpenH3RegenFinish",
                      "解码高清帧并合回原视频声音"
                    ]
                  ],
                  "en": [
                    [
                      "Upload Draft MP4",
                      "LoadVideo #1 → GetVideoComponents #2",
                      "Select draft.mp4 to refine"
                    ],
                    [
                      "Encode & 3D Upscale",
                      "VAEEncode #5 → OpenH3RegenUpscale",
                      "Encode latent and upscale to 1080p / 2K"
                    ],
                    [
                      "Load 2K LoRA + 50 Curves",
                      "OpenH3RegenLora #7",
                      "open_h3_regenerate_2k_lora + sharp_curve_branches"
                    ],
                    [
                      "3-Step Euler Refine",
                      "OpenH3RegenSigmas → SamplerCustomAdvanced",
                      "3 Euler steps for razor-sharp 2K texture"
                    ],
                    [
                      "Decode & Mux Audio",
                      "VAEDecode → OpenH3RegenFinish",
                      "Decode frames and re-attach original audio"
                    ]
                  ]
                },
                "content": {
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
              },
              {
                "key": "standalone-api",
                "name": "03_OpenH3_2K_Standalone_API.json",
                "label": {
                  "zh": "03 · 单视频 2.0x 等比放大二采 API 工作流",
                  "en": "03 · 2.0x Proportional Upscale API Workflow"
                },
                "badge": {
                  "zh": "API 极简版",
                  "en": "Clean API"
                },
                "desc": {
                  "zh": "保持输入视频原始宽高比（如 16:9 或 9:16），直接按 2.0 倍等比放大潜空间并跑 3 步 Euler (start_sigma=0.78) 精修。",
                  "en": "Preserves original aspect ratio (16:9 or 9:16), scales latent 2.0x, and refines in 3 Euler steps (start_sigma=0.78)."
                },
                "steps": {
                  "zh": [
                    [
                      "读取原视频",
                      "LoadVideo #b15_load_video",
                      "加载任意比例的一采草稿视频"
                    ],
                    [
                      "保持原尺寸编码",
                      "OpenH3RegenPrepareDraft (keep) → VAEEncode",
                      "不强制拉伸比例，按 32 倍数对齐后编码"
                    ],
                    [
                      "2.0x 等比 3D 放大",
                      "MinimaxH3LatentUpscaler3D #b15_upscale",
                      "mode.scale = 2.0（480p 直升 1080p+）"
                    ],
                    [
                      "0.78 锁动作 3 步精修",
                      "OpenH3RegenLora + OpenH3RegenSigmas",
                      "start_sigma = 0.78 严锁原片动作与脸型，3 步补细节"
                    ],
                    [
                      "合回原声输出",
                      "OpenH3RegenFinish → SaveVideo",
                      "输出精修后的高清有声成片"
                    ]
                  ],
                  "en": [
                    [
                      "Load Source Video",
                      "LoadVideo #b15_load_video",
                      "Load draft video of any aspect ratio"
                    ],
                    [
                      "Keep Aspect & Encode",
                      "OpenH3RegenPrepareDraft (keep) → VAEEncode",
                      "Snap to 32 without aspect distortion"
                    ],
                    [
                      "2.0x 3D Latent Scale",
                      "MinimaxH3LatentUpscaler3D #b15_upscale",
                      "mode.scale = 2.0"
                    ],
                    [
                      "0.78 3-Step Refine",
                      "OpenH3RegenLora + OpenH3RegenSigmas",
                      "start_sigma = 0.78 locks motion and identity"
                    ],
                    [
                      "Re-attach Audio",
                      "OpenH3RegenFinish → SaveVideo",
                      "Save refined high-res MP4 with original audio"
                    ]
                  ]
                },
                "content": {
                  "119": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_video_vae_int8_convrot.safetensors"
                    }
                  },
                  "120": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_audio_vae_fp32.safetensors"
                    }
                  },
                  "128": {
                    "class_type": "CLIPLoader",
                    "inputs": {
                      "clip_name": "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                      "type": "minimax",
                      "device": "default"
                    }
                  },
                  "127": {
                    "class_type": "UNETLoader",
                    "inputs": {
                      "unet_name": "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                      "weight_dtype": "default"
                    },
                    "_meta": {
                      "title": "MiniMax H3 Official Ref2VA INT8"
                    }
                  },
                  "142": {
                    "class_type": "MiniMaxH3SigmaShift",
                    "inputs": {
                      "model": [
                        "127",
                        0
                      ],
                      "shift_video": 12.0,
                      "shift_audio": 3.0
                    }
                  },
                  "b15_load_video": {
                    "class_type": "LoadVideo",
                    "inputs": {
                      "file": "draft.mp4"
                    },
                    "_meta": {
                      "title": "① 上传待精修的低清视频 (draft.mp4)"
                    }
                  },
                  "b15_video_comp": {
                    "class_type": "GetVideoComponents",
                    "inputs": {
                      "video": [
                        "b15_load_video",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "② 拆出原视频画面与原声"
                    }
                  },
                  "b15_prep_draft": {
                    "class_type": "OpenH3RegenPrepareDraft",
                    "inputs": {
                      "images": [
                        "b15_video_comp",
                        0
                      ],
                      "size": "keep (snap to 32)",
                      "max_frames": 0,
                      "source_fps": 0.0
                    },
                    "_meta": {
                      "title": "③ 帧尺寸对齐 (32倍数)"
                    }
                  },
                  "b15_vae_encode": {
                    "class_type": "VAEEncode",
                    "inputs": {
                      "pixels": [
                        "b15_prep_draft",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "④ 编码为 H3 视频潜变量"
                    }
                  },
                  "b15_upscale": {
                    "class_type": "MinimaxH3LatentUpscaler3D",
                    "inputs": {
                      "latent": [
                        "b15_vae_encode",
                        0
                      ],
                      "model_name": "minimax_h3_latent_upscaler_3d_conv_v1/minimax_h3_latent_upscaler_3d_conv_v1_fp16.safetensors",
                      "mode": "scale by multiplier",
                      "mode.scale": 2.0,
                      "align": 32,
                      "enable_temporal_chunking": true,
                      "force_unload": true,
                      "device": "cuda",
                      "precision": "fp16"
                    },
                    "_meta": {
                      "title": "⑤ 3D 潜变量 2.0x 放大 (1080p / 2K)"
                    }
                  },
                  "b15_concat": {
                    "class_type": "OpenH3RegenRefineLatent",
                    "inputs": {
                      "latent": [
                        "b15_upscale",
                        0
                      ],
                      "audio_mode": "silence (reference)",
                      "audio_vae": [
                        "120",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "⑥ 准备单视频精修潜变量"
                    }
                  },
                  "b15_text_cond": {
                    "class_type": "CLIPTextEncode",
                    "inputs": {
                      "clip": [
                        "128",
                        0
                      ],
                      "text": "same content and motion as the draft video, photorealistic, natural skin texture, fine detail, sharp focus"
                    },
                    "_meta": {
                      "title": "⑦ 单视频精修提示词"
                    }
                  },
                  "b15_regen_lora": {
                    "class_type": "OpenH3RegenLora",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "lora_name": "open_h3_regenerate_2k_lora.safetensors",
                      "curve_name": "sharp_curve_branches.safetensors",
                      "curve_table": "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                      "strength": 1.0,
                      "curve_strength": 0.65,
                      "lora_dtype": "bf16"
                    },
                    "_meta": {
                      "title": "⑧ Open-H3 2K 精修 LoRA + Sharp 50层高频锐化曲线"
                    }
                  },
                  "b15_guider": {
                    "class_type": "BasicGuider",
                    "inputs": {
                      "model": [
                        "b15_regen_lora",
                        0
                      ],
                      "conditioning": [
                        "b15_text_cond",
                        0
                      ]
                    }
                  },
                  "b15_sampler": {
                    "class_type": "KSamplerSelect",
                    "inputs": {
                      "sampler_name": "euler"
                    }
                  },
                  "b15_noise": {
                    "class_type": "RandomNoise",
                    "inputs": {
                      "noise_seed": 42
                    }
                  },
                  "b15_schedule": {
                    "class_type": "OpenH3RegenSigmas",
                    "inputs": {
                      "steps": 3,
                      "start_sigma": 0.78
                    },
                    "_meta": {
                      "title": "⑨ 3步 Euler 调度 (start_sigma=0.78 锁动作)"
                    }
                  },
                  "b15_refine": {
                    "class_type": "SamplerCustomAdvanced",
                    "inputs": {
                      "noise": [
                        "b15_noise",
                        0
                      ],
                      "guider": [
                        "b15_guider",
                        0
                      ],
                      "sampler": [
                        "b15_sampler",
                        0
                      ],
                      "sigmas": [
                        "b15_schedule",
                        0
                      ],
                      "latent_image": [
                        "b15_concat",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "⑩ Open-H3 单视频 2K 精修采样"
                    }
                  },
                  "122": {
                    "class_type": "VAEDecode",
                    "inputs": {
                      "samples": [
                        "b15_refine",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ]
                    }
                  },
                  "b15_finish": {
                    "class_type": "OpenH3RegenFinish",
                    "inputs": {
                      "images": [
                        "122",
                        0
                      ],
                      "frame_count": [
                        "b15_prep_draft",
                        1
                      ],
                      "crop": "none",
                      "audio": [
                        "b15_video_comp",
                        1
                      ]
                    },
                    "_meta": {
                      "title": "⑪ 裁齐帧数并无损接回原视频音频"
                    }
                  },
                  "130": {
                    "class_type": "CreateVideo",
                    "inputs": {
                      "images": [
                        "b15_finish",
                        0
                      ],
                      "audio": [
                        "b15_finish",
                        1
                      ],
                      "fps": 24,
                      "bit_depth": 8
                    }
                  },
                  "92": {
                    "class_type": "SaveVideo",
                    "inputs": {
                      "video": [
                        "130",
                        0
                      ],
                      "format": "auto",
                      "codec": "auto",
                      "filename_prefix": "openh3_2k_standalone_refined"
                    }
                  }
                }
              }
            ],
            "colab": {
              "name": "OpenH3_Standalone_2K_Colab.py",
              "gpu": {
                "zh": "A100 40GB（推荐 1080p）/ A100 80GB 或 H100（推荐 2K/4K）",
                "en": "A100 40GB (1080p) / A100 80GB or H100 (2K/4K)"
              },
              "secrets": {
                "zh": [
                  [
                    "FACE_MASK",
                    "默认 1（启用保脸版工作流）；设为 0 切换标准满细节版"
                  ],
                  [
                    "FACE_STRENGTH",
                    "默认 0.78（面部重绘强度，越低越保脸，越高细节越多）"
                  ],
                  [
                    "RES",
                    "默认 auto（≥60GB 显存选 2k，40GB 显存自动选 1080p）"
                  ]
                ],
                "en": [
                  [
                    "FACE_MASK",
                    "Default 1 (Face-Lock mode); set to 0 for Standard full-detail mode"
                  ],
                  [
                    "FACE_STRENGTH",
                    "Default 0.78 (facial redraw strength; lower preserves identity more)"
                  ],
                  [
                    "RES",
                    "Default auto (2k on ≥60GB VRAM, 1080p on 40GB VRAM)"
                  ]
                ]
              },
              "content": "# -*- coding: utf-8 -*-\n\"\"\"\nOpen-H3 Regenerate 2K —— Colab A100 一键「草稿视频 → 2560x1440 精修」脚本\n================================================================================\n把一段已经生成好的低分视频（H3 草稿、LTX/Wan 片段都行），用 NVIDIA 开源的\nOpen-H3-Regenerate-2K 在原尺寸上重绘细节：3 步 Euler、CFG 1、latent 放大不重编码，\n输出 768P / 1080P / 2K / 4K，草稿的原声原封不动接回去。\n\n用法（Colab）：\n  1. 只上传本文件到 /content（工作流已内置，不用再传 json；传了也会用你传的那份）\n  2. 上传要精修的视频，命名 /content/draft.mp4（没找到会弹窗让你选）\n  3. 运行本单元格 → 它装好节点、下好模型、起 ComfyUI、开隧道，然后把地址打出来\n  4. 你在 ComfyUI 界面里把工作流拖进去，LoadVideo 选 draft.mp4，点 Run\n  5. 想要全自动提交（不开界面）：AUTO_RUN=1 再跑一次\n\n启动方式照你三合一那套快速启动来：\n  · 显存 < 60 GB 自动加 --async-offload 2 --reserve-vram 2.0\n  · 装了 comfy-kitchen 才加 --use-ck-attention --fast fp16_accumulation\n  · CF_TUNNEL_TOKEN 存在就走固定隧道，没有则开临时隧道并解析地址\n  · 工作流会自动放进 ComfyUI 侧栏（Workflows → OpenH3_2K精修）\n\n可调参数（改下面 CONFIG，或用环境变量覆盖）：\n  SIZE=768p|576p       草稿统一尺寸（H3 草稿用 768p，别家模型用 576p）\n  RES=2k|1080p|4k      输出分辨率（默认 auto：≥60GB 显存选 2k，否则 1080p）\n  STEPS=3|2            3 步最稳，2 步快约 30% 但毛发/苔藓会软\n  MAX_FRAMES=121       单次帧数上限（121 ≈ 5 秒；最长 360 ≈ 15 秒）\n  START_SIGMA=0.0      0 用官方 0.909；想更贴近草稿、少飘脸就填 0.8\n  PROMPT=...           画面描述（精修主要靠草稿，提示词别写和画面冲突的内容）\n\n注意：普通版与保脸版只下载各自需要的组件，已有编码器、VAE 和放大模型会复用。\n      保脸版使用 r384 refiner-only LoRA（约 5.87 GB），不下载普通版才使用的合并 LoRA、\n      Sharp、ref2va 曲线来源和 Fast VAE。FACE_STRENGTH 默认 0.60，越高重绘越多。\n      A100 40G 建议 RES=1080p；模型与视频放本地盘，预留足够空间。\n\"\"\"\n\nfrom __future__ import annotations\n\nimport json\nimport os\nimport re\nimport shutil\nimport socket\nimport subprocess\nimport sys\nimport time\nimport urllib.error\nimport urllib.parse\nimport urllib.request\nimport uuid\nfrom pathlib import Path\n\n# ============================== 配置 ==============================\nBASE = Path(\"/content\") if Path(\"/content\").exists() else Path.cwd()\nCOMFY = BASE / \"ComfyUI\"\nPORT = int(os.getenv(\"OPENH3_PORT\", \"8189\"))  # 精修独立端口，避开原 ComfyUI / Pika 的 8188\nPUBLIC_URL = os.getenv(\"PUBLIC_URL\", \"\")   # 你固定隧道的域名\n# 1 = 保脸版（人脸只重绘一半，口播/特写首选）；0 = 大细节版（全图 0.909 重绘，脸会变）\nFACE_MASK = os.getenv(\"FACE_MASK\", \"1\").strip() == \"1\"\nFACE_STRENGTH = float(os.getenv(\"FACE_STRENGTH\", \"0.78\"))  # 脸部重绘量；越高细节越多，身份保护越弱\nif not 0.01 <= FACE_STRENGTH <= 1.0:\n    raise ValueError(\"FACE_STRENGTH 必须在 0.01~1.0 之间\")\nWORKFLOW_JSON = BASE / (\"OpenH3_2K精修_保脸版_工作流.json\" if FACE_MASK else \"OpenH3_2K精修_工作流.json\")\nHF_CACHE = BASE / \".hf_openh3\"\n\nAUTO_RUN = os.getenv(\"AUTO_RUN\", \"0\").strip() == \"1\"    # 默认 0：脚本只备环境，工作流你自己在界面里跑\nVIDEO_PATH = os.getenv(\"VIDEO_PATH\", str(BASE / \"draft.mp4\")).strip()\nSIZE = os.getenv(\"SIZE\", \"768p\").strip()\nRES = os.getenv(\"RES\", \"auto\").strip()      # auto = 按显存自动选 2k / 1080p\nSTEPS = int(os.getenv(\"STEPS\", \"3\"))\nMAX_FRAMES = int(os.getenv(\"MAX_FRAMES\", \"121\"))\nSTART_SIGMA = float(os.getenv(\"START_SIGMA\", \"0.0\"))\nPROMPT = os.getenv(\n    \"PROMPT\",\n    \"same content and motion as the draft video, photorealistic, natural skin texture, fine detail, sharp focus\",\n).strip()\nOUT_PATH = BASE / \"OPENH3_2K_OUT.mp4\"\n\n# 实验档：ref2va_pruned_int8 那 19.5 GB 只为读一张 32 KB 的 adaln 表，\n# 设成 1 就改用 fl2va 自带的表（省 19.5 GB，但如果 LoRA 报“缺少 1025x8 曲线基”就改回 0）\nUSE_FL2VA_CURVE = os.getenv(\"USE_FL2VA_CURVE\", \"0\").strip() == \"1\"\n\n# 接管本脚本端口上的旧 ComfyUI：\n#   0（默认）= 不接管，不停止其他实例；auto = 旧实例空闲时接管\n#   1 = 强制接管   0 = 永不接管（直接报错）\nTAKEOVER = os.getenv(\"TAKEOVER\", \"0\").strip().lower()\n\n# 设 1 就禁用“复用已有等价模型”，9 个文件全按本脚本清单重新下\nNO_REUSE = os.getenv(\"NO_REUSE\", \"0\").strip() == \"1\"\n\n# 与你现有三合一环境同一个 ComfyUI 提交号，节点集合不会漂\nCOMFY_REPO = \"https://github.com/Comfy-Org/ComfyUI.git\"\nCOMFY_REV = \"b1a247c9cf9dbfda4b2c0a0c1d50950667eeaa0c\"\n\nNODES = [\n    (\"https://github.com/rdh9616/ComfyUI-Open-H3-Regenerate.git\", \"ComfyUI-Open-H3-Regenerate\"),\n    (\"https://github.com/LBH-123-AI/Comfyui_Minimax_h3_latent_Upscaler.git\", \"Comfyui_Minimax_h3_latent_Upscaler\"),\n    (\"https://github.com/BennyDaBall930/ComfyUI-Open-H3-FaceRegion.git\", \"ComfyUI-Open-H3-FaceRegion\"),\n]\n\n# (repo, 仓库内路径, ComfyUI 下的目标子目录)\nWEIGHTS = [\n    (\"Efficient-Large-Model/Open-H3-Regenerate-2K\",\n     \"lora/open_h3_regenerate_2k_lora.safetensors\", \"loras\"),\n    (\"Efficient-Large-Model/Open-H3-Regenerate-2K\",\n     \"lora/sharp_curve_branches.safetensors\", \"loras\"),\n    (\"Efficient-Large-Model/Open-H3-Regenerate-2K\",\n     \"vae_fast/fast_h3_vae_noncausal_24l.safetensors\", \"vae\"),\n    (\"Efficient-Large-Model/Open-H3-Regenerate-2K\",\n     \"latent_upsampler/minimax_h3_latent_upscaler_3d_conv_v1_bf16.safetensors\", \"latent_upscale_models\"),\n    (\"Comfy-Org/MiniMax-H3\",\n     \"diffusion_models/minimax_h3_fl2va_pruned_int8_convrot.safetensors\", \"diffusion_models\"),\n    (\"Comfy-Org/MiniMax-H3\",\n     \"diffusion_models/minimax_h3_ref2va_pruned_int8_convrot.safetensors\", \"diffusion_models\"),\n    (\"Comfy-Org/MiniMax-H3\",\n     \"text_encoders/qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors\", \"text_encoders\"),\n    (\"Comfy-Org/MiniMax-H3\",\n     \"vae/minimax_h3_video_vae_fp16.safetensors\", \"vae\"),\n    (\"Comfy-Org/MiniMax-H3\",\n     \"vae/minimax_h3_audio_vae_fp32.safetensors\", \"vae\"),\n]\n\n# 同一模型的等价副本（不同量化/不同存放路径）。\n# 逻辑：列表里**只要有一个存在就用它**，并把工作流里所有等价名统一改成它。\n# 这样无论你是复用三合一的 int8，还是全新下载的 nvfp4/fp16/bf16，工作流都不会红。\nMODEL_GROUPS = [\n    (\"text_encoders\", [\n        \"qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors\",\n        \"qwen3vl_32b_minimax_h3_int8_convrot.safetensors\",\n    ]),\n    (\"vae\", [\n        \"minimax_h3_video_vae_fp16.safetensors\",\n        \"minimax_h3_video_vae_int8_convrot.safetensors\",\n    ]),\n    (\"latent_upscale_models\", [\n        \"minimax_h3_latent_upscaler_3d_conv_v1_bf16.safetensors\",\n        \"minimax_h3_latent_upscaler_3d_conv_v1/minimax_h3_latent_upscaler_3d_conv_v1_fp16.safetensors\",\n    ]),\n]\n\n\ndef group_existing(subdir: str, names: list) -> str:\n    for name in names:\n        if (COMFY / \"models\" / subdir / name).exists():\n            return name\n    return \"\"\n\n\ndef model_swaps() -> dict:\n    \"\"\"把工作流里所有等价的旧名字映射到磁盘上真实存在的那个。\"\"\"\n    swaps = {}\n    for subdir, names in MODEL_GROUPS:\n        live = group_existing(subdir, names)\n        if not live:\n            continue\n        for name in names:\n            if name != live:\n                swaps[name] = live\n    return swaps\n\n\n# ============================== 小工具 ==============================\ndef log(msg: str = \"\") -> None:\n    print(msg, flush=True)\n\n\ndef step(title: str) -> None:\n    log(\"\\n\" + \"=\" * 78)\n    log(title)\n    log(\"=\" * 78)\n\n\ndef sh(cmd, cwd=None, check=True):\n    log(f\"$ {' '.join(cmd) if isinstance(cmd, list) else cmd}\")\n    return subprocess.run(cmd, cwd=cwd, check=check)\n\n\ndef get_secret(name: str) -> str:\n    v = os.getenv(name, \"\").strip()\n    if v:\n        return v\n    try:\n        from google.colab import userdata  # type: ignore\n        return (userdata.get(name) or \"\").strip()\n    except Exception:\n        return \"\"\n\n\ndef human_gb(num_bytes: float) -> str:\n    return f\"{num_bytes / 1024 ** 3:.1f} GB\"\n\n\n# 工作流内置副本：万一 json 没传上去 / 被改名，脚本自己写一份出来\nWORKFLOW_FALLBACK = r\"\"\"{\n  \"last_node_id\": 22,\n  \"last_link_id\": 28,\n  \"nodes\": [\n    {\n      \"id\": 1,\n      \"type\": \"LoadVideo\",\n      \"pos\": [\n        40,\n        120\n      ],\n      \"size\": [\n        320,\n        340\n      ],\n      \"flags\": {},\n      \"order\": 0,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"VIDEO\",\n          \"type\": \"VIDEO\",\n          \"links\": [\n            1\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"LoadVideo\"\n      },\n      \"widgets_values\": [\n        \"draft.mp4\"\n      ],\n      \"_meta\": {\n        \"title\": \"① 上传的草稿视频（放在 ComfyUI/input/draft.mp4）\"\n      },\n      \"title\": \"① 上传草稿视频\"\n    },\n    {\n      \"id\": 2,\n      \"type\": \"GetVideoComponents\",\n      \"pos\": [\n        400,\n        120\n      ],\n      \"size\": [\n        260,\n        130\n      ],\n      \"flags\": {},\n      \"order\": 1,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"video\",\n          \"type\": \"VIDEO\",\n          \"link\": 1\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"images\",\n          \"type\": \"IMAGE\",\n          \"links\": [\n            2\n          ],\n          \"slot_index\": 0\n        },\n        {\n          \"name\": \"audio\",\n          \"type\": \"AUDIO\",\n          \"links\": [\n            3,\n            4\n          ],\n          \"slot_index\": 1\n        },\n        {\n          \"name\": \"fps\",\n          \"type\": \"FLOAT\",\n          \"links\": [\n            5\n          ],\n          \"slot_index\": 2\n        },\n        {\n          \"name\": \"bit_depth\",\n          \"type\": \"COMBO\",\n          \"links\": null,\n          \"slot_index\": 3\n        },\n        {\n          \"name\": \"color_space\",\n          \"type\": \"COMBO\",\n          \"links\": null,\n          \"slot_index\": 4\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"GetVideoComponents\"\n      },\n      \"title\": \"② 拆出视频帧、原声和帧率\"\n    },\n    {\n      \"id\": 3,\n      \"type\": \"OpenH3RegenPrepareDraft\",\n      \"pos\": [\n        700,\n        120\n      ],\n      \"size\": [\n        320,\n        130\n      ],\n      \"flags\": {},\n      \"order\": 4,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"images\",\n          \"type\": \"IMAGE\",\n          \"link\": 2\n        },\n        {\n          \"name\": \"source_fps\",\n          \"type\": \"FLOAT\",\n          \"link\": 5,\n          \"widget\": {\n            \"name\": \"source_fps\"\n          }\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"images\",\n          \"type\": \"IMAGE\",\n          \"links\": [\n            6\n          ],\n          \"slot_index\": 0\n        },\n        {\n          \"name\": \"frame_count\",\n          \"type\": \"INT\",\n          \"links\": [\n            7,\n            8\n          ],\n          \"slot_index\": 1\n        },\n        {\n          \"name\": \"width\",\n          \"type\": \"INT\",\n          \"links\": null,\n          \"slot_index\": 2\n        },\n        {\n          \"name\": \"height\",\n          \"type\": \"INT\",\n          \"links\": null,\n          \"slot_index\": 3\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegenPrepareDraft\"\n      },\n      \"widgets_values\": [\n        \"768p (1344x768)\",\n        121,\n        24.0\n      ],\n      \"_meta\": {\n        \"title\": \"② 统一到 24fps / 1344x768 / 121 帧（5 秒）\"\n      },\n      \"title\": \"③ 草稿预处理 · 24fps / 最多121帧\"\n    },\n    {\n      \"id\": 4,\n      \"type\": \"VAELoader\",\n      \"pos\": [\n        700,\n        320\n      ],\n      \"size\": [\n        320,\n        60\n      ],\n      \"flags\": {},\n      \"order\": 2,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"VAE\",\n          \"type\": \"VAE\",\n          \"links\": [\n            9,\n            10\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"VAELoader\"\n      },\n      \"widgets_values\": [\n        \"minimax_h3_video_vae_fp16.safetensors\"\n      ],\n      \"_meta\": {\n        \"title\": \"视频 VAE\"\n      }\n    },\n    {\n      \"id\": 5,\n      \"type\": \"VAEEncode\",\n      \"pos\": [\n        1060,\n        120\n      ],\n      \"size\": [\n        220,\n        60\n      ],\n      \"flags\": {},\n      \"order\": 5,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"pixels\",\n          \"type\": \"IMAGE\",\n          \"link\": 6\n        },\n        {\n          \"name\": \"vae\",\n          \"type\": \"VAE\",\n          \"link\": 9\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"LATENT\",\n          \"type\": \"LATENT\",\n          \"links\": [\n            11\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"VAEEncode\"\n      },\n      \"_meta\": {\n        \"title\": \"③ 草稿编码成 H3 潜变量\"\n      },\n      \"title\": \"④ 编码草稿视频\"\n    },\n    {\n      \"id\": 6,\n      \"type\": \"UNETLoader\",\n      \"pos\": [\n        40,\n        520\n      ],\n      \"size\": [\n        380,\n        80\n      ],\n      \"flags\": {},\n      \"order\": 3,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"MODEL\",\n          \"type\": \"MODEL\",\n          \"links\": [\n            12\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"UNETLoader\"\n      },\n      \"widgets_values\": [\n        \"minimax_h3_fl2va_pruned_int8_convrot.safetensors\",\n        \"default\"\n      ],\n      \"_meta\": {\n        \"title\": \"H3 FL2VA 底模（参考实现用的 pruned int8）\"\n      }\n    },\n    {\n      \"id\": 7,\n      \"type\": \"OpenH3RegenLora\",\n      \"pos\": [\n        460,\n        520\n      ],\n      \"size\": [\n        420,\n        180\n      ],\n      \"flags\": {},\n      \"order\": 6,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"model\",\n          \"type\": \"MODEL\",\n          \"link\": 12\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"model\",\n          \"type\": \"MODEL\",\n          \"links\": [\n            13\n          ],\n          \"slot_index\": 0\n        },\n        {\n          \"name\": \"report\",\n          \"type\": \"STRING\",\n          \"links\": null,\n          \"slot_index\": 1\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegenLora\"\n      },\n      \"widgets_values\": [\n        \"open_h3_regenerate_2k_lora.safetensors\",\n        \"sharp_curve_branches.safetensors\",\n        \"minimax_h3_ref2va_pruned_int8_convrot.safetensors\",\n        1.0,\n        1.0,\n        \"bf16\"\n      ],\n      \"_meta\": {\n        \"title\": \"④ 合体 LoRA（Refiner + LightX2V Turbo + LMS Sharp）+ 50 条曲线分支\"\n      },\n      \"title\": \"⑥ Open-H3 2K精修 LoRA + Sharp曲线\"\n    },\n    {\n      \"id\": 8,\n      \"type\": \"CLIPLoader\",\n      \"pos\": [\n        40,\n        720\n      ],\n      \"size\": [\n        380,\n        100\n      ],\n      \"flags\": {},\n      \"order\": 7,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"CLIP\",\n          \"type\": \"CLIP\",\n          \"links\": [\n            14\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"CLIPLoader\"\n      },\n      \"widgets_values\": [\n        \"qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors\",\n        \"minimax\",\n        \"default\"\n      ],\n      \"_meta\": {\n        \"title\": \"Qwen3-VL 32B 文本编码器\"\n      }\n    },\n    {\n      \"id\": 9,\n      \"type\": \"CLIPTextEncode\",\n      \"pos\": [\n        460,\n        740\n      ],\n      \"size\": [\n        420,\n        140\n      ],\n      \"flags\": {},\n      \"order\": 8,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"clip\",\n          \"type\": \"CLIP\",\n          \"link\": 14\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"CONDITIONING\",\n          \"type\": \"CONDITIONING\",\n          \"links\": [\n            15\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"CLIPTextEncode\"\n      },\n      \"widgets_values\": [\n        \"same content and motion as the draft video, photorealistic, natural skin texture, fine detail, sharp focus\"\n      ],\n      \"_meta\": {\n        \"title\": \"⑤ 提示词（写画面内容；精修主要靠草稿本身）\"\n      },\n      \"title\": \"画面描述 · 与草稿内容保持一致\"\n    },\n    {\n      \"id\": 10,\n      \"type\": \"VAELoader\",\n      \"pos\": [\n        700,\n        420\n      ],\n      \"size\": [\n        320,\n        60\n      ],\n      \"flags\": {},\n      \"order\": 9,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"VAE\",\n          \"type\": \"VAE\",\n          \"links\": [\n            16\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"VAELoader\"\n      },\n      \"widgets_values\": [\n        \"minimax_h3_audio_vae_fp32.safetensors\"\n      ],\n      \"_meta\": {\n        \"title\": \"音频 VAE（精修时音频流被锁住）\"\n      }\n    },\n    {\n      \"id\": 11,\n      \"type\": \"OpenH3RegenUpscale\",\n      \"pos\": [\n        1060,\n        240\n      ],\n      \"size\": [\n        360,\n        140\n      ],\n      \"flags\": {},\n      \"order\": 10,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"latent\",\n          \"type\": \"LATENT\",\n          \"link\": 11\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"latent\",\n          \"type\": \"LATENT\",\n          \"links\": [\n            17\n          ],\n          \"slot_index\": 0\n        },\n        {\n          \"name\": \"width\",\n          \"type\": \"INT\",\n          \"links\": null,\n          \"slot_index\": 1\n        },\n        {\n          \"name\": \"height\",\n          \"type\": \"INT\",\n          \"links\": null,\n          \"slot_index\": 2\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegenUpscale\"\n      },\n      \"widgets_values\": [\n        \"minimax_h3_latent_upscaler_3d_conv_v1_bf16.safetensors\",\n        \"2k (2560x1440)\",\n        \"bf16\",\n        true\n      ],\n      \"_meta\": {\n        \"title\": \"⑥ 潜变量 3D 放大到 2K 网格（不解码重编码）\"\n      },\n      \"title\": \"⑤ 潜变量放大 · 2K\"\n    },\n    {\n      \"id\": 12,\n      \"type\": \"OpenH3RegenRefineLatent\",\n      \"pos\": [\n        1460,\n        240\n      ],\n      \"size\": [\n        340,\n        120\n      ],\n      \"flags\": {},\n      \"order\": 11,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"latent\",\n          \"type\": \"LATENT\",\n          \"link\": 17\n        },\n        {\n          \"name\": \"audio_vae\",\n          \"type\": \"VAE\",\n          \"link\": 16\n        },\n        {\n          \"name\": \"audio\",\n          \"type\": \"AUDIO\",\n          \"link\": null\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"latent\",\n          \"type\": \"LATENT\",\n          \"links\": [\n            18\n          ],\n          \"slot_index\": 0\n        },\n        {\n          \"name\": \"frame_count\",\n          \"type\": \"INT\",\n          \"links\": null,\n          \"slot_index\": 1\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegenRefineLatent\"\n      },\n      \"widgets_values\": [\n        \"silence (reference)\"\n      ],\n      \"_meta\": {\n        \"title\": \"⑦ 组 AV 潜变量：视频重绘，音频保持干净（静音轨道）\"\n      },\n      \"title\": \"准备精修潜变量 · 原声另路保留\"\n    },\n    {\n      \"id\": 13,\n      \"type\": \"OpenH3RegenSigmas\",\n      \"pos\": [\n        1460,\n        400\n      ],\n      \"size\": [\n        340,\n        100\n      ],\n      \"flags\": {},\n      \"order\": 12,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"SIGMAS\",\n          \"type\": \"SIGMAS\",\n          \"links\": [\n            19\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegenSigmas\"\n      },\n      \"widgets_values\": [\n        3,\n        0.0\n      ],\n      \"_meta\": {\n        \"title\": \"官方 3 步网格 0.909 → 0.857 → 0.667 → 0\"\n      },\n      \"title\": \"⑦ 精修采样 · 官方3步\"\n    },\n    {\n      \"id\": 14,\n      \"type\": \"RandomNoise\",\n      \"pos\": [\n        1460,\n        540\n      ],\n      \"size\": [\n        340,\n        80\n      ],\n      \"flags\": {},\n      \"order\": 13,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"NOISE\",\n          \"type\": \"NOISE\",\n          \"links\": [\n            20\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"RandomNoise\"\n      },\n      \"widgets_values\": [\n        1766580932,\n        \"fixed\"\n      ],\n      \"_meta\": {\n        \"title\": \"固定种子\"\n      }\n    },\n    {\n      \"id\": 15,\n      \"type\": \"KSamplerSelect\",\n      \"pos\": [\n        1460,\n        660\n      ],\n      \"size\": [\n        340,\n        60\n      ],\n      \"flags\": {},\n      \"order\": 14,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"SAMPLER\",\n          \"type\": \"SAMPLER\",\n          \"links\": [\n            21\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"KSamplerSelect\"\n      },\n      \"widgets_values\": [\n        \"euler\"\n      ],\n      \"_meta\": {\n        \"title\": \"Euler\"\n      }\n    },\n    {\n      \"id\": 16,\n      \"type\": \"BasicGuider\",\n      \"pos\": [\n        900,\n        620\n      ],\n      \"size\": [\n        300,\n        80\n      ],\n      \"flags\": {},\n      \"order\": 15,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"model\",\n          \"type\": \"MODEL\",\n          \"link\": 13\n        },\n        {\n          \"name\": \"conditioning\",\n          \"type\": \"CONDITIONING\",\n          \"link\": 15\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"GUIDER\",\n          \"type\": \"GUIDER\",\n          \"links\": [\n            22\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"BasicGuider\"\n      },\n      \"_meta\": {\n        \"title\": \"CFG 1：每步只跑一次\"\n      }\n    },\n    {\n      \"id\": 17,\n      \"type\": \"SamplerCustomAdvanced\",\n      \"pos\": [\n        1820,\n        400\n      ],\n      \"size\": [\n        300,\n        180\n      ],\n      \"flags\": {},\n      \"order\": 16,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"noise\",\n          \"type\": \"NOISE\",\n          \"link\": 20\n        },\n        {\n          \"name\": \"guider\",\n          \"type\": \"GUIDER\",\n          \"link\": 22\n        },\n        {\n          \"name\": \"sampler\",\n          \"type\": \"SAMPLER\",\n          \"link\": 21\n        },\n        {\n          \"name\": \"sigmas\",\n          \"type\": \"SIGMAS\",\n          \"link\": 19\n        },\n        {\n          \"name\": \"latent_image\",\n          \"type\": \"LATENT\",\n          \"link\": 18\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"output\",\n          \"type\": \"LATENT\",\n          \"links\": [\n            23\n          ],\n          \"slot_index\": 0\n        },\n        {\n          \"name\": \"denoised_output\",\n          \"type\": \"LATENT\",\n          \"links\": null,\n          \"slot_index\": 1\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"SamplerCustomAdvanced\"\n      },\n      \"_meta\": {\n        \"title\": \"⑧ 3 步重绘（2K 全分辨率）\"\n      },\n      \"title\": \"⑧ 执行精修采样\"\n    },\n    {\n      \"id\": 18,\n      \"type\": \"OpenH3SaveRefinedLatent\",\n      \"pos\": [\n        2160,\n        400\n      ],\n      \"size\": [\n        330,\n        120\n      ],\n      \"flags\": {},\n      \"order\": 17,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"samples\",\n          \"type\": \"LATENT\",\n          \"link\": 23\n        },\n        {\n          \"name\": \"frame_count\",\n          \"type\": \"INT\",\n          \"link\": 7,\n          \"widget\": {\n            \"name\": \"frame_count\"\n          }\n        },\n        {\n          \"name\": \"audio\",\n          \"type\": \"AUDIO\",\n          \"link\": 3\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"samples\",\n          \"type\": \"LATENT\",\n          \"links\": [\n            24\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3SaveRefinedLatent\"\n      },\n      \"widgets_values\": [\n        121,\n        \"open_h3_regen\"\n      ],\n      \"_meta\": {\n        \"title\": \"⑨ 先存潜变量（解码失败不用重跑精修）\"\n      },\n      \"title\": \"保存精修潜变量和原声\"\n    },\n    {\n      \"id\": 19,\n      \"type\": \"OpenH3RegenFastVAEDecode\",\n      \"pos\": [\n        2520,\n        400\n      ],\n      \"size\": [\n        330,\n        100\n      ],\n      \"flags\": {},\n      \"order\": 18,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"samples\",\n          \"type\": \"LATENT\",\n          \"link\": 24\n        },\n        {\n          \"name\": \"vae\",\n          \"type\": \"VAE\",\n          \"link\": 10\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"IMAGE\",\n          \"type\": \"IMAGE\",\n          \"links\": [\n            25\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegenFastVAEDecode\"\n      },\n      \"widgets_values\": [\n        \"fast_h3_vae_noncausal_24l.safetensors\",\n        false\n      ],\n      \"_meta\": {\n        \"title\": \"⑩ 快速 VAE 解码（2K 约 24 秒，不是 50 秒）\"\n      },\n      \"title\": \"⑨ Fast H3 VAE 解码\"\n    },\n    {\n      \"id\": 20,\n      \"type\": \"OpenH3RegenFinish\",\n      \"pos\": [\n        2520,\n        540\n      ],\n      \"size\": [\n        340,\n        120\n      ],\n      \"flags\": {},\n      \"order\": 19,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"images\",\n          \"type\": \"IMAGE\",\n          \"link\": 25\n        },\n        {\n          \"name\": \"frame_count\",\n          \"type\": \"INT\",\n          \"link\": 8,\n          \"widget\": {\n            \"name\": \"frame_count\"\n          }\n        },\n        {\n          \"name\": \"audio\",\n          \"type\": \"AUDIO\",\n          \"link\": 4\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"images\",\n          \"type\": \"IMAGE\",\n          \"links\": [\n            26\n          ],\n          \"slot_index\": 0\n        },\n        {\n          \"name\": \"audio\",\n          \"type\": \"AUDIO\",\n          \"links\": [\n            27\n          ],\n          \"slot_index\": 1\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegenFinish\"\n      },\n      \"widgets_values\": [\n        121,\n        \"auto (1088 -> 1080, 2176 -> 2160)\"\n      ],\n      \"_meta\": {\n        \"title\": \"⑪ 裁掉填充帧 + 接回草稿原声\"\n      },\n      \"title\": \"⑩ 裁齐帧数并接回草稿原声\"\n    },\n    {\n      \"id\": 21,\n      \"type\": \"CreateVideo\",\n      \"pos\": [\n        2900,\n        540\n      ],\n      \"size\": [\n        300,\n        100\n      ],\n      \"flags\": {},\n      \"order\": 20,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"images\",\n          \"type\": \"IMAGE\",\n          \"link\": 26\n        },\n        {\n          \"name\": \"audio\",\n          \"type\": \"AUDIO\",\n          \"link\": 27\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"VIDEO\",\n          \"type\": \"VIDEO\",\n          \"links\": [\n            28\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"CreateVideo\"\n      },\n      \"widgets_values\": [\n        24.0,\n        8,\n        \"sRGB\",\n        \"none\"\n      ],\n      \"_meta\": {\n        \"title\": \"合成 24fps 视频\"\n      },\n      \"title\": \"⑪ 合成视频 · 24fps / 原声\"\n    },\n    {\n      \"id\": 22,\n      \"type\": \"SaveVideo\",\n      \"pos\": [\n        3240,\n        540\n      ],\n      \"size\": [\n        320,\n        100\n      ],\n      \"flags\": {},\n      \"order\": 21,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"video\",\n          \"type\": \"VIDEO\",\n          \"link\": 28\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"video\",\n          \"type\": \"VIDEO\",\n          \"links\": null,\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"SaveVideo\"\n      },\n      \"widgets_values\": [\n        \"video/open_h3_2k\",\n        \"auto\",\n        \"auto\"\n      ],\n      \"_meta\": {\n        \"title\": \"⑫ 输出 → ComfyUI/output/video/open_h3_2k_*.mp4\"\n      },\n      \"title\": \"⑫ 保存精修视频\"\n    }\n  ],\n  \"links\": [\n    [\n      1,\n      1,\n      0,\n      2,\n      0,\n      \"VIDEO\"\n    ],\n    [\n      2,\n      2,\n      0,\n      3,\n      0,\n      \"IMAGE\"\n    ],\n    [\n      3,\n      2,\n      1,\n      18,\n      2,\n      \"AUDIO\"\n    ],\n    [\n      4,\n      2,\n      1,\n      20,\n      2,\n      \"AUDIO\"\n    ],\n    [\n      5,\n      2,\n      2,\n      3,\n      1,\n      \"FLOAT\"\n    ],\n    [\n      6,\n      3,\n      0,\n      5,\n      0,\n      \"IMAGE\"\n    ],\n    [\n      7,\n      3,\n      1,\n      18,\n      1,\n      \"INT\"\n    ],\n    [\n      8,\n      3,\n      1,\n      20,\n      1,\n      \"INT\"\n    ],\n    [\n      9,\n      4,\n      0,\n      5,\n      1,\n      \"VAE\"\n    ],\n    [\n      10,\n      4,\n      0,\n      19,\n      1,\n      \"VAE\"\n    ],\n    [\n      11,\n      5,\n      0,\n      11,\n      0,\n      \"LATENT\"\n    ],\n    [\n      12,\n      6,\n      0,\n      7,\n      0,\n      \"MODEL\"\n    ],\n    [\n      13,\n      7,\n      0,\n      16,\n      0,\n      \"MODEL\"\n    ],\n    [\n      14,\n      8,\n      0,\n      9,\n      0,\n      \"CLIP\"\n    ],\n    [\n      15,\n      9,\n      0,\n      16,\n      1,\n      \"CONDITIONING\"\n    ],\n    [\n      16,\n      10,\n      0,\n      12,\n      1,\n      \"VAE\"\n    ],\n    [\n      17,\n      11,\n      0,\n      12,\n      0,\n      \"LATENT\"\n    ],\n    [\n      18,\n      12,\n      0,\n      17,\n      4,\n      \"LATENT\"\n    ],\n    [\n      19,\n      13,\n      0,\n      17,\n      3,\n      \"SIGMAS\"\n    ],\n    [\n      20,\n      14,\n      0,\n      17,\n      0,\n      \"NOISE\"\n    ],\n    [\n      21,\n      15,\n      0,\n      17,\n      2,\n      \"SAMPLER\"\n    ],\n    [\n      22,\n      16,\n      0,\n      17,\n      1,\n      \"GUIDER\"\n    ],\n    [\n      23,\n      17,\n      0,\n      18,\n      0,\n      \"LATENT\"\n    ],\n    [\n      24,\n      18,\n      0,\n      19,\n      0,\n      \"LATENT\"\n    ],\n    [\n      25,\n      19,\n      0,\n      20,\n      0,\n      \"IMAGE\"\n    ],\n    [\n      26,\n      20,\n      0,\n      21,\n      0,\n      \"IMAGE\"\n    ],\n    [\n      27,\n      20,\n      1,\n      21,\n      1,\n      \"AUDIO\"\n    ],\n    [\n      28,\n      21,\n      0,\n      22,\n      0,\n      \"VIDEO\"\n    ]\n  ],\n  \"groups\": [],\n  \"config\": {},\n  \"extra\": {\n    \"ds\": {\n      \"scale\": 0.6,\n      \"offset\": [\n        40,\n        40\n      ]\n    },\n    \"note\": \"Open-H3 Regenerate 2K — 草稿视频 → 2560x1440 三步重绘（接回原声）\"\n  },\n  \"version\": 0.4\n}\n\"\"\"\n\n# 保脸版工作流（方案A：满血 OpenH3RegenLora [Refiner+Turbo+Sharp 50曲线] + 五官核心保护 0.78 + 原声锁口型 + FastVAE）\nWORKFLOW_FALLBACK_FACE = r\"\"\"{\n  \"last_node_id\": 24,\n  \"last_link_id\": 34,\n  \"nodes\": [\n    {\n      \"id\": 1,\n      \"type\": \"LoadVideo\",\n      \"pos\": [\n        40,\n        120\n      ],\n      \"size\": [\n        320,\n        340\n      ],\n      \"flags\": {},\n      \"order\": 1,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"VIDEO\",\n          \"type\": \"VIDEO\",\n          \"links\": [\n            1\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        \"draft.mp4\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"LoadVideo\"\n      },\n      \"_meta\": {\n        \"title\": \"① 草稿视频（点 choose file to upload）\"\n      },\n      \"title\": \"① 上传草稿视频\"\n    },\n    {\n      \"id\": 2,\n      \"type\": \"GetVideoComponents\",\n      \"pos\": [\n        400,\n        120\n      ],\n      \"size\": [\n        260,\n        130\n      ],\n      \"flags\": {},\n      \"order\": 2,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"video\",\n          \"type\": \"VIDEO\",\n          \"link\": 1\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"images\",\n          \"type\": \"IMAGE\",\n          \"links\": [\n            2\n          ],\n          \"slot_index\": 0\n        },\n        {\n          \"name\": \"audio\",\n          \"type\": \"AUDIO\",\n          \"links\": [\n            3,\n            4,\n            34\n          ],\n          \"slot_index\": 1\n        },\n        {\n          \"name\": \"fps\",\n          \"type\": \"FLOAT\",\n          \"links\": [\n            5\n          ],\n          \"slot_index\": 2\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"GetVideoComponents\"\n      },\n      \"_meta\": {\n        \"title\": \"② 拆成帧 / 原声 / 帧率\"\n      },\n      \"title\": \"② 拆出视频帧、原声和帧率\"\n    },\n    {\n      \"id\": 3,\n      \"type\": \"OpenH3RegenPrepareDraft\",\n      \"pos\": [\n        700,\n        120\n      ],\n      \"size\": [\n        320,\n        130\n      ],\n      \"flags\": {},\n      \"order\": 3,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"images\",\n          \"type\": \"IMAGE\",\n          \"link\": 2\n        },\n        {\n          \"name\": \"source_fps\",\n          \"type\": \"FLOAT\",\n          \"link\": 5,\n          \"widget\": {\n            \"name\": \"source_fps\"\n          }\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"images\",\n          \"type\": \"IMAGE\",\n          \"links\": [\n            6,\n            7\n          ],\n          \"slot_index\": 0\n        },\n        {\n          \"name\": \"frame_count\",\n          \"type\": \"INT\",\n          \"links\": [\n            8,\n            9\n          ],\n          \"slot_index\": 1\n        }\n      ],\n      \"widgets_values\": [\n        \"768p (1344x768)\",\n        121,\n        24.0\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegenPrepareDraft\"\n      },\n      \"_meta\": {\n        \"title\": \"③ 24fps / 768p / 121 帧\"\n      },\n      \"title\": \"③ 草稿预处理 · 24fps / 最多121帧\"\n    },\n    {\n      \"id\": 4,\n      \"type\": \"VAELoader\",\n      \"pos\": [\n        700,\n        320\n      ],\n      \"size\": [\n        330,\n        60\n      ],\n      \"flags\": {},\n      \"order\": 4,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"VAE\",\n          \"type\": \"VAE\",\n          \"links\": [\n            10,\n            11\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        \"minimax_h3_video_vae_fp16.safetensors\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"VAELoader\"\n      },\n      \"_meta\": {\n        \"title\": \"视频 VAE\"\n      }\n    },\n    {\n      \"id\": 5,\n      \"type\": \"VAEEncode\",\n      \"pos\": [\n        1060,\n        120\n      ],\n      \"size\": [\n        220,\n        60\n      ],\n      \"flags\": {},\n      \"order\": 5,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"pixels\",\n          \"type\": \"IMAGE\",\n          \"link\": 6\n        },\n        {\n          \"name\": \"vae\",\n          \"type\": \"VAE\",\n          \"link\": 10\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"LATENT\",\n          \"type\": \"LATENT\",\n          \"links\": [\n            12\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"VAEEncode\"\n      },\n      \"_meta\": {\n        \"title\": \"④ 编码成潜变量\"\n      },\n      \"title\": \"④ 编码草稿视频\"\n    },\n    {\n      \"id\": 6,\n      \"type\": \"OpenH3RegenUpscale\",\n      \"pos\": [\n        1060,\n        240\n      ],\n      \"size\": [\n        360,\n        140\n      ],\n      \"flags\": {},\n      \"order\": 6,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"latent\",\n          \"type\": \"LATENT\",\n          \"link\": 12\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"latent\",\n          \"type\": \"LATENT\",\n          \"links\": [\n            13,\n            14\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        \"minimax_h3_latent_upscaler_3d_conv_v1_bf16.safetensors\",\n        \"2k (2560x1440)\",\n        \"bf16\",\n        false\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegenUpscale\"\n      },\n      \"_meta\": {\n        \"title\": \"⑤ 潜变量放大到 1080p（40G 别选 2k）\"\n      },\n      \"title\": \"⑤ 潜变量放大 · 2K\"\n    },\n    {\n      \"id\": 7,\n      \"type\": \"VAELoader\",\n      \"pos\": [\n        1060,\n        440\n      ],\n      \"size\": [\n        330,\n        60\n      ],\n      \"flags\": {},\n      \"order\": 7,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"VAE\",\n          \"type\": \"VAE\",\n          \"links\": [\n            15\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        \"minimax_h3_audio_vae_fp32.safetensors\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"VAELoader\"\n      },\n      \"_meta\": {\n        \"title\": \"音频 VAE\"\n      }\n    },\n    {\n      \"id\": 8,\n      \"type\": \"OpenH3FaceRegionMap\",\n      \"pos\": [\n        1460,\n        120\n      ],\n      \"size\": [\n        380,\n        220\n      ],\n      \"flags\": {},\n      \"order\": 8,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"images\",\n          \"type\": \"IMAGE\",\n          \"link\": 7\n        },\n        {\n          \"name\": \"latent\",\n          \"type\": \"LATENT\",\n          \"link\": 13\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"mask_file\",\n          \"type\": \"STRING\",\n          \"links\": [\n            16,\n            17\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        0.78,\n        0.12,\n        1.0,\n        0.6,\n        \"\",\n        \"open_h3_region\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3FaceRegionMap\"\n      },\n      \"_meta\": {\n        \"title\": \"⑥ 自动人脸保护蒙版 (face_strength=0.78 · 仅护五官核心/头发满血2K)\"\n      },\n      \"title\": \"⑥ 自动人脸保护蒙版 (face_strength=0.78 · 仅护五官核心/头发满血2K)\"\n    },\n    {\n      \"id\": 9,\n      \"type\": \"OpenH3RegenRefineLatent\",\n      \"pos\": [\n        1460,\n        400\n      ],\n      \"size\": [\n        350,\n        120\n      ],\n      \"flags\": {},\n      \"order\": 9,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"latent\",\n          \"type\": \"LATENT\",\n          \"link\": 14\n        },\n        {\n          \"name\": \"audio_vae\",\n          \"type\": \"VAE\",\n          \"link\": 15\n        },\n        {\n          \"name\": \"audio\",\n          \"type\": \"AUDIO\",\n          \"link\": 3\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"latent\",\n          \"type\": \"LATENT\",\n          \"links\": [\n            18\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        \"draft audio (AUDIO input)\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegenRefineLatent\"\n      },\n      \"_meta\": {\n        \"title\": \"⑦ 组 AV latent：喂草稿原声，嘴巴继续说话\"\n      },\n      \"title\": \"准备精修潜变量 · 原声另路保留\"\n    },\n    {\n      \"id\": 10,\n      \"type\": \"UNETLoader\",\n      \"pos\": [\n        40,\n        520\n      ],\n      \"size\": [\n        380,\n        80\n      ],\n      \"flags\": {},\n      \"order\": 10,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"MODEL\",\n          \"type\": \"MODEL\",\n          \"links\": [\n            19\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        \"minimax_h3_fl2va_pruned_int8_convrot.safetensors\",\n        \"default\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"UNETLoader\"\n      },\n      \"_meta\": {\n        \"title\": \"H3 FL2VA pruned int8\"\n      }\n    },\n    {\n      \"id\": 11,\n      \"type\": \"OpenH3RegenLora\",\n      \"pos\": [\n        460,\n        520\n      ],\n      \"size\": [\n        420,\n        180\n      ],\n      \"flags\": {},\n      \"order\": 11,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"model\",\n          \"type\": \"MODEL\",\n          \"link\": 19\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"model\",\n          \"type\": \"MODEL\",\n          \"links\": [\n            20\n          ],\n          \"slot_index\": 0\n        },\n        {\n          \"name\": \"report\",\n          \"type\": \"STRING\",\n          \"links\": null,\n          \"slot_index\": 1\n        }\n      ],\n      \"widgets_values\": [\n        \"open_h3_regenerate_2k_lora.safetensors\",\n        \"sharp_curve_branches.safetensors\",\n        \"minimax_h3_ref2va_pruned_int8_convrot.safetensors\",\n        1.0,\n        1.0,\n        \"bf16\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegenLora\"\n      },\n      \"_meta\": {\n        \"title\": \"⑧ 满血 Open-H3 2K精修 LoRA（Refiner + Turbo + Sharp 50曲线）\"\n      },\n      \"title\": \"⑧ 满血 Open-H3 2K精修 LoRA（Refiner + Turbo + Sharp 50曲线）\"\n    },\n    {\n      \"id\": 12,\n      \"type\": \"OpenH3RegionModel\",\n      \"pos\": [\n        920,\n        520\n      ],\n      \"size\": [\n        330,\n        80\n      ],\n      \"flags\": {},\n      \"order\": 12,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"model\",\n          \"type\": \"MODEL\",\n          \"link\": 20\n        },\n        {\n          \"name\": \"mask_file\",\n          \"type\": \"STRING\",\n          \"link\": 17\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"MODEL\",\n          \"type\": \"MODEL\",\n          \"links\": [\n            21\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegionModel\"\n      },\n      \"_meta\": {\n        \"title\": \"⑨ 区域强度：每个 token 按自己的强度走\"\n      }\n    },\n    {\n      \"id\": 13,\n      \"type\": \"CLIPLoader\",\n      \"pos\": [\n        40,\n        720\n      ],\n      \"size\": [\n        380,\n        100\n      ],\n      \"flags\": {},\n      \"order\": 13,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"CLIP\",\n          \"type\": \"CLIP\",\n          \"links\": [\n            22\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        \"qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors\",\n        \"minimax\",\n        \"default\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"CLIPLoader\"\n      },\n      \"_meta\": {\n        \"title\": \"Qwen3-VL 文本编码器\"\n      }\n    },\n    {\n      \"id\": 14,\n      \"type\": \"CLIPTextEncode\",\n      \"pos\": [\n        460,\n        740\n      ],\n      \"size\": [\n        420,\n        140\n      ],\n      \"flags\": {},\n      \"order\": 14,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"clip\",\n          \"type\": \"CLIP\",\n          \"link\": 22\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"CONDITIONING\",\n          \"type\": \"CONDITIONING\",\n          \"links\": [\n            23\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        \"same content and motion as the draft video, photorealistic, natural skin texture, fine detail, sharp focus\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"CLIPTextEncode\"\n      },\n      \"_meta\": {\n        \"title\": \"⑩ 画面描述（已预填，可不动）\"\n      },\n      \"title\": \"画面描述 · 与草稿内容保持一致\"\n    },\n    {\n      \"id\": 15,\n      \"type\": \"BasicGuider\",\n      \"pos\": [\n        920,\n        660\n      ],\n      \"size\": [\n        300,\n        80\n      ],\n      \"flags\": {},\n      \"order\": 15,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"model\",\n          \"type\": \"MODEL\",\n          \"link\": 21\n        },\n        {\n          \"name\": \"conditioning\",\n          \"type\": \"CONDITIONING\",\n          \"link\": 23\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"GUIDER\",\n          \"type\": \"GUIDER\",\n          \"links\": [\n            24\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"BasicGuider\"\n      },\n      \"_meta\": {\n        \"title\": \"CFG 1\"\n      }\n    },\n    {\n      \"id\": 16,\n      \"type\": \"OpenH3RegionNoise\",\n      \"pos\": [\n        1460,\n        560\n      ],\n      \"size\": [\n        350,\n        100\n      ],\n      \"flags\": {},\n      \"order\": 16,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"mask_file\",\n          \"type\": \"STRING\",\n          \"link\": 16\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"NOISE\",\n          \"type\": \"NOISE\",\n          \"links\": [\n            25\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        1766580932,\n        \"fixed\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegionNoise\"\n      },\n      \"_meta\": {\n        \"title\": \"⑪ 区域起始噪声\"\n      }\n    },\n    {\n      \"id\": 17,\n      \"type\": \"KSamplerSelect\",\n      \"pos\": [\n        1460,\n        700\n      ],\n      \"size\": [\n        350,\n        60\n      ],\n      \"flags\": {},\n      \"order\": 17,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"SAMPLER\",\n          \"type\": \"SAMPLER\",\n          \"links\": [\n            26\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        \"euler\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"KSamplerSelect\"\n      },\n      \"_meta\": {\n        \"title\": \"Euler\"\n      }\n    },\n    {\n      \"id\": 18,\n      \"type\": \"OpenH3RegenSigmas\",\n      \"pos\": [\n        1460,\n        800\n      ],\n      \"size\": [\n        350,\n        100\n      ],\n      \"flags\": {},\n      \"order\": 18,\n      \"mode\": 0,\n      \"outputs\": [\n        {\n          \"name\": \"SIGMAS\",\n          \"type\": \"SIGMAS\",\n          \"links\": [\n            27\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        3,\n        0.0\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegenSigmas\"\n      },\n      \"_meta\": {\n        \"title\": \"官方 3 步网格 0.909→0.857→0.667→0\"\n      },\n      \"title\": \"⑦ 精修采样 · 官方3步\"\n    },\n    {\n      \"id\": 19,\n      \"type\": \"SamplerCustomAdvanced\",\n      \"pos\": [\n        1860,\n        520\n      ],\n      \"size\": [\n        300,\n        180\n      ],\n      \"flags\": {},\n      \"order\": 19,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"noise\",\n          \"type\": \"NOISE\",\n          \"link\": 25\n        },\n        {\n          \"name\": \"guider\",\n          \"type\": \"GUIDER\",\n          \"link\": 24\n        },\n        {\n          \"name\": \"sampler\",\n          \"type\": \"SAMPLER\",\n          \"link\": 26\n        },\n        {\n          \"name\": \"sigmas\",\n          \"type\": \"SIGMAS\",\n          \"link\": 27\n        },\n        {\n          \"name\": \"latent_image\",\n          \"type\": \"LATENT\",\n          \"link\": 18\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"output\",\n          \"type\": \"LATENT\",\n          \"links\": [\n            28\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"SamplerCustomAdvanced\"\n      },\n      \"_meta\": {\n        \"title\": \"⑫ 3 步重绘（脸轻、背景重）\"\n      },\n      \"title\": \"⑧ 执行精修采样\"\n    },\n    {\n      \"id\": 20,\n      \"type\": \"OpenH3SaveRefinedLatent\",\n      \"pos\": [\n        2200,\n        520\n      ],\n      \"size\": [\n        330,\n        120\n      ],\n      \"flags\": {},\n      \"order\": 20,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"samples\",\n          \"type\": \"LATENT\",\n          \"link\": 28\n        },\n        {\n          \"name\": \"frame_count\",\n          \"type\": \"INT\",\n          \"link\": 8,\n          \"widget\": {\n            \"name\": \"frame_count\"\n          }\n        },\n        {\n          \"name\": \"audio\",\n          \"type\": \"AUDIO\",\n          \"link\": 4\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"samples\",\n          \"type\": \"LATENT\",\n          \"links\": [\n            29\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        121,\n        \"open_h3_regen\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3SaveRefinedLatent\"\n      },\n      \"_meta\": {\n        \"title\": \"⑬ 先存潜变量\"\n      },\n      \"title\": \"保存精修潜变量和原声\"\n    },\n    {\n      \"id\": 21,\n      \"type\": \"OpenH3RegenFastVAEDecode\",\n      \"pos\": [\n        2520,\n        520\n      ],\n      \"size\": [\n        330,\n        100\n      ],\n      \"flags\": {},\n      \"order\": 21,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"samples\",\n          \"type\": \"LATENT\",\n          \"link\": 29\n        },\n        {\n          \"name\": \"vae\",\n          \"type\": \"VAE\",\n          \"link\": 11\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"IMAGE\",\n          \"type\": \"IMAGE\",\n          \"links\": [\n            30\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        \"fast_h3_vae_noncausal_24l.safetensors\",\n        false\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegenFastVAEDecode\"\n      },\n      \"_meta\": {\n        \"title\": \"⑭ 快速 VAE 解码（与普通2K版一致）\"\n      },\n      \"title\": \"⑭ Fast H3 VAE 快速解码\"\n    },\n    {\n      \"id\": 22,\n      \"type\": \"OpenH3RegenFinish\",\n      \"pos\": [\n        2840,\n        660\n      ],\n      \"size\": [\n        340,\n        120\n      ],\n      \"flags\": {},\n      \"order\": 22,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"images\",\n          \"type\": \"IMAGE\",\n          \"link\": 30\n        },\n        {\n          \"name\": \"frame_count\",\n          \"type\": \"INT\",\n          \"link\": 9,\n          \"widget\": {\n            \"name\": \"frame_count\"\n          }\n        },\n        {\n          \"name\": \"audio\",\n          \"type\": \"AUDIO\",\n          \"link\": 34\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"images\",\n          \"type\": \"IMAGE\",\n          \"links\": [\n            31\n          ],\n          \"slot_index\": 0\n        },\n        {\n          \"name\": \"audio\",\n          \"type\": \"AUDIO\",\n          \"links\": [\n            32\n          ],\n          \"slot_index\": 1\n        }\n      ],\n      \"widgets_values\": [\n        121,\n        \"auto (1088 -> 1080, 2176 -> 2160)\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"OpenH3RegenFinish\"\n      },\n      \"_meta\": {\n        \"title\": \"⑮ 裁掉补帧 + 接回原声\"\n      },\n      \"title\": \"⑩ 裁齐帧数并接回草稿原声\"\n    },\n    {\n      \"id\": 23,\n      \"type\": \"CreateVideo\",\n      \"pos\": [\n        3220,\n        660\n      ],\n      \"size\": [\n        300,\n        100\n      ],\n      \"flags\": {},\n      \"order\": 23,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"images\",\n          \"type\": \"IMAGE\",\n          \"link\": 31\n        },\n        {\n          \"name\": \"audio\",\n          \"type\": \"AUDIO\",\n          \"link\": 32\n        }\n      ],\n      \"outputs\": [\n        {\n          \"name\": \"VIDEO\",\n          \"type\": \"VIDEO\",\n          \"links\": [\n            33\n          ],\n          \"slot_index\": 0\n        }\n      ],\n      \"widgets_values\": [\n        24.0,\n        8,\n        \"sRGB\",\n        \"none\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"CreateVideo\"\n      },\n      \"_meta\": {\n        \"title\": \"合成 24fps\"\n      },\n      \"title\": \"⑪ 合成视频 · 24fps / 原声\"\n    },\n    {\n      \"id\": 24,\n      \"type\": \"SaveVideo\",\n      \"pos\": [\n        3560,\n        660\n      ],\n      \"size\": [\n        320,\n        100\n      ],\n      \"flags\": {},\n      \"order\": 24,\n      \"mode\": 0,\n      \"inputs\": [\n        {\n          \"name\": \"video\",\n          \"type\": \"VIDEO\",\n          \"link\": 33\n        }\n      ],\n      \"widgets_values\": [\n        \"video/open_h3_face_2k\",\n        \"auto\",\n        \"auto\"\n      ],\n      \"properties\": {\n        \"Node name for S&R\": \"SaveVideo\"\n      },\n      \"_meta\": {\n        \"title\": \"⑯ 输出 mp4\"\n      },\n      \"title\": \"⑫ 保存精修视频\",\n      \"outputs\": [\n        {\n          \"name\": \"video\",\n          \"type\": \"VIDEO\",\n          \"links\": null,\n          \"slot_index\": 0\n        }\n      ]\n    }\n  ],\n  \"links\": [\n    [\n      1,\n      1,\n      0,\n      2,\n      0,\n      \"VIDEO\"\n    ],\n    [\n      2,\n      2,\n      0,\n      3,\n      0,\n      \"IMAGE\"\n    ],\n    [\n      3,\n      2,\n      1,\n      9,\n      2,\n      \"AUDIO\"\n    ],\n    [\n      4,\n      2,\n      1,\n      20,\n      2,\n      \"AUDIO\"\n    ],\n    [\n      5,\n      2,\n      2,\n      3,\n      1,\n      \"FLOAT\"\n    ],\n    [\n      6,\n      3,\n      0,\n      5,\n      0,\n      \"IMAGE\"\n    ],\n    [\n      7,\n      3,\n      0,\n      8,\n      0,\n      \"IMAGE\"\n    ],\n    [\n      8,\n      3,\n      1,\n      20,\n      1,\n      \"INT\"\n    ],\n    [\n      9,\n      3,\n      1,\n      22,\n      1,\n      \"INT\"\n    ],\n    [\n      10,\n      4,\n      0,\n      5,\n      1,\n      \"VAE\"\n    ],\n    [\n      11,\n      4,\n      0,\n      21,\n      1,\n      \"VAE\"\n    ],\n    [\n      12,\n      5,\n      0,\n      6,\n      0,\n      \"LATENT\"\n    ],\n    [\n      13,\n      6,\n      0,\n      8,\n      1,\n      \"LATENT\"\n    ],\n    [\n      14,\n      6,\n      0,\n      9,\n      0,\n      \"LATENT\"\n    ],\n    [\n      15,\n      7,\n      0,\n      9,\n      1,\n      \"VAE\"\n    ],\n    [\n      16,\n      8,\n      0,\n      16,\n      0,\n      \"STRING\"\n    ],\n    [\n      17,\n      8,\n      0,\n      12,\n      1,\n      \"STRING\"\n    ],\n    [\n      18,\n      9,\n      0,\n      19,\n      4,\n      \"LATENT\"\n    ],\n    [\n      19,\n      10,\n      0,\n      11,\n      0,\n      \"MODEL\"\n    ],\n    [\n      20,\n      11,\n      0,\n      12,\n      0,\n      \"MODEL\"\n    ],\n    [\n      21,\n      12,\n      0,\n      15,\n      0,\n      \"MODEL\"\n    ],\n    [\n      22,\n      13,\n      0,\n      14,\n      0,\n      \"CLIP\"\n    ],\n    [\n      23,\n      14,\n      0,\n      15,\n      1,\n      \"CONDITIONING\"\n    ],\n    [\n      24,\n      15,\n      0,\n      19,\n      1,\n      \"GUIDER\"\n    ],\n    [\n      25,\n      16,\n      0,\n      19,\n      0,\n      \"NOISE\"\n    ],\n    [\n      26,\n      17,\n      0,\n      19,\n      2,\n      \"SAMPLER\"\n    ],\n    [\n      27,\n      18,\n      0,\n      19,\n      3,\n      \"SIGMAS\"\n    ],\n    [\n      28,\n      19,\n      0,\n      20,\n      0,\n      \"LATENT\"\n    ],\n    [\n      29,\n      20,\n      0,\n      21,\n      0,\n      \"LATENT\"\n    ],\n    [\n      30,\n      21,\n      0,\n      22,\n      0,\n      \"IMAGE\"\n    ],\n    [\n      31,\n      22,\n      0,\n      23,\n      0,\n      \"IMAGE\"\n    ],\n    [\n      32,\n      22,\n      1,\n      23,\n      1,\n      \"AUDIO\"\n    ],\n    [\n      33,\n      23,\n      0,\n      24,\n      0,\n      \"VIDEO\"\n    ],\n    [\n      34,\n      2,\n      1,\n      22,\n      2,\n      \"AUDIO\"\n    ]\n  ],\n  \"groups\": [],\n  \"config\": {},\n  \"extra\": {\n    \"ds\": {\n      \"scale\": 0.55,\n      \"offset\": [\n        40,\n        40\n      ]\n    },\n    \"note\": \"Open-H3 保脸真2K版（方案A）：满血 OpenH3RegenLora (Refiner+Turbo+Sharp 50曲线) + 自动人脸区域保护(0.58) + 原声锁口型 + FastVAE\"\n  },\n  \"version\": 0.4\n}\n\"\"\"\n\n\n# ============================== 1. ComfyUI ==============================\ndef ensure_comfy() -> None:\n    step(\"[1/7] ComfyUI 本体\")\n    if (COMFY / \"main.py\").exists():\n        log(f\"✅ 复用已存在的 {COMFY}（你之前跑过三合一的话模型会直接用）\")\n        return\n    sh([\"git\", \"clone\", COMFY_REPO, str(COMFY)])\n    sh([\"git\", \"checkout\", COMFY_REV], cwd=COMFY)\n    sh([sys.executable, \"-m\", \"pip\", \"install\", \"-q\", \"-r\", \"requirements.txt\"], cwd=COMFY)\n    log(\"✅ ComfyUI 就绪\")\n\n\ndef patch_custom_nodes() -> None:\n    \"\"\"给 Open-H3 节点打方案A兼容补丁：\n    1) regen_core.invert_table 支持逐 Token 多维时间步去重与分块，使 50 条 Sharp 曲线与人脸区域蒙版共存；\n    2) FaceRegion 蒙版做 0.002 步长量化，避免高斯羽化产生数万个冗余时间步拖慢 AdaLN。\n    \"\"\"\n    regen_core_py = COMFY / \"custom_nodes\" / \"ComfyUI-Open-H3-Regenerate\" / \"regen_core.py\"\n    if regen_core_py.exists():\n        txt = regen_core_py.read_text(encoding=\"utf-8\")\n        if \"torch.unique(flat\" not in txt and \"def invert_table(table, coords):\" in txt:\n            old_fn = (\n                \"def invert_table(table, coords):\\n\"\n                \"    \\\"\\\"\\\"Model time t of each row of `coords`, points on the piecewise-linear curve `table` (as ComfyUI's curve-form\\n\"\n                \"    H3 computes its AdaLN input).  Returns (t, max distance from the curve).\\\"\\\"\\\"\\n\"\n                \"    table = table.to(coords.device, torch.float32)\\n\"\n                \"    coords = coords.to(torch.float32)\\n\"\n                \"    p0, d = table[:-1], table[1:] - table[:-1]                       # segments [S, C]\\n\"\n                \"    rel = coords[:, None, :] - p0[None]                               # [M, S, C]\\n\"\n                \"    s = ((rel * d[None]).sum(-1) / (d * d).sum(-1).clamp(min=1e-20)[None]).clamp(0.0, 1.0)\\n\"\n                \"    dist = (rel - s[..., None] * d[None]).norm(dim=-1)               # [M, S]\\n\"\n                \"    best = dist.argmin(dim=1)\\n\"\n                \"    rows = torch.arange(coords.shape[0], device=coords.device)\\n\"\n                \"    t = (best.to(torch.float32) + s[rows, best]) / (table.shape[0] - 1)\\n\"\n                \"    return t, float(dist[rows, best].max()) if coords.shape[0] else 0.0\"\n            )\n            new_fn = (\n                \"def invert_table(table, coords):\\n\"\n                \"    \\\"\\\"\\\"Model time t of each row of `coords` (supports 2D [M, C] and 3D [B, M, C] with deduplication).\\\"\\\"\\\"\\n\"\n                \"    table = table.to(coords.device, torch.float32)\\n\"\n                \"    orig_shape = coords.shape[:-1]\\n\"\n                \"    flat = coords.to(torch.float32).reshape(-1, coords.shape[-1])\\n\"\n                \"    if flat.shape[0] == 0:\\n\"\n                \"        return torch.empty(orig_shape, device=coords.device, dtype=torch.float32), 0.0\\n\"\n                \"    uniq, inv = torch.unique(flat, dim=0, return_inverse=True)\\n\"\n                \"    p0, d = table[:-1], table[1:] - table[:-1]\\n\"\n                \"    d_norm = (d * d).sum(-1).clamp(min=1e-20)[None]\\n\"\n                \"    t_chunks, max_err = [], 0.0\\n\"\n                \"    for start in range(0, uniq.shape[0], 2048):\\n\"\n                \"        u = uniq[start:start + 2048]\\n\"\n                \"        rel = u[:, None, :] - p0[None]\\n\"\n                \"        s = ((rel * d[None]).sum(-1) / d_norm).clamp(0.0, 1.0)\\n\"\n                \"        dist = (rel - s[..., None] * d[None]).norm(dim=-1)\\n\"\n                \"        best = dist.argmin(dim=1)\\n\"\n                \"        rows = torch.arange(u.shape[0], device=coords.device)\\n\"\n                \"        t_u = (best.to(torch.float32) + s[rows, best]) / (table.shape[0] - 1)\\n\"\n                \"        err_u = float(dist[rows, best].max())\\n\"\n                \"        if err_u > max_err:\\n\"\n                \"            max_err = err_u\\n\"\n                \"        t_chunks.append(t_u)\\n\"\n                \"    t = torch.cat(t_chunks, dim=0)[inv].reshape(orig_shape)\\n\"\n                \"    return t, max_err\"\n            )\n            if old_fn in txt:\n                regen_core_py.write_text(txt.replace(old_fn, new_fn), encoding=\"utf-8\")\n                log(\"   🔧 已打补丁：ComfyUI-Open-H3-Regenerate 支持 3D 区域时间步 + Sharp 50曲线\")\n\n    face_init_py = COMFY / \"custom_nodes\" / \"ComfyUI-Open-H3-FaceRegion\" / \"__init__.py\"\n    if face_init_py.exists():\n        ftxt = face_init_py.read_text(encoding=\"utf-8\")\n        old_line = \"m = np.clip(m, 1e-3, 1).astype(np.float32)\"\n        new_line = \"m = (np.round(np.clip(m, 1e-3, 1) * 500.0) / 500.0).astype(np.float32)\"\n        if old_line in ftxt:\n            face_init_py.write_text(ftxt.replace(old_line, new_line), encoding=\"utf-8\")\n            log(\"   🔧 已打补丁：ComfyUI-Open-H3-FaceRegion 羽化掩码量化加速\")\n\n\ndef install_nodes() -> None:\n    step(\"[2/7] 精修节点 + 3D 潜变量放大节点\")\n    (COMFY / \"custom_nodes\").mkdir(parents=True, exist_ok=True)\n    for url, name in NODES:\n        dst = COMFY / \"custom_nodes\" / name\n        if dst.exists():\n            log(f\"✅ {name} 已存在\")\n        else:\n            sh([\"git\", \"clone\", \"--depth\", \"1\", url, str(dst)])\n        req = dst / \"requirements.txt\"\n        if req.exists():\n            sh([sys.executable, \"-m\", \"pip\", \"install\", \"-q\", \"-r\", str(req)], check=False)\n    patch_custom_nodes()\n    log(\"✅ 节点就绪\")\n\n\ndef download_weights(face_mode: bool | None = None) -> dict:\n    \"\"\"下载缺失权重；返回 {默认文件名: 实际复用文件名} 供工作流替换。\"\"\"\n    step(\"[3/7] 准备本次工作流所需权重，已有同款会跳过\")\n    from huggingface_hub import hf_hub_download  # 延迟导入，失败信息更清楚\n\n    total_new = 0\n    swaps: dict[str, str] = {}\n    for repo, remote, subdir in WEIGHTS:\n        name = Path(remote).name\n        target_dir = COMFY / \"models\" / subdir\n        target_dir.mkdir(parents=True, exist_ok=True)\n        dest = target_dir / name\n\n        if dest.exists() and dest.stat().st_size > 1024 * 1024:\n            log(f\"   ✅ 已有 {name} ({human_gb(dest.stat().st_size)})\")\n            continue\n\n        if name == \"minimax_h3_ref2va_pruned_int8_convrot.safetensors\" and USE_FL2VA_CURVE:\n            swaps[name] = \"minimax_h3_fl2va_pruned_int8_convrot.safetensors\"\n            log(\"   ⏭️  USE_FL2VA_CURVE=1：跳过 19.5 GB 的 ref2va，改用 fl2va 自带的曲线表\")\n            continue\n\n        if not NO_REUSE:\n            live = \"\"\n            for subdir_g, names in MODEL_GROUPS:\n                if name in names:\n                    live = group_existing(subdir_g, names)\n                    break\n            if live and live != name:\n                swaps[name] = live\n                log(f\"   ♻️  复用已存在的 {live}（省下 {name}）\")\n                continue\n\n        log(f\"   ⬇️  {repo} :: {remote}\")\n        cached = Path(hf_hub_download(repo_id=repo, filename=remote, cache_dir=str(HF_CACHE)))\n        # HF 缓存里的快照是符号链接（指向 blobs/），直接 move 会把链接搬走导致文件“消失”，\n        # 必须先 resolve 到真实文件再 move。\n        real = cached.resolve()\n        if not real.is_file():\n            raise RuntimeError(f\"下载后找不到真实文件：{cached} → {real}\")\n        if dest.is_symlink() or dest.exists():\n            dest.unlink()\n        shutil.move(str(real), str(dest))\n        if not dest.is_file():\n            raise RuntimeError(f\"移动后文件不在预期位置：{dest}\")\n        total_new += dest.stat().st_size\n        log(f\"   ✅ {name} ({human_gb(dest.stat().st_size)})\")\n\n    log(f\"✅ 本次新下载 {human_gb(total_new)}；复用 {len(swaps)} 个\" if swaps\n        else f\"✅ 本次新下载 {human_gb(total_new)}\")\n    shutil.rmtree(HF_CACHE, ignore_errors=True)   # 缓存里的空壳/悬空链接清掉，别占盘\n    return swaps\n\n\n# ============================== 2. 启动服务 ==============================\ndef queue_busy() -> tuple:\n    \"\"\"旧 ComfyUI 队列里有没有正在跑/排队的任务，决定能不能安全接管。\"\"\"\n    try:\n        with urllib.request.urlopen(f\"http://127.0.0.1:{PORT}/queue\", timeout=5) as r:\n            data = json.loads(r.read().decode(\"utf-8\"))\n        running = data.get(\"queue_running\") or []\n        pending = data.get(\"queue_pending\") or []\n        return bool(running or pending), f\"运行 {len(running)} / 等待 {len(pending)}\"\n    except Exception:\n        return False, \"队列查询失败\"\n\n\ndef wait_port_free(timeout: float = 60) -> bool:\n    deadline = time.time() + timeout\n    while time.time() < deadline:\n        try:\n            with socket.create_connection((\"127.0.0.1\", PORT), timeout=1):\n                time.sleep(1)\n        except OSError:\n            return True\n    return False\n\n\ndef comfy_flags(vram_gb: float) -> list:\n    \"\"\"照着你三合一那套快速启动参数来：小显存自动省显存，有 comfy-kitchen 才开 CK attention。\"\"\"\n    flags = [\"--listen\", \"0.0.0.0\", \"--port\", str(PORT),\n             \"--disable-auto-launch\", \"--enable-cors-header\", \"*\"]\n    if 0 < vram_gb < 60:\n        flags += [\"--async-offload\", \"2\", \"--reserve-vram\", \"2.0\"]\n    try:\n        import importlib.util\n        if importlib.util.find_spec(\"comfy_kitchen\") is not None:\n            flags += [\"--use-ck-attention\", \"--fast\", \"fp16_accumulation\"]\n    except Exception:\n        pass\n    return flags\n\n\ndef required_nodes() -> list:\n    need = [\"OpenH3RegenLora\", \"MinimaxH3LatentUpscaler3D\"]\n    if FACE_MASK:\n        need += [\"OpenH3FaceRegionMap\", \"OpenH3RegionNoise\", \"OpenH3RegionModel\"]\n    return need\n\n\ndef missing_nodes() -> list:\n    gone = []\n    for cls in required_nodes():\n        try:\n            object_info(cls)\n        except Exception:\n            gone.append(cls)\n    return gone\n\n\ndef start_comfy(vram_gb: float = 0.0):\n    step(\"[5/7] 启动 ComfyUI\")\n    try:\n        with urllib.request.urlopen(f\"http://127.0.0.1:{PORT}/system_stats\", timeout=2):\n            log(f\"ℹ️ 已经有 ComfyUI 在 {PORT} 上跑\")\n            gone = missing_nodes()\n            if not gone:\n                log(\"✅ 需要的节点都已加载，直接复用这个实例\")\n                return None, BASE / \"openh3_comfyui.log\"\n            log(f\"⚠️ 它缺这些节点：{', '.join(gone)}（节点是启动时加载的，必须重启一次）\")\n            busy, detail = queue_busy()\n            if TAKEOVER == \"0\" or (busy and TAKEOVER != \"1\"):\n                raise SystemExit(\n                    f\"❌ {PORT} 上的 ComfyUI 缺少节点：{', '.join(gone)}\"\n                    f\"{'，而且队列里还有任务（' + detail + '）' if busy else ''}。\\n\"\n                    \"👉 先中断三合一那个单元格（否则它的看门狗每 30 秒会把 main.py 拉起来），\"\n                    \"再重跑本脚本：它会自动接管并加载新节点。\\n\"\n                    \"   （队列空闲时 TAKEOVER=auto 会自己接管，无需改任何东西）\")\n            log(f\"🔧 自动接管 {PORT}：停掉旧 ComfyUI，加载新节点\")\n            subprocess.run([\"pkill\", \"-f\", \"main.py\"], check=False)\n            time.sleep(3)\n            if not wait_port_free(60):\n                raise SystemExit(\n                    f\"❌ {PORT} 还被占着，八成是三合一的看门狗又把它拉起来了。\\n\"\n                    \"👉 先中断三合一那个单元格，再重跑本脚本。\")\n            log(\"✅ 旧 ComfyUI 已停，开始启动本脚本的实例\")\n    except SystemExit:\n        raise\n    except Exception:\n        pass\n\n    os.environ.setdefault(\"PYTORCH_CUDA_ALLOC_CONF\", \"expandable_segments:True\")\n    os.environ.setdefault(\"CUDA_MODULE_LOADING\", \"LAZY\")\n\n    log_path = BASE / \"openh3_comfyui.log\"\n    log_fp = open(log_path, \"w\", encoding=\"utf-8\")\n    cmd = [sys.executable, \"main.py\"] + comfy_flags(vram_gb)\n    log(f\"$ cd {COMFY} && {' '.join(cmd)}\")\n    proc = subprocess.Popen(cmd, cwd=str(COMFY), stdout=log_fp, stderr=subprocess.STDOUT,\n                            start_new_session=True)\n\n    deadline = time.time() + 300\n    while time.time() < deadline:\n        if proc.poll() is not None:\n            tail = log_path.read_text(encoding=\"utf-8\", errors=\"replace\")[-4000:]\n            raise RuntimeError(f\"ComfyUI 启动失败，日志尾部：\\n{tail}\")\n        try:\n            with urllib.request.urlopen(f\"http://127.0.0.1:{PORT}/system_stats\", timeout=3):\n                log(f\"✅ ComfyUI 在线：http://127.0.0.1:{PORT}   （日志 {log_path}）\")\n                return proc, log_path\n        except Exception:\n            time.sleep(3)\n    raise RuntimeError(f\"ComfyUI 300 秒内没起来，看日志：{log_path}\")\n\n\ndef probe_url(url: str, timeout: float = 15) -> bool:\n    try:\n        req = urllib.request.Request(\n            f\"{url.rstrip('/')}/system_stats\",\n            headers={\"User-Agent\": \"Mozilla/5.0 (compatible; openh3-check/1.0)\"})\n        with urllib.request.urlopen(req, timeout=timeout) as r:\n            return r.status == 200\n    except Exception:\n        return False\n\n\ndef ensure_cloudflared() -> str:\n    binary = shutil.which(\"cloudflared\") or str(BASE / \"cloudflared\")\n    if not os.path.exists(binary):\n        log(\"   ⬇️ 下载 cloudflared…\")\n        urllib.request.urlretrieve(\n            \"https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64\",\n            binary)\n        os.chmod(binary, 0o755)\n    return binary\n\n\ndef launch_tunnel() -> str:\n    \"\"\"8188 可用原固定隧道；独立精修端口使用自己的临时隧道。\"\"\"\n    if PORT != 8188:\n        log(f\"ℹ️ 精修运行在 {PORT}；旧固定域名仍可能指向 8188，请使用本次打印的新地址。\")\n        try:\n            from google.colab import output\n            colab_url = str(output.eval_js(f\"google.colab.kernel.proxyPort({PORT})\", timeout_sec=5))\n            if colab_url.startswith(\"https://\"):\n                log(f\"🌐 Colab 内置精修入口：{colab_url}\")\n        except Exception:\n            pass\n    if PORT == 8188 and shutil.which(\"pgrep\") and subprocess.run(\n            [\"pgrep\", \"-f\", \"cloudflared\"], capture_output=True).returncode == 0:\n        log(\"ℹ️ cloudflared 已在跑，复用现有隧道\")\n        if PUBLIC_URL and probe_url(PUBLIC_URL):\n            log(f\"✅ 隧道已连通：{PUBLIC_URL}\")\n            return PUBLIC_URL\n        log(\"⚠️ 隧道进程在，但域名暂时连不通（刚接管时可能还没回源，10 秒后再试一次）\")\n        time.sleep(10)\n        if PUBLIC_URL and probe_url(PUBLIC_URL):\n            log(f\"✅ 隧道已连通：{PUBLIC_URL}\")\n            return PUBLIC_URL\n        return \"\"\n\n    binary = ensure_cloudflared()\n    log_path = BASE / \"openh3_cloudflared.log\"\n    log_fp = open(log_path, \"w\", encoding=\"utf-8\")\n    token = get_secret(\"CF_TUNNEL_TOKEN\")\n\n    if token and PORT == 8188:\n        subprocess.Popen([binary, \"tunnel\", \"--protocol\", \"http2\", \"run\", \"--token\", token],\n                         stdout=log_fp, stderr=subprocess.STDOUT, start_new_session=True)\n        time.sleep(8)\n        log(f\"✅ 固定隧道已启动：{PUBLIC_URL}\")\n        return PUBLIC_URL\n\n    subprocess.Popen([binary, \"tunnel\", \"--protocol\", \"http2\", \"--url\",\n                      f\"http://127.0.0.1:{PORT}\"],\n                     stdout=log_fp, stderr=subprocess.STDOUT, start_new_session=True)\n    log(f\"ℹ️ 精修端口 {PORT} 使用独立临时隧道（地址每次变），请打开下面的新地址…\")\n    for _ in range(20):\n        time.sleep(3)\n        text = log_path.read_text(encoding=\"utf-8\", errors=\"replace\")\n        for line in text.splitlines():\n            match = re.search(r\"https://[a-z0-9-]+\\.trycloudflare\\.com\", line)\n            if match:\n                url = match.group(0)\n                log(f\"✅ 临时隧道：{url}\")\n                return url\n    log(f\"⚠️ 隧道地址没解析出来，看日志：{log_path}\")\n    return \"\"\n\n\n# ============================== 3. 视频预处理 ==============================\ndef ffprobe(path: Path, entries: str) -> str:\n    out = subprocess.run(\n        [\"ffprobe\", \"-v\", \"error\", \"-show_entries\", entries, \"-of\", \"default=nw=1:nk=1\", str(path)],\n        capture_output=True, text=True)\n    return out.stdout.strip()\n\n\ndef prepare_video() -> str | None:\n    \"\"\"可选步骤：/content 里有视频就顺手放进 ComfyUI/input；\n    没有也不拦着——你可以直接在 ComfyUI 界面里用 LoadVideo 上传。\"\"\"\n    step(\"[4/7] 准备草稿视频（可选）\")\n    src = Path(VIDEO_PATH)\n    if not src.exists():\n        candidates = sorted(BASE.glob(\"*.mp4\")) + sorted(BASE.glob(\"*.mov\")) + sorted(BASE.glob(\"*.webm\"))\n        if candidates:\n            src = candidates[0]\n            log(f\"ℹ️ 没找到 {VIDEO_PATH}，改用 {src}\")\n        elif AUTO_RUN:\n            try:\n                from google.colab import files  # type: ignore\n                log(\"AUTO_RUN=1 需要输入视频，请上传…\")\n                uploaded = files.upload()\n                src = BASE / next(iter(uploaded))\n            except Exception as exc:\n                raise SystemExit(f\"找不到输入视频，也没法弹窗上传：{exc}\")\n        else:\n            log(\"ℹ️ /content 里没有视频——跳过。稍后直接在 ComfyUI 的 LoadVideo 节点里上传即可。\")\n            return None\n\n    dur = float(ffprobe(src, \"format=duration\") or 0)\n    max_sec = MAX_FRAMES / 24.0\n    log(f\"输入：{src.name}  时长 {dur:.2f}s\")\n\n    has_audio = \"audio\" in ffprobe(src, \"stream=codec_type\")\n    need_trim = dur > max_sec + 0.15\n    work = BASE / \"_openh3_input.mp4\"\n    (COMFY / \"input\").mkdir(parents=True, exist_ok=True)\n    final = COMFY / \"input\" / \"draft.mp4\"\n\n    if not need_trim and has_audio and src.suffix.lower() == \".mp4\":\n        shutil.copy2(src, final)          # 原样喂进去，避免二次压缩\n        log(\"✅ 无需裁剪/补音轨，原文件直通（不重新编码）\")\n        return \"draft.mp4\"\n\n    if need_trim:\n        log(f\"⚠️ 超过单次上限 {max_sec:.1f}s，本次只精修前 {max_sec:.1f}s\"\n            f\"（要整段就把 MAX_FRAMES 调大、或先自己切段）\")\n\n    cmd = [\"ffmpeg\", \"-y\", \"-loglevel\", \"error\", \"-i\", str(src)]\n    if not has_audio:\n        log(\"ℹ️ 输入没有音轨，补一条静音轨（下游要接回原声）\")\n        cmd += [\"-f\", \"lavfi\", \"-i\", \"anullsrc=r=48000:cl=stereo\", \"-shortest\"]\n    if need_trim:\n        cmd += [\"-t\", f\"{max_sec:.3f}\"]\n    cmd += [\"-c:v\", \"libx264\", \"-crf\", \"16\", \"-preset\", \"veryfast\", \"-pix_fmt\", \"yuv420p\"]\n    cmd += [\"-c:a\", \"aac\", \"-b:a\", \"192k\", str(work)]\n    sh(cmd)\n    shutil.copy2(work, final)\n    log(\"✅ 已放入 ComfyUI/input/draft.mp4\")\n    return \"draft.mp4\"\n\n\n# ============================== 4. 提交工作流 ==============================\ndef resolve_workflow_path() -> Path:\n    \"\"\"三路兜底：指定路径 → 目录里被改名的副本 → 脚本内置副本。\"\"\"\n    if WORKFLOW_JSON.exists():\n        return WORKFLOW_JSON\n    for cand in sorted(BASE.glob(\"*.json\")):\n        try:\n            data = json.loads(cand.read_text(encoding=\"utf-8\"))\n        except Exception:\n            continue\n        if isinstance(data, dict) and data.get(\"nodes\") and any(\n                str(n.get(\"type\", \"\")).startswith(\"OpenH3\") for n in data[\"nodes\"]):\n            log(f\"ℹ️ 自动找到工作流：{cand.name}\")\n            return cand\n    WORKFLOW_JSON.write_text(WORKFLOW_FALLBACK_FACE if FACE_MASK else WORKFLOW_FALLBACK,\n                             encoding=\"utf-8\")\n    log(f\"ℹ️ 没找到工作流文件，已用脚本内置副本生成：{WORKFLOW_JSON.name}\"\n        f\"（{'保脸版' if FACE_MASK else '大细节版'}）\")\n    return WORKFLOW_JSON\n\n\ndef upgrade_face_workflow(data: dict) -> bool:\n    \"\"\"将旧版 r16/r384 + LTXVSeparateAVLatent 保脸工作流自动升级为方案A（满血 OpenH3RegenLora + FastVAEDecode）。\"\"\"\n    nodes = data.get(\"nodes\") or []\n    if not any(n.get(\"type\") == \"OpenH3FaceRegionMap\" for n in nodes):\n        return False\n    has_old_lora = any(n.get(\"type\") == \"LoraLoaderModelOnly\" for n in nodes)\n    has_old_sep = any(n.get(\"type\") == \"LTXVSeparateAVLatent\" for n in nodes)\n    if not (has_old_lora or has_old_sep):\n        return False\n    fresh = json.loads(WORKFLOW_FALLBACK_FACE)\n    data.clear()\n    data.update(fresh)\n    return True\n\n\ndef load_workflow() -> dict:\n    path = resolve_workflow_path()\n    data = json.loads(path.read_text(encoding=\"utf-8\"))\n    if upgrade_face_workflow(data):\n        path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding=\"utf-8\")\n        log(\"📝 保脸图已升级为方案A：满血 OpenH3RegenLora (Refiner+Turbo+Sharp 50曲线) + 人脸区域保护(0.58) + FastVAE 解码。\")\n    return data\n\n\ndef object_info(cls: str) -> dict:\n    url = f\"http://127.0.0.1:{PORT}/object_info/{urllib.parse.quote(cls)}\"\n    with urllib.request.urlopen(url, timeout=20) as r:\n        data = json.loads(r.read().decode(\"utf-8\"))\n    if cls not in data:\n        raise RuntimeError(f\"ComfyUI 里没有节点类型 {cls}（自定义节点没加载成功？看启动日志）\")\n    return data[cls]\n\n\ndef ui_to_api(wf: dict) -> dict:\n    \"\"\"把界面格式工作流转成 /prompt 需要的 API 格式；输入名以服务端 /object_info 为准。\"\"\"\n    links = {l[0]: l for l in wf[\"links\"]}\n    api: dict[str, dict] = {}\n    for node in wf[\"nodes\"]:\n        cls = node[\"type\"]\n        info = object_info(cls)\n        inputs: dict = {}\n        for slot in node.get(\"inputs\") or []:\n            if slot.get(\"link\") is not None:\n                src = links[slot[\"link\"]]\n                inputs[slot[\"name\"]] = [str(src[1]), src[2]]\n\n        widget_order = []\n        for section in (\"required\", \"optional\"):\n            for name, spec_ in (info[\"input\"].get(section) or {}).items():\n                kind = spec_[0]\n                cfg = spec_[1] if len(spec_) > 1 and isinstance(spec_[1], dict) else {}\n                # 下拉框的三种序列化都要认：老版 [[...], {...}]、\n                # 新版 [\"COMBO\", {...}]、动态下拉 [\"COMFY_DYNAMICCOMBO_V3\", {...}]。\n                if (isinstance(kind, list) or \"COMBO\" in str(kind)\n                        or kind in (\"INT\", \"FLOAT\", \"STRING\", \"BOOLEAN\")):\n                    widget_order.append((name, cfg))\n\n        values = list(node.get(\"widgets_values\") or [])\n        vi = 0\n        for name, cfg in widget_order:\n            if vi >= len(values):\n                break\n            # 关键：即使这个输入已经被连线占用，界面里它的 widget 值仍然占着一个位置，\n            # 必须照样消耗掉，否则后面的值会整体错位（例如 121 被塞进 crop 下拉框）。\n            value = values[vi]\n            vi += 1\n            if name not in inputs:\n                inputs[name] = value\n            if cfg.get(\"control_after_generate\") and vi < len(values):\n                vi += 1                        # 跳过 UI 的 fixed/randomize\n\n        known = set((info[\"input\"].get(\"required\") or {})) | set((info[\"input\"].get(\"optional\") or {}))\n        dropped = [k for k in inputs if k not in known]\n        for k in dropped:\n            inputs.pop(k)\n        if dropped:\n            log(f\"   ⚠️ {cls} 丢弃了服务端不认识的参数：{dropped}\")\n\n        # 新版 SaveVideo 的 format/codec 是嵌套 DynamicCombo，而非两个字符串。\n        format_spec = (info[\"input\"].get(\"required\") or {}).get(\"format\", [None])\n        if cls == \"SaveVideo\" and \"DYNAMICCOMBO\" in str(format_spec[0]):\n            fmt = inputs.get(\"format\", \"auto\")\n            if isinstance(fmt, str):\n                codec = inputs.pop(\"codec\", \"auto\")\n                inputs[\"format\"] = {\n                    \"format\": fmt,\n                    \"codec\": {\"codec\": codec} if isinstance(codec, str) else codec,\n                }\n\n        api[str(node[\"id\"])] = {\"class_type\": cls, \"inputs\": inputs}\n    return api\n\n\ndef set_by_old_value(api: dict, node_id: str, old, new) -> bool:\n    \"\"\"按“工作流里的原值”定位参数，避免猜参数名。\"\"\"\n    node = api.get(node_id)\n    if not node:\n        return False\n    for key, value in node[\"inputs\"].items():\n        if isinstance(value, type(old)) and value == old:\n            node[\"inputs\"][key] = new\n            return True\n    return False\n\n\ndef apply_settings(api: dict, video_name: str) -> None:\n    \"\"\"按“值”定位参数（不按节点 id），这样保脸版 / 大细节版两套图都能正确改。\"\"\"\n    size_label = \"768p (1344x768)\" if SIZE.lower().startswith(\"768\") else \"576p (1024x576)\"\n    res_label = {\"2k\": \"2k (2560x1440)\", \"1080p\": \"1080p (1920x1080)\", \"4k\": \"4k (3840x2160)\"}.get(\n        RES.lower(), \"1080p (1920x1080)\")\n    size_labels = {\"768p (1344x768)\", \"576p (1024x576)\"}\n    res_labels = {\"2k (2560x1440)\", \"1080p (1920x1080)\", \"4k (3840x2160)\"}\n\n    for node in api.values():\n        for key, value in list(node[\"inputs\"].items()):\n            if isinstance(value, str):\n                if value == \"draft.mp4\":\n                    node[\"inputs\"][key] = video_name\n                elif value in size_labels:\n                    node[\"inputs\"][key] = size_label\n                elif value in res_labels:\n                    node[\"inputs\"][key] = res_label\n                elif value.startswith(\"same content and motion\"):\n                    node[\"inputs\"][key] = PROMPT\n            elif isinstance(value, int) and not isinstance(value, bool) and value == 121:\n                node[\"inputs\"][key] = MAX_FRAMES\n\n        if node[\"class_type\"] == \"OpenH3RegenSigmas\":\n            for key, value in list(node[\"inputs\"].items()):\n                if isinstance(value, int) and not isinstance(value, bool) and value == 3:\n                    node[\"inputs\"][key] = STEPS\n                elif isinstance(value, float) and START_SIGMA > 0:\n                    node[\"inputs\"][key] = START_SIGMA\n        elif node[\"class_type\"] == \"OpenH3FaceRegionMap\":\n            node[\"inputs\"][\"face_strength\"] = FACE_STRENGTH\n\n    log(f\"   参数：{size_label} → {res_label}｜{STEPS} 步｜{MAX_FRAMES} 帧\"\n        f\"｜start_sigma={START_SIGMA or '官方 0.909'}\")\n\n\ndef _patch_workflow_file(path: Path, swaps: dict) -> None:\n    \"\"\"把实际模型名和当前采样/分辨率设置同步给手动界面的工作流。\"\"\"\n    try:\n        data = json.loads(path.read_text(encoding=\"utf-8\"))\n    except Exception as exc:\n        log(f\"   （工作流改写跳过：{exc}）\")\n        return\n    hits = 0\n    for node in data.get(\"nodes\", []):\n        vals = node.get(\"widgets_values\")\n        if not isinstance(vals, list):\n            continue\n        for i, val in enumerate(vals):\n            if isinstance(val, str) and val in swaps:\n                vals[i] = swaps[val]\n                hits += 1\n        kind = node.get(\"type\")\n        if kind == \"OpenH3RegenPrepareDraft\" and len(vals) >= 2:\n            vals[0] = \"768p (1344x768)\" if SIZE.lower().startswith(\"768\") else \"576p (1024x576)\"\n            vals[1] = MAX_FRAMES\n        elif kind == \"OpenH3RegenUpscale\" and len(vals) >= 2:\n            vals[1] = {\"2k\": \"2k (2560x1440)\", \"1080p\": \"1080p (1920x1080)\",\n                       \"4k\": \"4k (3840x2160)\"}.get(RES.lower(), \"1080p (1920x1080)\")\n        elif kind == \"OpenH3RegenSigmas\" and len(vals) >= 2:\n            vals[0], vals[1] = STEPS, START_SIGMA\n        elif kind in (\"OpenH3SaveRefinedLatent\", \"OpenH3RegenFinish\") and vals:\n            vals[0] = MAX_FRAMES\n        elif kind == \"OpenH3FaceRegionMap\" and vals:\n            vals[0] = FACE_STRENGTH\n    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding=\"utf-8\")\n    if hits:\n        log(f\"   📝 工作流里 {hits} 处模型名已改成实际复用的文件\")\n    log(f\"   📝 手动工作流参数已同步：{RES} / {STEPS} 步 / 最多 {MAX_FRAMES} 帧\")\n\n\ndef patch_workflow_file(swaps: dict) -> None:\n    # 普通版和保脸版同时适配本机模型，避免只改了侧栏默认版，手动导入另一份却缺模型。\n    selected = resolve_workflow_path()\n    paths = [selected, *sorted(BASE.glob(\"OpenH3_2K*工作流.json\"))]\n    for path in dict.fromkeys(paths):\n        _patch_workflow_file(path, swaps)\n\n\ndef apply_swaps(api: dict, swaps: dict) -> None:\n    if not swaps:\n        return\n    for node in api.values():\n        for key, value in node[\"inputs\"].items():\n            if isinstance(value, str) and value in swaps:\n                node[\"inputs\"][key] = swaps[value]\n                log(f\"   复用：{value} → {swaps[value]}\")\n\n\ndef submit_and_wait(api: dict) -> Path:\n    log(\"\\n开始采样：2K/5 秒在 A100 大概 6~15 分钟，冷启动更久\")\n    payload = json.dumps({\"prompt\": api, \"client_id\": uuid.uuid4().hex}).encode(\"utf-8\")\n    req = urllib.request.Request(f\"http://127.0.0.1:{PORT}/prompt\", data=payload,\n                                 headers={\"Content-Type\": \"application/json\"})\n    try:\n        with urllib.request.urlopen(req, timeout=60) as r:\n            resp = json.loads(r.read().decode(\"utf-8\"))\n    except urllib.error.HTTPError as exc:\n        body = exc.read().decode(\"utf-8\", \"replace\")\n        raise SystemExit(\n            \"❌ ComfyUI 拒绝了这条工作流（多半是参数名/取值和这个 ComfyUI 版本不匹配）\\n\"\n            f\"{body[:2000]}\\n\\n\"\n            \"👉 退路：打开 ComfyUI 界面，把桌面那个工作流 JSON 拖进去，手动点 Run，\"\n            \"效果完全一样。\")\n\n    prompt_id = resp.get(\"prompt_id\")\n    log(f\"✅ 已入队 prompt_id={prompt_id}\")\n\n    started = time.time()\n    last_note = 0.0\n    while True:\n        time.sleep(5)\n        try:\n            with urllib.request.urlopen(f\"http://127.0.0.1:{PORT}/history/{prompt_id}\", timeout=20) as r:\n                hist = json.loads(r.read().decode(\"utf-8\"))\n        except Exception:\n            hist = {}\n        if prompt_id in hist:\n            entry = hist[prompt_id]\n            status = entry.get(\"status\", {})\n            if status.get(\"status_str\") == \"error\":\n                msgs = status.get(\"messages\", [])\n                raise SystemExit(f\"❌ 采样阶段报错：{json.dumps(msgs, ensure_ascii=False)[:2000]}\")\n            outputs = entry.get(\"outputs\") or {}\n            if outputs:\n                return find_output(outputs)\n        elapsed = time.time() - started\n        if elapsed - last_note > 60:\n            last_note = elapsed\n            queued = \"\"\n            try:\n                with urllib.request.urlopen(f\"http://127.0.0.1:{PORT}/queue\", timeout=10) as r:\n                    q = json.loads(r.read().decode(\"utf-8\"))\n                queued = f\"｜队列 运行中 {len(q.get('queue_running', []))} / 等待 {len(q.get('queue_pending', []))}\"\n            except Exception:\n                pass\n            log(f\"   ⏳ 已跑 {int(elapsed // 60)} 分 {int(elapsed % 60)} 秒{queued}\")\n        if elapsed > 3 * 3600:\n            raise SystemExit(\"❌ 超过 3 小时还没出结果，先停掉看 openh3_comfyui.log\")\n\n\ndef find_output(outputs: dict) -> Path:\n    for _node_id, node_out in outputs.items():\n        for _key, items in node_out.items():\n            if not isinstance(items, list):\n                continue\n            for item in items:\n                if isinstance(item, dict) and item.get(\"filename\"):\n                    p = COMFY / \"output\" / item.get(\"subfolder\", \"\") / item[\"filename\"]\n                    if p.exists():\n                        return p\n    raise SystemExit(f\"❌ 任务完成了但没找到输出文件：{json.dumps(outputs, ensure_ascii=False)[:1000]}\")\n\n\n# ============================== 主流程 ==============================\ndef detect_vram() -> float:\n    try:\n        import torch  # type: ignore\n        if torch.cuda.is_available():\n            return torch.cuda.get_device_properties(0).total_memory / 1024 ** 3\n    except Exception:\n        pass\n    return 0.0\n\n\ndef export_workflow_to_ui() -> None:\n    \"\"\"顺便把工作流塞进 ComfyUI 的侧栏，打开界面点一下就能加载。\"\"\"\n    dst_dir = COMFY / \"user\" / \"default\" / \"workflows\"\n    try:\n        dst_dir.mkdir(parents=True, exist_ok=True)\n        dst = dst_dir / \"OpenH3_2K精修.json\"\n        shutil.copy2(resolve_workflow_path(), dst)\n        log(f\"   📄 工作流已放进侧栏：Workflows → OpenH3_2K精修\")\n    except Exception as exc:\n        log(f\"   （侧栏导出失败，不影响手动拖拽：{exc}）\")\n\n\ndef main() -> None:\n    global RES\n    if sys.platform != \"linux\":\n        log(\"⚠️ 这个脚本是给 Colab / Linux GPU 环境用的\")\n\n    vram = detect_vram()\n    if vram:\n        log(f\"🎮 显存 {vram:.0f} GB\")\n        if RES.lower() == \"auto\":\n            RES = \"2k\" if vram >= 60 else \"1080p\"\n            log(f\"   分辨率自动选 RES={RES}\")\n        elif vram < 55 and RES.lower() == \"2k\":\n            log(\"⚠️ 显存 < 55GB，2K 很可能 OOM —— 建议 RES=1080p\")\n    else:\n        log(\"⚠️ 没检测到 CUDA，Colab 记得选 A100 运行时\")\n        if RES.lower() == \"auto\":\n            RES = \"1080p\"\n\n    proxy = os.getenv(\"http_proxy\") or os.getenv(\"https_proxy\") or os.getenv(\"HTTP_PROXY\")\n    if proxy and \"127.0.0.1\" not in proxy and \"localhost\" not in proxy:\n        os.environ[\"NO_PROXY\"] = os.environ.get(\"no_proxy\", \"\") + \",127.0.0.1,localhost\"\n\n    wf = load_workflow()          # 先确认工作流在，别等 90GB 下载完才发现缺文件\n\n    ensure_comfy()\n    install_nodes()\n    swaps = download_weights(face_mode=any(n.get(\"type\") == \"OpenH3FaceRegionMap\" for n in wf.get(\"nodes\", [])))\n    swaps.update(model_swaps())        # 按磁盘上真实存在的文件再归一化一遍（双向都覆盖）\n    patch_workflow_file(swaps)\n    # 注意顺序：LoadVideo 的“可选文件”列表是 ComfyUI 启动时扫描 input/ 得到的，\n    # 所以视频必须在启动之前就位，否则提交时会被判定“文件不在列表里”。\n    video_name = prepare_video()\n    start_comfy(vram)\n    url = launch_tunnel()\n    export_workflow_to_ui()\n\n    if not AUTO_RUN:\n        step(\"[6/7] 环境就绪 —— 去 ComfyUI 里跑\")\n        log(f\"1. 打开 ComfyUI：{url or f'http://127.0.0.1:{PORT}'}\")\n        log(\"2. 左侧 Workflows 选「OpenH3_2K精修」（或把 json 拖进画布）\")\n        log(\"3. ① 号 LoadVideo 节点点上传/选文件，把你的视频选进来（建议先切 5~15 秒）\")\n        log(\"   · 下拉框里的 max_frames 之后会决定用多少帧：121≈5秒，360≈15秒\")\n        log(f\"4. ⑥ 号分辨率节点选 {RES}（40G 卡别选 2k）\")\n        log(\"5. 点 Run。产物在 ComfyUI/output/video/open_h3_2k_*.mp4\")\n        step(\"[7/7] 等待你在界面里点 Run\")\n        return\n\n    if not video_name:\n        raise SystemExit(\"AUTO_RUN=1 需要输入视频：把片段放到 /content/draft.mp4 再重跑。\")\n\n    step(\"[6/7] 自动跑这条工作流\")\n    api = ui_to_api(wf)\n    apply_swaps(api, swaps)\n    apply_settings(api, video_name)\n    out = submit_and_wait(api)\n\n    shutil.copy2(out, OUT_PATH)\n    dur = ffprobe(OUT_PATH, \"format=duration\")\n    wh = subprocess.run([\"ffprobe\", \"-v\", \"error\", \"-select_streams\", \"v:0\", \"-show_entries\",\n                         \"stream=width,height\", \"-of\", \"csv=p=0:s=x\", str(OUT_PATH)],\n                        capture_output=True, text=True).stdout.strip()\n    step(\"[7/7] 完成\")\n    log(f\"🎬 {OUT_PATH}\")\n    log(f\"   分辨率 {wh or '?'}｜时长 {float(dur or 0):.2f}s｜大小 {human_gb(OUT_PATH.stat().st_size)}\")\n    log(f\"   中间产物：{COMFY / 'output'}（refined latent 在 output/open_h3_latents/）\")\n\n\nif __name__ == \"__main__\":\n    main()\n"
            },
            "models": {
              "zh": [
                [
                  "1. Open-H3 2K 精修 LoRA",
                  "loras/",
                  "lora/open_h3_regenerate_2k_lora.safetensors",
                  "Efficient-Large-Model/Open-H3-Regenerate-2K",
                  "英伟达开源的 2K 二采精修核心合并 LoRA（含 Refiner + LightX2V Turbo）"
                ],
                [
                  "2. Sharp 50层高频锐化曲线",
                  "loras/",
                  "lora/sharp_curve_branches.safetensors",
                  "Efficient-Large-Model/Open-H3-Regenerate-2K",
                  "50 层逐层高频时间步偏移分支，让皮肤毛孔、发丝与鳞片极度锐利"
                ],
                [
                  "3. 3D 潜变量放大器",
                  "latent_upscale_models/",
                  "latent_upsampler/minimax_h3_latent_upscaler_3d_conv_v1_bf16.safetensors",
                  "Efficient-Large-Model/Open-H3-Regenerate-2K · LBH-123-AI/Minimax_h3_latent_Upscaler",
                  "在 3D 视频潜空间内直接将分辨率放大 2 倍，免去像素级解码再编码的画质折损"
                ],
                [
                  "4. Fast 非因果高速 VAE",
                  "vae/",
                  "vae_fast/fast_h3_vae_noncausal_24l.safetensors",
                  "Efficient-Large-Model/Open-H3-Regenerate-2K",
                  "英伟达专为 2K 高清解码优化的轻量高速 VAE，大幅降低 2K 解码显存峰值"
                ],
                [
                  "5. H3 主干与 32B 编码器",
                  "diffusion_models/ · text_encoders/",
                  "minimax_h3_ref2va_pruned_int8_convrot.safetensors · qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "提供精修去噪底座与文本理解（脚本会自动复用已有 INT8 或 NVFP4 权重）"
                ]
              ],
              "en": [
                [
                  "1. Open-H3 2K Refine LoRA",
                  "loras/",
                  "lora/open_h3_regenerate_2k_lora.safetensors",
                  "Efficient-Large-Model/Open-H3-Regenerate-2K",
                  "NVIDIA's official 2K regeneration LoRA (Refiner + LightX2V Turbo)"
                ],
                [
                  "2. Sharp 50-Layer Curves",
                  "loras/",
                  "lora/sharp_curve_branches.safetensors",
                  "Efficient-Large-Model/Open-H3-Regenerate-2K",
                  "50-layer per-block timestep curves for crisp high-frequency detail"
                ],
                [
                  "3. 3D Latent Upscaler",
                  "latent_upscale_models/",
                  "latent_upsampler/minimax_h3_latent_upscaler_3d_conv_v1_bf16.safetensors",
                  "Efficient-Large-Model/Open-H3-Regenerate-2K · LBH-123-AI/Minimax_h3_latent_Upscaler",
                  "Upscales video latents 2x in 3D space without pixel round-trip loss"
                ],
                [
                  "4. Fast Non-Causal VAE",
                  "vae/",
                  "vae_fast/fast_h3_vae_noncausal_24l.safetensors",
                  "Efficient-Large-Model/Open-H3-Regenerate-2K",
                  "NVIDIA's fast 24-layer VAE for low-VRAM 2K decoding"
                ],
                [
                  "5. H3 Backbone & 32B VLM",
                  "diffusion_models/ · text_encoders/",
                  "minimax_h3_ref2va_pruned_int8_convrot.safetensors · qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "Base diffusion model and 32B encoder"
                ]
              ]
            },
            "params": {
              "zh": [
                [
                  "OpenH3RegenSigmas",
                  "steps / start_sigma",
                  "3 步 / 0.78 (保脸锁动作) 或 0.909 (大重绘)",
                  "0.78 能严格锁住草稿视频的动作与脸型不飘；0.909 重绘幅度更大适合风景特效"
                ],
                [
                  "OpenH3RegenLora",
                  "strength / curve_strength",
                  "1.0 / 0.65",
                  "精修 LoRA 设 1.0，Sharp 50层锐化曲线设 0.65 最自然不生硬"
                ],
                [
                  "MinimaxH3LatentUpscaler3D",
                  "mode.scale / enable_temporal_chunking",
                  "2.0 / true",
                  "开启时间分块 (temporal_chunking) 防止长视频 3D 放大时爆显存"
                ]
              ],
              "en": [
                [
                  "OpenH3RegenSigmas",
                  "steps / start_sigma",
                  "3 steps / 0.78 (lock motion) or 0.909 (full redraw)",
                  "0.78 strictly locks draft motion & facial structure; 0.909 adds more new detail"
                ],
                [
                  "OpenH3RegenLora",
                  "strength / curve_strength",
                  "1.0 / 0.65",
                  "1.0 LoRA strength + 0.65 sharp curve strength avoids over-sharpening"
                ],
                [
                  "MinimaxH3LatentUpscaler3D",
                  "mode.scale / enable_temporal_chunking",
                  "2.0 / true",
                  "Enable temporal chunking to prevent VRAM spikes during 3D latent upscaling"
                ]
              ]
            }
          },
          {
            "id": "h3-pika-2k-all",
            "status": "live",
            "short": {
              "zh": "04 · 全流程：MiniMax + Pika + 2K",
              "en": "04 · Full: MiniMax + Pika + 2K"
            },
            "title": {
              "zh": "终极全流程一体版：MiniMax 官方底模 + Pika 6步一采 + 英伟达 Open-H3 2K 精修二采",
              "en": "Ultimate Full Pipeline: MiniMax Base + Pika 6-Step Pass 1 + NVIDIA Open-H3 2K Pass 2"
            },
            "tagline": {
              "zh": "单张工作流一气呵成：0.4MP Pika 6步锁大动态 → 音画潜变量分离 → 3D 放大 2 倍 → Open-H3 3步 Euler 高清精修",
              "en": "All-in-One Two-Pass Graph: 0.4MP Pika 6-Step Pass 1 → AV Latent Split → 2x 3D Upscale → 3-Step Open-H3 2K Refine"
            },
            "summary": {
              "zh": "本项目默认旗舰生产管线（minimax_pika 两轮采样）：把第 01 篇的官方底模、第 02 篇的 Pika Flex 6 步一采与第 03 篇的英伟达 Open-H3 1080p/2K 3 步精修无缝串联在同一张 ComfyUI 画布中！既解决了单轮直出 1080p 变慢动作的顽疾，又在总共 6+3=9 步内直出影院级高清有声成片。",
              "en": "Our flagship production pipeline (minimax_pika Two-Pass): Combines Official Ref2VA INT8 + Pika Flex 6-step Pass 1 with 2.0x 3D Latent Upscaling and NVIDIA Open-H3 3-step Pass 2 in a single unified workflow—delivering 1080p/2K audio-video in 6+3=9 total steps."
            },
            "tags": {
              "zh": [
                "6步一采 + 3步二采",
                "Pika Flex + Open-H3 2K",
                "音画潜变量分离再合成",
                "全流程一键 Colab"
              ],
              "en": [
                "6-Step Pass 1 + 3-Step Pass 2",
                "Pika Flex + Open-H3 2K",
                "AV Latent Split & Concat",
                "Full Pipeline Colab"
              ]
            },
            "stats": [
              {
                "value": "6 + 3 步",
                "label": {
                  "zh": "一采 6 步 (Pika) + 二采 3 步 (Open-H3)",
                  "en": "6-Step Pass 1 + 3-Step Pass 2"
                }
              },
              {
                "value": "0.4 → 2.07MP",
                "label": {
                  "zh": "480p 锁动作 → 1080p/2K 补毛孔",
                  "en": "480p Motion → 1080p/2K Detail"
                }
              },
              {
                "value": "0.78",
                "label": {
                  "zh": "二采 start_sigma 严锁一采动作",
                  "en": "Pass-2 start_sigma Locks Motion"
                }
              },
              {
                "value": "3 套全流程",
                "label": {
                  "zh": "CUT 切镜 · T2V 文生 · CONTINUE 接续",
                  "en": "CUT · T2V · CONTINUE Graphs"
                }
              }
            ],
            "hfRepos": [
              {
                "name": "Comfy-Org/MiniMax-H3",
                "url": "https://huggingface.co/Comfy-Org/MiniMax-H3",
                "desc": {
                  "zh": "MiniMax H3 官方底模 + Pika Flex (ref2va / fl2va) 双 LoRA + 32B 编码器 + 双 VAE",
                  "en": "Official H3 Backbone + Pika Flex LoRAs + 32B VLM + Dual VAEs"
                }
              },
              {
                "name": "Efficient-Large-Model/Open-H3-Regenerate-2K",
                "url": "https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K",
                "desc": {
                  "zh": "英伟达 Open-H3 2K 精修 LoRA 与 Sharp 50层高频锐化曲线",
                  "en": "NVIDIA Open-H3 2K Refine LoRA & Sharp 50-Layer Curves"
                }
              },
              {
                "name": "LBH-123-AI/Minimax_h3_latent_Upscaler",
                "url": "https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler",
                "desc": {
                  "zh": "一采转二采核心桥梁：3D 视频潜空间 2.0x 放大模型",
                  "en": "3D Video Latent 2.0x Upscaler Model"
                }
              },
              {
                "name": "fal/MiniMax-H3-Realism-People-LoRA",
                "url": "https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA",
                "desc": {
                  "zh": "一采底座去塑料感写实皮肤 LoRA (strength=0.5)",
                  "en": "fal Realism People Skin LoRA (strength=0.5)"
                }
              },
              {
                "name": "rdh9616/ComfyUI-Open-H3-Regenerate",
                "url": "https://github.com/rdh9616/ComfyUI-Open-H3-Regenerate",
                "desc": {
                  "zh": "二采精修核心节点插件（脚本已内置 3D 逐 Token 时间步去重补丁）",
                  "en": "Open-H3 Regenerate Custom Nodes (with 3D token dedup patch)"
                }
              },
              {
                "name": "LBH-123-AI/Comfyui_Minimax_h3_latent_Upscaler",
                "url": "https://github.com/LBH-123-AI/Comfyui_Minimax_h3_latent_Upscaler",
                "desc": {
                  "zh": "MinimaxH3LatentUpscaler3D 自定义节点插件",
                  "en": "MinimaxH3LatentUpscaler3D Custom Node Plugin"
                }
              }
            ],
            "versionGroups": [
              {
                "title": {
                  "zh": "一、为什么要把「MiniMax + Pika 一采」与「英伟达 2K 二采」结合？",
                  "en": "1. Why Combine MiniMax + Pika (Pass 1) with NVIDIA Open-H3 2K (Pass 2)?"
                },
                "desc": {
                  "zh": "如果直接在第一轮用 1080p/2K 分辨率采样，不仅显存暴涨、耗时长达数十分钟，还会因为 Token 密度过高导致人物变成「慢动作回放」。两轮结合架构完美解决这一矛盾：",
                  "en": "Running 1080p/2K directly in a single pass causes slow-motion artifacts and massive VRAM overhead. The Two-Pass architecture solves both:"
                },
                "rows": {
                  "zh": [
                    [
                      "阶段 1 · Pika 6步一采 (0.4MP)",
                      "UNET (#127) → fal Realism (#943) → Pika Flex (#944) → Sampler (#125)",
                      "864×480 · 6 步 res_multistep",
                      "在 H3 最擅长的 0.4MP 甜点分辨率下，用 Pika Flex LoRA 仅花 6 步快速生成大动态自然、音画精准同步的潜变量"
                    ],
                    [
                      "阶段 2 · 音画分离与 3D 潜变量放大",
                      "LTXVSeparateAVLatent (#b15_split) → MinimaxH3LatentUpscaler3D (#b15_upscale) → LTXVConcatAVLatent (#b15_concat)",
                      "仅放大视频潜变量 2.0x (至 1080p 2.07MP)",
                      "关键秘诀：先用 SeparateAVLatent 把音频潜变量拆出来保护好，只将画面潜变量 3D 放大 2 倍，再与原音频潜变量拼回！"
                    ],
                    [
                      "阶段 3 · 英伟达 Open-H3 3步精修",
                      "OpenH3RegenLora (#b15_regen_lora) + OpenH3RegenSigmas (#b15_schedule) → Sampler (#b15_refine)",
                      "1728×960 · 3 步 Euler (start_sigma=0.78)",
                      "挂载 open_h3_regenerate_2k_lora 与 50 层锐化曲线 (0.65)，从 sigma=0.78 开始跑 3 步 Euler，锁死一采动作同时炸出毛孔级细节"
                    ]
                  ],
                  "en": [
                    [
                      "Stage 1 · Pika 6-Step Pass 1 (0.4MP)",
                      "UNET (#127) → fal Realism (#943) → Pika Flex (#944) → Sampler (#125)",
                      "864×480 · 6 steps res_multistep",
                      "Generates natural full-speed motion and synced audio latents in 6 steps at H3's native 0.4MP sweet spot"
                    ],
                    [
                      "Stage 2 · AV Split & 3D Latent Upscale",
                      "LTXVSeparateAVLatent (#b15_split) → MinimaxH3LatentUpscaler3D (#b15_upscale) → LTXVConcatAVLatent (#b15_concat)",
                      "2.0x Video Latent Upscale (to 2.07MP)",
                      "Splits audio & video latents so only the video latent is upscaled 2x in 3D space, then re-concatenates the untouched audio latent"
                    ],
                    [
                      "Stage 3 · NVIDIA Open-H3 3-Step Refine",
                      "OpenH3RegenLora (#b15_regen_lora) + OpenH3RegenSigmas (#b15_schedule) → Sampler (#b15_refine)",
                      "1728×960 · 3 Euler steps (start_sigma=0.78)",
                      "Applies Open-H3 2K LoRA + 50-layer sharp curves (0.65) for 3 Euler steps at start_sigma=0.78, adding pore-level detail without altering motion"
                    ]
                  ]
                }
              }
            ],
            "workflows": [
              {
                "key": "all-cut",
                "name": "01_MiniMax_Pika_OpenH3_2K_CUT.json",
                "label": {
                  "zh": "01 · CUT 全流程：多参考图 + Pika 6步 + 2K 精修",
                  "en": "01 · CUT Full: Multi-Ref + Pika 6-Step + 2K Refine"
                },
                "badge": {
                  "zh": "旗舰主力",
                  "en": "Flagship"
                },
                "desc": {
                  "zh": "输入角色设定图 <Picture 1>，一采 Pika Ref2VA 6 步锁脸锁动作，二采 Open-H3 3 步直出 1080p/2K 电影级有声成片。",
                  "en": "Input <Picture 1> character sheet: Pass 1 runs 6-step Pika Ref2VA; Pass 2 runs 3-step Open-H3 1080p/2K refinement."
                },
                "steps": {
                  "zh": [
                    [
                      "加载底模与 Pika LoRA",
                      "UNET #127 → #943 (0.5) → #944 (1.0)",
                      "官方 Ref2VA INT8 + fal Realism + Pika Flex Ref2VA"
                    ],
                    [
                      "一采 0.4MP 6 步生成",
                      "RefToVideo #131 → Sampler #125",
                      "绑定 <Picture 1>，864×480 跑 6 步生成音画潜变量"
                    ],
                    [
                      "音画分离与 2x 放大",
                      "SeparateAV #b15_split → Upscaler3D #b15_upscale",
                      "分离保护音频潜变量，画面潜变量 3D 放大 2.0 倍并拼回"
                    ],
                    [
                      "Open-H3 3 步精修",
                      "OpenH3RegenLora → Sampler #b15_refine",
                      "挂载 2K 精修 LoRA + 50层锐化曲线，3 步 Euler (0.78)"
                    ],
                    [
                      "高清双路解码合成",
                      "VAEDecode #122 · VAEDecodeAudio #121",
                      "直出 1080p/2K 24fps 影院级有声视频"
                    ]
                  ],
                  "en": [
                    [
                      "Load Base & Pika LoRA",
                      "UNET #127 → #943 (0.5) → #944 (1.0)",
                      "Official Ref2VA INT8 + fal Realism + Pika Flex Ref2VA"
                    ],
                    [
                      "Pass 1: 0.4MP 6 Steps",
                      "RefToVideo #131 → Sampler #125",
                      "Bind <Picture 1>, sample 6 steps at 864×480"
                    ],
                    [
                      "AV Split & 2x Upscale",
                      "SeparateAV #b15_split → Upscaler3D #b15_upscale",
                      "Split AV latent, upscale video 2.0x in 3D, re-concat audio"
                    ],
                    [
                      "Pass 2: Open-H3 3 Steps",
                      "OpenH3RegenLora → Sampler #b15_refine",
                      "2K Refine LoRA + 50 sharp curves, 3 Euler steps (0.78)"
                    ],
                    [
                      "High-Res Decode & Mux",
                      "VAEDecode #122 · VAEDecodeAudio #121",
                      "Output 1080p/2K 24fps audio-video master"
                    ]
                  ]
                },
                "content": {
                  "119": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_video_vae_int8_convrot.safetensors"
                    }
                  },
                  "120": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_audio_vae_fp32.safetensors"
                    }
                  },
                  "128": {
                    "class_type": "CLIPLoader",
                    "inputs": {
                      "clip_name": "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                      "type": "minimax",
                      "device": "default"
                    }
                  },
                  "127": {
                    "class_type": "UNETLoader",
                    "inputs": {
                      "unet_name": "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                      "weight_dtype": "default"
                    },
                    "_meta": {
                      "title": "MiniMax H3 Official Ref2VA INT8"
                    }
                  },
                  "943": {
                    "class_type": "LoraLoaderModelOnly",
                    "inputs": {
                      "model": [
                        "127",
                        0
                      ],
                      "lora_name": "h3-realism-people-t2v-i2v-r2v.safetensors",
                      "strength_model": 0.5
                    },
                    "_meta": {
                      "title": "fal Realism People (r34l1sm) / 0.5"
                    }
                  },
                  "129": {
                    "class_type": "RandomNoise",
                    "inputs": {
                      "noise_seed": 42
                    }
                  },
                  "135": {
                    "class_type": "KSamplerSelect",
                    "inputs": {
                      "sampler_name": "res_multistep"
                    }
                  },
                  "142": {
                    "class_type": "MiniMaxH3SigmaShift",
                    "inputs": {
                      "model": [
                        "944",
                        0
                      ],
                      "shift_video": 12.0,
                      "shift_audio": 3.0
                    }
                  },
                  "131": {
                    "class_type": "MiniMaxH3ReferenceToVideo",
                    "inputs": {
                      "clip": [
                        "128",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ],
                      "audio_vae": [
                        "120",
                        0
                      ],
                      "prompt": [
                        "1",
                        0
                      ],
                      "width": 864,
                      "height": 480,
                      "length": 124,
                      "ref_image_size": "match",
                      "ref_images.ref_image_0": [
                        "901",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "MiniMaxH3ReferenceToVideo"
                    }
                  },
                  "124": {
                    "class_type": "BasicScheduler",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "scheduler": "simple",
                      "steps": 6,
                      "denoise": 1.0
                    }
                  },
                  "126": {
                    "class_type": "BasicGuider",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "conditioning": [
                        "131",
                        0
                      ]
                    }
                  },
                  "125": {
                    "class_type": "SamplerCustomAdvanced",
                    "inputs": {
                      "noise": [
                        "129",
                        0
                      ],
                      "guider": [
                        "126",
                        0
                      ],
                      "sampler": [
                        "135",
                        0
                      ],
                      "sigmas": [
                        "124",
                        0
                      ],
                      "latent_image": [
                        "131",
                        1
                      ]
                    },
                    "_meta": {
                      "title": "MiniMax 官方 + Pika LoRA 一采 (CUT) · 0.4MP / 6步"
                    }
                  },
                  "122": {
                    "class_type": "VAEDecode",
                    "inputs": {
                      "samples": [
                        "b15_refine",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ]
                    }
                  },
                  "121": {
                    "class_type": "VAEDecodeAudio",
                    "inputs": {
                      "samples": [
                        "b15_refine",
                        0
                      ],
                      "vae": [
                        "120",
                        0
                      ]
                    }
                  },
                  "130": {
                    "class_type": "CreateVideo",
                    "inputs": {
                      "images": [
                        "122",
                        0
                      ],
                      "audio": [
                        "121",
                        0
                      ],
                      "fps": 24,
                      "bit_depth": 8
                    }
                  },
                  "92": {
                    "class_type": "SaveVideo",
                    "inputs": {
                      "video": [
                        "130",
                        0
                      ],
                      "format": "auto",
                      "codec": "auto",
                      "filename_prefix": "minimax_pika_openh3_2k_cut"
                    }
                  },
                  "1": {
                    "class_type": "PrimitiveStringMultiline",
                    "inputs": {
                      "value": "Romantic anime shot. Keep character identity from <Picture 1>."
                    },
                    "_meta": {
                      "title": "PROMPT"
                    }
                  },
                  "901": {
                    "class_type": "LoadImage",
                    "inputs": {
                      "image": "reference_1.png"
                    },
                    "_meta": {
                      "title": "REFERENCE IMAGE 1 (<Picture 1>)"
                    }
                  },
                  "b15_split": {
                    "class_type": "LTXVSeparateAVLatent",
                    "inputs": {
                      "av_latent": [
                        "125",
                        1
                      ]
                    }
                  },
                  "b15_upscale": {
                    "class_type": "MinimaxH3LatentUpscaler3D",
                    "inputs": {
                      "latent": [
                        "b15_split",
                        0
                      ],
                      "model_name": "minimax_h3_latent_upscaler_3d_conv_v1/minimax_h3_latent_upscaler_3d_conv_v1_fp16.safetensors",
                      "mode": "scale by multiplier",
                      "align": 32,
                      "enable_temporal_chunking": true,
                      "force_unload": true,
                      "device": "cuda",
                      "precision": "fp16",
                      "mode.scale": 2.0
                    },
                    "_meta": {
                      "title": "潜变量放大至 1080p (2.07MP)"
                    }
                  },
                  "b15_concat": {
                    "class_type": "LTXVConcatAVLatent",
                    "inputs": {
                      "video_latent": [
                        "b15_upscale",
                        0
                      ],
                      "audio_latent": [
                        "b15_split",
                        1
                      ]
                    }
                  },
                  "b15_regen_lora": {
                    "class_type": "OpenH3RegenLora",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "lora_name": "open_h3_regenerate_2k_lora.safetensors",
                      "curve_name": "sharp_curve_branches.safetensors",
                      "curve_table": "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                      "strength": 1.0,
                      "curve_strength": 0.65,
                      "lora_dtype": "bf16"
                    },
                    "_meta": {
                      "title": "Open-H3 精修 LoRA + Sharp 50层高频锐化曲线"
                    }
                  },
                  "b15_guider": {
                    "class_type": "BasicGuider",
                    "inputs": {
                      "model": [
                        "b15_regen_lora",
                        0
                      ],
                      "conditioning": [
                        "131",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "第二轮条件 · Open-H3 1080p 精修"
                    }
                  },
                  "b15_sampler": {
                    "class_type": "KSamplerSelect",
                    "inputs": {
                      "sampler_name": "euler"
                    },
                    "_meta": {
                      "title": "Open-H3 精修采样器 · Euler"
                    }
                  },
                  "b15_noise": {
                    "class_type": "RandomNoise",
                    "inputs": {
                      "noise_seed": 42
                    }
                  },
                  "b15_schedule": {
                    "class_type": "OpenH3RegenSigmas",
                    "inputs": {
                      "steps": 3,
                      "start_sigma": 0.78
                    },
                    "_meta": {
                      "title": "Open-H3 精修调度 · 3步 / start_sigma=0.78"
                    }
                  },
                  "b15_refine": {
                    "class_type": "SamplerCustomAdvanced",
                    "inputs": {
                      "noise": [
                        "b15_noise",
                        0
                      ],
                      "guider": [
                        "b15_guider",
                        0
                      ],
                      "sampler": [
                        "b15_sampler",
                        0
                      ],
                      "sigmas": [
                        "b15_schedule",
                        0
                      ],
                      "latent_image": [
                        "b15_concat",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "Open-H3 1080p 精修 · 3步 / start_sigma=0.78"
                    }
                  },
                  "944": {
                    "class_type": "LoraLoaderModelOnly",
                    "inputs": {
                      "model": [
                        "943",
                        0
                      ],
                      "lora_name": "pika_h3_flex_ref2va_v1_bf16.safetensors",
                      "strength_model": 1.0
                    },
                    "_meta": {
                      "title": "Pika H3 Flex (CUT) / 1.0"
                    }
                  }
                }
              },
              {
                "key": "all-t2v",
                "name": "02_MiniMax_Pika_OpenH3_2K_T2V.json",
                "label": {
                  "zh": "02 · T2V 全流程：纯文生视频 + Pika 6步 + 2K 精修",
                  "en": "02 · T2V Full: Pure Text + Pika 6-Step + 2K Refine"
                },
                "badge": {
                  "zh": "",
                  "en": ""
                },
                "desc": {
                  "zh": "零参考图纯文本输入，6 步 Pika 一采生成大动态奇幻/空镜，再经 3 步 Open-H3 放大精修至满细节高清画面。",
                  "en": "Pure text prompt: 6-step Pika Pass 1 for dynamic motion + 3-step Open-H3 Pass 2 for razor-sharp 1080p/2K detail."
                },
                "steps": {
                  "zh": [
                    [
                      "加载底模与 Pika LoRA",
                      "UNET #127 → #943 (0.5) → #944 (1.0)",
                      "官方 Ref2VA INT8 + fal Realism + Pika Flex Ref2VA"
                    ],
                    [
                      "一采纯文本 6 步生成",
                      "RefToVideo #131 (无参考图) → Sampler #125",
                      "0.4MP 下 6 步快速构建场景动态与环境音"
                    ],
                    [
                      "音画分离与 2x 放大",
                      "SeparateAV #b15_split → Upscaler3D #b15_upscale",
                      "画面潜变量 3D 放大 2.0 倍，音频潜变量原样保留"
                    ],
                    [
                      "Open-H3 3 步精修",
                      "OpenH3RegenLora → Sampler #b15_refine",
                      "3 步 Euler (start_sigma=0.78) 注入高清纹理"
                    ],
                    [
                      "高清双路解码合成",
                      "VAEDecode #122 · VAEDecodeAudio #121",
                      "合成 24fps 高清有声视频"
                    ]
                  ],
                  "en": [
                    [
                      "Load Base & Pika LoRA",
                      "UNET #127 → #943 (0.5) → #944 (1.0)",
                      "Official Ref2VA INT8 + fal Realism + Pika Flex Ref2VA"
                    ],
                    [
                      "Pass 1: Text 6 Steps",
                      "RefToVideo #131 → Sampler #125",
                      "6 steps at 0.4MP for full-speed motion & audio"
                    ],
                    [
                      "AV Split & 2x Upscale",
                      "SeparateAV #b15_split → Upscaler3D #b15_upscale",
                      "2.0x 3D upscale on video latent"
                    ],
                    [
                      "Pass 2: Open-H3 3 Steps",
                      "OpenH3RegenLora → Sampler #b15_refine",
                      "3 Euler steps (start_sigma=0.78) for high-res detail"
                    ],
                    [
                      "High-Res Decode & Mux",
                      "VAEDecode #122 · VAEDecodeAudio #121",
                      "Mux 24fps high-res audio-video"
                    ]
                  ]
                },
                "content": {
                  "119": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_video_vae_int8_convrot.safetensors"
                    }
                  },
                  "120": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_audio_vae_fp32.safetensors"
                    }
                  },
                  "128": {
                    "class_type": "CLIPLoader",
                    "inputs": {
                      "clip_name": "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                      "type": "minimax",
                      "device": "default"
                    }
                  },
                  "127": {
                    "class_type": "UNETLoader",
                    "inputs": {
                      "unet_name": "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                      "weight_dtype": "default"
                    },
                    "_meta": {
                      "title": "MiniMax H3 Official Ref2VA INT8"
                    }
                  },
                  "943": {
                    "class_type": "LoraLoaderModelOnly",
                    "inputs": {
                      "model": [
                        "127",
                        0
                      ],
                      "lora_name": "h3-realism-people-t2v-i2v-r2v.safetensors",
                      "strength_model": 0.5
                    },
                    "_meta": {
                      "title": "fal Realism People (r34l1sm) / 0.5"
                    }
                  },
                  "129": {
                    "class_type": "RandomNoise",
                    "inputs": {
                      "noise_seed": 42
                    }
                  },
                  "135": {
                    "class_type": "KSamplerSelect",
                    "inputs": {
                      "sampler_name": "res_multistep"
                    }
                  },
                  "142": {
                    "class_type": "MiniMaxH3SigmaShift",
                    "inputs": {
                      "model": [
                        "944",
                        0
                      ],
                      "shift_video": 12.0,
                      "shift_audio": 3.0
                    }
                  },
                  "131": {
                    "class_type": "MiniMaxH3ReferenceToVideo",
                    "inputs": {
                      "prompt": [
                        "1",
                        0
                      ],
                      "width": 864,
                      "height": 480,
                      "length": 124,
                      "clip": [
                        "128",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ],
                      "audio_vae": [
                        "120",
                        0
                      ],
                      "ref_image_size": "match"
                    },
                    "_meta": {
                      "title": "T2V ReferenceToVideo / No References (04 aligned)"
                    }
                  },
                  "124": {
                    "class_type": "BasicScheduler",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "scheduler": "simple",
                      "steps": 6,
                      "denoise": 1.0
                    }
                  },
                  "126": {
                    "class_type": "BasicGuider",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "conditioning": [
                        "131",
                        0
                      ]
                    }
                  },
                  "125": {
                    "class_type": "SamplerCustomAdvanced",
                    "inputs": {
                      "noise": [
                        "129",
                        0
                      ],
                      "guider": [
                        "126",
                        0
                      ],
                      "sampler": [
                        "135",
                        0
                      ],
                      "sigmas": [
                        "124",
                        0
                      ],
                      "latent_image": [
                        "131",
                        1
                      ]
                    },
                    "_meta": {
                      "title": "MiniMax 官方 + Pika LoRA 一采 (T2V) · 0.4MP / 6步"
                    }
                  },
                  "122": {
                    "class_type": "VAEDecode",
                    "inputs": {
                      "samples": [
                        "b15_refine",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ]
                    }
                  },
                  "121": {
                    "class_type": "VAEDecodeAudio",
                    "inputs": {
                      "samples": [
                        "b15_refine",
                        0
                      ],
                      "vae": [
                        "120",
                        0
                      ]
                    }
                  },
                  "130": {
                    "class_type": "CreateVideo",
                    "inputs": {
                      "images": [
                        "122",
                        0
                      ],
                      "audio": [
                        "121",
                        0
                      ],
                      "fps": 24,
                      "bit_depth": 8,
                      "color_space": "sRGB",
                      "codec": "none"
                    }
                  },
                  "92": {
                    "class_type": "SaveVideo",
                    "inputs": {
                      "video": [
                        "130",
                        0
                      ],
                      "format": "auto",
                      "codec": "auto",
                      "filename_prefix": "minimax_pika_openh3_2k_t2v"
                    }
                  },
                  "1": {
                    "class_type": "PrimitiveStringMultiline",
                    "inputs": {
                      "value": "A cinematic shot of a mountain landscape at sunrise. Gentle clouds drift across the valley."
                    },
                    "_meta": {
                      "title": "PROMPT"
                    }
                  },
                  "b15_split": {
                    "class_type": "LTXVSeparateAVLatent",
                    "inputs": {
                      "av_latent": [
                        "125",
                        1
                      ]
                    }
                  },
                  "b15_upscale": {
                    "class_type": "MinimaxH3LatentUpscaler3D",
                    "inputs": {
                      "latent": [
                        "b15_split",
                        0
                      ],
                      "model_name": "minimax_h3_latent_upscaler_3d_conv_v1/minimax_h3_latent_upscaler_3d_conv_v1_fp16.safetensors",
                      "mode": "scale by multiplier",
                      "align": 32,
                      "enable_temporal_chunking": true,
                      "force_unload": true,
                      "device": "cuda",
                      "precision": "fp16",
                      "mode.scale": 2.0
                    },
                    "_meta": {
                      "title": "潜变量放大至 1080p (2.07MP)"
                    }
                  },
                  "b15_concat": {
                    "class_type": "LTXVConcatAVLatent",
                    "inputs": {
                      "video_latent": [
                        "b15_upscale",
                        0
                      ],
                      "audio_latent": [
                        "b15_split",
                        1
                      ]
                    }
                  },
                  "b15_regen_lora": {
                    "class_type": "OpenH3RegenLora",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "lora_name": "open_h3_regenerate_2k_lora.safetensors",
                      "curve_name": "sharp_curve_branches.safetensors",
                      "curve_table": "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                      "strength": 1.0,
                      "curve_strength": 0.65,
                      "lora_dtype": "bf16"
                    },
                    "_meta": {
                      "title": "Open-H3 精修 LoRA + Sharp 50层高频锐化曲线"
                    }
                  },
                  "b15_guider": {
                    "class_type": "BasicGuider",
                    "inputs": {
                      "model": [
                        "b15_regen_lora",
                        0
                      ],
                      "conditioning": [
                        "131",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "第二轮条件 · Open-H3 1080p 精修"
                    }
                  },
                  "b15_sampler": {
                    "class_type": "KSamplerSelect",
                    "inputs": {
                      "sampler_name": "euler"
                    },
                    "_meta": {
                      "title": "Open-H3 精修采样器 · Euler"
                    }
                  },
                  "b15_noise": {
                    "class_type": "RandomNoise",
                    "inputs": {
                      "noise_seed": 42
                    }
                  },
                  "b15_schedule": {
                    "class_type": "OpenH3RegenSigmas",
                    "inputs": {
                      "steps": 3,
                      "start_sigma": 0.78
                    },
                    "_meta": {
                      "title": "Open-H3 精修调度 · 3步 / start_sigma=0.78"
                    }
                  },
                  "b15_refine": {
                    "class_type": "SamplerCustomAdvanced",
                    "inputs": {
                      "noise": [
                        "b15_noise",
                        0
                      ],
                      "guider": [
                        "b15_guider",
                        0
                      ],
                      "sampler": [
                        "b15_sampler",
                        0
                      ],
                      "sigmas": [
                        "b15_schedule",
                        0
                      ],
                      "latent_image": [
                        "b15_concat",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "Open-H3 1080p 精修 · 3步 / start_sigma=0.78"
                    }
                  },
                  "944": {
                    "class_type": "LoraLoaderModelOnly",
                    "inputs": {
                      "model": [
                        "943",
                        0
                      ],
                      "lora_name": "pika_h3_flex_ref2va_v1_bf16.safetensors",
                      "strength_model": 1.0
                    },
                    "_meta": {
                      "title": "Pika H3 Flex (T2V) / 1.0"
                    }
                  }
                }
              },
              {
                "key": "all-continue",
                "name": "03_MiniMax_Pika_OpenH3_2K_CONTINUE.json",
                "label": {
                  "zh": "03 · CONTINUE 全流程：跨镜接续 + Pika FL2VA + 2K 精修",
                  "en": "03 · CONTINUE Full: Shot Extension + Pika FL2VA + 2K Refine"
                },
                "badge": {
                  "zh": "无缝长镜头",
                  "en": "Seamless Continue"
                },
                "desc": {
                  "zh": "一采使用 AddGuide (#903) 锁定上一镜末帧并挂载 Pika FL2VA LoRA；二采自动移除跨镜首帧引导防闪跳，仅用角色母图条件 (#131) 做单视频精修！",
                  "en": "Pass 1 locks frame 0 via AddGuide (#903) with Pika FL2VA; Pass 2 uses base ref conditioning (#131) without cross-shot guide to prevent first-frame flicker."
                },
                "steps": {
                  "zh": [
                    [
                      "挂载 Pika FL2VA LoRA",
                      "LoraLoader #944",
                      "使用 pika_h3_flex_fl2va_v1_bf16 (1.0) 保障首帧自然起步"
                    ],
                    [
                      "一采首帧接续 + 母图锁脸",
                      "RefToVideo #131 (#901) + AddGuide #903 (#902)",
                      "6 步完成与上一镜头的无缝动作续接"
                    ],
                    [
                      "音画分离与 2x 放大",
                      "SeparateAV #b15_split → Upscaler3D #b15_upscale",
                      "将一采接续好的视频潜变量放大 2.0 倍"
                    ],
                    [
                      "防闪跳二采条件注入",
                      "BasicGuider #b15_guider (接 #131 而非 #903)",
                      "二采不重复注入跨镜首帧 guide，彻底杜绝首帧跳帧与色偏累加"
                    ],
                    [
                      "3 步精修解码输出",
                      "Sampler #b15_refine → VAEDecode",
                      "输出高清且跨镜零闪跳的接续成片"
                    ]
                  ],
                  "en": [
                    [
                      "Load Pika FL2VA LoRA",
                      "LoraLoader #944",
                      "Use pika_h3_flex_fl2va_v1_bf16 (1.0) for smooth frame-0 onset"
                    ],
                    [
                      "Pass 1: AddGuide + Ref",
                      "RefToVideo #131 (#901) + AddGuide #903 (#902)",
                      "6 steps to extend seamlessly from previous shot"
                    ],
                    [
                      "AV Split & 2x Upscale",
                      "SeparateAV #b15_split → Upscaler3D #b15_upscale",
                      "Upscale video latent 2.0x in 3D space"
                    ],
                    [
                      "Flicker-Free Pass-2 Cond",
                      "BasicGuider #b15_guider (wired to #131)",
                      "Uses base ref conditioning (#131) in Pass 2 to prevent frame-0 color drift"
                    ],
                    [
                      "3-Step Refine & Decode",
                      "Sampler #b15_refine → VAEDecode",
                      "Output high-res seamless continuation shot"
                    ]
                  ]
                },
                "content": {
                  "119": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_video_vae_int8_convrot.safetensors"
                    }
                  },
                  "120": {
                    "class_type": "VAELoader",
                    "inputs": {
                      "vae_name": "minimax_h3_audio_vae_fp32.safetensors"
                    }
                  },
                  "128": {
                    "class_type": "CLIPLoader",
                    "inputs": {
                      "clip_name": "qwen3vl_32b_minimax_h3_int8_convrot.safetensors",
                      "type": "minimax",
                      "device": "default"
                    }
                  },
                  "127": {
                    "class_type": "UNETLoader",
                    "inputs": {
                      "unet_name": "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                      "weight_dtype": "default"
                    },
                    "_meta": {
                      "title": "MiniMax H3 Official Ref2VA INT8"
                    }
                  },
                  "943": {
                    "class_type": "LoraLoaderModelOnly",
                    "inputs": {
                      "model": [
                        "127",
                        0
                      ],
                      "lora_name": "h3-realism-people-t2v-i2v-r2v.safetensors",
                      "strength_model": 0.5
                    },
                    "_meta": {
                      "title": "fal Realism People (r34l1sm) / 0.5"
                    }
                  },
                  "129": {
                    "class_type": "RandomNoise",
                    "inputs": {
                      "noise_seed": 42
                    }
                  },
                  "135": {
                    "class_type": "KSamplerSelect",
                    "inputs": {
                      "sampler_name": "res_multistep"
                    }
                  },
                  "142": {
                    "class_type": "MiniMaxH3SigmaShift",
                    "inputs": {
                      "model": [
                        "944",
                        0
                      ],
                      "shift_video": 12.0,
                      "shift_audio": 3.0
                    }
                  },
                  "131": {
                    "class_type": "MiniMaxH3ReferenceToVideo",
                    "inputs": {
                      "clip": [
                        "128",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ],
                      "audio_vae": [
                        "120",
                        0
                      ],
                      "prompt": [
                        "1",
                        0
                      ],
                      "width": 864,
                      "height": 480,
                      "length": 124,
                      "ref_image_size": "match",
                      "ref_images.ref_image_0": [
                        "901",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "MiniMaxH3ReferenceToVideo"
                    }
                  },
                  "124": {
                    "class_type": "BasicScheduler",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "scheduler": "simple",
                      "steps": 6,
                      "denoise": 1.0
                    }
                  },
                  "126": {
                    "class_type": "BasicGuider",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "conditioning": [
                        "903",
                        0
                      ]
                    }
                  },
                  "125": {
                    "class_type": "SamplerCustomAdvanced",
                    "inputs": {
                      "noise": [
                        "129",
                        0
                      ],
                      "guider": [
                        "126",
                        0
                      ],
                      "sampler": [
                        "135",
                        0
                      ],
                      "sigmas": [
                        "124",
                        0
                      ],
                      "latent_image": [
                        "131",
                        1
                      ]
                    },
                    "_meta": {
                      "title": "MiniMax 官方 + Pika LoRA 一采 (CONTINUE) · 0.4MP / 6步"
                    }
                  },
                  "122": {
                    "class_type": "VAEDecode",
                    "inputs": {
                      "samples": [
                        "b15_refine",
                        0
                      ],
                      "vae": [
                        "119",
                        0
                      ]
                    }
                  },
                  "121": {
                    "class_type": "VAEDecodeAudio",
                    "inputs": {
                      "samples": [
                        "b15_refine",
                        0
                      ],
                      "vae": [
                        "120",
                        0
                      ]
                    }
                  },
                  "130": {
                    "class_type": "CreateVideo",
                    "inputs": {
                      "images": [
                        "122",
                        0
                      ],
                      "audio": [
                        "121",
                        0
                      ],
                      "fps": 24,
                      "bit_depth": 8
                    }
                  },
                  "92": {
                    "class_type": "SaveVideo",
                    "inputs": {
                      "video": [
                        "130",
                        0
                      ],
                      "format": "auto",
                      "codec": "auto",
                      "filename_prefix": "minimax_pika_openh3_2k_continue"
                    }
                  },
                  "1": {
                    "class_type": "PrimitiveStringMultiline",
                    "inputs": {
                      "value": "Romantic anime shot. Keep character identity from <Picture 1>."
                    },
                    "_meta": {
                      "title": "PROMPT"
                    }
                  },
                  "901": {
                    "class_type": "LoadImage",
                    "inputs": {
                      "image": "reference_1.png"
                    },
                    "_meta": {
                      "title": "REFERENCE IMAGE 1 (<Picture 1>)"
                    }
                  },
                  "902": {
                    "class_type": "LoadImage",
                    "inputs": {
                      "image": "selected_start.png"
                    },
                    "_meta": {
                      "title": "选定接续帧"
                    }
                  },
                  "903": {
                    "class_type": "MiniMaxH3AddGuide",
                    "inputs": {
                      "positive": [
                        "131",
                        0
                      ],
                      "latent": [
                        "131",
                        1
                      ],
                      "vae": [
                        "119",
                        0
                      ],
                      "audio_vae": [
                        "120",
                        0
                      ],
                      "image": [
                        "902",
                        0
                      ],
                      "frame_idx": 0
                    }
                  },
                  "b15_split": {
                    "class_type": "LTXVSeparateAVLatent",
                    "inputs": {
                      "av_latent": [
                        "125",
                        1
                      ]
                    }
                  },
                  "b15_upscale": {
                    "class_type": "MinimaxH3LatentUpscaler3D",
                    "inputs": {
                      "latent": [
                        "b15_split",
                        0
                      ],
                      "model_name": "minimax_h3_latent_upscaler_3d_conv_v1/minimax_h3_latent_upscaler_3d_conv_v1_fp16.safetensors",
                      "mode": "scale by multiplier",
                      "align": 32,
                      "enable_temporal_chunking": true,
                      "force_unload": true,
                      "device": "cuda",
                      "precision": "fp16",
                      "mode.scale": 2.0
                    },
                    "_meta": {
                      "title": "潜变量放大至 1080p (2.07MP)"
                    }
                  },
                  "b15_concat": {
                    "class_type": "LTXVConcatAVLatent",
                    "inputs": {
                      "video_latent": [
                        "b15_upscale",
                        0
                      ],
                      "audio_latent": [
                        "b15_split",
                        1
                      ]
                    }
                  },
                  "b15_regen_lora": {
                    "class_type": "OpenH3RegenLora",
                    "inputs": {
                      "model": [
                        "142",
                        0
                      ],
                      "lora_name": "open_h3_regenerate_2k_lora.safetensors",
                      "curve_name": "sharp_curve_branches.safetensors",
                      "curve_table": "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                      "strength": 1.0,
                      "curve_strength": 0.65,
                      "lora_dtype": "bf16"
                    },
                    "_meta": {
                      "title": "Open-H3 精修 LoRA + Sharp 50层高频锐化曲线"
                    }
                  },
                  "b15_guider": {
                    "class_type": "BasicGuider",
                    "inputs": {
                      "model": [
                        "b15_regen_lora",
                        0
                      ],
                      "conditioning": [
                        "131",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "第二轮条件 · Open-H3 1080p 单视频精修"
                    }
                  },
                  "b15_sampler": {
                    "class_type": "KSamplerSelect",
                    "inputs": {
                      "sampler_name": "euler"
                    },
                    "_meta": {
                      "title": "Open-H3 精修采样器 · Euler"
                    }
                  },
                  "b15_noise": {
                    "class_type": "RandomNoise",
                    "inputs": {
                      "noise_seed": 42
                    }
                  },
                  "b15_schedule": {
                    "class_type": "OpenH3RegenSigmas",
                    "inputs": {
                      "steps": 3,
                      "start_sigma": 0.78
                    },
                    "_meta": {
                      "title": "Open-H3 精修调度 · 3步 / start_sigma=0.78"
                    }
                  },
                  "b15_refine": {
                    "class_type": "SamplerCustomAdvanced",
                    "inputs": {
                      "noise": [
                        "b15_noise",
                        0
                      ],
                      "guider": [
                        "b15_guider",
                        0
                      ],
                      "sampler": [
                        "b15_sampler",
                        0
                      ],
                      "sigmas": [
                        "b15_schedule",
                        0
                      ],
                      "latent_image": [
                        "b15_concat",
                        0
                      ]
                    },
                    "_meta": {
                      "title": "Open-H3 1080p 精修 · 3步 / start_sigma=0.78"
                    }
                  },
                  "944": {
                    "class_type": "LoraLoaderModelOnly",
                    "inputs": {
                      "model": [
                        "943",
                        0
                      ],
                      "lora_name": "pika_h3_flex_fl2va_v1_bf16.safetensors",
                      "strength_model": 1.0
                    },
                    "_meta": {
                      "title": "Pika H3 Flex (CONTINUE) / 1.0"
                    }
                  }
                }
              }
            ],
            "colab": {
              "name": "MiniMax_Pika_OpenH3_2K_Colab.py",
              "gpu": {
                "zh": "A100 40GB / 80GB（推荐，已内置 comfy-kitchen 与 Open-H3 3D 时间步去重补丁）",
                "en": "A100 40GB / 80GB (Includes comfy-kitchen & Open-H3 3D token dedup patch)"
              },
              "secrets": {
                "zh": [
                  [
                    "CF_TUNNEL_TOKEN",
                    "可选，配置后自动启动 Cloudflare HTTP/2 固定域名隧道"
                  ],
                  [
                    "HF_TOKEN",
                    "可选，加速 HuggingFace 权重并发拉取"
                  ],
                  [
                    "EXIT_AFTER_BOOT",
                    "默认 0（常驻自动重连看门狗）；设为 1 启动后释放单元格"
                  ]
                ],
                "en": [
                  [
                    "CF_TUNNEL_TOKEN",
                    "Optional token for persistent Cloudflare HTTP/2 custom domain"
                  ],
                  [
                    "HF_TOKEN",
                    "Optional HuggingFace token for faster downloads"
                  ],
                  [
                    "EXIT_AFTER_BOOT",
                    "Default 0 (watchdog mode); set to 1 to exit cell after boot"
                  ]
                ]
              },
              "content": "# -*- coding: utf-8 -*-\n\"\"\"\nMiniMax H3 官方底模 + Pika Flex LoRA（6步一采） + 英伟达 Open-H3 1080p/2K 精修（3步二采）全流程一体版\n================================================================================\nColab A100 纯视频一键启动脚本（无生图模型、无音频模型）\n--------------------------------------------------------------------------------\n从「二合一_生图加视频_OpenH3精修_Colab.py」抽离：去掉 MOSS-Image 5B 生图全家桶\n（MOSS-Image 5B SFT INT8 ConvRot + Qwen3.5-9B 文本编码器 + FLUX.2 VAE，省去十几 GB\n权重与下载时间），只保留视频一采、二采精修和对应自定义节点。显存更宽松、启动更快。\n\n核心包含：\n1. 【视频一采】MiniMax H3 + Pika Flex 主模型 + Qwen3-VL 32B INT8 ConvRot + 视频/音频 VAE + 写实 LoRA\n2. 【视频二采】NVIDIA Open-H3-Regenerate 1080p/2K 精修栈：\n   - 3D 潜变量放大器 (MinimaxH3LatentUpscaler3D: 0.4MP -> 1080p 2.07MP / 2K 3.69MP)\n   - OpenH3RegenLora (open_h3_regenerate_2k_lora + sharp_curve_branches 50层高频锐化)\n   - OpenH3RegenSigmas (3步 Euler 极速精修，start_sigma=0.78 锁动作防慢放)\n   - 32KB ref2va adaln_t_table HTTP Range 窄带提取（免下载 27.3GB ref2va 底模）\n   - 已内置 regen_core.invert_table 3D 多维时间步去重补丁，兼容 CUT / CONTINUE / MV 原声\n3. 【下载】热门文件走 hf-xet 4 路极速并发；MiniMax H3 冷门分块文件自动切普通 HTTP 直下\n4. 【加速】官方 comfy-kitchen CUDA 算子预检 + Cloudflare 固定隧道 + 自动重连看门狗\n\n需要生图时另跑「二合一」脚本；本脚本只装视频工作流。\n\"\"\"\n\nfrom __future__ import annotations\n\nimport hashlib\nimport json\nimport os\nimport re\nimport shutil\nimport socket\nimport struct\nimport subprocess\nimport sys\nimport time\nimport urllib.request\nfrom concurrent.futures import ThreadPoolExecutor, as_completed\nfrom pathlib import Path\n\nBASE = Path(\"/content\") if Path(\"/content\").exists() else Path.cwd()\nCOMFY = BASE / \"ComfyUI\"\nPORT = 8188\nPUBLIC_URL = os.getenv(\"PUBLIC_URL\", \"\").strip()\n\n# ===== 固定且配套的源码与模型 Git/HF 提交号（完整 40 位，不跟随 main 漂移）=====\nCOMFY_REV = \"b1a247c9cf9dbfda4b2c0a0c1d50950667eeaa0c\"\nKJNODES_REV = \"17195fcfa8a05f601b766a0f09c9733284f47416\"\nUPSCALER_PLUGIN_REV = \"40316cf008b2fd8663263270669eb4da23f89d2c\"\nUPSCALER_MODEL_REV = \"3f941d5d182014dd5c0a5e16330420ee2d4aa0c6\"\nOPENH3_REGEN_PLUGIN_REV = \"9b686c5ffd380e9d1351f9b8beef6d20d703ca3e\"\nOPENH3_REGEN_HF_REV = \"main\"\nKITCHEN_VERSIONS = (\"0.2.39\", \"0.2.38\")\n\n# 32KB ref2va adaln_t_table 提取目标与官方 SHA256 校验值\nREF2VA_ADALN_TABLE_NAME = \"minimax_h3_ref2va_adaln_t_table.safetensors\"\nREF2VA_FULL_NAME = \"minimax_h3_ref2va_pruned_int8_convrot.safetensors\"\nREF2VA_ADALN_SHA256 = \"c02a6c11888297688c1e6278185ea1f947023acfc69f9003bbcdcec9a229a8e7\"\n\nBUCKET_LORAS = []\n\n# ===== MiniMax H3 + Pika Flex 固定模型清单（纯视频）=====\nBASE_MODELS = [\n    # --- 1. MiniMax H3 + Pika Flex 两段式视频资产（A100 满血版：INT8 ConvRot + 写实人物 LoRA）---\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"diffusion_models/minimax_h3_ref2va_pruned_int8_convrot.safetensors\",\n        \"diffusion_models\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"loras/pika_h3_flex_ref2va_v1_bf16.safetensors\",\n        \"loras\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"loras/pika_h3_flex_fl2va_v1_bf16.safetensors\",\n        \"loras\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"text_encoders/qwen3vl_32b_minimax_h3_int8_convrot.safetensors\",\n        \"text_encoders\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"main\",\n        \"vae/minimax_h3_video_vae_int8_convrot.safetensors\",\n        \"vae\",\n    ),\n    (\n        \"Comfy-Org/MiniMax-H3\",\n        \"0543966fbdce5ba05709a8f2031c94bdba629b4a\",\n        \"vae/minimax_h3_audio_vae_fp32.safetensors\",\n        \"vae\",\n    ),\n    (\n        \"fal/MiniMax-H3-Realism-People-LoRA\",\n        \"main\",\n        \"h3-realism-people-t2v-i2v-r2v.safetensors\",\n        \"loras\",\n    ),\n    # --- 2. 英伟达 Open-H3-Regenerate 1080p/2K 二采精修权重 ---\n    (\n        \"Efficient-Large-Model/Open-H3-Regenerate-2K\",\n        OPENH3_REGEN_HF_REV,\n        \"lora/open_h3_regenerate_2k_lora.safetensors\",\n        \"loras\",\n    ),\n    (\n        \"Efficient-Large-Model/Open-H3-Regenerate-2K\",\n        OPENH3_REGEN_HF_REV,\n        \"lora/sharp_curve_branches.safetensors\",\n        \"loras\",\n    ),\n]\n\n# ===== 固定走普通 HTTP 的冷门分块文件白名单（彻底绕开 Xet CAS 重建 72% 卡死与 429 限流）=====\nFORCE_HTTP_FILES = {\n    \"minimax_h3_hybrid_fl2va_ref2va_MiniMax H3-int8.safetensors\",\n}\n\n\ndef get_secret(name: str) -> str:\n    value = os.getenv(name, \"\").strip()\n    if value:\n        return value\n    try:\n        from google.colab import userdata\n        return (userdata.get(name) or \"\").strip()\n    except Exception:\n        return \"\"\n\n\ndef kill_legacy_daemons():\n    \"\"\"彻底清理旧版遗留的 _drama3_bg_boot.py 后台死循环看门狗，防止它在后台 pkill -9 main.py。\"\"\"\n    subprocess.run([\"pkill\", \"-9\", \"-f\", \"_drama3_bg_boot.py\"], check=False)\n    for legacy_file in (BASE / \"_drama3_bg_boot.py\", BASE / \"drama3_boot_daemon.log\"):\n        try:\n            legacy_file.unlink(missing_ok=True)\n        except Exception:\n            pass\n    for marker in BASE.glob(\"*.deps.ok\"):\n        try:\n            marker.unlink(missing_ok=True)\n        except Exception:\n            pass\n\n\ndef run(args, cwd=None, check=True):\n    if isinstance(args, str):\n        print(\"$\", args, flush=True)\n        p = subprocess.run(args, cwd=cwd, shell=True, check=False)\n    else:\n        print(\"$\", \" \".join(map(str, args)), flush=True)\n        p = subprocess.run(list(map(str, args)), cwd=cwd, check=False)\n\n    if check and p.returncode != 0:\n        raise RuntimeError(\"命令失败: \" + (args if isinstance(args, str) else \" \".join(map(str, args))))\n    return p.returncode\n\n\ndef clone_pinned(url: str, path: Path, revision: str):\n    \"\"\"Pin to an exact 40-char commit. Preserve tracked local edits before changing commits.\"\"\"\n    if len(revision) != 40 or any(c not in \"0123456789abcdef\" for c in revision):\n        raise ValueError(f\"必须提供完整40位Git提交号: {revision}\")\n    fresh = not path.exists()\n    if fresh:\n        run([\"git\", \"clone\", \"--filter=blob:none\", \"--depth\", \"1\", \"--no-checkout\", url, str(path)])\n    if not (path / \".git\").is_dir():\n        shutil.rmtree(path, ignore_errors=True)\n        run([\"git\", \"clone\", \"--filter=blob:none\", \"--depth\", \"1\", \"--no-checkout\", url, str(path)])\n        fresh = True\n\n    current = subprocess.run(\n        [\"git\", \"-C\", str(path), \"rev-parse\", \"HEAD\"],\n        text=True, capture_output=True, check=False,\n    ).stdout.strip()\n    if current == revision:\n        ready = subprocess.run(\n            [\"git\", \"-C\", str(path), \"ls-files\"],\n            text=True, capture_output=True, check=False,\n        ).stdout.strip()\n        if ready:\n            print(f\"⏩ 固定版本已就绪：{path.name} @ {revision[:10]}\", flush=True)\n            return\n    elif not fresh:\n        dirty = subprocess.run(\n            [\"git\", \"-C\", str(path), \"diff\", \"--name-only\", \"HEAD\"],\n            text=True, capture_output=True, check=False,\n        ).stdout.strip()\n        if dirty:\n            run([\"git\", \"-C\", str(path), \"stash\", \"push\", \"-m\", \"trinity-before-version-pin\"], check=False)\n\n    run([\"git\", \"-C\", str(path), \"remote\", \"set-url\", \"origin\", url])\n    run([\"git\", \"-C\", str(path), \"fetch\", \"--depth\", \"1\", \"origin\", revision])\n    run([\"git\", \"-C\", str(path), \"checkout\", \"-f\", \"--detach\", revision])\n    print(f\"✅ 固定版本：{path.name} @ {revision[:10]}\", flush=True)\n\n\ndef ensure_cuda():\n    code = (\n        \"import torch;\"\n        \"print('Torch:', torch.__version__);\"\n        \"print('CUDA:', torch.version.cuda);\"\n        \"print('GPU:', torch.cuda.get_device_name(0) if torch.cuda.is_available() else 'NONE');\"\n        \"raise SystemExit(0 if torch.cuda.is_available() else 2)\"\n    )\n    p = subprocess.run([sys.executable, \"-c\", code], text=True, capture_output=True)\n    print(p.stdout, flush=True)\n\n    if p.returncode == 0:\n        return\n\n    print(\"⚠️ 当前 Torch 没有 CUDA，安装官方 cu128...\", flush=True)\n    run([sys.executable, \"-m\", \"pip\", \"uninstall\", \"-y\", \"torch\", \"torchvision\", \"torchaudio\"], check=False)\n    run([\n        sys.executable, \"-m\", \"pip\", \"install\", \"-U\",\n        \"torch\", \"torchvision\", \"torchaudio\",\n        \"--index-url\", \"https://download.pytorch.org/whl/cu128\",\n    ])\n\n\ndef install_if_needed(requirements, req_file=None):\n    from importlib.metadata import PackageNotFoundError, version\n    try:\n        try:\n            from packaging.requirements import Requirement\n        except ImportError:\n            from pip._vendor.packaging.requirements import Requirement\n        ready = True\n        for raw in requirements:\n            raw = raw.strip()\n            if not raw or raw.startswith(\"#\"):\n                continue\n            req = Requirement(raw.split(\" #\", 1)[0].strip())\n            if req.marker and not req.marker.evaluate():\n                continue\n            if req.url or req.extras:\n                ready = False\n                break\n            try:\n                installed = version(req.name)\n            except PackageNotFoundError:\n                ready = False\n                break\n            if req.specifier and not req.specifier.contains(installed, prereleases=True):\n                ready = False\n                break\n        if ready:\n            print(f\"⏩ 依赖版本已满足: {req_file or '基础依赖'}\", flush=True)\n            return\n    except Exception:\n        pass\n    args = [sys.executable, \"-m\", \"pip\", \"install\", \"-q\", \"--prefer-binary\", \"--disable-pip-version-check\"]\n    args += [\"-r\", str(req_file)] if req_file else list(requirements)\n    run(args)\n\n\ndef install_base_dependencies():\n    install_if_needed([\n        \"huggingface_hub<2.0.0\",\n        \"hf-xet\",\n        \"transformers>=4.45.0\",\n        \"safetensors>=0.4.3\",\n        \"tokenizers>=0.19.0\",\n        \"triton\",\n        \"einops\",\n        \"typing_extensions\",\n        \"wheel\",\n        \"setuptools\",\n    ])\n\n\ndef install_comfy_requirements():\n    req = COMFY / \"requirements.txt\"\n    if not req.exists():\n        raise RuntimeError(\"ComfyUI requirements.txt 不存在\")\n\n    # 仅跳过 torch 家族与 comfy-kitchen，完整保留 comfyui-workflow-templates 等前端包，消除启动日志 ERROR\n    skip = {\n        \"torch\",\n        \"torchvision\",\n        \"torchaudio\",\n        \"triton\",\n        \"comfy-kitchen\",\n    }\n    kept = []\n\n    for raw in req.read_text(encoding=\"utf-8\").splitlines():\n        s = raw.strip()\n        if not s or s.startswith(\"#\"):\n            kept.append(raw)\n            continue\n\n        name = (\n            s.split(\"=\", 1)[0]\n            .split(\"<\", 1)[0]\n            .split(\">\", 1)[0]\n            .split(\"[\", 1)[0]\n            .strip()\n            .lower()\n            .replace(\"_\", \"-\")\n        )\n\n        if name in skip:\n            print(\"⏩ 跳过 ComfyUI requirements:\", s)\n        else:\n            kept.append(raw)\n\n    tmp = BASE / \"comfy_requirements_no_torch.txt\"\n    tmp.write_text(\"\\n\".join(kept) + \"\\n\", encoding=\"utf-8\")\n    install_if_needed(kept, tmp)\n\n\ndef ensure_vsa_kitchen() -> str:\n    \"\"\"优先安装官方预编译 comfy-kitchen 0.2.39（兼容 0.2.38）。\"\"\"\n    from importlib.metadata import version\n    try:\n        cur = version(\"comfy-kitchen\")\n        if cur in KITCHEN_VERSIONS:\n            print(f\"⏩ 官方 comfy-kitchen {cur} 已安装\", flush=True)\n            return cur\n    except Exception:\n        pass\n\n    for ver in KITCHEN_VERSIONS:\n        print(f\"\\n⚡ 安装官方预编译 comfy-kitchen {ver}（不编译、不更新 Torch）\", flush=True)\n        rc = run([\n            sys.executable, \"-m\", \"pip\", \"install\",\n            \"--index-url\", \"https://pypi.org/simple\",\n            \"--only-binary=:all:\", \"--no-deps\", \"--force-reinstall\",\n            \"--no-cache-dir\", f\"comfy-kitchen=={ver}\",\n        ], check=False)\n        if rc == 0:\n            return ver\n    raise RuntimeError(\"comfy-kitchen 官方预编译包安装失败\")\n\n\ndef verify_comfy_kitchen():\n    \"\"\"在新进程中核对版本，并实际运行 CUDA 反量化与 INT8 Attention 算子。\"\"\"\n    code = r\"\"\"\nimport sys\nimport torch\nimport comfy_kitchen as ck\nfrom importlib.metadata import version\n\nv = version(\"comfy-kitchen\")\nassert v in (\"0.2.38\", \"0.2.39\"), f\"安装版本错误：{v}\"\nassert torch.cuda.is_available(), \"没有可用 CUDA GPU\"\nprops = torch.cuda.get_device_properties(0)\nprint(\"Python:\", sys.executable)\nprint(\"Kitchen:\", v, ck.__file__)\nprint(\"Torch:\", torch.__version__, \"CUDA:\", torch.version.cuda)\nprint(\"GPU:\", props.name, \"VRAM GiB:\", round(props.total_memory / 1024**3, 2),\n      \"SM:\", torch.cuda.get_device_capability(0))\nassert ck.list_backends().get(\"cuda\", {}).get(\"available\"), \"CUDA backend 不可用\"\n\nx = torch.randn(64, 128, device=\"cuda\", dtype=torch.bfloat16)\nscale = (x.abs().max().float() / (448 * 6))\nwith ck.use_backend(\"eager\"):\n    q, blocks = ck.quantize_nvfp4(x, scale)\n    expected = ck.dequantize_nvfp4(q, scale, blocks, output_type=torch.float16)\nwith ck.use_backend(\"cuda\"):\n    actual = ck.dequantize_nvfp4(q, scale, blocks, output_type=torch.float16)\ntorch.cuda.synchronize()\nassert actual.shape == expected.shape\nassert torch.isfinite(actual).all().item(), \"反量化输出含非有限值\"\nassert torch.allclose(actual, expected, rtol=0.01, atol=0.01), \"CUDA 反量化结果异常\"\nprint(\"CUDA_NVFP4_DEQUANT_OK：实际反量化运行通过\")\nassert ck.int8_attention_is_available(), \"Kitchen INT8 Attention 在当前设备不可用\"\nprint(\"KITCHEN_ATTENTION_AVAILABLE\")\n\"\"\"\n    result = subprocess.run(\n        [sys.executable, \"-c\", code], cwd=str(COMFY),\n        env=os.environ.copy(), text=True, capture_output=True,\n    )\n    if result.stdout:\n        print(result.stdout, flush=True)\n    if result.returncode:\n        if result.stderr:\n            print(result.stderr, flush=True)\n        raise RuntimeError(\"官方 Kitchen 的 GPU 实测未通过；停止启动，请发送上方日志。\")\n\n\ndef verify_all_core_modules():\n    \"\"\"预检 H3 quant_ops、文本编码器与自定义节点核心模块。\"\"\"\n    code = (\n        \"import sys;\"\n        f\"sys.path.insert(0, {str(COMFY)!r});\"\n        \"import comfy.quant_ops;\"\n        \"import comfy.model_prefetch;\"\n        \"import comfy.text_encoders.llama;\"\n        \"from comfy.text_encoders.qwen35 import GatedAttention, GatedDeltaNet, LinearKV, Qwen35Transformer, Qwen35TransformerBlock;\"\n        \"from comfy_kitchen.int8_decode import Int8DecodeCache;\"\n        \"import comfy_kitchen as ck;\"\n        \"print('COMFY_H3_OPENH3_OK');\"\n        \"print(ck.list_backends())\"\n    )\n    p = subprocess.run(\n        [sys.executable, \"-c\", code],\n        cwd=str(COMFY),\n        env=os.environ.copy(),\n        text=True,\n        capture_output=True,\n    )\n    if p.stdout:\n        print(p.stdout, flush=True)\n    if p.returncode != 0 or \"COMFY_H3_OPENH3_OK\" not in p.stdout:\n        if p.stderr:\n            print(p.stderr[-12000:], flush=True)\n        raise RuntimeError(\"ComfyUI H3 / Open-H3 模块预检失败，请查看上方错误日志。\")\n    print(\"✅ MiniMax H3 + Pika Flex + Open-H3 精修核心模块全部兼容就绪\", flush=True)\n\n\ndef patch_openh3_custom_nodes():\n    \"\"\"给 ComfyUI-Open-H3-Regenerate 打 3D 多维时间步去重补丁，\n    使其在 CUT (MiniMaxH3ReferenceToVideo)、CONTINUE (MiniMaxH3AddGuide) 与 MV 原声锁死下\n    支持 [B, num_tokens, 8] 逐 Token AdaLN 输入并极速去重。\n    \"\"\"\n    regen_core_py = COMFY / \"custom_nodes\" / \"ComfyUI-Open-H3-Regenerate\" / \"regen_core.py\"\n    if not regen_core_py.exists():\n        return\n    txt = regen_core_py.read_text(encoding=\"utf-8\")\n    if \"torch.unique(flat\" in txt or \"def invert_table(table, coords):\" not in txt:\n        return\n    old_fn = (\n        \"def invert_table(table, coords):\\n\"\n        \"    \\\"\\\"\\\"Model time t of each row of `coords`, points on the piecewise-linear curve `table` (as ComfyUI's curve-form\\n\"\n        \"    H3 computes its AdaLN input).  Returns (t, max distance from the curve).\\\"\\\"\\\"\\n\"\n        \"    table = table.to(coords.device, torch.float32)\\n\"\n        \"    coords = coords.to(torch.float32)\\n\"\n        \"    p0, d = table[:-1], table[1:] - table[:-1]                       # segments [S, C]\\n\"\n        \"    rel = coords[:, None, :] - p0[None]                               # [M, S, C]\\n\"\n        \"    s = ((rel * d[None]).sum(-1) / (d * d).sum(-1).clamp(min=1e-20)[None]).clamp(0.0, 1.0)\\n\"\n        \"    dist = (rel - s[..., None] * d[None]).norm(dim=-1)               # [M, S]\\n\"\n        \"    best = dist.argmin(dim=1)\\n\"\n        \"    rows = torch.arange(coords.shape[0], device=coords.device)\\n\"\n        \"    t = (best.to(torch.float32) + s[rows, best]) / (table.shape[0] - 1)\\n\"\n        \"    return t, float(dist[rows, best].max()) if coords.shape[0] else 0.0\"\n    )\n    new_fn = (\n        \"def invert_table(table, coords):\\n\"\n        \"    \\\"\\\"\\\"Model time t of each row of `coords` (supports 2D [M, C] and 3D [B, M, C] with deduplication).\\\"\\\"\\\"\\n\"\n        \"    table = table.to(coords.device, torch.float32)\\n\"\n        \"    orig_shape = coords.shape[:-1]\\n\"\n        \"    flat = coords.to(torch.float32).reshape(-1, coords.shape[-1])\\n\"\n        \"    if flat.shape[0] == 0:\\n\"\n        \"        return torch.empty(orig_shape, device=coords.device, dtype=torch.float32), 0.0\\n\"\n        \"    uniq, inv = torch.unique(flat, dim=0, return_inverse=True)\\n\"\n        \"    p0, d = table[:-1], table[1:] - table[:-1]\\n\"\n        \"    d_norm = (d * d).sum(-1).clamp(min=1e-20)[None]\\n\"\n        \"    t_chunks, max_err = [], 0.0\\n\"\n        \"    for start in range(0, uniq.shape[0], 2048):\\n\"\n        \"        u = uniq[start:start + 2048]\\n\"\n        \"        rel = u[:, None, :] - p0[None]\\n\"\n        \"        s = ((rel * d[None]).sum(-1) / d_norm).clamp(0.0, 1.0)\\n\"\n        \"        dist = (rel - s[..., None] * d[None]).norm(dim=-1)\\n\"\n        \"        best = dist.argmin(dim=1)\\n\"\n        \"        rows = torch.arange(u.shape[0], device=coords.device)\\n\"\n        \"        t_u = (best.to(torch.float32) + s[rows, best]) / (table.shape[0] - 1)\\n\"\n        \"        err_u = float(dist[rows, best].max())\\n\"\n        \"        if err_u > max_err:\\n\"\n        \"            max_err = err_u\\n\"\n        \"        t_chunks.append(t_u)\\n\"\n        \"    t = torch.cat(t_chunks, dim=0)[inv].reshape(orig_shape)\\n\"\n        \"    return t, max_err\"\n    )\n    if old_fn in txt:\n        regen_core_py.write_text(txt.replace(old_fn, new_fn), encoding=\"utf-8\")\n        print(\"✅ 已修补 ComfyUI-Open-H3-Regenerate：支持 3D 逐 Token 时间步去重 + Sharp 50 曲线\", flush=True)\n\n\ndef deploy_workflows():\n    \"\"\"部署 H3 01_两次采样.json 到 ComfyUI 工作流目录（纯视频版）。\"\"\"\n    wf_dir = COMFY / \"user\" / \"default\" / \"workflows\"\n    wf_dir.mkdir(parents=True, exist_ok=True)\n\n    # H3 01_两次采样.json（如本地存在）\n    root = Path(__file__).resolve().parent if globals().get(\"__file__\") else Path.cwd()\n    h3_wf = root / \"01_两次采样.json\"\n    if h3_wf.is_file():\n        h3_dest = wf_dir / \"H3_MiniMax H3\"\n        h3_dest.mkdir(parents=True, exist_ok=True)\n        shutil.copy2(h3_wf, h3_dest / h3_wf.name)\n        print(f\"✅ H3 工作流已就位：{h3_dest / h3_wf.name}\", flush=True)\n\n\ndef install_custom_nodes():\n    custom = COMFY / \"custom_nodes\"\n    custom.mkdir(parents=True, exist_ok=True)\n\n    # 1. KJNodes\n    kj_path = custom / \"ComfyUI-KJNodes\"\n    clone_pinned(\"https://github.com/kijai/ComfyUI-KJNodes.git\", kj_path, KJNODES_REV)\n    req = kj_path / \"requirements.txt\"\n    if req.exists():\n        lines = [\n            raw for raw in req.read_text(encoding=\"utf-8\").splitlines()\n            if not raw.strip().lower().startswith(\"torch\")\n        ]\n        if any(x.strip() and not x.strip().startswith(\"#\") for x in lines):\n            tmp = BASE / f\"req_{kj_path.name}_no_torch.txt\"\n            tmp.write_text(\"\\n\".join(lines) + \"\\n\", encoding=\"utf-8\")\n            install_if_needed(lines, tmp)\n\n    # 2. Minimax H3 3D Latent Upscaler (两轮采样必需)\n    upscaler_target = custom / \"Comfyui_Minimax_h3_latent_Upscaler\"\n    clone_pinned(\n        \"https://github.com/LBH-123-AI/Comfyui_Minimax_h3_latent_Upscaler.git\",\n        upscaler_target,\n        UPSCALER_PLUGIN_REV,\n    )\n\n    # 3. NVIDIA Open-H3-Regenerate 1080p/2K 精修节点插件\n    regen_target = custom / \"ComfyUI-Open-H3-Regenerate\"\n    clone_pinned(\n        \"https://github.com/rdh9616/ComfyUI-Open-H3-Regenerate.git\",\n        regen_target,\n        OPENH3_REGEN_PLUGIN_REV,\n    )\n    patch_openh3_custom_nodes()\n\n    install_if_needed([\"einops\", \"safetensors\", \"typing_extensions\"])\n    deploy_workflows()\n\n\n_EXPECTED_SIZE_CACHE = {}\n\n\ndef expected_size(repo, rev, filename):\n    key = (repo, rev, filename)\n    if key in _EXPECTED_SIZE_CACHE:\n        return _EXPECTED_SIZE_CACHE[key]\n\n    size = None\n    try:\n        from huggingface_hub import HfApi\n        info = HfApi().get_paths_info(\n            repo_id=repo, paths=[filename], revision=rev,\n            token=get_secret(\"HF_TOKEN\") or None,\n        )\n        if info:\n            size = getattr(info[0], \"size\", None)\n    except Exception as exc:\n        print(f\"ℹ️ 取不到 {filename} 的声明体积，跳过体积校验（{type(exc).__name__}）\", flush=True)\n\n    _EXPECTED_SIZE_CACHE[key] = size\n    return size\n\n\ndef download_one(item):\n    from huggingface_hub import hf_hub_download\n\n    repo, rev, filename, category = item\n    dst_dir = COMFY / \"models\" / category\n    dst_dir.mkdir(parents=True, exist_ok=True)\n\n    target = dst_dir / Path(filename).name\n    expect = expected_size(repo, rev, filename)\n\n    if target.is_file() and target.stat().st_size > 1024 * 1024:\n        got = target.stat().st_size\n        if expect is None or got == expect:\n            print(f\"⏩ 已存在: {target.name} ({got / 1024 ** 3:.2f} GB)\", flush=True)\n            return target\n        print(\n            f\"⚠️ 体积不符，删除重下: {target.name}\\n\"\n            f\"   本地 {got} 字节 / 应为 {expect} 字节\",\n            flush=True,\n        )\n        try:\n            target.unlink()\n        except Exception:\n            pass\n\n    print(f\"⬇️ 下载: {target.name}\", flush=True)\n\n    downloaded = Path(\n        hf_hub_download(\n            repo_id=repo,\n            revision=rev,\n            filename=filename,\n            local_dir=str(dst_dir),\n            token=get_secret(\"HF_TOKEN\") or None,\n        )\n    )\n\n    if downloaded.resolve() != target.resolve():\n        if target.exists() or target.is_symlink():\n            target.unlink()\n        try:\n            target.symlink_to(downloaded)\n        except Exception:\n            shutil.copy2(downloaded, target)\n\n    if not target.exists():\n        raise RuntimeError(f\"模型下载后未找到: {target}\")\n\n    got = target.stat().st_size\n    if expect is not None and got != expect:\n        raise RuntimeError(\n            f\"{target.name} 下载后体积不符：{got} 字节 / 应为 {expect} 字节。\"\n            \"文件不完整，请重跑本脚本（已完成的文件会自动跳过）。\"\n        )\n\n    print(f\"✅ {target.name} ({got / 1024 ** 3:.2f} GB)\", flush=True)\n    return target\n\n\ndef _disable_hf_xet_runtime():\n    \"\"\"冷门分块 / 429 兜底：当前进程立即关闭 hf-xet，切回普通 HTTP 直下。\"\"\"\n    os.environ[\"HF_HUB_DISABLE_XET\"] = \"1\"\n    os.environ.pop(\"HF_XET_HIGH_PERFORMANCE\", None)\n    try:\n        import huggingface_hub.constants as hf_consts\n        hf_consts.HF_HUB_DISABLE_XET = True\n    except Exception:\n        pass\n    try:\n        import huggingface_hub.utils._runtime as hf_runtime\n        hf_runtime._is_xet_available = False\n        hf_runtime.is_xet_available = lambda: False\n    except Exception:\n        pass\n    try:\n        import huggingface_hub.file_download as hf_fd\n        hf_fd.is_xet_available = lambda: False\n    except Exception:\n        pass\n\n\ndef download_bucket_lora(url: str, filename: str):\n    dst_dir = COMFY / \"models\" / \"loras\"\n    dst_dir.mkdir(parents=True, exist_ok=True)\n    target = dst_dir / filename\n\n    if target.is_file() and target.stat().st_size > 1024 * 1024:\n        size_gb = target.stat().st_size / (1024 ** 3)\n        print(f\"⏩ 已存在: {target.name} ({size_gb:.2f} GB)\", flush=True)\n        return target\n\n    token = get_secret(\"HF_TOKEN\")\n    if not token:\n        print(\n            f\"⚠️ 跳过私有 bucket LoRA（未配置 HF_TOKEN）: {filename}\\n\"\n            f\"   需要时请设置 HF_TOKEN 后重跑本脚本。\",\n            flush=True,\n        )\n        return None\n\n    print(f\"⬇️ 下载(私有 bucket): {filename}\", flush=True)\n    req = urllib.request.Request(url, headers={\"Authorization\": f\"Bearer {token}\"})\n    partial = target.with_suffix(target.suffix + \".part\")\n    try:\n        with urllib.request.urlopen(req, timeout=600) as resp, open(partial, \"wb\") as fp:\n            shutil.copyfileobj(resp, fp, length=1024 * 1024)\n            expected = resp.headers.get(\"Content-Length\")\n        if expected and partial.stat().st_size != int(expected):\n            raise RuntimeError(\"下载长度与服务器声明不符\")\n        if partial.stat().st_size <= 1024 * 1024:\n            raise RuntimeError(\"下载内容异常偏小\")\n        partial.replace(target)\n    except Exception as exc:\n        partial.unlink(missing_ok=True)\n        print(\n            f\"⚠️ 私有 bucket LoRA 下载失败: {filename}\\n\"\n            f\"   {type(exc).__name__}: {exc}\\n\"\n            f\"   （不影响其他模型，继续启动）\",\n            flush=True,\n        )\n        return None\n\n    print(f\"✅ {target.name}\", flush=True)\n    return target\n\n\ndef download_latent_upscaler():\n    from huggingface_hub import hf_hub_download\n    dest = COMFY / \"models\" / \"latent_upscale_models\"\n    dest.mkdir(parents=True, exist_ok=True)\n    folder = \"minimax_h3_latent_upscaler_3d_conv_v1\"\n    for filename in (\"config.json\", \"minimax_h3_latent_upscaler_3d_conv_v1_fp16.safetensors\"):\n        hf_hub_download(\n            repo_id=\"LBH-123-AI/Minimax_h3_latent_Upscaler\",\n            revision=UPSCALER_MODEL_REV,\n            filename=f\"{folder}/{filename}\",\n            local_dir=str(dest),\n            token=get_secret(\"HF_TOKEN\") or None,\n        )\n    print(\"✅ 3D 潜变量放大模型已就绪\", flush=True)\n\n\ndef download_ref2va_adaln_table():\n    \"\"\"通过 HTTP Range 仅读取 ref2va 前 200KB，精准切片生成 32KB adaln_t_table safetensors，\n    免去下载 27.3GB 的 minimax_h3_ref2va_pruned_int8_convrot.safetensors 全量底模！\n    \"\"\"\n    diff_dir = COMFY / \"models\" / \"diffusion_models\"\n    diff_dir.mkdir(parents=True, exist_ok=True)\n    target_path = diff_dir / REF2VA_ADALN_TABLE_NAME\n    alias_path = diff_dir / REF2VA_FULL_NAME\n\n    def _valid_table_file(p: Path) -> bool:\n        if not p.is_file() or p.stat().st_size < 32800:\n            return False\n        try:\n            with p.open(\"rb\") as f:\n                hlen = struct.unpack(\"<Q\", f.read(8))[0]\n                hdr = json.loads(f.read(hlen).decode(\"utf-8\"))\n                info = hdr.get(\"adaln_t_table\")\n                if not info or info.get(\"shape\") != [1025, 8]:\n                    return False\n                start, end = info[\"data_offsets\"]\n                f.seek(8 + hlen + start)\n                raw = f.read(end - start)\n                return hashlib.sha256(raw).hexdigest() == REF2VA_ADALN_SHA256\n        except Exception:\n            return False\n\n    if not _valid_table_file(target_path):\n        url = (\n            \"https://huggingface.co/Comfy-Org/MiniMax-H3/resolve/main/\"\n            \"diffusion_models/minimax_h3_ref2va_pruned_int8_convrot.safetensors\"\n        )\n        print(\"⚡ 正在通过 HTTP Range (前 200KB) 提取 32KB ref2va adaln_t_table（免下载 27.3GB 底模）...\", flush=True)\n        headers = {\"Range\": \"bytes=0-199999\", \"User-Agent\": \"Mozilla/5.0\"}\n        token = get_secret(\"HF_TOKEN\")\n        if token:\n            headers[\"Authorization\"] = f\"Bearer {token}\"\n        req = urllib.request.Request(url, headers=headers)\n        with urllib.request.urlopen(req, timeout=30) as resp:\n            chunk = resp.read()\n        hlen = struct.unpack(\"<Q\", chunk[:8])[0]\n        hdr = json.loads(chunk[8 : 8 + hlen].decode(\"utf-8\"))\n        info = hdr[\"adaln_t_table\"]\n        start, end = info[\"data_offsets\"]\n        raw_tensor = chunk[8 + hlen + start : 8 + hlen + end]\n        digest = hashlib.sha256(raw_tensor).hexdigest()\n        if digest != REF2VA_ADALN_SHA256:\n            raise RuntimeError(f\"adaln_t_table SHA256 校验失败: {digest}\")\n\n        new_hdr = {\n            \"__metadata__\": {\"format\": \"pt\", \"source\": \"Comfy-Org/MiniMax-H3/ref2va_adaln_t_table\"},\n            \"adaln_t_table\": {\n                \"dtype\": info[\"dtype\"],\n                \"shape\": info[\"shape\"],\n                \"data_offsets\": [0, len(raw_tensor)],\n            },\n        }\n        new_hdr_bytes = json.dumps(new_hdr, separators=(\",\", \":\")).encode(\"utf-8\")\n        pad = (8 - (len(new_hdr_bytes) % 8)) % 8\n        if pad:\n            new_hdr_bytes += b\" \" * pad\n        target_path.write_bytes(struct.pack(\"<Q\", len(new_hdr_bytes)) + new_hdr_bytes + raw_tensor)\n\n    # 若未落盘 27.3GB 全量 ref2va，则把 minimax_h3_ref2va_pruned_int8_convrot.safetensors 指向该 32KB 表文件\n    if not alias_path.exists():\n        try:\n            alias_path.symlink_to(target_path.name)\n        except Exception:\n            shutil.copy2(target_path, alias_path)\n    print(f\"✅ Open-H3 50层锐化曲线参考表已就绪: {target_path.name} (32.8 KB)\", flush=True)\n\n\ndef _download_hf_models(models_list):\n    http_items = [it for it in models_list if Path(it[2]).name in FORCE_HTTP_FILES]\n    xet_items = [it for it in models_list if Path(it[2]).name not in FORCE_HTTP_FILES]\n\n    print(\"\\n⬇️ 分通道下载/检查 MiniMax H3 + Pika Flex + Open-H3 精修 全部视频模型...\", flush=True)\n    print(\n        f\"⚡ 通道分配：{len(xet_items)} 个热门文件走 hf-xet（4路极速） | \"\n        f\"{len(http_items)} 个冷门分块文件走普通 HTTP（避开 429 与 72% 卡死）\",\n        flush=True,\n    )\n    for it in http_items:\n        print(f\"      HTTP 直下 → {Path(it[2]).name}\", flush=True)\n\n    failed = []\n    if xet_items:\n        with ThreadPoolExecutor(max_workers=4) as pool:\n            future_map = {pool.submit(download_one, item): item for item in xet_items}\n            for f in as_completed(future_map):\n                item = future_map[f]\n                try:\n                    f.result()\n                except Exception as exc:\n                    print(\n                        f\"⚠️ Xet 下载失败，稍后并入 HTTP 兜底: {Path(item[2]).name}\\n\"\n                        f\"   {type(exc).__name__}: {exc}\",\n                        flush=True,\n                    )\n                    failed.append(item)\n\n    todo = http_items + failed\n    if not todo:\n        return\n\n    print(\n        f\"\\n🛡️ 关闭 hf-xet，{len(todo)} 个文件改用普通 HTTP 直下（串行稳跑，不卡 72% / 429）...\",\n        flush=True,\n    )\n    _disable_hf_xet_runtime()\n\n    for item in todo:\n        name = Path(item[2]).name\n        last_exc = None\n        for attempt, wait_s in enumerate((0, 12, 25, 45), start=1):\n            if wait_s:\n                print(f\"⏳ {name}：等待 {wait_s}s 后重试 ({attempt}/4)...\", flush=True)\n                time.sleep(wait_s)\n            try:\n                download_one(item)\n                last_exc = None\n                break\n            except Exception as exc:\n                last_exc = exc\n                print(\n                    f\"⚠️ HTTP 重试 {attempt}/4 失败: {name}: \"\n                    f\"{type(exc).__name__}: {exc}\",\n                    flush=True,\n                )\n        if last_exc is not None:\n            raise RuntimeError(\n                f\"{name} 下载连续失败。已保留缓存，稍后重跑脚本会继续检查/续传。\"\n            ) from last_exc\n\n\ndef download_all_models(models_list):\n    with ThreadPoolExecutor(max_workers=3) as pool:\n        bucket_futures = [\n            pool.submit(download_bucket_lora, url, name)\n            for url, name in BUCKET_LORAS\n        ]\n        upscaler_future = pool.submit(download_latent_upscaler)\n        _download_hf_models(models_list)\n        upscaler_future.result()\n        for future in bucket_futures:\n            future.result()\n    # 全部下载线程结束后统一清理各目录 .cache，避免并发下载中途误删同目录其他文件的临时缓存\n    models_root = COMFY / \"models\"\n    if models_root.is_dir():\n        for cache_dir in models_root.rglob(\".cache\"):\n            if cache_dir.is_dir():\n                shutil.rmtree(cache_dir, ignore_errors=True)\n\n\ndef wait_port(proc, log_path: Path, timeout=180):\n    start = time.time()\n    print(f\"⏳ 等待 ComfyUI :{PORT}\", end=\"\", flush=True)\n\n    while time.time() - start < timeout:\n        if proc.poll() is not None:\n            print(\"\\n❌ ComfyUI 提前退出\", flush=True)\n            if log_path.exists():\n                print(log_path.read_text(encoding=\"utf-8\", errors=\"ignore\")[-10000:])\n            raise RuntimeError(f\"ComfyUI exit={proc.returncode}\")\n\n        try:\n            with socket.create_connection((\"127.0.0.1\", PORT), timeout=1):\n                print(f\" ✅ ({int(time.time() - start)}s)\", flush=True)\n                return\n        except OSError:\n            print(\".\", end=\"\", flush=True)\n            time.sleep(1)\n\n    if log_path.exists():\n        print(log_path.read_text(encoding=\"utf-8\", errors=\"ignore\")[-10000:])\n    raise RuntimeError(\"ComfyUI 启动超时\")\n\n\ndef verify_all_nodes():\n    with urllib.request.urlopen(f\"http://127.0.0.1:{PORT}/object_info\", timeout=30) as response:\n        info = json.load(response)\n\n    required = [\n        # 1. 通用 + H3 视频核心节点\n        \"UNETLoader\",\n        \"CLIPLoader\",\n        \"VAELoader\",\n        \"LoraLoaderModelOnly\",\n        \"MiniMaxH3ReferenceToVideo\",\n        \"MiniMaxH3AddGuide\",\n        \"MiniMaxH3ImageToVideo\",\n        \"LoadImage\",\n        \"PrimitiveStringMultiline\",\n        \"MiniMaxH3SigmaShift\",\n        \"RandomNoise\",\n        \"BasicGuider\",\n        \"KSamplerSelect\",\n        \"BasicScheduler\",\n        \"SamplerCustomAdvanced\",\n        \"VAEDecode\",\n        \"VAEDecodeAudio\",\n        \"CreateVideo\",\n        \"SaveVideo\",\n        \"CLIPTextEncode\",\n        \"ConditioningZeroOut\",\n        \"EmptyLatentImage\",\n        \"KSampler\",\n        \"SaveImage\",\n        # 2. H3 两轮采样 3D 放大节点\n        \"MinimaxH3LatentUpscaler3D\",\n        \"LTXVSeparateAVLatent\",\n        \"LTXVConcatAVLatent\",\n        # 3. 英伟达 Open-H3-Regenerate 1080p/2K 二采精修核心节点\n        \"OpenH3RegenLora\",\n        \"OpenH3RegenSigmas\",\n        \"OpenH3RegenUpscale\",\n    ]\n\n    missing = [name for name in required if name not in info]\n    if missing:\n        raise RuntimeError(\"缺少节点: \" + \", \".join(missing) + \"。请核对上方固定提交与插件导入日志。\")\n\n    guide = info[\"MiniMaxH3AddGuide\"].get(\"input\", {})\n    guide_inputs = set(guide.get(\"required\", {})) | set(guide.get(\"optional\", {}))\n    expected = {\"positive\", \"latent\", \"frame_idx\", \"image\", \"vae\", \"audio_vae\"}\n    if not expected <= guide_inputs:\n        raise RuntimeError(\n            \"MiniMaxH3AddGuide 接口不兼容，缺少：\" + \", \".join(sorted(expected - guide_inputs))\n        )\n    print(f\"✅ MiniMax H3 + Pika Flex + Open-H3 1080p/2K 精修 全部 {len(required)} 个核心节点校验通过！\", flush=True)\n\n\ndef launch_tunnel():\n    binary = shutil.which(\"cloudflared\")\n    if not binary:\n        local = BASE / \"cloudflared\"\n        if not local.is_file() or local.stat().st_size < 1024 * 1024:\n            partial = local.with_suffix(\".part\")\n            url = \"https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64\"\n            rc = subprocess.run(\n                [\"curl\", \"-fL\", \"--retry\", \"3\", \"--connect-timeout\", \"15\", \"-o\", str(partial), url]\n            ).returncode\n            if rc != 0:\n                urllib.request.urlretrieve(url, str(partial))\n            partial.replace(local)\n        local.chmod(0o755)\n        binary = str(local)\n\n    cf_log_path = BASE / \"trinity_cloudflared.log\"\n    cf_log = open(cf_log_path, \"w\", encoding=\"utf-8\")\n    token = get_secret(\"CF_TUNNEL_TOKEN\")\n    if token:\n        cmd = [binary, \"tunnel\", \"--protocol\", \"http2\", \"run\", \"--token\", token]\n    else:\n        cmd = [binary, \"tunnel\", \"--protocol\", \"http2\", \"--url\", f\"http://127.0.0.1:{PORT}\"]\n    cf_proc = subprocess.Popen(cmd, stdout=cf_log, stderr=subprocess.STDOUT, start_new_session=True)\n    public_url = PUBLIC_URL\n    url_pattern = re.compile(r\"https://[a-zA-Z0-9-]+\\.trycloudflare\\.com\")\n    deadline = time.time() + 35\n    while time.time() < deadline:\n        if cf_proc.poll() is not None:\n            break\n        if cf_log_path.exists():\n            txt = cf_log_path.read_text(encoding=\"utf-8\", errors=\"ignore\")\n            if not token:\n                m = url_pattern.search(txt)\n                if m:\n                    public_url = m.group(0)\n                    break\n            elif \"Registered tunnel connection\" in txt:\n                break\n        time.sleep(1)\n    return public_url or None\n\n\ndef main():\n    if sys.platform != \"linux\":\n        raise RuntimeError(\"这个启动脚本是给 Colab/Linux NVIDIA GPU 环境使用的\")\n\n    total_start = time.time()\n    boot_id = f\"trinity_a100_{int(total_start)}\"\n\n    # 第一时间清理旧版遗留的后台看门狗进程\n    kill_legacy_daemons()\n\n    _hf_token = get_secret(\"HF_TOKEN\")\n    if _hf_token:\n        os.environ[\"HF_TOKEN\"] = _hf_token\n\n    FORCE_HTTP = (\n        os.getenv(\"REF2VA_FORCE_HTTP\", \"0\").strip() == \"1\"\n        or os.getenv(\"DRAMA3_FORCE_HTTP\", \"0\").strip() == \"1\"\n    )\n    if FORCE_HTTP:\n        _disable_hf_xet_runtime()\n    else:\n        os.environ[\"HF_XET_CHUNK_CACHE_SIZE_BYTES\"] = \"0\"\n        os.environ[\"HF_XET_HIGH_PERFORMANCE\"] = \"1\"\n        os.environ.pop(\"HF_HUB_DISABLE_XET\", None)\n\n    os.environ[\"PYTORCH_CUDA_ALLOC_CONF\"] = \"expandable_segments:True\"\n    os.environ[\"CUDA_MODULE_LOADING\"] = \"LAZY\"\n\n    if _hf_token:\n        print(\"🔑 HF_TOKEN 已加载\", flush=True)\n    else:\n        print(\n            \"ℹ️ 未配置 HF_TOKEN，直接匿名拉取公开 HuggingFace 模型权重。\",\n            flush=True,\n        )\n\n    models_list = list(BASE_MODELS)\n\n    print(\"=\" * 84, flush=True)\n    print(\"🚀 MiniMax H3 + Pika Flex（视频一采） + Open-H3 1080p/2K（精修二采）纯视频一键启动\", flush=True)\n    print(\n        f\"固定版本：ComfyUI @ {COMFY_REV[:10]} | OpenH3-Regen @ {OPENH3_REGEN_PLUGIN_REV[:10]} | comfy-kitchen {KITCHEN_VERSIONS[0]}\",\n        flush=True,\n    )\n    print(\"二采精修：OpenH3RegenLora (Refiner + LightX2V Turbo + Sharp 50曲线) + OpenH3RegenSigmas (3步 Euler, start_sigma=0.78)\", flush=True)\n    print(\"下载通道：热门文件走 hf-xet 4路极速 ｜ MiniMax H3 走 HTTP 直下（防 429/72%卡死）\", flush=True)\n    print(\"=\" * 84, flush=True)\n\n    print(\"\\n[1/8] 本地 SSD 模式：不挂载 Google Drive（避免网盘 I/O 拖慢下载与 mmap）\", flush=True)\n    print(\"模型保存在 /content/ComfyUI/models，输出保存在 /content/ComfyUI/output_local\", flush=True)\n\n    t = time.time()\n    print(\"\\n[2/8] 检出固定 ComfyUI 版本（原生支持 H3）\", flush=True)\n    clone_pinned(\"https://github.com/Comfy-Org/ComfyUI.git\", COMFY, COMFY_REV)\n    print(f\"✅ ComfyUI 就绪 ({time.time()-t:.1f}s)\", flush=True)\n\n    install_if_needed([\"huggingface_hub<2.0.0\", \"hf-xet\"])\n\n    print(\"\\n[3/8] 后台并行启动【MiniMax H3 + Pika Flex + Open-H3 精修】全套模型下载\", flush=True)\n    model_pool = ThreadPoolExecutor(max_workers=1)\n    model_future = model_pool.submit(download_all_models, models_list)\n\n    try:\n        t = time.time()\n        print(\"\\n[4/8] CUDA / Python 依赖（与模型下载并行）\", flush=True)\n        ensure_cuda()\n        install_base_dependencies()\n        install_comfy_requirements()\n        print(f\"✅ Python 依赖完成 ({time.time()-t:.1f}s)\", flush=True)\n\n        t = time.time()\n        print(\"\\n[5/8] 官方 comfy-kitchen + GPU 算子 & H3 模块实测\", flush=True)\n        installed_ck = ensure_vsa_kitchen()\n        verify_comfy_kitchen()\n        verify_all_core_modules()\n        print(f\"✅ comfy-kitchen ({installed_ck}) 完成 ({time.time()-t:.1f}s)\", flush=True)\n\n        t = time.time()\n        print(\"\\n[6/8] 自定义节点（KJNodes + 3D Latent Upscaler + ComfyUI-Open-H3-Regenerate）\", flush=True)\n        install_custom_nodes()\n        print(f\"✅ 自定义节点完成 ({time.time()-t:.1f}s)\", flush=True)\n\n        print(\"\\n[7/8] 等待后台模型下载收尾\", flush=True)\n        t = time.time()\n        model_future.result()\n        print(f\"✅ 所有视频模型（含 Open-H3 精修）就绪（等待收尾 {time.time()-t:.1f}s）\", flush=True)\n    finally:\n        model_pool.shutdown(wait=False)\n\n    (COMFY / \"input\").mkdir(exist_ok=True)\n    (COMFY / \"output\").mkdir(exist_ok=True)\n    local_output = COMFY / \"output_local\"\n    if local_output.is_symlink():\n        raise RuntimeError(\"output_local 是软链接，请使用新的 Colab 会话进行本地测试。\")\n    local_output.mkdir(exist_ok=True)\n\n    print(\"\\n[8/8] 启动 ComfyUI 与 Cloudflare HTTP/2 隧道\", flush=True)\n    kill_legacy_daemons()\n    subprocess.run([\"pkill\", \"-9\", \"-f\", \"main.py\"], check=False)\n    subprocess.run([\"pkill\", \"-9\", \"-f\", \"cloudflared\"], check=False)\n    time.sleep(1)\n\n    log_path = BASE / \"h3_moss_drama3_comfyui.log\"\n    log_fp = open(log_path, \"w\", encoding=\"utf-8\")\n    # 同步软链到历史日志文件名，方便任意通用诊断脚本读取\n    for alias_name in (\"h3_moss_comfyui.log\", \"drama3_comfyui.log\", \"ref2va_vsa_comfyui.log\"):\n        compat_log = BASE / alias_name\n        if compat_log != log_path:\n            try:\n                if compat_log.exists() or compat_log.is_symlink():\n                    compat_log.unlink()\n                compat_log.symlink_to(log_path)\n            except Exception:\n                pass\n\n    cmd = [\n        sys.executable,\n        \"main.py\",\n        \"--listen\", \"0.0.0.0\",\n        \"--port\", str(PORT),\n        \"--output-directory\", str(local_output),\n        \"--disable-auto-launch\",\n        \"--enable-cors-header\", \"*\",\n        \"--async-offload\", \"2\",\n        \"--reserve-vram\", \"2.0\",\n        \"--use-ck-attention\",\n        \"--fast\", \"fp16_accumulation\",\n    ]\n\n    print(\"$\", \" \".join(cmd), flush=True)\n    proc = subprocess.Popen(\n        cmd,\n        cwd=str(COMFY),\n        env=os.environ.copy(),\n        stdout=log_fp,\n        stderr=subprocess.STDOUT,\n        start_new_session=True,\n    )\n\n    wait_port(proc, log_path, timeout=180)\n    startup_log = log_path.read_text(encoding=\"utf-8\", errors=\"replace\")\n    if \"Using Comfy Kitchen attention\" not in startup_log:\n        raise RuntimeError(\"尚未确认 Kitchen Attention 启用，请检查启动日志：\" + str(log_path))\n    print(\"✅ 已确认 Using Comfy Kitchen attention\", flush=True)\n    verify_all_nodes()\n\n    tunnel_url = launch_tunnel()\n\n    print(\"\\n\" + \"=\" * 84, flush=True)\n    print(f\"🎉 MiniMax H3 + Pika Flex + Open-H3 1080p/2K 精修 纯视频环境完成 | 总耗时 {time.time()-total_start:.1f}s\", flush=True)\n    print(f\"ComfyUI 固定提交：{COMFY_REV[:10]} | OpenH3-Regen：{OPENH3_REGEN_PLUGIN_REV[:10]} | Kitchen：{installed_ck}\", flush=True)\n    print(\"🎬 视频就绪：MiniMax H3 + Pika Flex 一采 (0.4MP/10步) → 3D潜变量放大至 1080p (2.07MP) → Open-H3 精修二采 (3步 Euler / start_sigma=0.78)\", flush=True)\n    if tunnel_url:\n        print(f\"🌐 固定公网地址（HTTP/2 加速）：{tunnel_url}\", flush=True)\n    else:\n        print(f\"🌐 固定公网地址未连接：{PUBLIC_URL}\", flush=True)\n    print(\"=\" * 84, flush=True)\n\n    log_fp.close()\n    if os.getenv(\"EXIT_AFTER_BOOT\", \"0\").strip() == \"1\":\n        print(\"🟢 启动完成，ComfyUI 与 Cloudflare 隧道在后台运行；此单元格现在结束。\", flush=True)\n        return\n\n    print(\"🟢 启动完成！已进入常驻防断连 + 隧道/ComfyUI 自动重连看门狗模式（随时点停止按钮可切后台运行）...\", flush=True)\n    heartbeat_count = 0\n    while True:\n        try:\n            time.sleep(30)\n            heartbeat_count += 1\n            comfy_alive = (proc.poll() is None)\n            if comfy_alive:\n                try:\n                    with socket.create_connection((\"127.0.0.1\", PORT), timeout=3):\n                        pass\n                except OSError:\n                    comfy_alive = False\n            if not comfy_alive:\n                print(\"⚠️ 检测到 ComfyUI 异常退出，正在自动重启...\", flush=True)\n                subprocess.run([\"pkill\", \"-9\", \"-f\", \"main.py\"], check=False)\n                time.sleep(1.0)\n                log_fp = open(log_path, \"a\", encoding=\"utf-8\")\n                proc = subprocess.Popen(cmd, cwd=str(COMFY), env=os.environ.copy(), stdout=log_fp, stderr=subprocess.STDOUT, start_new_session=True)\n                wait_port(proc, log_path, timeout=180)\n                log_fp.close()\n                print(\"✅ ComfyUI 已自动恢复在线！\", flush=True)\n            if get_secret(\"CF_TUNNEL_TOKEN\"):\n                cf_check = subprocess.run([\"pgrep\", \"-f\", \"cloudflared\"], capture_output=True)\n                if cf_check.returncode != 0:\n                    print(\"⚠️ 检测到 Cloudflare 隧道断开，正在自动重连...\", flush=True)\n                    launch_tunnel()\n            if heartbeat_count % 20 == 0:\n                up_min = int((time.time() - total_start) / 60)\n                print(f\"💓 [守护心跳] 已稳定运行 {up_min} 分钟 | 隧道与 H3 Open-H3 精修引擎在线\", flush=True)\n        except KeyboardInterrupt:\n            print(\"ℹ️ 收到前端切后台信号，ComfyUI 与 Cloudflare 隧道仍在后台继续运行！\", flush=True)\n            break\n\n\nif __name__ == \"__main__\":\n    main()\n"
            },
            "models": {
              "zh": [
                [
                  "1. 官方扩散主干 (一采+二采共用)",
                  "diffusion_models/",
                  "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "同时承担一采 6 步生成、二采去噪底座与 Open-H3 curve_table 曲线参考表"
                ],
                [
                  "2. Pika Flex 双 LoRA (2款)",
                  "loras/",
                  "pika_h3_flex_ref2va_v1_bf16.safetensors · pika_h3_flex_fl2va_v1_bf16.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "一采核心加速与动态表现力 LoRA (strength=1.0, 6步)"
                ],
                [
                  "3. fal 写实人像 LoRA",
                  "loras/",
                  "h3-realism-people-t2v-i2v-r2v.safetensors",
                  "fal/MiniMax-H3-Realism-People-LoRA",
                  "一采写实皮肤质感 LoRA (strength=0.5)"
                ],
                [
                  "4. 3D 潜变量放大器",
                  "latent_upscale_models/",
                  "minimax_h3_latent_upscaler_3d_conv_v1/minimax_h3_latent_upscaler_3d_conv_v1_fp16.safetensors",
                  "LBH-123-AI/Minimax_h3_latent_Upscaler",
                  "连接一采与二采的桥梁：将 0.4MP 视频潜变量 2.0 倍放大至 1080p (2.07MP)"
                ],
                [
                  "5. Open-H3 2K 精修 LoRA + 锐化曲线",
                  "loras/",
                  "lora/open_h3_regenerate_2k_lora.safetensors · lora/sharp_curve_branches.safetensors",
                  "Efficient-Large-Model/Open-H3-Regenerate-2K",
                  "二采 3 步 Euler 精修核心权重与 50 层高频锐化分支"
                ],
                [
                  "6. 32B 视觉编码器与音视频双 VAE",
                  "text_encoders/ · vae/",
                  "qwen3vl_32b_minimax_h3_int8_convrot.safetensors · minimax_h3_video_vae_int8_convrot.safetensors · minimax_h3_audio_vae_fp32.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "全流程多模态编码器与音视频解码器"
                ]
              ],
              "en": [
                [
                  "1. Official Backbone (Pass 1 & 2)",
                  "diffusion_models/",
                  "minimax_h3_ref2va_pruned_int8_convrot.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "Shared across Pass 1, Pass 2, and Open-H3 curve_table"
                ],
                [
                  "2. Pika Flex Dual LoRAs (2)",
                  "loras/",
                  "pika_h3_flex_ref2va_v1_bf16.safetensors · pika_h3_flex_fl2va_v1_bf16.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "Pass-1 6-step motion & expressiveness LoRAs (strength=1.0)"
                ],
                [
                  "3. fal Realism People LoRA",
                  "loras/",
                  "h3-realism-people-t2v-i2v-r2v.safetensors",
                  "fal/MiniMax-H3-Realism-People-LoRA",
                  "Pass-1 natural skin texture LoRA (strength=0.5)"
                ],
                [
                  "4. 3D Latent Upscaler",
                  "latent_upscale_models/",
                  "minimax_h3_latent_upscaler_3d_conv_v1/minimax_h3_latent_upscaler_3d_conv_v1_fp16.safetensors",
                  "LBH-123-AI/Minimax_h3_latent_Upscaler",
                  "Bridges Pass 1 and Pass 2 via 2.0x 3D latent upscaling"
                ],
                [
                  "5. Open-H3 2K LoRA & Sharp Curves",
                  "loras/",
                  "lora/open_h3_regenerate_2k_lora.safetensors · lora/sharp_curve_branches.safetensors",
                  "Efficient-Large-Model/Open-H3-Regenerate-2K",
                  "Pass-2 3-step Euler refinement LoRA & 50-layer sharp curves"
                ],
                [
                  "6. 32B VLM & Dual VAEs",
                  "text_encoders/ · vae/",
                  "qwen3vl_32b_minimax_h3_int8_convrot.safetensors · minimax_h3_video_vae_int8_convrot.safetensors · minimax_h3_audio_vae_fp32.safetensors",
                  "Comfy-Org/MiniMax-H3",
                  "Multimodal encoder and audio/video decoders"
                ]
              ]
            },
            "params": {
              "zh": [
                [
                  "BasicScheduler (#124 · 一采)",
                  "steps / sampler",
                  "6 步 / res_multistep",
                  "一采由 Pika Flex 驱动，0.4MP 下 6 步锁死自然动作与音轨"
                ],
                [
                  "LTXVSeparateAVLatent (#b15_split)",
                  "av_latent",
                  "拆分音画潜变量",
                  "必须在 3D 放大前拆出音频潜变量，防止音频被 3D 卷积破坏"
                ],
                [
                  "MinimaxH3LatentUpscaler3D (#b15_upscale)",
                  "mode.scale",
                  "2.0 (1080p) / 2.67 (2K)",
                  "将一采视频潜变量放大 2 倍，开启 enable_temporal_chunking 省显存"
                ],
                [
                  "OpenH3RegenLora (#b15_regen_lora)",
                  "strength / curve_strength",
                  "1.0 / 0.65",
                  "挂载英伟达 2K 精修 LoRA 与 50 层高频锐化曲线"
                ],
                [
                  "OpenH3RegenSigmas (#b15_schedule · 二采)",
                  "steps / start_sigma",
                  "3 步 Euler / 0.78",
                  "二采仅需 3 步 Euler，start_sigma=0.78 保证不改变一采动作与五官"
                ]
              ],
              "en": [
                [
                  "BasicScheduler (#124 · Pass 1)",
                  "steps / sampler",
                  "6 steps / res_multistep",
                  "Pass 1 driven by Pika Flex at 0.4MP in 6 steps"
                ],
                [
                  "LTXVSeparateAVLatent (#b15_split)",
                  "av_latent",
                  "Split Audio & Video",
                  "Must separate audio latent before 3D spatial upscaling"
                ],
                [
                  "MinimaxH3LatentUpscaler3D (#b15_upscale)",
                  "mode.scale",
                  "2.0 (1080p) / 2.67 (2K)",
                  "Scales video latent 2x with temporal chunking enabled"
                ],
                [
                  "OpenH3RegenLora (#b15_regen_lora)",
                  "strength / curve_strength",
                  "1.0 / 0.65",
                  "Applies NVIDIA 2K refine LoRA + 50-layer sharp curve"
                ],
                [
                  "OpenH3RegenSigmas (#b15_schedule · Pass 2)",
                  "steps / start_sigma",
                  "3 Euler steps / 0.78",
                  "3 Euler steps at start_sigma=0.78 refines detail while locking Pass-1 motion"
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "image",
    "icon": "🖼️",
    "title": {
      "zh": "图像生成",
      "en": "Image Generation"
    },
    "groups": [
      {
        "id": "moss-image-series",
        "title": {
          "zh": "MOSS-Image 5B 系列",
          "en": "MOSS-Image 5B Series"
        },
        "items": [
          {
            "id": "moss-base",
            "status": "soon",
            "short": {
              "zh": "01 · MOSS 5B 基础模型与工作流",
              "en": "01 · MOSS 5B Base & Workflow"
            },
            "title": {
              "zh": "MOSS-Image 5B SFT 基础指南：三大件架构与 SLG=22 防崩工作流",
              "en": "MOSS-Image 5B SFT Base Guide: Architecture & SLG=22 Workflow"
            },
            "tagline": {
              "zh": "MOSS-Image 5B INT8 + Qwen3.5-9B + FLUX.2 VAE + SkipLayerGuidance",
              "en": "MOSS-Image 5B INT8 + Qwen3.5-9B + FLUX.2 VAE + SkipLayerGuidance"
            },
            "summary": {
              "zh": "从零看懂 OpenMOSS 5B 写实生图模型：为什么必须配合 Qwen3.5-9B 与 SkipLayerGuidanceDiTSimple (SLG=22)？附上原生 ComfyUI 工作流与 Colab 脚本。",
              "en": "Understand OpenMOSS 5B from scratch: Why pair Qwen3.5-9B with SkipLayerGuidanceDiTSimple (SLG=22)? Includes native workflow and Colab script."
            },
            "plan": {
              "zh": [
                "MOSS-Image 5B SFT INT8 + Qwen3.5-9B + FLUX.2 VAE 三大核心权重",
                "SkipLayerGuidanceDiTSimple 跳过第 22 层防止人体折叠畸变的原理",
                "896×1152 (9:16) 与 1344×768 (16:9) 原生分辨率设置"
              ],
              "en": [
                "MOSS-Image 5B SFT INT8 + Qwen3.5-9B + FLUX.2 VAE core weights",
                "How SkipLayerGuidanceDiTSimple (layer 22) prevents body folding",
                "Native resolution buckets: 896×1152 (9:16) & 1344×768 (16:9)"
              ]
            }
          },
          {
            "id": "moss-realism-prompt",
            "status": "soon",
            "short": {
              "zh": "02 · 去塑料感写实提示词工程",
              "en": "02 · Anti-Plastic Realism Prompts"
            },
            "title": {
              "zh": "MOSS-Image 5B 进阶篇：去 AI 塑料感的手机抓拍与纪实人像提示词",
              "en": "MOSS-Image 5B Part 2: Candid Smartphone & Documentary Realism Prompting"
            },
            "tagline": {
              "zh": "支援 4000 Tokens 长提示词 · 中英双语混合排版 · 官方护栏负向词拆解",
              "en": "4000-Token Long Prompts · Bilingual Text Rendering · Guardrail Negative Prompts"
            },
            "summary": {
              "zh": "如何写出毛孔真实、光影自然、没有影楼磨皮感的真人参考图，为下游 MiniMax H3 视频模型提供最佳首帧与设定图。",
              "en": "How to craft prompts for natural skin texture and candid lighting to feed into downstream MiniMax H3 video workflows."
            },
            "plan": {
              "zh": [
                "狙杀 plastic skin / waxy skin / beauty filter 的官方护栏反向词",
                "利用 Qwen3.5-9B 编写高密度自然语言镜头描述",
                "为视频模型准备四槽人物与环境设定图的构图留白技巧"
              ],
              "en": [
                "Eliminating plastic/waxy skin with official negative guardrails",
                "Writing dense natural-language scene descriptions with Qwen3.5-9B",
                "Framing character & environment reference sheets for video generation"
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "id": "audio",
    "icon": "🎵",
    "title": {
      "zh": "音频 / 音乐",
      "en": "Audio & Music"
    },
    "groups": [
      {
        "id": "yue2-drama3-series",
        "title": {
          "zh": "YuE2 音乐 & Drama3 配音系列",
          "en": "YuE2 Music & Drama3 Voice Series"
        },
        "items": [
          {
            "id": "yue2-base",
            "status": "soon",
            "short": {
              "zh": "01 · YuE2 3B AI 写歌基础版",
              "en": "01 · YuE2 3B Song Gen Base"
            },
            "title": {
              "zh": "YuE2 3B INT8 开源写歌指南：Plan → Render Plan 双阶段工作流",
              "en": "YuE2 3B INT8 Music Guide: Staged Plan → Render Plan Workflow"
            },
            "tagline": {
              "zh": "在单张 Colab L4 (24GB) 上常驻显存直出 3 分钟完整人声歌曲",
              "en": "Generate full 3-minute vocal songs on a single Colab L4 (24GB) GPU"
            },
            "summary": {
              "zh": "拆解 Comfy-Org 的 yue2_3b_int8_convrot 模型与 YuE2-ComfyUI 分阶段节点（先写谱 Plan、再演唱解码 Render Plan），附 L4 极速脚本。",
              "en": "Breaking down yue2_3b_int8_convrot and staged YuE2Plan → YuE2RenderPlan nodes, with an L4 24GB resident Colab script."
            },
            "plan": {
              "zh": [
                "为什么用 YuE2Plan → YuE2RenderPlan 展开节点代替单节点黑盒",
                "offload=off + keep_model_loaded=true 在 24GB L4 上的极速配置",
                "Style 曲风标签与 [Verse] / [Chorus] 歌词结构编写规范"
              ],
              "en": [
                "Why staged YuE2Plan → YuE2RenderPlan beats monolithic nodes",
                "Zero-offload L4 24GB configuration (keep_model_loaded=true)",
                "Formatting Style tags and [Verse] / [Chorus] lyrics"
              ]
            }
          },
          {
            "id": "drama3-voice",
            "status": "soon",
            "short": {
              "zh": "02 · Drama3 35B 零样本配音克隆",
              "en": "02 · Drama3 35B Voice Cloning"
            },
            "title": {
              "zh": "Fish Audio Drama 3 (35B MoE) 零样本多角色声音克隆与情绪配音",
              "en": "Fish Audio Drama 3 (35B MoE) Zero-Shot Multi-Speaker Voice Cloning"
            },
            "tagline": {
              "zh": "35B MoE w6a8/w4a8 量化 · 零样本参考音频克隆 · 双人对话与情绪标签",
              "en": "35B MoE w6a8/w4a8 · Zero-Shot Reference Cloning · Multi-Speaker Dialogue"
            },
            "summary": {
              "zh": "详解 Fish Audio Drama 3 35B MoE 模型的 w6a8 与 w4a8 版本差异、单人独白与双人对话 ComfyUI 工作流，以及 Colab 一键脚本。",
              "en": "Complete guide to Fish Audio Drama 3 35B MoE (w6a8 vs w4a8), single/dual-speaker ComfyUI workflows, and Colab deployment."
            },
            "plan": {
              "zh": [
                "Drama 3 35B MoE w6a8 与 w4a8 权重按内存/显存自动优选",
                "5~10 秒参考音频零样本克隆与情绪控制标签写法",
                "单人旁白与双人角色对话工作流 JSON"
              ],
              "en": [
                "Choosing between Drama 3 35B MoE w6a8 and w4a8 weights",
                "5–10s reference audio zero-shot cloning & emotion tags",
                "Single-speaker & dual-speaker dialogue ComfyUI workflows"
              ]
            }
          }
        ]
      }
    ]
  }
];
