'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { ProductDetailSection } from './ProductDetailSection';
import { ProductTeaserCard } from './ProductTeaserCard';
import { ProdutosFloatingSocials } from './ProdutosFloatingSocials';
import { ProdutosHeader } from './ProdutosHeader';
import { useLocale } from './LocaleContext';
import {
  CATALOG_INITIAL_COUNT,
  filterProductsByQuery,
  findProductById,
  PRODUCTS,
  productTitle,
  type Product,
} from './products-data';

function buildCatalogProductHref(search: string, productId: string) {
  const params = new URLSearchParams();
  if (search.trim()) params.set('q', search.trim());
  params.set('p', productId);
  return `/site-construcao/produtos?${params.toString()}`;
}

export function ProductsCatalogClient() {
  const { t } = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const qFromUrl = searchParams.get('q') ?? '';
  const [draft, setDraft] = useState(qFromUrl);

  useEffect(() => {
    setDraft(qFromUrl);
  }, [qFromUrl]);

  const selectedId = searchParams.get('p');
  const selected = useMemo(
    () => (selectedId ? findProductById(selectedId) ?? null : null),
    [selectedId],
  );

  const displayList = useMemo(() => {
    if (!draft.trim()) return PRODUCTS.slice(0, CATALOG_INITIAL_COUNT);
    return filterProductsByQuery(PRODUCTS, draft, t);
  }, [draft, t]);

  const others = useMemo(() => {
    if (!selected) return [];
    return displayList.filter((p) => p.id !== selected.id);
  }, [selected, displayList]);

  useEffect(() => {
    if (!selectedId || !selected) return;
    if (!displayList.some((p) => p.id === selected.id)) {
      const params = new URLSearchParams();
      if (draft.trim()) params.set('q', draft.trim());
      const qs = params.toString();
      router.replace(
        qs ? `/site-construcao/produtos?${qs}` : '/site-construcao/produtos',
      );
    }
  }, [selectedId, selected, displayList, draft, router]);

  const pushWithoutProduct = useCallback(() => {
    const params = new URLSearchParams();
    if (draft.trim()) params.set('q', draft.trim());
    const qs = params.toString();
    router.replace(
      qs ? `/site-construcao/produtos?${qs}` : '/site-construcao/produtos',
      { scroll: false },
    );
  }, [router, draft]);

  const onSubmitSearch = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const q = draft.trim();
      router.push(
        q === ''
          ? '/site-construcao/produtos'
          : `/site-construcao/produtos?q=${encodeURIComponent(q)}`,
      );
    },
    [router, draft],
  );

  const renderProductCard = useCallback(
    (product: Product) => (
      <ProductTeaserCard
        key={product.id}
        href={buildCatalogProductHref(draft, product.id)}
        imageSrc={product.image}
        title={productTitle(product, t)}
      />
    ),
    [draft, t],
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-brandLime-50/60 via-slate-50 to-slate-100/90 text-slate-900 antialiased">
      <ProdutosFloatingSocials />

      <ProdutosHeader
        search={draft}
        onSearchChange={setDraft}
        onSearchSubmit={onSubmitSearch}
        backHref="/site-construcao"
        backLabel={t.products.backLink}
        searchBelowMenu
      />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="mb-8 text-center font-sora text-2xl font-bold text-slate-900 sm:text-3xl">
          {t.products.catalogTitle}
        </h1>

        {selected ? (
          <div className="space-y-10">
            <ProductDetailSection
              key={selected.id}
              product={selected}
              onDismiss={pushWithoutProduct}
            />
            {others.length > 0 ? (
              <div>
                <h2 className="mb-6 font-sora text-lg font-semibold text-slate-800">
                  {t.products.otherProductsInListing}
                </h2>
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6 md:gap-y-10">
                  {others.map((p) => renderProductCard(p))}
                </div>
              </div>
            ) : null}
          </div>
        ) : displayList.length === 0 ? (
          <p className="text-center text-slate-600">{t.products.noResults}</p>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6 md:gap-y-10">
            {displayList.map((p) => renderProductCard(p))}
          </div>
        )}
      </main>
    </div>
  );
}
