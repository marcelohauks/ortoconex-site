import type { Messages } from './translations';

export type Product = {
  id: string;
  image: string;
};

const img = (file: string) => `/images/products/${file}`;

/** Catálogo fixo (só id + imagem); textos vêm de `translations` por idioma. */
export const PRODUCTS: Product[] = [
  {
    id: 'valvula-de-descarga-rapida',
    image: img('valvula-de-descarga-rapida.png'),
  },
  {
    id: 'valvula-reguladora-de-pressao',
    image: img('valvula-regularoda-de-pressao.png'),
  },
  {
    id: 'painel-de-alarme-gases',
    image: img('painel-de-alarme-gases.png'),
  },
  {
    id: 'valvula-esfera-mini-inox',
    image: img('valvula-esfera-mini-inox.png'),
  },
  {
    id: 'conexao-inox-dupla-anilha',
    image: img('conexao-inox-dupla-anilha.png'),
  },
  {
    id: 'conexoes-instantaneas-pneumaticas',
    image: img('conexoes-instantaneas-pneumaticas.png'),
  },
  {
    id: 'abracadeira-aco-inoxidavel',
    image: img('abracadeira-aco-inoxdavel.png'),
  },
  {
    id: 'engate-hidraulico-face-plana',
    image: img('engate-hidraulico-face-plana.png'),
  },
];

export const HOME_PRODUCT_COUNT = 8;

/** Quantidade inicial na página de catálogo (sem busca). */
export const CATALOG_INITIAL_COUNT = 8;

/** Grade relacionada na página dedicada do produto (3 × 4). */
export const STANDALONE_RELATED_COUNT = 12;

export const WHATSAPP_PHONE = '5519991299358';

type ProductCopy = {
  title: string;
  tagline?: string;
  description?: string;
};

export function getProductCopy(
  productId: string,
  t: Messages,
): ProductCopy | undefined {
  const map = t.products.productCopy as Record<string, ProductCopy>;
  return map[productId];
}

export function productTitle(product: Product, t: Messages): string {
  return getProductCopy(product.id, t)?.title ?? product.id;
}

export function productTagline(product: Product, t: Messages): string | undefined {
  return getProductCopy(product.id, t)?.tagline;
}

export function productBodyText(product: Product, t: Messages): string {
  const c = getProductCopy(product.id, t);
  if (c?.description) return c.description;
  const title = productTitle(product, t);
  return t.products.descriptionFallback.replace('{{title}}', title);
}

/** Minúsculas, sem acentos/diacríticos — para busca tolerante a digitação. */
function normalizeForSearch(s: string): string {
  return s
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .trim();
}

export function productSearchBlob(productId: string, t: Messages): string {
  const c = getProductCopy(productId, t);
  if (!c) return '';
  const raw = [c.title, c.tagline ?? '', c.description ?? '', productId].join(' ');
  return normalizeForSearch(raw);
}

export function filterProductsByQuery(
  products: Product[],
  query: string,
  t: Messages,
): Product[] {
  const q = normalizeForSearch(query);
  if (!q) return products;
  return products.filter((p) => productSearchBlob(p.id, t).includes(q));
}

export function buildQuoteWhatsAppUrl(product: Product, t: Messages) {
  const name = productTitle(product, t);
  const text = t.products.quoteWhatsAppMessage.replaceAll('{{title}}', name);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export function findProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProductsExcluding(
  excludeId: string,
  max: number = STANDALONE_RELATED_COUNT,
): Product[] {
  return PRODUCTS.filter((p) => p.id !== excludeId).slice(0, max);
}
