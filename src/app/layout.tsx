import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import './globals.scss';

const robotoFlex = Roboto_Flex({
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
      <body className={robotoFlex.className}>{children}</body>
    </html>
  );
}
