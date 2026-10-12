import type { MetadataRoute } from "next";
import { blogSitemapEntries } from "@/lib/blog";
import { absoluteUrl, pages } from "@/lib/site";
import { getSitemap } from "@/lib/sitedesk";

/** Built on every request: the site's own pages, plus each live note from Sitedesk (hidden ones are already left out). */
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const own = pages.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: p.lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
  const fromSitedesk = await getSitemap();
  return fromSitedesk.ok ? [...own, ...blogSitemapEntries(fromSitedesk.data.entries)] : own;
}
