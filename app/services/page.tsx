import { SERVICES, MEGA_MENU_CATEGORIES } from '@/constants'
import ServicesPageClient from './ServicesPageClient'

const SITE = 'https://www.addmads.com'

/**
 * Server shell for the /services hub.
 *
 * The visible page is a client component, so the JSON-LD is emitted here in
 * order to land in the initial HTML — which is what non-JS crawlers and AI
 * answer engines read. The OfferCatalog lets an answer engine enumerate what
 * AddMads actually sells, instead of guessing from navigation copy.
 */
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
  ],
}

const catalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  '@id': `${SITE}/services#catalog`,
  name: 'AddMads digital marketing services',
  url: `${SITE}/services`,
  provider: { '@id': `${SITE}/#organization` },
  itemListElement: MEGA_MENU_CATEGORIES.map((cat, i) => ({
    '@type': 'OfferCatalog',
    position: i + 1,
    name: cat.label,
    url: `${SITE}${cat.href}`,
    itemListElement: cat.services.map((svc, j) => ({
      '@type': 'Offer',
      position: j + 1,
      url: `${SITE}${svc.href}`,
      itemOffered: {
        '@type': 'Service',
        name: svc.label,
        url: `${SITE}${svc.href}`,
        provider: { '@id': `${SITE}/#organization` },
      },
    })),
  })),
}

const serviceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Services offered by AddMads',
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    description: s.description,
    url: `${SITE}/services/${s.slug}`,
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <ServicesPageClient />
    </>
  )
}
