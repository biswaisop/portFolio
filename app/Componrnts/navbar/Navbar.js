"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navlink from "../Navlink/Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Menuoverlay from "../menuOverlay/Menuoverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setnavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const nextTheme = storedTheme || (prefersDark ? "dark" : "light");
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-200 relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-4 after:bg-white/40 after:blur-lg after:content-[''] dark:after:bg-white/10 ${
        scrolled
          ? "bg-white/70 backdrop-blur border-b border-white/40 shadow-sm dark:bg-zinc-950/60 dark:border-white/10"
          : "bg-white/60 backdrop-blur border-b border-white/40 dark:bg-zinc-950/50 dark:border-white/10"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center px-4 py-4">
        <Link
          href={"/"}
          className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Biswadip Mandal
        </Link>
        <div className="menu hidden md:block md:w-auto ml-10" id="navbar">
          <ul className="flex md:flex-row md:items-center md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
            className="rounded-full border border-white/60 bg-white/60 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-700 shadow-sm backdrop-blur transition-colors hover:text-zinc-900 dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:text-white"
            aria-label="Toggle dark mode"
            type="button"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setnavbarOpen(true)}
                className="flex items-center rounded border border-white/60 bg-white/60 px-3 py-2 text-zinc-700 shadow-sm backdrop-blur transition-colors hover:text-zinc-900 dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:text-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setnavbarOpen(false)}
                className="flex items-center rounded border border-white/60 bg-white/60 px-3 py-2 text-zinc-700 shadow-sm backdrop-blur transition-colors hover:text-zinc-900 dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:text-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
      {navbarOpen ? <Menuoverlay onLinkClick={() => setnavbarOpen(false)} /> : null}
    </nav>
  );
};

export default Navbar;
