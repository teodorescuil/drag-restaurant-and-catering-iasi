import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
   webpack: (config) => {
    // permite importurile cu ?url pentru orice .worker.mjs
    config.module.rules.push({
      test: /\.worker\.mjs$/i,
      type: "asset/resource",
    });

    config.externals = config.externals || [];
    config.externals.push({ canvas: "commonjs canvas" });

    return config;
  },
  output: 'standalone',
  images: { unoptimized: true },
  async redirects() {
    return [{
      source: "/:path((?!_next/|favicon\\.ico|robots\\.txt|sitemap\\.xml|static/|images/|assets/|health\\.html).*)",
      has: [{ type: "host", value: "dragcatering.ro" }],
      destination: "https://www.dragcatering.ro/:path*",
      permanent: true,
    }];
  },
};
export default nextConfig;
