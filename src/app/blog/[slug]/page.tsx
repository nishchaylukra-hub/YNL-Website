import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { BlogShell, notice } from "@/components/blog/BlogShell";
import { GOLD, smallCaps } from "@/components/tokens";
import { noteDate, noteKeywords } from "@/lib/blog";
import { absoluteUrl, SITE_URL } from "@/lib/site";
import { redirectFor } from "@/lib/sitedesk-client";
import { getConfig, getNote } from "@/lib/sitedesk";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

/** Title, description, canonical, robots, keywords and share card: the owner's choices in Sitedesk where set. */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const r = await getNote(slug);
  if (!r.ok) return { title: "Insights — YNL Realtors", robots: { index: false, follow: false } };
  const n = r.data;
  const title = n.seoTitle || n.title;
  const description = n.seoDescription || n.excerpt;
  const image = n.shareImage ?? n.featuredImage;
  return {
    title: `${title} — YNL Realtors`,
    description,
    keywords: noteKeywords(n),
    authors: [{ name: "YNL Realtors", url: SITE_URL }],
    publisher: "YNL Realtors",
    alternates: { canonical: n.canonical || `/blog/${n.slug}` },
    ...(n.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: { type: "article", title: n.shareTitle || title, description: n.shareDescription || description, url: `/blog/${n.slug}`, publishedTime: new Date(n.publishedAt).toISOString(), ...(image ? { images: [image] } : {}) },
    twitter: { card: image ? "summary_large_image" : "summary", title: n.shareTitle || title, description: n.shareDescription || description, ...(image ? { images: [image] } : {}) },
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const r = await getNote(slug);
  if (!r.ok && r.reason === "not_found") {
    // The owner may have changed the note's address in Sitedesk: send old links on to the new one before a 404.
    const config = await getConfig();
    const to = config.ok ? redirectFor(`/blog/${slug}`, config.data) : null;
    if (to) permanentRedirect(to);
    notFound();
  }
  if (!r.ok) {
    return (
      <BlogShell eyebrowText="Insights" title="Notes from YNL Realtors">
        <p role="status" style={notice}>This note cannot be loaded right now. Please try again in a few minutes.</p>
        <Link href="/blog" className="hover-gold" style={{ ...smallCaps(GOLD), display: "inline-block", marginTop: 24, textDecoration: "none" }}>All notes</Link>
      </BlogShell>
    );
  }
  const n = r.data;
  const url = n.canonical || absoluteUrl(`/blog/${n.slug}`);
  const keywords = noteKeywords(n);
  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: n.seoTitle || n.title,
    description: n.seoDescription || n.excerpt,
    datePublished: new Date(n.publishedAt).toISOString(),
    url,
    mainEntityOfPage: url,
    inLanguage: "en-IN",
    ...(n.shareImage ?? n.featuredImage ? { image: n.shareImage ?? n.featuredImage } : {}),
    ...(keywords.length ? { keywords: keywords.join(", ") } : {}),
    author: { "@type": "Organization", name: "YNL Realtors", url: SITE_URL },
    publisher: { "@type": "Organization", name: "YNL Realtors", url: SITE_URL, logo: { "@type": "ImageObject", url: absoluteUrl("/assets/ynl-logo-mark.png") } },
  };
  return (
    <BlogShell eyebrowText={n.category || "Insights"} title={n.title}>
      {/* `<` is escaped so a note's words can never close this script tag early. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article).replace(/</g, "\\u003c") }} />
      <p style={{ ...smallCaps("rgba(247,244,238,.6)"), margin: "20px 0 0" }}>{noteDate(n.publishedAt)}</p>
      {/* Sitedesk's HTML is safe as it is: every piece of text is escaped and only a fixed set of tags is used. */}
      <div className="note-body" dangerouslySetInnerHTML={{ __html: n.html }} />
      <Link href="/blog" className="hover-gold" style={{ ...smallCaps(GOLD), display: "inline-block", marginTop: 48, textDecoration: "none" }}>All notes</Link>
    </BlogShell>
  );
}
