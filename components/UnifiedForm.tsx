'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Script from 'next/script'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LEAD_FORM_SERVICES, BUDGET_RANGES, CONTACT_EMAIL, CONTACT_PHONE } from '@/constants'

gsap.registerPlugin(ScrollTrigger)

declare global {
  interface Window {
    grecaptcha: { getResponse: (widgetId?: number) => string; reset: (widgetId?: number) => void }
    onRecaptchaLoad?: () => void
  }
}

interface FieldError { [key: string]: string }

interface UnifiedFormProps {
  heading?: string
  subheading?: string
  bgColor?: string
  showLeftInfo?: boolean
}

const SITEKEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''

const fieldBase: React.CSSProperties = {
  width: '100%',
  padding: '13px 16px',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.9375rem',
  color: '#111111',
  background: '#FFFFFF',
  border: '1px solid #D1D1D1',
  borderRadius: 8,
  outline: 'none',
  transition: 'border-color 0.25s, box-shadow 0.25s',
  boxSizing: 'border-box' as const,
}

const labelBase: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.6875rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color: 'rgba(0,0,0,0.45)',
  marginBottom: 6,
}

const errorStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '0.75rem',
  color: '#CC0000',
  marginTop: 4,
  display: 'block',
}

function focusField(el: HTMLElement) {
  el.style.borderColor = '#111111'
  el.style.boxShadow = '0 0 0 3px rgba(17,17,17,0.07)'
}
function blurField(el: HTMLElement) {
  el.style.borderColor = '#D1D1D1'
  el.style.boxShadow = 'none'
}
function hoverField(el: HTMLElement) { el.style.borderColor = '#666666' }
function unhoverField(el: HTMLElement, isFocused: boolean) {
  if (!isFocused) el.style.borderColor = '#D1D1D1'
}

// ─── Custom Dropdown ────────────────────────────────────────────────────────

interface DropdownOption { value: string; label: string; group?: string }

interface CustomSelectProps {
  value: string
  onChange: (val: string) => void
  options: DropdownOption[]
  groups?: Record<string, DropdownOption[]>
  placeholder: string
  hasError?: boolean
}

function CustomSelect({ value, onChange, options, groups, placeholder, hasError }: CustomSelectProps) {
  const [open, setOpen] = useState(false)
  const [focused, setFocused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [hoveredVal, setHoveredVal] = useState('')
  const wrapRef = useRef<HTMLDivElement>(null)

  const borderColor = hasError ? '#CC0000' : focused ? '#111111' : hovered ? '#666666' : '#D1D1D1'
  const boxShadow = focused ? '0 0 0 3px rgba(17,17,17,0.07)' : 'none'

  const selectedLabel = (() => {
    if (!value) return ''
    if (groups) {
      for (const svcs of Object.values(groups)) {
        const found = svcs.find(s => s.value === value)
        if (found) return found.label
      }
    }
    return options.find(o => o.value === value)?.label ?? ''
  })()

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false)
        setFocused(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const select = (val: string) => {
    onChange(val)
    setOpen(false)
    setFocused(false)
  }

  return (
    <div ref={wrapRef} style={{ position: 'relative' }}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => { setOpen(o => !o); setFocused(true) }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onBlur={() => { if (!open) setFocused(false) }}
        style={{
          ...fieldBase,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          borderColor,
          boxShadow,
          color: value ? '#111111' : '#999999',
          textAlign: 'left',
          background: '#FFFFFF',
        }}
      >
        <span>{selectedLabel || placeholder}</span>
        <span style={{
          fontSize: '0.6rem',
          color: '#666666',
          transition: 'transform 0.2s ease',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          flexShrink: 0,
          marginLeft: 8,
        }}>▼</span>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 4px)',
          left: 0,
          right: 0,
          background: '#FFFFFF',
          border: '1px solid rgba(17,17,17,0.12)',
          borderRadius: 8,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          zIndex: 9999,
          maxHeight: 280,
          overflowY: 'auto',
          scrollbarWidth: 'thin' as const,
          scrollbarColor: 'rgba(17,17,17,0.15) transparent',
        }}>
          {groups
            ? Object.entries(groups).map(([group, svcs]) => (
                <div key={group}>
                  <div style={{
                    padding: '8px 14px 4px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase' as const,
                    color: 'rgba(17,17,17,0.35)',
                    borderTop: '1px solid rgba(17,17,17,0.06)',
                  }}>
                    {group}
                  </div>
                  {svcs.map(svc => (
                    <button
                      key={svc.value}
                      type="button"
                      onMouseEnter={() => setHoveredVal(svc.value)}
                      onMouseLeave={() => setHoveredVal('')}
                      onClick={() => select(svc.value)}
                      style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'left',
                        padding: '9px 14px 9px 22px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        color: value === svc.value ? '#111111' : hoveredVal === svc.value ? '#111111' : 'rgba(17,17,17,0.65)',
                        background: value === svc.value ? 'rgba(17,17,17,0.05)' : hoveredVal === svc.value ? 'rgba(17,17,17,0.04)' : 'transparent',
                        fontWeight: value === svc.value ? 600 : 400,
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background 0.15s ease, color 0.15s ease',
                      }}
                    >
                      {svc.label}
                    </button>
                  ))}
                </div>
              ))
            : options.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  onMouseEnter={() => setHoveredVal(opt.value)}
                  onMouseLeave={() => setHoveredVal('')}
                  onClick={() => select(opt.value)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 14px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    color: value === opt.value ? '#111111' : hoveredVal === opt.value ? '#111111' : 'rgba(17,17,17,0.65)',
                    background: value === opt.value ? 'rgba(17,17,17,0.05)' : hoveredVal === opt.value ? 'rgba(17,17,17,0.04)' : 'transparent',
                    fontWeight: value === opt.value ? 600 : 400,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease, color 0.15s ease',
                  }}
                >
                  {opt.label}
                </button>
              ))
          }
        </div>
      )}
    </div>
  )
}

// ─── Main Form ───────────────────────────────────────────────────────────────

export default function UnifiedForm({
  heading = "Let's Build Your Digital Success",
  subheading = "Share your vision and we'll get back to you within 24 hours.",
  bgColor = '#F8F8F8',
  showLeftInfo = true,
}: UnifiedFormProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const recaptchaRef = useRef<HTMLDivElement>(null)

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<FieldError>({})
  const [focusedField, setFocusedField] = useState<string>('')

  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: '',
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onRecaptchaLoad = () => {}
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const validate = useCallback((): boolean => {
    const e: FieldError = {}
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Please enter your full name'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address'
    if (!form.phone.trim() || !/^[+\d\s\-()]{7,15}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number'
    if (!form.service) e.service = 'Please select a service'
    if (!form.budget) e.budget = 'Please select a budget range'
    if (SITEKEY && window.grecaptcha && !window.grecaptcha.getResponse()) {
      e.recaptcha = 'Please complete the reCAPTCHA'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }, [form])

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)

    const data: Record<string, string> = { ...form, timestamp: new Date().toISOString() }

    const zohoUrl = process.env.NEXT_PUBLIC_ZOHO_FORM_URL
    if (zohoUrl) {
      const fd = new FormData()
      Object.entries(data).forEach(([k, v]) => fd.append(k, v))
      try { await fetch(zohoUrl, { method: 'POST', body: fd, mode: 'no-cors' }) } catch { }
    }

    const leads = JSON.parse(localStorage.getItem('addmads_leads') ?? '[]')
    leads.push(data)
    localStorage.setItem('addmads_leads', JSON.stringify(leads))

    setLoading(false)
    setSubmitted(true)
  }

  const set = (field: string) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [field]: ev.target.value }))
    if (errors[field]) setErrors(e => { const n = { ...e }; delete n[field]; return n })
  }

  const setField = (field: string) => (val: string) => {
    setForm(f => ({ ...f, [field]: val }))
    if (errors[field]) setErrors(e => { const n = { ...e }; delete n[field]; return n })
  }

  const groups = LEAD_FORM_SERVICES.reduce<Record<string, typeof LEAD_FORM_SERVICES>>((acc, svc) => {
    ;(acc[svc.group] ??= []).push(svc)
    return acc
  }, {})

  const inputProps = (name: string) => ({
    onMouseEnter: (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => hoverField(e.currentTarget as HTMLElement),
    onMouseLeave: (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => unhoverField(e.currentTarget as HTMLElement, focusedField === name),
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => { focusField(e.currentTarget as HTMLElement); setFocusedField(name) },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => { blurField(e.currentTarget as HTMLElement); setFocusedField('') },
    style: { ...fieldBase, borderColor: errors[name] ? '#CC0000' : '#D1D1D1' },
  })

  return (
    <>
      {SITEKEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit`}
          strategy="lazyOnload"
        />
      )}

      <section
        ref={sectionRef}
        style={{ background: bgColor, padding: 'clamp(80px,10vw,140px) var(--container-px)' }}
      >
        <div
          ref={formRef}
          style={{
            opacity: 0,
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: showLeftInfo ? 'minmax(0,2fr) minmax(0,3fr)' : '1fr',
            gap: 'clamp(48px,6vw,96px)',
            alignItems: 'start',
          }}
        >
          {/* Left info column */}
          {showLeftInfo && (
            <div style={{ paddingTop: 8 }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#E60000',
                marginBottom: 20,
              }}>
                Get In Touch
              </p>
              <h2 style={{
                fontFamily: 'var(--font-tight)',
                fontSize: 'clamp(2rem,4.5vw,3.5rem)',
                fontWeight: 700,
                color: '#111111',
                lineHeight: 1.1,
                marginBottom: 20,
              }}>
                {heading}
              </h2>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                color: 'rgba(17,17,17,0.55)',
                lineHeight: 1.75,
                marginBottom: 40,
              }}>
                {subheading}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)', marginBottom: 4 }}>Email</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: '#111111', textDecoration: 'none' }}>{CONTACT_EMAIL}</a>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)', marginBottom: 4 }}>Phone</p>
                  <a href={`tel:${CONTACT_PHONE.replace(/-/g,'')}`} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: '#111111', textDecoration: 'none' }}>{CONTACT_PHONE}</a>
                </div>
              </div>
            </div>
          )}

          {/* Form card */}
          <div style={{ background: '#FFFFFF', borderRadius: 16, padding: 'clamp(32px,4vw,48px)', border: '1px solid rgba(17,17,17,0.07)' }}>
            {submitted ? (
              <div style={{ padding: '48px 0', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#111111', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <span style={{ color: '#FFFFFF', fontSize: '1.5rem' }}>✓</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.75rem', fontWeight: 700, color: '#111111', marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(17,17,17,0.5)', lineHeight: 1.7 }}>
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 20px', marginBottom: 16 }}>
                  <div>
                    <label style={labelBase}>Full Name *</label>
                    <input
                      name="name" type="text" required
                      value={form.name} onChange={set('name')}
                      placeholder="Enter your name"
                      {...inputProps('name')}
                    />
                    {errors.name && <span style={errorStyle}>{errors.name}</span>}
                  </div>
                  <div>
                    <label style={labelBase}>Email Address *</label>
                    <input
                      name="email" type="email" required
                      value={form.email} onChange={set('email')}
                      placeholder="Your email address"
                      {...inputProps('email')}
                    />
                    {errors.email && <span style={errorStyle}>{errors.email}</span>}
                  </div>
                </div>

                {/* Phone + Service */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 20px', marginBottom: 16 }}>
                  <div>
                    <label style={labelBase}>Phone Number *</label>
                    <input
                      name="phone" type="tel" required
                      value={form.phone} onChange={set('phone')}
                      placeholder="Enter your phone number"
                      {...inputProps('phone')}
                    />
                    {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
                  </div>
                  <div>
                    <label style={labelBase}>Service Required *</label>
                    <CustomSelect
                      value={form.service}
                      onChange={setField('service')}
                      options={[]}
                      groups={groups}
                      placeholder="Select your service"
                      hasError={!!errors.service}
                    />
                    {errors.service && <span style={errorStyle}>{errors.service}</span>}
                  </div>
                </div>

                {/* Budget — full width */}
                <div style={{ marginBottom: 16 }}>
                  <label style={labelBase}>Budget Range *</label>
                  <CustomSelect
                    value={form.budget}
                    onChange={setField('budget')}
                    options={BUDGET_RANGES}
                    placeholder="Select your budget"
                    hasError={!!errors.budget}
                  />
                  {errors.budget && <span style={errorStyle}>{errors.budget}</span>}
                </div>

                {/* Message — full width */}
                <div style={{ marginBottom: 24 }}>
                  <label style={labelBase}>Tell Us About Your Project</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message} onChange={set('message')}
                    placeholder="Share your goals, timelines, and any specific requirements..."
                    style={{
                      ...fieldBase,
                      resize: 'vertical' as const,
                      minHeight: 130,
                    }}
                    onMouseEnter={e => hoverField(e.currentTarget)}
                    onMouseLeave={e => unhoverField(e.currentTarget, focusedField === 'message')}
                    onFocus={e => { focusField(e.currentTarget); setFocusedField('message') }}
                    onBlur={e => { blurField(e.currentTarget); setFocusedField('') }}
                  />
                </div>

                {/* reCAPTCHA */}
                {SITEKEY ? (
                  <div style={{ marginBottom: 24 }}>
                    <div
                      ref={recaptchaRef}
                      className="g-recaptcha"
                      data-sitekey={SITEKEY}
                      data-callback="onRecaptchaVerified"
                    />
                    {errors.recaptcha && <span style={errorStyle}>{errors.recaptcha}</span>}
                  </div>
                ) : (
                  <div style={{
                    marginBottom: 24,
                    padding: '14px 16px',
                    border: '1px solid #D1D1D1',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    background: '#FAFAFA',
                  }}>
                    <input
                      type="checkbox"
                      id="not-robot"
                      required
                      style={{ width: 20, height: 20, cursor: 'pointer', accentColor: '#111111' }}
                    />
                    <label htmlFor="not-robot" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: '#333333', cursor: 'pointer', margin: 0 }}>
                      I&apos;m not a robot
                    </label>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-red"
                  style={{
                    padding: '15px 36px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer',
                  }}
                >
                  {loading ? 'Sending...' : 'Send Your Details →'}
                </button>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  color: 'rgba(17,17,17,0.35)',
                  marginTop: 14,
                }}>
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
