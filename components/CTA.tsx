'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 48 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      data-dark
      style={{
        background: '#111111',
        padding: 'clamp(80px, 12vw, 160px) var(--container-px)',
        textAlign: 'center',
      }}
    >
      <div ref={contentRef} style={{ opacity: 0, maxWidth: 680, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-tight)',
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: 500,
          color: '#FFFFFF',
          lineHeight: 1.2,
          marginBottom: 16,
        }}>
          Ready to Transform Your Digital Presence?
        </h2>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(0.9375rem, 1.3vw, 1.1rem)',
          color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.7,
          marginBottom: 'clamp(32px, 4vw, 48px)',
        }}>
          Let&apos;s discuss which services are perfect for your business goals.
        </p>
        <Link
          href="/contact"
          className="btn-red"
          style={{ padding: '16px 36px', fontSize: '1.05rem' }}
        >
          Start Your Project
        </Link>
      </div>
    </section>
  )
}
