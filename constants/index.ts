export const CONTACT_PHONE = '+91-9220872212'
export const CONTACT_EMAIL = 'info@addmads.com'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasSubmenu: true },
  { label: 'Portfolio', href: '/portfolio' },
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

export const BUDGET_RANGES = [
  { value: 'below-50k', label: 'Below ₹50,000' },
  { value: '50k-2l', label: '₹50,000 – ₹2,00,000' },
  { value: '2l-5l', label: '₹2,00,000 – ₹5,00,000' },
  { value: 'above-5l', label: 'Above ₹5,00,000' },
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
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 250, suffix: '+', label: 'Projects Delivered' },
  { value: 7, suffix: 'yr', label: 'Industry Experience' },
  { value: 60, suffix: '+', label: 'Global Clients' },
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
    question: 'What services does AddMads offer?',
    answer: 'AddMads offers Performance Marketing (Google Ads, Meta Ads, Email), Branding, SEO, Graphics & Design, IT Services (WordPress, Shopify, React, Next.js, Laravel, Web Apps, SaaS, Landing Pages, AI), and Social Media Management.',
  },
  {
    id: 2,
    question: 'What is your minimum budget for marketing campaigns?',
    answer: 'We work with budgets starting from ₹50,000/month for performance marketing. Our strategy and branding services start from ₹25,000. We tailor our approach to match your business stage and goals.',
  },
  {
    id: 3,
    question: 'How long before I see results from SEO?',
    answer: 'SEO is a long-term play. Most clients see measurable improvements in 3–5 months, with significant ranking gains in 6–9 months. We set realistic expectations and track progress monthly.',
  },
  {
    id: 4,
    question: 'Do you work with startups and small businesses?',
    answer: 'Absolutely. We work with businesses of all sizes — from early-stage startups to established enterprises. Our flexible engagement models are designed to fit varied budgets and growth stages.',
  },
  {
    id: 5,
    question: 'How do you measure campaign performance?',
    answer: 'We track KPIs relevant to your goals: ROAS, CPA, CTR, conversion rates, organic traffic, rankings, and more. You get detailed monthly reports and access to a live performance dashboard.',
  },
  {
    id: 6,
    question: 'Can you build websites on WordPress, Shopify, or custom frameworks?',
    answer: 'Yes — we build on WordPress, Shopify, Webflow, Wix, PHP/Laravel, React, Next.js, and Node.js. We recommend the best stack based on your needs, scalability requirements, and budget.',
  },
  {
    id: 7,
    question: 'How long does a website project take?',
    answer: 'A landing page takes 7–14 days. A full business website takes 3–6 weeks. Custom web apps or e-commerce platforms typically take 6–12 weeks depending on complexity.',
  },
  {
    id: 8,
    question: 'Do you offer ongoing support after project completion?',
    answer: 'Yes. All project deliverables include 30 days of free post-launch support. We also offer retainer packages for ongoing maintenance, SEO, marketing, and design needs.',
  },
  {
    id: 9,
    question: 'How can I get started with AddMads?',
    answer: 'Simply fill out the contact form on this page or call us at +91-9220872212. Our team will respond within 24 hours to discuss your project and provide a no-obligation proposal.',
  },
  {
    id: 10,
    question: 'Do you integrate forms with Zoho CRM?',
    answer: 'Yes. We can integrate your website lead forms with Zoho CRM so every inquiry is captured, tracked, and followed up automatically. We handle the full Zoho setup for you.',
  },
]
