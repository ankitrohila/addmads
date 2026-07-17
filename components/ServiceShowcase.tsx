'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  { num: '01', name: 'Performance Marketing', img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7abb1dc9797d92e7aae3f_img6.webp',  desc: 'Data-driven campaigns across Google & Meta that turn ad spend into measurable growth.' },
  { num: '02', name: 'Branding & Identity',   img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68aea452324447dec982d6b3_img9.webp',   desc: 'From strategy to logo — brand systems that people remember and trust.' },
  { num: '03', name: 'SEO & Content',         img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b53ed5e0ae8eda7ac7e424_img17.webp',  desc: 'Rank higher, get found — technical SEO and content that compounds month on month.' },
  { num: '04', name: 'IT & Web Dev',          img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b53ed5e0ae8eda7ac7e41b_img16.webp',  desc: 'Fast, conversion-optimised websites on WordPress, Shopify, Next.js, and more.' },
]

const N = SERVICES.length

// Desktop POS: stagger with x for depth
const POS_D = [
  { y: 0,    x: 0,  scale: 1,    zIndex: 10 },
  { y: -68,  x: 20, scale: 0.97, zIndex: 9  },
  { y: -136, x: 40, scale: 0.94, zIndex: 8  },
  { y: -204, x: 60, scale: 0.91, zIndex: 7  },
]

// Mobile POS: no x offset — cards centered
const POS_M = [
  { y: 0,    x: 0, scale: 1,    zIndex: 10 },
  { y: -56,  x: 0, scale: 0.97, zIndex: 9  },
  { y: -112, x: 0, scale: 0.94, zIndex: 8  },
  { y: -168, x: 0, scale: 0.91, zIndex: 7  },
]

function lerp(a: number, b: number, t: number) { return a + (b - a) * t }

export default function ServiceShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([])
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768
    const POS = isMobile ? POS_M : POS_D

    const ctx = gsap.context(() => {
      const section = sectionRef.current
      if (!section) return

      cardRefs.current.forEach((card, i) => {
        if (card) gsap.set(card, { y: POS[i].y, x: POS[i].x, scale: POS[i].scale, zIndex: POS[i].zIndex })
      })

      if (isMobile) return

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
          height: 'clamp(300px, 45vh, 500px)',
          paddingTop: 160,
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
                top: 160,
                bottom: 0,
                background: '#FFFFFF',
                borderRadius: 20,
                overflow: 'hidden',
                willChange: 'transform',
                transformOrigin: 'top center',
              }}
            >
              <div className="services-card-header" style={{
                padding: 'clamp(14px, 1.8vw, 22px) clamp(16px, 2vw, 24px)',
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
                  fontSize: 'clamp(1.25rem, 2.2vw, 2.2rem)',
                  fontWeight: 500,
                  color: '#111111',
                  lineHeight: 1,
                  textAlign: 'right',
                }}>
                  {svc.name}
                </span>
              </div>

              <div className="services-card-image" style={{ height: 'clamp(120px, 18vh, 240px)', overflow: 'hidden', position: 'relative' }}>
                <Image
                  src={svc.img}
                  alt={svc.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className="services-card-desc" style={{ padding: 'clamp(10px, 1.4vw, 18px) clamp(16px, 2vw, 24px)' }}>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
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
