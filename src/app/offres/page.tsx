import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import { OFFERS, OFFER_DETAILS } from "@/lib/site-data";
import { CameraIcon, PlayIcon, ChatIcon, DeckIcon } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Mes offres — Community management, photo, vidéo, Canva | Heimanava Socials",
  description:
    "Community management, photo événementielle, vidéo social media, présentations Canva : mes 4 offres sur devis pour faire exister votre PME polynésienne en ligne.",
  path: "/offres",
});

const OFFER_ICONS = {
  chat: ChatIcon,
  camera: CameraIcon,
  play: PlayIcon,
  deck: DeckIcon,
} as const;

export default function OffresPage() {
  return (
    <div>
      <Nav active="offres" />
      <div className={styles.header}>
        <div className={styles.breadcrumbWrap}>
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Mes Offres" }]} />
        </div>
        <div className={styles.eyebrow}>Mes offres</div>
        <h1 className={styles.title}>Quatre façons de vous rendre visible</h1>
        <p className={styles.subtitle}>
          Community management, photographie événementielle, vidéo social media et présentations
          Canva. Chaque offre est sur devis, adaptée à la réalité de votre PME.
        </p>
      </div>

      <div className={styles.grid}>
        {OFFERS.map((offer) => {
          const Icon = OFFER_ICONS[offer.icon];
          const detail = OFFER_DETAILS[offer.key];
          return (
            <Link key={offer.key} href={offer.href} className={styles.card}>
              <div className={styles.icon}>
                <Icon size={22} />
              </div>
              <div className={styles.cardTagline}>{detail.tagline}</div>
              <div className={styles.cardTitle}>{offer.name}</div>
              <p className={styles.cardDescription}>{detail.intro}</p>
              <div className={styles.cardPrice}>{offer.priceLabel}</div>
            </Link>
          );
        })}
      </div>

      <CtaBanner title="Une question avant de vous lancer ?" />
      <Footer />
    </div>
  );
}
