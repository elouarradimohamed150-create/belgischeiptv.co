import type { Metadata } from "next";
import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { graph, organizationSchema, websiteSchema } from "@/lib/schema";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  category: "Entertainment",
  keywords: [
    "IPTV België",
    "Belgische IPTV",
    "IPTV abonnement",
    "IPTV kopen België",
    "IPTV Vlaanderen",
    "beste IPTV provider",
    "4K IPTV",
    "IPTV Smarters",
    "voetbal streaming België",
    "TV kanalen online",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
    languages: { "nl-BE": "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: site.name,
    url: site.url,
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  // verification: { google: "PASTE_GOOGLE_SEARCH_CONSOLE_TOKEN" },
};

export const viewport = {
  themeColor: "#0a0a0d",
  colorScheme: "dark" as const,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE" className={`${lato.variable} ${roboto.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-ink">
        <JsonLd data={graph([organizationSchema(), websiteSchema()])} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
