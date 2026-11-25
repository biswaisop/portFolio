import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import { RouteLink } from "@/components/ui/PageTransition";
import ScrollScene from "@/components/ui/ScrollScene";
import { getAssetPath } from "@/lib/utils";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCaseStudy({ project, next }) {
  return (
    <main id="main-content" className="case-page page-space" tabIndex={-1}>
      <article>
        <header className="site-wrap case-opening">
          <RouteLink className="underlined case-back" href="/work/">All projects</RouteLink>
          <AnimatedText as="h1" lines={[project.title]} />
          <p className="case-description">{project.description}</p>
          <dl className="case-facts">
            <div><dt>Category</dt><dd>{project.category}</dd></div>
            <div><dt>Status</dt><dd>{project.status}</dd></div>
          </dl>
        </header>
        <ScrollScene className="case-preview"><div data-parallax><ProjectVisual project={project} /></div></ScrollScene>
        <section className="site-wrap case-text">
          <AnimatedText lines={["The problem"]} />
          <p>{project.problem}</p>
        </section>
        <section className="site-wrap case-text">
          <AnimatedText lines={["Product overview"]} />
          <p>{project.overview}</p>
        </section>
        <ScrollScene as="section" className="case-technical" data-color-transition>
          <div className="site-wrap">
            <div className="case-text">
              <AnimatedText lines={["Technical architecture"]} />
              <p>{project.architecture}</p>
            </div>
            {project.decisions?.length > 0 && (
              <section className="case-text"><h3>Engineering decisions</h3><ul>{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></section>
            )}
            {project.challenges && <section className="case-text"><h3>Implementation challenges</h3><p>{project.challenges}</p></section>}
            <section className="case-text"><h3>Technology stack</h3><p>{project.stack?.length ? project.stack.join(", ") : "Technology choices are not public yet."}</p></section>
          </div>
        </ScrollScene>
        <section className="site-wrap case-text case-demos">
          <AnimatedText lines={["Screenshots and demos"]} />
          <div>
            {project.screenshots?.map(({ src, alt }) => <div key={src} className="case-screenshot"><Image src={getAssetPath(src)} alt={alt} fill sizes="(max-width: 760px) 92vw, 65vw" /></div>)}
            {!project.screenshots?.length && !project.preview && <p>Public screenshots are not available yet.</p>}
            {(project.link || project.demo) && <div className="inline-actions">
              {project.link && <a className="pill-link" href={project.link}>{project.linkLabel || "GitHub"}</a>}
              {project.demo && <a className="pill-link" href={project.demo}>Live demo</a>}
            </div>}
          </div>
        </section>
        {project.outcome && <section className="site-wrap case-text"><h2>Outcome</h2><p>{project.outcome}</p></section>}
        <nav className="site-wrap next-project" aria-label="Next project">
          <span>Next project</span><RouteLink href={`/works/${next.slug}/`} className="underlined">{next.title}<ArrowUpRight strokeWidth={1.4} aria-hidden="true" /></RouteLink>
        </nav>
      </article>
    </main>
  );
}
