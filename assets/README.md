# 이미지 넣는 법 (assets 가이드)

파일 **이름만 규칙대로** 맞춰서 해당 폴더에 넣으면, 코드를 안 고쳐도 사이트에 **자동으로 표시**됩니다.
(파일이 없으면 지금처럼 회색 플레이스홀더가 보여요.)

---

## 1. 작업 이미지 — `assets/work/<프로젝트>/`

각 프로젝트 폴더(이미 16개 만들어져 있어요)에 아래 이름으로 넣으세요.

| 파일명 | 쓰이는 곳 | 권장 사이즈/비율 |
|---|---|---|
| `thumb.jpg` | Work·홈 썸네일(평소 보이는 정지 이미지) | 정사각형 1:1, 1000×1000px |
| `preview.gif` | 썸네일에 **마우스 올렸을 때** 재생되는 움짤 | 정사각형 1:1, 가볍게(≤3–5MB) |
| `hero.jpg` | 상세페이지 맨 위 **풀폭 히어로 이미지** | 가로로 긴 16:9 정도, 2000×1126px |
| `01.jpg`, `02.jpg`, `03.jpg` | 상세페이지 하단 **내용 이미지(갤러리)** | 자유, 가로 1600px+ 권장 |

예시 — PIPER 프로젝트:
```
assets/work/piper/thumb.jpg
assets/work/piper/preview.gif
assets/work/piper/hero.jpg
assets/work/piper/01.jpg
assets/work/piper/02.jpg
assets/work/piper/03.jpg
```

폴더 이름(=프로젝트 식별자)은 다음과 같아요:
petnow-brand · max-nose-id · is-sue-missing · dinosaur-universe · galaxy-studio · toy-kingdom · mukkuri-hangwa · petnow-app · petnow-service · chaegeun · idea · salay-moon · piper · saju · hateful-dream · heupyeonja

> 파일 확장자는 `.jpg` 기준이에요. `.png`를 쓰고 싶으면 알려주세요(코드에서 같이 잡아줄게요). `preview`는 움짤이라 `.gif`.

---

## 2. 홈 히어로 — `assets/hero/`
- `hero.gif` (또는 추후 `hero.mp4`) 를 넣으면 홈 첫 화면 큰 영역에 자동 재생됩니다. (1280×880 비율 권장)

## 3. 파비콘(브라우저 탭 아이콘) — `assets/favicon/`
- `favicon.svg` 는 기본으로 만들어 뒀어요(검정 배경 + 라임 o). 바꾸고 싶으면 이 파일을 교체.
- 아이폰 홈화면용으로 `apple-touch-icon.png`(180×180)도 넣으면 더 좋아요.

## 4. 링크 공유 미리보기(OG 이미지) — `assets/og/`
- `og-image.png` (**1200×630px**) 를 넣으면 카톡·트위터 등에 링크 붙일 때 그 이미지가 떠요.
- 보통 사이트 대표 이미지 + 이름/직함을 넣어 만듭니다.

---

### 이미지 준비 팁
- 용량은 가볍게: 사진은 1600~2000px, JPG 품질 70~80%면 충분해요. (무거우면 사이트가 느려져요)
- 움짤(preview.gif)은 3~6초 루프, 가능하면 5MB 이하로.
- 다 넣은 뒤엔 바뀐 파일들을 GitHub에 다시 업로드하면 반영됩니다.
