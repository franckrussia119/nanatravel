import { Playfair_Display, Work_Sans } from 'next/font/google';
import './globals.css';
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Cormorant Garamond accent font – loaded via Google Fonts link for italic weight */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${playfairDisplay.variable} ${workSans.variable} font-sans antialiased`}>
        {children}
        <ChunkLoadErrorHandler />
      </body>
    </html>
  );
}
