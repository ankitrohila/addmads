'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LEAD_FORM_SERVICES, BUDGET_RANGES, CONTACT_PHONE, CONTACT_EMAIL } from '@/constants'

gsap.registerPlugin(ScrollTrigger)

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  budget: string
  requirements: string
  message: string
}

// Group services by their group key
function groupedServices() {
  const groups: Record<string, typeof LEAD_FORM_SERVICES> = {}
  for (const s of LEAD_FORM_SERVICES) {
    if (!groups[s.group]) groups[s.group] = []
    groups[s.group].push(s)
  }
  return groups
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  fontFamily: 'var(--font-sans)',
  fontSize: '1rem',
  border: '1px solid rgba(17,17,17,0.12)',
  borderRadius: 6,
  background: '#FFFFFF',
  color: '#111111',
  transition: 'border-color 0.25s ease',
  boxSizing: 'border-box',
  outline: 'none',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.8125rem',
  fontWeight: 500,
  color: 'rgba(17,17,17,0.5)',
  textTransform: 'uppercase',
  letterSpacing: '0.02em',
  marginBottom: 8,
}

export default function LeadForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef    = useRef<HTMLDivElement>(null)
  const formRef    = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', service: '', budget: '', requirements: '', message: '',
  })
  const [loading, setLoading]     = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]         = useState('')

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
      gsap.fromTo(headRef.current, { opacity: 0, y: 48 }, { opacity: 1, y: 0, duration: 1.1, ease: 'power4.out', scrollTrigger: trigger })
      gsap.fromTo(formRef.current, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out', delay: 0.2, scrollTrigger: trigger })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const submitToZoho = async (data: FormData) => {
    try {
      // Zoho CRM Lead submission via Zoho Forms embed / Web-to-Lead
      // Replace ZOHO_FORM_URL with your Zoho form action URL after setup
      const ZOHO_FORM_URL = process.env.NEXT_PUBLIC_ZOHO_FORM_URL || ''

      if (ZOHO_FORM_URL) {
        const payload = new URLSearchParams({
          'Last Name':  data.name,
          'Email':      data.email,
          'Phone':      data.phone,
          'Lead Source': 'Website',
          'Description': `Service: ${data.service}\nBudget: ${data.budget}\nRequirements: ${data.requirements}\nMessage: ${data.message}`,
        })
        await fetch(ZOHO_FORM_URL, { method: 'POST', body: payload, mode: 'no-cors' })
      }

      // Also save locally as backup
      const existing = JSON.parse(localStorage.getItem('addmads_leads') || '[]')
      existing.push({ ...data, submittedAt: new Date().toISOString() })
      localStorage.setItem('addmads_leads', JSON.stringify(existing))

      return true
    } catch (err) {
      console.error('Zoho submission error:', err)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.budget) {
      setError('Please fill in all required fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      setError('Please enter a valid phone number.')
      return
    }

    setLoading(true)
    const ok = await submitToZoho(formData)
    setLoading(false)

    if (ok) {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', service: '', budget: '', requirements: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    } else {
      setError('Submission failed. Please try again or call us directly.')
    }
  }

  const groups = groupedServices()

  return (
    <section ref={sectionRef} id="lead-form" style={{ background: '#F8F8F8' }}>
      <div style={{ padding: 'clamp(80px,10vw,160px) var(--container-px)' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(48px,6vw,80px)', alignItems: 'start' }}>

          {/* Left — headline */}
          <div ref={headRef} style={{ opacity: 0 }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E60000', marginBottom: 16 }}>
              Get In Touch
            </p>
            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, lineHeight: 1.15, color: '#111111', marginBottom: 24 }}>
              Let&apos;s Build Your<br />Digital Success
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(17,17,17,0.55)', lineHeight: 1.7, marginBottom: 32 }}>
              Share your vision with us and let&apos;s create something extraordinary together. We&apos;ll get back to you within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={`tel:${CONTACT_PHONE.replace(/-/g,'')}`} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-sans)', fontSize: '1rem', color: '#111111', textDecoration: 'none', fontWeight: 500 }}>
                <span style={{ width: 36, height: 36, background: '#E60000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', flexShrink: 0, color: '#FFFFFF', fontWeight: 600 }}>Ph</span>
                {CONTACT_PHONE}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-sans)', fontSize: '1rem', color: '#111111', textDecoration: 'none', fontWeight: 500 }}>
                <span style={{ width: 36, height: 36, background: '#111111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', flexShrink: 0, color: '#FFFFFF', fontWeight: 600 }}>Em</span>
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div ref={formRef} style={{ opacity: 0 }}>
            {submitted && (
              <div style={{ background: '#E60000', color: '#FFFFFF', padding: '16px 24px', borderRadius: 8, marginBottom: 24, fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', fontWeight: 500 }}>
                ✓ Thank you! We&apos;ll be in touch within 24 hours.
              </div>
            )}
            {error && (
              <div style={{ background: '#FFE5E5', color: '#C82A2A', padding: '16px 24px', borderRadius: 8, marginBottom: 24, fontFamily: 'var(--font-sans)', fontSize: '0.9375rem' }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="lead-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 20px', marginBottom: 20 }}>
                {/* Name */}
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={labelStyle}>Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = '#E60000')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(17,17,17,0.12)')} />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = '#E60000')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(17,17,17,0.12)')} />
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 92208 72212" required style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = '#E60000')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(17,17,17,0.12)')} />
                </div>

                {/* Service */}
                <div>
                  <label style={labelStyle}>Service Required *</label>
                  <select name="service" value={formData.service} onChange={handleChange} required style={{ ...inputStyle, color: formData.service ? '#111111' : 'rgba(17,17,17,0.4)', cursor: 'pointer' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#E60000')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(17,17,17,0.12)')}>
                    <option value="">Select a service...</option>
                    {Object.entries(groups).map(([group, items]) => (
                      <optgroup key={group} label={group}>
                        {items.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                      </optgroup>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label style={labelStyle}>Budget Range *</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} required style={{ ...inputStyle, color: formData.budget ? '#111111' : 'rgba(17,17,17,0.4)', cursor: 'pointer' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#E60000')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(17,17,17,0.12)')}>
                    <option value="">Select budget...</option>
                    {BUDGET_RANGES.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                  </select>
                </div>

                {/* Requirements */}
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={labelStyle}>Specific Requirements</label>
                  <input type="text" name="requirements" value={formData.requirements} onChange={handleChange} placeholder="e.g. 500 leads/month, Shopify store, Logo redesign…" style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = '#E60000')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(17,17,17,0.12)')} />
                </div>

                {/* Message */}
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={labelStyle}>Tell Us About Your Project</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Share your goals, timelines, and any other details…" rows={5} style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#E60000')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(17,17,17,0.12)')} />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '16px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  background: '#E60000',
                  border: 'none',
                  borderRadius: 6,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  letterSpacing: '0.01em',
                  transition: 'background 0.25s ease, transform 0.2s ease',
                }}
                onMouseEnter={e => { if (!loading) { (e.currentTarget as HTMLButtonElement).style.background = '#C20000'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)' } }}
                onMouseLeave={e => { if (!loading) { (e.currentTarget as HTMLButtonElement).style.background = '#E60000'; (e.currentTarget as HTMLButtonElement).style.transform = 'none' } }}
              >
                {loading ? 'Sending…' : 'Send Your Details →'}
              </button>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(17,17,17,0.38)', marginTop: 12, textAlign: 'center' }}>
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
