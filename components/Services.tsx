'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SERVICES } from '@/constants'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            delay: i * 0.08,
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#FFFFFF',
        padding: 'clamp(80px, 10vw, 140px) var(--container-px)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {SERVICES.map((svc, i) => (
            <div
              key={svc.number}
              ref={el => { cardsRef.current[i] = el }}
              style={{
                opacity: 0,
                background: '#FFFFFF',
                border: '1px solid rgba(17,17,17,0.08)',
                borderRadius: 12,
                padding: 'clamp(24px, 3vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 340,
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(17,17,17,0.14)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(17,17,17,0.08)'
              }}
            >
              <div>
                <span style={{
                  fontFamily: 'var(--font-tight)',
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: 500,
                  color: 'rgba(230,0,0,0.15)',
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: 16,
                }}>
                  {svc.number}
                </span>

                <h3 style={{
                  fontFamily: 'var(--font-tight)',
                  fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
                  fontWeight: 600,
                  color: '#111111',
                  lineHeight: 1.3,
                  marginBottom: 12,
                }}>
                  {svc.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: 'rgba(17,17,17,0.55)',
                  lineHeight: 1.7,
                  margin: '0 0 20px 0',
                }}>
                  {svc.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                  {svc.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.6875rem',
                        fontWeight: 500,
                        color: '#E60000',
                        background: 'rgba(230,0,0,0.06)',
                        padding: '4px 10px',
                        borderRadius: 4,
                        textTransform: 'uppercase',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/services/${svc.slug}`}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#E60000',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '12px' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '6px' }}
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
