import type { Metadata } from "next";
import { allPosts } from "@/lib/content";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Gidsen, tips en nieuws over IPTV in België. Ontdek alles over abonnementen, apps, installatie en meer.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="container-x py-16">
      <header className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="font-display text-4xl font-black text-white">Blog</h1>
        <p className="mt-3 text-muted">
          Gidsen, tips en nieuws over IPTV in België — alles wat je moet weten over online televisie.
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
