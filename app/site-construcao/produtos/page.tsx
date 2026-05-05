import type { Metadata } from 'next';
import { Suspense } from 'react';

import { getLocaleFromCookies } from '../get-locale-server';
import { ProductsCatalogClient } from '../ProductsCatalogClient';
import { translations } from '../translations';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookies();
  const p = translations[locale].products;
  return {
    title: p.catalogTitle,
    description: p.catalogMetaDescription,
  };
}

export default function ProdutosPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen animate-pulse bg-slate-50" aria-hidden />
      }
    >
      <ProductsCatalogClient />
    </Suspense>
  );
}
