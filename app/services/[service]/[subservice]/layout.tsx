import type { Metadata } from 'next'
import { MEGA_MENU_CATEGORIES } from '@/constants'
import { SUBSERVICE_META } from './meta'

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
    title: `${pageTitle} | AddMads`,
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

export default function SubserviceLayout({ children }: { children: React.ReactNode }) {
  return children
}
