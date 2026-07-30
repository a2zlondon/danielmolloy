import type { MetadataRoute } from "next";

import { BRAND_INK, BRAND_NAME, BRAND_SURFACE } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND_NAME} — Technical Expertise for Investment Firms`,
    short_name: BRAND_NAME,
    description:
      "Technical expertise for investment firms. We help venture capital, private equity, and family office teams build, evaluate, and run technology.",
    start_url: "/",
    display: "standalone",
    background_color: BRAND_SURFACE,
    theme_color: BRAND_INK,
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      // Full-bleed field with the monogram inside the crop-safe zone, so Android's
      // circular and squircle masks never clip the letterforms.
      {
        src: "/brand/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
