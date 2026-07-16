import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import CtaBanner from "./CtaBanner";
import { OFFER_DETAILS } from "@/lib/site-data";
import { ImagePlaceholderIcon } from "./icons";
import styles from "./OfferDetail.module.css";

export default function OfferDetail({ offerKey }: { offerKey: keyof typeof OFFER_DETAILS }) {
  const offer = OFFER_DETAILS[offerKey];

  return (
    <div>
      <Nav active="offres" />
      <div className={styles.header}>
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Mes Offres", href: "/offres" },
            { label: offer.name },
          ]}
        />
        <div className={styles.eyebrow}>{offer.tagline}</div>
        <h1 className={styles.title}>{offer.name}</h1>
        <p className={styles.intro}>{offer.intro}</p>
      </div>

      <div className={styles.content}>
        <ul className={styles.bullets}>
          {offer.bullets.map((bullet) => (
            <li key={bullet} className={styles.bullet}>
              {bullet}
            </li>
          ))}
        </ul>
        <div className={styles.pricingBox}>
          <div className={styles.pricingLabel}>Sur devis</div>
          <p className={styles.pricingNote}>{offer.pricingNote}</p>
          <Link href="/#contact" className={styles.pricingCta}>
            Discutons de votre projet
          </Link>
        </div>
      </div>

      {offer.gallery && (
        <div className={styles.gallerySection}>
          <div className={styles.galleryHeading}>
            {offer.gallery === "photo" ? "Galerie photo" : "Galerie vidéo"}
          </div>
          {offer.galleryItems && offer.galleryItems.length > 0 ? (
            <div className={styles.galleryProjects}>
              {offer.galleryItems.map((item) => (
                <Link key={item.href} href={item.href} className={styles.galleryProjectCard}>
                  <div className={styles.galleryProjectThumb}>
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.titre}
                        fill
                        sizes="260px"
                        quality={85}
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <ImagePlaceholderIcon size={28} />
                    )}
                  </div>
                  <div className={styles.galleryProjectTitle}>{item.titre}</div>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.galleryEmpty}>
              <ImagePlaceholderIcon size={32} />
              <p className={styles.galleryEmptyText}>
                Mes premières réalisations arrivent bientôt dans cette galerie.
              </p>
            </div>
          )}
        </div>
      )}

      <CtaBanner title="Envie de faire connaître votre PME ?" />
      <Footer />
    </div>
  );
}
