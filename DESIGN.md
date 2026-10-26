---
name: dearbe
description: 편지지 위의 만년필 잉크 — 기억하는 AI 컴패니언의 회사 홈페이지
colors:
  ink: "#2234c8"
  ink-deep: "#0e1550"
  paper: "#f6f7fb"
  mist: "#eceef6"
  blush: "#ffd3dc"
  graphite: "#5a5f7a"
  rule: "#d9dcea"
typography:
  display:
    fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 16vw, 10.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5.2vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 3.6vw, 3.125rem)"
    fontWeight: 600
    lineHeight: 1.38
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.2vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0em"
rounded:
  bubble: "22px"
  panel: "32px"
  pill: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter-desktop: "48px"
  section-mobile: "112px"
  section-desktop: "160px"
components:
  button-pill:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    height: "48px"
    padding: "0 24px"
  bubble-me:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.bubble}"
  bubble-ai:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink-deep}"
    rounded: "{rounded.bubble}"
---

# Design System: dearbe

## Overview

**"편지지 위의 만년필 잉크."** 브랜드 이름의 'Dear'에서 출발했습니다. 사이트 전체가 한 통의 편지처럼 읽히도록 — 첫 화면은 컴패니언이 방문자에게 건네는 첫 줄("Dear you, 네 이야기, 다 기억해" / "I remember every word.")이고, 인사말과 본문이 동시에 한 글자씩 써 내려갑니다. 한국 광고 대행사 사이트의 문법(거대한 한글 타이포, 넓은 여백, 컬러 블록 섹션)을 따르되, 장식은 히어로 한 곳에만 씁니다.

## Colors

### Primary
- **ink `#2234c8`** — 로열 블루 만년필 잉크. 히어로·문의 섹션 배경, 내 말풍선, 주요 버튼.

### Neutral
- **paper `#f6f7fb`** — 편지지. 기본 배경. 크림/베이지 계열은 쓰지 않습니다.
- **mist `#eceef6`** — 편지지보다 한 톤 깊은 면 (대화 데모 패널).
- **ink-deep `#0e1550`** — 마른 잉크. 본문 텍스트, 안전 원칙 섹션과 푸터 배경. 순수 검정이나 #111 대신 사용.
- **graphite `#5a5f7a`** — 보조 텍스트 (paper 위 대비 6:1 이상).
- **rule `#d9dcea`** — 구분선, 표 테두리.

### Accent
- **blush `#ffd3dc`** — 컴패니언의 온기. 로고 점, 상태 점, 아바타에만 소량. 면적이 큰 곳에 쓰지 않습니다.

### Named Rules
- **One Ink Rule** — 강조색은 ink 하나. 그라디언트, 네온, 두 번째 원색 금지.
- **Section Rhythm** — ink → paper → paper → ink-deep → paper → ink → ink-deep(푸터). 같은 배경 섹션이 3개 이상 연속되지 않게.

## Typography

Pretendard Variable 단일 서체. 개성은 크기와 자간(강한 음수 트래킹)으로 냅니다.

### Hierarchy
- **display** — 히어로 전용. 굵기 700, 행간 1.02. 밑줄·괘선 같은 장식 없이 글자만.
- **headline** — 섹션 제목. 짧은 문장형 카피 ("말하지 않아도 이어지는 대화").
- **statement** — 회사 소개 문단. 스크롤에 따라 잉크가 번지듯 진해짐.
- **title** — 서비스 항목, 문서 h2.
- **body** — 17px, 행간 1.7, `word-break: keep-all`.

### Named Rules
- 한 제목 안에서 단어 하나만 색/기울임 강조하지 않습니다.
- 섹션 제목 위에 영문 대문자 아이브로우 라벨을 달지 않습니다.
- 한 줄 길이는 34rem(본문) / 21em(statement) 이하.

## Layout

12컬럼 그리드, 최대 폭 90rem. 왼쪽 정렬이 기본 — 제목은 왼쪽 5컬럼, 내용은 7번째 컬럼부터 6컬럼. 모바일 거터 20px, 데스크톱 48px. 섹션 상하 여백 112px(모바일) / 160px(데스크톱).

## Elevation & Depth

그림자를 쓰지 않습니다. 깊이는 배경색 단계(paper → mist → white)와 1px `rule` 외곽선(box-shadow 0 0 0 1px)으로만 표현합니다. 헤더만 스크롤 후 `backdrop-blur`.

## Shapes

- 말풍선 22px (꼬리 쪽 모서리는 6px), 데모 패널 32px, 버튼 pill.
- 문서·표·목록은 각진 형태 + 가로 구분선.

## Components

### Buttons
pill 형태. 채움(ink 배경) 또는 외곽선(border-current). 텍스트에 화살표(→)를 붙이지 않습니다.

### Chat bubbles
`.bubble-me`(ink, 오른쪽), `.bubble-ai`(white + rule 외곽선, 왼쪽). 서비스 섹션의 기억 기능 데모에 사용.

### Info list
`<dl>` + 가로 구분선. 회사 정보, 문서 표에 공통.

## Do's and Don'ts

- **Do** 모션은 히어로 타이핑 + statement 스크롤 채움 두 가지만. 새 모션을 추가하기 전에 둘 중 하나를 빼는 것부터 고려합니다.
- **Do** `prefers-reduced-motion`이면 모든 연출을 즉시 최종 상태로.
- **Don't** 섹션마다 페이드업 등장, 카드 hover 들어올림, 그라디언트 워시.
- **Don't** 01/02/03 번호 매기기 (순서가 있는 내용이 아니면).
- **Don't** 근거 없는 수치·후기·로고 월 — PRODUCT.md "Evidence on Hand" 참고.
