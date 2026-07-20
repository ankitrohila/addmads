'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/constants'

interface Msg {
  from: 'bot' | 'user'
  text: string
  quickReplies?: string[]
}

interface KBEntry {
  keywords: string[]
  answer: string
  quickReplies?: string[]
}

/** Keyword-matched knowledge base covering the whole site — runs fully client-side. */
const KB: KBEntry[] = [
  {
    keywords: ['service', 'offer', 'what do you do', 'help with', 'work'],
    answer: 'We offer six core services:\n\n1. Performance Marketing — Google Ads, Meta Ads, PPC, retargeting\n2. SEO — technical, on-page, local, e-commerce, plus AEO & GEO for AI search\n3. Branding — strategy, logo, visual identity, guidelines\n4. Graphics & Design — UI/UX, motion, social creatives, print\n5. IT & Web Development — WordPress, Shopify, React/Next.js, Laravel, web apps\n6. Social Media Management — content, community, growth\n\nWhich one would you like to know more about?',
    quickReplies: ['Pricing', 'Google Ads', 'SEO', 'Web development'],
  },
  {
    keywords: ['price', 'pricing', 'cost', 'charge', 'fee', 'budget', 'how much'],
    answer: 'Our transparent starting prices:\n\n• Performance Marketing — from ₹25,000/month management (min. ad spend ₹50,000/month)\n• SEO retainers — from ₹15,000/month\n• Branding projects — from ₹30,000\n• Websites — ₹15,000 (landing pages) to ₹3,00,000+ (custom web apps)\n\nNo hidden fees. Want a custom proposal? Share your details in our contact form and we reply within 24 hours.',
    quickReplies: ['Contact us', 'What results can I expect?'],
  },
  {
    keywords: ['google ads', 'ppc', 'meta', 'facebook', 'instagram ads', 'roas', 'ads', 'campaign', 'performance marketing'],
    answer: 'Our performance marketing team runs Google Ads, Meta/Facebook Ads, PPC, and retargeting campaigns. Clients typically reach 3×–6× ROAS within 60–90 days.\n\nEvery campaign includes audience segmentation, creative A/B testing, bid optimisation, and a live dashboard so you see exactly where every rupee goes. Management starts at ₹25,000/month.',
    quickReplies: ['Pricing', 'Contact us'],
  },
  {
    keywords: ['seo', 'rank', 'google search', 'organic', 'traffic', 'aeo', 'geo', 'chatgpt', 'gemini', 'ai search', 'answer engine'],
    answer: 'We do three layers of search optimisation:\n\n• SEO — technical fixes, on-page, link building, local & e-commerce SEO\n• AEO (Answer Engine Optimisation) — winning Google AI Overviews and featured snippets\n• GEO (Generative Engine Optimisation) — getting your brand cited in ChatGPT, Gemini, and Perplexity answers\n\nTechnical gains show in 4–6 weeks; competitive rankings typically take 6–12 months. Retainers start at ₹15,000/month with monthly reports.',
    quickReplies: ['How long for results?', 'Pricing'],
  },
  {
    keywords: ['website', 'web development', 'wordpress', 'shopify', 'next', 'react', 'laravel', 'app', 'e-commerce', 'ecommerce', 'landing page'],
    answer: 'We build on WordPress (incl. WooCommerce), Shopify, Webflow, Wix, React/Next.js, PHP/Laravel, and Node.js — matched to your goal.\n\nAll sites are mobile-first, Core Web Vitals-optimised, and schema-ready for search. Landing pages start at ₹15,000; custom web apps range up to ₹3,00,000+.',
    quickReplies: ['Pricing', 'Contact us'],
  },
  {
    keywords: ['brand', 'logo', 'identity', 'packaging', 'design', 'ui', 'ux', 'graphic'],
    answer: 'Our branding and design team covers brand strategy, logo design, visual identity systems, brand guidelines, packaging, UI/UX design, motion graphics, and social media creatives.\n\nBranding projects start at ₹30,000. Want to see examples? Check our portfolio page.',
    quickReplies: ['Pricing', 'Contact us'],
  },
  {
    keywords: ['result', 'how long', 'timeline', 'when', 'expect', 'guarantee'],
    answer: 'Typical timelines:\n\n• Ads (Google/Meta) — meaningful ROAS gains in 60–90 days\n• SEO — technical wins in 4–6 weeks, rankings in 3–5 months, top-3 competitive terms in 6–12 months\n• Websites — landing pages in 1–2 weeks, full sites 4–8 weeks\n• Branding — 2–6 weeks depending on scope\n\nEvery client gets a live dashboard and monthly reports, so you track every gain.',
    quickReplies: ['Pricing', 'Contact us'],
  },
  {
    keywords: ['contact', 'call', 'phone', 'email', 'reach', 'talk', 'meeting', 'consult'],
    answer: `You can reach us at:\n\n• Phone: ${CONTACT_PHONE}\n• Email: ${CONTACT_EMAIL}\n• Or fill the enquiry form on our contact page — we reply within 24 hours.\n\nWe're based in Sonipat, Haryana, India and work with clients across the globe.`,
    quickReplies: ['Our services', 'Pricing'],
  },
  {
    keywords: ['who', 'about', 'addmads', 'company', 'agency', 'team', 'where'],
    answer: 'AddMads is a full-service performance marketing and digital growth agency based in Sonipat, Haryana, India. We\'ve delivered 250+ projects for 60+ global clients across e-commerce, real estate, healthcare, finance, FMCG, EdTech, and SaaS — with a 98% client satisfaction rate.\n\nWhat makes us different: full-funnel ownership under one roof, AI-era search readiness (GEO/AEO), and fully transparent reporting.',
    quickReplies: ['Our services', 'Contact us'],
  },
  {
    keywords: ['refund', 'cancel', 'policy', 'terms', 'privacy'],
    answer: 'All our policies are published on the website:\n\n• Privacy Policy — /privacy-policy\n• Terms of Service — /terms-of-service\n• Refund Policy — /refund-policy\n• Cancellation Policy — /cancellation-policy\n\nIn short: you can cancel monthly retainers with notice, and refunds are handled per the published policy.',
    quickReplies: ['Contact us'],
  },
  {
    keywords: ['social media', 'instagram', 'content', 'community', 'influencer'],
    answer: 'Our social media management covers content creation, posting schedules, community engagement, influencer marketing, and analytics — focused on building authentic communities around your brand across Instagram, LinkedIn, YouTube, X, and Facebook.',
    quickReplies: ['Pricing', 'Contact us'],
  },
]

const GREETING: Msg = {
  from: 'bot',
  text: 'Hi! 👋 I\'m the AddMads assistant. Ask me anything about our services, pricing, timelines, or how we get brands into Google and AI search results.',
  quickReplies: ['Our services', 'Pricing', 'SEO & AI search', 'Contact us'],
}

const FALLBACK: Msg = {
  from: 'bot',
  text: `I'm not sure about that one — but our team will be! Reach us at ${CONTACT_PHONE} or ${CONTACT_EMAIL}, or ask me about services, pricing, SEO, ads, branding, or web development.`,
  quickReplies: ['Our services', 'Pricing', 'Contact us'],
}

function findAnswer(input: string): Msg {
  const q = input.toLowerCase()
  let best: KBEntry | null = null
  let bestScore = 0
  for (const entry of KB) {
    const score = entry.keywords.reduce((n, kw) => (q.includes(kw) ? n + kw.length : n), 0)
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }
  if (!best) return FALLBACK
  return { from: 'bot', text: best.answer, quickReplies: best.quickReplies }
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([GREETING])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing, open])

  const send = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || typing) return
    setMessages(m => [...m, { from: 'user', text: trimmed }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setMessages(m => [...m, findAnswer(trimmed)])
      setTyping(false)
    }, 650)
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Chat with AddMads'}
        className="fixed bottom-5 right-5 z-[80] w-14 h-14 rounded-full bg-[#111] text-white shadow-[0_12px_32px_rgba(0,0,0,0.3)] flex items-center justify-center transition-transform hover:scale-105"
      >
        {open ? (
          <span className="text-[1.2rem]">✕</span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>

      {/* Panel */}
      <div
        className={`fixed z-[80] bottom-[88px] right-4 left-4 sm:left-auto sm:w-[380px] max-h-[min(600px,calc(100svh-120px))] flex flex-col bg-white rounded-2xl border border-black/10 shadow-[0_24px_80px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        role="dialog"
        aria-label="AddMads chat assistant"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-[#111] text-white shrink-0">
          <span className="relative w-9 h-9 rounded-full bg-[#C82A2A] flex items-center justify-center font-semibold text-[0.85rem]" style={{ fontFamily: 'var(--font-tight)' }}>
            A
            <span className="absolute -bottom-[1px] -right-[1px] w-3 h-3 rounded-full bg-[#3DD671] border-2 border-[#111]" />
          </span>
          <div>
            <p className="font-semibold text-[0.95rem] leading-tight">AddMads Assistant</p>
            <p className="text-white/50 text-[0.75rem]">Typically replies instantly</p>
          </div>
        </div>

        {/* Messages */}
        <div ref={bodyRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#FAFAFA]">
          {messages.map((m, i) => (
            <div key={i}>
              <div
                className={`max-w-[85%] whitespace-pre-line text-[0.88rem] leading-relaxed rounded-2xl px-4 py-3 ${
                  m.from === 'bot'
                    ? 'bg-white border border-black/[0.07] text-[#222] rounded-bl-md'
                    : 'bg-[#C82A2A] text-white ml-auto rounded-br-md'
                }`}
              >
                {m.text}
              </div>
              {m.from === 'bot' && m.quickReplies && i === messages.length - 1 && !typing && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {m.quickReplies.map(qr => (
                    <button
                      key={qr}
                      onClick={() => send(qr)}
                      className="px-3 py-[6px] text-[0.8rem] bg-white border border-black/[0.12] rounded-full hover:border-[#C82A2A] hover:text-[#C82A2A] transition-colors"
                    >
                      {qr}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {typing && (
            <div className="flex gap-1 items-center bg-white border border-black/[0.07] rounded-2xl rounded-bl-md px-4 py-3 w-fit">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="w-[6px] h-[6px] rounded-full bg-black/30 animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer CTA + input */}
        <div className="shrink-0 border-t border-black/[0.07] bg-white">
          <form
            onSubmit={e => { e.preventDefault(); send(input) }}
            className="flex items-center gap-2 px-3 py-3"
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about services, pricing…"
              aria-label="Chat message"
              className="flex-1 px-4 py-[10px] text-[0.9rem] bg-[#F3F3F3] rounded-full outline-none focus:ring-2 focus:ring-[#C82A2A]/30"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="w-10 h-10 shrink-0 rounded-full bg-[#C82A2A] text-white flex items-center justify-center hover:bg-[#A82222] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" />
              </svg>
            </button>
          </form>
          <p className="pb-2 text-center text-[0.7rem] text-black/35">
            Prefer a human? <Link href="/contact" className="underline hover:text-[#C82A2A]">Contact us</Link>
          </p>
        </div>
      </div>
    </>
  )
}
