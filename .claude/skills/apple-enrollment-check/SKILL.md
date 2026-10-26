---
name: apple-enrollment-check
description: 애플 개발자 프로그램(법인) 등록과 App Store Connect 제출 전에 이 홈페이지가 요건을 충족하는지 점검합니다. "애플 심사 준비", "배포 전 점검", "플레이스홀더 남았는지", "Apple 등록 체크" 같은 요청이나 회사 정보를 바꾼 직후에 사용하세요.
---

# Apple 법인 등록·앱 제출 대비 점검

이 사이트의 목적은 **Apple Developer Program 법인 등록 심사**와 **App Store Connect의 Privacy Policy / Support URL** 요건을 통과하는 것입니다. 아래 순서대로 점검하고, 마지막에 표 형식의 보고서를 남깁니다. 고칠 수 있는 것은 고치되, 실제 회사 정보는 추측해서 채우지 말고 사용자에게 물어봅니다.

## 1. 남은 플레이스홀더 찾기

```bash
grep -rnE "TODO|홍길동|000-00-00000|0000-0000|테헤란로 000|\[[^]]*(사업자|국가|명)\]|example\.com" src/
```

- `src/config/site.ts`의 `TODO` 주석이 붙은 값이 전부 실제 값으로 바뀌었는지 확인합니다.
- `src/pages/privacy.astro`와 `src/pages/en/privacy.astro`의 위탁사 표(`[클라우드 사업자명]`/`[Cloud provider]`, `[국가]`/`[Country]` 등)도 확인합니다.
- 한국어와 영어판의 회사 정보·약속(계정 삭제 경로 등)이 서로 같은지 확인합니다 (`src/i18n/ui.ts`, `src/pages/en/*`).

## 2. Apple 법인 등록 요건 (developer.apple.com/programs/enroll)

| 항목 | 확인 방법 |
|---|---|
| 공개된 실제 웹사이트 | 배포 URL이 HTTPS로 열리고 "준비 중"·도메인 파킹 페이지가 아님 |
| 법인 소유 도메인 | `astro.config.mjs`의 `site`가 커스텀 도메인인지 (github.io 주소만으로는 반려될 수 있음) |
| 이메일 도메인 일치 | `company.email`의 도메인 = 사이트 도메인 = 등록 신청자 업무 메일 도메인 |
| 법인명 일치 | `company.legalNameEn`이 D-U-N-S 등록 영문 법인명과 글자 하나까지 동일 |
| 회사 정보 노출 | 홈 `#company` 섹션과 푸터에 주소·전화·이메일·운영시간이 보임 (Apple 확인 전화 대비) |
| 서비스 설명 | 앱이 무엇을 하는지 홈에서 명확히 이해됨 |

## 3. App Store Connect 요건

| 항목 | 경로 |
|---|---|
| Privacy Policy URL | `/privacy` (영문 `/en/privacy`) — 수집 항목, 대화 데이터 처리, 삭제 방법, 연락처 포함 |
| Support URL | `/support` — 실제로 답장받을 수 있는 연락 수단 포함 |
| 계정 삭제 안내 (가이드라인 5.1.1(v)) | `/support` FAQ, `/privacy` 8조의 메뉴 경로가 실제 앱과 일치 |
| UGC·AI 대화 안전장치 (가이드라인 1.2) | 신고·차단·필터링 안내가 실제 앱 기능과 일치 (`Safety.astro`) |

## 4. 빌드·링크 점검

```bash
npm run build
npm run preview &   # 다른 셸에서
npm run shot
```

- 모든 페이지가 200으로 응답하는지, 푸터의 개인정보 처리방침·이용약관·고객지원 링크가 동작하는지 확인합니다.
- `.shots/`의 스크린샷에서 회사 정보가 잘리거나 겹치지 않는지 봅니다.

## 보고 형식

| 구분 | 항목 | 상태 (통과/수정함/사용자 확인 필요) | 비고 |
|---|---|---|---|

"사용자 확인 필요" 항목은 무엇을 받아야 하는지 구체적으로 적습니다 (예: "D-U-N-S 영문 법인명").
