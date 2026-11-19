import { TOPICS, SITE_URL, type Topic, type TopicSlug } from '@/lib/topics';
import { VISIT_DETAILS, mapLink } from '@/lib/visit-details';
import { useTranslations } from 'next-intl';

type Locale = 'es' | 'en';

export default function TopicPage({ topic, locale }: { topic: Topic; locale: Locale }) {
  const t = useTranslations('topicUi');
  const c = topic[locale];
  const detail = VISIT_DETAILS[topic.slug];
  const homeUrl = `${SITE_URL}/${locale}`;
  const topicUrl = `${SITE_URL}/${locale}/${topic.slug}`;
  const isRock = topic.slug === 'piedra-del-penol';
  const isTransport = topic.slug === 'como-llegar-desde-medellin';
  const isChurch = topic.slug === 'iglesia-nuestra-senora-del-carmen';
  const hoursText = t(isRock ? 'rockHours' : isChurch ? 'churchHours' : isTransport ? 'transportHours' : 'publicHours');
  const ticketText = t(isRock ? 'rockPrice' : isTransport ? 'transportPrice' : 'publicPrice');
  const routeSteps = detail.walk[locale].split('→').map((step) => step.trim()).filter(Boolean);

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('home'), item: homeUrl },
      { '@type': 'ListItem', position: 2, name: c.title, item: topicUrl },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const pageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${topicUrl}#webpage`,
    url: topicUrl,
    name: c.metaTitle,
    description: c.metaDescription,
    inLanguage: locale,
    isPartOf: { '@type': 'WebSite', name: 'Plazoleta de Los Zócalos', url: SITE_URL },
    about: {
      '@type': 'Place',
      name: detail.place,
      address: { '@type': 'PostalAddress', streetAddress: detail.address, addressCountry: 'CO' },
      hasMap: mapLink(detail.mapQuery),
      image: detail.images.map((src) => src.startsWith('https://') ? src : `${SITE_URL}${src}`),
    },
  };

  const related = TOPICS.filter((t) => t.slug !== topic.slug) as Topic[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }}
      />

      <article className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }} aria-label={t('home')}>
            <a href={homeUrl} className="hover:underline" style={{ color: 'var(--accent)' }}>
              {t('home')}
            </a>
            <span className="mx-2">/</span>
            <span>{c.title}</span>
          </nav>

          <h1
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            {c.title}
          </h1>

          <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: 'var(--accent)' }}>
            {t('tagline')}
          </p>

          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
            {c.intro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {[
              [t('location'), detail.address],
              [t('duration'), detail.visitTime[locale]],
              [t('access'), detail.access[locale]],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--accent)' }}>{label}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{value}</p>
              </div>
            ))}
          </div>
          <a href={mapLink(detail.mapQuery)} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg px-5 py-3 font-semibold mb-12" style={{ background: 'var(--accent)', color: 'white' }}>
            {t('viewMap')}
          </a>

          <a href={mapLink(detail.mapQuery)} target="_blank" rel="noopener noreferrer" className="inline-flex ml-0 sm:ml-4 underline font-semibold mb-12" style={{ color: 'var(--accent)' }}>
            {t('reviewsLink')}
          </a>

          <section className="rounded-2xl p-6 sm:p-8 mb-12" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <p className="text-sm font-bold uppercase tracking-wide mb-3" style={{ color: 'var(--accent)' }}>{t('about')}</p>
            <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('manager')}
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{detail.management[locale]}</p>
            <a href="https://www.municipiodeguatape.gov.co/" target="_blank" rel="noopener noreferrer" className="text-sm underline inline-block mt-4" style={{ color: 'var(--accent)' }}>
              {t('municipal')}
            </a>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
              {t('essentials')}
            </h2>
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
              {[
                [t('place'), detail.place],
                [t('location'), detail.address],
                [t('type'), t(isRock ? 'rockType' : isTransport ? 'transportType' : isChurch ? 'churchType' : 'publicType')],
                [t('time'), detail.visitTime[locale]],
                [t('hours'), hoursText],
                [t('price'), ticketText],
              ].map(([label, value], index) => (
                <div key={label} className="grid grid-cols-1 sm:grid-cols-[165px_1fr] gap-1 sm:gap-5 p-4" style={{ background: index % 2 ? 'var(--bg-primary)' : 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
                  <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{label}</span>
                  <span className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-xl p-6" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
              <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('bestTime')}</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{hoursText}</p>
              <p className="leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>{t('morning')}</p>
            </div>
            <div className="rounded-xl p-6" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
              <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('tickets')}</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{ticketText}</p>
              <p className="leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>{detail.access[locale]}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>{t('photos')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detail.images.map((src, i) => (
                <figure key={src} className="overflow-hidden rounded-xl" style={{ background: 'var(--bg-secondary)' }}>
                  {/* Images are local copies of location-identified photographs. */}
                  <img src={src} alt={`${detail.place} — ${t('view')} ${i + 1}`} loading="lazy" className="w-full h-56 object-cover" />
                </figure>
              ))}
            </div>
          </section>

          {c.sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-10">
              <h2
                className="font-display text-2xl font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {section.heading}
              </h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {section.body}
              </p>
            </section>
          ))}

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>{t('steps')}</h2>
            <ol className="space-y-4">
              {routeSteps.map((step, i) => (
                <li key={i} className="flex gap-4 rounded-xl p-4" style={{ background: 'var(--bg-secondary)' }}>
                  <span className="flex-none rounded-full w-9 h-9 flex items-center justify-center font-bold" style={{ background: 'var(--accent)', color: 'white' }}>{i + 1}</span>
                  <span className="leading-relaxed pt-1" style={{ color: 'var(--text-secondary)' }}>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              [t('history'), detail.highlight[locale]],
              [t('walk'), detail.walk[locale]],
              [t('photoSpots'), detail.photo[locale]],
              [t('planning'), detail.access[locale]],
            ].map(([title, body]) => (
              <div key={title} className="rounded-xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{title}</h2>
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{body}</p>
              </div>
            ))}
          </section>
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('transport')}</h2>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t('gettingHere')}</h3>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{detail.walk[locale]} {t('fromMedellin')}</p>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t('lodging')}</h3>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              {t('lodgingIntro')}
            </p>
            <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>{detail.address}</p>
            <a href={mapLink(detail.mapQuery)} target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: 'var(--accent)' }}>{t('openLocation')}</a>
          </section>

          <section className="mb-12 rounded-xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
            <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t('visitorReviews')}</h2>
            <p className="leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{t('reviewNotice')}</p>
            <a href={mapLink(detail.mapQuery)} target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: 'var(--accent)' }}>{t('readReviews')}</a>
          </section>

          <section className="mb-10">
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('faq')}
            </h2>
            <div className="space-y-3">
              {c.faq.map((f, i) => (
                <details
                  key={i}
                  className="rounded-xl p-4"
                  style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                >
                  <summary className="cursor-pointer font-medium" style={{ color: 'var(--text-primary)' }}>
                    {f.question}
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {f.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <p className="text-xs mb-12" style={{ color: 'var(--text-muted)' }}>
            {t('notice')}
          </p>

          <section>
            <h2
              className="font-display text-xl font-semibold mb-5"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('related')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((t) => (
                <a
                  key={t.slug as TopicSlug}
                  href={`/${locale}/${t.slug}`}
                  className="rounded-xl p-4 transition-transform hover:-translate-y-1"
                  style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                >
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    {t[locale].label}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
