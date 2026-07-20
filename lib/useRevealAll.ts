'use client'

import { useEffect } from 'react'

/**
 * Fades in every element matching the selectors as it enters the viewport.
 * Elements are expected to start with inline `opacity: 0`.
 * CSS-transition based — replaces the old GSAP entrance animations.
 */
export function useRevealAll(selectors = '[data-a], [data-scroll]') {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selectors))
    els.forEach(el => {
      el.style.transition = 'opacity 0.8s var(--ease-expo), transform 0.8s var(--ease-expo)'
      if (el.style.opacity === '0') el.style.transform = 'translateY(24px)'
    })
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'none'
          io.unobserve(el)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [selectors])
}
