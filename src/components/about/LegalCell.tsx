import { BONE, GOLD, INK_2, SERIF, eyebrow, sectionPad } from "../tokens";

const practice = [
  { num: "i.", title: "Title checks", body: "We check the papers before you commit, so you know exactly what you are buying." },
  { num: "ii.", title: "Agreements", body: "Sale, lease and rental agreements drafted and reviewed by our own team." },
  { num: "iii.", title: "Registration", body: "We see the paperwork through to registration." },
  { num: "iv.", title: "Civil disputes", body: "If a dispute arises on a property, we represent you directly." },
];

export function LegalCell() {
  return (
    <section
      id="legal"
      className="wrap"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 64,
        paddingTop: sectionPad,
        paddingBottom: sectionPad,
        background: INK_2,
        color: BONE,
        borderTop: "1px solid rgba(201,162,39,.24)",
        scrollMarginTop: 80,
      }}
    >
      <div className="split" style={{ alignItems: "end" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <p style={eyebrow(GOLD)}>§ 03 — In-house Legal Cell</p>
          <h2 style={{ margin: 0, fontFamily: SERIF, fontWeight: 300, fontSize: "clamp(42px, 4.4vw, 64px)", lineHeight: 1.02, textWrap: "balance" }}>
            Documentation and disputes, <em style={{ fontStyle: "italic", color: GOLD }}>handled in-house.</em>
          </h2>
        </div>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.75, color: "rgba(247,244,238,.74)", textWrap: "pretty" }}>
          If a civil dispute arises on a property, the Legal Cell represents our clients directly rather than referring
          them elsewhere. It is headed by Mr. Yuvraj Lukra.
        </p>
      </div>
      <div className="ruled-cols" style={{ borderTop: "1px solid rgba(201,162,39,.4)" }}>
        {practice.map((p) => (
          <div key={p.title} style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 32 }}>
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 22, color: GOLD }}>{p.num}</span>
            <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: 28 }}>{p.title}</h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "rgba(247,244,238,.7)" }}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
