import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Kruimelpad" className="mb-6 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-cloud/70" aria-current="page">
                  {it.name}
                </span>
              ) : (
                <Link href={it.path} className="transition hover:text-gold">
                  {it.name}
                </Link>
              )}
              {!last && <span className="text-line">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
