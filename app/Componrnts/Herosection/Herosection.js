"use client";
import React from "react";
import Image from "next/image";
import DesignerImage from "./images/file.png";


const Herosection = () => {
  return (
    <section className="min-h-[70vh] py-10 sm:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Biswadip Mandal
          </p>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-tight text-zinc-900 dark:text-zinc-100">
            Software Developer
          </h1>
          <p className="mt-5 text-[clamp(1rem,1.5vw,1.25rem)] text-zinc-600 max-w-2xl dark:text-zinc-300">
            I design and build modern web applications, backend services, and data-driven systems with a focus on scalability and maintainability.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#1e3a8a] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1a347a] sm:w-auto"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="w-full rounded-full border border-white/60 bg-white/60 px-6 py-3 text-center text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur transition-colors hover:border-white/80 dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:border-white/20 sm:w-auto"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="mx-auto w-56 sm:w-64 lg:w-72">
            <div className="rounded-3xl border border-zinc-200 bg-white/80 p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
              <Image
                src={DesignerImage}
                alt="Biswadip Mandal"
                width={500}
                height={500}
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
