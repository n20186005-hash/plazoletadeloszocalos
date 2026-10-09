import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopicPage from '@/components/TopicPage';
import { getTopic, TOPIC_SLUGS, SITE_URL } from '@/lib/topics';

export const dynamicParams = false;

export function generateStaticParams() {
  const locales = ['es', 'en'] as const;
  const params: { locale: string; topic: string }[] = [];
  for (const locale of locales) {
    for (const slug of TOPIC_SLUGS) {
      params.push({ locale, topic: slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}): Promise<Metadata> {
  const { locale, topic } = await params;
  const t = getTopic(topic);
  if (!t || (locale !== 'es' && locale !== 'en')) {
    return {};
  }
  const c = t[locale];
  const selfUrl = `${SITE_URL}/${locale}/${topic}`;
  const esUrl = `${SITE_URL}/es/${topic}`;
  const enUrl = `${SITE_URL}/en/${topic}`;

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: selfUrl,
      languages: {
        es: esUrl,
        en: enUrl,
        'x-default': esUrl,
      },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: selfUrl,
      siteName: 'Plazoleta de Los Zócalos',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'article',
    },
  };
}

export default async function TopicRoute({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}) {
  const { locale, topic } = await params;
  const t = getTopic(topic);
  if (!t || (locale !== 'es' && locale !== 'en')) {
    notFound();
  }

  return (
    <>
      <Header />
      <TopicPage topic={t} locale={locale as 'es' | 'en'} />
      <Footer />
    </>
  );
}
