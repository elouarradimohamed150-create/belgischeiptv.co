"use client";

const items = [
  "Netflix", "Disney+", "HBO Max", "Prime Video", "Sky Sports", "beIN Sports",
  "Play Sports", "Eleven", "ESPN", "Canal+", "VTM", "Eén", "RTBF", "BBC",
  "DAZN", "Apple TV+", "Streamz", "Pickx",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="border-y border-line bg-ink-800/60 py-8">
      <p className="container-x mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted">
        Alle premium platforms &amp; sportkanalen inbegrepen
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {row.map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-line bg-ink-700 px-6 py-2.5 text-sm font-bold text-cloud/80"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
