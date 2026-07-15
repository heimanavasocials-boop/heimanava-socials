import type { Metadata } from "next";
import OfferDetail from "@/components/OfferDetail";

export const metadata: Metadata = {
  title: "Heimanava Focus — Photographie événementielle | Heimanava Socials",
};

export default function OffreFocusPage() {
  return <OfferDetail offerKey="focus" />;
}
