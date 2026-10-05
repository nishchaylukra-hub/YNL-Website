import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { LegalCell } from "@/components/about/LegalCell";
import { AboutCta } from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "In-house Legal Cell — YNL Realtors, Faridabad",
  description:
    "YNL's in-house Legal Cell handles title checks, agreements, registration and civil disputes on Faridabad property, headed by Adv. Yuvraj Lukra.",
  alternates: { canonical: "/about-legal" },
};

export default function AboutLegalPage() {
  return (
    <div style={{ background: "#14130F", color: "#F7F4EE" }}>
      <Header current="legal" />
      <main>
        <LegalCell withPortrait />
        <AboutCta />
      </main>
      <Footer />
    </div>
  );
}
