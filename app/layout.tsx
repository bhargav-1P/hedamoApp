import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hedamo - Premium Organic Products',
  description: 'Discover premium organic honey, nuts, and oils sourced directly from certified farms across India. Pure, natural, and traceable.',
  keywords: 'organic, honey, nuts, oils, premium, natural, sustainable, certified, India',
  authors: [{ name: 'Hedamo' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}