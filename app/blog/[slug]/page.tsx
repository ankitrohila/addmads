import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UnifiedForm from '@/components/UnifiedForm'
import { BLOG_POSTS } from '../data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | AddMads Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter(p => p.categorySlug === post.categorySlug && p.slug !== post.slug).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'AddMads',
      url: 'https://addmads.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AddMads',
      url: 'https://addmads.com',
      logo: { '@type': 'ImageObject', url: 'https://addmads.com/logo.svg' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://addmads.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  }

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main style={{ paddingTop: 'var(--nav-h)' }}>

        {/* ── Hero ── */}
        <section style={{ background: '#fff', padding: 'clamp(60px,10vw,120px) var(--container-px) 0' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <Link href="/blog" style={{ fontSize: '0.82rem', color: '#888', textDecoration: 'none' }}>← Blog</Link>
              <span style={{ color: '#ddd' }}>›</span>
              <Link
                href={`/services/${post.categorySlug}`}
                style={{ fontSize: '0.82rem', fontWeight: 700, color: '#C82A2A', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em' }}
              >
                {post.category}
              </Link>
            </div>

            <h1 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.9rem,5vw,3.4rem)', fontWeight: 700, lineHeight: 1.15, color: '#111', marginBottom: 24 }}>
              {post.title}
            </h1>

            <p style={{ fontSize: 'clamp(1rem,1.3vw,1.15rem)', color: '#555', lineHeight: 1.7, marginBottom: 28 }}>
              {post.excerpt}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20, paddingBottom: 32, borderBottom: '1px solid rgba(0,0,0,0.08)', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#C82A2A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.75rem', fontWeight: 700 }}>
                  AM
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#111', margin: 0 }}>AddMads Team</p>
                  <p style={{ fontSize: '0.75rem', color: '#888', margin: 0 }}>Digital Marketing Experts</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16, fontSize: '0.82rem', color: '#888' }}>
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Hero Image ── */}
        <div style={{ maxWidth: 800, margin: '32px auto 0', padding: '0 var(--container-px)' }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, aspectRatio: '16/9' }}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 800px) 92vw, 800px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* ── Article body ── */}
        <article style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(40px,5vw,64px) var(--container-px)' }}>

          {/* Intro */}
          <p style={{ fontSize: 'clamp(1.05rem,1.3vw,1.15rem)', color: '#333', lineHeight: 1.8, marginBottom: 40, paddingBottom: 32, borderBottom: '1px solid rgba(0,0,0,0.08)', fontWeight: 400 }}>
            {post.intro}
          </p>

          {/* Sections */}
          {post.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.3rem,2.2vw,1.8rem)', fontWeight: 700, color: '#111', marginBottom: 16, lineHeight: 1.25 }}>
                {section.heading}
              </h2>
              <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.8, marginBottom: section.list ? 16 : 0 }}>
                {section.body}
              </p>
              {section.list && (
                <ul style={{ margin: '0', paddingLeft: 0, listStyle: 'none' }}>
                  {section.list.map((item, j) => (
                    <li key={j} style={{ display: 'flex', gap: 12, marginBottom: 14, fontSize: '0.97rem', color: '#444', lineHeight: 1.7 }}>
                      <span style={{ color: '#C82A2A', fontWeight: 700, flexShrink: 0, marginTop: 3 }}>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div style={{ background: '#F8F8F8', borderLeft: '4px solid #C82A2A', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginTop: 48, marginBottom: 48 }}>
            <p style={{ fontFamily: 'var(--font-tight)', fontSize: '1rem', fontWeight: 600, color: '#111', marginBottom: 8 }}>Key Takeaway</p>
            <p style={{ fontSize: '0.97rem', color: '#444', lineHeight: 1.75, margin: 0 }}>
              {post.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 24, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            {post.tags.map(tag => (
              <span key={tag} style={{ display: 'inline-block', padding: '5px 14px', background: '#F0F0F0', borderRadius: 999, fontSize: '0.8rem', color: '#555' }}>
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* ── CTA Box ── */}
        <div style={{ background: '#111', color: '#fff', margin: '0 var(--container-px) clamp(48px,6vw,80px)', borderRadius: 20, padding: 'clamp(32px,4vw,56px)' }}>
          <div style={{ maxWidth: 600 }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C82A2A', marginBottom: 12 }}>
              Work with AddMads
            </p>
            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
              Ready to put these strategies to work for your business?
            </h2>
            <p style={{ fontSize: '0.97rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 28 }}>
              Our team implements everything discussed in this article for clients across India and globally. Get a free strategy call.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', background: '#C82A2A', color: '#fff', textDecoration: 'none', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem' }}>
              Get a free strategy call →
            </Link>
          </div>
        </div>

        {/* ── Related posts ── */}
        {related.length > 0 && (
          <section style={{ padding: 'clamp(48px,6vw,80px) var(--container-px)', background: '#F5F5F5' }}>
            <div style={{ maxWidth: 1240, margin: '0 auto' }}>
              <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: '#111', marginBottom: 32 }}>
                More on {post.category}
              </h2>
              <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))' }}>
                {related.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <article style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.07)' }}>
                      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                        <Image src={p.image} alt={p.title} fill sizes="30vw" style={{ objectFit: 'cover' }} />
                      </div>
                      <div style={{ padding: '16px 20px 20px' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C82A2A', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
                          {p.category}
                        </p>
                        <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1rem', fontWeight: 600, color: '#111', lineHeight: 1.35 }}>
                          {p.title}
                        </h3>
                        <p style={{ fontSize: '0.78rem', color: '#aaa', marginTop: 8 }}>{p.readTime} min read</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <UnifiedForm bgColor="#fff" showLeftInfo={false} heading="Start a project with AddMads" />

      </main>

      <Footer />
    </>
  )
}
