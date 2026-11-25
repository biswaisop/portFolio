import AnimatedText from "@/components/ui/AnimatedText";
import ExperienceSection from "@/components/home/ExperienceSection";
import ProjectList from "@/components/home/SelectedWorksSlider";
import { featuredProjects } from "@/lib/portfolio";

export const metadata = { title: "Work", description: "Selected projects in AI agents, developer infrastructure, and full-stack engineering by Biswadip Mandal." };

export default function WorkPage() {
  return (
    <main id="main-content" className="site-wrap work-page page-space" tabIndex={-1}>
      <header className="editorial-heading">
        <AnimatedText as="h1" lines={["Project index"]} />
        <p>Independent software projects across AI, web applications, and infrastructure.</p>
      </header>
      <ProjectList projects={featuredProjects} />
      <ExperienceSection />
    </main>
  );
}
