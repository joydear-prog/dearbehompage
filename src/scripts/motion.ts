/**
 * 모션 기반: Lenis(부드러운 스크롤) + GSAP ScrollTrigger.
 * 모션은 "한 번의 오케스트레이션"만 — 섹션마다 페이드업을 붙이지 마세요 (CLAUDE.md 참고).
 */
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const lenis = prefersReducedMotion ? null : new Lenis({ autoRaf: false, anchors: true });

if (lenis) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

export { gsap, ScrollTrigger };
