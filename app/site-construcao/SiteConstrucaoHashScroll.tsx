'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function scrollToHashElement() {
  const hash = window.location.hash;
  if (!hash) return;
  const id = decodeURIComponent(hash.slice(1));
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

/** Ao abrir `/site-construcao` com âncora (#quem-somos etc.), rola até a secção. */
export function SiteConstrucaoHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/site-construcao') return;
    requestAnimationFrame(() => scrollToHashElement());
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
