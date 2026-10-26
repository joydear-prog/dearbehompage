/**
 * 사이트 전역 정보 — 회사·연락처·법적 고지 같은 "사실"은 모두 여기서만 수정합니다.
 * 화면 문구(카피)는 언어별로 src/i18n/ui.ts 에 있습니다.
 * 출처: 사업자등록증(2026.10.20 마포세무서 발급), 작품별 현황, 회사소개서.
 *
 * ⚠️ 애플 개발자 프로그램(법인) 심사 전 확인
 *    - legalNameEn·addressEn 은 D-U-N-S 에 등록된 영문 표기와 같아야 합니다.
 *    - 값이 빈 문자열('')인 항목은 사이트에 표시되지 않습니다.
 *    - 수정 후 `/apple-enrollment-check` 스킬로 점검하세요.
 */

/** 웹툰 서비스 플랫폼 표기 */
const platform = {
  kakaoPage: { ko: '카카오페이지', en: 'Kakao Page' },
  kakaoWebtoon: { ko: '카카오웹툰', en: 'Kakao Webtoon' },
  ridi: { ko: '리디', en: 'RIDI' },
  naverSeries: { ko: '네이버 시리즈', en: 'Naver Series' },
  bomtoon: { ko: '봄툰', en: 'Bomtoon' },
  lezhin: { ko: '레진코믹스', en: 'Lezhin Comics' },
  onestore: { ko: '원스토어', en: 'ONE store' },
  bookcube: { ko: '북큐브', en: 'Bookcube' },
} as const;

export const site = {
  brand: 'dearbe',
  domain: 'dearbecorp.com',

  company: {
    legalNameKo: '디어비 주식회사',
    legalNameEn: 'DEARBE Corp.', // 사업자등록증 표기. D-U-N-S 영문명과 다르면 D-U-N-S 기준으로
    ceoKo: '배준석',
    ceoEn: 'Junseok Bae', // TODO: 대표 여권 영문 표기와 맞추기
    foundedKo: '2020년 11월',
    foundedEn: 'November 2020',
    bizRegNo: '403-81-84402',
    mailOrderNo: '', // 통신판매업 신고번호 (해당 시 입력)
    addressKo: '서울특별시 마포구 마포대로 92, 에이동 3층 (도화동, 효성 해링턴 스퀘어)',
    addressEn: '3F, Building A, Hyosung Harrington Square, 92 Mapo-daero, Mapo-gu, Seoul, Republic of Korea',
    phone: '', // TODO: 대표 전화 (D-U-N-S 등록 번호와 같으면 애플 확인 전화가 수월합니다)
    email: 'publishing@dearbecorp.com',
    supportEmail: 'publishing@dearbecorp.com', // 고객지원 전용 주소가 생기면 교체
    privacyOfficerKo: '배준석', // 개인정보 보호책임자 — 별도 지정 시 교체
    privacyOfficerEn: 'Junseok Bae',
    hoursKo: '평일 10:00–18:00 (KST, 공휴일 제외)',
    hoursEn: 'Weekdays 10:00–18:00 KST, except public holidays',
  },

  /** 2020년부터 제작한 웹툰과 국내 서비스 플랫폼 (작품별 현황 기준). 제목은 국내 정식 제목. */
  works: [
    { title: '대공님의 애완수인', platforms: [platform.kakaoPage, platform.kakaoWebtoon] },
    { title: '캠퍼스 트랩', platforms: [platform.ridi] },
    { title: '샤이닝 썸머', platforms: [platform.kakaoPage, platform.kakaoWebtoon] },
    { title: '패륜황자 고쳐쓰기', platforms: [platform.naverSeries] },
    { title: '나의 마지막 공주를 위하여', platforms: [platform.kakaoPage, platform.kakaoWebtoon] },
    {
      title: '아가씨의 파르페 시간',
      platforms: [platform.bomtoon, platform.lezhin, platform.ridi, platform.onestore, platform.bookcube],
    },
    { title: '제 아이를 살려주세요', platforms: [platform.kakaoPage] },
    { title: '연애 경호 이상 무', platforms: [platform.ridi, platform.bomtoon, platform.lezhin] },
    { title: '뮤즈 필요하세요?', platforms: [platform.ridi, platform.bomtoon, platform.lezhin] },
  ],

  app: {
    appStoreUrl: '', // 출시 후 App Store 링크 입력
  },

  legal: {
    // TODO: 개인정보 처리방침·이용약관 시행일 확정
    effectiveDateKo: '2026년 11월 1일',
    effectiveDateEn: 'November 1, 2026',
  },
} as const;

export type Site = typeof site;
