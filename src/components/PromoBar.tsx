"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "promo-dismissed-v1";

export default function PromoBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) === "1") setHidden(true);
    } catch {
      /* ignore */
    }
  }, []);

  if (hidden) return null;

  return (
    <div className="relative bg-gradient-to-r from-gold via-gold-600 to-red text-ink">
      <Link
        href="/#pricing"
        className="container-x flex items-center justify-center gap-2 py-2 pr-8 text-center text-sm font-bold"
      >
        <span className="animate-pulse">🔥</span>
        <span>65% KORTING — beperkte tijd! Vanaf €15 / maand</span>
        <span className="hidden underline underline-offset-2 sm:inline">Schrijf je nu in →</span>
      </Link>
      <button
        aria-label="Sluiten"
        onClick={() => {
          setHidden(true);
          try {
            localStorage.setItem(KEY, "1");
          } catch {
            /* ignore */
          }
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/70 transition hover:text-ink"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
