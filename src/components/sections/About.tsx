import Link from "next/link";
import { ImagePlaceholder } from "../ImagePlaceholder";
import { ArrowIcon, IconBadge } from "../Icons";
import { BONE, BRONZE, GOLD, INK, RADIUS, LOAM, SERIF, eyebrow, h2Style, sectionPad, smallCaps } from "../tokens";

const stats = [
  ["1980s", "Founded"],
  ["8", "Team members"],
  ["40+", "Years of experience"],
];

// Home-page teaser; the full story lives on /about.
export function About() {
  return (
    <section
      id="about"
      className="wrap split"
      style={{
        ["--cols" as string]: "minmax(0, 5fr) minmax(0, 7fr)",
        ["--gap" as string]: "96px",
        ["--gap-sm" as string]: "40px",
        paddingTop: sectionPad,
        paddingBottom: sectionPad,
        background: BONE,
        color: INK,
      }}
    >
      <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
        <ImagePlaceholder label="[Portrait — founder]" style={{ height: "clamp(300px, 43vw, 620px)" }} />
        <figcaption style={{ display: "flex", justifyContent: "space-between", gap: 16, ...smallCaps(BRONZE), letterSpacing: ".2em" }}>
          <span>Mr. Narender Kumar Lukra</span>
          <span>Founder</span>
        </figcaption>
      </figure>

      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(22px, 2.2vw, 32px)", paddingTop: 12 }}>
        <p style={eyebrow(BRONZE)}>§ 03 — About us</p>
        <h2 style={h2Style}>
          Experience you <em style={{ fontStyle: "italic" }}>can trust.</em>
        </h2>
        <p style={{ margin: 0, fontFamily: SERIF, fontSize: "clamp(20px, 2vw, 28px)", lineHeight: 1.45, textWrap: "pretty" }}>
          YNL Realtors began in the early 1980s under our founder, Mr. Narender Kumar Lukra. Starting with agriculture
          land in Faridabad, we have grown into a trusted business in agriculture, residential and commercial property.
        </p>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: LOAM, maxWidth: 620, textWrap: "pretty" }}>
          Today our team of eight helps clients find and understand the right property. Mr. Lukra personally guides every
          client, supported by our in-house legal, valuation and documentation teams.
        </p>
        <div
          className="ruled-cols keep-cols"
          style={{
            ["--n" as string]: 3,
            ["--rule" as string]: "rgba(20,19,15,.16)",
            borderTop: "1px solid rgba(20,19,15,.16)",
            borderBottom: "1px solid rgba(20,19,15,.16)",
          }}
        >
          {stats.map(([value, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 6, paddingBlock: "clamp(18px, 1.8vw, 24px)" }}>
              <span style={{ fontFamily: SERIF, fontSize: "clamp(28px, 2.8vw, 40px)", lineHeight: 1 }}>{value}</span>
              <span style={{ ...smallCaps(BRONZE), fontSize: 10, letterSpacing: ".18em", lineHeight: 1.5 }}>{label}</span>
            </div>
          ))}
        </div>
        <div className="split" style={{ ["--cols" as string]: "200px minmax(0, 1fr)", ["--gap" as string]: "32px", ["--gap-sm" as string]: "14px", padding: "clamp(24px, 2.2vw, 32px)", borderRadius: RADIUS, background: INK, color: BONE }}>
          <p style={{ margin: 0, ...smallCaps(GOLD), letterSpacing: ".32em", lineHeight: 1.8 }}>
            In-house
            <br />
            Legal Cell
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={{ margin: 0, fontFamily: SERIF, fontSize: "clamp(20px, 1.7vw, 24px)", lineHeight: 1.35 }}>
              Title checks, agreements and registration — and if a civil dispute arises, we represent you directly.
            </p>
            <Link
              href="/about#legal"
              className="pill-link on-dark"
              style={{ color: GOLD, borderColor: "rgba(201,162,39,.5)" }}
            >
              Headed by Mr. Yuvraj Lukra
              <IconBadge size={34} background={GOLD} color={INK}>
                <ArrowIcon size={15} />
              </IconBadge>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
