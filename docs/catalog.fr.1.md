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
  <a href="../docs/catalog.de.1.md"><img alt="Deutsch" src="https://img.shields.io/badge/Deutsch-64748b?style=flat-square"></a>
  <a href="../docs/catalog.fr.1.md"><img alt="Français" src="https://img.shields.io/badge/Fran%C3%A7ais-✓-238636?style=flat-square"></a>
  <a href="../docs/catalog.it.1.md"><img alt="Italiano" src="https://img.shields.io/badge/Italiano-64748b?style=flat-square"></a>
  <a href="../docs/catalog.ru.1.md"><img alt="Русский" src="https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-64748b?style=flat-square"></a>
  <a href="../docs/catalog.tr.1.md"><img alt="Türkçe" src="https://img.shields.io/badge/T%C3%BCrk%C3%A7e-64748b?style=flat-square"></a>
  <a href="../docs/catalog.uk.1.md"><img alt="Українська" src="https://img.shields.io/badge/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0-64748b?style=flat-square"></a>
  <a href="../docs/catalog.vi.1.md"><img alt="Tiếng Việt" src="https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-64748b?style=flat-square"></a>
</p>

[Catalogue complet](catalog.fr.md) · **1 / 1**

<a id="all-prompts"></a>

<details>
<summary>Parcourir les exemples (11)</summary>

- [Simulation interactive de fluide néon eulérienne](#claude-opus-5-5-2102565611473661963)
- [Page web paysagère 3D interactive — vallée japonaise de cerisiers](#claude-opus-5-5-2102565403109085669)
- [Modèle de l’accident du Hundenberg et vidéo réaliste](#claude-opus-5-5-2102547809140355250)
- [Rendu 3D à 360° d’un terrain de handball à partir d’une image](#claude-opus-5-5-2102544406117286004)
- [Arrière-plan 3D procédural de menu principal Three.js à partir d’une image](#claude-opus-5-5-2102544196808667471)
- [Machine de Rube Goldberg 3D autonome](#claude-opus-5-5-2102544078927741369)
- [Jeu interactif d’animaux de la ferme dans le style de Peter Rabbit](#claude-opus-5-5-2102538762731565085)
- [Navire pirate interactif cinématique au coucher du soleil](#claude-opus-5-5-2102533729746882985)
- [Monde Three.js infini généré procéduralement](#claude-opus-5-5-2102529695908806728)
- [Simulation interactive d’évacuation de foule](#claude-opus-5-5-2102467667978572092)
- [Île préhistorique 3D interactive](#claude-opus-5-5-2102450239923720440)

</details>
<a id="claude-opus-5-5-2102565611473661963"></a>

### Simulation interactive de fluide néon eulérienne

[theailoser](https://x.com/theailoser) · 2026-09-23 · Claude Opus 5.5 · Animation

<a href="https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102565611473661963"><img src="../assets/previews/aed453c22b47b5e182d83ea4b126bd65e4391d679f7ad13bdfafe7c9d36fc8ff.webp" width="840" loading="lazy" alt="Simulation interactive de fluide néon eulérienne"></a>

**Prompt**

```text
Rédigez un document HTML complet, contenu dans un seul fichier, qui implémente une simulation interactive de fluide néon eulérienne, accélérée par GPU et hautement performante.

Exigences techniques et esthétiques strictes :

1. Architecture et performances :
   - Fichier unique : tout le HTML, le CSS et le JavaScript/les shaders GLSL doivent être intégrés directement dans le fichier.
   - Zéro dépendance externe : WebGL 1.0 ou 2.0 natif uniquement (ni Three.js, ni Pixi, ni aucune bibliothèque externe).
   - Dynamique des fluides calculée sur le GPU : la simulation doit s’exécuter entièrement au moyen d’objets framebuffer (FBO) utilisés en ping-pong, avec des shaders de fragment personnalisés pour :
     a) l’advection (vitesse et colorant)
     b) le calcul de la divergence
     c) le solveur de Poisson pour la pression (itérations de Jacobi, 20 à 30 itérations par image)
     d) la soustraction du gradient / projection de la vitesse
     e) le confinement de la vorticité (ajoute des tourbillons turbulents et empêche le fluide de se transformer en une masse terne et floue).

2. Fidélité visuelle (rendu « fumée néon ») :
   - Arrière-plan noir absolu, semblable à un vide (`#050508`).
   - Mélange additif / HDR pour l’injection du colorant.
   - Palette dynamique : chaque mouvement vif du curseur ou glissement tactile injecte un colorant néon très lumineux, dont la teinte évolue progressivement parmi des couleurs cybernétiques éclatantes (cyan électrique `#00F0FF`, magenta vif `#FF007F`, ultraviolet profond et or rayonnant).
   - Améliorations du shader d’affichage : inclure directement dans le shader de rendu final une passe de post-traitement appliquant un bloom/glow subtil, un tone mapping et une aberration chromatique autour des bords tourbillonnants du fluide.

3. Interaction :
   - Souris et tactile : un déplacement rapide du curseur ou un glissement injecte une vitesse proportionnelle à la vitesse de la souris, ainsi qu’un colorant lumineux dense.
   - Mouvement ambiant passif : lorsqu’il n’y a aucune interaction, générer un curl noise procédural subtil ou de légers vortex dérivants afin que la toile ne soit jamais complètement statique.
   - Contrôles : un HUD de contrôle élégant et ultra-minimaliste en glassmorphism, placé dans un coin et masqué automatiquement en cas d’inactivité :
     * Curseur de viscosité
     * Curseur de dissipation / persistance du colorant
     * Curseur du rayon d’injection
     * Bouton « Effacer la toile »
     * Bouton permettant de faire défiler les thèmes de couleurs (Cyberpunk, Inferno thermique, Bioluminescent profond).

4. Finitions de production :
   - Gérer automatiquement les écrans haute densité de pixels et les `resize` événements sans étirer ni effacer les textures FBO.
   - Prévoir une vérification de compatibilité avec repli élégant pour la prise en charge des textures en virgule flottante (`OES_texture_float` / `OES_texture_half_float`).
   - Fournir un code propre, sans bogue et entièrement implémenté, sans aucun placeholder ni commentaire tronqué.

Retournez uniquement le fichier HTML entièrement rempli, prêt à être exécuté directement dans Chrome/Safari/Firefox.
```

<details>
<summary>Prompt original</summary>

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

[Voir les détails ↗](https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102565611473661963) · [Publication originale](https://x.com/theailoser/status/2102565612874596411) · [Retour aux exemples](#all-prompts)

---

<a id="claude-opus-5-5-2102565403109085669"></a>

### Page web paysagère 3D interactive — vallée japonaise de cerisiers

[宝玉](https://x.com/dotey) · 2026-09-23 · Claude Opus 5.5 · Interactif

<a href="https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102565403109085669"><img src="../assets/previews/4cdfb9495d54a6ee6bff4ae1821ab9b150b2f0a5b920fb4c6242ebbbb6153d4f.webp" width="840" loading="lazy" alt="Page web paysagère 3D interactive — vallée japonaise de cerisiers"></a>

**Prompt**

```text
Crée directement une page web paysagère 3D aboutie, interactive en temps réel dans le navigateur. 

Thème : vallée japonaise de cerisiers. 
Utilise HTML, CSS et JavaScript. Ne génère pas d’image et ne fournis pas seulement une proposition de design ; 
n’utilise pas une simple image d’arrière-plan avec un effet de parallaxe pour faire passer cela pour de la 3D. Je veux un résultat réellement fonctionnel et explorable. 

【I. Positionnement de l’œuvre】

Il s’agit d’un paysage de vallée complet et continu, avec une véritable profondeur entre le premier plan et l’arrière-plan, 
pas d’un petit objet isolé, d’une île flottante, d’une maquette sur socle ni d’une simple démonstration technique. 

Le style est un voxel art moderne et détaillé : 
conserve le langage formel de la géométrie cubique, mais l’image doit être en haute résolution, avec antialiasing et un éclairage fin. 
Pas de pixel art rétro basse résolution, pas d’empilement de gros blocs et pas de filtre pixelisé appliqué à l’image. 

La qualité visuelle est prioritaire. Mieux vaut quelques fonctionnalités en moins que de sacrifier la composition, les matériaux ou l’éclairage. 

【II. Utilisation des images de référence】

Si des images de référence sont fournies, commence par en comprendre la composition, les différents plans, l’échelle, la lumière et les relations colorimétriques. 
Inspire-toi uniquement de leur ambiance et de leur langage visuel, puis reconçois la scène ; 
ne reprends pas à l’identique l’emplacement des bâtiments, des arbres, des reliefs et des chemins, et ne fais pas une reproduction à l’échelle 1:1. 

Les images de référence ne sont pas des ressources d’arrière-plan pour la page web. La scène doit être constituée de véritable géométrie 3D. 

【III. Composition de la scène】

Dès son ouverture, la page doit présenter une image complète et attrayante ; 
l’utilisateur ne doit pas avoir à faire pivoter la caméra pour trouver un bel angle de vue. 

Utilise une caméra en perspective, et non une caméra isométrique en plongée de type maquette. 
L’image doit présenter clairement un premier plan, un plan intermédiaire et un arrière-plan : 

Premier plan : 
un vieux cerisier particulièrement marquant, accompagné de rochers, d’herbes, de végétation, de lanternes de pierre et de quelques pétales tombés, 
forme un cadrage naturel sur le bord de l’image, sans masquer la rivière, le pont ni les bâtiments principaux. 

Plan intermédiaire : 
une rivière sinueuse guide le regard vers l’intérieur de l’image, avec un pont japonais rouge enjambant son cours ; 
le village, les maisons de thé, le sanctuaire et les sentiers se répartissent en suivant le relief, avec de véritables relations de circulation entre les bâtiments. 
Le sol doit présenter des ondulations, des berges et des transitions naturelles, et non des modèles répartis uniformément sur une surface plane. 

Arrière-plan : 
une pagode à plusieurs niveaux sur le versant, des forêts à différentes distances, des crêtes montagneuses et des montagnes enneigées au loin. 
Exprime la distance par les variations d’échelle, les occultations, les écarts de température de couleur et la perspective atmosphérique, 
plutôt que de simplement réduire la taille des objets éloignés. 

Ne répartis pas tous les éléments de manière uniforme. Il faut une hiérarchie, des variations de densité, des espaces dégagés et un point focal visuel clairement défini. 

【IV. Formes et qualité d’image】

Cerisier : 
le tronc doit présenter des inflexions, des ramifications et des racines ; la cime doit être composée de bouquets de fleurs irréguliers, 
avec des espaces entre eux, des variations d’épaisseur et des branches visibles. Ne le transforme pas en quelques sphères régulières ou en amas cubiques. 

Bâtiments : 
les toits doivent comporter des rangées de tuiles superposées, des avant-toits, des poutres, des poteaux et des claustras ; 
les bâtiments doivent varier par leur fonction, leur volume et leur hauteur ; ne répète pas la même maison dans toute la vallée. 

Terrain : 
les berges doivent présenter des pierres humides, des touffes d’herbe et des transitions végétales. 
Évite les escaliers trop réguliers, les bandes répétitives, les damiers et les grilles procédurales trop visibles. 

Surface de l’eau : 
elle doit refléter les éléments environnants et présenter des ondulations modérées, des variations de profondeur et une transition avec les berges. 
Utilise autant que possible les réflexions de la scène réelle ; même en cas de dégradation des performances, le résultat doit rester visuellement crédible. 
Ne remplace pas l’eau par un bruit scintillant, une forte distorsion ou un grand plan bleu uniforme. 

Détails : 
tu peux ajouter quelques carpes koï, pétales tombés, lucioles, cascades et oiseaux volant au loin, 
mais tous ces éléments doivent servir l’ambiance sans rendre l’image chargée. 
N’empile pas des détails uniquement pour pouvoir revendiquer un nombre élevé de modèles. 

【V. Couleurs et ambiance】

L’ambiance par défaut est celle de l’heure bleue : 
une vallée et des montagnes lointaines aux teintes froides, des fleurs de cerisier rose tendre, et la lumière chaleureuse mais non surexposée des lanternes et des fenêtres. 
La lumière chaude doit se concentrer dans les zones occupées, sans teinter tout l’environnement d’orange. 

Prévois des ombres douces, un assombrissement aux points de contact entre les objets, une exposition cohérente, 
un bloom maîtrisé, de l’antialiasing et une brume légère dont la densité varie avec la distance. 

Évite les tons blanchis, l’aspect grisâtre, la sursaturation, la brume couvrant tout l’écran, les lumières surexposées et l’aliasing marqué. 
La géométrie cubique peut rester nette, mais le rendu ne doit pas paraître grossier. 

Propose également deux ambiances : « matin » et « sous la pluie » ; 
lors du changement, modifie simultanément le ciel, la lumière ambiante, la brume et les effets locaux, 
et pas uniquement la couleur de l’arrière-plan. 

【VI. Interactions et interface】

Propose quatre caméras conçues avec soin : 
vue panoramique de la vallée, vue basse au bord de la rivière, sentier du temple et vue plongeante depuis le versant. 
Le passage d’une caméra à l’autre doit être fluide et chacune doit apporter une composition qui lui est propre. 

Interactions de base : 
faire glisser la souris pour observer, utiliser la molette pour zoomer ou avancer ; sur écran tactile, prendre en charge le glissement et le pincement à deux doigts. 
Prévois des fonctions pour réinitialiser la vue, masquer l’interface et enregistrer l’image actuelle. 

Améliorations facultatives : 
exploration libre, promenade lente de la caméra et ambiance sonore. 
Le son d’ambiance doit être désactivé par défaut et ne se lancer qu’après un clic volontaire de l’utilisateur. 
Les fonctionnalités supplémentaires ne doivent pas nuire à la qualité de la vue par défaut. 

L’interface doit rester discrète et soignée, en laissant le paysage au premier plan. 
Place le titre et la barre de commandes sur les bords, sans masquer le point focal visuel. 
Sur ordinateur comme sur mobile, aucun bouton ne doit sortir de l’écran, aucun texte ne doit se chevaucher et aucune commande ne doit être inutilisable. 

【VII. Technique et performances】

Tu peux utiliser Three.js / WebGL ainsi que des dépendances CDN dont les versions sont figées et compatibles entre elles. 
Privilégie des capacités de rendu éprouvées ; ne réécris pas tout un moteur pour obtenir une solution « sans dépendances ». 

Regroupe autant que possible le HTML, le CSS et le JavaScript écrits sur mesure dans un seul fichier HTML. 
Génère les éléments de la scène à partir de géométrie et de matériaux procéduraux, sans dépendre d’images ou de ressources de modèles 3D externes. 

Pour les objets répétés, utilise une méthode adaptée de rendu par lots ou d’instanciation ; 
contrôle raisonnablement la tessellation, les ombres, les réflexions et la résolution de rendu. 
Propose un mode haute qualité et un mode léger ; sur mobile, utilise par défaut les réglages légers. 
N’augmente pas indéfiniment le nombre de voxels pour obtenir davantage de détails. 

Ajoute un indicateur de chargement, un message si WebGL n’est pas pris en charge et la gestion des erreurs nécessaires. 
Ne lance pas automatiquement le son lorsqu’il n’a pas été activé ; respecte les préférences système de réduction des animations. 

【VIII. Validation avant livraison】

Ne livre pas le résultat immédiatement après avoir écrit le code. 

Si l’environnement permet d’exécuter le projet dans un navigateur et de prendre des captures, ouvre d’abord réellement la page, 
vérifie la caméra par défaut, les quatre vues, le changement d’ambiance ainsi que la mise en page sur ordinateur et sur mobile, 
puis corrige à partir des captures les problèmes évidents de composition, d’exposition, d’occultation et de rendu. 

Vérifie en particulier : 
l’absence d’écran vide, d’échec du chargement et d’erreurs dans la console ; 
l’absence de pénétration de géométrie, de scintillement, de bandes dans les ombres, de surexposition et d’anomalies sur l’eau ; 
que la vue par défaut ressemble réellement à un paysage complet et non à une petite maquette ; 
que les boutons fonctionnent vraiment et ne débordent pas sur mobile. 

Tu peux utiliser des captures du navigateur pour la validation, mais n’appelle aucun outil de génération d’images. 
Indique honnêtement les tests qui n’ont pas pu être effectués ; ne prétends pas qu’ils ont été vérifiés. 

Livraison finale : 
1. Un fichier HTML réellement présent et ouvrable, ou un aperçu interactif pris en charge par l’environnement actuel. 
2. Si des captures sont possibles, joins une véritable capture du rendu dans le navigateur. 
3. Explique brièvement le mode d’utilisation et les conditions d’exécution nécessaires. 

Réalise directement le projet ; pour les détails non essentiels, prends des décisions de conception cohérentes de ton propre chef, 
et ne me renvoie pas à plusieurs reprises les problèmes d’implémentation que tu peux résoudre toi-même.
```

<details>
<summary>Prompt original</summary>

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

[Voir les détails ↗](https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102565403109085669) · [Publication originale](https://x.com/dotey/status/2102565403109085669) · [Retour aux exemples](#all-prompts)

---

<a id="claude-opus-5-5-2102547809140355250"></a>

### Modèle de l’accident du Hundenberg et vidéo réaliste

[AImanhasnoname](https://x.com/aimanhasnoname) · 2026-09-22 · Claude Opus 5.5 · Animation

<a href="https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102547809140355250"><img src="../assets/previews/2eefc8b880a8aa71a501cf0b41a5dfd9076ac002865941b7287cedeb73ee00a0.webp" width="840" loading="lazy" alt="Modèle de l’accident du Hundenberg et vidéo réaliste"></a>

**Prompt**

```text
Crée-moi un modèle du Hundenberg dans Blender, puis une vidéo réaliste de l’accident.
```

<details>
<summary>Prompt original</summary>

```text
make me a model of the Hundenberg on blender make me a realistic video of the accident.
```

</details>

[Voir les détails ↗](https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102547809140355250) · [Publication originale](https://x.com/aimanhasnoname/status/2102547809140355250) · [Retour aux exemples](#all-prompts)

---

<a id="claude-opus-5-5-2102544406117286004"></a>

### Rendu 3D à 360° d’un terrain de handball à partir d’une image

[ハンドボール人「布施千佳純」](https://x.com/chikaidev) · 2026-09-22 · Claude Opus 5.5 · Scènes

<a href="https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102544406117286004"><img src="../assets/previews/c492adaa7b1ffad5024b0a28618dcc51d0f50b7c16ae704c9ee3785881445195.webp" width="840" loading="lazy" alt="Rendu 3D à 360° d’un terrain de handball à partir d’une image"></a>

**Images de référence:** [1](https://media.tripogrowth.space/media/6a116b62-88ce-491b-b4ba-eed6d9c9f168.jpg) · [2](https://pbs.twimg.com/media/HS29xCPaYAAcMmd.jpg)

**Prompt**

```text
Rends en 3D le terrain de handball, les buts, l’arbitre, les joueurs et le ballon visibles sur l’image, afin de pouvoir observer la scène librement sous n’importe quel angle à 360°. Reproduis fidèlement la posture de chaque personnage ainsi que les couleurs des objets.
```

<details>
<summary>Prompt original</summary>

```text
画像内のハンドボールコート、ゴール、レフェリー、プレイヤー、ボールを3dレンダリングして、360度自由角度から見れるようにして。各人物の姿勢まで、また物体の色まで正確に再現して。
```

</details>

[Voir les détails ↗](https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102544406117286004) · [Publication originale](https://x.com/chikaidev/status/2102545257372213581) · [Retour aux exemples](#all-prompts)

---

<a id="claude-opus-5-5-2102544196808667471"></a>

### Arrière-plan 3D procédural de menu principal Three.js à partir d’une image

[Majid Manzarpour](https://x.com/majidmanzarpour) · 2026-09-22 · Claude Opus 5.5 · Scènes

<a href="https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102544196808667471"><img src="../assets/previews/00e1e42d1237637670ed6c41d5701bef1c74975a73d5b62a5e7f698ea3909f93.webp" width="840" loading="lazy" alt="Arrière-plan 3D procédural de menu principal Three.js à partir d’une image"></a>

**Images de référence:** [1](https://media.tripogrowth.space/media/de4534b1-fda8-4736-8558-09b7283f646a.jpg) · [2](https://pbs.twimg.com/media/HS28q6mWMAAxONB.jpg)

**Prompt**

```text
Recréez parfaitement cet arrière-plan de menu principal 3D, animé et entièrement procédural, dans Three.js, sous la forme d’un fichier HTML unique
```

<details>
<summary>Prompt original</summary>

```text
recreate this perfectly, fully procedural, animated, main menu background in three.js 3D single HTML file
```

</details>

[Voir les détails ↗](https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102544196808667471) · [Publication originale](https://x.com/majidmanzarpour/status/2102544198335373576) · [Retour aux exemples](#all-prompts)

---

<a id="claude-opus-5-5-2102544078927741369"></a>

### Machine de Rube Goldberg 3D autonome

[leo](https://x.com/leogao25) · 2026-09-22 · Claude Opus 5.5 · Animation

<a href="https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102544078927741369"><img src="../assets/previews/337a5747637168ec67e4ac5563dd2bd4b3bd60fbdcfe57409ba528644c257fdc.webp" width="840" loading="lazy" alt="Machine de Rube Goldberg 3D autonome"></a>

**Prompt**

```text
Construis une machine de Rube Goldberg 3D qui fonctionne de manière autonome, sous la forme d'un fichier index.html entièrement autonome dans le répertoire courant.

La chaîne, dans l'ordre :
1. Une bille est libérée en haut et roule sur une série de rampes en zigzag.
2. Elle fait tomber une rangée d'au moins 12 dominos.
3. Le dernier domino fait basculer une balançoire, qui projette une petite balle dans un seau suspendu.
4. Le poids du seau le fait descendre ; sa corde passe sur une poulie et tire sur une cloche, qui se balance visiblement.
5. Le même mouvement fait monter un drapeau le long d'un mât. Le drapeau arrivé en haut marque la fin.

Règles :
- Écris toi-même la physique : aucune bibliothèque de physique. Tous les mouvements après la libération de la bille doivent provenir de ta simulation (corps rigides, collisions, contraintes, corde et poulie). Aucune animation par images clés ni aucun mouvement interpolé pour les éléments de la machine.
- Tu peux charger three.js depuis un CDN pour le rendu. Rien d'autre d'externe : aucune image, aucun modèle ni aucune police.
- La machine doit fonctionner sans aucune intervention de l'utilisateur : démarrer automatiquement au chargement de la page, utiliser une caméra cinématique qui suit l'action et terminer toute la chaîne en environ 15 à 20 secondes. Une fois le drapeau hissé, le maintenir en position pendant 2 secondes, puis réinitialiser la machine et recommencer.
- Déterminisme : utilise un pas de temps fixe et aucune valeur aléatoire non initialisée, afin que chaque exécution soit identique.
- Remplis la fenêtre du navigateur. L'enregistrement d'écran sera réalisé en 1280×720.
- Aucun texte ni élément d'interface à l'écran, sous quelque forme que ce soit.
- Soigne le rendu : éclairage, ombres, matériaux et décor doivent donner l'impression d'un véritable mécanisme.
```

<details>
<summary>Prompt original</summary>

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

[Voir les détails ↗](https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102544078927741369) · [Publication originale](https://x.com/leogao25/status/2102544081863717153) · [Retour aux exemples](#all-prompts)

---

<a id="claude-opus-5-5-2102538762731565085"></a>

### Jeu interactif d’animaux de la ferme dans le style de Peter Rabbit

[mblaso](https://x.com/blaso96) · 2026-09-22 · Claude Opus 5.5 · Jeux

<a href="https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102538762731565085"><img src="../assets/previews/b0398c725131002e496ea826c8fe66a2421c20c036a8989b4aec58b23d06e574.webp" width="840" loading="lazy" alt="Jeu interactif d’animaux de la ferme dans le style de Peter Rabbit"></a>

**Prompt**

```text
"Crée un jeu interactif d’animaux de la ferme dans le style visuel de "Peter Rabbit"
menu principal = sons activés/désactivés + sélection de l’animal (cheval, cochon, vache, chat, chien)
Échap = pause : réinitialiser et revenir au point d’apparition/menu principal/
WASD pour se déplacer
barre d’espace pour sauter et interagir avec les autres animaux à proximité
les interactions sont aléatoires lorsqu’un animal est détecté à proximité
les interactions peuvent consister à faire des sons à l’autre animal (différents de ses sons passifs), ou à lui faire un petit « boop »
interactions possibles avec : de l’eau à boire, du foin à manger et des fruits à manger. 
vue à la troisième personne, comme si la caméra se trouvait légèrement derrière l’animal et au-dessus de lui
animaux d’ambiance : oiseaux et avions dans le ciel (de façon aléatoire)
décor = terres agricoles, grange, village agricole avec des maisons (impossible d’entrer dans les maisons)
Prévois suffisamment d’éléments pour capter l’attention, sans aller jusqu’à un niveau de finition digne d’une production ; le but est simplement de partager quinze minutes de ma journée avec ma fille et de nous amuser
react, svg, js, webgl, threejs, ou tout ce qui est nécessaire pour donner une bonne sensation de jeu"
```

<details>
<summary>Prompt original</summary>

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

[Voir les détails ↗](https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102538762731565085) · [Publication originale](https://x.com/blaso96/status/2102538764749037738) · [Retour aux exemples](#all-prompts)

---

<a id="claude-opus-5-5-2102533729746882985"></a>

### Navire pirate interactif cinématique au coucher du soleil

[Vib3Coded](https://x.com/vib3coded) · 2026-09-22 · Claude Opus 5.5 · Scènes

<a href="https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102533729746882985"><img src="../assets/previews/2239f7a3f4f3863b4c6293554252f26ef2d141d58a1c633a05e382958d37bae4.webp" width="840" loading="lazy" alt="Navire pirate interactif cinématique au coucher du soleil"></a>

**Prompt**

```text
Créez de zéro une scène 3D entièrement interactive représentant un navire pirate voguant sur un océan dynamique au coucher du soleil. Le style visuel doit être cinématique et stylisé plutôt que photoréaliste, tout en restant exceptionnellement riche, détaillé, soigné et visuellement sophistiqué. Concevez le navire, l’océan, le ciel, l’éclairage, les matériaux, les voiles, le gréement, les canons, les petits détails structurels, l’écume, le sillage, les particules, l’animation, les mouvements de caméra, la composition, la profondeur atmosphérique et l’étalonnage colorimétrique. Le résultat final doit évoquer une œuvre 3D haut de gamme, produite avec un niveau de finition élevé, et non un prototype, une démonstration technique ou une scène de faible qualité. Commencez avec une page complètement vierge. Ne réutilisez aucun projet ni aucune scène existante et n’en dépendez pas. Vous pouvez créer vous-même les assets ou utiliser, si nécessaire, des assets et des bibliothèques open source fiables et réputés. Exigences obligatoires : aucun texte d’aucune sorte ne doit apparaître où que ce soit dans la scène. Aucun titre, nom, logo, description, crédit, libellé ni instruction de contrôle, dans quelque langue que ce soit. Livrez l’intégralité du projet dans un seul fichier de page autonome final, pouvant être ouvert directement dans un navigateur web, avec les assets intégrés autant que raisonnablement possible. L’océan, le navire, les voiles et la caméra doivent tous être animés de manière naturelle et fluide. Évitez les ralentis artificiels et les mouvements poussifs. Le navire doit donner l’impression de se déplacer réellement sur l’eau. Ne vous appuyez pas sur des formes géométriques primitives pour le résultat final. Construisez un navire pirate convaincant et détaillé, avec notamment une coque soigneusement modelée, des mâts, des voiles, un gréement, des cordages, des canons, des rambardes, des lanternes, des structures de pont et des détails de petite taille clairement visibles. L’éclairage doit révéler clairement la géométrie et les matériaux du navire. Créez une atmosphère riche de coucher de soleil, des ombres profondes sur l’océan, des reflets, une écume convaincante et un sillage détaillé autour et derrière le navire. Maintenez un équilibre solide entre la qualité visuelle et les performances en temps réel, afin de préserver la fluidité des interactions et de l’animation sans sacrifice évident de qualité. Utilisez automatiquement les compétences, outils, bibliothèques, techniques et assets disponibles les plus appropriés pour obtenir le meilleur résultat. N’attendez pas que je précise les technologies à utiliser. Testez réellement le résultat final dans un navigateur web de bureau. Capturez des captures d’écran, inspectez la console du navigateur pour détecter les erreurs et corrigez tous les problèmes visuels ou techniques constatés, notamment la géométrie déformée, les écrans noirs, les échecs de chargement des assets, les animations défectueuses, une composition médiocre, les artefacts de rendu ou les problèmes de caméra. À la fin, vérifiez que le fichier final s’ouvre et fonctionne directement, que la scène ne contient absolument aucun texte et qu’il ne reste aucune erreur d’exécution ou de chargement. Terminez ensuite la tâche par une réponse très brève uniquement.
```

<details>
<summary>Prompt original</summary>

```text
Create from scratch a fully interactive 3D scene of a pirate ship sailing across a dynamic ocean at sunset. The visual style should be cinematic and stylized rather than photorealistic, while still being exceptionally rich, detailed, polished, and visually sophisticated. Build the ship, ocean, sky, lighting, materials, sails, rigging, cannons, small structural details, sea foam, wake, particles, animation, camera work, composition, atmospheric depth, and color grading. The final result should feel like a premium, high-production 3D artwork, not a prototype, technical demo, or low-quality scene. Start from a completely blank page. Do not reuse or depend on any previous project or scene. You may create the assets yourself or use reliable, trusted, open-source assets and libraries when necessary. Mandatory requirements: No text of any kind may appear anywhere inside the scene. No titles, names, logos, descriptions, credits, labels, or control instructions in any language. Deliver the entire project as one final standalone page file that can be opened directly in a web browser, with assets embedded inside it as much as reasonably possible. The ocean, ship, sails, and camera must all be animated naturally and smoothly. Avoid artificial slow motion or sluggish movement. The ship should feel like it is genuinely moving through the water. Do not rely on primitive geometric shapes as the finished result. Build a visually convincing and detailed pirate ship, including a carefully shaped hull, masts, sails, rigging, ropes, cannons, railings, lanterns, deck structures, and clearly visible small-scale details. Lighting must reveal the ship's geometry and materials clearly. Create a rich sunset atmosphere, deep ocean shading, reflections, convincing sea foam, and a detailed sailing wake behind and around the vessel. Maintain a strong balance between visual quality and real-time performance, preserving smooth interaction and animation without making an obvious sacrifice in quality. Automatically use the most appropriate skills, tools, libraries, techniques, and available assets needed to achieve the best result. Do not wait for me to specify which technologies to use. Actually test the finished result in a desktop web browser. Capture visual screenshots, inspect the browser console for errors, and fix every visible or technical issue you find, including distorted geometry, black screens, failed asset loading, broken animation, poor composition, rendering artifacts, or camera problems. At the end, verify that the final file opens and works directly, that the scene contains no text whatsoever, and that there are no remaining runtime or loading errors. Then finish the task with only a brief response.
```

</details>

[Voir les détails ↗](https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102533729746882985) · [Publication originale](https://x.com/vib3coded/status/2102534606121746589) · [Retour aux exemples](#all-prompts)

---

<a id="claude-opus-5-5-2102529695908806728"></a>

### Monde Three.js infini généré procéduralement

[🥔🥔🥔](https://x.com/argofowl) · 2026-09-22 · Claude Opus 5.5 · Jeux

<a href="https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102529695908806728"><img src="../assets/previews/dc4bb91934d32b72098e8bcfd9c02285b359e6df7988d99efc153167ba968b2d.webp" width="840" loading="lazy" alt="Monde Three.js infini généré procéduralement"></a>

**Prompt**

```text
Crée un nouveau projet dans le dossier de mes projets, nommé « endless-game » : un monde infini généré procéduralement avec Three.js dans le navigateur, que je puisse explorer librement et simplement apprécier. Chaque zone doit être générée aléatoirement, avec des surprises partout, quelle que soit la durée de ma partie. L’ambiance doit être calme, relaxante et vraiment amusante, comme l’atmosphère cosy et satisfaisante de Supermarket Simulator, sans pour autant être un jeu de supermarché. Je veux un monde vraiment intéressant à parcourir à pied, avec des entités que je puisse rencontrer et avec lesquelles interagir, ainsi que des graphismes très soignés. Définis un objectif clair pour le projet, continue à travailler jusqu’à l’avoir atteint, puis joue une sonnerie lorsque tout est terminé et prêt à être joué et testé.
```

<details>
<summary>Prompt original</summary>

```text
create a new project in my projects folder called "endless-game": an endless, procedurally generated world built with three.js in the browser that i can roam freely and just enjoy. every area should be randomly generated, with surprises everywhere no matter how long i play. it should feel calm, relaxing and genuinely fun, like the cozy, satisfying vibe of a supermarket simulator, but it shouldn't be a supermarket game. i want a really interesting world to walk around in, with entities i can meet and interact with, and really cool graphics. set a clear goal for the project, keep working until you reach it, and play a sound chime when it's done and ready for me to play and test.
```

</details>

[Voir les détails ↗](https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102529695908806728) · [Publication originale](https://x.com/argofowl/status/2102529695908806728) · [Retour aux exemples](#all-prompts)

---

<a id="claude-opus-5-5-2102467667978572092"></a>

### Simulation interactive d’évacuation de foule

[Dom](https://x.com/dominikmartn) · 2026-09-22 · Claude Opus 5.5 · Animation

<a href="https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102467667978572092"><img src="../assets/previews/576e684f6ec389443536e17db7a1c5eb173eeb4116c3cd05337b69084858983f.webp" width="840" loading="lazy" alt="Simulation interactive d’évacuation de foule"></a>

**Prompt**

```text
créer une simulation interactive d’évacuation de foule et voir où la circulation se bloque
```

<details>
<summary>Prompt original</summary>

```text
build an interactive crowd evacuation sim and see where it jams
```

</details>

[Voir les détails ↗](https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102467667978572092) · [Publication originale](https://x.com/dominikmartn/status/2102467667978572092) · [Retour aux exemples](#all-prompts)

---

<a id="claude-opus-5-5-2102450239923720440"></a>

### Île préhistorique 3D interactive

[Vib3Coded](https://x.com/vib3coded) · 2026-09-22 · Claude Opus 5.5 · Interactif

<a href="https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102450239923720440"><img src="../assets/previews/23a4362d0525060fc7304a39c43c7f21b75923aa85ed66f5303b370d996bcf0d.webp" width="840" loading="lazy" alt="Île préhistorique 3D interactive"></a>

**Prompt**

```text
Créez une magnifique île préhistorique 3D très détaillée et entièrement interactive avec Three.js et WebGL. Livrez le tout dans un seul fichier HTML autonome qui s’ouvre directement dans Chrome. Intégrez les ressources lorsque c’est possible.

DIRECTION ARTISTIQUE
Construisez une grande île arrondie entourée d’un océan, avec une coupe sous-marine transparente. Le résultat doit évoquer un univers miniature haut de gamme : végétation luxuriante, dinosaures expressifs, matériaux riches, éclairage atmosphérique et animation soignée. Adoptez une direction artistique cohérente et stylisée plutôt que de simples formes géométriques.
ISLAND
Créez un terrain varié avec des plages, des falaises rocheuses, des forêts préhistoriques denses, des fougères géantes, une cascade, un étang d’eau douce et un volcan. Ajoutez une petite station de recherche, des passerelles en bois, des plateformes d’observation, des caisses de ravitaillement et des nids de dinosaures. L’île doit être assez vaste pour que les dinosaures se déplacent naturellement entre des zones distinctes.

COUPE SOUS-MARINE
L’eau doit former un volume profond et arrondi autour de l’île, avec des décors sous-marins clairement visibles à travers ses parois. Incluez un fond marin texturé, des rochers, des plantes aquatiques, des poissons, des bulles et un reptile marin vert nageant sous la surface. Ne placez pas de dinosaures terrestres ordinaires sous l’eau et n’ajoutez pas de sous-marin.
Utilisez des vagues animées, des réflexions de Fresnel, des motifs lumineux sous-marins, de l’écume sur le rivage et des éclaboussures. Évitez les artefacts de tri de la transparence et les espaces visibles entre l’île et l’eau.

DINOSAURS
Incluez plusieurs espèces distinctes, comme un sauropode à long cou, un Triceratops, un Stegosaurus, un grand théropode et des animaux grégaires plus petits. Ajoutez des ptérosaures qui tournent dans le ciel.
Donnez à chaque espèce une anatomie reconnaissable, des corps modelés, des membres articulés, des têtes détaillées, des queues et des motifs cutanés adaptés. Évitez de construire les dinosaures finis à partir de boîtes évidentes ou de sphères disjointes.

ANIMATION NATURELLE
Utilisez des squelettes hiérarchiques avec des articulations correctement positionnées. La marche doit comporter des phases d’appui et d’oscillation distinctes : les pieds restent posés pendant le contact avec le sol et se soulèvent proprement à chaque pas. Adaptez la longueur de la foulée à la vitesse de déplacement.

Utilisez l’échantillonnage du terrain et la cinématique inverse pour maintenir les pieds au sol. Ajoutez des transferts de poids, de légers mouvements du corps, des mouvements de queue équilibrés, des rotations de tête et la respiration. Les dinosaures ne doivent jamais flotter, glisser, s’enfoncer dans le sol ou traverser des bâtiments, des rochers, des arbres ou d’autres dinosaures.
Utilisez l’évitement des obstacles et des trajectoires sûres. Les différentes espèces doivent avoir des vitesses de déplacement, des types de démarche et des comportements différents. Les animaux marins doivent être orientés dans leur direction de déplacement.

INTERACTION
Permettez aux utilisateurs de :

Faire pivoter librement la caméra, zoomer et examiner la coupe sous-marine.
Sélectionner un dinosaure et le suivre avec une caméra se déplaçant en douceur.

Placer de la nourriture à des endroits appropriés et regarder les dinosaures proches s’en approcher et la manger.

Déclencher la boisson, le repos, les appels et les déplacements du troupeau.

Explorer les nids et observer l’éclosion d’un petit.
Déclencher l’apparition en surface d’un reptile marin avec une éclaboussure.
Passer du jour au coucher du soleil, puis à la nuit.
Régler la pluie, le vent et l’activité volcanique.
Mettre la simulation en pause et réinitialiser la scène.
Chaque contrôle doit produire une réponse claire et visible. Les interactions doivent rester répétables et empêcher que des animations qui se chevauchent ne déforment les poses des personnages.
ATMOSPHÈRE ET AUDIO
Ajoutez du feuillage en mouvement, des nuages dérivants, des oiseaux, des insectes, des particules de pluie et des lumières chaleureuses autour de la station de recherche pendant la nuit. Incluez une musique d’ambiance discrète et des sons environnementaux, avec un bouton fonctionnel pour activer ou désactiver la musique et un curseur de volume. Ne démarrez l’audio qu’après une interaction de l’utilisateur.
INTERFACE
Utilisez une interface compacte et élégante avec des libellés en anglais. La scène doit rester dominante ; évitez les grands panneaux qui recouvrent l’île. Adaptez la mise en page aux écrans d’ordinateur comme aux appareils mobiles.
QUALITÉ TECHNIQUE
Utilisez l’instanciation pour la végétation et les éléments répétés, une géométrie optimisée, des ombres adaptées et un post-traitement modéré. Trouvez l’équilibre entre richesse visuelle et fluidité en temps réel.
Créez une scène complète, pas une maquette. Testez le fichier HTML final directement dans un navigateur de bureau, examinez les captures d’écran et la console, testez chaque interaction et corrigez avant la livraison les erreurs de chargement, les dinosaures qui flottent, le glissement des pieds, les collisions défectueuses, les artefacts de l’eau et les problèmes de caméra.
```

<details>
<summary>Prompt original</summary>

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

[Voir les détails ↗](https://www.tripo3d.ai/fr/3d-prompts/claude-opus-5-5-2102450239923720440) · [Publication originale](https://x.com/vib3coded/status/2102450842070569099) · [Retour aux exemples](#all-prompts)

---


[Catalogue complet](catalog.fr.md) · **1 / 1**

<p align="center"><strong><a href="https://www.tripo3d.ai/fr/3d-prompts/models/claude-opus-5-5?utm_source=github&amp;utm_medium=referral&amp;utm_campaign=awesome_opus_5_5_prompts&amp;utm_content=catalog_footer">Catalogue complet →</a></strong></p>
