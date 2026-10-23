import type { Metadata, Viewport } from "next";
import { getActiveNiche, getSiteConfig } from "@/config/active";
import { fontClassNames } from "./fonts";
import "./globals.css";

const niche = getActiveNiche();
const config = getSiteConfig("us");
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: config.seo.title,
    template: `%s | ${config.business.name}`,
  },
  description: config.seo.description,
  applicationName: config.business.name,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    type: "website",
    siteName: config.business.name,
    title: config.seo.title,
    description: config.seo.description,
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: config.business.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.title,
    description: config.seo.description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081b26",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-niche={niche} className={fontClassNames}>
      <body className="bg-surface text-ink antialiased">{children}</body>
    </html>
  );
}
