"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import { ImagePlaceholder } from "../ImagePlaceholder";

const FORMINIT_FORM_ID = "fdtcek1uzvk";

type ForminitSubmitResult = {
  data?: { hashId: string; date: string; blocks: Record<string, unknown> };
  redirectUrl?: string;
  error?: { error: string; code: number; message: string };
};

declare global {
  interface Window {
    Forminit?: new () => {
      submit: (formId: string, data: FormData) => Promise<ForminitSubmitResult>;
    };
  }
}

const fieldLabelStyle: CSSProperties = {
  fontSize: 11,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  color: "rgba(247,244,238,.5)",
};

const fieldInputStyle: CSSProperties = {
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(247,244,238,.28)",
  color: "#F7F4EE",
  fontSize: 16,
  padding: "10px 0",
  outline: "none",
};

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!window.Forminit) {
      setStatus("error");
      setErrorMessage("The form is still loading — please try again in a moment.");
      return;
    }

    setStatus("sending");
    const forminit = new window.Forminit();
    const { redirectUrl, error } = await forminit.submit(FORMINIT_FORM_ID, new FormData(form));

    if (error) {
      setStatus("error");
      setErrorMessage(error.message);
      return;
    }
    if (redirectUrl) {
      window.location.href = redirectUrl;
      return;
    }
    setStatus("success");
    form.reset();
  };

  return (
    <section id="contact" style={{ background: "#14130F", padding: "112px 44px 96px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", flexDirection: "column", gap: 64 }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: 72, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 34, minWidth: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <p style={{ margin: 0, fontSize: 11, letterSpacing: ".4em", textTransform: "uppercase", color: "#C9A227" }}>
                Contact details
              </p>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 300,
                  fontSize: "clamp(34px, 3.6vw, 56px)",
                  lineHeight: 1.05,
                  color: "#F7F4EE",
                  textWrap: "balance",
                }}
              >
                Come to the table.
              </h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "rgba(247,244,238,.66)", maxWidth: 420, textWrap: "pretty" }}>
                Viewings and portfolio reviews are by appointment. Tell us what you are holding or hunting and a
                principal replies the same working day.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "30px 40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p style={infoLabelStyle}>Office</p>
                <p style={infoValueStyle}>
                  S-22, Sector 12, Faridabad
                  <br />
                  3E-8, NIT, Faridabad
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p style={infoLabelStyle}>Hours</p>
                <p style={infoValueStyle}>
                  Mon–Sat, 9:00am–5:00pm
                  <br />
                  Sunday by appointment
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p style={infoLabelStyle}>Direct</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <a href="tel:+919717847278" className="hover-gold" style={{ fontSize: 16, color: "#F7F4EE" }}>
                    +91 97178 47278
                  </a>
                  <a href="tel:+919811047278" className="hover-gold" style={{ fontSize: 16, color: "#F7F4EE" }}>
                    +91 98110 47278
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p style={infoLabelStyle}>Email</p>
                <a href="mailto:ynlrealtors@gmail.com" className="hover-gold" style={{ fontSize: 16, color: "#F7F4EE" }}>
                  ynlrealtors@gmail.com
                </a>
              </div>
            </div>
            <ImagePlaceholder
              label="Drop a map of the office location"
              style={{ height: 280, background: "#1D1B15", border: "1px solid rgba(247,244,238,.14)" }}
            />
          </div>

          <form
            onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 22, background: "#1A1811", border: "1px solid rgba(247,244,238,.12)", padding: 40 }}
          >
            <p style={{ margin: 0, fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 28, color: "#F7F4EE" }}>
              Request the portfolio
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 18 }}>
              <label style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <span style={fieldLabelStyle}>Name</span>
                <input type="text" name="fi-sender-fullName" required style={fieldInputStyle} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <span style={fieldLabelStyle}>Phone</span>
                <input type="tel" name="fi-sender-phone" style={fieldInputStyle} />
              </label>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <span style={fieldLabelStyle}>Email</span>
              <input type="email" name="fi-sender-email" required style={fieldInputStyle} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <span style={fieldLabelStyle}>I am here for</span>
              <select name="fi-select-interest" style={{ ...fieldInputStyle, background: "#1A1811" }}>
                <option>Buying land or an estate</option>
                <option>Selling a property</option>
                <option>Portfolio &amp; investment advice</option>
                <option>Commercial space</option>
                <option>Developer partnership</option>
                <option>A premium rental</option>
              </select>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <span style={fieldLabelStyle}>What are you looking for</span>
              <textarea name="fi-text-message" rows={4} style={{ ...fieldInputStyle, resize: "vertical" }} />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-gold"
              style={{
                marginTop: 8,
                background: "#C9A227",
                border: "1px solid #C9A227",
                color: "#14130F",
                fontFamily: "var(--font-jost), sans-serif",
                fontSize: 12,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                fontWeight: 500,
                padding: "17px 28px",
                cursor: status === "sending" ? "wait" : "pointer",
                opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              {status === "sending" ? "Sending…" : status === "success" ? "Enquiry sent" : "Send enquiry"}
            </button>
            {status === "success" && (
              <p style={{ margin: 0, fontSize: 14, color: "#C9A227" }}>
                Received — a principal will reply from ynlrealtors@gmail.com today.
              </p>
            )}
            {status === "error" && (
              <p style={{ margin: 0, fontSize: 14, color: "#E08A45" }}>
                {errorMessage || "Something went wrong sending that."} You can also reach us directly at{" "}
                <a href="mailto:ynlrealtors@gmail.com" className="hover-gold" style={{ color: "#F7F4EE" }}>
                  ynlrealtors@gmail.com
                </a>
                .
              </p>
            )}
            <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: "rgba(247,244,238,.4)" }}>
              Held in confidence. Never shared with developers or third-party portals.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

const infoLabelStyle: CSSProperties = {
  margin: 0,
  fontSize: 11,
  letterSpacing: ".24em",
  textTransform: "uppercase",
  color: "rgba(247,244,238,.42)",
};

const infoValueStyle: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.6,
  color: "#F7F4EE",
};
