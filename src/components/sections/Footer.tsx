import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { INK_3, smallCaps } from "../tokens";

export function Footer() {
  return (
    <footer
      className="wrap"
      style={{ display: "flex", flexDirection: "column", gap: 56, paddingTop: 72, paddingBottom: 48, background: INK_3 }}
    >
      <div className="split" style={{ ["--cols" as string]: "minmax(0, 1.4fr) repeat(3, minmax(0, 1fr))", ["--gap" as string]: "48px" }}>
        <Image
          src="/assets/ynl-logo-mark.png"
          alt="YNL Realtors"
          height={52}
          width={195}
          style={{ height: 52, width: "auto", display: "block", alignSelf: "start" }}
        />
        <div style={columnStyle}>
          <span style={headingStyle}>Offices</span>
          <span>S-22, Sector 12, Faridabad</span>
          <span>3E-8, NIT, Faridabad</span>
        </div>
        <div style={columnStyle}>
          <span style={headingStyle}>Hours</span>
          <span>Mon–Sat, 9:00am–5:00pm</span>
          <span>Sunday by appointment</span>
        </div>
        <nav style={columnStyle}>
          <span style={headingStyle}>Site</span>
          <Link href="/#services" className="hover-gold" style={linkStyle}>Services</Link>
          <Link href="/about" className="hover-gold" style={linkStyle}>About &amp; Legal Cell</Link>
          <Link href="/contact" className="hover-gold" style={linkStyle}>Contact</Link>
          <Link href="/sitemap" className="hover-gold" style={linkStyle}>Sitemap</Link>
        </nav>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 16,
          paddingTop: 24,
          borderTop: "1px solid rgba(247,244,238,.1)",
          fontSize: 12,
          letterSpacing: ".14em",
          color: "rgba(247,244,238,.5)",
        }}
      >
        <span>© 2026 YNL Realtors</span>
        <span>Land. Legacy. Luxury.</span>
      </div>
    </footer>
  );
}

const columnStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  fontSize: 14,
  lineHeight: 1.6,
  color: "rgba(247,244,238,.8)",
};

const headingStyle: CSSProperties = { ...smallCaps("rgba(247,244,238,.5)"), letterSpacing: ".26em" };

const linkStyle: CSSProperties = { color: "rgba(247,244,238,.8)" };
