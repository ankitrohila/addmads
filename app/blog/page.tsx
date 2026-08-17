import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UnifiedForm from '@/components/UnifiedForm'
import TrendingSidebar from '@/components/TrendingSidebar'
import { BLOG_POSTS } from './data'
import BlogCard from './BlogCard'

export const metadata: Metadata = {
  title: 'Blog — Digital Marketing Insights | AddMads',
  description: 'Expert insights on performance marketing, SEO, AEO, GEO, branding, UI/UX design, and web development. Stay ahead with AddMads.',
  openGraph: {
    title: 'Blog — Digital Marketing Insights | AddMads',
    description: 'Expert articles on Google Ads, SEO, AEO, Generative Engine Optimisation, branding, and web development from the AddMads team.',
    type: 'website',
    url: 'https://www.addmads.com/blog',
    siteName: 'AddMads',
  },
  alternates: {
    canonical: 'https://www.addmads.com/blog',
  },
}

const CATEGORIES = [
  { label: 'All', slug: '' },
  { label: 'Performance Marketing', slug: 'performance-marketing' },
  { label: 'SEO Services', slug: 'seo' },
  { label: 'Branding', slug: 'branding' },
  { label: 'Graphics & Design', slug: 'graphics-design' },
  { label: 'IT Services', slug: 'it-services' },
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogListingPage() {
  const featured = BLOG_POSTS[0]
  const rest = BLOG_POSTS.slice(1)

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'AddMads Digital Marketing Blog',
    description: 'Expert insights on performance marketing, SEO, AEO, GEO, branding, and web development.',
    url: 'https://www.addmads.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'AddMads',
      url: 'https://www.addmads.com',
      logo: { '@type': 'ImageObject', url: 'https://www.addmads.com/logo.svg' },
    },
    blogPost: BLOG_POSTS.map(p => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.excerpt,
      url: `https://www.addmads.com/blog/${p.slug}`,
      datePublished: p.date,
      image: p.image,
      keywords: p.tags.join(', '),
    })),
  }

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <main style={{ paddingTop: 'var(--nav-h)' }}>

        {/* Hero */}
        <section style={{ background: '#111', color: '#fff', padding: 'clamp(80px,12vw,160px) var(--container-px) clamp(60px,8vw,100px)' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C82A2A', marginBottom: 20 }}>
              Insights &amp; Expertise
            </p>
            <h1 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2.5rem,7vw,5rem)', fontWeight: 700, lineHeight: 1.08, marginBottom: 20 }}>
              The AddMads Blog
            </h1>
            <p style={{ fontSize: 'clamp(1rem,1.4vw,1.2rem)', color: 'rgba(255,255,255,0.65)', maxWidth: 560, lineHeight: 1.7 }}>
              Research-backed articles on performance marketing, SEO, AEO, GEO, branding, design, and web development — written by the AddMads team.
            </p>
          </div>
        </section>

        {/* Category filters */}
        <div style={{ background: '#F5F5F5', borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '0 var(--container-px)', overflowX: 'auto' }}>
          <div style={{ display: 'flex', gap: 8, padding: '14px 0', minWidth: 'max-content' }}>
            {CATEGORIES.map(cat => (
              <Link
                key={cat.slug}
                href={cat.slug ? `/blog?category=${cat.slug}` : '/blog'}
                style={{
                  display: 'inline-block', padding: '7px 16px',
                  background: '#fff', border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: 999, fontSize: '0.85rem', color: '#333',
                  textDecoration: 'none', whiteSpace: 'nowrap',
                }}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ padding: 'clamp(56px,8vw,100px) var(--container-px)', maxWidth: 1340, margin: '0 auto' }}>

          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', marginBottom: 'clamp(48px,6vw,80px)' }}>
            <div style={{ display: 'grid', gap: 'clamp(24px,4vw,56px)', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', alignItems: 'center' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, aspectRatio: '16/9' }}>
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 92vw, 55vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{ display: 'inline-block', background: '#C82A2A', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Featured
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#888' }}>{featured.category}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.5rem,3vw,2.4rem)', fontWeight: 700, lineHeight: 1.2, color: '#111', marginBottom: 16 }}>
                  {featured.title}
                </h2>
                <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.7, marginBottom: 20 }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: '0.82rem', color: '#888' }}>
                  <span>{formatDate(featured.date)}</span>
                  <span>·</span>
                  <span>{featured.readTime} min read</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Two-column: articles + sidebar */}
          <div style={{ display: 'grid', gap: 'clamp(32px,4vw,56px)', gridTemplateColumns: 'minmax(0,1fr) clamp(280px,28vw,340px)', alignItems: 'start' }}
               className="blog-grid">
            <div>
              <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 700, color: '#111', marginBottom: 32, paddingTop: 16, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                All Articles
              </h2>
              <div style={{ display: 'grid', gap: 32, gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))' }}>
                {rest.map(post => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
            <div className="hidden lg:block" style={{ position: 'sticky', top: 'calc(var(--nav-h) + 24px)' }}>
              <TrendingSidebar />
            </div>
          </div>
        </div>

        <UnifiedForm
          heading="Want results like these for your business?"
          subheading="Our team of digital marketing experts is ready to help you grow. Get in touch for a free strategy call."
          bgColor="#F5F5F5"
        />

      </main>

      <Footer />
    </>
  )
}
