import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Services } from "@/components/sections/Services";
import { ContactBand } from "@/components/sections/ContactBand";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Services — YNL Realtors, Faridabad",
  description:
    "Buying land and estates, investment advice, commercial leasing and developer sales from YNL Realtors in Faridabad, since the early 1980s.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div style={{ background: "#14130F", color: "#F7F4EE" }}>
      <Header current="services" />
      <main>
        <Services />
        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}
