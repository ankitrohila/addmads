import { notFound } from 'next/navigation'
import { SERVICES } from '@/constants'
import { SERVICE_META } from './meta'
import ServiceDetailClient from './ServiceDetailClient'

const SITE = 'https://www.addmads.com'

/**
 * Places AddMads actually serves, mirroring app/location/data.ts. Used as
 * `areaServed` so search engines and AI answer engines can resolve which
 * markets each service covers, rather than inferring it from prose.
 */
const AREA_SERVED = [
  { '@type': 'City', name: 'Sonipat' },
  { '@type': 'City', name: 'Ganaur' },
  { '@type': 'City', name: 'Panipat' },
  { '@type': 'City', name: 'Noida' },
  { '@type': 'Place', name: 'Delhi NCR' },
  { '@type': 'AdministrativeArea', name: 'Haryana' },
  { '@type': 'Country', name: 'India' },
  { '@type': 'Country', name: 'United Kingdom' },
  { '@type': 'Country', name: 'United States' },
  { '@type': 'Country', name: 'United Arab Emirates' },
]

/** serviceType is the phrase an answer engine is most likely to match on. */
const SERVICE_TYPE: Record<string, string> = {
  'performance-marketing': 'Performance Marketing and Paid Advertising',
  branding: 'Brand Strategy and Identity Design',
  seo: 'Search Engine Optimisation',
  'graphics-design': 'Graphic and UI/UX Design',
  'it-services': 'Web Development',
  'social-media': 'Social Media Marketing and Management',
}

/**
 * Server shell for each top-level service page.
 *
 * The visible page is a client component, so the JSON-LD is emitted here — it
 * has to land in the initial HTML for crawlers and AI answer engines that do
 * not execute JavaScript. Keeping it on the page (rather than in the layout)
 * means sub-service routes no longer inherit a duplicate breadcrumb trail and
 * a Service block that points at their parent's URL.
 */
export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceSlug } = await params
  const service = SERVICES.find(s => s.slug === serviceSlug)
  if (!service) notFound()

  const meta = SERVICE_META[serviceSlug]
  const url = `${SITE}/services/${serviceSlug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: meta?.title ?? `${service.title} Services`,
    serviceType: SERVICE_TYPE[serviceSlug] ?? service.title,
    description: meta?.description ?? service.description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'AddMads',
      url: SITE,
      telephone: '+91-9220872212',
      email: 'info@addmads.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sonipat',
        addressRegion: 'Haryana',
        addressCountry: 'IN',
      },
    },
    areaServed: AREA_SERVED,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceDetailClient />
    </>
  )
}
