import type { Metadata } from 'next'
import { SERVICES } from '@/constants'
import { SERVICE_META } from './meta'

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

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: serviceSlug } = await params
  const service = SERVICES.find(s => s.slug === serviceSlug)

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The service page you are looking for does not exist.',
    }
  }

  const meta = SERVICE_META[serviceSlug]
  const pageTitle = meta?.title ?? `${service.title} Services`
  const pageDesc = meta?.description ?? service.description

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: meta?.keywords ?? [service.title.toLowerCase(), 'digital services', 'solutions', 'AddMads'],
    openGraph: {
      title: `${pageTitle} | AddMads`,
      description: pageDesc,
      type: 'website',
      url: `${SITE}/services/${serviceSlug}`,
      siteName: 'AddMads',
    },
    alternates: {
      canonical: `${SITE}/services/${serviceSlug}`,
    },
  }
}

/**
 * Server-rendered JSON-LD for each service page.
 *
 * This sits in the layout rather than the page because the page is a client
 * component - schema emitted here lands in the initial HTML, which matters for
 * crawlers and AI answer engines that do not execute JavaScript.
 *
 * Two graphs are added:
 *  - Service, so the page states plainly what is offered, by whom, and where.
 *  - BreadcrumbList, so the site hierarchy is machine-readable.
 */
export default async function ServiceLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ service: string }>
}) {
  const { service: serviceSlug } = await params
  const service = SERVICES.find(s => s.slug === serviceSlug)
  if (!service) return children

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
      {children}
    </>
  )
}
