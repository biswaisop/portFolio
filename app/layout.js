import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";
import ContactFooter from "@/components/home/Footer";
import Navigation from "@/components/ui/Navbar";
import PageTransition from "@/components/ui/PageTransition";
import SmoothScrollProvider from "@/components/ui/SmoothScroll";
import { getAssetPath } from "@/lib/utils";

const geist = localFont({ src: "./fonts/GeistVF.woff", display: "swap", variable: "--font-geist", adjustFontFallback: "Arial" });
const title = "Biswadip Mandal | Software Engineer & AI Product Builder";
const description = "Selected work and independent software projects by Biswadip Mandal, a Computer Science and Engineering student based in India.";

export const metadata = {
  title: { default: title, template: "%s | Biswadip Mandal" },
  description,
  authors: [{ name: "Biswadip Mandal" }],
  openGraph: { title, description, type: "website" },
  icons: { icon: getAssetPath("/favicon.ico") },
};

export default function RootLayout({ children }) {
  const home = getAssetPath("/");
  const intro = `try { if (location.pathname.replace(/\\/$/, "") === ${JSON.stringify(home.replace(/\/$/, ""))} && !matchMedia("(prefers-reduced-motion: reduce)").matches && !sessionStorage.getItem("portfolio-intro")) document.documentElement.setAttribute("data-intro", ""); } catch {}`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: intro }} /></head>
      <body className={geist.variable}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SmoothScrollProvider>
          <Navigation />
          {children}
          <ContactFooter />
          <PageTransition />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
