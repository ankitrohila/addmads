'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LEAD_FORM_SERVICES, BUDGET_RANGES } from '@/constants'

gsap.registerPlugin(ScrollTrigger)

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 48 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    const zohoUrl = process.env.NEXT_PUBLIC_ZOHO_FORM_URL
    if (zohoUrl) {
      fetch(zohoUrl, { method: 'POST', body: formData, mode: 'no-cors' })
    }
    const leads = JSON.parse(localStorage.getItem('addmads_leads') || '[]')
    leads.push({ ...data, timestamp: new Date().toISOString() })
    localStorage.setItem('addmads_leads', JSON.stringify(leads))
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 0',
    fontFamily: 'var(--font-sans)',
    fontSize: '1rem',
    color: '#111111',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(17,17,17,0.12)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.6875rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(17,17,17,0.45)',
    display: 'block',
    marginBottom: 4,
  }

  const groups = LEAD_FORM_SERVICES.reduce<Record<string, typeof LEAD_FORM_SERVICES>>((acc, svc) => {
    ;(acc[svc.group] ??= []).push(svc)
    return acc
  }, {})

  return (
    <section
      ref={sectionRef}
      style={{ background: '#FFFFFF', padding: 'clamp(80px, 10vw, 140px) var(--container-px)' }}
    >
      <div ref={formRef} style={{ opacity: 0, maxWidth: 720, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-tight)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 500,
          color: '#111111',
          lineHeight: 1.15,
          marginBottom: 16,
        }}>
          Let&apos;s Build Your Digital Success
        </h2>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(0.9375rem, 1.3vw, 1.1rem)',
          color: 'rgba(17,17,17,0.5)',
          lineHeight: 1.7,
          marginBottom: 'clamp(40px, 5vw, 64px)',
          maxWidth: 520,
        }}>
          Share your vision with us and let&apos;s create something extraordinary together. Fill in the details below and we&apos;ll get back to you within 24 hours.
        </p>

        {submitted ? (
          <div style={{
            padding: '48px 0',
            textAlign: 'center',
          }}>
            <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.5rem', fontWeight: 500, color: '#111111', marginBottom: 8 }}>
              Thank you!
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(17,17,17,0.5)' }}>
              We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px', marginBottom: 32 }}>
              <div>
                <label style={labelStyle}>Your Name *</label>
                <input name="name" required placeholder="John Doe" style={inputStyle}
                  onFocus={e => e.currentTarget.style.borderBottomColor = '#E60000'}
                  onBlur={e => e.currentTarget.style.borderBottomColor = 'rgba(17,17,17,0.12)'}
                />
              </div>
              <div>
                <label style={labelStyle}>Email Address *</label>
                <input name="email" type="email" required placeholder="you@example.com" style={inputStyle}
                  onFocus={e => e.currentTarget.style.borderBottomColor = '#E60000'}
                  onBlur={e => e.currentTarget.style.borderBottomColor = 'rgba(17,17,17,0.12)'}
                />
              </div>
              <div>
                <label style={labelStyle}>Phone Number *</label>
                <input name="phone" type="tel" required placeholder="+91-9220872212" style={inputStyle}
                  onFocus={e => e.currentTarget.style.borderBottomColor = '#E60000'}
                  onBlur={e => e.currentTarget.style.borderBottomColor = 'rgba(17,17,17,0.12)'}
                />
              </div>
              <div>
                <label style={labelStyle}>Service Interested In *</label>
                <select name="service" required style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' as const }}
                  onFocus={e => e.currentTarget.style.borderBottomColor = '#E60000'}
                  onBlur={e => e.currentTarget.style.borderBottomColor = 'rgba(17,17,17,0.12)'}
                  defaultValue=""
                >
                  <option value="" disabled>Select a service...</option>
                  {Object.entries(groups).map(([group, svcs]) => (
                    <optgroup key={group} label={group}>
                      {svcs.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </optgroup>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: 32, maxWidth: 'calc(50% - 20px)' }}>
              <label style={labelStyle}>Budget Range *</label>
              <select name="budget" required style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' as const }}
                onFocus={e => e.currentTarget.style.borderBottomColor = '#E60000'}
                onBlur={e => e.currentTarget.style.borderBottomColor = 'rgba(17,17,17,0.12)'}
                defaultValue=""
              >
                <option value="" disabled>Select a budget range...</option>
                {BUDGET_RANGES.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: 40 }}>
              <label style={labelStyle}>Tell Us About Your Project</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Share your vision, goals, and any specific requirements..."
                style={{
                  ...inputStyle,
                  borderBottom: 'none',
                  border: '1px solid rgba(17,17,17,0.12)',
                  borderRadius: 8,
                  padding: 16,
                  resize: 'vertical',
                  minHeight: 140,
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#E60000'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(17,17,17,0.12)'}
              />
            </div>

            <button
              type="submit"
              className="btn-red"
              style={{ padding: '16px 36px', fontSize: '1rem' }}
            >
              Send Your Details
            </button>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              color: 'rgba(17,17,17,0.35)',
              marginTop: 16,
            }}>
              We respect your privacy. Your information will be used only to contact you about your project.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
