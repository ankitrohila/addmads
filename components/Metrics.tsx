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

// Decorative bar graph for the first card
function BarGraph() {
  const bars = [0.4, 0.65, 0.5, 0.8, 0.6, 0.9, 0.75]
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 40 }}>
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            width: 6,
            height: `${h * 100}%`,
            background: i === bars.length - 1 ? '#C82A2A' : 'rgba(200,42,42,0.18)',
            borderRadius: 3,
          }}
        />
      ))}
    </div>
  )
}

// Overlapping avatar circles for the clients card
function AvatarStack() {
  const colors = ['#E60000', '#6EE7B7', '#A78BFA', '#67E8F9', '#FCD34D']
  const initials = ['R', 'P', 'V', 'A', '+']
  return (
    <div style={{ display: 'flex' }}>
      {colors.map((c, i) => (
        <div
          key={i}
          style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            background: c,
            border: '2px solid #fff',
            marginLeft: i === 0 ? 0 : -10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.7rem',
            fontWeight: 700,
            color: '#fff',
            zIndex: colors.length - i,
            position: 'relative',
          }}
        >
          {initials[i]}
        </div>
      ))}
    </div>
  )
}

const CARD_EXTRAS = [<BarGraph key="bar" />, <AvatarStack key="av" />, null, null]

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
                Why brands choose AddMads
              </h2>
              <p
                className="mt-5 text-[#555] max-w-[36ch]"
                style={{ fontSize: 'clamp(0.95rem, 1.15vw, 1.08rem)', lineHeight: 1.7 }}
              >
                Numbers that prove the process works — and the principles behind them.
              </p>
            </Reveal>
          </div>

          {/* ── Right: stat cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={i * 100}>
                <div
                  className="flex flex-col justify-between bg-white rounded-2xl border border-black/[0.06]"
                  style={{ padding: 'clamp(24px,2.8vw,36px)', minHeight: 'clamp(160px,20vh,200px)' }}
                >
                  {/* Top row: big number + decorative element */}
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
                    {CARD_EXTRAS[i] && (
                      <div className="shrink-0 mt-1">{CARD_EXTRAS[i]}</div>
                    )}
                  </div>
                  {/* Label */}
                  <p
                    className="text-[#555]"
                    style={{
                      fontSize: 'clamp(0.88rem, 1vw, 1rem)',
                      lineHeight: 1.55,
                      marginTop: 16,
                    }}
                  >
                    {m.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
