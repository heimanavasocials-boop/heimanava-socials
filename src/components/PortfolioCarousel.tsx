"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PortfolioCarousel.module.css";
import { PORTFOLIO_ITEMS, formatPortfolioDate } from "@/lib/site-data";
import { ChevronLeftIcon, ChevronRightIcon, ImagePlaceholderIcon } from "./icons";

const STEP = 358;
const AUTOPLAY_INTERVAL = 3200;

export default function PortfolioCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const sortedItems = [...PORTFOLIO_ITEMS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const stopCarousel = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startCarousel = () => {
    stopCarousel();
    timerRef.current = setInterval(() => {
      const el = carouselRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: STEP, behavior: "smooth" });
      }
    }, AUTOPLAY_INTERVAL);
  };

  useEffect(() => {
    startCarousel();
    return stopCarousel;
  }, []);

  const scrollByStep = (dir: 1 | -1) => {
    carouselRef.current?.scrollBy({ left: dir * STEP, behavior: "smooth" });
  };

  return (
    <div id="portfolio" className={styles.section}>
      <div className={styles.heading}>
        <div className={styles.eyebrow}>Portfolio</div>
        <h2 className={styles.title}>Mes créations</h2>
      </div>
      <div className={styles.carouselOuter}>
        <div
          ref={carouselRef}
          className={styles.carousel}
          onMouseEnter={stopCarousel}
          onMouseLeave={startCarousel}
        >
          {sortedItems.map((item) => (
            <Link key={item.id} href={item.href} className={styles.card}>
              <div className={styles.imgWrap}>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.titre}
                    fill
                    sizes="340px"
                    quality={85}
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <ImagePlaceholderIcon size={32} />
                )}
              </div>
              <div className={styles.overlay}>
                <div className={styles.overlayTitle}>{item.titre}</div>
                <div className={styles.overlayDate}>{formatPortfolioDate(item.date)}</div>
              </div>
            </Link>
          ))}
        </div>
        <button
          type="button"
          aria-label="Précédent"
          onClick={() => scrollByStep(-1)}
          className={`${styles.arrow} ${styles.arrowPrev}`}
        >
          <ChevronLeftIcon />
        </button>
        <button
          type="button"
          aria-label="Suivant"
          onClick={() => scrollByStep(1)}
          className={`${styles.arrow} ${styles.arrowNext}`}
        >
          <ChevronRightIcon />
        </button>
      </div>
      <div className={styles.actions}>
        <a href="#contact" className={styles.testimonyCta}>
          Vous avez travaillé avec moi ? Partagez votre expérience
        </a>
        <Link href="/portfolio" className={styles.viewAll}>
          Voir mon portfolio complet →
        </Link>
      </div>
    </div>
  );
}
