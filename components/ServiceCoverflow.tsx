'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Link from 'next/link'

interface ServiceCard {
  title: string
  href: string
  description: string
  tag: string
}

interface Props {
  title: string
  cards: ServiceCard[]
}

const GAP = 20

export default function ServiceCoverflow({ title, cards }: Props) {
  const [active, setActive] = useState(Math.floor(cards.length / 2))
  const [cardW, setCardW] = useState(280)
  const firstCardRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number>(0)
  const touchStartY = useRef<number>(0)
  const isDragging = useRef(false)
  const mouseStartX = useRef<number>(0)
  const isMouseDragging = useRef(false)
  const mouseMoved = useRef(false)

  // Measure real card width after render/resize
  useEffect(() => {
    const measure = () => {
      if (firstCardRef.current) setCardW(firstCardRef.current.offsetWidth)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const prev = useCallback(() => setActive(a => Math.max(0, a - 1)), [])
  const next = useCallback(() => setActive(a => Math.min(cards.length - 1, a + 1)), [cards.length])

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    isDragging.current = false
  }
  const onTouchMove = (e: React.TouchEvent) => {
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current)
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current)
    if (dx > dy && dx > 10) isDragging.current = true
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx < -40) next()
    else if (dx > 40) prev()
  }

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX
    isMouseDragging.current = true
    mouseMoved.current = false
    e.preventDefault()
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDragging.current) return
    const dx = Math.abs(e.clientX - mouseStartX.current)
    if (dx > 8) mouseMoved.current = true
  }
  const onMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDragging.current) return
    isMouseDragging.current = false
    if (!mouseMoved.current) return
    const dx = e.clientX - mouseStartX.current
    if (dx < -40) next()
    else if (dx > 40) prev()
  }
  const onMouseLeave = () => {
    if (isMouseDragging.current && mouseMoved.current) {
      isMouseDragging.current = false
    }
  }

  const getCardStyle = (i: number): React.CSSProperties => {
    const offset = i - active
    const abs = Math.abs(offset)
    return {
      position: 'relative',
      flexShrink: 0,
      width: 'clamp(220px, 70vw, 280px)',
      height: 'clamp(300px, 50vw, 340px)',
      background: abs === 0 ? '#E60000' : abs === 1 ? '#444444' : '#2A2A2A',
      color: '#FFFFFF',
      borderRadius: 16,
      padding: 'clamp(20px, 4vw, 28px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      cursor: 'pointer',
      // Individual card: only scale + rotateY — track handles X centering
      transform: `scale(${abs === 0 ? 1 : abs === 1 ? 0.88 : 0.76}) rotateY(${offset * -8}deg)`,
      transformOrigin: abs === 0 ? 'center' : offset < 0 ? 'right center' : 'left center',
      opacity: abs > 2 ? 0 : abs === 0 ? 1 : abs === 1 ? 0.65 : 0.35,
      zIndex: 10 - abs,
      transition: 'all 0.45s cubic-bezier(0.4,0,0.2,1)',
      boxShadow: abs === 0 ? '0 32px 64px rgba(230,0,0,0.25)' : '0 8px 24px rgba(0,0,0,0.25)',
      pointerEvents: abs > 2 ? 'none' : 'auto',
    }
  }

  // Track translateX: slide so active card's center aligns to 50% of container
  // paddingLeft: 50% makes card[0] start at 50vw; we then shift left by:
  //   active * (cardW + GAP)  — to bring active card to 50%
  //   + cardW / 2             — to align center not left edge
  const trackX = -(active * (cardW + GAP)) - cardW / 2

  return (
    <section style={{ background: '#F0F0F0', padding: 'clamp(64px,8vw,120px) 0', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{
        padding: '0 var(--container-px)',
        marginBottom: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <h2 style={{
          fontFamily: 'var(--font-tight)',
          fontSize: 'clamp(1.75rem,4vw,2.75rem)',
          fontWeight: 700,
          color: '#111111',
        }}>
          {title}
        </h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={prev}
            disabled={active === 0}
            aria-label="Previous"
            style={{
              width: 44, height: 44, borderRadius: '50%',
              background: active === 0 ? 'rgba(17,17,17,0.08)' : '#111111',
              color: active === 0 ? 'rgba(17,17,17,0.3)' : '#FFFFFF',
              border: 'none', cursor: active === 0 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem', transition: 'all 0.25s', flexShrink: 0,
            }}
          >←</button>
          <button
            onClick={next}
            disabled={active === cards.length - 1}
            aria-label="Next"
            style={{
              width: 44, height: 44, borderRadius: '50%',
              background: active === cards.length - 1 ? 'rgba(17,17,17,0.08)' : '#111111',
              color: active === cards.length - 1 ? 'rgba(17,17,17,0.3)' : '#FFFFFF',
              border: 'none', cursor: active === cards.length - 1 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem', transition: 'all 0.25s', flexShrink: 0,
            }}
          >→</button>
        </div>
      </div>

      {/* Coverflow track */}
      <div
        style={{ perspective: 1200, overflow: 'hidden', cursor: isMouseDragging.current ? 'grabbing' : 'grab' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <div style={{
          display: 'flex',
          gap: GAP,
          alignItems: 'center',
          userSelect: 'none',
          // paddingLeft: 50% → card[0] starts at the container's center
          paddingLeft: '50%',
          paddingRight: '50%',
          // Slide the whole track so active card is centered
          transform: `translateX(${trackX}px)`,
          transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
        }}>
          {cards.map((card, i) => (
            <div
              key={i}
              ref={i === 0 ? firstCardRef : undefined}
              style={getCardStyle(i)}
              onClick={() => setActive(i)}
            >
              <span style={{
                position: 'absolute', top: 'clamp(16px,4vw,28px)', left: 'clamp(16px,4vw,28px)',
                fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{
                position: 'absolute', top: 'clamp(16px,4vw,28px)', right: 'clamp(16px,4vw,28px)',
                fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 500,
                background: 'rgba(255,255,255,0.15)', padding: '4px 10px', borderRadius: 20,
                color: 'rgba(255,255,255,0.85)',
              }}>
                {card.tag}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-tight)', fontSize: 'clamp(1rem,3vw,1.25rem)',
                fontWeight: 600, color: '#FFFFFF', marginBottom: 10, lineHeight: 1.3,
              }}>
                {card.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.75rem,2vw,0.875rem)',
                color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: 16,
              }}>
                {card.description}
              </p>
              {i === active && (
                <Link href={card.href} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 600,
                  color: '#FFFFFF', textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.5)', paddingBottom: 2,
                }}>
                  Learn More →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 40 }}>
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to card ${i + 1}`}
            style={{
              width: i === active ? 24 : 8, height: 8, borderRadius: 4,
              background: i === active ? '#E60000' : 'rgba(17,17,17,0.2)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease', padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  )
}
