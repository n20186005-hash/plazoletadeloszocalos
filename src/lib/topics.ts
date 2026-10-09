export type TopicSlug =
  | 'que-ver-en-guatape'
  | 'zocalos-de-guatape'
  | 'calle-del-recuerdo'
  | 'piedra-del-penol'
  | 'como-llegar-desde-medellin';

export type TopicSection = { id: string; heading: string; body: string };
export type TopicFaq = { question: string; answer: string };

export type TopicLocaleContent = {
  label: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  sections: TopicSection[];
  faq: TopicFaq[];
};

export type Topic = {
  slug: TopicSlug;
  es: TopicLocaleContent;
  en: TopicLocaleContent;
};

export const TOPICS: Topic[] = [
  {
    slug: 'que-ver-en-guatape',
    es: {
      label: 'Qué ver en Guatapé',
      metaTitle: 'Qué ver en Guatapé: imperdibles de la ciudad de los zócalos',
      metaDescription:
        'Guía de qué ver en Guatapé: plaza principal, calles de zócalos, Calle del Recuerdo, La Piedra del Peñol, malecón y miradores. Ruta sugerida y consejos.',
      title: 'Qué ver en Guatapé',
      intro:
        'Guatapé, en Antioquia, es mucho más que un pueblo de fachadas pintadas. Con un casco urbano pequeño y caminable, varias horas bastan para recorrer sus rincones más fotogénicos. Esta guía reúne los sitios que no te puedes perder y cómo encadenarlos en una visita.',
      sections: [
        {
          id: 'plaza-principal',
          heading: 'La plaza principal y el parque',
          body: 'El corazón del pueblo es su parque principal, rodeado de zócalos y presidido por la iglesia de Nuestra Señora del Carmen. Es el punto natural para empezar a caminar y orientarse.',
        },
        {
          id: 'zocalos',
          heading: 'Las calles de zócalos',
          body: 'A pocos pasos de la plaza, las calles residenciales muestran los paneles de colores que hicieron famoso a Guatapé. Cada fachada cuenta algo distinto: oficios, festividades o escenas cotidianas.',
        },
        {
          id: 'calle-recuerdo',
          heading: 'Calle del Recuerdo y Calle de las Sombrillas',
          body: 'La Calle del Recuerdo concentra algunos de los zócalos más elaborados, y a pocos metros la Calle de las Sombrillas se ha vuelto un punto obligado para las fotos con su techo de paraguas.',
        },
        {
          id: 'malecon',
          heading: 'El malecón y el embarcadero',
          body: 'A orillas del embalse, el malecón invita a caminar y a tomar un paseo en bote entre los brazos de agua y las islas que rodean al pueblo.',
        },
        {
          id: 'piedra',
          heading: 'La Piedra del Peñol',
          body: 'A pocos kilómetros del centro, el monólito de La Piedra del Peñol ofrece una de las vistas de 360° más conocidas de Colombia. Puedes combinarla con la visita al pueblo en el mismo día.',
        },
        {
          id: 'ruta',
          heading: 'Idea de ruta de medio día',
          body: 'Empieza en la plaza principal, baja por la Calle del Recuerdo, pasa por la Plazoleta de Los Zócalos para ver su escalera pintada, camina al malecón y reserva la tarde para La Piedra del Peñol o un paseo en bote.',
        },
      ],
      faq: [
        {
          question: '¿Cuánto tiempo se necesita para ver Guatapé?',
          answer:
            'Con calma, entre 4 y 6 horas, incluyendo La Piedra del Peñol y un paseo en bote por el embalse.',
        },
        {
          question: '¿Se puede recorrer Guatapé a pie?',
          answer:
            'Sí. El centro es compacto y, en su mayor parte, peatonal y tranquilo; todo lo principal está a corta distancia.',
        },
        {
          question: '¿Qué hacer además de fotografiar zócalos?',
          answer:
            'Paseos en bote por el embalse, kayak, parapente y gastronomía local son opciones frecuentes cerca del pueblo.',
        },
        {
          question: '¿Cuándo es mejor visitarlo?',
          answer:
            'La temporada seca (diciembre a febrero y junio a agosto) suele tener mejor clima, aunque Guatapé se visita todo el año.',
        },
      ],
    },
    en: {
      label: 'Things to See in Guatapé',
      metaTitle: 'Things to See in Guatapé: the must-sees of the town of zócalos',
      metaDescription:
        'What to see in Guatapé: main square, zócalos streets, Calle del Recuerdo, El Peñol rock, the waterfront and viewpoints. Suggested route and tips.',
      title: 'Things to See in Guatapé',
      intro:
        'Guatapé, in Antioquia, is far more than a town with painted facades. Its small, walkable center can be explored in a few hours, yet it packs in several of the most photogenic corners in Colombia. This guide brings together the spots you should not miss and how to chain them together.',
      sections: [
        {
          id: 'plaza-principal',
          heading: 'The main square and park',
          body: 'The heart of the town is its main park, framed by zócalos and dominated by the church of Nuestra Señora del Carmen. It is the natural place to start walking and get your bearings.',
        },
        {
          id: 'zocalos',
          heading: 'The zócalos streets',
          body: 'A few steps from the square, residential streets display the colorful panels that made Guatapé famous. Each facade tells a different story: trades, festivals or everyday life.',
        },
        {
          id: 'calle-recuerdo',
          heading: 'Calle del Recuerdo and Calle de las Sombrillas',
          body: 'Calle del Recuerdo gathers some of the most elaborate zócalos, and a short walk away the Calle de las Sombrillas (Umbrella Street) has become a must for photos with its canopy of umbrellas.',
        },
        {
          id: 'malecon',
          heading: 'The waterfront and dock',
          body: 'On the edge of the reservoir, the waterfront is perfect for a stroll and a boat ride among the inlets and islands that surround the town.',
        },
        {
          id: 'piedra',
          heading: 'El Peñol Rock',
          body: 'A few kilometers from the center, the El Peñol monolith offers one of Colombia’s best-known 360° views. You can combine it with the town visit on the same day.',
        },
        {
          id: 'ruta',
          heading: 'Half-day route idea',
          body: 'Start at the main square, walk down Calle del Recuerdo, stop at Plazoleta de Los Zócalos for its painted staircase, continue to the waterfront, and save the afternoon for El Peñol rock or a boat tour.',
        },
      ],
      faq: [
        {
          question: 'How long do you need to see Guatapé?',
          answer:
            'Leisurely, about 4 to 6 hours, including El Peñol rock and a boat ride on the reservoir.',
        },
        {
          question: 'Can you explore Guatapé on foot?',
          answer:
            'Yes. The center is compact and mostly pedestrian-friendly and calm; the main sights are a short walk apart.',
        },
        {
          question: 'What else is there besides photographing zócalos?',
          answer:
            'Boat tours of the reservoir, kayaking, paragliding and local food are common options near the town.',
        },
        {
          question: 'When is the best time to visit?',
          answer:
            'The dry season (December to February and June to August) usually has better weather, though Guatapé is visited year-round.',
        },
      ],
    },
  },
  {
    slug: 'zocalos-de-guatape',
    es: {
      label: 'Zócalos de Guatapé',
      metaTitle: 'Los Zócalos de Guatapé: origen, significado y dónde verlos',
      metaDescription:
        'Qué son los zócalos de Guatapé, quién los inició, qué representan y la mejor ruta para fotografiarlos. Incluye la Plazoleta de Los Zócalos.',
      title: 'Los Zócalos de Guatapé',
      intro:
        'Los zócalos son el rasgo más famoso de Guatapé: paneles de colores en la parte baja de las fachadas que combinan pintura y relieve. Más que decoración, son una forma de contar la historia y la identidad del pueblo.',
      sections: [
        {
          id: 'origen',
          heading: 'Origen de la tradición',
          body: 'La tradición se atribuye a José María Parra, quien a principios del siglo XX comenzó a pintar la base de las paredes, al parecer para protegerlas de la humedad. Con el tiempo, esa necesidad práctica se transformó en un lenguaje artístico propio del pueblo.',
        },
        {
          id: 'significado',
          heading: 'Qué representan',
          body: 'Los zócalos suelen representar oficios familiares, devoción religiosa, hechos históricos y escenas de la vida cotidiana. Mirarlos con detenimiento es leer, en imágenes, la memoria de Guatapé.',
        },
        {
          id: 'donde',
          heading: 'Dónde ver los mejores zócalos',
          body: 'Las calles alrededor de la plaza principal y la Calle del Recuerdo concentran piezas muy elaboradas. La Plazoleta de Los Zócalos, más tranquila, destaca por su escalera pintada y es ideal para observar el oficio de cerca.',
        },
        {
          id: 'fotos',
          heading: 'Consejos para fotografiarlos',
          body: 'La luz de la mañana es suave y favorece el color. Como los paneles están a la altura de la vista, acércate a los detalles y no solo a la fachada completa; evita las horas de sol fuerte para reducir sombras duras.',
        },
      ],
      faq: [
        {
          question: '¿Quién empezó los zócalos?',
          answer:
            'Se atribuye a José María Parra a principios del siglo XX, como forma de proteger las paredes de la humedad.',
        },
        {
          question: '¿Los zócalos son solo pintura?',
          answer:
            'Combinan pintura y relieve tallado en la base de la pared, por eso se les llama también bajorrelieves.',
        },
        {
          question: '¿La Plazoleta de Los Zócalos es buena para fotos?',
          answer:
            'Sí: es una de las más tranquilas y tiene una escalera pintada que la hace distintiva frente a las calles más concurridas.',
        },
        {
          question: '¿Se necesita un recorrido guiado?',
          answer:
            'No es necesario; las calles son de libre acceso y se recorren caminando por cuenta propia.',
        },
      ],
    },
    en: {
      label: 'The Zócalos of Guatapé',
      metaTitle: 'The Zócalos of Guatapé: origin, meaning and where to see them',
      metaDescription:
        'What the Guatapé zócalos are, who started them, what they represent and the best route to photograph them. Includes Plazoleta de Los Zócalos.',
      title: 'The Zócalos of Guatapé',
      intro:
        'The zócalos are Guatapé’s most famous feature: colorful panels at the base of building facades that blend painting and relief. More than decoration, they are a way of telling the town’s history and identity.',
      sections: [
        {
          id: 'origen',
          heading: 'Origin of the tradition',
          body: 'The tradition is credited to José María Parra, who in the early 20th century began painting the base of walls, apparently to protect them from moisture. Over time that practical need turned into an artistic language of its own.',
        },
        {
          id: 'significado',
          heading: 'What they represent',
          body: 'Zócalos often depict family trades, religious devotion, historical events and scenes of daily life. Looking closely is like reading, in images, the memory of Guatapé.',
        },
        {
          id: 'donde',
          heading: 'Where to see the best zócalos',
          body: 'The streets around the main square and Calle del Recuerdo gather very elaborate pieces. The quieter Plazoleta de Los Zócalos stands out for its painted staircase and is ideal to study the craft up close.',
        },
        {
          id: 'fotos',
          heading: 'Tips for photographing them',
          body: 'Morning light is soft and flatters the color. Since the panels sit at eye level, get close to the details, not just the full facade; avoid harsh midday sun to reduce hard shadows.',
        },
      ],
      faq: [
        {
          question: 'Who started the zócalos?',
          answer:
            'They are credited to José María Parra in the early 20th century, as a way to protect walls from moisture.',
        },
        {
          question: 'Are the zócalos just paint?',
          answer:
            'They combine paint with carved relief at the base of the wall, which is why they are also called bas-reliefs.',
        },
        {
          question: 'Is Plazoleta de Los Zócalos good for photos?',
          answer:
            'Yes: it is one of the quieter spots and has a painted staircase that makes it distinctive from the busier streets.',
        },
        {
          question: 'Do you need a guided tour?',
          answer:
            'Not really; the streets are open to the public and can be walked on your own.',
        },
      ],
    },
  },
  {
    slug: 'calle-del-recuerdo',
    es: {
      label: 'Calle del Recuerdo',
      metaTitle: 'Calle del Recuerdo en Guatapé: zócalos, sombrillas y fotos',
      metaDescription:
        'Qué es la Calle del Recuerdo de Guatapé, por qué es famosa por sus zócalos y la Calle de las Sombrillas, y cómo llegar.',
      title: 'Calle del Recuerdo',
      intro:
        'La Calle del Recuerdo es una de las vías principales del centro de Guatapé, conocida por concentrar algunos de los zócalos más elaborados del pueblo. A pocos pasos, la Calle de las Sombrillas se ha vuelto un punto obligado para las fotos.',
      sections: [
        {
          id: 'que-es',
          heading: 'Qué es y dónde está',
          body: 'Ubicada cerca de la plaza principal, la Calle del Recuerdo es una calle de comercio y paseo donde varias fachadas exhiben paneles de zócalos especialmente detallados.',
        },
        {
          id: 'zocalos',
          heading: 'Los zócalos de la calle',
          body: 'Los paneles aquí suelen ser más grandes y narrativos que los del resto del pueblo, lo que la convierte en una parada ideal para quienes quieren ver el oficio en su mejor expresión.',
        },
        {
          id: 'sombrillas',
          heading: 'La Calle de las Sombrillas',
          body: 'A pocos metros, esta calle cubierta con paraguas de colores es uno de los encuadres más compartidos de Guatapé. Es gratuita y accesible en cualquier recorrido a pie.',
        },
        {
          id: 'consejos',
          heading: 'Consejos de visita',
          body: 'Ve temprano para luz suave y menos gente, y únela en la misma caminata con la plaza principal y la Plazoleta de Los Zócalos, que están a corta distancia.',
        },
      ],
      faq: [
        {
          question: '¿La Calle del Recuerdo es peatonal?',
          answer:
            'El centro de Guatapé es mayormente peatonal y tranquilo, ideal para caminar sin prisa.',
        },
        {
          question: '¿Está cerca de la Plazoleta de Los Zócalos?',
          answer:
            'Sí, están a una corta caminata; conviene recorrerlas en la misma ruta.',
        },
        {
          question: '¿Cuándo evitar aglomeraciones?',
          answer:
            'Mediados de semana y por la mañana suelen tener menos gente que los fines de semana.',
        },
      ],
    },
    en: {
      label: 'Calle del Recuerdo',
      metaTitle: 'Calle del Recuerdo in Guatapé: zócalos, umbrellas and photos',
      metaDescription:
        'What Calle del Recuerdo in Guatapé is, why it is famous for its zócalos and the Calle de las Sombrillas, and how to get there.',
      title: 'Calle del Recuerdo',
      intro:
        'Calle del Recuerdo is one of the main streets in the center of Guatapé, known for gathering some of the most elaborate zócalos in town. A few steps away, the Calle de las Sombrillas has become a required stop for photos.',
      sections: [
        {
          id: 'que-es',
          heading: 'What it is and where it is',
          body: 'Located near the main square, Calle del Recuerdo is a shopping and strolling street where several facades display especially detailed zócalos panels.',
        },
        {
          id: 'zocalos',
          heading: 'The zócalos of the street',
          body: 'The panels here tend to be larger and more narrative than elsewhere in town, making it an ideal stop for anyone who wants to see the craft at its best.',
        },
        {
          id: 'sombrillas',
          heading: 'The Calle de las Sombrillas',
          body: 'A few meters away, this street covered with colorful umbrellas is one of the most shared frames in Guatapé. It is free and easy to reach on any walking route.',
        },
        {
          id: 'consejos',
          heading: 'Visit tips',
          body: 'Go early for soft light and fewer people, and link it in the same walk with the main square and Plazoleta de Los Zócalos, which are a short distance away.',
        },
      ],
      faq: [
        {
          question: 'Is Calle del Recuerdo pedestrian?',
          answer:
            'The center of Guatapé is mostly pedestrian and calm, perfect for a relaxed walk.',
        },
        {
          question: 'Is it close to Plazoleta de Los Zócalos?',
          answer:
            'Yes, they are a short walk apart; it is best to cover them on the same route.',
        },
        {
          question: 'When to avoid crowds?',
          answer:
            'Midweek and mornings usually have fewer people than weekends.',
        },
      ],
    },
  },
  {
    slug: 'piedra-del-penol',
    es: {
      label: 'La Piedra del Peñol',
      metaTitle: 'La Piedra del Peñol: cómo llegar, escalada y mirador',
      metaDescription:
        'Guía de La Piedra del Peñol (El Peñol) cerca de Guatapé: ubicación, la escalinata, el mirador 360° y consejos antes de ir.',
      title: 'La Piedra del Peñol',
      intro:
        'La Piedra del Peñol (también llamada El Peñol) es el gran ícono natural de la región: un monólito de roca a pocos kilómetros de Guatapé cuya cima ofrece una de las vistas de 360° más famosas de Colombia.',
      sections: [
        {
          id: 'ubicacion',
          heading: 'Dónde está y cómo llegar',
          body: 'Queda a unos 10–15 minutos en carro del centro de Guatapé. Se llega en taxi, moto-taxi o como parte de un tour; desde el pueblo no hay caminata directa por la carretera.',
        },
        {
          id: 'escalinata',
          heading: 'La escalinata',
          body: 'Para subir se recorre una escalinata tallada en la roca (cerca de 740 gradas). El acceso es independiente de la visita al pueblo y requiere su propio boleto.',
        },
        {
          id: 'mirador',
          heading: 'El mirador 360°',
          body: 'Desde arriba se abarca el embalse, los brazos de agua y las islas que rodean Guatapé. Es el principal motivo para hacer el esfuerzo de la subida.',
        },
        {
          id: 'consejos',
          heading: 'Antes de ir',
          body: 'Lleva agua, ve temprano para evitar aglomeraciones y calor, y corrobora precio y horario de entrada en canales oficiales, ya que son distintos a los del pueblo.',
        },
      ],
      faq: [
        {
          question: '¿La entrada es gratuita?',
          answer:
            'No. El acceso a La Piedra tiene un boleto aparte del pueblo; verifica precio y horario en canales oficiales antes de ir.',
        },
        {
          question: '¿Cuántas escaleras tiene?',
          answer:
            'Unas 740 gradas talladas en la roca conducen a la cima.',
        },
        {
          question: '¿Vale la pena subir?',
          answer:
            'Sí por la vista de 360°, si estás en forma para el ascenso constante.',
        },
        {
          question: '¿Se puede ir por cuenta propia?',
          answer:
            'Sí, en taxi o moto-taxi desde Guatapé; muchos tours también la incluyen.',
        },
      ],
    },
    en: {
      label: 'El Peñol Rock',
      metaTitle: 'El Peñol Rock: how to get there, the climb and the viewpoint',
      metaDescription:
        'Guide to El Peñol Rock near Guatapé: location, the staircase, the 360° viewpoint and tips before you go.',
      title: 'El Peñol Rock',
      intro:
        'El Peñol Rock (also called La Piedra del Peñol) is the region’s great natural icon: a rock monolith a few kilometers from Guatapé whose summit offers one of Colombia’s most famous 360° views.',
      sections: [
        {
          id: 'ubicacion',
          heading: 'Where it is and how to get there',
          body: 'It is about a 10–15 minute drive from the center of Guatapé. You can get there by taxi, moto-taxi or as part of a tour; there is no direct walk from the town along the road.',
        },
        {
          id: 'escalinata',
          heading: 'The staircase',
          body: 'To go up you climb a staircase carved into the rock (around 740 steps). Access is separate from the town visit and requires its own ticket.',
        },
        {
          id: 'mirador',
          heading: 'The 360° viewpoint',
          body: 'From the top you take in the reservoir, the inlets and the islands around Guatapé. It is the main reason to make the effort of the climb.',
        },
        {
          id: 'consejos',
          heading: 'Before you go',
          body: 'Bring water, go early to avoid crowds and heat, and confirm the entry price and hours on official channels, since they are different from the town’s.',
        },
      ],
      faq: [
        {
          question: 'Is entry free?',
          answer:
            'No. Access to El Peñol has a separate ticket from the town; check price and hours on official channels before going.',
        },
        {
          question: 'How many stairs are there?',
          answer:
            'Around 740 steps carved into the rock lead to the summit.',
        },
        {
          question: 'Is it worth climbing?',
          answer:
            'Yes for the 360° view, if you are fit for the steady ascent.',
        },
        {
          question: 'Can you go on your own?',
          answer:
            'Yes, by taxi or moto-taxi from Guatapé; many tours also include it.',
        },
      ],
    },
  },
  {
    slug: 'como-llegar-desde-medellin',
    es: {
      label: 'Desde Medellín',
      metaTitle: 'Cómo llegar a Guatapé desde Medellín: bus, carro y tours',
      metaDescription:
        'Opciones para llegar a Guatapé desde Medellín: bus desde Terminal del Norte, carro por la autopista, tour de un día y consejos de transporte.',
      title: 'Cómo llegar a Guatapé desde Medellín',
      intro:
        'Guatapé queda a unas dos horas de Medellín, lo que lo convierte en una escapada de un día muy popular. Aquí las opciones principales de transporte para planear tu viaje.',
      sections: [
        {
          id: 'bus',
          heading: 'En bus desde el Terminal del Norte',
          body: 'Desde el Terminal del Norte de Medellín salen buses frecuentes a Guatapé. El viaje dura aproximadamente dos horas, dependiendo del tráfico.',
        },
        {
          id: 'carro',
          heading: 'En carro',
          body: 'Por la autopista, la ruta en carro toma cerca de dos horas. En el pueblo hay zonas de parqueo cerca del centro; llégalo temprano en temporada alta.',
        },
        {
          id: 'tour',
          heading: 'Tour de un día',
          body: 'Muchas agencias ofrecen tours de un día desde Medellín que incluyen transporte, La Piedra del Peñol y a veces el paseo en bote.',
        },
        {
          id: 'consejos',
          heading: 'Consejos prácticos',
          body: 'Sal temprano para aprovechar el día, confirma horarios de regreso y considera combinar el pueblo con La Piedra del Peñol en la misma visita.',
        },
      ],
      faq: [
        {
          question: '¿Cuánto dura el viaje?',
          answer:
            'Unas 2 horas en bus o carro, dependiendo del tráfico.',
        },
        {
          question: '¿Sale bus directo?',
          answer:
            'Sí, desde el Terminal del Norte de Medellín hay salidas frecuentes hacia Guatapé.',
        },
        {
          question: '¿Se puede hacer en un día?',
          answer:
            'Sí, es la opción más común: muchos visitantes hacen el viaje de ida y vuelta el mismo día.',
        },
        {
          question: '¿Dónde se compra el tiquete?',
          answer:
            'En la terminal de Medellín; confirma horarios y tarifas en fuentes oficiales antes de tu viaje.',
        },
      ],
    },
    en: {
      label: 'From Medellín',
      metaTitle: 'How to Get to Guatapé from Medellín: bus, car and tours',
      metaDescription:
        'Options to get to Guatapé from Medellín: bus from Terminal del Norte, car on the highway, day tour and transport tips.',
      title: 'How to Get to Guatapé from Medellín',
      intro:
        'Guatapé is about two hours from Medellín, which makes it a very popular day trip. Here are the main transport options to plan your visit.',
      sections: [
        {
          id: 'bus',
          heading: 'By bus from Terminal del Norte',
          body: 'Frequent buses to Guatapé leave from Medellín’s Terminal del Norte. The trip takes about two hours, depending on traffic.',
        },
        {
          id: 'carro',
          heading: 'By car',
          body: 'Via the highway, the drive takes around two hours. In town there is parking near the center; arrive early in high season.',
        },
        {
          id: 'tour',
          heading: 'Day tour',
          body: 'Many agencies offer day trips from Medellín that include transport, El Peñol rock and sometimes the boat ride.',
        },
        {
          id: 'consejos',
          heading: 'Practical tips',
          body: 'Leave early to make the most of the day, confirm return times, and consider combining the town with El Peñol rock on the same visit.',
        },
      ],
      faq: [
        {
          question: 'How long is the trip?',
          answer:
            'About 2 hours by bus or car, depending on traffic.',
        },
        {
          question: 'Is there a direct bus?',
          answer:
            'Yes, there are frequent departures from Medellín’s Terminal del Norte to Guatapé.',
        },
        {
          question: 'Can you do it in one day?',
          answer:
            'Yes, it is the most common option: many visitors make the round trip on the same day.',
        },
        {
          question: 'Where do you buy the ticket?',
          answer:
            'At the Medellín terminal; confirm schedules and fares on official sources before your trip.',
        },
      ],
    },
  },
];

export const TOPIC_SLUGS: TopicSlug[] = TOPICS.map((t) => t.slug);

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export const SITE_URL = 'https://www.plazoletadeloszocalos.com';
