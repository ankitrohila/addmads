'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const H1: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 'clamp(3rem, 15vw, 13.5rem)',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: 'normal',
  flexShrink: 0,
  whiteSpace: 'nowrap',
  margin: 0,
}

export default function Hero() {
  const sectionRef     = useRef<HTMLElement>(null)
  const outerRef       = useRef<HTMLDivElement>(null)
  const movingRef      = useRef<HTMLDivElement>(null)
  const asteriskRef    = useRef<HTMLDivElement>(null)
  const mobileAsteriskRef = useRef<HTMLDivElement>(null)
  const descRef        = useRef<HTMLDivElement>(null)
  const btnRef         = useRef<HTMLAnchorElement>(null)
  const btnTextRef     = useRef<HTMLSpanElement>(null)
  const thatRef        = useRef<HTMLHeadingElement>(null)
  const matterRef      = useRef<HTMLHeadingElement>(null)

  // Shade layer refs — black duplicate of that + matter
  const shadeRef       = useRef<HTMLDivElement>(null)
  const shadeThatRef   = useRef<HTMLHeadingElement>(null)
  const shadeMatterRef = useRef<HTMLHeadingElement>(null)

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Mobile asterisk spin
  useEffect(() => {
    if (!isMobile || !mobileAsteriskRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(mobileAsteriskRef.current, { rotation: 360, duration: 10, ease: 'none', repeat: -1 })
    })
    return () => ctx.revert()
  }, [isMobile])

  useEffect(() => {
    if (isMobile) return
    const ctx = gsap.context(() => {
      const DELAY = 3.1

      // Entrance animations
      gsap.fromTo(movingRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: DELAY }
      )
      gsap.fromTo(descRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.9, ease: 'power3.out', delay: DELAY + 0.4 }
      )

      // Asterisk spins continuously
      gsap.to(asteriskRef.current, { rotation: 360, duration: 10, ease: 'none', repeat: -1 })

      const moving = movingRef.current
      const outer  = outerRef.current
      const btn    = btnRef.current
      const btnTxt = btnTextRef.current
      if (!moving || !outer) return

      let initBtnW = 0
      const captureBtnWidth = () => {
        if (btn && initBtnW === 0) initBtnW = btn.offsetWidth
      }

      const getEnd = () => -(moving.scrollWidth - outer.offsetWidth + 32)

      // Sync shade text positions to their grey counterparts.
      // Re-run on every update so CTA width changes don't drift alignment.
      const syncShadePositions = () => {
        if (shadeThatRef.current && thatRef.current) {
          shadeThatRef.current.style.left = thatRef.current.offsetLeft + 'px'
        }
        if (shadeMatterRef.current && matterRef.current) {
          shadeMatterRef.current.style.left = matterRef.current.offsetLeft + 'px'
        }
      }
      syncShadePositions()

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${Math.abs(getEnd()) * 1.4}`,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scrub: false,
        onRefresh: syncShadePositions,
        onUpdate: (self) => {
          if (!moving) return

          // Move the row left
          gsap.set(moving, { x: getEnd() * self.progress })

          // Button morphs to circle in first 40 %
          const bp = Math.min(self.progress / 0.4, 1)
          captureBtnWidth()
          if (btn && initBtnW > 0) {
            const btnH = btn.offsetHeight
            gsap.set(btn, {
              width:        initBtnW - (initBtnW - btnH) * bp,
              paddingLeft:  Math.round((1 - bp) * 40),
              paddingRight: Math.round((1 - bp) * 40),
            })
          }
          if (btnTxt) gsap.set(btnTxt, { opacity: Math.max(0, 1 - bp * 2) })

          // Keep shade text aligned (CTA width shrinks during first 40 %)
          syncShadePositions()

          // Grow shade width — right boundary sweeps rightward across the row,
          // turning "that" then "matter" from grey to black.
          const matter = matterRef.current
          const shade  = shadeRef.current
          if (matter && shade) {
            const targetWidth = matter.offsetLeft + matter.offsetWidth
            const shadeWidth  = Math.min(self.progress * targetWidth * 1.6, targetWidth)
            gsap.set(shade, { width: shadeWidth })
          }

          // Asterisk bars turn white once button is collapsed (past 50 %)
          const asteriskBars = asteriskRef.current?.querySelectorAll<HTMLElement>('div')
          if (asteriskBars && self.progress > 0.5) {
            const ap = Math.min((self.progress - 0.5) / 0.3, 1)
            const c  = Math.round(17 + (255 - 17) * ap)
            asteriskBars.forEach(bar => { bar.style.background = `rgb(${c},${c},${c})` })
          } else if (asteriskBars) {
            asteriskBars.forEach(bar => { bar.style.background = '#111111' })
          }
        },
      })

      // Fade CTA group toward end
      gsap.to('.hero-cta-group', {
        opacity: 0, ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${Math.abs(getEnd()) * 0.9}`,
          scrub: 1,
        },
      })

      return () => st.kill()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // ── Mobile Hero — clean static layout ──────────────────────────────────────
  if (isMobile) {
    return (
      <section style={{
        background: '#FFFFFF',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: `calc(var(--nav-h) + 48px) var(--container-px) clamp(48px,10vw,72px)`,
      }}>
        {/* Titles */}
        <h1 style={{
          fontFamily: 'var(--font-tight)',
          fontSize: 'clamp(3.2rem, 16vw, 5rem)',
          fontWeight: 500,
          lineHeight: 1.1,
          color: '#111111',
          margin: 0,
        }}>Results</h1>
        <h1 style={{
          fontFamily: 'var(--font-tight)',
          fontSize: 'clamp(3.2rem, 16vw, 5rem)',
          fontWeight: 500,
          lineHeight: 1.1,
          color: '#D1D1D1',
          margin: '0 0 32px 0',
        }}>that scale</h1>

        {/* CTA row: button + asterisk */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32, flexWrap: 'wrap' }}>
          <a href="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#C82A2A',
            color: '#FFFFFF',
            borderRadius: '1000px',
            padding: '15px 30px',
            fontFamily: 'var(--font-tight)',
            fontWeight: 500,
            fontSize: '1rem',
            whiteSpace: 'nowrap',
            textDecoration: 'none',
          }}>Work with us</a>

          {/* Rotating asterisk */}
          <div ref={mobileAsteriskRef} style={{ position: 'relative', width: 56, height: 56, flexShrink: 0 }}>
            {[0, 90, 45, -45].map((angle, i) => (
              <div key={i} style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: 48, height: 10,
                background: '#111111',
                borderRadius: 3,
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              }} />
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(0.875rem, 4vw, 1rem)',
          color: '#555555',
          lineHeight: 1.65,
          margin: 0,
          maxWidth: 340,
        }}>
          Performance marketing &amp; digital growth. We turn ad spend into measurable results.
        </p>
      </section>
    )
  }

  return (
    <section ref={sectionRef} id="hero" style={{ background: '#FFFFFF' }}>
      <div
        ref={outerRef}
        style={{
          height: '100svh',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Scrolling title row */}
        <div
          ref={movingRef}
          data-hero-row
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 'clamp(40px, 5vw, 72px)',
            paddingLeft: 'var(--container-px)',
            paddingRight: 'var(--container-px)',
            opacity: 0,
          }}
        >
          {/* "Results" — always black */}
          <h1 style={{ ...H1, color: '#111111' }}>Results</h1>

          {/* CTA group: button + asterisk */}
          <div
            className="hero-cta-group"
            style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 3vw, 40px)', flexShrink: 0 }}
          >
            <a
              ref={btnRef}
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#C82A2A',
                color: '#FFFFFF',
                borderRadius: '1000px',
                padding: 'clamp(14px, 1.5vw, 22px) clamp(24px, 3vw, 40px)',
                fontFamily: 'var(--font-tight)',
                fontWeight: 500,
                fontSize: 'clamp(0.875rem, 1.2vw, 1.08rem)',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                textDecoration: 'none',
                overflow: 'hidden',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                if (!el.style.background.includes('rgba')) el.style.background = '#A82222'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                if (!el.style.background.includes('rgba')) el.style.background = '#C82A2A'
              }}
            >
              <span ref={btnTextRef} style={{ whiteSpace: 'nowrap' }}>Work with us</span>
            </a>

            {/* Rotating asterisk */}
            <div
              ref={asteriskRef}
              style={{
                position: 'relative',
                width: 'clamp(60px, 6vw, 90px)',
                height: 'clamp(60px, 6vw, 90px)',
                flexShrink: 0,
              }}
            >
              {[0, 90, 45, -45].map((angle, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  width: 'clamp(50px, 5.5vw, 80px)',
                  height: 'clamp(12px, 1.2vw, 16px)',
                  background: '#111111',
                  borderRadius: 3,
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                  transition: 'background 0.3s ease',
                }} />
              ))}
            </div>
          </div>

          {/* Grey "that" */}
          <h1 ref={thatRef} style={{ ...H1, color: '#D1D1D1' }}>that</h1>

          {/* Grey "scale" */}
          <h1 ref={matterRef} style={{ ...H1, color: '#D1D1D1' }}>scale</h1>

          {/* ── Black shade overlay ─────────────────────────────────────────────
              Grows its width from left → right, revealing black text beneath.
              Both this and movingRef translate together (shade is inside movingRef),
              so the visible black boundary moves rightward in viewport space
              while the text row moves leftward — matching the reference dual-movement.
          ─────────────────────────────────────────────────────────────────────── */}
          <div
            ref={shadeRef}
            data-hero-shade
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 0,
              overflow: 'hidden',
              pointerEvents: 'none',
              zIndex: 5,
            }}
          >
            <h1
              ref={shadeThatRef}
              style={{
                ...H1,
                color: '#111111',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                left: 0,
              }}
            >
              that
            </h1>
            <h1
              ref={shadeMatterRef}
              style={{
                ...H1,
                color: '#111111',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                left: 0,
              }}
            >
              scale
            </h1>
          </div>
        </div>

        {/* Subtitle — absolute bottom right */}
        <div
          ref={descRef}
          data-hero-desc
          style={{
            position: 'absolute',
            bottom: 'clamp(40px, 5vw, 72px)',
            right: 'var(--container-px)',
            maxWidth: 300,
            textAlign: 'right',
            opacity: 0,
          }}
        >
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.875rem, 1.5vw, 1.35rem)',
            fontWeight: 500,
            color: '#333333',
            lineHeight: 1.6,
            margin: 0,
          }}>
            Performance marketing &amp; digital growth. We turn ad spend into measurable results.
          </p>
        </div>
      </div>
    </section>
  )
}
