import type { Metadata } from "next";

/**
 * No custom domain is configured yet (checked via `vercel domains ls`, 0 results).
 * Update this the day a custom domain is pointed at the Vercel project —
 * every URL in metadata, the sitemap, robots.txt and JSON-LD flows from here.
 */
export const SITE_URL = "https://heimanava-socials.vercel.app";
export const SITE_NAME = "Heimanava Socials";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** Overrides the default site-wide OG image (e.g. a project's own cover photo) */
  image?: string;
};

export function buildMetadata({ title, description, path, image }: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}
