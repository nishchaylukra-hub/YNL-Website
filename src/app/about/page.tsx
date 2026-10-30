import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { Timeline } from "@/components/about/Timeline";
import { LegalCell } from "@/components/about/LegalCell";
import { Principals } from "@/components/about/Principals";
import { AboutCta } from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "Real Estate Company in Faridabad | About YNL Realtors",
  description:
    "A family-run Faridabad real estate company since the early 1980s. Meet our founder and team, and see how our in-house legal cell protects every deal.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div style={{ background: "#14130F", color: "#F7F4EE" }}>
      <Header current="about" />
      <main>
        <AboutHero />
        <Timeline />
        <LegalCell />
        <Principals />
        <AboutCta />
      </main>
      <Footer />
    </div>
  );
}
