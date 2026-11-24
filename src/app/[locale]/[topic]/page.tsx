import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopicPage from '@/components/TopicPage';
import { RegionalPage } from '@/components/RegionalPage';
import { getTopic, SITE_URL } from '@/lib/topics';
import { allSlugs, contentFor, languages, type Language } from '@/lib/regional';

export const dynamicParams = false;
export function generateStaticParams() {
  return languages.flatMap(locale=>allSlugs.map(topic=>({locale,topic})));
}
type Props = {params:Promise<{locale:string;topic:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata> {
  const {locale,topic}=await params;
  if (!languages.includes(locale as Language)||!allSlugs.includes(topic)) return {};
  const c=contentFor(topic,locale as Language);
  const legacy=getTopic(topic)?.[locale as 'es'|'en'];
  const title=c?.name??legacy?.metaTitle, description=c?.body??legacy?.metaDescription;
  const url=(lang:string)=>`${SITE_URL}/${lang}/${topic}`;
  return {title,description,alternates:{canonical:url(locale),languages:{en:url('en'),es:url('es'),zh:url('zh'),'x-default':url('es')}},
    openGraph:{title,description,url:url(locale),siteName:'Plazoleta de Los Zócalos',type:'article',locale:({es:'es_CO',en:'en_US',zh:'zh_CN'})[locale as Language]}};
}
export default async function TopicRoute({params}:Props) {
  const {locale,topic}=await params;
  const lang=locale as Language;
  if (!languages.includes(lang)||!allSlugs.includes(topic)) notFound();
  const c=contentFor(topic,lang);
  return <><Header solid/><main>{c?<RegionalPage lang={lang} slug={topic}/>:<TopicPage topic={getTopic(topic)!} locale={lang as 'es'|'en'}/>}</main><Footer/></>;
}
