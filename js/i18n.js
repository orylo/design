/* =====================================================================
   i18n.js — 언어 감지 · 사전 · 프로젝트 영어 콘텐츠
   ---------------------------------------------------------------------
   - 기본 언어: 브라우저가 한국어면 'ko', 그 외 'en'. localStorage로 기억.
   - 프로젝트 영어가 없으면 자동으로 한국어로 폴백(절대 안 깨짐).
   - main.js 보다 먼저 로드되어야 합니다.
   ===================================================================== */
(function () {
  "use strict";

  var stored = null;
  try { stored = localStorage.getItem("lang"); } catch (e) {}
  var navLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  var LANG = (stored === "ko" || stored === "en")
    ? stored
    : (navLang.indexOf("ko") === 0 ? "ko" : "en");

  window.LANG = LANG;
  document.documentElement.lang = LANG;

  window.setLang = function (l) {
    try { localStorage.setItem("lang", l); } catch (e) {}
    location.reload();
  };

  /* ---- UI 문구 사전 (JS가 생성하는 텍스트 + 토글) ---- */
  var DICT = {
    ko: {
      toggle: "EN",
      view_all: "전체 보기 →",
      back_to_work: "← Work로 돌아가기",
      overview: "Overview",
      not_found_title: "작업을 찾을 수 없어요",
      not_found_body: "요청하신 프로젝트가 없습니다.",
      no_works: "해당 카테고리의 작업이 아직 없습니다.",
      credit: "Credit",
      // 폼
      form_sending: "전송 중이에요…",
      form_sent: "감사합니다! 메시지가 전송됐어요. 곧 회신드릴게요.",
      form_fail: "전송에 실패했어요. 아래 ‘메일 앱으로 보내기’ 버튼을 이용해 주세요.",
      form_err: "전송 중 오류가 났어요. 아래 ‘메일 앱으로 보내기’ 버튼을 이용해 주세요.",
      form_nokey: "메일 전송이 아직 설정되지 않았어요. 아래 ‘메일 앱으로 보내기’ 버튼을 이용해 주세요.",
      sending_btn: "보내는 중…"
    },
    en: {
      toggle: "KO",
      view_all: "View all →",
      back_to_work: "← Back to Work",
      overview: "Overview",
      not_found_title: "Project not found",
      not_found_body: "The project you requested doesn’t exist.",
      no_works: "No work in this category yet.",
      credit: "Credit",
      form_sending: "Sending…",
      form_sent: "Thank you! Your message has been sent — I’ll get back to you soon.",
      form_fail: "Sending failed. Please use the “Open in mail app” button below.",
      form_err: "Something went wrong. Please use the “Open in mail app” button below.",
      form_nokey: "Email sending isn’t set up yet. Please use the “Open in mail app” button below.",
      sending_btn: "Sending…"
    }
  };
  window.t = function (key) {
    var d = DICT[LANG] || DICT.en;
    return d[key] != null ? d[key] : (DICT.ko[key] != null ? DICT.ko[key] : key);
  };

  /* ---- 프로젝트 영어 콘텐츠 (slug → {concept, overview[], sections[]}) ----
     없는 항목/필드는 자동으로 한국어로 폴백됩니다. 채워가는 중. */
  window.PROJECTS_EN = {
    "home-purrtect": {
      concept: "A 1930s cartoon-style (Cuphead-tone) side-scrolling action-defense game where cat sheriff ‘Cheese’ guards a mansion — a solo indie project.",
      overview: [
        "‘Home Purrtect’ is a 1930s cartoon-style (Cuphead-tone) side-scrolling action-defense game in which cat sheriff ‘Cheese’ fends off the rats invading a mansion. Built in landscape, 2D, on Godot 4.6, the world, characters, backgrounds, UI, and staging are all designed and developed solo, as an indie.",
        "It’s also an experiment in making a game as a graphic designer with almost no coding background — pairing with generative AI as a development partner, splitting the work into planning (design and balancing) and implementation (code and verification). I defined a unified design system of thick ink outlines and a vintage cream/gold/red palette, and released a playable Act 1 as a web build that I keep updating.",
      ],
      sections: [
        { type: "process", title: "How it’s made — Designer × AI pair development", steps: [
          { step: "01 WORLD", title: "World · Characters", body: "Designed Act 1’s world, characters, and catalog myself — cat sheriff ‘Cheese,’ the mansion, and the rat ‘intruders.’" },
          { step: "02 ART", title: "Art & Design System", body: "Drew the 1930s cartoon-tone characters, backgrounds, and UI by hand, and defined design tokens for ink outlines and a cream/gold/red palette." },
          { step: "03 BUILD", title: "AI pair development", body: "A two-track collaboration splitting planning (design and balancing) from implementation (GDScript and verification), letting a non-developer build a game that actually runs." },
          { step: "04 SHIP", title: "Web deploy · Live ops", body: "Auto-deploys the Godot web build via GitHub Actions, shipping a playable Act 1 and updating it continuously." },
        ]},
        { type: "quote", text: "Can a designer — without knowing how to code — build a ‘world you can play’? The game started from that question." },
      ],
    },
    "toy-kingdom": {
      concept: "Rewriting old folktales into lessons for 21st-century kids — a branded puppet-theater series for a toy store.",
      overview: [
        "Toy Kingdom was given the persona of a wise grandfather who casts a critical eye on fairy tales that no longer fit our times. Using the toys stocked in the store as actors and props, we staged a weekly branded-content series in the form of puppet theater.",
        "Tales out of step with today’s values — a Chunhyang pressured into obedience, a Cinderella who only ever waits to be rescued — were re-twisted in plot and ending into ‘lessons for 2021.’ Products appeared on stage as natural product placement, so the moral and the merchandising landed in a single scene. The content spread organically and was featured in outlets such as Careet and Magazine The PR.",
      ],
      sections: [
        { type: "process", title: "Process", steps: [
          { step: "01 OBSERVE", title: "A persona for the brand", body: "Three E-mart private-brand labels were each given a distinct persona within one universe. Toy Kingdom became the ‘wise grandfather.’" },
          { step: "02 LOVE", title: "Rewriting old tales", body: "Two puppet plays a week, re-scripting the plots and endings of folktales into modern lessons (Candy Candy, The Ant and the Grasshopper, The Boy Who Cried Wolf, and more)." },
          { step: "03 SPEAK", title: "Products on stage", body: "The re-told stories became puppet theater; the products became placement. Leads and props were 100% Toy Kingdom items, so lesson and product share one frame." },
        ]},
        { type: "quote", text: "“A toy store in 2021 should hand kids a 2021 lesson.” — a space that tells modern morals to children and adults alike." },
      ],
    },
    "chaegeun": {
      concept: "Going vegetarian, step by step — a vegetable-subscription service for a more sustainable planet.",
      overview: [
        "‘Chaegeun’ is a vegetarian-lifestyle service rooted in the UN’s 15th Sustainable Development Goal, ‘Life on Land.’ Over the past 50 years the world’s population roughly doubled, yet meat production more than quadrupled, and the UN FAO projects annual meat output will reach 455 million tons by 2050. As the land, water, and greenhouse gases that meat demands threaten the planet’s ecosystems, the project started from one question: ‘Have we grown too used to animal-based food?’",
        "It is designed as a subscription that lets people experience, record, and gradually change their habits around vegetables through small missions — raising vegetable intake, naturally lowering meat consumption, and building sustainable change into everyday life.",
      ],
      sections: [
        { type: "quote", text: "A vegetarian lifestyle — shall we try it, step by step?" },
      ],
    },
    "mukkuri-hangwa": {
      concept: "Amass a mass of sweet fortune — hangwa with a fortune inside, a light little ‘mukkuri.’",
      overview: [
        "‘Mukkuri’ is an old Korean word for having a shaman read your fortune — a kind of consultation and blessing. Mukkuri Hangwa is a brand designed so that eating hangwa (traditional Korean confectionery) feels like a light mukkuri: you discover a fortune as you eat, recasting undervalued folk-shaman culture and hangwa as snack culture for the MZ generation.",
        "The slogan is ‘Amass a mass of sweet fortune.’ Eat the hangwa, find your fortune, and gather a handful of sweet luck — a brand built around gifting sweet fortune to yourself, and to family and friends.",
      ],
      sections: [
        { type: "quote", text: "“Amass a mass of sweet fortune.” Eat the hangwa, find a fortune, and gather a handful of sweet luck." },
      ],
    },
    "heupyeonja": {
      concept: "Blood ties, hometown ties, school ties — and smoking ties. An independent interview magazine on the bonds cigarettes create.",
      overview: [
        "As small publishing grew, anyone who wanted to could put out a book. Breaking from the idea that only commercial or expert content deserves to become a book, the era of ‘independent publishing’ — making private, subjective, personal content in small print runs — had arrived. Among all media, magazines were the most fun to me: a vast mix of image and text you can read casually, yet weighty rather than empty. Those conditions met my own interest, and I published 吸緣者 (Heupyeonja), an independent magazine of smokers’ personal cigarette stories.",
        "* In the title 吸緣者, the middle character is not 煙 (smoke) but 緣 (fate, connection) — ‘a person who inhales connection.’",
      ],
    },

    "petnow-brand": {
      concept: "A pet-tech brand system built not on the technology, but on the feeling of losing your pet.",
      overview: [
        "To lower the barrier to an unfamiliar technology — nose-print recognition for pets — I built a brand identity and visual language rooted in the emotion of ‘losing your companion animal.’ The brand was designed to reduce the distance people feel toward the tech and to build trust.",
        "For performance marketing, I created an AI visualization system that structured prompts into four layers — subject, background, shot, art direction — and shared it with the team, mass-producing assets with a consistent tone. As a result, we cut the download CPA from the ~₩3,000 range to the ~₩900 range and more than doubled inflow.",
      ],
    },
    "max-nose-id": {
      concept: "“Guess what this is?” — translating nose-print recognition into emotion, told from a dog’s point of view.",
      overview: [
        "To convey an unfamiliar feature — nose-print registration — as ‘experience’ rather than ‘information,’ I built the film around a dog speaking directly to the viewer. It makes the discomfort of microchips relatable from the dog’s perspective, and turns hard technology into something playful through a conversation with a clever cat character.",
        "Designed so users would receive the technology through empathy rather than comprehension, the campaign lifted both app conversion and brand preference afterward.",
      ],
      sections: [
        { type: "process", title: "Story & Direction", steps: [
          { step: "1. INTRO", title: "“Guess what this is!”", body: "Opens with a defamiliarized nose texture and a quiz to grab curiosity." },
          { step: "2. DEVELOPMENT", title: "“Shots are scary.”", body: "Anxiety voiced from the dog’s POV — a feeling being, not a delivery device for facts." },
          { step: "3. CLIMAX", title: "“You still didn’t know?”", body: "The contrast of cute dog vs. clever cat carries the information naturally." },
          { step: "4. ENDING", title: "“Building a world worth living in.”", body: "Lands the brand vision on the warm everyday life the technology makes possible." },
        ]},
      ],
    },
    "is-sue-missing": {
      concept: "“What if a disappearance happened from the pet’s side?” — a lost-prevention campaign with the point of view flipped.",
      overview: [
        "Where most lost-pet campaigns are built around ‘a human searching for a pet,’ this film begins the other way around — a dog dreaming that it sets out to find its missing guardian. The emotional arc of anxiety → action → despair → memory → relief is designed entirely from the dog’s POV.",
        "Instead of explaining the feature, it lets the emotion land first, then connects Petnow’s lost-prevention function with a single ‘quiet sentence’ — letting the brand state its purpose through feeling.",
      ],
    },
    "dinosaur-universe": {
      concept: "A Gen-AI ad that distills proven game-marketing methods into a single film.",
      overview: [
        "I condensed proven game-marketing methods — cinematic hooking, fake in-game, real in-game, and a UGC tone — into one film. Without losing the essence of advertising, the focus was on showing both planning/direction sense and experimental R&D capability built on generative AI.",
        "The final output is a 47-second full version combining four experiments, designed to be re-cut into 15–20-second short-form for actual deployment.",
      ],
      sections: [
        { type: "process", title: "AI Production Pipeline", steps: [
          { step: "Pre", title: "Planning · Research", body: "ChatGPT for per-cut ideas, meme lines, and tone; Gemini for UA trends and performance benchmarks." },
          { step: "Image", title: "Key Visuals", body: "MidJourney for the human and dinosaur key images, testing consistency of pose, expression, and wardrobe." },
          { step: "Production", title: "Runway vs Veo3", body: "Runway (Gen3/4·Aleph) for cinematic cuts and motion type; Veo3 for character consistency and dialogue/mockup compositing." },
          { step: "Post", title: "Post-production", body: "ElevenLabs TTS and SFX, editing in Premiere, motion and caption sync in After Effects." },
        ]},
      ],
    },
    "petnow-app": {
      concept: "An intuitive, trustworthy app interface that closes the distance to the technology.",
      overview: [
        "I redesigned the core screens of the nose-print recognition service through an As-is / To-be comparison. On the principle that the harder the AI service, the more you must focus on what the user feels rather than the technology itself, I built clear hierarchy and an intuitive flow.",
        "I overhauled the design system to secure consistency across components, color, and type, laying a foundation for new features to scale quickly.",
      ],
    },
    "petnow-service": {
      concept: "A new service that instantly generates social and print lost-pet flyers the moment a report is filed.",
      overview: [
        "I planned and designed a service that, the moment a guardian files a lost-pet report in the app, instantly generates flyers for social sharing (Instagram, KakaoTalk, Danggeun) and for print (A4, A3). The pet’s photo is placed first, key information is set in bold type and high-contrast color, and everything is optimized so color and resolution hold up in print.",
        "By making it effortless to spread the word quickly, it raises the odds of finding a lost animal early.",
      ],
    },
    "galaxy-studio-fold4": {
      concept: "Finding ‘your’ foldable through eight personality types — a personalization experience system.",
      overview: [
        "The Z Fold4·Flip4 season of Galaxy Studio. The focus was making a new form factor stick as ‘something I did myself’ rather than ‘a feature being explained.’",
        "With no directional standard in place, I proposed an eight-category personalization system based on consumer disposition, and it was adopted as the official guide. I extended the eight types into a game-style app where visitors discover the foldable usage that fits them and share it — unifying the brand experience into one visual language.",
      ],
      sections: [
        { type: "quote", text: "People remember not features, but ‘what they did’ — an experience that stays with you as action." },
      ],
    },
    "galaxy-studio-s22": {
      concept: "A daytime makeup room and a nighttime garden — translating the S22 camera into spatial experience.",
      overview: [
        "A space to experience the Galaxy S22 series first-hand, operated across 20-plus venues — Samsung Digital Plazas, malls, department stores — and some 40 university campuses.",
        "I designed a ‘daytime makeup space’ that captures rich color and detail, and a ‘nighttime garden space’ that shoots bright and steady in the dark, so visitors could feel the camera at its peak. It was the first season to use the exhibition space itself as a TVCF, and we extended it to campuses as ‘Galaxy Studio in campus Part 2’ as in-person classes resumed.",
      ],
    },
    "galaxy-studio-fold3": {
      concept: "The first foldable season remembered through action — a participatory brand experience.",
      overview: [
        "The first season of Galaxy Studio, letting people experience the Z Fold3·Flip3 foldables offline. Across Samsung Digital Plazas and many other venues, I designed a content structure — awareness → action → sharing — that could be reapplied each season.",
        "A labeling game MZ audiences love, the ‘My Foldable Character Test,’ let people experience the third-gen Galaxy Z’s innovations; a ‘My Foldable Life’ event with various collab brands, and a ‘Smile, Wide Open’ event that used the fold to give back the smiles hidden behind masks — participatory experiences tuned to the emotional climate of the COVID era.",
      ],
    },
    "idea": {
      concept: "‘Narcissus’ — a four-member virtual boy group themed on self-obsession and distorted reality.",
      overview: [
        "Narcissus, a debut mini-album inspired by Greco-Roman myth, is a four-member boy-group project that translates the dreamy, experimental mood of electropop, synth-pop, and alternative R&B into visuals. It is marked by a mise-en-scène where hazy light crosses hard shadow, and a design where classical and surreal elements meet.",
        "From a virtual album package to goods and digital content, IDEÁ’s distinctive identity was extended across many forms.",
      ],
    },
    "salay-moon": {
      concept: "‘Salaryman + Sailor Moon’ — office-life reality reframed through a magical-girl universe, as an Insta-toon.",
      overview: [
        "A generative-AI Insta-toon series that blends the reality of office life with a magical-girl universe for humor. The protagonist ‘Assistant Manager Moon’ faces all-too-real workplace situations through a magical-girl lens, offering office workers recognition and fun at once.",
        "A board-game version is planned for production and release via Tumblbug crowdfunding in 2026.",
      ],
    },
    "saju": {
      concept: "A conversational AI fortune-teller chatbot trained on traditional Korean myeongri.",
      overview: [
        "An interactive piece that fuses saju (四柱), Korea’s traditional fortune culture, with generative AI. I trained GPT on myeongri principles based on name, birth date, and birth time, and built it into a conversational counseling chatbot.",
        "Beyond simply delivering information, it’s designed as an emotional touchpoint that shares and comforts the user’s concerns — for instance, offering an interface of energetic color and rhythm to someone with a ‘strong fire energy.’",
      ],
      sections: [
        { type: "text", title: "How it works", body: [
          "Enter your name, birth date, and birth time, and a GPT trained on myeongri reads your saju and counsels you in conversation.",
          "At the end of the chat it hands you a ‘fortune card’ tailored to your saju — closing the experience as something you hold in your hand.",
        ]},
        { type: "quote", text: "Fortune as comfort, not information — the same question answered in a different color and rhythm for each person." },
      ],
    },
    "hateful-dream": {
      concept: "“Even without a story, emotion runs to the end” — an AI short carried by feeling alone.",
      overview: [
        "A 48-hour short born from a diary line: ‘It wasn’t a good dream or a bad dream — just a hateful one.’ Using AI’s hallucination and uncertainty as emotional material, I deliberately raised the chaos value with off-kilter prompts and blends, embracing unpredictable results.",
        "Structured to move from a photoreal opening into a surreal animated finale to shape the rhythm of emotion, it was selected as a finalist — top 30 of 3,500 teams worldwide.",
      ],
    },
    "piper": {
      concept: "An AI artist who performs emotion — a modern retelling of the Pied Piper.",
      overview: [
        "A virtual K-POP artist project born from one question: ‘How precise and consistent an identity can be built with AI?’ I designed ‘PIPER,’ an artist who senses human emotion as music and translates it into a visual world, realized through a vintage storybook aesthetic.",
        "The universe expands across two albums. The first, ‘The Melody of Departure,’ tells a fairy-tale narrative set in ‘the library where all stories gather’; the second, ‘Unbound,’ draws on the Korean folktale Byeoljubujeon for a rock concept about overcoming gaslighting and finding freedom. Midjourney and Stable Diffusion were used so the character’s identity holds even as the concept changes.",
      ],
      sections: [
        { type: "chapter", index: "01", title: "The Library of All", body: "Everyone’s story was in this library, but the book holding hers alone was empty." },
        { type: "chapter", index: "02", title: "The Red Path", body: "“I heard a strange sound in the forest.” PIPER offers a story to one trembling with fear." },
        { type: "chapter", index: "03", title: "Dreams in the Dust", body: "“You don’t need a fancy dress, but I’ll help you go looking a little finer.”" },
        { type: "chapter", index: "04", title: "The Melody of Departure", body: "“This song could be called ‘the Pied Piper,’ but I’ll call it ‘PIPER’ instead.”" },
        { type: "quote", text: "A visual-storytelling book (145×195, 72pp) · CD-R · folded poster (A3) · random photocard — a physical experience binding story and visuals into objects." },
      ],
    },
    "joseon-hats": {
      concept: "Joseon, the ‘Nation of Hats’ — an art book on the semiotics of things we’re forgetting, two books that are also one.",
      overview: [
        "An art book that began with a single Buddhist statue I happened upon on the street. Just as the crown it wore revealed its identity (Avalokiteśvara), in Joseon a hat was a ‘sign’ that let you read the wearer’s status, place, and situation.",
        "Setting the hat culture of Joseon — the ‘Nation of Hats’ — beside the text emoticons now vanishing under newer technology, it speaks to ‘the semiotics of forgotten things.’ Bound as an accordion of two books that exist separately yet are read together, I handled the planning, writing, illustration, and editing myself.",
      ],
      sections: [
        { type: "quote", text: "Two books that are also one — using Joseon hats and lost text emoticons to talk about signs (記號)." },
      ],
      credit: ["Words & illustration : Lee Sunghee", "Sewing binding : Lee Jiwoon"],
    },
    "oakland-typeface": {
      concept: "Dissecting the structure and proportion of the pixel typeface ‘Oakland’ into a poster — exhibited at Weltformat Korea.",
      overview: [
        "Oakland, designed by Zuzana Licko, is divided into 6, 8, 10, and 15 by width and proportion, and is now incorporated into a pixel font family called Lo-res, expanding into 9 wide, 12, 15, and 22 BOLD.",
        "This work dissects and recomposes the structure and proportion of that pixel typeface into a typographic poster. It was exhibited at the Weltformat Korea poster show.",
      ],
    },
  };
})();
