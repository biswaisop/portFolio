import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/50 sm:p-8">
          <div className="mb-10">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-zinc-900 dark:text-zinc-100">
              Projects
            </h2>
            <p className="mt-3 text-[clamp(1rem,1.4vw,1.125rem)] text-zinc-600 max-w-2xl dark:text-zinc-300">
              Selected work focused on backend systems, AI workflows, and reliable
              data pipelines.
            </p>
          </div>
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;