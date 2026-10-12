/**
 * Sitedesk client for a website. Copy this one file into the site; it has no imports and works anywhere `fetch` does
 * (Node 18+, Cloudflare Workers, Vercel, browsers' server side). See docs/INTEGRATING-A-SITE.md.
 *
 * Every method returns `{ ok: true, data }` or `{ ok: false, reason }` and never throws: when Sitedesk is slow or down,
 * show your own "temporarily unavailable" message and keep every other page working.
 */

export type Lang = 'en' | 'hi';
export type Fetched<T> = { ok: true; data: T } | { ok: false; reason: 'unavailable' | 'not_found' };

export interface PostSummary {
  slug: string; title: string; excerpt: string; category: string; tags: string[]; publishedAt: number; featuredImage: string | null;
}
export interface Seo {
  seoTitle: string; seoDescription: string; noindex: boolean; canonical: string;
  /** The owner's focus keyword for this language, for a keywords tag. Absent from older Sitedesk versions. */
  focusKeyword?: string;
  shareImage: string | null; shareTitle: string; shareDescription: string;
}
/** `html` is safe to put on a page as it is: every piece of text is escaped and only a fixed set of tags is used. */
export interface Post extends PostSummary, Seo { html: string; languages: Lang[] }
export interface Page extends Seo {
  path: string; slug: string; title: string; excerpt: string; html: string; isHome: boolean; isBlog: boolean;
  publishedAt: number; languages: Lang[]; featuredImage: string | null;
}
export interface MenuItem { title: string; path: string }
export interface SiteConfig {
  site: { name: string; domain: string; timeZone: string; languages: Lang[] };
  settings: { separator: string; defaultDescription: string; defaultShareImage: string | null; indexing: boolean };
  menu: { en: MenuItem[]; hi: MenuItem[] };
  redirects: { from: string; to: string }[];
  blogBase: string;
}
export interface SitemapData { entries: { path: string; lastModified: number }[]; robots: string; indexing: boolean }

export interface SitedeskOptions {
  /** The address of Sitedesk, for example https://sitedesk.jainarpit2004.workers.dev */
  baseUrl: string;
  /** Your site's short name in Sitedesk, for example "ynl". */
  site: string;
  /** The site's read key. Keep it secret: put it in an environment variable, never in the code. */
  token: string;
  fetch?: typeof fetch;
  timeoutMs?: number;
}

const UNAVAILABLE = { ok: false, reason: 'unavailable' } as const;
const NOT_FOUND = { ok: false, reason: 'not_found' } as const;
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
const str = (v: unknown) => typeof v === 'string';
/** A time that makes a real date (the largest JavaScript allows is 8.64e15 ms); anything else would crash date formatting. */
const isTime = (v: unknown) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) <= 8.64e15;

const isSummary = (v: unknown): v is PostSummary =>
  isObj(v) && str(v.slug) && SLUG.test(v.slug as string) && str(v.title) && str(v.excerpt) && str(v.category) &&
  Array.isArray(v.tags) && v.tags.every(str) && isTime(v.publishedAt) && (v.featuredImage === null || str(v.featuredImage));
const isSeo = (v: Record<string, unknown>) =>
  str(v.seoTitle) && str(v.seoDescription) && typeof v.noindex === 'boolean' && str(v.canonical) && str(v.shareTitle) && str(v.shareDescription) &&
  (v.shareImage === null || str(v.shareImage));
const isPost = (v: unknown): v is Post => isSummary(v) && isSeo(v as unknown as Record<string, unknown>) && str((v as unknown as Record<string, unknown>).html) && Array.isArray((v as unknown as Record<string, unknown>).languages);
const isPage = (v: unknown): v is Page => isObj(v) && str(v.path) && str(v.title) && str(v.html) && isSeo(v) && typeof v.isHome === 'boolean';
const isConfig = (v: unknown): v is SiteConfig => isObj(v) && isObj(v.site) && isObj(v.settings) && isObj(v.menu) && Array.isArray(v.redirects) && str(v.blogBase);

export function createSitedeskClient(opts: SitedeskOptions) {
  const doFetch = opts.fetch ?? fetch;
  const base = `${opts.baseUrl.replace(/\/$/, '')}/api/v1/sites/${encodeURIComponent(opts.site)}`;

  async function get(path: string): Promise<{ status: number; body: unknown } | null> {
    try {
      const res = await doFetch(`${base}${path}`, {
        headers: { authorization: `Bearer ${opts.token}` },
        signal: AbortSignal.timeout(opts.timeoutMs ?? 4000),
      });
      return { status: res.status, body: await res.json().catch(() => null) };
    } catch {
      return null;
    }
  }
  const missing = (r: { status: number; body: unknown }) => r.status === 404 && isObj(r.body) && (r.body.code === 'not_found' || r.body.error === 'Not found.');

  return {
    async config(): Promise<Fetched<SiteConfig>> {
      const r = await get('/config');
      return r && r.status === 200 && isObj(r.body) && isConfig(r.body.config) ? { ok: true, data: r.body.config } : UNAVAILABLE;
    },
    async posts(lang: Lang): Promise<Fetched<PostSummary[]>> {
      const r = await get(`/posts?lang=${lang}`);
      return r && r.status === 200 && isObj(r.body) && Array.isArray(r.body.posts) && r.body.posts.every(isSummary) ? { ok: true, data: r.body.posts } : UNAVAILABLE;
    },
    async post(slug: string, lang: Lang): Promise<Fetched<Post>> {
      if (!SLUG.test(slug) || slug.length > 100) return NOT_FOUND;
      const r = await get(`/posts/${slug}?lang=${lang}`);
      if (!r) return UNAVAILABLE;
      if (missing(r)) return NOT_FOUND;
      return r.status === 200 && isObj(r.body) && isPost(r.body.post) ? { ok: true, data: r.body.post } : UNAVAILABLE;
    },
    /** `path` is the public path, for example "/about". "/" is the homepage. */
    async page(path: string, lang: Lang): Promise<Fetched<Page>> {
      if (!/^\/([a-z0-9]+(-[a-z0-9]+)*(\/[a-z0-9]+(-[a-z0-9]+)*)*)?$/.test(path) || path.length > 200) return NOT_FOUND;
      const r = await get(`/page?path=${encodeURIComponent(path)}&lang=${lang}`);
      if (!r) return UNAVAILABLE;
      if (missing(r)) return NOT_FOUND;
      return r.status === 200 && isObj(r.body) && isPage(r.body.page) ? { ok: true, data: r.body.page } : UNAVAILABLE;
    },
    /** The addresses for sitemap.xml and the text for robots.txt. */
    async sitemap(): Promise<Fetched<SitemapData>> {
      const r = await get('/sitemap');
      const entriesOk = r && isObj(r.body) && Array.isArray(r.body.entries) && r.body.entries.every((e) => isObj(e) && str(e.path) && isTime(e.lastModified));
      return r && r.status === 200 && isObj(r.body) && entriesOk && str(r.body.robots) ? { ok: true, data: r.body as unknown as SitemapData } : UNAVAILABLE;
    },
  };
}

/** The title for the browser tab: "SEO title · Site name" (the separator is set in Sitedesk). */
export function pageTitle(seoTitle: string, title: string, config: SiteConfig): string {
  return `${seoTitle.trim() || title} ${config.settings.separator} ${config.site.name}`;
}

/** If an old address was changed in Sitedesk, where it now lives (or null). Use it before showing a 404. */
export function redirectFor(path: string, config: SiteConfig): string | null {
  return config.redirects.find((r) => r.from === path)?.to ?? null;
}
