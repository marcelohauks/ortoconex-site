'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowLeft, Menu, Search, X } from 'lucide-react';

import { SiteConstrucaoLangSwitch } from './SiteConstrucaoLangSwitch';
import { SiteConstrucaoNavBar } from './SiteConstrucaoNavBar';
import { useLocale } from './LocaleContext';

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
      className={`relative w-full min-w-0 ${
        searchBelowMenu ? 'max-w-xl' : 'md:max-w-md'
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
        className="w-full min-h-[44px] rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-base text-slate-800 shadow-inner outline-none transition placeholder:text-slate-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/30 sm:min-h-0 sm:py-2 sm:text-sm"
        aria-label={t.searchPlaceholder}
        enterKeyHint="search"
      />
    </form>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:flex-wrap sm:items-center sm:gap-3">
            <Link
              href={backHref}
              className="inline-flex max-w-[40%] shrink-0 items-center gap-1 text-xs font-medium text-primary-700 transition hover:text-primary-900 min-[400px]:text-sm sm:max-w-none"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
              <span className="truncate">{backLabel}</span>
            </Link>
            <Link
              href="/site-construcao"
              className="group flex min-w-0 flex-1 items-center gap-2 sm:ml-0 sm:shrink-0 sm:gap-3"
            >
              <span className="header-logo-float h-11 w-11 sm:h-[4.25rem] sm:w-[4.25rem]">
                <Image
                  src="/images/branding/ortoconex-logo.png"
                  alt="ORTOCONEX"
                  width={68}
                  height={68}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="truncate font-sora text-[1.15rem] font-bold tracking-[0.05em] text-slate-800 sm:text-[1.9125rem]">
                ORTOCONEX
              </span>
            </Link>

            {!searchBelowMenu ? (
              <div className="hidden min-w-0 flex-1 sm:flex sm:max-w-xl sm:justify-center sm:pl-2">
                {searchField}
              </div>
            ) : null}

            <div
              className={`flex shrink-0 items-center gap-1.5 sm:gap-2 ${
                searchBelowMenu ? 'ml-auto' : ''
              }`}
            >
              <SiteConstrucaoLangSwitch
                locale={locale}
                setLocale={setLocale}
                t={t}
              />
              <button
                type="button"
                className="inline-flex h-11 min-h-[44px] min-w-[44px] touch-manipulation items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 sm:hidden"
                onClick={() => setNavMobileOpen((o) => !o)}
                aria-expanded={navMobileOpen}
                aria-label={
                  navMobileOpen
                    ? t.accessibility.navClose
                    : t.accessibility.navOpen
                }
              >
                {navMobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {!searchBelowMenu ? (
            <div className="w-full min-w-0 sm:hidden">{searchField}</div>
          ) : null}
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
