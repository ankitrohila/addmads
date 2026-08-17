'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FOOTER_SERVICES, CONTACT_PHONE, CONTACT_EMAIL } from '@/constants'

const INSTA_POSTS = [
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop&q=75',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=200&fit=crop&q=75',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&q=75',
  'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=200&h=200&fit=crop&q=75',
  'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=200&h=200&fit=crop&q=75',
  'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=200&h=200&fit=crop&q=75',
]

const COL_COMPANY = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const COL_LEGAL = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
  { label: 'Shipping & Delivery', href: '/shipping-delivery-policy' },
  { label: 'Sitemap', href: '/sitemap' },
]

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/addmads', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg> },
  { label: 'YouTube', href: 'https://youtube.com/@addmads', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg> },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/addmads', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  { label: 'X', href: 'https://x.com/addmads', svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#111', color: '#fff' }}>
      <div className="container-x" style={{ paddingTop: 'clamp(48px,6vw,80px)', paddingBottom: 'clamp(24px,3vw,40px)' }}>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.6fr] mb-[clamp(32px,4vw,56px)]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo-dark.svg" alt="AddMads" width={140} height={44} style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
            </Link>
            <p className="text-[0.9375rem] text-white/40 max-w-[240px] mb-6">
              Performance marketing &amp; digital growth agency. We turn spend into scale.
            </p>
            <div className="flex gap-[10px]">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-[38px] h-[38px] shrink-0 rounded-full border border-white/[0.18] flex items-center justify-center text-white/65 transition-colors hover:bg-white hover:text-[#111] hover:border-white"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Company + legal */}
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/25 mb-5">Company</h4>
            <ul className="list-none space-y-3">
              {COL_COMPANY.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/80 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-col gap-3">
              {COL_LEGAL.map(l => (
                <Link key={l.label} href={l.href} className="text-[0.9rem] text-white/60 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/25 mb-5">Services</h4>
            <ul
              className="list-none space-y-2"
              style={{ maxHeight: 260, overflowY: 'auto', paddingRight: 4 }}
            >
              {FOOTER_SERVICES.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="block text-[0.875rem] text-white/60 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Instagram feed */}
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/25 mb-5">Contact</h4>
            <ul className="list-none space-y-3 text-[0.9rem] mb-6">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-[10px] text-white/80 hover:text-white transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[2px]"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_PHONE.replace(/-/g, '')}`} className="flex items-start gap-[10px] text-white/80 hover:text-white transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[2px]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-[10px] text-white/80">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[2px]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Sonipat, Haryana, India
              </li>
            </ul>

            {/* Instagram feed */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/25">Instagram</h4>
                <a
                  href="https://www.instagram.com/theaddmads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.7rem] text-white/40 hover:text-white transition-colors"
                >
                  @theaddmads →
                </a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
                {INSTA_POSTS.map((src, i) => (
                  <a
                    key={i}
                    href="https://www.instagram.com/theaddmads/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ position: 'relative', aspectRatio: '1/1', display: 'block', borderRadius: 4, overflow: 'hidden' }}
                    className="group"
                  >
                    <Image
                      src={src}
                      alt={`AddMads Instagram post ${i + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover transition-opacity group-hover:opacity-75"
                      unoptimized
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(230,0,0,0)',
                      transition: 'background 0.2s',
                    }} className="group-hover:[background:rgba(230,0,0,0.25)]" />
                  </a>
                ))}
              </div>
              <a
                href="https://www.instagram.com/theaddmads/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                  marginTop: 10, padding: '8px 0',
                  border: '1px solid rgba(255,255,255,0.18)', borderRadius: 6,
                  fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                className="hover:bg-white hover:!text-[#111] hover:border-white"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
                Follow @theaddmads
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-5 flex flex-wrap items-center justify-between gap-3">
          <span className="text-[0.875rem] text-white/45 font-medium">© {year} AddMads. All rights reserved.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[0.875rem] text-white/45 hover:text-white transition-colors"
          >
            ↑ Back to top
          </button>
        </div>

        <div className="footer-wordmark mt-[clamp(24px,4vw,56px)]">AddMads</div>
      </div>
    </footer>
  )
}
