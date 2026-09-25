"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { BONE, GOLD, INK, SERIF, buttonBase } from "../tokens";

type NavLink = { href: string; label: string; active: boolean };

// Phone-width menu for the Header; the desktop link row is hidden below 900px.
export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="show-sm">
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
        <span className="menu-bars" aria-hidden="true" />
      </button>
      {open && (
        <nav id="mobile-menu" className="menu-panel wrap" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              aria-current={l.active ? "page" : undefined}
              onClick={() => setOpen(false)}
              style={{ ...itemStyle, color: l.active ? GOLD : BONE }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-gold"
            onClick={() => setOpen(false)}
            style={{ ...buttonBase, marginTop: 24, background: GOLD, color: INK, border: `1px solid ${GOLD}` }}
          >
            Book a viewing
          </Link>
        </nav>
      )}
    </div>
  );
}

const itemStyle: CSSProperties = {
  padding: "18px 0",
  borderBottom: "1px solid rgba(247,244,238,.1)",
  fontFamily: SERIF,
  fontSize: 26,
  lineHeight: 1.1,
};
