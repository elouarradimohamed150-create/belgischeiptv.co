import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { allPosts, allPages, getPost, getPage, stripHtml } from "@/lib/content";
import { site, waLink } from "@/lib/site";
import Prose from "@/components/Prose";
import PostCard from "@/components/PostCard";

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
        <h1 className="font-display text-4xl font-black text-white">{doc.title}</h1>
        <div className="mt-8">
          <Prose html={doc.content} />
        </div>
        {slug === "contact-us" && (
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={waLink("Hi! Ik heb een vraag over Belgische IPTV.")}
              className="rounded-full bg-green px-6 py-3 font-bold text-navy transition hover:bg-green-dark"
            >
              WhatsApp: +{site.whatsappPhone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:border-green hover:text-green"
            >
              {site.email}
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: doc.title,
    datePublished: doc.date,
    dateModified: doc.modified,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    image: doc.seo.ogImage ? `${site.url}${doc.seo.ogImage}` : undefined,
    mainEntityOfPage: `${site.url}/${slug}`,
  };

  return (
    <article className="py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-x max-w-3xl">
        <Link href="/blog" className="text-sm font-semibold text-green hover:underline">
          ← Terug naar blog
        </Link>
        <h1 className="mt-4 font-display text-3xl font-black leading-tight text-white sm:text-4xl">
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

        <div className="mt-12 rounded-2xl border border-green/30 bg-navy-800 p-8 text-center">
          <h2 className="font-display text-2xl font-black text-white">
            Klaar om te starten met Belgische IPTV?
          </h2>
          <p className="mt-2 text-muted">
            55.000+ kanalen, 90.000+ films &amp; series. 7 dagen geld-terug-garantie.
          </p>
          <Link
            href="/#pricing"
            className="mt-6 inline-block rounded-full bg-green px-7 py-3.5 font-bold text-navy transition hover:bg-green-dark"
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
