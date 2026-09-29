import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// AI / LLM search crawlers we explicitly welcome (GEO).
const aiBots = [
  "GPTBot", // OpenAI / ChatGPT indexing
  "OAI-SearchBot", // ChatGPT Search
  "ChatGPT-User", // ChatGPT live browsing
  "ClaudeBot", // Anthropic Claude
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot", // Perplexity
  "Perplexity-User",
  "Google-Extended", // Google Gemini / AI Overviews training
  "Applebot-Extended", // Apple Intelligence
  "Amazonbot",
  "Bytespider", // TikTok / Doubao
  "CCBot", // Common Crawl (feeds many LLMs)
  "cohere-ai",
  "DuckAssistBot",
  "meta-externalagent", // Meta AI
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Everyone (classic search engines): full access.
      { userAgent: "*", allow: "/", disallow: ["/_next/", "/api/"] },
      // AI engines: explicit allow so they can read and cite the content.
      ...aiBots.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
