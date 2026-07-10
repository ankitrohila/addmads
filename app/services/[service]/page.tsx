'use client'

import { useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MEGA_MENU_CATEGORIES } from '@/constants'
import Navbar from '@/components/Navbar'
import UnifiedForm from '@/components/UnifiedForm'
import FAQs from '@/components/FAQs'
import Footer from '@/components/Footer'
import ServiceCoverflow from '@/components/ServiceCoverflow'

gsap.registerPlugin(ScrollTrigger)

// ─── Service data map ────────────────────────────────────────────────────────
const SERVICE_DATA: Record<string, {
  title: string
  tagline: string
  description: string
  benefits: { title: string; body: string }[]
  process: { title: string; body: string }[]
  coverflow: { title: string; description: string; tag: string; href: string }[]
}> = {
  'performance-marketing': {
    title: 'Performance Marketing',
    tagline: 'Every Rupee Tracked. Every Result Measured.',
    description: 'We build high-ROAS ad campaigns across Google, Meta, and more — with transparent reporting and continuous optimisation to maximise your marketing ROI.',
    benefits: [
      { title: 'Google Ads & PPC', body: 'Search, display, and shopping campaigns engineered for conversions.' },
      { title: 'Meta / Facebook Ads', body: 'Precise audience targeting and creative testing on Facebook & Instagram.' },
      { title: 'Retargeting', body: 'Re-engage warm audiences and recover lost conversions at scale.' },
      { title: 'Funnel Optimisation', body: 'Full-funnel strategy from awareness to purchase and retention.' },
      { title: 'A/B Testing', body: 'Continuous creative and landing page testing to compound performance.' },
      { title: 'Transparent Reporting', body: 'Real-time dashboards and monthly deep-dive reports.' },
    ],
    process: [
      { title: 'Audit & Discovery', body: 'We audit your existing campaigns, accounts, and funnel.' },
      { title: 'Strategy', body: 'Channel mix, budget allocation, targeting, and creative direction.' },
      { title: 'Campaign Build', body: 'We set up campaigns with proper tracking and conversion events.' },
      { title: 'Launch & Monitor', body: 'Live monitoring in the first 72 hours and rapid adjustments.' },
      { title: 'Optimise', body: 'Weekly optimisation cycles based on performance data.' },
      { title: 'Report & Scale', body: 'Monthly reports + scaling winning campaigns.' },
    ],
    coverflow: [
      { title: 'Google Ads & PPC', description: 'Search, shopping, and display ads that capture buyers at the right moment.', tag: 'Search', href: '/services/performance-marketing/google-ads' },
      { title: 'Meta / Facebook Ads', description: 'Target your ideal customer on Facebook and Instagram with precision.', tag: 'Social', href: '/services/performance-marketing/meta-ads' },
      { title: 'Social Media Marketing', description: 'Organic and paid social strategies that build and convert audiences.', tag: 'Organic+Paid', href: '/services/performance-marketing/social-media' },
      { title: 'Email Marketing', description: 'Automated sequences and campaigns that nurture leads and drive repeat sales.', tag: 'Email', href: '/services/performance-marketing/email-marketing' },
      { title: 'Content Marketing', description: 'SEO content and thought leadership that builds long-term authority.', tag: 'Content', href: '/services/performance-marketing/content-marketing' },
      { title: 'Influencer Marketing', description: 'Authentic creator partnerships that drive awareness and conversions.', tag: 'Influencer', href: '/services/performance-marketing/influencer' },
    ],
  },
  'branding': {
    title: 'Branding',
    tagline: 'A Brand That People Remember, Trust, and Choose.',
    description: 'We build brand identities from the ground up — strategy, logo, visual language, voice, and guidelines — so your business stands out and stays consistent.',
    benefits: [
      { title: 'Brand Strategy', body: 'Market positioning, audience personas, and competitive differentiation.' },
      { title: 'Logo Design', body: 'Memorable, scalable logos that work across all contexts.' },
      { title: 'Visual Identity', body: 'Colour palette, typography, iconography, and visual system.' },
      { title: 'Brand Guidelines', body: 'A comprehensive brand book for consistent application everywhere.' },
      { title: 'Brand Voice', body: 'Messaging framework, tone of voice, and key messaging pillars.' },
      { title: 'Packaging Design', body: 'Eye-catching product packaging that stands out on shelf and online.' },
    ],
    process: [
      { title: 'Discovery', body: 'Research into your market, customers, and competitors.' },
      { title: 'Positioning', body: 'Define your brand promise, personality, and differentiation.' },
      { title: 'Concept Design', body: 'Multiple logo and visual concepts for your review.' },
      { title: 'Refinement', body: 'Iterate until the design perfectly reflects your brand.' },
      { title: 'Brand Book', body: 'Produce full brand guidelines documentation.' },
      { title: 'Rollout Support', body: 'Help applying your brand across all platforms and touchpoints.' },
    ],
    coverflow: [
      { title: 'Brand Strategy', description: 'Market positioning and brand architecture for long-term success.', tag: 'Strategy', href: '/services/branding/brand-strategy' },
      { title: 'Logo Design', description: 'Timeless, versatile logos that work everywhere.', tag: 'Logo', href: '/services/branding/logo-design' },
      { title: 'Visual Identity', description: 'Complete visual system — colours, fonts, imagery style.', tag: 'Identity', href: '/services/branding/visual-identity' },
      { title: 'Brand Guidelines', description: 'Comprehensive brand book for consistent application.', tag: 'Guidelines', href: '/services/branding/brand-guidelines' },
      { title: 'Brand Voice', description: 'Tone of voice and messaging that resonates with your audience.', tag: 'Voice', href: '/services/branding/brand-voice' },
      { title: 'Packaging Design', description: 'Product packaging that converts at the shelf and online.', tag: 'Packaging', href: '/services/branding/packaging' },
    ],
  },
  'seo': {
    title: 'SEO Services',
    tagline: 'Rank Higher. Get Found. Grow Organically.',
    description: 'Comprehensive SEO strategies — technical, on-page, off-page, local, and e-commerce — that build lasting organic traffic and reduce dependency on paid ads.',
    benefits: [
      { title: 'Technical SEO', body: 'Site speed, Core Web Vitals, crawlability, schema markup.' },
      { title: 'On-Page SEO', body: 'Keyword optimisation, content structure, and meta optimisation.' },
      { title: 'Off-Page & Links', body: 'High-authority backlink building through white-hat strategies.' },
      { title: 'Local SEO', body: 'Google Business Profile, local citations, and local keyword targeting.' },
      { title: 'E-commerce SEO', body: 'Product page, category page, and site structure optimisation.' },
      { title: 'Monthly Reporting', body: 'Detailed ranking, traffic, and ROI reports every month.' },
    ],
    process: [
      { title: 'SEO Audit', body: 'Comprehensive technical and content audit of your site.' },
      { title: 'Keyword Research', body: 'High-value keyword identification and gap analysis.' },
      { title: 'On-Page Work', body: 'Optimise all pages, meta, content, and internal links.' },
      { title: 'Technical Fixes', body: 'Speed, mobile, Core Web Vitals, and schema implementation.' },
      { title: 'Link Building', body: 'Ongoing white-hat link acquisition campaigns.' },
      { title: 'Track & Report', body: 'Monthly performance reports and continuous optimisation.' },
    ],
    coverflow: [
      { title: 'Technical SEO', description: 'Fix the foundation — speed, structure, and crawlability.', tag: 'Technical', href: '/services/seo/technical-seo' },
      { title: 'On-Page SEO', description: 'Keyword-rich content and metadata that ranks.', tag: 'On-Page', href: '/services/seo/on-page' },
      { title: 'Off-Page & Links', description: 'Authority-building backlinks from real, relevant sources.', tag: 'Off-Page', href: '/services/seo/off-page' },
      { title: 'Local SEO', description: 'Dominate local search and Google Maps results.', tag: 'Local', href: '/services/seo/local-seo' },
      { title: 'E-commerce SEO', description: 'Optimise product and category pages for buyer intent keywords.', tag: 'E-commerce', href: '/services/seo/ecommerce-seo' },
      { title: 'YouTube SEO', description: 'Rank your videos on YouTube and Google search.', tag: 'YouTube', href: '/services/seo/youtube-seo' },
    ],
  },
  'graphics-design': {
    title: 'Graphics & Design',
    tagline: 'Visuals That Stop the Scroll and Tell Your Story.',
    description: 'From social media creatives to UI/UX and motion graphics — we create stunning visual content that captures attention, builds brand recognition, and drives action.',
    benefits: [
      { title: 'Graphic Design', body: 'Brochures, banners, ads, and all print and digital collateral.' },
      { title: 'UI/UX Design', body: 'User-first interface and experience design for web and mobile.' },
      { title: 'Motion Graphics', body: 'Animated videos, reels, and ads that stand out in feeds.' },
      { title: 'Print Design', body: 'Business cards, packaging, catalogues, and all print materials.' },
      { title: 'Social Creatives', body: 'Thumb-stopping posts, stories, and ad creatives for all platforms.' },
      { title: 'Presentation Design', body: 'Investor decks, pitch presentations, and reports that impress.' },
    ],
    process: [
      { title: 'Brief', body: 'Understand your brand, audience, and design objectives.' },
      { title: 'Concept', body: 'Develop multiple creative directions for review.' },
      { title: 'Design', body: 'Produce high-fidelity designs with your feedback.' },
      { title: 'Revise', body: 'Unlimited revisions until you are 100% satisfied.' },
      { title: 'Deliver', body: 'All files in required formats — print-ready and digital.' },
      { title: 'Support', body: '30 days post-delivery support for any adjustments.' },
    ],
    coverflow: [
      { title: 'Graphic Design', description: 'All print and digital design needs handled by our team.', tag: 'Design', href: '/services/graphics-design/graphic-design' },
      { title: 'UI/UX Design', description: 'Interfaces that are beautiful, intuitive, and conversion-optimised.', tag: 'UI/UX', href: '/services/graphics-design/ui-ux' },
      { title: 'Motion Graphics', description: 'Animated content that gets shared and remembered.', tag: 'Motion', href: '/services/graphics-design/motion' },
      { title: 'Print Design', description: 'Professional print materials that make the right impression.', tag: 'Print', href: '/services/graphics-design/print' },
      { title: 'Social Creatives', description: 'Platform-native creatives that drive engagement and clicks.', tag: 'Social', href: '/services/graphics-design/social-creatives' },
      { title: 'Presentation Design', description: 'Stunning decks that help you win deals and close funding.', tag: 'Presentation', href: '/services/graphics-design/presentation' },
    ],
  },
  'it-services': {
    title: 'IT Services',
    tagline: 'Build Fast. Build Right. Build to Scale.',
    description: 'End-to-end web and app development across every major platform and framework — WordPress, Shopify, React, Next.js, Laravel, Web Apps, SaaS, Landing Pages, and AI solutions.',
    benefits: [
      { title: 'WordPress Development', body: 'Custom themes, plugins, and WooCommerce stores.' },
      { title: 'Shopify / E-commerce', body: 'High-converting Shopify stores and custom ecommerce solutions.' },
      { title: 'React & Next.js', body: 'Fast, SEO-optimised web apps with modern frontend frameworks.' },
      { title: 'PHP / Laravel', body: 'Robust backend development for complex web applications.' },
      { title: 'Web Apps & SaaS', body: 'Full-stack SaaS products from MVP to enterprise scale.' },
      { title: 'AI & Automation', body: 'AI-powered tools, chatbots, and workflow automation.' },
    ],
    process: [
      { title: 'Discovery', body: 'Scope, tech stack selection, and project planning.' },
      { title: 'Design', body: 'UI/UX wireframes and visual design approved by you.' },
      { title: 'Development', body: 'Agile sprints with regular demo sessions.' },
      { title: 'QA & Testing', body: 'Comprehensive testing across devices and browsers.' },
      { title: 'Deployment', body: 'Launch to production with full monitoring setup.' },
      { title: 'Support', body: '30 days free support, then flexible retainer options.' },
    ],
    coverflow: [
      { title: 'WordPress', description: 'Custom WordPress sites, themes, and WooCommerce stores.', tag: 'CMS', href: '/services/it-services/wordpress' },
      { title: 'Shopify', description: 'High-converting ecommerce stores on the world\'s best platform.', tag: 'E-commerce', href: '/services/it-services/shopify' },
      { title: 'React & Next.js', description: 'Blazing-fast web apps with server-side rendering and SEO.', tag: 'Frontend', href: '/services/it-services/react-nextjs' },
      { title: 'PHP / Laravel', description: 'Scalable backend systems for complex business logic.', tag: 'Backend', href: '/services/it-services/laravel' },
      { title: 'Webflow / Wix', description: 'No-code to low-code solutions for rapid launches.', tag: 'No-Code', href: '/services/it-services/webflow-wix' },
      { title: 'Web Apps & SaaS', description: 'Full-stack SaaS products built for scale.', tag: 'SaaS', href: '/services/it-services/web-apps' },
      { title: 'Landing Pages', description: 'Conversion-optimised landing pages that turn clicks into leads.', tag: 'CRO', href: '/services/it-services/landing-pages' },
      { title: 'AI & Automation', description: 'AI-powered tools, chatbots, and business process automation.', tag: 'AI', href: '/services/it-services/ai-automation' },
    ],
  },
  'social-media': {
    title: 'Social Media Management',
    tagline: 'Build a Community. Drive Engagement. Grow Your Brand.',
    description: 'We manage your entire social media presence — content creation, community management, analytics, and growth strategy — across Instagram, Facebook, LinkedIn, Twitter, and more.',
    benefits: [
      { title: 'Content Creation', body: 'Regular, platform-native content tailored to your audience.' },
      { title: 'Community Management', body: 'Active engagement with followers and brand community building.' },
      { title: 'Content Calendar', body: 'Strategic planning and scheduling for consistent posting.' },
      { title: 'Analytics & Reporting', body: 'Monthly reports on reach, engagement, and follower growth.' },
      { title: 'Growth Strategy', body: 'Proven tactics to grow followers and build brand authority.' },
      { title: 'Paid Social Integration', body: 'Boost top-performing posts and run targeted ad campaigns.' },
    ],
    process: [
      { title: 'Audit', body: 'Review of your current profiles, content, and competitors.' },
      { title: 'Strategy', body: 'Content pillars, tone of voice, and posting cadence.' },
      { title: 'Content Calendar', body: 'Monthly content planned and approved in advance.' },
      { title: 'Create & Post', body: 'High-quality content produced and published on schedule.' },
      { title: 'Engage', body: 'Daily community management and audience interaction.' },
      { title: 'Report', body: 'Monthly analytics report with insights and next month planning.' },
    ],
    coverflow: [
      { title: 'Instagram Management', description: 'Aesthetic feeds, reels, and stories that grow your following.', tag: 'Instagram', href: '/services/social-media' },
      { title: 'Facebook Management', description: 'Page management, content, and community engagement on Facebook.', tag: 'Facebook', href: '/services/social-media' },
      { title: 'LinkedIn Marketing', description: 'B2B-focused content and thought leadership on LinkedIn.', tag: 'LinkedIn', href: '/services/social-media' },
      { title: 'Content Creation', description: 'Graphics, reels, carousels, and copy for all platforms.', tag: 'Content', href: '/services/social-media' },
      { title: 'Community Management', description: '24/7 engagement with your audience across all platforms.', tag: 'Community', href: '/services/social-media' },
      { title: 'Influencer Outreach', description: 'Connect with relevant creators for authentic partnerships.', tag: 'Influencer', href: '/services/social-media' },
    ],
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.service as string
  const data = SERVICE_DATA[slug]

  const heroRef     = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<(HTMLElement | null)[]>([])
  const processRef  = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelectorAll('[data-a]') ?? [],
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power4.out', stagger: 0.1, delay: 0.2 }
      )
      const scrollAnim = (els: (HTMLElement | null)[], trigger: string) => {
        const valid = els.filter(Boolean) as HTMLElement[]
        gsap.fromTo(valid, { opacity: 0, y: 32 }, {
          opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger, start: 'top 78%', toggleActions: 'play none none none' },
        })
      }
      scrollAnim(benefitsRef.current, '#benefits')
      scrollAnim(processRef.current, '#process')
    })
    return () => ctx.revert()
  }, [slug])

  const category = MEGA_MENU_CATEGORIES.find(c => c.id === slug || c.href === `/services/${slug}`)

  if (!data) {
    return (
      <>
        <Navbar />
        <main style={{ paddingTop: 'var(--nav-h)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 24 }}>
          <h1 style={{ fontFamily: 'var(--font-tight)', fontSize: '2.5rem', color: '#111111' }}>Service Not Found</h1>
          <Link href="/services" style={{ padding: '12px 32px', background: '#E60000', color: '#FFFFFF', textDecoration: 'none', borderRadius: 6, fontFamily: 'var(--font-sans)', fontWeight: 600 }}>← Back to Services</Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Cursor />
      <Navbar />

      <main style={{ paddingTop: 'var(--nav-h)' }}>

        {/* ── HERO ── */}
        <section ref={heroRef} style={{ background: '#FFFFFF', color: '#111111', padding: 'clamp(100px,14vw,180px) var(--container-px)', minHeight: '55vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: 860, position: 'relative', zIndex: 1 }}>
            <div data-a style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <Link href="/services" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(17,17,17,0.4)', textDecoration: 'none' }}>Services</Link>
              <span style={{ color: 'rgba(17,17,17,0.2)' }}>›</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: '#E60000' }}>{data.title}</span>
            </div>
            <h1 data-a style={{ opacity: 0, fontFamily: 'var(--font-tight)', fontSize: 'clamp(2.5rem,8vw,5.5rem)', fontWeight: 700, lineHeight: 1.1, color: '#111111', marginBottom: 20 }}>
              {data.title}
            </h1>
            <p data-a style={{ opacity: 0, fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.125rem,2vw,1.5rem)', fontWeight: 400, color: '#E60000', marginBottom: 20, fontStyle: 'italic' }}>
              {data.tagline}
            </p>
            <p data-a style={{ opacity: 0, fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9375rem,1.3vw,1.125rem)', color: 'rgba(17,17,17,0.55)', lineHeight: 1.75, maxWidth: 620, marginBottom: 40 }}>
              {data.description}
            </p>
            <div data-a style={{ opacity: 0 }}>
              <Link href="/contact" className="btn-red" style={{ padding: '14px 32px', fontSize: '1rem', fontWeight: 600 }}>Get Started Today</Link>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section id="benefits" style={{ background: '#F8F8F8', padding: 'clamp(80px,10vw,140px) var(--container-px)' }}>
          <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: '#111111', marginBottom: 48, lineHeight: 1.2 }}>
            What We Deliver
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {data.benefits.map((b, i) => (
              <div key={i} ref={el => { benefitsRef.current[i] = el }} style={{ opacity: 0, background: '#FFFFFF', borderLeft: '3px solid #E60000', borderRadius: '0 8px 8px 0', padding: '24px 28px' }}>
                <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.125rem', fontWeight: 600, color: '#111111', marginBottom: 10 }}>{b.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(17,17,17,0.6)', lineHeight: 1.65, margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── COVERFLOW — related services ── */}
        <ServiceCoverflow
          title={`Explore ${data.title} Services`}
          cards={data.coverflow}
        />

        {/* ── PROCESS ── */}
        <section id="process" style={{ background: '#FFFFFF', padding: 'clamp(80px,10vw,140px) var(--container-px)' }}>
          <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: '#111111', marginBottom: 48, lineHeight: 1.2 }}>
            Our Process
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 32 }}>
            {data.process.map((step, i) => (
              <div key={i} ref={el => { processRef.current[i] = el }} style={{ opacity: 0 }}>
                <div style={{ fontFamily: 'var(--font-tight)', fontSize: '3rem', fontWeight: 700, color: '#E60000', opacity: 0.35, lineHeight: 1, marginBottom: 16 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.25rem', fontWeight: 600, color: '#111111', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(17,17,17,0.55)', lineHeight: 1.65, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── OTHER SERVICES ── */}
        {category && (
          <section style={{ background: '#F5F5F5', padding: 'clamp(60px,8vw,100px) var(--container-px)' }}>
            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 700, color: '#111111', marginBottom: 32 }}>
              Also in {data.title}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {category.services.map(svc => (
                <Link key={svc.href} href={svc.href} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 20px',
                  background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.1)', borderRadius: 6,
                  fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: '#111111', textDecoration: 'none',
                  transition: 'all 0.25s',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#E60000'; el.style.color = '#E60000' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(17,17,17,0.1)'; el.style.color = '#111111' }}>
                  {svc.label} →
                </Link>
              ))}
            </div>
          </section>
        )}

        <UnifiedForm showLeftInfo={false} bgColor="#F8F8F8" />
        <FAQs />
      </main>

      <Footer />
    </>
  )
}
