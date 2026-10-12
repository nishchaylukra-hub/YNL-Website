import { cache } from "react";
import { createSitedeskClient, type Fetched, type Post, type PostSummary, type SiteConfig, type SitemapData } from "./sitedesk-client";

/**
 * The blog is written in Sitedesk and read from it on every visit (server side only: the key never reaches a browser).
 * Set SITEDESK_URL and SITEDESK_READ_TOKEN in Vercel → Settings → Environment Variables. Without them the blog says it
 * is unavailable and every other page works as before.
 */
function client() {
  const baseUrl = process.env.SITEDESK_URL;
  const token = process.env.SITEDESK_READ_TOKEN;
  return baseUrl && token ? createSitedeskClient({ baseUrl, site: "ynl", token }) : null;
}

const UNAVAILABLE = { ok: false, reason: "unavailable" } as const;

export const getNotes = cache(async (): Promise<Fetched<PostSummary[]>> => client()?.posts("en") ?? UNAVAILABLE);
/** One fetch per request: a note page asks twice (its metadata and its body). */
export const getNote = cache(async (slug: string): Promise<Fetched<Post>> => client()?.post(slug, "en") ?? UNAVAILABLE);
export const getConfig = cache(async (): Promise<Fetched<SiteConfig>> => client()?.config() ?? UNAVAILABLE);
export const getSitemap = cache(async (): Promise<Fetched<SitemapData>> => client()?.sitemap() ?? UNAVAILABLE);
