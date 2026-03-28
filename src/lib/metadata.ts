import type { Metadata } from "next";
import { siteUrl } from "@/content/site-data";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
}: MetadataInput): Metadata {
  const canonical = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    icons: {
      icon: "/assets/images/logo.png",
      apple: "/assets/images/logo.png",
    },
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      images: ["/assets/images/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/images/logo.png"],
    },
  };
}
