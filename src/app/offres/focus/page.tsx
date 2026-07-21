import type { Metadata } from "next";
import OfferDetail from "@/components/OfferDetail";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Heimanava Focus — Photographie événementielle à Tahiti | Heimanava Socials",
  description:
    "Je couvre vos inaugurations, lancements et événements d'entreprise à Tahiti. Des photos qui racontent vraiment votre PME polynésienne. Sur devis.",
  path: "/offres/focus",
});

export default function OffreFocusPage() {
  return <OfferDetail offerKey="focus" />;
}
