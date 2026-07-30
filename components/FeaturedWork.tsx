'use client'

import Image from 'next/image'
import Link from 'next/link'
import Reveal from './Reveal'

const PROJECTS = [
  { id: 1, title: 'Performance Marketing', category: 'Google & Meta Ads · ROI-First Campaigns', href: '/services/performance-marketing', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&h=900&fit=crop&q=80' },
  { id: 2, title: 'Brand & Identity', category: 'Strategy · Logo · Visual System', href: '/services/branding', image: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=700&h=900&fit=crop&q=80' },
  { id: 3, title: 'IT & Web Development', category: 'Next.js · Shopify · WordPress · Apps', href: '/services/it-services', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&h=900&fit=crop&q=80' },
]

export default function FeaturedWork() {
  return (
    <section id="work" className="section-pad" style={{ background: '#111', color: '#fff' }}>
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-5">Featured work</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h-display" style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}>
            Discover<span className="text-[#C82A2A]">.</span>
          </h2>
        </Reveal>

        <div className="mt-[clamp(32px,4vw,56px)] grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <Link href={p.href} className="group block">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 92vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-5" style={{ fontSize: 'clamp(1.2rem, 1.7vw, 1.5rem)' }}>{p.title}</h3>
                <p className="mt-1 text-white/50 text-[0.875rem]">{p.category}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex justify-center">
            <Link href="/portfolio" className="btn-white">View full portfolio</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
