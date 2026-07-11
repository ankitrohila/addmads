'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Mounted in the root layout so every page gets ScrollTrigger.refresh()
 * after navigation. Without this, inner pages keep their GSAP initial states
 * (opacity:0) because ScrollTrigger never recalculates scroll positions.
 */
export default function ScrollInit() {
  const pathname = usePathname()

  useEffect(() => {
    // On every route change, wait for the DOM to settle then refresh
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [pathname])

  return null
}
