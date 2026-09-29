import Link from "next/link";
import Image from "next/image";
import { site, waLink } from "@/lib/site";

const quickLinks = [
  { href: "/iptv-setup", label: "IPTV-Configuratie" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy-policy", label: "Privacybeleid" },
  { href: "/refund-policy", label: "Retourbeleid" },
  { href: "/terms-and-conditions", label: "Algemene voorwaarden" },
];

const services = [
  { href: "/#pricing", label: "Pakket 1 Apparaat" },
  { href: "/#pricing", label: "Pakket 2 Apparaten" },
  { href: "/#pricing", label: "Pakket 3 Apparaten" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line bg-ink-800">
      <div className="tricolor-bar" />
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Image
            src="/images/2026/01/cropped-belgischeiptv-2.png"
            alt="Belgische IPTV"
            width={170}
            height={46}
            className="mb-4 h-10 w-auto"
          />
          <p className="text-sm leading-relaxed text-muted">
            Onze missie is om de beste tv-zenders aan Belgen en Vlaamse kijkers te bieden.
            Belgische IPTV combineert HD/4K-technologie met lokale content.
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-sm font-extrabold uppercase tracking-wider text-gold">
            Snelle links
          </h2>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-muted transition hover:text-cloud">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-sm font-extrabold uppercase tracking-wider text-gold">
            Diensten
          </h2>
          <ul className="space-y-2.5 text-sm">
            {services.map((l, i) => (
              <li key={i}>
                <Link href={l.href} className="text-muted transition hover:text-cloud">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-sm font-extrabold uppercase tracking-wider text-gold">
            Contact
          </h2>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={waLink("Hi! Ik wil meer info.")} className="text-muted transition hover:text-cloud">
                WhatsApp: +{site.whatsappPhone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-muted transition hover:text-cloud">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-5">
        <p className="container-x text-center text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Alle rechten voorbehouden. 🇧🇪
        </p>
      </div>
    </footer>
  );
}
