import type { Metadata } from "next";
import OfferDetail from "@/components/OfferDetail";

export const metadata: Metadata = {
  title: "Heimanava Pro — Community management | Heimanava Socials",
};

export default function OffreProPage() {
  return <OfferDetail offerKey="pro" />;
}
