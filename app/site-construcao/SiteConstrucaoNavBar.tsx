'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { smoothScrollToHash } from './SiteConstrucaoHashScroll';
import { useLocale } from './LocaleContext';

type Props = {
  mobileOpen: boolean;
  onLinkClick?: () => void;
};

const NAV_ITEMS = [
  { href: '/site-construcao/produtos', key: 'produtos' as const },
  { href: '/site-construcao#quem-somos', key: 'quemSomos' as const },
  { href: '/site-construcao#mercados', key: 'mercados' as const },
  { href: '/site-construcao#contato', key: 'contato' as const },
];

export function SiteConstrucaoNavBar({ mobileOpen, onLinkClick }: Props) {
  const { t } = useLocale();
  const pathname = usePathname();
  const onProdutosSection =
    pathname.startsWith('/site-construcao/produtos');

  return (
    <nav
      className={`${
        mobileOpen ? 'flex' : 'hidden'
      } flex-col gap-1 border-t border-slate-100 pt-3 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-1 sm:border-0 sm:pt-0`}
      aria-label="Principal"
    >
      {NAV_ITEMS.map(({ href, key }) => (
        <Link
          key={href}
          href={href}
          scroll={!href.includes('#')}
          onClick={(e) => {
            if (typeof window !== 'undefined') {
              try {
                const url = new URL(href, window.location.origin);
                if (
                  pathname === '/site-construcao' &&
                  url.pathname === '/site-construcao' &&
                  url.hash
                ) {
                  e.preventDefault();
                  window.history.pushState(
                    null,
                    '',
                    `${url.pathname}${url.hash}`,
                  );
                  requestAnimationFrame(() => smoothScrollToHash(url.hash));
                }
              } catch {
                /* deixa o Link seguir */
              }
            }
            onLinkClick?.();
          }}
          aria-current={key === 'produtos' && onProdutosSection ? 'page' : undefined}
          className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium transition min-h-[44px] sm:min-h-0 sm:py-2 sm:text-center ${
            key === 'produtos' && onProdutosSection
              ? 'bg-primary-50 text-primary-900'
              : 'text-slate-600 hover:bg-brandLime-50 hover:text-primary-800'
          }`}
        >
          {t.nav[key]}
        </Link>
      ))}
    </nav>
  );
}
