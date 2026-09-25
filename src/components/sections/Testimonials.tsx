const quotes = [
  {
    text: "They brought us a parcel that never touched the market — and a title file our lawyers barely had to touch.",
    name: "Managing Partner",
    org: "Single-family office",
  },
  {
    text: "The only brokerage that told us not to buy. That is exactly why we bought the next one through them.",
    name: "Director, Development",
    org: "Hospitality group",
  },
];

export function Testimonials() {
  return (
    <section style={{ background: "#EAE4D8", padding: "104px 44px" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 64,
        }}
      >
        {quotes.map((q) => (
          <figure key={q.name} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 26 }}>
            <blockquote
              style={{
                margin: 0,
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(24px, 2.3vw, 34px)",
                lineHeight: 1.4,
                color: "#14130F",
                textWrap: "pretty",
              }}
            >
              &ldquo;{q.text}&rdquo;
            </blockquote>
            <figcaption style={{ display: "flex", flexDirection: "column", gap: 5, borderTop: "1px solid rgba(20,19,15,.2)", paddingTop: 18 }}>
              <p style={{ margin: 0, fontSize: 14, color: "#14130F" }}>{q.name}</p>
              <p style={{ margin: 0, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "#8C7A4B" }}>
                {q.org}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
