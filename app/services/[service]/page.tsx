'use client'

import { useRef } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { MEGA_MENU_CATEGORIES } from '@/constants'
import Navbar from '@/components/Navbar'
import UnifiedForm from '@/components/UnifiedForm'
import FAQs from '@/components/FAQs'
import Footer from '@/components/Footer'
import ServiceCoverflow from '@/components/ServiceCoverflow'
import { useRevealAll } from '@/lib/useRevealAll'

// ─── Service data map ────────────────────────────────────────────────────────
const SERVICE_DATA: Record<string, {
  title: string
  tagline: string
  description: string
  benefits: { title: string; body: string }[]
  process: { title: string; body: string }[]
  coverflow: { title: string; description: string; tag: string; href: string }[]
  faqs: { question: string; answer: string }[]
}> = {
  'performance-marketing': {
    title: 'Performance Marketing',
    tagline: 'Every Rupee Tracked. Every Result Measured.',
    description: 'We build high-ROAS ad campaigns across Google, Meta, and more — with transparent reporting and continuous optimisation to maximise your marketing ROI.',
    benefits: [
      { title: 'Google Ads & PPC', body: 'Search, display, and shopping campaigns engineered for conversions.' },
      { title: 'Meta / Facebook Ads', body: 'Precise audience targeting and creative testing on Facebook & Instagram.' },
      { title: 'Retargeting', body: 'Re-engage warm audiences and recover lost conversions at scale.' },
      { title: 'Funnel Optimisation', body: 'Full-funnel strategy from awareness to purchase and retention.' },
      { title: 'A/B Testing', body: 'Continuous creative and landing page testing to compound performance.' },
      { title: 'Transparent Reporting', body: 'Real-time dashboards and monthly deep-dive reports.' },
    ],
    process: [
      { title: 'Audit & Discovery', body: 'We audit your existing campaigns, accounts, and funnel.' },
      { title: 'Strategy', body: 'Channel mix, budget allocation, targeting, and creative direction.' },
      { title: 'Campaign Build', body: 'We set up campaigns with proper tracking and conversion events.' },
      { title: 'Launch & Monitor', body: 'Live monitoring in the first 72 hours and rapid adjustments.' },
      { title: 'Optimise', body: 'Weekly optimisation cycles based on performance data.' },
      { title: 'Report & Scale', body: 'Monthly reports + scaling winning campaigns.' },
    ],
    coverflow: [
      { title: 'Google Ads & PPC', description: 'Search, shopping, and display ads that capture buyers at the right moment.', tag: 'Search', href: '/services/performance-marketing/google-ads' },
      { title: 'Meta / Facebook Ads', description: 'Target your ideal customer on Facebook and Instagram with precision.', tag: 'Social', href: '/services/performance-marketing/meta-ads' },
      { title: 'Social Media Marketing', description: 'Organic and paid social strategies that build and convert audiences.', tag: 'Organic+Paid', href: '/services/performance-marketing/social-media' },
      { title: 'Email Marketing', description: 'Automated sequences and campaigns that nurture leads and drive repeat sales.', tag: 'Email', href: '/services/performance-marketing/email-marketing' },
      { title: 'Content Marketing', description: 'SEO content and thought leadership that builds long-term authority.', tag: 'Content', href: '/services/performance-marketing/content-marketing' },
      { title: 'Influencer Marketing', description: 'Authentic creator partnerships that drive awareness and conversions.', tag: 'Influencer', href: '/services/performance-marketing/influencer' },
    ],
    faqs: [
      { question: 'How much ad spend do I need to start with Google or Meta Ads?', answer: 'We recommend a minimum ad spend of ₹30,000–₹50,000 per month to generate statistically meaningful performance data. Below this threshold, Smart Bidding algorithms lack the conversion data they need to optimise effectively. Our management fee is separate from and on top of your ad spend.' },
      { question: 'How long does it take to see results from paid advertising?', answer: 'Most clients see initial results (leads, sales) within the first 7–14 days of campaign launch. Optimised, consistent results typically emerge in 60–90 days as we gather data, refine targeting, and improve bidding strategies. Month 3–6 is when most campaigns reach their performance peak.' },
      { question: 'What ROAS can I realistically expect?', answer: 'ROAS depends on your industry, product margins, and landing page quality. AddMads clients commonly achieve 3×–6× ROAS within 60–90 days of managed optimisation. We set transparent, data-backed targets during onboarding and share a live performance dashboard so you track results in real time.' },
      { question: 'Do you manage both Google Ads and Meta Ads?', answer: 'Yes. We manage campaigns across Google Search, Google Display, Google Shopping, YouTube, Meta (Facebook & Instagram), and LinkedIn. For most businesses we recommend a multi-channel strategy, but we can start with a single platform if budget is limited and expand once results are proven.' },
      { question: 'Can you take over an existing ad account?', answer: 'Absolutely. We audit your existing accounts first to identify waste, structural issues, and opportunities. We then restructure campaigns for optimal performance while protecting any historical data and conversion history that the algorithms depend on.' },
      { question: 'How do you report on campaign performance?', answer: 'Every client receives a live Google Looker Studio / Data Studio dashboard updated daily, monthly written reports with analysis and recommendations, and quarterly strategy reviews. You have full transparency into spend, impressions, clicks, conversions, CPA, and ROAS at all times.' },
    ],
  },
  'branding': {
    title: 'Branding',
    tagline: 'A Brand That People Remember, Trust, and Choose.',
    description: 'We build brand identities from the ground up — strategy, logo, visual language, voice, and guidelines — so your business stands out and stays consistent.',
    benefits: [
      { title: 'Brand Strategy', body: 'Market positioning, audience personas, and competitive differentiation.' },
      { title: 'Logo Design', body: 'Memorable, scalable logos that work across all contexts.' },
      { title: 'Visual Identity', body: 'Colour palette, typography, iconography, and visual system.' },
      { title: 'Brand Guidelines', body: 'A comprehensive brand book for consistent application everywhere.' },
      { title: 'Brand Voice', body: 'Messaging framework, tone of voice, and key messaging pillars.' },
      { title: 'Packaging Design', body: 'Eye-catching product packaging that stands out on shelf and online.' },
    ],
    process: [
      { title: 'Discovery', body: 'Research into your market, customers, and competitors.' },
      { title: 'Positioning', body: 'Define your brand promise, personality, and differentiation.' },
      { title: 'Concept Design', body: 'Multiple logo and visual concepts for your review.' },
      { title: 'Refinement', body: 'Iterate until the design perfectly reflects your brand.' },
      { title: 'Brand Book', body: 'Produce full brand guidelines documentation.' },
      { title: 'Rollout Support', body: 'Help applying your brand across all platforms and touchpoints.' },
    ],
    coverflow: [
      { title: 'Brand Strategy', description: 'Market positioning and brand architecture for long-term success.', tag: 'Strategy', href: '/services/branding/brand-strategy' },
      { title: 'Logo Design', description: 'Timeless, versatile logos that work everywhere.', tag: 'Logo', href: '/services/branding/logo-design' },
      { title: 'Visual Identity', description: 'Complete visual system — colours, fonts, imagery style.', tag: 'Identity', href: '/services/branding/visual-identity' },
      { title: 'Brand Guidelines', description: 'Comprehensive brand book for consistent application.', tag: 'Guidelines', href: '/services/branding/brand-guidelines' },
      { title: 'Brand Voice', description: 'Tone of voice and messaging that resonates with your audience.', tag: 'Voice', href: '/services/branding/brand-voice' },
      { title: 'Packaging Design', description: 'Product packaging that converts at the shelf and online.', tag: 'Packaging', href: '/services/branding/packaging' },
    ],
    faqs: [
      { question: 'How long does a complete branding project take?', answer: 'A full brand identity project — strategy, logo, visual identity, brand guidelines, and voice — typically takes 6–10 weeks. Smaller projects such as logo design only take 2–4 weeks. Timeline depends on the number of revision rounds and how quickly feedback is provided. We share a detailed project timeline at kickoff.' },
      { question: 'What is included in a brand identity package?', answer: 'Our full brand identity package includes brand strategy (positioning, audience personas, competitive analysis), logo design (primary, secondary, and icon lockups), visual identity (colour palette, typography, imagery style), brand guidelines document, and brand voice and messaging framework. We can also add packaging design, social media templates, and stationery as optional add-ons.' },
      { question: 'How many logo concepts do we receive?', answer: 'We present 3 distinct logo concepts at the initial presentation stage, each representing a different creative direction. You select one direction to develop further, and we include up to 3 rounds of revisions to refine the chosen concept. This process ensures the final logo is exactly right without endless cycles of minor tweaks.' },
      { question: 'Do you work with startups that don\'t have an existing brand?', answer: 'Yes, we love working with startups. A clean slate actually makes brand strategy easier — there are no legacy associations to work around. We have developed brand identities for funded startups, bootstrapped founders, and D2C brands launching their first product. We also offer startup-friendly phased engagement — strategy and core identity first, then guidelines and additional assets as you grow.' },
      { question: 'What file formats do you deliver the logo in?', answer: 'We deliver the complete logo suite in SVG (infinitely scalable vector), PNG (transparent background, various sizes), PDF (print-ready), and AI or EPS source files. All colour variants are included — full colour, black, white, and any brand colour variants — so you always have the right file for any application.' },
      { question: 'Can you help us apply the brand across all our platforms after delivery?', answer: 'Yes. After delivering the brand identity, we offer rollout support — applying your brand to your website, social media profiles, email signatures, business cards, presentation templates, and any other touchpoints. This ensures your new brand launches consistently everywhere simultaneously, maximising the impact of the rebrand.' },
    ],
  },
  'seo': {
    title: 'SEO Services',
    tagline: 'Rank Higher. Get Found. Grow Organically.',
    description: 'Comprehensive SEO strategies — technical, on-page, off-page, local, and e-commerce — that build lasting organic traffic and reduce dependency on paid ads.',
    benefits: [
      { title: 'Technical SEO', body: 'Site speed, Core Web Vitals, crawlability, schema markup.' },
      { title: 'On-Page SEO', body: 'Keyword optimisation, content structure, and meta optimisation.' },
      { title: 'Off-Page & Links', body: 'High-authority backlink building through white-hat strategies.' },
      { title: 'Local SEO', body: 'Google Business Profile, local citations, and local keyword targeting.' },
      { title: 'E-commerce SEO', body: 'Product page, category page, and site structure optimisation.' },
      { title: 'Monthly Reporting', body: 'Detailed ranking, traffic, and ROI reports every month.' },
    ],
    process: [
      { title: 'SEO Audit', body: 'Comprehensive technical and content audit of your site.' },
      { title: 'Keyword Research', body: 'High-value keyword identification and gap analysis.' },
      { title: 'On-Page Work', body: 'Optimise all pages, meta, content, and internal links.' },
      { title: 'Technical Fixes', body: 'Speed, mobile, Core Web Vitals, and schema implementation.' },
      { title: 'Link Building', body: 'Ongoing white-hat link acquisition campaigns.' },
      { title: 'Track & Report', body: 'Monthly performance reports and continuous optimisation.' },
    ],
    coverflow: [
      { title: 'Technical SEO', description: 'Fix the foundation — speed, structure, and crawlability.', tag: 'Technical', href: '/services/seo/technical-seo' },
      { title: 'On-Page SEO', description: 'Keyword-rich content and metadata that ranks.', tag: 'On-Page', href: '/services/seo/on-page' },
      { title: 'Off-Page & Links', description: 'Authority-building backlinks from real, relevant sources.', tag: 'Off-Page', href: '/services/seo/off-page' },
      { title: 'Local SEO', description: 'Dominate local search and Google Maps results.', tag: 'Local', href: '/services/seo/local-seo' },
      { title: 'E-commerce SEO', description: 'Optimise product and category pages for buyer intent keywords.', tag: 'E-commerce', href: '/services/seo/ecommerce-seo' },
      { title: 'YouTube SEO', description: 'Rank your videos on YouTube and Google search.', tag: 'YouTube', href: '/services/seo/youtube-seo' },
    ],
    faqs: [
      { question: 'How long does SEO take to show results?', answer: 'Technical fixes and on-page optimisation produce crawlability and indexation gains within 4–6 weeks. Ranking improvements for medium-competition keywords typically appear in 3–5 months. Significant organic traffic growth and top-3 rankings for competitive terms usually materialise in 6–12 months. SEO is a compounding investment — results accumulate and accelerate over time rather than stopping when you stop spending (unlike paid ads).' },
      { question: 'What is the difference between SEO, AEO, and GEO?', answer: 'SEO (Search Engine Optimisation) targets traditional Google blue-link rankings. AEO (Answer Engine Optimisation) targets Google AI Overviews, featured snippets, and zero-click answers at the top of search results. GEO (Generative Engine Optimisation) targets AI chatbots like ChatGPT, Gemini, Perplexity, and Claude — making your brand appear when users ask these tools questions in your category. AddMads implements all three layers as part of our SEO service.' },
      { question: 'Do you build backlinks using white-hat methods only?', answer: 'Yes, exclusively. We build backlinks through editorial outreach (earning links from relevant publications by offering genuinely useful content), digital PR (creating data-led stories that journalists link to), resource link building (creating linkable assets that other sites want to reference), and partner/supplier link exchanges. We never buy links, use PBNs, or employ any technique that violates Google\'s Webmaster Guidelines. Our backlinks last — they are not wiped out in the next algorithm update.' },
      { question: 'What is included in your monthly SEO reporting?', answer: 'Monthly reports include: keyword ranking movements (top 50 tracked keywords with weekly position data), organic traffic vs. the prior month and year (Google Analytics 4), Core Web Vitals scores, new backlinks acquired, content published and optimised, technical issues found and fixed, and next month\'s planned activities. All clients also receive a live Looker Studio dashboard for daily tracking.' },
      { question: 'Can you help my business rank in AI search (ChatGPT, Gemini)?', answer: 'Yes. Our GEO (Generative Engine Optimisation) service is designed specifically to make your brand appear in AI-generated answers. We build authoritative long-form content that LLMs cite, earn mentions from high-authority publications, implement comprehensive schema markup, and ensure your brand data is consistent across the web. This is the frontier of organic visibility in 2025 and beyond.' },
      { question: 'Do you work on local SEO and Google Business Profile?', answer: 'Yes. Local SEO is a distinct discipline that combines Google Business Profile optimisation, local citation building (NAP consistency across directories), location-specific keyword targeting, local schema markup, and review generation strategy. For businesses serving specific cities or regions, local SEO often delivers faster and more impactful results than national SEO campaigns.' },
    ],
  },
  'graphics-design': {
    title: 'Graphics & Design',
    tagline: 'Visuals That Stop the Scroll and Tell Your Story.',
    description: 'From social media creatives to UI/UX and motion graphics — we create stunning visual content that captures attention, builds brand recognition, and drives action.',
    benefits: [
      { title: 'Graphic Design', body: 'Brochures, banners, ads, and all print and digital collateral.' },
      { title: 'UI/UX Design', body: 'User-first interface and experience design for web and mobile.' },
      { title: 'Motion Graphics', body: 'Animated videos, reels, and ads that stand out in feeds.' },
      { title: 'Print Design', body: 'Business cards, packaging, catalogues, and all print materials.' },
      { title: 'Social Creatives', body: 'Thumb-stopping posts, stories, and ad creatives for all platforms.' },
      { title: 'Presentation Design', body: 'Investor decks, pitch presentations, and reports that impress.' },
    ],
    process: [
      { title: 'Brief', body: 'Understand your brand, audience, and design objectives.' },
      { title: 'Concept', body: 'Develop multiple creative directions for review.' },
      { title: 'Design', body: 'Produce high-fidelity designs with your feedback.' },
      { title: 'Revise', body: 'Unlimited revisions until you are 100% satisfied.' },
      { title: 'Deliver', body: 'All files in required formats — print-ready and digital.' },
      { title: 'Support', body: '30 days post-delivery support for any adjustments.' },
    ],
    coverflow: [
      { title: 'Graphic Design', description: 'All print and digital design needs handled by our team.', tag: 'Design', href: '/services/graphics-design/graphic-design' },
      { title: 'UI/UX Design', description: 'Interfaces that are beautiful, intuitive, and conversion-optimised.', tag: 'UI/UX', href: '/services/graphics-design/ui-ux' },
      { title: 'Motion Graphics', description: 'Animated content that gets shared and remembered.', tag: 'Motion', href: '/services/graphics-design/motion' },
      { title: 'Print Design', description: 'Professional print materials that make the right impression.', tag: 'Print', href: '/services/graphics-design/print' },
      { title: 'Social Creatives', description: 'Platform-native creatives that drive engagement and clicks.', tag: 'Social', href: '/services/graphics-design/social-creatives' },
      { title: 'Presentation Design', description: 'Stunning decks that help you win deals and close funding.', tag: 'Presentation', href: '/services/graphics-design/presentation' },
    ],
    faqs: [
      { question: 'What design file formats do you provide on delivery?', answer: 'We deliver all projects in the formats required for their intended use. Digital assets come as PNG (web-optimised), SVG (scalable vector), and JPEG. Print assets come as print-ready PDF with bleed and trim marks. Motion graphics are delivered as MP4 and MOV. UI/UX designs are delivered as Figma files with all assets exported. Source files (AI, PSD, or Figma) are included in all deliveries.' },
      { question: 'How many revisions are included in a design project?', answer: 'All our design projects include 3 rounds of revisions as standard. Most projects are finalised within 2 rounds. If additional revisions are needed beyond 3, we accommodate them at a reasonable hourly rate. We find that clear briefing at the start eliminates the need for excessive revisions — we invest time at the brief stage to understand exactly what you need before starting design.' },
      { question: 'How long does a typical design project take?', answer: 'Timeline depends on the scope. Social media creative batches (10–20 posts): 5–7 business days. UI/UX design for a website or app: 3–6 weeks depending on the number of screens. Motion graphics (60–90 second video): 2–3 weeks. Presentation design: 3–5 business days. We share a timeline at the start of every project and communicate proactively if anything changes.' },
      { question: 'Can you work within our existing brand guidelines?', answer: 'Yes, and we prefer it. When a client has existing brand guidelines, our designers study them thoroughly before starting any work. We match your exact colour codes, typefaces, imagery style, and tone to ensure every deliverable feels on-brand. If you do not have brand guidelines, we can develop them as a separate project, or work to establish a consistent visual direction across your deliverables that becomes the de facto standard.' },
      { question: 'Do you design for both print and digital?', answer: 'Yes. Our team has expertise in both print and digital design with an understanding of the different requirements for each. Print design requires CMYK colour mode, minimum 300 DPI resolution, bleed and margin setup, and knowledge of print processes. Digital design requires RGB/HEX colour, appropriate file sizes for web performance, and responsiveness across screen sizes. We handle both without any additional complexity for you.' },
      { question: 'Can you create a month\'s worth of social media content at once?', answer: 'Yes, this is one of our most popular services. We create monthly content batches — typically 12–30 pieces — which include Instagram posts, stories, reels thumbnails, Facebook posts, and LinkedIn content, all following a content calendar that we plan with you. Batching content this way ensures visual consistency, reduces the stress of daily content creation, and allows us to optimise the visual mix based on your analytics.' },
    ],
  },
  'it-services': {
    title: 'IT Services',
    tagline: 'Build Fast. Build Right. Build to Scale.',
    description: 'End-to-end web and app development across every major platform and framework — WordPress, Shopify, React, Next.js, Laravel, Web Apps, SaaS, Landing Pages, and AI solutions.',
    benefits: [
      { title: 'WordPress Development', body: 'Custom themes, plugins, and WooCommerce stores.' },
      { title: 'Shopify / E-commerce', body: 'High-converting Shopify stores and custom ecommerce solutions.' },
      { title: 'React & Next.js', body: 'Fast, SEO-optimised web apps with modern frontend frameworks.' },
      { title: 'PHP / Laravel', body: 'Robust backend development for complex web applications.' },
      { title: 'Web Apps & SaaS', body: 'Full-stack SaaS products from MVP to enterprise scale.' },
      { title: 'AI & Automation', body: 'AI-powered tools, chatbots, and workflow automation.' },
    ],
    process: [
      { title: 'Discovery', body: 'Scope, tech stack selection, and project planning.' },
      { title: 'Design', body: 'UI/UX wireframes and visual design approved by you.' },
      { title: 'Development', body: 'Agile sprints with regular demo sessions.' },
      { title: 'QA & Testing', body: 'Comprehensive testing across devices and browsers.' },
      { title: 'Deployment', body: 'Launch to production with full monitoring setup.' },
      { title: 'Support', body: '30 days free support, then flexible retainer options.' },
    ],
    coverflow: [
      { title: 'WordPress', description: 'Custom WordPress sites, themes, and WooCommerce stores.', tag: 'CMS', href: '/services/it-services/wordpress' },
      { title: 'Shopify', description: 'High-converting ecommerce stores on the world\'s best platform.', tag: 'E-commerce', href: '/services/it-services/shopify' },
      { title: 'React & Next.js', description: 'Blazing-fast web apps with server-side rendering and SEO.', tag: 'Frontend', href: '/services/it-services/react-nextjs' },
      { title: 'PHP / Laravel', description: 'Scalable backend systems for complex business logic.', tag: 'Backend', href: '/services/it-services/laravel' },
      { title: 'Webflow / Wix', description: 'No-code to low-code solutions for rapid launches.', tag: 'No-Code', href: '/services/it-services/webflow-wix' },
      { title: 'Web Apps & SaaS', description: 'Full-stack SaaS products built for scale.', tag: 'SaaS', href: '/services/it-services/web-apps' },
      { title: 'Landing Pages', description: 'Conversion-optimised landing pages that turn clicks into leads.', tag: 'CRO', href: '/services/it-services/landing-pages' },
      { title: 'AI & Automation', description: 'AI-powered tools, chatbots, and business process automation.', tag: 'AI', href: '/services/it-services/ai-automation' },
    ],
    faqs: [
      { question: 'Which website platform is best for my business?', answer: 'The right platform depends on your specific needs. WordPress is best for content-heavy sites and businesses needing non-technical content management. Shopify is the gold standard for e-commerce. Next.js is ideal for high-performance marketing sites, SaaS products, and applications where speed and SEO are critical. We assess your requirements, team capabilities, and growth plans before recommending a platform — not the one that is easiest for us to build.' },
      { question: 'How long does a website build take?', answer: 'Timeline depends on the scope. A 5–8 page marketing website takes 4–6 weeks. A WooCommerce or Shopify store with 50–200 products takes 6–10 weeks. A custom web application or SaaS product typically takes 3–6 months depending on complexity. All timelines include discovery, design approval, development, QA testing, and launch. We share a detailed Gantt chart at project kickoff.' },
      { question: 'Do you provide ongoing website maintenance after launch?', answer: 'Yes. We offer 30 days of free post-launch support for all projects. After that, we offer flexible monthly maintenance retainers that cover plugin/dependency updates, security monitoring, performance checks, content updates, and priority bug fixes. Maintenance is not mandatory but strongly recommended — especially for WordPress and WooCommerce sites where updates are frequent and security is an ongoing concern.' },
      { question: 'Will my website be mobile-friendly and fast?', answer: 'Mobile-first and fast loading are non-negotiable requirements in every project we build. All our sites are built with responsive design (tested on phones, tablets, and desktops), optimised images (WebP format, lazy loading), minimal JavaScript payload, CDN delivery, and Core Web Vitals compliance. We typically achieve 90+ PageSpeed scores on all new builds. Our Next.js builds routinely load in under 1 second.' },
      { question: 'Can you integrate AI and automation into our website or business?', answer: 'Yes. We build AI integrations including customer service chatbots (trained on your data using Claude or GPT APIs), AI content generation tools, automated lead qualification and CRM integration, intelligent search, personalisation engines, and workflow automation. We also connect websites to external AI tools (Make.com, Zapier, n8n) for business process automation. Every AI integration is scoped for a clear ROI.' },
      { question: 'Do you handle hosting and domain setup?', answer: 'We can manage hosting setup on your preferred provider or recommend the best option for your platform. For Next.js projects, we typically deploy to Vercel for optimal performance. For WordPress, we recommend managed WordPress hosting (Kinsta, WP Engine) or cloud hosting on AWS/DigitalOcean. We help set up the domain, SSL certificate, email, CDN, and all technical infrastructure. Ongoing hosting costs are billed directly by the provider to you.' },
    ],
  },
  'social-media': {
    title: 'Social Media Management',
    tagline: 'Build a Community. Drive Engagement. Grow Your Brand.',
    description: 'We manage your entire social media presence — content creation, community management, analytics, and growth strategy — across Instagram, Facebook, LinkedIn, Twitter, and more.',
    benefits: [
      { title: 'Content Creation', body: 'Regular, platform-native content tailored to your audience.' },
      { title: 'Community Management', body: 'Active engagement with followers and brand community building.' },
      { title: 'Content Calendar', body: 'Strategic planning and scheduling for consistent posting.' },
      { title: 'Analytics & Reporting', body: 'Monthly reports on reach, engagement, and follower growth.' },
      { title: 'Growth Strategy', body: 'Proven tactics to grow followers and build brand authority.' },
      { title: 'Paid Social Integration', body: 'Boost top-performing posts and run targeted ad campaigns.' },
    ],
    process: [
      { title: 'Audit', body: 'Review of your current profiles, content, and competitors.' },
      { title: 'Strategy', body: 'Content pillars, tone of voice, and posting cadence.' },
      { title: 'Content Calendar', body: 'Monthly content planned and approved in advance.' },
      { title: 'Create & Post', body: 'High-quality content produced and published on schedule.' },
      { title: 'Engage', body: 'Daily community management and audience interaction.' },
      { title: 'Report', body: 'Monthly analytics report with insights and next month planning.' },
    ],
    coverflow: [
      { title: 'Instagram Management', description: 'Aesthetic feeds, reels, and stories that grow your following.', tag: 'Instagram', href: '/services/social-media' },
      { title: 'Facebook Management', description: 'Page management, content, and community engagement on Facebook.', tag: 'Facebook', href: '/services/social-media' },
      { title: 'LinkedIn Marketing', description: 'B2B-focused content and thought leadership on LinkedIn.', tag: 'LinkedIn', href: '/services/social-media' },
      { title: 'Content Creation', description: 'Graphics, reels, carousels, and copy for all platforms.', tag: 'Content', href: '/services/social-media' },
      { title: 'Community Management', description: '24/7 engagement with your audience across all platforms.', tag: 'Community', href: '/services/social-media' },
      { title: 'Influencer Outreach', description: 'Connect with relevant creators for authentic partnerships.', tag: 'Influencer', href: '/services/social-media' },
    ],
    faqs: [
      { question: 'Which social media platforms do you manage?', answer: 'We manage Instagram, Facebook, LinkedIn, X (Twitter), YouTube, Pinterest, and Threads. Most clients start with 2–3 platforms where their audience is most active. We recommend platform selection based on your business type, target demographic, and content format strengths — not just posting everywhere. Quality of engagement on fewer platforms consistently outperforms thin presence on many.' },
      { question: 'How many posts per week or month do you create?', answer: 'Our packages range from 12 posts per month (3 per week) for starter plans to 30+ posts per month for brands requiring daily content. Post frequency is determined by your platform mix, content format variety (static, carousel, reel, story), and budget. We plan a full month of content in advance, share it for approval, and schedule everything so nothing misses.' },
      { question: 'Do you create the content (graphics, copy, video) or just post existing material?', answer: 'We create everything. Our social media packages include full content production — original graphic design, copywriting, caption writing with hashtag strategy, and for video-enabled packages, reel scripting and editing. You provide brand assets and product/service information; we turn them into polished, platform-native content that is ready to publish. You review and approve before anything goes live.' },
      { question: 'How do you grow our follower count organically?', answer: 'Organic follower growth comes from consistent high-quality content, strategic hashtag use, community engagement (responding to comments, engaging with similar accounts), cross-promotion with complementary brands, and leveraging trending audio and formats on Reels/TikTok-style content. We do not use follower purchase services, bots, or follow-unfollow tactics — these inflate vanity numbers without building a real audience that engages and converts.' },
      { question: 'Do you respond to comments and DMs on our behalf?', answer: 'Yes, community management is included in our social media packages. We respond to comments and DMs within 24 hours during business days, using a brand voice guide we develop with you. For customer service queries that require specific information (order status, refunds, technical questions), we flag them for your team. For all general engagement, we handle it directly and consistently.' },
      { question: 'How do you measure the success of social media management?', answer: 'We track metrics aligned to your actual business goals, not vanity numbers. The key performance indicators we report on: reach and impressions (brand visibility), engagement rate (content quality and audience relevance), follower growth rate, website traffic from social (tracked in Google Analytics), and leads or conversions driven from social media. Monthly reports cover all of these with trend analysis and next-month recommendations.' },
    ],
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.service as string
  const data = SERVICE_DATA[slug]

  const heroRef     = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<(HTMLElement | null)[]>([])
  const processRef  = useRef<(HTMLElement | null)[]>([])

  useRevealAll()

  const category = MEGA_MENU_CATEGORIES.find(c => c.id === slug || c.href === `/services/${slug}`)

  if (!data) {
    return (
      <>
        <Navbar />
        <main style={{ paddingTop: 'var(--nav-h)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 24 }}>
          <h1 style={{ fontFamily: 'var(--font-tight)', fontSize: '2.5rem', color: '#111111' }}>Service Not Found</h1>
          <Link href="/services" style={{ padding: '12px 32px', background: '#E60000', color: '#FFFFFF', textDecoration: 'none', borderRadius: 6, fontFamily: 'var(--font-sans)', fontWeight: 600 }}>← Back to Services</Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 'var(--nav-h)' }}>

        {/* ── HERO ── */}
        <section ref={heroRef} style={{ background: '#FFFFFF', color: '#111111', padding: 'clamp(100px,14vw,180px) var(--container-px)', minHeight: '55vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: 860, position: 'relative', zIndex: 1 }}>
            <div data-a style={{ opacity: 0, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <Link href="/services" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(17,17,17,0.4)', textDecoration: 'none' }}>Services</Link>
              <span style={{ color: 'rgba(17,17,17,0.2)' }}>›</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: '#E60000' }}>{data.title}</span>
            </div>
            <h1 data-a style={{ opacity: 0, fontFamily: 'var(--font-tight)', fontSize: 'clamp(2.5rem,8vw,5.5rem)', fontWeight: 700, lineHeight: 1.1, color: '#111111', marginBottom: 20 }}>
              {data.title}
            </h1>
            <p data-a style={{ opacity: 0, fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.125rem,2vw,1.5rem)', fontWeight: 400, color: '#E60000', marginBottom: 20, fontStyle: 'italic' }}>
              {data.tagline}
            </p>
            <p data-a style={{ opacity: 0, fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9375rem,1.3vw,1.125rem)', color: 'rgba(17,17,17,0.55)', lineHeight: 1.75, maxWidth: 620, marginBottom: 40 }}>
              {data.description}
            </p>
            <div data-a style={{ opacity: 0 }}>
              <Link href="/contact" className="btn-red" style={{ padding: '14px 32px', fontSize: '1rem', fontWeight: 600 }}>Get Started Today</Link>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section id="benefits" style={{ background: '#F8F8F8', padding: 'clamp(80px,10vw,140px) var(--container-px)' }}>
          <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: '#111111', marginBottom: 48, lineHeight: 1.2 }}>
            What We Deliver
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {data.benefits.map((b, i) => (
              <div key={i} data-scroll ref={el => { benefitsRef.current[i] = el }} style={{ opacity: 0, background: '#FFFFFF', borderLeft: '3px solid #E60000', borderRadius: '0 8px 8px 0', padding: '24px 28px' }}>
                <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.125rem', fontWeight: 600, color: '#111111', marginBottom: 10 }}>{b.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(17,17,17,0.6)', lineHeight: 1.65, margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── COVERFLOW — related services ── */}
        <ServiceCoverflow
          title={`Explore ${data.title} Services`}
          cards={data.coverflow}
        />

        {/* ── PROCESS ── */}
        <section id="process" style={{ background: '#FFFFFF', padding: 'clamp(80px,10vw,140px) var(--container-px)' }}>
          <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: '#111111', marginBottom: 48, lineHeight: 1.2 }}>
            Our Process
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 32 }}>
            {data.process.map((step, i) => (
              <div key={i} data-scroll ref={el => { processRef.current[i] = el }} style={{ opacity: 0 }}>
                <div style={{ fontFamily: 'var(--font-tight)', fontSize: '3rem', fontWeight: 700, color: '#E60000', opacity: 0.35, lineHeight: 1, marginBottom: 16 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.25rem', fontWeight: 600, color: '#111111', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(17,17,17,0.55)', lineHeight: 1.65, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── OTHER SERVICES ── */}
        {category && (
          <section style={{ background: '#F5F5F5', padding: 'clamp(60px,8vw,100px) var(--container-px)' }}>
            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 700, color: '#111111', marginBottom: 32 }}>
              Also in {data.title}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {category.services.map(svc => (
                <Link key={svc.href} href={svc.href} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 20px',
                  background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.1)', borderRadius: 6,
                  fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: '#111111', textDecoration: 'none',
                  transition: 'all 0.25s',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#E60000'; el.style.color = '#E60000' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(17,17,17,0.1)'; el.style.color = '#111111' }}>
                  {svc.label} →
                </Link>
              ))}
            </div>
          </section>
        )}

        <UnifiedForm showLeftInfo={false} bgColor="#F8F8F8" />
        <FAQs faqs={data.faqs} />
      </main>

      <Footer />
    </>
  )
}
