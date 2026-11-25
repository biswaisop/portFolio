import AnimatedText from "@/components/ui/AnimatedText";
import MagneticButton from "@/components/ui/MagneticButton";
import { RouteLink } from "@/components/ui/PageTransition";

export default function AboutSection() {
  return (
    <section className="intro-section site-wrap" id="intro">
      <AnimatedText lines={["I build intelligent software,", "automate complex workflows,", "and turn ideas into", "meaningful products."]} className="intro-statement" />
      <div className="intro-side">
        <p>I&apos;m a Computer Science student exploring the intersection of artificial intelligence, software engineering, and scalable systems.</p>
        <MagneticButton className="circle-action circle-action--dark" as={RouteLink} href="/about/">About me</MagneticButton>
      </div>
    </section>
  );
}
