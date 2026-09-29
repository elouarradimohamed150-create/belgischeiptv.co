import { site, plans } from "./site";
import type { Doc } from "./content";
import { stripHtml } from "./content";

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;
const LOGO = `${site.url}/images/2026/01/cropped-belgischeiptv-2.png`;

/** Organization — publisher identity, reused via @id references. */
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    url: site.url,
    logo: { "@type": "ImageObject", url: LOGO, width: 512, height: 140 },
    description: site.description,
    email: site.email,
    areaServed: { "@type": "Country", name: "Belgium" },
    knowsLanguage: ["nl-BE", "nl", "fr-BE"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: `+${site.whatsappPhone}`,
      email: site.email,
      availableLanguage: ["Dutch", "French", "English"],
      areaServed: "BE",
    },
    sameAs: [`https://wa.me/${site.whatsappPhone}`],
  };
}

/** WebSite node with a SearchAction so engines can expose a sitelinks searchbox. */
export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: "nl-BE",
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${site.url}/blog?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Product + Offers for the subscription plans (enables price rich results). */
export function productSchema() {
  return {
    "@type": "Product",
    "@id": `${site.url}/#product`,
    name: "Belgische IPTV Abonnement",
    description:
      "Premium IPTV-abonnement in België met 55.000+ live kanalen en 90.000+ films & series in HD, FHD en 4K.",
    brand: { "@id": ORG_ID },
    category: "IPTV Subscription",
    image: `${site.url}/images/2025/08/telewizja-iptv-10.webp`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: Math.min(...plans.map((p) => p.price)),
      highPrice: Math.max(...plans.map((p) => p.price)),
      offerCount: plans.length,
      offers: plans.map((p) => ({
        "@type": "Offer",
        name: `IPTV ${p.duration} – ${p.devices} ${p.devices === 1 ? "apparaat" : "apparaten"}`,
        price: p.price,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${site.url}/#pricing`,
        seller: { "@id": ORG_ID },
      })),
    },
  };
}

/** FAQPage from Q/A pairs (AI engines and Google FAQ rich results). */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: stripHtml(it.a, 5000) },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path}`,
    })),
  };
}

export function articleSchema(doc: Doc, slug: string) {
  const url = `${site.url}/${slug}`;
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: doc.title,
    description: doc.seo.description || stripHtml(doc.excerpt || doc.content),
    inLanguage: "nl-BE",
    datePublished: doc.date,
    dateModified: doc.modified,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    image: doc.seo.ogImage ? `${site.url}${doc.seo.ogImage}` : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

export function webPageSchema(doc: Doc, slug: string) {
  const url = `${site.url}/${slug}`;
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: doc.seo.title || doc.title,
    description: doc.seo.description || stripHtml(doc.content),
    inLanguage: "nl-BE",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    dateModified: doc.modified,
  };
}

/** Wrap any set of nodes in a single @graph document. */
export function graph(nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
