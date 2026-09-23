<!-- Generated from Growth CMS by templates/catalog.md. Edit content in CMS; run npm run sync. -->

# Awesome Opus 5.5 Prompts — 1 / 1

[← Awesome Opus 5.5 Prompts](../README.md)

<p>
  <a href="../docs/catalog.en.1.md"><img alt="English" src="https://img.shields.io/badge/English-✓-238636?style=flat-square"></a>
  <a href="../docs/catalog.zh.1.md"><img alt="简体中文" src="https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-64748b?style=flat-square"></a>
  <a href="../docs/catalog.zh-Hant.1.md"><img alt="繁體中文" src="https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-64748b?style=flat-square"></a>
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

[Complete catalog](catalog.en.md) · **1 / 1**

<a id="all-prompts"></a>

<details>
<summary>Browse examples (11)</summary>

- [Interactive Eulerian Neon Fluid Simulation](#claude-opus-5-5-2102565611473661963)
- [Interactive 3D Japanese Cherry Blossom Valley Web Experience](#claude-opus-5-5-2102565403109085669)
- [Hundenberg accident model and realistic video](#claude-opus-5-5-2102547809140355250)
- [360-Degree 3D Rendering of a Handball Court from an Image](#claude-opus-5-5-2102544406117286004)
- [Procedural Three.js 3D main menu background from an image](#claude-opus-5-5-2102544196808667471)
- [Self-running 3D Rube Goldberg machine](#claude-opus-5-5-2102544078927741369)
- [Interactive Peter Rabbit-style farm animal game](#claude-opus-5-5-2102538762731565085)
- [Cinematic interactive pirate ship at sunset](#claude-opus-5-5-2102533729746882985)
- [Endless procedurally generated Three.js world](#claude-opus-5-5-2102529695908806728)
- [Interactive crowd evacuation simulation](#claude-opus-5-5-2102467667978572092)
- [Interactive 3D Prehistoric Island](#claude-opus-5-5-2102450239923720440)

</details>
<a id="claude-opus-5-5-2102565611473661963"></a>

### Interactive Eulerian Neon Fluid Simulation

[theailoser](https://x.com/theailoser) · 2026-09-23 · Claude Opus 5.5 · Animation

<a href="https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102565611473661963"><img src="../assets/previews/aed453c22b47b5e182d83ea4b126bd65e4391d679f7ad13bdfafe7c9d36fc8ff.webp" width="840" loading="lazy" alt="Interactive Eulerian Neon Fluid Simulation"></a>

**Prompt**

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

[View detail ↗](https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102565611473661963) · [Original post](https://x.com/theailoser/status/2102565612874596411) · [Back to examples](#all-prompts)

---

<a id="claude-opus-5-5-2102565403109085669"></a>

### Interactive 3D Japanese Cherry Blossom Valley Web Experience

[宝玉](https://x.com/dotey) · 2026-09-23 · Claude Opus 5.5 · Interactive

<a href="https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102565403109085669"><img src="../assets/previews/4cdfb9495d54a6ee6bff4ae1821ab9b150b2f0a5b920fb4c6242ebbbb6153d4f.webp" width="840" loading="lazy" alt="Interactive 3D Japanese Cherry Blossom Valley Web Experience"></a>

**Prompt**

```text
Create a polished 3D landscape web experience that can be explored and interacted with in real time in a browser.

Theme: Japanese cherry blossom valley.
Use HTML, CSS, and JavaScript. Do not generate images or provide only a design concept,
and do not fake 3D with a single background image and parallax effects. I need a working, explorable finished product.

【1. Creative Direction】

Create a complete, continuous valley landscape with clear depth across near and distant areas,
not an isolated prop, floating island, diorama with a base, or mere technical demo.

The style is modern, refined voxel art:
retain the visual language of cubic geometry, while keeping the image high-resolution, antialiased, and finely lit.
Do not use retro low-resolution pixelation, oversized block construction, or a pixel filter over the scene.

Prioritize visual quality. It is better to include fewer features than to sacrifice composition, materials, or lighting.

【2. How to Use Reference Images】

If reference images are provided, first understand their compositional layers, scale, lighting, and color relationships.
Use them only as inspiration for the atmosphere and visual language, then redesign the scene,
without copying the positions of the buildings, trees, mountains, or roads or recreating the image 1:1.

The reference image is not background material for the web page. The scene itself must be built from real 3D geometry.

【3. Scene Composition】

When opened, the page should immediately show a complete, compelling composition,
so users should not have to rotate the camera first to find a good angle.

Use a perspective camera, not an orthographic, diorama-style top-down camera.
The composition must have a clear foreground, midground, and background:

Foreground:
a prominent old cherry tree with rocks, grasses, plants, a stone lantern, and a few fallen blossoms,
creating a natural frame around the edge of the image without blocking the river, bridge, or main buildings.

Midground:
a winding river that leads the eye into the scene, crossed by a red wooden bridge;
a village, teahouse, shrine, and paths distributed along the terrain, with believable circulation between the buildings.
The ground must have elevation changes, shorelines, and natural transitions rather than models placed evenly on a flat plane.

Background:
a multi-tiered pagoda on the hillside, forests at varying distances, mountain ridges, and snow-capped mountains in the distance.
Show distance through changes in scale, occlusion, warm-to-cool shifts, and atmospheric perspective,
rather than simply shrinking distant objects.

Do not distribute every element evenly across the scene. Establish hierarchy, variation in density, negative space, and a clear visual focal point.

【4. Modeling and Image Quality】

Cherry tree:
the trunk should have bends, branches, forks, and visible roots; the canopy should consist of irregular clusters of blossoms,
with gaps, variation in thickness, and visible branches. Do not make it out of a few regular spheres or blocky clumps.

Architecture:
roofs should include layered tiles, eaves, beams, columns, and lattice windows;
different buildings should vary in purpose, scale, and height. Do not fill the valley with copies of the same house.

Terrain:
include wet rocks, grasses, and vegetation transitions along the banks.
Avoid overly regular steps, repeating stripes, checkerboard patterns, and obvious procedural grids.

Water:
the surface must reflect its surroundings, with moderate ripples, depth variation, and natural transitions at the banks.
Use real scene reflections wherever possible; when reducing quality for performance, keep the result visually convincing.
Do not substitute flickering noise, extreme distortion, or a solid blue plane for water.

Details:
you may include a few koi, fallen blossoms, fireflies, waterfalls, and distant birds,
but they should support the atmosphere without making the image feel cluttered.
Do not pile on details just to advertise a high model count.

【5. Color and Atmosphere】

The default atmosphere is blue hour:
cool-toned valleys and distant mountains, soft pink cherry blossoms, and warm but not overexposed lantern and window light.
Keep the warm light concentrated in inhabited areas; do not tint the entire environment orange.

Use soft shadows, contact shading, sensible exposure,
restrained bloom, antialiasing, and layered fog that conveys distance.

Avoid a washed-out or gray appearance, oversaturation, dense fog across the entire scene, overexposed lights, and obvious aliasing.
The cubic geometry can remain crisp, but the rendering itself must not look crude.

Also provide “Morning” and “Rainy” atmospheres;
when switching between them, update the sky, ambient light, fog, and local effects together,
rather than merely changing the background color.

【6. Interaction and Interface】

Provide four designed camera views:
valley panorama, low riverside angle, temple path, and hillside overlook.
Transitions should be smooth, and each view must have its own compositional value.

Basic interaction:
drag with the mouse to look around, and use the scroll wheel to zoom or move forward; support dragging and pinch-to-zoom on touchscreens.
Provide controls to reset the view, hide the interface, and save the current image.

Optional enhancements:
free exploration, a slow camera tour, and ambient sound.
Ambient sound must be off by default and play only after the user clicks to enable it.
Additional features must not reduce the quality of the default composition.

Keep the interface restrained and thoughtfully designed, with the landscape taking priority.
Place the title and control bar at the edges so they do not obscure the visual focal point.
On both desktop and mobile, buttons must stay within the viewport, text must not overlap, and all controls must remain usable.

【7. Engineering and Performance】

You may use Three.js / WebGL and version-pinned, mutually compatible CDN dependencies.
Prefer mature rendering capabilities instead of rewriting an entire engine for the sake of “zero dependencies.”

Keep the custom HTML, CSS, and JavaScript organized in a single HTML file wherever practical.
Generate the scenery with procedural geometry and materials; do not depend on external images or 3D model assets.

Use suitable batching or instanced rendering for repeated objects;
manage subdivisions, shadows, reflections, and render resolution appropriately.
Provide high-quality and lightweight modes, with lighter settings enabled by default on mobile.
Do not pursue detail by endlessly increasing the voxel count.

Include a loading indicator, a message when WebGL is unsupported, and necessary error handling.
Do not autoplay audio when sound has not been enabled; respect the system preference for reduced motion.

【8. Pre-Delivery Validation】

Do not deliver immediately after writing the code.

If the current environment supports running a browser and taking screenshots, open the page first,
check the default camera, all four views, atmosphere switching, and desktop and mobile layouts,
then correct obvious composition, exposure, occlusion, and rendering issues based on the screenshots.

Pay particular attention to:
blank screens, failed loading, and console errors;
intersections, flickering, shadow acne, overexposure, and abnormal water;
whether the default view truly looks like a complete landscape rather than a small diorama;
and whether the feature buttons actually work and stay within bounds on mobile.

You may use browser screenshots for validation, but do not call image-generation tools.
State honestly which tests were not completed; do not claim that they have been verified.

Final deliverables:
1. An actual, openable HTML file or an interactive preview supported by the current environment.
2. If screenshots are possible, include one real screenshot of the browser rendering.
3. A brief explanation of the controls and any required runtime conditions.

Complete the build directly; make consistent design decisions for noncritical details yourself,
rather than repeatedly asking me to decide implementation issues you can resolve independently.
```

<details>
<summary>Original prompt</summary>

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

[View detail ↗](https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102565403109085669) · [Original post](https://x.com/dotey/status/2102565403109085669) · [Back to examples](#all-prompts)

---

<a id="claude-opus-5-5-2102547809140355250"></a>

### Hundenberg accident model and realistic video

[AImanhasnoname](https://x.com/aimanhasnoname) · 2026-09-22 · Claude Opus 5.5 · Animation

<a href="https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102547809140355250"><img src="../assets/previews/2eefc8b880a8aa71a501cf0b41a5dfd9076ac002865941b7287cedeb73ee00a0.webp" width="840" loading="lazy" alt="Hundenberg accident model and realistic video"></a>

**Prompt**

```text
make me a model of the Hundenberg on blender make me a realistic video of the accident.
```

[View detail ↗](https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102547809140355250) · [Original post](https://x.com/aimanhasnoname/status/2102547809140355250) · [Back to examples](#all-prompts)

---

<a id="claude-opus-5-5-2102544406117286004"></a>

### 360-Degree 3D Rendering of a Handball Court from an Image

[ハンドボール人「布施千佳純」](https://x.com/chikaidev) · 2026-09-22 · Claude Opus 5.5 · Scenes

<a href="https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102544406117286004"><img src="../assets/previews/c492adaa7b1ffad5024b0a28618dcc51d0f50b7c16ae704c9ee3785881445195.webp" width="840" loading="lazy" alt="360-Degree 3D Rendering of a Handball Court from an Image"></a>

**Reference images:** [1](https://media.tripogrowth.space/media/6a116b62-88ce-491b-b4ba-eed6d9c9f168.jpg) · [2](https://pbs.twimg.com/media/HS29xCPaYAAcMmd.jpg)

**Prompt**

```text
3D-render the handball court, goal, referee, players, and ball from the image so they can be viewed from any angle in a 360-degree view. Accurately reproduce each person’s pose and the colors of the objects.
```

<details>
<summary>Original prompt</summary>

```text
画像内のハンドボールコート、ゴール、レフェリー、プレイヤー、ボールを3dレンダリングして、360度自由角度から見れるようにして。各人物の姿勢まで、また物体の色まで正確に再現して。
```

</details>

[View detail ↗](https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102544406117286004) · [Original post](https://x.com/chikaidev/status/2102545257372213581) · [Back to examples](#all-prompts)

---

<a id="claude-opus-5-5-2102544196808667471"></a>

### Procedural Three.js 3D main menu background from an image

[Majid Manzarpour](https://x.com/majidmanzarpour) · 2026-09-22 · Claude Opus 5.5 · Scenes

<a href="https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102544196808667471"><img src="../assets/previews/00e1e42d1237637670ed6c41d5701bef1c74975a73d5b62a5e7f698ea3909f93.webp" width="840" loading="lazy" alt="Procedural Three.js 3D main menu background from an image"></a>

**Reference images:** [1](https://media.tripogrowth.space/media/de4534b1-fda8-4736-8558-09b7283f646a.jpg) · [2](https://pbs.twimg.com/media/HS28q6mWMAAxONB.jpg)

**Prompt**

```text
recreate this perfectly, fully procedural, animated, main menu background in three.js 3D single HTML file
```

[View detail ↗](https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102544196808667471) · [Original post](https://x.com/majidmanzarpour/status/2102544198335373576) · [Back to examples](#all-prompts)

---

<a id="claude-opus-5-5-2102544078927741369"></a>

### Self-running 3D Rube Goldberg machine

[leo](https://x.com/leogao25) · 2026-09-22 · Claude Opus 5.5 · Animation

<a href="https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102544078927741369"><img src="../assets/previews/337a5747637168ec67e4ac5563dd2bd4b3bd60fbdcfe57409ba528644c257fdc.webp" width="840" loading="lazy" alt="Self-running 3D Rube Goldberg machine"></a>

**Prompt**

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

[View detail ↗](https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102544078927741369) · [Original post](https://x.com/leogao25/status/2102544081863717153) · [Back to examples](#all-prompts)

---

<a id="claude-opus-5-5-2102538762731565085"></a>

### Interactive Peter Rabbit-style farm animal game

[mblaso](https://x.com/blaso96) · 2026-09-22 · Claude Opus 5.5 · Games

<a href="https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102538762731565085"><img src="../assets/previews/b0398c725131002e496ea826c8fe66a2421c20c036a8989b4aec58b23d06e574.webp" width="840" loading="lazy" alt="Interactive Peter Rabbit-style farm animal game"></a>

**Prompt**

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

[View detail ↗](https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102538762731565085) · [Original post](https://x.com/blaso96/status/2102538764749037738) · [Back to examples](#all-prompts)

---

<a id="claude-opus-5-5-2102533729746882985"></a>

### Cinematic interactive pirate ship at sunset

[Vib3Coded](https://x.com/vib3coded) · 2026-09-22 · Claude Opus 5.5 · Scenes

<a href="https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102533729746882985"><img src="../assets/previews/2239f7a3f4f3863b4c6293554252f26ef2d141d58a1c633a05e382958d37bae4.webp" width="840" loading="lazy" alt="Cinematic interactive pirate ship at sunset"></a>

**Prompt**

```text
Create from scratch a fully interactive 3D scene of a pirate ship sailing across a dynamic ocean at sunset. The visual style should be cinematic and stylized rather than photorealistic, while still being exceptionally rich, detailed, polished, and visually sophisticated. Build the ship, ocean, sky, lighting, materials, sails, rigging, cannons, small structural details, sea foam, wake, particles, animation, camera work, composition, atmospheric depth, and color grading. The final result should feel like a premium, high-production 3D artwork, not a prototype, technical demo, or low-quality scene. Start from a completely blank page. Do not reuse or depend on any previous project or scene. You may create the assets yourself or use reliable, trusted, open-source assets and libraries when necessary. Mandatory requirements: No text of any kind may appear anywhere inside the scene. No titles, names, logos, descriptions, credits, labels, or control instructions in any language. Deliver the entire project as one final standalone page file that can be opened directly in a web browser, with assets embedded inside it as much as reasonably possible. The ocean, ship, sails, and camera must all be animated naturally and smoothly. Avoid artificial slow motion or sluggish movement. The ship should feel like it is genuinely moving through the water. Do not rely on primitive geometric shapes as the finished result. Build a visually convincing and detailed pirate ship, including a carefully shaped hull, masts, sails, rigging, ropes, cannons, railings, lanterns, deck structures, and clearly visible small-scale details. Lighting must reveal the ship's geometry and materials clearly. Create a rich sunset atmosphere, deep ocean shading, reflections, convincing sea foam, and a detailed sailing wake behind and around the vessel. Maintain a strong balance between visual quality and real-time performance, preserving smooth interaction and animation without making an obvious sacrifice in quality. Automatically use the most appropriate skills, tools, libraries, techniques, and available assets needed to achieve the best result. Do not wait for me to specify which technologies to use. Actually test the finished result in a desktop web browser. Capture visual screenshots, inspect the browser console for errors, and fix every visible or technical issue you find, including distorted geometry, black screens, failed asset loading, broken animation, poor composition, rendering artifacts, or camera problems. At the end, verify that the final file opens and works directly, that the scene contains no text whatsoever, and that there are no remaining runtime or loading errors. Then finish the task with only a brief response.
```

[View detail ↗](https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102533729746882985) · [Original post](https://x.com/vib3coded/status/2102534606121746589) · [Back to examples](#all-prompts)

---

<a id="claude-opus-5-5-2102529695908806728"></a>

### Endless procedurally generated Three.js world

[🥔🥔🥔](https://x.com/argofowl) · 2026-09-22 · Claude Opus 5.5 · Games

<a href="https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102529695908806728"><img src="../assets/previews/dc4bb91934d32b72098e8bcfd9c02285b359e6df7988d99efc153167ba968b2d.webp" width="840" loading="lazy" alt="Endless procedurally generated Three.js world"></a>

**Prompt**

```text
create a new project in my projects folder called "endless-game": an endless, procedurally generated world built with three.js in the browser that i can roam freely and just enjoy. every area should be randomly generated, with surprises everywhere no matter how long i play. it should feel calm, relaxing and genuinely fun, like the cozy, satisfying vibe of a supermarket simulator, but it shouldn't be a supermarket game. i want a really interesting world to walk around in, with entities i can meet and interact with, and really cool graphics. set a clear goal for the project, keep working until you reach it, and play a sound chime when it's done and ready for me to play and test.
```

[View detail ↗](https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102529695908806728) · [Original post](https://x.com/argofowl/status/2102529695908806728) · [Back to examples](#all-prompts)

---

<a id="claude-opus-5-5-2102467667978572092"></a>

### Interactive crowd evacuation simulation

[Dom](https://x.com/dominikmartn) · 2026-09-22 · Claude Opus 5.5 · Animation

<a href="https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102467667978572092"><img src="../assets/previews/576e684f6ec389443536e17db7a1c5eb173eeb4116c3cd05337b69084858983f.webp" width="840" loading="lazy" alt="Interactive crowd evacuation simulation"></a>

**Prompt**

```text
build an interactive crowd evacuation sim and see where it jams
```

[View detail ↗](https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102467667978572092) · [Original post](https://x.com/dominikmartn/status/2102467667978572092) · [Back to examples](#all-prompts)

---

<a id="claude-opus-5-5-2102450239923720440"></a>

### Interactive 3D Prehistoric Island

[Vib3Coded](https://x.com/vib3coded) · 2026-09-22 · Claude Opus 5.5 · Interactive

<a href="https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102450239923720440"><img src="../assets/previews/23a4362d0525060fc7304a39c43c7f21b75923aa85ed66f5303b370d996bcf0d.webp" width="840" loading="lazy" alt="Interactive 3D Prehistoric Island"></a>

**Prompt**

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

[View detail ↗](https://www.tripo3d.ai/3d-prompts/claude-opus-5-5-2102450239923720440) · [Original post](https://x.com/vib3coded/status/2102450842070569099) · [Back to examples](#all-prompts)

---


[Complete catalog](catalog.en.md) · **1 / 1**

<p align="center"><strong><a href="https://www.tripo3d.ai/3d-prompts/models/claude-opus-5-5?utm_source=github&amp;utm_medium=referral&amp;utm_campaign=awesome_opus_5_5_prompts&amp;utm_content=catalog_footer">Explore all 11 examples and live previews →</a></strong></p>
