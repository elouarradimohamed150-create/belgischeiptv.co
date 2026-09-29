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
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-800 transition hover:border-green/40">
      <Link href={`/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-navy-700">
        {post.featuredImage && (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <time className="text-xs uppercase tracking-wide text-green">{date}</time>
        <h2 className="mt-2 font-display text-lg font-bold leading-snug text-white">
          <Link href={`/${post.slug}`} className="transition hover:text-green">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {stripHtml(post.excerpt || post.content, 130)}
        </p>
        <Link
          href={`/${post.slug}`}
          className="mt-4 text-sm font-bold text-green transition group-hover:underline"
        >
          Lees meer →
        </Link>
      </div>
    </article>
  );
}
