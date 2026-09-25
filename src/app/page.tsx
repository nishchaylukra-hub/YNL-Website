import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Proof } from "@/components/sections/Proof";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactBand } from "@/components/sections/ContactBand";
import { Footer } from "@/components/sections/Footer";

const SHOW_PROOF = true;

export default function Home() {
  return (
    <div style={{ background: "#14130F", color: "#F7F4EE" }}>
      <Header current="home" />
      <main>
        <Hero />
        {SHOW_PROOF && <Proof />}
        <Services />
        <About />
        <Testimonials />
        <ContactBand />
      </main>
      <Footer />
    </div>
  );
}
