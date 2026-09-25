import { ImagePlaceholder } from "../ImagePlaceholder";
import { BONE, BRONZE, INK, SERIF, eyebrow, sectionPad, smallCaps } from "../tokens";

const team = [
  { name: "Narender Kumar Lukra", role: "Founder", placeholder: "[Portrait — founder]" },
  { name: "Yuvraj Lukra", role: "Head, Legal Cell", placeholder: "[Portrait — head, Legal Cell]" },
];

export function Principals() {
  return (
    <section
      className="wrap"
      style={{ display: "flex", flexDirection: "column", gap: 56, paddingTop: sectionPad, paddingBottom: sectionPad, background: BONE, color: INK }}
    >
      <p style={eyebrow(BRONZE)}>§ 04 — The principals</p>
      <div className="split" style={{ ["--gap" as string]: "48px" }}>
        {team.map((m, i) => (
          <figure
            key={m.name}
            className={i === 1 ? "offset-down" : undefined}
            style={{ ["--offset" as string]: "80px", margin: 0, display: "flex", flexDirection: "column", gap: 20 }}
          >
            <ImagePlaceholder label={m.placeholder} style={{ height: "clamp(380px, 36vw, 520px)" }} />
            <figcaption style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontFamily: SERIF, fontSize: 32 }}>{m.name}</span>
              <span style={{ ...smallCaps(BRONZE), fontSize: 12, letterSpacing: ".2em" }}>{m.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
