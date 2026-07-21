import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import cassiePortrait from "../../../public/images/cassie-portrait.webp";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Mon histoire — Cassidy, fondatrice de Heimanava Socials | Tahiti",
  description:
    "Étudiante entrepreneure à Tahiti, j'ai lancé Heimanava Socials par nécessité, pas par hasard. Voici mon parcours et pourquoi j'accompagne les PME polynésiennes.",
  path: "/histoire",
});

const BLOCKS = [
  {
    number: "01",
    title: "Ce qui a tout déclenché",
    text: "Tout n'a pas commencé avec Heimanava Socials directement. Ça a commencé par un projet laissé en suspens, quelques temps plus tôt. Pas le genre d'échec qu'on cache. Le genre qui t'oblige à regarder en face ce que tu veux vraiment faire. La passion pour la communication digitale, je l'avais depuis longtemps. Mais entre « j'aime ça » et « j'en fais mon métier », il y a un pas. Ce projet raté m'a forcée à le franchir, à sortir de ma zone de confort. Avec une envie profonde : construire quelque chose pour moi.",
  },
  {
    number: "02",
    title: "Se sentir légitime",
    text: "Le plus dur au début ? Me sentir légitime. Étudiante, un portfolio qui commençait tout juste à prendre forme, peu d'historique client. Pourquoi une entreprise me ferait confiance plutôt qu'à quelqu'un de plus expérimenté ? Cette question, je me la suis souvent posée. En même temps : les cours, les deadlines, la compta, le commercial, la production. Seule. Personne ne t'apprend ça à l'école. Mais c'est là que tu apprends vraiment.",
  },
  {
    number: "03",
    title: "Ce que je n'avais pas anticipé",
    text: "En quelques mois, j'ai progressé plus qu'en une année de cours. Des opportunités se sont présentées que je n'aurais jamais vues sans avoir sauté le pas. Et cette fierté de voir quelque chose exister parce que tu l'as voulu.",
  },
  {
    number: "04",
    title: "Continuer à apprendre, en parallèle",
    text: "Aujourd'hui, je poursuis un Master Management Commerce International à l'IAE Polynésie française, tout en portant Heimanava Socials au quotidien. C'est le statut national étudiant-entrepreneur (SNEE), avec Pépite Polynésie derrière moi, qui rend ça possible : continuer à étudier sans mettre l'entreprise en pause.",
  },
  {
    number: "05",
    title: "Heimanava Socials, aujourd'hui",
    text: "C'est une entreprise basée à Tahiti, qui accompagne les PME locales en communication digitale : community management, vidéo social media, présentations Canva, photo événementielle. Pour les entreprises qui veulent être vues. Vraiment.",
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
          <h2 className={styles.signature}>
            J&apos;ai arrêté d&apos;attendre. J&apos;ai créé Heimanava Socials.
          </h2>
          <p className={styles.paragraph}>
            J&apos;ai lancé mon entreprise pendant mes études en licence économie-gestion à
            l&apos;UPF. Pas par hasard. Par nécessité.
          </p>
          <p className={styles.paragraph}>
            On m&apos;a dit qu&apos;il fallait un CV solide et un carnet d&apos;adresses pour se
            lancer. Moi, j&apos;avais l&apos;inverse.
          </p>
          <p className={styles.paragraph}>
            Ce que j&apos;avais, c&apos;est du terrain : depuis 2021, je fais du community
            management, d&apos;abord pour une paroisse, par passion, sans savoir que ça
            deviendrait mon métier un jour.
          </p>
          <p className={styles.paragraph}>
            Mon portfolio n&apos;est pas encore aussi rempli que celui des grandes agences. Mais
            mon envie, elle, n&apos;a jamais été aussi claire : construire quelque chose à moi,
            et aider les PME du fenua à enfin exister sur les réseaux, elles qui sont excellentes
            dans leur métier mais invisibles en ligne.
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
