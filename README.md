# Belgische IPTV — Next.js

Migration of [belgischeiptv.be](https://belgischeiptv.be) from WordPress (Astra + Elementor)
to a static-generated **Next.js 16 + Tailwind CSS v4** site.

## Stack
- Next.js App Router, fully static (SSG) — 52 prerendered pages
- Tailwind v4 (design tokens in `src/app/globals.css`)
- All content + 728 images exported locally — no runtime dependency on WordPress
- Dutch (`nl-BE`), dark navy theme (`#011427`) with green/purple accents (Lato + Roboto)

## Structure
```
content/              posts.json (40 blog posts) + pages.json (WP pages), exported from WP REST API
public/images/        all media, mirroring the original /wp-content/uploads/ paths
scripts/export-wp.mjs re-run to re-pull content from the live WP site
src/app/
  page.tsx            home (hero, features, pricing, FAQ — rebuilt from Elementor)
  blog/page.tsx       blog listing
  [slug]/page.tsx     posts + static pages at their original root URLs (SEO-preserving)
  sitemap.ts robots.ts
src/components/        Header, Footer, Pricing, Faq, PostCard, WhatsAppButton, Prose
src/lib/
  site.ts             brand config, WhatsApp helper, pricing plans & features
  content.ts          typed loaders over the JSON
  home-data.ts        homepage copy (features, steps, FAQ)
```

## Commands
```bash
npm run dev      # http://localhost:3000
npm run build    # static production build
npm run start    # serve the production build
```

## Re-syncing content from WordPress
```bash
node scripts/export-wp.mjs   # refreshes content/*.json and downloads new images
```

## SEO & GEO (AI search) checklist — done
- **Metadata**: per-page titles/descriptions, keywords, canonical, `nl-BE` locale, Open Graph + Twitter cards, theme color.
- **Structured data (JSON-LD)** on every page: `Organization`, `WebSite` (+ SearchAction), `Product` with all plan `Offers`, `FAQPage`, `Article`, `WebPage`, `CollectionPage`, `BreadcrumbList`.
- **Dynamic OG image** (`/opengraph-image`) — branded flag-themed preview for social shares.
- **Sitemap** (`/sitemap.xml`) and **robots** (`/robots.txt`) — robots explicitly allows AI crawlers: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot, Meta, and more.
- **`/llms.txt`** — machine-readable site summary for LLM/AI engines (facts, prices, pages, article index), regenerated at build.
- **Web manifest** (`/manifest.webmanifest`) for PWA/installability.
- Visible **breadcrumbs** on posts/pages (matching BreadcrumbList schema).
- Semantic headings, image alt text, fast static HTML.

### Before go-live (owner action)
- Add your **Google Search Console** verification token in `src/app/layout.tsx` (`verification.google`, currently commented) and submit the sitemap.
- Confirm the **legality FAQ** wording suits your business (see `src/lib/home-data.ts`).

## Notes / TODO for the owner
- **Ordering is via WhatsApp** (as on the live site) — links in `src/lib/site.ts` (`whatsappPhone`).
  There is no real checkout; add Stripe/Mollie later if you want on-site payment.
- The **contact page** content (from WordPress) contained a leftover WhatsApp link with a
  different phone number (`212637282613`) and "Slovenia IPTV" text — template residue.
  Clean it in `content/pages.json` or the WP source.
- Update `site.url` / analytics before deploying. Deploy target: **Vercel** (zero-config) or any static host.
