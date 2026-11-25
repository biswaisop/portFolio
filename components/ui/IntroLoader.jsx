"use client";

import { useEffect, useRef } from "react";
import { CurtainShape } from "./CurvedSection";
import { calm, gsap, uncoverCurtain } from "./motion";

const greetings = ["Hello", "Bonjour", "Namaste", "Hola", "Ciao", "こんにちは", "নমস্কার"];

export default function Preloader() {
  const layer = useRef(null);
  const path = useRef(null);
  const word = useRef(null);

  useEffect(() => {
    if (window.matchMedia(calm).matches) {
      document.documentElement.removeAttribute("data-intro");
      return;
    }
    try {
      if (sessionStorage.getItem("portfolio-intro")) return;
    } catch {}

    const timeline = gsap.timeline({
      onComplete() {
        document.documentElement.removeAttribute("data-intro");
        try { sessionStorage.setItem("portfolio-intro", "seen"); } catch {}
      },
    });
    timeline.set(layer.current, { autoAlpha: 1, yPercent: 0 });
    greetings.forEach((greeting, index) => {
      timeline.call(() => { word.current.textContent = greeting; }, [], index * 0.145);
    });
    timeline.add(uncoverCurtain(layer.current, path.current), 1.12);
    return () => timeline.kill();
  }, []);

  return (
    <div className="screen-curtain intro-curtain" ref={layer} aria-hidden="true">
      <CurtainShape pathRef={path} />
      <div className="curtain-label"><i /><span ref={word}>Hello</span></div>
    </div>
  );
}
