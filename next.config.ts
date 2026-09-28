import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
    ],
  },
  // OpenNext for Cloudflare Workers requires the standalone output so that
  // `.next/standalone/.next/server/pages-manifest.json` is produced.
  output: 'standalone' as const,
  outputFileTracingRoot: process.cwd(),
};

export default withNextIntl(nextConfig);
