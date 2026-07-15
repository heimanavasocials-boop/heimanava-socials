import type { Metadata } from "next";
import OfferDetail from "@/components/OfferDetail";

export const metadata: Metadata = {
  title: "Heimanava Studio — Présentations Canva | Heimanava Socials",
};

export default function OffreStudioPage() {
  return <OfferDetail offerKey="studio" />;
}
