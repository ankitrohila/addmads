/**
 * Commercial metadata for the six top-level service pages.
 *
 * These are the money pages. Before this file they fell back to
 * `${service.title} — Professional Digital Solutions`, which carried no
 * geography and no differentiator, and earned effectively no impressions.
 *
 * Titles are geo-qualified where AddMads can realistically compete
 * (Sonipat, Delhi NCR, Haryana) rather than chasing national head terms,
 * and each is kept under ~60 characters so it does not truncate in the SERP.
 * The root layout appends ' | AddMads', so titles here must NOT repeat it.
 */

export interface ServiceMeta {
  title: string
  description: string
  keywords: string[]
}

export const SERVICE_META: Record<string, ServiceMeta> = {
  'performance-marketing': {
    title: 'Performance Marketing Agency in Delhi NCR & Haryana',
    description:
      'Google Ads and Meta Ads managed for qualified leads, not clicks. Conversion tracking wired to your CRM, transparent monthly reporting, and campaigns built around project value. Serving Sonipat, Noida, Delhi NCR and clients in the UK, US and UAE.',
    keywords: [
      'performance marketing agency delhi ncr',
      'google ads agency haryana',
      'meta ads agency india',
      'ppc management sonipat',
      'lead generation agency noida',
    ],
  },
  branding: {
    title: 'Branding Agency — Strategy, Logo & Visual Identity',
    description:
      'Brand strategy, logo design, visual identity and brand guidelines built as one system. Full IP ownership, every format you need, and positioning grounded in real competitor and audience research — not mood boards.',
    keywords: [
      'branding agency india',
      'brand strategy consultant',
      'logo design sonipat',
      'visual identity design',
      'brand guidelines agency haryana',
    ],
  },
  seo: {
    title: 'SEO Services in Sonipat, Delhi NCR & Across India',
    description:
      'Technical SEO, local SEO and e-commerce SEO built for how search works now — AI Overviews, citation share and entity clarity, not just rank position. Google Business Profile, structured data, and content that earns qualified traffic.',
    keywords: [
      'seo services sonipat',
      'seo agency delhi ncr',
      'local seo haryana',
      'technical seo agency india',
      'ecommerce seo services',
    ],
  },
  'graphics-design': {
    title: 'Graphic Design Services — Print, Digital & Motion',
    description:
      'Graphic design, UI/UX and motion graphics from a team that designs for performance. Ad creative built to be tested, brand collateral that stays on-system, and interfaces designed around conversion rather than decoration.',
    keywords: [
      'graphic design agency india',
      'ui ux design services',
      'motion graphics agency',
      'ad creative design',
      'design agency sonipat',
    ],
  },
  'it-services': {
    title: 'Web Development — WordPress, Shopify & Next.js',
    description:
      'Fast, SEO-ready websites and web apps on WordPress, Shopify, React, Next.js and Laravel. Sub-1.5-second load times, Core Web Vitals passed, analytics and lead tracking instrumented from day one — not bolted on later.',
    keywords: [
      'web development company haryana',
      'wordpress development sonipat',
      'shopify development india',
      'nextjs development agency',
      'website revamp delhi ncr',
    ],
  },
  'social-media': {
    title: 'Social Media Marketing & Management Services',
    description:
      'Content calendars, design, copywriting, community management and paid promotion across Instagram, Facebook, LinkedIn and YouTube. Built around a tested angle library so the creative keeps working, not just the first month.',
    keywords: [
      'social media marketing agency india',
      'social media management sonipat',
      'instagram marketing agency',
      'linkedin marketing india',
      'smm services haryana',
    ],
  },
}
