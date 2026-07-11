'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function skipLenis() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(pointer: coarse)').matches) return true
  const ua = navigator.userAgent
  return /^((?!chrome|android|chromium).)*safari/i.test(ua)
}

export default function LenisInit() {
  const pathname = usePathname()
  const lenisRef = useRef<Lenis | null>(null)
  const isFirstRun = useRef(true)

  // Initialize Lenis (or RAF loop for mobile/Safari) once on mount
  useEffect(() => {
    if (skipLenis()) {
      ScrollTrigger.config({ ignoreMobileResize: true })
      let rafId: number
      const loop = () => { ScrollTrigger.update(); rafId = requestAnimationFrame(loop) }
      rafId = requestAnimationFrame(loop)
      return () => cancelAnimationFrame(rafId)
    }

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })
    lenisRef.current = lenis
    lenis.on('scroll', () => ScrollTrigger.update())

    const rafCb = (time: number) => { lenis.raf(time * 1000) }
    gsap.ticker.add(rafCb)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(rafCb)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // On every route change: scroll-to-top (nav only) + refresh ScrollTrigger
  useEffect(() => {
    if (!isFirstRun.current) {
      const lenis = lenisRef.current
      if (lenis) {
        lenis.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo(0, 0)
      }
    }
    isFirstRun.current = false

    const t1 = setTimeout(() => ScrollTrigger.refresh(), 150)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [pathname])

  return null
}
