"use client";

import { useEffect, useRef } from "react";
import { gsap } from "./motion";

export default function Marquee({ name }) {
  const ref = useRef(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const track = ref.current;
      const set = gsap.quickSetter(track, "x", "px");
      let lastScroll = window.scrollY;
      let travel = 0;
      let impulse = 0;
      let width = track.firstElementChild.getBoundingClientRect().width;
      const observer = new ResizeObserver(() => { width = track.firstElementChild.getBoundingClientRect().width; });
      observer.observe(track.firstElementChild);
      const frame = (_, delta) => {
        const scroll = window.scrollY;
        impulse += (Math.min(240, Math.abs(scroll - lastScroll) * 10) - impulse) * 0.09;
        lastScroll = scroll;
        travel = (travel + (40 + impulse) * Math.min(delta, 40) / 1000) % Math.max(width, 1);
        set(-travel);
      };
      gsap.ticker.add(frame);
      return () => {
        observer.disconnect();
        gsap.ticker.remove(frame);
        set(0);
      };
    }, ref);
    return () => media.revert();
  }, []);

  return (
    <div className="marquee">
      <h1 className="sr-only">{name}</h1>
      <div className="marquee-track" ref={ref} aria-hidden="true">
        {[0, 1, 2].map((index) => <span key={index}>{name} <span>—</span> </span>)}
      </div>
      <p className="marquee-static" aria-hidden="true">{name}</p>
    </div>
  );
}
