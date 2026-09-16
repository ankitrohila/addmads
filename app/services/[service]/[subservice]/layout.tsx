import type { Metadata } from 'next'
import { MEGA_MENU_CATEGORIES } from '@/constants'
import { SUBSERVICE_META } from './meta'

const SITE = 'https://www.addmads.com'

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

function toTitle(slug: string) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; subservice: string }>
}): Promise<Metadata> {
  const { service, subservice } = await params

  const category = MEGA_MENU_CATEGORIES.find(c => c.href.endsWith(`/${service}`))
  const sub = category?.services.find(s => s.href.endsWith(`/${subservice}`))

  const title = sub?.label ?? toTitle(subservice)
  const parentTitle = category?.label ?? toTitle(service)
  const key = `${service}/${subservice}`
  const meta = SUBSERVICE_META[key]

  const pageTitle = meta?.title ?? `${title} — ${parentTitle} Services`
  const pageDesc  = meta?.description ??
    `Professional ${title} services from AddMads. Expert ${parentTitle.toLowerCase()} solutions for businesses in Sonipat, Delhi, Ganaur, Panipat, Haryana and globally. Measurable results, transparent reporting.`

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: [
      title.toLowerCase(),
      `${title.toLowerCase()} services india`,
      `${title.toLowerCase()} agency`,
      parentTitle.toLowerCase(),
      'AddMads',
      'digital marketing agency sonipat',
      'marketing agency haryana',
    ],
    openGraph: {
      title: `${pageTitle} | AddMads`,
      description: pageDesc,
      type: 'website',
      url: `https://www.addmads.com/services/${service}/${subservice}`,
      siteName: 'AddMads',
    },
    alternates: {
      canonical: `https://www.addmads.com/services/${service}/${subservice}`,
    },
  }
}

/**
 * Server-rendered Service JSON-LD for each sub-service route.
 *
 * The sub-service page is a client component and already emits its own
 * BreadcrumbList and FAQPage, so only the Service entity is added here. It is
 * scoped to this layout (not the parent [service] layout) so the parent's own
 * Service block does not leak onto child routes pointing at the wrong URL.
 */
export default async function SubserviceLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ service: string; subservice: string }>
}) {
  const { service, subservice } = await params

  const category = MEGA_MENU_CATEGORIES.find(c => c.href.endsWith(`/${service}`))
  const sub = category?.services.find(s => s.href.endsWith(`/${subservice}`))
  if (!category || !sub) return children

  const key = `${service}/${subservice}`
  const meta = SUBSERVICE_META[key]
  const url = `${SITE}/services/${service}/${subservice}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: meta?.title ?? `${sub.label} Services`,
    serviceType: sub.label,
    description:
      meta?.description ??
      `${sub.label} services from AddMads for businesses in Sonipat, Delhi NCR, Haryana and internationally.`,
    url,
    isPartOf: { '@id': `${SITE}/services/${service}#service` },
    category: category.label,
    provider: { '@id': `${SITE}/#organization` },
    areaServed: AREA_SERVED,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  )
}
