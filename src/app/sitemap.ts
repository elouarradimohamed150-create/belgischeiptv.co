import type { MetadataRoute } from "next";
import { allPosts, allPages } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = ["", "/blog"].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
  const pages = allPages
    .filter((p) => !["home", "blog"].includes(p.slug))
    .map((p) => ({
      url: `${base}/${p.slug}`,
      lastModified: new Date(p.modified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  const posts = allPosts.map((p) => ({
    url: `${base}/${p.slug}`,
    lastModified: new Date(p.modified),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticRoutes, ...pages, ...posts];
}
