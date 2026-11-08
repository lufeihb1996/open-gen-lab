<template>
  <div class="app-shell">
    <div class="bg-glow" aria-hidden="true"></div>

    <!-- ===================================================================
         STAGE 1: PURE CINEMA SHOWCASE LANDING PAGE (NO OLD DIRECTORY CLUTTER)
         =================================================================== -->
    <div v-if="currentItemId === 'home'" class="landing-page">
      <!-- Top Full-Width Glass Navbar -->
      <header class="landing-navbar">
        <div class="landing-navbar-inner">
          <a class="logo" href="#/home" style="padding: 0;" @click.prevent="goHome">
            <span class="logo-mark">◆</span>
            <span>
              <strong>Open Gen Lab</strong>
              <small>{{ t('开源 2K 有声视频生成实验室', 'Open 2K Audio-Video Lab') }}</small>
            </span>
          </a>

          <div class="landing-nav-actions">
            <!-- Live Online Counter Pill -->
            <div class="live-telemetry-pill" :title="t('独立访客去重统计', 'Unique Visitor Telemetry')">
              <span class="pulse-dot"></span>
              <span>
                <strong class="telemetry-num" style="color: var(--green)">{{ onlineUsers }}</strong>
                {{ t(' 人在线', ' Online') }}
              </span>
              <span class="telemetry-divider">|</span>
              <span>
                {{ t('访客 ', 'UV ') }}
                <strong class="telemetry-num">{{ formatNumber(totalViews) }}</strong>
              </span>
              <span class="telemetry-divider">|</span>
              <span>
                {{ t('复制 ', 'Copies ') }}
                <strong class="telemetry-num">{{ formatNumber(totalCopies) }}</strong>
              </span>
            </div>

            <button type="button" class="btn sm" @click="cycleTheme">
              {{ activeThemeObj.icon }} {{ tr(activeThemeObj.short) }}
            </button>

            <button type="button" class="btn sm" @click="setLang(lang === 'zh' ? 'en' : 'zh')">
              🌐 {{ lang === 'zh' ? 'EN' : '中文' }}
            </button>

            <button type="button" class="btn primary sm nav-enter-btn" @click="enterDirectory">
              🚀 {{ t('进入目录 →', 'Directory →') }}
            </button>
          </div>
        </div>
      </header>

      <!-- Main Cinema Showcase Container -->
      <div class="landing-container" style="max-width: 1280px;">
        <section class="cinema-showcase-hero">
          <div class="eyebrow">
            <span class="dot"></span>
            <span>{{ t('MiniMax H3 + Pika Flex + NVIDIA Open-H3 2K · 开源音视频原生同生引擎', 'MiniMax H3 + Pika Flex + NVIDIA Open-H3 2K · Open Native Audio-Video Engine') }}</span>
          </div>

          <h1>
            {{ t('开源 2K 有声视频 ', 'Open-Source 2K Audio-Video ') }}
            <span class="grad-text">{{ t('本地与云端一键生成', 'Local & Cloud One-Click Generation') }}</span>
          </h1>

          <p class="lead">
            {{
              t(
                '告别无声视频与昂贵的按秒计费。基于 MiniMax H3 官方底模、Pika Flex 6 步极速一采与英伟达 Open-H3 2K 超分精修，支持本地显卡与 Colab 云端一键部署，直出 2K 电影级音画同步成片。',
                'Say goodbye to silent clips and costly per-second APIs. Powered by Official MiniMax H3, Pika Flex 6-step Pass 1, and NVIDIA Open-H3 2K refinement—run locally on your GPU or one-click on Google Colab.'
              )
            }}
          </p>

          <!-- Primary Entry Link to the Directory -->
          <div class="cinema-cta-row">
            <button class="btn cta-glow" type="button" @click="enterDirectory">
              🚀 {{ t('进入模型百科与 2K 工作流目录 →', 'Enter Model & 2K Workflow Directory →') }}
            </button>
          </div>

          <!-- Dual Compressed Video Showcase Stage -->
          <div class="dual-cinema-grid">
            <!-- Showcase Video 1: Azure Dragon vs Nine-Tailed Fox -->
            <div class="cinema-video-shell">
              <div class="cinema-video-frame">
                <video
                  ref="videoRef1"
                  src="/showcase-1.mp4"
                  autoplay
                  loop
                  playsinline
                  preload="auto"
                  :muted="unmutedIndex !== 1"
                  @click="toggleSound(1)"
                ></video>

                <div class="cinema-video-overlay-top">
                  <span class="cinema-badge">
                    <i class="pulse-dot"></i>
                    <span>SHOWCASE 01 · NATIVE AUDIO-VISUAL</span>
                  </span>
                  <span class="cinema-badge">24 FPS · H.264</span>
                </div>

                <div class="cinema-video-overlay-bottom">
                  <span class="cinema-caption">
                    🐉 {{ t('《青龙决战赤焰九尾狐》· 原生咆哮与尘土撞击音轨', 'Azure Dragon vs. Nine-Tailed Fox · Native Roar & Impact Foley') }}
                  </span>

                  <button
                    type="button"
                    class="cinema-sound-btn"
                    @click="toggleSound(1)"
                  >
                    <span>{{ unmutedIndex === 1 ? '🔊' : '🔇' }}</span>
                    <span>{{ unmutedIndex === 1 ? t('原声播放中', 'Sound On') : t('开启原声', 'Unmute') }}</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Showcase Video 2: Ice Dragon Over Miami Boulevard -->
            <div class="cinema-video-shell">
              <div class="cinema-video-frame">
                <video
                  ref="videoRef2"
                  src="/showcase-2.mp4"
                  autoplay
                  loop
                  playsinline
                  preload="auto"
                  :muted="unmutedIndex !== 2"
                  @click="toggleSound(2)"
                ></video>

                <div class="cinema-video-overlay-top">
                  <span class="cinema-badge">
                    <i class="pulse-dot"></i>
                    <span>SHOWCASE 02 · NATIVE AUDIO-VISUAL</span>
                  </span>
                  <span class="cinema-badge">24 FPS · STEREO</span>
                </div>

                <div class="cinema-video-overlay-bottom">
                  <span class="cinema-caption">
                    ❄️ {{ t('《冰霜巨龙突袭棕榈街区》· 巨翼呼啸、人群惊呼与吐息音效', 'Frost Dragon Over Palm Boulevard · Wing Gusts & Plasma Roar') }}
                  </span>

                  <button
                    type="button"
                    class="cinema-sound-btn"
                    @click="toggleSound(2)"
                  >
                    <span>{{ unmutedIndex === 2 ? '🔊' : '🔇' }}</span>
                    <span>{{ unmutedIndex === 2 ? t('原声播放中', 'Sound On') : t('开启原声', 'Unmute') }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 3 Sleek Visual Capability Cards (Clicking any enters the corresponding LIVE Module) -->
          <div class="showcase-highlights" style="text-align: start; width: 100%;">
            <div class="highlight-card" @click="selectItem('h3-pika-lora')">
              <div class="highlight-card-top">
                <span class="pillar-icon">⚡</span>
                <span class="pill live">LIVE</span>
              </div>
              <h3>{{ t('MiniMax + Pika Flex 6 步一采', 'MiniMax + Pika Flex 6-Step Pass 1') }}</h3>
              <p>
                {{
                  t(
                    '官方 Ref2VA INT8 底模串联 Pika H3 Flex 双 LoRA，仅需 6 步即可在本地或云端直出带立体原声的高动态视频。',
                    'Official Ref2VA INT8 backbone chained with Pika H3 Flex dual LoRAs—generate expressive audio-video in just 6 steps.'
                  )
                }}
              </p>
            </div>

            <div class="highlight-card" @click="selectItem('h3-standalone-2k')">
              <div class="highlight-card-top">
                <span class="pillar-icon">💎</span>
                <span class="pill live">LIVE</span>
              </div>
              <h3>{{ t('单独上传视频 → 英伟达 2K 精修', 'Standalone Video → NVIDIA 2K Refine') }}</h3>
              <p>
                {{
                  t(
                    '上传任意低清视频草稿 (draft.mp4)，通过 3D 潜空间放大与 Open-H3 3 步 Euler 精修，直出 2K (2560×1440) 保脸成片。',
                    'Upload any low-res draft MP4 and refine it to 2K (2560×1440) in 3 Euler steps with Face-Lock identity protection.'
                  )
                }}
              </p>
            </div>

            <div class="highlight-card" @click="selectItem('h3-pika-2k-all')">
              <div class="highlight-card-top">
                <span class="pillar-icon">🎬</span>
                <span class="pill live">LIVE</span>
              </div>
              <h3>{{ t('全流程一体：Pika 6步 + 2K 二采', 'Full Pipeline: Pika 6-Step + 2K Pass 2') }}</h3>
              <p>
                {{
                  t(
                    '单工作流一气呵成：一采 0.4MP 6 步锁自然大动态，自动分离音画潜变量 3D 放大，二采 3 步直出 1080p/2K 有声大片。',
                    'Single unified ComfyUI workflow: 6-step 0.4MP Pass 1 + 3D AV latent split/upscale + 3-step Open-H3 2K Pass 2.'
                  )
                }}
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer class="landing-footer">
        Open Gen Lab · {{ t('点击上方「进入模型百科与工作流目录」获取全部 ComfyUI 工作流与 Colab 脚本', 'Click "Enter Model & Workflow Directory" above for all ComfyUI workflows & Colab scripts') }}
      </footer>
    </div>

    <!-- ===================================================================
         STAGE 2: DIRECTORY & WORKFLOW STUDIO (LEFT SIDEBAR + RIGHT MAIN)
         =================================================================== -->
    <template v-else>
      <!-- Mobile Menu Button & Backdrop -->
      <button class="menu-btn" type="button" aria-label="Menu" @click="sidebarOpen = !sidebarOpen">
        {{ sidebarOpen ? '✕' : '☰' }}
      </button>
      <div v-if="sidebarOpen" class="sidebar-backdrop" @click="sidebarOpen = false"></div>

      <!-- Left Sidebar Directory with Collapsible Subdirectories -->
      <aside class="sidebar" :class="{ open: sidebarOpen }">
        <div class="sidebar-top-row">
          <a class="logo" href="#/home" @click.prevent="goHome">
            <span class="logo-mark">◆</span>
            <span>
              <strong>Open Gen Lab</strong>
              <small>{{ t('点击返回网站首页', 'Back to Website Home') }}</small>
            </span>
          </a>
        </div>

        <!-- Language Switcher in Sidebar -->
        <div class="lang-switch" role="group" aria-label="Language Switcher">
          <button
            type="button"
            class="lang-btn"
            :class="{ active: lang === 'zh' }"
            @click="setLang('zh')"
          >
            中文
          </button>
          <button
            type="button"
            class="lang-btn"
            :class="{ active: lang === 'en' }"
            @click="setLang('en')"
          >
            English
          </button>
        </div>

        <!-- 4-Theme Switcher in Sidebar -->
        <div class="theme-bar" role="group" aria-label="Theme Switcher">
          <button
            v-for="th in themes"
            :key="th.id"
            type="button"
            class="theme-chip"
            :class="{ active: currentTheme === th.id }"
            :title="tr(th.label)"
            @click="setTheme(th.id)"
          >
            <span>{{ th.icon }}</span>
            <span>{{ tr(th.short) }}</span>
          </button>
        </div>

        <a
          href="#/home"
          class="nav-home"
          @click.prevent="goHome"
        >
          <span>🏠</span>
          <span>{{ t('← 返回网站展示首页', '← Back to Showcase Home') }}</span>
        </a>

        <!-- Category Sections -> Expandable Series Groups -> Sub-items -->
        <div v-for="section in catalog" :key="section.id" class="nav-section">
          <div class="nav-title">
            <span v-if="section.icon">{{ section.icon }}</span>
            <span>{{ tr(section.title) }}</span>
          </div>

          <div v-for="group in section.groups" :key="group.id" class="nav-group">
            <button
              type="button"
              class="nav-group-header"
              @click="toggleGroup(group.id)"
            >
              <span class="folder-icon">{{ isGroupOpen(group.id) ? '📂' : '📁' }}</span>
              <span class="nav-group-name">{{ tr(group.title) }}</span>
              <span class="chevron" :class="{ open: isGroupOpen(group.id) }">▾</span>
            </button>

            <div v-show="isGroupOpen(group.id)" class="nav-sublist">
              <a
                v-for="item in group.items"
                :key="item.id"
                :href="'#/' + item.id"
                class="nav-subitem"
                :class="{ active: currentItemId === item.id }"
                @click.prevent="selectItem(item.id)"
              >
                <span class="subitem-text">{{ tr(item.short) }}</span>
                <span class="pill" :class="item.status">
                  {{ item.status === 'live' ? 'LIVE' : 'SOON' }}
                </span>
              </a>
            </div>
          </div>
        </div>

        <!-- Sidebar Live Online & Telemetry Widget -->
        <div class="sidebar-telemetry">
          <div class="sidebar-telemetry-head">
            <span class="live-label">
              <i class="pulse-dot"></i>
              <span>{{ t('全站实时在线统计', 'Live Hub Telemetry') }}</span>
            </span>
            <span style="color: var(--green); font-family: var(--mono); font-size: 0.7rem;">LIVE</span>
          </div>
          <div class="sidebar-telemetry-grid">
            <div class="telemetry-cell">
              <b style="color: var(--green);">{{ onlineUsers }}</b>
              <span>{{ t('当前在线', 'Online') }}</span>
            </div>
            <div class="telemetry-cell">
              <b>{{ formatNumber(totalViews) }}</b>
              <span>{{ t('独立访客', 'Visitors') }}</span>
            </div>
            <div class="telemetry-cell">
              <b style="color: var(--cyan);">{{ formatNumber(totalCopies) }}</b>
              <span>{{ t('脚本复制', 'Copied') }}</span>
            </div>
          </div>
        </div>

        <div class="sidebar-foot">
          <span>Vue 3 · ComfyUI · Colab</span>
          <span>{{ t('全站代码一键复制即用', 'One-click copy for ComfyUI & Colab') }}</span>
        </div>
      </aside>

      <!-- Right Main Area -->
      <main class="main">
        <!-- Top Utility Bar -->
        <div class="top-utility-bar">
          <div class="crumb" style="margin-bottom: 0;">
            <a href="#/home" @click.prevent="goHome">🏠 {{ t('网站首页', 'Home') }}</a>
            <template v-if="activeItem">
              <span> / </span>
              <span>{{ tr(activeSection?.title) }}</span>
              <span> / </span>
              <span>{{ tr(activeGroup?.title) }}</span>
              <span> / </span>
              <strong style="color: var(--text)">{{ tr(activeItem.short) }}</strong>
            </template>
          </div>

          <div class="top-utility-actions">
            <!-- Live Online Counter Pill -->
            <div class="live-telemetry-pill" :title="t('独立访客去重统计', 'Unique Visitor Telemetry')">
              <span class="pulse-dot"></span>
              <span>
                <strong class="telemetry-num" style="color: var(--green)">{{ onlineUsers }}</strong>
                {{ t(' 人在线', ' Online') }}
              </span>
              <span class="telemetry-divider">|</span>
              <span>
                {{ t('访客 ', 'UV ') }}
                <strong class="telemetry-num">{{ formatNumber(totalViews) }}</strong>
              </span>
              <span class="telemetry-divider">|</span>
              <span>
                {{ t('复制 ', 'Copies ') }}
                <strong class="telemetry-num">{{ formatNumber(totalCopies) }}</strong>
              </span>
            </div>

            <!-- Quick Theme Cycle Button -->
            <button
              type="button"
              class="btn sm"
              @click="cycleTheme"
            >
              {{ activeThemeObj.icon }} {{ tr(activeThemeObj.label) }}
            </button>

            <!-- Language Toggle Button -->
            <button
              type="button"
              class="btn sm"
              @click="setLang(lang === 'zh' ? 'en' : 'zh')"
            >
              🌐 {{ lang === 'zh' ? 'English' : '中文' }}
            </button>
          </div>
        </div>

        <!-- ITEM DETAIL VIEW -->
        <template v-if="activeItem">
          <section class="hero" style="padding: 8px 0 20px;">
            <div class="eyebrow">
              <span class="dot" :style="{ background: activeItem.status === 'live' ? '#34d399' : '#fbbf24' }"></span>
              <span>
                {{ activeSection?.icon }} {{ tr(activeGroup?.title) }} ·
                {{ activeItem.status === 'live' ? t('已上线 · 一键复制', 'Live · One-Click Copy') : t('系列进阶规划', 'Upcoming in Series') }}
              </span>
            </div>
            <h1 style="font-size: clamp(1.85rem, 3.4vw, 2.65rem); margin: 14px 0 12px;">
              <span class="grad-text">{{ tr(activeItem.title) }}</span>
            </h1>
            <p class="lead">{{ tr(activeItem.summary) }}</p>

            <div v-if="activeItem.tags" class="tags" style="margin-top: 16px;">
              <span v-for="tag in tr(activeItem.tags)" :key="tag" class="tag">{{ tag }}</span>
            </div>

            <div v-if="activeItem.stats" class="stats" style="margin-top: 24px;">
              <div v-for="s in activeItem.stats" :key="tr(s.label)" class="stat">
                <b>{{ s.value }}</b>
                <span>{{ tr(s.label) }}</span>
              </div>
            </div>
          </section>

          <!-- LIVE MODULE CONTENT -->
          <template v-if="activeItem.status === 'live'">
            <!-- Sub-navigation Tabs -->
            <div class="tabs">
              <button
                v-if="activeItem.versionGroups"
                class="tab"
                :class="{ active: activeTab === 'versions' }"
                type="button"
                @click="activeTab = 'versions'"
              >
                🧭 {{ t('1. 模型架构与版本百科', '1. Architecture & Editions Guide') }}
              </button>
              <button
                class="tab"
                :class="{ active: activeTab === 'colab' }"
                type="button"
                @click="activeTab = 'colab'"
              >
                🚀 {{ t('2. Colab 一键启动脚本 (.py)', '2. Colab One-Click Script (.py)') }}
              </button>
              <button
                class="tab"
                :class="{ active: activeTab === 'workflows' }"
                type="button"
                @click="activeTab = 'workflows'"
              >
                📦 {{ t('3. ComfyUI 工作流 JSON', '3. ComfyUI Workflow JSON') }}
              </button>
              <button
                class="tab"
                :class="{ active: activeTab === 'models' }"
                type="button"
                @click="activeTab = 'models'"
              >
                📖 {{ t('4. HuggingFace 地址与调参字典', '4. HuggingFace Links & Parameter Guide') }}
              </button>
            </div>

            <!-- TAB 1: COMPLETE VERSION ENCYCLOPEDIA -->
            <section v-if="activeTab === 'versions' && activeItem.versionGroups">
              <!-- HuggingFace & GitHub Official Repositories Bar -->
              <div v-if="activeItem.hfRepos" class="info" style="margin-bottom: 24px;">
                <h6>🤗 {{ t('本模块涉及的 HuggingFace 模型仓库与 GitHub 节点官方地址（点击直达）', 'Official HuggingFace Model Repos & GitHub Custom Nodes (Click to Open)') }}</h6>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
                  <a
                    v-for="repo in activeItem.hfRepos"
                    :key="repo.url"
                    :href="repo.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn sm repo-link-btn"
                    style="text-decoration: none;"
                  >
                    <span>{{ repo.url.includes('github.com') ? '🐙' : '🤗' }}</span>
                    <strong>{{ repo.name }}</strong>
                    <span class="repo-link-desc">· {{ tr(repo.desc) }} ↗</span>
                  </a>
                </div>
              </div>

              <div
                v-for="(vg, vIdx) in activeItem.versionGroups"
                :key="vIdx"
                style="margin-bottom: 28px;"
              >
                <div class="section-head" style="margin: 12px 0 10px;">
                  <h2>{{ tr(vg.title) }}</h2>
                </div>
                <p style="color: var(--muted); font-size: 0.9rem; margin-bottom: 12px;">
                  {{ tr(vg.desc) }}
                </p>
                <div class="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th style="width: 22%">{{ t('版本 / 类别', 'Edition / Category') }}</th>
                        <th style="width: 34%">{{ t('官方文件名 (Comfy-Org/MiniMax-H3)', 'Official Filename') }}</th>
                        <th style="width: 18%">{{ t('体积 / 适用显卡', 'Size / Target GPU') }}</th>
                        <th>{{ t('核心特点与选型建议', 'Characteristics & Verdict') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(row, rIdx) in tr(vg.rows)" :key="rIdx">
                        <td><strong>{{ row[0] }}</strong></td>
                        <td>
                          <div v-for="line in row[1].split('\n')" :key="line" style="margin-bottom: 3px;">
                            <code>{{ line }}</code>
                          </div>
                        </td>
                        <td><span class="tag" style="display:inline-block">{{ row[2] }}</span></td>
                        <td>{{ row[3] }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <!-- TAB 2: COLAB SCRIPT -->
            <section v-else-if="activeTab === 'colab' && activeItem.colab">
              <div class="steps3">
                <div class="step3">
                  <b>1</b>
                  <h5>{{ t('打开 Colab 选择 GPU', 'Open Colab & Select GPU') }}</h5>
                  <p>
                    {{
                      t(
                        '新建 Google Colab 笔记本，在「代码执行程序 → 更改运行时类型」中选择 ',
                        'Create a new Google Colab notebook and set Runtime → Change runtime type to '
                      )
                    }}{{ tr(activeItem.colab.gpu) }}。
                  </p>
                </div>
                <div class="step3">
                  <b>2</b>
                  <h5>{{ t('一键复制粘贴脚本', 'One-Click Copy & Paste') }}</h5>
                  <p>
                    {{
                      t(
                        '点击下方「📋 一键复制 Colab 脚本」按钮，直接粘贴到 Colab 第一个单元格并运行。',
                        'Click "📋 Copy Colab Script" below, paste it into the first Colab cell, and run.'
                      )
                    }}
                  </p>
                </div>
                <div class="step3">
                  <b>3</b>
                  <h5>{{ t('点击公网链接即用', 'Open Public Tunnel URL') }}</h5>
                  <p>
                    {{
                      t(
                        '脚本从 Comfy-Org/MiniMax-H3 官方仓库拉取纯净四大件，完成后点击末尾输出的公网链接即可使用。',
                        'Pulls the 4 pure official weights from Comfy-Org/MiniMax-H3 and prints a ready-to-use public Cloudflare URL.'
                      )
                    }}
                  </p>
                </div>
              </div>

              <div class="info-row">
                <div class="info">
                  <h6>🖥️ {{ t('推荐硬件环境', 'Recommended Hardware') }}</h6>
                  <ul>
                    <li>GPU：<code>{{ tr(activeItem.colab.gpu) }}</code></li>
                    <li>
                      {{
                        t(
                          '存储：自动使用 /content 本地高速 SSD，不挂载慢速 Google Drive',
                          'Storage: Uses fast local /content SSD (no slow Google Drive FUSE mount)'
                        )
                      }}
                    </li>
                  </ul>
                </div>
                <div class="info">
                  <h6>🔑 {{ t('可选环境变量 / Colab Secrets', 'Optional Env Vars / Colab Secrets') }}</h6>
                  <ul>
                    <li v-for="sec in tr(activeItem.colab.secrets)" :key="sec[0]">
                      <code>{{ sec[0] }}</code>：{{ sec[1] }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="code-wrap">
                <div class="code-bar">
                  <div class="code-file">
                    <span class="lights"><i></i><i></i><i></i></span>
                    <span>{{ activeItem.colab.name }}</span>
                  </div>
                  <div class="code-actions">
                    <button class="btn primary sm" type="button" @click="copyColab(activeItem.colab)">
                      📋 {{ t('一键复制 Colab 脚本', 'Copy Colab Script') }}
                    </button>
                  </div>
                </div>
                <pre class="code">{{ activeItem.colab.content }}</pre>
              </div>
            </section>

            <!-- TAB 3: WORKFLOWS -->
            <section v-else-if="activeTab === 'workflows'">
              <div class="variants">
                <button
                  v-for="(wf, idx) in activeItem.workflows"
                  :key="wf.key"
                  type="button"
                  class="variant"
                  :class="{ active: activeWfIndex === idx }"
                  @click="activeWfIndex = idx"
                >
                  <div class="variant-head">
                    <span>{{ tr(wf.label) }}</span>
                    <span v-if="tr(wf.badge)" class="badge-hot">{{ tr(wf.badge) }}</span>
                  </div>
                  <p>{{ tr(wf.desc) }}</p>
                </button>
              </div>

              <!-- 5-Step Pipeline Flow -->
              <div v-if="currentWorkflow" class="flow">
                <div
                  v-for="(st, sIdx) in tr(currentWorkflow.steps)"
                  :key="sIdx"
                  class="flow-step"
                >
                  <div class="flow-num">STEP 0{{ sIdx + 1 }}</div>
                  <div class="flow-title">{{ st[0] }}</div>
                  <div class="flow-node">{{ st[1] }}</div>
                  <div class="flow-detail">{{ st[2] }}</div>
                </div>
              </div>

              <!-- Code Window (Copy Only) -->
              <div v-if="currentWorkflow" class="code-wrap">
                <div class="code-bar">
                  <div class="code-file">
                    <span class="lights"><i></i><i></i><i></i></span>
                    <span>{{ currentWorkflow.name }}</span>
                  </div>
                  <div class="code-actions">
                    <button class="btn primary sm" type="button" @click="copyWorkflow(currentWorkflow)">
                      📋 {{ t('一键复制工作流 JSON', 'Copy Workflow JSON') }}
                    </button>
                  </div>
                </div>
                <pre class="code">{{ formatJson(currentWorkflow.content) }}</pre>
              </div>
            </section>

            <!-- TAB 4: MODELS & PARAMS -->
            <section v-else-if="activeTab === 'models'">
              <div v-if="activeItem.hfRepos" class="info" style="margin-bottom: 20px;">
                <h6>🤗 {{ t('HuggingFace 模型仓库 & GitHub 节点官方直达链接', 'Official HuggingFace Model Repos & GitHub Custom Nodes') }}</h6>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
                  <a
                    v-for="repo in activeItem.hfRepos"
                    :key="repo.url"
                    :href="repo.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn sm repo-link-btn"
                    style="text-decoration: none;"
                  >
                    <span>{{ repo.url.includes('github.com') ? '🐙' : '🤗' }}</span>
                    <strong>{{ repo.name }}</strong>
                    <span class="repo-link-desc">· {{ tr(repo.desc) }} ↗</span>
                  </a>
                </div>
              </div>

              <div class="section-head" style="margin-top: 8px;">
                <h2>1. {{ t('本模块核心模型权重与 HuggingFace 地址清单', 'Core Model Weights & HuggingFace Repository Links') }}</h2>
                <span>{{ t('对应 Colab 脚本自动下载项', 'Files automatically downloaded by Colab script') }}</span>
              </div>
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>{{ t('角色 / 组件', 'Component Role') }}</th>
                      <th>{{ t('ComfyUI 存放目录', 'ComfyUI Directory') }}</th>
                      <th>{{ t('权重文件名 & HuggingFace 仓库链接', 'Filename & HuggingFace Repo Link') }}</th>
                      <th>{{ t('作用说明', 'Description') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="m in tr(activeItem.models)" :key="m[2]">
                      <td><strong>{{ m[0] }}</strong></td>
                      <td><code>models/{{ m[1] }}</code></td>
                      <td>
                        <code>{{ m[2] }}</code>
                        <div style="margin-top: 5px; display: flex; flex-wrap: wrap; gap: 6px;">
                          <a
                            v-for="rk in parseRepoLinks(m[3])"
                            :key="rk.url"
                            :href="rk.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.76rem; color: var(--cyan); text-decoration: none; font-family: var(--mono);"
                          >
                            <span>{{ rk.isGithub ? '🐙' : '🤗' }}</span>
                            <span style="text-decoration: underline;">{{ rk.label }}</span>
                            <span>↗</span>
                          </a>
                        </div>
                      </td>
                      <td>{{ m[4] }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="section-head">
                <h2>2. {{ t('核心节点调参字典', 'Core Node Parameter Dictionary') }}</h2>
                <span>{{ t('新手必看黄金参数', 'Essential Parameters for Beginners') }}</span>
              </div>
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>{{ t('节点名称', 'Node') }}</th>
                      <th>{{ t('参数项', 'Parameter') }}</th>
                      <th>{{ t('推荐值', 'Recommended Value') }}</th>
                      <th>{{ t('物理含义与避坑说明', 'Explanation & Pitfalls') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="p in tr(activeItem.params)" :key="p[0] + p[1]">
                      <td><code>{{ p[0] }}</code></td>
                      <td><code>{{ p[1] }}</code></td>
                      <td><strong>{{ p[2] }}</strong></td>
                      <td>{{ p[3] }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </template>

          <!-- COMING SOON MODULE CONTENT -->
          <template v-else>
            <div class="soon-box">
              <h3>
                🚧 {{ t('本篇子专题与配套工作流即将上线，核心内容大纲：', 'This sub-module is coming soon and will cover:') }}
              </h3>
              <ul>
                <li v-for="pt in tr(activeItem.plan)" :key="pt">{{ pt }}</li>
              </ul>
              <div style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap;">
                <button class="btn primary" type="button" @click="selectItem('h3-base')">
                  ← {{ t('先看已上线的「01 · MiniMax H3 基础模型与版本全解」', 'Start with "01 · MiniMax H3 Base Models & Editions"') }}
                </button>
                <button class="btn" type="button" @click="goHome">
                  🏠 {{ t('返回网站展示首页', 'Back to Showcase Home') }}
                </button>
              </div>
            </div>
          </template>
        </template>
      </main>
    </template>

    <!-- Toast Notification -->
    <div class="toast" :class="{ show: toastMsg !== '' }">
      {{ toastMsg }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { CATALOG } from './catalog.js'

const catalog = CATALOG
const lang = ref('zh')
const currentTheme = ref('nebula')
// Default to Pure Cinema Showcase Landing Page ('home')
const currentItemId = ref('home')
const activeTab = ref('versions')
const activeWfIndex = ref(0)
const sidebarOpen = ref(false)
const toastMsg = ref('')
let toastTimer = null

// Dual Showcase Video Sound Control (Default 1 = Video 1 unmuted with sound on load)
const videoRef1 = ref(null)
const videoRef2 = ref(null)
const unmutedIndex = ref(1)
let removeUnlockListeners = null

function clearUnlockListeners() {
  if (removeUnlockListeners) {
    removeUnlockListeners()
    removeUnlockListeners = null
  }
}

function tryAutoPlayWithSound() {
  const v1 = videoRef1.value
  const v2 = videoRef2.value
  if (v2) {
    v2.muted = true
    v2.play().catch(() => {})
  }
  if (!v1) return

  v1.muted = false
  v1.volume = 1.0
  const p = v1.play()
  if (p && typeof p.then === 'function') {
    p.then(() => {
      unmutedIndex.value = 1
      clearUnlockListeners()
    }).catch(() => {
      // Browser blocked unmuted autoplay before first gesture: keep video playing and unmute on first touch/click
      v1.muted = true
      v1.play().catch(() => {})

      const unlockAudio = () => {
        if (currentItemId.value === 'home' && videoRef1.value && unmutedIndex.value === 1) {
          videoRef1.value.muted = false
          videoRef1.value.volume = 1.0
          videoRef1.value.play().catch(() => {})
        }
        clearUnlockListeners()
      }

      const events = ['pointerdown', 'touchstart', 'click', 'keydown']
      events.forEach(ev => window.addEventListener(ev, unlockAudio, { once: true, passive: true }))
      removeUnlockListeners = () => {
        events.forEach(ev => window.removeEventListener(ev, unlockAudio))
      }
    })
  }
}

function toggleSound(idx) {
  clearUnlockListeners()
  if (unmutedIndex.value === idx) {
    unmutedIndex.value = 0
  } else {
    unmutedIndex.value = idx
  }
  if (videoRef1.value) {
    videoRef1.value.muted = unmutedIndex.value !== 1
    if (unmutedIndex.value === 1) {
      videoRef1.value.volume = 1.0
      videoRef1.value.play().catch(() => {})
    }
  }
  if (videoRef2.value) {
    videoRef2.value.muted = unmutedIndex.value !== 2
    if (unmutedIndex.value === 2) {
      videoRef2.value.volume = 1.0
      videoRef2.value.play().catch(() => {})
    }
  }
}

function enterDirectory() {
  unmutedIndex.value = 0
  selectItem('h3-base')
}

// 2 Curated UI Themes (Dark & Light)
const themes = [
  {
    id: 'nebula',
    icon: '🌌',
    short: { zh: '暗夜', en: 'Dark' },
    label: { zh: '星云暗夜', en: 'Nebula Dark' },
  },
  {
    id: 'daylight',
    icon: '☀️',
    short: { zh: '明亮', en: 'Light' },
    label: { zh: '极简明亮', en: 'Daylight' },
  },
]

const activeThemeObj = computed(() => {
  return themes.find(item => item.id === currentTheme.value) || themes[0]
})

function setTheme(themeId) {
  currentTheme.value = themeId
  document.documentElement.setAttribute('data-theme', themeId)
  try {
    localStorage.setItem('ogl_theme', themeId)
  } catch {
    // ignore storage errors
  }
}

function cycleTheme() {
  const idx = themes.findIndex(item => item.id === currentTheme.value)
  const next = themes[(idx + 1) % themes.length]
  setTheme(next.id)
}

// Real-Time Online Presence & Unique Visitor (UV) Telemetry
const onlineUsers = ref(1)
const totalViews = ref(1)
const totalCopies = ref(0)
let presenceTimer = null
let presenceChannel = null

function getOrCreateVisitorId() {
  try {
    let vid = localStorage.getItem('ogl_visitor_id')
    if (!vid) {
      const cookieMatch = document.cookie.match(/(?:^|;\s*)ogl_vid=([^;]+)/)
      if (cookieMatch && cookieMatch[1]) {
        vid = decodeURIComponent(cookieMatch[1])
      } else {
        vid = 'uv_' + Math.random().toString(36).slice(2, 11) + '_' + Date.now().toString(36)
      }
      localStorage.setItem('ogl_visitor_id', vid)
    }
    document.cookie = `ogl_vid=${encodeURIComponent(vid)}; path=/; max-age=31536000; SameSite=Lax`
    return vid
  } catch {
    return 'uv_session_' + Math.random().toString(36).slice(2, 10)
  }
}

function hasBeenCountedAsUV() {
  try {
    if (localStorage.getItem('ogl_uv_counted_v1') === '1') return true
    if (document.cookie.includes('ogl_uv_counted_v1=1')) {
      localStorage.setItem('ogl_uv_counted_v1', '1')
      return true
    }
  } catch {
    // ignore
  }
  return false
}

function markCountedAsUV() {
  try {
    localStorage.setItem('ogl_uv_counted_v1', '1')
    document.cookie = 'ogl_uv_counted_v1=1; path=/; max-age=31536000; SameSite=Lax'
  } catch {
    // ignore
  }
}

const visitorId = getOrCreateVisitorId()

async function pingTelemetry(action = 'heartbeat') {
  try {
    const res = await fetch(`/api/telemetry?action=${encodeURIComponent(action)}&visitorId=${encodeURIComponent(visitorId)}`, {
      cache: 'no-store',
    })
    if (res.ok) {
      const data = await res.json()
      if (action === 'new_visit') {
        markCountedAsUV()
      }
      if (typeof data.online === 'number') onlineUsers.value = data.online
      if (typeof data.views === 'number') totalViews.value = Math.max(totalViews.value, data.views)
      if (typeof data.copies === 'number') totalCopies.value = Math.max(totalCopies.value, data.copies)
      if (presenceChannel && action !== 'heartbeat') {
        presenceChannel.postMessage({ type: 'sync', ...data })
      }
    }
  } catch {
    // Fallback if static preview without /api middleware
  }
}

function handleUnload() {
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(`/api/telemetry?action=leave&visitorId=${encodeURIComponent(visitorId)}`)
    } else {
      fetch(`/api/telemetry?action=leave&visitorId=${encodeURIComponent(visitorId)}`, { keepalive: true })
    }
  } catch {
    // ignore
  }
}

function initTelemetry() {
  try {
    localStorage.removeItem('ogl_total_views')
    localStorage.removeItem('ogl_total_copies')

    const savedTheme = localStorage.getItem('ogl_theme')
    if (savedTheme && themes.some(item => item.id === savedTheme)) {
      setTheme(savedTheme)
    } else {
      setTheme('nebula')
    }

    const savedLang = localStorage.getItem('ogl_lang')
    if (savedLang === 'zh' || savedLang === 'en') {
      setLang(savedLang)
    }
  } catch {
    setTheme('nebula')
  }

  if (typeof BroadcastChannel !== 'undefined') {
    try {
      presenceChannel = new BroadcastChannel('open_gen_lab_telemetry')
      presenceChannel.onmessage = (ev) => {
        if (ev.data?.type === 'sync') {
          if (typeof ev.data.online === 'number') onlineUsers.value = ev.data.online
          if (typeof ev.data.views === 'number') totalViews.value = ev.data.views
          if (typeof ev.data.copies === 'number') totalCopies.value = ev.data.copies
        }
      }
    } catch {
      // ignore
    }
  }

  const initialAction = hasBeenCountedAsUV() ? 'visit' : 'new_visit'
  pingTelemetry(initialAction)

  presenceTimer = setInterval(() => {
    pingTelemetry('heartbeat')
  }, 10000)

  window.addEventListener('beforeunload', handleUnload)
}

function recordCopyIncrement() {
  pingTelemetry('copy')
}

function formatNumber(num) {
  return Number(num || 0).toLocaleString()
}

// Default all series groups open in sidebar
const openGroups = reactive({
  'minimax-h3-series': true,
  'moss-image-series': true,
  'yue2-drama3-series': true,
})

function isGroupOpen(groupId) {
  return !!openGroups[groupId]
}

function toggleGroup(groupId) {
  openGroups[groupId] = !openGroups[groupId]
}

function t(zhText, enText) {
  return lang.value === 'zh' ? zhText : enText
}

function tr(val) {
  if (!val) return ''
  if (typeof val === 'object' && !Array.isArray(val) && ('zh' in val || 'en' in val)) {
    return val[lang.value] ?? val.zh ?? ''
  }
  return val
}

function setLang(nextLang) {
  lang.value = nextLang
  document.documentElement.lang = nextLang === 'zh' ? 'zh-CN' : 'en'
  try {
    localStorage.setItem('ogl_lang', nextLang)
  } catch {
    // ignore
  }
}

const activeSection = computed(() => {
  for (const sec of catalog) {
    for (const grp of sec.groups) {
      if (grp.items.some(i => i.id === currentItemId.value)) return sec
    }
  }
  return null
})

const activeGroup = computed(() => {
  for (const sec of catalog) {
    for (const grp of sec.groups) {
      if (grp.items.some(i => i.id === currentItemId.value)) return grp
    }
  }
  return null
})

const activeItem = computed(() => {
  for (const sec of catalog) {
    for (const grp of sec.groups) {
      const found = grp.items.find(i => i.id === currentItemId.value)
      if (found) return found
    }
  }
  return null
})

const currentWorkflow = computed(() => {
  if (!activeItem.value || !activeItem.value.workflows) return null
  return activeItem.value.workflows[activeWfIndex.value] || activeItem.value.workflows[0]
})

function syncFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, '').trim()
  if (!raw || raw === 'home') {
    currentItemId.value = 'home'
    return
  }
  for (const sec of catalog) {
    for (const grp of sec.groups) {
      if (grp.items.some(i => i.id === raw)) {
        currentItemId.value = raw
        openGroups[grp.id] = true
        activeWfIndex.value = 0
        return
      }
    }
  }
  currentItemId.value = 'home'
}

function goHome() {
  window.location.hash = '#/home'
  currentItemId.value = 'home'
  unmutedIndex.value = 1
  sidebarOpen.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
  setTimeout(tryAutoPlayWithSound, 80)
}

function selectItem(id) {
  window.location.hash = '#/' + id
  currentItemId.value = id
  activeWfIndex.value = 0
  sidebarOpen.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function formatJson(obj) {
  return JSON.stringify(obj, null, 2)
}

function parseRepoLinks(raw) {
  if (!raw) return []
  return String(raw)
    .split(/\s*[·|]\s*/)
    .map(part => part.trim())
    .filter(Boolean)
    .map(part => {
      if (part.startsWith('http://') || part.startsWith('https://')) {
        const isGithub = part.includes('github.com')
        const label = part.replace(/^https?:\/\/(huggingface\.co|github\.com)\//, '')
        return { label, url: part, isGithub }
      }
      if (part.startsWith('github:')) {
        const repo = part.slice(7).trim()
        return { label: repo, url: `https://github.com/${repo}`, isGithub: true }
      }
      return { label: part, url: `https://huggingface.co/${part}`, isGithub: false }
    })
}

function showToast(msg) {
  toastMsg.value = msg
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastMsg.value = ''
  }, 2400)
}

async function copyText(text, successMsg) {
  try {
    await navigator.clipboard.writeText(text)
    recordCopyIncrement()
    showToast(successMsg)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    recordCopyIncrement()
    showToast(successMsg)
  }
}

function copyWorkflow(wf) {
  const msg = lang.value === 'zh'
    ? '✅ 已复制工作流 JSON：' + wf.name
    : '✅ Copied Workflow JSON: ' + wf.name
  copyText(formatJson(wf.content), msg)
}

function copyColab(colab) {
  const msg = lang.value === 'zh'
    ? '✅ 已复制完整 Colab 启动脚本！可直接粘贴运行'
    : '✅ Copied Colab Script to clipboard!'
  copyText(colab.content, msg)
}

onMounted(() => {
  initTelemetry()
  syncFromHash()
  window.addEventListener('hashchange', syncFromHash)
  setTimeout(tryAutoPlayWithSound, 80)
})

onUnmounted(() => {
  clearUnlockListeners()
  window.removeEventListener('hashchange', syncFromHash)
  window.removeEventListener('beforeunload', handleUnload)
  if (presenceTimer) clearInterval(presenceTimer)
  if (presenceChannel) presenceChannel.close()
})
</script>
