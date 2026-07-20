'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Reveal from './Reveal'

const SHOWCASE = [
  { num: '01', name: 'Performance Marketing', href: '/services/performance-marketing', img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7abb1dc9797d92e7aae3f_img6.webp', desc: 'Data-driven campaigns across Google & Meta that turn ad spend into measurable growth.' },
  { num: '02', name: 'Branding & Identity', href: '/services/branding', img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68aea452324447dec982d6b3_img9.webp', desc: 'From strategy to logo — brand systems that people remember and trust.' },
  { num: '03', name: 'SEO & Content', href: '/services/seo', img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b53ed5e0ae8eda7ac7e424_img17.webp', desc: 'Rank higher, get found — technical SEO and content that compounds month on month.' },
  { num: '04', name: 'IT & Web Dev', href: '/services/it-services', img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b53ed5e0ae8eda7ac7e41b_img16.webp', desc: 'Fast, conversion-optimised websites on WordPress, Shopify, Next.js, and more.' },
]

export default function ServiceShowcase() {
  const [active, setActive] = useState(0)
  const current = SHOWCASE[active]

  return (
    <section className="section-pad" style={{ background: '#C82A2A', color: '#fff' }}>
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>How we work</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h-display max-w-[20ch]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            One team. Full funnel. Zero handoff gaps.
          </h2>
        </Reveal>

        <div className="mt-[clamp(32px,5vw,64px)] grid gap-8 lg:grid-cols-2 items-start">
          {/* Tab list */}
          <div role="tablist" aria-label="Service showcase" className="flex flex-col">
            {SHOWCASE.map((svc, i) => (
              <button
                key={svc.num}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={clsx(
                  'flex items-baseline gap-4 text-left py-4 border-b transition-colors',
                  active === i ? 'border-white/60 text-white' : 'border-white/20 text-white/55 hover:text-white/85'
                )}
              >
                <span className="text-[0.8rem] font-semibold shrink-0">{svc.num}</span>
                <span style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.3rem, 2.6vw, 2.2rem)', fontWeight: 500 }}>
                  {svc.name}
                </span>
              </button>
            ))}
          </div>

          {/* Active card */}
          <div key={current.num} className="animate-pop-in bg-white text-[#111] rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.18)]">
            <div className="relative aspect-[16/9]">
              <Image src={current.img} alt={current.name} fill sizes="(max-width: 1024px) 92vw, 600px" className="object-cover" unoptimized />
            </div>
            <div className="p-[clamp(20px,2.5vw,32px)]">
              <h3 style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)' }}>{current.name}</h3>
              <p className="mt-2 text-[#555] text-[0.95rem]">{current.desc}</p>
              <Link href={current.href} className="btn-dark mt-5" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
                Explore service →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
