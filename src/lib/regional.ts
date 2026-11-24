import regional from './regional-places.json';
import chinese from './topics-zh.json';
import { getTopic, TOPIC_SLUGS } from './topics';
import { VISIT_DETAILS } from './visit-details';

export type Language = 'es' | 'en' | 'zh';
export const languages: Language[] = ['es', 'en', 'zh'];
type Copy = {
  name: string; body: string; walk: string; manager: string; q: string; a: string;
  features: string; finish: string; extraQ: string; extraA: string; photo: string; photoQ:string; caption: string; tip?: string;
};
type Entry = {
  name: string; town: string; map: string; image: string; source: string; credit: string;
  minutes: string; profile: string; langs: Record<Language, Copy>;
};
const places: Record<string, Entry> = regional;
export const allSlugs = [...TOPIC_SLUGS, ...Object.keys(places)];
export function contentFor(slug: string, lang: Language) {
  const place = places[slug];
  if (place) {
    return {...place.langs[lang], localName: place.name, address: place.map, town: place.town, map: place.map,
      photos: [place.image], source: place.source, credit: place.credit, minutes: place.minutes, profile: place.profile};
  }
  const old = getTopic(slug);
  if (!old || lang !== 'zh') return undefined;
  const info = VISIT_DETAILS[old.slug];
  return {...chinese[old.slug], localName: info.place, address: info.address, town: 'Guatapé', map: info.mapQuery,
    photos: info.images, source: 'https://turismoguatape.com/', credit: ''};
}
export function listing(slug: string, lang: Language) {
  const copy = contentFor(slug, lang);
  if (copy) return {name: copy.name, image: copy.photos[0], location: copy.town};
  const t = getTopic(slug)!;
  return {name: t[lang as 'es'|'en'].label, image: VISIT_DETAILS[t.slug].images[0], location: VISIT_DETAILS[t.slug].visitTime[lang as 'es'|'en']};
}
export function relatedPlaces(town: string, slug: string) {
  const neighbours = Object.entries(places).filter(([key, place]) => key !== slug && place.town === town).map(([key]) => key);
  const start = Object.keys(places).indexOf(slug);
  return neighbours.length ? [neighbours[Math.max(start, 0) % neighbours.length], ...neighbours.filter(key => key !== neighbours[Math.max(start, 0) % neighbours.length]).slice(0,1)] : ['zocalos-de-guatape'];
}
