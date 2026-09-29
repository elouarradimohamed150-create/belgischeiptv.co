import type { Metadata } from "next";
import { allPosts } from "@/lib/content";
import { site } from "@/lib/site";
import PostCard from "@/components/PostCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { graph, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "IPTV Blog — Gidsen & Tips voor België en Nederland",
  description:
    "Gidsen, tips en nieuws over IPTV in België en Nederland. Ontdek alles over abonnementen, apps, installatie, legaliteit en meer.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "IPTV Blog — Belgische IPTV",
    description: "Gidsen, tips en nieuws over IPTV in België en Nederland.",
    url: `${site.url}/blog`,
  },
};

const collectionSchema = {
  "@type": "CollectionPage",
  "@id": `${site.url}/blog#collection`,
  url: `${site.url}/blog`,
  name: "IPTV Blog",
  inLanguage: "nl-BE",
  isPartOf: { "@id": `${site.url}/#website` },
  hasPart: allPosts.slice(0, 40).map((p) => ({
    "@type": "Article",
    headline: p.title,
    url: `${site.url}/${p.slug}`,
    datePublished: p.date,
  })),
};

export default function BlogPage() {
  return (
    <div className="container-x py-16">
      <JsonLd
        data={graph([
          collectionSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />
      <header className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="font-display text-4xl font-black text-white">
          IPTV <span className="text-flag">Blog</span>
        </h1>
        <p className="mt-3 text-muted">
          Gidsen, tips en nieuws over IPTV in België en Nederland — alles wat je moet weten over
          online televisie.
        </p>
      </header>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
