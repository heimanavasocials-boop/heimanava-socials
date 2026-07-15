"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";
import { MailIcon, PhoneIcon, InstagramIcon, TikTokIcon } from "./icons";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
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
            <a href="tel:+68959282" className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <PhoneIcon />
              </span>
              +689 59 28 26
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
              type="text"
              placeholder="Votre nom"
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
              type="text"
              placeholder="Restauration, artisanat, immobilier…"
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-service">
              Service qui vous intéresse
            </label>
            <select id="contact-service" className={styles.select} defaultValue="pro">
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
              placeholder="Parlez-moi un peu de votre PME et de ce dont vous avez besoin…"
              rows={4}
              className={styles.textarea}
            />
          </div>
          <button type="submit" className={styles.submit}>
            Envoyer
          </button>
          {submitted && (
            <div className={styles.confirmation}>Merci ! Cassie vous répond très vite ✦</div>
          )}
        </form>
      </div>
    </div>
  );
}
