import type { Metadata } from "next";
import OfferDetail from "@/components/OfferDetail";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Heimanava Pro — Community management à Tahiti | Heimanava Socials",
  description:
    "Stratégie éditoriale, visuels, posts : je gère vos réseaux sociaux pour que votre PME de Polynésie française existe enfin en ligne. Sur devis, sans jargon.",
  path: "/offres/pro",
});

export default function OffreProPage() {
  return <OfferDetail offerKey="pro" />;
}
