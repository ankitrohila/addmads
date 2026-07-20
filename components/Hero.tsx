'use client'

import Link from 'next/link'
import { MARQUEE_ITEMS } from '@/constants'

function Asterisk({ size = 'clamp(52px, 6vw, 88px)' }: { size?: string }) {
  return (
    <div className="animate-spin-slow relative shrink-0" style={{ width: size, height: size }} aria-hidden="true">
      {[0, 90, 45, -45].map(angle => (
        <div
          key={angle}
          className="absolute top-1/2 left-1/2 bg-[#111] rounded-[3px]"
          style={{
            width: '88%',
            height: '17%',
            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="bg-white">
      <div
        className="relative flex flex-col justify-center overflow-hidden"
        style={{ minHeight: '100svh', paddingTop: 'var(--nav-h)' }}
      >
        <div className="container-x">
          {/* Headline */}
          <h1
            className="h-display animate-fade-up"
            style={{ fontSize: 'clamp(3.2rem, 11vw, 11rem)', lineHeight: 1.04 }}
          >
            <span className="block text-[#111]">Results</span>
            <span className="flex items-center gap-[clamp(16px,3vw,40px)] flex-wrap">
              <span className="text-[#D1D1D1]">that</span>
              <Asterisk />
              <span className="text-[#111]">scale</span>
            </span>
          </h1>

          {/* Sub row: description + CTAs */}
          <div
            className="mt-[clamp(28px,4vw,56px)] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 animate-fade-up"
            style={{ animationDelay: '0.25s' }}
          >
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-red" style={{ padding: 'clamp(14px,1.5vw,20px) clamp(26px,3vw,40px)' }}>
                Work with us
              </Link>
              <Link href="/services" className="btn-outline" style={{ padding: 'clamp(14px,1.5vw,20px) clamp(26px,3vw,40px)' }}>
                Explore services
              </Link>
            </div>
            <p className="max-w-[320px] text-[#333] font-medium sm:text-right" style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.25rem)', lineHeight: 1.6 }}>
              Performance marketing &amp; digital growth. We turn ad spend into measurable results.
            </p>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-[clamp(40px,6vw,80px)] border-t border-b border-black/[0.07] py-[clamp(14px,1.6vw,22px)] overflow-hidden select-none" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map(copy => (
              <div key={copy} className="flex shrink-0">
                {MARQUEE_ITEMS.map(item => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center gap-[clamp(20px,2.5vw,40px)] pr-[clamp(20px,2.5vw,40px)] whitespace-nowrap text-black/50 font-medium"
                    style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1rem, 1.6vw, 1.5rem)' }}
                  >
                    {item}
                    <span className="text-[#C82A2A]">✳</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
