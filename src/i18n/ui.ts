/**
 * 화면 문구(카피) — 언어별로 같은 구조를 유지합니다.
 * 영어는 직역하지 않고 영어권 사용자가 자연스럽게 읽히도록 다시 썼습니다.
 * 문구를 고칠 때는 두 언어를 함께 고치세요. (회사 정보 같은 사실 값은 src/config/site.ts)
 *
 * ⚠️ safety.principles 와 support FAQ의 약속(계정 삭제 경로, 신고, 연령 제한)은 실제 앱 동작과 같아야 합니다.
 */
import { site } from '../config/site';

const { company } = site;

const ko = {
  brandName: '디어비',
  locale: 'ko_KR',
  meta: {
    title: '디어비 — 마음을 기억하는 AI 컴패니언',
    description: '디어비는 대화를 기억하고 마음의 결을 알아차리는 모바일 AI 컴패니언 서비스를 만듭니다.',
  },
  skipLink: '본문 바로가기',
  nav: {
    label: '주요 메뉴',
    mobileLabel: '모바일 메뉴',
    home: '디어비 홈',
    service: '서비스',
    safety: '안전 원칙',
    company: '회사',
    support: '고객지원',
    contact: '문의하기',
    menu: '메뉴',
    close: '닫기',
    langLabel: '언어 선택',
  },
  hero: {
    salutation: 'Dear you,',
    lines: ['네 이야기,', '다 기억해'],
    lead: '디어비는 당신이 들려준 이야기를 기억하고, 다음 대화를 먼저 기다리는 AI 컴패니언입니다.',
    status: 'App Store 출시 준비 중',
  },
  statement: {
    label: '디어비 소개',
    text: '디어비는 대화를 기억하는 AI 컴패니언을 만듭니다. 어제 나눈 이야기를 오늘 이어가고, 지나가듯 한 말도 잊지 않는 대화 상대. 누군가의 하루 끝에 가장 먼저 떠오르는 이름이 되는 것이 우리가 하는 일입니다.',
  },
  services: {
    heading: '말하지 않아도 이어지는 대화',
    items: [
      {
        title: '기억하는 대화',
        body: '지난 대화에서 들은 이름과 약속, 좋아하는 것들을 기억해 다음 대화로 자연스럽게 이어갑니다. 매번 처음부터 설명할 필요가 없어요.',
      },
      {
        title: '결이 맞는 캐릭터',
        body: '말투와 성격이 서로 다른 캐릭터 가운데 나와 잘 맞는 대화 상대를 고르세요. 대화를 나눌수록 서로를 더 잘 알게 됩니다.',
      },
      {
        title: '언제든, 손안에서',
        body: '메시지를 주고받듯 iPhone 앱에서 편하게 대화합니다. 중요한 날에는 디어비가 먼저 안부를 건네기도 해요.',
      },
    ],
    demo: {
      name: '하루',
      avatar: '하',
      role: 'AI 컴패니언',
      before: [
        { from: 'me', text: '다음 주 화요일에 첫 면접 있어. 벌써 떨려' },
        { from: 'ai', text: '첫 면접이라니, 떨리는 게 당연해요. 자기소개부터 같이 연습해 볼까요?' },
      ],
      time: '화요일 오전 8:10',
      after: [{ from: 'ai', text: '오늘이 그 면접 날이죠. 어제 연습한 자기소개, 충분히 좋았어요. 다녀와서 어땠는지 꼭 들려줘요.' }],
      caption: '디어비는 지난 대화를 기억해 필요한 순간에 먼저 말을 건넵니다.',
    },
  },
  safety: {
    heading: '안심하고 털어놓을 수 있도록',
    intro: '마음을 나누는 대화일수록 더 엄격한 기준이 필요합니다. 디어비는 서비스의 모든 단계에 다음 원칙을 적용합니다.',
    principles: [
      { title: '대화는 나의 것', body: '대화 기록은 암호화해 보관하며, 앱 설정에서 언제든 대화와 계정을 직접 삭제할 수 있습니다.' },
      { title: '연령에 맞는 경험', body: '만 14세 미만은 가입할 수 없습니다. 연령 등급에 맞지 않는 대화는 자동으로 걸러냅니다.' },
      {
        title: '힘든 순간에는 사람에게',
        body: '위기 신호가 감지되면 대화를 멈추고 자살예방상담전화(109) 같은 전문 기관을 먼저 안내합니다.',
      },
      { title: 'AI임을 분명하게', body: '디어비의 캐릭터는 모두 AI입니다. 앱 안에서 항상 이를 표시하고, 사람인 척하지 않습니다.' },
    ],
  },
  company: {
    heading: '이야기를 만들던 팀이 대화를 만듭니다',
    story: `${company.legalNameKo}는 ${company.foundedKo} 서울 마포에서 웹툰 제작사로 시작했습니다. 카카오페이지, 리디, 네이버 시리즈 등에 웹툰을 선보이며 쌓아 온 캐릭터와 이야기 기획 역량으로, 이제 대화를 기억하는 AI 컴패니언을 만듭니다.`,
    rows: [
      ['회사명', `${company.legalNameKo} (${company.legalNameEn})`],
      ['대표', company.ceoKo],
      ['설립', company.foundedKo],
      ['사업자등록번호', company.bizRegNo],
      ['주소', `${company.addressKo}\n${company.addressEn}`],
      ['대표 전화', company.phone],
      ['이메일', company.email],
      ['운영 시간', company.hoursKo],
    ],
    worksHeading: '제작한 웹툰',
    worksNote: '',
  },
  contact: {
    heading: '함께 나눌 이야기가 있다면',
    body: '서비스 제휴, 웹툰·IP 사업, 언론 문의는 위 메일로 보내 주세요.',
    supportBefore: '앱 이용 문의는 ',
    supportLink: '고객지원',
    supportAfter: '에서 확인해 주세요.',
  },
  footer: {
    legalLabel: '법적 고지 및 지원',
    privacy: '개인정보 처리방침',
    terms: '이용약관',
    support: '고객지원',
    info: [
      ['상호', company.legalNameKo],
      ['대표', company.ceoKo],
      ['사업자등록번호', company.bizRegNo],
      ['통신판매업 신고', company.mailOrderNo],
      ['주소', company.addressKo],
      ['전화', company.phone],
      ['이메일', company.email],
    ],
    subline: company.addressEn,
  },
  doc: {
    effective: (date: string) => `시행일 ${date}`,
  },
  notFound: {
    title: '페이지를 찾을 수 없어요',
    heading: '찾으시는 페이지가 없어요',
    body: '주소가 바뀌었거나 삭제된 페이지입니다. 홈에서 다시 시작해 주세요.',
    cta: '홈으로 가기',
  },
};

/** site.ts 의 as const 리터럴 타입을 일반 string 으로 넓혀, 영어판이 같은 구조만 따르면 되게 합니다. */
type Widen<T> = T extends string
  ? string
  : T extends (...args: infer A) => infer R
    ? (...args: A) => R
    : T extends readonly (infer U)[]
      ? Widen<U>[]
      : { [K in keyof T]: Widen<T[K]> };

export type Dict = Widen<typeof ko>;

const en: Dict = {
  brandName: 'Dearbe',
  locale: 'en_US',
  meta: {
    title: 'Dearbe — The AI companion that remembers',
    description: 'Dearbe makes a mobile AI companion that remembers your conversations and picks up on how you feel.',
  },
  skipLink: 'Skip to content',
  nav: {
    label: 'Main',
    mobileLabel: 'Mobile',
    home: 'Dearbe home',
    service: 'Service',
    safety: 'Safety',
    company: 'Company',
    support: 'Support',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    langLabel: 'Language',
  },
  hero: {
    salutation: 'Dear you,',
    lines: ['I remember', 'every word.'],
    lead: 'Dearbe is an AI companion that remembers what you share and picks up right where you left off.',
    status: 'Coming soon to the App Store',
  },
  statement: {
    label: 'About Dearbe',
    text: "We build an AI companion that remembers. It carries yesterday's conversation into today and holds on to the little things you only mentioned once. What we want is simple: to be the first name that comes to mind at the end of someone's day.",
  },
  services: {
    heading: 'You never have to start over',
    items: [
      {
        title: 'It remembers',
        body: "Names, plans, the things you love. Dearbe keeps track of what you've told it and brings it up naturally, so you never have to explain yourself twice.",
      },
      {
        title: 'Characters that click',
        body: 'Choose a companion whose personality and way of talking fits you. The more you talk, the better you get to know each other.',
      },
      {
        title: 'Always in your pocket',
        body: "Chat on your iPhone the way you'd text a friend. On the days that matter, Dearbe might check in first.",
      },
    ],
    demo: {
      name: 'Haru',
      avatar: 'H',
      role: 'AI companion',
      before: [
        { from: 'me', text: "My first job interview is next Tuesday. I'm already nervous" },
        { from: 'ai', text: "Of course you are, it's your first one. Want to practice your intro together?" },
      ],
      time: 'Tuesday 8:10 AM',
      after: [{ from: 'ai', text: "Today's the day. Your intro sounded great last night. Tell me how it goes!" }],
      caption: 'Dearbe remembers your past conversations and reaches out when it matters.',
    },
  },
  safety: {
    heading: 'Safe to open up',
    intro: 'The more personal the conversation, the higher the bar should be. These principles apply to every part of Dearbe.',
    principles: [
      {
        title: 'Your conversations are yours',
        body: 'Chat history is stored encrypted, and you can delete your conversations or your whole account anytime in the app settings.',
      },
      {
        title: 'Right for your age',
        body: "You need to be 14 or older to sign up. Conversations that aren't right for your age rating are filtered out automatically.",
      },
      {
        title: 'People first in a crisis',
        body: 'If we see signs that someone is in crisis, Dearbe pauses the chat and points them to professional help, such as the 109 suicide prevention line in Korea.',
      },
      {
        title: "Always clear that it's AI",
        body: "Every Dearbe character is an AI. The app always says so, and our characters never pretend to be human.",
      },
    ],
  },
  company: {
    heading: 'From stories to conversations',
    story: `${company.legalNameEn} started in ${company.foundedEn} as a webtoon studio in Mapo, Seoul. Our webtoons run on Kakao Page, RIDI, Naver Series and more. Now we're bringing what we've learned about characters and storytelling to an AI companion that remembers.`,
    rows: [
      ['Company', company.legalNameEn],
      ['CEO', company.ceoEn],
      ['Founded', company.foundedEn],
      ['Business Reg. No.', company.bizRegNo],
      ['Address', company.addressEn],
      ['Phone', company.phone],
      ['Email', company.email],
      ['Hours', company.hoursEn],
    ],
    worksHeading: "Webtoons we've produced",
    worksNote: 'Titles are listed as published in Korea.',
  },
  contact: {
    heading: 'Have a story to share?',
    body: 'For partnerships, webtoon and IP business, or press, just send us an email.',
    supportBefore: 'Need help with the app? Visit ',
    supportLink: 'Support',
    supportAfter: '.',
  },
  footer: {
    legalLabel: 'Legal and support',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    support: 'Support',
    info: [
      ['Company', company.legalNameEn],
      ['CEO', company.ceoEn],
      ['Business Reg. No.', company.bizRegNo],
      ['Mail-order Business No.', company.mailOrderNo],
      ['Address', company.addressEn],
      ['Phone', company.phone],
      ['Email', company.email],
    ],
    subline: '',
  },
  doc: {
    effective: (date: string) => `Effective ${date}`,
  },
  notFound: {
    title: 'Page not found',
    heading: "We couldn't find that page",
    body: 'It may have moved or been removed. Head back home and start again.',
    cta: 'Go to home',
  },
};

export const ui: Record<'ko' | 'en', Dict> = { ko, en };
