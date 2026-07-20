'use client'

import Image from 'next/image'
import Link from 'next/link'
import Reveal from './Reveal'

const IMGS = [
  { src: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7a6fcc22a8eb9beed44bb_1.webp', alt: 'Creative 3D artwork' },
  { src: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7a6fd493c862c8d570e8d_2.webp', alt: 'Mobile app design' },
  { src: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7a83c438727240e53a84b_5.jpg', alt: 'Product headset render' },
]

export default function About() {
  return (
    <section id="about" className="bg-white section-pad">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-6">Who we are</p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            className="h-display text-[#111] max-w-[18ch]"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
          >
            A performance-first agency built for the AI-search era.
          </h2>
        </Reveal>

        <div className="mt-[clamp(28px,4vw,48px)] grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          <Reveal delay={140}>
            <p className="text-[#444] max-w-[56ch]" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.2rem)' }}>
              We combine media buying, SEO, branding, and engineering under one roof — so strategy,
              creative, and execution never lose momentum in handoffs. Every campaign is measured,
              every rupee is tracked, and every result compounds.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/about" className="btn-dark">About AddMads</Link>
              <Link href="/portfolio" className="btn-outline">See our work</Link>
            </div>
          </Reveal>

          <div className="flex gap-[clamp(10px,1.5vw,20px)]">
            {IMGS.map((img, i) => (
              <Reveal key={img.src} delay={i * 100} className="flex-1">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 30vw, 200px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
