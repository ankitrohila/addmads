import { NextResponse } from 'next/server'

export const revalidate = 86400

const FEEDS = [
  { source: 'Search Engine Journal', url: 'https://www.searchenginejournal.com/feed/' },
  { source: 'HubSpot Marketing', url: 'https://blog.hubspot.com/marketing/rss.xml' },
  { source: 'Ahrefs Blog', url: 'https://ahrefs.com/blog/rss/' },
  { source: 'Neil Patel', url: 'https://neilpatel.com/blog/feed/' },
]

export interface TrendingItem {
  title: string
  link: string
  pubDate: string
  source: string
}

function extractCDATA(raw: string): string {
  return raw
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#\d+;/g, '')
    .trim()
}

async function parseFeed(source: string, url: string): Promise<TrendingItem[]> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 },
      headers: { 'User-Agent': 'AddMads/1.0 SEO-bot (+https://www.addmads.com)' },
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) return []
    const xml = await res.text()
    const items: TrendingItem[] = []
    const blocks = [...xml.matchAll(/<item[^>]*>([\s\S]*?)<\/item>/g)]
    for (const b of blocks.slice(0, 4)) {
      const raw = b[1]
      const titleRaw = raw.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1] ?? ''
      const linkRaw  = raw.match(/<link[^>]*>\s*(https?[^\s<]+)/)?.[1]
                    ?? raw.match(/<link[^>]*href="([^"]+)"/)?.[1]
                    ?? raw.match(/<link[^>]*>([\s\S]*?)<\/link>/)?.[1]
                    ?? ''
      const dateRaw  = raw.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? ''
      const title = extractCDATA(titleRaw)
      const link  = linkRaw.trim()
      if (title && link) items.push({ title, link, pubDate: dateRaw.trim(), source })
    }
    return items
  } catch {
    return []
  }
}

export async function GET() {
  const results = await Promise.all(FEEDS.map(f => parseFeed(f.source, f.url)))
  const all = results
    .flat()
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .slice(0, 10)
  return NextResponse.json(all)
}
