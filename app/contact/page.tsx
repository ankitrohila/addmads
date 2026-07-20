'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import UnifiedForm from '@/components/UnifiedForm'
import FAQs from '@/components/FAQs'
import Footer from '@/components/Footer'

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/addmads',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@addmads',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/addmads',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/addmads',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 'var(--nav-h)' }}>
        {/* Hero */}
        <section
          ref={heroRef}
          style={{
            background: '#FFFFFF',
            padding: 'clamp(80px,12vw,160px) var(--container-px)',
            borderBottom: '1px solid rgba(17,17,17,0.07)',
          }}
        >
          <div style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 'clamp(48px,6vw,80px)',
            alignItems: 'center',
          }}>
            {/* Left */}
            <div>
              <p data-anim style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)', marginBottom: 20 }}>
                Contact Us
              </p>
              <h1
                data-anim
                style={{
                  fontFamily: 'var(--font-tight)',
                  fontSize: 'clamp(3rem,8vw,6rem)',
                  fontWeight: 500,
                  lineHeight: 1.05,
                  color: '#111111',
                  marginBottom: 28,
                }}
              >
                Let&apos;s begin<br />the project
              </h1>
              <p
                data-anim
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem,1.4vw,1.125rem)',
                  color: 'rgba(17,17,17,0.55)',
                  lineHeight: 1.75,
                  maxWidth: 480,
                  marginBottom: 36,
                }}
              >
                Whether you have a project in mind or just want to explore what&apos;s possible — we&apos;re ready. Let&apos;s talk.
              </p>
              <Link
                data-anim
                href="#contact-form"
                className="btn-red"
                style={{ padding: '14px 32px', fontSize: '1rem', fontWeight: 600 }}
              >
                Work with us
              </Link>
            </div>

            {/* Right — circular social icons */}
            <div data-anim style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)', marginBottom: 8, textAlign: 'center' }}>
                Follow Us
              </p>
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    border: '1px solid rgba(17,17,17,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#111111',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                    background: '#FFFFFF',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#111111'; el.style.color = '#FFFFFF'; el.style.borderColor = '#111111' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#FFFFFF'; el.style.color = '#111111'; el.style.borderColor = 'rgba(17,17,17,0.12)' }}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Unified contact form */}
        <div id="contact-form">
          <UnifiedForm
            heading="Send Us a Message"
            subheading="Fill in the details below and we'll get back to you within 24 hours to discuss how we can help."
            bgColor="#F8F8F8"
          />
        </div>

        {/* FAQs */}
        <FAQs />
      </main>

      <Footer />
    </>
  )
}
