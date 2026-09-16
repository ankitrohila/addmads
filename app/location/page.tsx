import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UnifiedForm from '@/components/UnifiedForm'
import { LOCATIONS, LOCATION_SLUGS } from './data'
import { CONTACT_PHONE, CONTACT_EMAIL } from '@/constants'

export const metadata: Metadata = {
  title: 'Locations We Serve — Digital Marketing Agency in Sonipat, Delhi NCR, Noida, Panipat, UK, US & UAE',
  description:
    'AddMads delivers performance marketing, SEO, Google Ads, Meta Ads, branding and web development across Sonipat, Ganaur, Panipat, Noida, Delhi NCR and internationally in the UK, USA and UAE. Find your city and get a free growth audit.',
  alternates: { canonical: 'https://www.addmads.com/location' },
  openGraph: {
    title: 'Locations We Serve | AddMads Digital Marketing Agency',
    description:
      'Performance marketing, SEO and web development across Sonipat, Delhi NCR, Noida, Panipat, UK, USA and UAE.',
    url: 'https://www.addmads.com/location',
    type: 'website',
  },
}

export default function LocationIndexPage() {
  const india = LOCATION_SLUGS.filter(s => !LOCATIONS[s].isInternational)
  const intl = LOCATION_SLUGS.filter(s => LOCATIONS[s].isInternational)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.addmads.com' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.addmads.com/location' },
    ],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Locations served by AddMads',
    itemListElement: LOCATION_SLUGS.map((slug, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: LOCATIONS[slug].headline,
      url: `https://www.addmads.com/location/${slug}`,
    })),
  }

  const card = (slug: string) => {
    const loc = LOCATIONS[slug]
    return (
      <Link
        key={slug}
        href={`/location/${slug}`}
        style={{
          display: 'block',
          border: '1px solid #e5e5e5',
          borderRadius: 14,
          padding: '26px 24px',
          textDecoration: 'none',
          color: 'inherit',
          background: '#fff',
          transition: 'border-color .2s',
        }}
      >
        <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C82A2A', marginBottom: 10 }}>
          {loc.region}{loc.isInternational ? '' : `, ${loc.country}`}
        </p>
        <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.35rem', fontWeight: 700, marginBottom: 10, lineHeight: 1.2 }}>
          {loc.headline}
        </h2>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#555', margin: 0 }}>{loc.subheadline}</p>
        <span style={{ display: 'inline-block', marginTop: 16, fontWeight: 700, fontSize: '0.9rem', color: '#C82A2A' }}>
          View {loc.name} services →
        </span>
      </Link>
    )
  }

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <section style={{ background: '#111', color: '#fff', padding: 'clamp(80px,12vw,150px) var(--container-px) clamp(56px,8vw,90px)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C82A2A', marginBottom: 16 }}>
              Locations We Serve
            </p>
            <h1 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2.3rem,6.5vw,4.6rem)', fontWeight: 700, lineHeight: 1.08, marginBottom: 20, color: '#fff' }}>
              Digital marketing that works in your market
            </h1>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.2rem)', lineHeight: 1.65, color: '#ccc', maxWidth: 720 }}>
              AddMads is headquartered in Sonipat, Haryana and runs performance marketing, SEO, branding and
              web development for businesses across Delhi NCR and internationally. Pick your city below to see
              the services, case studies and pricing relevant to that market — or call{' '}
              <a href={`tel:${CONTACT_PHONE}`} style={{ color: '#fff', fontWeight: 700 }}>{CONTACT_PHONE}</a> for a free audit.
            </p>
          </div>
        </section>

        <section style={{ padding: 'clamp(56px,8vw,96px) var(--container-px)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.6rem,3.4vw,2.4rem)', fontWeight: 700, marginBottom: 12 }}>
              India — Haryana &amp; Delhi NCR
            </h2>
            <p style={{ color: '#555', marginBottom: 32, maxWidth: 700, lineHeight: 1.65 }}>
              On-ground teams and local market knowledge across Haryana and the National Capital Region.
              Local SEO, Google Business Profile ranking, Google Ads and Meta Ads built for each city.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 20 }}>
              {india.map(card)}
            </div>

            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.6rem,3.4vw,2.4rem)', fontWeight: 700, margin: '64px 0 12px' }}>
              International
            </h2>
            <p style={{ color: '#555', marginBottom: 32, maxWidth: 700, lineHeight: 1.65 }}>
              We run campaigns for D2C, SaaS and service brands across the UK, USA and UAE — with
              overlapping working hours, native-English creative and localised landing pages.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 20 }}>
              {intl.map(card)}
            </div>
          </div>
        </section>

        <section style={{ background: '#f7f7f7', padding: 'clamp(48px,7vw,80px) var(--container-px)' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.5rem,3.2vw,2.2rem)', fontWeight: 700, marginBottom: 18 }}>
              Don&apos;t see your city?
            </h2>
            <p style={{ color: '#555', lineHeight: 1.7, marginBottom: 20 }}>
              We work with clients across India and globally — the pages above are simply the markets where we
              have the deepest local data. If your business is somewhere else, the same team, the same process
              and the same reporting apply. Email{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#C82A2A', fontWeight: 700 }}>{CONTACT_EMAIL}</a>{' '}
              or call <a href={`tel:${CONTACT_PHONE}`} style={{ color: '#C82A2A', fontWeight: 700 }}>{CONTACT_PHONE}</a>.
            </p>
          </div>
        </section>

        <UnifiedForm
          heading="Get a free growth audit for your market"
          subheading="Tell us your city and your goal — we'll send back a channel plan, a realistic budget and what results to expect in the first 90 days."
        />
      </main>
      <Footer />
    </>
  )
}
