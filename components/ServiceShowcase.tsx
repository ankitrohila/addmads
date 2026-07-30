'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SHOWCASE = [
  {
    num: '01',
    name: 'Performance Marketing',
    href: '/services/performance-marketing',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=500&fit=crop&q=80',
    desc: 'Data-driven campaigns across Google & Meta that turn ad spend into measurable growth.',
  },
  {
    num: '02',
    name: 'Branding & Identity',
    href: '/services/branding',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=500&fit=crop&q=80',
    desc: 'From strategy to logo — brand systems that people remember and trust.',
  },
  {
    num: '03',
    name: 'SEO & Content',
    href: '/services/seo',
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&h=500&fit=crop&q=80',
    desc: 'Rank higher, get found — technical SEO and content that compounds month on month.',
  },
  {
    num: '04',
    name: 'IT & Web Dev',
    href: '/services/it-services',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&h=500&fit=crop&q=80',
    desc: 'Fast, conversion-optimised websites on WordPress, Shopify, Next.js, and more.',
  },
]

const N = SHOWCASE.length

export default function ServiceShowcase() {
  const [active, setActive] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Scroll-driven: maps scroll progress through the tall wrapper → active service index
  useEffect(() => {
    const update = () => {
      const el = wrapperRef.current
      if (!el) return
      const scrolled = Math.max(0, -el.getBoundingClientRect().top)
      const scrollable = el.offsetHeight - window.innerHeight
      if (scrollable <= 0) return
      const progress = Math.min(scrolled / scrollable, 0.9999)
      // N*2 travel so services loop 01→04→01→04 before section ends
      setActive(Math.floor(progress * N * 2) % N)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  const cur = SHOWCASE[active]

  return (
    // Tall wrapper — each service gets 100 vh of scroll travel
    <div ref={wrapperRef} style={{ height: `${N * 2 * 100}vh` }}>
      {/* Sticky viewport panel */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100svh',
          background: '#C82A2A',
          color: '#fff',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="container-x w-full">
          {/* Section header */}
          <div className="mb-[clamp(18px,3.5vh,36px)]">
            <p
              className="eyebrow"
              style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}
            >
              How we work
            </p>
            <h2
              className="h-display mt-2"
              style={{ fontSize: 'clamp(1.55rem, 3.2vw, 2.8rem)', maxWidth: '28ch' }}
            >
              One team. Full funnel. Zero handoff gaps.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            {/* ── Left: numbered list ── */}
            <div>
              {SHOWCASE.map((svc, i) => (
                <button
                  key={svc.num}
                  onClick={() => setActive(i)}
                  className="w-full flex items-baseline gap-5 text-left transition-all duration-300"
                  style={{
                    padding: 'clamp(11px,1.8vh,18px) 0',
                    borderBottom: '1px solid',
                    borderColor:
                      active === i
                        ? 'rgba(255,255,255,0.55)'
                        : 'rgba(255,255,255,0.14)',
                    color: active === i ? '#fff' : 'rgba(255,255,255,0.36)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      flexShrink: 0,
                      opacity: 0.65,
                      letterSpacing: '0.06em',
                    }}
                  >
                    {svc.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-tight)',
                      fontSize: 'clamp(1.1rem, 2.2vw, 2rem)',
                      fontWeight: 500,
                    }}
                  >
                    {svc.name}
                  </span>
                </button>
              ))}
            </div>

            {/* ── Right: stacked card deck (desktop) ── */}
            <div
              className="hidden lg:block relative"
              style={{ height: 'clamp(390px,50vh,500px)' }}
            >
              {SHOWCASE.map((svc, i) => {
                const pos = i - active // 0=front, 1-3=stacked behind, <0=past
                const isFront = pos === 0
                const isBehind = pos > 0 && pos <= 3
                const isPast = pos < 0

                const tx = isFront ? 0 : isBehind ? pos * 14 : -5
                const ty = isFront ? 0 : isBehind ? -pos * 46 : 30
                const sc = isFront ? 1 : isBehind ? 1 - pos * 0.045 : 0.88

                return (
                  <div
                    key={svc.num}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 16,
                      background: '#fff',
                      color: '#111',
                      zIndex: isFront ? 10 : isBehind ? 10 - pos : 0,
                      transform: `translate(${tx}px, ${ty}px) scale(${sc})`,
                      transformOrigin: 'bottom left',
                      opacity: isPast ? 0 : pos > 3 ? 0 : 1,
                      transition:
                        'transform 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease',
                      boxShadow: isFront
                        ? '0 24px 64px rgba(0,0,0,0.22)'
                        : '0 4px 20px rgba(0,0,0,0.10)',
                      pointerEvents: isFront ? 'auto' : 'none',
                    }}
                  >
                    {/* Number tab — visible on all cards */}
                    <div
                      style={{
                        padding: '11px 16px',
                        borderBottom: isFront ? '1px solid rgba(0,0,0,0.07)' : 'none',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: isFront ? '#C82A2A' : '#bbb',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {svc.num}.
                      </span>
                    </div>

                    {isFront && (
                      <>
                        {/* Image — overflow:hidden here clips image to rounded top corners */}
                        <div className="relative" style={{ height: 'clamp(160px,22vh,200px)', overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
                          <Image
                            src={svc.img}
                            alt={svc.name}
                            fill
                            sizes="(max-width: 1280px) 50vw, 620px"
                            className="object-cover"
                          />
                        </div>
                        {/* Content */}
                        <div style={{ padding: 'clamp(14px,1.8vw,22px)' }}>
                          <h3
                            style={{
                              fontFamily: 'var(--font-tight)',
                              fontSize: 'clamp(1.05rem, 1.4vw, 1.3rem)',
                              fontWeight: 500,
                            }}
                          >
                            {svc.name}
                          </h3>
                          <p
                            style={{
                              marginTop: 6,
                              fontSize: '0.88rem',
                              color: '#555',
                              lineHeight: 1.55,
                            }}
                          >
                            {svc.desc}
                          </p>
                          <Link
                            href={svc.href}
                            className="btn-dark"
                            style={{
                              padding: '8px 18px',
                              fontSize: '0.82rem',
                              marginTop: 14,
                              display: 'inline-flex',
                            }}
                          >
                            Explore service →
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>

            {/* ── Mobile: single animated card ── */}
            <div className="lg:hidden">
              <div
                key={cur.num}
                className="animate-pop-in bg-white text-[#111] rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.22)' }}
              >
                <div className="relative aspect-video">
                  <Image
                    src={cur.img}
                    alt={cur.name}
                    fill
                    sizes="92vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div style={{ padding: 'clamp(16px,4vw,22px)' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-tight)',
                      fontSize: 'clamp(1.05rem, 3.5vw, 1.25rem)',
                      fontWeight: 500,
                    }}
                  >
                    {cur.name}
                  </h3>
                  <p
                    style={{
                      marginTop: 5,
                      fontSize: '0.88rem',
                      color: '#555',
                      lineHeight: 1.55,
                    }}
                  >
                    {cur.desc}
                  </p>
                  <Link
                    href={cur.href}
                    className="btn-dark"
                    style={{
                      padding: '9px 18px',
                      fontSize: '0.82rem',
                      marginTop: 12,
                      display: 'inline-flex',
                    }}
                  >
                    Explore service →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
