"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";
import { MailIcon, PhoneIcon, InstagramIcon, TikTokIcon } from "./icons";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: data.get("nom"),
          email: data.get("email"),
          entreprise: data.get("entreprise"),
          secteur: data.get("secteur"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Échec de l'envoi");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className={styles.section}>
      <div className={styles.grid}>
        <div>
          <div className={styles.eyebrow}>Contact</div>
          <h2 className={styles.title}>Passons à l&apos;action</h2>
          <p className={styles.intro}>
            Ensemble, faisons rayonner les PME polynésiennes. Un message, un appel découverte, et
            un devis personnalisé adapté à votre réalité, pas de tunnel de vente froid.
          </p>
          <div className={styles.contactList}>
            <a href="mailto:heimanava.socials@gmail.com" className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <MailIcon />
              </span>
              heimanava.socials@gmail.com
            </a>
            <a href="tel:+68989592826" className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <PhoneIcon />
              </span>
              +689 89 59 28 26
            </a>
            <a href="https://instagram.com/heimanava_socials" className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <InstagramIcon />
              </span>
              @heimanava_socials
            </a>
            <a href="https://tiktok.com/@heimanava.socials" className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <TikTokIcon />
              </span>
              @heimanava.socials
            </a>
          </div>
          <div className={styles.location}>Basée à Tahiti, Polynésie française</div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-nom">
              Nom
            </label>
            <input
              id="contact-nom"
              name="nom"
              type="text"
              placeholder="Votre nom"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="votre@email.com"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-entreprise">
              Entreprise
            </label>
            <input
              id="contact-entreprise"
              name="entreprise"
              type="text"
              placeholder="Nom de votre PME"
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-secteur">
              Secteur d&apos;activité
            </label>
            <input
              id="contact-secteur"
              name="secteur"
              type="text"
              placeholder="Restauration, artisanat, immobilier…"
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-service">
              Service qui vous intéresse
            </label>
            <select id="contact-service" name="service" className={styles.select} defaultValue="pro">
              <option value="pro">Heimanava Pro : Community management</option>
              <option value="focus">Heimanava Focus : Photographie événementielle</option>
              <option value="stories">Heimanava Stories : Vidéo courte format social</option>
              <option value="studio">Heimanava Studio : Création Canva</option>
              <option value="inconnu">Je ne sais pas encore</option>
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Parlez-moi un peu de votre PME et de ce dont vous avez besoin…"
              rows={4}
              className={styles.textarea}
            />
          </div>
          <button type="submit" className={styles.submit} disabled={status === "sending"}>
            {status === "sending" ? "Envoi en cours…" : "Envoyer"}
          </button>
          {status === "success" && (
            <div className={styles.confirmation}>Merci ! Cassie vous répond très vite ✦</div>
          )}
          {status === "error" && (
            <div className={styles.error}>
              Un problème est survenu. Réessayez ou écrivez directement à
              heimanava.socials@gmail.com.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
