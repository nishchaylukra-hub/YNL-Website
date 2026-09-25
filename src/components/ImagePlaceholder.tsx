import type { CSSProperties } from "react";

export function ImagePlaceholder({ label, style }: { label: string; style?: CSSProperties }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minWidth: 0,
        height: 340,
        background: "#EAE4D8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 16,
        ...style,
      }}
    >
      <span style={{ fontSize: 13, letterSpacing: ".08em", color: "#8C7A4B" }}>{label}</span>
    </div>
  );
}
