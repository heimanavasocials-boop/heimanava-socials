import Image from "next/image";
import styles from "./TrustedBy.module.css";
import { TRUSTED_LOGOS } from "@/lib/site-data";

export default function TrustedBy() {
  if (TRUSTED_LOGOS.length === 0) return null;

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Ils m&apos;ont fait confiance</h2>
      <div className={styles.logos}>
        {TRUSTED_LOGOS.map((logo) => (
          <div key={logo.id} className={styles.card}>
            <div className={styles.logoWrap}>
              <Image
                src={logo.image}
                alt={logo.name}
                fill
                sizes="170px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
