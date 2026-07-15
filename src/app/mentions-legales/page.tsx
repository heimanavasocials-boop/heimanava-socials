import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mentions légales | Heimanava Socials",
};

export default function MentionsLegalesPage() {
  return (
    <div>
      <Nav />
      <div className={styles.section}>
        <div className={styles.breadcrumbWrap}>
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]} />
        </div>
        <h1 className={styles.title}>Mentions légales</h1>
        <p className={styles.paragraph}>
          Cette page sera complétée avec les informations légales de Heimanava Socials : SIRET,
          forme juridique et hébergeur du site.
        </p>
        <p className={styles.paragraph}>
          Pour toute question en attendant, vous pouvez me contacter directement à{" "}
          <a href="mailto:heimanava.socials@gmail.com" className={styles.contactLink}>
            heimanava.socials@gmail.com
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}
