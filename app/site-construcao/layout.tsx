import type { Metadata } from 'next';

import { getLocaleFromCookies } from './get-locale-server';
import { SiteConstrucaoHashScroll } from './SiteConstrucaoHashScroll';
import SiteConstrucaoProviders from './SiteConstrucaoProviders';

export const metadata: Metadata = {
  title: {
    default: 'Ortoconex — Prévia / Preview',
    template: '%s | Ortoconex',
  },
  description:
    'Ortoconex — suprimentos industriais. Prévia do site / Industrial supplies — site preview.',
  robots: { index: false, follow: false },
};

export default async function SiteConstrucaoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const initialLocale = await getLocaleFromCookies();

  return (
    <SiteConstrucaoProviders initialLocale={initialLocale}>
      <SiteConstrucaoHashScroll />
      {children}
    </SiteConstrucaoProviders>
  );
}
