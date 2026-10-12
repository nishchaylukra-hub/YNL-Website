import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getSitemap } from "@/lib/sitedesk";

/**
 * Follows Sitedesk's "Let search engines show this site" switch: when it is off, every search engine is asked to stay
 * away. If Sitedesk cannot be reached the site stays visible, so an outage never hides it from Google.
 */
export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const s = await getSitemap();
  if (s.ok && !s.data.indexing) return { rules: { userAgent: "*", disallow: "/" } };
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
