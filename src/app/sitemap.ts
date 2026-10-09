import { MetadataRoute } from 'next';
import { TOPIC_SLUGS } from '@/lib/topics';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.plazoletadeloszocalos.com';
  const locales = ['zh', 'en', 'es'];
  const routes = ['', '/privacy-policy', '/terms-of-service', '/cookie-settings'];

  const sitemap: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.5,
      });
    }
  }

  // Long-tail topic guides (Spanish + English)
  for (const topic of TOPIC_SLUGS) {
    for (const locale of ['es', 'en'] as const) {
      sitemap.push({
        url: `${baseUrl}/${locale}/${topic}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return sitemap;
}
