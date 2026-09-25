import Image from "next/image";
import type { CSSProperties } from "react";

export function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
        padding: "16px 44px",
        background: "rgba(20,19,15,.88)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(247,244,238,.12)",
      }}
    >
      <a href="#top" style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <Image src="/assets/ynl-logo-mark.png" alt="YNL Realtors" height={32} width={120} style={{ height: 32, width: "auto", display: "block" }} priority />
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <a href="#services" className="hover-gold" style={navLinkStyle}>
          Services
        </a>
        <a href="#about" className="hover-gold" style={navLinkStyle}>
          About Us
        </a>
        <a href="#contact" className="hover-gold" style={navLinkStyle}>
          Contact Details
        </a>
        <a href="#contact" className="btn-gold" style={ctaStyle}>
          Book a viewing
        </a>
      </nav>
    </header>
  );
}

const navLinkStyle: CSSProperties = {
  fontSize: 13,
  letterSpacing: ".18em",
  textTransform: "uppercase",
  color: "#F7F4EE",
  padding: "12px 18px",
};

const ctaStyle: CSSProperties = {
  marginLeft: 16,
  fontSize: 12,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  color: "#14130F",
  background: "#C9A227",
  padding: "14px 24px",
  fontWeight: 500,
  border: "1px solid #C9A227",
};
