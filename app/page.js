import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectList from "@/components/home/SelectedWorksSlider";
import AnimatedText from "@/components/ui/AnimatedText";
import Preloader from "@/components/ui/IntroLoader";
import { RouteLink } from "@/components/ui/PageTransition";
import ScrollScene from "@/components/ui/ScrollScene";
import { featuredProjects } from "@/lib/portfolio";

export default function Home() {
  return (
    <main id="main-content" className="home-main" tabIndex={-1}>
      <Preloader />
      <HeroSection />
      <AboutSection />
      <ScrollScene as="section" className="work-home" id="work" data-color-transition>
        <div className="site-wrap">
          <div className="work-heading"><AnimatedText lines={["Selected work"]} /><RouteLink className="pill-link" href="/work/">View all projects</RouteLink></div>
          <ProjectList projects={featuredProjects} />
          <ExperienceSection />
        </div>
      </ScrollScene>
    </main>
  );
}
