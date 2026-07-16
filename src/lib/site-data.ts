export const NAV_LINKS = [
  { key: "accueil", label: "Accueil", href: "/" },
  { key: "offres", label: "Mes Offres", href: "/offres" },
  { key: "histoire", label: "Mon Histoire", href: "/histoire" },
  { key: "portfolio", label: "Mon Portfolio", href: "/portfolio" },
] as const;

export const SOCIAL_LINKS = [
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61572233947652",
  },
  { key: "instagram", label: "Instagram", href: "https://instagram.com/heimanava_socials" },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cassidy-chebret-heimanava-socials",
  },
  { key: "tiktok", label: "TikTok", href: "https://tiktok.com/@heimanava.socials" },
  { key: "email", label: "Email", href: "mailto:heimanava.socials@gmail.com" },
] as const;

export const OFFERS = [
  {
    key: "pro",
    name: "Heimanava Pro",
    description: "Community management : stratégie, visuels, posts.",
    priceLabel: "Sur devis",
    href: "/offres/pro",
    icon: "chat",
  },
  {
    key: "focus",
    name: "Heimanava Focus",
    description: "Photographie événementielle professionnelle.",
    priceLabel: "Sur devis",
    href: "/offres/focus",
    icon: "camera",
  },
  {
    key: "stories",
    name: "Heimanava Stories",
    description: "Vidéo courte format social media.",
    priceLabel: "Sur devis",
    href: "/offres/stories",
    icon: "play",
  },
  {
    key: "studio",
    name: "Heimanava Studio",
    description: "Création ou refonte de vos supports Canva.",
    priceLabel: "Sur devis",
    href: "/offres/studio",
    icon: "deck",
  },
] as const;

export type OfferDetail = {
  key: string;
  name: string;
  tagline: string;
  intro: string;
  bullets: string[];
  pricingNote: string;
  gallery?: "photo" | "video";
  galleryItems?: { titre: string; href: string; image?: string }[];
};

export const OFFER_DETAILS: Record<string, OfferDetail> = {
  pro: {
    key: "pro",
    name: "Heimanava Pro",
    tagline: "Community management",
    intro:
      "Je prends en charge la présence de votre PME sur les réseaux sociaux, du premier post à une stratégie qui tient dans la durée. Je construis avec vous une ligne éditoriale qui vous ressemble vraiment.",
    bullets: [
      "Stratégie éditoriale pensée pour votre secteur et votre clientèle",
      "Création de visuels adaptés à votre image de marque",
      "Rédaction de posts dans un ton qui vous ressemble",
      "Publication régulière, sans que vous ayez à y penser",
    ],
    pricingNote: "Sur devis, après un appel découverte. Engagement de 3 mois minimum.",
  },
  focus: {
    key: "focus",
    name: "Heimanava Focus",
    tagline: "Photographie événementielle",
    intro:
      "Je couvre vos temps forts : inaugurations, lancements, séminaires, événements d'entreprise. Je garde de ces moments des images qui racontent vraiment votre PME.",
    bullets: [
      "Reportage photo complet le jour de l'événement",
      "Sélection et retouche des meilleurs clichés",
      "Livraison rapide, prête à publier",
    ],
    pricingNote: "Sur devis, selon la durée et le lieu de l'événement.",
    gallery: "photo",
    galleryItems: [
      {
        titre: "Banque d'images - IAE Polynésie",
        href: "/portfolio/banque-images-iae-polynesie",
        image: "/images/portfolio/iae-polynesie/iae-01.jpg",
      },
      {
        titre: "Exposition 'Aikā",
        href: "/portfolio/exposition-aika-bu",
        image: "/images/portfolio/exposition-aika-bu/exposition-aika-bu-01.jpg",
      },
      {
        titre: "Promotion Master CCA",
        href: "/portfolio/promotion-master-cca",
        image: "/images/portfolio/promotion-master-cca/promotion-master-cca-01.jpg",
      },
    ],
  },
  stories: {
    key: "stories",
    name: "Heimanava Stories",
    tagline: "Vidéo social media",
    intro:
      "Je tourne et je monte des vidéos courtes ou longues, pensées pour vos réseaux. Du format story rapide au contenu plus travaillé, chaque vidéo sert votre communication.",
    bullets: [
      "Tournage sur place, seule ou avec votre équipe",
      "Montage dynamique adapté à chaque plateforme",
      "Formats courts et longs selon vos besoins",
    ],
    pricingNote: "Sur devis, selon le format et la durée du montage.",
    gallery: "video",
    galleryItems: [
      {
        titre: "Tehau Pearl",
        href: "/portfolio/tehau-pearl",
        image: "/images/portfolio/tehau-pearl-cover.jpg",
      },
      {
        titre: "Oravai",
        href: "/portfolio/oravai",
        image: "/images/portfolio/oravai-cover.jpg",
      },
    ],
  },
  studio: {
    key: "studio",
    name: "Heimanava Studio",
    tagline: "Présentations Canva",
    intro:
      "Je crée ou je refonds vos supports de présentation : pitch deck, support commercial, rapport annuel, catalogue produit. Un support clair, qui vous ressemble et qui convainc.",
    bullets: [
      "Design cohérent avec votre identité visuelle",
      "Structure claire pensée pour convaincre",
      "Fichier Canva modifiable, livré prêt à l'emploi",
    ],
    pricingNote: "Sur devis, selon la taille et la complexité du support.",
  },
};

export type PortfolioItem = {
  id: string;
  titre: string;
  date: string;
  href: string;
  image?: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "home-portfolio-tehau-pearl",
    titre: "Tehau Pearl",
    date: "2026-07-16",
    href: "/portfolio/tehau-pearl",
    image: "/images/portfolio/tehau-pearl-cover.jpg",
  },
  {
    id: "home-portfolio-oravai",
    titre: "Oravai",
    date: "2026-07-15",
    href: "/portfolio/oravai",
    image: "/images/portfolio/oravai-cover.jpg",
  },
  {
    id: "home-portfolio-iae",
    titre: "Banque d'images - IAE Polynésie",
    date: "2026-07-10",
    href: "/portfolio/banque-images-iae-polynesie",
    image: "/images/portfolio/iae-polynesie/iae-01.jpg",
  },
  {
    id: "home-portfolio-aika",
    titre: "Exposition 'Aikā",
    date: "2026-07-08",
    href: "/portfolio/exposition-aika-bu",
    image: "/images/portfolio/exposition-aika-bu/exposition-aika-bu-01.jpg",
  },
  {
    id: "home-portfolio-master-cca",
    titre: "Promotion Master CCA",
    date: "2026-07-03",
    href: "/portfolio/promotion-master-cca",
    image: "/images/portfolio/promotion-master-cca/promotion-master-cca-01.jpg",
  },
];

export type PortfolioGallery = {
  slug: string;
  titre: string;
  description?: string;
  images: string[];
  videos?: string[];
};

export const PORTFOLIO_GALLERIES: Record<string, PortfolioGallery> = {
  "banque-images-iae-polynesie": {
    slug: "banque-images-iae-polynesie",
    titre: "Banque d'images - IAE Polynésie",
    images: Array.from(
      { length: 19 },
      (_, i) => `/images/portfolio/iae-polynesie/iae-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  },
  "exposition-aika-bu": {
    slug: "exposition-aika-bu",
    titre: "Exposition 'Aikā",
    description:
      "Exposition 'Aikā à la Bibliothèque universitaire de la Polynésie française, fruit d'une collaboration entre les étudiants en langues et civilisations polynésiennes de l'UPF et l'association Mata 'Avei'a.",
    images: Array.from(
      { length: 11 },
      (_, i) =>
        `/images/portfolio/exposition-aika-bu/exposition-aika-bu-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  },
  "promotion-master-cca": {
    slug: "promotion-master-cca",
    titre: "Promotion Master CCA",
    description: "Shooting photo de la promotion Master CCA à l'UPF.",
    images: Array.from(
      { length: 2 },
      (_, i) =>
        `/images/portfolio/promotion-master-cca/promotion-master-cca-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  },
  "tehau-pearl": {
    slug: "tehau-pearl",
    titre: "Tehau Pearl",
    images: [],
    videos: Array.from(
      { length: 11 },
      (_, i) => `/video/tehau-pearl/tehau-pearl-${String(i + 1).padStart(2, "0")}.mp4`
    ),
  },
  oravai: {
    slug: "oravai",
    titre: "Oravai",
    images: [],
    videos: Array.from(
      { length: 6 },
      (_, i) => `/video/oravai/oravai-${String(i + 1).padStart(2, "0")}.mp4`
    ),
  },
};

const MONTH_NAMES = [
  "janv.",
  "févr.",
  "mars",
  "avr.",
  "mai",
  "juin",
  "juil.",
  "août",
  "sept.",
  "oct.",
  "nov.",
  "déc.",
];

export function formatPortfolioDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`;
}
