import { getLocale } from 'next-intl/server';
import { TOPICS } from '@/lib/topics';
import { VISIT_DETAILS } from '@/lib/visit-details';

const heading: Record<string, string> = {
  es: 'Lugares cercanos y rutas de Guatapé',
  en: 'Nearby sights and Guatapé routes',
};

const subheading: Record<string, string> = {
  es: 'Profundiza en lo que rodea a la Plazoleta de Los Zócalos.',
  en: 'Go deeper into what surrounds Plazoleta de Los Zócalos.',
};

export default async function TopicLinks() {
  const locale = await getLocale();
  if (locale !== 'es' && locale !== 'en') {
    return null;
  }

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {heading[locale]}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          {subheading[locale]}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOPICS.map((t) => (
            <a
              key={t.slug}
              href={`/${locale}/${t.slug}`}
              className="group rounded-xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <img src={VISIT_DETAILS[t.slug].images[0]} alt={VISIT_DETAILS[t.slug].place} loading="lazy" className="w-full h-44 object-cover" />
              <div className="p-5">
                <span className="font-semibold block mb-2" style={{ color: 'var(--text-primary)' }}>{t[locale].label}</span>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{VISIT_DETAILS[t.slug].visitTime[locale]}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
