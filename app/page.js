import Herosection from "@/app/Componrnts/Herosection/Herosection";
import Navbar from "./Componrnts/navbar/Navbar";
import AboutSection from "./Componrnts/about/AboutSection";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto mt-24 py-4 px-4">
        <Herosection/>
        <AboutSection/>
      </div>

    </main>
  );
}
