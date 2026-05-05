'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Menu,
  Phone,
  Search,
  X,
} from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { ProductTeaserCard } from './ProductTeaserCard';
import { SiteConstrucaoNavBar } from './SiteConstrucaoNavBar';
import { useLocale } from './LocaleContext';
import {
  HOME_PRODUCT_COUNT,
  PRODUCTS,
  productTitle,
} from './products-data';
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80',
];

const FLAG_BR = 'https://flagcdn.com/w40/br.png';
const FLAG_US = 'https://flagcdn.com/w40/us.png';

const WHATSAPP_HREF = 'https://wa.me/5519991299358';
const INSTAGRAM_HREF =
  'https://www.instagram.com/ortoconex?igsh=cmFsdHYxcHN1eTVk';
const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Rua+Antonio+Augusto+185,+Jd+Novo+Campos+Eliseos,+Campinas+-+SP';
const MAPS_EMBED =
  'https://maps.google.com/maps?q=Rua+Antonio+Augusto+185%2C+Campinas+-+SP&hl=pt&z=15&output=embed';

export function SiteConstrucaoClient() {
  const router = useRouter();
  const { locale, setLocale, t } = useLocale();
  const [search, setSearch] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  const previewProducts = PRODUCTS.slice(0, HOME_PRODUCT_COUNT);

  const onSubmitHeaderSearch = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const q = search.trim();
      router.push(
        q === ''
          ? '/site-construcao/produtos'
          : `/site-construcao/produtos?q=${encodeURIComponent(q)}`,
      );
    },
    [router, search],
  );

  const goSlide = useCallback((dir: -1 | 1) => {
    setSlide((s) => (s + dir + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const tmr = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(tmr);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brandLime-50/60 via-slate-50 to-slate-100/90 text-slate-900 antialiased">
      <div className="floating-socials z-[40]">
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="social-floating-button whatsapp-floating-button"
          aria-label={t.accessibility.whatsappFloating}
        >
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/site-construcao"
              className="flex shrink-0 items-center gap-4"
            >
              <Image
                src="/images/branding/ortoconex-logo.png"
                alt="ORTOCONEX"
                width={82}
                height={82}
                className="h-[4.25rem] w-[4.25rem] object-contain sm:h-[4.675rem] sm:w-[4.675rem]"
                priority
              />
              <span className="font-sora text-[1.434375rem] font-bold tracking-[0.06em] text-slate-800 sm:text-[1.9125rem] leading-none">
                ORTOCONEX
              </span>
            </Link>

            <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:max-w-xl sm:justify-center sm:pl-4">
              <form
                onSubmit={onSubmitHeaderSearch}
                className="relative flex min-w-0 max-w-md flex-1"
              >
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden
                />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-800 shadow-inner outline-none ring-primary-500/0 transition placeholder:text-slate-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/30"
                  aria-label={t.searchPlaceholder}
                />
              </form>
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
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 sm:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-label={
                mobileOpen ? t.accessibility.navClose : t.accessibility.navOpen
              }
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <SiteConstrucaoNavBar
            mobileOpen={mobileOpen}
            onLinkClick={() => setMobileOpen(false)}
          />
        </div>
      </header>

      <section className="relative aspect-[21/9] min-h-[220px] w-full max-h-[min(56vh,520px)] overflow-hidden bg-gradient-to-b from-primary-50/40 via-slate-200 to-slate-300/90 sm:min-h-[280px]">
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === slide ? 'z-10 opacity-100' : 'z-0 opacity-0'
            }`}
            aria-hidden={i !== slide}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-primary-900/15 to-transparent" />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-4 pb-10 text-center sm:pb-14">
              <h1 className="max-w-3xl font-sora text-2xl font-bold text-white drop-shadow sm:text-3xl md:text-4xl">
                {i === 0 && t.hero.slide1Title}
                {i === 1 && t.hero.slide2Title}
                {i === 2 && t.hero.slide3Title}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-100/95 sm:text-base">
                {i === 0 && t.hero.slide1Subtitle}
                {i === 1 && t.hero.slide2Subtitle}
                {i === 2 && t.hero.slide3Subtitle}
              </p>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => goSlide(-1)}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-800 shadow-md transition hover:bg-white"
          aria-label={t.accessibility.carouselPrev}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goSlide(1)}
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-800 shadow-md transition hover:bg-white"
          aria-label={t.accessibility.carouselNext}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSlide(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === slide
                  ? 'bg-white shadow-[0_0_0_2px_rgba(249,151,30,0.65)]'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={t.accessibility.carouselSlide.replace(
                '{{n}}',
                String(i + 1),
              )}
            />
          ))}
        </div>
      </section>

      <section
        id="produtos"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6"
      >
        <div className="mb-10 text-center">
          <h2 className="font-sora text-2xl font-bold text-slate-900 sm:text-3xl">
            {t.products.title}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            {t.products.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6 md:gap-y-10">
          {previewProducts.map((product, index) => (
            <ProductTeaserCard
              key={product.id}
              href={`/site-construcao/produtos/${encodeURIComponent(product.id)}`}
              imageSrc={product.image}
              title={productTitle(product, t)}
              priority={index < 4}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/site-construcao/produtos"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary-600 bg-white px-8 py-2.5 text-sm font-semibold text-primary-800 shadow-sm transition hover:bg-brandLime-50 hover:text-primary-900"
          >
            {t.products.verMore}
          </Link>
        </div>
      </section>

      <section
        id="quem-somos"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6"
      >
        <div className="mb-8 text-center">
          <h2 className="font-sora text-2xl font-bold text-slate-900 sm:text-3xl">
            {t.about.title}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80"
              aria-label={t.about.videoCaption}
            >
              <source src="/video/logo-video.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/30 to-transparent" />
          </div>
          <div className="space-y-4 text-slate-600">
            <h3 className="font-sora text-xl font-bold text-slate-900">
              {t.about.heading}
            </h3>
            <p className="leading-relaxed">{t.about.body1}</p>
            <p className="leading-relaxed">{t.about.body2}</p>
          </div>
        </div>
      </section>

      <section
        id="mercados"
        className="scroll-mt-24 border-t border-primary-100/60 bg-gradient-to-br from-brandLime-50/55 via-slate-100/95 to-primary-50/35"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="font-sora text-2xl font-bold text-slate-900 sm:text-3xl">
              {t.markets.title}
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-slate-600">
              {t.markets.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
            {t.markets.items.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-center text-sm font-medium text-slate-800 shadow-sm transition hover:border-primary-200/80 hover:shadow-md hover:shadow-primary-900/5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contato"
        className="relative scroll-mt-24 overflow-hidden border-t border-primary-500/30 text-slate-100"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-900 to-slate-950"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_50%_-15%,rgba(249,151,30,0.22),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_100%_100%,rgba(190,242,100,0.12),transparent_55%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="mb-8 text-center font-sora text-2xl font-bold text-white sm:mb-10 sm:text-3xl">
            {t.footer.title}
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Link
                  href="/site-construcao"
                  className="inline-flex shrink-0 transition hover:opacity-90"
                >
                  <Image
                    src="/images/branding/ortoconex-logo.png"
                    alt="ORTOCONEX"
                    width={48}
                    height={48}
                    className="h-10 w-10 object-contain drop-shadow-md sm:h-11 sm:w-11"
                  />
                </Link>
                <span className="font-sora text-base font-bold tracking-[0.12em] text-white sm:text-lg">
                  ORTOCONEX
                </span>
              </div>
              <p className="flex items-start justify-start gap-2 text-slate-200">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-primary-400"
                  aria-hidden
                />
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left leading-snug text-slate-200 underline-offset-2 transition hover:text-white hover:underline"
                >
                  {t.footer.addressLine1}
                  <br />
                  {t.footer.addressLine2}
                  <span className="mt-1 block text-xs text-primary-300/90">
                    {t.footer.openMaps}
                  </span>
                </a>
              </p>
              <p className="flex items-center gap-2 text-slate-200">
                <Phone
                  size={18}
                  className="shrink-0 text-primary-400"
                  aria-hidden
                />
                <a
                  href="tel:+551922091416"
                  className="transition hover:text-primary-200"
                >
                  {t.footer.phoneLandline}
                </a>
              </p>
              <p className="flex items-center gap-2 text-slate-200">
                <FaWhatsapp
                  size={18}
                  className="shrink-0 text-brandLime-300"
                  aria-hidden
                />
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-brandLime-200"
                >
                  {t.footer.phoneMobile}
                </a>
              </p>
              <p className="flex items-center gap-2 text-slate-200">
                <FaInstagram
                  size={18}
                  className="shrink-0 text-pink-400"
                  aria-hidden
                />
                <a
                  href={INSTAGRAM_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-pink-300"
                  aria-label={t.accessibility.instagramFloating}
                >
                  {t.footer.instagram}
                </a>
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-primary-700/35 shadow-xl shadow-primary-950/40 ring-1 ring-brandLime-400/10">
              <p className="sr-only">{t.footer.mapTitle}</p>
              <iframe
                title={t.footer.mapTitle}
                src={MAPS_EMBED}
                className="h-64 w-full bg-slate-800 md:h-full md:min-h-[260px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-slate-400">
            © {new Date().getFullYear()}{' '}
            <span className="text-primary-200/95">ORTOCONEX</span> —{' '}
            {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
