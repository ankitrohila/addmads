import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UnifiedForm from '@/components/UnifiedForm'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Case Studies — Real Results from Real Clients | AddMads',
  description: 'Detailed case studies showing how AddMads delivered measurable ROI through performance marketing, SEO, branding, and web development for clients across India and USA.',
  openGraph: {
    title: 'Case Studies — Real Results from Real Clients | AddMads',
    description: 'See how AddMads delivered 4× ROAS, 280% more leads, and 190% organic traffic growth for businesses across industries.',
    type: 'website',
    url: 'https://www.addmads.com/case-studies',
  },
  alternates: { canonical: 'https://www.addmads.com/case-studies' },
}

interface Result { label: string; value: string; icon: string }
interface CaseStudy {
  slug: string
  client: string
  industry: string
  location: string
  service: string
  serviceSlug: string
  duration: string
  tagline: string
  challenge: string
  approach: { step: string; detail: string }[]
  results: Result[]
  quote: string
  quoteAuthor: string
  img: string
  color: string
  accentLight: string
}

const CASES: CaseStudy[] = [
  {
    slug: 'us-home-services-google-ads',
    client: 'US Home Services Network',
    industry: 'Home Services',
    location: 'California & Texas, USA',
    service: 'Google Ads & PPC',
    serviceSlug: 'performance-marketing',
    duration: '4 months',
    tagline: '4.2× ROAS and 41% lower CPC for multi-location plumbing and HVAC businesses.',
    challenge: 'Three home service businesses — plumbing, HVAC, and electrical — were running Google Ads with a shared agency that treated them identically. CPL was $180+ per lead, ROAS was 1.4×, and the campaigns had zero geographic differentiation despite serving distinct ZIP code clusters.',
    approach: [
      { step: 'Account audit & restructure', detail: 'Separated all three accounts. Built ZIP-code-level ad groups for each city cluster. Created separate campaigns for emergency services (24/7) vs. scheduled maintenance vs. installation.' },
      { step: 'Call-only & responsive ads', detail: 'Deployed call-only ads for emergency intent keywords ("burst pipe repair now", "AC not working"). Built responsive search ads for planned services with 15+ headline variants each.' },
      { step: 'Negative keyword buildout', detail: 'Added 400+ negative keywords including DIY, YouTube, free, and competitor brand terms that were wasting 22% of budget.' },
      { step: 'Landing page per service type', detail: 'Created dedicated landing pages for each service category with local trust signals, review badges, and ZIP-specific headlines. Conversion rate went from 4% to 11%.' },
      { step: 'Bid strategy rotation', detail: 'Ran Target CPA bidding for stable service types, Maximize Conversions for emergency campaigns during peak weather periods. Adjusted bids by time-of-day for highest-intent windows.' },
    ],
    results: [
      { label: 'ROAS', value: '4.2×', icon: '📈' },
      { label: 'CPC reduction', value: '41%', icon: '💰' },
      { label: 'Lead volume increase', value: '+230%', icon: '📞' },
      { label: 'Cost per lead', value: '$48 avg', icon: '🎯' },
    ],
    quote: 'We had tried three agencies before AddMads. None of them understood local service businesses. Within 60 days our phone was ringing non-stop — at half the cost.',
    quoteAuthor: 'Operations Director, US Home Services Network',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=600&fit=crop&q=80',
    color: '#1a73e8',
    accentLight: '#e8f0fe',
  },
  {
    slug: 'bluebells-luxury-real-estate',
    client: 'Bluebells Luxury Real Estate',
    industry: 'Real Estate',
    location: 'Sonipat & NCR, India',
    service: 'Meta Ads + Performance Marketing',
    serviceSlug: 'performance-marketing',
    duration: '3 months',
    tagline: '280% increase in qualified buyer inquiries from Meta Ads, including 34% NRI leads.',
    challenge: 'A premium real estate brand selling high-ticket properties (₹80L–₹3Cr) was generating plenty of form fills but almost no qualified buyers. Most leads were curious browsers, not buyers. The sales team was overwhelmed with unqualified calls.',
    approach: [
      { step: 'Audience segmentation', detail: 'Split campaigns into three distinct audiences: (1) NRI buyers — Indian diaspora in UAE, UK, USA, Canada using income + interests targeting; (2) HNI domestic buyers — 35–55 age, luxury lifestyle interests; (3) Investor segment — people who had visited competitor real estate sites.' },
      { step: 'Creative by audience intent', detail: 'NRI campaign: video ads showing lifestyle and investment ROI. HNI campaign: property walkthrough video + developer credibility. Investor campaign: direct ROI comparison vs. mutual funds.' },
      { step: 'Lead qualification funnel', detail: 'Replaced the standard form with a 4-step qualifying form (budget range, timeline, property type, employment status). Reduced unqualified leads by 64% while maintaining volume.' },
      { step: 'Retargeting sequences', detail: 'Built 30-day retargeting that served different content based on depth of engagement: site visitors saw property highlights; video viewers saw testimonials; form starters saw urgency content.' },
      { step: 'WhatsApp integration', detail: 'Connected Meta Lead Ads directly to a WhatsApp Business CRM for instant follow-up. Response time went from 4 hours to under 8 minutes.' },
    ],
    results: [
      { label: 'Qualified inquiries', value: '+280%', icon: '🏠' },
      { label: 'Cost per qualified lead', value: '↓58%', icon: '💰' },
      { label: 'NRI lead share', value: '34%', icon: '🌍' },
      { label: 'Sales team efficiency', value: '3× better', icon: '📊' },
    ],
    quote: 'We went from 10 unqualified calls a day to 25 genuinely interested buyers a week. The NRI segment alone closed two units in the first month.',
    quoteAuthor: 'Sales Head, Bluebells Luxury Real Estate',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop&q=80',
    color: '#C82A2A',
    accentLight: '#fce8e8',
  },
  {
    slug: 'maxvolt-energy-seo',
    client: 'Maxvolt Energy',
    industry: 'Industrial Energy',
    location: 'Haryana, India',
    service: 'SEO + Content Marketing',
    serviceSlug: 'seo',
    duration: '6 months',
    tagline: 'From zero digital presence to 140+ ranking keywords and 320% more B2B inbound leads.',
    challenge: 'Maxvolt Energy had an outdated website, zero blog presence, and no organic visibility. All leads came from cold outreach and referrals. As competitors began investing in digital, Maxvolt was being left behind in search visibility despite being technically superior.',
    approach: [
      { step: 'Technical SEO foundation', detail: 'Fixed 47 crawl errors, implemented schema markup for the organisation, products, and FAQ pages. Moved to HTTPS, fixed duplicate content across product variants, and implemented proper hreflang for Hindi content.' },
      { step: 'Keyword research & mapping', detail: 'Identified 280 high-intent B2B keywords across solar, UPS, and industrial power categories. Mapped them to new and existing pages. Focused on transactional long-tails ("industrial solar panel supplier Haryana") first for faster conversion.' },
      { step: 'Content authority program', detail: 'Published 18 long-form articles (2,500–4,000 words each) on energy cost reduction, solar ROI calculations, and UPS selection guides. Each article targeted a cluster of related keywords and was supported by infographics.' },
      { step: 'Local SEO', detail: 'Optimised Google Business Profile with 150+ categories, weekly posts, product catalogue, and Q&A. Built consistent NAP citations across 40+ directories. Result: Maxvolt now appears in top 3 local pack results for industrial power Haryana.' },
      { step: 'Lead magnet + email capture', detail: 'Created a Solar ROI Calculator tool that captured email in exchange for a personalized report. Generated 420 qualified email subscribers in 6 months — now a direct nurture pipeline.' },
    ],
    results: [
      { label: 'Keywords ranking', value: '140+', icon: '🔍' },
      { label: 'Organic traffic growth', value: '+320%', icon: '📈' },
      { label: 'Inbound B2B leads', value: '+320%', icon: '🏭' },
      { label: 'Domain Authority', value: '28 → 41', icon: '🔗' },
    ],
    quote: 'We used to depend entirely on word of mouth. Now our website brings us serious industrial inquiries every week. The Solar ROI Calculator alone brought us 3 large contracts.',
    quoteAuthor: 'Director, Maxvolt Energy',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=600&fit=crop&q=80',
    color: '#f59e0b',
    accentLight: '#fef9ee',
  },
  {
    slug: 'aima-digital-marketing',
    client: 'AIMA — All India Management Association',
    industry: 'Education & Institutions',
    location: 'Pan India',
    service: 'Digital Marketing + SEO',
    serviceSlug: 'seo',
    duration: '5 months',
    tagline: '156% more organic traffic and 4,200 new email subscribers for one of India\'s premier management bodies.',
    challenge: 'AIMA is a 60-year-old institution with enormous offline authority but weak digital presence among the younger professionals and MBA aspirants they needed to reach. Email lists were stagnant, and event registrations relied entirely on partner channels.',
    approach: [
      { step: 'Content strategy for MBA aspirants', detail: 'Created a content calendar targeting high-volume MBA and management certification keywords. Published guides on management exams, career development, and leadership skills — topics AIMA had deep expertise in but hadn\'t published online.' },
      { step: 'YouTube pre-roll campaign', detail: 'Ran 15-second unskippable ads targeting students near management exam dates. Ads showed AIMA\'s credibility and certification value proposition. Cost per view: ₹0.28.' },
      { step: 'LinkedIn professional outreach', detail: 'Built a LinkedIn campaign targeting HR managers and professionals with 3–7 years of experience. Content focused on management certifications for career advancement. Drove 1,400 LinkedIn followers in 90 days.' },
      { step: 'Email nurture automation', detail: 'Set up 6-step drip sequences for event registrants and certification inquirers. Open rates hit 41% (vs. 22% industry average) by personalizing by management domain.' },
      { step: 'Schema + AEO optimization', detail: 'Structured all event pages and FAQ content for AI Overviews and featured snippets. AIMA now appears in Google AI Overviews for 14 high-volume management certification queries.' },
    ],
    results: [
      { label: 'Organic traffic growth', value: '+156%', icon: '📈' },
      { label: 'New email subscribers', value: '+4,200', icon: '📧' },
      { label: 'Event registrations', value: '+88%', icon: '🎯' },
      { label: 'LinkedIn followers gained', value: '+1,400', icon: '💼' },
    ],
    quote: 'AddMads understood that AIMA needed to reach a new generation without losing institutional gravitas. The content strategy struck exactly the right tone.',
    quoteAuthor: 'Head of Communications, AIMA',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop&q=80',
    color: '#6366f1',
    accentLight: '#eef2ff',
  },
  {
    slug: 'avg-logistics-digital-transformation',
    client: 'AVG Logistics',
    industry: 'B2B Logistics',
    location: 'Haryana & NCR, India',
    service: 'Google Ads + SEO + Web Development',
    serviceSlug: 'it-services',
    duration: '4 months',
    tagline: '190% more organic traffic and 145% more B2B inquiries — from a complete digital overhaul.',
    challenge: 'AVG Logistics had no website, no Google presence, and relied entirely on agent networks and referrals. As e-commerce grew, so did competition, and AVG was invisible to the growing segment of businesses searching online for logistics partners.',
    approach: [
      { step: 'Website design & development', detail: 'Built a Next.js website optimised for speed and SEO. Created service pages for each logistics vertical (3PL, last-mile delivery, warehousing). Included a quote calculator and service inquiry form tied to CRM.' },
      { step: 'Google Ads — B2B targeting', detail: 'Launched Search campaigns targeting decision-maker intent: "3PL warehouse Delhi NCR", "logistics company Haryana". Created separate campaigns for e-commerce brands vs. manufacturers vs. distributors.' },
      { step: 'SEO + Local citations', detail: 'Published 12 industry articles on logistics trends and cost optimization. Built 35 business directory citations. Optimized Google Business Profile. Within 90 days: appearing on Page 1 for 28 target keywords.' },
      { step: 'LinkedIn Sales Navigator outreach', detail: 'Identified and directly approached 200+ supply chain managers and procurement heads monthly. 18% connection acceptance rate; 6% converted to inquiry calls — a ₹380 average cost per qualified B2B lead.' },
    ],
    results: [
      { label: 'Organic traffic growth', value: '+190%', icon: '📈' },
      { label: 'B2B inquiries per month', value: '+145%', icon: '🏭' },
      { label: 'Cost per B2B lead', value: '₹380', icon: '💰' },
      { label: 'Page 1 keyword rankings', value: '28', icon: '🔍' },
    ],
    quote: 'Before AddMads, nobody found us online. Now we get 15–20 quality B2B inquiries every month, and our cost of customer acquisition is a fraction of what we paid agents.',
    quoteAuthor: 'Managing Director, AVG Logistics',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop&q=80',
    color: '#2d6a4f',
    accentLight: '#e6f4ee',
  },
  {
    slug: 'brandforce360-branding-authority',
    client: 'Brandforce360',
    industry: 'B2B Services — Marketing Agency',
    location: 'India',
    service: 'Branding + Content Authority',
    serviceSlug: 'branding',
    duration: '3 months',
    tagline: '340% brand search growth and 160% more retainer inquiries through authority-first positioning.',
    challenge: 'Brandforce360 had rebranded but had no content strategy, no case studies published, and was competing for retainer clients primarily on price. The founder had deep expertise but no digital presence to reflect it.',
    approach: [
      { step: 'Founder thought leadership', detail: 'Set up a LinkedIn content program for the founder: 3 posts per week mixing original insights, tactical breakdowns, and client result teasers. Content was drafted collaboratively, authentic to their voice. 0 → 4,800 followers in 90 days.' },
      { step: 'Case study content program', detail: 'Worked with clients to document 6 detailed case studies with specific metrics. Published as long-form blog posts, LinkedIn carousels, and gated PDF lead magnets. Now the #1 trust-builder in sales calls.' },
      { step: 'SEO blog for agency comparison queries', detail: 'Targeted queries like "digital marketing agency Haryana", "performance marketing agency India review", "best ROI marketing agency 2025". Produced 8 articles in 90 days, ranking on Page 1 for 4 within 60 days.' },
      { step: 'Google Ads — retainer intent targeting', detail: 'Ran a focused Google Ads campaign targeting businesses searching for marketing retainers and agency services. Monthly ad budget: ₹25,000. Generated 18 qualified inquiries in month 1.' },
    ],
    results: [
      { label: 'Brand search volume', value: '+340%', icon: '🔍' },
      { label: 'Retainer inquiries', value: '+160%', icon: '📞' },
      { label: 'LinkedIn impressions/mo', value: '85K+', icon: '💼' },
      { label: 'Sales call conversion', value: '+45%', icon: '🤝' },
    ],
    quote: 'The case study program changed everything. Every prospect we talk to has already read about our results before the call. It is the best asset we have ever built.',
    quoteAuthor: 'Founder, Brandforce360',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80',
    color: '#7c3aed',
    accentLight: '#f3eeff',
  },
]

function formatResult(r: Result) {
  return (
    <div key={r.label} className="text-center p-4 bg-white rounded-xl border border-black/[0.07]">
      <div style={{ fontSize: '1.8rem', lineHeight: 1, marginBottom: 6 }}>{r.icon}</div>
      <div style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: '#111', lineHeight: 1 }}>{r.value}</div>
      <div style={{ fontSize: '0.78rem', color: '#777', marginTop: 6, lineHeight: 1.4 }}>{r.label}</div>
    </div>
  )
}

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: '#111', color: '#fff', paddingTop: 'calc(var(--nav-h) + clamp(64px,10vw,120px))', paddingBottom: 'clamp(64px,8vw,100px)', padding: `calc(var(--nav-h) + clamp(64px,10vw,120px)) var(--container-px) clamp(64px,8vw,100px)` }}>
          <div style={{ maxWidth: 860 }}>
            <Reveal>
              <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C82A2A', marginBottom: 20 }}>
                Case Studies
              </p>
              <h1 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2.5rem,7vw,5rem)', fontWeight: 700, lineHeight: 1.08, marginBottom: 24 }}>
                Real clients. Real strategies.<br />Measurable results.
              </h1>
              <p style={{ fontSize: 'clamp(1rem,1.4vw,1.2rem)', color: 'rgba(255,255,255,0.65)', maxWidth: 580, lineHeight: 1.7 }}>
                End-to-end case studies across performance marketing, SEO, branding, and web development — with the exact strategies that drove the outcomes.
              </p>
            </Reveal>

            {/* Stats strip */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { v: '60+', l: 'Clients delivered' },
                { v: '4×+', l: 'Avg ROI delivered' },
                { v: '7 yrs', l: 'In the industry' },
                { v: '₹0', l: 'Hidden fees, ever' },
              ].map(s => (
                <div key={s.l} style={{ borderLeft: '2px solid #C82A2A', paddingLeft: 16 }}>
                  <div style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <div style={{ background: '#F5F5F5' }}>
          {CASES.map((c, i) => (
            <article key={c.slug} id={c.slug}
              style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', padding: 'clamp(56px,7vw,96px) var(--container-px)' }}>
              <div style={{ maxWidth: 1160, margin: '0 auto' }}>

                {/* Top meta */}
                <Reveal>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                    {[c.service, c.industry, c.location, c.duration].map(tag => (
                      <span key={tag} style={{ fontSize: '0.72rem', fontWeight: 600, color: '#666', background: '#fff', border: '1px solid rgba(0,0,0,0.1)', padding: '4px 12px', borderRadius: 999 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>

                {/* Hero image + heading */}
                <Reveal delay={60}>
                  <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', marginBottom: 40, aspectRatio: '21/7' }}>
                    <Image src={c.img} alt={c.client} fill sizes="(max-width: 768px) 92vw, 1100px"
                           style={{ objectFit: 'cover' }} unoptimized />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${c.color}cc 0%, ${c.color}22 60%, transparent 100%)` }} />
                    <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', padding: 'clamp(24px,4vw,56px)' }}>
                      <div style={{ maxWidth: '50ch' }}>
                        <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 12 }}>
                          Case Study {String(i + 1).padStart(2, '0')}
                        </p>
                        <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.4rem,3vw,2.4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 12 }}>
                          {c.client}
                        </h2>
                        <p style={{ fontSize: 'clamp(0.9rem,1.2vw,1.05rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                          {c.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <div style={{ display: 'grid', gap: 'clamp(32px,4vw,56px)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'start' }}>
                  {/* Left: challenge + approach */}
                  <div>
                    <Reveal>
                      <div style={{ marginBottom: 32 }}>
                        <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: 12 }}>
                          The Challenge
                        </h3>
                        <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.75 }}>{c.challenge}</p>
                      </div>
                    </Reveal>

                    <Reveal delay={80}>
                      <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: 16 }}>
                        What We Did
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {c.approach.map((a, j) => (
                          <div key={j} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                            <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: c.accentLight, border: `2px solid ${c.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: c.color }}>
                              {j + 1}
                            </div>
                            <div>
                              <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111', marginBottom: 4 }}>{a.step}</p>
                              <p style={{ fontSize: '0.84rem', color: '#555', lineHeight: 1.65 }}>{a.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Reveal>
                  </div>

                  {/* Right: results + quote */}
                  <div>
                    <Reveal delay={120}>
                      <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: 16 }}>
                        Results
                      </h3>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
                        {c.results.map(r => formatResult(r))}
                      </div>
                    </Reveal>

                    <Reveal delay={160}>
                      <blockquote style={{ background: c.accentLight, borderLeft: `4px solid ${c.color}`, borderRadius: '0 12px 12px 0', padding: 'clamp(20px,3vw,28px)', margin: 0 }}>
                        <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#333', lineHeight: 1.7, marginBottom: 14 }}>
                          &ldquo;{c.quote}&rdquo;
                        </p>
                        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#666' }}>— {c.quoteAuthor}</p>
                      </blockquote>
                    </Reveal>

                    <Reveal delay={200}>
                      <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <Link href="/contact"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 22px', background: '#111', color: '#fff', borderRadius: 999, fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>
                          Get similar results →
                        </Link>
                        <Link href={`/services/${c.serviceSlug}`}
                          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 22px', background: 'transparent', color: '#111', border: '1.5px solid rgba(0,0,0,0.2)', borderRadius: 999, fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>
                          {c.service} service
                        </Link>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <UnifiedForm
          heading="Ready to be our next case study?"
          subheading="Tell us your biggest growth challenge — we'll build a strategy to fix it and a measurable outcome to prove it worked."
        />
      </main>
      <Footer />
    </>
  )
}
