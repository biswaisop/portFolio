"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  leadIn,
  title,
  subtitle,
  index,
  className = "",
}) {
  return (
    <div className={`mb-12 md:mb-16 border-b border-black/[0.08] dark:border-white/[0.08] pb-6 ${className}`}>
      <div className="flex items-center justify-between">
        {/* Small mono lead-in word: e.g. "selected / works." */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#6b7367] dark:text-[#959d91]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sage-400 dark:bg-sage-300" />
          <span>{leadIn}</span>
        </motion.div>

        {index && (
          <span className="text-xs font-mono tracking-widest text-[#8a9186] dark:text-[#767e72]">
            [ {index} ]
          </span>
        )}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight lowercase text-[#141714] dark:text-[#f2f4f1]"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 max-w-2xl text-sm sm:text-base text-[#5c6358] dark:text-[#a0a89d] font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
