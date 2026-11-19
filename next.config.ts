import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.tile.openstreetmap.org https://*.public.blob.vercel-storage.com",
  "font-src 'self'",
  "connect-src 'self' https://*.tile.openstreetmap.org https://*.public.blob.vercel-storage.com",
  "media-src 'none'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90, 95],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
    ],
  },
  async redirects() {
    // www → non-www, permanent 301. Path and query string are preserved
    // (Next.js forwards the query automatically). Only the exact www host
    // matches, so the apex domain, *.vercel.app and localhost are untouched.
    // NOTE: the apex domain must NOT redirect to www in Vercel → Domains,
    // or this rule would create a redirect loop.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.adadesign.com.au" }],
        destination: "https://adadesign.com.au/:path*",
        statusCode: 301,
      },
    ];
  },
  async headers() {
    // Security headers production-only — CSP's connect-src blocks webpack
    // HMR ws:// connections in dev, preventing React hydration
    if (process.env.NODE_ENV !== "production") return [];
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
