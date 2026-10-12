/* eslint-disable @next/next/no-img-element -- images are served by Sitedesk, a different host */
import type { Metadata } from "next";
import Link from "next/link";
import { BlogShell, notice } from "@/components/blog/BlogShell";
import { BONE, GOLD, SERIF, smallCaps } from "@/components/tokens";
import { noteDate } from "@/lib/blog";
import { getNotes } from "@/lib/sitedesk";

/** Read from Sitedesk on every visit, so a note appears as soon as it is published. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Insights — YNL Realtors",
  description: "Notes on land, homes and commercial property in Faridabad from YNL Realtors.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const notes = await getNotes();
  return (
    <BlogShell eyebrowText="Insights" title="Notes from YNL Realtors">
      {!notes.ok ? (
        <p role="status" style={notice}>The notes cannot be loaded right now. Please try again in a few minutes.</p>
      ) : notes.data.length === 0 ? (
        <p style={notice}>Nothing here yet. The first note will appear here soon.</p>
      ) : (
        <ul style={{ listStyle: "none", margin: "56px 0 0", padding: 0, display: "grid", gap: 40 }}>
          {notes.data.map((n) => (
            <li key={n.slug} style={{ borderTop: "1px solid rgba(247,244,238,.14)", paddingTop: 32, display: "grid", gap: 14 }}>
              {n.featuredImage && <img src={n.featuredImage} alt="" style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover" }} loading="lazy" />}
              <span style={smallCaps("rgba(247,244,238,.6)")}>{noteDate(n.publishedAt)}{n.category ? ` · ${n.category}` : ""}</span>
              <Link href={`/blog/${n.slug}`} className="hover-gold" style={{ fontFamily: SERIF, fontSize: "clamp(26px, 3vw, 36px)", lineHeight: 1.15, color: BONE, textDecoration: "none" }}>{n.title}</Link>
              {n.excerpt && <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "rgba(247,244,238,.75)" }}>{n.excerpt}</p>}
              <Link href={`/blog/${n.slug}`} className="hover-gold" style={{ ...smallCaps(GOLD), textDecoration: "none" }}>Read the note</Link>
            </li>
          ))}
        </ul>
      )}
    </BlogShell>
  );
}
