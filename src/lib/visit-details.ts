import type { TopicSlug } from './topics';

export type VisitDetail = {
  place: string;
  address: string;
  mapQuery: string;
  images: string[];
  management: { es: string; en: string };
  highlight: { es: string; en: string };
  walk: { es: string; en: string };
  photo: { es: string; en: string };
  access: { es: string; en: string };
  visitTime: { es: string; en: string };
};

export const VISIT_DETAILS: Record<TopicSlug, VisitDetail> = {
  'que-ver-en-guatape': {
    place: 'Centro histórico de Guatapé', address: 'Parque Principal, Guatapé, Antioquia, Colombia',
    mapQuery: 'Parque Principal Guatapé Antioquia Colombia',
    images: ['/nearby/plazoleta-zocalos.jpg', '/nearby/calle-del-recuerdo.jpg', '/nearby/embalse-guatape.jpg'],
    management: {
      es: 'Las calles, plazas y parques del centro histórico son espacios públicos bajo la gestión de la Alcaldía de Guatapé, con la participación de residentes y comerciantes en la conservación de su identidad. La Piedra del Peñol, mencionada en esta ruta, tiene administración privada y acceso independiente.',
      en: 'The streets, squares and parks of the historic center are public spaces managed by the Municipality of Guatapé, with residents and merchants helping preserve their character. El Peñol Rock, also featured on this itinerary, is privately operated with a separate entrance.',
    },
    highlight: { es: 'Observa cómo los paneles en relieve narran oficios, animales y recuerdos familiares. Compara los diseños originales de cada calle, las escaleras de la plazoleta y la escala del paisaje del embalse.', en: 'Look for relief panels depicting trades, animals and family memories. Compare the motifs of each street, the colorful plaza staircase and the scale of the reservoir landscape.' },
    walk: { es: 'Parque Principal → Calle del Recuerdo → Plazoleta de los Zócalos → malecón. Deja la Piedra del Peñol para un traslado separado por carretera.', en: 'Main Park → Calle del Recuerdo → Zócalos Plaza → waterfront. Visit El Peñol Rock separately by road.' },
    photo: { es: 'Fotografía los detalles de los zócalos de frente y toma una vista amplia desde las escaleras. La luz suave de mañana ayuda a evitar reflejos y sombras duras.', en: 'Photograph zócalo details straight on, then step back for a broad view of the plaza staircase. Soft morning light helps avoid glare and harsh shadows.' },
    access: { es: 'El centro se recorre a pie; calles empedradas y escaleras pueden limitar la accesibilidad. La subida a la roca es una actividad distinta y de pago.', en: 'The center is walkable; cobbles and stairs can restrict accessibility. Climbing the rock is a separate paid activity.' },
    visitTime: { es: '2–3 horas en el centro; añade tiempo para la roca', en: '2–3 hours downtown; allow extra time for the rock' },
  },
  'zocalos-de-guatape': {
    place: 'Plazoleta de los Zócalos', address: 'Plazoleta de los Zócalos, Guatapé, Antioquia, Colombia',
    mapQuery: 'Plazoleta de los Zócalos Guatapé Antioquia Colombia',
    images: ['/nearby/zocalos-de-guatape.jpg', '/nearby/plazoleta-zocalos.jpg'],
    management: {
      es: 'La Plazoleta de los Zócalos forma parte del espacio público de Guatapé. La Alcaldía interviene en su ordenamiento y conservación; en 2023 el municipio reglamentó los zócalos y las características de las fachadas urbanas mediante el Decreto 122. Las casas y negocios conservan sus propios usos y responsables.',
      en: 'Plazoleta de los Zócalos is part of Guatapé’s public space. The Municipality oversees public-space planning and preservation; its 2023 Decree 122 established rules for zócalos and urban facades. Individual homes and businesses retain their own uses and operators.',
    },
    highlight: { es: 'Busca figuras de animales, productos agrícolas, herramientas de trabajo y escenas de la vida local. Los relieves, colores y marcos de cada fachada son parte de la narrativa visual del pueblo.', en: 'Look for animals, farm produce, tools and everyday scenes. The reliefs, colors and borders of each facade help tell the town’s visual story.' },
    walk: { es: 'Empieza en las escaleras pintadas, rodea la plazoleta sin bloquear entradas y continúa hacia la Calle del Recuerdo para comparar paneles históricos.', en: 'Start at the painted staircase, circle the square without blocking doorways, then continue to Calle del Recuerdo to compare historic panels.' },
    photo: { es: 'La base de la escalera permite encuadrar los escalones; desde arriba se abre la vista a fachadas y terrazas. En los retratos evita incluir personas sin su permiso.', en: 'Frame the steps from below, then shoot the facades and terraces from the upper landing. Respect the privacy of people nearby.' },
    access: { es: 'Espacio público de visita libre; los escalones y desniveles requieren atención. El consumo en locales es opcional y se paga aparte.', en: 'Free public space; watch for steps and uneven levels. Purchases in nearby businesses are optional and separate.' },
    visitTime: { es: '30–45 minutos', en: '30–45 minutes' },
  },
  'calle-del-recuerdo': {
    place: 'Calle del Recuerdo', address: 'Calle del Recuerdo, Guatapé, Antioquia, Colombia',
    mapQuery: 'Calle del Recuerdo Guatapé Antioquia Colombia',
    images: ['/nearby/calle-del-recuerdo.jpg', '/nearby/zocalos-de-guatape.jpg'],
    management: {
      es: 'La Calle del Recuerdo es una vía patrimonial y espacio público del municipio de Guatapé, cuya gestión urbana corresponde a la administración municipal. Su memoria está vinculada al antiguo asentamiento afectado por la construcción del embalse; los vecinos mantienen el carácter de sus fachadas.',
      en: 'Calle del Recuerdo is a heritage street and public space under Guatapé’s municipal administration. It recalls the former settlement affected by the reservoir project, while residents maintain the identity of its facades.',
    },
    highlight: { es: 'El empedrado y las casas coloridas evocan el antiguo Guatapé. Observa la escala de la calle, las puertas, los zócalos narrativos y su relación con la plaza cercana.', en: 'The cobbles and colorful houses recall old Guatapé. Notice the street scale, doorways, storytelling panels and connection to the nearby plaza.' },
    walk: { es: 'Entra desde el Parque Principal, sigue el empedrado, detente ante los relieves y enlaza la visita con la Plazoleta de los Zócalos.', en: 'Enter from the Main Park, follow the cobbled lane, pause for the reliefs and connect your walk with Zócalos Plaza.' },
    photo: { es: 'Desde un extremo de la calle consigue una perspectiva de los adoquines y fachadas. Para primeros planos, acércate a los paneles sin apoyar equipo sobre las paredes.', en: 'Shoot along the street to capture the cobbles and facades. For close-ups, approach the panels without resting equipment on the walls.' },
    access: { es: 'Recorrido peatonal gratuito. El empedrado irregular puede resultar difícil para sillas de ruedas y carritos.', en: 'Free pedestrian route. Uneven cobblestones may be difficult for wheelchairs and strollers.' },
    visitTime: { es: '30–45 minutos', en: '30–45 minutes' },
  },
  'piedra-del-penol': {
    place: 'Piedra del Peñol', address: 'Vereda La Piedra, vía El Peñol–Guatapé, Antioquia, Colombia',
    mapQuery: 'Piedra del Peñol entrada Guatapé Antioquia Colombia',
    images: ['/nearby/piedra-del-penol.jpg', '/nearby/embalse-guatape.jpg'],
    management: {
      es: 'La Piedra del Peñol es un atractivo de propiedad y administración privadas, distinto de las plazas públicas de Guatapé. La entidad operadora controla el acceso a las escaleras, horarios, tarifas y servicios de la cima; consulta sus avisos antes de viajar.',
      en: 'El Peñol Rock is privately owned and operated, unlike Guatapé’s public squares. Its operator manages stair access, opening times, admission and summit services; check its notices before traveling.',
    },
    highlight: { es: 'La roca granítica destaca por su pared casi vertical y la escalera encajada en una grieta. Desde arriba se observan las islas, penínsulas y brazos del embalse.', en: 'The granite monolith stands out for its near-vertical face and stairway built into a fissure. From the top, study the reservoir’s islands, peninsulas and winding inlets.' },
    walk: { es: 'Llega a la entrada, confirma tarifa y estado del acceso, sube a tu ritmo con pausas y deja tiempo para mirar el embalse desde varios lados.', en: 'Arrive at the entrance, confirm admission and access conditions, ascend at your own pace and allow time for views from different sides.' },
    photo: { es: 'Una toma desde la base muestra la dimensión del monolito; desde la cima usa un encuadre panorámico de las islas y curvas del embalse.', en: 'A photo from the base shows the scale of the monolith; use a wide panorama from the summit for the islands and reservoir curves.' },
    access: { es: 'Entrada de pago y subida por numerosos escalones. Las tarifas y horarios varían; consulta al operador y evita el ascenso durante tormentas.', en: 'Paid entry and a long stair climb. Prices and hours may change; check with the operator and avoid ascending during storms.' },
    visitTime: { es: '1½–2 horas, según el ritmo de ascenso', en: '1½–2 hours, depending on climbing pace' },
  },
  'como-llegar-desde-medellin': {
    place: 'Terminal del Norte de Medellín', address: 'Terminal del Norte, Medellín, Antioquia, Colombia',
    mapQuery: 'Terminal de Transporte del Norte Medellín Antioquia Colombia',
    images: ['/nearby/embalse-guatape.jpg', '/nearby/plazoleta-zocalos.jpg'],
    management: {
      es: 'La Terminal del Norte es una infraestructura de transporte con su propia administración y compañías operadoras. Las calles y plazas de destino en Guatapé son espacio público municipal; la Piedra del Peñol cuenta con administración privada.',
      en: 'Medellín’s North Terminal has its own transport administration and bus operators. Streets and squares at the Guatapé destination are municipal public spaces, while El Peñol Rock is privately managed.',
    },
    highlight: { es: 'El trayecto cruza paisajes de montaña y llega al entorno del embalse. Identifica la terminal de salida, el punto de bajada en Guatapé y el acceso independiente a la roca.', en: 'The route crosses mountain scenery toward the reservoir. Distinguish the departure terminal, Guatapé drop-off and separate access to the rock.' },
    walk: { es: 'Terminal del Norte → Guatapé centro → Parque Principal y Plazoleta → malecón. Para la roca utiliza transporte local y confirma el regreso.', en: 'North Terminal → Guatapé center → Main Park and Zócalos Plaza → waterfront. Arrange local transport to the rock and confirm your return.' },
    photo: { es: 'Reserva las fotografías para las paradas seguras y el centro peatonal; no te detengas en la carretera para fotografiar el embalse.', en: 'Save photos for safe stops and the pedestrian center; do not stop on the roadway for reservoir views.' },
    access: { es: 'Billete de bus o traslado de pago. Confirma horarios, taquillas y última salida con la transportadora.', en: 'Bus ticket or paid transfer required. Confirm schedules, ticket counters and last departures with the operator.' },
    visitTime: { es: 'Alrededor de 2 horas por trayecto, sujeto al tráfico', en: 'About 2 hours each way, traffic dependent' },
  },
};

export function mapLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
