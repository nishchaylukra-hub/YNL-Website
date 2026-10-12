import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { BONE, GOLD, INK, SERIF, eyebrow, sectionPad } from "@/components/tokens";

/** The frame every blog page shares: the site header and footer around one readable column. */
export function BlogShell({ eyebrowText, title, children }: { eyebrowText: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: INK, color: BONE, minHeight: "100vh" }}>
      <Header />
      <main className="wrap" style={{ paddingBlock: sectionPad }}>
        <div style={{ maxWidth: 760 }}>
          <p style={eyebrow(GOLD)}>{eyebrowText}</p>
          <h1 style={{ margin: "20px 0 0", fontFamily: SERIF, fontWeight: 300, fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.02, textWrap: "balance" }}>{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const notice = { marginTop: 32, fontSize: 17, lineHeight: 1.7, color: "rgba(247,244,238,.78)" } as const;
