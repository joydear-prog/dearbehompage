# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 (static output) + Tailwind CSS v4 + GSAP/ScrollTrigger + Lenis. Pretendard Variable 폰트(npm 번들). GitHub Pages 배포.

## Users

1. **Apple 개발자 프로그램 심사 담당자** — 법인 등록 시 회사가 실재하는지, 웹사이트가 법인 소유 도메인에서 실제로 운영되는지, 회사 정보·연락처가 공개돼 있는지 확인합니다. 영어 사용자일 수 있으므로 영문 법인명·영문 주소가 함께 보여야 합니다.
2. **App Store 심사·이용자** — App Store Connect에 등록한 Privacy Policy URL(`/privacy`)과 Support URL(`/support`)로 들어와 개인정보 처리 방식과 문의 방법을 확인합니다.
3. **잠재 이용자·파트너** — 서비스가 무엇인지 빠르게 이해하고 연락처를 찾습니다.

## Product Purpose

모바일 AI 챗봇 기반 컴패니언 앱(이름 가칭 '디어비 / dearbe')을 운영하는 회사의 공식 홈페이지. 실제 마케팅 사이트가 아니라 **Apple 개발자 콘솔 법인 등록과 앱 제출 요건을 통과하는 것**이 1차 목적입니다. 성공 기준: 심사 담당자가 1분 안에 회사·서비스·연락처·법적 고지를 모두 찾을 수 있음.

## Positioning

대화를 '기억'하는 AI 컴패니언. 지난 대화의 맥락(약속, 이름, 중요한 날)을 기억해 필요한 순간에 먼저 말을 건넵니다. 'Dear, …'로 시작하는 편지처럼 한 사람에게 쓰는 대화라는 정체성.

## Operating Context

- Apple Developer Program 법인 등록: D-U-N-S 번호, 법인 소유 도메인의 공개 웹사이트, 같은 도메인의 업무용 이메일 필요.
- App Store Connect: Privacy Policy URL, Support URL 필수. AI 대화·UGC 앱은 신고/차단/필터링(가이드라인 1.2), 앱 내 계정 삭제(5.1.1(v)) 안내가 실제 앱 동작과 일치해야 함.
- 한국 법인: 사업자등록번호, 대표자, 주소, 개인정보 보호책임자 표기.

## Capabilities and Constraints

- 페이지: 홈(`/`), 개인정보 처리방침(`/privacy`), 이용약관(`/terms`), 고객지원(`/support`), 404. 영어판은 같은 경로에 `/en/` 접두사 (헤더 KR/EN 토글).
- 회사·연락처·법적 고지 값은 `src/config/site.ts`, 화면 문구는 `src/i18n/ui.ts`(ko/en)에서 관리. 전화번호·시행일 등 일부는 TODO.
- 앱은 출시 전(App Store 출시 준비 중). 다운로드 링크·스토어 배지 없음.
- 볼륨은 작게 유지 — 블로그, 채용, 뉴스 등은 범위 밖.

## Brand Commitments

- 이름: 디어비 / dearbe — 법인명 디어비 주식회사(DEARBE Corp.)와 동일.
- 보이스: 친근한 존댓말(해요체), 짧은 문장, 과장·마케팅 수사 없음.
- 시그니처: 로열 블루 잉크 + 편지지, 히어로의 "Dear you, 네 이야기, 다 기억해" 타이핑 (컴패니언의 반말 한마디). 영어 "I remember every word."
- 영어 카피는 직역하지 않고 영어권 사용자에게 자연스럽게 다시 쓴다. 과장된 마케팅 어휘(unlock, seamless, elevate 등) 금지.

## Evidence on Hand

- 회사 정보: 사업자등록증(2026.10.20 발급) 기준 — 디어비 주식회사(DEARBE Corp.), 대표 배준석, 개업 2020.11, 마포구 마포대로 92. 업종: 소프트웨어 개발·제조, 만화 출판업. 값은 `src/config/site.ts`.
- 이력: 2020년 웹툰 제작사(구 로드비웹툰)로 시작. 제작 웹툰 9편과 국내 서비스 플랫폼 목록이 `site.works`에 있음 (작품별 현황 기준).
- 도메인 `dearbecorp.com` (Squarespace 등록, Google Workspace 메일 운영 중).
- 실제 앱 사용자 수, 투자, 수상, 언론 보도, 후기 **없음**. 지어내지 말 것. 계약 조건·금액 등 내부 정보는 사이트에 쓰지 않음.
- 앱 스크린샷 없음 — 서비스 섹션의 대화 데모는 HTML로 구성한 예시 대화.

## Product Principles

1. 심사 담당자가 찾는 정보(회사·연락처·법적 고지)는 장식보다 우선한다.
2. 사이트에 적힌 약속(안전 원칙, 계정 삭제 경로)은 실제 앱 동작과 일치해야 한다.
3. 하나의 기억에 남는 순간(히어로)에만 연출을 쓰고 나머지는 조용하게.
4. 볼륨보다 완성도 — 섹션을 늘리기 전에 있는 섹션을 다듬는다.

## Accessibility & Inclusion

WCAG 2.2 AA 대비, 키보드 탐색, `prefers-reduced-motion` 존중, 스크린리더용 원문 텍스트(타이핑 연출은 `aria-hidden`, 원문은 `sr-only`).
