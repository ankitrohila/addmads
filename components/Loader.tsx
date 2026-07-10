'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const barFillRef = useRef<HTMLDivElement>(null)
  const studioRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        onComplete()
      },
    })

    // 1. Reveal studio tag
    tl.fromTo(studioRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.1)
    tl.fromTo(taglineRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.3)

    // 2. Count 0 → 100
    const obj = { val: 0 }
    tl.to(obj, {
      val: 100,
      duration: 2.0,
      ease: 'power2.inOut',
      onUpdate() {
        if (counterRef.current) {
          counterRef.current.textContent = String(Math.floor(obj.val)).padStart(3, '0')
        }
      },
    }, 0.2)

    // 3. Progress bar
    tl.fromTo(barFillRef.current, { scaleX: 0 }, { scaleX: 1, duration: 2.0, ease: 'power2.inOut', transformOrigin: 'left' }, 0.2)

    // 4. Brief hold at 100
    tl.to({}, { duration: 0.25 })

    // 5. Wipe up — entire loader exits
    tl.to(wrapperRef.current, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.9,
      ease: 'power4.inOut',
    })

    return () => { tl.kill() }
  }, [onComplete])

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: '#111111',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(28px,5vw,80px)',
        overflow: 'hidden',
        clipPath: 'inset(0 0 0% 0)',
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Top: logo + est. tag */}
      <div ref={studioRef} style={{ opacity: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Image src="/logo-dark.svg" alt="AddMads" width={148} height={46} style={{ height: 46, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', color: 'rgba(245,244,240,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Est. 2016
        </span>
      </div>

      {/* Middle: tagline */}
      <div ref={taglineRef} style={{ opacity: 0 }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(245,244,240,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
          Creative studio
        </p>
        <p style={{ fontFamily: 'var(--font-tight)', fontWeight: 300, fontSize: 'clamp(1.5rem,3vw,2.5rem)', color: 'rgba(245,244,240,0.5)', letterSpacing: '-0.02em', lineHeight: 1.2, fontStyle: 'italic' }}>
          Crafting identities &amp; <br />digital experiences
        </p>
      </div>

      {/* Bottom: counter + bar */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16 }}>
          <span
            ref={counterRef}
            style={{
              fontFamily: 'var(--font-tight)',
              fontWeight: 800,
              fontSize: 'clamp(4rem,10vw,8rem)',
              lineHeight: 1,
              letterSpacing: '-0.05em',
              color: '#F5F4F0',
            }}
          >
            000
          </span>
          <span style={{ fontFamily: 'var(--font-tight)', fontWeight: 800, fontSize: 'clamp(1rem,2vw,1.5rem)', color: 'rgba(245,244,240,0.15)', letterSpacing: '-0.04em' }}>
            / 100
          </span>
        </div>

        {/* Bar */}
        <div style={{ width: '100%', height: 1, background: 'rgba(245,244,240,0.1)', position: 'relative' }}>
          <div
            ref={barFillRef}
            style={{
              position: 'absolute', inset: 0,
              background: '#F5F4F0',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
            }}
          />
        </div>
      </div>
    </div>
  )
}
