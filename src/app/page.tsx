import Link from "next/link";
import Image from "next/image";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import { features, steps, faqs } from "@/lib/home-data";
import { waLink } from "@/lib/site";

const devices = [
  "telewizja-iptv-10", "telewizja-iptv-2", "telewizja-iptv-8", "telewizja-iptv-7",
  "telewizja-iptv-6", "telewizja-iptv-9", "telewizja-iptv-3", "telewizja-iptv-1",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(168,47,249,0.18),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(67,218,100,0.14),transparent_40%)]" />
        <div className="container-x relative grid gap-10 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <h1 className="font-display text-4xl font-black leading-tight text-white sm:text-5xl">
              Belgische IPTV
              <span className="mt-2 block bg-gradient-to-r from-green to-purple bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                Jouw Poort naar Onbeperkt Entertainment
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85">
              Geniet van toegang tot meer dan <strong className="text-green">55.000 tv-kanalen</strong> en{" "}
              <strong className="text-green">90.000 films &amp; series</strong> on demand, met een sterke
              100% uptime-garantie.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#pricing"
                className="rounded-full bg-green px-7 py-3.5 font-bold text-navy transition hover:bg-green-dark"
              >
                Bestel Belgische IPTV Nu
              </Link>
              <a
                href={waLink("Hi! Ik wil een gratis test van Belgische IPTV.")}
                className="rounded-full border border-white/25 px-7 py-3.5 font-bold text-white transition hover:border-green hover:text-green"
              >
                Gratis proefperiode
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/2025/08/telewizja-iptv-10.webp"
              alt="Belgische IPTV op meerdere apparaten"
              width={640}
              height={420}
              priority
              className="w-full rounded-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
              Kies de Beste IPTV Provider in België 🇧🇪
            </h2>
            <p className="mt-3 text-muted">
              Ervaar ongeëvenaarde kwaliteit, betrouwbaarheid en support met Belgische IPTV.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-navy-800 p-7 transition hover:border-green/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-2xl">
                  {f.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      {/* Guarantee */}
      <section className="py-16">
        <div className="container-x rounded-3xl border border-white/10 bg-navy-800 p-10 text-center md:p-14">
          <h2 className="font-display text-3xl font-black text-white">100% geld-terug-garantie</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Probeer de service risicovrij met een 30-dagen geld-terug-garantie en geniet van
            onbeperkte toegang tot je favoriete entertainment!
          </p>
          <Link
            href="#pricing"
            className="mt-7 inline-block rounded-full bg-green px-7 py-3.5 font-bold text-navy transition hover:bg-green-dark"
          >
            Bestel Belgische IPTV Nu
          </Link>
        </div>
      </section>

      {/* How to buy */}
      <section className="py-16">
        <div className="container-x">
          <h2 className="mb-12 text-center font-display text-3xl font-black text-white sm:text-4xl">
            Hoe een Belgische IPTV-abonnement te kopen 🇧🇪
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-navy-800 p-7">
                <span className="font-display text-5xl font-black text-purple/40">{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible devices */}
      <section className="py-16">
        <div className="container-x">
          <h2 className="mb-10 text-center font-display text-3xl font-black text-white">
            Compatibel met alle apparaten!
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {devices.map((d) => (
              <div key={d} className="flex items-center justify-center rounded-xl bg-navy-800 p-6">
                <Image
                  src={`/images/2025/08/${d}.webp`}
                  alt="Compatibel apparaat"
                  width={120}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
              IPTV – Veelgestelde vragen
            </h2>
            <p className="mt-3 text-muted">Alles wat je moet weten over online televisie.</p>
          </div>
          <Faq items={faqs} />
        </div>
      </section>
    </>
  );
}
