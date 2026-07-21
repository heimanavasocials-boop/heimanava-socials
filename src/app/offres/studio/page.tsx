import type { Metadata } from "next";
import OfferDetail from "@/components/OfferDetail";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Heimanava Studio — Présentations Canva à Tahiti | Heimanava Socials",
  description:
    "Pitch deck, support commercial, rapport annuel : je crée ou je refonds vos présentations Canva pour les PME de Polynésie française. Sur devis.",
  path: "/offres/studio",
});

export default function OffreStudioPage() {
  return <OfferDetail offerKey="studio" />;
}
