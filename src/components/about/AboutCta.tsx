import Link from "next/link";
import { ArrowIcon, IconBadge } from "../Icons";
import { BONE, GOLD, INK, SERIF, iconButton } from "../tokens";

export function AboutCta() {
  return (
    <section
      className="wrap"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "clamp(28px, 2.8vw, 40px)",
        paddingBlock: "clamp(56px, 6vw, 88px)",
        background: GOLD,
        color: INK,
      }}
    >
      <h2 style={{ margin: 0, fontFamily: SERIF, fontWeight: 300, fontSize: "clamp(34px, 4.4vw, 64px)", lineHeight: 1.02, textWrap: "balance" }}>
        Sit with a principal, <em style={{ fontStyle: "italic" }}>not a portal.</em>
      </h2>
      <Link href="/contact" className="btn-ink btn-block" style={{ ...iconButton, background: INK, color: BONE }}>
        Book a viewing
        <IconBadge background={GOLD} color={INK}><ArrowIcon /></IconBadge>
      </Link>
    </section>
  );
}
