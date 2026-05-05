'use client';

import { useCallback, useState } from 'react';
import type { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import { ProductDetailSection } from '../../ProductDetailSection';
import { ProductTeaserCard } from '../../ProductTeaserCard';
import { ProdutosFloatingSocials } from '../../ProdutosFloatingSocials';
import { ProdutosHeader } from '../../ProdutosHeader';
import { useLocale } from '../../LocaleContext';
import {
  findProductById,
  getRelatedProductsExcluding,
  productTitle,
} from '../../products-data';

type Props = {
  productId: string;
};

export function ProductStandaloneClient({ productId }: Props) {
  const { t } = useLocale();
  const router = useRouter();
  const [search, setSearch] = useState('');

  const product = findProductById(productId);
  const related = product
    ? getRelatedProductsExcluding(product.id)
    : [];

  const onSubmitSearch = useCallback(
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

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-brandLime-50/60 via-slate-50 to-slate-100/90 text-slate-900 antialiased">
      <ProdutosFloatingSocials />

      <ProdutosHeader
        search={search}
        onSearchChange={setSearch}
        onSearchSubmit={onSubmitSearch}
        backHref="/site-construcao/produtos"
        backLabel={t.products.backToCatalog}
        searchBelowMenu
      />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <ProductDetailSection product={product} />

        {related.length > 0 ? (
          <>
            <h2 className="mt-12 mb-6 font-sora text-xl font-bold text-slate-900">
              {t.products.moreProductsGrid}
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6 md:gap-y-10">
              {related.map((p) => (
                <ProductTeaserCard
                  key={p.id}
                  href={`/site-construcao/produtos/${p.id}`}
                  imageSrc={p.image}
                  title={productTitle(p, t)}
                />
              ))}
            </div>
          </>
        ) : null}
      </main>
    </div>
  );
}
