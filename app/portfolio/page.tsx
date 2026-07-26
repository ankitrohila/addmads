'use client'

import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import Navbar from '@/components/Navbar'
import UnifiedForm from '@/components/UnifiedForm'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

interface Project {
  name: string
  url: string
  domain: string
  category: string
  /** true = confirmed embeddable; false = falls back to screenshot */
  embeds: boolean
}

const PROJECTS: Project[] = [
  { name: 'Bluebells Luxury Real Estate', url: 'https://bluebellsluxury.com/',            domain: 'bluebellsluxury.com',         category: 'Real Estate & Lifestyle',    embeds: true },
  { name: 'IBFW Weddings',                url: 'https://ibfwweddings.com/',               domain: 'ibfwweddings.com',             category: 'Real Estate & Lifestyle',    embeds: true },
  { name: 'Little Riders Cup',            url: 'https://littleriddercup.com/',            domain: 'littleriddercup.com',          category: 'Real Estate & Lifestyle',    embeds: true },
  { name: 'Flowvillas',                   url: 'https://flowvillas.in/',                  domain: 'flowvillas.in',               category: 'Travel & Hospitality',       embeds: true },
  { name: 'ABS Vacations',                url: 'https://absvacations.com/',               domain: 'absvacations.com',             category: 'Travel & Hospitality',       embeds: true },
  { name: 'Mike Diamond Plumbing',        url: 'https://mikediamondservices.com/',        domain: 'mikediamondservices.com',      category: 'Home Services (USA)',         embeds: true },
  { name: 'ALL-ISR',                      url: 'https://www.allisr.com/',                 domain: 'allisr.com',                  category: 'Home Services (USA)',         embeds: true },
  { name: 'Chilly-Billy Heating & Cooling', url: 'https://www.hirechillybilly.com/',     domain: 'hirechillybilly.com',          category: 'Home Services (USA)',         embeds: true },
  { name: 'James Armstrong Plumbing',     url: 'https://www.jamesarmstrongplumbing.com/', domain: 'jamesarmstrongplumbing.com',  category: 'Home Services (USA)',         embeds: true },
  { name: 'AIMA',                         url: 'https://www.aima.in/',                    domain: 'aima.in',                     category: 'Corporate & Institutions',   embeds: true },
  { name: 'Ananta Centre',                url: 'https://anantacentre.in/',                domain: 'anantacentre.in',             category: 'Corporate & Institutions',   embeds: true },
  { name: 'BYST',                         url: 'https://byst.org.in/',                    domain: 'byst.org.in',                 category: 'Corporate & Institutions',   embeds: true },
  { name: 'EMS-Works',                    url: 'https://ems-works.com/',                  domain: 'ems-works.com',               category: 'Corporate & Institutions',   embeds: true },
  { name: 'Enseur',                       url: 'https://enseur.in/',                      domain: 'enseur.in',                   category: 'Corporate & Institutions',   embeds: true },
  { name: 'Brandforce 360',               url: 'https://www.brandforce360.com/',          domain: 'brandforce360.com',           category: 'Corporate & Institutions',   embeds: true },
  { name: 'AVG Logistics',                url: 'https://avglogistics.com/',               domain: 'avglogistics.com',            category: 'Industry & Manufacturing',   embeds: true },
  { name: 'Maxvolt Energy',               url: 'https://www.maxvoltenergy.com/',          domain: 'maxvoltenergy.com',           category: 'Industry & Manufacturing',   embeds: true },
  { name: 'Netexpress UAE',               url: 'https://netexpressuae.com/',              domain: 'netexpressuae.com',           category: 'Industry & Manufacturing',   embeds: true },
  { name: 'Super Pattern',                url: 'https://superpattern.in/',                domain: 'superpattern.in',             category: 'Industry & Manufacturing',   embeds: true },
  { name: 'Boxica Packaging',             url: 'https://boxika.in/',                      domain: 'boxika.in',                   category: 'Industry & Manufacturing',   embeds: true },
  { name: 'PD Metals Craft',              url: 'https://pdmetalcraft.co.in/',             domain: 'pdmetalcraft.co.in',          category: 'Industry & Manufacturing',   embeds: true },
  { name: 'R S Solar',                    url: 'https://rssolar.in/',                     domain: 'rssolar.in',                  category: 'Industry & Manufacturing',   embeds: true },
  { name: 'Shambhu Dayal School',         url: 'https://shambhudayalschool.in/',          domain: 'shambhudayalschool.in',       category: 'Education & Local Business', embeds: true },
  { name: 'GSIL Edu. Society',            url: 'https://gsiledusociety.com/',             domain: 'gsiledusociety.com',          category: 'Education & Local Business', embeds: true },
  { name: 'Vidyarthi Juniors',            url: 'https://vidyarthijuniors.com/',           domain: 'vidyarthijuniors.com',        category: 'Education & Local Business', embeds: true },
  { name: 'Ohmypet Grooming',             url: 'https://ohmypetgrooming.in/',             domain: 'ohmypetgrooming.in',          category: 'Education & Local Business', embeds: true },
  { name: 'Softhics',                     url: 'https://softhics.com/',                   domain: 'softhics.com',                category: 'Education & Local Business', embeds: true },
]

const CATEGORIES = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))]

// ─── Live iframe card ─────────────────────────────────────────────────────────
// Each card lazy-loads its iframe when the card scrolls into view (rootMargin 300px).
// A transparent overlay prevents the iframe from capturing scroll while the user
// is just browsing — click the card to activate scroll, click outside to release.
function LivePreviewCard({ project }: { project: Project }) {
  const [iframeSrc, setIframeSrc] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [interactive, setInteractive] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Lazy-load: inject src when card enters viewport
  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIframeSrc(project.url)
          io.disconnect()
        }
      },
      { rootMargin: '300px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [project.url])

  // Release interactive mode when user clicks outside the card
  useEffect(() => {
    if (!interactive) return
    const release = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setInteractive(false)
      }
    }
    document.addEventListener('mousedown', release)
    return () => document.removeEventListener('mousedown', release)
  }, [interactive])

  return (
    <div
      ref={cardRef}
      className="group bg-white border border-black/[0.07] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_56px_rgba(0,0,0,0.10)]"
    >
      {/* ── Iframe preview window ── */}
      <div className="relative" style={{ height: 460 }}>

        {/* Skeleton shimmer while loading */}
        {(!iframeSrc || !loaded) && !blocked && (
          <div className="absolute inset-0 bg-[#F3F3F3]">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.6) 50%,transparent 100%)',
                  animation: 'shimmer 1.6s infinite',
                  backgroundSize: '200% 100%',
                }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[0.75rem] text-[#aaa] font-medium tracking-wide">Loading {project.domain}…</span>
            </div>
          </div>
        )}

        {/* Blocked fallback */}
        {blocked && (
          <div className="absolute inset-0 bg-[#F3F3F3] flex flex-col items-center justify-center gap-2">
            <span className="text-[0.75rem] text-[#aaa]">Preview unavailable</span>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
              style={{ padding: '8px 18px', fontSize: '0.78rem' }}
            >
              Visit site ↗
            </a>
          </div>
        )}

        {/* Live iframe */}
        {iframeSrc && !blocked && (
          <iframe
            src={iframeSrc}
            title={project.name}
            onLoad={() => setLoaded(true)}
            onError={() => setBlocked(true)}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
              // disable pointer events until user activates — lets page scroll normally
              pointerEvents: interactive ? 'auto' : 'none',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />
        )}

        {/* Click-to-scroll overlay (non-interactive state) */}
        {iframeSrc && loaded && !interactive && !blocked && (
          <div
            className="absolute inset-0"
            style={{ cursor: 'pointer', zIndex: 2 }}
            onClick={() => setInteractive(true)}
          >
            {/* Subtle bottom gradient + badge on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                padding: '6px 14px',
                background: 'rgba(17,17,17,0.82)',
                backdropFilter: 'blur(8px)',
                borderRadius: 100,
                color: '#fff',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                whiteSpace: 'nowrap',
              }}
            >
              Click to scroll ↕
            </div>
          </div>
        )}

        {/* Active controls: visit + exit */}
        {interactive && !blocked && (
          <div className="absolute top-3 right-3 z-10 flex gap-1.5">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                padding: '5px 12px',
                background: 'rgba(17,17,17,0.82)',
                backdropFilter: 'blur(8px)',
                borderRadius: 100,
                color: '#fff',
                fontSize: '0.72rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              Visit ↗
            </a>
            <button
              onClick={() => setInteractive(false)}
              style={{
                width: 28, height: 28,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(17,17,17,0.82)',
                backdropFilter: 'blur(8px)',
                borderRadius: '50%',
                color: '#fff',
                fontSize: '0.8rem',
                cursor: 'pointer',
              }}
              aria-label="Exit scroll mode"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* ── Card footer ── */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-3 px-5 py-4 border-t border-black/[0.05] hover:bg-black/[0.018] transition-colors"
      >
        <div className="min-w-0">
          <h3 className="truncate" style={{ fontFamily: 'var(--font-tight)', fontSize: '1.05rem', fontWeight: 500 }}>
            {project.name}
          </h3>
          <p className="mt-0.5 truncate text-[0.78rem] text-[#888]">{project.domain}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="px-2.5 py-1 text-[0.68rem] text-black/50 bg-black/[0.04] rounded-full whitespace-nowrap">
            {project.category}
          </span>
          <span className="text-[0.85rem] text-[#bbb] group-hover:text-[#111] transition-colors">↗</span>
        </div>
      </a>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <>
      <Navbar />
      <main>
        <section
          className="bg-white"
          style={{
            paddingTop: 'calc(var(--nav-h) + clamp(48px, 7vw, 96px))',
            paddingBottom: 'clamp(64px, 9vw, 120px)',
          }}
        >
          <div className="container-x">
            <Reveal>
              <p className="eyebrow mb-5">Our work</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="h-display text-[#111]" style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5.5rem)' }}>
                {PROJECTS.length}+ live websites, one standard: results.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-[#555] max-w-[58ch]" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}>
                Every card shows the real homepage of a live site we built — click any preview
                to scroll through it, or click{' '}
                <span style={{ fontWeight: 500, color: '#111' }}>Visit ↗</span> to open it.
                Built across real estate, home services, corporate, travel, manufacturing, and education.
              </p>
            </Reveal>

            {/* Category filter */}
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={clsx(
                      'px-4 py-2 text-[0.85rem] rounded-full border transition-colors duration-300',
                      filter === cat
                        ? 'bg-[#111] text-white border-[#111]'
                        : 'bg-transparent text-black/60 border-black/[0.14] hover:border-black/40'
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Cards grid */}
            <div className="mt-[clamp(32px,4vw,48px)] grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {shown.map(p => (
                <LivePreviewCard key={p.domain} project={p} />
              ))}
            </div>
          </div>
        </section>

        <UnifiedForm
          heading="Want your site on this wall?"
          subheading="Tell us about your project — we'll reply within 24 hours with a plan and pricing."
        />
      </main>
      <Footer />
    </>
  )
}
