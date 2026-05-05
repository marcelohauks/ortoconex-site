'use client';

import { FaWhatsapp } from 'react-icons/fa';

import { useLocale } from './LocaleContext';

const WHATSAPP_HREF = 'https://wa.me/5519991299358';

export function ProdutosFloatingSocials() {
  const { t } = useLocale();

  return (
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
  );
}
