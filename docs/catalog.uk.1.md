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
  <a href="../docs/catalog.fr.1.md"><img alt="Français" src="https://img.shields.io/badge/Fran%C3%A7ais-64748b?style=flat-square"></a>
  <a href="../docs/catalog.it.1.md"><img alt="Italiano" src="https://img.shields.io/badge/Italiano-64748b?style=flat-square"></a>
  <a href="../docs/catalog.ru.1.md"><img alt="Русский" src="https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-64748b?style=flat-square"></a>
  <a href="../docs/catalog.tr.1.md"><img alt="Türkçe" src="https://img.shields.io/badge/T%C3%BCrk%C3%A7e-64748b?style=flat-square"></a>
  <a href="../docs/catalog.uk.1.md"><img alt="Українська" src="https://img.shields.io/badge/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0-✓-238636?style=flat-square"></a>
  <a href="../docs/catalog.vi.1.md"><img alt="Tiếng Việt" src="https://img.shields.io/badge/Ti%E1%BA%BFng%20Vi%E1%BB%87t-64748b?style=flat-square"></a>
</p>

[Повний каталог](catalog.uk.md) · **1 / 1**

<a id="all-prompts"></a>

<details>
<summary>Переглянути приклади (11)</summary>

- [Інтерактивна ейлерова симуляція неонової рідини](#claude-opus-5-5-2102565611473661963)
- [Інтерактивний 3D-ландшафт японської сакурової долини](#claude-opus-5-5-2102565403109085669)
- [Модель аварії Hundenberg і реалістичне відео](#claude-opus-5-5-2102547809140355250)
- [3D-рендеринг гандбольного майданчика на 360° за зображенням](#claude-opus-5-5-2102544406117286004)
- [Процедурний 3D-фон головного меню в Three.js за зображенням](#claude-opus-5-5-2102544196808667471)
- [Автономна 3D-машина Руба Ґолдберґа](#claude-opus-5-5-2102544078927741369)
- [Інтерактивна гра про фермерських тварин у стилі «Кролика Пітера»](#claude-opus-5-5-2102538762731565085)
- [Кінематографічний інтерактивний піратський корабель на заході сонця](#claude-opus-5-5-2102533729746882985)
- [Нескінченний процедурно згенерований світ на Three.js](#claude-opus-5-5-2102529695908806728)
- [Інтерактивна симуляція евакуації натовпу](#claude-opus-5-5-2102467667978572092)
- [Інтерактивний 3D-острів доісторичної епохи](#claude-opus-5-5-2102450239923720440)

</details>
<a id="claude-opus-5-5-2102565611473661963"></a>

### Інтерактивна ейлерова симуляція неонової рідини

[theailoser](https://x.com/theailoser) · 2026-09-23 · Claude Opus 5.5 · Анімація

<a href="https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102565611473661963"><img src="../assets/previews/aed453c22b47b5e182d83ea4b126bd65e4391d679f7ad13bdfafe7c9d36fc8ff.webp" width="840" loading="lazy" alt="Інтерактивна ейлерова симуляція неонової рідини"></a>

**Промпт**

```text
Створіть повний HTML-документ в одному файлі, що містить високопродуктивну інтерактивну ейлерову симуляцію неонової рідини з GPU-прискоренням.

Суворі технічні й естетичні вимоги:

1. Архітектура та продуктивність:
   - Один файл: увесь HTML, CSS і JavaScript/GLSL-шейдери мають бути вбудовані в документ.
   - Жодних зовнішніх залежностей: чистий WebGL 1.0 або 2.0 (без Three.js, без Pixi, без сторонніх бібліотек).
   - Обчислення динаміки рідини на GPU: симуляція має повністю виконуватися через пінг-понг Framebuffer Object (FBO), використовуючи власні фрагментні шейдери для:
     a) адвекції (швидкість і барвник)
     b) обчислення дивергенції
     c) розв’язувача рівняння Пуассона для тиску (ітерації Якобі, 20–30 ітерацій за кадр)
     d) віднімання градієнта / проєкції швидкості
     e) утримання вихорів (додає турбулентні завихрення та не дає рідині перетворитися на тьмяну розмиту масу).

2. Візуальна достовірність (ефект «неонового диму»):
   - Тло — абсолютно чорна порожнеча (`#050508`).
   - Для введення барвника використовуйте адитивне змішування / змішування з розширеним динамічним діапазоном.
   - Динамічна палітра: кожен швидкий рух курсора або жест перетягування пальцем вводить яскравий неоновий барвник, який плавно циклічно змінює насичені кібер-відтінки (електричний блакитний `#00F0FF`, гаряча маджента `#FF007F`, глибокий ультрафіолет і сяюче золото).
   - Покращення шейдера відображення: додайте безпосередньо до фінального шейдера рендерингу постобробку, що застосовує легке світіння, тон-мапінг і хроматичну аберацію навколо закручених країв рідини.

3. Взаємодія:
   - Миша й сенсорний ввід: швидкий рух курсора або перетягування вводить швидкість, пропорційну швидкості руху миші, а також щільний сяйливий барвник.
   - Пасивний фоновий рух: у стані бездіяльності генеруйте легкий процедурний curl noise або м’які дрейфувальні вихори, щоб полотно ніколи не залишалося повністю нерухомим.
   - Керування: елегантний ультрамінімалістичний HUD у стилі glassmorphism, схований у кутку та автоматично приховуваний за відсутності активності:
     * повзунок в’язкості
     * повзунок дисипації / збереження барвника
     * повзунок радіуса сплеску
     * кнопка «Очистити полотно»
     * кнопка перемикання для циклічного вибору колірних тем (Cyberpunk, Thermal Inferno, Bioluminescent Deep).

4. Фінальне виробниче доопрацювання:
   - Автоматично обробляйте дисплеї з високою щільністю пікселів і `resize` події без розтягування або очищення текстур FBO.
   - Передбачте коректну перевірку резервного режиму для підтримки текстур із плаваючою комою (`OES_texture_float` / `OES_texture_half_float`).
   - Чистий, безпомилковий, повністю реалізований код без заглушок і обірваних коментарів.

Поверніть лише повністю заповнений HTML-файл, готовий до безпосереднього запуску в Chrome/Safari/Firefox.
```

<details>
<summary>Оригінальний промпт автора</summary>

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

[Докладніше ↗](https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102565611473661963) · [Оригінальний допис](https://x.com/theailoser/status/2102565612874596411) · [Назад до прикладів](#all-prompts)

---

<a id="claude-opus-5-5-2102565403109085669"></a>

### Інтерактивний 3D-ландшафт японської сакурової долини

[宝玉](https://x.com/dotey) · 2026-09-23 · Claude Opus 5.5 · Інтерактив

<a href="https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102565403109085669"><img src="../assets/previews/4cdfb9495d54a6ee6bff4ae1821ab9b150b2f0a5b920fb4c6242ebbbb6153d4f.webp" width="840" loading="lazy" alt="Інтерактивний 3D-ландшафт японської сакурової долини"></a>

**Промпт**

```text
Безпосередньо створіть повністю готову інтерактивну 3D-ландшафтну вебсторінку, якою можна користуватися в реальному часі у браузері. 

Тема: японська сакурова долина.
 Реалізуйте її за допомогою HTML, CSS і JavaScript. Не генеруйте зображення й не обмежуйтеся концепцією дизайну, 
не видавайте одне фонове зображення з ефектом паралаксу за 3D. Мені потрібен справді робочий, придатний для огляду готовий результат.

【1. Концепція роботи】

Це має бути цілісний, безперервний ландшафт долини з виразною глибиною та шарами переднього, середнього й дальнього планів,
 а не окрема декоративна модель, острів, що ширяє, діорама на підставці чи просто технічна демонстрація.

Стиль — сучасне деталізоване воксельне мистецтво / voxel art:
 збережіть виразну мову кубічної геометрії, але зображення має бути високої роздільної здатності, зі згладжуванням і тонко опрацьованим світлом та тінями.
 Не використовуйте ретро-пікселізацію низької роздільної здатності, грубе нагромадження великих блоків чи піксельний фільтр поверх зображення.

Візуальна якість має пріоритет. Краще відмовитися від кількох функцій, ніж пожертвувати композицією, матеріалами та освітленням.

【2. Використання референсних зображень】

Якщо додано референсні зображення, спочатку проаналізуйте їхню композицію, просторові шари, масштаб, освітлення та взаємозв’язок кольорів.
 Запозичуйте лише атмосферу й візуальну мову, а сцену спроєктуйте заново,
 не копіюйте розташування будівель, дерев, гір і доріг та не відтворюйте зображення у масштабі 1:1.

Референсне зображення не є фоновим ресурсом вебсторінки. Сама сцена має складатися зі справжньої 3D-геометрії.

【3. Композиція сцени】

Після відкриття має одразу відображатися цілісна й приваблива композиція,
 щоб користувачеві не доводилося спочатку обертати камеру в пошуках вдалого ракурсу.

Використовуйте перспективну камеру, а не ізометричну камеру з виглядом згори, як у діорамі.
 У кадрі мають бути чітко виражені передній, середній і дальній плани:

Передній план:
 виразне старе дерево сакури з камінням, травами, рослинністю, кам’яним ліхтарем і кількома опалими пелюстками;
 вони мають утворювати природне обрамлення по краю кадру, але не перекривати річку, міст і головні будівлі.

Середній план:
 звивиста річка веде погляд углиб кадру, а через неї перекинуто червоний дерев’яний міст;
 село, чайний будиночок, синтоїстське святилище та стежки розташовані відповідно до рельєфу, а між будівлями є реалістичні проходи.
 Поверхня землі має перепади висот, берегову лінію та природні переходи, а не рівномірно розставлені моделі на пласкій площині.

Дальній план:
 багатоярусна пагода на схилі, ліси на різній відстані, гірські хребти та засніжені гори вдалині.
 Передавайте відстань зміною масштабу, перекриттям об’єктів, холоднішими й теплішими відтінками та атмосферною перспективою,
 а не просто зменшуйте віддалені об’єкти.

Не заповнюйте всі ділянки елементами рівномірно. Потрібні ієрархія, варіація щільності, вільний простір і чіткий візуальний фокус.

【4. Форма та якість зображення】

Дерево сакури:
 стовбур має вигини, розгалуження й коріння, а крона — складатися з нерегулярних скупчень квітів
 із проміжками, різною товщиною та видимими гілками. Не перетворюйте її на кілька правильних сфер або кубічних грудок.

Будівлі:
 дахи мають містити багатошарову черепицю, звиси, балки, колони та віконні ґрати;
 різні будівлі повинні відрізнятися призначенням, об’ємом і висотою — не заповнюйте долину копіями одного будинку.

Рельєф:
 біля берегів мають бути вологі камені, зарості трави та плавний перехід до рослинності.
 Уникайте надто регулярних сходинок, повторюваних смуг, шахового візерунка й очевидної процедурної сітки.

Вода:
 поверхня має відбивати навколишній пейзаж, містити помірні брижі, варіації глибини та природний перехід біля берегів.
 За можливості використовуйте відбиття реальної сцени; навіть у режимі зниження якості зображення має залишатися візуально переконливим.
 Не замінюйте воду мерехтливим шумом, сильними викривленнями чи суцільною синьою площиною.

Деталі:
 можна додати кілька коропів кої, опалих пелюсток, світлячків, водоспад і птахів удалині,
 але всі вони мають працювати на атмосферу й не перевантажувати кадр.
 Не нагромаджуйте деталі лише заради заявленої кількості моделей.

【5. Кольори й атмосфера】

За замовчуванням використовуйте час синіх сутінків:
 прохолодна долина й далекі гори, ніжно-рожеві квіти сакури, тепле, але не пересвічене світло ліхтарів і вікон.
 Тепле світло має зосереджуватися в місцях присутності людей, а не забарвлювати все довкілля в помаранчевий.

Потрібні м’які тіні, контактне затінення в місцях дотику об’єктів, коректна експозиція,
 стримане свічення, згладжування та легкий туман із виразною просторовою глибиною.

Уникайте вибіленого зображення, сірого серпанку, надмірної насиченості, густого туману на весь екран, пересвіченого світла та помітних сходинок на контурах.
 Кубічна геометрія може бути чіткою, але сам рендеринг не має виглядати грубим.

Додайте ще два атмосферні режими — «Ранній ранок» і «Під дощем»;
 під час перемикання мають одночасно змінюватися небо, навколишнє освітлення, туман і локальні ефекти,
 а не лише колір фону.

【6. Взаємодія та інтерфейс】

Передбачте чотири продумані ракурси камери:
 панорама долини, низький ракурс біля річки, стежка до храму та огляд зі схилу згори.
 Перемикання має бути плавним, а кожен ракурс — мати самостійну композиційну цінність.

Базова взаємодія:
 перетягування мишею для огляду, прокручування коліщатка для наближення або руху вперед; на сенсорних екранах підтримайте перетягування та масштабування двома пальцями.
 Додайте скидання ракурсу, приховування інтерфейсу та збереження поточного кадру.

Додаткові можливості:
 вільне дослідження, повільний обліт камери та звуки довкілля.
 Звуки довкілля мають бути вимкнені за замовчуванням і відтворюватися лише після явного натискання користувача.
 Додаткові функції не повинні погіршувати якість сцени за замовчуванням.

Інтерфейс має бути стриманим і продуманим, із пріоритетом для ландшафту.
 Заголовок і панель керування розмістіть по краях, не перекриваючи візуальний фокус.
 На комп’ютерах і смартфонах не повинно бути виходу кнопок за межі екрана, накладання тексту чи недоступних елементів керування.

【7. Розробка та продуктивність】

Дозволено використовувати Three.js / WebGL, а також сумісні між собою залежності CDN із зафіксованими версіями.
 Віддавайте перевагу зрілим можливостям рендерингу, а не переписуйте цілий рушій заради «відсутності залежностей».

Власні HTML, CSS і JavaScript за можливості організуйте в одному HTML-файлі.
 Сцену генеруйте за допомогою процедурної геометрії та матеріалів, не використовуючи зовнішні зображення чи ресурси 3D-моделей.

Для повторюваних об’єктів використовуйте відповідний пакетний або інстансинговий рендеринг;
 розумно контролюйте рівень деталізації, тіні, відбиття та роздільну здатність рендерингу.
 Передбачте режими високої якості та полегшений режим; на смартфонах за замовчуванням використовуйте легші налаштування.
 Не збільшуйте кількість вокселів безмежно лише заради деталізації.

Додайте індикатор завантаження, повідомлення про непідтримуваний WebGL і необхідну обробку помилок.
 Не запускайте звук автоматично, якщо його не ввімкнено; поважайте системне налаштування зменшення анімації.

【8. Перевірка перед передаванням результату】

Не передавайте результат одразу після написання коду.

Якщо поточне середовище підтримує запуск у браузері та створення знімків екрана, спочатку відкрийте сторінку на практиці,
 перевірте початковий ракурс, усі чотири ракурси, перемикання атмосферних режимів, компонування на комп’ютері та смартфоні,
 а потім за знімками виправте очевидні проблеми композиції, експозиції, перекриття об’єктів і рендерингу.

Особливо перевірте:
 чи немає порожнього кадру, помилок завантаження та помилок у консолі;
 чи немає проникнення геометрії, мерехтіння, смуг на тінях, пересвічення та аномалій на поверхні води;
 чи справді початковий кадр схожий на цілісний ландшафт, а не на маленьку діораму;
 чи працюють кнопки та чи не виходять елементи за межі екрана на мобільних пристроях.

Для перевірки можна використовувати знімки екрана з браузера, але не викликайте інструменти генерації зображень.
 Якщо тестування не завершено, чесно повідомте про це й не стверджуйте, що все перевірено.

Фінальний результат:
1. Фактично наявний HTML-файл, який можна відкрити, або інтерактивний попередній перегляд, якщо його підтримує поточне середовище.
2. Якщо створення знімків екрана доступне, додайте один справжній знімок рендерингу в браузері.
3. Коротко опишіть спосіб керування та необхідні умови запуску.

Безпосередньо завершіть створення; для некритичних деталей самостійно ухвалюйте узгоджені дизайнерські рішення,
 не перекладайте на мене питання реалізації, які можете вирішити самостійно.
```

<details>
<summary>Оригінальний промпт автора</summary>

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

[Докладніше ↗](https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102565403109085669) · [Оригінальний допис](https://x.com/dotey/status/2102565403109085669) · [Назад до прикладів](#all-prompts)

---

<a id="claude-opus-5-5-2102547809140355250"></a>

### Модель аварії Hundenberg і реалістичне відео

[AImanhasnoname](https://x.com/aimanhasnoname) · 2026-09-22 · Claude Opus 5.5 · Анімація

<a href="https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102547809140355250"><img src="../assets/previews/2eefc8b880a8aa71a501cf0b41a5dfd9076ac002865941b7287cedeb73ee00a0.webp" width="840" loading="lazy" alt="Модель аварії Hundenberg і реалістичне відео"></a>

**Промпт**

```text
Створи для мене модель Hundenberg у Blender і реалістичне відео аварії.
```

<details>
<summary>Оригінальний промпт автора</summary>

```text
make me a model of the Hundenberg on blender make me a realistic video of the accident.
```

</details>

[Докладніше ↗](https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102547809140355250) · [Оригінальний допис](https://x.com/aimanhasnoname/status/2102547809140355250) · [Назад до прикладів](#all-prompts)

---

<a id="claude-opus-5-5-2102544406117286004"></a>

### 3D-рендеринг гандбольного майданчика на 360° за зображенням

[ハンドボール人「布施千佳純」](https://x.com/chikaidev) · 2026-09-22 · Claude Opus 5.5 · Сцени

<a href="https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102544406117286004"><img src="../assets/previews/c492adaa7b1ffad5024b0a28618dcc51d0f50b7c16ae704c9ee3785881445195.webp" width="840" loading="lazy" alt="3D-рендеринг гандбольного майданчика на 360° за зображенням"></a>

**Референси:** [1](https://media.tripogrowth.space/media/6a116b62-88ce-491b-b4ba-eed6d9c9f168.jpg) · [2](https://pbs.twimg.com/media/HS29xCPaYAAcMmd.jpg)

**Промпт**

```text
Виконай 3D-рендеринг гандбольного майданчика, воріт, арбітра, гравців і м’яча із зображення, щоб сцену можна було вільно оглядати на 360° з будь-якого ракурсу. Точно відтвори пози кожної людини та кольори об’єктів.
```

<details>
<summary>Оригінальний промпт автора</summary>

```text
画像内のハンドボールコート、ゴール、レフェリー、プレイヤー、ボールを3dレンダリングして、360度自由角度から見れるようにして。各人物の姿勢まで、また物体の色まで正確に再現して。
```

</details>

[Докладніше ↗](https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102544406117286004) · [Оригінальний допис](https://x.com/chikaidev/status/2102545257372213581) · [Назад до прикладів](#all-prompts)

---

<a id="claude-opus-5-5-2102544196808667471"></a>

### Процедурний 3D-фон головного меню в Three.js за зображенням

[Majid Manzarpour](https://x.com/majidmanzarpour) · 2026-09-22 · Claude Opus 5.5 · Сцени

<a href="https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102544196808667471"><img src="../assets/previews/00e1e42d1237637670ed6c41d5701bef1c74975a73d5b62a5e7f698ea3909f93.webp" width="840" loading="lazy" alt="Процедурний 3D-фон головного меню в Three.js за зображенням"></a>

**Референси:** [1](https://media.tripogrowth.space/media/de4534b1-fda8-4736-8558-09b7283f646a.jpg) · [2](https://pbs.twimg.com/media/HS28q6mWMAAxONB.jpg)

**Промпт**

```text
відтворіть це ідеально: повністю процедурний анімований фон головного меню у 3D на Three.js в одному HTML-файлі
```

<details>
<summary>Оригінальний промпт автора</summary>

```text
recreate this perfectly, fully procedural, animated, main menu background in three.js 3D single HTML file
```

</details>

[Докладніше ↗](https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102544196808667471) · [Оригінальний допис](https://x.com/majidmanzarpour/status/2102544198335373576) · [Назад до прикладів](#all-prompts)

---

<a id="claude-opus-5-5-2102544078927741369"></a>

### Автономна 3D-машина Руба Ґолдберґа

[leo](https://x.com/leogao25) · 2026-09-22 · Claude Opus 5.5 · Анімація

<a href="https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102544078927741369"><img src="../assets/previews/337a5747637168ec67e4ac5563dd2bd4b3bd60fbdcfe57409ba528644c257fdc.webp" width="840" loading="lazy" alt="Автономна 3D-машина Руба Ґолдберґа"></a>

**Промпт**

```text
Створіть 3D-машину Руба Ґолдберґа, яка запускається й працює самостійно, як один самодостатній index.html у поточній директорії.

Ланцюжок дій у такому порядку:
1. Мармурова кулька випускається згори й котиться низкою зигзагоподібних рамп.
2. Вона перекидає ряд щонайменше з 12 доміно.
3. Остання кісточка доміно нахиляє гойдалку, яка запускає маленьку кульку в підвішене відро.
4. Вага відра тягне його вниз; його мотузка проходить через блок і смикає дзвін, який має помітно розгойдуватися.
5. Цей самий рух піднімає прапор уздовж щогли. Завершенням є момент, коли прапор досягає вершини.

Правила:
- Напишіть фізику самостійно: жодних фізичних бібліотек. Увесь рух після запуску мармурової кульки має походити із вашої симуляції (тверді тіла, зіткнення, обмеження, мотузка та блок). Жодної покадрової анімації чи руху будь-якої частини механізму за допомогою tween-анімації.
- Для рендерингу можна завантажити three.js із CDN. Більше нічого зовнішнього: жодних зображень, моделей чи шрифтів.
- Сцена має працювати без введення користувача: автоматично запускатися під час завантаження сторінки, використовувати кінематографічну камеру, що стежить за дією, і завершувати весь ланцюжок приблизно за 15–20 секунд. Після підняття прапора утримуйте його положення 2 секунди, потім скиньте сцену й повторіть відтворення.
- Детермінованість: фіксований часовий крок і жодної неініціалізованої випадковості, щоб кожен запуск виглядав однаково.
- Заповнюйте все вікно браузера. Відео записуватиметься у форматі 1280×720.
- Жодного екранного тексту чи інтерфейсу будь-якого типу.
- Зробіть сцену привабливою: додайте освітлення, тіні, матеріали й оточення, щоб механізм виглядав справжнім.
```

<details>
<summary>Оригінальний промпт автора</summary>

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

[Докладніше ↗](https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102544078927741369) · [Оригінальний допис](https://x.com/leogao25/status/2102544081863717153) · [Назад до прикладів](#all-prompts)

---

<a id="claude-opus-5-5-2102538762731565085"></a>

### Інтерактивна гра про фермерських тварин у стилі «Кролика Пітера»

[mblaso](https://x.com/blaso96) · 2026-09-22 · Claude Opus 5.5 · Ігри

<a href="https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102538762731565085"><img src="../assets/previews/b0398c725131002e496ea826c8fe66a2421c20c036a8989b4aec58b23d06e574.webp" width="840" loading="lazy" alt="Інтерактивна гра про фермерських тварин у стилі «Кролика Пітера»"></a>

**Промпт**

```text
«Створіть інтерактивну гру про фермерських тварин у стилі «Кролика Пітера»
головне меню = увімкнення/вимкнення звуків + вибір тварини (кінь, свиня, корова, кіт, собака)
esc = пауза: скинути гру до початкової точки/головного меню/
переміщення за допомогою WASD
пробіл — стрибок і взаємодія з іншими тваринами поблизу
взаємодії рандомізуються після виявлення близької відстані
під час взаємодії можна видавати звуки, звертаючись до іншої тварини (унікальні, відмінні від її звуків у стані спокою), або «легенько тицьнути її носом»
взаємодія з водою для пиття, сіном і фруктами для їжі. 
гра від третьої особи, але камера має бути трохи позаду тварини й над нею
для атмосфери — птахи та літаки в небі (з’являються випадково)
місце дії = фермерські угіддя, сарай, фермерське село з будинками (заходити в будинки не можна)
Активів має бути достатньо, щоб привернути увагу, але не настільки багато, щоб гру можна було вважати виробничою версією. Це лише спосіб весело провести 15 хвилин мого дня разом із донькою
react, svg, js, webgl, threejs — використайте все необхідне, щоб гра відчувалася «якісною»»
```

<details>
<summary>Оригінальний промпт автора</summary>

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

[Докладніше ↗](https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102538762731565085) · [Оригінальний допис](https://x.com/blaso96/status/2102538764749037738) · [Назад до прикладів](#all-prompts)

---

<a id="claude-opus-5-5-2102533729746882985"></a>

### Кінематографічний інтерактивний піратський корабель на заході сонця

[Vib3Coded](https://x.com/vib3coded) · 2026-09-22 · Claude Opus 5.5 · Сцени

<a href="https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102533729746882985"><img src="../assets/previews/2239f7a3f4f3863b4c6293554252f26ef2d141d58a1c633a05e382958d37bae4.webp" width="840" loading="lazy" alt="Кінематографічний інтерактивний піратський корабель на заході сонця"></a>

**Промпт**

```text
Створіть із нуля повністю інтерактивну 3D-сцену з піратським кораблем, який пливе динамічним океаном на заході сонця. Візуальний стиль має бути кінематографічним і стилізованим, а не фотореалістичним, але водночас надзвичайно насиченим, деталізованим, відшліфованим і візуально витонченим. Створіть корабель, океан, небо, освітлення, матеріали, вітрила, такелаж, гармати, дрібні конструктивні деталі, морську піну, кільватерний слід, частинки, анімацію, роботу камери, композицію, атмосферну перспективу та колірну корекцію. Фінальний результат має сприйматися як преміальна 3D-робота високого виробничого рівня, а не прототип, технічна демонстрація чи низькоякісна сцена. Почніть із повністю порожньої сторінки. Не використовуйте повторно попередні проєкти чи сцени й не покладайтеся на них. За потреби ви можете самостійно створити ресурси або скористатися надійними перевіреними ресурсами й бібліотеками з відкритим кодом. Обов’язкові вимоги: у сцені ніде не має з’являтися жодного тексту. Заборонені заголовки, назви, логотипи, описи, титри, підписи чи інструкції з керування будь-якою мовою. Подайте весь проєкт як один фінальний окремий файл сторінки, який можна безпосередньо відкрити у веббраузері; ресурси слід вбудувати в нього настільки повно, наскільки це розумно можливо. Океан, корабель, вітрила й камера мають рухатися природно та плавно. Уникайте штучного уповільнення або млявої анімації. Корабель має створювати відчуття справжнього руху водою. Не використовуйте примітивні геометричні форми як фінальний результат. Створіть переконливий і деталізований піратський корабель із ретельно сформованим корпусом, щоглами, вітрилами, такелажем, канатами, гарматами, поручнями, ліхтарями, надбудовами палуби та чітко помітними дрібними деталями. Освітлення має виразно передавати геометрію й матеріали корабля. Створіть насичену атмосферу заходу сонця, глибокі відтінки океану, відбиття, переконливу морську піну та деталізований кільватерний слід позаду й навколо судна. Забезпечте вдалий баланс між візуальною якістю та продуктивністю в реальному часі, зберігши плавну взаємодію й анімацію без очевидного погіршення якості. Автоматично використовуйте найвідповідніші навички, інструменти, бібліотеки, методи та доступні ресурси, потрібні для найкращого результату. Не чекайте, поки я вкажу, які технології використовувати. Обов’язково протестуйте готовий результат у веббраузері на комп’ютері. Зробіть візуальні скриншоти, перевірте консоль браузера на наявність помилок і виправте всі виявлені візуальні чи технічні проблеми, зокрема спотворену геометрію, чорний екран, помилки завантаження ресурсів, непрацюючу анімацію, невдалу композицію, артефакти рендерингу чи проблеми з камерою. Наприкінці перевірте, що фінальний файл безпосередньо відкривається й працює, у сцені немає жодного тексту, а помилок виконання чи завантаження не залишилося. Після цього завершіть завдання лише короткою відповіддю.
```

<details>
<summary>Оригінальний промпт автора</summary>

```text
Create from scratch a fully interactive 3D scene of a pirate ship sailing across a dynamic ocean at sunset. The visual style should be cinematic and stylized rather than photorealistic, while still being exceptionally rich, detailed, polished, and visually sophisticated. Build the ship, ocean, sky, lighting, materials, sails, rigging, cannons, small structural details, sea foam, wake, particles, animation, camera work, composition, atmospheric depth, and color grading. The final result should feel like a premium, high-production 3D artwork, not a prototype, technical demo, or low-quality scene. Start from a completely blank page. Do not reuse or depend on any previous project or scene. You may create the assets yourself or use reliable, trusted, open-source assets and libraries when necessary. Mandatory requirements: No text of any kind may appear anywhere inside the scene. No titles, names, logos, descriptions, credits, labels, or control instructions in any language. Deliver the entire project as one final standalone page file that can be opened directly in a web browser, with assets embedded inside it as much as reasonably possible. The ocean, ship, sails, and camera must all be animated naturally and smoothly. Avoid artificial slow motion or sluggish movement. The ship should feel like it is genuinely moving through the water. Do not rely on primitive geometric shapes as the finished result. Build a visually convincing and detailed pirate ship, including a carefully shaped hull, masts, sails, rigging, ropes, cannons, railings, lanterns, deck structures, and clearly visible small-scale details. Lighting must reveal the ship's geometry and materials clearly. Create a rich sunset atmosphere, deep ocean shading, reflections, convincing sea foam, and a detailed sailing wake behind and around the vessel. Maintain a strong balance between visual quality and real-time performance, preserving smooth interaction and animation without making an obvious sacrifice in quality. Automatically use the most appropriate skills, tools, libraries, techniques, and available assets needed to achieve the best result. Do not wait for me to specify which technologies to use. Actually test the finished result in a desktop web browser. Capture visual screenshots, inspect the browser console for errors, and fix every visible or technical issue you find, including distorted geometry, black screens, failed asset loading, broken animation, poor composition, rendering artifacts, or camera problems. At the end, verify that the final file opens and works directly, that the scene contains no text whatsoever, and that there are no remaining runtime or loading errors. Then finish the task with only a brief response.
```

</details>

[Докладніше ↗](https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102533729746882985) · [Оригінальний допис](https://x.com/vib3coded/status/2102534606121746589) · [Назад до прикладів](#all-prompts)

---

<a id="claude-opus-5-5-2102529695908806728"></a>

### Нескінченний процедурно згенерований світ на Three.js

[🥔🥔🥔](https://x.com/argofowl) · 2026-09-22 · Claude Opus 5.5 · Ігри

<a href="https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102529695908806728"><img src="../assets/previews/dc4bb91934d32b72098e8bcfd9c02285b359e6df7988d99efc153167ba968b2d.webp" width="840" loading="lazy" alt="Нескінченний процедурно згенерований світ на Three.js"></a>

**Промпт**

```text
створи новий проєкт у моїй папці projects під назвою «endless-game»: нескінченний процедурно згенерований світ на three.js у браузері, який я зможу вільно досліджувати й просто насолоджуватися ним. Кожна ділянка має генеруватися випадково, а сюрпризи повинні траплятися всюди, незалежно від того, як довго я граю. Світ має бути спокійним, розслаблювальним і по-справжньому цікавим — із затишною, приємною атмосферою, як у supermarket simulator, але це не має бути гра про супермаркет. Я хочу справді захопливий світ для прогулянок, зі сутностями, яких можна зустрічати та з якими можна взаємодіяти, а також із чудовою графікою. Визнач чітку мету проєкту, продовжуй працювати, доки не досягнеш її, а коли все буде готове для моєї гри й тестування, відтвори звуковий сигнал.
```

<details>
<summary>Оригінальний промпт автора</summary>

```text
create a new project in my projects folder called "endless-game": an endless, procedurally generated world built with three.js in the browser that i can roam freely and just enjoy. every area should be randomly generated, with surprises everywhere no matter how long i play. it should feel calm, relaxing and genuinely fun, like the cozy, satisfying vibe of a supermarket simulator, but it shouldn't be a supermarket game. i want a really interesting world to walk around in, with entities i can meet and interact with, and really cool graphics. set a clear goal for the project, keep working until you reach it, and play a sound chime when it's done and ready for me to play and test.
```

</details>

[Докладніше ↗](https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102529695908806728) · [Оригінальний допис](https://x.com/argofowl/status/2102529695908806728) · [Назад до прикладів](#all-prompts)

---

<a id="claude-opus-5-5-2102467667978572092"></a>

### Інтерактивна симуляція евакуації натовпу

[Dom](https://x.com/dominikmartn) · 2026-09-22 · Claude Opus 5.5 · Анімація

<a href="https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102467667978572092"><img src="../assets/previews/576e684f6ec389443536e17db7a1c5eb173eeb4116c3cd05337b69084858983f.webp" width="840" loading="lazy" alt="Інтерактивна симуляція евакуації натовпу"></a>

**Промпт**

```text
створити інтерактивну симуляцію евакуації натовпу й визначити, де виникають затори
```

<details>
<summary>Оригінальний промпт автора</summary>

```text
build an interactive crowd evacuation sim and see where it jams
```

</details>

[Докладніше ↗](https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102467667978572092) · [Оригінальний допис](https://x.com/dominikmartn/status/2102467667978572092) · [Назад до прикладів](#all-prompts)

---

<a id="claude-opus-5-5-2102450239923720440"></a>

### Інтерактивний 3D-острів доісторичної епохи

[Vib3Coded](https://x.com/vib3coded) · 2026-09-22 · Claude Opus 5.5 · Інтерактив

<a href="https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102450239923720440"><img src="../assets/previews/23a4362d0525060fc7304a39c43c7f21b75923aa85ed66f5303b370d996bcf0d.webp" width="840" loading="lazy" alt="Інтерактивний 3D-острів доісторичної епохи"></a>

**Промпт**

```text
Створіть красивий, надзвичайно деталізований, повністю інтерактивний 3D-острів доісторичної епохи за допомогою Three.js і WebGL. Реалізуйте все в одному окремому HTML-файлі, який безпосередньо відкривається в Chrome. За можливості вбудуйте ресурси у файл.

ВІЗУАЛЬНИЙ НАПРЯМ
Створіть великий округлий острів, оточений океаном із прозорим підводним розрізом. Результат має нагадувати преміальний мініатюрний світ: буйна рослинність, виразні динозаври, багаті матеріали, атмосферне освітлення та відшліфована анімація. Використовуйте цілісний стилізований художній напрям, а не прості геометричні фігури.
ISLAND
Створіть різноманітний рельєф із пляжами, скелястими урвищами, густими доісторичними лісами, гігантськими папоротями, водоспадом, прісноводною водоймою та вулканом. Додайте невелику дослідницьку станцію, дерев’яні настили, оглядові майданчики, ящики з припасами та гнізда динозаврів. Острів має бути достатньо просторим, щоб динозаври могли природно переміщатися між окремими зонами.

ПІДВОДНИЙ РОЗРІЗ
Вода має утворювати глибокий округлий об’єм навколо острова, крізь бокові стінки якого добре проглядається підводний світ. Додайте текстуроване морське дно, каміння, водні рослини, риб, бульбашки та зелену морську рептилію, що плаває під поверхнею. Не розміщуйте звичайних наземних динозаврів під водою й не додавайте підводний човен.
Використовуйте анімовані хвилі, відбиття Френеля, підводні світлові візерунки, піну біля берега та бризки. Уникайте артефактів сортування прозорості й видимих проміжків між островом і водою.

DINOSAURS
Додайте кілька виразних видів, зокрема довгошию завроподу, трицератопса, стегозавра, великого теропода та дрібніших стадних тварин. Над островом мають кружляти птерозаври.
Надайте кожному виду впізнавану анатомію, сформоване тіло, рухомі кінцівки, деталізовані голови й хвости, а також характерні для нього візерунки шкіри. Не складайте готових динозаврів із очевидних коробок або роз’єднаних сфер.

ПРИРОДНА АНІМАЦІЯ
Використовуйте ієрархічні скелети з правильно розташованими суглобами. Хода має чітко розрізняти фази опори та перенесення ноги: під час контакту стопи залишаються на місці, а під час кожного кроку чисто відриваються від землі. Узгодьте довжину кроку зі швидкістю руху.

Використовуйте семплювання рельєфу та зворотну кінематику, щоб стопи залишалися на землі. Додайте перенесення ваги, ледь помітні рухи тіла, врівноважений рух хвоста, повороти голови та дихання. Динозаври не повинні зависати в повітрі, ковзати, перетинатися із землею або проходити крізь будівлі, каміння, дерева чи одне одного.
Реалізуйте обхід перешкод і безпечні маршрути. Різні види мають відрізнятися швидкістю руху, схемами ходи та поведінкою. Морські тварини мають бути повернуті в напрямку руху.

INTERACTION
Дозвольте користувачам:

Вільно обертати камеру, наближати й віддаляти зображення та оглядати підводний розріз.
Вибирати динозавра й стежити за ним за допомогою плавного руху камери.

Розміщувати їжу у відповідних місцях і спостерігати, як найближчі динозаври підходять до неї та їдять.

Запускати пиття, відпочинок, поклики та переміщення стада.

Досліджувати гнізда й спостерігати, як із них вилуплюється дитинча.
Запускати спливання морської рептилії з бризками.
Перемикатися між денним світлом, заходом сонця та ніччю.
Налаштовувати дощ, вітер і вулканічну активність.
Ставити симуляцію на паузу та скидати сцену.
Кожна команда має спричиняти чітку видиму реакцію. Зробіть взаємодії повторюваними й не допускайте, щоб анімації, які накладаються одна на одну, руйнували пози персонажів.
АТМОСФЕРА Й АУДІО
Додайте рухомі рослини, хмари, що пливуть, птахів, комах, частинки дощу та тепле нічне освітлення дослідницької станції. Додайте тиху атмосферну музику й звуки довкілля, а також робочий перемикач музики та повзунок гучності. Відтворюйте аудіо лише після взаємодії з користувачем.
INTERFACE
Використовуйте компактний, елегантний інтерфейс з англомовними написами. Сцена має залишатися головним елементом; не закривайте острів великими панелями. Зробіть компонування адаптивним для комп’ютерів і мобільних пристроїв.
ТЕХНІЧНА ЯКІСТЬ
Використовуйте інстансинг для повторюваної рослинності та об’єктів, ефективну геометрію, доречні тіні й стриману постобробку. Збалансуйте візуальне багатство зі стабільною продуктивністю в реальному часі.
Створіть повноцінну сцену, а не макет. Безпосередньо протестуйте готовий HTML у браузері на комп’ютері, перевірте знімки екрана й консоль, випробуйте всі взаємодії та до передачі виправте помилки завантаження, динозаврів, що зависають у повітрі, ковзання стоп, зламані зіткнення, артефакти води й проблеми з камерою.
```

<details>
<summary>Оригінальний промпт автора</summary>

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

[Докладніше ↗](https://www.tripo3d.ai/uk/3d-prompts/claude-opus-5-5-2102450239923720440) · [Оригінальний допис](https://x.com/vib3coded/status/2102450842070569099) · [Назад до прикладів](#all-prompts)

---


[Повний каталог](catalog.uk.md) · **1 / 1**

<p align="center"><strong><a href="https://www.tripo3d.ai/uk/3d-prompts/models/claude-opus-5-5?utm_source=github&amp;utm_medium=referral&amp;utm_campaign=awesome_opus_5_5_prompts&amp;utm_content=catalog_footer">Повний каталог →</a></strong></p>
