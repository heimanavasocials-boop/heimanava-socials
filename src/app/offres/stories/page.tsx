import type { Metadata } from "next";
import OfferDetail from "@/components/OfferDetail";

export const metadata: Metadata = {
  title: "Heimanava Stories — Vidéo social media | Heimanava Socials",
};

export default function OffreStoriesPage() {
  return <OfferDetail offerKey="stories" />;
}
