import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UnifiedForm from '@/components/UnifiedForm'
import { MEGA_MENU_CATEGORIES } from '@/constants'

interface SubserviceData {
  tagline: string
  description: string
  deliverables: string[]
  process: { title: string; desc: string }[]
  faqs: { q: string; a: string }[]
}

const SUBSERVICE_DATA: Record<string, SubserviceData> = {
  // ── PERFORMANCE MARKETING ──────────────────────────────────────────────────
  'performance-marketing/google-ads': {
    tagline: 'Every rupee spent, accounted for.',
    description: 'We build and manage high-converting Google Ads campaigns — Search, Display, Shopping, and YouTube — engineered for maximum ROI. From keyword strategy and ad copy to bid management and conversion tracking, we handle every layer so you get leads and sales, not just clicks.',
    deliverables: [
      'Google Ads account audit & competitor analysis',
      'Keyword research and match-type strategy',
      'Search, Display, Shopping & YouTube campaign setup',
      'A/B-tested ad copy and creatives',
      'Conversion tracking (GA4 + Google Tag Manager)',
      'Monthly performance reports with actionable insights',
    ],
    process: [
      { title: 'Discovery & Audit', desc: 'We audit your existing account (or start fresh), analyse competitors, and identify the highest-opportunity keywords for your budget.' },
      { title: 'Campaign Architecture', desc: 'We structure campaigns by match type, audience, and intent — so the right ad reaches the right person at exactly the right moment.' },
      { title: 'Ad Copy & Creative', desc: 'Our copywriters craft multiple headline and description variants, then we test them scientifically to find what converts best.' },
      { title: 'Tracking & Attribution', desc: 'We install full conversion tracking — calls, form fills, purchases — giving you true ROI visibility, not just impression data.' },
      { title: 'Launch & Optimise', desc: 'Campaigns go live, then we monitor daily — adjusting bids, pausing underperformers, and scaling winners in real time.' },
      { title: 'Reporting & Growth', desc: 'Monthly reports map spend directly to results. We review with you, refine strategy, and plan the next month\'s growth lever.' },
    ],
    faqs: [
      { q: 'How much budget do I need to start with Google Ads?', a: 'We typically recommend a minimum of ₹30,000/month in ad spend so there\'s enough data to optimise. Our management fee is separate and scales with your budget.' },
      { q: 'How long before I see results?', a: 'Most clients see initial leads within the first week. Meaningful optimisation data builds over 30–60 days, after which performance compounds month on month.' },
      { q: 'Do you manage Google Shopping campaigns for e-commerce?', a: 'Yes — we set up and optimise Google Shopping (Performance Max included), syncing your product feed, bidding by margin, and creating custom audience segments.' },
      { q: 'Will I have access to my own Google Ads account?', a: 'Always. Your account, your data. We work as a manager — you retain full ownership and can access everything at any time.' },
      { q: 'What reporting do you provide?', a: 'You receive a monthly dashboard showing impressions, clicks, conversions, cost-per-conversion, and ROAS — plus a recorded walkthrough every month.' },
    ],
  },

  'performance-marketing/meta-ads': {
    tagline: 'Scroll-stopping ads that fill your funnel.',
    description: 'We run Meta (Facebook & Instagram) ad campaigns that convert — from awareness at the top of the funnel to retargeting at the bottom. Our team handles creative strategy, audience build-out, pixel setup, and continuous optimisation to drive down cost-per-result while scaling spend.',
    deliverables: [
      'Meta Pixel & Conversions API setup',
      'Audience research: custom, lookalike & interest targeting',
      'Full-funnel campaign structure (TOF/MOF/BOF)',
      'Static, carousel, video & Reel ad creatives',
      'A/B testing framework for creative and audience',
      'Weekly performance snapshots + monthly deep-dive',
    ],
    process: [
      { title: 'Pixel & Tracking', desc: 'We install and verify the Meta Pixel and Conversions API to ensure clean data flows from your website to Meta\'s ad engine.' },
      { title: 'Audience Architecture', desc: 'We map your buyer personas into Meta audiences — layering interests, behaviours, and lookalikes into a structured full-funnel framework.' },
      { title: 'Creative Production', desc: 'Our designers and copywriters produce multiple ad variations — thumb-stopping hooks, clear benefits, and strong CTAs — tested across formats.' },
      { title: 'Campaign Launch', desc: 'Campaigns launch with controlled budgets. We monitor delivery, frequency, and early signals every 48 hours to catch issues before they waste spend.' },
      { title: 'Continuous Optimisation', desc: 'Winners get scaled; losers get paused. We refresh creative every 3–4 weeks to combat ad fatigue and keep CPMs low.' },
      { title: 'Reporting & Strategy', desc: 'Monthly reports show cost per lead/purchase, ROAS, and audience insights — feeding the next creative and targeting cycle.' },
    ],
    faqs: [
      { q: 'Is Meta Ads still effective in 2025?', a: 'Absolutely. Meta\'s 3.2B+ monthly active users and advanced interest/behaviour targeting make it one of the highest-ROI channels for both B2C and B2B businesses.' },
      { q: 'What creative formats perform best?', a: 'Short-form video (Reels) and UGC-style static ads tend to win in most verticals today, but we always test multiple formats and let data decide.' },
      { q: 'Do I need a big budget?', a: 'We recommend a minimum of ₹20,000/month in ad spend. With that budget we can run a proper test-and-learn cycle across creative and audiences.' },
      { q: 'Can you run Instagram-only campaigns?', a: 'Yes. We can target Instagram-only placements, or split campaigns by placement if your audience skews toward one platform.' },
      { q: 'How do you handle iOS14+ tracking limitations?', a: 'We implement Conversions API (server-side tracking) alongside the pixel to recover lost signal, and we use Meta\'s Aggregated Event Measurement to prioritise your top 8 conversion events.' },
    ],
  },

  'performance-marketing/social-media': {
    tagline: 'Build a brand people follow — and buy from.',
    description: 'We manage your social media presence end-to-end: content planning, design, copywriting, scheduling, community management, and analytics. Whether it\'s Instagram, LinkedIn, X, or YouTube Shorts, we keep your brand consistent, relevant, and growing.',
    deliverables: [
      'Monthly content calendar (30+ posts)',
      'Platform-native graphics, Reels, and Stories',
      'Caption writing and hashtag strategy',
      'Community management (comments & DMs)',
      'Influencer collaboration outreach',
      'Monthly analytics report with growth metrics',
    ],
    process: [
      { title: 'Brand Audit', desc: 'We review your existing profiles, competitor benchmarks, and audience demographics to identify content gaps and opportunities.' },
      { title: 'Content Strategy', desc: 'We build a 30-day content calendar aligned to your business goals — mixing education, entertainment, trust-building, and conversion posts.' },
      { title: 'Content Production', desc: 'Our designers and writers produce every post — graphics, videos, captions, and hashtags — ready for your approval before publishing.' },
      { title: 'Scheduling & Publishing', desc: 'We publish at peak engagement windows using scheduling tools, maintaining a consistent posting cadence across all platforms.' },
      { title: 'Community Management', desc: 'We monitor comments and DMs, reply promptly, escalate issues, and nurture your community to build loyalty.' },
      { title: 'Analytics & Iteration', desc: 'Monthly reports track reach, engagement rate, follower growth, and link clicks. We double down on what\'s working and pivot on what isn\'t.' },
    ],
    faqs: [
      { q: 'Which platforms do you manage?', a: 'We manage Instagram, Facebook, LinkedIn, X (Twitter), YouTube, and Pinterest. Most clients start with 2–3 platforms and expand as they grow.' },
      { q: 'How many posts per month do we get?', a: 'Our standard packages include 20–30 posts/month depending on the plan. We can scale up for brands that post daily.' },
      { q: 'Do you handle video/Reels production?', a: 'Yes — for clients on our content production plan we create short-form video edits. We can work with your footage or source stock content.' },
      { q: 'Will posts be approved before going live?', a: 'Absolutely. Every piece of content goes through a client approval round before scheduling. We use a shared content calendar so you can review and comment.' },
      { q: 'Can social media drive actual sales, not just likes?', a: 'Yes — when paired with a clear CTA strategy, link-in-bio tools, and retargeting ads, social media becomes a meaningful revenue channel, not just a vanity metric.' },
    ],
  },

  'performance-marketing/email-marketing': {
    tagline: 'The highest-ROI channel, executed right.',
    description: 'Email delivers ₹42 for every ₹1 spent — but only when it\'s done right. We build automated email systems: welcome sequences, nurture flows, promotional campaigns, and re-engagement series that turn your list into a consistent revenue machine.',
    deliverables: [
      'ESP setup/migration (Klaviyo, Mailchimp, Brevo)',
      'List segmentation and hygiene',
      'Welcome & onboarding automation sequences',
      'Promotional campaign design and copywriting',
      'Abandoned cart & browse-abandonment flows (e-commerce)',
      'Monthly A/B testing and performance reporting',
    ],
    process: [
      { title: 'Audit & Strategy', desc: 'We assess your current list health, open rates, and automation gaps, then map a 90-day email roadmap prioritised by revenue impact.' },
      { title: 'Platform Setup', desc: 'We configure your ESP, migrate lists cleanly, segment contacts by behaviour and lifecycle stage, and verify deliverability settings.' },
      { title: 'Automation Build', desc: 'We build your core flows first — welcome, nurture, and win-back — using conditional logic and personalisation tokens.' },
      { title: 'Campaign Calendar', desc: 'Alongside automations, we create a monthly broadcast calendar for promotions, announcements, and newsletter content.' },
      { title: 'Testing & Optimisation', desc: 'Subject lines, send times, and CTAs are A/B tested continuously. Underperforming segments are re-engaged or pruned to protect deliverability.' },
      { title: 'Reporting', desc: 'Monthly dashboards track open rate, click rate, revenue attributed, unsubscribe rate, and list growth — with clear next-step recommendations.' },
    ],
    faqs: [
      { q: 'Which email platforms do you work with?', a: 'We specialise in Klaviyo (best for e-commerce), Mailchimp, Brevo, ActiveCampaign, and HubSpot. We\'ll recommend the right tool for your scale.' },
      { q: 'What open rate should I expect?', a: 'Industry average is 20–25%. With proper segmentation and personalisation, our clients typically see 30–40% open rates on automated flows.' },
      { q: 'How do you avoid the spam folder?', a: 'We configure SPF, DKIM, and DMARC records, warm new sending domains gradually, and maintain list hygiene by removing hard bounces and inactive subscribers.' },
      { q: 'I only have 500 subscribers. Is email marketing worth it?', a: 'Yes — a small, engaged list often outperforms a large, disengaged one. We\'ll help you grow the list while maximising revenue from what you already have.' },
      { q: 'Can you integrate email with our CRM or e-commerce store?', a: 'Yes. We integrate with Shopify, WooCommerce, Salesforce, HubSpot, and most major CRMs to sync customer data and trigger behaviour-based emails automatically.' },
    ],
  },

  'performance-marketing/content-marketing': {
    tagline: 'Content that ranks, earns trust, and converts.',
    description: 'We create content that does real work: blogs that rank on Google, case studies that build credibility, landing pages that convert, and resources your audience actually saves. Our content team handles strategy, writing, design, and distribution — fully managed.',
    deliverables: [
      'Content strategy and editorial calendar',
      'SEO-optimised blog articles (1,500–3,000 words)',
      'Pillar pages and topic cluster architecture',
      'Case studies, whitepapers, and lead magnets',
      'Social repurposing of long-form content',
      'Content performance analytics and quarterly review',
    ],
    process: [
      { title: 'Keyword & Topic Research', desc: 'We identify high-opportunity topics your audience is searching for, then map them into a cluster structure that accelerates domain authority.' },
      { title: 'Content Brief', desc: 'Each piece starts with a detailed brief: target keyword, search intent, competitor analysis, outline, and suggested CTAs.' },
      { title: 'Expert Writing', desc: 'Our writers — with domain expertise in your vertical — produce original, fact-checked content optimised for both readers and search engines.' },
      { title: 'Design & Formatting', desc: 'We format every article with headers, images, custom graphics, and internal links so it\'s scannable, shareable, and crawlable.' },
      { title: 'Publishing & Distribution', desc: 'Content goes live on your CMS, then is repurposed into social snippets, email newsletters, and LinkedIn posts to maximise reach.' },
      { title: 'Performance Tracking', desc: 'We track rankings, organic traffic, time-on-page, and conversions monthly — iterating on what\'s working and updating older posts to stay current.' },
    ],
    faqs: [
      { q: 'How long before content starts ranking on Google?', a: 'New content typically begins appearing in search within 2–4 weeks. Meaningful ranking gains on competitive keywords usually materialise in 3–6 months with consistent publishing.' },
      { q: 'Do you write in our brand voice?', a: 'Yes — we create a brand voice guide in the first month, then every piece is written to match your tone, terminology, and audience.' },
      { q: 'How many articles do you publish per month?', a: 'Standard plans include 4–8 articles/month. We recommend a higher frequency for competitive niches, which we can discuss in the strategy phase.' },
      { q: 'Can you write technical content for specialist industries?', a: 'Yes. We have writers with expertise in SaaS, fintech, healthcare, legal, and manufacturing. We also offer a subject-matter expert interview process for highly technical topics.' },
      { q: 'Do you update old content?', a: 'Yes — content refresh is part of our quarterly process. We update outdated statistics, expand thin sections, and re-optimise for current search intent to protect and improve rankings.' },
    ],
  },

  'performance-marketing/influencer': {
    tagline: 'Real voices that move your target audience.',
    description: 'We identify, vet, and manage influencer partnerships that actually deliver — from nano-influencers with hyper-engaged niche audiences to mid-tier creators who can move product at scale. Our managed service covers everything from outreach to contract to post-campaign reporting.',
    deliverables: [
      'Influencer discovery and vetting (engagement quality, audience match)',
      'Outreach, negotiation, and contract management',
      'Creative brief and brand guideline delivery',
      'Campaign content review and approval workflow',
      'UTM tracking and performance attribution',
      'Post-campaign ROI report with creator scorecard',
    ],
    process: [
      { title: 'Strategy & ICP Mapping', desc: 'We define your ideal creator profile based on audience demographics, niche, engagement rate, and platform — aligned to your campaign objectives.' },
      { title: 'Discovery & Vetting', desc: 'We shortlist creators using data tools to verify follower authenticity, audience quality, and past brand performance — no fake-follower surprises.' },
      { title: 'Outreach & Negotiation', desc: 'We handle all communications, deliverable agreements, usage rights, and pricing negotiations so you get the best rate without the back-and-forth.' },
      { title: 'Creative Brief', desc: 'We send each creator a detailed brief: key messages, dos/don\'ts, hashtags, links, and posting windows — keeping content on-brand while allowing authentic voice.' },
      { title: 'Content Review', desc: 'Drafts are reviewed by our team and submitted for your approval before going live. We manage revision requests with creators directly.' },
      { title: 'Reporting', desc: 'Post-campaign we deliver reach, impressions, engagement, clicks, and conversions — plus a creator scorecard to inform future partnerships.' },
    ],
    faqs: [
      { q: 'Micro or macro influencers — which is better?', a: 'Micro-influencers (10K–100K followers) typically deliver 3–5x higher engagement rates and are more cost-effective for niche products. Macro influencers are better for mass awareness. We recommend a mix.' },
      { q: 'How do you verify influencer audiences aren\'t fake?', a: 'We use tools like HypeAuditor and Modash to audit follower authenticity, audience demographics, and historical engagement quality before any outreach.' },
      { q: 'Do influencers own the content they create?', a: 'By default, yes. We negotiate usage rights as part of the contract so you can repurpose content in paid ads, your website, and email for a defined period.' },
      { q: 'What platforms do you run influencer campaigns on?', a: 'Instagram (Reels & Stories), YouTube, and LinkedIn are our primary platforms. We also run TikTok influencer campaigns for consumer brands.' },
      { q: 'What\'s the minimum budget needed?', a: 'For a meaningful micro-influencer campaign with 5–10 creators, budget typically starts at ₹1,50,000. We scale up based on the number of creators and platforms involved.' },
    ],
  },

  // ── BRANDING ────────────────────────────────────────────────────────────────
  'branding/brand-strategy': {
    tagline: 'Know who you are before anyone else does.',
    description: 'Brand strategy is the foundation everything else is built on. We define your brand\'s positioning, purpose, audience personas, and competitive differentiation — creating a strategic platform that guides every marketing and design decision your business makes.',
    deliverables: [
      'Brand positioning statement and value proposition',
      'Target audience personas and empathy maps',
      'Competitive landscape and differentiation analysis',
      'Brand archetypes and personality traits',
      'Messaging hierarchy and key pillars',
      'Brand strategy deck (executive-ready)',
    ],
    process: [
      { title: 'Discovery Workshop', desc: 'We run a structured 2–3 hour workshop with your leadership team, uncovering founding story, values, ambitions, and competitive context.' },
      { title: 'Market Research', desc: 'We analyse your category, map competitor positioning, and interview or survey existing customers to understand what they actually value about you.' },
      { title: 'Insight Synthesis', desc: 'Research is distilled into sharp insights — the gaps in the market, the tensions in your category, and the white space your brand can own.' },
      { title: 'Positioning Development', desc: 'We craft and pressure-test multiple positioning territories before recommending one that is true, ownable, and commercially meaningful.' },
      { title: 'Messaging Framework', desc: 'From the positioning, we build a full messaging hierarchy: brand promise, pillars, proof points, and audience-specific narratives.' },
      { title: 'Strategy Handoff', desc: 'We deliver a polished strategy deck and run a presentation session with your team, ensuring everyone is aligned on the brand before execution begins.' },
    ],
    faqs: [
      { q: 'Do I need brand strategy before getting a logo?', a: 'Yes — always. A logo designed without a strategy is just decoration. Strategy defines what the logo needs to communicate before a designer touches it.' },
      { q: 'How long does brand strategy take?', a: 'Our brand strategy process takes 3–4 weeks from discovery workshop to final deck, depending on research depth and internal review cycles.' },
      { q: 'What\'s the difference between brand strategy and marketing strategy?', a: 'Brand strategy defines who you are and what you stand for (identity). Marketing strategy defines how you reach people (channels, campaigns). Brand strategy informs all marketing decisions.' },
      { q: 'Will the strategy work for a small business?', a: 'Absolutely — small businesses benefit most from a clear strategy because every brand touchpoint has to work harder. We scale our process to match your business size.' },
      { q: 'Can you work with our existing brand and refine rather than rebuild?', a: 'Yes. Many clients come to us for brand refresh or repositioning. We start with an audit of what\'s working before recommending what to change.' },
    ],
  },

  'branding/logo-design': {
    tagline: 'A mark that means something.',
    description: 'We design logos that do more than look good — they communicate your brand\'s character at a glance, scale from a favicon to a billboard, and stay recognisable in any context. Our process is strategic, iterative, and built around understanding your business before touching a design tool.',
    deliverables: [
      'Competitor and category visual audit',
      '3 initial logo concepts with rationale',
      'Chosen concept refined through 3 revision rounds',
      'Full logo suite: primary, horizontal, stacked, icon-only',
      'Colour and monochrome versions',
      'Final files: SVG, PNG, PDF (print-ready)',
    ],
    process: [
      { title: 'Discovery Brief', desc: 'We learn your brand personality, target audience, competitive context, and any visual preferences before ideation begins.' },
      { title: 'Research & Moodboarding', desc: 'We audit competitor logos and build a visual moodboard aligned to your brand strategy — defining the direction before pencil hits paper.' },
      { title: 'Concept Development', desc: 'Our designer explores diverse directions, producing 3 distinct logo concepts — each with a written rationale explaining the thinking.' },
      { title: 'Presentation & Refinement', desc: 'We present concepts in context (business card, website, signage). You choose a direction, and we refine through up to 3 revision rounds.' },
      { title: 'Finalisation', desc: 'The approved logo is perfected at pixel level — spacing, weight, and optical corrections — then exported in every format you\'ll ever need.' },
      { title: 'File Handoff', desc: 'You receive an organised file package: web formats, print formats, all colour variants, and a one-page logo usage guide.' },
    ],
    faqs: [
      { q: 'How long does a logo project take?', a: 'Our logo process takes 2–3 weeks: one week for research and concepts, then refinement rounds. Rush timelines are available at an additional fee.' },
      { q: 'Do I own the copyright to the final logo?', a: 'Yes — full intellectual property is transferred to you upon final payment. You own the logo outright with no ongoing licensing fees.' },
      { q: 'What if I don\'t like any of the initial concepts?', a: 'We\'ll dig deeper into what didn\'t resonate and produce an additional round of concepts. Clear feedback from the brief minimises this, which is why our discovery process is thorough.' },
      { q: 'Do you design logos for specific industries only?', a: 'No — we work across all sectors. We do research your specific category carefully to avoid generic category clichés and ensure your logo stands apart.' },
      { q: 'Can I get the source files (AI, EPS)?', a: 'Yes — source files in Adobe Illustrator (.ai) format are included. We deliver everything in the final package.' },
    ],
  },

  'branding/visual-identity': {
    tagline: 'Every visual element, working as one system.',
    description: 'A visual identity goes beyond the logo — it\'s the complete system of colours, typography, imagery, icons, and layout principles that make your brand instantly recognisable across every touchpoint. We design cohesive systems built to scale.',
    deliverables: [
      'Logo suite and usage rules',
      'Primary and secondary colour palette with hex/CMYK/Pantone codes',
      'Typography system (heading, body, accent fonts)',
      'Photography and illustration style guidelines',
      'Icon set and graphic element library',
      'Applied identity on 5 collateral mockups (business card, letterhead, social, etc.)',
    ],
    process: [
      { title: 'Brand Strategy Input', desc: 'We begin from your brand positioning — personality, values, and audience — so every visual decision is grounded in strategy, not just aesthetics.' },
      { title: 'Visual Exploration', desc: 'Moodboards and visual concept territories are developed and shared for alignment before any design work begins.' },
      { title: 'Core Element Design', desc: 'We design logo, colour palette, and typography system first — the three pillars everything else builds from.' },
      { title: 'System Expansion', desc: 'Photography direction, icon style, graphic elements, and pattern/texture library are designed to complement and extend the core.' },
      { title: 'Application Design', desc: 'We apply the system to real-world mockups — business cards, email headers, social templates, signage — to prove it works in context.' },
      { title: 'Guidelines Document', desc: 'Everything is documented in a brand guidelines PDF that your internal team and future agencies can use to stay consistent.' },
    ],
    faqs: [
      { q: 'What\'s the difference between a logo and a visual identity?', a: 'A logo is a single mark. A visual identity is the complete system — colours, type, imagery, icons — that makes your brand consistent everywhere people encounter it.' },
      { q: 'How many mockups are included?', a: 'Standard projects include 5 applied mockups. We offer expanded packages with 10–15 applications (packaging, outdoor, apparel, etc.) for brands that need more.' },
      { q: 'Can you redesign our existing identity rather than start from scratch?', a: 'Yes — brand refresh projects are a speciality. We audit what\'s working, identify what\'s not, and evolve rather than abandon your existing equity.' },
      { q: 'Will we get editable templates?', a: 'Yes — we provide editable Canva or Adobe Express templates for social media and common marketing assets so your team can stay on-brand independently.' },
      { q: 'Do you provide the Pantone codes for print?', a: 'Yes — all colour palettes include HEX, RGB, CMYK, and Pantone (PMS) codes to ensure colour consistency across digital and print.' },
    ],
  },

  'branding/brand-guidelines': {
    tagline: 'One document. Brand consistency everywhere.',
    description: 'Brand guidelines are the rulebook that keeps your brand looking and sounding the same whether it\'s your in-house team, a new agency, or a print vendor handling the output. We create clear, comprehensive, and practical guidelines that people actually use.',
    deliverables: [
      'Brand story and positioning section',
      'Logo usage: correct, incorrect, clear space, minimum size',
      'Colour system with digital and print specifications',
      'Typography rules with hierarchy examples',
      'Photography and imagery direction with do/don\'t examples',
      'Tone of voice section with writing examples',
    ],
    process: [
      { title: 'Asset Audit', desc: 'We collect all existing brand assets — logos, colours, fonts — and audit what exists versus what needs to be defined or corrected.' },
      { title: 'Gap Analysis', desc: 'We identify which elements of the brand are undefined, inconsistent, or misused — prioritising what the guidelines must address.' },
      { title: 'Content Writing', desc: 'Brand story, positioning, and tone of voice sections are written with care — making abstract brand values concrete and usable.' },
      { title: 'Visual Rules Design', desc: 'Every visual rule is shown with clear visual examples: correct uses, incorrect uses, examples at different sizes and backgrounds.' },
      { title: 'Document Design', desc: 'The guidelines are designed as a polished, on-brand PDF — clear layout, easy to navigate, professional enough to share with senior stakeholders.' },
      { title: 'Delivery & Training', desc: 'We deliver the PDF and present a walkthrough session with your team so everyone understands how to apply the guidelines correctly.' },
    ],
    faqs: [
      { q: 'How long are brand guidelines typically?', a: 'Our standard guidelines range from 25–60 pages depending on the complexity of the brand system. We focus on clarity over volume — every page earns its place.' },
      { q: 'Can you create guidelines for a brand you didn\'t design?', a: 'Yes — we often codify guidelines for existing brands. We start with a thorough audit of your current assets and reverse-engineer the system from what you have.' },
      { q: 'Do brand guidelines cover digital and print?', a: 'Yes — we cover both. Digital specifications (HEX, RGB, web typography) and print specifications (CMYK, Pantone, bleed and margin rules) are both included.' },
      { q: 'Will the guidelines be editable so we can update them?', a: 'We deliver a PDF for distribution. The source file (Figma or InDesign) is available as an add-on so you can update it as the brand evolves.' },
      { q: 'How do we enforce guidelines with external vendors?', a: 'The guidelines document itself is the enforcement tool — share it with every vendor before a project starts and reference it in design briefs.' },
    ],
  },

  'branding/brand-voice': {
    tagline: 'Sound like yourself. Every time.',
    description: 'Brand voice is how your company speaks — and when it\'s consistent, it builds trust faster than any visual element. We define your voice, create writing principles, and produce example copy across every channel so your team and partners always know how to sound like you.',
    deliverables: [
      'Brand personality and voice archetype definition',
      'Voice attributes: what we are / what we\'re not',
      'Tone spectrum (how voice adapts by context)',
      'Writing principles with before/after examples',
      'Channel-specific guidance (website, social, email, ads)',
      'Glossary of preferred and avoided words/phrases',
    ],
    process: [
      { title: 'Discovery', desc: 'We interview key stakeholders, review existing copy, and identify where the brand sounds right — and where it doesn\'t.' },
      { title: 'Personality Workshop', desc: 'We facilitate an exercise to define brand personality traits, select an archetype, and map what the voice should and shouldn\'t sound like.' },
      { title: 'Voice Framework', desc: 'We write the core voice attributes — typically 4–5 dimensions — each with a description, examples of right vs. wrong application.' },
      { title: 'Tone Mapping', desc: 'We map how the voice adapts across contexts: formal vs. informal, celebratory vs. empathetic, product-focused vs. brand-building.' },
      { title: 'Example Copy', desc: 'We rewrite real examples from your business — a homepage headline, an email subject line, a social caption — in the new voice to demonstrate it in practice.' },
      { title: 'Tone of Voice Guide', desc: 'Everything is packaged into a usable tone of voice document — distinct from the visual guidelines but designed to sit alongside them.' },
    ],
    faqs: [
      { q: 'Why do I need a brand voice guide if I can just write naturally?', a: '"Writing naturally" produces different results from every different person. A voice guide means your website, your social posts, and your customer emails all sound like the same brand — not three different people.' },
      { q: 'Can brand voice work across multiple languages?', a: 'Yes — we can extend the guide with language-specific adaptations, especially for regional Indian languages where tone and register differ significantly from English.' },
      { q: 'How do you involve our team in the process?', a: 'The personality workshop is collaborative — we run it with your team so the voice feels owned by you, not imposed by an agency.' },
      { q: 'Does brand voice include email templates?', a: 'Our brand voice engagement defines the voice framework. Template creation is a separate deliverable we can add to the scope.' },
      { q: 'How often should brand voice be updated?', a: 'Typically brand voice evolves every 2–3 years as the company grows. Major pivots (new audience, new market, acquisition) may trigger an earlier review.' },
    ],
  },

  'branding/packaging': {
    tagline: 'The first impression customers touch.',
    description: 'Packaging is where brand meets product — and it has to work on shelf, in an unboxing video, and on Instagram. We design packaging that earns attention, communicates quality, and turns buyers into repeat customers.',
    deliverables: [
      'Structural dieline sourcing and specification',
      'Packaging concept design (2–3 directions)',
      'Refined design with all legal/regulatory content',
      'Print-ready files (dielines, bleed, colour profiles)',
      'Mockup photography / digital renders',
      'Secondary packaging design (inserts, tissue, stickers) if required',
    ],
    process: [
      { title: 'Brief & Constraints', desc: 'We gather packaging dimensions, material preferences, printing method, quantity, and regulatory requirements (ingredients, barcodes, certifications).' },
      { title: 'Competitive Shelf Audit', desc: 'We analyse the shelf — physical and digital — to understand category conventions and identify where your packaging can stand out.' },
      { title: 'Concept Design', desc: 'We develop 2–3 distinct packaging concepts, each exploring a different visual direction while staying true to the brand identity.' },
      { title: 'Refinement', desc: 'You select a direction and we refine it through 2 revision rounds — perfecting hierarchy, finish effects (foil, emboss, spot UV), and all technical content.' },
      { title: 'Pre-Press Preparation', desc: 'Final files are prepared to printer specifications — correct colour profiles, dielines, bleed, and overprint settings — to prevent costly print errors.' },
      { title: 'Render & Hand Off', desc: 'We produce photorealistic digital renders for website and social use, then hand off all print-ready files to your chosen printer.' },
    ],
    faqs: [
      { q: 'Do you design the structural packaging (box shape) or just the graphics?', a: 'Primarily graphics — we work with your packaging manufacturer\'s dieline. We can help source structural designers or manufacturers if you\'re starting from scratch.' },
      { q: 'Can you accommodate FDA/FSSAI labelling requirements?', a: 'Yes — we incorporate all mandatory regulatory content (ingredient lists, nutritional information, certifications, barcodes) into the design during the refinement phase.' },
      { q: 'What file format do printers need?', a: 'We deliver print-ready PDFs with correct bleed, crop marks, and either CMYK or Pantone colour specifications depending on your print method.' },
      { q: 'Do you offer unboxing/secondary packaging design?', a: 'Yes — inserts, tissue paper, stickers, mailer box design, and thank-you cards are all available as add-ons within the project scope.' },
      { q: 'Can you match our existing packaging but make it better?', a: 'Absolutely. We often do packaging evolution projects — retaining equity from the existing design while fixing what isn\'t working. We\'ll start with an honest audit.' },
    ],
  },

  // ── GRAPHICS & DESIGN ───────────────────────────────────────────────────────
  'graphics-design/graphic-design': {
    tagline: 'Visuals that communicate before words do.',
    description: 'From marketing collateral to campaign artwork, we produce graphic design that\'s on-brand, print-ready, and built to perform. Our team works fast without cutting corners — so your deadlines are met and your quality bar is exceeded.',
    deliverables: [
      'Brochures, flyers, and corporate stationery',
      'Event collateral: banners, standees, backdrop design',
      'Digital ad creatives (static and animated)',
      'Infographics and data visualisation',
      'Pitch decks and presentation design',
      'Print-ready files with bleed and colour separation',
    ],
    process: [
      { title: 'Brief', desc: 'We take a detailed brief: objective, audience, key message, channel, format, and brand guidelines — ensuring every design decision has a reason.' },
      { title: 'Concept', desc: 'Our designer develops 2–3 initial visual concepts, each exploring layout, hierarchy, and visual language within your brand system.' },
      { title: 'Review', desc: 'Concepts are shared in context (as mockups, not flat files) so you can see exactly how they\'ll look when produced.' },
      { title: 'Refinement', desc: 'You choose a direction and we refine through 2 revision rounds, incorporating feedback precisely and quickly.' },
      { title: 'Production', desc: 'Final files are prepared for their destination — web-optimised for digital, print-ready PDFs with bleed for physical production.' },
      { title: 'Delivery', desc: 'We deliver an organised asset package with all formats labelled, ready to hand to printers, publishers, or your internal team.' },
    ],
    faqs: [
      { q: 'What design software do you use?', a: 'We primarily use Adobe Illustrator, Photoshop, and InDesign for print; Figma for digital. All source files are available in your preferred format.' },
      { q: 'How fast can you turn around a design?', a: 'Standard turnaround is 3–5 business days. Rush delivery (24–48 hours) is available for an expedite fee.' },
      { q: 'Do you supply print-ready files?', a: 'Yes — all print projects include CMYK or Pantone colour-separated PDFs with correct bleed, crop marks, and embedded fonts.' },
      { q: 'Can you work from a rough sketch or written description?', a: 'Yes — many clients come with only a concept in mind. We translate ideas into polished designs; the briefing process extracts everything we need.' },
      { q: 'Do you offer a retainer for ongoing design work?', a: 'Yes — our design retainer plans give you a fixed monthly quota of design hours at a reduced rate, ideal for businesses with regular design needs.' },
    ],
  },

  'graphics-design/ui-ux': {
    tagline: 'Interfaces people understand. Experiences people choose.',
    description: 'We design digital interfaces that are intuitive, accessible, and conversion-optimised. From user research through wireframing to pixel-perfect UI, we deliver design systems and prototypes that reduce development rework and improve user outcomes.',
    deliverables: [
      'User research and journey mapping',
      'Information architecture and site/app map',
      'Low-fidelity wireframes (all key screens)',
      'High-fidelity UI design (desktop and mobile)',
      'Interactive Figma prototype for stakeholder review',
      'Design system / component library handoff',
    ],
    process: [
      { title: 'Research', desc: 'We conduct user interviews, review analytics, and audit the existing experience to identify friction points and opportunities.' },
      { title: 'Information Architecture', desc: 'We map user flows and define the structure of the product before any visual design — ensuring navigation logic is right first.' },
      { title: 'Wireframing', desc: 'Low-fidelity wireframes let us move fast and test layout decisions before investing in visual design. Feedback at this stage is cheap and fast.' },
      { title: 'Visual Design', desc: 'We apply visual design to approved wireframes — colour, typography, icons, and imagery — building components in Figma as a reusable library.' },
      { title: 'Prototyping', desc: 'An interactive prototype lets stakeholders and users experience the product before a single line of code is written.' },
      { title: 'Developer Handoff', desc: 'We deliver Figma files with annotated specs, a component library, and a responsive design system that reduces ambiguity for your dev team.' },
    ],
    faqs: [
      { q: 'Do you do user research, or is that the client\'s job?', a: 'We handle research as part of the project scope — user interviews, competitive analysis, and analytics review. You don\'t need to come with all the answers.' },
      { q: 'Will the designs be mobile-responsive?', a: 'Yes — every screen is designed for both desktop and mobile breakpoints. We design mobile-first on most projects.' },
      { q: 'Do you deliver a design system or just screens?', a: 'We deliver a full component library in Figma — buttons, inputs, cards, navigation — so your development team builds consistently without reinventing components.' },
      { q: 'Do you work with existing brand guidelines?', a: 'Yes — we apply your existing brand to the UI system. If your brand guidelines are thin, we can expand them specifically for digital contexts.' },
      { q: 'Can you redesign an existing product without rebuilding everything?', a: 'Yes — we often do phased redesigns that prioritise high-impact screens first (home, checkout, onboarding) and update the rest iteratively.' },
    ],
  },

  'graphics-design/motion': {
    tagline: 'Bring your brand to life with motion.',
    description: 'Motion graphics and animation that grab attention and hold it. We create everything from animated logo intros and social video content to explainer animations and broadcast-quality motion graphics — designed to work across digital, social, and broadcast.',
    deliverables: [
      'Animated logo intro/outro (10–15 seconds)',
      'Social media motion content (Reels, Stories)',
      'Explainer video animation (60–90 seconds)',
      'Animated infographics and data visualisation',
      'Broadcast lower-thirds and title cards',
      'Final exports in MP4, MOV, GIF, and WebM',
    ],
    process: [
      { title: 'Script & Storyboard', desc: 'Every motion project starts with a script and storyboard — we visualise the full sequence in static frames before animating, to avoid costly late changes.' },
      { title: 'Style Frame Design', desc: 'We design 2–3 key style frames showing visual tone, typography, and colour — agreed before full animation begins.' },
      { title: 'Asset Production', desc: 'All visual elements (illustrations, icons, typography) are produced in their final style, ready for animation.' },
      { title: 'Animation', desc: 'Our motion designers animate the approved assets in After Effects or Cinema 4D, delivering motion that feels premium and purposeful.' },
      { title: 'Sound Design', desc: 'Where applicable, we add music, sound effects, or voiceover to complete the sensory experience.' },
      { title: 'Final Delivery', desc: 'We export in all required formats — social-native (square, vertical, horizontal), web-optimised, and broadcast-ready — in the correct codecs.' },
    ],
    faqs: [
      { q: 'What software do you use for animation?', a: 'Adobe After Effects for 2D motion graphics, Cinema 4D for 3D, and Premiere Pro for video editing. All animation is frame-rate correct for the target platform.' },
      { q: 'How long does a 60-second explainer video take?', a: 'Typically 3–4 weeks from script approval to final delivery: one week for storyboarding, one for design, two for animation and sound.' },
      { q: 'Do you provide voiceover?', a: 'Yes — we can source and direct voiceover talent in English, Hindi, and regional Indian languages as an add-on.' },
      { q: 'Can you animate existing illustrations or brand assets?', a: 'Yes — if you have existing brand illustrations or icons, we can animate them. This is often faster than creating everything from scratch.' },
      { q: 'What formats do you deliver?', a: 'Standard deliverables include MP4 (H.264), MOV (ProRes for editing), GIF, and WebM. We also deliver platform-specific aspect ratios (16:9, 1:1, 9:16).' },
    ],
  },

  'graphics-design/print': {
    tagline: 'Print that performs, delivered print-ready.',
    description: 'We design print materials that make a physical impression — brochures, catalogues, magazines, banners, point-of-sale displays, and packaging — all delivered as press-ready files that go straight to your printer without surprises.',
    deliverables: [
      'Brochures, leaflets, and trifolds',
      'Corporate catalogues and annual reports',
      'Outdoor: banners, hoardings, and rollups',
      'Point-of-sale: shelf wobblers, standees, and displays',
      'Business stationery: letterhead, envelope, business card',
      'Press-ready PDF with bleed, crops, and ICC profiles',
    ],
    process: [
      { title: 'Print Specification', desc: 'We gather all technical specs — print size, bleed, paper stock, colour method (offset/digital), and quantity — to avoid rework at the pre-press stage.' },
      { title: 'Content & Layout', desc: 'We organise all copy and imagery into a clear content map before designing layouts — so nothing is missing when design begins.' },
      { title: 'Design', desc: 'Layouts are designed in InDesign or Illustrator with print constraints built in: correct colour mode, bleed, font embedding, and image resolution.' },
      { title: 'Proofing', desc: 'Digital proofs are shared for content and colour review. For critical print runs we recommend a physical proof before final approval.' },
      { title: 'Pre-Press', desc: 'We prepare the final files to press-ready standard: preflight checks, colour separation, and ink limit verification.' },
      { title: 'Printer Liaison', desc: 'For clients who need it, we liaise directly with your printer to deliver files in the correct format and resolve any pre-press queries.' },
    ],
    faqs: [
      { q: 'What bleed and resolution do you design to?', a: 'We design at 300dpi with 3–5mm bleed as standard. We adjust specs to match your printer\'s requirements if they differ.' },
      { q: 'Do you work with CMYK and Pantone?', a: 'Yes — we deliver CMYK for standard offset/digital print and Pantone (PMS) for spot colour jobs. Colour profiles (ISO Coated v2, etc.) are applied correctly.' },
      { q: 'Can you design a multi-page catalogue?', a: 'Yes — multi-page catalogues are a speciality. We design templates for consistent layouts across a large number of pages, keeping production time manageable.' },
      { q: 'Do you also source printing?', a: 'We can quote and manage print production through our trusted vendor network as an add-on service, saving you the print vendor management overhead.' },
      { q: 'Can you adapt an existing design to a different print format?', a: 'Yes — resizing and adapting design files is straightforward. We reflow and optimise rather than just scaling, so the adapted version looks designed, not stretched.' },
    ],
  },

  'graphics-design/social-creatives': {
    tagline: 'Content that stops the scroll. Every time.',
    description: 'We design social media creatives that perform — on-brand static posts, animated Stories, Reels covers, carousel templates, and ad creatives built for Instagram, Facebook, LinkedIn, and beyond. Delivered in ready-to-post formats, every month.',
    deliverables: [
      'Monthly creative package (30+ social posts)',
      'Static posts: square, portrait, and landscape',
      'Animated Stories and Reels covers',
      'Carousel slide design (5–10 slides)',
      'Ad creative variants (A/B test ready)',
      'Brand-locked Canva templates for your team',
    ],
    process: [
      { title: 'Creative Strategy', desc: 'We map your content pillars and post formats before design begins — so each creative serves a specific role in your social strategy.' },
      { title: 'Template System', desc: 'We design a set of locked templates per content type — announcement, quote, product, case study — ensuring consistency at speed.' },
      { title: 'Monthly Content Production', desc: 'Each month we produce the full batch of creatives, adapted to current campaigns, seasonal moments, and content calendar direction.' },
      { title: 'Client Review', desc: 'The batch is shared for feedback before scheduling. Revisions are made in a single round to keep the workflow moving.' },
      { title: 'Handoff', desc: 'Approved creatives are delivered in platform-optimised formats (PNG/MP4) organised by platform and post type.' },
      { title: 'Performance Review', desc: 'Monthly we review top-performing creative styles and adjust the next month\'s production brief to do more of what\'s working.' },
    ],
    faqs: [
      { q: 'Can you match our existing brand guidelines?', a: 'Yes — we work strictly within your existing brand system. If your guidelines are outdated or thin, we can modernise them as a separate project first.' },
      { q: 'Do you create Reels or video content?', a: 'We create Reels covers, animated Stories, and short motion graphics. Full video production (filming and editing) is a separate service.' },
      { q: 'Will I be able to edit the templates?', a: 'Yes — we deliver locked Canva or Adobe Express templates so your team can populate with new content while staying on-brand.' },
      { q: 'How many platforms do you design for?', a: 'Most clients have us design for 2–3 platforms. We size each creative correctly per platform (Instagram square, LinkedIn landscape, Story 9:16, etc.).' },
      { q: 'What\'s the turnaround for the monthly batch?', a: 'We deliver the full monthly batch by the 5th of each month, giving you time to review before the content calendar begins.' },
    ],
  },

  'graphics-design/presentation': {
    tagline: 'Slides that make people pay attention.',
    description: 'We design presentations that do the selling, pitching, or explaining for you — investor decks, sales presentations, corporate reports, and conference talks — in PowerPoint, Keynote, or Google Slides with animations and templates your team can reuse.',
    deliverables: [
      'Slide structure and narrative flow consulting',
      'Custom slide design (all slides in the deck)',
      'Data visualisation: charts, graphs, and infographics',
      'Animated transitions and builds (optional)',
      'Template slides for ongoing team use',
      'Final files in PowerPoint, Keynote, and PDF',
    ],
    process: [
      { title: 'Narrative Structure', desc: 'We review your content and often restructure the story arc — problem, solution, proof, ask — before touching design.' },
      { title: 'Slide Wireframe', desc: 'A text-only wireframe maps every slide\'s content, hierarchy, and role in the narrative before visual design begins.' },
      { title: 'Design System', desc: 'We design a master slide template — title, content, data, quote, and divider layouts — that gives the deck visual coherence.' },
      { title: 'Slide Design', desc: 'All slides are designed to the master system, with custom graphics, icons, and data visualisation replacing any raw charts or text dumps.' },
      { title: 'Animation', desc: 'For presentations delivered live, we add purposeful animations and builds that aid comprehension, not distract from it.' },
      { title: 'Final Delivery', desc: 'We deliver editable files so your team can update content in future, plus a PDF for sharing and a print-ready version if required.' },
    ],
    faqs: [
      { q: 'Do you work in PowerPoint, Keynote, or Google Slides?', a: 'All three. We deliver in your preferred tool and ensure compatibility so the animations and fonts render correctly on any device.' },
      { q: 'Can you redesign an existing presentation rather than starting over?', a: 'Yes — deck redesign is often faster than a new build. We apply a fresh visual system to your existing content and restructure where needed.' },
      { q: 'Do you write the copy, or do I provide it?', a: 'You provide the content and key messages; we refine copy for clarity and brevity as part of the design process. For full copywriting, we scope that separately.' },
      { q: 'How quickly can you deliver a deck?', a: 'Standard delivery is 5–7 business days. For urgent investor decks or conference presentations we offer 48-hour turnaround with an expedite fee.' },
      { q: 'Will we own the design and be able to update slides ourselves?', a: 'Yes — editable files are always included. We also deliver template master slides so new content slides maintain the design consistently.' },
    ],
  },

  // ── SEO ─────────────────────────────────────────────────────────────────────
  'seo/technical-seo': {
    tagline: 'Fix the foundation. Let Google crawl and rank.',
    description: 'Technical SEO is everything Google needs to find, crawl, understand, and index your site correctly. We audit, fix, and monitor the technical health of your website so your content efforts are never held back by crawl errors, slow pages, or broken signals.',
    deliverables: [
      'Full technical SEO audit (200+ point checklist)',
      'Crawl error identification and fix recommendations',
      'Core Web Vitals (LCP, INP, CLS) improvement plan',
      'XML sitemap and robots.txt optimisation',
      'Structured data / schema markup implementation',
      'Ongoing monthly technical monitoring report',
    ],
    process: [
      { title: 'Crawl & Audit', desc: 'We crawl your site with Screaming Frog and cross-reference with Google Search Console to build a complete picture of technical health.' },
      { title: 'Prioritisation', desc: 'Issues are ranked by impact — indexation blockers, Core Web Vitals failures, and duplicate content are fixed first before lower-priority items.' },
      { title: 'Fix Implementation', desc: 'Depending on your tech stack we implement fixes directly (for CMS-based sites) or provide precise developer specifications.' },
      { title: 'Schema Markup', desc: 'We implement structured data (Article, FAQ, Product, LocalBusiness, BreadcrumbList) to enhance your search result appearance.' },
      { title: 'Verification', desc: 'After fixes are deployed we re-crawl and verify in Google Search Console — confirming resolved errors and no regressions.' },
      { title: 'Monitoring', desc: 'Monthly technical SEO reports track crawl health, Core Web Vitals, index coverage, and any new issues flagged by Google.' },
    ],
    faqs: [
      { q: 'How is technical SEO different from regular SEO?', a: 'Technical SEO is the infrastructure — crawling, indexing, site speed, and code. Regular (on-page/off-page) SEO is content and links. Both are needed; technical issues can neutralise all content investment.' },
      { q: 'Do you need developer access to fix technical issues?', a: 'For CMS-based sites (WordPress, Shopify) we can implement most fixes ourselves. For custom-built sites we provide detailed developer briefs and verify fixes after deployment.' },
      { q: 'How long does a technical SEO audit take?', a: 'Our audit takes 5–7 business days depending on site size. You receive a prioritised report with estimated impact and fix effort for each issue.' },
      { q: 'Will fixing technical SEO immediately improve rankings?', a: 'Unblocking crawl and indexation issues can produce rapid ranking gains. Core Web Vitals and speed improvements typically show ranking benefit within 4–8 weeks.' },
      { q: 'Do you fix Core Web Vitals?', a: 'Yes — we diagnose LCP, INP, and CLS issues, then provide specific recommendations or implement fixes depending on your tech stack.' },
    ],
  },

  'seo/on-page': {
    tagline: 'Optimise every page to earn its ranking.',
    description: 'On-page SEO is ensuring every page on your site is precisely optimised for the keyword it targets — from title tags and meta descriptions to heading structure, body copy, internal links, and semantic relevance. We audit, plan, and execute at scale.',
    deliverables: [
      'Keyword-to-page mapping across your full site',
      'Title tag and meta description rewrites',
      'Heading structure (H1–H6) optimisation',
      'Content gap analysis and copy enhancement',
      'Internal linking strategy and implementation',
      'Image alt-text and file-name optimisation',
    ],
    process: [
      { title: 'Keyword Mapping', desc: 'We map keywords to existing pages and identify cannibalisation, gaps, and pages competing with each other — creating a clean targeting plan.' },
      { title: 'SERP Analysis', desc: 'For each target keyword, we analyse the top 10 results to understand content format, depth, and entity coverage required to compete.' },
      { title: 'On-Page Audit', desc: 'Every target page is audited against on-page best practices: title, meta, headings, content depth, internal links, and image optimisation.' },
      { title: 'Copy Optimisation', desc: 'We enhance existing content with target keywords, semantic entities, and structured sections that match search intent — without keyword stuffing.' },
      { title: 'Internal Linking', desc: 'We build a strategic internal link plan connecting high-authority pages to priority targets, passing link equity where it matters most.' },
      { title: 'Monitoring', desc: 'We track rankings, click-through rate, and impressions in Search Console — iterating on underperforming pages each month.' },
    ],
    faqs: [
      { q: 'How many pages do you optimise per month?', a: 'Standard plans cover 10–20 pages/month. We prioritise high-traffic and high-value pages first, then expand across the site.' },
      { q: 'Do you write new content or just optimise what\'s there?', a: 'Both — we optimise existing content where it has potential and flag pages that are too thin to rank and need a fuller rewrite.' },
      { q: 'What\'s the difference between on-page and technical SEO?', a: 'Technical SEO is the infrastructure (crawling, speed, code). On-page SEO is the content and structure of individual pages. Both are required for rankings.' },
      { q: 'How quickly will I see ranking improvements?', a: 'On-page changes can produce visible ranking movement within 2–6 weeks for pages that are already indexed and close to ranking.' },
      { q: 'Do you also optimise product pages for e-commerce?', a: 'Yes — product page optimisation is a speciality. We optimise titles, descriptions, schema, and image alt-text at scale using bulk processes for large catalogues.' },
    ],
  },

  'seo/off-page': {
    tagline: 'Authority you earn. Rankings that follow.',
    description: 'Off-page SEO is about building your site\'s authority through high-quality backlinks, digital PR, and brand mentions that signal to Google you\'re trustworthy and relevant. We build links that move rankings — not ones that trigger penalties.',
    deliverables: [
      'Backlink profile audit and toxic link disavow',
      'Competitor backlink gap analysis',
      'Monthly link-building outreach campaign',
      'Guest posting on relevant, authority sites',
      'Digital PR: data-led stories and press placement',
      'Monthly link acquisition report with DA/DR metrics',
    ],
    process: [
      { title: 'Profile Audit', desc: 'We audit your existing backlink profile — identifying toxic links to disavow and opportunities to reclaim unlinked brand mentions.' },
      { title: 'Competitor Analysis', desc: 'We reverse-engineer your top competitors\' link profiles to identify the exact sources they\'re getting authority from — and target the same.' },
      { title: 'Strategy Design', desc: 'We build a link acquisition strategy combining guest posts, resource page outreach, digital PR, and broken link building — prioritised by ROI.' },
      { title: 'Outreach', desc: 'Our outreach team contacts relevant site owners, editors, and journalists with personalised pitches — not templated spam.' },
      { title: 'Content Creation', desc: 'Where guest posts or data-led PR content are required, we write and design the asset that earns the link.' },
      { title: 'Reporting', desc: 'Monthly reports show links acquired, referring domain metrics (DR/DA), anchor text distribution, and cumulative authority growth.' },
    ],
    faqs: [
      { q: 'Is link building still important in 2025?', a: 'Yes — backlinks remain one of Google\'s strongest ranking signals. Quality has never mattered more; a handful of high-authority, relevant links beats hundreds of low-quality ones.' },
      { q: 'Do you buy links?', a: 'No. Paid links violate Google\'s guidelines and risk manual penalties. We earn links through content, outreach, and digital PR — the only sustainable approach.' },
      { q: 'How many links will I get per month?', a: 'Quality over quantity. Our standard plans target 5–15 high-quality links/month. Volume depends on your niche, content asset quality, and budget.' },
      { q: 'What sites will you get links from?', a: 'We target sites relevant to your industry with real editorial standards — blogs, media outlets, resource hubs, and business associations. We share domain metrics before confirming.' },
      { q: 'Can you remove bad links from our profile?', a: 'Yes — if you\'ve been hit by a Google penalty or inherited a toxic link profile, we audit, disavow, and submit a reconsideration request as needed.' },
    ],
  },

  'seo/local-seo': {
    tagline: 'Get found in your city. Win in your area.',
    description: 'Local SEO puts your business in front of people who are searching with intent to visit, call, or buy nearby. We optimise your Google Business Profile, build local citations, manage reviews, and create location content that dominates local pack rankings.',
    deliverables: [
      'Google Business Profile audit and optimisation',
      'NAP (Name/Address/Phone) consistency audit across 50+ directories',
      'Local citation building and correction',
      'LocalBusiness schema markup implementation',
      'Review generation strategy and management',
      'Location-specific landing page creation or optimisation',
    ],
    process: [
      { title: 'GBP Optimisation', desc: 'We fully optimise your Google Business Profile — categories, services, photos, Q&A, and posts — so it ranks in Local Pack results.' },
      { title: 'Citation Audit', desc: 'We audit your business name, address, and phone number across 50+ local directories and correct any inconsistencies that confuse Google.' },
      { title: 'Citation Building', desc: 'We build new citations on high-authority local and industry directories, extending your local footprint and building trust signals.' },
      { title: 'Review Strategy', desc: 'We implement a systematic review generation process — prompting satisfied customers to leave reviews and providing response templates for all reviews.' },
      { title: 'Local Content', desc: 'Location-specific landing pages are created or optimised with local keywords, neighbourhood context, and embedded maps.' },
      { title: 'Monitoring', desc: 'Monthly reports track Local Pack rankings, GBP impressions, direction requests, calls, and review velocity.' },
    ],
    faqs: [
      { q: 'How long does it take to appear in the Local Pack (map results)?', a: 'With a fully optimised GBP and clean citations, initial Local Pack appearances usually occur within 4–8 weeks. Competitive markets take longer.' },
      { q: 'Do I need a physical address to do local SEO?', a: 'A physical address is required for a Google Business Profile, but service-area businesses (plumbers, cleaners, etc.) can hide their address and list service areas.' },
      { q: 'How do online reviews affect local rankings?', a: 'Reviews are a confirmed local ranking factor. Volume, recency, and rating all matter. Responding to reviews also signals active management to Google.' },
      { q: 'Can you manage local SEO for multiple locations?', a: 'Yes — multi-location local SEO is a speciality. We create and optimise individual GBP profiles and landing pages for each location.' },
      { q: 'What\'s the difference between local SEO and regular SEO?', a: 'Regular SEO targets national or global rankings. Local SEO targets "near me" and city-based searches, focusing on map pack visibility and Google Business Profile optimisation.' },
    ],
  },

  'seo/ecommerce-seo': {
    tagline: 'More organic shoppers. Lower acquisition cost.',
    description: 'E-commerce SEO is complex — thousands of product pages, faceted navigation, thin content, and duplicate URLs. We specialise in fixing exactly these challenges, driving organic traffic directly to your product and category pages.',
    deliverables: [
      'E-commerce-specific technical audit (crawl budget, faceted nav)',
      'Category page keyword targeting and optimisation',
      'Product page SEO at scale (bulk optimisation)',
      'Product schema markup (offers, ratings, availability)',
      'Collection page content strategy',
      'Monthly organic revenue attribution report',
    ],
    process: [
      { title: 'E-commerce Crawl Audit', desc: 'We audit crawl budget waste, pagination issues, faceted navigation URL proliferation, and duplicate content — the biggest e-commerce SEO killers.' },
      { title: 'Category Architecture', desc: 'We review your category and sub-category structure, ensuring it matches how customers search and is correctly crawlable by Google.' },
      { title: 'Category Page Optimisation', desc: 'Category pages get unique, keyword-rich content, proper H1s, and internal linking from product pages — turning them into ranking powerhouses.' },
      { title: 'Product Page Optimisation', desc: 'Using bulk processes, we optimise title tags, meta descriptions, and alt-text across thousands of products without duplicating effort.' },
      { title: 'Schema Implementation', desc: 'Product schema (price, availability, reviews) is implemented to generate rich results in Google — increasing click-through rates from search.' },
      { title: 'Reporting', desc: 'Monthly reports tie organic sessions directly to revenue, tracking category and product page rankings and measuring organic channel ROI.' },
    ],
    faqs: [
      { q: 'Our site has 10,000 products — can you handle that scale?', a: 'Yes — large-scale e-commerce SEO is our speciality. We use bulk processes and templates to optimise at scale without sacrificing quality.' },
      { q: 'How do you handle out-of-stock products?', a: 'We advise keeping pages live with clear availability signals rather than deleting them — preserving any ranking authority. We add related product recommendations to retain organic traffic value.' },
      { q: 'What\'s the biggest technical issue for e-commerce SEO?', a: 'Faceted navigation (filters for colour, size, price) that generates thousands of duplicate URLs and wastes crawl budget. This is usually our first priority.' },
      { q: 'Do you optimise for Google Shopping as well?', a: 'Google Shopping is a paid channel — our SEO work focuses on organic. We do work alongside your Google Ads team to ensure product data feeds are accurate.' },
      { q: 'How do you measure ROI from e-commerce SEO?', a: 'We track organic sessions to product/category pages, goal completions, and revenue using GA4 and Search Console — attributing organic revenue directly.' },
    ],
  },

  'seo/youtube-seo': {
    tagline: 'Get found on the world\'s second largest search engine.',
    description: 'YouTube is search — and most brands treat it as just a video host. We optimise your YouTube channel and videos for discoverability: research, titles, descriptions, tags, thumbnails, chapters, and playlists to maximise views, watch time, and subscribers.',
    deliverables: [
      'YouTube channel audit and optimisation',
      'Keyword research for video topics and titles',
      'Optimised title, description, and tag templates',
      'Thumbnail design strategy and A/B testing setup',
      'Chapter markers and transcript optimisation',
      'Playlist structure and end-screen/card strategy',
    ],
    process: [
      { title: 'Channel Audit', desc: 'We audit your existing channel — About section, channel art, keywords, playlist structure, and existing video metadata — for optimisation gaps.' },
      { title: 'Keyword Research', desc: 'We research YouTube-specific search volume, competition, and viewer intent for topics in your niche using TubeBuddy and Vidiq data.' },
      { title: 'Video Optimisation', desc: 'Existing videos get updated titles, keyword-rich descriptions, accurate tags, chapters, and transcript corrections for full indexability.' },
      { title: 'Thumbnail Strategy', desc: 'We design a thumbnail template system that\'s consistent, click-worthy, and stands out in search and suggested video rows.' },
      { title: 'Publish Strategy', desc: 'We advise on optimal publish frequency, upload schedules, and title formats for new videos — aligning to how YouTube rewards consistent creators.' },
      { title: 'Analytics Review', desc: 'Monthly we review impressions, CTR, average view duration, subscriber growth, and search term reports to refine our strategy.' },
    ],
    faqs: [
      { q: 'Does YouTube SEO actually work?', a: 'Yes — YouTube\'s algorithm heavily weighs searchability. Optimised titles, descriptions, and tags directly influence whether your video appears in search results and suggested videos.' },
      { q: 'How important are thumbnails?', a: 'Critical. YouTube shows impression CTR in your analytics — thumbnails directly affect how many people click your video when it appears. We treat thumbnails as a strategic asset.' },
      { q: 'Do you create the video content?', a: 'No — we optimise existing video content for discovery. For clients who need video production, we can connect you with our production partners.' },
      { q: 'How long before we see growth in views?', a: 'Optimising existing videos can drive increased views within weeks. Building sustainable channel growth through consistent content typically shows meaningful results in 3–6 months.' },
      { q: 'Do you manage the YouTube community (comments, posts)?', a: 'Community management can be added to the scope. Our core YouTube SEO service focuses on discoverability — metadata, thumbnails, and channel structure.' },
    ],
  },

  // ── IT SERVICES ─────────────────────────────────────────────────────────────
  'it-services/wordpress': {
    tagline: 'Fast, secure WordPress sites built to perform.',
    description: 'We design and develop WordPress websites that are fast, secure, and easy for you to manage — from business sites and portfolio sites to complex custom-built themes and plugin development. No page builders that bloat your site; clean code that lasts.',
    deliverables: [
      'Custom WordPress theme design and development',
      'Plugin selection, configuration, and custom development',
      'WooCommerce integration (if required)',
      'Page speed optimisation (Core Web Vitals compliant)',
      'Security hardening and malware protection setup',
      'CMS training and documentation for your team',
    ],
    process: [
      { title: 'Discovery', desc: 'We map your goals, content structure, user flows, and integrations — creating a site architecture before any design or code begins.' },
      { title: 'Design', desc: 'UI designs are produced in Figma showing desktop and mobile layouts — reviewed and approved before development.' },
      { title: 'Development', desc: 'We build in WordPress using clean custom themes (not page builders) — fast, maintainable, and structured for easy content management.' },
      { title: 'Content Migration', desc: 'Existing content is migrated and structured correctly. All pages, posts, media, and SEO metadata are preserved.' },
      { title: 'Optimisation', desc: 'We optimise for Core Web Vitals — image compression, caching, lazy loading, CDN configuration — delivering fast page loads from day one.' },
      { title: 'Launch & Training', desc: 'We launch with a pre-flight checklist, then train your team on the CMS so they can add content confidently.' },
    ],
    faqs: [
      { q: 'Do you build with Elementor/Divi or custom themes?', a: 'We recommend custom themes for performance and maintainability. We can build with Elementor for clients who need to self-edit complex layouts — but we always optimise the output.' },
      { q: 'How long does a WordPress site take to build?', a: 'A standard business site takes 4–6 weeks from kickoff to launch. Complex sites with custom functionality take 8–12 weeks.' },
      { q: 'Will I be able to update the site myself?', a: 'Yes — WordPress CMS training is included. For simple content updates (text, images, blog posts), no developer needed. We also offer ongoing maintenance retainers.' },
      { q: 'Do you handle WordPress security?', a: 'Yes — security hardening is part of every build: limiting login attempts, removing default admin URL, security headers, SSL, and firewall plugin configuration.' },
      { q: 'Can you rebuild or redesign an existing WordPress site?', a: 'Yes — we often rebuild existing WordPress sites from the ground up to fix performance, security, and maintainability issues, migrating all existing content.' },
    ],
  },

  'it-services/shopify': {
    tagline: 'Shopify stores that convert, not just look good.',
    description: 'We build Shopify stores optimised for conversion — custom themes, metafield setup, app integration, and performance tuning — so your store loads fast, guides buyers confidently, and handles scale without falling over.',
    deliverables: [
      'Custom Shopify theme design and development (or premium theme customisation)',
      'Product catalogue setup and metafield configuration',
      'App selection and integration (reviews, loyalty, subscriptions)',
      'Checkout customisation (Shopify Plus) or optimisation',
      'Performance and Core Web Vitals optimisation',
      'GA4 and Meta Pixel tracking setup',
    ],
    process: [
      { title: 'Store Architecture', desc: 'We map product catalogue structure, collection hierarchy, and customer journeys before touching any design or theme code.' },
      { title: 'Design', desc: 'Custom page designs are created in Figma for home, product, collection, and cart pages — conversion-optimised with clear hierarchy and CTAs.' },
      { title: 'Theme Development', desc: 'We build or customise a Shopify theme using Liquid, JavaScript, and CSS — clean code, no unnecessary app bloat.' },
      { title: 'Product & Content Setup', desc: 'Products, metafields, variants, and collections are configured correctly. We also set up Shopify metaobjects for dynamic content where needed.' },
      { title: 'Apps & Integrations', desc: 'We integrate only the apps you need — email (Klaviyo), reviews (Yotpo/Judge.me), subscriptions (Recharge), loyalty — and configure them correctly.' },
      { title: 'Launch', desc: 'Pre-launch checklist, test orders, analytics verification, and domain DNS configuration. Post-launch monitoring for 2 weeks.' },
    ],
    faqs: [
      { q: 'Should I use a premium theme or a custom theme?', a: 'Premium themes (like Dawn or Prestige) are faster to launch and cost-effective for most stores. Custom themes are better for unique UX requirements or high-revenue brands. We advise after seeing your goals.' },
      { q: 'Do you work with Shopify Plus?', a: 'Yes — we work with Shopify Plus for enterprise clients, including checkout.liquid customisation, B2B features, and multi-store setups.' },
      { q: 'Can you migrate our store from WooCommerce to Shopify?', a: 'Yes — we handle full WooCommerce-to-Shopify migrations: products, customers, orders, and SEO (301 redirects for all URLs).' },
      { q: 'How do you improve Shopify store speed?', a: 'We audit and remove unused apps, optimise images with Shopify\'s native CDN, reduce theme JavaScript, and implement lazy loading — typically improving LCP by 40–60%.' },
      { q: 'Do you handle ongoing Shopify support after launch?', a: 'Yes — we offer monthly retainer plans covering updates, new feature builds, performance monitoring, and app management.' },
    ],
  },

  'it-services/react-nextjs': {
    tagline: 'High-performance web apps built for the modern web.',
    description: 'We build production-grade React and Next.js applications — from marketing sites and SaaS dashboards to complex data-driven web apps. Our engineering team delivers clean, typed code with strong architecture that scales as your product grows.',
    deliverables: [
      'Next.js App Router or Pages Router application',
      'React component library with TypeScript',
      'API routes / backend integration (REST or GraphQL)',
      'Authentication (NextAuth, Clerk, or custom JWT)',
      'Database integration (Postgres, MongoDB, Supabase, PlanetScale)',
      'Vercel / AWS deployment and CI/CD pipeline',
    ],
    process: [
      { title: 'Architecture Design', desc: 'We define the tech stack, routing strategy, data fetching approach, and component architecture in an architecture document before coding.' },
      { title: 'Design System', desc: 'UI components are designed in Figma first, then implemented as a typed React component library for consistent reuse.' },
      { title: 'Development', desc: 'We build in Next.js with TypeScript, ESLint, and Prettier from day one — structured for maintainability, not speed-to-ship-once.' },
      { title: 'API & Data Layer', desc: 'Backend routes, database schema, and data fetching strategies (SSR, SSG, ISR, or client-side) are implemented correctly for performance and correctness.' },
      { title: 'Testing', desc: 'Core user flows are covered with Playwright E2E tests. Critical business logic gets unit tests. Code review is required before merging to main.' },
      { title: 'Deployment', desc: 'We configure Vercel (or AWS/GCP), set up environment variables, configure CI/CD via GitHub Actions, and monitor post-launch.' },
    ],
    faqs: [
      { q: 'When should I use Next.js vs plain React?', a: 'Next.js adds server-side rendering, routing, and optimised image handling out of the box — we recommend it for most production applications. Standalone React is appropriate for embedded widgets or SPAs behind auth where SEO is irrelevant.' },
      { q: 'Do you use TypeScript?', a: 'Yes — all our Next.js projects are built with TypeScript by default. It catches errors at build time, improves IDE support, and makes large codebases maintainable.' },
      { q: 'Can you build a full-stack app, or just the frontend?', a: 'Full-stack. We use Next.js API routes or separate Node/Express services for backend, integrated with your database of choice.' },
      { q: 'Do you set up CI/CD?', a: 'Yes — GitHub Actions pipelines with lint, type-check, and test runs are configured. Deployments to Vercel or cloud providers trigger automatically on merge.' },
      { q: 'Can you take over an existing Next.js codebase?', a: 'Yes — we do codebase audits and phased takeovers. We\'ll assess code quality, dependency health, and architecture before committing to a plan.' },
    ],
  },

  'it-services/laravel': {
    tagline: 'Robust PHP backends built for enterprise scale.',
    description: 'We build Laravel applications — REST APIs, web platforms, admin panels, and integrations — using modern PHP with clean architecture, full test coverage, and deployment pipelines. Our team delivers backends that your frontend and mobile teams can rely on.',
    deliverables: [
      'Laravel REST API or full-stack application',
      'Database design (MySQL/PostgreSQL) with migrations and seeders',
      'Authentication and role-based access control (Sanctum/Passport)',
      'Admin panel (Laravel Nova, Filament, or custom)',
      'Third-party integrations (Stripe, Razorpay, CRM, ERPs)',
      'Docker-based local setup and CI/CD pipeline',
    ],
    process: [
      { title: 'Requirements & ERD', desc: 'We map all entities, relationships, and business rules into an entity-relationship diagram before any code is written.' },
      { title: 'API Design', desc: 'API contracts (endpoints, request/response schemas) are documented in OpenAPI spec, reviewed with your team, and approved before implementation.' },
      { title: 'Development', desc: 'We build with Laravel best practices: service classes, form requests, policies, events — not business logic crammed into controllers.' },
      { title: 'Testing', desc: 'Feature tests cover every API endpoint and critical business logic. We target >80% coverage with meaningful tests, not just line coverage.' },
      { title: 'Staging Deployment', desc: 'The application is deployed to a staging environment matching production specs for full end-to-end testing before go-live.' },
      { title: 'Production & Handoff', desc: 'Production deployment with server hardening, queue workers, scheduled tasks, and monitoring. Full documentation and knowledge transfer included.' },
    ],
    faqs: [
      { q: 'What version of Laravel do you build with?', a: 'We build with the current LTS version of Laravel (v11 as of 2025) and follow the official upgrade path for existing projects.' },
      { q: 'Can you build a REST API for our mobile app?', a: 'Yes — REST API development is a core service. We deliver OpenAPI documentation alongside the API so your mobile team has a reliable reference.' },
      { q: 'Do you build admin panels?', a: 'Yes — we use Laravel Nova or Filament for admin panels, depending on complexity and client preference. Both integrate natively with Laravel.' },
      { q: 'Can you integrate with third-party payment gateways?', a: 'Yes — we integrate Razorpay, Stripe, PayU, and other payment gateways with proper webhook handling and idempotent payment processing.' },
      { q: 'Do you handle server setup and deployment?', a: 'Yes — we configure Laravel on Ubuntu/Nginx with Forge or Docker, set up queues, scheduled tasks, and deploy via CI/CD pipelines.' },
    ],
  },

  'it-services/webflow-wix': {
    tagline: 'Beautiful no-code sites. Fast, flexible, and yours.',
    description: 'We design and build production-ready Webflow and Wix sites that look custom-coded without the cost or complexity. Ideal for marketing sites, landing pages, and portfolio sites that need to be launched fast and edited by your team without a developer.',
    deliverables: [
      'Custom site design in Figma (pre-build)',
      'Webflow or Wix development (your choice of platform)',
      'CMS structure for blog, case studies, or team pages',
      'Animations and interactions (Webflow)',
      'Form integrations (HubSpot, Mailchimp, Zapier)',
      'Training session so your team can manage it',
    ],
    process: [
      { title: 'Platform Recommendation', desc: 'We help you choose between Webflow and Wix based on your complexity, team\'s technical comfort, and long-term content management needs.' },
      { title: 'Design', desc: 'Full page designs in Figma for desktop and mobile — approved before any builder work begins to avoid mid-build scope changes.' },
      { title: 'Build', desc: 'We build in your chosen platform — using custom code where the builder falls short, to deliver the design vision precisely.' },
      { title: 'CMS Setup', desc: 'Dynamic collections for blog, team, portfolio, or case studies — so content is manageable without touching the design.' },
      { title: 'Integrations', desc: 'Forms are connected to your CRM or email tool via Zapier or native integration. Analytics and tracking pixels are installed.' },
      { title: 'Training & Launch', desc: 'We run a 60-minute training session, then go live with a launch checklist. Post-launch support window of 2 weeks is included.' },
    ],
    faqs: [
      { q: 'What\'s the difference between Webflow and Wix?', a: 'Webflow gives more design control and custom code capability — better for complex marketing sites. Wix is simpler for teams that want maximum self-service. We recommend after understanding your needs.' },
      { q: 'Can I edit the site after launch without a developer?', a: 'Yes — that\'s the point. Both platforms are designed for non-technical editors. We structure the CMS so your team can update content without touching the design.' },
      { q: 'Is Webflow good for SEO?', a: 'Yes — Webflow has clean semantic HTML output, built-in metadata controls, fast hosting on their CDN, and native sitemap generation. It\'s genuinely SEO-friendly.' },
      { q: 'Do you migrate an existing site to Webflow?', a: 'Yes — we migrate content, redirect old URLs, and rebuild the design in Webflow. SEO value is preserved with proper 301 redirects.' },
      { q: 'What are the ongoing costs for Webflow?', a: 'Webflow charges a monthly/annual hosting plan ($23–$39/month for CMS sites). This is separate from our development fee. We help you choose the right plan.' },
    ],
  },

  'it-services/web-apps': {
    tagline: 'Custom web applications engineered for your workflow.',
    description: 'When off-the-shelf software doesn\'t fit, we build custom web applications — internal tools, client portals, SaaS platforms, and workflow automation systems — designed precisely around how your business operates.',
    deliverables: [
      'Requirements specification and system design',
      'Full-stack web application (frontend + backend)',
      'Role-based authentication and user management',
      'Database architecture and API development',
      'Admin dashboard and reporting module',
      'Deployment, documentation, and maintenance plan',
    ],
    process: [
      { title: 'Discovery Workshop', desc: 'We interview stakeholders, map workflows, and define precise requirements — identifying what the system must do and how users will interact with it.' },
      { title: 'System Design', desc: 'We design the database schema, API architecture, and user interface in tandem — catching integration points and edge cases before coding.' },
      { title: 'Sprint Development', desc: 'We build in 2-week sprints with demos at each sprint end — so you see working software early and can guide direction throughout.' },
      { title: 'QA & Testing', desc: 'Each sprint includes functional QA. Before launch, a full regression test covers all critical user flows and edge cases.' },
      { title: 'User Acceptance Testing', desc: 'Your team uses the application in a staging environment before launch, identifying any real-world issues while changes are still cheap.' },
      { title: 'Launch & Support', desc: 'We deploy, monitor launch stability, and provide a 30-day post-launch support window before transitioning to a maintenance retainer.' },
    ],
    faqs: [
      { q: 'What stack do you build custom web apps in?', a: 'We most commonly use Next.js + Node.js or Laravel (PHP) depending on the requirements. Database choices are typically PostgreSQL or MySQL. We choose based on your long-term team skills.' },
      { q: 'How do you handle scope changes during development?', a: 'We use a change request process — any scope addition is estimated, priced, and approved before work begins. This keeps projects predictable and avoids budget surprises.' },
      { q: 'How long does a custom web app take to build?', a: 'Scope varies widely, but typical internal tools take 8–16 weeks. Complex multi-role SaaS platforms can take 6–12 months. We phase delivery so you have working software faster.' },
      { q: 'Who owns the source code?', a: 'You do — full intellectual property transfer at project completion. We deliver source code, documentation, and deployment configuration.' },
      { q: 'Do you offer ongoing maintenance?', a: 'Yes — monthly retainer plans covering bug fixes, security updates, hosting management, and feature additions are available post-launch.' },
    ],
  },

  'it-services/landing-pages': {
    tagline: 'Pages built for one job: converting visitors.',
    description: 'A landing page has a single purpose — to convert. We design and build high-converting landing pages for ad campaigns, product launches, lead generation, and events. Fast to load, clear in hierarchy, and tested to maximise results.',
    deliverables: [
      'Conversion-focused UX design (desktop and mobile)',
      'Persuasive copywriting aligned to ad creative',
      'Development in Next.js, Webflow, or Unbounce (your stack)',
      'Form integration (HubSpot, Zapier, or custom CRM)',
      'Google Analytics 4 + Meta Pixel + conversion tracking',
      'A/B test variant (optional)',
    ],
    process: [
      { title: 'Messaging Alignment', desc: 'We review your ad creative and audience to ensure the landing page message matches what drove the click — message match is critical for conversion.' },
      { title: 'Wireframe', desc: 'A conversion-focused wireframe maps the page structure: hero, social proof, features/benefits, objection handling, and CTA — before visual design.' },
      { title: 'Design', desc: 'Visual design is applied with conversion psychology in mind: clear hierarchy, trust signals, directional cues, and a single prominent CTA.' },
      { title: 'Development', desc: 'We build the page with load speed as a priority — optimised images, minimal JavaScript, and fast hosting — since page speed directly affects Quality Score and conversion rate.' },
      { title: 'Tracking Setup', desc: 'Conversion events are tracked in GA4, Google Ads, and Meta — attributing every lead or sale back to its source accurately.' },
      { title: 'Launch & Iterate', desc: 'Page goes live and we monitor conversion rate. For ongoing campaigns, we set up A/B tests to continuously improve performance.' },
    ],
    faqs: [
      { q: 'What conversion rate should a landing page achieve?', a: 'Average conversion rates vary by industry and offer: 2–5% for lead gen, 1–3% for e-commerce. Great landing pages consistently outperform these benchmarks. We\'ll establish a baseline and improve from there.' },
      { q: 'Do you write the copy for the landing page?', a: 'Yes — conversion copywriting is included. We write headlines, body copy, and CTAs informed by your offer and target audience.' },
      { q: 'How quickly can a landing page be built?', a: 'A single landing page typically takes 5–7 business days from brief to live. Rush builds in 48 hours are available for an expedite fee.' },
      { q: 'Can you build multiple landing page variants for A/B testing?', a: 'Yes — we design and build A/B variants and set up the testing framework (Google Optimize successor or VWO) so you can run data-driven experiments.' },
      { q: 'Should my landing page be on my main website or a separate URL?', a: 'For paid traffic, a dedicated subdomain or separate URL removes navigation distractions. We advise based on your specific campaign goals and platform requirements.' },
    ],
  },

  'it-services/ai-automation': {
    tagline: 'Let AI handle the work that shouldn\'t need a human.',
    description: 'We build AI-powered automation systems that eliminate repetitive tasks, accelerate workflows, and give your team superpowers — using Large Language Models, workflow automation, and custom integrations to connect your tools intelligently.',
    deliverables: [
      'Workflow audit and automation opportunity mapping',
      'LLM-powered workflows (OpenAI, Claude, Gemini)',
      'No-code automation (Zapier, Make.com, n8n)',
      'Custom AI agents and chatbots',
      'Data extraction, classification, and summarisation pipelines',
      'Integration with CRM, ERP, and communication tools',
    ],
    process: [
      { title: 'Workflow Audit', desc: 'We interview your team and map every recurring manual process — scoring each by time cost, error rate, and automation feasibility.' },
      { title: 'Automation Roadmap', desc: 'We prioritise automations by ROI and build a phased roadmap — quick wins first, then more complex AI-powered workflows.' },
      { title: 'Tool Selection', desc: 'We select the right tools for each automation: no-code (Make/Zapier) for simple workflows, custom code + LLMs for complex reasoning tasks.' },
      { title: 'Build & Test', desc: 'Automations are built and tested with real data in a staging environment before any production deployment — catching edge cases before they cause problems.' },
      { title: 'Deployment & Monitoring', desc: 'Live automations run with error alerting and logging so any failure is caught immediately and doesn\'t silently break your operations.' },
      { title: 'Training & Handoff', desc: 'Your team is trained on managing and adjusting the automations. We document every workflow so you\'re not dependent on us to maintain them.' },
    ],
    faqs: [
      { q: 'What tasks are best suited for AI automation?', a: 'Document processing (reading and classifying emails, invoices, contracts), customer support (first-response chatbots), data enrichment, content drafting, and reporting are the highest-ROI starting points.' },
      { q: 'Do I need a large tech team to use AI automation?', a: 'No — many of our automations run on no-code platforms like Make or n8n that your operations team can manage. We handle the complex custom builds.' },
      { q: 'How do you ensure AI output quality and accuracy?', a: 'We design with human-in-the-loop review for high-stakes outputs, use structured prompting to reduce hallucination, and implement output validation logic in every pipeline.' },
      { q: 'Is our data safe when using LLM APIs?', a: 'We review data handling policies for each LLM provider and configure API usage to avoid training data exposure. For sensitive data, we deploy local models where needed.' },
      { q: 'How quickly can a simple automation be delivered?', a: 'Simple no-code automations (e.g., auto-routing leads from a form to CRM + Slack) can be built in 1–3 days. Complex LLM pipelines typically take 2–4 weeks.' },
    ],
  },
}

function toTitle(slug: string) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

export function generateStaticParams() {
  return MEGA_MENU_CATEGORIES.flatMap(cat => {
    const serviceSlug = cat.href.replace('/services/', '')
    return cat.services.map(svc => {
      const subserviceSlug = svc.href.replace(`/services/${serviceSlug}/`, '')
      return { service: serviceSlug, subservice: subserviceSlug }
    })
  })
}

export default async function SubservicePage({
  params,
}: {
  params: Promise<{ service: string; subservice: string }>
}) {
  const { service: serviceSlug, subservice: subserviceSlug } = await params

  const category   = MEGA_MENU_CATEGORIES.find(c => c.href.endsWith(serviceSlug))
  const subservice = category?.services.find(s => s.href.endsWith(subserviceSlug))

  const title       = subservice?.label ?? toTitle(subserviceSlug)
  const parentTitle = category?.label   ?? toTitle(serviceSlug)
  const key         = `${serviceSlug}/${subserviceSlug}`
  const data        = SUBSERVICE_DATA[key]

  const faqSchema = data?.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',        item: 'https://addmads.com' },
      { '@type': 'ListItem', position: 2, name: 'Services',    item: 'https://addmads.com/services' },
      { '@type': 'ListItem', position: 3, name: parentTitle,   item: `https://addmads.com/services/${serviceSlug}` },
      { '@type': 'ListItem', position: 4, name: title,         item: `https://addmads.com/services/${serviceSlug}/${subserviceSlug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Navbar />

      <main style={{ paddingTop: 'var(--nav-h)' }}>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section style={{ background: '#FFFFFF', color: '#111111', padding: 'clamp(100px,14vw,180px) var(--container-px)', minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: 780 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <Link href="/services" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(17,17,17,0.35)', textDecoration: 'none' }}>Services</Link>
              <span style={{ color: 'rgba(17,17,17,0.2)' }}>›</span>
              <Link href={`/services/${serviceSlug}`} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(17,17,17,0.5)', textDecoration: 'none' }}>{parentTitle}</Link>
              <span style={{ color: 'rgba(17,17,17,0.2)' }}>›</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: '#E60000' }}>{title}</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2.5rem,8vw,5rem)', fontWeight: 700, lineHeight: 1.1, color: '#111111', marginBottom: 16 }}>
              {title}
            </h1>
            {data?.tagline && (
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.1rem,1.6vw,1.25rem)', color: '#E60000', fontWeight: 600, marginBottom: 20 }}>
                {data.tagline}
              </p>
            )}
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem,1.4vw,1.125rem)', color: 'rgba(17,17,17,0.55)', lineHeight: 1.75, maxWidth: 600, marginBottom: 40 }}>
              {data?.description ?? `Expert ${title} services delivered by AddMads — data-driven, results-focused, and built to scale your business.`}
            </p>
            <Link href="/contact" className="btn-red" style={{ padding: '14px 32px', fontSize: '1rem', fontWeight: 600 }}>Get a Free Quote</Link>
          </div>
        </section>

        {/* ── What's Included ───────────────────────────────────────────────── */}
        {data?.deliverables && (
          <section style={{ background: '#F8F8F8', padding: 'clamp(80px,10vw,140px) var(--container-px)' }}>
            <div style={{ maxWidth: 880, margin: '0 auto' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E60000', marginBottom: 16 }}>What You Get</p>
              <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: '#111111', lineHeight: 1.2, marginBottom: 40 }}>
                What&apos;s included in our<br />{title} service
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))', gap: 20 }}>
                {data.deliverables.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '20px 24px', background: '#FFFFFF', borderRadius: 12, border: '1px solid rgba(17,17,17,0.07)' }}>
                    <span style={{ width: 28, height: 28, background: '#E60000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: '#111111', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Our Process ───────────────────────────────────────────────────── */}
        {data?.process && (
          <section style={{ background: '#111111', padding: 'clamp(80px,10vw,140px) var(--container-px)' }}>
            <div style={{ maxWidth: 880, margin: '0 auto' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E60000', marginBottom: 16 }}>How We Deliver</p>
              <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2, marginBottom: 48 }}>
                Our {title} process, step by step
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {data.process.map((step, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 24, paddingBottom: i < data.process.length - 1 ? 40 : 0, marginBottom: i < data.process.length - 1 ? 0 : 0, borderLeft: i < data.process.length - 1 ? 'none' : 'none' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: 48, height: 48, background: '#E60000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '0.875rem', fontWeight: 700, flexShrink: 0 }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      {i < data.process.length - 1 && <div style={{ width: 2, flex: 1, background: 'rgba(230,0,0,0.25)', marginTop: 12, minHeight: 32 }} />}
                    </div>
                    <div style={{ paddingBottom: i < data.process.length - 1 ? 40 : 0 }}>
                      <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 8, marginTop: 10 }}>{step.title}</h3>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Why AddMads ───────────────────────────────────────────────────── */}
        <section style={{ background: '#F8F8F8', padding: 'clamp(80px,10vw,140px) var(--container-px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E60000', marginBottom: 16 }}>Our Approach</p>
              <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: '#111111', lineHeight: 1.2, marginBottom: 20 }}>
                Why AddMads for<br />{title}?
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(17,17,17,0.6)', lineHeight: 1.75, marginBottom: 32 }}>
                We don&apos;t take a cookie-cutter approach. Every {title} engagement starts with a deep understanding of your business, audience, and competitive landscape — then we build a strategy that delivers real, measurable results.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {['Performance-first methodology', 'Transparent reporting & full visibility', 'Dedicated account manager', 'Proven track record across 250+ projects'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ width: 24, height: 24, background: '#E60000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: '#111111' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#111111', borderRadius: 16, padding: 'clamp(32px,4vw,48px)', color: '#FFFFFF' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E60000', marginBottom: 20 }}>Quick Contact</p>
              <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>Ready to Start?</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 28 }}>
                Get a free consultation and custom quote for {title}. We respond within 24 hours.
              </p>
              <a href="mailto:info@addmads.com" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                info@addmads.com
              </a>
              <br />
              <Link href="/contact" className="btn-red" style={{ display: 'inline-block', marginTop: 24, padding: '12px 28px', fontSize: '0.9375rem', fontWeight: 600 }}>
                Get Free Quote →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────────────── */}
        {data?.faqs && data.faqs.length > 0 && (
          <section style={{ background: '#FFFFFF', padding: 'clamp(80px,10vw,140px) var(--container-px)' }}>
            <div style={{ maxWidth: 760, margin: '0 auto' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E60000', marginBottom: 16 }}>FAQs</p>
              <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: '#111111', lineHeight: 1.2, marginBottom: 48 }}>
                Common questions about {title}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {data.faqs.map((faq, i) => (
                  <div key={i} style={{ borderBottom: '1px solid rgba(17,17,17,0.09)', paddingBottom: 24 }}>
                    <h3 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.1rem', fontWeight: 700, color: '#111111', marginBottom: 10 }}>
                      {faq.q}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'rgba(17,17,17,0.6)', lineHeight: 1.75 }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Other services in same category ───────────────────────────────── */}
        {category && (
          <section style={{ background: '#F8F8F8', padding: 'clamp(60px,8vw,100px) var(--container-px)' }}>
            <h2 style={{ fontFamily: 'var(--font-tight)', fontSize: '1.75rem', fontWeight: 700, color: '#111111', marginBottom: 28 }}>
              More {parentTitle} Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: 12 }}>
              {category.services.filter(s => !s.href.endsWith(subserviceSlug)).map(svc => (
                <Link key={svc.href} href={svc.href} className="svc-rel-link">
                  {svc.label} →
                </Link>
              ))}
            </div>
          </section>
        )}

        <UnifiedForm showLeftInfo={false} bgColor="#111111" />
      </main>

      <Footer />
    </>
  )
}
