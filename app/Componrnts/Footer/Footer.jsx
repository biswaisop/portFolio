import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/40 bg-white/60 backdrop-blur before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-4 before:bg-white/40 before:blur-lg before:content-[''] dark:border-white/10 dark:bg-zinc-950/60 dark:before:bg-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Biswadip Mandal
            </Link>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Software Developer
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-300">
            <Link href="#about" className="hover:text-zinc-900 dark:hover:text-white">
              About
            </Link>
            <Link href="#skills" className="hover:text-zinc-900 dark:hover:text-white">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-zinc-900 dark:hover:text-white">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-zinc-900 dark:hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          © {currentYear} Biswadip Mandal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
