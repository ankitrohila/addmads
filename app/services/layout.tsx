import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — Google Ads, Meta Ads, SEO & Web',
  description: 'Explore our digital services: web development, SEO, digital marketing, graphics design, social media management, and branding. Transform your business today.',
  keywords: ['web development', 'SEO services', 'digital marketing', 'graphics design', 'social media management', 'branding', 'digital services'],
  openGraph: {
    title: 'Our Services',
    description: 'Comprehensive digital solutions for your business growth.',
    type: 'website',
    url: 'https://www.addmads.com/services',
    siteName: 'AddMads',
  },
  alternates: {
    canonical: 'https://www.addmads.com/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
