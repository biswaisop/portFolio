"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";
import { getAssetPath } from "@/lib/utils";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ServicesSection() {
  const [activeHover, setActiveHover] = useState(0);

  return (
    <section id="services" className="py-20 md:py-28 border-t border-black/[0.08] dark:border-white/[0.08]">
      <SectionHeader
        leadIn="my / services."
        title="capabilities."
        subtitle="Specialized backend and AI engineering to help teams build reliable, cost-efficient software systems."
        index="02"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Numbered List (01, 02, 03) */}
        <div className="lg:col-span-7 space-y-6">
          {services.map((service, index) => {
            const isActive = activeHover === index;

            return (
              <div
                key={service.number}
                onMouseEnter={() => setActiveHover(index)}
                onClick={() => setActiveHover(index)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-300 p-6 sm:p-8 ${
                  isActive
                    ? "border-sage-400 dark:border-sage-300 bg-white/80 dark:bg-[#151816]/90 shadow-sm"
                    : "border-black/10 dark:border-white/10 bg-white/40 dark:bg-[#141715]/40 hover:border-black/20 dark:hover:border-white/20"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm tracking-wider text-sage-600 dark:text-sage-300">
                      [{service.number}]
                    </span>
                    <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#141714] dark:text-[#f2f4f1]">
                      {service.title}
                    </h3>
                  </div>

                  <span
                    className={`h-7 w-7 rounded-full flex items-center justify-center border text-xs transition-all ${
                      isActive
                        ? "border-sage-400 bg-sage-100 text-sage-800 dark:bg-sage-950 dark:text-sage-300"
                        : "border-black/10 dark:border-white/10 text-neutral-400"
                    }`}
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                <p className="mt-4 text-sm sm:text-base text-[#4f564d] dark:text-[#a8b0a5] font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Service feature bullets */}
                <ul className="mt-5 space-y-2 border-t border-black/[0.06] dark:border-white/[0.06] pt-4">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-xs sm:text-sm font-mono text-[#5b6357] dark:text-[#9ea69a]"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-sage-500 dark:text-sage-300 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-[#5d6559] dark:text-[#9da699]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Sticky Hover Preview Image */}
        <div className="lg:col-span-5 sticky top-24 hidden lg:block">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#141715]/70 p-4 shadow-sm backdrop-blur-md">
            <div className="flex items-center justify-between text-xs font-mono text-[#71796d] dark:text-[#8f978b] mb-3">
              <span>HOVER PREVIEW</span>
              <span className="text-sage-700 dark:text-sage-300">
                [ 0{activeHover + 1} / 03 ]
              </span>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/5 dark:border-white/10 bg-sage-50 dark:bg-[#1a1e1b]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHover}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={getAssetPath(services[activeHover].image)}
                    alt={services[activeHover].title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-4 pt-3 border-t border-black/[0.06] dark:border-white/[0.06] text-xs font-mono text-[#5b6357] dark:text-[#9ea69a]">
              <p className="font-medium text-[#161915] dark:text-[#f0f4ee]">
                {services[activeHover].title}
              </p>
              <p className="mt-1 text-[11px] opacity-80 leading-relaxed">
                {services[activeHover].lead}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
