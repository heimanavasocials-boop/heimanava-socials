import Link from "next/link";
import styles from "./OffresPreview.module.css";
import { OFFERS } from "@/lib/site-data";
import { CameraIcon, PlayIcon, ChatIcon, DeckIcon } from "./icons";

const OFFER_ICONS = {
  chat: ChatIcon,
  camera: CameraIcon,
  play: PlayIcon,
  deck: DeckIcon,
} as const;

export default function OffresPreview() {
  return (
    <div id="offres" className={styles.section}>
      <div className={styles.heading}>
        <div className={styles.eyebrow}>Mes offres</div>
        <h2 className={styles.title}>Mes 4 offres sur mesure</h2>
      </div>
      <div className={styles.grid}>
        {OFFERS.map((offer) => {
          const Icon = OFFER_ICONS[offer.icon];
          return (
            <Link key={offer.key} href={offer.href} className={styles.card}>
              <div className={styles.icon}>
                <Icon />
              </div>
              <div className={styles.cardTitle}>{offer.name}</div>
              <p className={styles.cardDescription}>{offer.description}</p>
              <div className={styles.cardPrice}>{offer.priceLabel}</div>
            </Link>
          );
        })}
      </div>
      <div className={styles.footerLink}>
        <Link href="/offres" className={styles.viewAll}>
          Voir toutes mes offres en détail →
        </Link>
      </div>
    </div>
  );
}
