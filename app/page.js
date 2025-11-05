import Herosection from "@/app/Componrnts/Herosection/Herosection";
import Navbar from "./Componrnts/navbar/Navbar";
import AboutSection from "./Componrnts/about/AboutSection";
import Projects from "./Componrnts/Projects/Projects";
import Contact from "./Componrnts/Contact/Contact";
import Footer from "./Componrnts/Footer/Footer";
import ScrollToTop from "./Componrnts/ScrollToTop/ScrollToTop";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <div className="container mx-auto mt-20 md:mt-24 px-4 md:px-0">
        <Herosection />
        
        <div className="mt-32 md:mt-48">
          <AboutSection />
        </div>
        
        <div className="mt-32 md:mt-44">
          <Projects />
        </div>
        
        <div className="mt-32">
          <Contact />
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </main>
  );
}
