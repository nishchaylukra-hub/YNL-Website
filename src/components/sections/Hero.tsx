import Link from "next/link";
import { SurveyPlate } from "../SurveyPlate";
import { BONE, GOLD, INK, SERIF, buttonBase, smallCaps } from "../tokens";

const facts: { value: string; label: string; italic?: boolean }[] = [
  { value: "62", label: "Live exclusive mandates" },
  { value: "In-house", label: "Legal Cell", italic: true },
  { value: "Two", label: "Offices in Faridabad" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="wrap split"
      style={{
        ["--cols" as string]: "minmax(0, 1.12fr) minmax(0, .88fr)",
        alignItems: "end",
        paddingTop: "clamp(56px, 7vw, 96px)",
        paddingBottom: "clamp(64px, 7vw, 104px)",
        background: INK,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 16, ...smallCaps(GOLD), letterSpacing: ".42em" }}>
          <span style={{ width: 40, height: 1, background: GOLD, display: "block" }} />
          Faridabad · Since the early 1980s
        </p>
        <h1
          style={{
            margin: 0,
            fontFamily: SERIF,
            fontWeight: 300,
            fontSize: "clamp(52px, 7.2vw, 104px)",
            lineHeight: 0.98,
            letterSpacing: "-.015em",
            color: BONE,
            textWrap: "balance",
          }}
        >
          Addresses that <em style={{ fontStyle: "italic", color: GOLD }}>outlive</em> the market.
        </h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "rgba(247,244,238,.74)", maxWidth: 500, textWrap: "pretty" }}>
          We place land, penthouses and prime commercial floors with the people and institutions who hold them for
          generations. Off-market first. Always.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          <Link href="/contact" className="btn-gold" style={{ ...buttonBase, background: GOLD, color: INK, border: `1px solid ${GOLD}` }}>
            Request the portfolio
          </Link>
          <a
            href="#services"
            className="btn-outline"
            style={{ ...buttonBase, fontWeight: 400, color: BONE, border: "1px solid rgba(247,244,238,.34)" }}
          >
            What we do
          </a>
        </div>
        <div
          className="ruled-cols"
          style={{ ["--n" as string]: 3, marginTop: 20, borderTop: "1px solid rgba(247,244,238,.14)", ["--rule" as string]: "rgba(247,244,238,.14)" }}
        >
          {facts.map((f) => (
            <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 22 }}>
              <span style={{ fontFamily: SERIF, fontSize: 36, lineHeight: 1, color: BONE, fontStyle: f.italic ? "italic" : undefined }}>
                {f.value}
              </span>
              <span style={smallCaps("rgba(247,244,238,.6)")}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
      <SurveyPlate />
    </section>
  );
}
