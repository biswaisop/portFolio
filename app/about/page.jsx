import AnimatedText from "@/components/ui/AnimatedText";
import Portrait from "@/components/ui/Portrait";
import ScrollScene from "@/components/ui/ScrollScene";
import PhotographyGallery from "@/components/home/PhotographyGallery";
import { capabilities, profile } from "@/lib/portfolio";
import { getAssetPath } from "@/lib/utils";

export const metadata = { title: "About", description: "About Biswadip Mandal, his background in Computer Science and Engineering, and his work across AI, software, and infrastructure." };

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page page-space" tabIndex={-1}>
      <header className="site-wrap about-opening">
        <AnimatedText as="h1" lines={["Building at the", "intersection of code,", "intelligence, and", "curiosity."]} />
        <ScrollScene className="about-portrait"><div data-parallax><Portrait /></div></ScrollScene>
      </header>
      <section className="site-wrap about-bio">
        <h2>About me</h2>
        <div>
          <p>I study Computer Science and Engineering at RV Institute of Technology and Management in Bengaluru. At Genovation Solutions Technologies, I worked on a production retrieval-augmented generation pipeline and built FastAPI services and MongoDB-backed query analytics.</p>
          <p>I build independent software to explore ideas I want to understand better, from agents that investigate broken CI runs to infrastructure for hosting files at home. Away from the screen, I’m interested in photography, cars, and watches.</p>
          <a className="pill-link" href={getAssetPath(profile.resume)} download>Download résumé</a>
        </div>
      </section>
      <section className="capabilities-section">
        <div className="site-wrap">
          <AnimatedText lines={["What I work with"]} />
          <ol className="capabilities-list">
            {capabilities.map(({ name, copy, tools }, index) => (
              <li key={name}>
                <span className="capability-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{name}</h3>
                <div><p>{copy}</p><p className="capability-tools">{tools}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <PhotographyGallery photographs={profile.photographs} />
    </main>
  );
}
