import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import cassiePortrait from "../../../public/images/cassie-portrait.webp";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mon histoire | Heimanava Socials",
};

const BLOCKS = [
  {
    number: "01",
    title: "Mon état d'esprit",
    text: "Je suis présente à chaque étape. Pas de prestation livrée à distance sans suivi : je pense chaque solution pour la réalité concrète de votre PME, pas pour un client type qui n'existe pas.",
  },
  {
    number: "02",
    title: "Mon parcours",
    text: "J'ai commencé étudiante, sans portfolio ni historique client. J'ai construit ma légitimité sur le terrain, mission après mission, en faisant mes preuves plutôt qu'en les affichant.",
  },
  {
    number: "03",
    title: "Ma manière de travailler",
    text: "Je suis une partenaire au quotidien, pas une prestataire de passage. Je reste disponible une fois le projet lancé, pas seulement le temps de la vente.",
  },
];

export default function HistoirePage() {
  return (
    <div>
      <Nav active="histoire" />

      <div className={styles.header}>
        <div className={styles.breadcrumbWrap}>
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Mon Histoire" }]} />
        </div>
        <div className={styles.eyebrow}>Mon histoire</div>
        <h1 className={styles.title}>Mon histoire</h1>
        <p className={styles.subtitle}>
          Je ne suis pas une agence corporate. Je suis une entrepreneure du fenua qui construit
          avec vous, pas pour vous.
        </p>
      </div>

      <div className={styles.portrait}>
        <div className={styles.photoWrap}>
          <Image
            src={cassiePortrait}
            alt="Cassie, fondatrice de Heimanava Socials, appareil photo à la main"
            fill
            className={styles.photo}
            sizes="(max-width: 760px) 90vw, 380px"
          />
        </div>
        <div>
          <h2 className={styles.signature}>Je ne suis pas arrivée. J&apos;avance.</h2>
          <p className={styles.paragraph}>
            J&apos;ai lancé mon entreprise pendant mes études. Pas par hasard. Par nécessité.
          </p>
          <p className={styles.paragraph}>
            Diplômée d&apos;une Licence Économie-Gestion à l&apos;UPF, aujourd&apos;hui en 1ère
            année de Master Management Commerce International à l&apos;IAE Polynésie, et engagée
            avec le SNEE et Pépite Polynésie, j&apos;ai vu autour de moi des commerçants et des
            entrepreneurs excellents dans leur métier, mais invisibles en ligne. Personne ne
            s&apos;occupait vraiment d&apos;eux.
          </p>
          <p className={styles.paragraph}>
            Alors j&apos;ai décidé de m&apos;en occuper. Pas avec un discours corporate, mais avec
            une communication humaine, locale et accessible.
          </p>
        </div>
      </div>

      <div className={styles.blocks}>
        {BLOCKS.map((block) => (
          <div key={block.number} className={styles.block}>
            <div className={styles.blockNumber}>{block.number}</div>
            <div>
              <h3 className={styles.blockTitle}>{block.title}</h3>
              <p className={styles.blockText}>{block.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.approach}>
        <div className={styles.approachEyebrow}>Mon approche</div>
        <h2 className={styles.approachTitle}>Apprendre à vous connaître, vraiment</h2>
        <p className={styles.approachText}>
          Avant de créer le premier visuel, je prends le temps de comprendre votre entreprise :
          votre histoire, votre clientèle, vos contraintes. C&apos;est ce qui me permet de
          construire une communication qui vous ressemble vraiment, pas un modèle générique
          appliqué à toutes les PME.
        </p>
      </div>

      <div className={styles.ctaSpacer}>
        <CtaBanner eyebrow="Et maintenant ?" title="Envie de travailler ensemble ?" />
      </div>

      <Footer />
    </div>
  );
}
