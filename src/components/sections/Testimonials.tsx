import { BONE, GOLD, INK, SERIF, eyebrow, sectionPad, smallCaps } from "../tokens";

const quotes = [
  {
    text: "They brought us a parcel that never touched the market — and a title file our lawyers barely had to touch.",
    name: "Managing Partner",
    org: "Single-family office",
  },
  {
    text: "The only brokerage that told us not to buy. That is exactly why we bought the next one through them.",
    name: "Director, Development",
    org: "Hospitality group",
  },
];

export function Testimonials() {
  return (
    <section
      className="wrap"
      style={{ display: "flex", flexDirection: "column", gap: 64, paddingTop: sectionPad, paddingBottom: sectionPad, background: INK }}
    >
      <p style={eyebrow(GOLD)}>§ 04 — In their words</p>
      <div className="split" style={{ ["--gap" as string]: "96px" }}>
        {quotes.map((q, i) => (
          <figure key={q.name} className={i === 1 ? "offset-down" : undefined} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 32 }}>
            <span aria-hidden="true" style={{ fontFamily: SERIF, fontSize: 96, lineHeight: 0.5, height: 40, color: GOLD }}>
              &ldquo;
            </span>
            <blockquote
              style={{
                margin: 0,
                fontFamily: SERIF,
                fontWeight: 300,
                fontSize: "clamp(26px, 2.5vw, 36px)",
                lineHeight: 1.35,
                color: BONE,
                textWrap: "pretty",
              }}
            >
              {q.text}
            </blockquote>
            <figcaption style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 20, borderTop: "1px solid rgba(247,244,238,.16)" }}>
              <span style={{ fontSize: 14, color: BONE }}>{q.name}</span>
              <span style={smallCaps("rgba(247,244,238,.6)")}>{q.org}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
