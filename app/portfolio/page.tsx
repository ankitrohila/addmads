'use client'

import { useState } from 'react'
import Image from 'next/image'
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
}

/**
 * Live sites only — every entry was verified reachable before inclusion,
 * and each card shows a real screenshot of its homepage (public/portfolio/<domain>.jpg).
 */
const PROJECTS: Project[] = [
  { name: 'Bluebells Luxury Real Estate', url: 'https://bluebellsluxury.com/', domain: 'bluebellsluxury.com', category: 'Real Estate & Lifestyle' },
  { name: 'IBFW Weddings', url: 'https://ibfwweddings.com/', domain: 'ibfwweddings.com', category: 'Real Estate & Lifestyle' },
  { name: 'Little Riders Cup', url: 'https://littleriddercup.com/', domain: 'littleriddercup.com', category: 'Real Estate & Lifestyle' },
  { name: 'Flowvillas', url: 'https://flowvillas.in/', domain: 'flowvillas.in', category: 'Travel & Hospitality' },
  { name: 'ABS Vacations', url: 'https://absvacations.com/', domain: 'absvacations.com', category: 'Travel & Hospitality' },
  { name: 'Mike Diamond Plumbing', url: 'https://mikediamondservices.com/', domain: 'mikediamondservices.com', category: 'Home Services (USA)' },
  { name: 'ALL-ISR', url: 'https://www.allisr.com/', domain: 'allisr.com', category: 'Home Services (USA)' },
  { name: 'Chilly-Billy Heating & Cooling', url: 'https://www.hirechillybilly.com/', domain: 'hirechillybilly.com', category: 'Home Services (USA)' },
  { name: 'James Armstrong Plumbing', url: 'https://www.jamesarmstrongplumbing.com/', domain: 'jamesarmstrongplumbing.com', category: 'Home Services (USA)' },
  { name: 'AIMA', url: 'https://www.aima.in/', domain: 'aima.in', category: 'Corporate & Institutions' },
  { name: 'Ananta Centre', url: 'https://anantacentre.in/', domain: 'anantacentre.in', category: 'Corporate & Institutions' },
  { name: 'BYST', url: 'https://byst.org.in/', domain: 'byst.org.in', category: 'Corporate & Institutions' },
  { name: 'EMS-Works', url: 'https://ems-works.com/', domain: 'ems-works.com', category: 'Corporate & Institutions' },
  { name: 'Enseur', url: 'https://enseur.in/', domain: 'enseur.in', category: 'Corporate & Institutions' },
  { name: 'Brandforce 360', url: 'https://www.brandforce360.com/', domain: 'brandforce360.com', category: 'Corporate & Institutions' },
  { name: 'AVG Logistics', url: 'https://avglogistics.com/', domain: 'avglogistics.com', category: 'Industry & Manufacturing' },
  { name: 'Maxvolt Energy', url: 'https://www.maxvoltenergy.com/', domain: 'maxvoltenergy.com', category: 'Industry & Manufacturing' },
  { name: 'Netexpress UAE', url: 'https://netexpressuae.com/', domain: 'netexpressuae.com', category: 'Industry & Manufacturing' },
  { name: 'Super Pattern', url: 'https://superpattern.in/', domain: 'superpattern.in', category: 'Industry & Manufacturing' },
  { name: 'Boxica Packaging', url: 'https://boxika.in/', domain: 'boxika.in', category: 'Industry & Manufacturing' },
  { name: 'PD Metals Craft', url: 'https://pdmetalcraft.co.in/', domain: 'pdmetalcraft.co.in', category: 'Industry & Manufacturing' },
  { name: 'R S Solar', url: 'https://rssolar.in/', domain: 'rssolar.in', category: 'Industry & Manufacturing' },
  { name: 'Shambhu Dayal School', url: 'https://shambhudayalschool.in/', domain: 'shambhudayalschool.in', category: 'Education & Local Business' },
  { name: 'GSIL Edu. Society', url: 'https://gsiledusociety.com/', domain: 'gsiledusociety.com', category: 'Education & Local Business' },
  { name: 'Vidyarthi Juniors', url: 'https://vidyarthijuniors.com/', domain: 'vidyarthijuniors.com', category: 'Education & Local Business' },
  { name: 'Ohmypet Grooming', url: 'https://ohmypetgrooming.in/', domain: 'ohmypetgrooming.in', category: 'Education & Local Business' },
  { name: 'Softhics', url: 'https://softhics.com/', domain: 'softhics.com', category: 'Education & Local Business' },
]

const CATEGORIES = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))]

/** Card with a real homepage screenshot linking to the live site. */
function LivePreviewCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-black/[0.07] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.1)]"
    >
      {/* Homepage screenshot preview */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F3F3F3]">
        <Image
          src={`/portfolio/${project.domain}.jpg`}
          alt={`${project.name} — homepage`}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1280px) 46vw, 30vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {/* Hover veil */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/45 transition-colors duration-300">
          <span className="btn-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
            Visit live site ↗
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 style={{ fontSize: '1.1rem' }}>{project.name}</h3>
            <p className="mt-1 text-[0.82rem] text-[#777]">{project.domain}</p>
          </div>
          <span className="mt-1 shrink-0 px-3 py-1 text-[0.7rem] text-black/55 bg-black/[0.045] rounded-full whitespace-nowrap">
            {project.category}
          </span>
        </div>
      </div>
    </a>
  )
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white" style={{ paddingTop: 'calc(var(--nav-h) + clamp(48px, 7vw, 96px))', paddingBottom: 'clamp(64px, 9vw, 120px)' }}>
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
                Every card shows the real homepage of a live site we built — hover any preview
                to visit it. Built across real estate, home services, corporate, travel,
                manufacturing, and education.
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

            {/* Cards */}
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
