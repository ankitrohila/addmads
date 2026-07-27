import type { MetadataRoute } from 'next'
import { MEGA_MENU_CATEGORIES } from '@/constants'

const BASE = 'https://addmads.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/refund-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/cancellation-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/shipping-delivery-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/sitemap`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
  ]

  const servicePages: MetadataRoute.Sitemap = MEGA_MENU_CATEGORIES.flatMap(cat => [
    { url: `${BASE}${cat.href}`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...cat.services.map(svc => ({
      url: `${BASE}${svc.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ])

  return [...staticPages, ...servicePages]
}
