import Link from "next/link";
import { GOLD, INK, BONE, SERIF, buttonBase, eyebrow, smallCaps } from "../tokens";

const direct = [
  { href: "tel:+919717847278", label: "+91 97178 47278", action: "Call" },
  { href: "tel:+919811047278", label: "+91 98110 47278", action: "Call" },
  { href: "mailto:ynlrealtors@gmail.com", label: "ynlrealtors@gmail.com", action: "Write" },
];

// Gold closing band on the home page; the full enquiry form lives on /contact.
export function ContactBand() {
  return (
    <section
      className="wrap split"
      style={{
        ["--cols" as string]: "minmax(0, 1.2fr) minmax(0, .8fr)",
        ["--gap" as string]: "96px",
        alignItems: "end",
        paddingBlock: "clamp(64px, 8vw, 112px)",
        background: GOLD,
        color: INK,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <p style={eyebrow(INK)}>§ 05 — Contact</p>
        <h2
          style={{
            margin: 0,
            fontFamily: SERIF,
            fontWeight: 300,
            fontSize: "clamp(54px, 7.2vw, 104px)",
            lineHeight: 0.95,
            letterSpacing: "-.015em",
          }}
        >
          Come to <em style={{ fontStyle: "italic" }}>the table.</em>
        </h2>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, maxWidth: 480 }}>
          Viewings and portfolio reviews are by appointment. Tell us what you are holding or hunting and a principal
          replies the same working day.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(20,19,15,.3)" }}>
          {direct.map((d) => (
            <a
              key={d.label}
              href={d.href}
              className="hover-gold-dim"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                padding: "18px 0",
                borderBottom: "1px solid rgba(20,19,15,.3)",
                fontSize: 18,
                color: INK,
              }}
            >
              <span>{d.label}</span>
              <span style={smallCaps(INK)}>{d.action}</span>
            </a>
          ))}
        </div>
        <Link href="/contact" className="btn-ink" style={{ ...buttonBase, width: "fit-content", background: INK, color: BONE }}>
          Book a viewing
        </Link>
      </div>
    </section>
  );
}
