'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FAQS } from '@/constants'

gsap.registerPlugin(ScrollTrigger)

export default function FAQs() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const faqRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        faqRefs.current.filter(Boolean),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section ref={sectionRef} id="faqs" style={{ background: '#FFFFFF' }}>
      <div style={{ padding: 'clamp(80px, 10vw, 160px) var(--container-px)' }}>
        {/* Headline */}
        <div ref={headRef} style={{ opacity: 0, marginBottom: 'clamp(48px, 6vw, 80px)', maxWidth: 700 }}>
          <div
            style={{
              fontFamily: 'var(--font-tight)',
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              fontWeight: 500,
              lineHeight: 1.2,
              color: '#111111',
              marginBottom: 'clamp(16px, 2vw, 24px)',
            }}
          >
            Frequently Asked Questions
          </div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
              fontWeight: 400,
              color: 'rgba(17,17,17,0.55)',
              lineHeight: 1.6,
            }}
          >
            Everything you need to know about our services and how we work. Can&apos;t find your answer? Feel free to contact us directly.
          </p>
        </div>

        {/* FAQs */}
        <div style={{ maxWidth: 800 }}>
          {FAQS.map((faq, index) => (
            <div
              key={faq.id}
              ref={el => {
                faqRefs.current[index] = el
              }}
              style={{
                opacity: 0,
                marginBottom: 16,
                border: '1px solid rgba(17,17,17,0.08)',
                borderRadius: 8,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                style={{
                  width: '100%',
                  padding: 'clamp(20px, 2vw, 28px)',
                  background: expandedId === faq.id ? '#F8F8F8' : '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                }}
                onMouseEnter={e => {
                  if (expandedId !== faq.id) {
                    (e.currentTarget as HTMLButtonElement).style.background = '#F8F8F8'
                  }
                }}
                onMouseLeave={e => {
                  if (expandedId !== faq.id) {
                    (e.currentTarget as HTMLButtonElement).style.background = '#FFFFFF'
                  }
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                    fontWeight: 500,
                    color: '#111111',
                    lineHeight: 1.4,
                    flex: 1,
                  }}
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 24,
                    height: 24,
                    color: '#C82A2A',
                    fontSize: '1.5rem',
                    transition: 'transform 0.3s ease',
                    transform: expandedId === faq.id ? 'rotate(45deg)' : 'rotate(0deg)',
                    marginLeft: 16,
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: expandedId === faq.id ? '500px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
              >
                <div
                  style={{
                    padding: 'clamp(16px, 2vw, 24px)',
                    paddingTop: 0,
                    background: '#F8F8F8',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                      fontWeight: 400,
                      color: 'rgba(17,17,17,0.65)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
