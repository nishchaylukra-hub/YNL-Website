import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Thank You — YNL Realtors",
  description: "Your enquiry has been received. A principal from YNL Realtors will reply the same working day.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <div style={{ background: "#14130F", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "112px 44px",
          gap: 28,
        }}
      >
        <Image src="/assets/ynl-logo-mark.png" alt="YNL Realtors" height={36} width={135} style={{ height: 36, width: "auto" }} />
        <p style={{ margin: 0, fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#C9A227" }}>
          Enquiry received
        </p>
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(34px, 4vw, 56px)",
            lineHeight: 1.05,
            color: "#F7F4EE",
            maxWidth: 720,
          }}
        >
          Thank you for reaching out.
        </h1>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "rgba(247,244,238,.7)", maxWidth: 480 }}>
          A principal will reply from ynlrealtors@gmail.com the same working day. If it&apos;s urgent, call us
          directly at +91 97178 47278.
        </p>
        <Link
          href="/"
          className="hover-gold"
          style={{
            marginTop: 12,
            fontSize: 12,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "#F7F4EE",
            border: "1px solid rgba(247,244,238,.34)",
            padding: "16px 28px",
          }}
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
