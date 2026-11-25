"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/portfolio";
import MagneticButton from "./MagneticButton";
import { RouteLink } from "./PageTransition";
import { calm, gsap } from "./motion";

const destinations = [
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Navigation() {
  const route = usePathname();
  const variant = route === "/" ? "hero" : "";
  const active = (href) => href === "/work/" ? /^\/works?(\/|$)/.test(route) : route.replace(/\/$/, "") === href.replace(/\/$/, "");
  const header = useRef(null);
  const dialog = useRef(null);
  const panel = useRef(null);
  const animation = useRef(null);
  const trigger = useRef(null);
  const [floating, setFloating] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setFloating(!entry.isIntersecting));
    observer.observe(header.current);
    return () => {
      observer.disconnect();
      animation.current?.kill();
    };
  }, []);

  function show(event) {
    if (dialog.current.open) return;
    trigger.current = event.currentTarget;
    dialog.current.showModal();
    setOpen(true);
    if (matchMedia(calm).matches) return;
    animation.current?.kill();
    animation.current = gsap.timeline()
      .fromTo(panel.current, { clipPath: "ellipse(0% 0% at 100% 0%)" }, {
        clipPath: "ellipse(145% 145% at 100% 0%)", duration: 0.72, ease: "power3.inOut",
      })
      .fromTo(panel.current.querySelectorAll(".overlay-entry"), { yPercent: 42, opacity: 0 }, {
        yPercent: 0, opacity: 1, duration: 0.54, stagger: 0.07, ease: "power3.out", clearProps: "transform,opacity",
      }, 0.24)
      .set(panel.current, { clearProps: "clipPath" });
  }

  function hide(immediate = false) {
    if (!dialog.current.open) return;
    animation.current?.kill();
    const finish = () => {
      dialog.current.close();
      setOpen(false);
      gsap.set(panel.current, { clearProps: "clipPath" });
      gsap.set(panel.current.querySelectorAll(".overlay-entry"), { clearProps: "transform,opacity" });
      trigger.current?.focus({ preventScroll: true });
    };
    if (immediate || matchMedia(calm).matches) {
      finish();
      return;
    }
    animation.current = gsap.to(panel.current, {
      clipPath: "ellipse(0% 0% at 100% 0%)", duration: 0.55, ease: "power3.inOut", onComplete: finish,
    });
  }

  return (
    <>
      <header className={`site-header ${variant ? `site-header--${variant}` : ""}`} ref={header}>
        <MagneticButton as={RouteLink} href="/" className="wordmark" aria-label="Biswadip Mandal, home">
          <span className="wordmark-mark" aria-hidden="true">bm<span>.</span></span><span className="wordmark-name">Biswadip Mandal</span>
        </MagneticButton>
        <nav aria-label="Main navigation" className="top-nav">
          {destinations.map(({ href, label }) => <MagneticButton as={RouteLink} href={href} aria-current={active(href) ? "page" : undefined} className="underlined" key={href}>{label}</MagneticButton>)}
        </nav>
        <MagneticButton type="button" className="mobile-menu" aria-label="Open menu" aria-expanded={open} aria-controls="site-menu" onClick={show}><Menu aria-hidden="true" size={23} /></MagneticButton>
      </header>
      <MagneticButton type="button" className={`floating-menu ${floating ? "is-visible" : ""}`} aria-label="Open floating menu" aria-expanded={open} aria-controls="site-menu" onClick={show}><Menu aria-hidden="true" size={25} /></MagneticButton>
      <dialog id="site-menu" className="nav-dialog" ref={dialog} aria-label="Site navigation" data-lenis-prevent onCancel={(event) => { event.preventDefault(); hide(); }} onClick={(event) => { if (event.target === event.currentTarget) hide(); }}>
        <div className="nav-panel" ref={panel}>
          <div className="nav-panel-head">
            <span>Navigation</span>
            <MagneticButton type="button" aria-label="Close menu" className="nav-close" onClick={() => hide()}><X aria-hidden="true" size={26} /></MagneticButton>
          </div>
          <nav aria-label="Overlay navigation" className="overlay-links">
            {[{ href: "/", label: "Home" }, ...destinations].map(({ href, label }) => (
              <RouteLink className="overlay-entry" key={href} href={href} aria-current={href === "/" ? (route === "/" ? "page" : undefined) : active(href) ? "page" : undefined} onClick={() => hide(true)}>{label}</RouteLink>
            ))}
          </nav>
          <div className="overlay-socials overlay-entry">
            {profile.socials.map(({ label, href }) => <a key={href} href={href} className="underlined">{label}</a>)}
          </div>
        </div>
      </dialog>
    </>
  );
}
