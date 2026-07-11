'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  { id: 1, title: 'Freight Line', category: 'Website design', image: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7abb21fca2720f8edf53e_m4.webp' },
  { id: 2, title: 'Helvetica',    category: 'Ads Direction',  image: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7abb0fe820b5e5e3b2313_m2.webp' },
  { id: 3, title: 'Marginal',     category: 'Brand Identity', image: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7abb12d1cf332d8e24e8c_m3.webp' },
]

const N = PROJECTS.length

export default function FeaturedWork() {
  const outerRefs   = useRef<(HTMLDivElement | null)[]>([])
  const imgWrapRefs = useRef<(HTMLDivElement | null)[]>([])
  const infoRefs    = useRef<(HTMLDivElement | null)[]>([])
  const cardRefs    = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const isMobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      if (isMobile) {
        // Mobile: each card slides up + reveals as it enters the viewport
        cardRefs.current.forEach((card) => {
          if (!card) return
          gsap.fromTo(card,
            { opacity: 0, y: 60 },
            {
              opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            }
          )
        })
        return
      }

      // Desktop: full-screen → card sticky transform
      PROJECTS.forEach((_, i) => {
        const outer   = outerRefs.current[i]
        const imgWrap = imgWrapRefs.current[i]
        const info    = infoRefs.current[i]
        if (!outer || !imgWrap || !info) return

        ScrollTrigger.create({
          trigger: outer,
          start: 'top top',
          end: () => '+=' + window.innerHeight,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress
            const hPad   = p * 48
            const tPad   = p * 32
            const bPad   = p * 110
            const radius = p * 20

            gsap.set(imgWrap, { top: tPad, left: hPad, right: hPad, bottom: bPad, borderRadius: radius })

            const infoP = Math.max(0, Math.min((p - 0.6) / 0.4, 1))
            gsap.set(info, { opacity: infoP, y: (1 - infoP) * 14 })
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const isMobileRender = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <div id="work" data-dark>

      {/* Section header */}
      <div style={{
        background: '#111111',
        padding: 'clamp(56px, 7vw, 96px) var(--container-px) clamp(40px, 5vw, 72px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}>
            Our work
          </div>
          <div style={{
            fontFamily: 'var(--font-tight)',
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            fontWeight: 500,
            color: '#FFFFFF',
            lineHeight: 1.05,
          }}>
            Discover.
          </div>
        </div>

        <a
          href="#contact"
          style={{
            fontFamily: 'var(--font-tight)',
            fontSize: '1.05rem',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            paddingBottom: 6,
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)'}
        >
          View all
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M1 6.5H12M6.5 1L12 6.5L6.5 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Mobile: simple stacked cards */}
      <div className="fw-mobile-cards" style={{ display: 'none', background: '#111111', padding: '0 var(--container-px) clamp(48px,6vw,80px)' }}>
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            ref={el => { cardRefs.current[i] = el }}
            style={{
              borderRadius: 16,
              overflow: 'hidden',
              marginBottom: i < N - 1 ? 20 : 0,
              opacity: 0,
            }}
          >
            <div style={{ position: 'relative', height: 'clamp(220px, 55vw, 320px)' }}>
              <Image src={project.image} alt={project.title} fill sizes="100vw" style={{ objectFit: 'cover' }} />
            </div>
            <div style={{
              background: '#1A1A1A',
              padding: '16px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-tight)', fontSize: '1.25rem', fontWeight: 500, color: '#FFFFFF', lineHeight: 1.2 }}>
                  {project.title}
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)', marginTop: 3 }}>
                  {project.category}
                </div>
              </div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em' }}>
                0{i + 1}&nbsp;/&nbsp;0{N}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: 200vh sticky per card */}
      <div className="fw-desktop-cards">
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            ref={el => { outerRefs.current[i] = el }}
            style={{ height: '200vh', background: '#111111' }}
          >
            <div style={{
              position: 'sticky',
              top: 0,
              height: '100vh',
              background: '#111111',
              overflow: 'hidden',
            }}>
              <div
                ref={el => { imgWrapRefs.current[i] = el }}
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  overflow: 'hidden',
                  zIndex: 2,
                }}
              >
                <Image src={project.image} alt={project.title} fill sizes="100vw" style={{ objectFit: 'cover' }} />
              </div>

              <div
                ref={el => { infoRefs.current[i] = el }}
                style={{
                  position: 'absolute',
                  bottom: 'clamp(20px, 2.5vw, 36px)',
                  left: 48, right: 48,
                  zIndex: 3,
                  opacity: 0,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 500, color: '#FFFFFF', lineHeight: 1.1 }}>
                    {project.title}
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginTop: 5 }}>
                    {project.category}
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)' }}>
                  0{i + 1}&nbsp;/&nbsp;0{N}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 'clamp(48px, 6vw, 80px)', background: '#111111' }} />
    </div>
  )
}
