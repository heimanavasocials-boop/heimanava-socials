"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ProjectMosaicReveal.module.css";

export default function ProjectMosaicReveal({
  photos,
  titre,
}: {
  photos: string[];
  titre: string;
}) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !gridRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const tiles = gridRef.current!.querySelectorAll(`.${styles.tile}`);
        tiles.forEach((tile) => {
          gsap.fromTo(
            tile,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: tile,
                start: "top 88%",
              },
            }
          );
        });
      }, gridRef);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [photos]);

  return (
    <div ref={gridRef} className={styles.grid}>
      {photos.map((photo, i) => (
        <div key={photo} className={`${styles.tile} ${styles[`variant${(i % 5) + 1}`]}`}>
          <Image
            src={photo}
            alt={`${titre} — photo ${i + 1}`}
            fill
            sizes="(max-width: 560px) 50vw, (max-width: 900px) 33vw, 25vw"
            quality={80}
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}
