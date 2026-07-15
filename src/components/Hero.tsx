"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !frameRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          frameRef.current,
          { scale: 1, borderRadius: "0px" },
          {
            scale: 0.88,
            borderRadius: "28px",
            ease: "none",
            scrollTrigger: {
              trigger: `.${styles.section}`,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div id="hero" className={styles.section}>
      <div ref={frameRef} className={styles.frame}>
        {!videoFailed && (
          <video
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoFailed(true)}
            className={styles.video}
          >
            <source src="/video/hero-video.mp4" type="video/mp4" />
          </video>
        )}
        <div className={styles.scrim} />
        {videoFailed && (
          <>
            <div className={styles.fallback} />
            <div className={styles.fallbackNote}>
              Vidéo indisponible pour le moment
            </div>
          </>
        )}
        <div className={styles.content}>
          <div className={styles.inner}>
            <div className={styles.eyebrow}>Agence digitale · Tahiti, Polynésie française</div>
            <h1 className={styles.title}>
              La communication digitale que les PME polynésiennes méritent enfin.
            </h1>
            <p className={styles.subtitle}>
              Je construis avec vous, pas pour vous. J&apos;accompagne les commerçants et
              entrepreneurs du fenua qui sont excellents dans leur métier, mais invisibles en
              ligne.
            </p>
            <a href="#contact" className={styles.cta}>
              Discutons de votre projet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
