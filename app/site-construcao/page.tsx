import type { Metadata } from 'next';

import { getLocaleFromCookies } from './get-locale-server';
import { SiteConstrucaoClient } from './SiteConstrucaoClient';
import { translations } from './translations';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookies();
  const m = translations[locale].siteMeta;
  return {
    title: m.homeTitle,
    description: m.homeDescription,
  };
}

export default function SiteConstrucaoPage() {
  return <SiteConstrucaoClient />;
}
