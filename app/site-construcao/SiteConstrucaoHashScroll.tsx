'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Rolagem suave até o id da âncora (respeita prefers-reduced-motion). */
export function smoothScrollToHash(hash: string) {
  if (!hash.startsWith('#')) return;
  const id = decodeURIComponent(hash.slice(1));
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
}

function scrollToHashElement() {
  const hash = window.location.hash;
  if (!hash) return;
  smoothScrollToHash(hash);
}

/** Ao abrir `/site-construcao` com âncora (#quem-somos etc.), rola até a secção. */
export function SiteConstrucaoHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/site-construcao') return;
    // Duplo frame + microtask: layout da página pronto após navegação client-side.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToHashElement();
      });
    });
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      if (pathname !== '/site-construcao') return;
      scrollToHashElement();
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [pathname]);

  return null;
}
