'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { MARQUEE_ITEMS } from '@/constants'

// ─── Red spinning asterisk — JS rAF driven (immune to iOS animation-clock bug)
function Asterisk({ size = 'clamp(52px, 6vw, 88px)' }: { size?: string }) {
  const divRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const PERIOD = 22000 // ms per full rotation
    let startTime: number | null = null

    const frame = (ts: number) => {
      if (startTime === null) startTime = ts
      const deg = (((ts - startTime) % PERIOD) / PERIOD) * 360
      if (divRef.current) divRef.current.style.transform = `rotate(${deg}deg)`
      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div
      ref={divRef}
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {[0, 90, 45, -45].map(angle => (
        <div
          key={angle}
          className="absolute top-1/2 left-1/2 rounded-[3px]"
          style={{
            width: '88%',
            height: '17%',
            background: '#C82A2A',
            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
          }}
        />
      ))}
    </div>
  )
}

// ─── SVG 8-point star — replaces the ✳ Unicode emoji character.
// iOS renders U+2733 (✳) with native emoji colours regardless of CSS color.
// This SVG is always red on every platform.
function RedStar({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {[0, 45, 90, 135].map(a => (
        <line
          key={a}
          x1="7" y1="1" x2="7" y2="13"
          stroke="#C82A2A"
          strokeWidth="2.4"
          strokeLinecap="round"
          transform={`rotate(${a} 7 7)`}
        />
      ))}
    </svg>
  )
}

// ─── JS-driven ticker carousel — no CSS infinite animation → iOS-safe ────────
const ITEMS = MARQUEE_ITEMS
const DUPED = [...ITEMS, ...ITEMS]
const N     = ITEMS.length   // 10
const TOTAL = DUPED.length   // 20

function TickerCarousel() {
  const [offset, setOffset]            = useState(0)
  const [shouldAnimate, setShouldAnim] = useState(true)
  const [visible, setVisible]          = useState(4)

  useEffect(() => {
    const update = () =>
      setVisible(window.innerWidth < 560 ? 2 : window.innerWidth < 900 ? 3 : 4)
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setOffset(p => p + 1), 2500)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (offset < N) return
    const t = setTimeout(() => {
      setShouldAnim(false)
      setOffset(0)
      setTimeout(() => setShouldAnim(true), 30)
    }, 520)
    return () => clearTimeout(t)
  }, [offset])

  const itemPct      = 100 / TOTAL
  const translatePct = -(offset * itemPct)

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          width: `${(TOTAL / visible) * 100}%`,
          transform: `translateX(${translatePct}%)`,
          transition: shouldAnimate
            ? 'transform 0.5s cubic-bezier(0.25,1,0.5,1)'
            : 'none',
        }}
      >
        {DUPED.map((item, i) => (
          <div
            key={i}
            style={{
              flex: `0 0 ${itemPct}%`,
              display: 'flex',
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
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Scroll-driven colour for "that": grey → black ───────────────────────────
function useScrollColor() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handler = () => setProgress(Math.min(window.scrollY / 400, 1))
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const ch = Math.round(209 - 192 * progress)
  return `rgb(${ch},${ch},${ch})`
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const thatColor = useScrollColor()

  return (
    <section id="hero" className="bg-white">
      <div
        className="relative flex flex-col justify-center overflow-hidden"
        style={{ minHeight: '100svh', paddingTop: 'var(--nav-h)' }}
      >
        <div className="container-x">
          {/* Headline */}
          <h1
            className="h-display animate-fade-up"
            style={{ fontSize: 'clamp(3.2rem, 11vw, 11rem)', lineHeight: 1.04 }}
          >
            <span className="block text-[#111]">Results</span>
            <span className="flex items-center gap-[clamp(16px,3vw,40px)] flex-wrap">
              <span style={{ color: thatColor }}>that</span>
              <Asterisk />
              <span className="text-[#111]">scale</span>
            </span>
          </h1>

          {/* CTAs + tagline */}
          <div
            className="mt-[clamp(28px,4vw,56px)] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 animate-fade-up"
            style={{ animationDelay: '0.25s' }}
          >
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-red"
                style={{ padding: 'clamp(14px,1.5vw,20px) clamp(26px,3vw,40px)' }}
              >
                Work with us
              </Link>
              <Link
                href="/services"
                className="btn-outline"
                style={{ padding: 'clamp(14px,1.5vw,20px) clamp(26px,3vw,40px)' }}
              >
                Explore services
              </Link>
            </div>
            <p
              className="max-w-[320px] text-[#333] font-medium sm:text-right"
              style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.25rem)', lineHeight: 1.6 }}
            >
              Performance marketing &amp; digital growth. We turn ad spend into
              measurable results.
            </p>
          </div>
        </div>

        {/* Ticker carousel strip */}
        <div
          className="mt-[clamp(40px,6vw,80px)] border-t border-b border-black/[0.07] py-[clamp(14px,1.6vw,22px)] overflow-hidden select-none"
          aria-hidden="true"
        >
          <TickerCarousel />
        </div>
      </div>
    </section>
  )
}
