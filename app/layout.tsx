import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';

import '@/styles/reset.css';
import '@/styles/global.css';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextFlix',
  description: 'Nextflix movie site description',
  icons: {
    icon: '/vercel.svg',
  },
  robots: {
    googleBot: 'index,follow',
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="container">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
