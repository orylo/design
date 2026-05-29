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
    date: "2023-06", period: "2022 – 2023", color: "mint", featured: true,
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
    date: "2025-04", period: "2025", color: "coral", featured: true,
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
    date: "2022-09", period: "2021 – 2022", color: "navy", featured: true,
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
    category: "brand", tags: ["Branding", "Editorial", "Art Direction"],
    date: "2021-05", period: "2021.01 – 2021.07", color: "pink", featured: false,
    concept: "고전 동화를 재해석해 긍정의 메시지를 전한 토이킹덤 SNS 세계관.",
    role: ["Branded Content Design", "Art Direction", "Set Styling", "Photography"],
    tools: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects"],
    client: "이마트 토이킹덤 (스튜디오 좋)", year: "2021",
    overview: [
      "단순 제품 소개에서 벗어나 장난감을 중심으로 한 감성적 서사와 시각적 유희를 결합해 브랜드 세계관을 확장했습니다. 연극 무대 같은 구성과 고전 동화 재해석으로 따뜻하고 유쾌한 브랜드 이미지를 콘텐츠 전반에 녹였습니다.",
      "예를 들어 ‘인어공주’ 시리즈는 희생적 결말 대신 새로운 사랑을 택하는 결말로 전환해, 보호자와 아이 모두에게 긍정적 메시지를 전했습니다.",
    ],
  },
  {
    slug: "mukkuri-hangwa", titleEn: "Mukkuri Hangwa", titleKo: "Mukkuri Hangwa",
    category: "brand", tags: ["Branding", "Packaging", "Photography"],
    date: "2020-12", period: "2020.02 – 2021.02", color: "coral", featured: false,
    concept: "가장 한국적인 포춘쿠키 — 무속신앙과 한과를 스낵컬처로 재조명한 브랜드.",
    role: ["Brand Strategy", "Brand Experience", "Package Design"],
    tools: ["Illustrator", "Photoshop", "Lightroom"],
    client: "Portfolio project", year: "2020",
    overview: [
      "저평가된 문화유산인 무속 신앙과 한과의 가치를, MZ세대 취향에 맞춰 가볍고 친근한 스낵컬처로 재해석한 브랜딩 프로젝트입니다. 두 동떨어진 키워드에서 ‘현대화된 유사 대상에 밀려 평가절하되었다’는 공통점을 찾아 새로운 맥락을 부여했습니다.",
    ],
  },

  /* ---------------- Product & Experience ---------------- */
  {
    slug: "petnow-app", titleEn: "Petnow — App GUI Re-Design", titleKo: "펫나우 앱 GUI 리디자인",
    category: "product", tags: ["UI/UX", "Design System"],
    date: "2025-09", period: "2022.09 – 2025", color: "lime", featured: true,
    concept: "기술에 대한 거리감을 줄이는, 직관적이고 신뢰감 있는 앱 인터페이스.",
    role: ["Product Design", "UI/UX", "Visual System"],
    tools: ["Figma", "Photoshop", "Illustrator"],
    client: "Petnow", year: "2022–2025",
    overview: [
      "비문 인식 기반 서비스의 핵심 화면을 As-is / To-be 비교를 통해 재설계했습니다. 어려운 AI 기반 서비스일수록 기술 자체보다 사용자가 느끼는 감정에 집중해야 한다는 원칙으로, 명확한 위계와 직관적 흐름을 만들었습니다.",
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
      "보호자가 앱에서 실종 신고를 하면 SNS 공유용(인스타/카톡/당근)과 인쇄용(A4·A3) 전단지를 즉시 자동 생성하는 서비스를 기획·디자인했습니다. 반려동물 사진이 가장 먼저 보이도록 배치하고, 핵심 정보는 굵은 타이포·고대비 컬러로, 인쇄 시에도 색·해상도가 유지되도록 최적화했습니다.",
      "주변에 빠르게 알릴 수 있는 편의성을 제공해 실종 동물 조기 발견 확률을 높였습니다.",
    ],
  },
  {
    slug: "chaegeun", titleEn: "Chaegeun — Veggie Subscription", titleKo: "채근채근",
    category: "product", tags: ["Service", "UX", "Editorial"],
    date: "2021-02", period: "2020.02 – 2021.02", color: "lime", featured: false,
    concept: "지금 가장 맛있는 채소를 구독하는, 채식 라이프스타일 플랫폼.",
    role: ["Branding", "Service Design", "UX Design"],
    tools: ["Illustrator", "InDesign", "Photoshop", "Figma", "Protopie", "Premiere Pro"],
    client: "Portfolio project", year: "2020–2021",
    overview: [
      "‘채근채근’은 미션을 통해 채식을 경험하고, 기록하고, 변화하게 하는 구독 서비스입니다. 어렵게 느껴지던 채소를 차근차근 경험하며 채소 소비를 늘리고 자연히 육류 소비를 줄이도록 설계해, 환경에 긍정적 변화를 꾀합니다.",
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
    date: "2024-12", period: "2024", color: "lilac", featured: true,
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
    slug: "heupyeonja", titleEn: "吸緣者", titleKo: "吸緣者 (흡연자)",
    category: "experiments", tags: ["Editorial", "Photography", "Typography"],
    date: "2019-09", period: "2019.07 – 2019.09", color: "cream", featured: false,
    concept: "“인연엔 혈연·지연·학연, 그리고 흡연이 있다” — 사진 인터뷰 매거진.",
    role: ["Photography", "Concept Strategy", "Editorial Design"],
    tools: ["Photoshop", "Illustrator", "Lightroom", "InDesign"],
    client: "Portfolio project", year: "2019",
    overview: [
      "흡연자들과 함께 담배 피우는 장면을 사진으로 찍고 나눈 대화를 기록해 매거진으로 엮은 프로젝트입니다. 담배가 새로운 인연과 관계를 만드는 매개체가 되기도 한다는 점에 착안해, ‘흡연자’의 煙(연기 연)을 緣(인연 연)으로 바꿔 썼습니다.",
    ],
  },
];

/* 최신순 정렬(date 내림차순). 동일 date면 입력 순서 유지. */
function sortedProjects() {
  return [...PROJECTS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
