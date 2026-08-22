import type { Metadata, Viewport } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import ClientWidgets from '@/components/ClientWidgets'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import MetaPixel from '@/components/MetaPixel'
import { CONTACT_PHONE, CONTACT_EMAIL } from '@/constants'
import './globals.css'

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
  metadataBase: new URL('https://www.addmads.com'),
  openGraph: {
    title: 'AddMads — Performance Marketing & Digital Growth Agency',
    description:
      'Data-driven Google Ads, Meta Ads, SEO, branding, and web development that turn ad spend into measurable growth.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.addmads.com',
    siteName: 'AddMads',
    images: [
      {
        url: 'https://www.addmads.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AddMads — Performance Marketing & Digital Growth Agency',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.addmads.com',
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
  '@graph': [
    {
      '@type': ['MarketingAgency', 'LocalBusiness', 'ProfessionalService'],
      '@id': 'https://www.addmads.com/#organization',
      name: 'AddMads',
      legalName: 'AddMads Digital Marketing Agency',
      url: 'https://www.addmads.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.addmads.com/logo.svg',
        width: 200,
        height: 60,
      },
      image: 'https://www.addmads.com/logo.svg',
      description:
        'AddMads is a performance marketing and digital growth agency based in Sonipat, Haryana, India. We offer Google Ads, Meta Ads, SEO, AEO, GEO, branding, graphics design, and web development for businesses across India (Sonipat, Ganaur, Delhi, Panipat, Haryana) and globally in the UK, USA, and UAE.',
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      foundingDate: '2017',
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 10 },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sonipat',
        addressLocality: 'Sonipat',
        addressRegion: 'Haryana',
        postalCode: '131001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.9931,
        longitude: 77.0151,
      },
      areaServed: [
        { '@type': 'City',    name: 'Sonipat' },
        { '@type': 'City',    name: 'Ganaur' },
        { '@type': 'City',    name: 'Panipat' },
        { '@type': 'City',    name: 'Delhi' },
        { '@type': 'City',    name: 'Gurugram' },
        { '@type': 'City',    name: 'Noida' },
        { '@type': 'State',   name: 'Haryana' },
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      priceRange: '₹₹',
      currenciesAccepted: 'INR, GBP, USD, AED',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer, UPI',
      openingHours: 'Mo-Sa 09:00-18:00',
      sameAs: [
        'https://instagram.com/addmads',
        'https://youtube.com/@addmads',
        'https://linkedin.com/company/addmads',
        'https://x.com/addmads',
        'https://facebook.com/addmads',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads & PPC Management', url: 'https://www.addmads.com/services/performance-marketing/google-ads' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta Facebook & Instagram Ads', url: 'https://www.addmads.com/services/performance-marketing/meta-ads' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services', url: 'https://www.addmads.com/services/seo' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO', url: 'https://www.addmads.com/services/seo/local-seo' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding & Logo Design', url: 'https://www.addmads.com/services/branding' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development', url: 'https://www.addmads.com/services/it-services' } },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '60',
        bestRating: '5',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.addmads.com/#website',
      url: 'https://www.addmads.com',
      name: 'AddMads',
      description: 'Performance Marketing & Digital Growth Agency',
      publisher: { '@id': 'https://www.addmads.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.addmads.com/blog?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
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
        <ClientWidgets />
        <GoogleAnalytics />
        <MetaPixel />
      </body>
    </html>
  )
}
