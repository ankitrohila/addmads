'use client'

import { useRef, useState } from 'react'
import Reveal from './Reveal'
import { TESTIMONIALS } from '@/constants'

const N = TESTIMONIALS.length

function Stars() {
  return (
    <div className="flex gap-[2px]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="text-[#F5A623] text-[0.95rem]">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(0)

  const prev = () => setActive(a => (a - 1 + N) % N)
  const next = () => setActive(a => (a + 1) % N)

  return (
    <section id="testimonials" className="section-pad bg-white">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-5">Client stories</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h-display text-[#111]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            Trusted by brands that scale.
          </h2>
        </Reveal>

        {/* Desktop grid */}
        <div className="mt-[clamp(32px,4vw,56px)] hidden md:grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 90}>
              <figure className="flex h-full flex-col bg-[#FAFAFA] border border-black/[0.07] rounded-2xl p-7">
                <Stars />
                <blockquote className="mt-4 flex-1 text-[0.95rem] text-[#333] leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center text-white text-[0.85rem] font-semibold"
                    style={{ background: t.color }}
                    aria-hidden="true"
                  >
                    {t.avatar}
                  </span>
                  <span>
                    <span className="block font-semibold text-[0.95rem]">{t.author}</span>
                    <span className="block text-[0.82rem] text-[#777]">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Mobile carousel */}
        <div
          className="mt-8 md:hidden"
          onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            const dx = e.changedTouches[0].clientX - touchStartX.current
            if (dx < -40) next()
            else if (dx > 40) prev()
          }}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${active * 100}%)`, transitionTimingFunction: 'var(--ease-expo)' }}
            >
              {TESTIMONIALS.map(t => (
                <figure key={t.id} className="w-full shrink-0 px-1">
                  <div className="flex h-full flex-col bg-[#FAFAFA] border border-black/[0.07] rounded-2xl p-6">
                    <Stars />
                    <blockquote className="mt-4 flex-1 text-[0.95rem] text-[#333] leading-relaxed">“{t.quote}”</blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center text-white text-[0.85rem] font-semibold" style={{ background: t.color }} aria-hidden="true">
                        {t.avatar}
                      </span>
                      <span>
                        <span className="block font-semibold text-[0.95rem]">{t.author}</span>
                        <span className="block text-[0.82rem] text-[#777]">{t.role}</span>
                      </span>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{ width: active === i ? 22 : 8, background: active === i ? '#C82A2A' : '#DDD' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
