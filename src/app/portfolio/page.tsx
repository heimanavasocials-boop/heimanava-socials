import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import { PORTFOLIO_ITEMS, formatPortfolioDate } from "@/lib/site-data";
import { ImagePlaceholderIcon } from "@/components/icons";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mon portfolio | Heimanava Socials",
};

export default function PortfolioPage() {
  const sortedItems = [...PORTFOLIO_ITEMS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
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

      <div className={styles.grid}>
        {sortedItems.map((item) => (
          <Link key={item.id} href={item.href} className={styles.card}>
            <div className={styles.imgWrap}>
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.titre}
                  fill
                  sizes="(max-width: 560px) 90vw, (max-width: 900px) 45vw, 33vw"
                  quality={85}
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <ImagePlaceholderIcon size={32} />
              )}
              <div className={styles.overlay}>
                <div className={styles.overlayTitle}>{item.titre}</div>
                <div className={styles.overlayDate}>{formatPortfolioDate(item.date)}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

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
