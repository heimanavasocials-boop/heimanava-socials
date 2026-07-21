import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import GalleryHoverCard from "@/components/GalleryHoverCard";
import { PORTFOLIO_ITEMS, PORTFOLIO_GALLERIES } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

function slugFromHref(href: string) {
  return href.replace("/portfolio/", "");
}

export const metadata: Metadata = buildMetadata({
  title: "Mon portfolio — Créations pour les PME de Polynésie française | Heimanava Socials",
  description:
    "Mes créations pour les PME et institutions de Polynésie française : community management, photo événementielle, vidéo. Pas de client nommé, juste le travail.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const sortedItems = [...PORTFOLIO_ITEMS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const photoItems = sortedItems.filter(
    (item) => (PORTFOLIO_GALLERIES[slugFromHref(item.href)]?.images.length ?? 0) > 0
  );
  const videoItems = sortedItems.filter(
    (item) => (PORTFOLIO_GALLERIES[slugFromHref(item.href)]?.videos?.length ?? 0) > 0
  );

  return (
    <div>
      <Nav active="portfolio" />

      <div className={styles.header}>
        <div className={styles.breadcrumbWrap}>
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Mon Portfolio" }]} />
        </div>
        <div className={styles.eyebrow}>Portfolio</div>
        <h1 className={styles.title}>Mes créations</h1>
        <p className={styles.subtitle}>
          Un aperçu de mes réalisations, du plus récent au plus ancien. Pas de client nommé, pas
          de logo : juste le travail.
        </p>
      </div>

      {photoItems.length > 0 && (
        <section className={styles.gallerySection}>
          <h2 className={styles.sectionTitle}>Galerie photo</h2>
          <div className={styles.hoverGrid}>
            {photoItems.map((item) => (
              <GalleryHoverCard key={item.id} href={item.href} titre={item.titre} image={item.image} />
            ))}
          </div>
        </section>
      )}

      {videoItems.length > 0 && (
        <section className={styles.gallerySection}>
          <h2 className={styles.sectionTitle}>Productions vidéo</h2>
          <div className={styles.hoverGrid}>
            {videoItems.map((item) => (
              <GalleryHoverCard
                key={item.id}
                href={item.href}
                titre={item.titre}
                image={item.image}
                isVideo
              />
            ))}
          </div>
        </section>
      )}

      <p className={styles.emptyNote}>
        Mon portfolio s&apos;enrichit au fil des projets. De nouvelles créations arrivent
        régulièrement.
      </p>

      <div className={styles.ctaSpacer}>
        <CtaBanner title="Vous avez travaillé avec moi ? Partagez votre expérience" />
      </div>

      <Footer />
    </div>
  );
}
