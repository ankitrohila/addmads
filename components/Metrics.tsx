'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const DESC    = 'We provide tailored solutions built on creativity, precision, and trust — ensuring quality results and a smooth experience every step of the way.'
const CLOSING = 'We deliver creative solutions with quality results that make an impact.'

const STATS = [
  { value: 92,  suffix: '%',  label: 'Client satisfaction rate, fostering long-term relationships and repeat business' },
  { value: 100, suffix: '+',  label: 'Active users experiencing our design every day via products we made' },
  { value: 8,   suffix: 'yr', label: 'Studio excellence pushing the limits of design and creative strategy' },
]

export default function Metrics() {
  const sectionRef  = useRef<HTMLElement>(null)
  const descCardRef = useRef<HTMLDivElement>(null)
  const cardRefs    = useRef<(HTMLDivElement | null)[]>([])
  const numRefs     = useRef<(HTMLSpanElement | null)[]>([])
  const barRefs     = useRef<(HTMLDivElement | null)[]>([])
  const barNumRefs  = useRef<(HTMLSpanElement | null)[]>([])
  const closingRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768

    const ctx = gsap.context(() => {
      const section = sectionRef.current
      if (!section) return

      const lightCards = [descCardRef.current, ...cardRefs.current].filter(Boolean) as HTMLElement[]

      // ── Color inversion: section scrolls into view (top bottom → top top) ──
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const invP = self.progress
          const bg   = Math.round(245 * invP)
          section.style.background = `rgb(${bg},${bg},${bg})`

          const c = Math.round(255 - (255 - 17) * invP)

          section.querySelectorAll<HTMLElement>('.wc-title').forEach(el => { el.style.color = `rgb(${c},${c},${c})` })
          section.querySelectorAll<HTMLElement>('.wc-sub').forEach(el => { el.style.color = `rgba(${c},${c},${c},0.5)` })
          section.querySelectorAll<HTMLElement>('.wc-label').forEach(el => { el.style.color = `rgba(${c},${c},${c},0.35)` })
          section.querySelectorAll<HTMLElement>('.stat-num').forEach(el => { el.style.color = `rgb(${c},${c},${c})` })
          section.querySelectorAll<HTMLElement>('.stat-label').forEach(el => { el.style.color = `rgba(${c},${c},${c},0.5)` })
          section.querySelectorAll<HTMLElement>('.bar-end').forEach(el => { el.style.color = `rgba(${c},${c},${c},0.4)` })
          section.querySelectorAll<HTMLElement>('.bar-pill').forEach(el => {
            el.style.background = invP > 0.5 ? `rgba(0,0,0,0.07)` : `rgba(255,255,255,${(0.12 * (1 - invP)).toFixed(3)})`
          })

          // Light cards: rgba(255,255,255, 0.06 → 1) as inversion completes
          const alpha = (0.06 + 0.94 * invP).toFixed(3)
          lightCards.forEach(card => {
            card.style.background  = `rgba(255,255,255,${alpha})`
            card.style.borderColor = `rgba(${c},${c},${c},0.1)`
          })
        },
      })

      // ── Cards fade up on scroll enter ──
      const allAnimCards = [descCardRef.current, ...cardRefs.current, closingRef.current].filter(Boolean) as HTMLElement[]
      allAnimCards.forEach(card => {
        gsap.fromTo(card,
          { opacity: 0, y: isMobile ? 0 : 42 },
          {
            opacity: 1, y: 0,
            duration: isMobile ? 0.5 : 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: isMobile ? 'top 100%' : 'top 90%',
              toggleActions: 'play none none none',
              invalidateOnRefresh: true,
            },
          }
        )
      })

      // ── Counter + bar per stat card ──
      STATS.forEach((stat, i) => {
        ScrollTrigger.create({
          trigger: cardRefs.current[i],
          start: 'top 85%',
          once: true,
          invalidateOnRefresh: true,
          onEnter: () => {
            const numEl    = numRefs.current[i]
            const barEl    = barRefs.current[i]
            const barNumEl = barNumRefs.current[i]
            if (!numEl || !barEl || !barNumEl) return

            const obj = { val: 0 }
            gsap.to(obj, {
              val: stat.value,
              duration: 1.8,
              ease: 'power2.out',
              onUpdate: () => {
                const v = Math.round(obj.val)
                numEl.textContent    = v + stat.suffix
                barNumEl.textContent = v + stat.suffix
              },
            })
            gsap.fromTo(barEl, { width: '0%' }, { width: '100%', duration: 2.0, ease: 'power2.out' })
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#000000',
        padding: 'clamp(80px, 10vw, 140px) var(--container-px)',
        position: 'relative',
      }}
    >
      <div className="metrics-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(40px, 5vw, 80px)',
        alignItems: 'stretch',
      }}>

        {/* ── Left: wrapper stretches to full grid height so sticky has room ── */}
        <div style={{ alignSelf: 'stretch' }}>
        <div className="metrics-sticky" style={{
          position: 'sticky',
          top: 'clamp(80px, 10vw, 130px)',
        }}>
          <div className="wc-title" style={{
            fontFamily: 'var(--font-tight)',
            fontSize: 'clamp(3rem, 8vw, 7.2rem)',
            fontWeight: 500,
            lineHeight: 1.1,
            color: '#FFFFFF',
          }}>
            Why client<br />choose us
          </div>

          <p className="wc-sub" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.75,
            margin: '18px 0 0',
            maxWidth: 280,
          }}>
            We provide tailored solutions built on creativity, precision, and trust.
          </p>

          <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 28, height: 2, background: '#C82A2A', borderRadius: 2, flexShrink: 0 }} />
            <span className="wc-label" style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              color: 'rgba(255,255,255,0.3)',
            }}>
              Our numbers
            </span>
          </div>
        </div>
        </div>

        {/* ── Right: naturally scrolling cards ── */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(10px, 1.2vw, 16px)',
        }}>

          {/* Description card */}
          <div
            ref={descCardRef}
            style={{
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 18,
              padding: 'clamp(28px, 3vw, 44px)',
              border: '1px solid rgba(255,255,255,0.1)',
              opacity: 0,
            }}
          >
            <p className="stat-num" style={{
              fontFamily: 'var(--font-tight)',
              fontSize: 'clamp(1.1rem, 2.5vw, 2.25rem)',
              fontWeight: 500,
              color: '#FFFFFF',
              lineHeight: 1.45,
              margin: 0,
            }}>
              {DESC}
            </p>
          </div>

          {/* Stat cards */}
          {STATS.map((stat, i) => (
            <div
              key={i}
              ref={el => { cardRefs.current[i] = el }}
              style={{
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 18,
                padding: 'clamp(28px, 3vw, 44px)',
                border: '1px solid rgba(255,255,255,0.1)',
                opacity: 0,
              }}
            >
              {/* Counter row + pill */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(14px, 2vw, 24px)',
                marginBottom: 18,
              }}>
                <span
                  ref={el => { numRefs.current[i] = el }}
                  className="stat-num"
                  style={{
                    fontFamily: 'var(--font-tight)',
                    fontSize: 'clamp(2.8rem, 6vw, 5.4rem)',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  0{stat.suffix}
                </span>

                {/* Pill bar + end number */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <div
                    className="bar-pill"
                    style={{
                      flex: 1,
                      height: 28,
                      borderRadius: 100,
                      background: 'rgba(255,255,255,0.12)',
                      position: 'relative',
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      left: 10, right: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      height: 3,
                      borderRadius: 100,
                      overflow: 'hidden',
                    }}>
                      <div
                        ref={el => { barRefs.current[i] = el }}
                        style={{
                          height: '100%',
                          width: '0%',
                          background: '#C82A2A',
                          borderRadius: 100,
                        }}
                      />
                    </div>
                  </div>
                  <span
                    ref={el => { barNumRefs.current[i] = el }}
                    className="bar-end"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.4)',
                      letterSpacing: '0.05em',
                      flexShrink: 0,
                      minWidth: 32,
                      textAlign: 'right' as const,
                    }}
                  >
                    0{stat.suffix}
                  </span>
                </div>
              </div>

              <p className="stat-label" style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.875rem, 1.1vw, 1rem)',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.65,
                margin: 0,
              }}>
                {stat.label}
              </p>
            </div>
          ))}

          {/* Closing black card */}
          <div
            ref={closingRef}
            style={{
              background: '#111111',
              borderRadius: 18,
              padding: 'clamp(28px, 3vw, 44px)',
              border: '1px solid rgba(255,255,255,0.06)',
              opacity: 0,
            }}
          >
            <p style={{
              fontFamily: 'var(--font-tight)',
              fontSize: 'clamp(1.4rem, 3vw, 2.8rem)',
              fontWeight: 500,
              color: '#FFFFFF',
              lineHeight: 1.3,
              margin: 0,
            }}>
              {CLOSING}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
