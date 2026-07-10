'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MEGA_MENU_CATEGORIES } from '@/constants'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UnifiedForm from '@/components/UnifiedForm'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: '250+', label: 'Projects Delivered' },
  { value: '60+', label: 'Global Clients' },
  { value: '7yr', label: 'Industry Experience' },
  { value: '98%', label: 'Client Satisfaction' },
]

const SERVICE_IMAGES: Record<string, string> = {
  marketing: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  branding:  'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
  graphics:  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  seo:       'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
  it:        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
}

// TODO: replace with client assets

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [activeHover, setActiveHover] = useState<number | null>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelectorAll('[data-a]') ?? [],
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power4.out', stagger: 0.12, delay: 0.2 }
      )

      document.querySelectorAll('[data-scroll]').forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none none' },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (imageRef.current) {
      if (activeHover !== null) {
        gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' })
      } else {
        gsap.to(imageRef.current, { opacity: 0, scale: 0.95, duration: 0.25, ease: 'power2.in' })
      }
    }
  }, [activeHover])

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 'var(--nav-h)' }}>

        {/* ── 1. HERO ── */}
        <section
          ref={heroRef}
          data-dark
          style={{ background: '#111111', color: '#FFFFFF', padding: 'clamp(100px,14vw,180px) var(--container-px) clamp(80px,10vw,140px)', minHeight: '70vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(230,0,0,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 900, position: 'relative', zIndex: 1 }}>
            <div data-a style={{ opacity: 0 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E60000', marginBottom: 24, background: 'rgba(230,0,0,0.1)', padding: '6px 14px', borderRadius: 20 }}>
                Our Services
              </span>
            </div>
            <h1 data-a style={{ opacity: 0, fontFamily: 'var(--font-tight)', fontSize: 'clamp(3rem,9vw,7rem)', fontWeight: 700, lineHeight: 1.05, color: '#FFFFFF', marginBottom: 28, letterSpacing: '-0.02em' }}>
              Everything You<br />Need to <span style={{ color: '#E60000' }}>Grow</span>
            </h1>
            <p data-a style={{ opacity: 0, fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem,1.5vw,1.25rem)', color: 'rgba(255,255,255,0.65)', maxWidth: 560, lineHeight: 1.75, marginBottom: 40 }}>
              From performance marketing to web development, branding to SEO — we deliver end-to-end digital solutions that move the needle.
            </p>
            <div data-a style={{ opacity: 0 }}>
              <Link href="/contact" className="btn-red" style={{ padding: '14px 32px', fontSize: '1rem', fontWeight: 600 }}>
                Start a Project
              </Link>
            </div>
          </div>

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexWrap: 'wrap' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ flex: 1, minWidth: 120, padding: '20px var(--container-px)', borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 700, color: '#E60000' }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2. SERVICES ACCORDION LIST WITH HOVER IMAGES ── */}
        <section style={{ background: '#FFFFFF', padding: 'clamp(80px,10vw,140px) var(--container-px)', position: 'relative' }}>
          <div data-scroll style={{ opacity: 0, marginBottom: 64 }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E60000', marginBottom: 16 }}>What We Do</p>
            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, color: '#111111', lineHeight: 1.15 }}>
              Services Built for<br />Measurable Growth
            </h2>
          </div>

          {/* Floating hover image */}
          <div
            ref={imageRef}
            style={{
              position: 'fixed',
              top: '50%',
              right: '8%',
              width: 320,
              height: 400,
              borderRadius: 16,
              overflow: 'hidden',
              opacity: 0,
              scale: 0.95,
              pointerEvents: 'none',
              zIndex: 30,
              transform: 'translateY(-50%)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
            }}
          >
            {activeHover !== null && (
              <Image
                src={SERVICE_IMAGES[MEGA_MENU_CATEGORIES[activeHover]?.id] || SERVICE_IMAGES.marketing}
                alt={MEGA_MENU_CATEGORIES[activeHover]?.label || ''}
                fill
                sizes="320px"
                style={{ objectFit: 'cover' }}
              />
            )}
          </div>

          <div>
            {MEGA_MENU_CATEGORIES.map((cat, i) => (
              <div
                key={cat.id}
                data-scroll
                style={{
                  opacity: 0,
                  borderTop: '1px solid rgba(17,17,17,0.08)',
                  padding: '32px 0',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  borderBottom: i === MEGA_MENU_CATEGORIES.length - 1 ? '1px solid rgba(17,17,17,0.08)' : 'none',
                }}
                onMouseEnter={() => setActiveHover(i)}
                onMouseLeave={() => setActiveHover(null)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 24, flex: 1 }}>
                    <span style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.75rem,4vw,3rem)', fontWeight: 700, lineHeight: 1, color: activeHover === i ? '#E60000' : '#111111', transition: 'color 0.3s' }}>
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.25rem,2.5vw,2rem)', fontWeight: 600, color: activeHover === i ? '#E60000' : '#111111', transition: 'color 0.3s', margin: 0, lineHeight: 1.2 }}>
                        {cat.label}
                      </h3>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(17,17,17,0.5)', margin: '6px 0 0 0' }}>{cat.description}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', maxWidth: 360, justifyContent: 'flex-end' }}>
                    {cat.services.slice(0, 4).map(svc => (
                      <Link key={svc.href} href={svc.href} onClick={e => e.stopPropagation()} style={{
                        fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500,
                        color: '#E60000', background: 'rgba(230,0,0,0.06)', padding: '4px 12px',
                        borderRadius: 20, textDecoration: 'none', transition: 'background 0.2s',
                      }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(230,0,0,0.12)'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(230,0,0,0.06)'}>
                        {svc.label}
                      </Link>
                    ))}
                  </div>
                  <Link href={cat.href} style={{
                    flexShrink: 0, width: 48, height: 48, borderRadius: '50%',
                    background: activeHover === i ? '#E60000' : '#111111',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#FFFFFF', fontSize: '1.25rem', textDecoration: 'none',
                    transition: 'background 0.3s, transform 0.3s',
                    transform: activeHover === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>→</Link>
                </div>

                {/* Sub-services expanded on hover */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: 12,
                  maxHeight: activeHover === i ? 200 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.5s ease, opacity 0.4s ease, margin-top 0.4s',
                  opacity: activeHover === i ? 1 : 0,
                  marginTop: activeHover === i ? 24 : 0,
                }}>
                  {cat.services.map(svc => (
                    <Link key={svc.href} href={svc.href} style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', fontWeight: 400,
                      color: '#333', textDecoration: 'none', padding: '8px 14px',
                      borderRadius: 8, background: 'rgba(17,17,17,0.03)',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(17,17,17,0.07)'; el.style.color = '#111' }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(17,17,17,0.03)'; el.style.color = '#333' }}>
                      {svc.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. WHY US — dark section ── */}
        <section data-dark style={{ background: '#111111', padding: 'clamp(80px,10vw,140px) var(--container-px)', color: '#FFFFFF' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 'clamp(40px,5vw,64px)', alignItems: 'center' }}>
            <div data-scroll style={{ opacity: 0 }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E60000', marginBottom: 16 }}>Why AddMads</p>
              <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, lineHeight: 1.15 }}>
                Results-First.<br />Always.
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginTop: 20, maxWidth: 400 }}>
                Every campaign, every design, every line of code is engineered to deliver a measurable outcome. We don&apos;t just do work — we deliver results.
              </p>
              <Link href="/contact" className="btn-red" style={{ display: 'inline-block', marginTop: 32, padding: '12px 28px', fontSize: '0.9375rem', fontWeight: 600 }}>
                Let&apos;s Talk
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[
                { title: 'Data-Driven', body: 'Every decision backed by analytics and performance data' },
                { title: 'Fast Delivery', body: 'Agile execution with clear timelines and milestones' },
                { title: 'Transparent', body: 'Full visibility into campaigns, reports, and spend' },
                { title: 'ROI Focused', body: 'We measure success by the impact on your bottom line' },
              ].map((item, i) => (
                <div key={i} data-scroll style={{ opacity: 0, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: 24 }}>
                  <h4 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.125rem', fontWeight: 600, color: '#FFFFFF', marginBottom: 8 }}>{item.title}</h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. IT SERVICES SPOTLIGHT ── */}
        <section style={{ background: '#F5F5F5', padding: 'clamp(80px,10vw,140px) var(--container-px)' }}>
          <div data-scroll style={{ opacity: 0, marginBottom: 56 }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E60000', marginBottom: 16 }}>IT Services</p>
            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, color: '#111111', lineHeight: 1.15 }}>
              Build Anything.<br />On Any Platform.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
            {[
              { label: 'WordPress', href: '/services/it-services/wordpress' },
              { label: 'Shopify', href: '/services/it-services/shopify' },
              { label: 'React & Next.js', href: '/services/it-services/react-nextjs' },
              { label: 'PHP / Laravel', href: '/services/it-services/laravel' },
              { label: 'Webflow / Wix', href: '/services/it-services/webflow-wix' },
              { label: 'Web Apps & SaaS', href: '/services/it-services/web-apps' },
              { label: 'Landing Pages', href: '/services/it-services/landing-pages' },
              { label: 'AI & Automation', href: '/services/it-services/ai-automation' },
            ].map((item, i) => (
              <Link key={i} data-scroll href={item.href} style={{
                opacity: 0,
                display: 'flex', flexDirection: 'column', gap: 12, padding: '24px 20px',
                background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.07)', borderRadius: 12,
                textDecoration: 'none', color: '#111111', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#E60000'; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 8px 24px rgba(230,0,0,0.1)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(17,17,17,0.07)'; el.style.transform = 'none'; el.style.boxShadow = 'none' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', fontWeight: 600 }}>{item.label}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: '#E60000', fontWeight: 500 }}>Learn More →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 5. CONTACT CTA ── */}
        <section data-dark style={{ background: '#E60000', padding: 'clamp(80px,10vw,120px) var(--container-px)', textAlign: 'center' }}>
          <h2 data-scroll style={{ opacity: 0, fontFamily: 'var(--font-tight)', fontSize: 'clamp(2rem,6vw,4.5rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1, marginBottom: 24 }}>
            Ready to Scale<br />Your Business?
          </h2>
          <p data-scroll style={{ opacity: 0, fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', maxWidth: 520, margin: '0 auto 40px auto', lineHeight: 1.7 }}>
            Tell us your goal. We&apos;ll build the strategy to get you there.
          </p>
          <div data-scroll style={{ opacity: 0, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', padding: '16px 40px', background: '#FFFFFF', color: '#E60000', fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, textDecoration: 'none', borderRadius: 6, transition: 'transform 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'none'}>
              Get a Free Consultation
            </Link>
          </div>
        </section>

        {/* ── 6. UNIFIED FORM ── */}
        <UnifiedForm showLeftInfo={false} bgColor="#F8F8F8" />

      </main>

      <Footer />
    </>
  )
}
