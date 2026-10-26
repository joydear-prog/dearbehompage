# dearbe — 회사 홈페이지 템플릿

모바일 AI 컴패니언 앱 회사의 홈페이지 샘플 템플릿입니다. **Apple Developer Program 법인 등록**과 **App Store Connect 제출**(Privacy Policy URL, Support URL)에 필요한 페이지를 갖춘 작은 정적 사이트이며, Claude Code(로컬·클라우드)에서 바로 이어서 작업할 수 있도록 디자인 스킬과 프로젝트 지침을 함께 담았습니다.

| | |
|---|---|
| 스택 | Astro 7 · Tailwind CSS v4 · GSAP ScrollTrigger · Lenis · Pretendard |
| 페이지 | 홈 · 개인정보 처리방침 · 이용약관 · 고객지원 · 404 · sitemap · robots (한국어 `/`, 영어 `/en/`) |
| 배포 | GitHub Pages (Actions), 커스텀 도메인 지원 |
| 디자인 | "편지지 위의 만년필 잉크" — [DESIGN.md](DESIGN.md) |

## 빠른 시작

```bash
npm install
npm run dev          # http://localhost:4321
```

Node 22.12 이상이 필요합니다.

## 실제 정보로 바꾸기

1. **`src/config/site.ts`** — 법인명(국문/영문), 대표, 사업자등록번호, 주소, 전화, 이메일, 개인정보 보호책임자, 시행일, 제작 웹툰. `TODO`가 붙은 값을 확인합니다.
   화면 문구는 **`src/i18n/ui.ts`**에 한국어·영어가 같은 구조로 들어 있습니다.
2. **`src/pages/privacy.astro`**, **`src/pages/en/privacy.astro`** — 수집 항목과 위탁사 표(`[클라우드 사업자명]` 등)를 실제 운영에 맞게 수정합니다. 약관·고객지원도 영어판(`src/pages/en/`)을 함께 고칩니다.
3. **`src/components/Safety.astro`**, **`src/pages/support.astro`** — 계정 삭제 경로, 신고 방법, 연령 제한이 실제 앱 동작과 같은지 확인합니다.
4. 브랜드명이 바뀌면 `site.ts`의 `brand`, `ui.ts`의 `brandName`, `public/favicon.svg`를 바꿉니다.

개인정보 처리방침과 이용약관은 **템플릿**입니다. 게시 전 법률 검토를 받으세요.

## Apple 법인 등록 체크리스트

Apple은 법인 등록 시 [법인이 소유한 도메인의 공개 웹사이트](https://developer.apple.com/programs/enroll/)를 확인합니다.

- [ ] 커스텀 도메인 연결 (github.io 주소만으로는 반려될 수 있습니다)
- [ ] 신청자 이메일이 사이트와 같은 도메인 (`hello@회사도메인`)
- [ ] 영문 법인명이 D-U-N-S 등록 정보와 정확히 일치
- [ ] 홈·푸터에 주소, 전화, 이메일이 보임 (Apple 확인 전화 대비)
- [ ] App Store Connect에 `https://도메인/privacy`, `https://도메인/support` 입력 (영문 현지화에는 `/en/privacy`, `/en/support`)

Claude Code에서 `/apple-enrollment-check`를 실행하면 남은 플레이스홀더와 요건을 자동으로 점검합니다.

## 배포 (GitHub Pages)

1. GitHub 저장소 **Settings → Pages → Source**를 **GitHub Actions**로 설정합니다.
2. `main`에 푸시하면 [deploy.yml](.github/workflows/deploy.yml)이 빌드·배포합니다. (첫 푸시 때 Pages가 꺼져 있었다면 Actions 탭에서 **Re-run**)
3. 커스텀 도메인: **Settings → Pages → Custom domain**에 도메인을 입력하고 DNS를 연결합니다. 워크플로가 도메인을 자동으로 읽어 루트 경로로 빌드합니다.

Vercel·Netlify·Cloudflare Pages를 쓰려면 저장소를 연결하고 빌드 명령 `npm run build`, 출력 폴더 `dist`로 설정하면 됩니다(환경변수 `SITE=https://도메인`).

## Claude Code로 이어서 작업하기

### 클라우드 (claude.ai/code)

저장소를 선택해 세션을 열면 `CLAUDE.md`, `.claude/skills`, `.claude/agents`, `.claude/settings.json`이 그대로 적용되고, SessionStart 훅(`scripts/cloud-setup.sh`)이 `npm ci`를 실행합니다. 플러그인은 클라우드에 설치되지 않으므로 필요한 스킬은 모두 `.claude/skills`에 포함했습니다.

예시 요청:

```
/impeccable critique 홈 히어로
/impeccable polish src/components/Services.astro
/visual-qa
/apple-enrollment-check
회사 정보를 다음 값으로 바꿔줘: ...
```

### 포함된 스킬

| 스킬 | 출처 | 라이선스 | 용도 |
|---|---|---|---|
| `impeccable` (+ agents 4종) | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) v4.7.1 | Apache-2.0 | 디자인 비평·감사·폴리시 등 23개 명령, AI 티 나는 디자인 방지 |
| `frontend-design` | Anthropic 공식 | Apache-2.0 | 새 화면의 디자인 방향 설정 |
| `ui-ux-pro-max` | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | MIT | 팔레트·폰트·UX 규칙 검색 (Python 3) |
| `visual-qa` | 이 프로젝트 | — | 빌드 → 스크린샷 → 검수 |
| `apple-enrollment-check` | 이 프로젝트 | — | Apple 등록·앱 제출 요건 점검 |

impeccable의 선택 기능(편집 후 자동 디자인 검사 훅, live 모드)은 엔진 바이너리를 내려받아 실행하므로 기본으로 켜 두지 않았습니다. 필요하면 로컬에서 `npx impeccable install --providers=claude --scope=project`로 훅을 추가할 수 있습니다. 텔레메트리는 `.claude/settings.json`의 `DO_NOT_TRACK=1`로 꺼져 있습니다.

## 스크립트

| 명령 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 |
| `npm run build` | `dist/`에 정적 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run check` | 타입 검사 |
| `npm run shot` | 미리보기 서버를 띄운 상태에서 `.shots/`에 데스크톱·모바일 스크린샷 (`-- --motion`, `-- --pages /,/support`) |
