"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { plans, planFeatures, waLink } from "@/lib/site";

const deviceTabs = [
  { value: 1, label: "1 Apparaat" },
  { value: 2, label: "2 Apparaten" },
  { value: 3, label: "3 Apparaten" },
];

export default function Pricing() {
  const [devices, setDevices] = useState(1);
  const shown = plans.filter((p) => p.devices === devices);

  return (
    <section id="pricing" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-gold/10 blur-[120px]" />
      <div className="container-x">
        <div className="mx-auto mb-4 max-w-2xl text-center">
          <span className="inline-block rounded-full border border-red/40 bg-red/10 px-4 py-1 text-sm font-semibold text-red-300">
            🔥 Beperkte Tijd Speciale Aanbieding
          </span>
          <h2 className="mt-4 font-display text-3xl font-black text-white sm:text-4xl">
            Kies je <span className="text-flag">IPTV-abonnement</span>
          </h2>
          <p className="mt-3 text-muted">
            Bespaar meer dan €1000 per jaar met ons Premium IPTV-abonnement!
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full border border-line bg-ink-700 p-1.5">
            {deviceTabs.map((t) => (
              <button
                key={t.value}
                onClick={() => setDevices(t.value)}
                className="relative rounded-full px-5 py-2 text-sm font-bold transition"
              >
                {devices === t.value && (
                  <motion.span
                    layoutId="device-pill"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className={`relative ${devices === t.value ? "text-ink" : "text-cloud/80"}`}>
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {shown.map((plan, i) => {
              const featured = plan.months === 12;
              const msg = `belgischeiptv.be - ${plan.duration} / ${plan.devices} ${
                plan.devices === 1 ? "Device" : "Devices"
              } - ${plan.price}€`;
              return (
                <motion.div
                  key={`${plan.devices}-${plan.months}`}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`card-glow relative flex flex-col rounded-2xl border p-7 ${
                    featured
                      ? "border-gold bg-gradient-to-b from-ink-600 to-ink-800 shadow-[0_0_50px_-12px_rgba(253,218,36,0.35)]"
                      : "border-line bg-ink-800 hover:border-gold/40"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-xs font-extrabold text-ink">
                      ⭐ MEEST GEKOZEN
                    </span>
                  )}
                  <div className="text-center">
                    <p className="font-display text-sm font-bold uppercase tracking-wide text-gold">
                      VIP Abonnement
                    </p>
                    <h3 className="mt-1 font-display text-xl font-black text-white">{plan.duration}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {plan.devices} {plan.devices === 1 ? "apparaat" : "apparaten"}
                    </p>
                    <div className="mt-5 flex items-end justify-center gap-1">
                      <span className="font-display text-5xl font-black text-white">{plan.price}€</span>
                    </div>
                    <span className="mt-2 inline-block rounded-full bg-red/15 px-3 py-1 text-xs font-bold text-red-300">
                      65% OFF!
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-2.5 text-sm text-cloud/85">
                    {planFeatures.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-0.5 text-gold">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(msg)}
                    className={`shimmer relative mt-7 overflow-hidden rounded-full py-3 text-center text-sm font-extrabold transition ${
                      featured
                        ? "bg-gold text-ink hover:bg-gold-600"
                        : "bg-red text-white hover:bg-red-600"
                    }`}
                  >
                    PayPal / Creditcard
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
