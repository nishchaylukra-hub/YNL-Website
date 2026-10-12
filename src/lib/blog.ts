import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/** Blog addresses Sitedesk lists for sitemap.xml (live notes only), as entries for this site's sitemap. */
export function blogSitemapEntries(entries: { path: string; lastModified: number }[]): MetadataRoute.Sitemap {
  return entries
    .filter((e) => /^\/blog\/[a-z0-9]+(-[a-z0-9]+)*$/.test(e.path))
    .map((e) => ({ url: absoluteUrl(e.path), lastModified: new Date(e.lastModified), changeFrequency: "monthly" as const, priority: 0.6 }));
}

/** The keywords for a note: the owner's focus keyword from Sitedesk, then its tags. */
export function noteKeywords(post: { focusKeyword?: string; tags: string[] }): string[] {
  return [...new Set([post.focusKeyword ?? "", ...post.tags].map((k) => k.trim()).filter(Boolean))];
}

/** "2 October 2026", in India's time zone, so a note published late at night shows the date readers saw. */
export function noteDate(ms: number): string {
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" }).format(new Date(ms));
}
