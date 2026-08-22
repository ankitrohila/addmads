import type { Metadata } from 'next'
import type { ReactNode } from 'react'
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

interface Result { label: string; value: string; icon: ReactNode }
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

const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
const ico = (paths: ReactNode) => <svg width="22" height="22" viewBox="0 0 24 24" {...S}>{paths}</svg>

const ICONS = {
  trending:  ico(<><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></>),
  money:     ico(<><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>),
  phone:     ico(<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>),
  target:    ico(<><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>),
  home:      ico(<><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>),
  globe:     ico(<><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>),
  chart:     ico(<><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></>),
  search:    ico(<><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>),
  building:  ico(<><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></>),
  link:      ico(<><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"/><line x1="8" y1="12" x2="16" y2="12"/></>),
  mail:      ico(<><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>),
  briefcase: ico(<><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>),
  users:     ico(<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>),
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
      { label: 'ROAS', value: '4.2×', icon: ICONS.trending },
      { label: 'CPC reduction', value: '41%', icon: ICONS.money },
      { label: 'Lead volume increase', value: '+230%', icon: ICONS.phone },
      { label: 'Cost per lead', value: '$48 avg', icon: ICONS.target },
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
      { label: 'Qualified inquiries', value: '+280%', icon: ICONS.home },
      { label: 'Cost per qualified lead', value: '↓58%', icon: ICONS.money },
      { label: 'NRI lead share', value: '34%', icon: ICONS.globe },
      { label: 'Sales team efficiency', value: '3× better', icon: ICONS.chart },
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
      { label: 'Keywords ranking', value: '140+', icon: ICONS.search },
      { label: 'Organic traffic growth', value: '+320%', icon: ICONS.trending },
      { label: 'Inbound B2B leads', value: '+320%', icon: ICONS.building },
      { label: 'Domain Authority', value: '28 → 41', icon: ICONS.link },
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
      { label: 'Organic traffic growth', value: '+156%', icon: ICONS.trending },
      { label: 'New email subscribers', value: '+4,200', icon: ICONS.mail },
      { label: 'Event registrations', value: '+88%', icon: ICONS.target },
      { label: 'LinkedIn followers gained', value: '+1,400', icon: ICONS.briefcase },
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
      { label: 'Organic traffic growth', value: '+190%', icon: ICONS.trending },
      { label: 'B2B inquiries per month', value: '+145%', icon: ICONS.building },
      { label: 'Cost per B2B lead', value: '₹380', icon: ICONS.money },
      { label: 'Page 1 keyword rankings', value: '28', icon: ICONS.search },
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
      { label: 'Brand search volume', value: '+340%', icon: ICONS.trending },
      { label: 'Retainer inquiries', value: '+160%', icon: ICONS.phone },
      { label: 'LinkedIn impressions/mo', value: '85K+', icon: ICONS.briefcase },
      { label: 'Sales call conversion', value: '+45%', icon: ICONS.users },
    ],
    quote: 'The case study program changed everything. Every prospect we talk to has already read about our results before the call. It is the best asset we have ever built.',
    quoteAuthor: 'Founder, Brandforce360',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80',
    color: '#7c3aed',
    accentLight: '#f3eeff',
  },
  {
    slug: 'natureskin-d2c-ecommerce-meta-google-ads',
    client: 'NatureSkin D2C',
    industry: 'D2C Skincare & Beauty',
    location: 'Pan India (Delhi, Mumbai, Bengaluru)',
    service: 'Meta Ads + Google Ads',
    serviceSlug: 'performance-marketing',
    duration: '5 months',
    tagline: '5.1× ROAS and ₹80L in tracked revenue from a combined Meta + Google funnel for a D2C skincare brand.',
    challenge: 'NatureSkin D2C had strong organic traction and a loyal Instagram following but was stuck at ₹12–15L monthly GMV. Paid ads had been tried through two previous agencies — both delivered below 2× ROAS. The founder wanted to scale to ₹1Cr/month GMV without destroying profitability.',
    approach: [
      { step: 'Funnel architecture rebuild', detail: 'Separated cold, warm, and hot audiences across Meta and Google into distinct campaigns. Cold: Broad + Lookalike audiences on Meta + Discovery campaigns on Google. Warm: video viewers and site visitors. Hot: cart abandoners and past purchasers. Each layer received different creative and bid logic.' },
      { step: 'Creative testing at scale', detail: 'Produced 24 ad creatives in month 1: UGC-style reviews, ingredient highlight reels, before/after comparisons, and founder story videos. Tested 3 hooks per format. The winning UGC hook — a 15-second "I switched to this and never looked back" style video — drove 64% of total revenue.' },
      { step: 'Google Shopping + Performance Max', detail: 'Set up a product feed with optimised titles, descriptions, and custom labels (bestseller, new, high-margin). Launched Shopping and Performance Max with separate budgets. Shopping alone achieved 6.2× ROAS on branded queries.' },
      { step: 'Retention and LTV strategy', detail: 'Built a post-purchase Meta sequence targeting buyers with complementary products at day 7, 21, and 45. Added a "replenishment reminder" campaign at day 35 targeting single-purchase customers. LTV increased 38% in 90 days.' },
      { step: 'Profit-first scaling', detail: 'Used a contribution margin calculator to track profitability at campaign level, not just ROAS. Paused campaigns below 3.5× ROAS, scaled those above 5×. Gross profit margin maintained throughout the scale-up.' },
    ],
    results: [
      { label: 'Blended ROAS', value: '5.1×', icon: ICONS.trending },
      { label: 'Monthly GMV', value: '₹80L+', icon: ICONS.money },
      { label: 'Revenue growth', value: '+440%', icon: ICONS.chart },
      { label: 'Customer acquisition cost', value: '↓52%', icon: ICONS.target },
    ],
    quote: 'We had wasted almost ₹6L on two agencies who ran the same boosted posts template. AddMads rebuilt everything from scratch and within 3 months we crossed ₹50L monthly GMV for the first time.',
    quoteAuthor: 'Founder, NatureSkin D2C',
    img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1200&h=600&fit=crop&q=80',
    color: '#d97706',
    accentLight: '#fef3c7',
  },
  {
    slug: 'vitacare-clinics-local-seo-google-ads',
    client: 'VitaCare Multi-Specialty Clinics',
    industry: 'Healthcare — Multi-Specialty Clinics',
    location: 'Sonipat, Panipat & Karnal, Haryana',
    service: 'Local SEO + Google Ads',
    serviceSlug: 'seo',
    duration: '6 months',
    tagline: '180% more appointment bookings and top-3 Google Maps ranking across 3 clinic locations in Haryana.',
    challenge: 'VitaCare had three clinic locations across Sonipat, Panipat, and Karnal but almost zero online presence. 95% of appointments came through walk-ins and doctor referrals. Younger patients (25–40) were searching online for doctors and choosing competitors who appeared in Google Maps. VitaCare was invisible for even brand-name searches.',
    approach: [
      { step: 'Google Business Profile buildout', detail: 'Created and verified three separate GBP listings — one per location. Added 40+ relevant categories per listing, complete service menus, booking links, opening hours, holiday schedules, and 80+ photos including clinic interiors, team photos, and patient-education graphics. All three listings were optimised with GBP attributes for accessibility and special care.' },
      { step: 'Local keyword strategy', detail: 'Identified 120 high-intent local keywords: "dermatologist in Sonipat", "gynaecologist near me Panipat", "best orthopaedic doctor Karnal". Created dedicated service + location landing pages for each specialty × location combination (18 pages total).' },
      { step: 'Review velocity campaign', detail: 'Set up an in-clinic review request system: every discharged patient received an SMS with a QR code linking to the Google review form. 180+ genuine reviews collected across three listings in 90 days. Average rating: 4.8 stars. Reviews were responded to within 24 hours using templated but personalised responses.' },
      { step: 'Google Ads — appointment intent campaigns', detail: 'Launched Search campaigns targeting "book appointment [specialty] [city]" and "walk-in clinic [city] open now" queries. Used call extensions and online booking links. Cost per booked appointment: ₹220 on average.' },
      { step: 'Health content + FAQ schema', detail: 'Published 24 patient-education articles (symptoms, treatment options, recovery guides) structured with FAQ schema. Four articles won Google AI Overview placements for patient queries like "how to treat knee pain without surgery Haryana".' },
    ],
    results: [
      { label: 'Appointment bookings', value: '+180%', icon: ICONS.phone },
      { label: 'Google Maps ranking', value: 'Top 3', icon: ICONS.target },
      { label: 'Monthly organic traffic', value: '+290%', icon: ICONS.trending },
      { label: 'Cost per appointment', value: '₹220', icon: ICONS.money },
    ],
    quote: 'We went from 2 online appointments a week to 25+ per week across all three clinics. Patients now tell us they found us on Google, which never happened before. The review program alone changed how new patients see us.',
    quoteAuthor: 'CEO, VitaCare Multi-Specialty Clinics',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop&q=80',
    color: '#0891b2',
    accentLight: '#e0f2fe',
  },
]

function formatResult(r: Result) {
  return (
    <div key={r.label} className="text-center p-4 bg-white rounded-xl border border-black/[0.07]">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8, color: '#C82A2A' }}>{r.icon}</div>
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
