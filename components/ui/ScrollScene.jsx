"use client";

import { useEffect, useRef } from "react";
import { gsap } from "./motion";

export default function ScrollScene({ as: Element = "div", className, children, ...props }) {
  const ref = useRef(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 760px) and (prefers-reduced-motion: no-preference)", () => {
      const root = ref.current;
      const image = root.querySelector("[data-parallax]");
      if (image) gsap.fromTo(image, { yPercent: -3, scale: 1.025 }, {
        yPercent: 7, scale: 1.09, ease: "none",
        scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: true },
      });
      if (root.hasAttribute("data-color-transition")) gsap.to(root, {
        "--scene-progress": 100, ease: "none",
        scrollTrigger: { trigger: root, start: "top 82%", end: "top 18%", scrub: true },
      });
    }, ref);
    return () => media.revert();
  }, []);

  return <Element ref={ref} className={className} {...props}>{children}</Element>;
}
