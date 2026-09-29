import posts from "@/../content/posts.json";
import pages from "@/../content/pages.json";

export type Doc = {
  id: number;
  slug: string;
  title: string;
  date: string;
  modified: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  seo: { title: string; description: string; canonical: string; ogImage: string | null };
  author: string;
  readingTime: string | null;
};

export const allPosts = posts as Doc[];
export const allPages = pages as Doc[];

export const getPost = (slug: string) => allPosts.find((p) => p.slug === slug);
export const getPage = (slug: string) => allPages.find((p) => p.slug === slug);

export function stripHtml(html: string, max = 160) {
  const t = html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  return t.length > max ? t.slice(0, max).trimEnd() + "…" : t;
}
