import { getLocale, getTranslations } from 'next-intl/server';
import { allSlugs, listing, type Language } from '@/lib/regional';


export default async function TopicLinks() {
  const locale = await getLocale();
  const t = await getTranslations('topicUi');
  if (locale !== 'es' && locale !== 'en' && locale !== 'zh') {
    return null;
  }

  return (
    <section id="explore" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('exploreTitle')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          {t('exploreIntro')}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allSlugs.map((slug) => {
            const entry = listing(slug, locale as Language);
            return (
            <a
              key={slug}
              href={`/${locale}/${slug}`}
              className="group rounded-xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <img src={entry.image} alt={entry.name} loading="lazy" className="w-full h-44 object-cover" />
              <div className="p-5">
                <span className="font-semibold block mb-2" style={{ color: 'var(--text-primary)' }}>{entry.name}</span>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{entry.location}</span>
              </div>
            </a>
          );})}
        </div>
      </div>
    </section>
  );
}
