import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — Comprehensive Digital Solutions | AddMads',
  description: 'Explore our digital services: web development, SEO, digital marketing, graphics design, social media management, and branding. Transform your business today.',
  keywords: ['web development', 'SEO services', 'digital marketing', 'graphics design', 'social media management', 'branding', 'digital services'],
  openGraph: {
    title: 'Our Services',
    description: 'Comprehensive digital solutions for your business growth.',
    type: 'website',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
