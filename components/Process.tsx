'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROCESS_STEPS } from '@/constants'

gsap.registerPlugin(ScrollTrigger)

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef   = useRef<(HTMLDivElement | null)[]>([])
  const lineRef    = useRef<HTMLDivElement>(null)
  const headRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(headRef.current?.querySelectorAll('[data-p]') ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1.0, ease: 'power4.out', stagger: 0.1,
          scrollTrigger: { trigger: headRef.current, start: 'top 84%', toggleActions: 'play none none none' },
        }
      )

      // Connector line grows down
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1, duration: 1.8, ease: 'power3.out', transformOrigin: 'top',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      )

      // Steps slide in
      const validSteps = stepsRef.current.filter(Boolean) as HTMLDivElement[]
      gsap.fromTo(validSteps,
        { opacity: 0, x: -36 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 76%', toggleActions: 'play none none none' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-pad" style={{ background: 'var(--color-bg)' }}>
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 lg:gap-32">

          {/* Left: sticky heading */}
          <div ref={headRef} className="lg:sticky lg:top-32 self-start">
            <div className="section-label"><span>Our process</span></div>

            <h2
              data-p
              className="font-tight mb-8"
              style={{
                fontSize: 'clamp(2.75rem,5.8vw,6.25rem)',
                fontWeight: 800, lineHeight: 0.92, letterSpacing: '-0.035em', opacity: 0,
              }}
            >
              How we<br />
              <span style={{ fontWeight: 300, fontStyle: 'italic' }}>work</span>
            </h2>

            <p
              data-p
              className="font-sans text-fg/40 mb-10"
              style={{ fontSize: '0.9375rem', lineHeight: 1.78, maxWidth: 320, opacity: 0 }}
            >
              A proven framework built on clarity, collaboration, and craft. No guesswork — just exceptional results.
            </p>

            <a
              data-p
              href="#contact"
              className="inline-flex items-center gap-2.5 font-tight font-semibold text-sm text-fg group"
              style={{ opacity: 0 }}
            >
              <span className="underline underline-offset-4 decoration-fg/20 group-hover:decoration-fg transition-all duration-300">
                Start your project
              </span>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M1 6.5H12M6.5 1L12 6.5L6.5 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right: step timeline */}
          <div className="relative">
            {/* Connector line */}
            <div
              ref={lineRef}
              className="absolute"
              style={{
                left: 19,
                top: 20,
                bottom: 20,
                width: 1,
                background: 'var(--color-border)',
                transform: 'scaleY(0)',
                transformOrigin: 'top',
              }}
            />

            <div className="space-y-0">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.number}
                  ref={(el) => { stepsRef.current[i] = el }}
                  className="flex gap-8 pb-14 last:pb-0"
                  style={{ opacity: 0 }}
                >
                  {/* Dot */}
                  <div className="flex-shrink-0 relative z-10 mt-0.5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg)' }}
                    >
                      <span
                        className="font-sans font-medium text-fg/22"
                        style={{ fontSize: '0.65rem', letterSpacing: '0.06em' }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1.5">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3
                        className="font-tight font-bold"
                        style={{ fontSize: 'clamp(1.2rem,2vw,1.65rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
                      >
                        {step.title}
                      </h3>
                      <span
                        className="font-sans text-fg/28 flex-shrink-0 mt-1"
                        style={{ fontSize: '0.7rem', letterSpacing: '0.06em' }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <p className="font-sans text-fg/45" style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
