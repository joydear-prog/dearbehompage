/** base 경로(GitHub Pages 하위 경로 등)를 반영한 내부 링크를 만듭니다. */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const href = (path = '') => `${base}/${path.replace(/^\//, '')}`;
