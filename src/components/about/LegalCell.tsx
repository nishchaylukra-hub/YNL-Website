import Image from "next/image";
import { BONE, GOLD, INK_2, SERIF, blockGap, eyebrow, sectionPad } from "../tokens";

const practice = [
  { num: "i.", title: "Title checks", body: "We check the papers before you commit, so you know exactly what you are buying." },
  { num: "ii.", title: "Agreements", body: "Sale, lease and rental agreements drafted and reviewed by our own team." },
  { num: "iii.", title: "Registration", body: "We see the paperwork through to registration." },
  { num: "iv.", title: "Civil disputes", body: "If a dispute arises on a property, we represent you directly." },
];

// `withPortrait` adds the Legal Cell head's photo beside the intro paragraph.
export function LegalCell({ withPortrait = false }: { withPortrait?: boolean }) {
  return (
    <section
      className="wrap"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: blockGap,
        paddingTop: sectionPad,
        paddingBottom: sectionPad,
        background: INK_2,
        color: BONE,
        borderTop: "1px solid rgba(201,162,39,.24)",
      }}
    >
      <div className="split" style={{ alignItems: "end", ["--gap-sm" as string]: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <p style={eyebrow(GOLD)}>In-house Legal Cell</p>
          <h2 style={{ margin: 0, fontFamily: SERIF, fontWeight: 300, fontSize: "clamp(34px, 4.4vw, 64px)", lineHeight: 1.02, textWrap: "balance" }}>
            Documentation and disputes, <em style={{ fontStyle: "italic", color: GOLD }}>handled in-house.</em>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {withPortrait && (
            <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 12, maxWidth: 260 }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 5", overflow: "hidden" }}>
                <Image
                  src="/assets/head-legal-cell-yuvraj-lukra.png"
                  alt="Adv. Yuvraj Lukra, Head, Legal Cell"
                  fill
                  sizes="260px"
                  style={{ objectFit: "cover", objectPosition: "50% 20%" }}
                />
              </div>
              <figcaption style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontFamily: SERIF, fontSize: 26, lineHeight: 1.1 }}>Adv. Yuvraj Lukra</span>
                <span style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: GOLD }}>Head, Legal Cell</span>
              </figcaption>
            </figure>
          )}
          <p style={{ margin: 0, fontSize: "clamp(16px, 1.2vw, 17px)", lineHeight: 1.75, color: "rgba(247,244,238,.74)", textWrap: "pretty" }}>
            If a civil dispute arises on a property, the Legal Cell represents our clients directly rather than referring
            them elsewhere. It is headed by Adv. Yuvraj Lukra.
          </p>
        </div>
      </div>
      <div className="ruled-cols stack-sm" style={{ borderTop: "1px solid rgba(201,162,39,.4)" }}>
        {practice.map((p) => (
          <div key={p.title} style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: "clamp(24px, 2.2vw, 32px)" }}>
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 22, color: GOLD }}>{p.num}</span>
            <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(24px, 2vw, 28px)" }}>{p.title}</h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "rgba(247,244,238,.7)" }}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
