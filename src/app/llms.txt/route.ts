import { site, plans } from "@/lib/site";
import { allPosts, allPages, stripHtml } from "@/lib/content";

export const dynamic = "force-static";

// llms.txt — machine-readable overview for AI/LLM engines (see llmstxt.org)
export function GET() {
  const priceLines = plans
    .map(
      (p) =>
        `- ${p.duration} / ${p.devices} ${p.devices === 1 ? "apparaat" : "apparaten"}: €${p.price}`
    )
    .join("\n");

  const postLinks = allPosts
    .map((p) => `- [${p.title}](${site.url}/${p.slug}/): ${stripHtml(p.excerpt || p.content, 120)}`)
    .join("\n");

  const pageLinks = allPages
    .filter((p) => !["home", "blog"].includes(p.slug))
    .map((p) => `- [${p.title}](${site.url}/${p.slug}/)`)
    .join("\n");

  const body = `# ${site.name}

> ${site.description}

${site.name} is een Belgische IPTV-provider die premium abonnementen aanbiedt met meer dan 55.000 live tv-kanalen en 90.000+ films & series on demand in HD, FHD en 4K-kwaliteit. De dienst is beschikbaar in heel België en Nederland, met 24/7 ondersteuning via WhatsApp en e-mail, een 100% uptime-garantie en een 30-dagen geld-terug-garantie.

## Belangrijkste feiten
- Land / markt: België en Nederland (nl-BE, ondersteuning in Nederlands, Frans en Engels)
- Aanbod: IPTV-abonnementen voor 1, 2 of 3 apparaten
- Kanalen: 55.000+ live kanalen, 90.000+ films en series
- Kwaliteit: SD, HD, FHD en 4K
- Betaling: PayPal en creditcard (VISA/MasterCard); bestellen via WhatsApp
- Contact: WhatsApp +${site.whatsappPhone}, e-mail ${site.email}
- Garantie: 30 dagen geld-terug, gratis serverwissel, gratis app-activatie

## Prijzen (EUR)
${priceLines}

## Belangrijke pagina's
- [Home](${site.url}/)
- [IPTV-Configuratie / Setup](${site.url}/iptv-setup/)
- [Blog](${site.url}/blog/)
- [Contact](${site.url}/contact-us/)
${pageLinks}

## Blogartikelen (gidsen & informatie)
${postLinks}

## Contact
- WhatsApp: https://wa.me/${site.whatsappPhone}
- E-mail: ${site.email}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
