const services = [
  {
    num: "01",
    title: "Buying Land and Estates",
    body: [
      "We help you find residential plots, farm land, agriculture land, builder floors and large old estates. We check the papers carefully so you can feel safe before you buy.",
      "We also look for land that may be ready for a new use, such as homes, offices, or other projects.",
    ],
    tags: "Checking Papers · Finding Good Land · Bringing Land Together",
  },
  {
    num: "02",
    title: "Advice for Property Investments",
    body: [
      "Buying properties is a big decision. We help you understand how your money may grow over time.",
      "We explain the numbers in a simple way and help you decide whether to keep a property, sell it, or buy another one.",
    ],
    tags: "Understanding Returns · Making Smart Choices · Planning the Sale",
  },
  {
    num: "03",
    title: "Commercial Property Leasing",
    body: [
      "We help businesses find offices, shops, and other commercial properties. We can help from the time you see an empty space until the space is ready to use.",
      "We also help discuss the rent and other terms with the property owner.",
    ],
    tags: "Finding Space · Discussing Terms · Getting Ready",
  },
  {
    num: "04",
    title: "Helping Developers Sell Properties",
    body: [
      "We help builders and developers sell new homes, properties, and residential plots. Our private list of buyers may see these properties before everyone else.",
      "This can help developers find serious buyers while keeping the property price steady.",
    ],
    tags: "Good Presentation · Early Access · Finding Buyers",
  },
  {
    num: "05",
    title: "Luxury Home Rentals",
    body: [
      "We help owners rent out beautiful homes, villas, and penthouses. We carefully check possible tenants and help with the paperwork.",
      "We also help collect rent and look after the property, so owners do not have to worry.",
    ],
    tags: "Finding Tenants · Handling Papers · Taking Care of the Home",
  },
];

export function Services() {
  return (
    <section id="services" style={{ background: "#EAE4D8", padding: "112px 44px 120px" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(280px, .8fr) minmax(0, 2fr)",
          gap: 72,
          alignItems: "start",
        }}
      >
        <div style={{ position: "sticky", top: 120, display: "flex", flexDirection: "column", gap: 22 }}>
          <p style={{ margin: 0, fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#8C7A4B" }}>
            Services
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
            Five Teams.
            <br />
            One Trusted Property List.
          </h2>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#5E594E", maxWidth: 340, textWrap: "pretty" }}>
            At YNL Realtors, our five teams work with the same trusted list of properties. This means buyers,
            sellers, and builders all receive the same clear and honest information. We make real estate simple,
            clear, and easy to understand.
          </p>
          <a
            href="#contact"
            className="hover-gold-dim"
            style={{
              fontSize: 12,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "#14130F",
              borderBottom: "1px solid #C9A227",
              paddingBottom: 8,
              width: "fit-content",
            }}
          >
            Talk to a Principal
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {services.map((s, i) => (
            <div
              key={s.num}
              style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr",
                gap: 28,
                padding: "34px 0",
                borderTop: "1px solid rgba(20,19,15,.16)",
                borderBottom: i === services.length - 1 ? "1px solid rgba(20,19,15,.16)" : undefined,
              }}
            >
              <p style={{ margin: 0, fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 22, color: "#C9A227" }}>
                {s.num}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <h3 style={{ margin: 0, fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400, fontSize: 30, color: "#14130F" }}>
                  {s.title}
                </h3>
                {s.body.map((paragraph) => (
                  <p key={paragraph} style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#5E594E", maxWidth: 620, textWrap: "pretty" }}>
                    {paragraph}
                  </p>
                ))}
                <p style={{ margin: "4px 0 0", fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "#8C7A4B" }}>
                  {s.tags}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
