import Image from "next/image";
import Link from "next/link";
import styles from "./HistoireTeaser.module.css";
import cassiePortrait from "../../public/images/cassie-portrait.webp";

export default function HistoireTeaser() {
  return (
    <div id="histoire" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.photoWrap}>
          <Image
            src={cassiePortrait}
            alt="Cassie, fondatrice de Heimanava Socials, appareil photo à la main"
            fill
            className={styles.photo}
            sizes="(max-width: 860px) 90vw, 380px"
          />
        </div>
        <div>
          <div className={styles.eyebrow}>Une fondatrice passionnée</div>
          <h2 className={styles.title}>
            Je suis Cassidy. Et cette histoire est loin d&apos;être terminée.
          </h2>
          <p className={styles.paragraph}>
            J&apos;ai lancé mon entreprise pendant mes études. Pas par hasard, mais par
            nécessité.
          </p>
          <p className={styles.paragraph}>
            On m&apos;a dit qu&apos;il fallait un CV solide et un carnet d&apos;adresses pour se
            lancer. Moi, j&apos;avais l&apos;inverse. Mon portfolio n&apos;est pas encore aussi
            rempli que celui des grandes agences. Mais mon envie, elle, n&apos;a jamais été
            aussi claire : construire quelque chose à moi, et aider les PME du fenua à enfin
            exister sur les réseaux, elles qui sont excellentes dans leur métier mais invisibles
            en ligne.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraphLast}`}>
            J&apos;ai arrêté d&apos;attendre. J&apos;ai créé Heimanava Socials.
          </p>
          <Link href="/histoire" className={styles.cta}>
            Lire mon histoire complète
          </Link>
        </div>
      </div>
    </div>
  );
}
