export const CONTACT_PHONE = '+91-9220872212'
export const CONTACT_EMAIL = 'info@addmads.com'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasSubmenu: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

// Mega menu structure: categories with sub-services
export const MEGA_MENU_CATEGORIES = [
  {
    id: 'marketing',
    label: 'Performance Marketing',
    href: '/services/performance-marketing',
    icon: '',
    description: 'Data-driven campaigns that deliver measurable ROI',
    services: [
      { label: 'Google Ads & PPC', href: '/services/performance-marketing/google-ads' },
      { label: 'Meta / Facebook Ads', href: '/services/performance-marketing/meta-ads' },
      { label: 'Social Media Marketing', href: '/services/performance-marketing/social-media' },
      { label: 'Email Marketing', href: '/services/performance-marketing/email-marketing' },
      { label: 'Content Marketing', href: '/services/performance-marketing/content-marketing' },
      { label: 'Influencer Marketing', href: '/services/performance-marketing/influencer' },
    ],
  },
  {
    id: 'branding',
    label: 'Branding',
    href: '/services/branding',
    icon: '',
    description: 'Build a brand that people remember and trust',
    services: [
      { label: 'Brand Strategy', href: '/services/branding/brand-strategy' },
      { label: 'Logo Design', href: '/services/branding/logo-design' },
      { label: 'Visual Identity', href: '/services/branding/visual-identity' },
      { label: 'Brand Guidelines', href: '/services/branding/brand-guidelines' },
      { label: 'Brand Voice & Messaging', href: '/services/branding/brand-voice' },
      { label: 'Packaging Design', href: '/services/branding/packaging' },
    ],
  },
  {
    id: 'graphics',
    label: 'Graphics & Design',
    href: '/services/graphics-design',
    icon: '',
    description: 'Stunning visuals that communicate your story',
    services: [
      { label: 'Graphic Design', href: '/services/graphics-design/graphic-design' },
      { label: 'UI/UX Design', href: '/services/graphics-design/ui-ux' },
      { label: 'Motion Graphics', href: '/services/graphics-design/motion' },
      { label: 'Print Design', href: '/services/graphics-design/print' },
      { label: 'Social Media Creatives', href: '/services/graphics-design/social-creatives' },
      { label: 'Presentation Design', href: '/services/graphics-design/presentation' },
    ],
  },
  {
    id: 'seo',
    label: 'SEO Services',
    href: '/services/seo',
    icon: '',
    description: 'Rank higher, get found, grow organically',
    services: [
      { label: 'Technical SEO', href: '/services/seo/technical-seo' },
      { label: 'On-Page SEO', href: '/services/seo/on-page' },
      { label: 'Off-Page & Link Building', href: '/services/seo/off-page' },
      { label: 'Local SEO', href: '/services/seo/local-seo' },
      { label: 'E-commerce SEO', href: '/services/seo/ecommerce-seo' },
      { label: 'YouTube SEO', href: '/services/seo/youtube-seo' },
    ],
  },
  {
    id: 'it',
    label: 'IT Services',
    href: '/services/it-services',
    icon: '',
    description: 'End-to-end technology solutions for your business',
    services: [
      { label: 'WordPress Development', href: '/services/it-services/wordpress' },
      { label: 'Shopify / E-commerce', href: '/services/it-services/shopify' },
      { label: 'React & Next.js', href: '/services/it-services/react-nextjs' },
      { label: 'PHP / Laravel', href: '/services/it-services/laravel' },
      { label: 'Webflow / Wix', href: '/services/it-services/webflow-wix' },
      { label: 'Web Apps & SaaS', href: '/services/it-services/web-apps' },
      { label: 'Landing Pages', href: '/services/it-services/landing-pages' },
      { label: 'AI & Automation', href: '/services/it-services/ai-automation' },
    ],
  },
]

// Flat list for form service dropdown
export const LEAD_FORM_SERVICES = [
  // Marketing
  { value: 'google-ads', label: 'Google Ads & PPC', group: 'Performance Marketing' },
  { value: 'meta-ads', label: 'Meta / Facebook Ads', group: 'Performance Marketing' },
  { value: 'social-media-marketing', label: 'Social Media Marketing', group: 'Performance Marketing' },
  { value: 'email-marketing', label: 'Email Marketing', group: 'Performance Marketing' },
  { value: 'content-marketing', label: 'Content Marketing', group: 'Performance Marketing' },
  { value: 'influencer-marketing', label: 'Influencer Marketing', group: 'Performance Marketing' },
  // Branding
  { value: 'brand-strategy', label: 'Brand Strategy', group: 'Branding' },
  { value: 'logo-design', label: 'Logo Design', group: 'Branding' },
  { value: 'visual-identity', label: 'Visual Identity', group: 'Branding' },
  { value: 'packaging-design', label: 'Packaging Design', group: 'Branding' },
  // Graphics
  { value: 'graphic-design', label: 'Graphic Design', group: 'Graphics & Design' },
  { value: 'ui-ux', label: 'UI/UX Design', group: 'Graphics & Design' },
  { value: 'motion-graphics', label: 'Motion Graphics', group: 'Graphics & Design' },
  // SEO
  { value: 'seo-technical', label: 'Technical SEO', group: 'SEO' },
  { value: 'seo-local', label: 'Local SEO', group: 'SEO' },
  { value: 'seo-ecommerce', label: 'E-commerce SEO', group: 'SEO' },
  // IT Services
  { value: 'wordpress', label: 'WordPress Development', group: 'IT Services' },
  { value: 'shopify', label: 'Shopify / E-commerce', group: 'IT Services' },
  { value: 'react-nextjs', label: 'React & Next.js', group: 'IT Services' },
  { value: 'laravel', label: 'PHP / Laravel', group: 'IT Services' },
  { value: 'webflow-wix', label: 'Webflow / Wix', group: 'IT Services' },
  { value: 'web-apps', label: 'Web Apps & SaaS', group: 'IT Services' },
  { value: 'landing-pages', label: 'Landing Pages', group: 'IT Services' },
  { value: 'ai-automation', label: 'AI & Automation', group: 'IT Services' },
  { value: 'others', label: 'Others / Custom', group: 'Other' },
]

// Main services for homepage Services section
export const SERVICES = [
  {
    number: '01',
    title: 'Performance Marketing',
    slug: 'performance-marketing',
    description: 'Data-driven ad campaigns across Google, Meta, and more — engineered to deliver maximum ROI and measurable growth.',
    tags: ['Google Ads', 'Meta Ads', 'PPC', 'Retargeting', 'Analytics'],
    detailed: 'We build performance-first campaigns with precise targeting, continuous A/B testing, and transparent reporting. Every rupee you spend is tracked and optimised for conversions.',
  },
  {
    number: '02',
    title: 'Branding',
    slug: 'branding',
    description: 'Complete brand identity development — from strategy and positioning to logo, guidelines, and visual language.',
    tags: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines'],
    detailed: 'We develop comprehensive brand strategies including market positioning, brand personality, visual identity systems, and brand guidelines that ensure consistency across all touchpoints.',
  },
  {
    number: '03',
    title: 'SEO Services',
    slug: 'seo',
    description: 'Comprehensive SEO strategies to boost your organic visibility — technical, on-page, off-page, local, and e-commerce SEO.',
    tags: ['Technical SEO', 'On-Page SEO', 'Link Building', 'Local SEO', 'E-commerce SEO'],
    detailed: 'Our SEO experts conduct thorough audits, optimise your site structure, build quality backlinks, and deliver monthly performance reports so you can track every gain.',
  },
  {
    number: '04',
    title: 'Graphics & Design',
    slug: 'graphics-design',
    description: 'Eye-catching design work across print, digital, and motion — creatives that stop the scroll and tell your story.',
    tags: ['Graphic Design', 'UI/UX', 'Motion Graphics', 'Social Creatives', 'Print'],
    detailed: 'Our talented designers create stunning visual content for all mediums, aligned with your brand identity and crafted to resonate with your target audience.',
  },
  {
    number: '05',
    title: 'IT Services',
    slug: 'it-services',
    description: 'End-to-end web development — WordPress, Shopify, React, Next.js, Laravel, Webflow, Web Apps, SaaS, and more.',
    tags: ['WordPress', 'Shopify', 'React / Next.js', 'Laravel', 'Web Apps'],
    detailed: 'We build custom websites and web applications using modern, scalable technology. From simple landing pages to complex SaaS products, we deliver fast, secure, and conversion-optimised solutions.',
  },
  {
    number: '06',
    title: 'Social Media Management',
    slug: 'social-media',
    description: 'Strategic social media presence that builds community, drives engagement, and grows your brand across all platforms.',
    tags: ['Content Creation', 'Community Management', 'Analytics', 'Growth Strategy'],
    detailed: 'We handle all aspects of social media including content creation, posting schedules, engagement monitoring, and analytics. Our strategies focus on building authentic communities around your brand.',
  },
]

// Footer services list (one column)
export const FOOTER_SERVICES = [
  { label: 'Performance Marketing', href: '/services/performance-marketing' },
  { label: 'Google Ads & PPC', href: '/services/performance-marketing/google-ads' },
  { label: 'Meta / Facebook Ads', href: '/services/performance-marketing/meta-ads' },
  { label: 'Branding', href: '/services/branding' },
  { label: 'Logo Design', href: '/services/branding/logo-design' },
  { label: 'SEO Services', href: '/services/seo' },
  { label: 'Local SEO', href: '/services/seo/local-seo' },
  { label: 'Graphics & Design', href: '/services/graphics-design' },
  { label: 'UI/UX Design', href: '/services/graphics-design/ui-ux' },
  { label: 'IT Services', href: '/services/it-services' },
  { label: 'WordPress Development', href: '/services/it-services/wordpress' },
  { label: 'Shopify / E-commerce', href: '/services/it-services/shopify' },
  { label: 'React & Next.js', href: '/services/it-services/react-nextjs' },
  { label: 'Social Media Management', href: '/services/social-media' },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'Meridian',
    category: 'Brand Identity',
    year: '2024',
    gradient: 'from-stone-900 via-zinc-800 to-stone-900',
    accent: '#C8B89A',
    description: 'Full brand identity system for a luxury real estate consultancy.',
    index: '01',
  },
  {
    id: 2,
    title: 'Verdant',
    category: 'Digital Experience',
    year: '2024',
    gradient: 'from-emerald-950 via-teal-900 to-emerald-950',
    accent: '#6EE7B7',
    description: 'E-commerce platform redesign for a premium skincare brand.',
    index: '02',
  },
  {
    id: 3,
    title: 'Lunara',
    category: 'Performance Marketing',
    year: '2024',
    gradient: 'from-indigo-950 via-violet-900 to-indigo-950',
    accent: '#A78BFA',
    description: '3× ROAS growth campaign for a global wellness startup.',
    index: '03',
  },
  {
    id: 4,
    title: 'Oaken',
    category: 'Creative Strategy',
    year: '2023',
    gradient: 'from-amber-950 via-orange-900 to-amber-950',
    accent: '#FCD34D',
    description: 'Full positioning and campaign strategy for a craft spirits label.',
    index: '04',
  },
  {
    id: 5,
    title: 'Helix',
    category: 'SEO & Growth',
    year: '2023',
    gradient: 'from-blue-950 via-cyan-900 to-blue-950',
    accent: '#67E8F9',
    description: '4× organic traffic growth for a fintech SaaS product.',
    index: '05',
  },
  {
    id: 6,
    title: 'Solen',
    category: 'Branding & Design',
    year: '2023',
    gradient: 'from-rose-950 via-pink-900 to-rose-950',
    accent: '#FDA4AF',
    description: 'Visual identity and packaging for a Scandinavian coffee roaster.',
    index: '06',
  },
]

export const METRICS = [
  { value: 10, suffix: 'Cr+', label: 'Ad Spend Managed (₹)', tagline: 'From Google Ads to Meta — every rupee tracked and optimised.' },
  { value: 4, suffix: '×+', label: 'Average ROAS Delivered', tagline: 'Return on ad spend achieved across 60+ active accounts.' },
  { value: 250, suffix: '+', label: 'Projects Delivered', tagline: 'Campaigns, websites, brands, and SEO programmes — built end to end.' },
  { value: 92, suffix: '%', label: 'Client Retention Rate', tagline: 'Not just satisfied — they stay, refer, and grow with us.' },
]

export const TESTIMONIALS = [
  {
    id: 1,
    quote: 'AddMads transformed our ad spend into a growth engine. Our Google Ads ROAS went from 1.8× to 4.5× within three months. Absolute game-changers.',
    author: 'Rahul Sharma',
    role: 'CEO, ShopNest India',
    rating: 5,
    avatar: 'RS',
    color: '#E60000',
  },
  {
    id: 2,
    quote: 'The branding work they did for us was world-class. We finally have an identity that matches our ambition. Our customer recall doubled post-rebrand.',
    author: 'Priya Mehta',
    role: 'Founder, Verdant Skincare',
    rating: 5,
    avatar: 'PM',
    color: '#6EE7B7',
  },
  {
    id: 3,
    quote: 'Our website went from page 6 to page 1 on Google within 5 months of partnering with AddMads on SEO. The results speak for themselves.',
    author: 'Vikram Nair',
    role: 'Marketing Head, Lunara Wellness',
    rating: 5,
    avatar: 'VN',
    color: '#A78BFA',
  },
  {
    id: 4,
    quote: 'The Next.js website they built for us loads in under 1.2 seconds and converts 40% better than our old site. Worth every rupee.',
    author: 'Ananya Gupta',
    role: 'COO, Helix Financial',
    rating: 5,
    avatar: 'AG',
    color: '#67E8F9',
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep-dive workshops, competitor analysis, and audience research to understand your goals, market, and opportunity gaps.',
    duration: '1–2 wks',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Channel selection, messaging architecture, and creative direction aligned to your KPIs and business objectives.',
    duration: '1 wk',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'We build, launch, and run your campaigns or deliverables with precision — on time, on brand, on budget.',
    duration: '2–6 wks',
  },
  {
    number: '04',
    title: 'Optimise',
    description: 'Continuous testing, data analysis, and iteration to compound performance month on month. Full transparency always.',
    duration: 'Ongoing',
  },
]

export const MARQUEE_ITEMS = [
  'Performance Marketing',
  'Brand Identity',
  'SEO Growth',
  'Web Development',
  'Google Ads',
  'Meta Ads',
  'Graphic Design',
  'UI/UX Design',
  'Shopify',
  'Next.js',
]

export const FAQS = [
  {
    id: 1,
    question: 'What is AddMads and what digital marketing services does it offer?',
    answer: 'AddMads is a full-service digital marketing agency based in India that specialises in Performance Marketing (Google Ads, Meta Ads, PPC, Retargeting), SEO (Technical, On-Page, Off-Page, Local, E-commerce), Branding & Visual Identity, Graphics & UI/UX Design, IT & Web Development (WordPress, Shopify, React, Next.js, Laravel), and Social Media Management. Every service is data-driven and built to deliver measurable ROI.',
  },
  {
    id: 2,
    question: 'How does AddMads help businesses rank on Google and appear in AI search results like ChatGPT and Gemini?',
    answer: 'AddMads uses a three-layer approach: (1) Traditional SEO — technical optimisation, schema markup, keyword strategy, and link building to rank on Google; (2) AEO (Answer Engine Optimisation) — structuring content as direct, concise answers to trigger Google\'s AI Overviews and featured snippets; (3) GEO (Generative Engine Optimisation) — building authoritative, well-cited content that AI models like ChatGPT, Gemini, Perplexity, and Claude pull when generating answers. Businesses that appear in AI answers gain trust and visibility beyond traditional blue-link rankings.',
  },
  {
    id: 3,
    question: 'What is Answer Engine Optimisation (AEO) and why does it matter in 2025?',
    answer: 'Answer Engine Optimisation (AEO) is the practice of structuring your content so that AI-powered search tools — Google AI Overviews, Bing Copilot, ChatGPT Search — surface your brand as the direct answer to a user\'s question. Unlike traditional SEO which targets ranked links, AEO targets the zero-click response box at the top of search. In 2025, over 30% of Google searches return an AI Overview — if your brand is not in that box, you lose visibility. AddMads builds AEO-ready content, FAQ schema, and entity-optimised pages that consistently win these placements.',
  },
  {
    id: 4,
    question: 'What is Generative Engine Optimisation (GEO) and how does AddMads implement it?',
    answer: 'Generative Engine Optimisation (GEO) is the discipline of making your brand\'s expertise, facts, and content citable by large language models (LLMs) such as ChatGPT, Google Gemini, Perplexity AI, and Claude. AddMads implements GEO by: building authoritative long-form content with clear factual claims, earning mentions from high-authority publications and industry sites, implementing structured data (JSON-LD) for entities, and ensuring your brand appears consistently across review platforms, directories, and social channels that LLMs reference during training and retrieval. The result is your brand appearing in AI-generated answers whenever users ask questions in your niche.',
  },
  {
    id: 5,
    question: 'How long does it take to see results from SEO with AddMads?',
    answer: 'SEO results follow a predictable curve: technical fixes and on-page optimisation typically produce crawlability and indexation gains within 4–6 weeks. Ranking improvements for medium-competition keywords appear in 3–5 months. Significant organic traffic growth and top-3 rankings for competitive terms usually materialise in 6–12 months with consistent effort. AddMads provides monthly ranking reports, Google Search Console data, and traffic analytics so you track every gain in real time.',
  },
  {
    id: 6,
    question: 'What ROAS can I expect from Google Ads and Meta Ads campaigns managed by AddMads?',
    answer: 'ROAS varies by industry, product margin, and landing page quality, but AddMads clients commonly achieve 3×–6× ROAS within 60–90 days of campaign optimisation. Our process includes audience segmentation, ad creative A/B testing, bid strategy refinement, and funnel-level tracking (impression → click → lead → sale). We set realistic targets during onboarding and share a live performance dashboard so you see exactly where every rupee goes.',
  },
  {
    id: 7,
    question: 'Which website platforms does AddMads build on?',
    answer: 'AddMads builds websites on WordPress (including WooCommerce), Shopify, Webflow, Wix, Squarespace, React (with Next.js for SEO-optimised, server-rendered apps), PHP / Laravel, and Node.js. We match the stack to your goal: WordPress for content-rich sites, Shopify for e-commerce, Next.js for high-performance SaaS or marketing sites. All sites are built mobile-first, Core Web Vitals-optimised, and schema-marked up for maximum search visibility.',
  },
  {
    id: 8,
    question: 'How much does digital marketing cost with AddMads?',
    answer: 'AddMads offers tiered pricing to suit different stages: Performance Marketing campaigns start at ₹25,000/month (management fee) with a minimum ad spend of ₹50,000/month. SEO retainers begin at ₹15,000/month. Branding and identity projects start at ₹30,000. Website development ranges from ₹15,000 for landing pages to ₹3,00,000+ for custom web apps. All pricing is transparent — no hidden fees. Contact us for a custom proposal based on your business goals.',
  },
  {
    id: 9,
    question: 'Does AddMads work with startups, D2C brands, and enterprise businesses?',
    answer: 'Yes. AddMads works with businesses at every stage — from bootstrapped startups running their first ad campaigns, to D2C brands scaling to ₹1 crore+ in monthly revenue, to enterprise clients requiring multi-channel digital transformation. Our engagement models flex to match your team, budget, and growth pace. We have delivered results for clients in e-commerce, real estate, healthcare, finance, FMCG, EdTech, and SaaS.',
  },
  {
    id: 10,
    question: 'How does AddMads measure and report marketing performance?',
    answer: 'Every AddMads client gets: a live Google Data Studio / Looker Studio dashboard updated daily, monthly written performance reports with insights and recommendations, Google Analytics 4 (GA4) event tracking and goal setup, call tracking and lead attribution, and quarterly business reviews. We track KPIs aligned to your goals — ROAS, CPA, CPL, organic sessions, keyword rankings, Domain Authority, conversion rate, and revenue generated. Full transparency is non-negotiable.',
  },
  {
    id: 11,
    question: 'What makes AddMads different from other digital marketing agencies in India?',
    answer: 'Three things set AddMads apart: (1) Full-funnel ownership — we handle strategy, creative, media buying, SEO, web development, and analytics under one roof, so there are no handoff gaps; (2) AI-era search readiness — we build content and technical infrastructure for GEO and AEO, not just traditional SEO, so your brand appears in Google, ChatGPT, Gemini, and Perplexity; (3) Transparent performance — every rupee is tracked, every campaign result is reported, and you own all accounts and data. No black-box billing, no lock-in.',
  },
  {
    id: 12,
    question: 'Can AddMads help my brand appear in ChatGPT and Gemini answers?',
    answer: 'Yes. AddMads\' GEO (Generative Engine Optimisation) service is specifically designed to make your brand appear in AI-generated answers on ChatGPT, Google Gemini, Perplexity AI, Microsoft Copilot, and similar tools. We do this by: publishing expert-authored, well-cited content that LLMs reference; earning authoritative backlinks and press mentions; ensuring your brand data is consistent across the web (NAP, schema, Wikipedia/Wikidata presence where applicable); and optimising for the conversational query patterns AI users type. This is the frontier of digital marketing in 2025 and beyond.',
  },
]
