'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function skipLenis() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false
  // All touch/mobile devices (iOS, Android, tablets) — native momentum scroll is better
  if (window.matchMedia('(pointer: coarse)').matches) return true
  // Desktop Safari — Lenis + GSAP pins causes tearing on WebKit
  const ua = navigator.userAgent
  return /^((?!chrome|android|chromium).)*safari/i.test(ua)
}

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Mobile (all) + Desktop Safari: skip Lenis, use native scroll.
    // RAF loop keeps ScrollTrigger in sync on every frame — prevents flickering
    // during iOS momentum scroll where 'scroll' events fire at reduced frequency.
    if (skipLenis()) {
      ScrollTrigger.config({ ignoreMobileResize: true })
      let rafId: number
      const loop = () => {
        ScrollTrigger.update()
        rafId = requestAnimationFrame(loop)
      }
      rafId = requestAnimationFrame(loop)
      // Refresh after layout settles
      const tid = setTimeout(() => ScrollTrigger.refresh(), 400)
      return () => {
        cancelAnimationFrame(rafId)
        clearTimeout(tid)
      }
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

    const rafCallback = (time: number) => { lenis.raf(time * 1000) }
    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(rafCallback)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return lenisRef
}

export default useLenis
