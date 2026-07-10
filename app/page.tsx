'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import useLenis from '@/hooks/useLenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Loader = dynamic(() => import('@/components/Loader'), { ssr: false })

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import FeaturedWork from '@/components/FeaturedWork'
import Metrics from '@/components/Metrics'
import Testimonials from '@/components/Testimonials'
import UnifiedForm from '@/components/UnifiedForm'
import FAQs from '@/components/FAQs'
import Footer from '@/components/Footer'

export default function Home() {
  const [showLoader, setShowLoader] = useState(false)
  const [loaded, setLoaded] = useState(false)
  useLenis()

  useEffect(() => {
    const seen = sessionStorage.getItem('addmads_loaded')
    if (seen) {
      // Already seen this session — skip loader entirely
      setLoaded(true)
    } else {
      setShowLoader(true)
      document.body.style.overflow = 'hidden'
    }
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleLoaderDone = () => {
    sessionStorage.setItem('addmads_loaded', '1')
    setShowLoader(false)
    setLoaded(true)
    document.body.style.overflow = ''
    setTimeout(() => ScrollTrigger.refresh(), 120)
  }

  return (
    <>
      {showLoader && <Loader onComplete={handleLoaderDone} />}

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: loaded ? 'auto' : 'none',
        }}
      >
        <Navbar />

        <main>
          {/* 1 — Hero */}
          <Hero />

          {/* 2 — About (stacked text + services + gallery) */}
          <About />

          {/* 3 — Services (red bg, stacking cards) */}
          <Services />

          {/* 4 — Work (dark, Discover. + projects) */}
          <FeaturedWork />

          {/* 5 — Why us (dark, stats) */}
          <Metrics />

          {/* 6 — Testimonials */}
          <Testimonials />

          {/* 7 — Contact Form */}
          <UnifiedForm
            heading="Let's Build Your Digital Success"
            subheading="Share your vision and we'll create something extraordinary. Fill in the details and we'll get back to you within 24 hours."
          />

          {/* 8 — FAQs */}
          <FAQs />
        </main>

        <Footer />
      </div>
    </>
  )
}
