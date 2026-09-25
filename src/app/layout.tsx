import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "YNL Realtors — Trusted Real Estate in Faridabad",
  description:
    "YNL Realtors has served Faridabad since the early 1980s in agriculture, residential and commercial real estate, with an in-house legal cell for documentation and civil disputes.",
  keywords: [
    "real estate",
    "homes",
    "properties",
    "real estate business",
    "farm land",
    "realty",
    "agriculture land",
    "land of agriculture",
    "Faridabad real estate",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        {children}
        <Script src="https://forminit.com/sdk/v1/forminit.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
