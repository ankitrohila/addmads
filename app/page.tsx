'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import useLenis from '@/hooks/useLenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Loader = dynamic(() => import('@/components/Loader'), { ssr: false })

import Navbar from '@/components/Navbar'
import Cursor from '@/components/Cursor'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ServiceShowcase from '@/components/ServiceShowcase'
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
      <Cursor />

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

          {/* 2 — About (scroll-triggered red sweep animation) */}
          <About />

          {/* 3 — Service Showcase (red bg, methodology + tab card) */}
          <ServiceShowcase />

          {/* 4 — Services (white bg, 3-col card grid) */}
          <Services />

          {/* 5 — Work (dark, Discover. + projects) */}
          <FeaturedWork />

          {/* 6 — Why us (dark, stats) */}
          <Metrics />

          {/* 7 — Contact Form */}
          <UnifiedForm
            heading="Let's Build Your Digital Success"
            subheading="Share your vision and we'll create something extraordinary. Fill in the details and we'll get back to you within 24 hours."
          />

          {/* 8 — Testimonials */}
          <Testimonials />

          {/* 9 — FAQs */}
          <FAQs />
        </main>

        <Footer />
      </div>
    </>
  )
}
