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

export default function Metrics() {
  return (
    <section className="section-pad" style={{ background: '#111', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-5">Why AddMads</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h-display max-w-[22ch]" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.6rem)' }}>
            Numbers that prove the process works.
          </h2>
        </Reveal>

        <div className="mt-[clamp(32px,4vw,56px)] grid grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 90}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-[clamp(20px,2.5vw,32px)]">
                <div style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 600, lineHeight: 1 }}>
                  <CountUp value={m.value} suffix={m.suffix} />
                </div>
                <p className="mt-3 text-white/55 text-[0.9rem]">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
