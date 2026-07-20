import type { Metadata } from 'next'
import { SERVICES } from '@/constants'

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: serviceSlug } = await params
  const service = SERVICES.find(s => s.slug === serviceSlug)

  if (!service) {
    return {
      title: 'Service Not Found | AddMads',
      description: 'The service page you are looking for does not exist.',
    }
  }

  return {
    title: `${service.title} — Professional Digital Solutions | AddMads`,
    description: service.description,
    keywords: [service.title.toLowerCase(), 'digital services', 'solutions', 'AddMads'],
    openGraph: {
      title: service.title,
      description: service.description,
      type: 'website',
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
