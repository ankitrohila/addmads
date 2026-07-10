import type { Metadata, Viewport } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import CursorProvider from '@/components/CursorProvider'
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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%23111111'/><text x='4' y='23' font-family='system-ui' font-weight='900' font-size='14' fill='%23D4FF00'>AM</text></svg>"
        />
        <meta name="theme-color" content="#111111" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body suppressHydrationWarning>
        <CursorProvider />
        {children}
      </body>
    </html>
  )
}

