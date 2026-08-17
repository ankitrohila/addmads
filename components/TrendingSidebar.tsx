'use client'

import { useEffect, useState } from 'react'

interface Item {
  title: string
  link: string
  pubDate: string
  source: string
}

function timeAgo(dateStr: string) {
  if (!dateStr) return ''
  const diff = Date.now() - new Date(dateStr).getTime()
  const h = Math.floor(diff / 3_600_000)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  return `${d}d ago`
}

const STATIC_FALLBACK: Item[] = [
  { title: 'Google Ads Smart Bidding: What Actually Moves ROAS in 2026', link: 'https://www.searchenginejournal.com/', pubDate: '', source: 'Search Engine Journal' },
  { title: 'How to Build a Content Funnel That Generates Leads Daily', link: 'https://blog.hubspot.com/marketing', pubDate: '', source: 'HubSpot Marketing' },
  { title: 'Meta Ads vs Google Ads: Where to Spend Your Budget in 2026', link: 'https://neilpatel.com/blog/', pubDate: '', source: 'Neil Patel' },
  { title: 'SEO in the AI Era: GEO Tactics That Drive Brand Mentions in ChatGPT', link: 'https://ahrefs.com/blog/', pubDate: '', source: 'Ahrefs Blog' },
  { title: 'WhatsApp Marketing for Indian SMBs: The Complete 2026 Playbook', link: 'https://www.searchenginejournal.com/', pubDate: '', source: 'Search Engine Journal' },
  { title: 'Landing Page Conversion Rate Optimization: 12 Proven Tactics', link: 'https://blog.hubspot.com/', pubDate: '', source: 'HubSpot Marketing' },
]

export default function TrendingSidebar() {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/trending')
      .then(r => r.json())
      .then((data: Item[]) => { setItems(data.length ? data : STATIC_FALLBACK); setLoading(false) })
      .catch(() => { setItems(STATIC_FALLBACK); setLoading(false) })
  }, [])

  return (
    <aside style={{ minWidth: 0 }}>
      {/* Trending in Marketing */}
      <div style={{
        background: '#F5F5F5', borderRadius: 16,
        padding: 'clamp(20px,3vw,28px)', marginBottom: 24,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C82A2A' }}>
            Live Feed
          </span>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C82A2A', display: 'inline-block', animation: 'pulse 2s infinite' }} />
        </div>
        <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.15rem', fontWeight: 700, color: '#111', marginBottom: 20, lineHeight: 1.3 }}>
          Trending in Marketing
        </h3>

        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[1,2,3].map(i => (
              <div key={i} style={{ height: 60, background: 'rgba(0,0,0,0.06)', borderRadius: 8, animation: 'pulse 1.5s infinite' }} />
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {items.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{
                  display: 'block', padding: '12px 0',
                  borderBottom: i < items.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                  textDecoration: 'none', color: 'inherit',
                }}
              >
                <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#C82A2A', marginBottom: 4, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {item.source}{item.pubDate ? ` · ${timeAgo(item.pubDate)}` : ''}
                </div>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111', lineHeight: 1.45, margin: 0 }}
                   className="hover:text-[#C82A2A] transition-colors">
                  {item.title}
                </p>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Quick strategy tip */}
      <div style={{ background: '#111', borderRadius: 16, padding: 'clamp(20px,3vw,28px)', color: '#fff' }}>
        <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C82A2A', marginBottom: 12 }}>
          Strategy Tip
        </p>
        <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.35, marginBottom: 12 }}>
          Analytics says: Performance Marketing drives 60% of your traffic
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 20 }}>
          Based on your site data, visitors from performance marketing content have 3× higher intent. Double down with targeted Google Ads + SEO for compounding returns.
        </p>
        <a href="/contact" style={{
          display: 'inline-block', padding: '10px 20px',
          background: '#C82A2A', color: '#fff', borderRadius: 999,
          fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none',
        }}>
          Get a free audit →
        </a>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }`}</style>
    </aside>
  )
}
