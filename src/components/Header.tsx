"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nav, waLink } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur">
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

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-semibold uppercase tracking-wide text-white/85 transition hover:text-green"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink("belgischeiptv.be - Ik wil me inschrijven")}
            className="hidden rounded-full bg-green px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-green-dark sm:inline-block"
          >
            SCHRIJF JE NU IN!
          </a>
          <button
            aria-label="Menu"
            className="md:hidden text-white"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy md:hidden">
          <div className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold uppercase tracking-wide text-white/85"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={waLink("belgischeiptv.be - Ik wil me inschrijven")}
              className="mt-2 rounded-full bg-green px-5 py-3 text-center text-sm font-bold text-navy"
            >
              SCHRIJF JE NU IN!
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
