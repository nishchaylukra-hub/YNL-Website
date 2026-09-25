import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { BONE, BRONZE, GOLD, INK, LOAM, SERIF, eyebrow, sectionPad } from "@/components/tokens";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitemap — YNL Realtors, Faridabad Real Estate",
  description:
    "Every page on the YNL Realtors website: our services, four decades in Faridabad real estate, the in-house Legal Cell and how to reach our two offices.",
  alternates: { canonical: "/sitemap" },
};

const rule = "1px solid rgba(20,19,15,.18)";

export default function SitemapPage() {
  return (
    <div style={{ background: INK, color: BONE }}>
      <Header />
      <main
        className="wrap"
        style={{ display: "flex", flexDirection: "column", gap: 56, paddingTop: sectionPad, paddingBottom: sectionPad, background: BONE, color: INK }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={eyebrow(BRONZE)}>Sitemap</p>
          <h1 style={{ margin: 0, fontFamily: SERIF, fontWeight: 300, fontSize: "clamp(44px, 5vw, 72px)", lineHeight: 1 }}>
            Every page, <em style={{ fontStyle: "italic" }}>in one place.</em>
          </h1>
        </div>
        <ol style={{ margin: 0, padding: 0, listStyle: "none", borderBottom: rule }}>
          {pages.map((p, i) => (
            <li key={p.path} className="ledger-row" style={{ paddingBlock: 32, borderTop: rule }}>
              <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 32, lineHeight: 1, color: "#8A6D12" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <h2 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: 30, lineHeight: 1.1 }}>
                  <Link href={p.path} className="hover-gold-dim" style={{ color: INK }}>
                    {p.title}
                  </Link>
                </h2>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: LOAM }}>{p.summary}</p>
              </div>
              {p.sections ? (
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {p.sections.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="hover-gold-dim"
                        style={{ fontSize: 15, lineHeight: 1.6, color: INK, borderBottom: `1px solid ${GOLD}`, paddingBottom: 2 }}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </li>
          ))}
        </ol>
      </main>
      <Footer />
    </div>
  );
}
