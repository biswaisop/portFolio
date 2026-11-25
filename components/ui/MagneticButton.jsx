"use client";

import { precise, gsap } from "./motion";

function move(event) {
  if (!matchMedia(precise).matches) return;
  const area = event.currentTarget.getBoundingClientRect();
  gsap.to(event.currentTarget.firstElementChild, {
    x: (event.clientX - area.left - area.width / 2) * 0.24,
    y: (event.clientY - area.top - area.height / 2) * 0.24,
    duration: 0.32,
    ease: "power3.out",
    overwrite: true,
  });
}

function reset(event) {
  if (!matchMedia(precise).matches) return;
  gsap.to(event.currentTarget.firstElementChild, { x: 0, y: 0, duration: 0.38, ease: "power3.out", overwrite: true });
}

export default function MagneticButton({ as: Element = "button", className = "", children, ...props }) {
  return (
    <Element className={`magnetic ${className}`} onPointerMove={move} onPointerLeave={reset} {...props}>
      <span className="magnetic-content">{children}</span>
    </Element>
  );
}
