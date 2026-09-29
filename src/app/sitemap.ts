import type { MetadataRoute } from "next";
import { allPosts, allPages } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  // trailingSlash is enabled, so canonical URLs end with "/" — match that here.
  const url = (slug: string) => `${base}/${slug ? slug + "/" : ""}`;
  const staticRoutes = [
    { url: url(""), lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: url("blog"), lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
  ];
  const pages = allPages
    .filter((p) => !["home", "blog"].includes(p.slug))
    .map((p) => ({
      url: url(p.slug),
      lastModified: new Date(p.modified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  const posts = allPosts.map((p) => ({
    url: url(p.slug),
    lastModified: new Date(p.modified),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticRoutes, ...pages, ...posts];
}
