import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} – ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0d",
    theme_color: "#0a0a0d",
    lang: "nl-BE",
    categories: ["entertainment", "multimedia"],
    icons: [
      { src: "/images/2026/01/cropped-belgischeiptv-2.png", sizes: "512x140", type: "image/png" },
    ],
  };
}
