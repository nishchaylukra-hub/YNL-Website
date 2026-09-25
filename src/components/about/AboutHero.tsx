import { BONE, GOLD, INK, SERIF, eyebrow } from "../tokens";

export function AboutHero() {
  return (
    <section
      className="wrap split"
      style={{ alignItems: "end", paddingTop: "clamp(64px, 8vw, 112px)", paddingBottom: "clamp(64px, 8vw, 120px)", background: INK }}
    >
      <p
        aria-hidden="true"
        style={{
          margin: 0,
          fontFamily: SERIF,
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "clamp(120px, 18vw, 260px)",
          lineHeight: 0.8,
          letterSpacing: "-.03em",
          color: GOLD,
        }}
      >
        1980s
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <p style={eyebrow(GOLD)}>§ 01 — About us</p>
        <h1
          style={{
            margin: 0,
            fontFamily: SERIF,
            fontWeight: 300,
            fontSize: "clamp(44px, 5vw, 72px)",
            lineHeight: 1,
            letterSpacing: "-.01em",
            color: BONE,
            textWrap: "balance",
          }}
        >
          Four decades, one desk, <em style={{ fontStyle: "italic" }}>one city.</em>
        </h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "rgba(247,244,238,.74)", maxWidth: 520, textWrap: "pretty" }}>
          With more than forty years of experience, we believe in clear advice, careful paperwork, and honest realty
          services.
        </p>
      </div>
    </section>
  );
}
