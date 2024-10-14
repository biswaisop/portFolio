"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Navlink from "../Navlink/Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Menuoverlay from "../menuOverlay/Menuoverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
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
  const [AnimationCount, setAnimationCount] = useState(0);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-10 py-2 bg-background/60 backdrop-blur-lg transition-all duration-300"
    >
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-4">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl font-extrabold font-mono bg-gradient-to-r md:px-9 from-blue-400 via-cyan-400 to-green-400 text-transparent bg-clip-text"
        >
          {AnimationCount < 1 && (
            <TypeAnimation
              sequence={["<Biswa_Man/>", 1000]}
              wrapper="span"
              speed={37}
              repeat={2}
            />
          )}
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setnavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white hover:underline"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setnavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white hover:underline"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <Menuoverlay /> : null}
    </nav>
  );
};

export default Navbar;
