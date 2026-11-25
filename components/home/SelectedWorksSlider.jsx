"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { RouteLink } from "@/components/ui/PageTransition";
import { precise } from "@/components/ui/motion";
import ProjectHoverPreview from "./ProjectHoverPreview";
import ProjectVisual from "./ProjectVisual";

export default function ProjectList({ projects }) {
  const [preview, setPreview] = useState(null);
  const pointer = useRef(null);

  return (
    <div className="project-index" ref={pointer} data-preview={preview?.slug} onPointerLeave={() => setPreview(null)}>
      {projects.map((project) => (
        <RouteLink
          className="project-index-row"
          data-project={project.slug}
          href={`/works/${project.slug}/`}
          key={project.slug}
          onPointerEnter={(event) => { if (event.pointerType !== "touch" && matchMedia(precise).matches) setPreview(project); }}
        >
          <div className="project-inline-visual"><ProjectVisual project={project} /></div>
          <div className="project-row-copy"><span className="project-row-title">{project.title}</span><span className="project-row-category">{project.category}</span><ArrowUpRight aria-hidden="true" strokeWidth={1.45} /></div>
        </RouteLink>
      ))}
      <ProjectHoverPreview project={preview} pointer={pointer} />
    </div>
  );
}
