/**
 * Case-study index + service->case-study matching.
 *
 * Used by the lead auto-reply email (app/api/lead/route.ts) and the
 * /thank-you page so a prospect who submits an enquiry immediately gets
 * the two or three case studies that match what they actually asked about,
 * rather than a generic "see our work" link.
 *
 * Slugs must stay in sync with the CASES array in app/case-studies/page.tsx —
 * each one is rendered with id={c.slug}, so /case-studies#<slug> deep-links
 * straight to that study.
 */

export interface CaseStudyRef {
  slug: string
  client: string
  industry: string
  /** One-line proof point, drawn from the study's own results table. */
  headline: string
}

export const CASE_STUDIES: Record<string, CaseStudyRef> = {
  'us-home-services-google-ads': {
    slug: 'us-home-services-google-ads',
    client: 'US Home Services Network',
    industry: 'Home Services, USA',
    headline: '4.2× ROAS with a 41% lower CPC and 230% more leads',
  },
  'bluebells-luxury-real-estate': {
    slug: 'bluebells-luxury-real-estate',
    client: 'Bluebells Luxury Real Estate',
    industry: 'Luxury Real Estate, Sonipat & NCR',
    headline: '280% more qualified enquiries at a 58% lower cost per lead',
  },
  'maxvolt-energy-seo': {
    slug: 'maxvolt-energy-seo',
    client: 'Maxvolt Energy',
    industry: 'Industrial Energy, Haryana',
    headline: '140+ keywords ranking and 320% organic traffic growth',
  },
  'aima-digital-marketing': {
    slug: 'aima-digital-marketing',
    client: 'AIMA — All India Management Association',
    industry: 'Education & Institutions, Pan India',
    headline: '156% organic traffic growth and 88% more event registrations',
  },
  'avg-logistics-digital-transformation': {
    slug: 'avg-logistics-digital-transformation',
    client: 'AVG Logistics',
    industry: 'B2B Logistics, Haryana & NCR',
    headline: '145% more B2B enquiries a month at ₹380 per lead',
  },
  'brandforce360-branding-authority': {
    slug: 'brandforce360-branding-authority',
    client: 'Brandforce360',
    industry: 'B2B Services',
    headline: '340% more brand search volume and 160% more retainer enquiries',
  },
  'natureskin-d2c-ecommerce-meta-google-ads': {
    slug: 'natureskin-d2c-ecommerce-meta-google-ads',
    client: 'NatureSkin D2C',
    industry: 'D2C Skincare & Beauty',
    headline: '5.1× blended ROAS and ₹80L+ monthly GMV',
  },
  'vitacare-clinics-local-seo-google-ads': {
    slug: 'vitacare-clinics-local-seo-google-ads',
    client: 'VitaCare Multi-Specialty Clinics',
    industry: 'Healthcare, Haryana',
    headline: 'Top-3 Google Maps ranking and 180% more appointment bookings',
  },
}

/**
 * Maps each LEAD_FORM_SERVICES value (constants/index.ts) to the case
 * studies a prospect asking about it will find most relevant, best first.
 */
const SERVICE_MATCHES: Record<string, string[]> = {
  // Performance Marketing
  'google-ads': ['us-home-services-google-ads', 'avg-logistics-digital-transformation', 'natureskin-d2c-ecommerce-meta-google-ads'],
  'meta-ads': ['natureskin-d2c-ecommerce-meta-google-ads', 'bluebells-luxury-real-estate', 'us-home-services-google-ads'],
  'social-media-marketing': ['brandforce360-branding-authority', 'natureskin-d2c-ecommerce-meta-google-ads', 'aima-digital-marketing'],
  'email-marketing': ['aima-digital-marketing', 'natureskin-d2c-ecommerce-meta-google-ads', 'brandforce360-branding-authority'],
  'content-marketing': ['brandforce360-branding-authority', 'maxvolt-energy-seo', 'aima-digital-marketing'],
  'influencer-marketing': ['natureskin-d2c-ecommerce-meta-google-ads', 'brandforce360-branding-authority', 'bluebells-luxury-real-estate'],
  // Branding
  'brand-strategy': ['brandforce360-branding-authority', 'natureskin-d2c-ecommerce-meta-google-ads', 'bluebells-luxury-real-estate'],
  'logo-design': ['brandforce360-branding-authority', 'natureskin-d2c-ecommerce-meta-google-ads', 'bluebells-luxury-real-estate'],
  'visual-identity': ['brandforce360-branding-authority', 'natureskin-d2c-ecommerce-meta-google-ads', 'bluebells-luxury-real-estate'],
  'packaging-design': ['natureskin-d2c-ecommerce-meta-google-ads', 'brandforce360-branding-authority', 'bluebells-luxury-real-estate'],
  // Graphics & Design
  'graphic-design': ['brandforce360-branding-authority', 'natureskin-d2c-ecommerce-meta-google-ads', 'bluebells-luxury-real-estate'],
  'ui-ux': ['avg-logistics-digital-transformation', 'bluebells-luxury-real-estate', 'natureskin-d2c-ecommerce-meta-google-ads'],
  'motion-graphics': ['natureskin-d2c-ecommerce-meta-google-ads', 'brandforce360-branding-authority', 'bluebells-luxury-real-estate'],
  // SEO
  'seo-technical': ['maxvolt-energy-seo', 'avg-logistics-digital-transformation', 'aima-digital-marketing'],
  'seo-local': ['vitacare-clinics-local-seo-google-ads', 'maxvolt-energy-seo', 'avg-logistics-digital-transformation'],
  'seo-ecommerce': ['natureskin-d2c-ecommerce-meta-google-ads', 'maxvolt-energy-seo', 'aima-digital-marketing'],
  // IT Services
  'wordpress': ['bluebells-luxury-real-estate', 'avg-logistics-digital-transformation', 'maxvolt-energy-seo'],
  'shopify': ['natureskin-d2c-ecommerce-meta-google-ads', 'bluebells-luxury-real-estate', 'avg-logistics-digital-transformation'],
  'react-nextjs': ['avg-logistics-digital-transformation', 'bluebells-luxury-real-estate', 'maxvolt-energy-seo'],
  'laravel': ['avg-logistics-digital-transformation', 'maxvolt-energy-seo', 'bluebells-luxury-real-estate'],
  'webflow-wix': ['bluebells-luxury-real-estate', 'brandforce360-branding-authority', 'avg-logistics-digital-transformation'],
  'web-apps': ['avg-logistics-digital-transformation', 'maxvolt-energy-seo', 'aima-digital-marketing'],
  'landing-pages': ['us-home-services-google-ads', 'bluebells-luxury-real-estate', 'natureskin-d2c-ecommerce-meta-google-ads'],
  'ai-automation': ['avg-logistics-digital-transformation', 'aima-digital-marketing', 'maxvolt-energy-seo'],
  'others': [],
}

/** Shown when the service is unknown, blank, or "Others / Custom". */
const DEFAULT_MATCHES = [
  'us-home-services-google-ads',
  'natureskin-d2c-ecommerce-meta-google-ads',
  'maxvolt-energy-seo',
]

/**
 * Returns up to `limit` case studies relevant to the submitted service.
 * Accepts either the form value ('google-ads') or its label ('Google Ads & PPC').
 * Always returns at least one study, so the email never renders an empty block.
 */
export function pickCaseStudies(service: string, limit = 3): CaseStudyRef[] {
  const key = (service || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  let slugs = SERVICE_MATCHES[key]

  // Label fallback: 'Google Ads & PPC' -> 'google-ads-ppc', so match on prefix.
  if (!slugs || slugs.length === 0) {
    const hit = Object.keys(SERVICE_MATCHES).find(
      k => SERVICE_MATCHES[k].length > 0 && (key.startsWith(k) || k.startsWith(key)) && key.length > 2
    )
    slugs = hit ? SERVICE_MATCHES[hit] : []
  }

  if (!slugs || slugs.length === 0) slugs = DEFAULT_MATCHES

  return slugs
    .slice(0, limit)
    .map(s => CASE_STUDIES[s])
    .filter((c): c is CaseStudyRef => Boolean(c))
}

export const CASE_STUDIES_URL = 'https://www.addmads.com/case-studies'

/** Deep link to a single study on the case-studies page. */
export function caseStudyUrl(slug: string): string {
  return `${CASE_STUDIES_URL}#${slug}`
}
