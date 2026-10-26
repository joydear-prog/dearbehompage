/**
 * 다국어 라우팅 — 한국어는 루트(/), 영어는 /en/ 아래에 둡니다.
 * 모든 내부 링크는 localize()로 만들어야 base 경로와 언어가 함께 반영됩니다.
 */
import { href } from '../config/url';
import { ui } from './ui';

export const langs = ['ko', 'en'] as const;
export type Lang = (typeof langs)[number];

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const enPrefix = /^\/en(?=\/|$)/;

/** base 를 뺀 경로 (예: /dearbehompage/en/privacy/ → /en/privacy/) */
const stripBase = (pathname: string) => pathname.slice(base.length) || '/';

export const getLang = (url: URL): Lang => (enPrefix.test(stripBase(url.pathname)) ? 'en' : 'ko');

export const t = (lang: Lang) => ui[lang];

/** 언어별 내부 링크. localize('en', 'privacy') → /en/privacy, localize('ko', '#service') → /#service */
export const localize = (lang: Lang, path = '') => {
  const clean = path.replace(/^\//, '');
  return href(lang === 'en' ? `en/${clean}` : clean);
};

/** 지금 보고 있는 페이지의 다른 언어 주소 */
export const switchLang = (url: URL, to: Lang) =>
  localize(to, stripBase(url.pathname).replace(enPrefix, '').replace(/^\//, ''));

/** 현재 페이지가 localize(lang, path)와 같은지 (내비게이션 aria-current 용) */
export const isCurrent = (url: URL, lang: Lang, path: string) =>
  url.pathname.replace(/\/$/, '') === localize(lang, path).replace(/\/$/, '');
