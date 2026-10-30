import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Property Dealer in Faridabad | Contact YNL Realtors",
  description:
    "Visit YNL Realtors in Sector 12 or NIT, Faridabad, or call us to book a property viewing. A principal replies the same working day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div style={{ background: "#14130F", color: "#F7F4EE" }}>
      <Header current="contact" />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
