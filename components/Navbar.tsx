'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import clsx from 'clsx'
import { NAV_LINKS, CONTACT_PHONE, MEGA_MENU_CATEGORIES } from '@/constants'
import MegaMenu from './MegaMenu'

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuLinksRef = useRef<(HTMLElement | null)[]>([])
  const lastY = useRef(0)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMega = useCallback(() => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null }
    setMegaMenuOpen(true)
  }, [])

  const closeMega = useCallback(() => {
    closeTimer.current = setTimeout(() => setMegaMenuOpen(false), 120)
  }, [])

  useEffect(() => {
    const isHome = pathname === '/'
    gsap.fromTo(
      navRef.current,
      { yPercent: -100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.1, ease: 'power4.out', delay: isHome ? 3.0 : 0 }
    )

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 48)
      setHidden(y > 120 && y > lastY.current)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return
    const validLinks = menuLinksRef.current.filter(Boolean) as HTMLElement[]

    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      setServicesOpen(false)
      gsap.set(menu, { display: 'flex' })
      gsap.fromTo(menu, { clipPath: 'inset(0 0 100% 0)' }, {
        clipPath: 'inset(0 0 0% 0)', duration: 0.75, ease: 'power4.inOut',
      })
      gsap.fromTo(validLinks, { opacity: 0, y: 48 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.07, delay: 0.25,
      })
    } else {
      document.body.style.overflow = ''
      gsap.to(menu, {
        clipPath: 'inset(0 0 100% 0)', duration: 0.6, ease: 'power4.inOut',
        onComplete: () => gsap.set(menu, { display: 'none' }),
      })
    }
  }, [menuOpen])

  return (
    <>
      <nav
        ref={navRef}
        style={{ opacity: 0, paddingLeft: 'var(--container-px)', paddingRight: 'var(--container-px)', position: 'relative' }}
        className={clsx(
          'fixed left-0 right-0 top-0 z-50 flex items-center justify-between',
          'transition-all duration-500',
          hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0',
          scrolled
            ? 'py-4 bg-white/[0.96] backdrop-blur-xl border-b border-black/[0.08]'
            : 'py-5 bg-white/[0.96] backdrop-blur-xl border-b border-black/[0.06]'
        )}
      >
        {/* Logo */}
        <Link href="/" aria-label="AddMads">
          <Image
            src="/logo-light.svg"
            alt="AddMads"
            width={160}
            height={44}
            priority
            style={{ objectFit: 'contain', height: 44, width: 'auto' }}
          />
        </Link>

        {/* Center nav — desktop */}
        <ul className="hidden md:flex items-center gap-8 list-none absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => link.hasSubmenu && openMega()}
              onMouseLeave={() => link.hasSubmenu && closeMega()}
            >
              <Link
                href={link.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'rgba(17,17,17,0.7)',
                  transition: 'color 0.25s ease',
                  letterSpacing: '0.01em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  paddingBottom: link.hasSubmenu ? 20 : 0,
                  marginBottom: link.hasSubmenu ? -20 : 0,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#111111' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(17,17,17,0.7)' }}
              >
                {link.label}
                {link.hasSubmenu && (
                  <span style={{
                    fontSize: '0.55rem',
                    display: 'inline-block',
                    transition: 'transform 0.3s ease',
                    transform: megaMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}>▼</span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:flex btn-red"
            style={{ padding: '10px 22px', fontSize: '0.875rem' }}
          >
            Get Started
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-end justify-center gap-[6px]"
            aria-label="Toggle navigation"
          >
            {[0, 1, 2].map(i => (
              <span key={i} className="block h-px" style={{
                width: i === 1 ? (menuOpen ? 0 : 16) : 24,
                backgroundColor: '#111111',
                transition: 'all 0.4s ease',
                opacity: i === 1 && menuOpen ? 0 : 1,
                transform: i === 0 && menuOpen ? 'rotate(45deg) translate(3px,3px)' : i === 2 && menuOpen ? 'rotate(-45deg) translate(3px,-3px)' : 'none',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mega menu — fixed full-width */}
      <div
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
        style={{
          position: 'fixed',
          top: 68,
          left: 0,
          right: 0,
          zIndex: 48,
          pointerEvents: megaMenuOpen ? 'auto' : 'none',
        }}
      >
        <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
      </div>

      {/* Mobile full-screen menu */}
      <div
        ref={menuRef}
        style={{
          display: 'none',
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          background: '#111111',
          clipPath: 'inset(0 0 100% 0)',
          padding: 'var(--container-px)',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          overflowY: 'auto',
        }}
      >
        <ul className="list-none space-y-1">
          {NAV_LINKS.map((link, i) => (
            <li key={link.label} ref={el => { menuLinksRef.current[i] = el }} style={{ opacity: 0 }}>
              {link.hasSubmenu ? (
                <div>
                  {/* Services row: label + toggle */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link
                      href={link.href}
                      onClick={() => { setMenuOpen(false); setServicesOpen(false) }}
                      style={{
                        fontFamily: 'var(--font-tight)',
                        fontSize: 'clamp(2.5rem, 12vw, 4.5rem)',
                        fontWeight: 500,
                        color: '#D1D1D1',
                        display: 'block',
                        paddingTop: 12,
                        paddingBottom: 12,
                        transition: 'color 0.3s ease',
                        lineHeight: 1.1,
                      }}
                    >
                      {link.label}
                    </Link>
                    <button
                      onClick={() => setServicesOpen(prev => !prev)}
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: 8,
                        width: 40,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#FFFFFF',
                        fontSize: '1rem',
                        flexShrink: 0,
                        transition: 'transform 0.3s ease',
                        transform: servicesOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                      aria-label="Toggle services"
                    >
                      +
                    </button>
                  </div>

                  {/* Services accordion dropdown */}
                  {servicesOpen && (
                    <div style={{
                      paddingBottom: 16,
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                      marginBottom: 8,
                    }}>
                      {MEGA_MENU_CATEGORIES.map(cat => (
                        <div key={cat.id} style={{ marginBottom: 16 }}>
                          <Link
                            href={cat.href}
                            onClick={() => { setMenuOpen(false); setServicesOpen(false) }}
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.8125rem',
                              fontWeight: 700,
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              color: '#E60000',
                              display: 'block',
                              marginBottom: 8,
                              textDecoration: 'none',
                            }}
                          >
                            {cat.label} →
                          </Link>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 10px' }}>
                            {cat.services.map(svc => (
                              <Link
                                key={svc.href}
                                href={svc.href}
                                onClick={() => { setMenuOpen(false); setServicesOpen(false) }}
                                style={{
                                  fontFamily: 'var(--font-sans)',
                                  fontSize: '0.875rem',
                                  color: 'rgba(255,255,255,0.65)',
                                  textDecoration: 'none',
                                  padding: '5px 12px',
                                  background: 'rgba(255,255,255,0.07)',
                                  borderRadius: 20,
                                  border: '1px solid rgba(255,255,255,0.1)',
                                  display: 'inline-block',
                                  transition: 'all 0.2s ease',
                                }}
                              >
                                {svc.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => { setMenuOpen(false); setMegaMenuOpen(false) }}
                  style={{
                    fontFamily: 'var(--font-tight)',
                    fontSize: 'clamp(2.5rem, 12vw, 4.5rem)',
                    fontWeight: 500,
                    color: '#D1D1D1',
                    display: 'block',
                    paddingTop: 12,
                    paddingBottom: 12,
                    transition: 'color 0.3s ease',
                    lineHeight: 1.1,
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FFFFFF'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#D1D1D1'}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div
          ref={el => { menuLinksRef.current[NAV_LINKS.length] = el }}
          style={{
            opacity: 0,
            marginTop: 40,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div>
            <a href={`tel:${CONTACT_PHONE.replace(/-/g,'')}`} style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.6)', fontSize: '1rem', display: 'block', marginBottom: 4 }}>
              {CONTACT_PHONE}
            </a>
            <a href="mailto:info@addmads.com" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
              info@addmads.com
            </a>
          </div>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-red"
            style={{ padding: '10px 20px', fontSize: '0.875rem' }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  )
}
