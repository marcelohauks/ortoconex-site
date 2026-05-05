'use client';

import Image from 'next/image';

import type { Locale, Messages } from './translations';

const FLAG_BR = 'https://flagcdn.com/w40/br.png';
const FLAG_US = 'https://flagcdn.com/w40/us.png';

type Props = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Messages;
};

export function SiteConstrucaoLangSwitch({ locale, setLocale, t }: Props) {
  return (
    <div className="flex shrink-0 items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-0.5">
      <button
        type="button"
        onClick={() => setLocale('pt')}
        className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium transition ${
          locale === 'pt'
            ? 'bg-white text-slate-900 shadow-sm'
            : 'text-slate-500 hover:text-slate-800'
        }`}
        aria-pressed={locale === 'pt'}
        aria-label={t.accessibility.langPt}
      >
        <Image
          src={FLAG_BR}
          alt=""
          width={20}
          height={15}
          className="h-3.5 w-5 rounded-sm object-cover shadow-sm"
        />
        PT
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium transition ${
          locale === 'en'
            ? 'bg-white text-slate-900 shadow-sm'
            : 'text-slate-500 hover:text-slate-800'
        }`}
        aria-pressed={locale === 'en'}
        aria-label={t.accessibility.langEn}
      >
        <Image
          src={FLAG_US}
          alt=""
          width={20}
          height={15}
          className="h-3.5 w-5 rounded-sm object-cover shadow-sm"
        />
        EN
      </button>
    </div>
  );
}
