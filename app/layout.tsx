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
  title: 'Ortoconex',
  description: 'Site institucional da OrtoConex em construção.',
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
