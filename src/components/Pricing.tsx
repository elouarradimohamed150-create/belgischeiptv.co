"use client";

import { useState } from "react";
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
    <section id="pricing" className="py-20">
      <div className="container-x">
        <div className="mx-auto mb-4 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-purple/15 px-4 py-1 text-sm font-semibold text-purple">
            Beperkte Tijd Speciale Aanbieding
          </span>
          <h2 className="mt-4 font-display text-3xl font-black text-white sm:text-4xl">
            Kies je IPTV-abonnement
          </h2>
          <p className="mt-3 text-muted">
            Bespaar meer dan €1000 per jaar met ons Premium IPTV-abonnement!
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-full border border-white/15 bg-navy-700 p-1">
            {deviceTabs.map((t) => (
              <button
                key={t.value}
                onClick={() => setDevices(t.value)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                  devices === t.value ? "bg-green text-navy" : "text-white/80 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {shown.map((plan) => {
            const featured = plan.months === 12;
            const msg = `belgischeiptv.be - ${plan.duration} / ${plan.devices} ${
              plan.devices === 1 ? "Device" : "Devices"
            } - ${plan.price}€`;
            return (
              <div
                key={`${plan.devices}-${plan.months}`}
                className={`relative flex flex-col rounded-2xl border p-7 ${
                  featured
                    ? "border-green bg-navy-700 shadow-lg shadow-green/10"
                    : "border-white/10 bg-navy-800"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green px-3 py-1 text-xs font-bold text-navy">
                    MEEST GEKOZEN
                  </span>
                )}
                <div className="text-center">
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-green">
                    VIP Abonnement
                  </p>
                  <h3 className="mt-1 font-display text-xl font-black text-white">
                    {plan.duration}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {plan.devices} {plan.devices === 1 ? "apparaat" : "apparaten"}
                  </p>
                  <div className="mt-5 flex items-end justify-center gap-1">
                    <span className="font-display text-5xl font-black text-white">
                      {plan.price}€
                    </span>
                  </div>
                  <span className="mt-2 inline-block rounded-full bg-purple/15 px-3 py-1 text-xs font-bold text-purple">
                    65% OFF!
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-2.5 text-sm text-white/85">
                  {planFeatures.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-0.5 text-green">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(msg)}
                  className={`mt-7 rounded-full py-3 text-center text-sm font-bold transition ${
                    featured
                      ? "bg-green text-navy hover:bg-green-dark"
                      : "bg-purple text-white hover:bg-purple-dark"
                  }`}
                >
                  PayPal / Creditcard
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
