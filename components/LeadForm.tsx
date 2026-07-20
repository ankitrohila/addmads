'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { LEAD_FORM_SERVICES } from '@/constants'

declare global {
  interface Window {
    grecaptcha?: {
      render: (el: HTMLElement, opts: { sitekey: string }) => number
      getResponse: (widgetId?: number) => string
      reset: (widgetId?: number) => void
    }
    onRecaptchaLoad?: () => void
  }
}

const SITEKEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''

interface LeadFormProps {
  compact?: boolean
  onSuccess?: () => void
  sourceLabel?: string
}

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const INITIAL: FormState = { name: '', email: '', phone: '', service: '', message: '' }

const GROUPS = LEAD_FORM_SERVICES.reduce<Record<string, typeof LEAD_FORM_SERVICES>>((acc, svc) => {
  ;(acc[svc.group] ??= []).push(svc)
  return acc
}, {})

export default function LeadForm({ compact = false, onSuccess, sourceLabel = 'Website Lead' }: LeadFormProps) {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')
  const captchaRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<number | null>(null)

  const renderCaptcha = useCallback(() => {
    if (!SITEKEY || !captchaRef.current || widgetId.current !== null || !window.grecaptcha?.render) return
    widgetId.current = window.grecaptcha.render(captchaRef.current, { sitekey: SITEKEY })
  }, [])

  useEffect(() => {
    window.onRecaptchaLoad = renderCaptcha
    renderCaptcha()
  }, [renderCaptcha])

  const set = (field: keyof FormState) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm(f => ({ ...f, [field]: ev.target.value }))
      setErrors(e => {
        if (!e[field]) return e
        const next = { ...e }
        delete next[field]
        return next
      })
    }

  const validate = (): boolean => {
    const e: Record<string, string> = {}
    if (form.name.trim().length < 2) e.name = 'Please enter your full name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address'
    if (!/^[+\d\s\-()]{7,15}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number'
    if (!form.service) e.service = 'Please select a service'
    if (SITEKEY && window.grecaptcha && !window.grecaptcha.getResponse(widgetId.current ?? undefined)) {
      e.recaptcha = 'Please complete the reCAPTCHA'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    setServerError('')
    if (!validate()) return
    setLoading(true)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source: sourceLabel,
          recaptchaToken:
            SITEKEY && window.grecaptcha ? window.grecaptcha.getResponse(widgetId.current ?? undefined) : '',
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error ?? 'Something went wrong. Please try again.')
      }
      setSubmitted(true)
      onSuccess?.()
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      if (SITEKEY && window.grecaptcha) window.grecaptcha.reset(widgetId.current ?? undefined)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="animate-pop-in text-center py-12 px-6">
        <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-[#C82A2A] flex items-center justify-center">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 style={{ fontSize: '1.4rem' }}>Thank you!</h3>
        <p className="mt-2 text-[#666] text-[0.95rem] max-w-[36ch] mx-auto">
          Your enquiry has been received. Our team will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <>
      {SITEKEY && (
        <Script
          src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
          strategy="lazyOnload"
        />
      )}
      <form onSubmit={handleSubmit} noValidate className="grid gap-4">
        <div className={compact ? 'grid gap-4' : 'grid gap-4 sm:grid-cols-2'}>
          <div>
            <label className="field-label" htmlFor={`lf-name-${sourceLabel}`}>Full name *</label>
            <input
              id={`lf-name-${sourceLabel}`}
              className={`field-input ${errors.name ? 'has-error' : ''}`}
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={form.name}
              onChange={set('name')}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>
          <div>
            <label className="field-label" htmlFor={`lf-email-${sourceLabel}`}>Email *</label>
            <input
              id={`lf-email-${sourceLabel}`}
              className={`field-input ${errors.email ? 'has-error' : ''}`}
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={set('email')}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>
        </div>

        <div className={compact ? 'grid gap-4' : 'grid gap-4 sm:grid-cols-2'}>
          <div>
            <label className="field-label" htmlFor={`lf-phone-${sourceLabel}`}>Phone *</label>
            <input
              id={`lf-phone-${sourceLabel}`}
              className={`field-input ${errors.phone ? 'has-error' : ''}`}
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={set('phone')}
            />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </div>
          <div>
            <label className="field-label" htmlFor={`lf-service-${sourceLabel}`}>Service *</label>
            <select
              id={`lf-service-${sourceLabel}`}
              className={`field-input ${errors.service ? 'has-error' : ''}`}
              value={form.service}
              onChange={set('service')}
            >
              <option value="">What do you need help with?</option>
              {Object.entries(GROUPS).map(([group, svcs]) => (
                <optgroup key={group} label={group}>
                  {svcs.map(s => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </optgroup>
              ))}
            </select>
            {errors.service && <span className="field-error">{errors.service}</span>}
          </div>
        </div>

        <div>
          <label className="field-label" htmlFor={`lf-message-${sourceLabel}`}>Message</label>
          <textarea
            id={`lf-message-${sourceLabel}`}
            className="field-input"
            rows={compact ? 3 : 4}
            placeholder="Tell us about your project…"
            value={form.message}
            onChange={set('message')}
          />
        </div>

        {SITEKEY && (
          <div>
            <div ref={captchaRef} />
            {errors.recaptcha && <span className="field-error">{errors.recaptcha}</span>}
          </div>
        )}

        {serverError && <p className="field-error" role="alert">{serverError}</p>}

        <button type="submit" className="btn-red w-full sm:w-auto justify-self-start" disabled={loading}>
          {loading ? 'Sending…' : 'Send enquiry'}
        </button>
      </form>
    </>
  )
}
