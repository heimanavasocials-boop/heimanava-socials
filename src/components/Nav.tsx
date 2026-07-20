"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/site-data";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon, MailIcon } from "./icons";

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  tiktok: TikTokIcon,
  email: MailIcon,
} as const;

type NavProps = {
  active?: (typeof NAV_LINKS)[number]["key"];
  transparentAtTop?: boolean;
};

export default function Nav({ active, transparentAtTop = false }: NavProps) {
  const [solid, setSolid] = useState(!transparentAtTop);

  useEffect(() => {
    if (!transparentAtTop) return;
    const NAV_HEIGHT_BUFFER = 80;

    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const threshold = hero ? hero.offsetHeight - NAV_HEIGHT_BUFFER : 70;
      setSolid(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [transparentAtTop]);

  const contactHref = active === "accueil" ? "#contact" : "/#contact";

  return (
    <div
      className={`${styles.wrap} ${transparentAtTop ? styles.overlay : styles.sticky} ${
        solid ? styles.solid : ""
      }`}
    >
      <Link href="/" className={styles.logo}>
        Heimanava Socials
      </Link>
      <div className={styles.links}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={`${styles.link} ${link.key === active ? styles.linkActive : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className={styles.right}>
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
        <a href={contactHref} className={styles.cta}>
          Me contacter
        </a>
      </div>
    </div>
  );
}
