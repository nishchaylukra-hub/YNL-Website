import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contact YNL Realtors — Book a Viewing in Faridabad",
  description:
    "Book a viewing or request the portfolio. Offices at S-22, Sector 12 and 3E-8, NIT, Faridabad. A principal replies the same working day.",
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
