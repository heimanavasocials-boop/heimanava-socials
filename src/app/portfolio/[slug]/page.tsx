import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import { PORTFOLIO_GALLERIES } from "@/lib/site-data";
import { ImagePlaceholderIcon } from "@/components/icons";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(PORTFOLIO_GALLERIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const gallery = PORTFOLIO_GALLERIES[slug];
  return {
    title: gallery ? `${gallery.titre} | Heimanava Socials` : "Projet | Heimanava Socials",
  };
}

export default async function PortfolioGalleryPage({ params }: PageProps) {
  const { slug } = await params;
  const gallery = PORTFOLIO_GALLERIES[slug];

  if (!gallery) {
    notFound();
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
      </div>

      {gallery.images.length > 0 ? (
        <div className={styles.grid}>
          {gallery.images.map((src) => (
            <div key={src} className={styles.photo}>
              <Image
                src={src}
                alt={gallery.titre}
                fill
                sizes="(max-width: 560px) 90vw, (max-width: 900px) 45vw, 33vw"
                quality={85}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyWrap}>
          <div className={styles.galleryEmpty}>
            <ImagePlaceholderIcon size={32} />
            <p className={styles.galleryEmptyText}>
              Les photos de ce projet arrivent bientôt dans cette galerie.
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
