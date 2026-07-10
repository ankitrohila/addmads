'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS } from '@/constants'
import Navbar from '@/components/Navbar'
import UnifiedForm from '@/components/UnifiedForm'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function PortfolioPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.2,
        }
      )

      gsap.fromTo(
        projectsRef.current.filter(Boolean),
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 'var(--nav-h)' }}>
        {/* Header Section */}
        <section
          ref={headerRef}
          style={{
            background: '#FFFFFF',
            color: '#111111',
            padding: 'clamp(100px, 14vw, 180px) var(--container-px)',
            minHeight: '50vh',
            display: 'flex',
            alignItems: 'center',
            opacity: 0,
            borderBottom: '1px solid rgba(17,17,17,0.07)',
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-tight)',
                fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                fontWeight: 500,
                lineHeight: 1.15,
                color: '#111111',
                marginBottom: 'clamp(24px, 3vw, 40px)',
              }}
            >
              Our Portfolio
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                fontWeight: 400,
                color: 'rgba(17,17,17,0.55)',
                maxWidth: 600,
                lineHeight: 1.7,
              }}
            >
              A selection of our favorite projects across branding, digital experience, and creative strategy. Each project represents our commitment to excellence and innovation.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section
          className="projects-grid"
          style={{
            background: '#F8F8F8',
            padding: 'clamp(80px, 10vw, 160px) var(--container-px)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: 'clamp(32px, 4vw, 48px)',
              maxWidth: 1300,
              margin: '0 auto',
            }}
          >
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                ref={el => {
                  projectsRef.current[index] = el
                }}
                style={{
                  opacity: 0,
                  borderRadius: 12,
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  border: '1px solid rgba(17,17,17,0.08)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-8px)'
                  el.style.boxShadow = '0 12px 40px rgba(200,42,42,0.12)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Project Image Placeholder */}
                <div
                  style={{
                    background: `linear-gradient(135deg, ${project.accent}15 0%, ${project.accent}05 100%)`,
                    height: 280,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: project.accent,
                    opacity: 0.5,
                  }}
                >
                  🎨
                </div>

                {/* Project Info */}
                <div style={{ padding: 'clamp(24px, 3vw, 32px)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: '#C82A2A',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        marginBottom: 8,
                      }}
                    >
                      {project.category} • {project.year}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-tight)',
                        fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                        fontWeight: 500,
                        color: '#111111',
                        margin: '0 0 12px 0',
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        fontWeight: 400,
                        color: 'rgba(17,17,17,0.65)',
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Index */}
                  <div
                    style={{
                      marginTop: 20,
                      fontFamily: 'var(--font-tight)',
                      fontSize: '2rem',
                      fontWeight: 500,
                      color: '#C82A2A',
                      opacity: 0.2,
                    }}
                  >
                    {project.index}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <UnifiedForm
          heading="Start a New Project"
          subheading="Tell us about your project and goals. We'll get back to you within 24 hours."
          bgColor="#F8F8F8"
          showLeftInfo={false}
        />
      </main>

      <Footer />
    </>
  )
}
