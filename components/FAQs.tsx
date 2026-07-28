'use client'

import { useState } from 'react'
import Reveal from './Reveal'
import { FAQS } from '@/constants'

interface FAQItem {
  id?: number
  question: string
  answer: string
}

interface FAQsProps {
  faqs?: FAQItem[]
}

export default function FAQs({ faqs: customFaqs }: FAQsProps = {}) {
  const items = customFaqs ?? FAQS
  const [expanded, setExpanded] = useState<number | null>(null)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <section id="faqs" className="section-pad" style={{ background: '#F5F5F5' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container-x">
        <div className="grid gap-[clamp(24px,4vw,64px)] lg:grid-cols-[1fr_2fr] items-start">

          <div className="lg:sticky lg:self-start" style={{ top: 'calc(var(--nav-h) + 24px)' }}>
            <Reveal>
              <p className="eyebrow mb-5">FAQs</p>
              <h2
                className="h-display text-[#111]"
                style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.4rem)' }}
              >
                Questions,<br />answered.
              </h2>
              <p className="mt-4 text-[#555] max-w-[34ch]" style={{ lineHeight: 1.7 }}>
                Everything about our services, pricing, timelines, and how we get your brand into
                Google and AI search results.
              </p>
            </Reveal>
          </div>

          <div>
            {items.map((faq, i) => {
              const key = faq.id ?? i
              const open = expanded === key
              return (
                <Reveal key={key} delay={Math.min(i * 40, 240)}>
                  <div className="border-b border-black/[0.09]">
                    <button
                      onClick={() => setExpanded(open ? null : key)}
                      aria-expanded={open}
                      className="w-full flex items-start justify-between gap-4 py-5 text-left"
                    >
                      <span
                        className="font-medium"
                        style={{
                          fontFamily: 'var(--font-tight)',
                          fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                        }}
                      >
                        {faq.question}
                      </span>
                      <span
                        className="mt-1 w-7 h-7 shrink-0 flex items-center justify-center rounded-full border border-black/15 text-[0.9rem] transition-transform duration-300"
                        style={{ transform: open ? 'rotate(45deg)' : 'none' }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-400"
                      style={{
                        gridTemplateRows: open ? '1fr' : '0fr',
                        transitionTimingFunction: 'var(--ease-expo)',
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pr-8 text-[0.94rem] text-[#555]">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
