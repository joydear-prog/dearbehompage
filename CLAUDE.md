# dearbe 회사 홈페이지

모바일 AI 컴패니언 앱 회사의 공식 홈페이지. **1차 목적은 Apple Developer Program 법인 등록과 App Store Connect 제출(Privacy Policy / Support URL) 요건 통과**입니다. 볼륨은 작게, 완성도는 한국 광고 대행사 수준으로 유지합니다.

- 제품·사용자·제약: [PRODUCT.md](PRODUCT.md)
- 디자인 토큰·규칙: [DESIGN.md](DESIGN.md) — UI를 고치기 전에 반드시 읽을 것

## 명령어

```bash
npm run dev        # http://localhost:4321
npm run build      # dist/ 정적 빌드
npm run preview    # 빌드 결과 미리보기 (포트 4321)
npm run check      # astro check (타입 검사)
npm run shot       # 미리보기 서버를 띄운 상태에서 .shots/ 에 데스크톱·모바일 스크린샷
```

Node 22.12 이상 필요 (`.nvmrc`는 24). Astro는 7.3.x로 고정되어 있습니다 — 7.4부터 Node 22.23.4 이상을 요구해 클라우드 기본 Node에서 실행되지 않을 수 있으므로, 올릴 때는 `node -v`를 먼저 확인하세요.

## 구조

```
src/config/site.ts        회사·연락처·법적 고지 값 (유일한 출처, TODO 플레이스홀더 포함)
src/config/url.ts         base 경로를 반영하는 href() — 내부 링크는 항상 이걸로
src/styles/global.css     Tailwind v4 @theme 토큰 + 공통 컴포넌트 클래스
src/scripts/motion.ts     Lenis + GSAP ScrollTrigger 초기화, prefersReducedMotion
src/scripts/site.ts       헤더 톤 전환, 모바일 메뉴
src/components/           Hero · Statement · Services · Safety · Company · Contact · Header · Footer
src/pages/                index · privacy · terms · support · 404 · robots.txt
scripts/shot.mjs          Playwright 스크린샷 (시스템 Chrome 사용)
scripts/cloud-setup.sh    클라우드 세션 SessionStart 훅 (npm ci)
```

## 작업 규칙

- 회사 정보·연락처·브랜드명을 컴포넌트에 하드코딩하지 말고 `site.ts`에서 가져옵니다.
- 실제 회사 정보(법인명, 사업자번호, 주소 등)는 추측해서 채우지 않습니다. 모르면 TODO로 두고 사용자에게 묻습니다.
- 수치·후기·수상·투자·제휴 로고 등 근거 없는 증거를 만들지 않습니다.
- `Safety.astro`, `privacy.astro`, `support.astro`에 적힌 앱 동작(계정 삭제 경로, 신고, 연령 제한)은 실제 앱과 일치해야 합니다. 바꿀 때는 세 파일을 함께 맞춥니다.
- 모션은 히어로 타이핑과 statement 스크롤 채움 두 가지뿐입니다. 섹션마다 페이드업을 붙이지 않습니다.
- 카피는 해요체, 짧고 구체적으로. 제목 위 영문 대문자 라벨, 버튼 텍스트의 →, 01/02/03 번호는 쓰지 않습니다.
- UI를 바꾼 뒤에는 `visual-qa` 스킬로 데스크톱·모바일을 확인합니다.

## 프로젝트 스킬 (.claude/skills)

| 스킬 | 언제 |
|---|---|
| `impeccable` | 디자인 작업 전반. `/impeccable critique`, `audit`, `polish`, `typeset`, `layout`, `animate`, `bolder`/`quieter` 등. PRODUCT.md·DESIGN.md를 컨텍스트로 읽습니다 |
| `frontend-design` | 새 섹션·페이지의 방향을 처음 잡을 때 (Anthropic 공식) |
| `ui-ux-pro-max` | 팔레트·폰트 페어링·UX 가이드라인 검색. `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain>` |
| `visual-qa` | 빌드 → 스크린샷 → 검수 루프 |
| `apple-enrollment-check` | 회사 정보를 바꾼 뒤, 배포 전, Apple 등록 직전 점검 |

에이전트(.claude/agents): `impeccable-finish-reviewer`(마감 검수), `impeccable-documenter`(DESIGN.md 갱신) 등.

## 배포

`main`에 푸시하면 `.github/workflows/deploy.yml`이 GitHub Pages로 배포합니다. `SITE`/`BASE`는 워크플로가 Pages 설정에서 읽어 주입하므로, 커스텀 도메인을 연결하면 자동으로 루트 경로(`/`)로 빌드됩니다.
