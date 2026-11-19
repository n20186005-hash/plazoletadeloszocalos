import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HistoryTimeline from '@/components/HistoryTimeline';
import RouteSection from '@/components/RouteSection';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';
import TopicLinks from '@/components/TopicLinks';
import { SITE_URL } from '@/lib/topics';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const homeUrl = `${SITE_URL}/${locale}`;
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guatapé', item: homeUrl },
    ],
  };
  const attractionLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Plazoleta de Los Zócalos',
    url: homeUrl,
    description: 'Colorful public plaza with painted stairs and traditional zócalos in Guatapé, Colombia.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Guatapé',
      addressRegion: 'Antioquia',
      addressCountry: 'CO',
    },
    isAccessibleForFree: true,
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionLd) }}
        />
        <Hero />
        <Intro />
        <BasicInfo />
        <HistoryTimeline />
        <RouteSection />
        <HoursSection />
        <TicketsSection />
        <TransportSection />
        <Gallery />
        <Reviews />
        <MapEmbed />
        <TopicLinks />
      </main>
      <Footer />
    </>
  );
}
