import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { LegalCell } from "@/components/about/LegalCell";
import { AboutCta } from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "Property Lawyer in Faridabad | YNL Realtors Legal Cell",
  description:
    "In-house property lawyers in Faridabad for title checks, agreements, registration and civil property disputes. Talk to the YNL Realtors Legal Cell.",
  alternates: { canonical: "/about-legal" },
};

export default function AboutLegalPage() {
  return (
    <div style={{ background: "#14130F", color: "#F7F4EE" }}>
      <Header current="legal" />
      <main>
        <LegalCell as="h1" withPortrait />
        <AboutCta />
      </main>
      <Footer />
    </div>
  );
}
