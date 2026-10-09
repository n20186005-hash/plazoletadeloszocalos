import { getLocale } from 'next-intl/server';
import { TOPICS } from '@/lib/topics';

const heading: Record<string, string> = {
  es: 'Guías de Guatapé',
  en: 'Guatapé Guides',
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
              className="group rounded-xl p-5 transition-transform hover:-translate-y-1 hover:shadow-md flex items-center justify-between"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                {t[locale].label}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-1 transition-transform"
                style={{ color: 'var(--accent)' }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
