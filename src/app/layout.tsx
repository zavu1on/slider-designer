import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.scss';

const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Slider Design',
  description: 'Конструктор сайтов с использованием классов Tailwind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
