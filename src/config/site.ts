/**
 * 사이트 전역 정보 — 회사·연락처·법적 고지는 모두 여기서만 수정합니다.
 *
 * ⚠️ 애플 개발자 프로그램(법인) 심사 전 반드시 실제 정보로 교체하세요.
 *    - legalNameEn 은 D-U-N-S 에 등록된 영문 법인명과 글자 하나까지 같아야 합니다.
 *    - email 은 사이트 도메인과 같은 도메인의 업무용 메일이어야 합니다.
 *    - 교체가 끝나면 `/apple-enrollment-check` 스킬로 남은 플레이스홀더를 점검하세요.
 */
export const site = {
  brand: 'dearbe',
  brandKo: '디어비',
  title: '디어비 — 마음을 기억하는 AI 컴패니언',
  description:
    '디어비는 대화를 기억하고 마음의 결을 알아차리는 모바일 AI 컴패니언 서비스를 만듭니다.',
  locale: 'ko_KR',

  company: {
    legalNameKo: '주식회사 디어비', // TODO: 사업자등록증 상호
    legalNameEn: 'Dearbe Inc.', // TODO: D-U-N-S 등록 영문 법인명과 정확히 일치
    ceo: '홍길동', // TODO
    founded: '2026',
    bizRegNo: '000-00-00000', // TODO: 사업자등록번호
    mailOrderNo: '', // 통신판매업 신고번호 (해당 시 입력, 비우면 표시 안 함)
    addressKo: '서울특별시 강남구 테헤란로 000, 0층', // TODO
    addressEn: '0F, 000 Teheran-ro, Gangnam-gu, Seoul, Republic of Korea', // TODO
    phone: '02-0000-0000', // TODO: D-U-N-S 등록 전화번호와 같으면 애플 확인 전화가 수월합니다
    email: 'hello@dearbe.com', // TODO: 사이트 도메인과 같은 도메인의 메일
    supportEmail: 'support@dearbe.com', // TODO
    privacyOfficer: '홍길동', // TODO: 개인정보 보호책임자
    hours: '평일 10:00–18:00 (KST, 공휴일 제외)',
  },

  app: {
    name: '디어비',
    status: 'App Store 출시 준비 중',
    appStoreUrl: '', // 출시 후 App Store 링크 입력
  },

  legal: {
    effectiveDate: '2026년 11월 1일', // TODO: 개인정보 처리방침·이용약관 시행일
  },
} as const;

export type Site = typeof site;
