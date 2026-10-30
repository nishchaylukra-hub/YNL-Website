import Link from "next/link";
import type { ElementType } from "react";
import { BRONZE, GOLD, GOLD_DEEP, INK, LOAM, SAND, SERIF, blockGap, eyebrow, h2Style, sectionPad, smallCaps } from "../tokens";

const services = [
  {
    num: "01",
    title: "Agriculture land, plots and estates in Faridabad",
    body: [
      "Looking for farm land for sale in Faridabad, a residential plot, a builder floor or an old family estate? We started with agriculture land in the early 1980s, and it's still where we know the most. Before you pay anything, our legal team goes through the title, the ownership history and the registration papers, so you know exactly what you're buying and nothing surprises you later.",
      "Some of the land we handle may be ready for a new use, like housing, offices or a larger project. If you're thinking about that, we'll tell you honestly what's possible and what's not.",
    ],
    tags: "Title and paper checks · Finding the right land · Bringing plots together",
    linkText: "Talk to us about land",
  },
  {
    num: "02",
    title: "Property investment advice in Faridabad",
    body: [
      "Property is usually the biggest money decision a family or investor makes, so it shouldn't be rushed. We'll sit down with you, go through the numbers in plain language, and explain what rent, resale value and holding costs might realistically look like. Then we help you decide whether to hold, sell or move into something new.",
      "Sometimes the best advice is not to buy. If a property doesn't make sense for you, we'll say so, even if it means no deal for us. Clients tend to trust us more for that, and it's why many of them come back for their next purchase.",
    ],
    tags: "Understanding returns · Smart buying decisions · Planning your sale",
    linkText: "Get property investment advice",
  },
  {
    num: "03",
    title: "Commercial property for lease in Faridabad",
    body: [
      "Whether you need an office, a shop or a larger commercial space, finding the right place is only half the job. We help you shortlist spaces that suit your business, your budget and your customers, then handle the conversation with the owner so the rent and terms are fair to both sides. We stay with you from the first viewing until the keys are in your hand and the space is ready to use.",
      "Owners with commercial property to lease are welcome too. We'll help you find reliable tenants and agree terms that protect your property for the long run.",
    ],
    tags: "Finding the right space · Negotiating rent and terms · Getting ready to move in",
    linkText: "Find commercial space in Faridabad",
  },
  {
    num: "04",
    title: "Sell new homes and plots in Faridabad: support for builders and developers",
    body: [
      "Launching a project is hard enough without chasing buyers who aren't serious. We help builders and developers in Faridabad sell new homes, builder floors and residential plots by presenting each property clearly and putting it in front of the right people. Our private list of interested buyers, built over four decades, gets early access before a property goes to the wider market.",
      "We focus on genuine buyers rather than a flood of enquiries, and we work to protect your pricing instead of rushing into discounts. That way you get steady, well-informed sales, and your buyers get honest answers from the first conversation.",
    ],
    tags: "Clear presentation · Early access for buyers · Finding genuine buyers",
    linkText: "Talk to us about selling your project",
  },
  {
    num: "05",
    title: "Luxury home rentals in Faridabad",
    body: [
      "Renting out a villa, penthouse or high-end home should feel easy, not like a second job. We find tenants for your property in Faridabad, check each one carefully, and take care of the agreements and paperwork. Once they've moved in, we collect the rent and keep an eye on the property, so you're not getting calls about every small thing.",
      "If you're looking for a premium home to rent, we can help with that too. We'll show you homes that suit your family and your budget, and we'll explain the lease terms clearly before you sign anything.",
    ],
    tags: "Finding reliable tenants · Handling the paperwork · Looking after your home",
    linkText: "List your home for rent",
  },
];

const rule = "1px solid rgba(20,19,15,.18)";

// `as` lets the page that actually owns this content (/services) render the heading as the page's H1,
// while the home page, which has its own H1 in the hero, keeps it as an H2.
export function Services({ as = "h2" }: { as?: "h1" | "h2" } = {}) {
  const Heading = as as ElementType;

  return (
    <section
      id="services"
      className="wrap"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: blockGap,
        paddingTop: sectionPad,
        paddingBottom: sectionPad,
        background: SAND,
        color: INK,
        scrollMarginTop: 80,
      }}
    >
      <div className="split" style={{ alignItems: "end", ["--gap-sm" as string]: "28px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <p style={eyebrow(BRONZE)}>Services</p>
          <Heading style={h2Style}>
            Property services in Faridabad, <em style={{ fontStyle: "italic" }}>all under one roof</em>
          </Heading>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingBottom: 6 }}>
          <p style={{ margin: 0, fontSize: "clamp(16px, 1.2vw, 17px)", lineHeight: 1.75, color: LOAM, textWrap: "pretty" }}>
            Buying, selling, leasing or investing, you&apos;ll end up talking to the same team, looking at the same list
            of properties and hearing the same straight answers. We&apos;ve spent over forty years in Faridabad, so we
            know which sectors are growing, which deals look better on paper than in real life, and when it&apos;s
            smarter to wait. That&apos;s the kind of advice we&apos;d want if it were our own money.
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
          <article key={s.num} className="ledger-row" style={{ paddingBlock: "clamp(28px, 3vw, 44px)", borderTop: rule }}>
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(34px, 3.4vw, 48px)", lineHeight: 1, color: GOLD_DEEP }}>{s.num}</span>
            <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(26px, 2.5vw, 36px)", lineHeight: 1.1 }}>{s.title}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {s.body.map((paragraph) => (
                <p key={paragraph} style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: LOAM, textWrap: "pretty" }}>
                  {paragraph}
                </p>
              ))}
              <p style={{ margin: 0, ...smallCaps(BRONZE), fontSize: 10, letterSpacing: ".18em", lineHeight: 1.7 }}>{s.tags}</p>
              <Link
                href="/contact"
                className="hover-gold-dim"
                style={{ width: "fit-content", paddingBottom: 6, borderBottom: `1px solid ${GOLD}`, ...smallCaps(INK), fontSize: 12, letterSpacing: ".2em" }}
              >
                {s.linkText} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
