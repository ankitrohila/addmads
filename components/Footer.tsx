'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FOOTER_SERVICES } from '@/constants'

gsap.registerPlugin(ScrollTrigger)

const COL_STUDIO = [
  { label: 'Home',      href: '/'          },
  { label: 'About',     href: '/about'     },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact',   href: '/contact'   },
]

const COL_LEGAL = [
  { label: 'Privacy Policy',      href: '/privacy-policy'      },
  { label: 'Terms of Service',    href: '/terms-of-service'    },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
]

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const mobileServicesRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    // Mouse wheel → horizontal scroll on the services pill list
    const el = mobileServicesRef.current
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return  // already horizontal
        e.preventDefault()
        el.scrollLeft += e.deltaY * 1.2
      }
      el.addEventListener('wheel', onWheel, { passive: false })
      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current?.querySelectorAll('[data-f]') ?? [],
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.06,
          scrollTrigger: { trigger: footerRef.current, start: 'top 92%', toggleActions: 'play none none none' },
        }
      )
    }, footerRef)
    return () => ctx.revert()
  }, [])

  const year = new Date().getFullYear()

  return (
    <footer ref={footerRef} data-dark style={{ background: '#111111', color: '#FFFFFF' }}>
      <div style={{ padding: 'clamp(48px,6vw,80px) var(--container-px) clamp(32px,4vw,56px)' }}>

        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 'clamp(24px,3vw,48px)',
          marginBottom: 'clamp(32px,4vw,56px)',
        }}>

          {/* Brand */}
          <div data-f style={{ opacity: 0 }}>
            <Link href="/" style={{ display: 'block', marginBottom: 16, width: 'fit-content' }}>
              <Image src="/logo-dark.svg" alt="AddMads" width={140} height={44} style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
            </Link>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, maxWidth: 240, margin: '0 0 24px 0' }}>
              Performance marketing &amp; digital growth agency. We turn spend into scale.
            </p>
            {/* Social icons — circular black/white */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { label: 'Instagram', href: 'https://instagram.com/addmads', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg> },
                { label: 'YouTube', href: 'https://youtube.com/@addmads', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg> },
                { label: 'LinkedIn', href: 'https://linkedin.com/company/addmads', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                { label: 'X', href: 'https://x.com/addmads', svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#FFFFFF'; el.style.color = '#111111'; el.style.borderColor = '#FFFFFF' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = 'rgba(255,255,255,0.65)'; el.style.borderColor = 'rgba(255,255,255,0.18)' }}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Studio links */}
          <div data-f style={{ opacity: 0 }}>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {COL_STUDIO.map(l => (
                <li key={l.label}>
                  <Link href={l.href} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(223,223,223,0.85)', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(223,223,223,0.85)'}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
            {/* Legal links under company nav */}
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {COL_LEGAL.map(l => (
                <Link key={l.label} href={l.href} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.28)'}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div data-f style={{ opacity: 0 }}>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>
              Services
            </h4>
            {/* Desktop: vertical scroll list */}
            <ul className="footer-services-desktop" data-lenis-prevent style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              maxHeight: 260,
              overflowY: 'auto',
              paddingRight: 4,
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(255,255,255,0.15) transparent',
            }}>
              {FOOTER_SERVICES.map(l => (
                <li key={l.label}>
                  <Link href={l.href} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(223,223,223,0.7)', textDecoration: 'none', transition: 'color 0.3s', display: 'block' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(223,223,223,0.7)'}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
            {/* Mobile: horizontal slide scroll */}
            <ul ref={mobileServicesRef} className="footer-services-mobile" style={{ listStyle: 'none', display: 'none' }}>
              {FOOTER_SERVICES.map(l => (
                <li key={l.label} style={{ flexShrink: 0 }}>
                  <Link href={l.href} style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.8125rem',
                    color: 'rgba(223,223,223,0.75)', textDecoration: 'none',
                    display: 'block', padding: '6px 14px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 20, whiteSpace: 'nowrap',
                  }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div data-f style={{ opacity: 0 }}>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li>
                <a href="mailto:info@addmads.com" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(223,223,223,0.85)', textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: 10, transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(223,223,223,0.85)'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  info@addmads.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(223,223,223,0.85)', textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: 10, transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(223,223,223,0.85)'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +91 98765 43210
                </a>
              </li>
              <li>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(223,223,223,0.85)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Sonipat, Haryana, India
                </span>
              </li>
            </ul>

          </div>

        </div>

        {/* Bottom bar */}
        <div data-f style={{ opacity: 0, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(141,141,141,0.9)', fontWeight: 500 }}>
            © {year} AddMads. All rights reserved.
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(141,141,141,0.9)', background: 'none', border: 'none' }}
          >
            ↑ Back to top
          </button>
        </div>

        {/* Giant wordmark */}
        <div className="footer-wordmark" style={{ marginTop: 'clamp(32px,4vw,64px)' }}>
          AddMads
        </div>

      </div>
    </footer>
  )
}
