const stats = [
  { value: "1,135", label: "Acres placed" },
  { value: "41", label: "Years, one desk" },
  { value: "5", label: "Cities covered" },
  { value: "70%", label: "Closed off-market" },
];

export function Proof() {
  return (
    <section style={{ background: "#1A1811", padding: "56px 44px", borderTop: "1px solid rgba(201,162,39,.22)" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 40,
        }}
      >
        {stats.map((s) => (
          <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ margin: 0, fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 52, lineHeight: 1, color: "#C9A227" }}>
              {s.value}
            </p>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(247,244,238,.55)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
