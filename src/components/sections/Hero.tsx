export function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 620,
        overflow: "hidden",
        background: "linear-gradient(160deg, #3a3226 0%, #14130F 62%, #0c0b08 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, rgba(20,19,15,.5) 0%, rgba(20,19,15,0) 24%, rgba(20,19,15,0) 46%, rgba(20,19,15,.78) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "0 44px 52px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 48,
        }}
      >
        <div style={{ maxWidth: 640 }}>
          <p style={{ margin: "0 0 18px", fontSize: 11, letterSpacing: ".42em", textTransform: "uppercase", color: "#C9A227" }}>
            Land · Legacy · Luxury
          </p>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(44px, 5.2vw, 84px)",
              lineHeight: 1.03,
              letterSpacing: "-.01em",
              color: "#F7F4EE",
              textWrap: "balance",
            }}
          >
            Addresses that
            <br />
            <em style={{ fontStyle: "italic", color: "#C9A227" }}>outlive</em> the market.
          </h1>
          <p
            style={{
              margin: "26px 0 0",
              fontSize: 17,
              lineHeight: 1.65,
              color: "rgba(247,244,238,.72)",
              maxWidth: 470,
              textWrap: "pretty",
            }}
          >
            We place land, penthouses and prime commercial floors with the people and institutions who hold them for
            generations. Off-market first. Always.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
            <a
              href="#contact"
              className="btn-gold"
              style={{
                fontSize: 12,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "#14130F",
                background: "#C9A227",
                padding: "17px 30px",
                fontWeight: 500,
              }}
            >
              Request the portfolio
            </a>
            <a
              href="#services"
              className="btn-outline"
              style={{
                fontSize: 12,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "#F7F4EE",
                border: "1px solid rgba(247,244,238,.34)",
                padding: "17px 30px",
              }}
            >
              What we do
            </a>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 26, paddingBottom: 6 }}>
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: 0, fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 42, color: "#F7F4EE", lineHeight: 1 }}>
              62
            </p>
            <p style={{ margin: "6px 0 0", fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(247,244,238,.5)" }}>
              Live exclusive mandates
            </p>
          </div>
          <a
            href="#services"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 11,
              letterSpacing: ".24em",
              textTransform: "uppercase",
              color: "rgba(247,244,238,.6)",
              animation: "cue 2.6s ease-in-out infinite",
            }}
          >
            Scroll <span style={{ width: 1, height: 34, background: "rgba(247,244,238,.4)", display: "block" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
