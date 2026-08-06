import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UnifiedForm from '@/components/UnifiedForm'
import { LOCATIONS, LOCATION_SLUGS } from '../data'
import { CONTACT_PHONE, CONTACT_EMAIL } from '@/constants'

interface Props {
  params: Promise<{ city: string }>
}

export function generateStaticParams() {
  return LOCATION_SLUGS.map(city => ({ city }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const loc = LOCATIONS[city]
  if (!loc) return {}

  const titleMap: Record<string, string> = {
    sonipat: 'Best Digital Marketing Agency in Sonipat, Haryana | AddMads',
    ganaur:  'Digital Marketing Agency in Ganaur, Sonipat | AddMads',
    delhi:   'Best Digital Marketing Agency in Delhi NCR | AddMads',
    panipat: 'Digital Marketing Agency in Panipat, Haryana | AddMads',
    uk:      'Digital Marketing Agency for UK Businesses | AddMads India',
    usa:     'Digital Marketing Agency for US Businesses | AddMads India',
    uae:     'Digital Marketing Agency in Dubai & UAE | AddMads',
  }

  const descMap: Record<string, string> = {
    sonipat: 'AddMads — top digital marketing agency in Sonipat, Haryana. Google Ads, Meta Ads, SEO, branding & web development. 60+ clients, 7+ years. Get a free audit today.',
    ganaur:  'AddMads provides digital marketing services in Ganaur — local SEO, Google Ads, social media, web development. Affordable packages for Ganaur & Sonipat district businesses.',
    delhi:   'Best performance marketing agency for Delhi NCR businesses. AddMads delivers Google Ads with 3–6× ROAS, page 1 SEO, branding, and web development for Delhi companies.',
    panipat: 'Digital marketing agency in Panipat — local SEO, Google Ads, social media & web development. AddMads serves textile, manufacturing & retail businesses in Panipat, Haryana.',
    uk:      'India-based digital marketing agency for UK businesses. AddMads delivers Google Ads, Meta Ads, SEO & web development at UK-quality but significantly lower cost than UK agencies.',
    usa:     'India-based digital marketing agency for US businesses. AddMads delivers Google Ads, SEO, Shopify development & performance marketing for American companies at competitive rates.',
    uae:     'Digital marketing agency for UAE businesses in Dubai, Abu Dhabi & Sharjah. AddMads delivers Google Ads, SEO & web development at a fraction of Dubai agency rates.',
  }

  const kwMap: Record<string, string[]> = {
    sonipat: ['digital marketing agency sonipat', 'marketing company sonipat', 'seo services sonipat', 'google ads sonipat', 'web development sonipat', 'best marketing agency haryana'],
    ganaur:  ['digital marketing agency ganaur', 'marketing services ganaur', 'seo ganaur', 'web design ganaur', 'social media marketing ganaur'],
    delhi:   ['digital marketing agency delhi', 'performance marketing agency delhi ncr', 'google ads agency delhi', 'seo services delhi', 'best marketing agency delhi'],
    panipat: ['digital marketing agency panipat', 'marketing services panipat', 'seo panipat', 'google ads panipat', 'web development panipat'],
    uk:      ['digital marketing agency india for uk', 'indian agency uk clients', 'seo agency uk india', 'google ads management uk'],
    usa:     ['digital marketing agency india for us', 'indian agency usa clients', 'seo agency usa india', 'performance marketing us'],
    uae:     ['digital marketing agency dubai', 'marketing agency uae india', 'seo dubai', 'google ads uae', 'web development dubai'],
  }

  return {
    title: titleMap[city] ?? `Digital Marketing Agency in ${loc.name} | AddMads`,
    description: descMap[city] ?? loc.subheadline,
    keywords: kwMap[city] ?? [loc.name.toLowerCase(), 'digital marketing', 'AddMads'],
    openGraph: {
      title: titleMap[city] ?? `Digital Marketing Agency in ${loc.name}`,
      description: descMap[city] ?? loc.subheadline,
      type: 'website',
      url: `https://www.addmads.com/location/${city}`,
      siteName: 'AddMads',
    },
    alternates: {
      canonical: `https://www.addmads.com/location/${city}`,
    },
  }
}

const SERVICES_LIST = [
  { name: 'Google Ads & PPC',         href: '/services/performance-marketing/google-ads', desc: 'Search, Shopping, YouTube & Performance Max campaigns with full conversion tracking.' },
  { name: 'Meta / Facebook Ads',      href: '/services/performance-marketing/meta-ads',   desc: 'Facebook & Instagram ads with pixel setup, audience targeting, and creative production.' },
  { name: 'SEO Services',             href: '/services/seo',                               desc: 'Technical SEO, on-page, link building, local SEO, and content strategy.' },
  { name: 'Local SEO',                href: '/services/seo/local-seo',                     desc: 'Google Business Profile, citations, reviews, and local map pack rankings.' },
  { name: 'Branding & Logo Design',   href: '/services/branding',                          desc: 'Brand strategy, logo design, visual identity, and brand guidelines.' },
  { name: 'Web Development',          href: '/services/it-services',                       desc: 'WordPress, Shopify, React/Next.js websites and web applications.' },
  { name: 'Social Media Management',  href: '/services/performance-marketing/social-media', desc: 'Content creation, posting, community management, and analytics.' },
  { name: 'Content Marketing',        href: '/services/performance-marketing/content-marketing', desc: 'SEO articles, case studies, and lead magnets that rank and convert.' },
]

export default async function LocationPage({ params }: Props) {
  const { city } = await params
  const loc = LOCATIONS[city]
  if (!loc) notFound()

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['MarketingAgency', 'LocalBusiness'],
    name: `AddMads — Digital Marketing Agency serving ${loc.name}`,
    url: 'https://www.addmads.com',
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    description: `${loc.subheadline} Performance marketing, SEO, branding and web development by AddMads.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sonipat',
      addressLocality: 'Sonipat',
      addressRegion: 'Haryana',
      postalCode: '131001',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': loc.isInternational ? 'Country' : 'City', name: loc.name },
    ],
    ...(loc.schema.latitude ? {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: loc.schema.latitude,
        longitude: loc.schema.longitude,
      },
    } : {}),
    priceRange: loc.isInternational ? '$$' : '₹₹',
    sameAs: [
      'https://instagram.com/addmads',
      'https://linkedin.com/company/addmads',
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Does AddMads provide digital marketing services in ${loc.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. AddMads serves businesses in ${loc.name} with a full range of digital marketing services including Google Ads, Meta Ads, SEO, local SEO, social media marketing, branding, and web development.`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the best digital marketing agency in ${loc.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `AddMads is a leading digital marketing agency serving ${loc.name}. With 7+ years of experience, 60+ clients, and 250+ projects delivered, we offer performance marketing, SEO, branding, and web development with transparent reporting and measurable results.`,
        },
      },
      {
        '@type': 'Question',
        name: `How much does digital marketing cost in ${loc.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `AddMads offers flexible pricing for ${loc.name} businesses. Performance marketing management starts from ${loc.currency === '₹' ? '₹25,000' : loc.currency === '£' ? '£500' : loc.currency === '$' ? '$600' : 'AED 2,000'}/month. SEO retainers start from ${loc.currency === '₹' ? '₹15,000' : loc.currency === '£' ? '£300' : loc.currency === '$' ? '$400' : 'AED 1,500'}/month. Website development starts from ${loc.currency === '₹' ? '₹15,000' : loc.currency === '£' ? '£300' : loc.currency === '$' ? '$400' : 'AED 1,500'}.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can AddMads do Google Ads for my ${loc.name} business?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. AddMads manages Google Ads campaigns precisely targeted to ${loc.name} and surrounding areas. We handle keyword research, campaign setup, ad copy, bid management, and conversion tracking — with monthly performance reports.`,
        },
      },
    ],
  }

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main style={{ paddingTop: 'var(--nav-h)' }}>

        {/* ── Hero ── */}
        <section style={{ background: '#111', color: '#fff', padding: 'clamp(80px,12vw,160px) var(--container-px) clamp(60px,8vw,100px)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C82A2A', marginBottom: 16 }}>
              {loc.isInternational ? 'International Clients' : `Serving ${loc.name}, ${loc.region}`}
            </p>
            <h1 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2.4rem,7vw,5rem)', fontWeight: 700, lineHeight: 1.08, marginBottom: 20, color: '#fff' }}>
              {loc.headline}
            </h1>
            <p style={{ fontSize: 'clamp(1rem,1.5vw,1.2rem)', color: 'rgba(255,255,255,0.7)', maxWidth: 640, lineHeight: 1.7, marginBottom: 40 }}>
              {loc.subheadline}
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginBottom: 48 }}>
              {loc.heroStats.map(stat => (
                <div key={stat.label}>
                  <p style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700, color: '#C82A2A', lineHeight: 1 }}>{stat.value}</p>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <Link href="/contact" className="btn-red" style={{ padding: 'clamp(14px,1.5vw,18px) clamp(24px,3vw,36px)', fontSize: 'clamp(0.95rem,1.1vw,1.05rem)' }}>
                Get a Free Strategy Call
              </Link>
              <Link href="/services" className="btn-white" style={{ padding: 'clamp(14px,1.5vw,18px) clamp(24px,3vw,36px)', fontSize: 'clamp(0.95rem,1.1vw,1.05rem)' }}>
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section style={{ background: '#fff', padding: 'clamp(64px,9vw,120px) var(--container-px)' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.1rem,1.6vw,1.3rem)', color: '#333', lineHeight: 1.8 }}>
              {loc.intro}
            </p>
          </div>
        </section>

        {/* ── Why Section ── */}
        <section style={{ background: '#F5F5F5', padding: 'clamp(64px,9vw,120px) var(--container-px)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 700, color: '#111', marginBottom: 48, lineHeight: 1.15 }}>
              Digital Marketing for {loc.name} Businesses
            </h2>
            <div style={{ display: 'grid', gap: 32, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
              {loc.whySection.map((item, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '32px 28px', borderLeft: '4px solid #C82A2A' }}>
                  <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.15rem', fontWeight: 700, color: '#111', marginBottom: 12 }}>
                    {item.heading}
                  </h3>
                  <p style={{ fontSize: '0.97rem', color: '#555', lineHeight: 1.75, margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section style={{ background: '#fff', padding: 'clamp(64px,9vw,120px) var(--container-px)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, color: '#111', marginBottom: 12, lineHeight: 1.15 }}>
              Our Services for {loc.name}
            </h2>
            <p style={{ fontSize: '1rem', color: '#666', marginBottom: 40, maxWidth: 560 }}>
              Everything your business needs to grow online — under one roof, with one accountable team.
            </p>
            <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
              {SERVICES_LIST.map(svc => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  style={{ display: 'block', padding: '24px 24px 20px', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 12, textDecoration: 'none', color: 'inherit', transition: 'box-shadow 0.2s, border-color 0.2s' }}
                >
                  <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.05rem', fontWeight: 600, color: '#C82A2A', marginBottom: 8 }}>
                    {svc.name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.65, margin: 0 }}>
                    {svc.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Local facts ── */}
        <section style={{ background: '#111', color: '#fff', padding: 'clamp(64px,9vw,120px) var(--container-px)' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, color: '#fff', marginBottom: 40, lineHeight: 1.15 }}>
              Why Businesses in {loc.name} Choose AddMads
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              {loc.localFacts.map((fact, i) => (
                <li key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ color: '#C82A2A', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0, marginTop: 1 }}>✓</span>
                  <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: 0 }}>{fact}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: '#F8F8F8', padding: 'clamp(64px,9vw,120px) var(--container-px)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, color: '#111', marginBottom: 40 }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                {
                  q: `Does AddMads provide digital marketing services in ${loc.name}?`,
                  a: `Yes. AddMads serves businesses in ${loc.name} with a full range of digital marketing services — Google Ads, Meta Ads, SEO, local SEO, social media marketing, branding, and web development. Our team works remotely, delivering the same quality as an on-the-ground agency.`,
                },
                {
                  q: `How much does digital marketing cost for ${loc.name} businesses?`,
                  a: `Our packages are designed to be accessible for businesses of all sizes in ${loc.name}. Performance marketing management starts from ${loc.currency === '₹' ? '₹25,000' : loc.currency === '£' ? '£500' : loc.currency === '$' ? '$600' : 'AED 2,000'}/month. SEO retainers from ${loc.currency === '₹' ? '₹15,000' : loc.currency === '£' ? '£300' : loc.currency === '$' ? '$400' : 'AED 1,500'}/month. Get a free audit and custom quote.`,
                },
                {
                  q: `Can you rank my ${loc.name} business on page 1 of Google?`,
                  a: `Yes. Our SEO service targets the keywords your ${loc.name} customers are searching — local terms, service keywords, and national phrases. Most clients reach top 10 in 4–6 months and top 3 in 8–12 months. Local SEO results (Google Maps) often arrive faster.`,
                },
                {
                  q: 'How do I get started with AddMads?',
                  a: 'Contact us at addmads.com/contact or call +91-9220872212. We\'ll schedule a free 30-minute strategy call, audit your current digital presence, and share a prioritised action plan — no commitment required.',
                },
              ].map((faq, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 12, padding: '24px 28px', border: '1px solid rgba(0,0,0,0.07)' }}>
                  <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: 10 }}>
                    {faq.q}
                  </h3>
                  <p style={{ fontSize: '0.97rem', color: '#555', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <UnifiedForm
          heading={`Ready to grow your ${loc.name} business?`}
          subheading="Tell us your goal — we'll map the plan and get back to you within 24 hours."
        />

      </main>
      <Footer />
    </>
  )
}
