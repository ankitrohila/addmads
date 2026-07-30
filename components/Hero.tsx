'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { MARQUEE_ITEMS } from '@/constants'

// ─── Red spinning asterisk — CSS animation on compositor thread ──────────────
function Asterisk({ size = 'clamp(52px, 6vw, 88px)' }: { size?: string }) {
  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size, animation: 'spin-asterisk 22s linear infinite', willChange: 'transform' }}
      aria-hidden="true"
    >
      {[0, 90, 45, -45].map(angle => (
        <div
          key={angle}
          className="absolute top-1/2 left-1/2 rounded-[3px]"
          style={{ width: '88%', height: '17%', background: '#C82A2A', transform: `translate(-50%,-50%) rotate(${angle}deg)` }}
        />
      ))}
    </div>
  )
}

// ─── SVG star separator ───────────────────────────────────────────────────────
function RedStar() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      {[0, 45, 90, 135].map(a => (
        <line key={a} x1="7" y1="1" x2="7" y2="13" stroke="#C82A2A" strokeWidth="2.4" strokeLinecap="round" transform={`rotate(${a} 7 7)`} />
      ))}
    </svg>
  )
}

// ─── Ticker belt — GPU-accelerated CSS animation, zero main-thread cost ───────
function TickerBelt() {
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'ticker-belt 25s linear infinite', willChange: 'transform' }}>
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'clamp(10px,1.4vw,18px)',
              paddingRight: 'clamp(20px,2.5vw,40px)',
              fontFamily: 'var(--font-tight)',
              fontSize: 'clamp(1rem,1.6vw,1.5rem)',
              color: 'rgba(0,0,0,0.5)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            {item}
            <RedStar />
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
// Heading uses a clip-path scroll-reveal:
//   • base layer — solid black, always visible, provides layout + a11y text
//   • red overlay (clip-path: inset(0 var(--sp) 0 0)) — reveals left-to-right
// The section is PINNED: a tall wrapper (220svh) with a sticky 100svh panel
// keeps the hero on screen until the full black → red transition completes,
// then the page continues scrolling normally.
export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const rRef = useRef<HTMLSpanElement>(null) // "Results" overlay
  const tRef = useRef<HTMLSpanElement>(null) // "that"    overlay
  const sRef = useRef<HTMLSpanElement>(null) // "scale"   overlay

  useEffect(() => {
    // Progress through the pinned wrapper drives a staggered per-word reveal:
    // Results: 0–45% | that: 20–65% | scale: 40–85% — fully red before unpin.
    const update = () => {
      const el = wrapRef.current
      if (!el) return
      const scrolled = Math.max(0, -el.getBoundingClientRect().top)
      const scrollable = el.offsetHeight - window.innerHeight
      const p = scrollable > 0 ? Math.min(scrolled / scrollable, 1) : 1
      const words = [rRef, tRef, sRef]
      words.forEach((ref, i) => {
        if (!ref.current) return
        const start = i * 0.2
        const end   = start + 0.45
        const wp    = Math.max(0, Math.min(1, (p - start) / (end - start)))
        ref.current.style.setProperty('--sp', `${(1 - wp) * 100}%`)
      })
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Inline style for the red overlay span
  const overlay: React.CSSProperties = {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    color: '#C82A2A',
    clipPath: 'inset(0 var(--sp, 100%) 0 0)',
  }

  return (
    <section id="hero" className="bg-white">
      {/* Tall wrapper — extra 120svh of scroll travel drives the colour reveal */}
      <div ref={wrapRef} style={{ height: '220svh' }}>
        {/* Sticky panel — stays pinned until the reveal completes */}
        <div
          className="relative flex flex-col justify-center overflow-hidden"
          style={{ position: 'sticky', top: 0, height: '100svh', paddingTop: 'var(--nav-h)' }}
        >
          <div className="container-x">
            <h1
              className="h-display animate-fade-up"
              style={{ fontSize: 'clamp(3.2rem, 14vw, 14rem)', lineHeight: 1.04 }}
            >
              {/* "Results" — black → red */}
              <span style={{ display: 'block', position: 'relative' }}>
                <span style={{ color: '#111111' }}>Results</span>
                <span ref={rRef} style={overlay} aria-hidden="true">Results</span>
              </span>

              {/* "that ✳ scale" */}
              <span className="flex items-center gap-[clamp(16px,3vw,40px)] flex-wrap">
                {/* "that" — black → red */}
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  <span style={{ color: '#111111' }}>that</span>
                  <span ref={tRef} style={overlay} aria-hidden="true">that</span>
                </span>

                <Asterisk />

                {/* "scale" — black → red */}
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  <span style={{ color: '#111111' }}>scale</span>
                  <span ref={sRef} style={overlay} aria-hidden="true">scale</span>
                </span>
              </span>
            </h1>

            {/* CTAs + tagline */}
            <div
              className="mt-[clamp(28px,4vw,56px)] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 animate-fade-up"
              style={{ animationDelay: '0.25s' }}
            >
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-red" style={{ padding: 'clamp(14px,1.5vw,20px) clamp(26px,3vw,40px)' }}>
                  Work with us
                </Link>
                <Link href="/services" className="btn-outline" style={{ padding: 'clamp(14px,1.5vw,20px) clamp(26px,3vw,40px)' }}>
                  Explore services
                </Link>
              </div>
              <p className="max-w-[320px] text-[#333] font-medium sm:text-right" style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.25rem)', lineHeight: 1.6 }}>
                Performance marketing &amp; digital growth. We turn ad spend into measurable results.
              </p>
            </div>
          </div>

          {/* Smooth ticker strip — pinned to the bottom of the sticky panel */}
          <div
            className="absolute bottom-0 left-0 right-0 border-t border-b border-black/[0.07] py-[clamp(14px,1.6vw,22px)] overflow-hidden select-none"
            aria-hidden="true"
          >
            <TickerBelt />
          </div>
        </div>
      </div>
    </section>
  )
}
