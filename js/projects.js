/* =====================================================================
   PROJECT DATA — 작업은 여기 한 곳에서만 관리하세요.
   ---------------------------------------------------------------------
   구조
   - category : "brand" | "product" | "experiments"  (Work 필터 = 이 3분류)
   - tags     : ["AI","Video","Branding",...]         (가로지르는 보조 태그)
   - date     : "YYYY-MM"  → 클수록(최신일수록) 위에 노출
   - featured : true → 홈 Selected Work에 노출(최신 4개까지)
   - concept  : 상세페이지 상단 한 줄 콘셉트
   - overview : 본문 문단 배열
   - link     : { url, label }  (영상/데모/사이트 — 선택)
   - sections : 프로젝트별 자유 모듈(선택). type: text|chapter|process|quote|gallery
   ===================================================================== */

const CATEGORIES = [
  { key: "all",         label: "All" },
  { key: "brand",       label: "Brand & Campaign" },
  { key: "product",     label: "Product & Experience" },
  { key: "experiments", label: "Creative Experiments" },
];

const PROJECTS = [
  /* ---------------- Brand & Campaign ---------------- */
  {
    slug: "petnow-brand", titleEn: "Petnow — Brand & Growth", titleKo: "펫나우 브랜드 & 그로스",
    category: "brand", tags: ["Branding", "AI", "Growth"],
    date: "2025-10", period: "2022.09 – 2025.10", color: "lime", featured: false,
    concept: "기술이 아닌 ‘잃어버렸을 때의 감정’에서 출발한 펫테크 브랜드 시스템.",
    role: ["Brand Strategy", "Visual System", "Performance Creative"],
    tools: ["Illustrator", "Photoshop", "Figma", "Midjourney", "Runway"],
    client: "Petnow", year: "2022–2025",
    overview: [
      "반려동물 비문(코 지문) 인식이라는 낯선 기술의 진입 장벽을 낮추기 위해, ‘반려동물을 잃어버렸을 때’의 감정에서 출발한 BI와 시각 언어를 정립했습니다. 기술에 대한 거리감을 줄이고 신뢰감을 높이는 방향으로 브랜드를 설계했습니다.",
      "퍼포먼스 마케팅에서는 프롬프트를 ‘주제–배경–촬영–미술’ 4레이어로 구조화한 AI 시각화 시스템을 만들어 팀과 공유했고, 일관된 톤앤매너의 소재를 대량 생산했습니다. 그 결과 다운로드 CPA를 3,000원대에서 900원대로 낮추며 유입을 2배 이상 끌어올렸습니다.",
    ],
  },
  {
    slug: "max-nose-id", titleEn: "Max’s Nose ID", titleKo: "맥스의 코 신분증 이야기",
    category: "brand", tags: ["Video", "AI", "Campaign"],
    date: "2023-06", period: "2022 – 2023", color: "mint", featured: false,
    concept: "“이게 뭐게요?” — 강아지의 시점으로 비문 인식을 감정으로 번역한 캠페인.",
    role: ["Art Direction", "Character & Persona", "Script & Message"],
    tools: ["Premiere Pro", "After Effects", "Midjourney", "Runway"],
    client: "Petnow (in-house)", year: "2023",
    link: { url: "https://youtu.be/ebB0ubcPAek", label: "Watch campaign" },
    overview: [
      "비문 등록이라는 생소한 기능을 ‘정보’가 아닌 ‘경험’으로 전하기 위해, 강아지가 시청자에게 직접 말을 거는 구조로 기획했습니다. 마이크로칩의 불편함을 강아지 시점에서 정서적으로 공감하게 만들고, 똑똑한 고양이 캐릭터와의 대화로 어려운 기술을 유쾌하게 풀었습니다.",
      "사용자가 기술을 ‘이해’보다 ‘공감’으로 받아들이도록 설계한 결과, 캠페인 이후 앱 전환율과 브랜드 선호도가 함께 상승했습니다.",
    ],
    sections: [
      { type: "process", title: "Story & Direction", steps: [
        { step: "1. INTRO", title: "“이게 뭔지 맞혀보세요!”", body: "낯설게 연출한 코 텍스처와 퀴즈로 호기심을 붙잡으며 시작." },
        { step: "2. DEVELOPMENT", title: "“주사는 무서워요.”", body: "강아지 시점으로 불안을 표현, 정보 전달 수단이 아닌 정서적 존재로 느끼게 함." },
        { step: "3. CLIMAX", title: "“너 아직도 몰랐어?”", body: "귀여운 강아지 vs 똑똑한 고양이의 대비로 정보 전달을 자연스럽게 유도." },
        { step: "4. ENDING", title: "“살기 좋은 세상을 만듭니다.”", body: "기술이 만든 따뜻한 일상으로 브랜드 비전을 안정적으로 마무리." },
      ]},
    ],
  },
  {
    slug: "is-sue-missing", titleEn: "Is Sue Missing?", titleKo: "Is Sue Missing?",
    category: "brand", tags: ["Video", "AI", "Campaign"],
    date: "2023-09", period: "2023", color: "lilac", featured: false,
    concept: "“실종이 반려동물 입장에서 벌어진다면?” — 시점을 뒤집은 실종 방지 캠페인.",
    role: ["Art Direction", "Character & Persona", "Script & Message"],
    tools: ["Premiere Pro", "After Effects", "Midjourney", "Runway"],
    client: "Petnow (in-house)", year: "2023",
    link: { url: "https://youtu.be/UegXhwkfAYg", label: "Watch campaign" },
    overview: [
      "대부분의 실종 캠페인이 ‘사람이 반려동물을 찾는’ 구조라면, 이 영상은 반대로 강아지가 사라진 보호자를 찾아 나서는 꿈을 꾸는 구조로 시작합니다. 불안 → 행동 → 좌절 → 회상 → 안도의 감정 흐름을 강아지 POV로 설계했습니다.",
      "기능 설명 대신 감정이 납득된 뒤 ‘조용한 문장’으로 펫나우의 실종 방지 기능을 연결해, 브랜드의 목적을 감정으로 말하도록 구성했습니다.",
    ],
  },
  {
    slug: "dinosaur-universe", titleEn: "Dinosaur Universe", titleKo: "Dinosaur Universe",
    category: "brand", tags: ["Video", "AI", "Performance"],
    date: "2025-04", period: "2025", color: "coral", featured: false,
    concept: "게임 마케팅의 검증된 메소드를 한 편에 집약한 Gen-AI 광고 영상.",
    role: ["Creative Direction", "Storyboarding", "AI Production", "Post-production"],
    tools: ["ChatGPT", "Gemini", "Midjourney", "Runway", "Veo 3", "ElevenLabs", "Premiere Pro", "After Effects"],
    client: "Supercent (recruitment task)", year: "2025",
    link: { url: "https://www.figma.com/slides/64C3EkacHM8WJt45t9p2Gu/Dinosaur-Universe-_-video", label: "View video deck" },
    overview: [
      "성과가 입증된 게임 마케팅 메소드(시네마틱 후킹 / Fake In-game / Real In-game / UGC 톤)를 하나의 영상으로 집약했습니다. 광고의 본질을 잃지 않으면서, 기획·연출 감각과 생성형 AI 기반의 실험적 R&D 역량을 함께 보여주는 데 초점을 뒀습니다.",
      "최종 아웃풋은 네 가지 실험을 결합한 47초 풀버전이며, 실제 집행 시 15–20초 숏폼으로 변주 가능하도록 설계했습니다.",
    ],
    sections: [
      { type: "process", title: "AI Production Pipeline", steps: [
        { step: "Pre", title: "기획 · 리서치", body: "ChatGPT로 컷별 아이디어·밈 대사·톤 제안, Gemini로 UA 트렌드/성과 지표 리서치." },
        { step: "Image", title: "메인 이미지", body: "MidJourney로 인물·공룡 메인 이미지, 포즈·표정·의상 일관성 실험." },
        { step: "Production", title: "Runway vs Veo3", body: "Runway(Gen3/4·Aleph)로 시네마틱 컷·모션 타이포, Veo3로 동일 인물 일관성과 대사·목업 합성." },
        { step: "Post", title: "후반 작업", body: "ElevenLabs TTS·효과음, Premiere 편집, After Effects 모션·자막 싱크." },
      ]},
    ],
  },
  {
    slug: "galaxy-studio", titleEn: "Galaxy Studio", titleKo: "갤럭시 스튜디오",
    category: "brand", tags: ["Experience", "Motion", "Campaign"],
    date: "2022-09", period: "2021 – 2022", color: "navy", featured: false,
    concept: "“사람은 기능이 아니라 ‘내가 뭘 했는지’를 기억한다” — 행동 중심 브랜드 체험.",
    role: ["Experience Content Design", "Personalization System", "PPM & Shoot Direction"],
    tools: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects"],
    client: "삼성전자 / 제일기획", year: "2021–2022",
    overview: [
      "삼성 폴더블폰의 핵심 기능을 오프라인 공간에서 직접 체험하게 한 BTL 프로젝트입니다. Z Flip·Fold 3·4, S22까지 3개 시즌에 걸쳐 ‘기능 인지 → 행동 유도 → 결과 공유’로 이어지는 반복 적용 가능한 콘텐츠 구조를 설계하고 실행했습니다.",
      "방향 기준이 없던 상황에서 소비자 성향 기반의 8개 퍼스널라이징 카테고리 시스템을 제안해 공식 가이드로 채택시켰고, 8유형을 캐릭터화한 게임형 앱으로 확장해 브랜드 경험을 하나의 시각 언어로 통합했습니다.",
    ],
  },
  {
    slug: "toy-kingdom", titleEn: "Toy Kingdom", titleKo: "토이킹덤 브랜디드 콘텐츠",
    category: "brand", tags: ["Branding", "Art Direction", "Photography"],
    date: "2021-07", period: "2021.02 – 2021.07", color: "pink", featured: true,
    concept: "시대에 맞지 않는 옛이야기를, 21세기 아이들을 위한 새 교훈으로 — 장난감 인형극 브랜디드 콘텐츠.",
    role: ["Contents Design", "Art Direction", "Photography"],
    tools: ["Photoshop", "Lightroom", "Illustrator", "Clip Studio"],
    client: "이마트 토이킹덤 (스튜디오 좋)", year: "2021",
    link: { url: "https://www.instagram.com/toykingdom.official/", label: "Instagram에서 보기" },
    overview: [
      "토이킹덤은 ‘지혜를 나누는 할아버지’ 페르소나로, 시대에 맞지 않는 전래동화에 비판적 시선을 가진 브랜드입니다. 매장에 입점한 장난감들을 배우와 소품으로 삼아, 인형극 형식의 브랜디드 콘텐츠를 매주 선보였습니다.",
      "수청을 강요받는 춘향이, 구조되기만 하는 신데렐라처럼 오늘의 정서와 맞지 않는 옛이야기를 — 과정과 결말을 비틀어 ‘2021년식 교훈’으로 재해석했습니다. 제품은 PPL 방식으로 무대 위에 자연스럽게 노출해 교훈과 제품 홍보를 동시에 잡았고, 콘텐츠는 자연스러운 바이럴로 이어져 캐릿·매거진 The PR 등에 소개되었습니다.",
    ],
    sections: [
      { type: "process", title: "Process", steps: [
        { step: "01 관찰하기", title: "브랜드에 페르소나를", body: "이마트 PB 3개 브랜드에 각기 다른 페르소나를 입혀 하나의 세계관으로 운영. 토이킹덤에는 ‘지혜를 나누는 할아버지’ 페르소나를 부여했습니다." },
        { step: "02 사랑하기", title: "옛이야기를 다시 쓰다", body: "매주 2편의 인형극을 제작하며 전래동화의 과정·결말을 비틀어 현대적 교훈으로 각색했습니다. (들장미 소녀 캔디, 개미와 베짱이, 양치기 소년 등)" },
        { step: "03 소통하기", title: "무대 위의 제품", body: "각색한 이야기는 인형극으로, 제품은 PPL로. 주연과 소품 100%를 토이킹덤 제품으로 채워 교훈과 제품 노출을 한 장면에 담았습니다." },
      ]},
      { type: "quote", text: "“2021년의 장난감 가게라면, 2021년식의 교훈을 아이들에게 줘야 한다.” — 아이와 어른 모두에게 현대적인 교훈을 들려주는 공간을 지향했습니다." },
    ],
  },
  {
    slug: "mukkuri-hangwa", titleEn: "Mukkuri Hangwa", titleKo: "무꾸리 한과",
    category: "brand", tags: ["Branding", "Packaging", "Photography"],
    date: "2020-12", period: "2020.02 – 2021.02", color: "coral", featured: true,
    concept: "Amass a Mass of Sweet Fortune — 점괘를 품은 한과로 즐기는, 가벼운 무꾸리.",
    role: ["Brand Strategy", "Brand Experience", "Package Design", "Photography"],
    tools: ["Illustrator", "Photoshop", "Lightroom"],
    client: "SADI 졸업전시 · Brand Development Studio", year: "2020–2021",
    thumb: "https://www.sadi.net/ge/s4d1/img/uploads/02lsh002.jpg",
    preview: "https://www.sadi.net/ge/s4d1/img/uploads/02lsh015.gif",
    hero: "https://www.sadi.net/ge/s4d1/img/uploads/02lsh001.jpg",
    gallery: [
      "https://www.sadi.net/ge/s4d1/img/uploads/02lsh002.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/02lsh003.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/02lsh004.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/02lsh005.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/02lsh006.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/02lsh007.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/02lsh008.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/02lsh009.gif",
      "https://www.sadi.net/ge/s4d1/img/uploads/02lsh010.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/02lsh011.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/02lsh012.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/02lsh013.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/02lsh014.gif",
      "https://www.sadi.net/ge/s4d1/img/uploads/02lsh015.gif"
    ],
    overview: [
      "‘무꾸리’는 ‘무당에게 길흉을 알아보다’라는 뜻의 우리말로, 일종의 상담이자 복을 내려주는 의식이었습니다. 무꾸리 한과는 한과를 먹는 과정이 가벼운 무꾸리처럼 느껴지도록 디자인한 브랜드입니다. 한과를 먹다 점괘를 발견하는 경험을 통해, 저평가된 무속 문화와 한과를 MZ세대의 스낵컬처로 재조명했습니다.",
      "슬로건은 ‘Amass a mass of sweet fortune’. 한과를 먹고 점괘를 발견하며 달콤한 행운을 한가득 모으는 경험을 제안합니다. 소중한 나 자신에게, 그리고 가족과 친구에게 달콤한 행운을 선물하는 브랜드로 설계했습니다.",
    ],
    sections: [
      { type: "quote", text: "“Amass a mass of sweet fortune.” 한과를 먹고 점괘를 발견하며, 달콤한 행운을 한가득 모아보세요." },
    ],
  },

  /* ---------------- Product & Experience ---------------- */
  {
    slug: "petnow-app", titleEn: "Petnow — App GUI Re-Design", titleKo: "펫나우 앱 GUI 리디자인",
    category: "product", tags: ["UI/UX", "Design System"],
    date: "2025-09", period: "2022.09 – 2025", color: "lime", featured: false,
    concept: "기술에 대한 거리감을 줄이는, 직관적이고 신뢰감 있는 앱 인터페이스.",
    role: ["Product Design", "UI/UX", "Visual System"],
    tools: ["Figma", "Photoshop", "Illustrator"],
    client: "Petnow", year: "2022–2025",
    overview: [
      "비문 인식 기반 서비스의 핵심 화면을 As-is / To-be 비교를 통해 재설계했습니다. 어려운 AI 기반 서비스일수록 기술 자체보다 사용자가 느끼는 감정에 집중해야 한다는 원칙으로, 명확한 위계와 직관적인 흐름을 만들었습니다.",
      "디자인 시스템을 정비해 컴포넌트·컬러·타이포의 일관성을 확보하고, 신규 기능이 빠르게 확장될 수 있는 기반을 마련했습니다.",
    ],
  },
  {
    slug: "petnow-service", titleEn: "Petnow — Lost Pet Flyer Service", titleKo: "펫나우 실종 전단지 자동생성 서비스",
    category: "product", tags: ["Service", "UX", "System"],
    date: "2025-08", period: "2023 – 2025", color: "mint", featured: false,
    concept: "실종 신고 즉시 SNS·인쇄용 전단지를 자동 생성하는 신규 서비스 기획.",
    role: ["Service Planning", "UX Design", "Visual System"],
    tools: ["Figma", "Illustrator", "Photoshop"],
    client: "Petnow", year: "2023–2025",
    overview: [
      "보호자가 앱에서 실종 신고를 하면 SNS 공유용(인스타·카톡·당근)과 인쇄용(A4·A3) 전단지를 즉시 자동 생성하는 서비스를 기획·디자인했습니다. 반려동물 사진이 가장 먼저 보이도록 배치하고, 핵심 정보는 굵은 타이포와 고대비 컬러로, 인쇄 시에도 색과 해상도가 유지되도록 최적화했습니다.",
      "주변에 빠르게 알릴 수 있는 편의성을 제공해 실종 동물의 조기 발견 확률을 높였습니다.",
    ],
  },
  {
    slug: "chaegeun", titleEn: "Chaegeun", titleKo: "채근채근",
    category: "product", tags: ["Service", "UX", "Branding"],
    date: "2021-02", period: "2020.02 – 2021.02", color: "lime", featured: true,
    concept: "채식 라이프스타일, 차근차근 해볼까요 — 지속 가능한 지구를 위한 채소 구독 서비스.",
    role: ["Service Design", "UX/UI", "Brand Identity"],
    tools: ["Figma", "Illustrator", "Photoshop", "After Effects"],
    client: "SADI 졸업전시 · GUI Design Studio", year: "2020–2021",
    thumb: "https://www.sadi.net/ge/s4d1/img/uploads/01lsh001.jpg",
    preview: "https://www.sadi.net/ge/s4d1/img/uploads/01lsh019.gif",
    previewVideo: "https://www.sadi.net/ge/s4d1/img/uploads/09lsh010.mp4",
    hero: "https://www.sadi.net/ge/s4d1/img/uploads/01lsh001.jpg",
    gallery: [
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh002.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh003.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh004.gif",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh005.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh006.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh007.gif",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh008.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh009.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh010.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh011.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh012.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh013.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh014.mp4",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh015.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh016.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh017.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh018.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh019.gif",
      "https://www.sadi.net/ge/s4d1/img/uploads/01lsh020.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/09lsh001.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/09lsh002.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/09lsh003.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/09lsh004.gif",
      "https://www.sadi.net/ge/s4d1/img/uploads/09lsh005.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/09lsh006.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/09lsh007.png",
      "https://www.sadi.net/ge/s4d1/img/uploads/09lsh008.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/09lsh009.jpg",
      "https://www.sadi.net/ge/s4d1/img/uploads/09lsh010.mp4"
    ],
    overview: [
      "‘채근채근’은 UN의 15번째 지속가능발전목표 ‘Life on Land(육상 생태계 보호)’에서 출발한 채식 라이프스타일 서비스입니다. 지난 50년간 세계 인구는 약 2배 늘었지만 고기 생산량은 네 배 이상 증가했고, UN 식량농업기구는 2050년 연간 고기 생산량이 4억 5,500만 톤에 이를 것으로 전망합니다. 고기 생산이 부르는 땅·물 소비와 온실가스가 지구 생태계를 위협하는 지금, ‘우리는 동물성 음식에 너무 길들여진 게 아닐까?’라는 질문에서 시작했습니다.",
      "어렵게 느껴지던 채소를 미션을 통해 차근차근 경험하고, 기록하고, 변화하게 하는 구독 서비스로 설계했습니다. 채소 소비를 늘리고 자연히 육류 소비를 줄여, 일상 속에서 지속 가능한 변화를 만드는 것을 목표로 합니다.",
    ],
    sections: [
      { type: "quote", text: "채식 라이프스타일, 차근차근 해볼까요." },
    ],
  },

  /* ---------------- Creative Experiments ---------------- */
  {
    slug: "idea", titleEn: "IDEÁ", titleKo: "IDEÁ",
    category: "experiments", tags: ["AI", "Branding", "Packaging"],
    date: "2025-05", period: "2025.05", color: "navy", featured: false,
    concept: "‘Narcissus’ — 자기 도취와 현실 왜곡을 테마로 한 4인조 가상 보이그룹.",
    role: ["Art Direction", "Album Package Design", "Social Content"],
    tools: ["Midjourney", "Runway", "Stable Diffusion", "ChatGPT", "Claude", "Photoshop", "Illustrator"],
    client: "Portfolio project", year: "2025",
    overview: [
      "그리스·로마 신화에서 영감을 받은 첫 미니앨범 Narcissus는 일렉트로팝·신스팝·얼터너티브 R&B의 몽환적이고 실험적인 무드를 비주얼로 풀어낸 4인조 보이그룹 프로젝트입니다. 흐릿한 빛과 강한 그림자가 교차하는 미장센, 클래식하면서 비현실적인 요소가 어우러진 디자인이 특징입니다.",
      "가상 앨범 패키지·굿즈·디지털 콘텐츠까지 IDEÁ의 독창적 아이덴티티를 다양한 형태로 확장했습니다.",
    ],
  },
  {
    slug: "salay-moon", titleEn: "Salay Moon", titleKo: "샐러리문",
    category: "experiments", tags: ["AI", "Editorial", "IP"],
    date: "2024-11", period: "2024.09 – 2024.11 (보드게임 2026 예정)", color: "pink", featured: false,
    concept: "‘샐러리맨 + 세일러문’ — 직장생활의 현실을 마법소녀 세계관으로 푼 인스타툰.",
    role: ["Universe Planning", "Brand Design", "Insta-toon Production"],
    tools: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Midjourney", "Runway", "ChatGPT", "Figma"],
    client: "Portfolio project", year: "2024",
    overview: [
      "생성형 AI로 제작한 인스타툰 시리즈로, 직장 생활의 현실을 마법소녀 세계관과 결합해 유머러스하게 풀어냈습니다. 주인공 ‘문대리’가 회사에서 겪는 현실적 상황을 마법소녀적 시각으로 표현해 직장인의 공감과 재미를 동시에 선사합니다.",
      "2026년 텀블벅 크라우드펀딩을 통해 보드게임 제작·출시를 계획하고 있습니다.",
    ],
  },
  {
    slug: "piper", titleEn: "PIPER", titleKo: "PIPER: The Melody of Departure",
    category: "experiments", tags: ["AI", "Branding", "Packaging"],
    date: "2024-12", period: "2024", color: "lilac", featured: false,
    concept: "감정을 연주하는 AI 아티스트 — ‘피리 부는 사나이’의 현대적 재해석.",
    role: ["Worldbuilding", "Art Direction", "Album Package Design"],
    tools: ["Midjourney", "Stable Diffusion", "Photoshop", "Illustrator", "Premiere Pro", "After Effects"],
    client: "Portfolio project", year: "2024",
    overview: [
      "‘AI로 얼마나 정교하고 일관된 정체성을 구축할 수 있을까’라는 질문에서 출발한 가상 K-POP 아티스트 프로젝트입니다. 인간의 감정을 음악으로 감지해 시각적 세계로 번역하는 아티스트 ‘PIPER’를 설계하고, 빈티지 동화책 미학으로 세계관을 구현했습니다.",
      "두 개의 앨범으로 세계관을 확장했습니다. 1집 ‘The Melody of Departure’는 ‘모든 이야기가 모이는 도서관’의 동화 서사를, 2집 ‘Unbound’는 한국 전래동화 별주부전에서 영감을 받아 가스라이팅을 이겨내고 자유를 찾는 락 콘셉트를 담았습니다. Midjourney·Stable Diffusion으로 콘셉트가 달라져도 인물의 정체성이 유지되도록 설계했습니다.",
    ],
    sections: [
      { type: "chapter", index: "01", title: "The Library of All — 모든 이야기가 모이는 도서관", body: "모든 사람의 이야기가 이 도서관에 있었지만, 그녀의 이야기를 담은 책만은 비어 있었다." },
      { type: "chapter", index: "02", title: "The Red Path — 붉은 길", body: "“숲에서 이상한 소리를 들었어요.” 두려움에 떠는 이에게 PIPER가 이야기를 건넨다." },
      { type: "chapter", index: "03", title: "Dreams in the Dust — 먼지 속의 꿈", body: "“화려한 드레스가 꼭 필요하진 않지만, 조금 더 멋진 모습으로 갈 수 있도록 도와줄게.”" },
      { type: "chapter", index: "04", title: "The Melody of Departure — 떠나는 멜로디", body: "“이 노래의 제목은 ‘피리 부는 사람’일 수도 있지만, 나는 그 대신 ‘PIPER’라고 부를게.”" },
      { type: "quote", text: "비주얼 스토리텔링 북(145×195, 72p) · CD-R · 폴디드 포스터(A3) · 랜덤 포토카드 — 이야기와 비주얼을 결합한 물성으로 물리적 경험을 제공." },
    ],
  },
  {
    slug: "saju", titleEn: "SAJU — AI Fortune Teller", titleKo: "SAJU",
    category: "experiments", tags: ["AI", "Interaction", "GPT"],
    date: "2024-09", period: "2024.09 – (2025 예정)", color: "coral", featured: false,
    concept: "한국 전통 명리학을 학습한 대화형 AI 운세 챗봇.",
    role: ["Art Direction", "GPT System Design", "UX (2인 협업, 50%)"],
    tools: ["ChatGPT", "Midjourney", "Runway", "Stable Diffusion", "Photoshop", "Illustrator"],
    client: "Portfolio project (collab)", year: "2024–2025",
    overview: [
      "한국의 전통 운세 문화인 사주(四柱)를 생성형 AI와 결합한 인터랙티브 콘텐츠입니다. 이름·생년월일·태어난 시각 기반의 명리학 원리를 GPT에 학습시켜 대화형 상담 챗봇으로 구현했습니다.",
      "단순 정보 제공을 넘어 사용자의 고민을 함께 나누고 위로하는 정서적 접점을 설계했습니다. 예를 들어 ‘불의 기운이 강한 사람’에게는 에너지 넘치는 색과 리듬의 인터페이스를 제공합니다.",
    ],
  },
  {
    slug: "hateful-dream", titleEn: "Hateful Dream", titleKo: "싫은 꿈",
    category: "experiments", tags: ["AI", "Video", "Film"],
    date: "2024-09", period: "2024.09", color: "navy", featured: false,
    concept: "“이야기가 없어도 감정은 끝까지 간다” — 감정만으로 끌고 가는 AI 단편.",
    role: ["Scenario & Storyboard", "Video Production", "Visual Direction"],
    tools: ["Midjourney", "Runway", "Stable Diffusion", "Premiere Pro", "After Effects"],
    client: "Runway Gen-48 3rd Edition", year: "2024",
    link: { url: "https://youtu.be/Kg4L_AF3dmo", label: "Watch film" },
    overview: [
      "“좋은 꿈도 나쁜 꿈도 아닌, 그저 싫은 꿈이었다”는 일기 구절에서 출발한 48시간 제작 단편입니다. AI의 할루시네이션과 불확실성을 감정의 재료로 활용해, 의도적으로 뜬금없는 프롬프트와 블렌딩으로 카오스 값을 높이고 예측 불가능한 결과를 받아들였습니다.",
      "실사 같은 초반부에서 초현실적 애니메이션 후반부로 이어지는 구조로 감정의 리듬을 설계했고, 전 세계 3,500팀 중 상위 30팀(파이널리스트)에 선정됐습니다.",
    ],
  },
  {
    slug: "joseon-hats", titleEn: "Joseon, The Nation of Hats", titleKo: "조선, 모자의 나라",
    category: "experiments", tags: ["Art Book", "Editorial", "Typography"],
    date: "2020-04", period: "2019 – 2020", color: "cream", featured: false,
    concept: "‘모자의 나라’ 조선 — 잊혀가는 것들의 기호성(記號)을 다룬 두 권이자 한 권인 아트북.",
    role: ["Art Direction", "Editorial Design", "Illustration"],
    tools: ["InDesign", "Photoshop", "Illustrator"],
    client: "독립출판 (Self-published)", year: "2020",
    link: { url: "https://www.behance.net/gallery/94603903/-Joseon-The-Nation-of-Hats", label: "Behance에서 보기" },
    thumb: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/818a3694603903.5e831badc8fa7.jpg",
    preview: "https://mir-s3-cdn-cf.behance.net/project_modules/2800/8291de94603903.5e8346de093dc.gif",
    hero: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/818a3694603903.5e831badc8fa7.jpg",
    gallery: [],
    overview: [
      "길에서 우연히 마주친 불상 한 점에서 출발한 아트북입니다. 불상이 쓴 화관이 그 정체(관세음보살)를 알려주듯, 조선에서 모자는 착용자의 신분과 장소, 상황까지 읽게 하는 ‘기호’였습니다.",
      "‘모자의 나라’ 조선의 모자 문화와, 지금은 기술에 밀려 사라져가는 텍스트 이모티콘을 나란히 엮어 ‘잊혀가는 것들의 기호성(記號)’을 이야기합니다. 두 권이 따로이면서 동시에 함께 읽히는 아코디언형 제본으로 기획·글·그림·편집을 직접 맡았습니다.",
    ],
    sections: [
      { type: "images", images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/2800/977af894603903.5e8325d4e6557.gif",
      ]},
      { type: "text", body: [
        "어느 주말, 낯선 동네를 헤매다 허름한 미술관 앞에 놓인 불상을 발견했다. 먼지 쌓이고 흠집 난 채 덩그러니 놓인 모습이 마치 잊힌 것처럼 처량했다.",
      ]},
      { type: "images", images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/source/42808794603903.5e8325d4e5e0d.gif",
      ]},
      { type: "text", body: [
        "불상이 쓴 화관으로 그것이 관세음보살임을 알 수 있었다. 모자는 착용자의 신분이자 정체성을 나타내는 기호다. ‘모자의 나라’ 조선에서는 모자만으로 신분·장소·상황까지 읽혔다. 지금은 사라져가는 그 ‘기호성’에 대해 생각했다.",
      ]},
      { type: "images", images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/17957994603903.5e8346de071bd.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/fb7d2994603903.5e831bac0d75a.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5ee8c094603903.5e831bac0ce1a.jpg",
      ]},
      { type: "text", body: [
        "이 책은 조선의 모자뿐 아니라 지금은 쓰이지 않는 텍스트 이모티콘을 함께 다룬다. 상단의 책은 신분·상황에 따라 달리 쓰인 조선의 모자를, 하단의 책은 AR로 현대화되며 사라져가는 텍스트 이모티콘의 역사를 담았다. 따로 존재하지만 함께 읽히는 ‘두 권이자 한 권’의 책으로 기호성을 이야기한다.",
      ]},
      { type: "images", images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/98e1c594603903.5e85852351f6c.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/f6ed4494603903.5e831badc9ad0.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/9b3cfe94603903.5e831badc85bf.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/c1be5194603903.5e831badc5e78.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/2800/8291de94603903.5e8346de093dc.gif",
        "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/08a97c94603903.5e831badc40f5.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/source/4562bd94603903.5e8346de085a0.gif",
        "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/14f6cf94603903.5e831badc5760.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4237e194603903.5e831bacf1fc6.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a35bcd94603903.5e831bacf18b1.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/61343e94603903.5e831badc4aae.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/8417d794603903.5e8346de08cd2.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/bd3b5c94603903.5e8346de07f94.png",
      ]},
    ],
    credit: [
      "글·그림 : 이성희",
      "Sewing binding : 이지운",
    ],
  },
  {
    slug: "oakland-typeface", titleEn: "Typeface Poster for OAKLAND", titleKo: "Oakland 타입페이스 포스터",
    category: "experiments", tags: ["Typography", "Poster", "Editorial"],
    date: "2019-09", period: "2019.07 – 2019.09", color: "navy", featured: false,
    concept: "픽셀 서체 ‘Oakland’의 구조와 비례를 해부해 타이포그래피로 풀어낸 포스터 — Weltformat Korea 포스터전 전시작.",
    role: ["Typography", "Poster Design", "Editorial"],
    tools: ["Illustrator", "Photoshop"],
    client: "Weltformat Korea 포스터전 (전시)", year: "2019",
    previewContain: true,
    link: { url: "https://www.behance.net/gallery/94715627/Typeface-poster-for-OAKLAND", label: "Behance에서 보기" },
    thumb: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/5889fb94715627.5e85b538ce483.jpg",
    preview: "https://mir-s3-cdn-cf.behance.net/project_modules/source/eeafc394715627.5e85b538d1072.gif",
    hero: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/5889fb94715627.5e85b538ce483.jpg",
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/source/eeafc394715627.5e85b538d1072.gif",
      { src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/1ffd2b94715627.5e85b538ced7d.png", narrow: true },
      { src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/fca15894715627.5e85b538d3f42.png", narrow: true },
      { src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/e02f4294715627.5e85b538cf4aa.png", narrow: true },
      { src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/1d213294715627.5e85b538cddb3.png", narrow: true },
      { row: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/08108194715627.5e85b538ce969.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/5cdba794715627.5e85b538cfb80.png"
      ]},
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/ae6b5e94715627.5e85b538d32d9.png"
    ],
    overview: [
      "Oakland는 주자나 리코(Zuzana Licko)가 디자인한 서체로, 너비와 비례에 따라 6·8·10·15로 나뉩니다. 현재는 ‘Lo-res’라는 픽셀 폰트 패밀리에 통합되어 9 wide·12·15·22 BOLD 등으로 확장되었습니다.",
      "이 픽셀 서체의 구조와 비례를 해부하고 재구성해 타이포그래피 포스터로 풀어낸 작업입니다. Weltformat Korea 포스터전에 전시되었습니다.",
    ],
  },
  {
    slug: "heupyeonja", titleEn: "吸緣者", titleKo: "吸緣者 (흡연자)",
    category: "experiments", tags: ["Editorial", "Photography", "Interview"],
    date: "2020-03", period: "2019 – 2020.03", color: "cream", featured: true,
    concept: "혈연·지연·학연, 그리고 흡연 — 담배로 맺어지는 인연을 담은 독립 인터뷰 잡지.",
    role: ["Editorial Design", "Photography", "Interview"],
    tools: ["InDesign", "Photoshop", "Illustrator", "Lightroom"],
    client: "독립출판 (Self-published)", year: "2020",
    link: { url: "https://www.behance.net/gallery/94600667/-A-person-who-inhales-destiny", label: "Behance에서 보기" },
    video: "https://www-ccv.adobe.io/v1/player/ccv/PYFgGeJkR5R/embed?api_key=behance1&bgcolor=%23191919",
    // previewVideo: 호버 재생용 mp4 — Adobe CCV 원본은 핫링크가 막혀 사용 불가.
    //              영상을 내려받아 assets/work/heupyeonja/preview.mp4 로 올리면 아래 주석을 풀어 사용 가능.
    // previewVideo: "assets/work/heupyeonja/preview.mp4",
    thumb: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/a0095994600667.5e830a65a171e.jpg",
    hero: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/a0095994600667.5e830a65a171e.jpg",
    gallery: [],
    overview: [
      "스몰 퍼블리싱의 인기가 증가하면서 누구나 마음만 먹으면 책을 출판 할 수 있게 되었다. 상업적인 내용을 담았거나 전문적인 지식으로 만들어진 컨텐츠만이 책이 될 수 있다는 생각에서 탈피해 사사롭고 주관적인, 사적인 컨텐츠를 소규모 출판물로 제작하는 ‘독립 출판’의 시대가 도래한 것이다. 다양한 출판매체 가운데 잡지는 나에게 가장 재미있는 미디어였다. 방대한 양의 이미지와 텍스트를 함께 엮어 쉽게 읽을 수 있고, 독자들은 이를 가볍게 접할 수 있지만 의미 없는 콘텐츠가 아닌, 무게감 있는 내용을 담았다. 위와 같은 시대적 상황과 개인적인 관심이 맞물려, 흡연자들 개인의 사사로운 담배 이야기를 담은 독립잡지 《吸緣者(흡연자)》를 폈다.",
      "* 잡지의 이름인 吸緣者(흡연자)의 가운데 자 ‘연’은 煙(연기 연)이 아닌 緣(인연 연)을 썼다.",
    ],
    sections: [
      { type: "tiles", images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/e8d78d94600667.5e830a6434726.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/22274d94600667.5e830a642ee97.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4a078994600667.5e830a6434106.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5156e394600667.5e830a643064b.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0cf36e94600667.5e830a6430e34.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/97458294600667.5e830a6433949.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/7ef9b094600667.5e830a6431c65.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/c48fae94600667.5e830a642fe64.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/61df8194600667.5e830a643244e.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/49f67d94600667.5e830a642f706.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/afc0d394600667.5e830a6433181.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/d297ad94600667.5e830a6432afb.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a92e2094600667.5e830a6431473.jpg",
      ]},
      { type: "text", body: [
        "담배가 만들어내는 분위기는 분명하다. 공감각적 느낌을 불러일으킨다. 편집 과정을 지켜본 누군가는 이 잡지에서 담배 냄새가 난다고 말했다. 디자이너로서 감사하면서 동시에 재미있는 이야기라고 생각했다.",
        "‘흡연자’에는 평범한 이야기를 담았고, 그와 함께 가볍게 찍은 사진들이 배치되어 있지만 어딘가 무겁고 매캐한 공기를 마신 듯한 느낌을 받게 한다. 누군가에게는 익숙한 느낌일 것이고, 또 다른 이에게는 불쾌하거나 흥미로운 느낌일 것이다. 흡연을 하는 것은 선택의 문제지만, 이 잡지는 누구나 즐길 수 있는 볼 거리이자 마실 거리, 느낄 거리가 되기를 바란다.",
      ]},
      { type: "images", images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/3775a194600667.5e830a65a00c4.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3df32094600667.5e830a65a0ff3.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2fe2bc94600667.5e830a659d5c8.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b98c8d94600667.5e830a65a0885.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/08e7a994600667.5e830a659dc49.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/23a1e794600667.5e830a659ce5f.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e170ed94600667.5e830d2b93505.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9be38d94600667.5e830a659eb0f.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/12df7694600667.5e830a659e39f.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7a23f094600667.5e830a659f256.jpg",
      ]},
      { type: "text", title: "Model & Interview", align: "center", body: [
        "김근영 · 유병현 · 윤철민 · 이민희 · 이성희 · 이지훈",
      ]},
    ],
  },
];

/* 최신순 정렬(date 내림차순). 동일 date면 입력 순서 유지. */
function sortedProjects() {
  return [...PROJECTS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
