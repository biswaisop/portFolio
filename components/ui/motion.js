"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export const calm = "(prefers-reduced-motion: reduce)";
export const precise = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
export const curtain = "M0 0 H100 V100 H0 Z";

export function coverCurtain(layer, path) {
  return gsap.timeline()
    .set(layer, { autoAlpha: 1, yPercent: 105 })
    .set(path, { attr: { d: "M0 18 Q50 -18 100 18 V100 H0 Z" } })
    .to(layer, { yPercent: 0, duration: 0.58, ease: "power3.inOut" })
    .to(path, { attr: { d: curtain }, duration: 0.55, ease: "power3.inOut" }, 0);
}

export function uncoverCurtain(layer, path) {
  return gsap.timeline()
    .to(path, { attr: { d: "M0 0 H100 V83 Q50 117 0 83 Z" }, duration: 0.72, ease: "power3.inOut" }, 0)
    .to(layer, { yPercent: -105, duration: 0.72, ease: "power3.inOut" }, 0)
    .set(layer, { autoAlpha: 0 });
}

export { gsap, ScrollTrigger };
