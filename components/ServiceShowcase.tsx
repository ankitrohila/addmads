'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ITEMS = [
  {
    num: '01',
    label: 'Advertising',
    desc: 'Strategic campaigns that capture attention and drive results.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    href: '/services/performance-marketing',
  },
  {
    num: '02',
    label: 'Graphic',
    desc: 'Creative visuals that communicate your brand identity effectively.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    href: '/services/graphics-design',
  },
  {
    num: '03',
    label: 'Branding',
    desc: 'Building brand identities that people remember and trust.',
    img: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    href: '/services/branding',
  },
  {
    num: '04',
    label: 'Website',
    desc: 'Modern websites and web apps that convert visitors into customers.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    href: '/services/it-services',
  },
]

export default function ServiceShowcase() {
  const [active, setActive] = useState(0)

  return (
    <section style={{
      background: '#C82A2A',
      padding: 'clamp(72px,10vw,120px) var(--container-px)',
      overflow: 'hidden',
    }}>
      <div className="showcase-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(40px,6vw,80px)',
        alignItems: 'center',
        maxWidth: 1200,
        margin: '0 auto',
      }}>

        {/* ── Left column: heading + numbered list ── */}
        <div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: 24,
          }}>
            What We Do
          </p>
          <h2 style={{
            fontFamily: 'var(--font-tight)',
            fontSize: 'clamp(1.75rem,4vw,3rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#FFFFFF',
            marginBottom: 20,
          }}>
            We introduce methodologies, processes, and learnings to drive digital innovation projects.
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.875rem,1.2vw,1rem)',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 400,
          }}>
            Ensuring impactful experiences that drive growth and success.
          </p>

          {/* Numbered service list */}
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {ITEMS.map((item, i) => (
              <li key={item.num}>
                <button
                  onClick={() => setActive(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '12px 0',
                    cursor: 'pointer',
                    textAlign: 'left',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: active === i ? '#FFFFFF' : 'rgba(255,255,255,0.35)',
                    transition: 'color 0.3s',
                    minWidth: 24,
                  }}>
                    {item.num}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-tight)',
                    fontSize: 'clamp(1.1rem,2vw,1.5rem)',
                    fontWeight: active === i ? 700 : 400,
                    color: active === i ? '#FFFFFF' : 'rgba(255,255,255,0.45)',
                    transition: 'all 0.3s',
                  }}>
                    {item.label}
                  </span>
                  {active === i && (
                    <span style={{
                      marginLeft: 'auto',
                      width: 8, height: 8,
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      flexShrink: 0,
                    }} />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right column: service preview card ── */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
        }}>
          {/* Tab strip */}
          <div style={{
            display: 'flex',
            borderBottom: '1px solid rgba(17,17,17,0.07)',
          }}>
            {ITEMS.map((item, i) => (
              <button
                key={item.num}
                onClick={() => setActive(i)}
                style={{
                  flex: 1,
                  padding: '12px 8px',
                  background: 'none',
                  border: 'none',
                  borderBottom: active === i ? '2px solid #111111' : '2px solid transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                  transition: 'border-color 0.25s',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.625rem',
                  fontWeight: 600,
                  color: active === i ? '#111111' : 'rgba(17,17,17,0.3)',
                  letterSpacing: '0.08em',
                  transition: 'color 0.25s',
                }}>{item.num}.</span>
                <span style={{
                  fontFamily: 'var(--font-tight)',
                  fontSize: 'clamp(0.75rem,1.1vw,0.9375rem)',
                  fontWeight: 600,
                  color: active === i ? '#111111' : 'rgba(17,17,17,0.35)',
                  transition: 'color 0.25s',
                }}>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Image */}
          <div style={{ position: 'relative', height: 'clamp(200px,28vw,380px)' }}>
            {ITEMS.map((item, i) => (
              <div
                key={item.num}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: active === i ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

          {/* Description + CTA */}
          <div style={{ padding: 'clamp(16px,2vw,28px)' }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.875rem,1.2vw,1rem)',
              color: 'rgba(17,17,17,0.6)',
              lineHeight: 1.65,
              margin: '0 0 16px 0',
              minHeight: '3em',
              transition: 'opacity 0.3s',
            }}>
              {ITEMS[active].desc}
            </p>
            <Link
              href={ITEMS[active].href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#C82A2A',
                textDecoration: 'none',
              }}
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
