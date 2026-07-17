'use client'

import Link from 'next/link'
import { SERVICES } from '@/constants'

// Background shades per card — subtle progression so the stack looks layered
const BG = ['#FFFFFF', '#FAFAFA', '#F7F7F7', '#F5F5F5', '#F2F2F2', '#EFEFEF']

export default function Services() {
  return (
    <section style={{ background: '#F0F0F0' }}>
      {/* Section header */}
      <div style={{
        padding: 'clamp(80px,10vw,140px) var(--container-px) clamp(40px,5vw,64px)',
        maxWidth: 1280,
        margin: '0 auto',
      }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: '#C82A2A', marginBottom: 14,
        }}>
          What We Offer
        </p>
        <h2 style={{
          fontFamily: 'var(--font-tight)',
          fontSize: 'clamp(2rem,5vw,4rem)',
          fontWeight: 500, color: '#111111', lineHeight: 1.1, margin: 0,
        }}>
          Services built for growth.
        </h2>
      </div>

      {/* Sticky stack */}
      <div style={{ padding: '0 var(--container-px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {SERVICES.map((svc, i) => (
            <div
              key={svc.number}
              className="sticky-service-card"
              style={{
                position: 'sticky',
                top: `calc(72px + ${i * 8}px)`,
                zIndex: i + 1,
              }}
            >
              <div style={{
                background: BG[i] || '#FFFFFF',
                border: '1px solid rgba(17,17,17,0.07)',
                borderRadius: '20px 20px 0 0',
                padding: 'clamp(28px,3.5vw,48px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(12px,1.5vw,18px)',
                boxShadow: i > 0 ? '0 -4px 32px rgba(0,0,0,0.06)' : 'none',
              }}>

                {/* Top row */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: 16,
                  flexWrap: 'wrap',
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                    <span style={{
                      fontFamily: 'var(--font-tight)',
                      fontSize: 'clamp(2rem,4vw,3.5rem)',
                      fontWeight: 500,
                      color: 'rgba(200,42,42,0.12)',
                      lineHeight: 1,
                      flexShrink: 0,
                    }}>
                      {svc.number}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-tight)',
                      fontSize: 'clamp(1.25rem,2.2vw,2rem)',
                      fontWeight: 600,
                      color: '#111111',
                      lineHeight: 1.15,
                      margin: 0,
                    }}>
                      {svc.title}
                    </h3>
                  </div>
                  <Link
                    href={`/services/${svc.slug}`}
                    style={{
                      flexShrink: 0,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#C82A2A',
                      textDecoration: 'none',
                      marginTop: 6,
                      transition: 'gap 0.2s ease',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.gap = '12px')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.gap = '6px')}
                  >
                    Learn More →
                  </Link>
                </div>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.875rem,1.15vw,1rem)',
                  color: 'rgba(17,17,17,0.55)',
                  lineHeight: 1.75,
                  margin: 0,
                  maxWidth: 680,
                }}>
                  {svc.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {svc.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        color: '#C82A2A',
                        background: 'rgba(200,42,42,0.07)',
                        padding: '4px 12px',
                        borderRadius: 20,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacer so last card is fully readable */}
      <div style={{ height: 'clamp(80px,12vw,140px)', background: '#EFEFEF' }} />
    </section>
  )
}
