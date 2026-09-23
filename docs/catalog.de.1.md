<!-- Generated from Growth CMS by templates/catalog.md. Edit content in CMS; run npm run sync. -->

# Awesome Opus 5.5 Prompts — 1 / 1

[← Awesome Opus 5.5 Prompts](../README.md)

<p>
  <a href="../docs/catalog.en.1.md"><img alt="English" src="https://img.shields.io/badge/English-64748b?style=flat-square"></a>
  <a href="../docs/catalog.zh.1.md"><img alt="简体中文" src="https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-64748b?style=flat-square"></a>
  <a href="../docs/catalog.zh-Hant.1.md"><img alt="繁體中文" src="https://img.shields.io/badge/%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-64748b?style=flat-square"></a>
  <a href="../docs/catalog.ja.1.md"><img alt="日本語" src="https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-64748b?style=flat-square"></a>
  <a href="../docs/catalog.ko.1.md"><img alt="한국어" src="https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-64748b?style=flat-square"></a>
  <a href="../docs/catalog.es.1.md"><img alt="Español" src="https://img.shields.io/badge/Espa%C3%B1ol-64748b?style=flat-square"></a>
  <a href="../docs/catalog.pt.1.md"><img alt="Português" src="https://img.shields.io/badge/Portugu%C3%AAs-64748b?style=flat-square"></a>
  <a href="../docs/catalog.de.1.md"><img alt="Deutsch" src="https://img.shields.io/badge/Deutsch-✓-238636?style=flat-square"></a>
  <a href="../docs/catalog.fr.1.md"><img alt="Français" src="https://img.shields.io/badge/Fran%C3%A7ais-64748b?style=flat-square"></a>
  <a href="../docs/catalog.it.1.md"><img alt="Italiano" src="https://img.shields.io/badge/Italiano-64748b?style=flat-square"></a>
  <a href="../docs/catalog.ru.1.md"><img alt="Русский" src="https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-64748b?style=flat-square"></a>
  <a href="../docs/catalog.tr.1.md"><img alt="Türkçe" src="https://img.shields.io/badge/T%C3%BCrk%C3%A7e-64748b?style=flat-square"></a>
  <a href="../docs/catalog.uk.1.md"><img alt="Українська" src="https://img.shields.io/badge/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0-64748b?style=flat-square"></a>
  <a href="../docs/catalog.vi.1.md"><img alt="Tiếng Việt" src="https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-64748b?style=flat-square"></a>
</p>

[Vollständiger Katalog](catalog.de.md) · **1 / 1**

<a id="all-prompts"></a>

<details>
<summary>Beispiele ansehen (11)</summary>

- [Interaktive eulersche Neon-Fluidsimulation](#claude-opus-5-5-2102565611473661963)
- [Interaktive 3D-Landschaft einer japanischen Kirschblütenschlucht](#claude-opus-5-5-2102565403109085669)
- [Modell des Hundenbergs und realistisches Unfallvideo](#claude-opus-5-5-2102547809140355250)
- [360°-3D-Rendering eines Handballfelds auf Basis eines Bildes](#claude-opus-5-5-2102544406117286004)
- [Prozeduraler 3D-Hauptmenü-Hintergrund in Three.js aus einem Bild](#claude-opus-5-5-2102544196808667471)
- [Selbstlaufende 3D-Rube-Goldberg-Maschine](#claude-opus-5-5-2102544078927741369)
- [Interaktives Hoftierspiel im Stil von Peter Rabbit](#claude-opus-5-5-2102538762731565085)
- [Filmreifes interaktives Piratenschiff bei Sonnenuntergang](#claude-opus-5-5-2102533729746882985)
- [Endlose prozedural generierte Three.js-Welt](#claude-opus-5-5-2102529695908806728)
- [Interaktive Simulation einer Massenevakuierung](#claude-opus-5-5-2102467667978572092)
- [Interaktive 3D-Prähistorikinsel](#claude-opus-5-5-2102450239923720440)

</details>
<a id="claude-opus-5-5-2102565611473661963"></a>

### Interaktive eulersche Neon-Fluidsimulation

[theailoser](https://x.com/theailoser) · 2026-09-23 · Claude Opus 5.5 · Animation

<a href="https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102565611473661963"><img src="../assets/previews/aed453c22b47b5e182d83ea4b126bd65e4391d679f7ad13bdfafe7c9d36fc8ff.webp" width="840" loading="lazy" alt="Interaktive eulersche Neon-Fluidsimulation"></a>

**Prompt**

```text
Erstelle ein vollständiges HTML-Dokument in einer einzigen Datei mit einer leistungsstarken, GPU-beschleunigten, interaktiven eulerschen Neon-Fluidsimulation.

Strenge technische und ästhetische Anforderungen:

1. Architektur und Performance:
   - Eine Datei: Sämtliches HTML, CSS und JavaScript bzw. sämtliche GLSL-Shader müssen inline enthalten sein.
   - Keine externen Abhängigkeiten: Reines WebGL 1.0 oder 2.0 (kein Three.js, kein Pixi, keine externen Bibliotheken).
   - Auf der GPU berechnete Fluiddynamik: Die Simulation muss vollständig über Ping-Pong-Framebuffer-Objekte (FBOs) laufen. Verwende dafür eigene Fragment-Shader für:
     a) Advektion (Geschwindigkeit und Farbstoff)
     b) Berechnung der Divergenz
     c) Poisson-Löser für den Druck (Jacobi-Iteration, 20–30 Iterationen pro Frame)
     d) Subtraktion des Gradienten bzw. Projektion des Geschwindigkeitsfelds
     e) Vorticity Confinement (erzeugt turbulente Wirbel und verhindert, dass das Fluid zu einer langweiligen, verschwommenen Masse zerfließt).

2. Visuelle Detailtreue (der „Neonrauch“-Look):
   - Tiefschwarzer Hintergrund (`#050508`).
   - Additives bzw. High-Dynamic-Range-Blending für die Farbstoff-Injektion.
   - Dynamische Palette: Jede schnelle Cursorbewegung oder Wischgeste injiziert hochleuchtenden Neon-Farbstoff, der fließend zwischen intensiven Cyber-Farbtönen wechselt (elektrisches Cyan `#00F0FF`, leuchtendes Magenta `#FF007F`, tiefes Ultraviolett und strahlendes Gold).
   - Erweiterungen für den Darstellungs-Shader: Integriere direkt in den finalen Render-Shader einen Postprocessing-Pass, der an den wirbelnden Rändern des Fluids subtilen Bloom bzw. Glow, Tone Mapping und chromatische Aberration anwendet.

3. Interaktion:
   - Maus und Touch: Schnelle Cursorbewegungen oder Ziehen injizieren eine proportional zur Mausgeschwindigkeit berechnete Geschwindigkeit sowie dichten, leuchtenden Farbstoff.
   - Passive Umgebungsbewegung: Erzeuge im Leerlauf subtilen prozeduralen Curl-Noise oder sanft driftende Wirbel, damit die Fläche nie vollständig statisch ist.
   - Bedienelemente: Ein elegantes, äußerst minimalistisches Glassmorphism-HUD, das in einer Ecke platziert wird und sich bei Inaktivität automatisch ausblendet:
     * Schieberegler für die Viskosität
     * Schieberegler für Dissipation bzw. Persistenz des Farbstoffs
     * Schieberegler für den Splat-Radius
     * Schaltfläche „Canvas leeren“
     * Umschaltfläche zum Wechseln der Farbthemen (Cyberpunk, Thermal Inferno, Bioluminescent Deep).

4. Production Polish:
   - Behandle hochauflösende Displays und `resize`-Ereignisse automatisch, ohne die FBO-Texturen zu verzerren oder zu löschen.
   - Baue eine zuverlässige Fallback-Prüfung für die Unterstützung von Gleitkomma-Texturen ein (`OES_texture_float` / `OES_texture_half_float`).
   - Sauberer, fehlerfreier und vollständig implementierter Code ohne Platzhalter oder abgeschnittene Kommentare.

Gib ausschließlich die vollständig ausgefüllte HTML-Datei zurück, die direkt in Chrome, Safari oder Firefox ausgeführt werden kann.
```

<details>
<summary>Original-Prompt</summary>

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

[Details ansehen ↗](https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102565611473661963) · [Originalbeitrag](https://x.com/theailoser/status/2102565612874596411) · [Zurück zu den Beispielen](#all-prompts)

---

<a id="claude-opus-5-5-2102565403109085669"></a>

### Interaktive 3D-Landschaft einer japanischen Kirschblütenschlucht

[宝玉](https://x.com/dotey) · 2026-09-23 · Claude Opus 5.5 · Interaktiv

<a href="https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102565403109085669"><img src="../assets/previews/4cdfb9495d54a6ee6bff4ae1821ab9b150b2f0a5b920fb4c6242ebbbb6153d4f.webp" width="840" loading="lazy" alt="Interaktive 3D-Landschaft einer japanischen Kirschblütenschlucht"></a>

**Prompt**

```text
Erstelle direkt eine hochwertige 3D-Landschaft als interaktive Webseite, die sich in Echtzeit im Browser erkunden lässt.

Thema: japanische Kirschblütenschlucht.
Setze HTML, CSS und JavaScript ein. Erzeuge keine Bilder und liefere nicht nur ein Designkonzept,
und täusche keine 3D-Szene durch ein einzelnes Hintergrundbild mit Parallax-Effekt vor. Ich möchte ein tatsächlich lauffähiges und erkundbares Endprodukt.

【1. Ausrichtung des Projekts】

Es handelt sich um eine vollständige, zusammenhängende Landschaft mit einer klaren Tiefenstaffelung,
nicht um ein isoliertes kleines Diorama, eine schwebende Insel, eine Landschaft auf einer Basis oder eine reine technische Demo.

Der Stil ist modernes, detailliertes Voxel Art:
Die Formensprache kubischer Geometrie bleibt erhalten, doch das Bild soll hochauflösend, kantengeglättet und mit fein ausgearbeiteten Licht- und Schatteneffekten sein.
Kein nostalgischer Low-Resolution-Pixel-Look, keine groben Stapel aus Klötzen und kein Pixel-Filter über dem gesamten Bild.

Die visuelle Qualität hat Vorrang. Lieber einige Funktionen weniger als Abstriche bei Komposition, Materialien und Beleuchtung.

【2. Verwendung von Referenzbildern】

Falls Referenzbilder vorhanden sind, analysiere zunächst ihre Komposition, Maßstäbe, Lichtführung und Farbbeziehungen.
Übernimm nur die Atmosphäre und visuelle Sprache und entwirf die Szene neu,
ohne die Positionen von Gebäuden, Bäumen, Bergen und Wegen zu kopieren oder eine 1:1-Reproduktion anzufertigen.

Das Referenzbild ist kein Hintergrundmaterial für die Webseite. Die Szene selbst muss aus echter 3D-Geometrie bestehen.

【3. Szenenkomposition】

Beim Öffnen soll standardmäßig sofort ein vollständiges und ansprechendes Bild zu sehen sein,
ohne dass der Nutzer zunächst die Kamera drehen muss, um eine gute Perspektive zu finden.

Verwende eine perspektivische Kamera und keine isometrische Draufsicht wie bei einem Diorama.
Das Bild braucht einen klaren Vorder-, Mittel- und Hintergrund:

Vordergrund:
Ein charaktervoller alter Kirschbaum mit Felsen, Gräsern, Pflanzen, Steinlaternen und einigen herabgefallenen Blüten bildet einen natürlichen Rahmen am Bildrand,
darf jedoch den Fluss, die Brücke und die wichtigsten Gebäude nicht verdecken.

Mittelgrund:
Ein gewundener Fluss führt den Blick in die Szene; eine rote Holzbrücke überspannt das Wasser.
Dorf, Teehaus, Schrein und Wege verteilen sich entlang des Geländeverlaufs, mit realistischen Verbindungen zwischen den Gebäuden.
Der Boden weist Höhenunterschiede, Uferlinien und natürliche Übergänge auf; die Modelle sind nicht gleichmäßig auf einer ebenen Fläche verteilt.

Hintergrund:
Eine mehrstöckige Pagode am Berghang, Wälder in unterschiedlichen Entfernungen, Bergrücken und schneebedeckte Berge in der Ferne.
Zeige die Entfernung durch Maßstabsänderungen, Verdeckungen, warme und kalte Farbverläufe sowie atmosphärische Perspektive,
statt entfernte Objekte lediglich zu verkleinern.

Verteile nicht alle Elemente gleichmäßig über die Szene. Es braucht eine klare Hierarchie, Variationen in Dichte, bewusst gesetzte Freiräume und einen eindeutigen visuellen Fokus.

【4. Formen und Bildqualität】

Kirschbaum:
Der Stamm weist Krümmungen, Verzweigungen und sichtbare Wurzeln auf. Die Krone besteht aus unregelmäßigen Blütenbüscheln
mit Zwischenräumen, variierender Dichte und sichtbaren Ästen. Verwende keine wenigen regelmäßigen Kugeln oder Würfelgruppen.

Gebäude:
Die Dächer haben geschichtete Ziegel, auskragende Traufen, Balken, Säulen und Fensterteilungen.
Die Gebäude unterscheiden sich in Funktion, Volumen und Höhe; bedecke die Schlucht nicht mit Kopien desselben Hauses.

Gelände:
Am Ufer gibt es feuchte Felsen, Grasbüschel und natürliche Übergänge zur Vegetation.
Vermeide zu regelmäßige Stufen, wiederholte Streifen, Schachbrettmuster und ein deutlich prozedural erzeugtes Raster.

Wasseroberfläche:
Sie muss die Umgebung widerspiegeln und moderate Wellen, Variationen in Tiefe und Farbe sowie einen natürlichen Übergang zum Ufer aufweisen.
Nutze möglichst echte Reflexionen der Szene. Auch bei einer Leistungsreduzierung muss die Darstellung visuell glaubwürdig bleiben.
Ersetze das Wasser nicht durch flackerndes Rauschen, starke Verzerrungen oder eine durchgehende blaue Fläche.

Details:
Einige Koi, herabfallende Blüten, Glühwürmchen, ein Wasserfall und Vögel in der Ferne sind möglich,
sollen jedoch ausschließlich die Atmosphäre unterstützen und das Bild nicht überladen.
Häufe keine Details an, nur um mit einer bestimmten Modellanzahl zu werben.

【5. Farben und Atmosphäre】

Standardmäßig gilt die Stimmung der blauen Stunde:
ein kühles Tal und kühle Berge in der Ferne, zartrosa Kirschblüten sowie warme, aber nicht überbelichtete Laternen und Fensterlichter.
Das warme Licht konzentriert sich auf belebte Bereiche; färbe nicht die gesamte Umgebung orange.

Verwende weiche Schatten, Licht- und Schattenkontraste an den Kontaktstellen von Objekten, eine angemessene Belichtung,
zurückhaltendes Bloom, Kantenglättung und Nebel mit klarer Tiefenstaffelung.

Vermeide ausgewaschene Farben, eine graue Trübung, Übersättigung, dichten Nebel über die gesamte Szene, überbelichtete Lichter und deutlich sichtbare Treppeneffekte.
Die kubische Geometrie darf klar erkennbar sein, das Rendering selbst darf jedoch nicht grob wirken.

Biete zusätzlich die Stimmungen „Morgen“ und „Regen“ an.
Beim Wechsel müssen sich Himmel, Umgebungslicht, Nebel und lokale Effekte synchron ändern
und nicht nur die Hintergrundfarbe.

【6. Interaktion und Benutzeroberfläche】

Biete vier sorgfältig gestaltete Kameraperspektiven:
Panorama der Schlucht, niedrige Perspektive am Flussufer, Tempelpfad und Blick vom Berghang nach unten.
Der Wechsel soll fließend erfolgen, und jede Perspektive braucht einen eigenständigen kompositorischen Wert.

Grundlegende Interaktion:
Mit der Maus ziehen, um die Szene zu betrachten, und per Mausrad zoomen oder vorwärtsgehen. Touchscreens unterstützen Ziehen und Pinch-Zoom.
Biete Funktionen zum Zurücksetzen der Ansicht, Ausblenden der Benutzeroberfläche und Speichern des aktuellen Bildes an.

Optionale Erweiterungen:
Freies Erkunden, eine langsame Kamerafahrt und Umgebungsgeräusche.
Umgebungsgeräusche sind standardmäßig deaktiviert und werden erst nach einem aktiven Klick des Nutzers abgespielt.
Zusätzliche Funktionen dürfen die Qualität der Standardansicht nicht beeinträchtigen.

Die Benutzeroberfläche soll zurückhaltend und gestaltet sein, während die Landschaft im Mittelpunkt steht.
Titel und Steuerleiste gehören an den Rand und dürfen den visuellen Fokus nicht verdecken.
Auf Desktop und Smartphone dürfen keine abgeschnittenen Buttons, überlappenden Texte oder unbedienbaren Elemente auftreten.

【7. Technik und Performance】

Three.js / WebGL sowie versionsgebundene, miteinander kompatible CDN-Abhängigkeiten dürfen verwendet werden.
Nutze bevorzugt etablierte Rendering-Funktionen und schreibe nicht für „null Abhängigkeiten“ eine komplette Engine neu.

Halte selbst geschriebenes HTML, CSS und JavaScript möglichst in einer einzigen HTML-Datei zusammen.
Erzeuge die Landschaft mit prozeduraler Geometrie und Materialien, ohne externe Bild- oder 3D-Modellressourcen.

Zeichne wiederholte Objekte mit geeigneten Batch- oder Instancing-Verfahren.
Begrenze Subdivision, Schatten, Reflexionen und Renderauflösung angemessen.
Biete einen Qualitätsmodus und einen leichten Modus an; auf Smartphones soll standardmäßig die leichtere Einstellung verwendet werden.
Erzeuge Details nicht einfach durch eine unbegrenzte Erhöhung der Voxelanzahl.

Füge einen Ladehinweis, eine Meldung bei fehlender WebGL-Unterstützung und die notwendige Fehlerbehandlung hinzu.
Spiele keinen Ton automatisch ab, solange er nicht aktiviert wurde, und respektiere die Systemeinstellung zur Reduzierung von Bewegung.

【8. Abnahme vor der Übergabe】

Übergib das Projekt nicht sofort nach dem Schreiben des Codes.

Wenn die aktuelle Umgebung die Ausführung im Browser und Screenshots unterstützt, öffne die Seite zunächst tatsächlich,
prüfe die Standardkamera, alle vier Perspektiven, den Wechsel der Stimmungen sowie das Desktop- und Smartphone-Layout
und korrigiere anhand der Screenshots offensichtliche Probleme bei Komposition, Belichtung, Verdeckungen und Rendering.

Prüfe insbesondere:
ob ein leeres Bild, ein Ladefehler oder Konsolenfehler auftreten;
ob Clipping, Flackern, Schattenstreifen, Überbelichtung oder eine fehlerhafte Wasseroberfläche vorhanden sind;
ob die Standardansicht tatsächlich wie eine vollständige Landschaft und nicht wie ein kleines Diorama wirkt;
und ob die Funktionsbuttons tatsächlich funktionieren und auf Mobilgeräten nicht aus dem Bildschirm ragen.

Zur Abnahme darfst du Browser-Screenshots verwenden, aber keine Bildgenerierungstools aufrufen.
Nicht durchgeführte Tests müssen ehrlich angegeben werden; behaupte nicht, sie seien bereits überprüft worden.

Endgültige Übergabe:
1. Eine tatsächlich vorhandene und öffnungsfähige HTML-Datei oder eine interaktive Vorschau, sofern die aktuelle Umgebung dies unterstützt.
2. Wenn Screenshots möglich sind, füge einen echten Screenshot aus dem Browser-Rendering bei.
3. Eine kurze Erläuterung der Bedienung und der erforderlichen Laufzeitbedingungen.

Schließe die Umsetzung direkt ab. Triff bei nicht kritischen Details selbst konsistente Designentscheidungen,
und überlasse mir nicht wiederholt Implementierungsfragen, die du eigenständig lösen kannst.
```

<details>
<summary>Original-Prompt</summary>

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

[Details ansehen ↗](https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102565403109085669) · [Originalbeitrag](https://x.com/dotey/status/2102565403109085669) · [Zurück zu den Beispielen](#all-prompts)

---

<a id="claude-opus-5-5-2102547809140355250"></a>

### Modell des Hundenbergs und realistisches Unfallvideo

[AImanhasnoname](https://x.com/aimanhasnoname) · 2026-09-22 · Claude Opus 5.5 · Animation

<a href="https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102547809140355250"><img src="../assets/previews/2eefc8b880a8aa71a501cf0b41a5dfd9076ac002865941b7287cedeb73ee00a0.webp" width="840" loading="lazy" alt="Modell des Hundenbergs und realistisches Unfallvideo"></a>

**Prompt**

```text
Erstelle ein Modell des Hundenbergs in Blender und ein realistisches Video des Unfalls.
```

<details>
<summary>Original-Prompt</summary>

```text
make me a model of the Hundenberg on blender make me a realistic video of the accident.
```

</details>

[Details ansehen ↗](https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102547809140355250) · [Originalbeitrag](https://x.com/aimanhasnoname/status/2102547809140355250) · [Zurück zu den Beispielen](#all-prompts)

---

<a id="claude-opus-5-5-2102544406117286004"></a>

### 360°-3D-Rendering eines Handballfelds auf Basis eines Bildes

[ハンドボール人「布施千佳純」](https://x.com/chikaidev) · 2026-09-22 · Claude Opus 5.5 · Szenen

<a href="https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102544406117286004"><img src="../assets/previews/c492adaa7b1ffad5024b0a28618dcc51d0f50b7c16ae704c9ee3785881445195.webp" width="840" loading="lazy" alt="360°-3D-Rendering eines Handballfelds auf Basis eines Bildes"></a>

**Referenzbilder:** [1](https://media.tripogrowth.space/media/6a116b62-88ce-491b-b4ba-eed6d9c9f168.jpg) · [2](https://pbs.twimg.com/media/HS29xCPaYAAcMmd.jpg)

**Prompt**

```text
Rendere das Handballfeld, das Tor, den Schiedsrichter, die Spieler und den Ball aus dem Bild in 3D, sodass die Szene aus jedem beliebigen Winkel in 360° betrachtet werden kann. Reproduziere auch die Körperhaltung jeder Person und die Farben der Objekte präzise.
```

<details>
<summary>Original-Prompt</summary>

```text
画像内のハンドボールコート、ゴール、レフェリー、プレイヤー、ボールを3dレンダリングして、360度自由角度から見れるようにして。各人物の姿勢まで、また物体の色まで正確に再現して。
```

</details>

[Details ansehen ↗](https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102544406117286004) · [Originalbeitrag](https://x.com/chikaidev/status/2102545257372213581) · [Zurück zu den Beispielen](#all-prompts)

---

<a id="claude-opus-5-5-2102544196808667471"></a>

### Prozeduraler 3D-Hauptmenü-Hintergrund in Three.js aus einem Bild

[Majid Manzarpour](https://x.com/majidmanzarpour) · 2026-09-22 · Claude Opus 5.5 · Szenen

<a href="https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102544196808667471"><img src="../assets/previews/00e1e42d1237637670ed6c41d5701bef1c74975a73d5b62a5e7f698ea3909f93.webp" width="840" loading="lazy" alt="Prozeduraler 3D-Hauptmenü-Hintergrund in Three.js aus einem Bild"></a>

**Referenzbilder:** [1](https://media.tripogrowth.space/media/de4534b1-fda8-4736-8558-09b7283f646a.jpg) · [2](https://pbs.twimg.com/media/HS28q6mWMAAxONB.jpg)

**Prompt**

```text
Rekonstruiere dieses perfekte, vollständig prozedurale, animierte 3D-Hauptmenü-Hintergrundbild in Three.js als einzelne HTML-Datei
```

<details>
<summary>Original-Prompt</summary>

```text
recreate this perfectly, fully procedural, animated, main menu background in three.js 3D single HTML file
```

</details>

[Details ansehen ↗](https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102544196808667471) · [Originalbeitrag](https://x.com/majidmanzarpour/status/2102544198335373576) · [Zurück zu den Beispielen](#all-prompts)

---

<a id="claude-opus-5-5-2102544078927741369"></a>

### Selbstlaufende 3D-Rube-Goldberg-Maschine

[leo](https://x.com/leogao25) · 2026-09-22 · Claude Opus 5.5 · Animation

<a href="https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102544078927741369"><img src="../assets/previews/337a5747637168ec67e4ac5563dd2bd4b3bd60fbdcfe57409ba528644c257fdc.webp" width="840" loading="lazy" alt="Selbstlaufende 3D-Rube-Goldberg-Maschine"></a>

**Prompt**

```text
Erstelle eine 3D-Rube-Goldberg-Maschine, die selbstständig abläuft, als einzelne, eigenständige index.html im aktuellen Verzeichnis.

Die Kette in dieser Reihenfolge:
1. Eine Murmel wird oben freigegeben und rollt eine Reihe von Zickzack-Rampen hinunter.
2. Sie stößt eine Reihe aus mindestens 12 Dominosteinen um.
3. Der letzte Dominostein kippt eine Wippe, die einen kleinen Ball in einen hängenden Eimer schleudert.
4. Das Gewicht des Eimers zieht ihn nach unten; sein Seil läuft über eine Umlenkrolle und reißt an einer Glocke, die sichtbar schwingt.
5. Durch dieselbe Bewegung wird eine Flagge an einer Stange hochgezogen. Wenn die Flagge die Spitze erreicht, ist der Ablauf beendet.

Regeln:
- Schreibe die Physik selbst: keine Physikbibliothek. Jede Bewegung nach dem Freigeben der Murmel muss aus deiner Simulation stammen (starre Körper, Kollisionen, Constraints, Seil/Umlenkrolle). Keine Keyframe-Animation und keine Tween-Bewegung für irgendein Maschinenteil.
- Du darfst three.js zum Rendern von einem CDN laden. Nichts anderes darf extern geladen werden: keine Bilder, Modelle oder Fonts.
- Die Maschine muss ohne Benutzereingabe laufen: Beim Laden der Seite automatisch starten, eine kinematografische Kamera verwenden, die der Handlung folgt, und die gesamte Kette in etwa 15–20 Sekunden abschließen. Nach dem Hochziehen der Flagge 2 Sekunden warten, dann zurücksetzen und erneut abspielen.
- Deterministisch: Verwende einen festen Zeitschritt und keine nicht initialisierte Zufallsquelle, damit jeder Durchlauf gleich aussieht.
- Das Browserfenster vollständig ausfüllen. Die Bildschirmaufnahme erfolgt mit 1280×720.
- Keine Bildschirmtexte und keinerlei UI.
- Sorge für eine ansprechende Optik: Beleuchtung, Schatten, Materialien und eine Umgebung, die den Eindruck einer echten Konstruktion vermittelt.
```

<details>
<summary>Original-Prompt</summary>

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

[Details ansehen ↗](https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102544078927741369) · [Originalbeitrag](https://x.com/leogao25/status/2102544081863717153) · [Zurück zu den Beispielen](#all-prompts)

---

<a id="claude-opus-5-5-2102538762731565085"></a>

### Interaktives Hoftierspiel im Stil von Peter Rabbit

[mblaso](https://x.com/blaso96) · 2026-09-22 · Claude Opus 5.5 · Spiele

<a href="https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102538762731565085"><img src="../assets/previews/b0398c725131002e496ea826c8fe66a2421c20c036a8989b4aec58b23d06e574.webp" width="840" loading="lazy" alt="Interaktives Hoftierspiel im Stil von Peter Rabbit"></a>

**Prompt**

```text
"Erstelle ein interaktives Hoftierspiel im Design- und Kunststil von "Peter Rabbit"
Hauptmenü = Ton an/aus + Tierauswahl (Pferd, Schwein, Kuh, Katze, Hund)
Esc = Pause: zum Spawnpunkt/Hauptmenü zurücksetzen
Mit WASD bewegen
Leertaste zum Springen und Interagieren mit anderen Tieren, wenn sie in der Nähe sind
Interaktionen werden bei erkannter Nähe zufällig ausgewählt
Mögliche Interaktionen: dem anderen Tier einen Laut entlocken (einzigartig und anders als seine passiven Geräusche) oder es „anstupsen“
Interaktionen mit: Wasser zum Trinken, Heu zum Fressen, Obst zum Fressen. 
Third-Person-Perspektive, wobei die Kamera leicht hinter und oberhalb des Tiers positioniert ist
Umgebungsdetails: Vögel und (zufällig) Flugzeuge am Himmel
Szenerie = Ackerland, Scheune, landwirtschaftliches Dorf mit Häusern (Häuser können nicht betreten werden)
Genug Assets, um Aufmerksamkeit zu wecken, aber nicht so viele, dass das Projekt als produktionsreif gelten müsste. Es geht nur darum, 15 Minuten meines Tages mit meiner Tochter zu verbringen und Spaß zu haben
React, SVG, JS, WebGL, Three.js oder was auch immer nötig ist, damit es sich „gut“ anfühlt"
```

<details>
<summary>Original-Prompt</summary>

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

[Details ansehen ↗](https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102538762731565085) · [Originalbeitrag](https://x.com/blaso96/status/2102538764749037738) · [Zurück zu den Beispielen](#all-prompts)

---

<a id="claude-opus-5-5-2102533729746882985"></a>

### Filmreifes interaktives Piratenschiff bei Sonnenuntergang

[Vib3Coded](https://x.com/vib3coded) · 2026-09-22 · Claude Opus 5.5 · Szenen

<a href="https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102533729746882985"><img src="../assets/previews/2239f7a3f4f3863b4c6293554252f26ef2d141d58a1c633a05e382958d37bae4.webp" width="840" loading="lazy" alt="Filmreifes interaktives Piratenschiff bei Sonnenuntergang"></a>

**Prompt**

```text
Erstelle von Grund auf eine vollständig interaktive 3D-Szene mit einem Piratenschiff, das bei Sonnenuntergang über einen dynamischen Ozean segelt. Der visuelle Stil soll filmisch und stilisiert statt fotorealistisch sein und zugleich außergewöhnlich reichhaltig, detailliert, hochwertig und visuell anspruchsvoll wirken. Erstelle Schiff, Ozean, Himmel, Beleuchtung, Materialien, Segel, Rigging, Kanonen, kleine strukturelle Details, Meeresschaum, Kielwasser, Partikel, Animation, Kameraführung, Komposition, atmosphärische Tiefe und Color Grading. Das Endergebnis soll wie ein hochwertiges 3D-Kunstwerk mit hohem Produktionsaufwand wirken, nicht wie ein Prototyp, eine technische Demo oder eine minderwertige Szene. Beginne mit einer vollständig leeren Seite. Verwende kein vorheriges Projekt oder keine vorherige Szene und mache dich nicht davon abhängig. Du kannst die Assets selbst erstellen oder bei Bedarf zuverlässige, vertrauenswürdige Open-Source-Assets und -Bibliotheken verwenden. Verbindliche Anforderungen: Im gesamten Szeneninhalt darf keinerlei Text erscheinen. Keine Titel, Namen, Logos, Beschreibungen, Credits, Beschriftungen oder Steuerungshinweise in irgendeiner Sprache. Liefere das gesamte Projekt als eine einzige finale, eigenständige Seitendatei, die direkt in einem Webbrowser geöffnet werden kann; bette die Assets so weit wie sinnvoll möglich darin ein. Ozean, Schiff, Segel und Kamera müssen sich alle natürlich und flüssig animieren. Vermeide künstliche Zeitlupe oder träge Bewegungen. Das Schiff soll sich so anfühlen, als würde es sich tatsächlich durch das Wasser bewegen. Verwende primitive geometrische Formen nicht als fertiges Ergebnis. Erstelle ein visuell überzeugendes und detailliertes Piratenschiff mit sorgfältig geformtem Rumpf, Masten, Segeln, Rigging, Seilen, Kanonen, Relings, Laternen, Deckaufbauten und klar sichtbaren Details im kleinen Maßstab. Die Beleuchtung muss Geometrie und Materialien des Schiffs deutlich sichtbar machen. Erzeuge eine reichhaltige Sonnenuntergangsatmosphäre, eine tiefe Schattierung des Ozeans, Reflexionen, überzeugenden Meeresschaum sowie ein detailliertes Segelkielwasser hinter und rund um das Schiff. Halte ein ausgewogenes Verhältnis zwischen visueller Qualität und Echtzeit-Performance ein und bewahre flüssige Interaktion und Animation, ohne die Qualität offensichtlich zu beeinträchtigen. Verwende automatisch die am besten geeigneten Skills, Tools, Bibliotheken, Techniken und verfügbaren Assets, die für das bestmögliche Ergebnis erforderlich sind. Warte nicht darauf, dass ich die zu verwendenden Technologien angebe. Teste das fertige Ergebnis tatsächlich in einem Desktop-Webbrowser. Erstelle visuelle Screenshots, prüfe die Browserkonsole auf Fehler und behebe jedes sichtbare oder technische Problem, das du findest – einschließlich verzerrter Geometrie, schwarzer Bildschirme, fehlgeschlagener Asset-Ladevorgänge, fehlerhafter Animationen, schlechter Komposition, Rendering-Artefakte oder Kameraprobleme. Überprüfe am Ende, dass sich die finale Datei direkt öffnen lässt und funktioniert, dass die Szene keinerlei Text enthält und keine Laufzeit- oder Ladefehler mehr vorhanden sind. Beende die Aufgabe anschließend mit nur einer kurzen Antwort.
```

<details>
<summary>Original-Prompt</summary>

```text
Create from scratch a fully interactive 3D scene of a pirate ship sailing across a dynamic ocean at sunset. The visual style should be cinematic and stylized rather than photorealistic, while still being exceptionally rich, detailed, polished, and visually sophisticated. Build the ship, ocean, sky, lighting, materials, sails, rigging, cannons, small structural details, sea foam, wake, particles, animation, camera work, composition, atmospheric depth, and color grading. The final result should feel like a premium, high-production 3D artwork, not a prototype, technical demo, or low-quality scene. Start from a completely blank page. Do not reuse or depend on any previous project or scene. You may create the assets yourself or use reliable, trusted, open-source assets and libraries when necessary. Mandatory requirements: No text of any kind may appear anywhere inside the scene. No titles, names, logos, descriptions, credits, labels, or control instructions in any language. Deliver the entire project as one final standalone page file that can be opened directly in a web browser, with assets embedded inside it as much as reasonably possible. The ocean, ship, sails, and camera must all be animated naturally and smoothly. Avoid artificial slow motion or sluggish movement. The ship should feel like it is genuinely moving through the water. Do not rely on primitive geometric shapes as the finished result. Build a visually convincing and detailed pirate ship, including a carefully shaped hull, masts, sails, rigging, ropes, cannons, railings, lanterns, deck structures, and clearly visible small-scale details. Lighting must reveal the ship's geometry and materials clearly. Create a rich sunset atmosphere, deep ocean shading, reflections, convincing sea foam, and a detailed sailing wake behind and around the vessel. Maintain a strong balance between visual quality and real-time performance, preserving smooth interaction and animation without making an obvious sacrifice in quality. Automatically use the most appropriate skills, tools, libraries, techniques, and available assets needed to achieve the best result. Do not wait for me to specify which technologies to use. Actually test the finished result in a desktop web browser. Capture visual screenshots, inspect the browser console for errors, and fix every visible or technical issue you find, including distorted geometry, black screens, failed asset loading, broken animation, poor composition, rendering artifacts, or camera problems. At the end, verify that the final file opens and works directly, that the scene contains no text whatsoever, and that there are no remaining runtime or loading errors. Then finish the task with only a brief response.
```

</details>

[Details ansehen ↗](https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102533729746882985) · [Originalbeitrag](https://x.com/vib3coded/status/2102534606121746589) · [Zurück zu den Beispielen](#all-prompts)

---

<a id="claude-opus-5-5-2102529695908806728"></a>

### Endlose prozedural generierte Three.js-Welt

[🥔🥔🥔](https://x.com/argofowl) · 2026-09-22 · Claude Opus 5.5 · Spiele

<a href="https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102529695908806728"><img src="../assets/previews/dc4bb91934d32b72098e8bcfd9c02285b359e6df7988d99efc153167ba968b2d.webp" width="840" loading="lazy" alt="Endlose prozedural generierte Three.js-Welt"></a>

**Prompt**

```text
Erstelle in meinem Projektordner ein neues Projekt namens „endless-game“: eine endlose, prozedural generierte Welt, die mit Three.js im Browser umgesetzt ist und die ich frei erkunden und einfach genießen kann. Jede Region soll zufällig generiert werden und unabhängig davon, wie lange ich spiele, überall Überraschungen bereithalten. Die Welt soll ruhig, entspannend und wirklich unterhaltsam wirken – mit der behaglichen, befriedigenden Atmosphäre eines Supermarkt-Simulators, aber ohne ein Supermarktspiel zu sein. Ich möchte eine wirklich interessante Welt zum Erkunden, mit Wesen, denen ich begegnen und mit denen ich interagieren kann, sowie einer beeindruckenden Grafik. Lege ein klares Ziel für das Projekt fest, arbeite weiter, bis du es erreicht hast, und spiele einen Signalton ab, sobald alles fertig und für mich zum Spielen und Testen bereit ist.
```

<details>
<summary>Original-Prompt</summary>

```text
create a new project in my projects folder called "endless-game": an endless, procedurally generated world built with three.js in the browser that i can roam freely and just enjoy. every area should be randomly generated, with surprises everywhere no matter how long i play. it should feel calm, relaxing and genuinely fun, like the cozy, satisfying vibe of a supermarket simulator, but it shouldn't be a supermarket game. i want a really interesting world to walk around in, with entities i can meet and interact with, and really cool graphics. set a clear goal for the project, keep working until you reach it, and play a sound chime when it's done and ready for me to play and test.
```

</details>

[Details ansehen ↗](https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102529695908806728) · [Originalbeitrag](https://x.com/argofowl/status/2102529695908806728) · [Zurück zu den Beispielen](#all-prompts)

---

<a id="claude-opus-5-5-2102467667978572092"></a>

### Interaktive Simulation einer Massenevakuierung

[Dom](https://x.com/dominikmartn) · 2026-09-22 · Claude Opus 5.5 · Animation

<a href="https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102467667978572092"><img src="../assets/previews/576e684f6ec389443536e17db7a1c5eb173eeb4116c3cd05337b69084858983f.webp" width="840" loading="lazy" alt="Interaktive Simulation einer Massenevakuierung"></a>

**Prompt**

```text
Erstelle eine interaktive Simulation zur Evakuierung einer Menschenmenge und zeige, wo es zu Engpässen kommt.
```

<details>
<summary>Original-Prompt</summary>

```text
build an interactive crowd evacuation sim and see where it jams
```

</details>

[Details ansehen ↗](https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102467667978572092) · [Originalbeitrag](https://x.com/dominikmartn/status/2102467667978572092) · [Zurück zu den Beispielen](#all-prompts)

---

<a id="claude-opus-5-5-2102450239923720440"></a>

### Interaktive 3D-Prähistorikinsel

[Vib3Coded](https://x.com/vib3coded) · 2026-09-22 · Claude Opus 5.5 · Interaktiv

<a href="https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102450239923720440"><img src="../assets/previews/23a4362d0525060fc7304a39c43c7f21b75923aa85ed66f5303b370d996bcf0d.webp" width="840" loading="lazy" alt="Interaktive 3D-Prähistorikinsel"></a>

**Prompt**

```text
Erstelle mit Three.js und WebGL eine wunderschöne, hochdetaillierte und vollständig interaktive 3D-Prähistorikinsel. Liefere alles in einer einzigen eigenständigen HTML-Datei, die direkt in Chrome geöffnet werden kann. Bette Assets nach Möglichkeit ein.

VISUELLE AUSRICHTUNG
Erstelle eine große, abgerundete Insel inmitten eines Ozeans mit transparentem Unterwasser-Querschnitt. Das Ergebnis soll wie eine hochwertige Miniaturwelt wirken: üppige Vegetation, ausdrucksstarke Dinosaurier, detailreiche Materialien, atmosphärische Beleuchtung und ausgefeilte Animationen. Verwende eine einheitliche, stilisierte Gestaltung statt einfacher geometrischer Grundformen.
ISLAND
Gestalte abwechslungsreiches Terrain mit Stränden, felsigen Klippen, dichten prähistorischen Wäldern, riesigen Farnen, einem Wasserfall, einem Süßwasserteich und einem Vulkan. Füge eine kleine Forschungsstation, Holzstege, Aussichtsplattformen, Versorgungskisten und Dinosauriernester hinzu. Die Insel muss groß genug sein, damit sich Dinosaurier auf natürliche Weise zwischen den verschiedenen Bereichen bewegen können.

WASSER-QUERSCHNITT
Das Wasser muss rund um die Insel ein tiefes, abgerundetes Volumen bilden, dessen Unterwasserlandschaft durch die Seitenflächen klar sichtbar ist. Füge einen strukturierten Meeresboden, Felsen, Wasserpflanzen, Fische, Blasen und ein grünes Meeresreptil hinzu, das unter der Oberfläche schwimmt. Platziere keine gewöhnlichen Landdinosaurier unter Wasser und füge kein U-Boot hinzu.
Verwende animierte Wellen, Fresnel-Reflexionen, Lichtmuster unter Wasser, Gischt am Ufer und Spritzwasser. Vermeide Artefakte durch die Sortierung transparenter Flächen und sichtbare Lücken zwischen Insel und Wasser.

DINOSAURS
Füge mehrere klar unterscheidbare Arten hinzu, darunter einen langhalsigen Sauropoden, Triceratops, Stegosaurus, einen großen Theropoden und kleinere Herdentiere. Lass Flugsaurier über der Insel kreisen.
Gib jeder Art eine klar erkennbare Anatomie, geformte Körper, beweglich verbundene Gliedmaßen, detaillierte Köpfe und Schwänze sowie passende Hautmuster. Vermeide es, die fertigen Dinosaurier aus offensichtlich erkennbaren Quadern oder voneinander getrennten Kugeln zusammenzusetzen.

NATÜRLICHE ANIMATION
Verwende hierarchische Skelette mit korrekt positionierten Gelenken. Beim Gehen müssen Stand- und Schwungphasen klar unterscheidbar sein: Während des Bodenkontakts bleiben die Füße stehen und heben sich bei jedem Schritt sauber ab. Stimme die Schrittlänge auf die Bewegungsgeschwindigkeit ab.

Verwende Terrain-Sampling und inverse Kinematik, damit die Füße am Boden bleiben. Füge Gewichtsverlagerungen, subtile Körperbewegungen, ausgewogene Schwanzbewegungen, Kopfdrehungen und Atmung hinzu. Dinosaurier dürfen niemals schweben, rutschen, den Boden durchdringen oder durch Gebäude, Felsen, Bäume oder andere Dinosaurier laufen.
Verwende Hindernisvermeidung und sichere Wege. Verschiedene Arten sollen unterschiedliche Bewegungsgeschwindigkeiten, Gangarten und Verhaltensweisen haben. Meerestiere müssen in ihre Bewegungsrichtung blicken.

INTERACTION
Ermögliche den Nutzern:

Die Kamera frei zu drehen, zu zoomen und den Unterwasser-Querschnitt zu untersuchen.
Einen Dinosaurier auszuwählen und ihm mit einer sich flüssig bewegenden Kamera zu folgen.

Futter an geeigneten Stellen zu platzieren und zu beobachten, wie sich Dinosaurier in der Nähe nähern und fressen.

Trinken, Ausruhen, Rufen und Herdenbewegungen auszulösen.

Nester zu erkunden und das Schlüpfen eines Jungtiers zu beobachten.
Das Auftauchen eines Meeresreptils mit Spritzwasser auszulösen.
Zwischen Tageslicht, Sonnenuntergang und Nacht zu wechseln.
Regen, Wind und vulkanische Aktivität anzupassen.
Die Simulation zu pausieren und die Szene zurückzusetzen.
Jede Steuerung muss eine klare, sichtbare Reaktion auslösen. Halte Interaktionen wiederholbar und verhindere, dass sich überschneidende Animationen die Posen der Figuren zerstören.
ATMOSPHÄRE UND AUDIO
Füge sich bewegendes Laub, ziehende Wolken, Vögel, Insekten, Regentropfen und nachts warm leuchtende Lichter an der Forschungsstation hinzu. Ergänze ruhige atmosphärische Musik und Umgebungsgeräusche mit einem funktionierenden Musikschalter und Lautstärkeregler. Starte Audio erst nach einer Interaktion des Nutzers.
INTERFACE
Verwende eine kompakte, elegante Benutzeroberfläche mit englischen Beschriftungen. Die Szene soll im Mittelpunkt stehen; vermeide große Bedienfelder, die die Insel verdecken. Gestalte das Layout responsiv für Desktop und Mobilgeräte.
TECHNISCHE QUALITÄT
Verwende Instancing für wiederholte Vegetation und Objekte, effiziente Geometrie, passende Schatten und zurückhaltendes Post-Processing. Bringe visuellen Detailreichtum mit flüssiger Echtzeit-Performance ins Gleichgewicht.
Erstelle eine vollständige Szene, kein Mockup. Teste die fertige HTML-Datei direkt in einem Desktop-Browser, prüfe Screenshots und Konsole, probiere jede Interaktion aus und behebe vor der Auslieferung Ladefehler, schwebende Dinosaurier, Fußrutschen, fehlerhafte Kollisionen, Wasserartefakte und Kameraprobleme.
```

<details>
<summary>Original-Prompt</summary>

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

[Details ansehen ↗](https://www.tripo3d.ai/de/3d-prompts/claude-opus-5-5-2102450239923720440) · [Originalbeitrag](https://x.com/vib3coded/status/2102450842070569099) · [Zurück zu den Beispielen](#all-prompts)

---


[Vollständiger Katalog](catalog.de.md) · **1 / 1**

<p align="center"><strong><a href="https://www.tripo3d.ai/de/3d-prompts/models/claude-opus-5-5?utm_source=github&amp;utm_medium=referral&amp;utm_campaign=awesome_opus_5_5_prompts&amp;utm_content=catalog_footer">Vollständiger Katalog →</a></strong></p>
