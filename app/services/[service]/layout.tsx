import type { Metadata } from 'next'
import { SERVICES } from '@/constants'
import { SERVICE_META } from './meta'

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
      url: `https://www.addmads.com/services/${serviceSlug}`,
      siteName: 'AddMads',
    },
    alternates: {
      canonical: `https://www.addmads.com/services/${serviceSlug}`,
    },
  }
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
