import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Get Started With Your Digital Transformation | AddMads',
  description: 'Ready to transform your digital presence? Contact AddMads today. We respond within 24 hours with transparent pricing and comprehensive solutions.',
  keywords: ['contact', 'get in touch', 'inquiry', 'project consultation', 'digital solutions', 'web development'],
  openGraph: {
    title: 'Contact Us',
    description: 'Let\'s discuss your next digital project and how we can help.',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
