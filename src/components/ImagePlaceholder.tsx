import type { CSSProperties } from "react";
import { BRONZE } from "./tokens";

export function ImagePlaceholder({ label, style }: { label: string; style?: CSSProperties }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minWidth: 0,
        height: 340,
        background: "repeating-linear-gradient(135deg, #EAE4D8 0 1px, #F1ECE2 1px 14px)",
        border: "1px solid rgba(20,19,15,.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 16,
        ...style,
      }}
    >
      <span style={{ fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: BRONZE }}>{label}</span>
    </div>
  );
}
