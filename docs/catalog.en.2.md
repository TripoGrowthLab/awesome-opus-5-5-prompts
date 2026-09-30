<!-- Generated from Growth CMS by templates/catalog.md. Edit content in CMS; run npm run sync. -->

# Awesome Opus 5.5 Prompts — 2 / 2

[← Awesome Opus 5.5 Prompts](../README.md)

<p>
  <a href="../docs/catalog.en.2.md"><img alt="English" src="https://img.shields.io/badge/English-✓-238636?style=flat-square"></a>
  <a href="../docs/catalog.zh.2.md"><img alt="简体中文" src="https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-64748b?style=flat-square"></a>
  <a href="../docs/catalog.zh-Hant.2.md"><img alt="繁體中文" src="https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-64748b?style=flat-square"></a>
  <a href="../docs/catalog.ja.2.md"><img alt="日本語" src="https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-64748b?style=flat-square"></a>
  <a href="../docs/catalog.ko.2.md"><img alt="한국어" src="https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-64748b?style=flat-square"></a>
  <a href="../docs/catalog.es.2.md"><img alt="Español" src="https://img.shields.io/badge/Espa%C3%B1ol-64748b?style=flat-square"></a>
  <a href="../docs/catalog.pt.2.md"><img alt="Português" src="https://img.shields.io/badge/Portugu%C3%AAs-64748b?style=flat-square"></a>
  <a href="../docs/catalog.de.2.md"><img alt="Deutsch" src="https://img.shields.io/badge/Deutsch-64748b?style=flat-square"></a>
  <a href="../docs/catalog.fr.2.md"><img alt="Français" src="https://img.shields.io/badge/Fran%C3%A7ais-64748b?style=flat-square"></a>
  <a href="../docs/catalog.it.2.md"><img alt="Italiano" src="https://img.shields.io/badge/Italiano-64748b?style=flat-square"></a>
  <a href="../docs/catalog.ru.2.md"><img alt="Русский" src="https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-64748b?style=flat-square"></a>
  <a href="../docs/catalog.tr.2.md"><img alt="Türkçe" src="https://img.shields.io/badge/T%C3%BCrk%C3%A7e-64748b?style=flat-square"></a>
  <a href="../docs/catalog.uk.2.md"><img alt="Українська" src="https://img.shields.io/badge/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0-64748b?style=flat-square"></a>
  <a href="../docs/catalog.vi.2.md"><img alt="Tiếng Việt" src="https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-64748b?style=flat-square"></a>
</p>

[Complete catalog](catalog.en.md) · [←](catalog.en.1.md) · **2 / 2**

<a id="all-prompts"></a>

<details>
<summary>Browse examples (1)</summary>

- [Interactive 3D Prehistoric Island](#claude-opus-5-5-2102450239923720440)

</details>
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


[Complete catalog](catalog.en.md) · [←](catalog.en.1.md) · **2 / 2**

<p align="center"><strong><a href="https://www.tripo3d.ai/3d-prompts/models/claude-opus-5-5?utm_source=github&amp;utm_medium=referral&amp;utm_campaign=awesome_opus_5_5_prompts&amp;utm_content=catalog_footer">Explore all 51 examples and live previews →</a></strong></p>
