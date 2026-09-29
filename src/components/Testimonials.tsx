import { testimonials } from "@/lib/home-data";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.name}
          className="card-glow flex flex-col rounded-2xl border border-line bg-ink-800 p-7 hover:border-gold/40"
        >
          <div className="mb-3 text-gold" aria-label="5 van 5 sterren">
            ★★★★★
          </div>
          <blockquote className="flex-1 text-cloud/90">“{t.quote}”</blockquote>
          <figcaption className="mt-5 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold/25 to-red/25 font-display text-sm font-black text-white">
              {initials(t.name)}
            </span>
            <span>
              <span className="block font-semibold text-white">{t.name}</span>
              <span className="block text-xs text-muted">{t.location}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
