'use client';

import Image from 'next/image';
import { X } from 'lucide-react';

import { DescriptionWithHashtags } from './DescriptionWithHashtags';
import { useLocale } from './LocaleContext';
import {
  buildQuoteWhatsAppUrl,
  productBodyText,
  productTagline,
  productTitle,
  type Product,
} from './products-data';

type Props = {
  product: Product;
  /** Quando definido, exibe botão para voltar à listagem (catálogo com ?p). */
  onDismiss?: () => void;
};

export function ProductDetailSection({ product, onDismiss }: Props) {
  const { t } = useLocale();
  const title = productTitle(product, t);
  const tagline = productTagline(product, t);
  const body = productBodyText(product, t);
  const quoteHref = buildQuoteWhatsAppUrl(product, t);

  const entrance =
    onDismiss != null
      ? {
          shell:
            'motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:transform-none animate-product-detail-shell',
          visual:
            'motion-reduce:animate-none motion-reduce:transform-none animate-product-detail-visual',
          prose:
            'motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:transform-none animate-product-detail-prose',
        }
      : { shell: '', visual: '', prose: '' };

  return (
    <section
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-primary-900/[0.06] ring-1 ring-primary-400/15 ${entrance.shell}`}
    >
      <div className="grid gap-0 lg:grid-cols-2 lg:items-stretch">
        <div
          className={`relative aspect-square overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[320px] ${entrance.visual}`}
        >
          <Image
            src={product.image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
            priority
          />
          {onDismiss ? (
            <button
              type="button"
              onClick={onDismiss}
              className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-slate-700 shadow-md transition hover:bg-white"
              aria-label={t.products.closeModal}
            >
              <X className="h-5 w-5" />
            </button>
          ) : null}
        </div>
        <div
          className={`flex flex-col justify-center gap-4 p-6 sm:p-8 ${entrance.prose}`}
        >
          {onDismiss ? (
            <h2 className="font-sora text-2xl font-bold text-slate-900 sm:text-3xl">
              {title}
            </h2>
          ) : (
            <h1 className="font-sora text-2xl font-bold text-slate-900 sm:text-3xl">
              {title}
            </h1>
          )}
          {tagline ? (
            <p className="text-lg font-medium text-primary-700">{tagline}</p>
          ) : null}
          <DescriptionWithHashtags text={body} />
          <div className="pt-2">
            <a
              href={quoteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-md transition hover:bg-[#20bd5a] sm:w-auto"
            >
              {t.products.requestQuote}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
