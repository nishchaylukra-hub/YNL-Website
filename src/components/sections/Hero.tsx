import Link from "next/link";
import { SurveyPlate } from "../SurveyPlate";
import { ArrowIcon, IconBadge } from "../Icons";
import { BONE, GOLD, INK, SERIF, buttonBase, iconButton, smallCaps } from "../tokens";

const facts: { value: string; label: string; italic?: boolean }[] = [
  { value: "62", label: "Live exclusive mandates" },
  { value: "In-house", label: "Legal Cell", italic: true },
  { value: "Two", label: "Offices in Faridabad" },
];

export function Hero() {
  return (
    <section
      className="wrap split"
      style={{
        ["--cols" as string]: "minmax(0, 1.12fr) minmax(0, .88fr)",
        alignItems: "end",
        paddingTop: "clamp(40px, 7vw, 96px)",
        paddingBottom: "clamp(64px, 7vw, 104px)",
        background: INK,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(24px, 2.5vw, 36px)" }}>
        <p
          style={{
            margin: 0,
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            width: "fit-content",
            padding: "8px 18px 8px 10px",
            borderRadius: 999,
            border: "1px solid rgba(201,162,39,.45)",
            background: "rgba(201,162,39,.08)",
            ...smallCaps(GOLD),
            letterSpacing: "clamp(.18em, 2vw, .3em)",
            lineHeight: 1.4,
          }}
        >
          <span style={{ width: 8, height: 8, flexShrink: 0, borderRadius: 999, background: GOLD, display: "block" }} />
          Faridabad · Since the early 1980s
        </p>
        <h1
          style={{
            margin: 0,
            fontFamily: SERIF,
            fontWeight: 300,
            fontSize: "clamp(42px, 7.2vw, 104px)",
            lineHeight: 0.98,
            letterSpacing: "-.015em",
            color: BONE,
            textWrap: "balance",
          }}
        >
          Addresses that <em style={{ fontStyle: "italic", color: GOLD }}>outlive</em> the market.
        </h1>
        <p style={{ margin: 0, fontSize: "clamp(16px, 1.3vw, 18px)", lineHeight: 1.7, color: "rgba(247,244,238,.74)", maxWidth: 500, textWrap: "pretty" }}>
          We place land, penthouses and prime commercial floors with the people and institutions who hold them for
          generations. Off-market first. Always.
        </p>
        <div className="btn-row" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Link href="/contact" className="btn-gold" style={{ ...iconButton, background: GOLD, color: INK, border: `1px solid ${GOLD}` }}>
            Request the portfolio
            <IconBadge background={INK} color={GOLD}><ArrowIcon /></IconBadge>
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
          className="ruled-cols keep-cols"
          style={{ ["--n" as string]: 3, marginTop: "clamp(4px, 1.4vw, 20px)", borderTop: "1px solid rgba(247,244,238,.14)", ["--rule" as string]: "rgba(247,244,238,.14)" }}
        >
          {facts.map((f) => (
            <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 22 }}>
              <span style={{ fontFamily: SERIF, fontSize: "clamp(26px, 2.5vw, 36px)", lineHeight: 1, color: BONE, fontStyle: f.italic ? "italic" : undefined }}>
                {f.value}
              </span>
              <span style={{ ...smallCaps("rgba(247,244,238,.6)"), fontSize: 10, letterSpacing: ".18em", lineHeight: 1.5 }}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
      <SurveyPlate />
    </section>
  );
}
