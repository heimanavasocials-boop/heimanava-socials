import Link from "next/link";
import styles from "./Footer.module.css";
import { NAV_LINKS, OFFERS, SOCIAL_LINKS } from "@/lib/site-data";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon, MailIcon } from "./icons";

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  tiktok: TikTokIcon,
  email: MailIcon,
} as const;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.logo}>Heimanava Socials</div>
          <div className={styles.heading}>Services</div>
          <div className={styles.list}>
            {OFFERS.map((offer) => (
              <Link key={offer.key} href={offer.href} className={styles.link}>
                {offer.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.heading}>Explorer</div>
          <div className={styles.list}>
            {NAV_LINKS.map((link) => (
              <Link key={link.key} href={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.heading}>Me contacter</div>
          <div className={styles.contactBlock}>
            <div>Tahiti, Polynésie française</div>
            <a href="mailto:heimanava.socials@gmail.com" className={styles.link}>
              heimanava.socials@gmail.com
            </a>
            <a href="tel:+68989592826" className={styles.link}>
              +689 89 59 28 26
            </a>
          </div>
        </div>

        <div>
          <div className={styles.heading}>Réseaux sociaux</div>
          <div className={styles.socials}>
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.key];
              return (
                <a
                  key={social.key}
                  href={social.href}
                  aria-label={social.label}
                  className={styles.socialIcon}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <Link href="/mentions-legales" className={styles.bottomLink}>
          Mentions légales
        </Link>
        <div className={styles.copyright}>© Heimanava Socials 2026</div>
      </div>
    </footer>
  );
}
