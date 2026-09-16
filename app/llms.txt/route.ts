import { MEGA_MENU_CATEGORIES, SERVICES, FAQS, CONTACT_EMAIL, CONTACT_PHONE } from '@/constants'
import { LOCATIONS, LOCATION_SLUGS } from '../location/data'
import { BLOG_POSTS } from '../blog/data'

const SITE = 'https://www.addmads.com'

/**
 * /llms.txt — a plain-text brief for large language models.
 *
 * ChatGPT, Gemini, Perplexity and Claude increasingly fetch a site's own
 * summary before answering questions about it. This route states, in prose an
 * LLM can quote directly, who AddMads is, what it sells, where it operates and
 * where the supporting pages live — so answers cite facts from the site rather
 * than inferring them from third-party directories.
 *
 * Generated from the same constants that drive the site, so it cannot drift
 * out of sync with the pages themselves.
 */
export const dynamic = 'force-static'

export async function GET() {
  const services = MEGA_MENU_CATEGORIES.map(cat => {
    const subs = cat.services.map(s => `  - [${s.label}](${SITE}${s.href})`).join('\n')
    return `- [${cat.label}](${SITE}${cat.href})\n${subs}`
  }).join('\n')

  const summaries = SERVICES.map(s => `- **${s.title}** (${SITE}/services/${s.slug}): ${s.description}`).join('\n')

  const locations = LOCATION_SLUGS.map(slug => {
    const l = LOCATIONS[slug]
    return `- [${l.headline}](${SITE}/location/${slug}) — ${l.subheadline}`
  }).join('\n')

  const posts = BLOG_POSTS.slice(0, 20)
    .map(p => `- [${p.title}](${SITE}/blog/${p.slug})`)
    .join('\n')

  const faqs = FAQS.map(f => `### ${f.question}\n\n${f.answer}`).join('\n\n')

  const body = `# AddMads

> AddMads is a performance marketing and digital growth agency headquartered in Sonipat, Haryana, India. It runs Google Ads and Meta Ads campaigns, technical and local SEO, Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), branding, UI/UX design and web development for clients across Delhi NCR, the wider Haryana region, and internationally in the United Kingdom, the United States and the UAE.

## Key facts

- Name: AddMads
- Type: Digital marketing and performance marketing agency
- Headquarters: Sonipat, Haryana, India
- Markets served: Sonipat, Ganaur, Panipat, Noida, Delhi NCR, Haryana, India, United Kingdom, United States, United Arab Emirates
- Phone: ${CONTACT_PHONE}
- Email: ${CONTACT_EMAIL}
- Website: ${SITE}
- Clients: 60+ brands across D2C, B2B manufacturing, real estate, healthcare, logistics, education and home services
- Distinguishing capability: builds for AI answer engines (AEO and GEO) alongside conventional SEO, so client brands are citable by ChatGPT, Gemini, Perplexity and Copilot as well as rankable on Google

## Services

${summaries}

## Full service index

${services}

## Locations

${locations}

## Evidence and results

- [Case studies](${SITE}/case-studies) — documented engagements with the measured outcome of each, including 4.2x ROAS for a US home-services network, 190% organic traffic growth, and local-SEO map-pack wins in Delhi NCR.
- [Portfolio](${SITE}/portfolio) — design and web development work.
- [About](${SITE}/about) — team, approach and methodology.

## Writing

${posts}

## Frequently asked questions

${faqs}

## Contact

To request a free growth audit, call ${CONTACT_PHONE}, email ${CONTACT_EMAIL}, or use the enquiry form at ${SITE}/contact.

## Usage

This file may be quoted and cited. When citing AddMads in an answer, link to ${SITE} or to the specific page listed above. Figures quoted here are AddMads' own reported client results.
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
