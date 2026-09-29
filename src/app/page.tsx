import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CountUp from "@/components/CountUp";
import Testimonials from "@/components/Testimonials";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { features, steps, faqs, trust } from "@/lib/home-data";
import { waLink } from "@/lib/site";
import { graph, productSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

const devices = [
  "telewizja-iptv-10", "telewizja-iptv-2", "telewizja-iptv-8", "telewizja-iptv-7",
  "telewizja-iptv-6", "telewizja-iptv-9", "telewizja-iptv-3", "telewizja-iptv-1",
];

const stats = [
  { to: 55000, suffix: "+", label: "Live TV-kanalen" },
  { to: 90000, suffix: "+", label: "Films & series" },
  { to: 99, suffix: "%", label: "Uptime garantie" },
  { to: 15, suffix: " min", label: "Installatie" },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph([
          productSchema(),
          faqSchema(faqs),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ])}
      />
      <Hero />
      <Marquee />

      {/* Stats */}
      <section className="py-16">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} dir="up" delay={i * 0.08}>
                <div className="rounded-2xl border border-line bg-ink-800 p-6 text-center">
                  <p className="font-display text-3xl font-black text-flag sm:text-4xl">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
              Kies de Beste <span className="text-flag">IPTV Provider</span> in België 🇧🇪
            </h2>
            <p className="mt-3 text-muted">
              Ervaar ongeëvenaarde kwaliteit, betrouwbaarheid en support met Belgische IPTV.
            </p>
          </Reveal>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="card-glow h-full rounded-2xl border border-line bg-ink-800 p-7 hover:border-gold/40">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-red/20 text-2xl">
                    {f.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why buy from us — trust band */}
      <section className="py-16">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
              Waarom een <span className="text-flag">IPTV-abonnement</span> bij ons?
            </h2>
            <p className="mt-3 text-muted">
              Een stabiele dienst met een breed aanbod aan zenders en VOD. Meer dan 3 jaar ervaring
              en de beste prijzen voor een naadloze kijkervaring in België &amp; Nederland.
            </p>
          </Reveal>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((t) => (
              <StaggerItem key={t.title}>
                <div className="card-glow h-full rounded-2xl border border-line bg-ink-800 p-7 text-center hover:border-red/40">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-red/20 text-2xl">
                    {t.icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-white">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Pricing />

      {/* Guarantee */}
      <section className="py-16">
        <Reveal className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-800 p-10 text-center md:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
            <span className="relative text-5xl">🛡️</span>
            <h2 className="relative mt-4 font-display text-3xl font-black text-white">
              100% geld-terug-garantie
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-muted">
              Probeer de service risicovrij met een 30-dagen geld-terug-garantie en geniet van
              onbeperkte toegang tot je favoriete entertainment!
            </p>
            <Link
              href="#pricing"
              className="relative mt-7 inline-block rounded-full bg-gold px-7 py-3.5 font-extrabold text-ink transition hover:bg-gold-600"
            >
              Bestel Belgische IPTV Nu
            </Link>
          </div>
        </Reveal>
      </section>

      {/* How to buy */}
      <section className="py-16">
        <div className="container-x">
          <Reveal className="mb-12 text-center">
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
              Hoe koop je een <span className="text-flag">Belgische IPTV</span> abonnement 🇧🇪
            </h2>
          </Reveal>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="relative h-full rounded-2xl border border-line bg-ink-800 p-7">
                  <span className="font-display text-5xl font-black text-gold/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Compatible devices */}
      <section className="py-16">
        <div className="container-x">
          <Reveal className="mb-10 text-center">
            <h2 className="font-display text-3xl font-black text-white">
              Compatibel met <span className="text-flag">alle apparaten</span>
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-6 sm:grid-cols-4" gap={0.06}>
            {devices.map((d) => (
              <StaggerItem key={d}>
                <div className="card-glow flex items-center justify-center rounded-xl border border-line bg-ink-800 p-6 hover:border-gold/40">
                  <Image
                    src={`/images/2025/08/${d}.webp`}
                    alt="Compatibel apparaat"
                    width={120}
                    height={80}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <Reveal className="container-x mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Getuigenissen
          </span>
          <h2 className="mt-3 font-display text-3xl font-black text-white sm:text-4xl">
            Wat onze <span className="text-flag">klanten</span> zeggen
          </h2>
        </Reveal>
        <Testimonials />
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
              Veelgestelde <span className="text-flag">vragen</span> over IPTV
            </h2>
            <p className="mt-3 text-muted">Alles wat je moet weten over online televisie.</p>
          </Reveal>
          <Faq items={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <Reveal className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-ink-600 via-ink-800 to-ink p-10 text-center md:p-16">
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
              Klaar voor <span className="text-flag">onbeperkt kijken?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Sluit je vandaag aan en geniet binnen 15 minuten van 55.000+ kanalen.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="#pricing"
                className="shimmer relative overflow-hidden rounded-full bg-gold px-8 py-4 font-extrabold text-ink transition hover:bg-gold-600"
              >
                Bekijk abonnementen
              </Link>
              <a
                href={waLink("Hi! Ik heb een vraag over Belgische IPTV.")}
                className="rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:border-gold hover:text-gold"
              >
                Chat op WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
