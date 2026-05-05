'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowLeft, Menu, Search, X } from 'lucide-react';

import { SiteConstrucaoNavBar } from './SiteConstrucaoNavBar';
import { useLocale } from './LocaleContext';

const FLAG_BR = 'https://flagcdn.com/w40/br.png';
const FLAG_US = 'https://flagcdn.com/w40/us.png';

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: (e: FormEvent) => void;
  backHref: string;
  backLabel: string;
  /** Na página de produto: busca sai do topo e vai abaixo do menu com título. */
  searchBelowMenu?: boolean;
};

export function ProdutosHeader({
  search,
  onSearchChange,
  onSearchSubmit,
  backHref,
  backLabel,
  searchBelowMenu = false,
}: Props) {
  const { locale, setLocale, t } = useLocale();
  const [navMobileOpen, setNavMobileOpen] = useState(false);

  const searchField = (
    <form
      onSubmit={onSearchSubmit}
      className={`relative w-full ${
        searchBelowMenu ? 'max-w-xl' : 'min-w-[200px] flex-1 md:max-w-md md:flex-none'
      }`}
    >
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        aria-hidden
      />
      <input
        type="search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={t.searchPlaceholder}
        className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-800 shadow-inner outline-none transition placeholder:text-slate-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/30"
        aria-label={t.searchPlaceholder}
      />
    </form>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={backHref}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary-700 transition hover:text-primary-900"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {backLabel}
          </Link>
          <Link
            href="/site-construcao"
            className="flex shrink-0 items-center gap-3 sm:ml-2 sm:gap-4"
          >
            <Image
              src="/images/branding/ortoconex-logo.png"
              alt="ORTOCONEX"
              width={68}
              height={68}
              className="h-[3.825rem] w-[3.825rem] object-contain sm:h-[4.25rem] sm:w-[4.25rem]"
            />
            <span className="font-sora text-[1.434375rem] font-bold tracking-[0.05em] text-slate-800 sm:text-[1.9125rem] leading-none">
              ORTOCONEX
            </span>
          </Link>

          {!searchBelowMenu ? searchField : null}

          <div
            className={`flex shrink-0 items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-0.5 ${
              searchBelowMenu ? 'ml-auto' : ''
            }`}
          >
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

          <button
            type="button"
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 sm:hidden ${
              searchBelowMenu ? '' : 'ml-auto'
            }`}
            onClick={() => setNavMobileOpen((o) => !o)}
            aria-expanded={navMobileOpen}
            aria-label={
              navMobileOpen ? t.accessibility.navClose : t.accessibility.navOpen
            }
          >
            {navMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <SiteConstrucaoNavBar
          mobileOpen={navMobileOpen}
          onLinkClick={() => setNavMobileOpen(false)}
        />

        {searchBelowMenu ? (
          <div className="border-t border-slate-100 pt-4">
            <p className="mb-2 text-sm font-semibold tracking-tight text-slate-800">
              {t.products.searchPromptTitle}
            </p>
            {searchField}
          </div>
        ) : null}
      </div>
    </header>
  );
}
