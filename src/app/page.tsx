import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OffresPreview from "@/components/OffresPreview";
import HistoireTeaser from "@/components/HistoireTeaser";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import TrustedBy from "@/components/TrustedBy";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
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
