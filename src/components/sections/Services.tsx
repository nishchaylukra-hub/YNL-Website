import Link from "next/link";
import { BRONZE, GOLD, GOLD_DEEP, INK, LOAM, SAND, SERIF, eyebrow, h2Style, sectionPad, smallCaps } from "../tokens";

const services = [
  {
    num: "01",
    title: "Buying land and estates",
    body: "We help you find residential plots, farm land, agriculture land, builder floors and large old estates. We check the papers carefully so you can feel safe before you buy. We also look for land that may be ready for a new use, such as homes, offices, or other projects.",
    tags: "Checking papers · Finding good land · Bringing land together",
  },
  {
    num: "02",
    title: "Advice for property investments",
    body: "Buying property is a big decision. We help you understand how your money may grow over time, explain the numbers in a simple way, and help you decide whether to keep a property, sell it, or buy another one.",
    tags: "Understanding returns · Making smart choices · Planning the sale",
  },
  {
    num: "03",
    title: "Commercial property leasing",
    body: "We help businesses find offices, shops and other commercial properties — from the day you see an empty space until it is ready to use. We also help discuss the rent and other terms with the owner.",
    tags: "Finding space · Discussing terms · Getting ready",
  },
  {
    num: "04",
    title: "Helping developers sell",
    body: "We help builders and developers sell new homes and residential plots. Our private list of buyers may see these properties before everyone else — serious buyers, with the price kept steady.",
    tags: "Good presentation · Early access · Finding buyers",
  },
  {
    num: "05",
    title: "Luxury home rentals",
    body: "We help owners rent out homes, villas and penthouses. We carefully check tenants, handle the paperwork, collect rent and look after the property, so owners do not have to worry.",
    tags: "Finding tenants · Handling papers · Taking care of the home",
  },
];

const rule = "1px solid rgba(20,19,15,.18)";

export function Services() {
  return (
    <section
      id="services"
      className="wrap"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 72,
        paddingTop: sectionPad,
        paddingBottom: sectionPad,
        background: SAND,
        color: INK,
        scrollMarginTop: 80,
      }}
    >
      <div className="split" style={{ alignItems: "end" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <p style={eyebrow(BRONZE)}>§ 02 — Services</p>
          <h2 style={h2Style}>
            Five teams. <em style={{ fontStyle: "italic" }}>One trusted</em> property list.
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 26, paddingBottom: 6 }}>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.75, color: LOAM, textWrap: "pretty" }}>
            Our five teams work from the same list of properties, so buyers, sellers and builders all receive the same
            clear and honest information. We make real estate simple, clear, and easy to understand.
          </p>
          <Link
            href="/contact"
            className="hover-gold-dim"
            style={{ width: "fit-content", paddingBottom: 8, borderBottom: `1px solid ${GOLD}`, ...smallCaps(INK), fontSize: 12, letterSpacing: ".2em" }}
          >
            Talk to a principal →
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", borderBottom: rule }}>
        {services.map((s) => (
          <article key={s.num} className="ledger-row" style={{ paddingBlock: 44, borderTop: rule }}>
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 48, lineHeight: 1, color: GOLD_DEEP }}>{s.num}</span>
            <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: 36, lineHeight: 1.1 }}>{s.title}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: LOAM, textWrap: "pretty" }}>{s.body}</p>
              <p style={{ margin: 0, ...smallCaps(BRONZE), letterSpacing: ".2em" }}>{s.tags}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
