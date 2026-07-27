import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MEGA_MENU_CATEGORIES } from '@/constants'

const MAIN_PAGES = [
  { label: 'Home', href: '/', desc: 'Performance marketing & digital growth agency' },
  { label: 'About', href: '/about', desc: 'Our story, team, and mission' },
  { label: 'Services', href: '/services', desc: 'Everything we offer under one roof' },
  { label: 'Portfolio', href: '/portfolio', desc: '26+ live websites we have built' },
  { label: 'Contact', href: '/contact', desc: 'Get in touch or request a quote' },
]

const LEGAL_PAGES = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
  { label: 'Shipping & Delivery', href: '/shipping-delivery-policy' },
]

export const metadata = {
  title: 'Sitemap — AddMads',
  description: 'A complete list of all pages on the AddMads website.',
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: 'var(--font-tight)',
        fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
        fontWeight: 500,
        color: '#111',
        paddingBottom: '10px',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        marginBottom: '20px',
      }}
    >
      {children}
    </h2>
  )
}

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          style={{
            paddingTop: 'calc(var(--nav-h) + clamp(48px, 7vw, 80px))',
            paddingBottom: 'clamp(64px, 9vw, 120px)',
          }}
        >
          <div className="container-x">
            {/* Header */}
            <p className="eyebrow mb-4">Navigation guide</p>
            <h1
              className="h-display"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)', color: '#111', maxWidth: '20ch' }}
            >
              Sitemap
            </h1>
            <p className="mt-4 text-[#555] max-w-[52ch]" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.1rem)' }}>
              Every page on addmads.com — organised by section for quick navigation.
            </p>

            <div className="mt-[clamp(40px,6vw,72px)] grid gap-10 md:grid-cols-2 xl:grid-cols-3">

              {/* Main Pages */}
              <div>
                <SectionHeading>Main Pages</SectionHeading>
                <ul className="list-none space-y-3">
                  {MAIN_PAGES.map(p => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        className="group block"
                      >
                        <span className="text-[#111] font-medium group-hover:text-[#C82A2A] transition-colors" style={{ fontFamily: 'var(--font-tight)' }}>
                          {p.label}
                        </span>
                        {p.desc && (
                          <span className="block text-[0.825rem] text-[#888] mt-0.5">{p.desc}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <SectionHeading>Legal & Policies</SectionHeading>
                <ul className="list-none space-y-3">
                  {LEGAL_PAGES.map(p => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        className="text-[#111] font-medium hover:text-[#C82A2A] transition-colors"
                        style={{ fontFamily: 'var(--font-tight)' }}
                      >
                        {p.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/sitemap"
                      className="text-[#C82A2A] font-medium"
                      style={{ fontFamily: 'var(--font-tight)' }}
                    >
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services overview */}
              <div className="md:col-span-2 xl:col-span-1">
                <SectionHeading>Services Overview</SectionHeading>
                <ul className="list-none space-y-2">
                  {MEGA_MENU_CATEGORIES.map(cat => (
                    <li key={cat.id}>
                      <Link
                        href={cat.href}
                        className="text-[#111] font-medium hover:text-[#C82A2A] transition-colors"
                        style={{ fontFamily: 'var(--font-tight)', fontSize: '0.9375rem' }}
                      >
                        {cat.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services detail grid */}
            <div className="mt-[clamp(40px,6vw,72px)]">
              <SectionHeading>All Service Pages</SectionHeading>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {MEGA_MENU_CATEGORIES.map(cat => (
                  <div key={cat.id}>
                    <Link
                      href={cat.href}
                      className="block text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-[#C82A2A] hover:text-[#a82222] transition-colors mb-3"
                    >
                      {cat.label}
                    </Link>
                    <ul className="list-none space-y-2">
                      {cat.services.map(svc => (
                        <li key={svc.href}>
                          <Link
                            href={svc.href}
                            className="text-[0.875rem] text-[#444] hover:text-[#111] transition-colors"
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
        </section>
      </main>
      <Footer />
    </>
  )
}
