export const site = {
  name: "Belgische IPTV",
  domain: "belgischeiptv.be",
  url: "https://belgischeiptv.be",
  tagline: "Beste IPTV Abonnement in België & Nederland",
  description:
    "Belgische IPTV – Geniet van toegang tot meer dan 55.000 tv-kanalen en 90.000 films & series on demand, met een sterke 100% uptime-garantie.",
  whatsappPhone: "212707711512",
  email: "goldengateiptv@gmail.com",
  locale: "nl-BE",
};

export function waLink(text: string) {
  return `https://api.whatsapp.com/send/?phone=${site.whatsappPhone}&text=${encodeURIComponent(
    text
  )}&type=phone_number&app_absent=0`;
}

export const nav = [
  { href: "/iptv-setup", label: "IPTV-Configuratie" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

export type Plan = {
  months: number;
  devices: number;
  price: number;
  duration: string;
};

// devices -> plans (from the live pricing tables)
export const plans: Plan[] = [
  { devices: 1, months: 3, price: 32, duration: "3 Maanden" },
  { devices: 1, months: 6, price: 42, duration: "6 Maanden" },
  { devices: 1, months: 12, price: 62, duration: "12 Maanden" },
  { devices: 2, months: 3, price: 47, duration: "3 Maanden" },
  { devices: 2, months: 6, price: 67, duration: "6 Maanden" },
  { devices: 2, months: 12, price: 94, duration: "12 Maanden" },
  { devices: 3, months: 3, price: 80, duration: "3 Maanden" },
  { devices: 3, months: 6, price: 99, duration: "6 Maanden" },
  { devices: 3, months: 12, price: 150, duration: "12 Maanden" },
];

export const planFeatures = [
  "Meer dan 55.000 wereldwijde livekanalen",
  "+90.000 films en series op aanvraag",
  "Alle premium sportkanalen",
  "Alle lokale en wereldwijde platforms",
  "Tijdverschuiving en tv-gids (EPG)-functie",
  "SD-, HD-, FHD- en 4K-kwaliteit",
  "Dagelijkse updates",
  "Geen VPN nodig (VPN inbegrepen)",
  "7 dagen geld-terug-garantie",
  "24/7 ondersteuning via WhatsApp en e-mail",
];
