import { cookies } from 'next/headers';

import { ORTOCONEX_LOCALE_COOKIE } from './locale-cookie';
import type { Locale } from './translations';

/** Idioma preferido para metadados SSR (cookie definido pelo seletor no cliente). */
export async function getLocaleFromCookies(): Promise<Locale> {
  const jar = await cookies();
  return jar.get(ORTOCONEX_LOCALE_COOKIE)?.value === 'en' ? 'en' : 'pt';
}
