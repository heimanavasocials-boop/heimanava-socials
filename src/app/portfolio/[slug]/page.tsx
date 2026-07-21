import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import ProjectMosaicReveal from "@/components/ProjectMosaicReveal";
import { PORTFOLIO_GALLERIES, PORTFOLIO_ITEMS } from "@/lib/site-data";
import { ImagePlaceholderIcon } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Short, click-worthy meta descriptions (≤160 chars) — the on-page
// `gallery.description` is written for readers, not search snippets.
const META_DESCRIPTIONS: Record<string, string> = {
  "banque-images-iae-polynesie":
    "Shooting photo avec les étudiants de l'UPF - IAE Polynésie, une création Heimanava Socials à Tahiti. Découvrez la galerie complète.",
  "exposition-aika-bu":
    "Reportage photo de l'exposition 'Aikā à la Bibliothèque universitaire de la Polynésie française, une création Heimanava Socials à Tahiti.",
  "promotion-master-cca":
    "Shooting photo pour la promotion du Master CCA à l'UPF, une création Heimanava Socials à Tahiti, Polynésie française.",
  "tehau-pearl":
    "Vidéos courtes format réseaux sociaux pour Tehau Pearl, une création Heimanava Socials à Tahiti, Polynésie française.",
  oravai:
    "Vidéos courtes format réseaux sociaux pour Oravai, une création Heimanava Socials à Tahiti, Polynésie française.",
};

export function generateStaticParams() {
  return Object.keys(PORTFOLIO_GALLERIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const gallery = PORTFOLIO_GALLERIES[slug];

  if (!gallery) {
    return buildMetadata({
      title: "Projet introuvable | Heimanava Socials",
      description: "Ce projet n'existe pas ou plus sur le portfolio de Heimanava Socials.",
      path: `/portfolio/${slug}`,
    });
  }

  const coverImage = PORTFOLIO_ITEMS.find((item) => item.href === `/portfolio/${slug}`)?.image;

  return buildMetadata({
    title: `${gallery.titre} | Heimanava Socials`,
    description:
      META_DESCRIPTIONS[slug] ??
      `Découvrez « ${gallery.titre} », une création Heimanava Socials pour une PME ou institution de Polynésie française.`,
    path: `/portfolio/${slug}`,
    image: coverImage,
  });
}

export default async function PortfolioGalleryPage({ params }: PageProps) {
  const { slug } = await params;
  const gallery = PORTFOLIO_GALLERIES[slug];

  if (!gallery) {
    notFound();
  }

  const hasVideos = (gallery.videos?.length ?? 0) > 0;
  const hasImages = gallery.images.length > 0;

  if (hasImages) {
    const coverImage =
      PORTFOLIO_ITEMS.find((item) => item.href === `/portfolio/${slug}`)?.image ??
      gallery.images[0];

    return (
      <div>
        <Nav active="portfolio" transparentAtTop />

        <section id="hero" className={styles.cover}>
          {coverImage && (
            <Image
              src={coverImage}
              alt={gallery.titre}
              fill
              priority
              sizes="100vw"
              quality={85}
              style={{ objectFit: "cover" }}
            />
          )}
          <div className={styles.coverOverlay} />
          <div className={styles.coverContent}>
            <h1 className={styles.coverTitle}>{gallery.titre}</h1>
            {gallery.sousTitre && <h2 className={styles.coverSubtitle}>{gallery.sousTitre}</h2>}
            <div className={styles.coverDivider} />
            <a href="#galerie" className={styles.coverCta}>
              Découvrir la galerie
            </a>
          </div>
        </section>

        <section id="galerie" className={styles.mosaicSection}>
          <ProjectMosaicReveal photos={gallery.images} titre={gallery.titre} />
        </section>

        <div className={styles.ctaSpacer}>
          <CtaBanner title="Envie d'un projet comme celui-ci ?" />
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Nav active="portfolio" />

      <div className={styles.header}>
        <div className={styles.breadcrumbWrap}>
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Mon Portfolio", href: "/portfolio" },
              { label: gallery.titre },
            ]}
          />
        </div>
        <div className={styles.eyebrow}>Portfolio</div>
        <h1 className={styles.title}>{gallery.titre}</h1>
        {gallery.description && <p className={styles.description}>{gallery.description}</p>}
      </div>

      {hasVideos ? (
        <div className={styles.grid}>
          {gallery.videos!.map((src) => (
            <div key={src} className={styles.video}>
              <video src={src} controls autoPlay playsInline muted loop preload="auto" />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyWrap}>
          <div className={styles.galleryEmpty}>
            <ImagePlaceholderIcon size={32} />
            <p className={styles.galleryEmptyText}>
              Les contenus de ce projet arrivent bientôt dans cette galerie.
            </p>
          </div>
        </div>
      )}

      <div className={styles.ctaSpacer}>
        <CtaBanner title="Envie d'un projet comme celui-ci ?" />
      </div>

      <Footer />
    </div>
  );
}
