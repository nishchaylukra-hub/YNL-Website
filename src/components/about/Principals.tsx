import Image from "next/image";
import { BONE, BRONZE, INK, SERIF, blockGap, eyebrow, sectionPad, smallCaps } from "../tokens";

const team = [
  { name: "Narender Kumar Lukra", role: "Founder", photo: "/assets/founder-narender-lukra.png", objectPosition: "50% 20%" },
  { name: "Yuvraj Lukra", role: "Head, Legal Cell", photo: "/assets/head-legal-cell-yuvraj-lukra.png", objectPosition: "50% 20%" },
];

export function Principals() {
  return (
    <section
      className="wrap"
      style={{ display: "flex", flexDirection: "column", gap: blockGap, paddingTop: sectionPad, paddingBottom: sectionPad, background: BONE, color: INK }}
    >
      <p style={eyebrow(BRONZE)}>The principals</p>
      <div className="split" style={{ ["--gap" as string]: "48px", ["--gap-sm" as string]: "40px" }}>
        {team.map((m) => (
          <figure
            key={m.name}
            style={{ margin: 0, display: "flex", flexDirection: "column", gap: 16 }}
          >
            <div style={{ position: "relative", width: "100%", height: "clamp(320px, 36vw, 520px)", overflow: "hidden" }}>
              <Image
                src={m.photo}
                alt={`${m.name}, ${m.role}`}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: m.objectPosition }}
              />
            </div>
            <figcaption style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontFamily: SERIF, fontSize: "clamp(26px, 2.2vw, 32px)", lineHeight: 1.1 }}>{m.name}</span>
              <span style={{ ...smallCaps(BRONZE), fontSize: 12, letterSpacing: ".2em" }}>{m.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
