'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import type { Locale, Messages } from './translations';
import { translations } from './translations';
import { ORTOCONEX_LOCALE_COOKIE } from './locale-cookie';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function persistLocalePreference(locale: Locale) {
  if (typeof document === 'undefined') return;
  try {
    localStorage.setItem(ORTOCONEX_LOCALE_COOKIE, locale);
  } catch {
    /* ignore */
  }
  document.cookie = `${ORTOCONEX_LOCALE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function LocaleProvider({
  children,
  initialLocale = 'pt',
}: {
  children: ReactNode;
  /** Idioma vindo do cookie no servidor (alinha SSR com metadados). */
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocalePreference(next);
    document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en';
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return ctx;
}
