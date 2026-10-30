import { BONE, BRONZE, INK, LOAM, SERIF, eyebrow, sectionPad, smallCaps } from "../tokens";

const highlights = ["Since the early 1980s", "Team of 8", "40+ years in Faridabad", "In-house Legal Cell"];

const rule = "1px solid rgba(20,19,15,.18)";

export function Timeline() {
  return (
    <section
      className="wrap split"
      style={{
        ["--cols" as string]: "minmax(0, 4fr) minmax(0, 8fr)",
        ["--gap-sm" as string]: "32px",
        paddingTop: sectionPad,
        paddingBottom: sectionPad,
        background: BONE,
        color: INK,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <p style={eyebrow(BRONZE)}>Experience</p>
        <h2 style={{ margin: 0, fontFamily: SERIF, fontWeight: 300, fontSize: "clamp(34px, 3.9vw, 56px)", lineHeight: 1.02, textWrap: "balance" }}>
          Experience you <em style={{ fontStyle: "italic" }}>can lean on.</em>
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(28px, 3vw, 40px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: LOAM, textWrap: "pretty" }}>
            Today we&apos;re a team of eight, and Mr. Lukra still guides every client personally. You won&apos;t be
            handed off to someone who has never seen the property. Behind him, our in-house legal, valuation and
            documentation teams check the details, so you get honest advice on the price, the papers and the risks
            before you decide anything.
          </p>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: LOAM, textWrap: "pretty" }}>
            After more than forty years here, we know the sectors, the owners and the way local deals actually work.
            That&apos;s something no listing website can give you.
          </p>
        </div>
        <div className="ruled-cols keep-cols" style={{ ["--n" as string]: 4, ["--rule" as string]: "rgba(20,19,15,.16)", borderTop: rule, borderBottom: rule }}>
          {highlights.map((h) => (
            <div key={h} style={{ display: "flex", alignItems: "center", paddingBlock: "clamp(16px, 1.6vw, 22px)" }}>
              <span style={{ ...smallCaps(BRONZE), fontSize: 11, letterSpacing: ".16em", lineHeight: 1.5 }}>{h}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(22px, 1.9vw, 26px)", lineHeight: 1.15, color: INK }}>
            Visit us in Faridabad
          </h3>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: LOAM, textWrap: "pretty" }}>
            Come and talk to us at either of our offices, in Sector 12 or NIT. Viewings and portfolio reviews are by
            appointment, so we can give you proper time and attention.
          </p>
        </div>
      </div>
    </section>
  );
}
