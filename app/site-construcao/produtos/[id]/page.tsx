import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { findProductById } from '../../products-data';
import { getLocaleFromCookies } from '../../get-locale-server';
import { translations } from '../../translations';

import { ProductStandaloneClient } from './ProductStandaloneClient';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const locale = await getLocaleFromCookies();
  const productMap = translations[locale].products.productCopy as Record<
    string,
    { title: string }
  >;
  const products = translations[locale].products;
  const title =
    productMap[id]?.title ?? products.unknownProductTitle;
  const description = products.metaProductDescription.replace(
    '{{title}}',
    title,
  );
  return {
    title,
    description,
  };
}

export default async function ProdutoPorIdPage({ params }: Props) {
  const { id } = await params;
  if (!findProductById(id)) notFound();

  return <ProductStandaloneClient productId={id} />;
}
