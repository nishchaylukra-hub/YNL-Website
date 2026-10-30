import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, IconBadge } from "../Icons";
import { BONE, GOLD, INK, SERIF, buttonBase, iconButton, smallCaps } from "../tokens";
import faridabadMap from "./faridabad_midnight_blue_20260927_232621.png";

const facts: { value: string; label: string; italic?: boolean }[] = [
  { value: "40+", label: "Years in Faridabad" },
  { value: "1,135", label: "Acres placed" },
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
        <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 16, ...smallCaps(GOLD), letterSpacing: "clamp(.26em, 3vw, .42em)", lineHeight: 1.6 }}>
          <span style={{ width: 32, height: 1, flexShrink: 0, background: GOLD, display: "block" }} />
          Faridabad real estate · Since the early 1980s
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
          Property in Faridabad, chosen with care and{" "}
          <em style={{ fontStyle: "italic", color: GOLD }}>checked down to the last paper.</em>
        </h1>
        <p style={{ margin: 0, fontSize: "clamp(16px, 1.3vw, 18px)", lineHeight: 1.7, color: "rgba(247,244,238,.74)", maxWidth: 500, textWrap: "pretty" }}>
          YNL Realtors has been helping Faridabad families, investors and businesses buy, sell and lease property since
          the early 1980s. Whether you&apos;re looking for a family home, farm land, a builder floor or a commercial
          space, we&apos;ll tell you what&apos;s worth your money, and what isn&apos;t, before you commit. Every deal is
          backed by our own legal team, so the paperwork is never something you have to worry about.
        </p>
        <div className="btn-row" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Link href="/contact" className="btn-gold" style={{ ...iconButton, background: GOLD, color: INK, border: `1px solid ${GOLD}` }}>
            Book a viewing
            <IconBadge background={INK} color={GOLD}><ArrowIcon /></IconBadge>
          </Link>
          <Link
            href="/services"
            className="btn-outline"
            style={{ ...buttonBase, fontWeight: 400, color: BONE, border: "1px solid rgba(247,244,238,.34)" }}
          >
            See what we do
          </Link>
        </div>
        <div
          className="ruled-cols keep-cols"
          style={{ ["--n" as string]: 4, marginTop: "clamp(4px, 1.4vw, 20px)", borderTop: "1px solid rgba(247,244,238,.14)", ["--rule" as string]: "rgba(247,244,238,.14)" }}
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
      <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 14, padding: "clamp(16px, 1.5vw, 22px)", border: "1px solid rgba(201,162,39,.38)", background: "#17160F" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase", color: GOLD }}>
          <span>Sheet 01</span>
          <span>Faridabad, Haryana</span>
        </div>
        <Image
          src={faridabadMap}
          alt="Map of Faridabad, Haryana"
          className="plate-img"
          sizes="(max-width: 900px) 100vw, 45vw"
          style={{ display: "block", width: "100%", height: "auto", objectFit: "cover" }}
        />
      </figure>
    </section>
  );
}
