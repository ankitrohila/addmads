'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Navbar from '@/components/Navbar'
import UnifiedForm from '@/components/UnifiedForm'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

// ─── IT Services web projects ───────────────────────────────────────────────
interface WebProject { name: string; url: string; domain: string; category: string; liveHero?: boolean }

const WEB_PROJECTS: WebProject[] = [
  { name: 'Bluebells Luxury Real Estate', url: 'https://bluebellsluxury.com/',             domain: 'bluebellsluxury.com',        category: 'Real Estate',        liveHero: true },
  { name: 'IBFW Weddings',                url: 'https://ibfwweddings.com/',                domain: 'ibfwweddings.com',            category: 'Events & Lifestyle', liveHero: true },
  { name: 'Little Riders Cup',            url: 'https://littleriddercup.com/',             domain: 'littleriddercup.com',         category: 'Sports & Kids',      liveHero: true },
  { name: 'Flowvillas',                   url: 'https://flowvillas.in/',                   domain: 'flowvillas.in',              category: 'Travel & Hospitality' },
  { name: 'ABS Vacations',               url: 'https://absvacations.com/',                domain: 'absvacations.com',            category: 'Travel & Hospitality' },
  { name: 'Mike Diamond Plumbing',        url: 'https://mikediamondservices.com/',         domain: 'mikediamondservices.com',     category: 'Home Services (USA)' },
  { name: 'ALL-ISR',                      url: 'https://www.allisr.com/',                  domain: 'allisr.com',                 category: 'Home Services (USA)' },
  { name: 'Chilly-Billy Heating',         url: 'https://www.hirechillybilly.com/',         domain: 'hirechillybilly.com',         category: 'Home Services (USA)' },
  { name: 'James Armstrong Plumbing',     url: 'https://www.jamesarmstrongplumbing.com/', domain: 'jamesarmstrongplumbing.com',  category: 'Home Services (USA)' },
  { name: 'AIMA',                         url: 'https://www.aima.in/',                     domain: 'aima.in',                    category: 'Corporate & Institutions' },
  { name: 'Ananta Centre',               url: 'https://anantacentre.in/',                 domain: 'anantacentre.in',            category: 'Corporate & Institutions' },
  { name: 'BYST',                         url: 'https://byst.org.in/',                     domain: 'byst.org.in',                category: 'Corporate & Institutions' },
  { name: 'EMS-Works',                    url: 'https://ems-works.com/',                   domain: 'ems-works.com',              category: 'Corporate & Institutions' },
  { name: 'Enseur',                       url: 'https://enseur.in/',                       domain: 'enseur.in',                  category: 'Corporate & Institutions' },
  { name: 'Brandforce 360',              url: 'https://www.brandforce360.com/',           domain: 'brandforce360.com',          category: 'Corporate & Institutions' },
  { name: 'AVG Logistics',               url: 'https://avglogistics.com/',                domain: 'avglogistics.com',           category: 'Industry & Manufacturing' },
  { name: 'Maxvolt Energy',              url: 'https://www.maxvoltenergy.com/',           domain: 'maxvoltenergy.com',          category: 'Industry & Manufacturing' },
  { name: 'Netexpress UAE',              url: 'https://netexpressuae.com/',               domain: 'netexpressuae.com',          category: 'Industry & Manufacturing' },
  { name: 'Super Pattern',               url: 'https://superpattern.in/',                 domain: 'superpattern.in',            category: 'Industry & Manufacturing' },
  { name: 'Boxica Packaging',            url: 'https://boxika.in/',                       domain: 'boxika.in',                  category: 'Industry & Manufacturing' },
  { name: 'PD Metals Craft',             url: 'https://pdmetalcraft.co.in/',              domain: 'pdmetalcraft.co.in',         category: 'Industry & Manufacturing' },
  { name: 'R S Solar',                   url: 'https://rssolar.in/',                      domain: 'rssolar.in',                 category: 'Industry & Manufacturing' },
  { name: 'Shambhu Dayal School',        url: 'https://shambhudayalschool.in/',           domain: 'shambhudayalschool.in',      category: 'Education & Local' },
  { name: 'GSIL Edu. Society',           url: 'https://gsiledusociety.com/',              domain: 'gsiledusociety.com',         category: 'Education & Local' },
  { name: 'Vidyarthi Juniors',           url: 'https://vidyarthijuniors.com/',            domain: 'vidyarthijuniors.com',       category: 'Education & Local' },
  { name: 'Ohmypet Grooming',            url: 'https://ohmypetgrooming.in/',              domain: 'ohmypetgrooming.in',         category: 'Education & Local' },
]

// ─── Marketing strategy cards ───────────────────────────────────────────────
interface MarketingCase {
  client: string
  industry: string
  service: string
  challenge: string
  strategy: string
  results: { label: string; value: string }[]
  img: string
  href: string
  color: string
}

const MARKETING_CASES: MarketingCase[] = [
  {
    client: 'US Home Services Network',
    industry: 'Home Services — USA',
    service: 'Google Ads & PPC',
    challenge: 'Low lead volume at high CPL for plumbing & HVAC service businesses across California and Texas.',
    strategy: 'Restructured campaigns into hyper-local ad groups by ZIP code. Deployed call-only ads for emergency services, added negative keyword lists, and built dedicated landing pages per service type. Weekly bid strategy rotation based on conversion lag data.',
    results: [
      { label: 'ROAS', value: '4.2×' },
      { label: 'CPC reduction', value: '41%' },
      { label: 'Qualified leads/mo', value: '+230%' },
    ],
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=640&h=400&fit=crop&q=80',
    href: '/case-studies',
    color: '#1a73e8',
  },
  {
    client: 'Bluebells Luxury Real Estate',
    industry: 'Real Estate — India',
    service: 'Meta Ads + Performance Marketing',
    challenge: 'High-ticket real estate struggling to generate qualified buyer inquiries in a competitive NCR market.',
    strategy: 'Developed separate campaigns for NRI buyers (targeting diaspora audiences globally) and HNI domestic buyers (income + interest stacking). Created video ad creatives showcasing property walkthroughs. Ran retargeting sequences to warm leads over 30-day windows.',
    results: [
      { label: 'Qualified inquiries', value: '+280%' },
      { label: 'Cost per qualified lead', value: '↓58%' },
      { label: 'NRI lead share', value: '34%' },
    ],
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=640&h=400&fit=crop&q=80',
    href: '/case-studies',
    color: '#C82A2A',
  },
  {
    client: 'AVG Logistics',
    industry: 'B2B Logistics — Haryana',
    service: 'Google Ads + SEO + LinkedIn',
    challenge: 'A growing logistics company invisible online in a field dominated by larger, older brands.',
    strategy: 'Led a 3-channel strategy: Google Search Ads targeting decision-maker keywords ("logistics company Haryana", "3PL warehouse NCR"), SEO with location + service schema, and LinkedIn outreach campaign targeting supply chain managers. Built landing pages with specific industry trust signals.',
    results: [
      { label: 'Organic traffic', value: '+190%' },
      { label: 'B2B inquiries/mo', value: '+145%' },
      { label: 'Cost per B2B lead', value: '₹380' },
    ],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&h=400&fit=crop&q=80',
    href: '/case-studies',
    color: '#2d6a4f',
  },
  {
    client: 'Maxvolt Energy',
    industry: 'Energy — Haryana',
    service: 'SEO + Content + Lead Generation',
    challenge: 'Industrial energy solutions brand with no digital presence in a sector where buyers research extensively before contacting.',
    strategy: 'Produced 18 deep-content articles targeting long-tail B2B queries ("solar panel installation for factory", "industrial UPS system India"). Built technical SEO foundations, implemented FAQ schema on all service pages, and created a lead magnet (ROI calculator for solar) to capture emails.',
    results: [
      { label: 'Organic keywords ranking', value: '140+' },
      { label: 'Inbound B2B leads', value: '+320%' },
      { label: 'Domain Authority', value: '28 → 41' },
    ],
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=640&h=400&fit=crop&q=80',
    href: '/case-studies',
    color: '#f59e0b',
  },
  {
    client: 'AIMA — India',
    industry: 'Education & Institutions',
    service: 'Digital Marketing + SEO',
    challenge: 'One of India\'s most respected management associations needed to grow awareness among a younger generation of business professionals and students.',
    strategy: 'Revamped website content structure around high-intent MBA and management terms. Ran YouTube pre-roll ads to students near management exam season. Created content series on LinkedIn targeting HR professionals and young managers. Email nurture sequences for event attendees.',
    results: [
      { label: 'Organic traffic', value: '+156%' },
      { label: 'Email signups', value: '+4,200' },
      { label: 'Event registrations', value: '+88%' },
    ],
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=640&h=400&fit=crop&q=80',
    href: '/case-studies',
    color: '#6366f1',
  },
  {
    client: 'Brandforce360',
    industry: 'B2B Services',
    service: 'Branding + Performance Marketing',
    challenge: 'A rebranded agency needed to establish authority and generate retainer clients in a crowded digital marketing space.',
    strategy: 'Built a full content authority strategy: founder thought leadership articles on LinkedIn (published 3×/week), SEO blog targeting agency-comparison and service queries, Google Ads campaign targeting decision-makers searching for agency services, and a case study content program to demonstrate past results.',
    results: [
      { label: 'Brand search volume', value: '+340%' },
      { label: 'Retainer client inquiries', value: '+160%' },
      { label: 'LinkedIn impressions/mo', value: '85K+' },
    ],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&h=400&fit=crop&q=80',
    href: '/case-studies',
    color: '#7c3aed',
  },
]

// ─── Social Media cards ─────────────────────────────────────────────────────
interface SocialCard {
  brand: string
  handle: string
  platform: string
  platformUrl: string
  industry: string
  followerGrowth: string
  engagementRate: string
  reach: string
  strategy: string
  color: string
  platformIcon: React.ReactNode
}

const igIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
)
const fbIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const liIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const SOCIAL_CARDS: SocialCard[] = [
  {
    brand: 'AddMads',
    handle: '@theaddmads',
    platform: 'Instagram',
    platformUrl: 'https://www.instagram.com/theaddmads/',
    industry: 'Digital Marketing Agency',
    followerGrowth: '+1,200 in 90 days',
    engagementRate: '6.8%',
    reach: '42K+ monthly',
    strategy: 'Education-first content: carousel posts breaking down ad strategies, reels on performance marketing tips, and behind-the-scenes agency content. 3 posts/week, all created in-house.',
    color: '#E1306C',
    platformIcon: igIcon,
  },
  {
    brand: 'Bluebells Luxury Real Estate',
    handle: 'Bluebells Luxury',
    platform: 'Instagram',
    platformUrl: 'https://www.instagram.com/',
    industry: 'Real Estate — NCR',
    followerGrowth: '+800 in 60 days',
    engagementRate: '4.2%',
    reach: '18K+ monthly',
    strategy: 'Aspirational lifestyle content showcasing properties. Video walkthroughs, client testimonials, and local area highlight reels to attract HNI buyers.',
    color: '#C82A2A',
    platformIcon: igIcon,
  },
  {
    brand: 'Maxvolt Energy',
    handle: 'Maxvolt Energy',
    platform: 'LinkedIn',
    platformUrl: 'https://linkedin.com/',
    industry: 'Industrial Energy',
    followerGrowth: '+450 in 90 days',
    engagementRate: '3.9%',
    reach: '12K+ monthly',
    strategy: 'B2B authority content: energy cost-saving calculations, solar ROI case studies, and industry insight posts targeting facility managers and procurement heads.',
    color: '#0A66C2',
    platformIcon: liIcon,
  },
  {
    brand: 'AIMA',
    handle: 'AIMA India',
    platform: 'Facebook + LinkedIn',
    platformUrl: 'https://www.facebook.com/',
    industry: 'Management Institution',
    followerGrowth: '+2,100 in 90 days',
    engagementRate: '5.1%',
    reach: '55K+ monthly',
    strategy: 'Event-driven content calendar with exam dates, MBA insights, and guest speaker highlights. Boosted posts during registration windows drove 88% increase in event signups.',
    color: '#1877F2',
    platformIcon: fbIcon,
  },
  {
    brand: 'AVG Logistics',
    handle: 'AVG Logistics India',
    platform: 'LinkedIn',
    platformUrl: 'https://linkedin.com/',
    industry: 'B2B Logistics',
    followerGrowth: '+320 in 60 days',
    engagementRate: '4.7%',
    reach: '9K+ monthly',
    strategy: 'Supply chain education content and operational excellence posts. Targeted supply chain decision-makers via LinkedIn Sales Navigator for outreach alongside organic content.',
    color: '#0A66C2',
    platformIcon: liIcon,
  },
  {
    brand: 'Ohmypet Grooming',
    handle: '@ohmypetgrooming',
    platform: 'Instagram',
    platformUrl: 'https://www.instagram.com/',
    industry: 'Pet Care Services',
    followerGrowth: '+1,500 in 90 days',
    engagementRate: '9.4%',
    reach: '28K+ monthly',
    strategy: 'Pet transformation reels (before/after grooming), client dog & cat features, and local community building. Highest organic reach in category for Noida region.',
    color: '#E1306C',
    platformIcon: igIcon,
  },
]

// ─── Live hero iframe card ───────────────────────────────────────────────────
function LiveHeroCard({ project }: { project: WebProject }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const iframeRef  = useRef<HTMLIFrameElement>(null)
  const [src, setSrc]     = useState('')
  const [ready, setReady] = useState(false)

  useEffect(() => { setSrc(project.url) }, [project.url])

  useEffect(() => {
    const wrapper = wrapperRef.current
    const iframe  = iframeRef.current
    if (!wrapper || !iframe) return
    const update = () => { iframe.style.transform = `scale(${wrapper.offsetWidth / 1440})` }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(wrapper)
    return () => ro.disconnect()
  }, [src])

  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer"
       className="group block bg-white border border-black/[0.07] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.1)]">
      <div ref={wrapperRef} className="relative aspect-[16/10] overflow-hidden bg-[#F0F0F0]">
        {!ready && <div className="absolute inset-0 flex items-center justify-center"><span className="text-[0.72rem] text-[#bbb]">Loading…</span></div>}
        {src && (
          <iframe ref={iframeRef} src={src} title={project.name} onLoad={() => setReady(true)}
            style={{ position:'absolute',top:0,left:0,width:1440,height:900,border:'none',pointerEvents:'none',transformOrigin:'top left',opacity:ready?1:0,transition:'opacity 0.5s ease' }} />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/45 transition-colors duration-300">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ padding:'10px 22px',background:'#fff',borderRadius:1000,fontFamily:'var(--font-tight)',fontSize:'0.85rem',fontWeight:500,color:'#111',whiteSpace:'nowrap' }}>
            Visit live site ↗
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 style={{ fontFamily:'var(--font-tight)',fontSize:'1.05rem',fontWeight:500 }}>{project.name}</h3>
            <p className="mt-1 text-[0.8rem] text-[#888]">{project.domain}</p>
          </div>
          <span className="mt-0.5 shrink-0 px-3 py-1 text-[0.68rem] text-black/50 bg-black/[0.04] rounded-full whitespace-nowrap">{project.category}</span>
        </div>
      </div>
    </a>
  )
}

function PortfolioCard({ project }: { project: WebProject }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer"
       className="group block bg-white border border-black/[0.07] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.1)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F3F3F3]">
        <Image src={`/portfolio/${project.domain}.jpg`} alt={`${project.name} — homepage`} fill
               sizes="(max-width: 640px) 92vw, (max-width: 1280px) 46vw, 30vw"
               className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/45 transition-colors duration-300">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ padding:'10px 22px',background:'#fff',borderRadius:1000,fontFamily:'var(--font-tight)',fontSize:'0.85rem',fontWeight:500,color:'#111',whiteSpace:'nowrap' }}>
            Visit live site ↗
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 style={{ fontFamily:'var(--font-tight)',fontSize:'1.05rem',fontWeight:500 }}>{project.name}</h3>
            <p className="mt-1 text-[0.8rem] text-[#888]">{project.domain}</p>
          </div>
          <span className="mt-0.5 shrink-0 px-3 py-1 text-[0.68rem] text-black/50 bg-black/[0.04] rounded-full whitespace-nowrap">{project.category}</span>
        </div>
      </div>
    </a>
  )
}

const TABS = ['Marketing', 'Social Media', 'IT & Web Projects'] as const
type Tab = typeof TABS[number]

export default function PortfolioPage() {
  const [tab, setTab] = useState<Tab>('Marketing')

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-white" style={{ paddingTop:'calc(var(--nav-h) + clamp(48px,7vw,96px))', paddingBottom:'clamp(40px,6vw,72px)' }}>
          <div className="container-x">
            <Reveal>
              <p className="eyebrow mb-5">Our Work</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="h-display text-[#111]" style={{ fontSize:'clamp(2.4rem,6.5vw,5.5rem)' }}>
                Strategy, results, and real sites.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-[#555] max-w-[58ch]" style={{ fontSize:'clamp(1rem,1.3vw,1.15rem)' }}>
                Marketing campaigns that drove ROI, social channels we grew, and websites we built — across 60+ clients, 7 years, multiple industries.
              </p>
            </Reveal>

            {/* Tab switcher */}
            <Reveal delay={200}>
              <div className="mt-10 flex gap-2 flex-wrap">
                {TABS.map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    className={clsx(
                      'px-5 py-[10px] text-[0.9rem] font-semibold rounded-full border transition-all duration-300',
                      tab === t
                        ? 'bg-[#111] text-white border-[#111]'
                        : 'bg-transparent text-black/60 border-black/[0.14] hover:border-black/40'
                    )}>
                    {t}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Marketing tab ─────────────────────────────────────────────── */}
        {tab === 'Marketing' && (
          <section style={{ background:'#F5F5F5', padding:'clamp(48px,6vw,80px) 0' }}>
            <div className="container-x">
              <div className="mb-10">
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-[#C82A2A] mb-3">Performance Marketing</p>
                <h2 style={{ fontFamily:'var(--font-tight)',fontSize:'clamp(1.6rem,3.5vw,2.8rem)',fontWeight:700,color:'#111',maxWidth:'42ch',lineHeight:1.2 }}>
                  Strategies that drove revenue for real businesses
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {MARKETING_CASES.map((c, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden border border-black/[0.06] flex flex-col">
                    <div className="relative" style={{ height:200, overflow:'hidden' }}>
                      <Image src={c.img} alt={c.client} fill sizes="(max-width:768px) 92vw, 45vw"
                             className="object-cover" unoptimized />
                      <div style={{ position:'absolute',inset:0,background:`linear-gradient(to top, ${c.color}ee 0%, transparent 60%)` }} />
                      <div style={{ position:'absolute',bottom:16,left:20,right:20 }}>
                        <span style={{ fontSize:'0.68rem',fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',color:'rgba(255,255,255,0.8)',background:'rgba(0,0,0,0.3)',padding:'3px 10px',borderRadius:999,backdropFilter:'blur(4px)' }}>
                          {c.service}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-4">
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[#888] mb-1">{c.industry}</p>
                        <h3 style={{ fontFamily:'var(--font-tight)',fontSize:'1.1rem',fontWeight:700,color:'#111',lineHeight:1.3 }}>{c.client}</h3>
                      </div>
                      <p style={{ fontSize:'0.82rem',color:'#555',lineHeight:1.6,marginBottom:16 }}>{c.strategy}</p>
                      <div className="grid grid-cols-3 gap-2 mt-auto pt-4 border-t border-black/[0.07]">
                        {c.results.map((r, j) => (
                          <div key={j} className="text-center">
                            <p style={{ fontFamily:'var(--font-tight)',fontSize:'1.15rem',fontWeight:700,color:c.color,lineHeight:1 }}>{r.value}</p>
                            <p style={{ fontSize:'0.65rem',color:'#888',marginTop:3,lineHeight:1.3 }}>{r.label}</p>
                          </div>
                        ))}
                      </div>
                      <Link href="/case-studies"
                        style={{ display:'inline-flex',alignItems:'center',gap:4,marginTop:16,fontSize:'0.82rem',fontWeight:600,color:'#C82A2A',textDecoration:'none' }}>
                        Full case study →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Social Media tab ──────────────────────────────────────────── */}
        {tab === 'Social Media' && (
          <section style={{ background:'#F5F5F5', padding:'clamp(48px,6vw,80px) 0' }}>
            <div className="container-x">
              <div className="mb-10">
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-[#C82A2A] mb-3">Social Media Results</p>
                <h2 style={{ fontFamily:'var(--font-tight)',fontSize:'clamp(1.6rem,3.5vw,2.8rem)',fontWeight:700,color:'#111',maxWidth:'44ch',lineHeight:1.2 }}>
                  Channels we grew — and the strategy behind each
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {SOCIAL_CARDS.map((c, i) => (
                  <a key={i} href={c.platformUrl} target="_blank" rel="noopener noreferrer"
                     className="group bg-white rounded-2xl overflow-hidden border border-black/[0.06] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)]"
                     style={{ textDecoration:'none',color:'inherit' }}>
                    {/* Header bar */}
                    <div style={{ background:c.color, padding:'20px 24px 16px' }}>
                      <div className="flex items-center justify-between mb-3">
                        <div style={{ color:'#fff',opacity:0.9 }}>{c.platformIcon}</div>
                        <span style={{ fontSize:'0.7rem',fontWeight:600,color:'rgba(255,255,255,0.85)',background:'rgba(255,255,255,0.18)',padding:'3px 10px',borderRadius:999 }}>
                          {c.platform}
                        </span>
                      </div>
                      <h3 style={{ fontFamily:'var(--font-tight)',fontSize:'1.1rem',fontWeight:700,color:'#fff',lineHeight:1.3 }}>{c.brand}</h3>
                      <p style={{ fontSize:'0.78rem',color:'rgba(255,255,255,0.75)',marginTop:2 }}>{c.handle}</p>
                    </div>
                    {/* Stats */}
                    <div className="grid grid-cols-3 divide-x divide-black/[0.07] border-b border-black/[0.07]">
                      {[
                        { label:'Follower growth', value:c.followerGrowth },
                        { label:'Engagement', value:c.engagementRate },
                        { label:'Monthly reach', value:c.reach },
                      ].map((s, j) => (
                        <div key={j} className="p-3 text-center">
                          <p style={{ fontFamily:'var(--font-tight)',fontSize:'0.95rem',fontWeight:700,color:'#111',lineHeight:1 }}>{s.value}</p>
                          <p style={{ fontSize:'0.62rem',color:'#888',marginTop:3,lineHeight:1.3 }}>{s.label}</p>
                        </div>
                      ))}
                    </div>
                    {/* Strategy */}
                    <div className="p-5 flex-1">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.07em] text-[#888] mb-2">{c.industry}</p>
                      <p style={{ fontSize:'0.83rem',color:'#444',lineHeight:1.6 }}>{c.strategy}</p>
                    </div>
                    <div className="px-5 pb-5">
                      <span style={{ fontSize:'0.8rem',fontWeight:600,color:c.color }} className="group-hover:underline">
                        View profile ↗
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── IT & Web Projects tab ──────────────────────────────────────── */}
        {tab === 'IT & Web Projects' && (
          <section style={{ background:'#F5F5F5', padding:'clamp(48px,6vw,80px) 0' }}>
            <div className="container-x">
              <div className="mb-10">
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-[#C82A2A] mb-3">IT & Web Development</p>
                <h2 style={{ fontFamily:'var(--font-tight)',fontSize:'clamp(1.6rem,3.5vw,2.8rem)',fontWeight:700,color:'#111',maxWidth:'40ch',lineHeight:1.2 }}>
                  {WEB_PROJECTS.length}+ live sites — hover any card to visit
                </h2>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {WEB_PROJECTS.map(p =>
                  p.liveHero
                    ? <LiveHeroCard key={p.domain} project={p} />
                    : <PortfolioCard key={p.domain} project={p} />
                )}
              </div>
            </div>
          </section>
        )}

        <UnifiedForm
          heading="Want your business on this wall?"
          subheading="Tell us about your project — we'll reply within 24 hours with a plan and pricing."
        />
      </main>
      <Footer />
    </>
  )
}
