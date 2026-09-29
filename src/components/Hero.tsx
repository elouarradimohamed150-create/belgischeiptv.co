"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { waLink } from "@/lib/site";

const ease = [0.2, 0.8, 0.2, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated flag-tinted gradient field */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(60% 55% at 15% 0%, rgba(253,218,36,0.16), transparent 60%)," +
            "radial-gradient(55% 55% at 95% 15%, rgba(239,51,64,0.16), transparent 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 animate-gradient opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(120deg, transparent, rgba(253,218,36,0.06), rgba(239,51,64,0.06), transparent)",
          backgroundSize: "300% 300%",
        }}
      />
      {/* grid texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container-x relative grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold"
          >
            🇧🇪 #1 IPTV in België · 100% uptime
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="mt-5 font-display text-4xl font-black leading-[1.05] text-white sm:text-6xl"
          >
            Belgische IPTV
            <span className="mt-2 block text-flag text-3xl font-extrabold sm:text-4xl">
              Onbeperkt Entertainment
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-cloud/85"
          >
            Toegang tot <strong className="text-gold">55.000+ tv-kanalen</strong> en{" "}
            <strong className="text-gold">90.000+ films &amp; series</strong> on demand — in
            HD, FHD &amp; 4K. Geen contract, direct actief.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="#pricing"
              className="shimmer relative overflow-hidden rounded-full bg-gold px-7 py-3.5 font-extrabold text-ink transition hover:bg-gold-600"
            >
              Bestel nu →
            </Link>
            <a
              href={waLink("Hi! Ik wil een gratis test van Belgische IPTV.")}
              className="rounded-full border border-white/20 px-7 py-3.5 font-bold text-white transition hover:border-gold hover:text-gold"
            >
              Gratis proef
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-2 text-sm text-muted"
          >
            <span className="text-gold">★★★★★</span>
            <span>Vertrouwd door duizenden Belgische kijkers</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="relative"
        >
          <div className="animate-float">
            <Image
              src="/images/2025/08/telewizja-iptv-10.webp"
              alt="Belgische IPTV op meerdere apparaten"
              width={640}
              height={420}
              priority
              className="w-full rounded-2xl border border-line shadow-2xl"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-4 -left-4 rounded-xl border border-gold/40 bg-ink-800/90 px-4 py-3 backdrop-blur"
          >
            <p className="font-display text-2xl font-black text-gold">4K</p>
            <p className="text-xs text-muted">Ultra HD kwaliteit</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="absolute -right-3 top-6 rounded-xl border border-red/40 bg-ink-800/90 px-4 py-3 backdrop-blur"
          >
            <p className="font-display text-2xl font-black text-red-300">24/7</p>
            <p className="text-xs text-muted">Support</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
