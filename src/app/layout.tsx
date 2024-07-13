import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

import { cn } from '@/lib/utils';
import { AudioProvider } from '@/context/AudioContext';

// components
import Header from '@/components/navigation/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';

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
      <body className={cn('antialiased', jetbrainsMono.variable)}>
        <AudioProvider>
          <Header />
          <StairTransition />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
        </AudioProvider>
      </body>
    </html>
  );
}
