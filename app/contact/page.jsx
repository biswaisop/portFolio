import ContactSection from "@/components/home/ContactSection";

export const metadata = { title: "Contact", description: "Get in touch with Biswadip Mandal about engineering roles, independent projects, and collaboration." };

export default function ContactPage() {
  return <main id="main-content" className="contact-page page-space" tabIndex={-1}><ContactSection standalone /></main>;
}
