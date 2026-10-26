/**
 * 시각 QA 스크린샷 — 데스크톱/모바일 전체 페이지 캡처.
 *
 *   npm run shot                         # http://localhost:4321 의 기본 페이지들
 *   npm run shot -- --url http://localhost:4321/dearbehompage --pages /,/privacy
 *   npm run shot -- --motion             # 모션 켠 상태(타이핑 중간 등)로 캡처
 *
 * 결과: .shots/<page>-<viewport>.png  (gitignore 됨)
 * 브라우저: CHROME_PATH → 시스템 Chrome/Chromium → Playwright 내장 브라우저 순으로 찾습니다.
 */
import { chromium } from 'playwright-core';
import { existsSync, mkdirSync } from 'node:fs';
import { parseArgs } from 'node:util';

const { values } = parseArgs({
  options: {
    url: { type: 'string', default: 'http://localhost:4321' },
    pages: { type: 'string', default: '/,/privacy,/terms,/support' },
    out: { type: 'string', default: '.shots' },
    motion: { type: 'boolean', default: false },
  },
});

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/opt/google/chrome/chrome',
].filter(Boolean);
const executablePath = candidates.find((p) => existsSync(p));

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 },
];

mkdirSync(values.out, { recursive: true });

let browser;
try {
  browser = await chromium.launch({ executablePath, args: ['--no-sandbox'] });
} catch (err) {
  console.error(
    '브라우저를 실행하지 못했습니다. CHROME_PATH 환경변수로 Chrome 경로를 지정하거나 `npx playwright install chromium`을 실행하세요.\n',
    err.message,
  );
  process.exit(1);
}

const base = values.url.replace(/\/$/, '');
for (const vp of viewports) {
  const { name, ...viewport } = vp;
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    isMobile: viewport.isMobile,
    deviceScaleFactor: viewport.deviceScaleFactor ?? 1,
    reducedMotion: values.motion ? 'no-preference' : 'reduce',
    locale: 'ko-KR',
  });
  const page = await context.newPage();
  for (const path of values.pages.split(',')) {
    const res = await page.goto(base + path, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(values.motion ? 1500 : 300);
    const slug = path.replace(/^\/|\/$/g, '').replace(/\//g, '_') || 'home';
    const file = `${values.out}/${slug}-${name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(`${res?.status() ?? '???'}  ${file}`);
  }
  await context.close();
}
await browser.close();
