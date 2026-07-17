'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TESTIMONIALS = [
  {
    id: 1, author: 'Rahul Sharma', role: 'CEO, ShopNest India',
    stars: 5, tag: 'Best ROAS', rating: '5/5',
    quote: '"AddMads transformed our ad spend into a growth engine. Our Google Ads ROAS went from 1.8× to 4.5× in three months. Absolute game-changers."',
    color: '#E60000', initials: 'RS',
  },
  {
    id: 2, author: 'Priya Mehta', role: 'Founder, Verdant Skincare',
    stars: 5, tag: 'Top Branding', rating: '5/5',
    quote: '"The branding work was world-class. We finally have an identity that matches our ambition — customer recall doubled post-rebrand."',
    color: '#4CAF50', initials: 'PM',
  },
  {
    id: 3, author: 'Vikram Nair', role: 'Marketing Head, Lunara Wellness',
    stars: 5, tag: 'Page 1 SEO', rating: '5/5',
    quote: '"Our website went from page 6 to page 1 on Google within 5 months of partnering with AddMads on SEO. The results speak for themselves."',
    color: '#A78BFA', initials: 'VN',
  },
  {
    id: 4, author: 'Ananya Gupta', role: 'COO, Helix Financial',
    stars: 5, tag: 'Fast Site', rating: '5/5',
    quote: '"The Next.js website they built loads in under 1.2 seconds and converts 40% better than our old site. Worth every rupee."',
    color: '#2196F3', initials: 'AG',
  },
]

const N = TESTIMONIALS.length

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < Math.round(count) ? '#F5A623' : '#DEDEDE', fontSize: '0.95rem' }}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  // Mobile carousel state
  const [active, setActive] = useState(0)
  const touchStartX = useRef(0)
  const isDragging  = useRef(false)

  // Desktop GSAP refs — kept alive forever so React never unmounts the section
  const sectionRef = useRef<HTMLElement>(null)
  const compRefs   = useRef<(HTMLDivElement | null)[]>([])

  const prev = () => setActive(a => (a - 1 + N) % N)
  const next = () => setActive(a => (a + 1) % N)
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; isDragging.current = false }
  const onTouchMove  = (e: React.TouchEvent) => { if (Math.abs(e.touches[0].clientX - touchStartX.current) > 10) isDragging.current = true }
  const onTouchEnd   = (e: React.TouchEvent) => {
    if (!isDragging.current) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx < -40) next()
    else if (dx > 40) prev()
  }

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile) return  // CSS shows mobile carousel; desktop section is display:none so no GSAP

    const ctx = gsap.context(() => {
      const section = sectionRef.current
      if (!section) return

      const comps = compRefs.current.filter(Boolean) as HTMLDivElement[]
      gsap.set(comps, { opacity: 0, y: 80, rotateY: 0, rotateX: 0 })

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
            if (p < tStart) { gsap.set(comp, { opacity: 0, y: 80, rotateY: 0, rotateX: 0 }); return }
            if (p > tEnd)   { gsap.set(comp, { opacity: 0, y: -80, rotateY: -32, rotateX: 8 }); return }
            const rel = (p - tStart) / (tEnd - tStart)
            if (rel < 0.38) {
              const ep = rel / 0.38
              gsap.set(comp, { opacity: ep, y: (1 - ep) * 80, rotateY: 0, rotateX: 0 })
            } else if (rel < 0.52) {
              gsap.set(comp, { opacity: 1, y: 0, rotateY: 0, rotateX: 0 })
            } else if (rel < 0.82) {
              const tp = (rel - 0.52) / 0.30
              gsap.set(comp, { opacity: 1, y: 0, rotateY: tp * -32, rotateX: tp * 8 })
            } else {
              const xp = (rel - 0.82) / 0.18
              gsap.set(comp, { opacity: 1 - xp, y: -xp * 70, rotateY: -32, rotateX: 8 })
            }
          })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const t = TESTIMONIALS[active]

  return (
    <>
      {/* ── MOBILE CAROUSEL (CSS: shown on <768px, hidden on desktop) ── */}
      <div className="testimonials-mobile" style={{
        background: '#F5F5F5',
        padding: 'clamp(48px,8vw,80px) var(--container-px)',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-tight)',
          fontSize: 'clamp(2rem,8vw,3.5rem)',
          fontWeight: 500, color: '#111111', lineHeight: 1.1,
          marginBottom: 'clamp(28px,5vw,40px)',
        }}>
          Testimonials from our clients.
        </h2>

        {/* Active card */}
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            background: '#FFFFFF', borderRadius: 20,
            padding: 'clamp(22px,5vw,32px)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
            minHeight: 240,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: t.color, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: 'var(--font-tight)', fontSize: '1rem', fontWeight: 600, color: '#fff' }}>{t.initials}</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-tight)', fontSize: '1rem', fontWeight: 600, color: '#111' }}>{t.author}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'rgba(17,17,17,0.45)', marginTop: 2 }}>{t.role}</div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <Stars count={t.stars} />
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', color: 'rgba(17,17,17,0.38)', marginTop: 3 }}>{t.tag}</div>
            </div>
          </div>
          <p style={{
            fontFamily: 'var(--font-tight)',
            fontSize: 'clamp(0.95rem,3.8vw,1.1rem)',
            fontWeight: 500, color: '#111', lineHeight: 1.65, margin: 0,
          }}>
            {t.quote}
          </p>
        </div>

        {/* Dots + arrows */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                width: i === active ? 24 : 8, height: 8, borderRadius: 4,
                background: i === active ? '#E60000' : 'rgba(17,17,17,0.18)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'all 0.3s ease',
              }} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={prev} style={{
              width: 38, height: 38, borderRadius: '50%',
              background: '#111', color: '#fff', border: 'none',
              cursor: 'pointer', fontSize: '1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>←</button>
            <button onClick={next} style={{
              width: 38, height: 38, borderRadius: '50%',
              background: '#E60000', color: '#fff', border: 'none',
              cursor: 'pointer', fontSize: '1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>→</button>
          </div>
        </div>
      </div>

      {/* ── DESKTOP 3D SCROLL (CSS: hidden on <768px, shown on desktop) ── */}
      <div className="testimonials-desktop-title" style={{
        height: '100vh', background: '#F5F5F5',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '0 var(--container-px)',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-tight)',
          fontSize: 'clamp(2.2rem,6vw,5.5rem)',
          fontWeight: 500, color: '#111111', textAlign: 'center', margin: 0, lineHeight: 1.1,
        }}>
          Testimonials from our clients.
        </h2>
      </div>

      <section
        ref={sectionRef}
        className="testimonials-section"
        style={{ position: 'relative', height: '100vh', background: '#F5F5F5', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', inset: 0, perspective: '1200px', perspectiveOrigin: '50% 50%' }}>
          {TESTIMONIALS.map((td, i) => (
            <div
              key={td.id}
              ref={el => { compRefs.current[i] = el }}
              className="testimonial-comp"
              style={{
                position: 'absolute', inset: 0, margin: 'auto',
                width: 'clamp(300px,88vw,680px)',
                height: 'clamp(340px,58vh,540px)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div style={{
                position: 'absolute', top: '8%', left: '24%',
                width: '52%', height: '70%',
                background: '#E8E8E8', borderRadius: 28,
              }} />

              <div style={{
                position: 'absolute', top: '28%', left: 0,
                width: 'clamp(155px,31%,200px)',
                background: '#FFFFFF', borderRadius: 18,
                padding: 'clamp(14px,1.8vw,22px) clamp(16px,2vw,26px)',
                boxShadow: '0 6px 30px rgba(17,17,17,0.09)',
                transform: 'translateZ(25px)',
              }}>
                <div style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1rem,1.5vw,1.3rem)', fontWeight: 500, color: '#111111', lineHeight: 1.2 }}>{td.author}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.72rem,0.95vw,0.875rem)', color: 'rgba(17,17,17,0.45)', marginTop: 5 }}>{td.role}</div>
              </div>

              <div style={{
                position: 'absolute', top: '31%', left: '40%',
                width: 'clamp(76px,13%,100px)', height: 'clamp(76px,13%,100px)',
                borderRadius: '50%', background: td.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '4px solid #F5F5F5',
                boxShadow: '0 8px 30px rgba(17,17,17,0.14)',
                transform: 'translateZ(42px)',
              }}>
                <span style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1rem,1.8vw,1.5rem)', fontWeight: 500, color: '#FFFFFF' }}>{td.initials}</span>
              </div>

              <div style={{
                position: 'absolute', top: '44%', right: 0,
                width: 'clamp(155px,32%,210px)',
                background: '#FFFFFF', borderRadius: 18,
                padding: 'clamp(14px,1.8vw,22px) clamp(16px,2vw,26px)',
                boxShadow: '0 6px 30px rgba(17,17,17,0.09)',
                transform: 'translateZ(20px)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <Stars count={td.stars} />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', color: 'rgba(17,17,17,0.38)' }}>({td.rating})</span>
                </div>
                <div style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(0.9rem,1.35vw,1.2rem)', fontWeight: 500, color: '#111111' }}>— {td.tag}</div>
              </div>

              <div style={{
                position: 'absolute', bottom: 0, left: 0,
                width: 'clamp(190px,52%,300px)',
                background: '#FFFFFF', borderRadius: 18,
                padding: 'clamp(16px,2vw,24px)',
                boxShadow: '0 6px 30px rgba(17,17,17,0.09)',
                transform: 'translateZ(15px)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-tight)',
                  fontSize: 'clamp(0.8rem,1.05vw,0.95rem)',
                  fontWeight: 500, color: '#111111', lineHeight: 1.55, margin: 0,
                }}>
                  {td.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
