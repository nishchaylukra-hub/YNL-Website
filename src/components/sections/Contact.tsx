"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import { BONE, GOLD, INK, INK_2, SERIF, buttonBase, eyebrow, sectionPad } from "../tokens";

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

// Forminit only accepts E.164 phone numbers (+919717847278). Visitors type local formats like
// "97178 47278", "097178-47278" or "+91 97178 47278", so normalise; bare 10-digit numbers are taken as Indian.
function toE164(input: string): string | null {
  const hasPlus = input.startsWith("+");
  let digits = input.replace(/\D/g, "");
  if (!hasPlus) {
    if (digits.startsWith("00")) digits = digits.slice(2);
    else if (digits.length === 11 && digits.startsWith("0")) digits = "91" + digits.slice(1);
    else if (digits.length === 10) digits = "91" + digits;
  }
  return /^[1-9]\d{7,14}$/.test(digits) ? `+${digits}` : null;
}

const fieldStyle: CSSProperties = { display: "flex", flexDirection: "column", gap: 10 };

const fieldLabelStyle: CSSProperties = {
  fontSize: 11,
  letterSpacing: ".22em",
  textTransform: "uppercase",
  color: "rgba(247,244,238,.62)",
};

const fieldInputStyle: CSSProperties = {
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(247,244,238,.3)",
  color: BONE,
  fontSize: 17,
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

    const data = new FormData(form);
    const rawPhone = String(data.get("fi-sender-phone") ?? "").trim();
    if (rawPhone) {
      const phone = toE164(rawPhone);
      if (!phone) {
        setStatus("error");
        setErrorMessage("Please check the phone number — e.g. 97178 47278 or +91 97178 47278.");
        return;
      }
      data.set("fi-sender-phone", phone);
    } else {
      // Phone is optional — send no phone block rather than an empty one.
      data.delete("fi-sender-phone");
    }

    setStatus("sending");
    const forminit = new window.Forminit();
    const { redirectUrl, error } = await forminit.submit(FORMINIT_FORM_ID, data);

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
    <section
      id="contact"
      className="wrap"
      style={{ display: "flex", flexDirection: "column", gap: 72, paddingTop: "clamp(64px, 7vw, 104px)", paddingBottom: sectionPad, background: INK }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <p style={eyebrow(GOLD)}>§ 01 — Contact</p>
        <h1
          style={{
            margin: 0,
            fontFamily: SERIF,
            fontWeight: 300,
            fontSize: "clamp(56px, 8.3vw, 120px)",
            lineHeight: 0.95,
            letterSpacing: "-.02em",
            color: BONE,
          }}
        >
          Come to <em style={{ fontStyle: "italic", color: GOLD }}>the table.</em>
        </h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "rgba(247,244,238,.74)", maxWidth: 560, textWrap: "pretty" }}>
          Viewings and portfolio reviews are by appointment. Tell us what you are holding or hunting and a principal
          replies the same working day.
        </p>
      </div>

      <div className="split" style={{ alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 48, minWidth: 0 }}>
          <dl style={{ margin: 0, display: "flex", flexDirection: "column", borderTop: infoRule }}>
            <div style={infoRowStyle}>
              <dt style={infoLabelStyle}>Offices</dt>
              <dd style={infoValueStyle}>
                S-22, Sector 12, Faridabad
                <br />
                3E-8, NIT, Faridabad
              </dd>
            </div>
            <div style={infoRowStyle}>
              <dt style={infoLabelStyle}>Hours</dt>
              <dd style={infoValueStyle}>
                Mon–Sat, 9:00am–5:00pm
                <br />
                Sunday by appointment
              </dd>
            </div>
            <div style={infoRowStyle}>
              <dt style={infoLabelStyle}>Direct</dt>
              <dd style={{ ...infoValueStyle, display: "flex", flexDirection: "column", gap: 4 }}>
                <a href="tel:+919717847278" className="hover-gold" style={{ color: BONE }}>
                  +91 97178 47278
                </a>
                <a href="tel:+919811047278" className="hover-gold" style={{ color: BONE }}>
                  +91 98110 47278
                </a>
              </dd>
            </div>
            <div style={infoRowStyle}>
              <dt style={infoLabelStyle}>Email</dt>
              <dd style={infoValueStyle}>
                <a href="mailto:ynlrealtors@gmail.com" className="hover-gold" style={{ color: BONE }}>
                  ynlrealtors@gmail.com
                </a>
              </dd>
            </div>
          </dl>
          <OfficeMap />
        </div>

        <form
          onSubmit={onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            background: INK_2,
            border: "1px solid rgba(247,244,238,.12)",
            padding: "clamp(28px, 3.4vw, 48px)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <h2 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: 36, lineHeight: 1.1, color: BONE }}>Request the portfolio</h2>
            <p style={{ margin: 0, fontSize: 14, color: "rgba(247,244,238,.62)" }}>A principal replies the same working day.</p>
          </div>
          <div className="split" style={{ ["--gap" as string]: "24px", ["--gap-sm" as string]: "28px" }}>
            <label style={fieldStyle}>
              <span style={fieldLabelStyle}>Name</span>
              <input type="text" name="fi-sender-fullName" autoComplete="name" required style={fieldInputStyle} />
            </label>
            <label style={fieldStyle}>
              <span style={fieldLabelStyle}>Phone</span>
              <input type="tel" name="fi-sender-phone" autoComplete="tel" style={fieldInputStyle} />
            </label>
          </div>
          <label style={fieldStyle}>
            <span style={fieldLabelStyle}>Email</span>
            <input type="email" name="fi-sender-email" autoComplete="email" required style={fieldInputStyle} />
          </label>
          <label style={fieldStyle}>
            <span style={fieldLabelStyle}>I am here for</span>
            <select name="fi-select-interest" style={{ ...fieldInputStyle, background: INK_2 }}>
              <option>Buying land or an estate</option>
              <option>Selling a property</option>
              <option>Portfolio &amp; investment advice</option>
              <option>Commercial space</option>
              <option>Developer partnership</option>
              <option>A premium rental</option>
              <option>Legal Cell — documentation or a dispute</option>
            </select>
          </label>
          <label style={fieldStyle}>
            <span style={fieldLabelStyle}>What are you looking for</span>
            <textarea name="fi-text-message" rows={4} style={{ ...fieldInputStyle, resize: "vertical" }} />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-gold"
            style={{
              ...buttonBase,
              marginTop: 8,
              padding: "20px 32px",
              background: GOLD,
              border: `1px solid ${GOLD}`,
              color: INK,
              fontFamily: "var(--font-jost), sans-serif",
              cursor: status === "sending" ? "wait" : "pointer",
              opacity: status === "sending" ? 0.7 : 1,
            }}
          >
            {status === "sending" ? "Sending…" : status === "success" ? "Enquiry sent" : "Send enquiry"}
          </button>
          {status === "success" && (
            <p style={{ margin: 0, fontSize: 14, color: GOLD }}>
              Received — a principal will reply from ynlrealtors@gmail.com today.
            </p>
          )}
          {status === "error" && (
            <p style={{ margin: 0, fontSize: 14, color: "#E08A45" }}>
              {errorMessage || "Something went wrong sending that."} You can also reach us directly at{" "}
              <a href="mailto:ynlrealtors@gmail.com" className="hover-gold" style={{ color: BONE }}>
                ynlrealtors@gmail.com
              </a>
              .
            </p>
          )}
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: "rgba(247,244,238,.5)" }}>
            Held in confidence. Never shared with developers or third-party portals.
          </p>
        </form>
      </div>
    </section>
  );
}

// Stylised plan of the two offices in the survey-sheet style — swap for a live map when available.
function OfficeMap() {
  return (
    <figure
      style={{ margin: 0, display: "flex", flexDirection: "column", gap: 12, padding: 20, border: "1px solid rgba(201,162,39,.38)", background: "#17160F" }}
    >
      <svg viewBox="0 0 560 300" width="100%" style={{ display: "block" }} fill="none" role="img" aria-label="Office locations: S-22, Sector 12 and 3E-8, NIT, Faridabad">
        <path d="M0 200 L560 120 M0 220 L560 140" stroke={GOLD} strokeOpacity={0.6} />
        <path d="M300 0 L280 300 M318 0 L298 300" stroke={GOLD} strokeOpacity={0.45} />
        <path
          d="M40 20 L250 10 L260 150 L50 170 Z M340 20 L540 30 L535 100 L335 125 Z M60 240 L270 210 L265 300 L60 300 Z M320 180 L540 150 L545 300 L310 300 Z"
          stroke={GOLD}
          strokeOpacity={0.3}
        />
        <circle cx={150} cy={95} r={7} fill={GOLD} />
        <circle cx={150} cy={95} r={16} stroke={GOLD} />
        <circle cx={440} cy={235} r={7} fill={GOLD} />
        <circle cx={440} cy={235} r={16} stroke={GOLD} />
        <g fontFamily="var(--font-jost), sans-serif" fontSize={12} letterSpacing={2} fill={BONE}>
          <text x={174} y={92}>S-22, SECTOR 12</text>
          <text x={340} y={272}>3E-8, NIT</text>
        </g>
      </svg>
      <figcaption style={{ display: "flex", justifyContent: "space-between", fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase", color: "rgba(247,244,238,.55)" }}>
        <span>Not to scale</span>
        <span>Faridabad</span>
      </figcaption>
    </figure>
  );
}

const infoRule = "1px solid rgba(247,244,238,.16)";

const infoRowStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 140px) minmax(0, 1fr)",
  gap: 24,
  padding: "24px 0",
  borderBottom: infoRule,
};

const infoLabelStyle: CSSProperties = {
  margin: 0,
  paddingTop: 4,
  fontSize: 11,
  letterSpacing: ".26em",
  textTransform: "uppercase",
  color: "rgba(247,244,238,.58)",
};

const infoValueStyle: CSSProperties = {
  margin: 0,
  fontSize: 17,
  lineHeight: 1.7,
  color: BONE,
};
