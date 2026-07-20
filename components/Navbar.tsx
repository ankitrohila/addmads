'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { NAV_LINKS, CONTACT_PHONE, CONTACT_EMAIL, MEGA_MENU_CATEGORIES } from '@/constants'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const lastY = useRef(0)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMega = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }, [])
  const closeMega = useCallback(() => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 48)
      setHidden(y > 140 && y > lastY.current)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    if (!menuOpen) setServicesOpen(false)
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeAll = () => { setMenuOpen(false); setServicesOpen(false); setMegaOpen(false) }

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{ paddingLeft: 'var(--container-px)', paddingRight: 'var(--container-px)' }}
        className={clsx(
          'fixed left-0 right-0 top-0 z-50 flex items-center justify-between',
          'bg-white/[0.96] backdrop-blur-xl border-b border-black/[0.07]',
          'transition-transform duration-500',
          hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0',
          scrolled ? 'py-3' : 'py-4'
        )}
      >
        <Link href="/" aria-label="AddMads — home" onClick={closeAll}>
          <Image
            src="/logo-light.svg"
            alt="AddMads"
            width={160}
            height={44}
            priority
            style={{ objectFit: 'contain', height: 40, width: 'auto' }}
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8 list-none absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map(link => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.hasSubmenu && openMega()}
              onMouseLeave={() => link.hasSubmenu && closeMega()}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-[0.875rem] font-medium text-black/70 hover:text-black transition-colors"
                style={link.hasSubmenu ? { paddingBottom: 20, marginBottom: -20 } : undefined}
              >
                {link.label}
                {link.hasSubmenu && (
                  <svg
                    width="9" height="6" viewBox="0 0 12 8" aria-hidden="true"
                    className={clsx('transition-transform duration-300', megaOpen && 'rotate-180')}
                  >
                    <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden lg:inline-flex btn-red" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
            Get Started
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden relative w-9 h-9 flex flex-col items-end justify-center gap-[6px]"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block h-[1.5px] bg-[#111] transition-all duration-300"
                style={{
                  width: i === 1 ? (menuOpen ? 0 : 16) : 24,
                  opacity: i === 1 && menuOpen ? 0 : 1,
                  transform:
                    i === 0 && menuOpen ? 'rotate(45deg) translate(3px,4px)'
                    : i === 2 && menuOpen ? 'rotate(-45deg) translate(3px,-4px)'
                    : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Desktop mega menu */}
      <div
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
        className={clsx(
          'hidden lg:block fixed left-0 right-0 z-40 transition-all duration-300',
          megaOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
        style={{ top: 'var(--nav-h)' }}
      >
        <div
          className="mx-auto bg-white border-b border-x border-black/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.1)] rounded-b-2xl"
          style={{ maxWidth: 1240, padding: '32px 40px' }}
        >
          <div className="grid grid-cols-5 gap-8">
            {MEGA_MENU_CATEGORIES.map(cat => (
              <div key={cat.id}>
                <Link
                  href={cat.href}
                  onClick={closeAll}
                  className="block text-[0.78rem] font-bold uppercase tracking-[0.08em] text-[#C82A2A] mb-3 hover:underline"
                >
                  {cat.label}
                </Link>
                <ul className="list-none space-y-2">
                  {cat.services.map(svc => (
                    <li key={svc.href}>
                      <Link
                        href={svc.href}
                        onClick={closeAll}
                        className="block text-[0.85rem] text-black/60 hover:text-black transition-colors leading-snug"
                      >
                        {svc.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <div
        className={clsx(
          'lg:hidden fixed inset-0 z-40 bg-[#111] flex flex-col overflow-y-auto transition-[clip-path] duration-500',
        )}
        style={{
          clipPath: menuOpen ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
          transitionTimingFunction: 'cubic-bezier(0.87, 0, 0.13, 1)',
          paddingTop: 'calc(var(--nav-h) + 20px)',
          paddingLeft: 'var(--container-px)',
          paddingRight: 'var(--container-px)',
          paddingBottom: 32,
        }}
        aria-hidden={!menuOpen}
      >
        <ul className="list-none">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.label}
              className="transition-all duration-500"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'none' : 'translateY(32px)',
                transitionDelay: menuOpen ? `${180 + i * 60}ms` : '0ms',
              }}
            >
              {link.hasSubmenu ? (
                <div>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={closeAll}
                      className="block py-3 text-[#D1D1D1] leading-[1.1]"
                      style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2.4rem, 11vw, 4.5rem)', fontWeight: 500 }}
                    >
                      {link.label}
                    </Link>
                    <button
                      onClick={() => setServicesOpen(o => !o)}
                      aria-label="Toggle services list"
                      aria-expanded={servicesOpen}
                      className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg text-white bg-white/[0.08] border border-white/[0.15] transition-transform duration-300"
                      style={{ transform: servicesOpen ? 'rotate(45deg)' : 'none' }}
                    >
                      +
                    </button>
                  </div>
                  <div
                    className="grid transition-[grid-template-rows] duration-400"
                    style={{ gridTemplateRows: servicesOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-4 mb-2 border-b border-white/[0.07]">
                        {MEGA_MENU_CATEGORIES.map(cat => (
                          <div key={cat.id} className="mb-4">
                            <Link
                              href={cat.href}
                              onClick={closeAll}
                              className="block mb-2 text-[0.78rem] font-bold uppercase tracking-[0.08em] text-[#FF4444]"
                            >
                              {cat.label} →
                            </Link>
                            <div className="flex flex-wrap gap-x-2 gap-y-[6px]">
                              {cat.services.map(svc => (
                                <Link
                                  key={svc.href}
                                  href={svc.href}
                                  onClick={closeAll}
                                  className="inline-block px-3 py-[5px] text-[0.85rem] text-white/65 bg-white/[0.07] border border-white/10 rounded-full"
                                >
                                  {svc.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={closeAll}
                  className="block py-3 text-[#D1D1D1] hover:text-white transition-colors leading-[1.1]"
                  style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2.4rem, 11vw, 4.5rem)', fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div
          className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 transition-all duration-500"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'none' : 'translateY(24px)',
            transitionDelay: menuOpen ? '480ms' : '0ms',
          }}
        >
          <div>
            <a href={`tel:${CONTACT_PHONE.replace(/-/g, '')}`} className="block mb-1 text-white/60">
              {CONTACT_PHONE}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[0.875rem] text-white/40">
              {CONTACT_EMAIL}
            </a>
          </div>
          <Link href="/contact" onClick={closeAll} className="btn-red shrink-0" style={{ padding: '10px 20px', fontSize: '0.875rem' }}>
            Get Started
          </Link>
        </div>
      </div>
    </>
  )
}
