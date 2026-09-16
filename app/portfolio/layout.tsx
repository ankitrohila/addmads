import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Web Design & Branding Work',
  description: 'See our portfolio of successful digital projects. From web design to branding, explore case studies of how we help businesses achieve excellence.',
  keywords: ['portfolio', 'web design', 'case studies', 'branding projects', 'digital work', 'web development'],
  openGraph: {
    title: 'Our Portfolio',
    description: 'Explore our best work in digital design and development.',
    type: 'website',
    url: 'https://www.addmads.com/portfolio',
    siteName: 'AddMads',
  },
  alternates: {
    canonical: 'https://www.addmads.com/portfolio',
  },
}

const SITE = 'https://www.addmads.com'

/**
 * The portfolio page itself is a client component, so its breadcrumb trail is
 * emitted here in order to reach the initial HTML that non-JS crawlers read.
 * No child routes live under /portfolio, so there is no duplication risk.
 */
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${SITE}/portfolio` },
  ],
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${SITE}/portfolio#collection`,
  url: `${SITE}/portfolio`,
  name: 'AddMads portfolio',
  description:
    'Web design, branding and development work delivered by AddMads for clients across India, the UK, the US and the UAE.',
  isPartOf: { '@id': `${SITE}/#website` },
  about: { '@id': `${SITE}/#organization` },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      {children}
    </>
  )
}
