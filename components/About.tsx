'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SZ     = 'clamp(3rem, 8.5vw, 8rem)'
const IMG_SZ = 'clamp(56px, 7vw, 108px)'

const IMGS = [
  { src: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7a6fcc22a8eb9beed44bb_1.webp', alt: '3D flower' },
  { src: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7a6fd493c862c8d570e8d_2.webp', alt: 'Shoes app' },
  { src: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7a83c438727240e53a84b_5.jpg',   alt: 'Headset' },
]

export default function About() {
  const sectionRef   = useRef<HTMLElement>(null)
  const redOverlay   = useRef<HTMLDivElement>(null)
  const img1Ref      = useRef<HTMLDivElement>(null)
  const img2Ref      = useRef<HTMLDivElement>(null)
  const img3Ref      = useRef<HTMLDivElement>(null)
  const imgGroupRef  = useRef<HTMLDivElement>(null)   // wrapper for all 3 images
  const arrowWrapRef = useRef<HTMLDivElement>(null)   // wrapper for arrow svg
  const btnWrapRef   = useRef<HTMLDivElement>(null)   // wrapper for button
  const row1Ref      = useRef<HTMLDivElement>(null)
  const row2Ref      = useRef<HTMLDivElement>(null)
  const row3Ref      = useRef<HTMLDivElement>(null)
  const btnRef       = useRef<HTMLAnchorElement>(null)
  const arrowRef     = useRef<SVGSVGElement>(null)
  const isHovered    = useRef(false)
  const scrollProg   = useRef(0)

  // Captured natural widths (px) of collapsible elements
  const natW = useRef({ imgs: 0, arrow: 0, btn: 0 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current
      const red     = redOverlay.current
      if (!section || !red) return

      const imgEls = [img1Ref.current, img2Ref.current, img3Ref.current].filter(Boolean) as HTMLElement[]

      // ── Initial states ──────────────────────────────────────
      gsap.set(imgEls, { y: 80, opacity: 0 })
      gsap.set(red, { scaleY: 0 })

      // ── Images animate in as section enters viewport (before pin) ──
      ScrollTrigger.create({
        trigger: section,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.to(imgEls, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.08,
          })
        },
      })

      // ── Pin section + scroll-driven phases ─────────────────
      // Phase 1 (0 → 0.58): red sweeps from bottom, text turns white bottom→top
      // Phase 2 (0.58 → 0.85): images + arrow + button fade AND collapse
      // Phase 3 (0.85 → 1.0): hold full red, then release
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => '+=' + window.innerHeight * 2.8,
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress
          scrollProg.current = p

          // Capture natural widths once (before any collapse)
          if (!natW.current.imgs   && imgGroupRef.current)  natW.current.imgs   = imgGroupRef.current.offsetWidth
          if (!natW.current.arrow  && arrowWrapRef.current) natW.current.arrow  = arrowWrapRef.current.offsetWidth
          if (!natW.current.btn    && btnWrapRef.current)   natW.current.btn    = btnWrapRef.current.offsetWidth

          // ── Red sweep (0 → 0.58) ──
          const redP = Math.max(0, Math.min(p / 0.58, 1))
          gsap.set(red, { scaleY: redP })

          // ── Text color: white from bottom→top as red rises ──
          const rowProgs = [
            Math.max(0, Math.min((redP - 0.66) / 0.32, 1)), // row1 top
            Math.max(0, Math.min((redP - 0.38) / 0.32, 1)), // row2 mid
            Math.max(0, Math.min((redP - 0.10) / 0.32, 1)), // row3 bottom
          ]
          ;[row1Ref, row2Ref, row3Ref].forEach((rr, i) => {
            if (!rr.current) return
            const c = Math.round(17 + (255 - 17) * rowProgs[i])
            rr.current.querySelectorAll<HTMLElement>('.ab-text').forEach(el => {
              el.style.color = `rgb(${c},${c},${c})`
            })
          })

          // ── Fade + collapse images / arrow / button (0.58 → 0.85) ──
          const fadeOut = Math.max(0, Math.min((p - 0.58) / 0.27, 1))
          const keep    = 1 - fadeOut

          // Each collapsing wrapper still occupies 2 × row-gap when width = 0
          // (flex gap on each side). Cancel the extra gap with negative margins
          // so words close to exactly 1 × row-gap spacing.
          const gapPx = Math.min(30, Math.max(14, 0.02 * window.innerWidth))
          const negM  = -(gapPx * fadeOut) / 2

          // Images: fade individual items, collapse wrapper width
          imgEls.forEach(el => { el.style.opacity = String(keep) })
          if (imgGroupRef.current && natW.current.imgs) {
            gsap.set(imgGroupRef.current, {
              width:       natW.current.imgs * keep,
              overflow:    'hidden',
              marginLeft:  negM,
              marginRight: negM,
            })
          }

          // Arrow: fade + collapse wrapper
          if (arrowRef.current) arrowRef.current.style.opacity = String(keep)
          if (arrowWrapRef.current && natW.current.arrow) {
            gsap.set(arrowWrapRef.current, {
              width:       natW.current.arrow * keep,
              overflow:    'hidden',
              marginLeft:  negM,
              marginRight: negM,
            })
          }

          // Button: fade + collapse wrapper
          if (btnWrapRef.current && natW.current.btn) {
            gsap.set(btnWrapRef.current, {
              width:       natW.current.btn * keep,
              overflow:    'hidden',
              marginLeft:  negM,
              marginRight: negM,
            })
          }
          if (btnRef.current && !isHovered.current) {
            btnRef.current.style.opacity = String(keep)
            if (rowProgs[2] > 0.5) {
              btnRef.current.style.background = 'rgba(255,255,255,0.15)'
              btnRef.current.style.border     = '1.5px solid rgba(255,255,255,0.45)'
            } else {
              btnRef.current.style.background = '#111111'
              btnRef.current.style.border     = '1.5px solid transparent'
            }
          }
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const textStyle: React.CSSProperties = {
    fontFamily: 'var(--font-tight)',
    fontSize: SZ,
    fontWeight: 500,
    lineHeight: 1.15,
    color: '#111111',
    flexShrink: 0,
  }

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'clamp(14px, 2vw, 30px)',
    position: 'relative',
    zIndex: 2,
  }

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section"
      style={{
        position: 'relative',
        height: '100vh',
        background: '#F5F5F5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 var(--container-px)',
        gap: 'clamp(6px, 1vw, 16px)',
        overflow: 'hidden',
      }}
    >
      {/* Red overlay — rises from bottom */}
      <div
        ref={redOverlay}
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '100%',
          background: '#C82A2A',
          transformOrigin: 'bottom center',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Row 1: We | [images] | are a performance */}
      <div ref={row1Ref} className="about-row" style={{ ...rowStyle, width: '100%' }}>
        <span className="ab-text about-word" style={textStyle}>We</span>

        {/* Images collapse-wrapper — width animates to 0 on fade */}
        <div ref={imgGroupRef} style={{ flexShrink: 0, overflow: 'visible' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {([img1Ref, img2Ref, img3Ref] as React.RefObject<HTMLDivElement>[]).map((ref, i) => (
              <div
                key={i}
                ref={ref}
                className="about-section-img"
                style={{
                  width: IMG_SZ, height: IMG_SZ,
                  borderRadius: 8, overflow: 'hidden',
                  flexShrink: 0, position: 'relative',
                }}
              >
                <Image
                  src={IMGS[i].src}
                  alt={IMGS[i].alt}
                  fill
                  sizes="(max-width: 768px) 56px, 108px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

        <span className="ab-text about-word" style={textStyle}>are a performance</span>
      </div>

      {/* Row 2: studio | [→] | dedicated */}
      <div ref={row2Ref} className="about-row" style={{ ...rowStyle, width: '100%' }}>
        <span className="ab-text about-word" style={textStyle}>marketing</span>

        {/* Arrow collapse-wrapper */}
        <div ref={arrowWrapRef} style={{ flexShrink: 0, overflow: 'visible' }}>
          <svg
            ref={arrowRef}
            viewBox="0 0 64 28"
            fill="none"
            style={{ width: 'clamp(40px, 5.5vw, 80px)', height: 'auto', display: 'block' }}
          >
            <path
              d="M0 14H60M46 4L60 14L46 24"
              stroke="#C82A2A" strokeWidth="4"
              strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </div>

        <span className="ab-text about-word" style={textStyle}>agency built</span>
      </div>

      {/* Row 3: to craft a | [Work with us] | solution */}
      <div ref={row3Ref} className="about-row" style={{ ...rowStyle, width: '100%' }}>
        <span className="ab-text about-word" style={textStyle}>to</span>

        {/* Button collapse-wrapper */}
        <div ref={btnWrapRef} style={{ flexShrink: 0, overflow: 'visible' }}>
          <a
            ref={btnRef}
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#111111',
              color: '#FFFFFF',
              borderRadius: '1000px',
              padding: 'clamp(12px, 1.2vw, 18px) clamp(20px, 2.5vw, 36px)',
              fontFamily: 'var(--font-tight)',
              fontWeight: 500,
              fontSize: 'clamp(0.875rem, 1.1vw, 1rem)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              textDecoration: 'none',
              border: '1.5px solid transparent',
              transition: 'background 0.35s ease, border 0.35s ease',
            }}
            onMouseEnter={e => {
              isHovered.current = true
              ;(e.currentTarget as HTMLElement).style.background =
                'linear-gradient(135deg, #111111 0%, #C82A2A 100%)'
            }}
            onMouseLeave={e => {
              isHovered.current = false
              ;(e.currentTarget as HTMLElement).style.background =
                scrollProg.current > 0.58 ? 'rgba(255,255,255,0.15)' : '#111111'
            }}
          >
            Work with us
          </a>
        </div>

        <span className="ab-text about-word" style={textStyle}>scale</span>
      </div>
    </section>
  )
}
