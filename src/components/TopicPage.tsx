import { TOPICS, SITE_URL, type Topic, type TopicSlug } from '@/lib/topics';

type Locale = 'es' | 'en';

const homeLabel: Record<Locale, string> = {
  es: 'Inicio',
  en: 'Home',
};

const relatedLabel: Record<Locale, string> = {
  es: 'Sigue explorando Guatapé',
  en: 'Keep exploring Guatapé',
};

const sourceNote: Record<Locale, string> = {
  es: 'Nota: los precios, horarios y la disponibilidad pueden cambiar. Verifica siempre los detalles en los canales oficiales antes de tu visita.',
  en: 'Note: prices, opening hours and availability may change. Always confirm details through official channels before your visit.',
};

export default function TopicPage({ topic, locale }: { topic: Topic; locale: Locale }) {
  const c = topic[locale];
  const homeUrl = `${SITE_URL}/${locale}`;
  const topicUrl = `${SITE_URL}/${locale}/${topic.slug}`;

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: homeLabel[locale], item: homeUrl },
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

      <article className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }} aria-label="Breadcrumb">
            <a href={homeUrl} className="hover:underline" style={{ color: 'var(--accent)' }}>
              {homeLabel[locale]}
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

          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
            {c.intro}
          </p>

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

          <section className="mb-10">
            <h2
              className="font-display text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              FAQ
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
            {sourceNote[locale]}
          </p>

          <section>
            <h2
              className="font-display text-xl font-semibold mb-5"
              style={{ color: 'var(--text-primary)' }}
            >
              {relatedLabel[locale]}
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
