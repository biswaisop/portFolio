import { ArrowDownLeft, Globe2 } from "lucide-react";
import { profile } from "@/lib/portfolio";
import Marquee from "@/components/ui/Marquee";
import Portrait from "@/components/ui/Portrait";
import ScrollScene from "@/components/ui/ScrollScene";

export default function HeroSection() {
  return (
    <ScrollScene as="section" className="hero" aria-label="Introduction">
      <div className="hero-portrait" data-parallax><Portrait priority /></div>
      <div className="hero-location"><Globe2 aria-hidden="true" /><span>{profile.location}</span></div>
      <div className="hero-role">
        <a href="#intro" aria-label="Scroll to the introduction"><ArrowDownLeft aria-hidden="true" size={32} strokeWidth={1.5} /></a>
        <p>Software Engineer &amp;<br />AI Product Builder</p>
      </div>
      <Marquee name={profile.name} />
    </ScrollScene>
  );
}
