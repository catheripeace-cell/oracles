document.addEventListener("DOMContentLoaded", () => {
    // --------------------------
    // Atmospheric sound toggle (visual only)
    // --------------------------
    const soundToggle = document.getElementById("soundToggle");
    const soundIndicator = document.getElementById("soundIndicator");
    const soundLabel = document.getElementById("soundLabel");

    let soundOn = false;
    if (soundToggle && soundIndicator && soundLabel) {
        soundToggle.addEventListener("click", () => {
            soundOn = !soundOn;
            soundIndicator.classList.toggle("on", soundOn);

            // Do not hard-code "On/Off" here — i18n will render it.
            // We simply flip between two i18n keys by dispatching refresh.
            document.dispatchEvent(new Event("i18nRefresh"));
        });
    }

    // --------------------------
    // Fake live inventory demo
    // --------------------------
    const atelierCounter = document.getElementById("atelierCounter");
    if (atelierCounter) {
        let current = 3;
        setInterval(() => {
            current = Math.max(1, current - 1);
            atelierCounter.textContent = `No. ${String(current).padStart(2, "0")} / 25`;
            if (current === 1) atelierCounter.textContent = "Last piece";
        }, 12000);
    }

    // --------------------------
    // Year
    // --------------------------
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // --------------------------
    // I18N dictionary
    // --------------------------
    const I18N = {
        en: {
            SITE_SUBTITLE: "Curated Heirloom Dolls & Historical Curiosities",
            NAV_HOME: "Home",
            NAV_ARCHIVE: "The Grand Archive",
            NAV_CHRONICLE: "The Chronicle",
            NAV_SOCIETY: "The Society Portal",
            NAV_GIFTING: "The Gift of History",
            NAV_LOGIN: "Caretaker’s Login",

            SOUND: "Atmospheric Sound:",
            SOUND_OFF: "Off",
            SOUND_ON: "On",
            FEATURED_ENTRY: "Featured entry:",
            FEATURED_TAIL: "— view in The Grand Archive.",

            HOME_KICKER: "A Periodical for Keepers of Small Histories",
            HOME_H1: "Welcome to the Oracle’s Keepsake",
            HOME_P1:
                "A vintage-inspired emporium where every doll, costume, and accessory is treated as a tiny artifact. Browse our Grand Archive, reserve visions of future releases, and weave your own stories through modular, customizable keepsakes.",
            HOME_BTN_ARCHIVE: "Enter The Grand Archive",
            HOME_BTN_CARETAKER: "Become a Caretaker »",

            TODAY_H2: "Today’s Edition",
            TODAY_PILL: "New Arrival Alchemy",
            TODAY_P1:
                "A fresh consignment has quietly arrived in the Archive. Watch for subtle notices and whispered announcements.",
            TODAY_P2:
                "Legacy Payments & Caretaker’s Plan are now available for select heirloom sets.",

            COL1_TITLE: "The Grand Archive / Starlit Gallery",
            COL1_P:
                "Our main shop floor, arranged like a reading room. Modular dolls, couture garments, and curated display sets.",
            TIMELINE_H3: "Interactive Historical Timeline",
            TIMELINE_P: "Scrolling era explorer for silhouettes and palettes.",
            ERA1: "Victorian Whispers",
            ERA2: "Taishō Romance",
            ERA3: "1930s Crossroads",
            ERA4: "Postwar Echoes",
            ATELIER_H3: "Couture Atelier",
            ATELIER_P: "Ultra-limited, numbered editions.",
            LIVE_INV: "Live Inventory:",

            COL2_TITLE: "Immersive Experience",
            COL2_A: "360° Inspect Viewer",
            COL2_A_P: "Rotate dolls fully to examine tailoring and expression.",
            COL2_B: "Clickable “Secrets”",
            COL2_B_P: "Tap artifacts on product pages to reveal lore fragments.",
            COL2_C: "Weave Your Story",
            COL2_C_P: "Configurator for fabrics, hair, and monograms.",

            COL3_TITLE: "Community & Continuity",
            COL3_A: "The Heritage Circle",
            COL3_A_P: "Free loyalty program with tiers and “Stitches of Loyalty.”",
            COL3_B: "Caretaker’s Gallery",
            COL3_B_P: "UGC photo wall from customers.",
            COL3_C: "Reservation Wishlist",
            COL3_C_P: "Guarantee the next allocation for out-of-stock pieces.",

            ARCHIVE_KICKER: "Issue No. 01",
            ARCHIVE_H1: "The Grand Archive",
            ARCHIVE_P:
                "Browse current luminaries, limited editions, and upcoming visions. Our “shop” reads like a museum catalog.",
            ARCHIVE_BTN_TANAKA: "Visit Tanaka Fumiko",
            ARCHIVE_BTN_GIFT: "The Gift of History",
            ARCHIVE_SIDE_H2: "Era Explorer",
            ARCHIVE_SIDE_P: "Filter by time period (placeholder).",
            ALL: "All",

            ARCHIVE_SECTION: "Current Luminaries",
            P_TANAKA_TITLE: "Tanaka Fumiko – 1930s Modular Doll",
            P_TANAKA_P: "Interchangeable heads & hair, removable shoes, hakama & kimono sets.",
            P_TANAKA_BTN: "Welcome Her to Your Library",

            P_VISIONS_TITLE: "Visions Ledger — Coming Soon",
            P_VISIONS_P: "Exclusive early access for subscribers.",
            P_VISIONS_BTN: "Read the Dispatch",

            P_BUNDLE_TITLE: "Complete Your Era — Display Bundles",
            P_BUNDLE_P: "Curated accessory packs and period props.",
            P_BUNDLE_BTN: "Gift-Ready Options",

            TANAKA_KICKER: "1930s Crossroads Edition",
            TANAKA_H1: "Tanaka Fumiko",
            TANAKA_P:
                "A Japanese–Taiwanese teen living in 1930s Taiwan, shaped by two heritages. Modular design lets you change head, hairstyle, shoes, and outfits to reflect different moments of her story.",
            TANAKA_BTN1: "Welcome Her to Your Library",
            TANAKA_BTN2: "Prepare as a Gift",
            TANAKA_SIDE_H2: "Modular Features",
            TANAKA_FEAT:
                "• Interchangeable head\n• Interchangeable hair modules\n• Removable shoes\n• Hakama set + Kimono version\n• “Trunk of Tales” story tab\n• Clickable secrets (lore)",

            VIEWER_TITLE: "360° Inspect Viewer",
            VIEWER_P: "Embed turntable images or WebGL here.",
            VIEWER_BOX: "360° Viewer Placeholder",

            CONFIG_TITLE: "Weave Your Story Configurator",
            CONFIG_P: "Choose hair, outfit, and monogram (placeholder form).",
            CONFIG_HAIR: "Default hairstyle:",
            CONFIG_OUTFIT: "Box outfit:",
            PREVIEW: "Preview",

            TRUNK_TITLE: "Trunk of Tales",
            TRUNK_P:
                "In 1936, Fumiko walks two streets at once: the public world of imperial expectation, and the private world of her mother’s Taiwanese memory. Your styling choices reflect that tension—conformity, quiet resistance, or fragile compromise.",
            BOX_TITLE: "Vintage Keepsake Box",
            BOX_P: "Display-ready packaging styled like a period object.",
            BOX_PH: "Keepsake Box Image Placeholder",

            STYLE_VARIATIONS: "Style Variations",
            ARCHIVAL_TOGGLE: "Toggle archival photograph",

            // Carousel captions + handwritten annotations
            CAROUSEL_1: "Hakama styling — formal presentation",
            CAROUSEL_2: "Braided hairstyle for daily wear",
            CAROUSEL_3: "Kimono version for private life",
            CAROUSEL_4: "Vintage-inspired keepsake box",
            ANNOTATION_1: "Issued for public appearances",
            ANNOTATION_2: "Hair pinned for daily errands",
            ANNOTATION_3: "Worn only at home",
            ANNOTATION_4: "Box kept beneath the bed",

            // Lore (caption click)
            LORE_1_T: "Public Dress Code",
            LORE_1_P:
                "Fumiko wears the hakama when attending school events or public gatherings, where her appearance must align with imperial expectations.",
            LORE_2_T: "A Practical Braid",
            LORE_2_P:
                "Braid styles keep hair tidy during daily tasks—small choices that feel personal in a world that demands uniformity.",
            LORE_3_T: "Private Comfort",
            LORE_3_P:
                "At home, the kimono version signals a quieter life—where her mother’s rhythms and language can finally breathe.",
            LORE_4_T: "The Box as a Secret",
            LORE_4_P:
                "The keepsake box is designed like a book spine or travel trunk—an object meant to be hidden, then rediscovered years later.",

            CHRONICLE_KICKER: "In-World Periodical",
            CHRONICLE_H1: "The Chronicle",
            CHRONICLE_P: "Dispatches from the Curator: essays, atelier notes, and serialized lore.",
            NEWS_H2: "A Stitch in Time",
            NEWS_P: "Newsletter sign-up (placeholder).",
            SUBSCRIBE: "Subscribe",
            LATEST: "Latest Entries",
            C1: "On the Pin at Her Heart",
            C1P: "Provenance, symbolism, and the uneasy marriage of duty and identity.",
            C2: "Designing a Modular Era",
            C2P: "Why interchangeability is our chosen metaphor for divided histories.",
            C3: "Field Notes: A Market in Dusk",
            C3P: "A cracked badge that inspired an entire collection.",
            VIDEO_TITLE: "Behind the Gilded Thread",
            VIDEO_P: "Documentary-style crafts videos (placeholder).",
            VIDEO_PH: "Video Placeholder",
            QUIZ_TITLE: "Which Luminary Are You?",
            QUIZ_P: "Personality quiz (placeholder).",
            BEGIN: "Begin",

            SOC_KICKER: "Community & Continuity",
            SOC_H1: "The Society Portal",
            SOC_P:
                "A parlor for caretakers: galleries, salons, interviews, and the Heirloom Registry.",
            SOC_SIDE_H2: "The Heritage Circle",
            SOC_SIDE_P: "Free loyalty program with “Stitches of Loyalty.”",
            ENROLL: "Enroll",
            UGC_TITLE: "Caretaker’s Gallery",
            UGC_P: "UGC wall (placeholder).",
            UGC_PH: "UGC Grid Placeholder",
            FORUM_TITLE: "The Society Forum",
            SALON: "Private Salons",
            SALON_P: "Live discussions with artists and historians.",
            PARLOR: "Discussion Parlors",
            PARLOR_P: "Era research and storytelling threads.",
            REG_TITLE: "Heirloom Registry",
            REG_P: "Register a doll and dedication (placeholder form).",
            ADD: "Add",

            GIFT_KICKER: "Presentation & Ceremony",
            GIFT_H1: "The Gift of History",
            GIFT_P:
                "Choose vellum invitations, treasure-chest wrapping, dedications, and era bundles—so the gift feels like an artifact.",
            GIFT_BTN1: "Choose a Luminary",
            GIFT_BTN2: "Open Heirloom Registry",
            GIFT_SIDE_H2: "Gift-Ready Tools",
            GIFT_FEAT:
                "• Vellum Invitation e-cards\n• Treasure Chest wrapping\n• Complete Your Era bundles\n• Reservation Wishlist\n• Legacy Payments (Caretaker’s Plan)",

            VELLUM_TITLE: "Vellum Invitations",
            VELLUM_H3: "Vellum Invitation E-Card",
            PREVIEW_INV: "Preview Invitation",

            CHEST_TITLE: "Treasure Chest Wrapping",
            CHEST_H3: "The “Treasure Chest”",
            CHEST_P: "Reinforced box, archival tissue, seal-style closures (placeholder).",
            CHEST_PH: "Treasure Chest Image Placeholder",
            BUNDLES_H3: "Complete Your Era",
            BUNDLES_P: "Curated bundles and accessory packs for the same decade.",
            VIEW_BUNDLES: "View Bundles",

            RES_TITLE: "Reservations & Payments",
            WISH_H3: "Reservation Wishlist",
            WISH_P: "Quiet early window for the next allocation.",
            JOIN_WISH: "Join Wishlist",
            LEGACY_H3: "Legacy Payments",
            LEGACY_P: "“Caretaker’s Plan” pay-over-time option for milestone gifts.",
            LEARN: "Learn More",

            CLOSE: "Close",

            FOOT_L: "The Oracle’s Keepsake.",
            FOOT_A: "Front Page",
            FOOT_B: "Grand Archive",
            FOOT_C: "Tanaka Fumiko"
        },

        zhHant: {
            SITE_SUBTITLE: "典藏傳世娃偶與歷史奇珍",
            NAV_HOME: "首頁",
            NAV_ARCHIVE: "宏大典藏室",
            NAV_CHRONICLE: "編年紀事",
            NAV_SOCIETY: "社會之門",
            NAV_GIFTING: "歷史之禮",
            NAV_LOGIN: "看守者登入",

            SOUND: "氛圍音效：",
            SOUND_OFF: "關閉",
            SOUND_ON: "開啟",
            FEATURED_ENTRY: "精選條目：",
            FEATURED_TAIL: "— 於「宏大典藏室」查閱。",

            HOME_KICKER: "獻給珍藏小歷史之人的報刊",
            HOME_H1: "歡迎來到「神諭者的紀念匣」",
            HOME_P1:
                "以復古氛圍打造的珍藏商館——每一尊娃偶、服飾與配件都被視為微縮文物。走入「宏大典藏室」、預約未來之「幻見」，並透過模組化可更換設計，編織屬於你的故事。",
            HOME_BTN_ARCHIVE: "進入宏大典藏室",
            HOME_BTN_CARETAKER: "成為看守者 »",

            TODAY_H2: "本日刊號",
            TODAY_PILL: "新到貨的煉金術",
            TODAY_P1:
                "一批新藏品已悄然入庫。請留意若有似無的告示與低語般的宣告。",
            TODAY_P2:
                "「傳承分期」與「看守者方案」現已適用於特選傳世套組。",

            COL1_TITLE: "宏大典藏室／星燦藝廊",
            COL1_P:
                "主要陳列空間如閱覽室般安靜；收藏模組娃偶、高級訂製服裝與年代情境套組。",
            TIMELINE_H3: "互動歷史時間軸",
            TIMELINE_P: "捲動式年代探索：剪影與配色一覽。",
            ERA1: "維多利亞低語",
            ERA2: "大正浪漫",
            ERA3: "1930年代十字路口",
            ERA4: "戰後回聲",
            ATELIER_H3: "高訂工坊",
            ATELIER_P: "超限量、編號收藏版本。",
            LIVE_INV: "即時庫存：",

            COL2_TITLE: "沉浸式體驗",
            COL2_A: "360° 檢視器",
            COL2_A_P: "可全角度旋轉，細看剪裁與神情。",
            COL2_B: "可點擊的「祕密」",
            COL2_B_P: "點擊頁面上的物件，解鎖片段故事與逸聞。",
            COL2_C: "編織你的故事",
            COL2_C_P: "材質、髮型、字母縮寫的客製化配置。",

            COL3_TITLE: "社群與傳承",
            COL3_A: "傳承之環",
            COL3_A_P: "免費忠誠計畫：等級與「忠誠針腳」點數。",
            COL3_B: "看守者藝廊",
            COL3_B_P: "顧客照片牆（UGC）。",
            COL3_C: "預約候補清單",
            COL3_C_P: "缺貨時可保留下一批配額。",

            ARCHIVE_KICKER: "第 01 期",
            ARCHIVE_H1: "宏大典藏室",
            ARCHIVE_P:
                "瀏覽現役藏品、限量編號與即將到來的幻見。商店如同博物館型錄般呈現。",
            ARCHIVE_BTN_TANAKA: "前往田中文子",
            ARCHIVE_BTN_GIFT: "歷史之禮",
            ARCHIVE_SIDE_H2: "年代探索",
            ARCHIVE_SIDE_P: "依年代篩選（示意）。",
            ALL: "全部",

            ARCHIVE_SECTION: "現役藏品",
            P_TANAKA_TITLE: "田中文子—1930年代模組娃偶",
            P_TANAKA_P: "可換頭與髮、可脫鞋、袴與和服套組。",
            P_TANAKA_BTN: "迎她入你的書房",

            P_VISIONS_TITLE: "幻見名冊—即將揭曉",
            P_VISIONS_P: "訂閱者可享獨家搶先。",
            P_VISIONS_BTN: "閱讀來函",

            P_BUNDLE_TITLE: "補齊你的年代—展示套組",
            P_BUNDLE_P: "年代道具與配件包。",
            P_BUNDLE_BTN: "送禮選項",

            TANAKA_KICKER: "1930年代十字路口版",
            TANAKA_H1: "田中文子",
            TANAKA_P:
                "一位生活於1930年代臺灣的日臺混血少女，在兩種血脈與期待間成形。模組化設計可更換頭部、髮型、鞋子與服裝，呈現她不同的生命片段。",
            TANAKA_BTN1: "迎她入你的書房",
            TANAKA_BTN2: "作為禮物準備",
            TANAKA_SIDE_H2: "模組特點",
            TANAKA_FEAT:
                "• 可更換頭部\n• 可更換髮型模組\n• 可脫鞋\n• 袴套組＋和服版本\n•「故事行囊」分頁\n• 可點擊祕密（故事）",

            VIEWER_TITLE: "360° 檢視器",
            VIEWER_P: "可嵌入轉盤圖片或 WebGL（示意）。",
            VIEWER_BOX: "360° 檢視器示意區",

            CONFIG_TITLE: "編織你的故事：配置器",
            CONFIG_P: "選擇髮型、盒內服裝與縮寫（示意表單）。",
            CONFIG_HAIR: "預設髮型：",
            CONFIG_OUTFIT: "盒內服裝：",
            PREVIEW: "預覽",

            TRUNK_TITLE: "故事行囊",
            TRUNK_P:
                "1936年，文子同時走在兩條街上：一條是帝國秩序的公開世界；另一條是母親臺灣記憶的私密世界。你的造型選擇會映照那份拉扯——順從、微小的抵抗，或脆弱的折衷。",
            BOX_TITLE: "復古紀念匣",
            BOX_P: "可展示的包裝設計，如同年代物件。",
            BOX_PH: "紀念匣圖片示意區",

            STYLE_VARIATIONS: "造型展示",
            ARCHIVAL_TOGGLE: "切換舊照片效果",

            CAROUSEL_1: "袴造型——正式場合",
            CAROUSEL_2: "編髮樣式——日常穿著",
            CAROUSEL_3: "和服版本——私密生活",
            CAROUSEL_4: "復古風格紀念匣",
            ANNOTATION_1: "僅於公開場合配戴",
            ANNOTATION_2: "日常外出時固定的髮式",
            ANNOTATION_3: "僅在家中穿著",
            ANNOTATION_4: "收放於床下的木匣",

            LORE_1_T: "公開場合的服裝規範",
            LORE_1_P:
                "文子在校外活動或公開場合時會穿著袴，以符合當時社會與帝國所期望的形象。",
            LORE_2_T: "實用的編髮",
            LORE_2_P:
                "編髮讓頭髮在日常奔走中保持整齊——在要求一致的世界裡，這些小選擇仍帶有私人的重量。",
            LORE_3_T: "私密的舒適",
            LORE_3_P:
                "回到家中，和服版本象徵更安靜的生活——母親的節奏與語言終於得以呼吸。",
            LORE_4_T: "木匣也是祕密",
            LORE_4_P:
                "紀念匣被設計得像書脊或旅行箱——適合藏起來，然後在多年後被重新發現。",

            CHRONICLE_KICKER: "世界觀報刊",
            CHRONICLE_H1: "編年紀事",
            CHRONICLE_P: "策展人的來函：短文、工坊筆記與連載故事。",
            NEWS_H2: "一針一線的時間",
            NEWS_P: "電子報訂閱（示意）。",
            SUBSCRIBE: "訂閱",
            LATEST: "最新條目",
            C1: "她心口徽章之意",
            C1P: "溯源、象徵，以及責任與身分的曖昧結。",
            C2: "為何要做成模組化",
            C2P: "可更換性作為分裂歷史的隱喻。",
            C3: "田野筆記：黃昏市集",
            C3P: "一枚裂痕徽章如何點燃整個系列。",
            VIDEO_TITLE: "金線背後",
            VIDEO_P: "工藝紀錄影片（示意）。",
            VIDEO_PH: "影片示意區",
            QUIZ_TITLE: "你是哪位星燦人物？",
            QUIZ_P: "性格測驗（示意）。",
            BEGIN: "開始",

            SOC_KICKER: "社群與傳承",
            SOC_H1: "社會之門",
            SOC_P: "看守者的沙龍：藝廊、聚會、專訪與傳世登錄。",
            SOC_SIDE_H2: "傳承之環",
            SOC_SIDE_P: "免費忠誠計畫：「忠誠針腳」。",
            ENROLL: "加入",
            UGC_TITLE: "看守者藝廊",
            UGC_P: "顧客照片牆（示意）。",
            UGC_PH: "UGC 網格示意區",
            FORUM_TITLE: "社群論壇",
            SALON: "私密沙龍",
            SALON_P: "與藝術家、歷史研究者的直播對談。",
            PARLOR: "討論廳",
            PARLOR_P: "年代研究與共創故事串。",
            REG_TITLE: "傳世登錄",
            REG_P: "登錄娃偶與題詞（示意表單）。",
            ADD: "新增",

            GIFT_KICKER: "呈現與儀式",
            GIFT_H1: "歷史之禮",
            GIFT_P:
                "選擇羊皮紙邀請卡、寶匣包裝、題詞與年代套組——讓禮物像一件真正的文物。",
            GIFT_BTN1: "挑選藏品",
            GIFT_BTN2: "開啟傳世登錄",
            GIFT_SIDE_H2: "送禮工具",
            GIFT_FEAT:
                "• 羊皮紙邀請卡電子卡\n• 寶匣包裝\n• 補齊你的年代套組\n• 預約候補\n• 傳承分期（看守者方案）",

            VELLUM_TITLE: "羊皮紙邀請卡",
            VELLUM_H3: "羊皮紙邀請卡電子卡",
            PREVIEW_INV: "預覽邀請卡",

            CHEST_TITLE: "寶匣包裝",
            CHEST_H3: "「寶匣」",
            CHEST_P: "加固盒體、保存紙與封蠟式封緘（示意）。",
            CHEST_PH: "寶匣圖片示意區",
            BUNDLES_H3: "補齊你的年代",
            BUNDLES_P: "同年代的套組與配件包。",
            VIEW_BUNDLES: "查看套組",

            RES_TITLE: "預約與付款",
            WISH_H3: "預約候補清單",
            WISH_P: "下一批配額的安靜先行視窗。",
            JOIN_WISH: "加入候補",
            LEGACY_H3: "傳承分期",
            LEGACY_P: "「看守者方案」：里程碑禮物的分期選項。",
            LEARN: "了解更多",

            CLOSE: "關閉",

            FOOT_L: "神諭者的紀念匣。",
            FOOT_A: "頭版",
            FOOT_B: "宏大典藏室",
            FOOT_C: "田中文子"
        }
    };

    // --------------------------
    // i18n apply function (global-ish)
    // --------------------------
    function applyTranslations(lang) {
        const dict = I18N[lang] || I18N.en;

        // Translate text nodes
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (!key) return;

            // Special: sound label depends on toggle state
            if (key === "SOUND_OFF" || key === "SOUND_ON") {
                // We'll set below
                return;
            }

            const value = dict[key];
            if (value === undefined) return;

            if (value.includes("\n")) {
                el.innerHTML = value.split("\n").map(line => line.trim()).join("<br>");
            } else {
                el.textContent = value;
            }
        });

        // Sound label translation (dynamic)
        if (soundLabel && dict.SOUND) {
            soundLabel.textContent = soundOn ? dict.SOUND_ON : dict.SOUND_OFF;
        }

        // Language buttons active state
        const enBtn = document.getElementById("langEN");
        const zhBtn = document.getElementById("langZH");
        if (enBtn && zhBtn) {
            enBtn.classList.toggle("active", lang === "en");
            zhBtn.classList.toggle("active", lang === "zhHant");
        }

        localStorage.setItem("oracleLang", lang);
        document.documentElement.lang = (lang === "zhHant") ? "zh-Hant" : "en";
    }

    // Make refresh event re-apply current language (used by popups)
    document.addEventListener("i18nRefresh", () => {
        const lang = localStorage.getItem("oracleLang") || "en";
        applyTranslations(lang);
    });

    // Hook up language toggle buttons
    const enBtn = document.getElementById("langEN");
    const zhBtn = document.getElementById("langZH");
    if (enBtn) enBtn.addEventListener("click", () => applyTranslations("en"));
    if (zhBtn) zhBtn.addEventListener("click", () => applyTranslations("zhHant"));

    // Initialize language
    applyTranslations(localStorage.getItem("oracleLang") || "en");

    // --------------------------
    // Archival Carousel (fade + auto + pause on hover)
    // --------------------------
    document.querySelectorAll(".carousel").forEach(carousel => {
        const slides = carousel.querySelectorAll(".carousel-slide");
        const prevBtn = carousel.querySelector(".carousel-btn.prev");
        const nextBtn = carousel.querySelector(".carousel-btn.next");
        const dots = carousel.parentElement.querySelectorAll(".carousel-dot");

        let index = 0;
        let timer = null;
        const interval = 4500;

        function showSlide(i) {
            slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
            dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
            index = i;
        }

        function next() { showSlide((index + 1) % slides.length); }
        function prev() { showSlide((index - 1 + slides.length) % slides.length); }

        function startAuto() {
            stopAuto();
            timer = setInterval(next, interval);
        }
        function stopAuto() {
            if (timer) clearInterval(timer);
            timer = null;
        }

        nextBtn?.addEventListener("click", () => { next(); startAuto(); });
        prevBtn?.addEventListener("click", () => { prev(); startAuto(); });

        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => { showSlide(i); startAuto(); });
        });

        carousel.addEventListener("mouseenter", stopAuto);
        carousel.addEventListener("mouseleave", startAuto);

        showSlide(0);
        startAuto();
    });

    // --------------------------
    // Archival filter toggle
    // --------------------------
    document.querySelectorAll(".archival-toggle").forEach(btn => {
        // The carousel is the previous sibling in our HTML layout
        const carousel = btn.previousElementSibling;
        btn.addEventListener("click", () => {
            if (carousel && carousel.classList.contains("carousel")) {
                carousel.classList.toggle("archival");
            }
        });
    });

    // --------------------------
    // Lore popup logic (caption click)
    // --------------------------
    const overlay = document.getElementById("loreOverlay");
    const loreTitle = document.getElementById("loreTitle");
    const loreText = document.getElementById("loreText");
    const loreClose = document.getElementById("loreClose");

    document.querySelectorAll(".carousel-caption").forEach(cap => {
        cap.addEventListener("click", () => {
            const titleKey = cap.dataset.loreTitle;
            const textKey = cap.dataset.loreText;
            if (!overlay || !loreTitle || !loreText) return;

            loreTitle.setAttribute("data-i18n", titleKey || "");
            loreText.setAttribute("data-i18n", textKey || "");
            overlay.style.display = "flex";

            // Ensure translated immediately
            document.dispatchEvent(new Event("i18nRefresh"));
        });
    });

    overlay?.addEventListener("click", e => {
        if (e.target === overlay) overlay.style.display = "none";
    });

    loreClose?.addEventListener("click", () => {
        if (overlay) overlay.style.display = "none";
    });
});
