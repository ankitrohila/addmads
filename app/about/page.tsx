import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import UnifiedForm from '@/components/UnifiedForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About AddMads — Performance Marketing & Digital Growth Agency',
  description: 'AddMads is a performance marketing and digital growth agency. We deliver data-driven campaigns, SEO, branding, web development and more — built to maximise your ROI.',
  keywords: ['digital marketing', 'performance marketing', 'SEO', 'digital agency', 'AddMads', 'Google Ads', 'Meta Ads'],
  openGraph: {
    title: 'About AddMads',
    description: 'Performance marketing & digital growth. We turn ad spend into measurable results.',
    type: 'website',
    url: 'https://www.addmads.com/about',
    siteName: 'AddMads',
  },
  alternates: {
    canonical: 'https://www.addmads.com/about',
  },
}

const VALUES = [
  { num: '01', title: 'Results First',  desc: 'Every decision we make is anchored in data and tied to your business outcomes. If it can&apos;t be measured, we hold ourselves accountable to make it so.' },
  { num: '02', title: 'Transparency',   desc: 'You get full visibility into your campaigns, your spend, and your results. Real-time dashboards. Monthly reports. No hidden fees, ever.' },
  { num: '03', title: 'Partnership',    desc: 'We work alongside you, not just for you. Your market knowledge combined with our execution produces outcomes neither of us could reach alone.' },
  { num: '04', title: 'Speed to Scale', desc: 'We move fast and iterate faster. Rapid testing, data-led optimisation, and a relentless focus on compounding growth across every channel.' },
]

const SERVICES = [
  { name: 'Performance Marketing', desc: 'Google Ads, Meta Ads, retargeting, email, content, and influencer campaigns engineered for maximum ROAS and measurable business growth.' },
  { name: 'Branding & Design',     desc: 'Brand strategy, logo design, visual identity systems, and graphic design that builds recognition and earns trust at every touchpoint.' },
  { name: 'SEO & Organic Growth',  desc: 'Technical SEO, on-page optimisation, link building, local SEO, and content strategy to own the top positions in your market.' },
  { name: 'Web Development',       desc: 'WordPress, Shopify, React, Next.js, Laravel, and custom web apps — built fast, secure, and optimised for conversion.' },
]

const STATS = [
  { value: '250+', label: 'Projects Delivered' },
  { value: '60+',  label: 'Global Clients' },
  { value: '7yr',  label: 'Industry Experience' },
  { value: '4.5×', label: 'Avg ROAS Achieved' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{ background: '#FFFFFF', minHeight: '100vh', paddingTop: 'var(--nav-h)' }}>

        {/* Hero */}
        <div style={{
          padding: 'clamp(80px,10vw,160px) var(--container-px) clamp(64px,8vw,120px)',
          background: '#FFFFFF',
          borderBottom: '1px solid rgba(17,17,17,0.07)',
        }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)', marginBottom: 20 }}>
            Our Story
          </p>
          <h1 style={{
            fontFamily: 'var(--font-tight)',
            fontSize: 'clamp(3rem,8vw,7rem)',
            fontWeight: 500,
            color: '#111111',
            lineHeight: 1.05,
            margin: '0 0 clamp(24px,3vw,40px)',
            maxWidth: 900,
          }}>
            We turn ad spend<br />into measurable scale.
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem,1.6vw,1.25rem)', color: 'rgba(17,17,17,0.55)', lineHeight: 1.8, maxWidth: 600, margin: 0 }}>
            AddMads is a performance marketing &amp; digital growth agency. We partner with brands to build data-driven campaigns, high-converting websites, and brand identities that drive real business results.
          </p>
        </div>

        {/* Stats bar */}
        <div style={{ background: '#111111', padding: 'clamp(40px,5vw,64px) var(--container-px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 'clamp(32px,4vw,64px)', maxWidth: 1200, margin: '0 auto' }}>
            {STATS.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.02em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div style={{ padding: 'clamp(64px,8vw,120px) var(--container-px)', borderBottom: '1px solid rgba(17,17,17,0.07)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 'clamp(40px,5vw,80px)', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 500, color: '#111111', lineHeight: 1.15, marginBottom: 'clamp(20px,2.5vw,32px)' }}>
                Built on data.<br />Driven by results.
              </h2>
              <div style={{ width: 28, height: 2, background: '#E60000', borderRadius: 2 }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(17,17,17,0.65)', lineHeight: 1.8, margin: 0 }}>
                AddMads was founded on a single conviction: that great marketing is both art and science. Over the years, we have helped startups, established enterprises, and global brands achieve exponential growth through strategic digital advertising, SEO, and data-driven campaigns.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(17,17,17,0.65)', lineHeight: 1.8, margin: 0 }}>
                Our team combines deep expertise in performance marketing, analytics, and creative strategy. Every campaign is rooted in data and optimised for measurable results. We don&apos;t just create campaigns — we engineer growth.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(17,17,17,0.65)', lineHeight: 1.8, margin: 0 }}>
                We work with clients across India and globally. Location doesn&apos;t matter — exceptional results do. Whether you need to boost ad performance, increase organic visibility, or build a full digital growth strategy, we deliver outcomes you can measure.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div style={{ padding: 'clamp(64px,8vw,120px) var(--container-px)', background: '#F5F5F5', borderBottom: '1px solid rgba(17,17,17,0.07)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)', marginBottom: 48 }}>
            What we stand for
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 'clamp(24px,3vw,40px)' }}>
            {VALUES.map(v => (
              <div key={v.num} style={{ background: '#FFFFFF', borderRadius: 18, padding: 'clamp(24px,3vw,36px)', border: '1px solid rgba(17,17,17,0.06)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(17,17,17,0.3)', marginBottom: 14 }}>{v.num}</div>
                <div style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.2rem,2vw,1.6rem)', fontWeight: 600, color: '#111111', marginBottom: 12 }}>{v.title}</div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(17,17,17,0.55)', lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.desc }} />
              </div>
            ))}
          </div>
        </div>

        {/* What we do */}
        <div style={{ padding: 'clamp(64px,8vw,120px) var(--container-px)', borderBottom: '1px solid rgba(17,17,17,0.07)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.35)', marginBottom: 48 }}>
            What we do
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {SERVICES.map((s, i) => (
              <div key={s.name} style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))',
                gap: 'clamp(16px,3vw,48px)',
                alignItems: 'start',
                padding: 'clamp(24px,3vw,40px) 0',
                borderTop: '1px solid rgba(17,17,17,0.07)',
              }}>
                <div style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.2rem,2.2vw,1.8rem)', fontWeight: 500, color: '#111111' }}>{s.name}</div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(17,17,17,0.55)', lineHeight: 1.75, margin: 0, maxWidth: 480 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: 'clamp(80px,10vw,140px) var(--container-px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 500, color: '#111111', lineHeight: 1.1, margin: 0, maxWidth: 700 }}>
            Ready to start a project?
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <Link href="/contact" className="btn-red">Get in touch</Link>
            <Link href="/portfolio" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(17,17,17,0.45)', textDecoration: 'none' }}>
              View our work →
            </Link>
          </div>
        </div>

        {/* Contact form */}
        <UnifiedForm
          heading="Start a Conversation"
          subheading="Tell us about your business and goals. We'll suggest the right services and get back to you within 24 hours."
          bgColor="#F8F8F8"
        />

      </div>
      <Footer />
    </>
  )
}
