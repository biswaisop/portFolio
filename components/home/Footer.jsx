import { profile } from "@/lib/portfolio";
import { getAssetPath } from "@/lib/utils";
import AnimatedText from "@/components/ui/AnimatedText";
import CurvedSection from "@/components/ui/CurvedSection";
import LocalTime from "@/components/ui/LocalTime";
import MagneticButton from "@/components/ui/MagneticButton";
import { RouteLink } from "@/components/ui/PageTransition";
import Portrait from "@/components/ui/Portrait";

export default function ContactFooter() {
  return (
    <CurvedSection className="contact-footer">
      <div className="site-wrap">
        <div className="footer-heading">
          <Portrait className="footer-portrait" decorative />
          <AnimatedText lines={["Let's build", "something together."]} />
        </div>
        <div className="footer-actions">
          <a className="pill-link" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="pill-link" href={getAssetPath(profile.resume)} download>Download résumé</a>
          <MagneticButton as={RouteLink} href="/contact/#contact" className="circle-action circle-action--indigo">Get in touch</MagneticButton>
        </div>
        <div className="footer-bottom">
          <LocalTime />
          <RouteLink href="/" className="footer-wordmark" aria-label="Biswadip Mandal, home">bm<span>.</span></RouteLink>
          <nav aria-label="Social media" className="footer-socials">{profile.socials.map(({ label, href }) => <a key={href} href={href} className="underlined">{label}</a>)}</nav>
        </div>
      </div>
    </CurvedSection>
  );
}
