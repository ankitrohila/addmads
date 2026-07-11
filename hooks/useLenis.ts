'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function isSafariLike() {
  if (typeof navigator === 'undefined') return false
  const ua = navigator.userAgent
  // iOS devices
  if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) return true
  // Desktop Safari — has 'Safari' but not 'Chrome' or 'Chromium' or 'Android'
  return /^((?!chrome|android|chromium).)*safari/i.test(ua)
}

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // iOS + Safari desktop: skip Lenis entirely — native momentum scroll is smooth,
    // and Lenis + GSAP fixed-position pins causes tearing and scroll jank on Safari.
    if (isSafariLike()) {
      ScrollTrigger.config({ ignoreMobileResize: true })
      const onScroll = () => ScrollTrigger.update()
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
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
