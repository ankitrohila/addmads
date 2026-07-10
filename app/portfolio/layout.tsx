import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Our Best Work in Web Design & Branding | AddMads',
  description: 'See our portfolio of successful digital projects. From web design to branding, explore case studies of how we help businesses achieve excellence.',
  keywords: ['portfolio', 'web design', 'case studies', 'branding projects', 'digital work', 'web development'],
  openGraph: {
    title: 'Our Portfolio',
    description: 'Explore our best work in digital design and development.',
    type: 'website',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
