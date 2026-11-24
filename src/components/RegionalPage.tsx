import type { ReactNode } from 'react';
import { contentFor, listing, relatedPlaces, type Language } from '@/lib/regional';
import profiles from '@/lib/visit-profiles.json';
import { mapLink } from '@/lib/visit-details';

const labels = {
  en: ['Explore Guatapé', 'Map and directions', 'Read visitor reviews', 'Explore', 'Management and access', 'Visitor essentials', 'Local name', 'Location', 'Site type', 'Suggested stay', 'minutes', 'Access conditions', 'Opening hours', 'Tickets and costs', 'Getting there', 'History and things to notice', 'Walking route and visitor advice', 'Photo viewpoints', 'Where to stay', 'Photo gallery', 'Visitor reviews', 'Navigation guide', 'Visitor questions', 'Local visitor information', 'Nearby places', 'Photography', 'Checked 24 November 2026'],
  es: ['Explorar Guatapé', 'Mapa y cómo llegar', 'Leer opiniones de visitantes', 'Explorar', 'Gestión y acceso', 'Información básica', 'Nombre local', 'Ubicación', 'Tipo de lugar', 'Estancia sugerida', 'minutos', 'Condiciones de acceso', 'Horarios de apertura', 'Entradas y precios', 'Cómo llegar', 'Historia y detalles que observar', 'Ruta y recomendaciones', 'Puntos para tomar fotos', 'Dónde alojarse', 'Galería de fotos', 'Opiniones de visitantes', 'Guía de navegación', 'Preguntas frecuentes', 'Información local de visita', 'Lugares cercanos', 'Fotografía', 'Consulta del 24 de noviembre de 2026'],
  zh: ['探索瓜塔佩','地图与导航','查看游客评价','探索','管理与开放范围','基础信息','当地名称','所在地区与地址','景点类型','建议停留','分钟','到访条件','开放时间','门票与费用','交通方式','历史与现场看点','游览路线与须知','拍照机位','住宿建议','实景照片','游客评价','交通指南','常见问题','当地参观资料','周边游览','摄影','资料核对日期 2026年11月24日'],
};
function Section({title,children}:{title:string;children:ReactNode}) {
  return <section className="mb-10"><h2 className="font-display text-2xl font-semibold mb-4">{title}</h2><div className="leading-relaxed space-y-3">{children}</div></section>;
}
const townZh:Record<string,string>={'Guatapé':'瓜塔佩','El Peñol':'埃尔佩尼奥尔','San Rafael':'圣拉斐尔','Marinilla':'马里尼利亚'};
function firstSentence(s:string) {
  const m=s.match(/^.*?[。.!?](?:\s|$|(?<=[。]))/u);
  return m?.[0].trim() || s;
}
export function RegionalPage({slug,lang}:{slug:string;lang:Language}) {
  const c=contentFor(slug,lang)!;
  const [home,map,reviews,explore,management,essential,local,location,type,stay,minutes,conditions,open,tickets,transport,history,route,spots,lodging,gallery,visitor,guide,questions,source,near,photograph,checked]=labels[lang];
  const p=profiles[c.profile as keyof typeof profiles][lang];
  const town=lang==='zh' ? townZh[c.town] : c.town;
  const dest=mapLink(c.map);
  const entry=firstSentence(c.walk);
  const hours=slug==='museo-historico-de-el-penol'?{
    es:'Jueves a domingo de 13:30 a 17:00. Martes y miércoles reciben investigadores con cita previa. Los lunes cierra; los grupos siempre necesitan reserva.',
    en:'Thursday to Sunday, 1:30–5:00 pm. Tuesday and Wednesday are for researchers by appointment. Closed Mondays. All groups must book ahead.',
    zh:'公众开放为周四至周日13:30到17:00，周二与周三接待预约研究者，周一闭馆。团体均须预约。'
  }[lang]:p.hours;
  const arrival={
    es:`Desde Medellín organiza el trayecto por carretera hasta ${town}. Antes de salir de la cabecera, muestra al conductor el nombre local «${c.localName}» y acuerda el regreso si te deja fuera del casco urbano.`,
    en:`From Medellín arrange road transport to ${town}. Give the driver the local name “${c.localName}” before leaving town. If dropped outside the urban centre, agree on a return pickup.`,
    zh:`从麦德林出发可走公路前往${town}。接驳前向司机出示当地名称“${c.localName}”，若下车点在镇外，应先约定返程接车地点。`
  }[lang];
  const nearbyBase=c.town==='Guatapé'?{en:'El Peñol',es:'El Peñol',zh:'埃尔佩尼奥尔'}[lang]:{en:'Guatapé',es:'Guatapé',zh:'瓜塔佩'}[lang];
  const sleep={
    es:`Alojarse en el centro de ${town} facilita organizar el primer traslado a ${c.localName} y encontrar comida al regreso. ${nearbyBase} es otra base para un recorrido por varios municipios: reserva espacio para el trayecto por carretera y comprueba la última conexión antes de salir.`,
    en:`Staying in central ${town} makes it easier to arrange the first leg to ${c.localName} and return for a meal. ${nearbyBase} suits a trip that takes in several towns. Allow for the extra road journey and check the last return connection before setting off.`,
    zh:`住在${town}镇中心，便于安排前往${c.name}的第一段交通和返程后的用餐。以${nearbyBase}为住宿地则更适合串游多个城镇，须为公路往返留出时间，出门前核对最后一班回程车。`
  }[lang];
  const faq=[[c.q,c.a],[c.extraQ,c.extraA],[c.photoQ,c.photo]];
  const data={'@context':'https://schema.org','@type':'FAQPage',mainEntity:faq.map(([name,answer])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text:answer}}))};
  const related=relatedPlaces(c.town,slug);
  return <article className="section-padding" style={{background:'var(--bg-primary)'}}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <nav className="mb-6 text-sm"><a className="underline" href={`/${lang}#explore`}>{home}</a> · {town}</nav>
      <header className="mb-10"><h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{c.name}</h1>
        <p className="text-lg leading-relaxed mb-3">{town} · {firstSentence(c.body)}</p>
        <div className="flex flex-wrap gap-5 mb-3"><a className="underline" href={dest}>{map}</a><a className="underline" href={dest}>{reviews}</a></div>
        <p>{open} · {firstSentence(hours)}</p></header>
      <section className="rounded-2xl p-6 sm:p-8 mb-10" style={{background:'var(--bg-tertiary)'}}>
        <h2 className="font-display text-2xl font-semibold mb-4">{explore} {c.name}</h2><p>{entry} {c.features}</p>
        <h3 className="font-semibold mt-5 mb-2">{management}</h3><p>{c.manager}</p>
      </section>
      <Section title={essential}><dl className="rounded-xl overflow-hidden">{[[local,c.localName],[location,c.address],[type,p.kind],[stay,`${c.minutes} ${minutes}`],[conditions,p.access]].map(([k,v],i)=><div key={k} className="grid sm:grid-cols-[165px_1fr] gap-2 p-4" style={{background:i%2?'var(--bg-primary)':'var(--bg-secondary)'}}><dt className="font-semibold">{k}</dt><dd>{v}</dd></div>)}</dl></Section>
      <Section title={open}><p>{hours}</p></Section>
      <Section title={tickets}><p>{p.price}</p></Section>
      <Section title={transport}><p>{arrival}</p><p>{entry}</p></Section>
      <Section title={history}><p>{c.body}</p></Section>
      <Section title={route}><p>{c.walk}</p><p>{c.finish}</p>{'tip' in c && c.tip && <p>{c.tip}</p>}</Section>
      <Section title={spots}><p>{c.photo}</p></Section>
      <Section title={lodging}><p>{sleep}</p></Section>
      <Section title={gallery}>{c.photos.map((src,i)=><figure key={src}><img className="w-full rounded-xl" src={src} alt={`${c.caption} · ${c.name} (${i+1})`} loading="lazy"/><figcaption className="text-sm mt-2">{c.caption} · {town}{c.credit ? ` · ${photograph} · ${c.credit}`:''}</figcaption></figure>)}</Section>
      <Section title={visitor}><a className="underline" href={dest}>{reviews} · Google Maps</a></Section>
      <Section title={guide}><p>{c.address}</p><p>{entry}</p><a className="underline" href={dest}>{map} · Google Maps</a></Section>
      <Section title={questions}>{faq.map(([q,a])=><details key={q} className="p-4 mb-2 rounded-xl" style={{background:'var(--bg-secondary)'}}><summary className="cursor-pointer font-medium">{q}</summary><p className="mt-2">{a}</p></details>)}</Section>
      <Section title={near}><div className="flex flex-wrap gap-5">{related.map(key=><a className="underline" key={key} href={`/${lang}/${key}`}>{listing(key,lang).name}</a>)}<a className="underline" href={`/${lang}#explore`}>{home}</a></div></Section>
      <footer className="text-sm"><a className="underline" href={c.source}>{source}</a> · {checked}</footer>
    </div>
  </article>;
}
