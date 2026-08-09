import { NextResponse } from 'next/server'
import { BLOG_POSTS } from '@/app/blog/data'
import { LOCATION_SLUGS } from '@/app/location/data'
import { MEGA_MENU_CATEGORIES } from '@/constants'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const BASE = 'https://www.addmads.com'
const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? 'addmads2026seogeo7a8b9c0d1e2f3a4'

// Tier 1 — ping every day
const PRIORITY_URLS = [
  '/',
  '/blog',
  '/services',
  '/contact',
  '/about',
  '/location/sonipat',
  '/location/delhi',
  '/location/ganaur',
  '/location/panipat',
  '/location/uk',
  '/location/usa',
  '/location/uae',
]

function buildAllUrls(): string[] {
  const service = MEGA_MENU_CATEGORIES.flatMap(cat => [
    cat.href,
    ...cat.services.map(s => s.href),
  ])
  const locations = LOCATION_SLUGS.map(c => `/location/${c}`)
  const blogs = BLOG_POSTS.map(p => `/blog/${p.slug}`)
  return [...new Set([...PRIORITY_URLS, ...service, ...locations, ...blogs])]
}

async function pingSitemaps(): Promise<Record<string, string | number>> {
  const sitemap = encodeURIComponent(`${BASE}/sitemap.xml`)
  const [g, b] = await Promise.allSettled([
    fetch(`https://www.google.com/ping?sitemap=${sitemap}`, { method: 'GET' }),
    fetch(`https://www.bing.com/ping?sitemap=${sitemap}`, { method: 'GET' }),
  ])
  return {
    google: g.status === 'fulfilled' ? g.value.status : 'error',
    bing:   b.status === 'fulfilled' ? b.value.status : 'error',
  }
}

async function submitIndexNow(urls: string[]): Promise<{ status: number | string; urls: number }> {
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'www.addmads.com',
        key: INDEXNOW_KEY,
        keyLocation: `${BASE}/${INDEXNOW_KEY}.txt`,
        urlList: urls.slice(0, 10000).map(u => `${BASE}${u}`),
      }),
    })
    return { status: res.status, urls: urls.length }
  } catch {
    return { status: 'network_error', urls: 0 }
  }
}

// Determine which blog posts were published in the last 30 days (freshest first)
function recentBlogUrls(): string[] {
  const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000
  return BLOG_POSTS
    .filter(p => new Date(p.date).getTime() > cutoff)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(p => `/blog/${p.slug}`)
}

export async function GET(req: Request) {
  // Protect the cron endpoint — Vercel signs cron requests
  const authHeader = req.headers.get('authorization')
  if (
    process.env.NODE_ENV === 'production' &&
    authHeader !== `Bearer ${process.env.CRON_SECRET ?? ''}`
  ) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const allUrls = buildAllUrls()
  const fresh = recentBlogUrls()

  // Run sitemap pings + IndexNow in parallel
  const [sitemapPing, indexNow] = await Promise.all([
    pingSitemaps(),
    submitIndexNow([...PRIORITY_URLS, ...fresh]),
  ])

  const report = {
    timestamp: new Date().toISOString(),
    totalPages: allUrls.length,
    recentPosts: fresh.length,
    sitemapPing,
    indexNow,
    pingSummary: {
      googleOk: sitemapPing.google === 200 || sitemapPing.google === 204,
      bingOk:   sitemapPing.bing === 200 || sitemapPing.bing === 204,
    },
  }

  return NextResponse.json(report)
}
