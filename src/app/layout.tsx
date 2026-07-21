import type { Metadata } from "next";
import { fraunces, montserrat, bugaki } from "@/lib/fonts";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    title: "Heimanava Socials — Agence digitale à Tahiti, Polynésie française",
    description:
      "Je construis avec vous, pas pour vous. Community management, photo événementielle, vidéo social media et présentations Canva pour les PME polynésiennes.",
    path: "/",
  }),
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
