import Image from "next/image";

export function Footer() {
  return (
    <footer style={{ background: "#0F0E0B", padding: "52px 44px", borderTop: "1px solid rgba(247,244,238,.1)" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 28,
        }}
      >
        <Image
          src="/assets/ynl-logo-mark.png"
          alt="YNL Realtors"
          height={28}
          width={105}
          style={{ height: 28, width: "auto", display: "block" }}
        />
        <nav style={{ display: "flex", flexWrap: "wrap", gap: 26 }}>
          <a href="#services" className="hover-gold" style={footerLinkStyle}>
            Services
          </a>
          <a href="#about" className="hover-gold" style={footerLinkStyle}>
            About us
          </a>
          <a href="#contact" className="hover-gold" style={footerLinkStyle}>
            Contact details
          </a>
        </nav>
        <p style={{ margin: 0, fontSize: 12, letterSpacing: ".14em", color: "rgba(247,244,238,.38)" }}>
          © 2026 YNL Realtors · Land. Legacy. Luxury.
        </p>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  fontSize: 12,
  letterSpacing: ".18em",
  textTransform: "uppercase" as const,
  color: "rgba(247,244,238,.6)",
};
