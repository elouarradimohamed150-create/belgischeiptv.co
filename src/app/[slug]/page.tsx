import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { allPosts, allPages, getPost, getPage, stripHtml } from "@/lib/content";
import { site, waLink } from "@/lib/site";
import Prose from "@/components/Prose";
import PostCard from "@/components/PostCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { graph, articleSchema, webPageSchema, breadcrumbSchema } from "@/lib/schema";

const RESERVED = new Set(["home", "blog"]);

export function generateStaticParams() {
  const posts = allPosts.map((p) => ({ slug: p.slug }));
  const pages = allPages.filter((p) => !RESERVED.has(p.slug)).map((p) => ({ slug: p.slug }));
  return [...posts, ...pages];
}

function resolve(slug: string) {
  return getPost(slug) ?? (RESERVED.has(slug) ? undefined : getPage(slug));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = resolve(slug);
  if (!doc) return {};
  const description = doc.seo.description || stripHtml(doc.excerpt || doc.content);
  return {
    title: doc.seo.title || doc.title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: doc.title,
      description,
      type: getPost(slug) ? "article" : "website",
      images: doc.seo.ogImage ? [doc.seo.ogImage] : undefined,
    },
  };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = resolve(slug);
  if (!doc) notFound();

  const isPost = Boolean(getPost(slug));

  if (!isPost) {
    // Static WordPress page
    return (
      <div className="container-x max-w-4xl py-16">
        <JsonLd
          data={graph([
            webPageSchema(doc, slug),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: doc.title, path: `/${slug}` },
            ]),
          ])}
        />
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: doc.title, path: `/${slug}` }]} />
        <h1 className="font-display text-4xl font-black text-white">{doc.title}</h1>
        <div className="mt-8">
          <Prose html={doc.content} />
        </div>
        {slug === "contact-us" && (
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={waLink("Hi! Ik heb een vraag over Belgische IPTV.")}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white transition hover:brightness-110"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.52 12.99c-.25.7-1.47 1.34-2.02 1.38-.53.05-1.02.24-3.42-.71-2.87-1.13-4.7-4.05-4.85-4.24-.14-.19-1.15-1.53-1.15-2.92s.73-2.07 1-2.35c.26-.28.57-.35.76-.35l.55.01c.18.01.42-.07.66.5.25.6.84 2.08.91 2.23.07.15.12.33.02.52-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.72 1.18 1.55 1.91 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.18-.28.36-.23.61-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.33.07.12.07.68-.18 1.38Z" />
              </svg>
              WhatsApp chatten
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:border-gold hover:text-gold"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              E-mail ons
            </a>
          </div>
        )}
      </div>
    );
  }

  // Blog post
  const date = new Date(doc.date).toLocaleDateString("nl-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article className="py-16">
      <JsonLd
        data={graph([
          articleSchema(doc, slug),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: doc.title, path: `/${slug}` },
          ]),
        ])}
      />
      <div className="container-x max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: doc.title, path: `/${slug}` },
          ]}
        />
        <h1 className="mt-2 font-display text-3xl font-black leading-tight text-white sm:text-4xl">
          {doc.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-muted">
          <time>{date}</time>
          {doc.readingTime && <span>· {doc.readingTime}</span>}
        </div>
        {doc.featuredImage && (
          <Image
            src={doc.featuredImage}
            alt={doc.title}
            width={860}
            height={484}
            priority
            className="mt-8 w-full rounded-2xl border border-white/10"
          />
        )}
        <div className="mt-10">
          <Prose html={doc.content} />
        </div>

        <div className="mt-12 rounded-2xl border border-gold/30 bg-ink-800 p-8 text-center">
          <h2 className="font-display text-2xl font-black text-white">
            Klaar om te starten met Belgische IPTV?
          </h2>
          <p className="mt-2 text-muted">
            55.000+ kanalen, 90.000+ films &amp; series. 7 dagen geld-terug-garantie.
          </p>
          <Link
            href="/#pricing"
            className="mt-6 inline-block rounded-full bg-gold px-7 py-3.5 font-bold text-ink transition hover:bg-gold-600"
          >
            Bekijk abonnementen
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <div className="container-x mt-16">
          <h2 className="mb-8 font-display text-2xl font-black text-white">Gerelateerde artikelen</h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
