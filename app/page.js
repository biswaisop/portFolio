import Herosection from "@/app/Componrnts/Herosection/Herosection";
import Navbar from "./Componrnts/navbar/Navbar";
import AboutSection from "./Componrnts/about/AboutSection";
import Projects from "./Componrnts/Projects/Projects";
import Skills from "./Componrnts/Skills/Skills";
import Contact from "./Componrnts/Contact/Contact";
import Footer from "./Componrnts/Footer/Footer";
import Prism from "./Componrnts/Prism/Prism";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-transparent">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>
      <Navbar />

      <div className="mx-auto w-full max-w-6xl px-4 pt-20 sm:pt-24">
        <Herosection />

        <div className="mt-20 sm:mt-28">
          <AboutSection />
        </div>

        <div className="mt-16 sm:mt-24">
          <Skills />
        </div>

        <div className="mt-16 sm:mt-24">
          <Projects />
        </div>

        <div className="mt-16 sm:mt-24 pb-12">
          <Contact />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
