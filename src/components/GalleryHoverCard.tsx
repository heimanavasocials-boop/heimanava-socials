"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "./icons";
import styles from "./GalleryHoverCard.module.css";

export default function GalleryHoverCard({
  href,
  image,
  titre,
  isVideo = false,
}: {
  href: string;
  image?: string;
  titre: string;
  isVideo?: boolean;
}) {
  const [active, setActive] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const canHover =
      typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;
    if (!canHover && !active) {
      e.preventDefault();
      setActive(true);
    }
  }

  return (
    <Link
      href={href}
      className={`${styles.card} ${active ? styles.isActive : ""}`}
      onClick={handleClick}
    >
      {image ? (
        <Image
          src={image}
          alt={titre}
          fill
          sizes="(max-width: 560px) 90vw, (max-width: 900px) 45vw, 33vw"
          quality={85}
          className={styles.image}
        />
      ) : (
        <div className={styles.placeholder} />
      )}
      {isVideo && (
        <div className={styles.playBadge}>
          <PlayIcon size={16} />
        </div>
      )}
      <div className={styles.overlay}>
        <p className={styles.title}>{titre}</p>
      </div>
    </Link>
  );
}
