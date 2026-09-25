import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Post-submit confirmation page — no value in search results.
      disallow: "/thank-you",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
