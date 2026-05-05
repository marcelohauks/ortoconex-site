'use client';

import type { ReactNode } from 'react';

import type { Locale } from './translations';
import { LocaleProvider } from './LocaleContext';

export default function SiteConstrucaoProviders({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  return (
    <LocaleProvider initialLocale={initialLocale}>{children}</LocaleProvider>
  );
}
