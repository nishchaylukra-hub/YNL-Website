import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { BONE, GOLD, INK, buttonBase } from "../tokens";

type Page = "home" | "about" | "contact";

const links: { href: string; label: string; page?: Page }[] = [
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About", page: "about" },
  { href: "/about#legal", label: "Legal Cell" },
  { href: "/contact", label: "Contact", page: "contact" },
];

export function Header({ current = "home" }: { current?: Page }) {
  return (
    <header
      className="wrap"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
        paddingBlock: 20,
        background: "rgba(20,19,15,.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(247,244,238,.1)",
      }}
    >
      <Link href="/" style={{ display: "flex" }} aria-label="YNL Realtors — home">
        <Image
          src="/assets/ynl-logo-mark.png"
          alt="YNL Realtors — Land. Legacy. Luxury."
          height={44}
          width={165}
          style={{ height: 40, width: "auto", display: "block" }}
          preload
        />
      </Link>
      <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div className="hide-sm" style={{ display: "flex", gap: 8 }}>
          {links.map((l) => {
            const active = l.page === current;
            return (
              <Link
                key={l.label}
                href={l.href}
                className="hover-gold"
                aria-current={active ? "page" : undefined}
                style={{
                  ...navLinkStyle,
                  color: active ? GOLD : BONE,
                  boxShadow: active ? `inset 0 -1px 0 ${GOLD}` : undefined,
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/contact"
          className="btn-gold"
          style={{ ...buttonBase, marginLeft: 16, padding: "15px 26px", background: GOLD, color: INK, border: `1px solid ${GOLD}` }}
        >
          Book a viewing
        </Link>
      </nav>
    </header>
  );
}

const navLinkStyle: CSSProperties = {
  fontSize: 12,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  padding: "14px 18px",
};
