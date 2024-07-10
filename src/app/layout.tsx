import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

// components
import Header from '@/components/Header';
import PageTransition from '@/components/ui/PageTransition';
import StairTransition from '@/components/ui/StairTransition';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Nitan Jana | Portfolio',
  description: 'Portfolio of Nitan Jana',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn('antialiased', jetbrainsMono.variable)}
      >
        <Header />
        <StairTransition />
        <PageTransition>
          <main>{children}</main>
          <Toaster richColors />
        </PageTransition>
      </body>
    </html>
  );
}
