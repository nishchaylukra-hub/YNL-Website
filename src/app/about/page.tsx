import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { Timeline } from "@/components/about/Timeline";
import { LegalCell } from "@/components/about/LegalCell";
import { Principals } from "@/components/about/Principals";
import { AboutCta } from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "About & Legal Cell — YNL Realtors",
  description:
    "Four decades of real estate in Faridabad since the early 1980s, with an in-house Legal Cell for title checks, agreements, registration and civil disputes.",
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
