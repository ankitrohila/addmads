'use client'

import Reveal from './Reveal'
import LeadForm from './LeadForm'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/constants'

interface UnifiedFormProps {
  heading?: string
  subheading?: string
  bgColor?: string
  showLeftInfo?: boolean
}

export default function UnifiedForm({
  heading = "Let's Build Your Digital Success",
  subheading = "Share your vision and we'll create something extraordinary. Fill in the details and we'll get back to you within 24 hours.",
  bgColor = '#F5F5F5',
  showLeftInfo = true,
}: UnifiedFormProps) {
  return (
    <section id="enquiry" className="section-pad" style={{ background: bgColor }}>
      <div className="container-x">
        <div className={`grid gap-[clamp(32px,5vw,80px)] items-start ${showLeftInfo ? 'lg:grid-cols-[2fr_3fr]' : ''}`}>
          {showLeftInfo && (
            <Reveal>
              <p className="eyebrow mb-5">Start a project</p>
              <h2 className="h-display text-[#111]" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.4rem)' }}>
                {heading}
              </h2>
              <p className="mt-4 text-[#555] max-w-[46ch]">{subheading}</p>

              <div className="mt-8 space-y-3 text-[0.95rem]">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-[#333] hover:text-[#C82A2A] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  {CONTACT_EMAIL}
                </a>
                <a href={`tel:${CONTACT_PHONE.replace(/-/g, '')}`} className="flex items-center gap-3 text-[#333] hover:text-[#C82A2A] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {CONTACT_PHONE}
                </a>
              </div>
            </Reveal>
          )}

          <Reveal delay={120}>
            <div className="bg-white border border-black/[0.07] rounded-2xl p-[clamp(20px,3vw,40px)] shadow-[0_16px_48px_rgba(0,0,0,0.06)]">
              {!showLeftInfo && (
                <div className="mb-6">
                  <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>{heading}</h2>
                  <p className="mt-2 text-[#666] text-[0.95rem]">{subheading}</p>
                </div>
              )}
              <LeadForm sourceLabel="Website Form" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
