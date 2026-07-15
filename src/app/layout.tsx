import type { Metadata } from "next";
import { fraunces, montserrat, bugaki } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heimanava Socials — Agence digitale à Tahiti",
  description:
    "Je construis avec vous, pas pour vous. Community management, photographie événementielle, vidéo courte et création Canva pour les PME polynésiennes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${montserrat.variable} ${bugaki.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
