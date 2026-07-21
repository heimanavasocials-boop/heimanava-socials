import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OffresPreview from "@/components/OffresPreview";
import HistoireTeaser from "@/components/HistoireTeaser";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import TrustedBy from "@/components/TrustedBy";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/seo";

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Heimanava Socials",
  description:
    "Agence de communication digitale accompagnant les PME et institutions de Polynésie française : community management, photographie événementielle, vidéo social media, présentations Canva.",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  email: "heimanava.socials@gmail.com",
  telephone: "+689 89 59 28 26",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tahiti",
    addressRegion: "Polynésie française",
    addressCountry: "PF",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Polynésie française",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61572233947652",
    "https://instagram.com/heimanava_socials",
    "https://www.linkedin.com/in/cassidy-chebret-heimanava-socials",
    "https://tiktok.com/@heimanava.socials",
  ],
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />
      <Nav active="accueil" transparentAtTop />
      <Hero />
      <OffresPreview />
      <HistoireTeaser />
      <PortfolioCarousel />
      <TrustedBy />
      <ContactSection />
      <Footer />
    </div>
  );
}
