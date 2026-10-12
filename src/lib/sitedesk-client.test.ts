import { describe, expect, it, vi } from 'vitest';
import { createSitedeskClient, pageTitle, redirectFor, type SiteConfig } from './sitedesk-client';

const seo = { seoTitle: '', seoDescription: '', noindex: false, canonical: '', shareImage: null, shareTitle: '', shareDescription: '' };
const summary = { slug: 'hello', title: 'Hello', excerpt: 'Hi.', category: '', tags: [], publishedAt: 1, featuredImage: null };
const post = { ...summary, ...seo, html: '<p>Hi.</p>', languages: ['en'] };
const page = { ...seo, path: '/about', slug: '/about', title: 'About', excerpt: '', html: '<p>x</p>', isHome: false, isBlog: false, publishedAt: 1, languages: ['en'], featuredImage: null };
const config: SiteConfig = {
  site: { name: 'YNL', domain: 'ynlrealtors.in', timeZone: 'Asia/Kolkata', languages: ['en'] },
  settings: { separator: '·', defaultDescription: '', defaultShareImage: null, indexing: true },
  menu: { en: [], hi: [] }, redirects: [{ from: '/old', to: '/new' }], blogBase: '/blog',
};
const reply = (status: number, body: unknown) => new Response(JSON.stringify(body), { status });
const client = (f: typeof fetch) => createSitedeskClient({ baseUrl: 'https://sd.example/', site: 'ynl', token: 'secret', fetch: f });

describe('sitedesk client', () => {
  it('asks the right address with the key, and returns posts', async () => {
    const f = vi.fn(async () => reply(200, { posts: [summary] })) as unknown as typeof fetch;
    expect(await client(f).posts('hi')).toEqual({ ok: true, data: [summary] });
    const [url, init] = (f as unknown as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    expect(url).toBe('https://sd.example/api/v1/sites/ynl/posts?lang=hi');
    expect((init.headers as Record<string, string>).authorization).toBe('Bearer secret');
  });
  it('reads a post, a page, the config and the sitemap', async () => {
    expect((await client((async () => reply(200, { post })) as unknown as typeof fetch).post('hello', 'en')).ok).toBe(true);
    expect((await client((async () => reply(200, { page })) as unknown as typeof fetch).page('/about', 'en')).ok).toBe(true);
    expect((await client((async () => reply(200, { config })) as unknown as typeof fetch).config()).ok).toBe(true);
    expect((await client((async () => reply(200, { entries: [], robots: 'x', indexing: true })) as unknown as typeof fetch).sitemap()).ok).toBe(true);
  });
  it('tells "no such post" from "Sitedesk is broken"', async () => {
    const missing = (async () => reply(404, { error: 'Not found.' })) as unknown as typeof fetch;
    const wrong = (async () => new Response('<html>404</html>', { status: 404 })) as unknown as typeof fetch;
    expect(await client(missing).post('hello', 'en')).toEqual({ ok: false, reason: 'not_found' });
    expect(await client(missing).page('/x', 'en')).toEqual({ ok: false, reason: 'not_found' });
    expect(await client(wrong).post('hello', 'en')).toEqual({ ok: false, reason: 'unavailable' });
  });
  it('never throws: errors, junk, bad keys and a dead network all mean unavailable', async () => {
    for (const f of [
      async () => reply(500, {}), async () => reply(401, { error: 'Unauthorized.' }), async () => reply(200, { posts: 'x' }),
      async () => new Response('nope', { status: 200 }), async () => { throw new Error('down'); },
    ]) {
      expect(await client(f as unknown as typeof fetch).posts('en')).toEqual({ ok: false, reason: 'unavailable' });
      expect(await client(f as unknown as typeof fetch).config()).toEqual({ ok: false, reason: 'unavailable' });
    }
  });
  it('refuses to build a request from an address that is not a plain address', async () => {
    const f = vi.fn(async () => reply(200, {})) as unknown as typeof fetch;
    for (const slug of ['../x', 'a/b', '', 'UPPER', 'a%2Fb']) expect(await client(f).post(slug, 'en')).toEqual({ ok: false, reason: 'not_found' });
    for (const path of ['about', '/a b', '/../x', '//evil', '/a?b=1']) expect(await client(f).page(path, 'en')).toEqual({ ok: false, reason: 'not_found' });
    expect(f).not.toHaveBeenCalled();
  });
  it('builds the tab title and finds redirects', () => {
    expect(pageTitle('', 'About us', config)).toBe('About us · YNL');
    expect(pageTitle('Who we are', 'About us', config)).toBe('Who we are · YNL');
    expect(redirectFor('/old', config)).toBe('/new');
    expect(redirectFor('/other', config)).toBeNull();
  });
});

describe('dates that cannot be shown (review 25, in the drop-in client)', () => {
  it('a post or sitemap entry whose date is not a real date counts as unavailable', async () => {
    const bad = 1e308;
    expect(await client((async () => reply(200, { posts: [{ ...summary, publishedAt: bad }] })) as unknown as typeof fetch).posts('en')).toEqual({ ok: false, reason: 'unavailable' });
    expect(await client((async () => reply(200, { post: { ...post, publishedAt: bad } })) as unknown as typeof fetch).post('hello', 'en')).toEqual({ ok: false, reason: 'unavailable' });
    expect(await client((async () => reply(200, { entries: [{ path: '/blog/a', lastModified: bad }], robots: '', indexing: true })) as unknown as typeof fetch).sitemap()).toEqual({ ok: false, reason: 'unavailable' });
  });
});
