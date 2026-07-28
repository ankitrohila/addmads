'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from './data'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <article
        style={{
          borderRadius: 12,
          overflow: 'hidden',
          background: '#fff',
          border: '1px solid rgba(0,0,0,0.07)',
          transition: 'box-shadow 0.25s, transform 0.25s',
          height: '100%',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'
          el.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.boxShadow = ''
          el.style.transform = ''
        }}
      >
        <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 92vw, 30vw"
            style={{ objectFit: 'cover' }}
            unoptimized
          />
        </div>
        <div style={{ padding: '20px 24px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C82A2A', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {post.category}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#aaa' }}>{post.readTime} min</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.05rem,1.3vw,1.2rem)', fontWeight: 600, color: '#111', lineHeight: 1.35, marginBottom: 12 }}>
            {post.title}
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.6, marginBottom: 16, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {post.excerpt}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} style={{ display: 'inline-block', padding: '3px 10px', background: '#F5F5F5', borderRadius: 999, fontSize: '0.73rem', color: '#555' }}>
                {tag}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '0.8rem', color: '#aaa' }}>{formatDate(post.date)}</p>
        </div>
      </article>
    </Link>
  )
}
