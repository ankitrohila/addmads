export const runtime = 'edge'

import type { Metadata, Viewport } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import CursorProvider from '@/components/CursorProvider'
import ScrollInit from '@/components/ScrollInit'
import './globals.css'

const inter = Inter({
  subsets:  ['latin'],
  variable: '--font-inter',
  display:  'swap',
})

const interTight = Inter_Tight({
  subsets:  ['latin'],
  variable: '--font-inter-tight',
  display:  'swap',
  weight:   ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title:       'AddMads — Performance Marketing & Digital Growth Agency',
  description: 'AddMads is a performance marketing & digital growth agency offering Google Ads, Meta Ads, SEO, Branding, Web Development (WordPress, Shopify, React, Next.js), and UI/UX Design. Call +91-9220872212.',
  keywords:    ['performance marketing', 'google ads', 'meta ads', 'SEO services', 'digital marketing', 'branding', 'web development', 'shopify', 'wordpress', 'next.js', 'react', 'graphics design', 'AddMads'],
  authors:     [{ name: 'AddMads' }],
  creator:     'AddMads',
  metadataBase: new URL('https://addmads.com'),
  openGraph: {
    title:       'AddMads — Creative Digital Agency',
    description: 'Transform your digital presence with our comprehensive services including web development, SEO, digital marketing, branding, and more.',
    type:        'website',
    locale:      'en_US',
    url:         'https://addmads.com',
    siteName:    'AddMads',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'AddMads',
    description: 'Creative digital solutions that drive growth and results.',
    creator:     '@addmads',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://addmads.com',
  },
}

export const viewport: Viewport = {
  width:        'device-width',
  initialScale: 1,
  viewportFit:  'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <head>
        {/* Standard .ico — IE, legacy browsers */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        {/* SVG — Chrome, Firefox, Edge (scalable, best quality) */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Apple Touch Icon — iOS Safari tab + Add to Home Screen */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Android / Chrome PWA icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />

        <meta name="theme-color" content="#111111" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body suppressHydrationWarning>
        <CursorProvider />
        <ScrollInit />
        {children}
      </body>
    </html>
  )
}

