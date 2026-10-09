import { useTranslations } from 'next-intl';

export default function Reviews() {
  const t = useTranslations('reviews');
  const tHero = useTranslations('hero');
  const mapsUrl = 'https://maps.app.goo.gl/sR2JPeqT844vKHFr8';

  return (
    <section id="reviews" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p
          className="text-sm leading-relaxed mb-8 max-w-2xl"
          style={{ color: 'var(--text-muted)' }}
        >
          {t('declaration')}
        </p>

        {/* Aggregate snapshot — no individual reviews are displayed */}
        <div
          className="rounded-2xl p-8 mb-8 flex flex-col sm:flex-row items-center gap-6"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <div
            className="flex items-center justify-center rounded-full text-white text-3xl font-bold w-20 h-20 flex-shrink-0"
            style={{ background: 'var(--accent)' }}
            aria-hidden="true"
          >
            {tHero('rating')}
          </div>
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={i <= Math.round(parseFloat(tHero('rating')) || 5) ? '#f0b429' : 'var(--border-color)'}
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              {tHero('rating')} / 5
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('ratingNote', { count: tHero('reviewCount') })}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
            style={{
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
            }}
          >
            <span>{t('moreReviews')}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
