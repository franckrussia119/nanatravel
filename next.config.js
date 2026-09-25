const createNextIntlPlugin = require('next-intl/plugin');

// Points next-intl at the request config so both static generation and the
// server-side `next-intl` navigation helpers (createNavigation in
// i18n/navigation.ts) can resolve the current locale during `next build`.
// Without this, production builds fail with:
//   "Error: Couldn't find next-intl config file."
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produces a self-contained `.next/standalone` build (server + only the
  // node_modules it actually needs) — this is what the Dockerfile copies
  // into the final image for a small, fast-starting container on Coolify.
  output: 'standalone',
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
};

module.exports = withNextIntl(nextConfig);
