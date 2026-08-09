'use client'

import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { METRICS } from '@/constants'

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const t0 = performance.now()
        const dur = 1400
        const tick = (t: number) => {
          const p = Math.min((t - t0) / dur, 1)
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        io.disconnect()
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

// Card icons — top-right decorative element per metric
function ROIIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="12" fill="rgba(200,42,42,0.08)" />
      <polyline points="8,30 16,20 22,24 30,14 36,18" stroke="#C82A2A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <polyline points="30,14 36,14 36,18" stroke="#C82A2A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function RetentionIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="12" fill="rgba(200,42,42,0.08)" />
      <path d="M22 31s-9-5.5-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-9 12-9 12z" stroke="#C82A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(200,42,42,0.12)" />
      <path d="M18.5 22l2.5 2.5 4.5-5" stroke="#C82A2A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ExperienceIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="12" fill="rgba(200,42,42,0.08)" />
      <circle cx="22" cy="22" r="9" stroke="#C82A2A" strokeWidth="2" />
      <polyline points="22,16 22,22 27,25" stroke="#C82A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="12" fill="rgba(200,42,42,0.08)" />
      <circle cx="22" cy="22" r="9" stroke="#C82A2A" strokeWidth="2" />
      <path d="M13 22h18M22 13c-3 3-4 5.5-4 9s1 6 4 9M22 13c3 3 4 5.5 4 9s-1 6-4 9" stroke="#C82A2A" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

const CARD_ICONS = [<ROIIcon key="roi" />, <RetentionIcon key="ret" />, <ExperienceIcon key="exp" />, <GlobeIcon key="globe" />]

export default function Metrics() {
  return (
    <section className="section-pad" style={{ background: '#F5F5F5' }}>
      <div className="container-x">
        <div className="grid gap-[clamp(32px,6vw,80px)] lg:grid-cols-[1fr_1.4fr] items-start">

          {/* ── Left: sticky heading ── */}
          <div className="lg:sticky lg:self-start" style={{ top: 'calc(var(--nav-h) + 24px)' }}>
            <Reveal>
              <p className="eyebrow mb-5">Why AddMads</p>
              <h2
                className="h-display text-[#111]"
                style={{ fontSize: 'clamp(2.2rem, 5.5vw, 5rem)', lineHeight: 1.08 }}
              >
                Why businesses trust AddMads
              </h2>
              <p
                className="mt-5 text-[#555] max-w-[36ch]"
                style={{ fontSize: 'clamp(0.95rem, 1.15vw, 1.08rem)', lineHeight: 1.7 }}
              >
                Revenues that prove the strategy works — and the sales that drive the outcomes.
              </p>
            </Reveal>
          </div>

          {/* ── Right: stat cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={i * 100}>
                <div
                  className="flex flex-col justify-between bg-white rounded-2xl border border-black/[0.06]"
                  style={{ padding: 'clamp(24px,2.8vw,36px)', minHeight: 'clamp(180px,22vh,220px)' }}
                >
                  {/* Top row: big number + icon */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      style={{
                        fontFamily: 'var(--font-tight)',
                        fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
                        fontWeight: 600,
                        lineHeight: 1,
                        color: '#111',
                      }}
                    >
                      <CountUp value={m.value} suffix={m.suffix} />
                    </div>
                    <div className="shrink-0 mt-1">{CARD_ICONS[i]}</div>
                  </div>
                  {/* Label + tagline */}
                  <div style={{ marginTop: 16 }}>
                    <p
                      className="text-[#111]"
                      style={{ fontSize: 'clamp(0.88rem, 1vw, 1rem)', fontWeight: 600, lineHeight: 1.4 }}
                    >
                      {m.label}
                    </p>
                    {'tagline' in m && (
                      <p
                        className="text-[#777]"
                        style={{ fontSize: '0.8rem', lineHeight: 1.5, marginTop: 4 }}
                      >
                        {(m as typeof m & { tagline: string }).tagline}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
