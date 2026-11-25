import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/home/ProjectCaseStudy";
import { featuredProjects, portfolioProjects } from "@/lib/portfolio";

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = portfolioProjects.find(({ slug }) => slug === params.slug);
  return project ? { title: project.title, description: project.description } : {};
}

export default function WorkCaseStudyPage({ params }) {
  const index = portfolioProjects.findIndex(({ slug }) => slug === params.slug);
  if (index === -1) notFound();
  const project = portfolioProjects[index];
  const next = featuredProjects[(featuredProjects.indexOf(project) + 1) % featuredProjects.length];
  return <ProjectCaseStudy project={project} next={next} />;
}
