import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export default function ProjectVisual({ project, decorative = false }) {
  return (
    <figure className={`project-visual project-visual--${project.art || "archive"}`} aria-hidden={decorative || undefined}>
      {project.preview ? (
        <Image src={getAssetPath(project.preview)} alt={decorative ? "" : `${project.title} product screenshot`} fill sizes="(max-width: 760px) 92vw, 75vw" />
      ) : (
        <>
          <div className="project-art" aria-hidden="true">{project.title}<span>.</span></div>
          <figcaption>Project image placeholder</figcaption>
        </>
      )}
    </figure>
  );
}
