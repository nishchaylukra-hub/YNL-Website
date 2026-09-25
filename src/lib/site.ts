// Canonical origin for the live site — used by robots.txt, sitemap.xml, the HTML sitemap and metadataBase.
export const SITE_URL = "https://www.ynlrealtors.in";

type SitePage = {
  path: string;
  title: string;
  summary: string;
  lastModified: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
  sections?: { href: string; label: string }[];
};

// Every indexable route. Add new pages here and they appear in both sitemap.xml and /sitemap.
export const pages: SitePage[] = [
  {
    path: "/",
    title: "Home",
    summary: "Land, residential and commercial real estate in Faridabad since the early 1980s.",
    lastModified: "2026-09-25",
    changeFrequency: "monthly",
    priority: 1,
    sections: [
      { href: "/#services", label: "Services — buying land, investment advice, commercial leasing, developer sales, luxury rentals" },
      { href: "/#about", label: "About us" },
    ],
  },
  {
    path: "/about",
    title: "About & Legal Cell",
    summary: "Our story, the in-house Legal Cell, and the principals.",
    lastModified: "2026-09-25",
    changeFrequency: "yearly",
    priority: 0.8,
    sections: [{ href: "/about#legal", label: "In-house Legal Cell — title checks, agreements, registration, civil disputes" }],
  },
  {
    path: "/contact",
    title: "Contact",
    summary: "Book a viewing or request the portfolio. Offices in Sector 12 and NIT, Faridabad.",
    lastModified: "2026-09-25",
    changeFrequency: "yearly",
    priority: 0.9,
  },
  {
    path: "/sitemap",
    title: "Sitemap",
    summary: "Every page on this site.",
    lastModified: "2026-09-25",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
