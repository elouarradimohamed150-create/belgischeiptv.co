"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav, waLink } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="tricolor-bar" />
      <div
        className={`transition-colors duration-300 ${
          scrolled ? "border-b border-line bg-ink/85 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Image
              src="/images/2026/01/cropped-belgischeiptv-2.png"
              alt="Belgische IPTV"
              width={160}
              height={44}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="group relative text-sm font-semibold uppercase tracking-wide text-cloud/85 transition hover:text-gold"
              >
                {n.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink("belgischeiptv.be - Ik wil me inschrijven")}
              className="shimmer relative hidden overflow-hidden rounded-full bg-gold px-5 py-2.5 text-sm font-extrabold text-ink transition hover:bg-gold-600 sm:inline-block"
            >
              SCHRIJF JE NU IN!
            </a>
            <button
              aria-label="Menu"
              className="text-cloud md:hidden"
              onClick={() => setOpen((o) => !o)}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-ink md:hidden"
          >
            <div className="container-x flex flex-col py-3">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-semibold uppercase tracking-wide text-cloud/85"
                >
                  {n.label}
                </Link>
              ))}
              <a
                href={waLink("belgischeiptv.be - Ik wil me inschrijven")}
                className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-extrabold text-ink"
              >
                SCHRIJF JE NU IN!
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
