'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { MARQUEE_ITEMS } from '@/constants'

// ─── Red spinning asterisk — rAF-driven, immune to iOS animation-clock bug ───
function Asterisk({ size = 'clamp(52px, 6vw, 88px)' }: { size?: string }) {
  const divRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const PERIOD = 22000
    let t0: number | null = null
    const frame = (ts: number) => {
      if (t0 === null) t0 = ts
      const deg = (((ts - t0) % PERIOD) / PERIOD) * 360
      if (divRef.current) divRef.current.style.transform = `rotate(${deg}deg)`
      rafRef.current = requestAnimationFrame(frame)
    }
    rafRef.current = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div ref={divRef} className="relative shrink-0" style={{ width: size, height: size }} aria-hidden="true">
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

// ─── SVG star separator — never renders as emoji on iOS ──────────────────────
function RedStar() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      {[0, 45, 90, 135].map(a => (
        <line key={a} x1="7" y1="1" x2="7" y2="13" stroke="#C82A2A" strokeWidth="2.4" strokeLinecap="round" transform={`rotate(${a} 7 7)`} />
      ))}
    </svg>
  )
}

// ─── Smooth continuous ticker — rAF scroll, no CSS infinite animation ─────────
// Duplicates items so when pos reaches the first-copy width it wraps seamlessly.
function TickerBelt() {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef   = useRef(0)
  const prevRef  = useRef<number | null>(null)
  const rafRef   = useRef<number>(0)

  useEffect(() => {
    const SPEED = 55 // px / second — slow and smooth

    const frame = (ts: number) => {
      if (prevRef.current === null) prevRef.current = ts
      // Cap dt to 50 ms to avoid a jump when the tab regains focus
      const dt = Math.min(ts - prevRef.current, 50) / 1000
      prevRef.current = ts

      if (trackRef.current) {
        const halfW = trackRef.current.scrollWidth / 2
        posRef.current = (posRef.current + SPEED * dt) % halfW
        trackRef.current.style.transform = `translateX(${-posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(frame)
    }
    rafRef.current = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      {/* Two copies side-by-side — when first copy scrolls off, second is already in place */}
      <div ref={trackRef} style={{ display: 'flex', width: 'max-content' }}>
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

// ─── Scroll-driven heading colour: black/grey → brand red ────────────────────
// Mirrors the "text revealing in accent colour" effect from the portfolio.
function useScrollColors() {
  const [p, setP] = useState(0)  // 0 = at top, 1 = scrolled 400 px

  useEffect(() => {
    const handler = () => setP(Math.min(window.scrollY / 400, 1))
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // "Results" / "scale": #111111 (17,17,17) → #C82A2A (200,42,42)
  const main = `rgb(${Math.round(17 + 183 * p)},${Math.round(17 + 25 * p)},${Math.round(17 + 25 * p)})`
  // "that": #D1D1D1 (209,209,209) → #C82A2A (200,42,42)
  const that = `rgb(${Math.round(209 - 9 * p)},${Math.round(209 - 167 * p)},${Math.round(209 - 167 * p)})`

  return { main, that }
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const { main, that } = useScrollColors()

  return (
    <section id="hero" className="bg-white">
      <div
        className="relative flex flex-col justify-center overflow-hidden"
        style={{ minHeight: '100svh', paddingTop: 'var(--nav-h)' }}
      >
        <div className="container-x">
          {/* Headline — words turn red as user scrolls */}
          <h1
            className="h-display animate-fade-up"
            style={{ fontSize: 'clamp(3.2rem, 11vw, 11rem)', lineHeight: 1.04 }}
          >
            <span className="block" style={{ color: main }}>Results</span>
            <span className="flex items-center gap-[clamp(16px,3vw,40px)] flex-wrap">
              <span style={{ color: that }}>that</span>
              <Asterisk />
              <span style={{ color: main }}>scale</span>
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

        {/* Smooth ticker strip */}
        <div
          className="mt-[clamp(40px,6vw,80px)] border-t border-b border-black/[0.07] py-[clamp(14px,1.6vw,22px)] overflow-hidden select-none"
          aria-hidden="true"
        >
          <TickerBelt />
        </div>
      </div>
    </section>
  )
}
