import type { Metadata, Viewport } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import dynamic from 'next/dynamic'
import { CONTACT_PHONE, CONTACT_EMAIL } from '@/constants'
import './globals.css'

const LeadPopup = dynamic(() => import('@/components/LeadPopup'), { ssr: false })
const ChatBot   = dynamic(() => import('@/components/ChatBot'),   { ssr: false })

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'AddMads — Performance Marketing & Digital Growth Agency',
    template: '%s | AddMads',
  },
  description:
    'AddMads is a performance marketing & digital growth agency offering Google Ads, Meta Ads, SEO, AEO, GEO, Branding, Web Development (WordPress, Shopify, React, Next.js), and UI/UX Design. Call +91-9220872212.',
  keywords: [
    'performance marketing agency', 'google ads agency india', 'meta ads', 'SEO services',
    'AEO', 'GEO', 'answer engine optimisation', 'generative engine optimisation',
    'digital marketing', 'branding agency', 'web development', 'shopify', 'wordpress',
    'next.js development', 'ui ux design', 'AddMads',
  ],
  authors: [{ name: 'AddMads' }],
  creator: 'AddMads',
  metadataBase: new URL('https://addmads.com'),
  openGraph: {
    title: 'AddMads — Performance Marketing & Digital Growth Agency',
    description:
      'Data-driven Google Ads, Meta Ads, SEO, branding, and web development that turn ad spend into measurable growth.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://addmads.com',
    siteName: 'AddMads',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AddMads — Performance Marketing & Digital Growth Agency',
    description: 'Data-driven marketing, SEO, branding, and web development that scale revenue.',
    creator: '@addmads',
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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#111111',
}

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://addmads.com/#organization',
  name: 'AddMads',
  url: 'https://addmads.com',
  logo: 'https://addmads.com/logo.svg',
  description:
    'Performance marketing and digital growth agency offering Google Ads, Meta Ads, SEO, AEO, GEO, branding, graphics design, and web development services.',
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sonipat',
    addressRegion: 'Haryana',
    addressCountry: 'IN',
  },
  areaServed: 'IN',
  priceRange: '₹₹',
  sameAs: [
    'https://instagram.com/addmads',
    'https://youtube.com/@addmads',
    'https://linkedin.com/company/addmads',
    'https://x.com/addmads',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <LeadPopup />
        <ChatBot />
      </body>
    </html>
  )
}
