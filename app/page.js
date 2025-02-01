import Herosection from "@/app/Componrnts/Herosection/Herosection";
import Navbar from "./Componrnts/navbar/Navbar";
import AboutSection from "./Componrnts/about/AboutSection";
import Projects from "./Componrnts/Projects/Projects";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <div className="container mx-auto mt-20 md:mt-40 py-4 px-4 z-20">
        <div className="flex flex-row">
          <Herosection />
          <Spline
            scene="https://prod.spline.design/yv4uaSaX5JrJ3jgv/scene.splinecode"
            className="z-10 absolute left-[15%] bottom-[5%] hidden sm:block pointer-events-none "
          />
        </div>
        {/* Add margin to AboutSection */}
        <div className="md:mt-48 md:grid md:grid-cols-2">
          <AboutSection />
          <div className="hidden sm:block">
            <Spline
              scene="https://prod.spline.design/ZVJZWee5qdSNAsDl/scene.splinecode"
              className="z-10 "
            />
          </div>
          <div className="bg-black w-1/3 text-black absolute top-[184%] p-10 right-[1%] z-20 hidden sm:block pointer-events-none"></div>
        </div>
        <div className="md:mt-44">
          <Projects />
        </div>
      </div>
    </main>
  );
}
