import type { CSSProperties } from "react";

// Brand palette — see the "Brand foundations" board on the design canvas.
export const INK = "#14130F";
export const INK_2 = "#1A1811";
export const INK_3 = "#0F0E0B";
export const BONE = "#F7F4EE";
export const SAND = "#EAE4D8";
export const GOLD = "#C9A227";
export const GOLD_DEEP = "#8A6D12"; // gold that passes contrast on sand, for large numerals
export const BRONZE = "#6E5F37"; // labels on light grounds (gold fails contrast there)
export const LOAM = "#5E594E"; // body copy on light grounds

// Corner radius for panels, plates and image frames; buttons, tags and icon badges are full pills.
export const RADIUS = "clamp(18px, 1.8vw, 28px)";

export const SERIF = "var(--font-cormorant), Georgia, serif";

export const sectionPad = "clamp(64px, 9vw, 136px)";

// Vertical rhythm between blocks inside a section — tightens on phones.
export const blockGap = "clamp(40px, 5vw, 72px)";

export function eyebrow(color: string): CSSProperties {
  return { margin: 0, fontSize: 11, letterSpacing: ".42em", textTransform: "uppercase", color };
}

export function smallCaps(color: string): CSSProperties {
  return { fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color };
}

export const h2Style: CSSProperties = {
  margin: 0,
  fontFamily: SERIF,
  fontWeight: 300,
  fontSize: "clamp(36px, 5vw, 72px)",
  lineHeight: 1.02,
  letterSpacing: "-.01em",
  textWrap: "balance",
};

export const buttonBase: CSSProperties = {
  display: "inline-block",
  padding: "18px clamp(24px, 2.2vw, 32px)",
  fontSize: 12,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  fontWeight: 500,
  textAlign: "center",
  borderRadius: 999,
};

// Pill button with a round arrow badge on the right (pair with <ArrowBadge />).
export const iconButton: CSSProperties = {
  ...buttonBase,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  padding: "7px 7px 7px clamp(22px, 2vw, 28px)",
};
