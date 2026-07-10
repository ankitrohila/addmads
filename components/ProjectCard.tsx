'use client'

import { useRef } from 'react'
import gsap from 'gsap'

interface ProjectCardProps {
  title: string
  category: string
  year: string
  gradient: string
  accent: string
  description: string
  index: string
  size?: 'normal' | 'large'
}

export default function ProjectCard({
  title,
  category,
  year,
  gradient,
  accent,
  description,
  index,
  size = 'normal',
}: ProjectCardProps) {
  const imgRef     = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const arrowRef   = useRef<HTMLDivElement>(null)
  const metaRef    = useRef<HTMLDivElement>(null)

  const onEnter = () => {
    gsap.to(imgRef.current,    { scale: 1.055, duration: 0.85, ease: 'power3.out' })
    gsap.to(overlayRef.current, { opacity: 1,   duration: 0.5,  ease: 'power2.out' })
    gsap.fromTo(arrowRef.current,
      { x: -10, y: 10, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' }
    )
    gsap.to(metaRef.current, { y: -4, duration: 0.4, ease: 'power2.out' })
  }

  const onLeave = () => {
    gsap.to(imgRef.current,    { scale: 1,     duration: 0.8, ease: 'power3.out' })
    gsap.to(overlayRef.current, { opacity: 0,   duration: 0.5, ease: 'power2.out' })
    gsap.to(metaRef.current, { y: 0, duration: 0.4, ease: 'power2.out' })
  }

  return (
    <article
      className="project-card"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      data-cursor
    >
      {/* Artwork */}
      <div
        className="relative overflow-hidden rounded-xl"
        style={{ aspectRatio: size === 'large' ? '16/10' : '3/4' }}
      >
        {/* Background gradient */}
        <div
          ref={imgRef}
          className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
          style={{ willChange: 'transform' }}
        >
          {/* Abstract interior composition */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div
              className="absolute rounded-full"
              style={{
                width: '60%', height: '60%',
                background: `radial-gradient(circle,${accent}18 0%,transparent 68%)`,
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                top: '12%', right: '12%',
                width: 52, height: 52,
                border: `1px solid ${accent}28`,
              }}
            />
            <div
              className="absolute"
              style={{
                bottom: '14%', left: '10%',
                width: 28, height: 28,
                background: `${accent}35`,
                borderRadius: 5,
                transform: 'rotate(24deg)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-tight)',
                fontWeight: 900,
                fontSize: 'clamp(5rem,13vw,13rem)',
                color: `${accent}10`,
                letterSpacing: '-0.07em',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              {index}
            </span>
          </div>
        </div>

        {/* Hover gradient overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 flex flex-col justify-end"
          style={{
            background: 'linear-gradient(to top,rgba(10,10,10,0.88) 0%,rgba(10,10,10,0.2) 50%,transparent 80%)',
            opacity: 0,
            padding: 'clamp(16px,2vw,24px)',
          }}
        >
          <p className="font-sans text-white/65 text-sm leading-relaxed mb-3">{description}</p>
          <div className="flex items-end justify-between">
            <div>
              <p className="font-tight font-bold text-white text-base tracking-tight leading-none">{title}</p>
              <p className="font-sans text-white/45 text-xs mt-1">{category}</p>
            </div>
            <div ref={arrowRef} style={{ opacity: 0 }}>
              <div
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 11L11 2M11 2H4M11 2V9" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Index badge */}
        <div
          className="absolute top-4 left-4 font-sans font-medium text-white/25"
          style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}
        >
          {index}
        </div>
      </div>

      {/* Footer meta */}
      <div ref={metaRef} className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3
            className="font-tight font-bold leading-tight"
            style={{ fontSize: 'clamp(1rem,1.8vw,1.3rem)', letterSpacing: '-0.025em' }}
          >
            {title}
          </h3>
          <p className="font-sans text-fg/38 text-sm mt-0.5">{category}</p>
        </div>
        <span
          className="font-sans text-fg/22 text-xs flex-shrink-0 mt-1"
          style={{ letterSpacing: '0.05em' }}
        >
          {year}
        </span>
      </div>
    </article>
  )
}
