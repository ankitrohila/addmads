'use client'

import Link from 'next/link'
import Reveal from './Reveal'
import { SERVICES } from '@/constants'

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ background: '#F0F0F0' }}>
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-5">What we offer</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h-display text-[#111]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            Services built for growth.
          </h2>
        </Reveal>

        <div className="mt-[clamp(32px,4vw,56px)] grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.number} delay={(i % 3) * 90}>
              <Link
                href={`/services/${svc.slug}`}
                className="group flex h-full flex-col bg-white border border-black/[0.07] rounded-2xl p-[clamp(22px,2.5vw,32px)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.09)]"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[0.8rem] font-semibold text-[#C82A2A]">{svc.number}</span>
                  <span className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 text-[0.9rem] transition-all duration-300 group-hover:bg-[#C82A2A] group-hover:border-[#C82A2A] group-hover:text-white">
                    →
                  </span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.25rem, 1.7vw, 1.55rem)' }}>{svc.title}</h3>
                <p className="mt-3 text-[#555] text-[0.92rem] flex-1">{svc.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {svc.tags.slice(0, 4).map(tag => (
                    <span key={tag} className="px-3 py-1 text-[0.75rem] text-black/55 bg-black/[0.045] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
