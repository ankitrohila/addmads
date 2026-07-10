'use client'

import { useRef, useCallback, type ReactNode } from 'react'
import gsap from 'gsap'
import clsx from 'clsx'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'outline' | 'ghost'
}

export default function MagneticButton({
  children,
  className,
  strength = 0.28,
  onClick,
  href,
  variant = 'primary',
}: MagneticButtonProps) {
  const wrapRef  = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLSpanElement>(null)

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width  / 2)) * strength
    const dy = (e.clientY - (rect.top  + rect.height / 2)) * strength
    gsap.to(el,          { x: dx,       y: dy,       duration: 0.55, ease: 'power3.out' })
    gsap.to(innerRef.current, { x: dx * 0.4, y: dy * 0.4, duration: 0.55, ease: 'power3.out' })
  }, [strength])

  const onLeave = useCallback(() => {
    gsap.to(wrapRef.current,   { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1,0.55)' })
    gsap.to(innerRef.current,  { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1,0.55)' })
  }, [])

  const variantClass = clsx({
    'bg-fg text-bg hover:opacity-90':             variant === 'primary',
    'border border-[rgba(17,17,17,0.14)] text-fg hover:border-fg': variant === 'outline',
    'text-fg hover:text-fg/70':                   variant === 'ghost',
  })

  const inner = (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block"
      style={{ willChange: 'transform' }}
    >
      <span
        ref={innerRef}
        onClick={onClick}
        className={clsx(
          'relative inline-flex items-center gap-2.5 rounded-full',
          'font-tight font-semibold text-[0.8125rem] tracking-wide',
          'transition-transform duration-400',
          variantClass,
          className
        )}
        style={{ padding: '13px 28px', display: 'inline-flex' }}
      >
        {children}
      </span>
    </div>
  )

  return href ? <a href={href}>{inner}</a> : inner
}
