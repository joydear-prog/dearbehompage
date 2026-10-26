// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// SITE / BASE는 GitHub Pages 워크플로가 주입합니다.
// - 기본 github.io 주소: SITE=https://<user>.github.io, BASE=/dearbehompage
// - 커스텀 도메인(애플 법인 등록 시 필수): SITE=https://your-domain.com, BASE 비움
const site = process.env.SITE || 'https://joydear-prog.github.io';
const base = process.env.BASE || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
