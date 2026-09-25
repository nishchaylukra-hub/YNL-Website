import { GOLD, INK_2, SERIF, smallCaps } from "../tokens";

const stats = [
  { value: "1,135", label: "Acres placed" },
  { value: "41", label: "Years, one desk" },
  { value: "5", label: "Cities covered" },
  { value: "70%", label: "Closed off-market" },
];

export function Proof() {
  return (
    <section
      className="wrap"
      style={{
        background: INK_2,
        borderTop: "1px solid rgba(201,162,39,.24)",
        borderBottom: "1px solid rgba(201,162,39,.24)",
      }}
    >
      <div className="ruled-cols">
        {stats.map((s) => (
          <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 12, paddingBlock: "clamp(28px, 4vw, 52px)" }}>
            <p style={{ margin: 0, fontFamily: SERIF, fontSize: "clamp(44px, 4.4vw, 64px)", lineHeight: 1, color: GOLD }}>{s.value}</p>
            <p style={{ margin: 0, ...smallCaps("rgba(247,244,238,.62)"), letterSpacing: ".24em" }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
