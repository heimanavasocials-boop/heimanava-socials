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
          <h2 className={styles.title}>Je ne suis pas arrivée. J&apos;avance.</h2>
          <p className={styles.paragraph}>
            J&apos;ai lancé mon entreprise pendant mes études. Pas par hasard. Par nécessité.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraphLast}`}>
            Étudiante. Pas de portfolio. Pas d&apos;historique client. Alors j&apos;ai avancé
            quand même, petit à petit, mission après mission.
          </p>
          <Link href="/histoire" className={styles.cta}>
            Lire mon histoire complète
          </Link>
        </div>
      </div>
    </div>
  );
}
