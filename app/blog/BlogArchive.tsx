'use client'

import { useState } from 'react'
import BlogCard from './BlogCard'
import type { BlogPost } from './data'

const MOBILE_VISIBLE = 6

/**
 * The "All Articles" grid.
 *
 * Every post is rendered into the HTML — the overflow is hidden with CSS on
 * small screens only (see .blog-archive in globals.css), never removed from
 * the DOM. That matters: hiding posts behind client-side state would keep them
 * out of the initial HTML, and the blog is one of the main surfaces Google and
 * AI answer engines crawl for AddMads. So the mobile page stays short without
 * costing a single indexed article.
 *
 * The button is display:none above 768px, so desktop is untouched.
 */
export default function BlogArchive({ posts }: { posts: BlogPost[] }) {
  const [collapsed, setCollapsed] = useState(true)
  const hiddenCount = posts.length - MOBILE_VISIBLE

  return (
    <div className="blog-archive" data-collapsed={collapsed ? 'true' : 'false'}>
      <div
        className="blog-archive-grid"
        style={{ display: 'grid', gap: 32, gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))' }}
      >
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {hiddenCount > 0 && (
        <button
          type="button"
          className="blog-more-btn"
          onClick={() => setCollapsed(false)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            width: '100%',
            marginTop: 28,
            padding: '15px 24px',
            background: '#111',
            color: '#fff',
            border: 'none',
            borderRadius: 999,
            fontFamily: 'var(--font-sans)',
            fontSize: '0.95rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Load more articles
          <span style={{ opacity: 0.6, fontWeight: 500 }}>({hiddenCount})</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      )}
    </div>
  )
}
