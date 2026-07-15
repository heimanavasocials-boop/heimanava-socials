import Link from "next/link";
import styles from "./CtaBanner.module.css";

type CtaBannerProps = {
  eyebrow?: string;
  title: string;
  ctaLabel?: string;
};

export default function CtaBanner({
  eyebrow,
  title,
  ctaLabel = "Discutons de votre projet",
}: CtaBannerProps) {
  return (
    <div className={styles.section}>
      {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
      <h2 className={styles.title}>{title}</h2>
      <Link href="/#contact" className={styles.cta}>
        {ctaLabel}
      </Link>
    </div>
  );
}
