import { ImagePlaceholder } from "../ImagePlaceholder";

const team = [
  { name: "Narender Kumar Lukra", role: "Founder", placeholder: "Drop portrait — founder" },
  { name: "Yuvraj Lukra", role: "Head, Legal Cell", placeholder: "Drop portrait — legal cell head" },
];

export function About() {
  return (
    <section id="about" style={{ background: "#F7F4EE", padding: "112px 44px 120px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", flexDirection: "column", gap: 76 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, .8fr) minmax(0, 2fr)",
            gap: 72,
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ margin: 0, fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#8C7A4B" }}>
              About us
            </p>
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(34px, 3.6vw, 56px)",
                lineHeight: 1.05,
                color: "#14130F",
                textWrap: "balance",
              }}
            >
              Experience You
              <br />
              Can Trust
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 26, maxWidth: 660 }}>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(22px, 2vw, 30px)",
                lineHeight: 1.45,
                color: "#14130F",
                textWrap: "pretty",
              }}
            >
              YNL Realtors began its journey in the early 1980s under the guidance of our founder, Mr. Narender
              Kumar Lukra. Starting with agriculture land in Faridabad, we have grown into a trusted real estate
              business dealing in agriculture, residential, and commercial properties.
            </p>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: "#5E594E", textWrap: "pretty" }}>
              Today, our team of eight people helps clients find and understand the right property. Mr. Lukra
              personally guides every client, supported by our in-house legal, valuation, and documentation teams.
            </p>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: "#5E594E", textWrap: "pretty" }}>
              With more than four decades of experience, we believe in clear advice, careful paperwork, and honest
              realty services.
            </p>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: "#14130F", fontWeight: 500 }}>
              YNL Realtors — trusted experience in Faridabad real estate.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 40, paddingTop: 8 }}>
              {[
                ["1980s", "Founded"],
                ["8", "Team members"],
                ["40+", "Years of experience"],
              ].map(([value, label]) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <p style={{ margin: 0, fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 34, color: "#14130F" }}>
                    {value}
                  </p>
                  <p style={{ margin: 0, fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: "#8C7A4B" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, .8fr) minmax(0, 2fr)",
            gap: 72,
            alignItems: "start",
            borderTop: "1px solid rgba(20,19,15,.14)",
            paddingTop: 56,
          }}
        >
          <p style={{ margin: 0, fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#8C7A4B" }}>
            In-house legal cell
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 660 }}>
            <h3 style={{ margin: 0, fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400, fontSize: 26, color: "#14130F" }}>
              Documentation and disputes, handled in-house
            </h3>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: "#5E594E", textWrap: "pretty" }}>
              YNL Realtors runs its own in-house Legal Cell for all documentation consultation — title checks,
              agreements, and registration. If a civil dispute arises on a property, the Legal Cell represents our
              clients directly rather than referring them elsewhere. It is headed by Mr. Yuvraj Lukra.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 36 }}>
          {team.map((member) => (
            <div key={member.name} style={{ display: "flex", flexDirection: "column", gap: 18, minWidth: 0 }}>
              <ImagePlaceholder label={member.placeholder} />
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <h3 style={{ margin: 0, fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400, fontSize: 26, color: "#14130F" }}>
                  {member.name}
                </h3>
                <p style={{ margin: 0, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#8C7A4B" }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
