import { lenis } from './motion';

/* 헤더: 히어로 위에서는 투명(light), 벗어나면 편지지(solid) */
const header = document.querySelector<HTMLElement>('[data-header]');
const hero = document.querySelector<HTMLElement>('[data-hero]');

if (header && hero) {
  new IntersectionObserver(
    ([entry]) => {
      header.dataset.tone = entry.isIntersecting ? 'light' : 'solid';
    },
    { rootMargin: '-64px 0px 0px 0px' },
  ).observe(hero);
}

/* 모바일 메뉴 */
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.getElementById('mobile-menu');

if (toggle && menu) {
  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '닫기' : '메뉴';
    menu.hidden = !open;
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) lenis?.stop();
    else lenis?.start();
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 48rem)').addEventListener('change', (e) => e.matches && setOpen(false));
}
