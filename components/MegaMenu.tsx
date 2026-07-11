'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { MEGA_MENU_CATEGORIES } from '@/constants'

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
}

const CATEGORY_VISUALS: Record<string, { img: string; label: string; bg: string }> = {
  marketing: {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=560&q=80&auto=format&fit=crop',
    label: 'Drive measurable ROI',
    bg: 'linear-gradient(160deg,#1a0000 0%,#5c0000 100%)',
  },
  branding: {
    img: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=560&q=80&auto=format&fit=crop',
    label: 'Build brand equity',
    bg: 'linear-gradient(160deg,#0d0d0d 0%,#2a1212 100%)',
  },
  graphics: {
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=560&q=80&auto=format&fit=crop',
    label: 'Visuals that convert',
    bg: 'linear-gradient(160deg,#1a1a2e 0%,#16213e 100%)',
  },
  seo: {
    img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=560&q=80&auto=format&fit=crop',
    label: 'Own the top positions',
    bg: 'linear-gradient(160deg,#0f3460 0%,#0d1b2a 100%)',
  },
  it: {
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=560&q=80&auto=format&fit=crop',
    label: 'Build for scale',
    bg: 'linear-gradient(160deg,#0d0d0d 0%,#0d1f0d 100%)',
  },
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const menuRef  = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const [activeId, setActiveId] = useState(MEGA_MENU_CATEGORIES[0].id)

  const activeCategory = MEGA_MENU_CATEGORIES.find(c => c.id === activeId) ?? MEGA_MENU_CATEGORIES[0]
  const visual = CATEGORY_VISUALS[activeId] ?? CATEGORY_VISUALS.marketing

  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return
    if (isOpen) {
      gsap.set(menu, { display: 'block', pointerEvents: 'auto' })
      gsap.fromTo(menu, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power3.out' })
    } else {
      gsap.to(menu, {
        opacity: 0, y: -10, duration: 0.2, ease: 'power3.in',
        onComplete: () => gsap.set(menu, { display: 'none', pointerEvents: 'none' }),
      })
    }
  }, [isOpen])

  useEffect(() => {
    if (panelRef.current && isOpen) {
      gsap.fromTo(panelRef.current, { opacity: 0, x: 10 }, { opacity: 1, x: 0, duration: 0.22, ease: 'power2.out' })
    }
  }, [activeId, isOpen])

  return (
    <div
      ref={menuRef}
      style={{
        display: 'none',
        background: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderLeft: '1px solid rgba(17,17,17,0.1)',
        borderRight: '1px solid rgba(17,17,17,0.1)',
        borderBottom: '1px solid rgba(17,17,17,0.1)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.1)',
        opacity: 0,
        pointerEvents: 'none',
      }}
    >
      {/* 75%-wide center-aligned panel */}
      <div style={{
        width: '75%',
        margin: '0 auto',
        padding: '24px 0',
        display: 'flex',
        alignItems: 'stretch',
        gap: 0,
      }}>

        {/* LEFT — category accordion */}
        <div style={{
          width: 210,
          flexShrink: 0,
          borderRight: '1px solid rgba(17,17,17,0.07)',
        }}>
          {MEGA_MENU_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveId(cat.id)}
              onClick={onClose}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '10px 18px',
                background: activeId === cat.id ? 'rgba(230,0,0,0.05)' : 'transparent',
                borderLeft: `3px solid ${activeId === cat.id ? '#E60000' : 'transparent'}`,
                cursor: 'pointer',
                outline: 'none',
                transition: 'all 0.18s ease',
                border: 'none',
                borderLeftWidth: 3,
                borderLeftStyle: 'solid',
                borderLeftColor: activeId === cat.id ? '#E60000' : 'transparent',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: activeId === cat.id ? 600 : 400,
                color: activeId === cat.id ? '#E60000' : '#111111',
                display: 'block',
              }}>
                {cat.label}
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.7rem',
                color: 'rgba(17,17,17,0.4)',
                display: 'block',
                marginTop: 2,
              }}>
                {cat.description}
              </span>
            </button>
          ))}
        </div>

        {/* CENTRE — sub-service grid */}
        <div ref={panelRef} style={{ flex: 1, padding: '6px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.625rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(17,17,17,0.32)',
            marginBottom: 12,
          }}>
            {activeCategory.label}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 10px' }}>
            {activeCategory.services.map(svc => (
              <Link
                key={svc.href}
                href={svc.href}
                onClick={onClose}
                style={{
                  display: 'block',
                  padding: '10px 14px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  color: '#333333',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 450,
                  background: 'rgba(17,17,17,0.03)',
                  border: '1px solid rgba(17,17,17,0.06)',
                  transition: 'all 0.18s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(17,17,17,0.07)'
                  el.style.color = '#111111'
                  el.style.borderColor = 'rgba(17,17,17,0.12)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(17,17,17,0.03)'
                  el.style.color = '#333333'
                  el.style.borderColor = 'rgba(17,17,17,0.06)'
                }}
              >
                {svc.label}
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(17,17,17,0.06)' }}>
            <Link
              href={activeCategory.href}
              onClick={onClose}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#E60000',
                textDecoration: 'none',
                transition: 'gap 0.2s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '12px' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '6px' }}
            >
              View all {activeCategory.label} →
            </Link>
          </div>
        </div>

        {/* RIGHT — square image card (260×260) */}
        <div style={{ width: 260, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 16 }}>
          <div style={{
            width: '100%',
            aspectRatio: '1 / 1',
            borderRadius: 10,
            overflow: 'hidden',
            position: 'relative',
            background: visual.bg,
          }}>
            <Image
              src={visual.img}
              alt={visual.label}
              fill
              sizes="260px"
              style={{ objectFit: 'cover', opacity: 0.72 }}
              unoptimized
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)',
              zIndex: 1,
            }} />
            <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, zIndex: 2 }}>
              <p style={{
                fontFamily: 'var(--font-tight)',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#FFFFFF',
                margin: '0 0 10px 0',
                lineHeight: 1.3,
              }}>
                {visual.label}
              </p>
              <Link
                href="/contact"
                onClick={onClose}
                style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  background: '#E60000',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  borderRadius: 5,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
