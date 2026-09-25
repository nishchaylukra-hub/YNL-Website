import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
// Vercel's feedback toolbar is injected on preview deployments only.
const vercelLive = process.env.VERCEL_ENV === "preview" ? " https://vercel.live" : "";

// 'unsafe-inline' scripts are needed because the pages are statically prerendered, so Next's inline
// bootstrap scripts can't carry a per-request nonce. Forminit's SDK loads from, and posts to, forminit.com.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://forminit.com${vercelLive}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob:${vercelLive}`,
  "font-src 'self'",
  `connect-src 'self' https://forminit.com${vercelLive}${isDev ? " ws:" : ""}`,
  `frame-src 'self'${vercelLive}`,
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const nextConfig: NextConfig = {
  // The HTML sitemap lives at /sitemap; serve it at the conventional /sitemap.html too.
  async rewrites() {
    return [{ source: "/sitemap.html", destination: "/sitemap" }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
