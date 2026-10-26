---
name: visual-qa
description: 이 Astro 사이트를 빌드·실행하고 데스크톱(1440)·모바일(390) 전체 페이지 스크린샷을 찍어 눈으로 검수합니다. UI를 수정한 뒤, "스크린샷 찍어봐", "화면 확인", "모바일에서 어때" 같은 요청에 사용하세요.
---

# 시각 QA 루프

수정 → 한 번에 확인 → 발견한 문제를 묶어서 수정 → 다시 확인. 스크린샷을 수정할 때마다 찍지 말고, 한 번 볼 때 보이는 문제를 모두 고친 뒤 다시 찍습니다.

## 실행

```bash
npm run build && npm run preview      # 백그라운드로 실행 (포트 4321)
npm run shot                          # .shots/<page>-<desktop|mobile>.png
npm run shot -- --pages /,/support    # 특정 페이지만
npm run shot -- --pages /en/,/en/privacy,/en/terms,/en/support   # 영어판
npm run shot -- --motion              # 모션을 켠 상태(타이핑 중간 등)로 캡처
```

- 기본 캡처는 `prefers-reduced-motion: reduce`로 찍어 타이핑·스크롤 채움이 끝난 최종 상태를 보여줍니다.
- 브라우저는 `CHROME_PATH` → 시스템 Chrome/Chromium 순으로 찾습니다. 클라우드에서 못 찾으면 `npx playwright install chromium` 후 다시 실행합니다(네트워크 허용 필요).
- 캡처 후 Read 도구로 PNG를 열어 확인합니다. 세로로 긴 이미지는 축소되어 보이므로, 세부 확인이 필요하면 `--pages`로 나눠 찍습니다.

## 체크리스트

- 390px에서 가로 스크롤이 없고, 한글 줄바꿈이 어절 단위로 자연스러움 (`word-break: keep-all`)
- 한국어(`/`)와 영어(`/en/`) 모두 확인, KR/EN 토글이 같은 페이지의 다른 언어로 이동
- 헤더가 히어로 위에서는 흰 글씨 / 스크롤 후에는 편지지 배경
- 본문 대비 4.5:1 이상 (보조 텍스트 `text-graphite`, 어두운 배경 위 `text-white/55` 이상)
- 터치 타깃 44px 이상, 키보드 포커스 링이 보임
- 콘솔 에러 없음
