// next.config.ts
import type { NextConfig } from "next";

const preferredHost = "www.dragcatering.ro";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  async redirects() {
    if (!isProd) {
      return [];
    }

    return [
      {
        source: "/:path*",
        has: [
          { type: "host", value: "dragcatering.ro" },
          // prevenim redirect dacă e localhost sau 127.0.0.1
          { type: "host", value: "localhost", key: "!" },
          { type: "host", value: "127.0.0.1", key: "!" },
        ],
        destination: `https://${preferredHost}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*/",
        destination: "https://www.dragcatering.ro/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      // Cache lung pentru media din /public
      {
        source: "/:dir(icons|images|favicons)/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/og-:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      // Fonturi generate de next/font
      {
        source: "/_next/static/media/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      // Securitate + (opțional) noindex pe non-prod
      {
        source: "/:path*",
        headers: [
          ...(isProd ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" }] : []),
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          ...(!isProd ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] : []),
        ],
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  poweredByHeader: false,
};

export default nextConfig;
