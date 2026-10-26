/**
 * 사이트 전역 정보 — 회사·연락처·법적 고지는 모두 여기서만 수정합니다.
 * 출처: 사업자등록증(2026.10.20 마포세무서 발급), 작품별 현황, 회사소개서.
 *
 * ⚠️ 애플 개발자 프로그램(법인) 심사 전 확인
 *    - legalNameEn 은 D-U-N-S 에 등록된 영문 법인명과 글자 하나까지 같아야 합니다.
 *    - 값이 빈 문자열('')인 항목은 사이트에 표시되지 않습니다.
 *    - 수정 후 `/apple-enrollment-check` 스킬로 점검하세요.
 */
export const site = {
  brand: 'dearbe',
  brandKo: '디어비',
  domain: 'dearbecorp.com',
  title: '디어비 — 마음을 기억하는 AI 컴패니언',
  description:
    '디어비는 대화를 기억하고 마음의 결을 알아차리는 모바일 AI 컴패니언 서비스를 만듭니다.',
  locale: 'ko_KR',

  company: {
    legalNameKo: '디어비 주식회사',
    legalNameEn: 'DEARBE Corp.', // 사업자등록증 표기. D-U-N-S 영문명과 다르면 D-U-N-S 기준으로
    ceo: '배준석',
    founded: '2020년 11월',
    bizRegNo: '403-81-84402',
    mailOrderNo: '', // 통신판매업 신고번호 (해당 시 입력)
    addressKo: '서울특별시 마포구 마포대로 92, 에이동 3층 (도화동, 효성 해링턴 스퀘어)',
    addressEn: '3F, Building A, Hyosung Harrington Square, 92 Mapo-daero, Mapo-gu, Seoul, Republic of Korea',
    phone: '', // TODO: 대표 전화 (D-U-N-S 등록 번호와 같으면 애플 확인 전화가 수월합니다)
    email: 'publishing@dearbecorp.com',
    supportEmail: 'publishing@dearbecorp.com', // 고객지원 전용 주소가 생기면 교체
    privacyOfficer: '배준석', // 개인정보 보호책임자 — 별도 지정 시 교체
    hours: '평일 10:00–18:00 (KST, 공휴일 제외)',
  },

  /** 2020년부터 제작한 웹툰과 국내 서비스 플랫폼 (작품별 현황 기준) */
  works: [
    { title: '대공님의 애완수인', platforms: ['카카오페이지', '카카오웹툰'] },
    { title: '캠퍼스 트랩', platforms: ['리디'] },
    { title: '샤이닝 썸머', platforms: ['카카오페이지', '카카오웹툰'] },
    { title: '패륜황자 고쳐쓰기', platforms: ['네이버 시리즈'] },
    { title: '나의 마지막 공주를 위하여', platforms: ['카카오페이지', '카카오웹툰'] },
    { title: '아가씨의 파르페 시간', platforms: ['봄툰', '레진코믹스', '리디', '원스토어', '북큐브'] },
    { title: '제 아이를 살려주세요', platforms: ['카카오페이지'] },
    { title: '연애 경호 이상 무', platforms: ['리디', '봄툰', '레진코믹스'] },
    { title: '뮤즈 필요하세요?', platforms: ['리디', '봄툰', '레진코믹스'] },
  ],

  app: {
    name: '디어비',
    status: 'App Store 출시 준비 중',
    appStoreUrl: '', // 출시 후 App Store 링크 입력
  },

  legal: {
    effectiveDate: '2026년 11월 1일', // TODO: 개인정보 처리방침·이용약관 시행일 확정
  },
} as const;

export type Site = typeof site;
