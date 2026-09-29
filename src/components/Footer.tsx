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
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={waLink("Hi! Ik wil meer info.")}
                className="group flex items-center gap-3"
                aria-label="Contacteer ons via WhatsApp"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366] ring-1 ring-[#25D366]/25 transition group-hover:bg-[#25D366]/25">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.52 12.99c-.25.7-1.47 1.34-2.02 1.38-.53.05-1.02.24-3.42-.71-2.87-1.13-4.7-4.05-4.85-4.24-.14-.19-1.15-1.53-1.15-2.92s.73-2.07 1-2.35c.26-.28.57-.35.76-.35l.55.01c.18.01.42-.07.66.5.25.6.84 2.08.91 2.23.07.15.12.33.02.52-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.72 1.18 1.55 1.91 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.18-.28.36-.23.61-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.33.07.12.07.68-.18 1.38Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted/70">WhatsApp</span>
                  <span className="block font-semibold text-cloud transition group-hover:text-[#25D366]">
                    +212 707 711 512
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3"
                aria-label="Stuur ons een e-mail"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/25 transition group-hover:bg-gold/25">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted/70">E-mail</span>
                  <span className="block font-semibold text-cloud transition group-hover:text-gold">
                    {site.email}
                  </span>
                </span>
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
