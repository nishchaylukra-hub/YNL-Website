import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Services } from "@/components/sections/Services";
import { ContactBand } from "@/components/sections/ContactBand";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Property Services in Faridabad | YNL Realtors",
  description:
    "Agriculture land, plots, investment advice, commercial leasing, developer sales and luxury rentals in Faridabad. Over forty years of straight answers.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div style={{ background: "#14130F", color: "#F7F4EE" }}>
      <Header current="services" />
      <main>
        <Services as="h1" />
        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}
