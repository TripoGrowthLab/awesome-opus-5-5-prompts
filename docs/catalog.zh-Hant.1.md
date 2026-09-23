<!-- Generated from Growth CMS by templates/catalog.md. Edit content in CMS; run npm run sync. -->

# Awesome Opus 5.5 Prompts — 1 / 1

[← Awesome Opus 5.5 Prompts](../README.md)

<p>
  <a href="../docs/catalog.en.1.md"><img alt="English" src="https://img.shields.io/badge/English-64748b?style=flat-square"></a>
  <a href="../docs/catalog.zh.1.md"><img alt="简体中文" src="https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-64748b?style=flat-square"></a>
  <a href="../docs/catalog.zh-Hant.1.md"><img alt="繁體中文" src="https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-✓-238636?style=flat-square"></a>
  <a href="../docs/catalog.ja.1.md"><img alt="日本語" src="https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-64748b?style=flat-square"></a>
  <a href="../docs/catalog.ko.1.md"><img alt="한국어" src="https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-64748b?style=flat-square"></a>
  <a href="../docs/catalog.es.1.md"><img alt="Español" src="https://img.shields.io/badge/Espa%C3%B1ol-64748b?style=flat-square"></a>
  <a href="../docs/catalog.pt.1.md"><img alt="Português" src="https://img.shields.io/badge/Portugu%C3%AAs-64748b?style=flat-square"></a>
  <a href="../docs/catalog.de.1.md"><img alt="Deutsch" src="https://img.shields.io/badge/Deutsch-64748b?style=flat-square"></a>
  <a href="../docs/catalog.fr.1.md"><img alt="Français" src="https://img.shields.io/badge/Fran%C3%A7ais-64748b?style=flat-square"></a>
  <a href="../docs/catalog.it.1.md"><img alt="Italiano" src="https://img.shields.io/badge/Italiano-64748b?style=flat-square"></a>
  <a href="../docs/catalog.ru.1.md"><img alt="Русский" src="https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-64748b?style=flat-square"></a>
  <a href="../docs/catalog.tr.1.md"><img alt="Türkçe" src="https://img.shields.io/badge/T%C3%BCrk%C3%A7e-64748b?style=flat-square"></a>
  <a href="../docs/catalog.uk.1.md"><img alt="Українська" src="https://img.shields.io/badge/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0-64748b?style=flat-square"></a>
  <a href="../docs/catalog.vi.1.md"><img alt="Tiếng Việt" src="https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-64748b?style=flat-square"></a>
</p>

[完整目錄](catalog.zh-Hant.md) · **1 / 1**

<a id="all-prompts"></a>

<details>
<summary>瀏覽案例 (11)</summary>

- [互動式歐拉霓虹流體模擬](#claude-opus-5-5-2102565611473661963)
- [日式櫻花山谷互動式 3D 景觀網頁](#claude-opus-5-5-2102565403109085669)
- [Hundenberg 事故模型與逼真影片](#claude-opus-5-5-2102547809140355250)
- [以圖片為基礎的手球場 360 度 3D 渲染](#claude-opus-5-5-2102544406117286004)
- [從影像打造程序化 Three.js 3D 主選單背景](#claude-opus-5-5-2102544196808667471)
- [自動運行的 3D 魯布・戈德堡機械](#claude-opus-5-5-2102544078927741369)
- [互動式彼得兔風格農場動物遊戲](#claude-opus-5-5-2102538762731565085)
- [電影感互動式夕陽海盜船](#claude-opus-5-5-2102533729746882985)
- [無限程序生成的 Three.js 世界](#claude-opus-5-5-2102529695908806728)
- [互動式人群疏散模擬](#claude-opus-5-5-2102467667978572092)
- [互動式 3D 史前島嶼](#claude-opus-5-5-2102450239923720440)

</details>
<a id="claude-opus-5-5-2102565611473661963"></a>

### 互動式歐拉霓虹流體模擬

[theailoser](https://x.com/theailoser) · 2026-09-23 · Claude Opus 5.5 · 動畫

<a href="https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102565611473661963"><img src="../assets/previews/aed453c22b47b5e182d83ea4b126bd65e4391d679f7ad13bdfafe7c9d36fc8ff.webp" width="840" loading="lazy" alt="互動式歐拉霓虹流體模擬"></a>

**提示詞**

```text
撰寫一份完整的單一檔案 HTML 文件，其中包含高效能、GPU 加速的互動式歐拉霓虹流體模擬。

嚴格的技術與美學要求：

1. 架構與效能：
   - 單一檔案：所有 HTML、CSS，以及 JavaScript／GLSL 著色器都必須內嵌。
   - 零外部依賴：使用純 WebGL 1.0 或 2.0（不得使用 Three.js、Pixi 或任何外部函式庫）。
   - GPU 計算流體力學：模擬必須完全透過乒乓式影格緩衝物件（FBO）執行，並使用自訂片段著色器處理：
     a) 平流（速度與染料）
     b) 散度計算
     c) 壓力 Poisson 求解器（Jacobi 迭代，每影格 20–30 次）
     d) 梯度扣除／速度投影
     e) 渦度侷限（加入湍流漩渦，並避免流體變成單調、模糊的糊狀效果）。

2. 視覺擬真度（「霓虹煙霧」效果）：
   - 漆黑的虛空背景（`#050508`）。
   - 為染料注入加入加成式／高動態範圍混合。
   - 動態色盤：每次游標快速揮動或觸控拖曳，都會注入高亮度的霓虹染料，並在鮮明的賽博色調之間平順循環（電光青 `#00F0FF`、熾熱洋紅 `#FF007F`、深紫外，以及耀眼金色）。
   - 顯示著色器強化：直接在最終渲染著色器中加入後製處理階段，針對流體旋動邊緣套用細緻的泛光／光暈、色調映射與色差效果。

3. 互動：
   - 滑鼠與觸控：快速移動游標或拖曳時，依滑鼠速度注入相應的速度，並加入密集的發光染料。
   - 被動環境動態：閒置時產生細緻的程序式旋渦雜訊或緩慢漂移的漩渦，讓畫布不會完全靜止。
   - 控制項：在角落放置俐落、極簡的玻璃擬態 HUD（閒置時自動隱藏）：
     * 黏度滑桿
     * 染料耗散／持續性滑桿
     * 噴濺半徑滑桿
     * 「清除畫布」按鈕
     * 循環切換色彩主題的切換按鈕（賽博龐克、熱能煉獄、生物發光深海）。

4. 產品級打磨：
   - 自動處理高 DPI 顯示器與 `resize` 事件，避免拉伸或清除 FBO 貼圖。
   - 為浮點數貼圖支援加入妥善的備援檢查（`OES_texture_float`／`OES_texture_half_float`）。
   - 程式碼必須乾淨、無錯誤且完整實作，不得包含任何佔位內容或截斷的註解。

只輸出完整填充、可直接在 Chrome／Safari／Firefox 中執行的 HTML 檔案。
```

<details>
<summary>作者原始提示詞</summary>

```text
Write a complete, single-file HTML document containing a high-performance, GPU-accelerated interactive Eulerian Neon Fluid Simulation.

Strict Technical & Aesthetic Requirements:

1. Architecture & Performance:
   - Single-file: All HTML, CSS, and JavaScript/GLSL shaders inline.
   - Zero external dependencies: Pure WebGL 1.0 or 2.0 (no Three.js, no Pixi, no external libraries).
   - GPU-Computed Fluid Dynamics: The simulation must run entirely via ping-pong Framebuffer Objects (FBOs) using custom fragment shaders for:
     a) Advection (velocity & dye)
     b) Divergence calculation
     c) Pressure Poisson solver (Jacobi iteration, 20-30 iterations per frame)
     d) Gradient subtraction / velocity projection
     e) Vorticity confinement (adds turbulent swirls and prevents the fluid from turning into dull, blurry mush).

2. Visual Fidelity (The "Neon Smoke" Look):
   - Pitch-black void background (`#050508`).
   - Additive / High-Dynamic-Range blending for dye injection.
   - Dynamic palette: Each cursor flick or touch drag injects high-luminosity neon dye that cycles smoothly through vivid cyber hues (electric cyan `#00F0FF`, hot magenta `#FF007F`, deep ultraviolet, and radiant gold).
   - Display shader enhancements: Include a post-processing pass directly in the final render shader that applies subtle bloom/glow, tone mapping, and chromatic aberration around the swirling edges of the fluid.

3. Interaction:
   - Mouse & Touch: Rapid cursor movement or dragging injects velocity proportional to mouse speed, along with dense glowing dye.
   - Passive Ambient Motion: When idle, generate subtle procedural curl noise or gentle drifting vortices so the canvas is never completely static.
   - Controls: A sleek, ultra-minimal glassmorphism HUD tucked into a corner (with auto-hide on inactivity):
     * Viscosity slider
     * Dye dissipation / persistence slider
     * Splat radius slider
     * "Clear Canvas" button
     * Toggle button to cycle color themes (Cyberpunk, Thermal Inferno, Bioluminescent Deep).

4. Production Polish:
   - Automatically handle high-DPI displays and `resize` events without stretching or clearing the FBO textures.
   - Graceful fallback check for floating-point texture support (`OES_texture_float` / `OES_texture_half_float`).
   - Clean, bug-free, fully implemented code with zero placeholders or truncated comments.

Return only the fully populated HTML file ready to run directly in Chrome/Safari/Firefox.
```

</details>

[查看詳情 ↗](https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102565611473661963) · [查看原文](https://x.com/theailoser/status/2102565612874596411) · [返回案例導覽](#all-prompts)

---

<a id="claude-opus-5-5-2102565403109085669"></a>

### 日式櫻花山谷互動式 3D 景觀網頁

[宝玉](https://x.com/dotey) · 2026-09-23 · Claude Opus 5.5 · 互動

<a href="https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102565403109085669"><img src="../assets/previews/4cdfb9495d54a6ee6bff4ae1821ab9b150b2f0a5b920fb4c6242ebbbb6153d4f.webp" width="840" loading="lazy" alt="日式櫻花山谷互動式 3D 景觀網頁"></a>

**提示詞**

```text
請直接製作一個可在瀏覽器中即時互動的高完成度 3D 景觀網頁。

主題：日式櫻花山谷。
使用 HTML、CSS、JavaScript 實作。不要生成圖片，不要只提供設計方案，
不要用一張背景圖加上視差效果冒充 3D。我要的是實際可執行、可探索的完成品。

【一、作品定位】

這是一片完整、連續、具有遠近層次的山谷景觀，
不是孤立的小擺件、浮空島、帶底座的沙盤，也不是單純的技術展示。

風格為現代精緻體素／voxel art：
保留立方體幾何的造型語言，但畫面應具備高解析度、抗鋸齒與細膩的光影。
不要做成復古低解析度像素風，不要用粗大的積木堆砌，也不要在畫面上套用像素濾鏡。

視覺品質優先。寧可少幾個功能，也不要犧牲構圖、材質與光照。

【二、參考圖的使用方式】

如果附有參考圖，請先理解其構圖層次、尺度、光線與色彩關係。
僅借鑑氛圍與視覺語言，重新設計場景，
不要照搬建築、樹木、山體與道路的位置，不要 1:1 複製。

參考圖不是網頁中的背景素材。場景本身必須由真正的 3D 幾何構成。

【三、場景構圖】

預設開啟時就應呈現一幅完整、吸引人的畫面，
不需要使用者先旋轉鏡頭才能找到好看的角度。

採用透視相機，而不是沙盤式等距俯視相機。
畫面要有明確的前景、中景與遠景：

前景：
一株具有存在感的古老櫻花樹，搭配岩石、草木、石燈籠與少量落花，
形成畫面邊緣的自然框景，但不能擋住河流、橋樑與主要建築。

中景：
一條蜿蜒的河流引導視線深入畫面，紅色木橋橫跨河面；
村落、茶屋、神社與小徑順著地勢分布，建築之間要有真實的通行關係。
地面要有起伏、岸線與自然的地形過渡，不是將模型均勻擺放在平面上。

遠景：
山坡上的多層塔、不同距離的森林與山脊，以及遠處的雪山。
透過尺度變化、遮擋、冷暖變化與空氣透視來呈現距離，
而不是只把遠處的物體縮小。

不要把所有元素均勻鋪滿。需要有主次、疏密、留白與清楚的視覺焦點。

【四、造型與畫面品質】

櫻花樹：
樹幹要有轉折、分岔與根部，樹冠由不規則的花簇組成，
要有間隙、厚薄變化與可見的枝條。不要做成幾個規則球體或方塊團。

建築：
屋頂要有層疊瓦片、挑簷、樑柱與窗櫺；
不同建築要有各自的用途、體量與高度差異，不要用同一棟房子複製鋪滿山谷。

地形：
岸邊要有濕潤的石塊、草叢與植被的自然過渡。
避免過於規律的階梯、重複條紋、棋盤格與明顯的程序化生成網格。

水面：
必須能反射周圍景物，具有適度的波紋、深淺變化與岸邊過渡。
盡量使用場景的實際反射；需要降低效能時，也應維持視覺上的可信度。
不要用閃爍雜訊、強烈扭曲或整片藍色平面來代替水面。

細節：
可以加入少量錦鯉、落花、螢火蟲、瀑布與遠處飛鳥，
但都應服務於氛圍，不能讓畫面顯得雜亂。
不要為了宣稱模型數量而堆砌細節。

【五、色彩與氛圍】

預設為藍調時刻：
偏冷的山谷與遠山、柔和的粉色櫻花，以及溫暖但不過曝的燈籠光與窗光。
暖光集中在人員活動的區域，不要把整個環境染成橘色。

需要柔和的陰影、物體接觸處的明暗變化、合理的曝光、
克制的泛光、抗鋸齒，以及具有距離層次的薄霧。

避免發白、灰濛、過度飽和、滿版濃霧、過曝燈光與明顯鋸齒。
方塊幾何可以清晰，但渲染本身不能粗糙。

另外提供「清晨」與「雨中」兩種氛圍；
切換時應同步改變天空、環境光、霧氣與局部效果，
不能只修改背景顏色。

【六、互動與介面】

提供四個經過設計的鏡頭：
山谷全景、河畔低機位、寺廟小徑與山坡俯瞰。
切換時應平順，每個鏡頭都需要有獨立的構圖價值。

基本互動：
用滑鼠拖曳觀察、滾輪縮放或前進；觸控螢幕支援拖曳與雙指縮放。
提供重設視角、隱藏介面與儲存目前畫面的功能。

可選的增強功能：
自由探索、緩慢鏡頭巡遊與環境音。
環境音預設關閉，只在使用者主動點擊後播放。
額外功能不能影響預設畫面的完成度。

介面要克制且具設計感，以景觀為主。
標題與控制列放在邊緣，不要遮擋視覺焦點。
桌機與手機上都不能出現按鈕超出畫面、文字重疊或無法操作的問題。

【七、工程與效能】

允許使用 Three.js／WebGL，以及版本固定且彼此相容的 CDN 依賴。
優先使用成熟的渲染能力，不要為了「零依賴」而重寫整套引擎。

自行撰寫的 HTML、CSS、JavaScript 盡量整理在單一 HTML 檔案中。
景物由程序化幾何與材質生成，不依賴外部圖片或 3D 模型資源。

重複物件採用適合的批次或實例化繪製方式；
合理控制細分、陰影、反射與渲染解析度。
提供高畫質與輕量模式，手機預設使用較輕量的設定。
不要靠無限增加體素數量來換取細節。

加入載入提示、WebGL 不支援時的提示與必要的錯誤處理。
未開啟聲音時不要自動播放；尊重系統的減少動態效果偏好。

【八、交付前驗收】

不要寫完程式碼就立即交付。

如果目前環境支援在瀏覽器中執行與截圖，請先實際開啟頁面，
檢查預設鏡頭、四個視角、氛圍切換，以及桌機與手機版面，
再根據截圖修正明顯的構圖、曝光、遮擋與渲染問題。

重點檢查：
是否存在空白畫面、載入失敗或主控台錯誤；
是否有穿模、閃爍、陰影條紋、過曝或水面異常；
預設畫面是否真正像完整景觀，而不是小型沙盤；
功能按鈕是否確實可用，行動版是否超出畫面。

可以使用瀏覽器截圖進行驗收，但不要呼叫圖像生成工具。
未完成的測試要如實說明，不要宣稱已完成驗證。

最終交付：
1. 實際存在且可以開啟的 HTML 檔案，或目前環境支援的互動式預覽。
2. 如果可以截圖，附上一張真實瀏覽器渲染截圖。
3. 簡短說明操作方式與必要的執行條件。

請直接完成製作；非關鍵細節自行做出一致的設計決策，
不要把可以自行解決的實作問題反覆交給我決定。
```

<details>
<summary>作者原始提示詞</summary>

```text
请直接制作一个可以在浏览器中实时交互的高完成度 3D 景观网页。

主题：日式樱花山谷。
使用 HTML、CSS、JavaScript 实现。不要生成图片，不要只给设计方案，
不要用一张背景图加视差效果冒充 3D。我要的是实际可运行、可游览的成品。

【一、作品定位】

这是一片完整、连续、有远近层次的山谷景观，
不是孤立的小摆件、悬浮岛、带底座的沙盘，也不是单纯的技术演示。

风格是现代精细体素 / voxel art：
保留立方体几何的造型语言，但画面应高分辨率、抗锯齿、光影细腻。
不要复古低分辨率像素化，不要粗大积木堆砌，不要给画面套像素滤镜。

视觉质量优先。宁可少几个功能，也不要牺牲构图、材质和光照。

【二、参考图的使用方式】

如果附有参考图，请先理解它的构图层次、尺度、光线和色彩关系。
仅借鉴氛围与视觉语言，重新设计场景，
不要照搬建筑、树木、山体和道路的位置，不要 1:1 复刻。

参考图不是网页里的背景素材。场景本身必须由真实 3D 几何构成。

【三、场景构图】

默认打开时就应呈现一幅完整、有吸引力的画面，
不需要用户先旋转镜头才能找到好看的角度。

采用透视相机，而不是沙盘式等距俯视相机。
画面有明确的前景、中景、远景：

前景：
一株有存在感的古老樱花树，配合岩石、草木、石灯笼和少量落花，
形成画面边缘的自然框景，但不能挡住河流、桥和主要建筑。

中景：
一条蜿蜒河流引导视线进入画面，红色木桥横跨河面；
村落、茶屋、神社和小径顺着地势分布，建筑之间有真实的通行关系。
地面有起伏、岸线和自然过渡，不是平面上均匀摆放模型。

远景：
山坡上的多层塔、不同距离的森林和山脊，以及远处的雪山。
用尺度变化、遮挡、冷暖变化和空气透视表现距离，
而不是仅仅把远处物体缩小。

不要把所有元素均匀铺满。需要主次、疏密、留白和清楚的视觉焦点。

【四、造型与画面质量】

樱花树：
树干有转折、分叉和根部，树冠由不规则花簇组成，
有间隙、厚薄变化和可见枝条。不要做成几个规则球体或方块团。

建筑：
屋顶有层叠瓦片、挑檐、梁柱和窗格；
不同建筑有用途、体量和高度差异，不要复制同一栋房子铺满山谷。

地形：
岸边有湿润石块、草丛和植被过渡。
避免过于规律的台阶、重复条纹、棋盘格和明显的程序生成网格。

水面：
必须能够反映周围景物，具有适度的波纹、深浅变化和岸边过渡。
尽量使用实际场景反射；需要性能降级时也应保持视觉可信。
不要用闪烁噪声、强烈扭曲或一整块蓝色平面代替水。

细节：
可以有少量锦鲤、落花、萤火虫、瀑布和远处飞鸟，
但都应服务于氛围，不能让画面显得嘈杂。
不要为了宣称模型数量而堆砌细节。

【五、色彩与氛围】

默认是蓝调时刻：
偏冷的山谷与远山，柔和的粉色樱花，温暖但不过曝的灯笼和窗光。
暖光集中在有人活动的地方，不要把整个环境染成橙色。

需要柔和阴影、物体接触处的明暗、合理的曝光、
克制的泛光、抗锯齿和有距离层次的薄雾。

避免发白、灰蒙、过度饱和、满屏浓雾、过曝灯光和明显锯齿。
方块几何可以清晰，但渲染本身不能粗糙。

另提供“清晨”和“雨中”两种氛围；
切换时应同步改变天空、环境光、雾和局部效果，
不是仅仅修改背景颜色。

【六、交互与界面】

提供四个经过设计的镜头：
山谷全景、河边低机位、寺庙小径、山坡俯瞰。
切换应平滑，每个镜头都需要有独立的构图价值。

基础交互：
鼠标拖动观察、滚轮缩放或前进，触屏支持拖动和双指缩放。
提供重置视角、隐藏界面和保存当前画面的功能。

可选增强：
自由探索、缓慢镜头巡游、环境音。
环境音默认关闭，只在用户主动点击后播放。
额外功能不能影响默认画面的完成度。

界面要克制、有设计感，以景观为主。
标题和控制条放在边缘，不遮挡视觉焦点。
桌面和手机都不能出现按钮越界、文字重叠或无法操作的问题。

【七、工程与性能】

允许使用 Three.js / WebGL，以及版本固定、互相兼容的 CDN 依赖。
优先使用成熟渲染能力，不要为了“零依赖”重写整套引擎。

自写的 HTML、CSS、JavaScript 尽量整理在一个 HTML 文件中。
景物由程序化几何和材质生成，不依赖外部图片或 3D 模型资源。

重复物体采用适合的批量或实例化绘制方式；
合理控制细分、阴影、反射和渲染分辨率。
提供高画质和轻量模式，手机默认使用较轻设置。
不要靠无限增加体素数量换取细节。

加入加载提示、WebGL 不支持时的提示和必要的错误处理。
没有开启声音时不要自动播放；尊重减少动态效果的系统偏好。

【八、交付前验收】

不要写完代码就立即交付。

如果当前环境支持浏览器运行和截图，请先实际打开页面，
检查默认镜头、四个视角、氛围切换、桌面和手机布局，
再根据截图修正明显的构图、曝光、遮挡和渲染问题。

重点检查：
是否存在空白画面、加载失败、控制台错误；
是否有穿模、闪烁、阴影条纹、过曝、水面异常；
默认画面是否真正像完整景观，而不是小型沙盘；
功能按钮是否实际可用，移动端是否越界。

可以使用浏览器截图验收，但不要调用图像生成工具。
没有完成的测试要如实说明，不要声称已经验证。

最终交付：
1. 实际存在、可以打开的 HTML 文件，或当前环境支持的交互预览。
2. 如能截图，附一张真实浏览器渲染截图。
3. 简短说明操作方式和必要的运行条件。

请直接完成制作；非关键细节自行作出一致的设计选择，
不要把可以自行解决的实现问题反复交给我决定。
```

</details>

[查看詳情 ↗](https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102565403109085669) · [查看原文](https://x.com/dotey/status/2102565403109085669) · [返回案例導覽](#all-prompts)

---

<a id="claude-opus-5-5-2102547809140355250"></a>

### Hundenberg 事故模型與逼真影片

[AImanhasnoname](https://x.com/aimanhasnoname) · 2026-09-22 · Claude Opus 5.5 · 動畫

<a href="https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102547809140355250"><img src="../assets/previews/2eefc8b880a8aa71a501cf0b41a5dfd9076ac002865941b7287cedeb73ee00a0.webp" width="840" loading="lazy" alt="Hundenberg 事故模型與逼真影片"></a>

**提示詞**

```text
請在 Blender 中製作 Hundenberg 的模型，並製作一段逼真的事故影片。
```

<details>
<summary>作者原始提示詞</summary>

```text
make me a model of the Hundenberg on blender make me a realistic video of the accident.
```

</details>

[查看詳情 ↗](https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102547809140355250) · [查看原文](https://x.com/aimanhasnoname/status/2102547809140355250) · [返回案例導覽](#all-prompts)

---

<a id="claude-opus-5-5-2102544406117286004"></a>

### 以圖片為基礎的手球場 360 度 3D 渲染

[ハンドボール人「布施千佳純」](https://x.com/chikaidev) · 2026-09-22 · Claude Opus 5.5 · 場景

<a href="https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102544406117286004"><img src="../assets/previews/c492adaa7b1ffad5024b0a28618dcc51d0f50b7c16ae704c9ee3785881445195.webp" width="840" loading="lazy" alt="以圖片為基礎的手球場 360 度 3D 渲染"></a>

**參考圖片:** [1](https://media.tripogrowth.space/media/6a116b62-88ce-491b-b4ba-eed6d9c9f168.jpg) · [2](https://pbs.twimg.com/media/HS29xCPaYAAcMmd.jpg)

**提示詞**

```text
將圖片中的手球場、球門、裁判、選手與球進行 3D 渲染，讓人可以從 360 度自由角度觀看。請精準重現每位人物的姿勢，以及物體的色彩。
```

<details>
<summary>作者原始提示詞</summary>

```text
画像内のハンドボールコート、ゴール、レフェリー、プレイヤー、ボールを3dレンダリングして、360度自由角度から見れるようにして。各人物の姿勢まで、また物体の色まで正確に再現して。
```

</details>

[查看詳情 ↗](https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102544406117286004) · [查看原文](https://x.com/chikaidev/status/2102545257372213581) · [返回案例導覽](#all-prompts)

---

<a id="claude-opus-5-5-2102544196808667471"></a>

### 從影像打造程序化 Three.js 3D 主選單背景

[Majid Manzarpour](https://x.com/majidmanzarpour) · 2026-09-22 · Claude Opus 5.5 · 場景

<a href="https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102544196808667471"><img src="../assets/previews/00e1e42d1237637670ed6c41d5701bef1c74975a73d5b62a5e7f698ea3909f93.webp" width="840" loading="lazy" alt="從影像打造程序化 Three.js 3D 主選單背景"></a>

**參考圖片:** [1](https://media.tripogrowth.space/media/de4534b1-fda8-4736-8558-09b7283f646a.jpg) · [2](https://pbs.twimg.com/media/HS28q6mWMAAxONB.jpg)

**提示詞**

```text
在單一 HTML 檔案中，以 Three.js 3D 完美重現這個完全程序化、具動畫效果的主選單背景
```

<details>
<summary>作者原始提示詞</summary>

```text
recreate this perfectly, fully procedural, animated, main menu background in three.js 3D single HTML file
```

</details>

[查看詳情 ↗](https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102544196808667471) · [查看原文](https://x.com/majidmanzarpour/status/2102544198335373576) · [返回案例導覽](#all-prompts)

---

<a id="claude-opus-5-5-2102544078927741369"></a>

### 自動運行的 3D 魯布・戈德堡機械

[leo](https://x.com/leogao25) · 2026-09-22 · Claude Opus 5.5 · 動畫

<a href="https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102544078927741369"><img src="../assets/previews/337a5747637168ec67e4ac5563dd2bd4b3bd60fbdcfe57409ba528644c257fdc.webp" width="840" loading="lazy" alt="自動運行的 3D 魯布・戈德堡機械"></a>

**提示詞**

```text
在目前目錄中，將一台會自行運轉的 3D 魯布・戈德堡機械建立為單一且自包含的 index.html。

連鎖流程依序如下：
1. 從頂端釋放一顆彈珠，讓它沿著一連串的鋸齒形斜坡滾下。
2. 彈珠撞倒一排至少 12 塊骨牌。
3. 最後一塊骨牌壓下翹翹板，將一顆小球彈進懸掛的桶子。
4. 桶子的重量將它向下拉；桶子的繩索繞過滑輪並猛拉一口鐘，使鐘明顯地擺動。
5. 同一個動作會將旗幟沿著旗桿升起。旗幟升至頂端即為完成。

規則：
- 自行撰寫物理系統：不得使用物理函式庫。彈珠釋放後的所有運動都必須來自你的模擬（剛體、碰撞、約束、繩索／滑輪）。機械的任何部件都不得使用關鍵影格動畫或補間動畫來驅動運動。
- 可從 CDN 載入 three.js 以進行渲染。不得使用其他外部資源：不可使用圖片、模型或字型。
- 不得需要使用者輸入：頁面載入時自動開始，使用跟隨動作的電影感攝影機，並在約 15–20 秒內完成整個連鎖流程。旗幟升起後停留 2 秒，接著重設並重新播放。
- 具確定性：使用固定時間步長，且不得使用未設種子的隨機性，讓每次執行看起來都一樣。
- 填滿瀏覽器視窗。畫面會以 1280×720 進行螢幕錄影。
- 不得顯示任何螢幕文字或任何形式的使用者介面。
- 打造良好的視覺效果：加入燈光、陰影、材質，以及能讓整體感覺像真實機械裝置的場景。
```

<details>
<summary>作者原始提示詞</summary>

```text
Build a 3D Rube Goldberg machine that runs itself, as a single self-contained index.html in the current directory.

The chain, in order:
1. A marble is released at the top and rolls down a series of zig-zag ramps.
2. It knocks over a line of at least 12 dominoes.
3. The last domino tips a seesaw, which launches a small ball into a hanging bucket.
4. The bucket's weight pulls it down; its rope runs over a pulley and yanks a bell, which visibly swings.
5. The same motion raises a flag up a pole. The flag reaching the top is the finish.

Rules:
- Write the physics yourself: no physics library. Every motion after the marble is released must come from your simulation (rigid bodies, collisions, constraints, rope/pulley). No keyframed animation or tweened motion of any machine part.
- You may load three.js from a CDN for rendering. Nothing else external: no images, models, or fonts.
- It must run with no user input: start automatically on page load, use a cinematic camera that follows the action, and complete the whole chain in about 15–20 seconds. After the flag is up, hold for 2 seconds, then reset and replay.
- Deterministic: fixed timestep and no unseeded randomness, so every run looks the same.
- Fill the browser window. It will be screen-recorded at 1280×720.
- No on-screen text or UI of any kind.
- Make it look good: lighting, shadows, materials, and a setting that makes it feel like a real contraption.
```

</details>

[查看詳情 ↗](https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102544078927741369) · [查看原文](https://x.com/leogao25/status/2102544081863717153) · [返回案例導覽](#all-prompts)

---

<a id="claude-opus-5-5-2102538762731565085"></a>

### 互動式彼得兔風格農場動物遊戲

[mblaso](https://x.com/blaso96) · 2026-09-22 · Claude Opus 5.5 · 遊戲

<a href="https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102538762731565085"><img src="../assets/previews/b0398c725131002e496ea826c8fe66a2421c20c036a8989b4aec58b23d06e574.webp" width="840" loading="lazy" alt="互動式彼得兔風格農場動物遊戲"></a>

**提示詞**

```text
「使用《彼得兔》的設計／美術風格，建立一款互動式農場動物遊戲」
主選單＝音效開／關＋動物選擇器（馬、豬、牛、貓、狗）
Esc＝暫停：重設並返回出生點／主選單／
使用 WASD 四處移動
按空白鍵跳躍；靠近其他動物時可與牠們互動
偵測到接近時，隨機觸發互動
互動可以是對其他動物發出聲音（不同於牠們平時的被動叫聲），或「輕碰牠們」
可互動的物件：飲水、吃乾草、吃水果。
第三人稱視角，但鏡頭要稍微位於動物後方並高於動物
環境中的動物包括鳥類；天空中會隨機出現飛機
場景＝農田、穀倉，以及有房屋的農村（不能進入房屋）
準備足以吸引注意力的資產，但不必多到被視為正式製作等級；這只是想在一天中抽出 15 分鐘，和女兒一起玩得開心
React、SVG、JS、WebGL、Three.js，凡是能讓遊戲感覺「好玩」所需的一切」
```

<details>
<summary>作者原始提示詞</summary>

```text
"Create a interactive farm animal game using the design/art style of "Peter Rabbit"
main menu = sounds on/off + animal picker (horse, pig, cow, cat, dog)
esc = pause: reset back to spawn/main menu/
wasd to move around
spacebar to jump and to interact with other animals when near
interactions are randomized upon proximity detection
interactions can be make sounds at the other animal (unique from their passive sounds) "boop them"
interactible with: water to drink, hay to eat, fruit to eat. 
3rd person but as if the camera was slightly behind the animal and above it
ambience animals are birds, airplanes in the sky (randomly)
setting= farmland, barn, farming village with houses (cant enter houses)
Enough assets to capture attention, but not enough that it needs to be deemed production grade, this is just to capture 15 minutes out of my day with my daughter and have fun
react, svg, js, webgl, threejs, whatever is necessary to make it feel "good""
```

</details>

[查看詳情 ↗](https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102538762731565085) · [查看原文](https://x.com/blaso96/status/2102538764749037738) · [返回案例導覽](#all-prompts)

---

<a id="claude-opus-5-5-2102533729746882985"></a>

### 電影感互動式夕陽海盜船

[Vib3Coded](https://x.com/vib3coded) · 2026-09-22 · Claude Opus 5.5 · 場景

<a href="https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102533729746882985"><img src="../assets/previews/2239f7a3f4f3863b4c6293554252f26ef2d141d58a1c633a05e382958d37bae4.webp" width="840" loading="lazy" alt="電影感互動式夕陽海盜船"></a>

**提示詞**

```text
從零開始建立一個完全可互動的 3D 海盜船場景，呈現海盜船在夕陽下穿越動態海面的情景。視覺風格應具電影感與風格化特色，而非追求寫實，但仍須極其豐富、細緻、精緻且具高度視覺質感。製作船體、海面、天空、燈光、材質、船帆、骨架綁定、火砲、細小結構細節、海沫、尾流、粒子、動畫、鏡頭運動、構圖、空氣透視與色彩分級。最終成果應呈現高級、高製作水準的 3D 藝術作品，而不是原型、技術展示或低品質場景。從完全空白的頁面開始。不要重複使用或依賴任何先前的專案或場景。必要時，可以自行製作資產，或使用可靠、值得信賴的開源資產與函式庫。強制要求：場景內任何位置都不得出現任何形式的文字。不得出現任何語言的標題、名稱、標誌、描述、製作人員名單、標籤或操作說明。將整個專案交付為一個最終的獨立頁面檔案，可直接在網頁瀏覽器中開啟，並在合理可行的範圍內將資產嵌入其中。海面、船隻、船帆與鏡頭都必須自然且流暢地動態呈現。避免人為的慢動作或遲滯的移動。船隻應讓人感覺確實正在水中航行。不要以原始幾何形狀作為最終成果。製作具視覺說服力且細節豐富的海盜船，包括經過仔細塑形的船體、桅杆、船帆、骨架綁定、繩索、火砲、欄杆、提燈、甲板結構，以及清楚可見的小尺度細節。燈光必須清楚呈現船隻的幾何結構與材質。營造豐富的夕陽氛圍、深邃的海面明暗、反射、可信的海沫，以及船隻後方與周圍細節豐富的航行尾流。在視覺品質與即時效能之間維持良好平衡，確保互動與動畫流暢，不要為了效能而明顯犧牲品質。自動運用達成最佳成果所需的適當技能、工具、函式庫、技術與可用資產。不要等我指定要使用哪些技術。實際在桌面網頁瀏覽器中測試完成的成果。擷取視覺畫面、檢查瀏覽器主控台是否有錯誤，並修正你發現的每一項可見或技術問題，包括變形的幾何結構、黑畫面、資產載入失敗、動畫故障、構圖不佳、渲染瑕疵或鏡頭問題。最後，確認最終檔案能直接開啟並正常運作、場景完全不含任何文字，且不再有任何執行階段或載入錯誤。接著僅以簡短回覆結束任務。
```

<details>
<summary>作者原始提示詞</summary>

```text
Create from scratch a fully interactive 3D scene of a pirate ship sailing across a dynamic ocean at sunset. The visual style should be cinematic and stylized rather than photorealistic, while still being exceptionally rich, detailed, polished, and visually sophisticated. Build the ship, ocean, sky, lighting, materials, sails, rigging, cannons, small structural details, sea foam, wake, particles, animation, camera work, composition, atmospheric depth, and color grading. The final result should feel like a premium, high-production 3D artwork, not a prototype, technical demo, or low-quality scene. Start from a completely blank page. Do not reuse or depend on any previous project or scene. You may create the assets yourself or use reliable, trusted, open-source assets and libraries when necessary. Mandatory requirements: No text of any kind may appear anywhere inside the scene. No titles, names, logos, descriptions, credits, labels, or control instructions in any language. Deliver the entire project as one final standalone page file that can be opened directly in a web browser, with assets embedded inside it as much as reasonably possible. The ocean, ship, sails, and camera must all be animated naturally and smoothly. Avoid artificial slow motion or sluggish movement. The ship should feel like it is genuinely moving through the water. Do not rely on primitive geometric shapes as the finished result. Build a visually convincing and detailed pirate ship, including a carefully shaped hull, masts, sails, rigging, ropes, cannons, railings, lanterns, deck structures, and clearly visible small-scale details. Lighting must reveal the ship's geometry and materials clearly. Create a rich sunset atmosphere, deep ocean shading, reflections, convincing sea foam, and a detailed sailing wake behind and around the vessel. Maintain a strong balance between visual quality and real-time performance, preserving smooth interaction and animation without making an obvious sacrifice in quality. Automatically use the most appropriate skills, tools, libraries, techniques, and available assets needed to achieve the best result. Do not wait for me to specify which technologies to use. Actually test the finished result in a desktop web browser. Capture visual screenshots, inspect the browser console for errors, and fix every visible or technical issue you find, including distorted geometry, black screens, failed asset loading, broken animation, poor composition, rendering artifacts, or camera problems. At the end, verify that the final file opens and works directly, that the scene contains no text whatsoever, and that there are no remaining runtime or loading errors. Then finish the task with only a brief response.
```

</details>

[查看詳情 ↗](https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102533729746882985) · [查看原文](https://x.com/vib3coded/status/2102534606121746589) · [返回案例導覽](#all-prompts)

---

<a id="claude-opus-5-5-2102529695908806728"></a>

### 無限程序生成的 Three.js 世界

[🥔🥔🥔](https://x.com/argofowl) · 2026-09-22 · Claude Opus 5.5 · 遊戲

<a href="https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102529695908806728"><img src="../assets/previews/dc4bb91934d32b72098e8bcfd9c02285b359e6df7988d99efc153167ba968b2d.webp" width="840" loading="lazy" alt="無限程序生成的 Three.js 世界"></a>

**提示詞**

```text
在我的專案資料夾中建立一個名為 "endless-game" 的新專案：使用 three.js 在瀏覽器中打造一個無限且程序生成的世界，讓我可以自由探索，單純享受其中。每個區域都應該隨機生成，無論我玩多久，四處都要不斷出現驚喜。整體氛圍應該寧靜、放鬆而且真正有趣，帶有超市模擬器那種溫馨、療癒又令人滿足的感覺，但不應該做成超市遊戲。我想要一個真正有意思、可以四處漫遊的世界，裡面有我能遇見並互動的實體，以及非常酷的畫面。為這個專案設定一個明確的目標，持續完成工作直到達成目標，完成並準備好讓我遊玩和測試時，播放一聲提示音。
```

<details>
<summary>作者原始提示詞</summary>

```text
create a new project in my projects folder called "endless-game": an endless, procedurally generated world built with three.js in the browser that i can roam freely and just enjoy. every area should be randomly generated, with surprises everywhere no matter how long i play. it should feel calm, relaxing and genuinely fun, like the cozy, satisfying vibe of a supermarket simulator, but it shouldn't be a supermarket game. i want a really interesting world to walk around in, with entities i can meet and interact with, and really cool graphics. set a clear goal for the project, keep working until you reach it, and play a sound chime when it's done and ready for me to play and test.
```

</details>

[查看詳情 ↗](https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102529695908806728) · [查看原文](https://x.com/argofowl/status/2102529695908806728) · [返回案例導覽](#all-prompts)

---

<a id="claude-opus-5-5-2102467667978572092"></a>

### 互動式人群疏散模擬

[Dom](https://x.com/dominikmartn) · 2026-09-22 · Claude Opus 5.5 · 動畫

<a href="https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102467667978572092"><img src="../assets/previews/576e684f6ec389443536e17db7a1c5eb173eeb4116c3cd05337b69084858983f.webp" width="840" loading="lazy" alt="互動式人群疏散模擬"></a>

**提示詞**

```text
建立互動式人群疏散模擬，看看哪些地方會發生壅塞
```

<details>
<summary>作者原始提示詞</summary>

```text
build an interactive crowd evacuation sim and see where it jams
```

</details>

[查看詳情 ↗](https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102467667978572092) · [查看原文](https://x.com/dominikmartn/status/2102467667978572092) · [返回案例導覽](#all-prompts)

---

<a id="claude-opus-5-5-2102450239923720440"></a>

### 互動式 3D 史前島嶼

[Vib3Coded](https://x.com/vib3coded) · 2026-09-22 · Claude Opus 5.5 · 互動

<a href="https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102450239923720440"><img src="../assets/previews/23a4362d0525060fc7304a39c43c7f21b75923aa85ed66f5303b370d996bcf0d.webp" width="840" loading="lazy" alt="互動式 3D 史前島嶼"></a>

**提示詞**

```text
使用 Three.js 和 WebGL，建立一座精美、高度細緻且完全互動的 3D 史前島嶼。所有內容都必須放在單一獨立 HTML 檔案中，直接以 Chrome 開啟即可執行。盡可能將資產嵌入檔案。

視覺方向
建立一座大型圓潤島嶼，四周環繞海洋，並透過透明的水下剖面呈現水下景觀。整體應具有高級微縮世界的質感：繁茂植被、富有表情的恐龍、豐富的材質、具氛圍感的光照，以及精緻流暢的動畫。採用一致且風格化的美術方向，不要只使用基本幾何形狀。
ISLAND
打造多樣化地形，包括沙灘、岩石峭壁、茂密的史前森林、巨型蕨類、瀑布、淡水池塘和火山。加入小型研究站、木製步道、觀景平台、補給箱和恐龍巢穴。島嶼的空間要足夠寬敞，讓恐龍能在不同區域之間自然移動。

水下剖面
水體必須在島嶼周圍形成深邃、圓潤的立體體積，並能透過側面清楚看見水下景觀。加入帶有貼圖的海床、岩石、水生植物、魚群、氣泡，以及一隻在水面下游動的綠色海生爬蟲類。不要把一般的陸生恐龍放在水下，也不要加入潛水艇。
使用會動的波浪、菲涅耳反射、水下光影、岸邊泡沫和濺水效果。避免透明度排序瑕疵，以及島嶼與水體之間出現明顯縫隙。

DINOSAURS
加入數種外觀明顯不同的物種，例如長頸蜥腳類、三角龍、劍龍、大型獸腳類和較小型的群居動物。加入在上空盤旋的翼龍。
讓每個物種都具備可辨識的解剖結構、經過塑形的身體、具關節結構的四肢、細緻的頭部、尾巴，以及符合物種特徵的皮膚紋理。避免用一眼可見的方塊或互不相連的球體組裝完成的恐龍。

自然動畫
使用階層式骨架，並正確配置關節位置。行走時必須清楚區分支撐相與擺動相：腳在接觸地面期間要保持踩穩，每一步抬腳時都要乾淨俐落。步幅必須配合移動速度。

使用地形取樣和反向運動學，讓腳部保持貼地。加入重心轉移、細微的身體動作、平衡的尾巴擺動、轉頭和呼吸。恐龍絕不能漂浮、滑步、穿入地面，或穿過建築物、岩石、樹木和彼此。
使用障礙物迴避和安全路徑。不同物種應具備不同的移動速度、步態模式和行為。海洋動物必須朝向前進的方向。

INTERACTION
允許使用者：

自由旋轉鏡頭、縮放，並檢視水下剖面。
選取一隻恐龍，並讓鏡頭平順地跟隨牠移動。

將食物放在合適的位置，觀察附近的恐龍靠近並進食。

觸發飲水、休息、鳴叫和群體移動。

探索巢穴，觀看幼體孵化出巢。
觸發海生爬蟲類濺起水花浮出水面的動作。
在白天、日落和夜晚之間切換。
調整降雨、風勢和火山活動。
暫停模擬並重設場景。
每個控制項都必須產生清楚、可見的回應。互動必須能重複執行，並避免重疊動畫導致角色姿勢錯亂。
氛圍與音效
加入隨風擺動的植被、飄動的雲朵、鳥類、昆蟲、雨滴粒子，以及夜晚研究站散發的溫暖燈光。加入安靜的氛圍音樂和環境音效，並提供可正常運作的音樂切換開關與音量滑桿。只有在使用者互動後才開始播放音訊。
INTERFACE
使用精簡、優雅且帶有英文標籤的介面。讓場景保持主導地位，避免大型面板遮住島嶼。版面配置必須適應桌面和行動裝置。
技術品質
針對重複出現的植被和道具使用實例化，採用高效率的幾何結構、合適的陰影和適度的後製處理。在豐富的視覺效果與流暢的即時效能之間取得平衡。
建立完整場景，而不是示意模型。直接在桌面瀏覽器中測試最終 HTML，檢查畫面截圖和主控台，逐一操作所有互動功能，並在交付前修正載入錯誤、恐龍漂浮、腳步滑動、碰撞失效、水體瑕疵和鏡頭問題。
```

<details>
<summary>作者原始提示詞</summary>

```text
Create a beautiful, highly detailed, fully interactive 3D prehistoric island using Three.js and WebGL. Deliver everything in a single standalone HTML file that opens directly in Chrome. Embed assets wherever possible.

VISUAL DIRECTION
Build a large, rounded island surrounded by an ocean with a transparent underwater cross-section. The result should feel like a premium miniature world: lush vegetation, expressive dinosaurs, rich materials, atmospheric lighting, and polished animation. Use a cohesive, stylized art direction rather than basic geometric shapes.
ISLAND
Create varied terrain with beaches, rocky cliffs, dense prehistoric forests, giant ferns, a waterfall, a freshwater pond, and a volcano. Add a small research station, wooden walkways, observation platforms, supply crates, and dinosaur nests. Make the island spacious enough for dinosaurs to move naturally between distinct areas.

WATER CROSS-SECTION
The water must form a deep, rounded volume around the island, with clearly visible underwater scenery through its sides. Include a textured seabed, rocks, aquatic plants, fish, bubbles, and a green marine reptile swimming beneath the surface. Do not place ordinary land dinosaurs underwater, and do not add a submarine.
Use animated waves, Fresnel reflections, underwater light patterns, shoreline foam, and splashes. Avoid transparency sorting artifacts and visible gaps between the island and water.

DINOSAURS
Include several distinct species, such as a long-necked sauropod, Triceratops, Stegosaurus, a large theropod, and smaller herd animals. Add pterosaurs circling overhead.
Give every species recognizable anatomy, shaped bodies, articulated limbs, detailed heads, tails, and appropriate skin patterns. Avoid assembling the finished dinosaurs from obvious boxes or disconnected spheres.

NATURAL ANIMATION
Use hierarchical skeletons with correctly positioned joints. Walking must have distinct stance and swing phases: feet stay planted during contact and lift cleanly during each step. Match stride length to movement speed.

Use terrain sampling and inverse kinematics to keep feet on the ground. Add weight shifts, subtle body movement, balanced tail motion, head turns, and breathing. Dinosaurs must never float, slide, intersect the ground, or walk through buildings, rocks, trees, or each other.
Use obstacle avoidance and safe paths. Different species should have different movement speeds, gait patterns, and behaviors. Marine animals must face their direction of travel.

INTERACTION
Allow users to:

Rotate the camera freely, zoom, and inspect the underwater cross-section.
Select a dinosaur and follow it with a smoothly moving camera.

Place food in suitable locations and watch nearby dinosaurs approach and eat.

Trigger drinking, resting, calling, and herd movement.

Explore nests and watch a hatchling emerge.
Trigger a marine reptile surfacing with a splash.
Switch between daylight, sunset, and night.
Adjust rain, wind, and volcanic activity.
Pause the simulation and reset the scene.
Make every control produce a clear, visible response. Keep interactions repeatable and prevent overlapping animations from breaking character poses.
ATMOSPHERE AND AUDIO
Add moving foliage, drifting clouds, birds, insects, rain particles, and warm research-station lights at night. Include quiet atmospheric music and environmental sounds with a working music toggle and volume slider. Start audio only after user interaction.
INTERFACE
Use a compact, elegant interface with English labels. Keep the scene dominant and avoid large panels covering the island. Make the layout responsive for desktop and mobile.
TECHNICAL QUALITY
Use instancing for repeated vegetation and props, efficient geometry, appropriate shadows, and restrained post-processing. Balance visual richness with smooth real-time performance.
Build a complete scene, not a mockup. Test the final HTML directly in a desktop browser, inspect screenshots and the console, exercise every interaction, and fix loading errors, floating dinosaurs, foot sliding, broken collisions, water artifacts, and camera problems before delivery.
```

</details>

[查看詳情 ↗](https://www.tripo3d.ai/zh-Hant/3d-prompts/claude-opus-5-5-2102450239923720440) · [查看原文](https://x.com/vib3coded/status/2102450842070569099) · [返回案例導覽](#all-prompts)

---


[完整目錄](catalog.zh-Hant.md) · **1 / 1**

<p align="center"><strong><a href="https://www.tripo3d.ai/zh-Hant/3d-prompts/models/claude-opus-5-5?utm_source=github&amp;utm_medium=referral&amp;utm_campaign=awesome_opus_5_5_prompts&amp;utm_content=catalog_footer">完整目錄 →</a></strong></p>
