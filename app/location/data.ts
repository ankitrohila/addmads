export interface LocationData {
  name: string
  region: string
  country: string
  countryCode: 'IN' | 'GB' | 'US' | 'AE'
  isInternational: boolean
  headline: string
  subheadline: string
  intro: string
  whySection: { heading: string; body: string }[]
  localFacts: string[]
  currency: string
  heroStats: { value: string; label: string }[]
  schema: {
    addressLocality: string
    addressRegion: string
    postalCode?: string
    latitude?: number
    longitude?: number
  }
}

export const LOCATIONS: Record<string, LocationData> = {
  sonipat: {
    name: 'Sonipat',
    region: 'Haryana',
    country: 'India',
    countryCode: 'IN',
    isInternational: false,
    headline: 'Digital Marketing Agency in Sonipat',
    subheadline: 'Performance marketing, SEO, branding & web development for businesses in Sonipat, Haryana.',
    intro: 'AddMads is headquartered in Sonipat, Haryana. We are the go-to digital marketing partner for businesses in Sonipat looking to grow online — from local Google Business Profile optimisation and Google Ads to full-service performance marketing, SEO, branding, and web development. Whether you run a manufacturing unit, retail store, school, clinic, or service business, we deliver measurable digital growth.',
    whySection: [
      {
        heading: 'Deep Local Market Knowledge',
        body: 'We know the Sonipat market. We understand which industries are growing, who your competitors are online, and exactly which keywords and channels will drive real business — not just website traffic.',
      },
      {
        heading: 'Local SEO & Google Maps Ranking',
        body: 'Most Sonipat businesses lose customers to competitors who appear higher on Google Maps. Our local SEO service optimises your Google Business Profile, builds local citations, and gets your business ranking in the map pack for searches like "near me" and "[service] in Sonipat".',
      },
      {
        heading: 'Google Ads for Sonipat Businesses',
        body: 'Running Google Ads without expert management wastes budget. We set up targeted campaigns for businesses in Sonipat and surrounding areas — geotargeted to your service radius, with conversion tracking from day one.',
      },
      {
        heading: 'Website Development in Sonipat',
        body: 'We build fast, modern, SEO-ready websites for businesses in Sonipat — on WordPress, Shopify, or Next.js. Sites that load in under 1.5 seconds and convert visitors into customers.',
      },
    ],
    localFacts: [
      'Serving businesses in Sonipat city, GT Road corridor, and all of Sonipat district',
      'Industries served: manufacturing, education, healthcare, retail, real estate, hospitality',
      'Quick response — our team is based in Sonipat for in-person meetings when needed',
      'All campaigns are geotargeted to your exact service area',
    ],
    currency: '₹',
    heroStats: [
      { value: '7+', label: 'Years in Sonipat' },
      { value: '60+', label: 'Clients Served' },
      { value: '250+', label: 'Projects Delivered' },
      { value: '4.9★', label: 'Client Rating' },
    ],
    schema: {
      addressLocality: 'Sonipat',
      addressRegion: 'Haryana',
      postalCode: '131001',
      latitude: 28.9931,
      longitude: 77.0151,
    },
  },

  ganaur: {
    name: 'Ganaur',
    region: 'Haryana',
    country: 'India',
    countryCode: 'IN',
    isInternational: false,
    headline: 'Digital Marketing Agency in Ganaur',
    subheadline: 'Performance marketing, local SEO & web development for businesses in Ganaur, Sonipat district.',
    intro: 'AddMads serves businesses in Ganaur, a rapidly growing town in Sonipat district on the NH-44 corridor. From local shops and factories to schools and healthcare providers, we help Ganaur businesses build a strong digital presence — with Google Ads, local SEO, social media marketing, and professional websites that generate leads 24/7.',
    whySection: [
      {
        heading: 'Local SEO for Ganaur Businesses',
        body: 'Customers in Ganaur and surrounding areas (Kundli, Murthal, Gannaur) search for services on Google before calling. We get your business at the top of local search results and Google Maps, turning online searches into walk-in customers.',
      },
      {
        heading: 'Affordable Google Ads Campaigns',
        body: 'We run precisely geotargeted Google Ads campaigns for businesses in Ganaur — reaching customers within your delivery or service radius, with budgets starting from ₹15,000/month.',
      },
      {
        heading: 'Social Media Marketing',
        body: 'We manage your Instagram and Facebook presence — consistent posting, branded graphics, and community management that builds your local reputation and keeps your business top of mind.',
      },
      {
        heading: 'Professional Websites for Ganaur Businesses',
        body: 'A professional website is your 24/7 salesperson. We build fast-loading, mobile-optimised websites for Ganaur businesses — affordable packages starting from ₹15,000.',
      },
    ],
    localFacts: [
      'Serving businesses across Ganaur, Kundli, Murthal, Gannaur, and surrounding areas',
      'Special focus on businesses on NH-44 / GT Road corridor',
      'Industries served: manufacturing, FMCG, retail, food & beverage, education, healthcare',
      'Local meetings available on request at our Sonipat office (15 min from Ganaur)',
    ],
    currency: '₹',
    heroStats: [
      { value: '7+', label: 'Years Serving NCR' },
      { value: '60+', label: 'Clients Served' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '4.9★', label: 'Client Rating' },
    ],
    schema: {
      addressLocality: 'Ganaur',
      addressRegion: 'Haryana',
      postalCode: '131101',
      latitude: 29.0199,
      longitude: 77.0047,
    },
  },

  delhi: {
    name: 'Delhi',
    region: 'Delhi NCR',
    country: 'India',
    countryCode: 'IN',
    isInternational: false,
    headline: 'Digital Marketing Agency in Delhi',
    subheadline: 'Performance marketing, SEO, branding & web development for businesses in Delhi NCR.',
    intro: 'AddMads delivers enterprise-grade digital marketing for businesses across Delhi NCR — from South Delhi startups and Connaught Place corporates to East Delhi manufacturers and Dwarka retailers. We combine performance marketing (Google Ads, Meta Ads), technical SEO, branding, and web development to build complete digital growth engines for Delhi businesses competing in one of India\'s most competitive markets.',
    whySection: [
      {
        heading: 'Delhi NCR Performance Marketing',
        body: 'Delhi\'s market is intensely competitive across every sector. We run data-driven Google and Meta Ads campaigns for businesses in Delhi NCR — engineered for measurable ROI, not just traffic. Average client ROAS: 3×–6× within 90 days.',
      },
      {
        heading: 'SEO for Delhi Businesses',
        body: 'Ranking on page 1 of Google in Delhi means competing against thousands of businesses. Our technical SEO, content strategy, and link building gets you there — typically top-10 in 4–6 months, top-3 in 8–12 months.',
      },
      {
        heading: 'Branding & Web Development',
        body: 'Delhi consumers have high expectations. Our branding and web development services help businesses look the part — with logos, identity systems, and websites that build trust and convert at the highest rates.',
      },
      {
        heading: 'Local SEO Across Delhi',
        body: 'We optimise your Google Business Profile for every Delhi locality — South Delhi, West Delhi, East Delhi, North Delhi, Central Delhi, and the wider NCR. Own the local search results where your customers are.',
      },
    ],
    localFacts: [
      'Serving businesses across all Delhi districts and wider NCR (Noida, Gurugram, Ghaziabad, Faridabad)',
      'Industries: real estate, healthcare, education, e-commerce, retail, professional services, hospitality',
      'Remote-first delivery; Delhi clients receive monthly strategy calls',
      'Campaign geotargeting by Delhi locality, PIN code, or radius',
    ],
    currency: '₹',
    heroStats: [
      { value: '250+', label: 'Projects Delivered' },
      { value: '60+', label: 'Delhi NCR Clients' },
      { value: '4.5×', label: 'Avg ROAS Achieved' },
      { value: 'Pg 1', label: 'Google Results' },
    ],
    schema: {
      addressLocality: 'Delhi',
      addressRegion: 'Delhi',
      postalCode: '110001',
      latitude: 28.6139,
      longitude: 77.2090,
    },
  },

  panipat: {
    name: 'Panipat',
    region: 'Haryana',
    country: 'India',
    countryCode: 'IN',
    isInternational: false,
    headline: 'Digital Marketing Agency in Panipat',
    subheadline: 'SEO, Google Ads, social media & web development for businesses in Panipat, Haryana.',
    intro: 'AddMads helps businesses in Panipat grow online — from the city\'s thriving textile and manufacturing sector to retail, hospitality, education, and healthcare businesses. We bring performance marketing, local SEO, social media management, branding, and web development to Panipat — with the same quality and tools used by companies in Delhi and globally.',
    whySection: [
      {
        heading: 'Digital Marketing for Panipat Textile & Manufacturing Businesses',
        body: 'Panipat is India\'s city of weavers. We help textile manufacturers, exporters, and wholesalers build a professional digital presence — B2B website development, LinkedIn marketing, Google Ads for wholesale buyers, and SEO for product category keywords.',
      },
      {
        heading: 'Local SEO in Panipat',
        body: 'Get your business visible when Panipat customers search on Google. We optimise your Google Business Profile, build local citations, gather reviews, and get you ranked in the local map pack — so you\'re the first call.',
      },
      {
        heading: 'Social Media & Content for Panipat Brands',
        body: 'Consistent social media presence builds trust in local markets. We manage your Instagram and Facebook — creating locally relevant content that resonates with Panipat audiences and positions your brand as the go-to choice.',
      },
      {
        heading: 'Affordable Website Development in Panipat',
        body: 'Professional WordPress and Next.js websites for Panipat businesses. Fast loading, mobile-optimised, and SEO-ready from day one. Packages starting at ₹15,000.',
      },
    ],
    localFacts: [
      'Serving businesses across Panipat city, Samalkha, and Panipat district',
      'Special expertise in B2B marketing for textile, manufacturing, and export businesses',
      'Industries: textiles, manufacturing, retail, education, healthcare, hospitality',
      'Located 45 minutes from Panipat — in-person meetings available',
    ],
    currency: '₹',
    heroStats: [
      { value: '7+', label: 'Years Experience' },
      { value: '60+', label: 'Clients Served' },
      { value: '250+', label: 'Projects Delivered' },
      { value: '4.9★', label: 'Client Rating' },
    ],
    schema: {
      addressLocality: 'Panipat',
      addressRegion: 'Haryana',
      postalCode: '132103',
      latitude: 29.3909,
      longitude: 76.9635,
    },
  },

  uk: {
    name: 'United Kingdom',
    region: 'UK',
    country: 'United Kingdom',
    countryCode: 'GB',
    isInternational: true,
    headline: 'Digital Marketing Agency for UK Businesses',
    subheadline: 'India-based performance marketing, SEO & web development for UK businesses — quality and expertise at a fraction of UK agency rates.',
    intro: 'AddMads is a trusted digital marketing partner for businesses in the United Kingdom. UK companies benefit from our full-service approach — Google Ads, Meta Ads, technical SEO, branding, and web development — delivered by an experienced India-based team fluent in UK markets. You get the same quality as a premium UK agency, with significantly more competitive pricing and a team that works across time zones to keep your campaigns optimised around the clock.',
    whySection: [
      {
        heading: 'UK-Market Google Ads & PPC',
        body: 'We run Google Ads campaigns targeting UK consumers — with UK-specific keyword research, bid adjustments for UK geography, and ad copy that resonates with British audiences. Average UK client ROAS: 3×–5×.',
      },
      {
        heading: 'SEO for UK Businesses',
        body: 'UK SEO requires understanding local search intent, Google.co.uk ranking factors, and competitive UK markets. We deliver technical SEO, content strategy, and UK-relevant link building that moves UK businesses to page 1.',
      },
      {
        heading: 'Cost-Effective vs UK Agencies',
        body: 'UK digital marketing agencies charge £2,000–£8,000/month for similar services. AddMads delivers the same quality at a fraction of the cost — with transparent reporting, no long-term lock-in, and a senior team dedicated to your account.',
      },
      {
        heading: 'Timezone-Friendly Communication',
        body: 'We maintain overlapping working hours for UK clients — morning IST maps to UK afternoon. All UK clients receive dedicated WhatsApp communication, monthly video calls, and same-day email responses.',
      },
    ],
    localFacts: [
      'Serving clients across England, Scotland, Wales, and Northern Ireland',
      'All campaigns target google.co.uk and UK-specific search terms',
      'Ad accounts billed in GBP, reporting in GBP',
      'GDPR-compliant data handling — all client data processed under EU-standard policies',
    ],
    currency: '£',
    heroStats: [
      { value: '60+', label: 'Global Clients' },
      { value: '3–5×', label: 'UK Client ROAS' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: 'GDPR', label: 'Compliant' },
    ],
    schema: {
      addressLocality: 'London',
      addressRegion: 'England',
    },
  },

  usa: {
    name: 'United States',
    region: 'USA',
    country: 'United States',
    countryCode: 'US',
    isInternational: true,
    headline: 'Digital Marketing Agency for US Businesses',
    subheadline: 'India-based performance marketing, SEO & web development for US businesses — world-class expertise at competitive rates.',
    intro: 'AddMads serves businesses across the United States — from startups in Silicon Valley to mid-market companies in New York, Texas, and Florida. US companies leverage our full-service digital marketing capabilities (Google Ads, Meta Ads, SEO, web development) to compete in America\'s most competitive online markets, with a senior India-based team that delivers the quality of a premium US agency at significantly lower rates.',
    whySection: [
      {
        heading: 'US-Market Google & Meta Ads',
        body: 'We run campaigns targeting US audiences — with state-level and ZIP code geotargeting, US-specific keyword research, ad copy tuned to American buyers, and bid strategies calibrated for competitive US CPCs.',
      },
      {
        heading: 'SEO for US Businesses',
        body: 'US SEO is among the most competitive in the world. We deliver technical SEO, content strategy, and authoritative US-relevant link building that moves businesses to page 1 on google.com — across every US market and industry.',
      },
      {
        heading: 'US E-Commerce & Shopify',
        body: 'We build and market Shopify and WooCommerce stores for US e-commerce brands — optimised for US consumers, integrated with US payment gateways, and engineered to rank on Google Shopping.',
      },
      {
        heading: 'EST / PST Overlap Hours',
        body: 'Our team maintains morning EST / evening IST overlap for US East Coast clients, and full PST availability during IST business hours. All US clients receive monthly video strategy calls and weekly performance snapshots.',
      },
    ],
    localFacts: [
      'Serving clients across all US states — e-commerce, B2B, local services, and SaaS',
      'Campaigns target google.com with state/city/ZIP geotargeting',
      'Accounts billed in USD, reporting in USD',
      'US tax-compliant invoicing; CCPA-aware data handling',
    ],
    currency: '$',
    heroStats: [
      { value: '60+', label: 'Global Clients' },
      { value: '4–6×', label: 'Avg ROAS' },
      { value: '250+', label: 'Projects Delivered' },
      { value: '98%', label: 'Satisfaction Rate' },
    ],
    schema: {
      addressLocality: 'New York',
      addressRegion: 'New York',
    },
  },

  uae: {
    name: 'UAE',
    region: 'Gulf Region',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    isInternational: true,
    headline: 'Digital Marketing Agency for UAE Businesses',
    subheadline: 'Performance marketing, SEO & web development for businesses in Dubai, Abu Dhabi, and across the UAE.',
    intro: 'AddMads is a preferred digital marketing partner for businesses in the United Arab Emirates. We serve UAE companies in Dubai, Abu Dhabi, Sharjah, and beyond — delivering Google Ads, Meta Ads, SEO, branding, and web development tailored for the Gulf market. Our India-based team combines UAE market expertise with competitive pricing that gives UAE businesses a significant advantage over Dubai agency rates.',
    whySection: [
      {
        heading: 'UAE & Gulf Region Digital Marketing',
        body: 'We run campaigns targeting UAE consumers — with Dubai and Abu Dhabi geotargeting, Arabic and English ad copy, and knowledge of UAE consumer behaviour across Google, Instagram, Facebook, and Snapchat.',
      },
      {
        heading: 'SEO for UAE Businesses',
        body: 'UAE search is competitive across real estate, hospitality, healthcare, retail, and B2B sectors. Our SEO delivers page 1 rankings on Google.ae — with content strategy, technical fixes, and link building from UAE-relevant sources.',
      },
      {
        heading: 'Dubai Agency Rates vs AddMads',
        body: 'Dubai digital agencies typically charge AED 8,000–25,000/month for full-service marketing. AddMads delivers the same capability at a fraction of the cost — with transparent reporting, 24/7 WhatsApp support, and a dedicated senior team.',
      },
      {
        heading: 'Indian Diaspora & Cross-Border Business',
        body: 'AddMads is uniquely positioned for UAE businesses targeting Indian consumers, and Indian businesses expanding into the UAE market — with on-the-ground cultural knowledge of both markets and seamless bilingual communication.',
      },
    ],
    localFacts: [
      'Serving businesses across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, and Fujairah',
      'Campaigns target Google.ae with UAE geotargeting in both English and Arabic',
      'Accounts billed in AED or INR, reporting available in AED',
      'VAT-compliant invoicing for UAE clients',
    ],
    currency: 'AED',
    heroStats: [
      { value: '60+', label: 'Global Clients' },
      { value: '3–5×', label: 'Client ROAS' },
      { value: '250+', label: 'Projects' },
      { value: '98%', label: 'Satisfaction' },
    ],
    schema: {
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
    },
  },
}

export const LOCATION_SLUGS = Object.keys(LOCATIONS)
