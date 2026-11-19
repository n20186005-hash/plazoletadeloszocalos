import { TOPICS, SITE_URL, type Topic, type TopicSlug } from '@/lib/topics';
import { VISIT_DETAILS, mapLink } from '@/lib/visit-details';

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
  const detail = VISIT_DETAILS[topic.slug];
  const isEs = locale === 'es';
  const homeUrl = `${SITE_URL}/${locale}`;
  const topicUrl = `${SITE_URL}/${locale}/${topic.slug}`;
  const isRock = topic.slug === 'piedra-del-penol';
  const isTransport = topic.slug === 'como-llegar-desde-medellin';
  const isChurch = topic.slug === 'iglesia-nuestra-senora-del-carmen';
  const hoursText = isRock
    ? (isEs ? 'Horario de acceso fijado por el operador; comprueba la jornada actual antes de subir.' : 'Climbing hours are set by the operator; check the current schedule before ascending.')
    : isChurch
      ? (isEs ? 'Interior según horario parroquial y celebraciones; exterior visible desde el parque.' : 'Interior follows parish hours and services; exterior visible from the park.')
      : isTransport
        ? (isEs ? 'Salidas según empresa de transporte y fecha de viaje.' : 'Departures vary by transport operator and travel date.')
        : (isEs ? 'Espacio público al aire libre; negocios y servicios tienen sus propios horarios.' : 'Outdoor public space; shops and services keep their own hours.');
  const ticketText = isRock
    ? (isEs ? 'Ascenso de pago; tarifa vigente determinada por la administración privada.' : 'Paid stairway climb; current admission is set by the private operator.')
    : isTransport
      ? (isEs ? 'Billete de bus o transporte contratado; confirma el precio al comprar.' : 'Bus fare or hired transport; confirm prices when booking.')
      : (isEs ? 'Acceso al espacio público gratuito; servicios y actividades privadas se cobran aparte.' : 'Free access to the public area; private activities and services are charged separately.');
  const routeSteps = detail.walk[locale].split('→').map((step) => step.trim()).filter(Boolean);

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

          <p className="text-sm font-semibold tracking-wide uppercase mb-4" style={{ color: 'var(--accent)' }}>
            {isEs ? 'Patrimonio, recorrido y visita práctica en Guatapé' : 'Heritage, walking routes and practical tips in Guatapé'}
          </p>

          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
            {c.intro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {[
              [isEs ? 'Ubicación' : 'Location', detail.address],
              [isEs ? 'Tiempo recomendado' : 'Suggested time', detail.visitTime[locale]],
              [isEs ? 'Acceso' : 'Access', detail.access[locale]],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--accent)' }}>{label}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{value}</p>
              </div>
            ))}
          </div>
          <a href={mapLink(detail.mapQuery)} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-lg px-5 py-3 font-semibold mb-12" style={{ background: 'var(--accent)', color: 'white' }}>
            {isEs ? `Ver ${detail.place} en Google Maps` : `Find ${detail.place} on Google Maps`}
          </a>

          <a href={mapLink(detail.mapQuery)} target="_blank" rel="noopener noreferrer" className="inline-flex ml-0 sm:ml-4 underline font-semibold mb-12" style={{ color: 'var(--accent)' }}>
            {isEs ? 'Consultar reseñas de visitantes' : 'See visitor reviews'}
          </a>

          <section className="rounded-2xl p-6 sm:p-8 mb-12" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <p className="text-sm font-bold uppercase tracking-wide mb-3" style={{ color: 'var(--accent)' }}>{isEs ? 'Sobre este lugar' : 'About this place'}</p>
            <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {isEs ? '¿Quién gestiona este espacio?' : 'Who manages this place?'}
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{detail.management[locale]}</p>
            <a href="https://www.municipiodeguatape.gov.co/" target="_blank" rel="noopener noreferrer" className="text-sm underline inline-block mt-4" style={{ color: 'var(--accent)' }}>
              {isEs ? 'Información municipal de Guatapé' : 'Guatapé municipal information'}
            </a>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
              {isEs ? 'Información básica para la visita' : 'Essential visitor information'}
            </h2>
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
              {[
                [isEs ? 'Lugar' : 'Place', detail.place],
                [isEs ? 'Ubicación' : 'Location', detail.address],
                [isEs ? 'Tipo de lugar' : 'Place type', isRock ? (isEs ? 'Mirador natural con acceso privado' : 'Natural viewpoint with private access') : isTransport ? (isEs ? 'Ruta de transporte' : 'Transport route') : isChurch ? (isEs ? 'Templo religioso y patrimonio urbano' : 'Religious landmark and town heritage') : (isEs ? 'Espacio público y paisaje cultural' : 'Public space and cultural landscape')],
                [isEs ? 'Duración orientativa' : 'Time to allow', detail.visitTime[locale]],
                [isEs ? 'Horario' : 'Opening hours', hoursText],
                [isEs ? 'Precio' : 'Admission', ticketText],
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
              <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{isEs ? 'Horarios y mejores momentos' : 'Opening times and when to visit'}</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{hoursText}</p>
              <p className="leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>{isEs ? 'Para fotografiar fachadas y recorrer con más tranquilidad, suele convenir la primera parte del día.' : 'Earlier in the day is often more comfortable for photographing facades and strolling.'}</p>
            </div>
            <div className="rounded-xl p-6" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
              <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{isEs ? 'Entradas y costes' : 'Tickets and costs'}</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{ticketText}</p>
              <p className="leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>{detail.access[locale]}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>{isEs ? 'Imágenes del lugar' : 'Photos of the place'}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detail.images.map((src, i) => (
                <figure key={src} className="overflow-hidden rounded-xl" style={{ background: 'var(--bg-secondary)' }}>
                  {/* Images are local copies of location-identified photographs. */}
                  <img src={src} alt={`${detail.place} — ${isEs ? 'vista' : 'view'} ${i + 1}`} loading="lazy" className="w-full h-56 object-cover" />
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
            <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>{isEs ? 'Ruta sugerida paso a paso' : 'Step-by-step suggested route'}</h2>
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
              [isEs ? 'Historia, arquitectura y detalles' : 'History, design and details', detail.highlight[locale]],
              [isEs ? 'Ruta recomendada' : 'Suggested walking route', detail.walk[locale]],
              [isEs ? 'Dónde hacer fotos' : 'Best photo viewpoints', detail.photo[locale]],
              [isEs ? 'Cómo organizar la visita' : 'Planning your visit', detail.access[locale]],
            ].map(([title, body]) => (
              <div key={title} className="rounded-xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{title}</h2>
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{body}</p>
              </div>
            ))}
          </section>
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{isEs ? 'Transporte, alojamiento y ubicación' : 'Transport, accommodation and directions'}</h2>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{isEs ? 'Cómo llegar' : 'Getting here'}</h3>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{detail.walk[locale]} {isEs ? 'Desde Medellín, llega a Guatapé por carretera o autobús y utiliza la ubicación indicada para el tramo final.' : 'From Medellín, travel to Guatapé by road or bus, then use the specific location for the final leg.'}</p>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{isEs ? 'Dónde alojarse' : 'Where to stay'}</h3>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              {isEs
                ? 'Para el centro de Guatapé, elige un alojamiento que permita recorrer a pie el Parque Principal y el malecón. Para la Piedra del Peñol, comprueba el transporte de ida y vuelta por separado. Comprueba condiciones y precios directamente con cada proveedor.'
                : 'For central Guatapé, look for accommodation within walking distance of the Main Park and waterfront. For El Peñol Rock, arrange separate return transport. Check availability and prices directly with each provider.'}
            </p>
            <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>{detail.address}</p>
            <a href={mapLink(detail.mapQuery)} target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: 'var(--accent)' }}>{isEs ? 'Abrir ubicación específica en Google Maps' : 'Open this specific location in Google Maps'}</a>
          </section>

          <section className="mb-12 rounded-xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
            <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{isEs ? 'Opiniones de visitantes' : 'Visitor reviews'}</h2>
            <p className="leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{isEs ? 'Consulta las opiniones y fotografías más recientes directamente en la ficha del lugar. No mostramos una puntuación sin una fecha y un recuento verificables.' : 'Check the latest reviews and visitor photos directly on the location listing. No numerical rating is shown without a verifiable date and review count.'}</p>
            <a href={mapLink(detail.mapQuery)} target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: 'var(--accent)' }}>{isEs ? 'Ver opiniones en Google Maps' : 'Read reviews on Google Maps'}</a>
          </section>

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
