"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { CurtainShape } from "./CurvedSection";
import { calm, coverCurtain, gsap, uncoverCurtain } from "./motion";

export function RouteLink({ href, ...props }) {
  return <Link href={href} data-transition-route={href} {...props} />;
}

export default function PageTransition() {
  const route = usePathname();
  const router = useRouter();
  const layer = useRef(null);
  const path = useRef(null);
  const animation = useRef(null);
  const pending = useRef(false);
  const timeout = useRef(null);

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest?.("a[data-transition-route]");
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute("download")) return;
      if (window.matchMedia(calm).matches) return;
      const pace = window.matchMedia("(max-width: 640px)").matches ? 1.7 : 1;
      const destination = link.dataset.transitionRoute;
      const target = new URL(link.href);
      const trim = (value) => value.replace(/\/$/, "");
      if (target.origin !== location.origin || trim(target.pathname) === trim(location.pathname)) return;
      event.preventDefault();
      if (pending.current) return;

      pending.current = true;
      animation.current?.kill();
      animation.current = coverCurtain(layer.current, path.current).timeScale(pace).call(() => {
        router.push(destination);
        timeout.current = window.setTimeout(() => {
          pending.current = false;
          animation.current = uncoverCurtain(layer.current, path.current);
        }, 2500);
      });
    };
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      animation.current?.kill();
      window.clearTimeout(timeout.current);
    };
  }, [router]);

  useEffect(() => {
    if (!pending.current) return;
    window.clearTimeout(timeout.current);
    pending.current = false;
    animation.current?.kill();
    const pace = window.matchMedia("(max-width: 640px)").matches ? 1.7 : 1;
    animation.current = uncoverCurtain(layer.current, path.current).timeScale(pace).call(() => {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    });
  }, [route]);

  return <div className="screen-curtain route-curtain" ref={layer} aria-hidden="true"><CurtainShape pathRef={path} /><div className="curtain-label"><i /> Biswadip Mandal</div></div>;
}
