'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  { num: '01', name: 'Advertising', img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7abb1dc9797d92e7aae3f_img6.webp',  desc: 'Strategic campaigns that capture attention and drive measurable results.' },
  { num: '02', name: 'Graphic',     img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68aea452324447dec982d6b3_img9.webp',   desc: 'Visual communication that tells your brand story with impact.' },
  { num: '03', name: 'Branding',    img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b53ed5e0ae8eda7ac7e424_img17.webp',  desc: 'Identity systems built to last across every touchpoint.' },
  { num: '04', name: 'Website',     img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b53ed5e0ae8eda7ac7e41b_img16.webp',  desc: 'Digital experiences that convert visitors into loyal clients.' },
]

const N = SERVICES.length

const POS = [
  { y: 0,    x: 0,  scale: 1,    zIndex: 10 },
  { y: -68,  x: 20, scale: 0.97, zIndex: 9  },
  { y: -136, x: 40, scale: 0.94, zIndex: 8  },
  { y: -204, x: 60, scale: 0.91, zIndex: 7  },
]

function lerp(a: number, b: number, t: number) { return a + (b - a) * t }

export default function ServiceShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([])
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches

    const ctx = gsap.context(() => {
      const section = sectionRef.current
      if (!section) return

      cardRefs.current.forEach((card, i) => {
        if (card) gsap.set(card, { y: POS[i].y, x: POS[i].x, scale: POS[i].scale, zIndex: POS[i].zIndex })
      })

      if (isMobile) return  // interval handled outside context

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${window.innerHeight * N}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const phase = self.progress * N
          const cur   = Math.min(Math.floor(phase), N - 1)
          const frac  = phase - cur

          setActiveIdx(cur)

          cardRefs.current.forEach((card, cardI) => {
            if (!card) return

            const slot = (cardI - cur + N) % N

            let y: number, x: number, scale: number, zIndex: number

            if (slot === 0) {
              const from = POS[0], to = POS[N - 1]
              y      = lerp(from.y, to.y, frac)
              x      = lerp(from.x, to.x, frac)
              scale  = lerp(from.scale, to.scale, frac)
              zIndex = frac > 0.45 ? POS[N - 1].zIndex - 1 : POS[0].zIndex
            } else {
              const from = POS[slot]
              const to   = POS[Math.max(slot - 1, 0)]
              y      = lerp(from.y, to.y, frac)
              x      = lerp(from.x, to.x, frac)
              scale  = lerp(from.scale, to.scale, frac)
              zIndex = frac > 0.5 ? to.zIndex : from.zIndex
            }

            gsap.set(card, { y, x, scale, zIndex })
          })
        },
      })
    }, sectionRef)

    // Mobile: auto-cycle cards every 2.5s
    let intervalId: ReturnType<typeof setInterval> | null = null
    if (isMobile) {
      let cur = 0
      intervalId = setInterval(() => {
        cur = (cur + 1) % N
        setActiveIdx(cur)
        cardRefs.current.forEach((card, cardI) => {
          if (!card) return
          const slot = (cardI - cur + N) % N
          gsap.to(card, {
            y: POS[slot].y,
            x: POS[slot].x,
            scale: POS[slot].scale,
            zIndex: POS[slot].zIndex,
            duration: 0.65,
            ease: 'power3.out',
          })
        })
      }, 2500)
    }

    return () => {
      ctx.revert()
      if (intervalId) clearInterval(intervalId)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="services-section"
      style={{
        background: '#C82A2A',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(80px, 10vw, 140px) var(--container-px)',
        overflow: 'hidden',
      }}
    >
      <div className="services-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(48px, 6vw, 96px)',
        alignItems: 'center',
        width: '100%',
      }}>

        {/* ── Left text ── */}
        <div>
          <div className="services-heading" style={{
            fontFamily: 'var(--font-tight)',
            fontSize: 'clamp(2rem, 4.5vw, 4rem)',
            fontWeight: 500,
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: 'clamp(20px, 2.5vw, 36px)',
          }}>
            We introduce methodologies, processes, and learnings to drive digital innovation projects.
          </div>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.875rem, 1.3vw, 1.1rem)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.58)',
            lineHeight: 1.75,
            maxWidth: 380,
            margin: 0,
          }}>
            Ensuring impactful experiences that drive growth and success.
          </p>

          <div style={{ marginTop: 'clamp(28px, 3.5vw, 48px)', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {SERVICES.map((s, i) => (
              <div
                key={s.num}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  opacity: activeIdx === i ? 1 : 0.38,
                  transition: 'opacity 0.4s ease',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.55)',
                  letterSpacing: '0.1em',
                  minWidth: 24,
                }}>
                  {s.num}
                </span>
                <span style={{
                  fontFamily: 'var(--font-tight)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.55rem)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  lineHeight: 1,
                }}>
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: stacking cards ── */}
        <div className="services-stack-col" style={{
          position: 'relative',
          height: 'clamp(360px, 50vh, 540px)',
          paddingTop: 220,
          boxSizing: 'content-box',
        }}>
          {SERVICES.map((svc, i) => (
            <div
              key={svc.num}
              ref={el => { cardRefs.current[i] = el }}
              className="services-card-item"
              style={{
                position: 'absolute',
                left: 0, right: 0,
                top: 220,
                bottom: 0,
                background: '#FFFFFF',
                borderRadius: 20,
                overflow: 'hidden',
                willChange: 'transform',
                transformOrigin: 'top center',
              }}
            >
              <div className="services-card-header" style={{
                padding: 'clamp(16px, 2vw, 26px) clamp(18px, 2.2vw, 28px)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'rgba(17,17,17,0.35)',
                  letterSpacing: '0.1em',
                }}>
                  {svc.num}.
                </span>
                <span className="services-card-title" style={{
                  fontFamily: 'var(--font-tight)',
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)',
                  fontWeight: 500,
                  color: '#111111',
                  lineHeight: 1,
                }}>
                  {svc.name}
                </span>
              </div>

              <div className="services-card-image" style={{ height: 'clamp(140px, 22vh, 260px)', overflow: 'hidden', position: 'relative' }}>
                <Image
                  src={svc.img}
                  alt={svc.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className="services-card-desc" style={{ padding: 'clamp(12px, 1.6vw, 20px) clamp(18px, 2.2vw, 28px)' }}>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: 'rgba(17,17,17,0.5)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
