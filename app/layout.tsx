import React from 'react';
import type { Metadata } from 'next';
import { DM_Sans, Inter, Manrope, Roboto } from 'next/font/google';
import './globals.css';
import NavbarWrapper from '@/src/components/NavbarWrapper';
import Footer from '@/src/components/Footer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
  weight: ['400', '500', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'SmartSpace - Premium Coworking & Coliving Workspace Finder',
  description: 'Find and book spaces with premium remote-work amenities (high-speed Wi-Fi, ergonomic chairs, quiet zones, backup power) across Nigeria, the US, and the UK.',
  keywords: 'coworking spaces, coliving, workspace finder, remote work, lagos, london, new york',
  authors: [{ name: 'SmartSpace Team' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} ${manrope.variable} ${roboto.variable}`}>
      <body className="bg-slate-50 text-text-black">
        <div className="container mx-auto max-w-7xl px-4 min-h-screen flex flex-col justify-between">
          <NavbarWrapper />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
