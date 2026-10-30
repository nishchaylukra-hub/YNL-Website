import Image from "next/image";
import type { ElementType } from "react";
import { BONE, GOLD, INK_2, SERIF, blockGap, eyebrow, sectionPad } from "../tokens";

const practice = [
  {
    num: "i.",
    title: "Property title verification in Faridabad",
    body: "Before any purchase, we trace the ownership of the property and check that the title is clear. We look at who owns it, whether there are any claims or disputes attached, and whether the papers match what you've been told. If something doesn't look right, we'll explain it in plain words, so you can decide with the full picture.",
  },
  {
    num: "ii.",
    title: "Agreements and property registration in Faridabad",
    body: "Once you're ready to go ahead, we prepare the agreements and handle property registration in Faridabad on your behalf. You won't be left chasing offices or wondering whether a document was filed correctly. We keep you informed at each step and make sure the paperwork is in order from the first draft to the final signature.",
  },
  {
    num: "iii.",
    title: "Help with property disputes",
    body: "Sometimes a civil dispute comes up, whether it's about ownership, boundaries or an agreement that wasn't kept. If that happens, our Legal Cell represents you directly, so you don't have to start again with a new lawyer who doesn't know your case. We'll tell you honestly where you stand and what your options are before taking any step.",
  },
];

// `as` lets /about-legal render the heading as the page's H1, while /about (which has its own
// H1 in AboutHero) keeps it as an H2. `withPortrait` adds the Legal Cell head's photo.
export function LegalCell({ as = "h2", withPortrait = false }: { as?: "h1" | "h2"; withPortrait?: boolean } = {}) {
  const Heading = as as ElementType;

  return (
    <section
      className="wrap"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: blockGap,
        paddingTop: sectionPad,
        paddingBottom: sectionPad,
        background: INK_2,
        color: BONE,
        borderTop: "1px solid rgba(201,162,39,.24)",
      }}
    >
      <div className="split" style={{ alignItems: "end", ["--gap-sm" as string]: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <p style={eyebrow(GOLD)}>In-house Legal Cell</p>
          <Heading
            style={{ margin: 0, fontFamily: SERIF, fontWeight: 300, fontSize: "clamp(34px, 4.4vw, 64px)", lineHeight: 1.02, textWrap: "balance" }}
          >
            Property lawyer in Faridabad, <em style={{ fontStyle: "italic", color: GOLD }}>right inside your real estate team.</em>
          </Heading>
        </div>
        <p style={{ margin: 0, fontSize: "clamp(16px, 1.2vw, 17px)", lineHeight: 1.75, color: "rgba(247,244,238,.74)", textWrap: "pretty" }}>
          Most property problems start with a paper nobody read closely enough. That&apos;s why YNL Realtors has its own
          Legal Cell, so the legal checks happen as part of your deal and not as an afterthought. Our team looks at the
          documents before you commit, so you know what you&apos;re signing and what you&apos;re buying.
        </p>
      </div>
      <div className="ruled-cols stack-sm" style={{ ["--n" as string]: 3, borderTop: "1px solid rgba(201,162,39,.4)" }}>
        {practice.map((p) => (
          <div key={p.title} style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: "clamp(24px, 2.2vw, 32px)" }}>
            <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 22, color: GOLD }}>{p.num}</span>
            <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(24px, 2vw, 28px)" }}>{p.title}</h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "rgba(247,244,238,.7)" }}>{p.body}</p>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(20px, 2.2vw, 28px)",
          paddingTop: "clamp(8px, 1vw, 16px)",
          borderTop: "1px solid rgba(201,162,39,.24)",
        }}
      >
        <h3 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(24px, 2vw, 28px)", lineHeight: 1.15 }}>
          Meet the head of our Legal Cell
        </h3>
        {withPortrait ? (
          <div
            className="split"
            style={{ ["--cols" as string]: "220px minmax(0, 1fr)", ["--gap" as string]: "32px", ["--gap-sm" as string]: "20px", alignItems: "center" }}
          >
            <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 5", overflow: "hidden" }}>
                <Image
                  src="/assets/head-legal-cell-yuvraj-lukra.png"
                  alt="Adv. Yuvraj Lukra, Head, Legal Cell"
                  fill
                  sizes="220px"
                  style={{ objectFit: "cover", objectPosition: "50% 20%" }}
                />
              </div>
              <figcaption style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontFamily: SERIF, fontSize: 26, lineHeight: 1.1 }}>Adv. Yuvraj Lukra</span>
                <span style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: GOLD }}>Head, Legal Cell</span>
              </figcaption>
            </figure>
            <p style={{ margin: 0, fontSize: "clamp(16px, 1.2vw, 17px)", lineHeight: 1.75, color: "rgba(247,244,238,.74)", textWrap: "pretty" }}>
              The Legal Cell is headed by Adv. Yuvraj Lukra, who works alongside our valuation and documentation teams
              so that legal, price and paperwork are always looked at together.
            </p>
          </div>
        ) : (
          <p style={{ margin: 0, maxWidth: 640, fontSize: "clamp(16px, 1.2vw, 17px)", lineHeight: 1.75, color: "rgba(247,244,238,.74)", textWrap: "pretty" }}>
            The Legal Cell is headed by Adv. Yuvraj Lukra, who works alongside our valuation and documentation teams so
            that legal, price and paperwork are always looked at together.
          </p>
        )}
      </div>
    </section>
  );
}
