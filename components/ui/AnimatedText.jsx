"use client";

import { useEffect, useRef } from "react";
import { gsap } from "./motion";

export default function AnimatedText({ as: Element = "h2", lines, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(ref.current.querySelectorAll(".text-line > span"), {
        yPercent: 105,
        duration: 0.9,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 91%", once: true },
      });
    }, ref);
    return () => media.revert();
  }, []);

  return (
    <Element ref={ref} className={className}>
      {lines.map((line, index) => <span key={line} className="text-line"><span>{line}{index < lines.length - 1 ? " " : ""}</span></span>)}
    </Element>
  );
}
