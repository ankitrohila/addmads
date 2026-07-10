'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UnifiedForm from '@/components/UnifiedForm'
import { MEGA_MENU_CATEGORIES } from '@/constants'

function toTitle(slug: string) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

export default function SubservicePage() {
  const params = useParams()
  const serviceSlug    = params.service as string
  const subserviceSlug = params.subservice as string

  const category = MEGA_MENU_CATEGORIES.find(c => c.href.endsWith(serviceSlug))
  const subservice = category?.services.find(s => s.href.endsWith(subserviceSlug))

  const title = subservice?.label ?? toTitle(subserviceSlug)
  const parentTitle = category?.label ?? toTitle(serviceSlug)

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 'var(--nav-h)' }}>

        {/* Hero */}
        <section style={{ background: '#FFFFFF', color: '#111111', padding: 'clamp(100px,14vw,180px) var(--container-px)', minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: 780 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <Link href="/services" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(17,17,17,0.35)', textDecoration: 'none' }}>Services</Link>
              <span style={{ color: 'rgba(17,17,17,0.2)' }}>›</span>
              <Link href={`/services/${serviceSlug}`} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(17,17,17,0.5)', textDecoration: 'none' }}>{parentTitle}</Link>
              <span style={{ color: 'rgba(17,17,17,0.2)' }}>›</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: '#E60000' }}>{title}</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2.5rem,8vw,5rem)', fontWeight: 700, lineHeight: 1.1, color: '#111111', marginBottom: 24 }}>
              {title}
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem,1.4vw,1.125rem)', color: 'rgba(17,17,17,0.55)', lineHeight: 1.75, maxWidth: 560, marginBottom: 40 }}>
              Expert {title} services delivered by AddMads — data-driven, results-focused, and built to scale your business.
            </p>
            <Link href="/contact" className="btn-red" style={{ padding: '14px 32px', fontSize: '1rem', fontWeight: 600 }}>Get a Free Quote</Link>
          </div>
        </section>

        {/* What We Offer */}
        <section style={{ background: '#F8F8F8', padding: 'clamp(80px,10vw,140px) var(--container-px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E60000', marginBottom: 16 }}>Our Approach</p>
              <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: '#111111', lineHeight: 1.2, marginBottom: 20 }}>
                Why AddMads for<br />{title}?
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(17,17,17,0.6)', lineHeight: 1.75, marginBottom: 32 }}>
                We don&apos;t take a cookie-cutter approach. Every {title} engagement starts with a deep understanding of your business, audience, and competitive landscape — then we build a strategy that delivers real, measurable results.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {['Performance-first methodology', 'Transparent reporting & full visibility', 'Dedicated account manager', 'Proven track record across 250+ projects'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ width: 24, height: 24, background: '#E60000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: '#111111' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#111111', borderRadius: 16, padding: 'clamp(32px,4vw,48px)', color: '#FFFFFF' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E60000', marginBottom: 20 }}>Quick Contact</p>
              <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>Ready to Start?</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 28 }}>
                Get a free consultation and custom quote for {title}. We respond within 24 hours.
              </p>
              <a href="mailto:info@addmads.com" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                info@addmads.com
              </a>
              <Link href="/contact" className="btn-red" style={{ display: 'inline-block', marginTop: 24, padding: '12px 28px', fontSize: '0.9375rem', fontWeight: 600 }}>
                Get Free Quote →
              </Link>
            </div>
          </div>
        </section>

        {/* Other services in same category */}
        {category && (
          <section style={{ background: '#FFFFFF', padding: 'clamp(60px,8vw,100px) var(--container-px)' }}>
            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.75rem', fontWeight: 700, color: '#111111', marginBottom: 28 }}>
              More {parentTitle} Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: 12 }}>
              {category.services.filter(s => !s.href.endsWith(subserviceSlug)).map(svc => (
                <Link key={svc.href} href={svc.href} style={{
                  display: 'block', padding: '16px 20px', background: '#F5F5F5', borderRadius: 8,
                  fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: '#111111', textDecoration: 'none',
                  border: '1px solid rgba(17,17,17,0.07)', transition: 'all 0.25s',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#E60000'; el.style.color = '#E60000'; el.style.background = '#FFF5F5' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(17,17,17,0.07)'; el.style.color = '#111111'; el.style.background = '#F5F5F5' }}>
                  {svc.label} →
                </Link>
              ))}
            </div>
          </section>
        )}

        <UnifiedForm showLeftInfo={false} bgColor="#F8F8F8" />
      </main>

      <Footer />
    </>
  )
}
