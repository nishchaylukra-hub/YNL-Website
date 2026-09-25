import { BONE, BRONZE, INK, LOAM, SERIF, eyebrow, sectionPad } from "../tokens";

// TODO: replace "Over the years" / "In-house" with the actual years once confirmed.
const entries: { when: string; italic?: boolean; title: string; body: string }[] = [
  {
    when: "Early 1980s",
    title: "Founded on agriculture land",
    body: "Mr. Narender Kumar Lukra starts YNL Realtors dealing in agriculture land in Faridabad.",
  },
  {
    when: "Over the years",
    italic: true,
    title: "Residential and commercial",
    body: "The practice grows beyond farm land into residential plots, builder floors, homes and commercial property.",
  },
  {
    when: "In-house",
    italic: true,
    title: "The Legal Cell",
    body: "Documentation and civil disputes are handled in-house, headed by Mr. Yuvraj Lukra.",
  },
  {
    when: "Today",
    italic: true,
    title: "Eight people, two offices",
    body: "Mr. Lukra still personally guides every client, supported by in-house legal, valuation and documentation teams — at Sector 12 and NIT, Faridabad.",
  },
];

const rule = "1px solid rgba(20,19,15,.18)";

export function Timeline() {
  return (
    <section
      className="wrap split"
      style={{
        ["--cols" as string]: "minmax(0, 4fr) minmax(0, 8fr)",
        paddingTop: sectionPad,
        paddingBottom: sectionPad,
        background: BONE,
        color: INK,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <p style={eyebrow(BRONZE)}>§ 02 — The ledger</p>
        <h2 style={{ margin: 0, fontFamily: SERIF, fontWeight: 300, fontSize: "clamp(40px, 3.9vw, 56px)", lineHeight: 1.02, textWrap: "balance" }}>
          From farm land to <em style={{ fontStyle: "italic" }}>every kind</em> of address.
        </h2>
      </div>
      <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", borderBottom: rule }}>
        {entries.map((e) => (
          <li
            key={e.title}
            className="split"
            style={{
              ["--cols" as string]: "minmax(0, 200px) minmax(0, 1fr)",
              ["--gap" as string]: "40px",
              ["--gap-sm" as string]: "14px",
              padding: "36px 0",
              borderTop: rule,
            }}
          >
            <span style={{ fontFamily: SERIF, fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: 1, fontStyle: e.italic ? "italic" : undefined }}>
              {e.when}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: 28 }}>{e.title}</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: LOAM, textWrap: "pretty" }}>{e.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
