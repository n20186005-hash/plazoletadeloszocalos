export type TopicSlug =
  | 'que-ver-en-guatape'
  | 'zocalos-de-guatape'
  | 'calle-del-recuerdo'
  | 'calle-de-las-sombrillas-guatape'
  | 'piedra-del-penol'
  | 'como-llegar-desde-medellin'
  | 'iglesia-nuestra-senora-del-carmen'
  | 'malecon-de-guatape';

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
    slug: 'calle-de-las-sombrillas-guatape',
    es: {
      label: 'Calle de las Sombrillas',
      metaTitle: 'Calle de las Sombrillas Guatapé: ubicación, fotos y ruta',
      metaDescription: 'Dónde está la Calle de las Sombrillas en Guatapé, cómo llegar desde la Plazoleta de los Zócalos, qué fotografiar y cómo incluirla en un paseo a pie.',
      title: 'Calle de las Sombrillas de Guatapé',
      intro: 'Un techo de paraguas de colores sobre una calle empedrada, fachadas con zócalos y pequeños comercios convierten la Calle de las Sombrillas en una parada fotográfica del centro de Guatapé. La zona está vinculada a la Plazoleta de los Zócalos y a la Calle del Recuerdo, pero conviene usar su propio nombre al buscar la ubicación en el mapa.',
      sections: [
        { id: 'historia', heading: 'De tradición de zócalos a calle fotográfica', body: 'La identidad visual de Guatapé nació de los relieves y colores que decoran las partes bajas de las casas desde comienzos del siglo XX. El dosel de paraguas es una intervención decorativa más reciente: no debe confundirse con el origen de los zócalos. Observa ambos elementos en un mismo recorrido y distingue el patrimonio de fachada de la decoración suspendida.' },
        { id: 'arquitectura', heading: 'Fachadas, empedrado y cubierta de paraguas', body: 'Mira hacia arriba para apreciar la repetición de colores en el dosel y después a nivel de la calle para descubrir marcos de puertas, balcones, macetas y zócalos narrativos. La calle reúne comercio y viviendas: respeta puertas, vitrinas y el paso de residentes.' },
        { id: 'observacion', heading: 'Qué observar de cerca', body: 'Los paneles de los zócalos muestran motivos de oficios, naturaleza y vida local. Compara cómo cambian las figuras de un frente al siguiente. El contraste entre las sombrillas, las paredes pintadas y el adoquín permite varias fotografías diferentes sin salir de la misma calle.' },
        { id: 'ruta', heading: 'Ruta corta desde el Parque Principal', body: 'Comienza frente a la Iglesia de Nuestra Señora del Carmen, sigue hacia la Plazoleta de los Zócalos, recorre la Calle de las Sombrillas y enlaza con la Calle del Recuerdo. Si tienes más tiempo, continúa hasta el malecón para ver el embalse. Se trata de un paseo por el centro; la Piedra del Peñol exige un traslado distinto.' },
        { id: 'fotos', heading: 'Tres encuadres para fotografiarla', body: 'Desde un extremo de la vía, coloca el techo de paraguas como línea de fuga; a media calle encuadra un zócalo y las sombrillas en la misma imagen; desde un lateral, captura balcones y plantas sin bloquear el paso. La luz de primera hora ayuda a reducir grupos en el fondo, aunque la colocación de los paraguas puede cambiar.' },
        { id: 'visita', heading: 'Consejos prácticos y acceso', body: 'Es un espacio de paseo público, sin taquilla para caminar por la calle. Usa calzado cómodo para el empedrado; después de la lluvia puede estar resbaladizo. Las compras y consumiciones en establecimientos cercanos se pagan por separado. No dependas de una instalación decorativa concreta para planificar toda la visita.' },
      ],
      faq: [
        { question: '¿Dónde queda la Calle de las Sombrillas de Guatapé?', answer: 'En el centro histórico, junto al entorno de la Plazoleta de los Zócalos. Busca el nombre específico en Google Maps y confirma el acceso peatonal al llegar.' },
        { question: '¿Es lo mismo que la Calle del Recuerdo?', answer: 'Son referencias turísticas muy próximas que a veces aparecen asociadas. La Calle del Recuerdo destaca por su memoria y sus fachadas; la Calle de las Sombrillas se busca por su cubierta de paraguas.' },
        { question: '¿Hay que pagar para hacer fotos?', answer: 'No hay boleto para caminar por el espacio público. Respeta la privacidad y los servicios de comercios privados.' },
        { question: '¿Cuánto tiempo se necesita?', answer: 'Calcula 20–40 minutos para observar los detalles y tomar fotos; añade tiempo para la Plazoleta y la Calle del Recuerdo.' },
      ],
    },
    en: {
      label: 'Guatapé Umbrella Street',
      metaTitle: 'Calle de las Sombrillas, Guatapé: Map, Photos & Walking Route',
      metaDescription: 'Find Guatapé’s colorful Umbrella Street, see what makes its zócalos and hanging umbrellas special, and follow an easy walk from the main square.',
      title: 'Calle de las Sombrillas: Guatapé Umbrella Street',
      intro: 'Colorful umbrellas hanging above a cobbled lane, painted zócalos and small storefronts make Calle de las Sombrillas one of Guatapé’s distinctive photo stops. It sits by the Zócalos Plaza area and near Calle del Recuerdo, but deserves its own place-specific map search and visitor guide.',
      sections: [
        { id: 'historia', heading: 'From zócalo heritage to a colorful photo street', body: 'The town’s painted baseboards and relief panels became a visual tradition in the early 20th century. The overhead umbrella display is a much newer decorative feature, not the origin of the zócalo tradition. Look at the street in layers: the older craft at wall level and the more recent color overhead.' },
        { id: 'arquitectura', heading: 'Cobblestones, facades and the umbrella canopy', body: 'Look up for the repeated umbrella shapes, then down at the painted lower walls. Doors, balconies, flowerpots and reliefs create a compact streetscape. Shops and residences share this space, so leave entrances and the walking lane clear.' },
        { id: 'observacion', heading: 'Details worth a closer look', body: 'Zócalo panels often depict trades, plants, animals and everyday life. Compare one building with the next to see different subjects and framing techniques. The combination of floating umbrellas and traditional reliefs creates distinct subjects for both wide and close-up photographs.' },
        { id: 'ruta', heading: 'Easy walking route from Main Park', body: 'Begin at Nuestra Señora del Carmen Church, walk toward Plazoleta de los Zócalos, explore the Umbrella Street area and continue to Calle del Recuerdo. Extend the walk to the waterfront if time allows. El Peñol Rock is outside the compact town center and needs separate transport.' },
        { id: 'fotos', heading: 'Three useful camera positions', body: 'At one end of the lane, use the umbrella canopy as leading lines. Halfway along, frame relief panels under the umbrellas; from the side, include balconies and planters. Early hours often mean a clearer shot, but installations and pedestrian traffic can change.' },
        { id: 'visita', heading: 'Access, weather and respectful visits', body: 'Walking the public lane requires no admission ticket. Wear comfortable shoes on uneven cobbles, which can be slippery after rain. Food, shopping and other private services cost extra. Treat the umbrellas as a changeable installation rather than a guaranteed permanent feature.' },
      ],
      faq: [
        { question: 'Where is Guatapé Umbrella Street?', answer: 'It is in the historic center around Plazoleta de los Zócalos. Use the dedicated Calle de las Sombrillas map search and follow pedestrian access signs on arrival.' },
        { question: 'Is it the same as Calle del Recuerdo?', answer: 'They are neighboring sightseeing references sometimes mentioned together. Calle del Recuerdo is known for heritage facades, while Umbrella Street is identified by its overhead decorations.' },
        { question: 'Is Umbrella Street free?', answer: 'There is no admission fee for a stroll on the public lane; purchases from nearby shops are separate.' },
        { question: 'How long should I spend here?', answer: 'Allow roughly 20–40 minutes for details and photos, plus time for the adjacent square and Calle del Recuerdo.' },
      ],
    },
  },
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
          id: 'planifica-guatape',
          heading: 'Guatapé, Colombia: cómo organizar la primera visita',
          body: 'Guatapé es un municipio del oriente de Antioquia, a orillas del embalse Peñol–Guatapé. Combina un centro de calles caminables y zócalos decorados con excursiones separadas a la Piedra del Peñol. Para una primera visita, elige si dedicarás la mañana al ascenso y la tarde al pueblo, o si prefieres quedarte en sus plazas, calles y malecón. El transporte desde Medellín llega por carretera, con salida habitual desde la Terminal del Norte.',
        },
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
          id: 'planifica-guatape',
          heading: 'Guatapé, Colombia: planning your first visit',
          body: 'Guatapé is a town in eastern Antioquia beside the Peñol–Guatapé Reservoir. Its walkable streets, painted reliefs and waterfront are a different experience from climbing El Peñol Rock outside the center. For one day, consider doing the rock in the morning and the town afterward; if you prefer a gentler visit, focus on the main park, zócalo streets, Umbrella Street and waterfront. Road transport from Medellín commonly starts at the North Bus Terminal.',
        },
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
      metaTitle: 'Piedra del Peñol, Guatapé: subida, precio y cómo llegar',
      metaDescription:
        'Visita la Piedra del Peñol (Peñón de Guatapé): mapa, acceso de pago, subida de unas 740 gradas, vistas al embalse y ruta desde el pueblo.',
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
          id: 'geologia',
          heading: 'El monolito y la historia del paisaje',
          body: 'La Piedra destaca como un gran afloramiento rocoso que sobresale abruptamente del relieve montañoso. La escalera aprovecha una hendidura de la pared; desde la cima se observa cómo el embalse transformó los valles en brazos de agua, islas y penínsulas. El mirador une geología, ingeniería de acceso y paisaje cultural.'
        },
        {
          id: 'seguridad',
          heading: 'Ascenso: esfuerzo, seguridad y alternativas',
          body: 'La subida es prolongada y con escalones estrechos en varios tramos. Haz pausas, lleva agua y evita empezar durante una tormenta. Si tienes movilidad limitada o prefieres no ascender, el monolito también se puede contemplar y fotografiar desde los accesos exteriores permitidos. Comprueba las condiciones de entrada con el operador antes de desplazarte.'
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
      metaTitle: 'Piedra del Peñol, Guatapé: Rock Climb, Tickets & Map',
      metaDescription:
        'Plan a visit to Piedra del Peñol (El Peñón de Guatapé): map, paid entrance, roughly 740 stairs, reservoir viewpoints and transport from town.',
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
          id: 'geologia',
          heading: 'The monolith and the reservoir landscape',
          body: 'The rock rises sharply above the surrounding hills as a massive outcrop. Its staircase follows a fissure in the face. At the summit, study how the reservoir has turned valley contours into islands, peninsulas and winding inlets. The visit connects the geology of the rock with the engineered climb and a transformed cultural landscape.'
        },
        {
          id: 'seguridad',
          heading: 'Climbing safely and alternatives to the summit',
          body: 'The climb is sustained, with narrow steps along parts of the route. Take breaks, bring water and avoid starting in stormy conditions. Travelers who cannot or do not want to climb can still admire and photograph the monolith from permitted exterior areas. Check the operator’s access notices before departure.'
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
  {
    slug: 'iglesia-nuestra-senora-del-carmen',
    es: {
      label: 'Iglesia de Nuestra Señora del Carmen',
      metaTitle: 'Iglesia de Nuestra Señora del Carmen de Guatapé: historia y visita',
      metaDescription: 'Guía de la iglesia del Parque Principal de Guatapé: arquitectura, detalles, acceso, ruta y fotografías.',
      title: 'Iglesia de Nuestra Señora del Carmen',
      intro: 'La iglesia preside el Parque Principal de Guatapé y sirve de referencia para orientarse por el centro histórico. Su fachada, la plaza y las casas con zócalos permiten observar en un solo paseo la relación entre arquitectura religiosa y vida cotidiana.',
      sections: [
        { id: 'historia', heading: 'Historia y contexto del templo', body: 'La devoción a Nuestra Señora del Carmen ocupa un lugar importante en el patrimonio religioso local. El edificio se integra en el centro tradicional del municipio; conviene distinguir la historia de la comunidad parroquial de las reformas que pueda haber tenido el templo a lo largo del tiempo.' },
        { id: 'arquitectura', heading: 'Fachada y espacio urbano', body: 'Observa la composición simétrica del frente, las torres y el acceso principal. Desde la plaza se aprecia cómo su volumen contrasta con las edificaciones bajas, coloridas y decoradas con zócalos que forman el entorno.' },
        { id: 'interior', heading: 'Qué observar durante la visita', body: 'Si hay acceso y no se celebra un oficio, mira la disposición de la nave, la iluminación y los elementos devocionales. Mantén silencio y evita el uso de flash durante las ceremonias.' },
        { id: 'ruta', heading: 'Un paseo cultural desde la plaza', body: 'Empieza frente a la fachada, camina alrededor del Parque Principal, compara los zócalos de las calles contiguas y continúa hacia la Calle del Recuerdo y la Plazoleta de los Zócalos.' },
      ],
      faq: [
        { question: '¿Se puede visitar el interior?', answer: 'Depende de las celebraciones y del horario parroquial. Confirma la apertura en el lugar y respeta los oficios.' },
        { question: '¿Hay que pagar entrada?', answer: 'La observación exterior desde el Parque Principal es gratuita. Las actividades religiosas y eventuales visitas especiales se rigen por las disposiciones de la parroquia.' },
        { question: '¿Cuál es el mejor punto para fotografiar?', answer: 'El frente del Parque Principal permite encuadrar las torres y el conjunto urbano; evita bloquear la entrada.' },
      ],
    },
    en: {
      label: 'Our Lady of Carmen Church',
      metaTitle: 'Our Lady of Carmen Church, Guatapé: heritage and visitor guide',
      metaDescription: 'Explore Guatapé’s central church: architectural details, historic context, access, photos and a short walking route.',
      title: 'Our Lady of Carmen Church',
      intro: 'Facing Guatapé’s Main Park, Our Lady of Carmen Church is a natural landmark for exploring the historic center. Its facade, the square and the surrounding zócalo-covered houses reveal the relationship between religious architecture and everyday town life.',
      sections: [
        { id: 'historia', heading: 'The church in local history', body: 'Devotion to Our Lady of Carmen forms part of the town’s religious heritage. The church sits at the heart of the traditional center; the history of the parish and any subsequent building alterations are distinct stories worth exploring.' },
        { id: 'arquitectura', heading: 'Facade and townscape', body: 'Look at the balanced front elevation, towers and entrance. From the park, the church’s scale contrasts with the lower, brightly painted facades and decorative zócalos around it.' },
        { id: 'interior', heading: 'Details to notice inside', body: 'If entry is permitted and no service is underway, observe the nave, light and devotional features. Keep quiet and avoid flash photography during ceremonies.' },
        { id: 'ruta', heading: 'A cultural walk from the park', body: 'Begin opposite the church facade, stroll around the Main Park, compare zócalos on adjacent streets and continue toward Calle del Recuerdo and Zócalos Plaza.' },
      ],
      faq: [
        { question: 'Can you go inside?', answer: 'Access depends on parish hours and services. Check locally and respect worship activities.' },
        { question: 'Is there an admission fee?', answer: 'Viewing the exterior from the Main Park is free. Parish activities and any special visits follow the church’s own arrangements.' },
        { question: 'Where is the best photo spot?', answer: 'The opposite side of Main Park frames the towers and surrounding streets; do not block the entrance.' },
      ],
    },
  },
  {
    slug: 'malecon-de-guatape',
    es: {
      label: 'Malecón de Guatapé',
      metaTitle: 'Malecón de Guatapé: paseo junto al embalse y ruta a pie',
      metaDescription: 'Paseo del malecón de Guatapé: vistas del embalse, embarcaderos, fotografía, transporte y consejos de visita.',
      title: 'Malecón de Guatapé',
      intro: 'El malecón conecta el pueblo con el paisaje del embalse Peñol–Guatapé. Es una caminata accesible desde el centro para ver las orillas, las embarcaciones y el contraste entre las montañas verdes y la arquitectura urbana.',
      sections: [
        { id: 'paisaje', heading: 'El embalse como paisaje cultural', body: 'Las aguas y las penínsulas transformaron la vida y la economía de la zona. Desde el paseo se perciben los cambios del relieve, el trazado de la orilla y la relación actual del municipio con el turismo y la navegación.' },
        { id: 'diseno', heading: 'Paseo ribereño y miradores', body: 'Observa las barandas, áreas de descanso, pequeños embarcaderos y perspectivas abiertas. El malecón es un espacio de encuentro; ciertas instalaciones y operadores funcionan con horarios propios.' },
        { id: 'actividad', heading: 'Qué hacer sin tomar un barco', body: 'Puedes recorrer el borde del agua, fotografiar las embarcaciones desde tierra y comparar las vistas hacia el Peñón. Las excursiones acuáticas son opcionales y se contratan por separado.' },
        { id: 'ruta', heading: 'Ruta desde la Plazoleta de los Zócalos', body: 'Empieza en las escaleras pintadas, visita la Calle del Recuerdo, baja hacia el malecón y termina con una vista amplia sobre el embalse. Evita los muelles operativos sin autorización.' },
      ],
      faq: [
        { question: '¿El paseo es gratuito?', answer: 'Caminar por los sectores públicos del malecón no requiere boleto; paseos en barco y servicios comerciales tienen tarifas propias.' },
        { question: '¿Cuánto tiempo se necesita?', answer: 'Reserva entre 45 y 90 minutos para caminar y tomar fotos, más tiempo si contratas una actividad acuática.' },
        { question: '¿Cómo llegar desde el centro?', answer: 'El malecón se alcanza a pie desde el Parque Principal y la Plazoleta; utiliza la ubicación específica para elegir la entrada más conveniente.' },
      ],
    },
    en: {
      label: 'Guatapé Waterfront',
      metaTitle: 'Guatapé Waterfront: reservoir promenade and walking guide',
      metaDescription: 'Explore Guatapé’s waterfront: reservoir scenery, docks, photo spots, access and a walking route from the old town.',
      title: 'Guatapé Waterfront Promenade',
      intro: 'The waterfront promenade connects the town with the Peñol–Guatapé reservoir. A short walk from the center opens views of the shoreline, boats and green hills rising above the brightly painted streets.',
      sections: [
        { id: 'paisaje', heading: 'A landscape shaped by the reservoir', body: 'The reservoir’s waters and peninsulas changed local life and the economy. Along the promenade you can read the contours of the shore and see how boating and tourism now interact with the town.' },
        { id: 'diseno', heading: 'Promenade, seating and viewpoints', body: 'Notice the railings, resting spots, small docks and open views. This is a shared public space, while individual operators and facilities may keep separate opening times.' },
        { id: 'actividad', heading: 'What to do without a boat trip', body: 'Stroll beside the water, photograph boats from the shore and compare views toward the rock. Water excursions are optional and booked separately.' },
        { id: 'ruta', heading: 'Walk from Zócalos Plaza', body: 'Begin at the painted steps, visit Calle del Recuerdo, walk down to the waterfront and end at a broad reservoir viewpoint. Stay clear of working docks unless access is permitted.' },
      ],
      faq: [
        { question: 'Is the waterfront free?', answer: 'Walking through public promenade areas is free; boat rides and commercial services charge separately.' },
        { question: 'How long should I allow?', answer: 'Allow 45–90 minutes for a stroll and photos, longer if booking an activity on the water.' },
        { question: 'How do I get there from downtown?', answer: 'Walk from the Main Park or Zócalos Plaza, using the dedicated map link to pick a suitable access point.' },
      ],
    },
  },
];

export const TOPIC_SLUGS: TopicSlug[] = TOPICS.map((t) => t.slug);

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export const SITE_URL = 'https://www.plazoletadeloszocalos.com';
