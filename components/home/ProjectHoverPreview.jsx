"use client";

import { AnimatePresence, motion, useSpring } from "framer-motion";
import { useEffect } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import ProjectVisual from "./ProjectVisual";

export default function ProjectHoverPreview({ project, pointer }) {
  const x = useSpring(0, { stiffness: 210, damping: 28, mass: 0.55 });
  const y = useSpring(0, { stiffness: 210, damping: 28, mass: 0.55 });

  useEffect(() => {
    function follow(event) {
      const width = Math.min(window.innerWidth * 0.34, 430);
      x.set(Math.min(event.clientX + 34, window.innerWidth - width - 28));
      y.set(Math.min(Math.max(event.clientY - width * 0.25, 16), window.innerHeight - width * 0.64 - 20));
    }
    const area = pointer.current;
    area.addEventListener("pointermove", follow, { passive: true });
    return () => area.removeEventListener("pointermove", follow);
  }, [pointer, x, y]);

  return (
    <motion.div className="project-hover-preview" style={{ x, y }} aria-hidden="true">
      <AnimatePresence initial={false}>
        {project && (
          <motion.div className="hover-preview-image" key={project.slug} initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.22 }}>
            <ProjectVisual project={project} decorative />
            <CustomCursor />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
