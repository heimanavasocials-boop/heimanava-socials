import type { Metadata } from "next";
import OfferDetail from "@/components/OfferDetail";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Heimanava Stories — Vidéo social media à Tahiti | Heimanava Socials",
  description:
    "Tournage et montage de vidéos courtes ou longues pour vos réseaux sociaux, pensées pour les PME de Polynésie française. Sur devis, sans tunnel de vente.",
  path: "/offres/stories",
});

export default function OffreStoriesPage() {
  return <OfferDetail offerKey="stories" />;
}
