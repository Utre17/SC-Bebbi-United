import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteChrome } from "@/components/site-chrome";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SC Bebbi United Basel 2025",
  description:
    "SC Bebbi United Basel: Spielplan und Matchcenter der Juniorinnen FF-17 & FF-14 (9v9) sowie Junioren D-9 (Fruehjahrsrunde).",
  metadataBase: new URL("https://www.scbebbiunited.ch"),
  alternates: {
    canonical: "https://www.scbebbiunited.ch/",
  },
  openGraph: {
    type: "website",
    title: "SC Bebbi United Basel 2025",
    description:
      "Spielplan und Matchcenter der Juniorinnen FF-17 & FF-14 (9v9) sowie Junioren D-9 (Fruehjahrsrunde).",
    url: "https://www.scbebbiunited.ch/",
    images: ["/assets/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SC Bebbi United Basel 2025",
    description:
      "Spielplan und Matchcenter der Juniorinnen FF-17 & FF-14 (9v9) sowie Junioren D-9 (Fruehjahrsrunde).",
    images: ["/assets/images/logo.png"],
  },
  icons: {
    icon: "/assets/images/logo.png",
    apple: "/assets/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <head>
        <Script src="https://cdn.tailwindcss.com/3.4.17" strategy="beforeInteractive" />
        <Script id="legacy-tailwind-config" src="/legacy-tailwind-config.js" strategy="beforeInteractive" />
        <Script
          src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
