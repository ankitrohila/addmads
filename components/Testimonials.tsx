'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TESTIMONIALS = [
  {
    id: 1, author: 'Manuel Emano', role: 'Leader of Wob.',
    stars: 4.5, tag: 'Great design', rating: '4.5/5',
    quote: '"Working with this team was effortless. They understood our vision and delivered designs that exceeded expectations."',
    color: '#F5A623', initials: 'ME',
  },
  {
    id: 2, author: 'Michael Blanket', role: 'CEO of Warden.',
    stars: 5, tag: 'Fast Results', rating: '5/5',
    quote: '"They brought clarity to our ideas and turned them into something tangible. The process felt collaborative and smooth."',
    color: '#4CAF50', initials: 'MB',
  },
  {
    id: 3, author: 'Andrew Smith', role: 'Owner of Ajay.',
    stars: 5, tag: 'Awesome Work', rating: '5/5',
    quote: '"Professional, detail-oriented, and genuinely invested in our success. We couldn\'t have asked for a better partner."',
    color: '#2196F3', initials: 'AS',
  },
  {
    id: 4, author: 'Carl Jackson', role: 'Owner of Vee.',
    stars: 4, tag: 'Best Team', rating: '4/5',
    quote: '"What impressed us most was their ability to listen and deliver creative solutions that truly fit our goals."',
    color: '#9C27B0', initials: 'CJ',
  },
]

const N = TESTIMONIALS.length

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < Math.round(count) ? '#F5A623' : '#DEDEDE', fontSize: '0.95rem' }}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const compRefs   = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current
      if (!section) return

      const comps = compRefs.current.filter(Boolean) as HTMLDivElement[]
      const isMobile = window.innerWidth < 768

      // Mobile: simple fade-in for each comp, no pin, no 3D
      if (isMobile) {
        gsap.set(comps, { opacity: 0, y: 40 })
        comps.forEach((comp) => {
          gsap.fromTo(comp,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
              scrollTrigger: { trigger: comp, start: 'top 88%', toggleActions: 'play none none none' } }
          )
        })
        return
      }

      // All compositions start hidden
      gsap.set(comps, { opacity: 0, y: 80, rotateY: 0, rotateX: 0 })

      // Pin section; each testimonial gets 2 viewport heights:
      //   first half → fly in + hold
      //   second half → 3D tilt + exit
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${window.innerHeight * N * 2}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress

          comps.forEach((comp, i) => {
            const tStart = i / N
            const tEnd   = (i + 1) / N

            if (p < tStart) {
              gsap.set(comp, { opacity: 0, y: 80, rotateY: 0, rotateX: 0 })
              return
            }
            if (p > tEnd) {
              gsap.set(comp, { opacity: 0, y: -80, rotateY: -32, rotateX: 8 })
              return
            }

            const rel = (p - tStart) / (tEnd - tStart)  // 0→1 within this testimonial

            if (rel < 0.38) {
              // Enter: fly up from below
              const ep = rel / 0.38
              gsap.set(comp, { opacity: ep, y: (1 - ep) * 80, rotateY: 0, rotateX: 0 })
            } else if (rel < 0.52) {
              // Hold: fully visible, flat
              gsap.set(comp, { opacity: 1, y: 0, rotateY: 0, rotateX: 0 })
            } else if (rel < 0.82) {
              // Tilt: rotate into 3D perspective
              const tp = (rel - 0.52) / 0.30
              gsap.set(comp, { opacity: 1, y: 0, rotateY: tp * -32, rotateX: tp * 8 })
            } else {
              // Exit: fade + float up while tilted
              const xp = (rel - 0.82) / 0.18
              gsap.set(comp, { opacity: 1 - xp, y: -xp * 70, rotateY: -32, rotateX: 8 })
            }
          })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* ── Title section — full viewport, normal scroll ── */}
      <div className="testimonials-title-wrap" style={{
        height: '100vh',
        background: '#F5F5F5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 var(--container-px)',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-tight)',
          fontSize: 'clamp(2.2rem, 6vw, 5.5rem)',
          fontWeight: 500,
          color: '#111111',
          textAlign: 'center',
          margin: 0,
          lineHeight: 1.1,
        }}>
          Testimonials from our clients.
        </h2>
      </div>

      {/* ── Card compositions — GSAP pinned on desktop, stacked on mobile ── */}
      <section
        ref={sectionRef}
        className="testimonials-section"
        style={{
          position: 'relative',
          height: '100vh',
          background: '#F5F5F5',
          overflow: 'hidden',
        }}
      >
        {/* Perspective container */}
        <div style={{
          position: 'absolute',
          inset: 0,
          perspective: '1200px',
          perspectiveOrigin: '50% 50%',
        }}>
          {TESTIMONIALS.map((t, i) => (
            /* Composition — centered via inset:0 + margin:auto, GSAP adds rotateY/X */
            <div
              key={t.id}
              ref={el => { compRefs.current[i] = el }}
              className="testimonial-comp"
              style={{
                position: 'absolute',
                inset: 0,
                margin: 'auto',
                width: 'clamp(300px, 88vw, 680px)',
                height: 'clamp(340px, 58vh, 540px)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* ── Main grey frame ── */}
              <div style={{
                position: 'absolute',
                top: '8%', left: '24%',
                width: '52%', height: '70%',
                background: '#E8E8E8',
                borderRadius: 28,
                transform: 'translateZ(0px)',
              }} />

              {/* ── Name + role card ── */}
              <div style={{
                position: 'absolute',
                top: '28%', left: 0,
                width: 'clamp(155px, 31%, 200px)',
                background: '#FFFFFF',
                borderRadius: 18,
                padding: 'clamp(14px, 1.8vw, 22px) clamp(16px, 2vw, 26px)',
                boxShadow: '0 6px 30px rgba(17,17,17,0.09)',
                transform: 'translateZ(25px)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-tight)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
                  fontWeight: 500,
                  color: '#111111',
                  lineHeight: 1.2,
                }}>
                  {t.author}
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.72rem, 0.95vw, 0.875rem)',
                  color: 'rgba(17,17,17,0.45)',
                  marginTop: 5,
                }}>
                  {t.role}
                </div>
              </div>

              {/* ── Avatar circle ── */}
              <div style={{
                position: 'absolute',
                top: '31%', left: '40%',
                width: 'clamp(76px, 13%, 100px)',
                height: 'clamp(76px, 13%, 100px)',
                borderRadius: '50%',
                background: t.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid #F5F5F5',
                boxShadow: '0 8px 30px rgba(17,17,17,0.14)',
                transform: 'translateZ(42px)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-tight)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.5rem)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                }}>
                  {t.initials}
                </span>
              </div>

              {/* ── Star rating card ── */}
              <div style={{
                position: 'absolute',
                top: '44%', right: 0,
                width: 'clamp(155px, 32%, 210px)',
                background: '#FFFFFF',
                borderRadius: 18,
                padding: 'clamp(14px, 1.8vw, 22px) clamp(16px, 2vw, 26px)',
                boxShadow: '0 6px 30px rgba(17,17,17,0.09)',
                transform: 'translateZ(20px)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <Stars count={t.stars} />
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.68rem',
                    color: 'rgba(17,17,17,0.38)',
                  }}>
                    ({t.rating})
                  </span>
                </div>
                <div style={{
                  fontFamily: 'var(--font-tight)',
                  fontSize: 'clamp(0.9rem, 1.35vw, 1.2rem)',
                  fontWeight: 500,
                  color: '#111111',
                }}>
                  — {t.tag}
                </div>
              </div>

              {/* ── Quote card ── */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0,
                width: 'clamp(190px, 52%, 300px)',
                background: '#FFFFFF',
                borderRadius: 18,
                padding: 'clamp(16px, 2vw, 24px)',
                boxShadow: '0 6px 30px rgba(17,17,17,0.09)',
                transform: 'translateZ(15px)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-tight)',
                  fontSize: 'clamp(0.8rem, 1.05vw, 0.95rem)',
                  fontWeight: 500,
                  color: '#111111',
                  lineHeight: 1.55,
                  margin: 0,
                }}>
                  {t.quote}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  )
}
