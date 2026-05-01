import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ortoconex.com.br'),
  applicationName: 'Ortoconex',
  title: {
    default: 'Ortoconex',
    template: '%s | Ortoconex',
  },
  description: 'Ortoconex Suprimentos Industriais',
  alternates: {
    canonical: 'https://www.ortoconex.com.br',
  },
  openGraph: {
    title: 'Ortoconex',
    description: 'Ortoconex Suprimentos Industriais',
    url: 'https://www.ortoconex.com.br',
    siteName: 'Ortoconex',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/images/branding/ortoconex-logo.png',
        width: 512,
        height: 512,
        alt: 'Logo da Ortoconex',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ortoconex',
    description: 'Ortoconex Suprimentos Industriais',
    images: ['/images/branding/ortoconex-logo.png'],
  },
  icons: {
    icon: '/images/branding/ortoconex-logo.png',
    shortcut: '/images/branding/ortoconex-logo.png',
    apple: '/images/branding/ortoconex-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${sora.variable}`}>{children}</body>
    </html>
  );
}
