import Link from "next/link";
import Image from "next/image";
import type { Doc } from "@/lib/content";
import { stripHtml } from "@/lib/content";

export default function PostCard({ post }: { post: Doc }) {
  const date = new Date(post.date).toLocaleDateString("nl-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <article className="card-glow group flex flex-col overflow-hidden rounded-2xl border border-line bg-ink-800 hover:border-gold/40">
      <Link href={`/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-ink-700">
        {post.featuredImage && (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        )}
        <span className="absolute inset-0 bg-gradient-to-t from-ink to-transparent opacity-60" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <time className="text-xs font-semibold uppercase tracking-wide text-gold">{date}</time>
        <h2 className="mt-2 font-display text-lg font-bold leading-snug text-white">
          <Link href={`/${post.slug}`} className="transition hover:text-gold">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {stripHtml(post.excerpt || post.content, 130)}
        </p>
        <Link
          href={`/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold"
        >
          Lees meer
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
