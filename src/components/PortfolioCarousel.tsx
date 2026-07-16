"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PortfolioCarousel.module.css";
import { PORTFOLIO_ITEMS, formatPortfolioDate } from "@/lib/site-data";
import { ChevronLeftIcon, ChevronRightIcon, ImagePlaceholderIcon } from "./icons";

const AUTOPLAY_INTERVAL = 4000;
const SWIPE_THRESHOLD = 40;

type SlidePosition = "prev" | "active" | "next";

export default function PortfolioCarousel() {
  const sortedItems = PORTFOLIO_ITEMS.filter((item) => item.carousel !== false).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const count = sortedItems.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = (index: number) => {
    setActiveIndex(((index % count) + count) % count);
  };

  const stopAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (count < 2) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % count);
    }, AUTOPLAY_INTERVAL);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) goTo(activeIndex - 1);
    else if (delta < -SWIPE_THRESHOLD) goTo(activeIndex + 1);
    touchStartX.current = null;
  };

  const prevIndex = (activeIndex - 1 + count) % count;
  const nextIndex = (activeIndex + 1) % count;

  const visibleSlides: { item: (typeof sortedItems)[number]; index: number; position: SlidePosition }[] =
    count <= 1
      ? [{ item: sortedItems[0], index: 0, position: "active" }]
      : count === 2
        ? [
            { item: sortedItems[activeIndex], index: activeIndex, position: "active" },
            { item: sortedItems[nextIndex], index: nextIndex, position: "next" },
          ]
        : [
            { item: sortedItems[prevIndex], index: prevIndex, position: "prev" },
            { item: sortedItems[activeIndex], index: activeIndex, position: "active" },
            { item: sortedItems[nextIndex], index: nextIndex, position: "next" },
          ];

  return (
    <div id="portfolio" className={styles.section}>
      <div className={styles.heading}>
        <div className={styles.eyebrow}>Portfolio</div>
        <h2 className={styles.title}>Mes créations</h2>
      </div>

      <div
        className={styles.stage}
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {count > 1 && (
          <button
            type="button"
            aria-label="Précédent"
            onClick={() => goTo(activeIndex - 1)}
            className={`${styles.arrow} ${styles.arrowPrev}`}
          >
            <ChevronLeftIcon />
          </button>
        )}

        <div className={styles.track}>
          {visibleSlides.map(({ item, index, position }) => {
            const image = item.image ? (
              <Image
                src={item.image}
                alt={item.titre}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 900px) 75vw, 60vw"
                quality={85}
                style={{ objectFit: "cover" }}
              />
            ) : (
              <ImagePlaceholderIcon size={32} />
            );

            if (position === "active") {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`${styles.slide} ${styles.active}`}
                >
                  <div className={styles.slideImg}>{image}</div>
                  <div className={styles.slideTitle}>
                    <div className={styles.slideTitleText}>{item.titre}</div>
                    <div className={styles.slideDate}>{formatPortfolioDate(item.date)}</div>
                  </div>
                </Link>
              );
            }

            return (
              <button
                key={item.id}
                type="button"
                aria-label={`Voir ${item.titre}`}
                onClick={() => goTo(index)}
                className={`${styles.slide} ${styles[position]}`}
              >
                <div className={styles.slideImg}>{image}</div>
              </button>
            );
          })}
        </div>

        {count > 1 && (
          <button
            type="button"
            aria-label="Suivant"
            onClick={() => goTo(activeIndex + 1)}
            className={`${styles.arrow} ${styles.arrowNext}`}
          >
            <ChevronRightIcon />
          </button>
        )}
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
