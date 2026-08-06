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
  whyUsDesc?: string
  whyUsPoints?: string[]
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
      { q: 'How much does Google Ads management cost in India?', a: 'AddMads\' Google Ads management fee starts at ₹15,000–₹25,000/month depending on account size, separate from your ad spend. We recommend a minimum ad spend of ₹30,000/month to generate sufficient data for optimisation.' },
      { q: 'Do you run Google Ads for businesses in Sonipat and Delhi NCR?', a: 'Yes — we manage Google Ads for businesses across Sonipat, Haryana, Delhi, Gurgaon, Noida, and the entire Delhi NCR region, as well as clients in the UK, US, and UAE.' },
      { q: 'Should I use Google Ads or Meta Ads for lead generation?', a: 'Google Ads captures intent-driven searches — people already looking for what you offer. Meta Ads builds awareness and demand. For immediate high-intent leads, Google Ads typically delivers faster results. We often recommend running both for maximum funnel coverage.' },
      { q: 'What is a Performance Max campaign and should I use it?', a: 'Performance Max is Google\'s AI-driven campaign type that runs across all Google channels. It works best with 30+ conversions/month of data. We build standard Search campaigns first to collect data before recommending PMax.' },
    ],
    whyUsDesc: 'AddMads manages Google Ads with full conversion tracking from day one — every rupee traced to a lead or sale. Our campaigns consistently achieve 3×–6× ROAS within 90 days by combining intent-matched keywords, landing page alignment, and Smart Bidding strategies built on real conversion data. You retain full account ownership, and we share every data point — no black-box reporting.',
    whyUsPoints: [
      'Full GA4 + GTM conversion tracking setup included in every campaign',
      'Smart Bidding activated only after 30+ conversions — we never rush algorithms',
      'Monthly recorded walkthrough of your Google Ads account — not just a dashboard link',
      'You own your account: full access, full data, always',
      'Clients across Sonipat, Delhi NCR, Haryana, UK, and UAE served at all budget levels',
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
      { q: 'How much does Meta Ads management cost in India?', a: 'Our Meta Ads management fee starts at ₹15,000–₹20,000/month depending on campaign complexity, separate from your ad spend. We recommend a minimum ad spend of ₹20,000/month for meaningful test-and-learn cycles.' },
      { q: 'Do you run Meta Ads for businesses in Haryana and Delhi NCR?', a: 'Yes — we manage Meta campaigns for businesses in Sonipat, Haryana, Delhi, Gurgaon, Noida, and across India, with international experience serving UK, US, and UAE clients.' },
      { q: 'How do you prevent Facebook ad fatigue?', a: 'We monitor frequency metrics (aiming for under 2.5 for cold audiences) and proactively refresh creatives every 3–4 weeks — new hooks, formats, or offer angles — before performance drops.' },
      { q: 'Can Meta Ads work for B2B businesses?', a: 'Yes — Meta\'s detailed interest and behaviour targeting works for many B2B verticals, especially when targeting business owners and decision-makers by job title, industry, and seniority. LinkedIn is typically stronger for B2B, but Meta can complement it effectively.' },
    ],
    whyUsDesc: 'AddMads runs Meta campaigns with a full-funnel structure — awareness, retargeting, and conversion layers all working in sequence. We implement Conversions API alongside the pixel for clean post-iOS14 attribution, and refresh creatives every 3–4 weeks to prevent ad fatigue. Clients across Delhi NCR, India, and UK markets have achieved 2×–5× ROAS on consistent monthly budgets.',
    whyUsPoints: [
      'Conversions API (CAPI) implemented alongside Pixel for accurate post-iOS14 attribution',
      'Full-funnel campaign structure: TOF awareness, MOF nurture, BOF retargeting',
      'Creative refresh cycle every 3–4 weeks to combat ad fatigue and maintain CPMs',
      'Weekly performance snapshots plus monthly deep-dive video walkthrough',
      'Clients in India, UK, US, and UAE — cross-border campaign expertise',
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
      { q: 'How much does social media management cost in India?', a: 'Our social media management packages start at ₹12,000–₹18,000/month for 2 platforms with 20 posts/month. Larger packages with content production and community management are available from ₹25,000/month.' },
      { q: 'Do you manage social media for businesses in Sonipat and Haryana?', a: 'Yes — we manage social media for local businesses in Sonipat, Panipat, Haryana, and Delhi NCR, as well as national and international brands. Local content is tailored to regional audiences where needed.' },
      { q: 'How long before social media shows business results?', a: 'Engagement metrics (likes, comments, saves) improve within 4–8 weeks of consistent posting. Business results — inbound enquiries, DMs, and link clicks — typically build meaningfully in 3–6 months as the audience grows and trust develops.' },
      { q: 'Will you manage both paid ads and organic social together?', a: 'Yes — we offer integrated packages combining organic social management with paid social ads. The two strategies reinforce each other: organic builds trust, paid accelerates reach.' },
    ],
    whyUsDesc: 'AddMads manages social media as a business channel, not a vanity metric exercise. We align every post to a business objective — awareness, trust-building, or conversion — and track performance against real metrics like reach growth, engagement rate, and link clicks. From Sonipat to UK clients, we\'ve grown brand communities that consistently drive inbound enquiries.',
    whyUsPoints: [
      'Content calendar delivered by the 25th of the month, ready for your approval',
      'Every post tied to a content pillar and business objective — no random posting',
      'Dedicated community manager for comment and DM responses',
      'Monthly analytics report: reach, engagement rate, follower growth, and saves',
      'Platform-native content: Reels for Instagram, carousels for LinkedIn, threads for X',
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
      { q: 'How much does email marketing management cost in India?', a: 'Our email marketing management starts at ₹12,000–₹18,000/month depending on list size and automation complexity. Platform subscription costs (Klaviyo, Mailchimp, Brevo) are billed directly by the ESP.' },
      { q: 'How do I grow my email list if I\'m starting from scratch?', a: 'We implement list-building strategies: lead magnets (guides, discounts, tools), pop-up forms optimised for conversion, and paid traffic to dedicated opt-in pages. We help you grow a permission-based list that generates revenue from day one.' },
      { q: 'What\'s the best email platform for a small business?', a: 'Brevo (formerly Sendinblue) offers a generous free tier and is cost-effective for small lists. Klaviyo excels for e-commerce automation. Mailchimp suits simple newsletter communication. We advise the right platform based on your list size and automation needs.' },
      { q: 'Do you manage email marketing for e-commerce businesses in India?', a: 'Yes — Klaviyo for Shopify and WooCommerce stores is our most common setup. We build welcome flows, abandoned cart sequences, post-purchase emails, and win-back campaigns specifically for D2C brands.' },
    ],
    whyUsDesc: 'AddMads builds email systems that work while you sleep — automated welcome flows, behaviour-triggered sequences, and segmented broadcasts that generate consistent revenue. We configure SPF, DKIM, and DMARC from day one to protect deliverability, and use only clean, permission-based lists. Our clients average 30–40% open rates on automated flows across Klaviyo, Mailchimp, and Brevo.',
    whyUsPoints: [
      'Deliverability setup included: SPF, DKIM, DMARC, and domain warm-up',
      'Automated flows built before broadcasts — sequences that earn before campaigns ask',
      'List segmentation by behaviour, purchase history, and lifecycle stage',
      'A/B testing of subject lines and send times every campaign cycle',
      'Monthly dashboard: open rate, click rate, revenue attributed, and list growth',
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
      { q: 'How much does content marketing cost in India?', a: 'Content marketing retainers start at ₹15,000–₹25,000/month for 4–6 articles/month including strategy and SEO optimisation. Individual articles start from ₹3,000–₹8,000 per piece depending on depth and research required.' },
      { q: 'Do you write content for businesses in Haryana and across India?', a: 'Yes — we produce content for businesses in Sonipat, Delhi NCR, Haryana, and across India in English. Hindi content is available on request for audiences who prefer regional language search.' },
      { q: 'How is content marketing different from just writing blogs?', a: 'Content marketing is strategic: every piece targets a specific keyword, is optimised for search intent, and is linked to other content to build topical authority. Writing blogs without a strategy rarely produces search results.' },
      { q: 'How do you measure content marketing ROI?', a: 'We track keyword rankings in Google Search Console, organic traffic in GA4, engagement metrics (time-on-page, scroll depth), and conversion events (form fills, downloads, contact clicks) attributed to organic visitors.' },
    ],
    whyUsDesc: 'AddMads treats content marketing as a long-term asset-building exercise, not a posting schedule. Every piece is mapped to a keyword, a funnel stage, and a business outcome. We handle strategy, research, writing, and distribution — and track rankings and organic traffic monthly to prove the investment is working. Our clients consistently see 200–500% organic traffic growth within 12 months of sustained content investment.',
    whyUsPoints: [
      'Keyword-to-funnel content mapping before any writing begins',
      'Writers with domain expertise in your industry — not generalists',
      'SEO-optimised articles with internal linking, schema, and search intent alignment',
      'Quarterly content audit to update, merge, or prune underperforming pages',
      'Content repurposed across social, email, and LinkedIn to maximise reach per piece',
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
      { q: 'How much does influencer marketing management cost in India?', a: 'Our management fee for influencer campaign planning, outreach, and reporting starts from ₹20,000. Creator fees for a micro-influencer campaign (5–10 creators) typically add ₹1,50,000–₹3,00,000 depending on creator tier and deliverables.' },
      { q: 'Do you run influencer campaigns for businesses in Haryana and Delhi NCR?', a: 'Yes — we source and manage influencers relevant to audiences in Haryana, Delhi NCR, and pan-India, including regional Hindi-language creators where relevant for local brand awareness.' },
      { q: 'How do you measure influencer campaign ROI?', a: 'We track reach, impressions, engagement rate, and link clicks via UTM parameters. Where UGC is repurposed in paid ads, we track conversion data from retargeting. A full creator scorecard is delivered at campaign close.' },
      { q: 'Can we use the influencer content in our own paid ads?', a: 'Yes — we negotiate content usage rights as part of every creator contract. Repurposing influencer UGC in paid Meta or Google ads is often one of the highest-ROI moves post-campaign.' },
    ],
    whyUsDesc: 'AddMads manages influencer campaigns end-to-end — from creator discovery and vetting through to contract, content review, and post-campaign reporting. We use data tools to verify follower authenticity and audience quality before any outreach, protecting your budget from fake engagement. Our campaigns span Instagram, YouTube, and LinkedIn with creators across India, UK, and UAE markets.',
    whyUsPoints: [
      'HypeAuditor and Modash audience verification — no fake follower surprises',
      'Full contract and usage rights management handled by AddMads',
      'Creative brief delivery and content review before any post goes live',
      'UTM tracking on every creator link for accurate attribution',
      'Creator scorecard post-campaign: repeat-or-avoid decisions backed by data',
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
      { q: 'How much does brand strategy cost in India?', a: 'Our brand strategy projects start at ₹30,000–₹50,000 for small to medium businesses. Enterprise engagements with primary research (customer interviews, surveys) start from ₹75,000. All projects include a discovery workshop and a polished strategy deck.' },
      { q: 'Do you offer brand strategy for startups in Sonipat and Haryana?', a: 'Yes — we work with early-stage startups across Sonipat, Haryana, Delhi NCR, and pan-India. Many of our brand strategy clients are first-time founders building their brand from the ground up.' },
      { q: 'What happens after the brand strategy is delivered?', a: 'Many clients move directly into visual identity design — logo, colour palette, typography — using the strategy as the creative brief. Others use the strategy to align their internal team or agency partners before beginning execution.' },
    ],
    whyUsDesc: 'AddMads builds brand strategies grounded in market research, not intuition. Our process combines stakeholder discovery, competitor analysis, and customer insight to produce positioning that is genuinely ownable and commercially meaningful. We\'ve delivered brand strategies for businesses across Sonipat, Delhi NCR, and international markets — from early-stage startups to established SMEs repositioning for growth.',
    whyUsPoints: [
      'Strategy built on real data: customer interviews, competitor audits, and category analysis',
      'Positioning tested against market reality before recommendation',
      'Deliverable: a polished strategy deck your leadership team can present',
      'Workshop-led process — your team co-creates rather than passively receives',
      'Seamlessly connects into visual identity design if required',
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
      { q: 'How much does logo design cost in India?', a: 'Our logo design projects start at ₹15,000–₹25,000 for the full package: 3 concepts, 3 revision rounds, and all final file formats including source files. Rush timelines are available at an additional fee.' },
      { q: 'Do you design logos for businesses in Sonipat, Haryana, and Delhi NCR?', a: 'Yes — we design logos for businesses across Sonipat, Haryana, Delhi NCR, and throughout India. We also serve UK, US, and UAE-based brands remotely with the same rigorous process.' },
      { q: 'How many revisions are included in the logo design process?', a: 'We include 3 revision rounds on the chosen concept direction. These cover meaningful refinements — proportions, colour, weight, typography — not just minor pixel-level tweaks.' },
      { q: 'Do I need to have a colour scheme in mind before starting?', a: 'No — colour exploration is part of our process. We develop the logo in black first so it works in any context, then present colour options that suit your brand personality and industry.' },
    ],
    whyUsDesc: 'AddMads designs logos strategically — the brief, research, and competitive audit happen before any design tool is opened. We develop 3 distinct concepts with written rationale, then refine the chosen direction through 3 revision rounds to pixel perfection. Full intellectual property is transferred to you on completion, and you receive every file format you will ever need — including source AI files.',
    whyUsPoints: [
      '3 distinct logo concepts with written strategic rationale for each',
      'Concepts presented in context: mockups of business card, signage, and app icon',
      '3 revision rounds on the chosen concept — meaningful refinements, not minor tweaks',
      'Full IP transfer on final payment — you own it outright, no ongoing licensing fees',
      'Delivered in SVG, PNG, PDF, and Adobe Illustrator source files',
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
      { q: 'How much does visual identity design cost in India?', a: 'Our visual identity packages start at ₹35,000–₹60,000 covering logo suite, colour palette, typography system, and applied mockups. Expanded packages including full brand guidelines and 10+ applications start from ₹80,000.' },
      { q: 'Do you design visual identities for businesses in Sonipat and Haryana?', a: 'Yes — we design for businesses across Sonipat, Haryana, Delhi NCR, and pan-India clients, as well as international brands. Our process is fully remote-friendly with client review via Figma.' },
      { q: 'How long does a visual identity project take?', a: 'A standard visual identity project takes 4–6 weeks: one week for moodboarding, two weeks for core element design, one week for application design, and one week for finalisation and delivery.' },
    ],
    whyUsDesc: 'AddMads designs visual identity systems that work in every context — digital, print, social, and packaging. We ground every visual decision in your brand strategy: colour choices have psychological rationale, typography reflects personality, and every element scales consistently from a favicon to a billboard. We have delivered visual identities for brands across India and internationally.',
    whyUsPoints: [
      'Strategy-first: visual decisions grounded in your brand positioning',
      'Full colour system with HEX, RGB, CMYK, and Pantone codes for every application',
      'Typography system covering heading, body, and accent fonts with usage rules',
      'Applied mockups on 5 real-world contexts before final delivery',
      'Editable Canva or Adobe Express templates included for your team',
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
      { q: 'How much do brand guidelines cost in India?', a: 'Our brand guidelines projects start at ₹20,000–₹35,000 for a standard 25–40 page document. Comprehensive guidelines covering digital, print, packaging, and social with full tone of voice sections start from ₹50,000.' },
      { q: 'Can you create brand guidelines if we didn\'t design our brand with you?', a: 'Yes — brand guidelines for existing brands are a common project. We audit your current assets, then codify what should be standardised and define what is currently missing or inconsistent.' },
      { q: 'Do brand guidelines include social media templates?', a: 'Our core brand guidelines define the system. Social media templates are a separate deliverable we can add. The guidelines tell designers what to do; templates let your team execute without a designer.' },
      { q: 'How do you handle brands that have evolved inconsistently over time?', a: 'We start with a brand audit — cataloguing all existing assets across digital and print — then identify which elements to retain, modernise, or standardise. The guidelines reflect the cleaned-up system going forward.' },
    ],
    whyUsDesc: 'AddMads produces brand guidelines that people actually use — clear, visual, and structured for both in-house teams and external vendors. We cover every element: logo usage rules, colour specifications for digital and print, typography hierarchy, photography direction, and tone of voice. Guidelines are delivered as a polished PDF with an optional editable source file for future updates.',
    whyUsPoints: [
      '25–60 pages of clear rules, not brand theory — practical and immediately usable',
      'Visual examples for correct and incorrect usage — no ambiguity for anyone applying the brand',
      'Both digital specs (HEX, RGB) and print specs (CMYK, Pantone) included',
      'Tone of voice section with real before/after writing examples from your business',
      'Optional: editable Figma or InDesign source file for internal updates over time',
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
      { q: 'How much does brand voice development cost in India?', a: 'Our brand voice and tone of voice projects start at ₹18,000–₹30,000 including the discovery workshop, voice framework, and the final tone of voice guide document with channel-specific copy examples.' },
      { q: 'Do I need brand strategy done first before brand voice?', a: 'Brand strategy defines your positioning and audience; brand voice is how you communicate to them. They are connected — brand voice is stronger when grounded in a clear brand strategy. We can deliver both in sequence.' },
      { q: 'How do you ensure the voice guide is actually used by our team?', a: 'We run a team presentation session after delivery and produce concise one-page quick-reference summaries that can be pinned to writing desks or shared in Notion alongside the full guide.' },
      { q: 'Can brand voice be extended to Hindi and other Indian languages?', a: 'Yes — we can develop language-specific voice adaptations for Hindi and regional Indian languages where tone, register, and vocabulary choices differ significantly from English.' },
    ],
    whyUsDesc: 'AddMads defines brand voice through a structured workshop process that gets your team\'s fingerprints on the outcome — so it feels owned, not imposed. We produce a voice framework with 4–5 defined dimensions, a tone spectrum for different contexts, and real before/after copy examples drawn from your own business. Your voice guide becomes a practical reference, not a shelf document.',
    whyUsPoints: [
      'Collaborative workshop — your team co-defines the voice, not us alone',
      '4–5 voice attributes with right vs. wrong application examples',
      'Tone spectrum: how voice adapts across formal, casual, and emotional contexts',
      'Real examples from your business rewritten in the new voice to demonstrate it in practice',
      'Channel-specific guidance: website, social, email, ads, and customer service',
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
      { q: 'How much does packaging design cost in India?', a: 'Our packaging design projects start at ₹20,000–₹35,000 for a single SKU including 2–3 concept directions, revision rounds, and print-ready file delivery. Multi-SKU projects and secondary packaging are priced separately.' },
      { q: 'Do you handle FSSAI labelling requirements for food packaging?', a: 'Yes — we incorporate all FSSAI-mandatory content: ingredient lists, nutritional information, manufacturing details, MRP, net weight, and required certifications into the packaging design during the refinement phase.' },
      { q: 'Can you help source packaging manufacturers in India?', a: 'We can recommend packaging manufacturers and printers in Delhi NCR, Haryana, and major Indian cities, and liaise directly with your chosen printer to ensure files are print-ready and specifications are met.' },
      { q: 'How long does packaging design take?', a: 'Standard packaging design projects take 3–4 weeks: one week for concept development, one to two weeks for refinement, and one week for pre-press file preparation and photorealistic digital renders.' },
    ],
    whyUsDesc: 'AddMads designs packaging that earns attention on shelf and in an unboxing video — combining your brand identity with print production knowledge that prevents costly pre-press errors. We develop 2–3 concept directions, refine through revision rounds, and deliver print-ready files to your manufacturer\'s exact specifications. We have produced packaging for FMCG, D2C, and specialty brands across India.',
    whyUsPoints: [
      'Competitive shelf audit before any design begins',
      '2–3 distinct packaging concepts — not just colour variations',
      'All mandatory regulatory content incorporated: FSSAI, ingredients, barcodes',
      'Print-ready PDFs delivered to manufacturer specifications — no pre-press surprises',
      'Photorealistic digital renders for website, social, and investor use included',
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
      { q: 'How much does graphic design cost in India?', a: 'Individual design projects start from ₹3,000–₹8,000 for simple assets (flyers, social posts) to ₹15,000–₹40,000 for complex projects (brochures, catalogues, pitch decks). Monthly retainer plans start at ₹18,000/month for a fixed quota of design hours.' },
      { q: 'Do you provide graphic design services in Sonipat, Haryana, and Delhi NCR?', a: 'Yes — we provide graphic design for businesses across Sonipat, Haryana, Delhi NCR, and pan-India. All work is managed remotely with quick turnaround and online review processes.' },
      { q: 'What is the difference between graphic design and UI/UX design?', a: 'Graphic design covers visual communication: print materials, brand assets, advertising creatives, and presentation design. UI/UX design focuses on digital interfaces — how users navigate websites and apps. Both disciplines are available at AddMads.' },
      { q: 'Do you design for both print and digital?', a: 'Yes — we deliver print-ready files (CMYK, correct resolution, bleed) for physical production and web-optimised versions (RGB, compressed) for digital use, so you get both in a single project without extra cost.' },
    ],
    whyUsDesc: 'AddMads\' design team delivers graphic work that is on-brand, print-ready, and built for purpose — whether it\'s a trade show banner, a digital ad creative, or a multi-page catalogue. We work fast without cutting corners: briefing is structured, concepts are contextualised in mockups, and final files are print-ready from delivery. Retainer clients get priority turnaround and a reduced monthly rate.',
    whyUsPoints: [
      'Concepts presented as mockups, not flat files — see it as it will look in the real world',
      'Print-ready PDFs with correct bleed, CMYK colour mode, and crop marks every time',
      'Rush 24–48 hour turnaround available for urgent campaigns',
      'Design retainer plans with priority slots and reduced monthly rates',
      'Source files (AI/PSD/INDD) included in every final delivery',
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
      { q: 'How much does UI/UX design cost in India?', a: 'UI/UX design projects start at ₹25,000–₹40,000 for focused engagements (landing page UX, key user flow redesign) and scale to ₹1,00,000–₹3,00,000+ for full product design with research, wireframes, visual design, and a component library.' },
      { q: 'Do you design UI/UX for mobile apps?', a: 'Yes — we design both iOS and Android app interfaces in Figma, following platform-specific design guidelines (Material Design for Android, Human Interface Guidelines for iOS) while applying your brand system.' },
      { q: 'Do you conduct user testing as part of the process?', a: 'User testing is part of our full-scope process. We conduct moderated usability tests on Figma prototypes before development begins, identifying friction points before they are built into the product.' },
      { q: 'How do you hand off designs to developers?', a: 'We deliver annotated Figma files with all components, states, typography specs, spacing values, and colour tokens documented — plus a handoff session with your development team to walk through the design system.' },
    ],
    whyUsDesc: 'AddMads designs digital interfaces grounded in user research and conversion intent. We wireframe before we design — so structure and logic are validated before any visual investment. Our Figma deliverables include a complete component library handoff that dramatically reduces development ambiguity and rework. We have designed dashboards, SaaS platforms, and e-commerce experiences for Indian and international clients.',
    whyUsPoints: [
      'Wireframes approved before visual design begins — no wasted design effort',
      'Full Figma component library included in every developer handoff',
      'Desktop and mobile designs for every key screen as standard',
      'Interactive prototype for stakeholder and user testing before development starts',
      'Dev annotations: specs, states, and responsive behaviour fully documented',
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
      { q: 'How much does motion graphics design cost in India?', a: 'Animated logo intros (10–15 seconds) start from ₹8,000–₹15,000. Social motion content packages start from ₹18,000/month. Explainer videos (60–90 seconds) are quoted from ₹40,000–₹80,000 depending on complexity.' },
      { q: 'Do you create motion graphics for YouTube ads?', a: 'Yes — we produce video ad creatives optimised for YouTube\'s 6-second bumper ads, 15-second non-skippable ads, and longer TrueView formats, with specs and creative best practices built in.' },
      { q: 'How long does an animated explainer video take to produce?', a: 'A 60-second explainer video typically takes 3–4 weeks: one week for script and storyboard, one week for style frame design, and two weeks for animation, sound design, and final exports.' },
      { q: 'Can you animate our existing brand assets and illustrations?', a: 'Yes — working with existing brand assets is often faster and more cost-effective. We animate your existing logos, icons, and illustrations to create motion-branded content without starting from scratch.' },
    ],
    whyUsDesc: 'AddMads produces motion graphics that feel purposeful and premium — not template-generated. Every project starts with a script and storyboard agreed before any animation begins. We work in After Effects and Cinema 4D, exporting in all required formats and aspect ratios for social, web, and broadcast. Our motion work has been used in investor pitches, product launches, and national advertising campaigns.',
    whyUsPoints: [
      'Script and storyboard approved before animation begins — no costly late changes',
      'Style frames designed and agreed before full animation production starts',
      'Exports in all required formats: MP4, MOV, GIF, WebM, and all aspect ratios',
      'Sound design included: music, SFX, or voiceover direction as standard',
      'Broadcast-quality output suitable for TV, OOH digital screens, and streaming',
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
      { q: 'How much does print design cost in India?', a: 'Print design starts from ₹3,000–₹6,000 for simple assets (flyers, business cards) to ₹15,000–₹50,000 for complex projects (multi-page catalogues, annual reports). Print management and sourcing are available as add-ons.' },
      { q: 'Do you design for offset printing and digital printing?', a: 'Yes — we deliver files correctly configured for both offset and digital print. Offset projects use CMYK or Pantone with correct ICC profiles; digital print projects are set up for the specific RIP workflow of your printer.' },
      { q: 'Can you design a multi-page product catalogue?', a: 'Yes — multi-page catalogues are a speciality. We design master templates for consistent layouts, then produce all product pages efficiently. Photography direction and copywriting can be added to the scope.' },
      { q: 'Do you help with printer selection and print management in India?', a: 'Yes — we have a trusted network of printers in Delhi NCR and Haryana and can manage the full print production process: getting quotes, approving proofs, and coordinating delivery to your door.' },
    ],
    whyUsDesc: 'AddMads designs print materials that work as hard on paper as your digital assets work online. We design in InDesign and Illustrator with print constraints built in from the start — correct colour modes, bleed, resolution, and font handling — so your files go to press without errors. We also liaise directly with your printer and manage the print vendor relationship on your behalf.',
    whyUsPoints: [
      'Print-ready PDFs with correct bleed, CMYK colour mode, and crop marks guaranteed',
      '300dpi minimum resolution on all print assets — no pixelated output ever',
      'ISO Coated v2 colour profile applied for offset printing colour accuracy',
      'Printer liaison service available — we manage pre-press communication for you',
      'All source files (INDD/AI) delivered so you can reprint without us',
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
      { q: 'How much does social media creative design cost in India?', a: 'Our social creative retainer packages start at ₹12,000–₹18,000/month for 20 posts across 2 platforms. Packages with animated content (Stories, Reels covers) and ad creative variants start from ₹22,000/month.' },
      { q: 'Do you design social creatives for businesses in Sonipat, Haryana, and Delhi NCR?', a: 'Yes — we design for local businesses across Sonipat, Haryana, Delhi NCR, and pan-India. We can localise content for regional audiences, including Hindi captions and culturally relevant seasonal content.' },
      { q: 'Can you design social creatives that also work as paid ad creatives?', a: 'Yes — we design ad-ready variants alongside organic posts when clients run paid social. Ad creatives include stronger hooks and comply with Meta\'s text-to-image ratio guidelines for optimal delivery.' },
      { q: 'How do you ensure creatives don\'t look generic or templated?', a: 'Every client gets a custom template system built from their brand guidelines — colours, typography, photography style, and graphic elements — so the creatives are unmistakably theirs, not off-the-shelf.' },
    ],
    whyUsDesc: 'AddMads produces social creatives as a monthly managed service — not a one-off batch. We design against your content pillars, brand system, and campaign calendar, delivering the full month\'s content by the 5th so you\'re never scrambling for posts. Every creative is sized correctly per platform and reviewed before scheduling. Retainer clients receive locked Canva templates to maintain brand consistency independently.',
    whyUsPoints: [
      'Full month\'s content delivered by the 5th — never a last-minute scramble',
      'Platform-native sizing: Instagram square, Story 9:16, LinkedIn 1.91:1, and more',
      'Locked Canva templates delivered so your team stays on-brand independently',
      'Single review round per monthly batch — structured feedback, fast turnaround',
      'Monthly performance review: top-performing styles inform the next month\'s batch',
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
      { q: 'How much does presentation design cost in India?', a: 'Presentation design starts at ₹8,000–₹15,000 for standard decks (10–20 slides). Investor pitch decks and board presentations with narrative consulting start from ₹20,000–₹40,000 depending on slide count and complexity.' },
      { q: 'Do you design investor pitch decks for Indian startups?', a: 'Yes — investor pitch deck design is one of our most requested services. We help founders structure the narrative (problem, solution, market, traction, team, ask) and produce a deck that communicates the opportunity clearly and confidently.' },
      { q: 'How quickly can you design a presentation?', a: 'Standard delivery is 5–7 business days. For urgent investor meetings or conference presentations, 48-hour turnaround is available at an expedite fee.' },
      { q: 'Can you redesign an existing presentation without rebuilding the content?', a: 'Yes — deck redesign is faster than a new build. We apply a fresh visual system to your existing content, restructure slides where needed, and replace any generic charts with designed data visualisations.' },
    ],
    whyUsDesc: 'AddMads designs presentations that do the selling — not just display information. We restructure your narrative before touching design: problem, solution, proof, ask. Slides are built in a master template system that ensures visual coherence across the full deck, with custom data visualisation and graphics replacing raw charts and text dumps. We deliver investor-ready, board-ready, and sales-ready decks that get responses.',
    whyUsPoints: [
      'Narrative restructuring included — not just visual polish on your existing slides',
      'Master slide template system: every slide visually cohesive with the brand',
      'Custom data visualisation: charts and graphs designed, not default Excel exports',
      'Delivered in PowerPoint, Keynote, or Google Slides — your preferred tool',
      'Editable master files included so your team can add future slides on-brand',
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
      { q: 'How much does technical SEO cost in India?', a: 'Our technical SEO audit starts at ₹15,000–₹25,000 as a one-time project. Ongoing monthly technical SEO monitoring and fix implementation starts from ₹12,000/month. Audit fees are credited if you proceed with a monthly retainer.' },
      { q: 'Do you provide technical SEO for WordPress and Shopify sites?', a: 'Yes — WordPress and Shopify are our most common platforms. We implement fixes directly in the CMS or via plugin configuration for most technical issues, without requiring developer involvement for standard fixes.' },
      { q: 'How do I know if my site has technical SEO issues?', a: 'Common signs include pages not appearing in Google, slow page load times, Google Search Console coverage errors, duplicate content warnings, or a sudden drop in organic traffic. A technical audit is the definitive diagnostic.' },
      { q: 'Will fixing technical SEO immediately improve my Google rankings?', a: 'Resolving indexation blockers can produce ranking gains within days to weeks. Core Web Vitals improvements show ranking benefit within 4–8 weeks. Technical fixes amplify content and links — all three are required for sustained rankings.' },
    ],
    whyUsDesc: 'AddMads\' technical SEO work starts with a 200+ point audit using Screaming Frog and Google Search Console data, then prioritises fixes by ranking impact — indexation blockers first, speed improvements second. We implement structured data, fix Core Web Vitals issues, and verify all fixes with a re-crawl post-deployment. Clients on our retainer receive monthly crawl health monitoring so no issue goes uncaught.',
    whyUsPoints: [
      '200+ point technical audit delivered within 7 business days',
      'Fixes prioritised by ranking impact — highest value issues resolved first',
      'Schema markup implemented: FAQ, Article, LocalBusiness, Product, BreadcrumbList',
      'Post-fix re-crawl to verify every resolved issue — no assumptions made',
      'Monthly crawl health report with trend tracking across index coverage and CWV',
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
      { q: 'How much does on-page SEO cost in India?', a: 'Our on-page SEO retainers start at ₹15,000–₹20,000/month covering 10–20 page optimisations per month including keyword mapping, title/meta rewrites, heading structure, and internal linking. Larger sites requiring more pages/month are priced accordingly.' },
      { q: 'How quickly will on-page SEO changes improve my rankings?', a: 'Google typically recrawls optimised pages within 2–4 weeks. For pages already indexed and close to ranking on competitive terms, meaningful improvement often appears within 4–8 weeks post-optimisation.' },
      { q: 'Do you optimise on-page SEO for local businesses in Haryana and Delhi NCR?', a: 'Yes — we optimise pages for local businesses targeting Sonipat, Haryana, Delhi, Gurgaon, Noida, and other NCR cities. This includes location-specific keywords, local business schema, and embedded map optimisation.' },
      { q: 'Can you optimise my meta descriptions to improve click-through rates?', a: 'Yes — meta description optimisation is included in every on-page engagement. We write descriptions that match search intent, include the target keyword naturally, and use a clear CTA to improve CTR from the SERP.' },
    ],
    whyUsDesc: 'AddMads conducts on-page SEO at scale — not just fixing title tags but mapping keywords to pages, analysing SERP intent, and optimising every element from heading structure to internal link architecture. We handle 10–20 pages per month on standard retainers, prioritising pages with the highest traffic and conversion potential. Every optimisation is tracked in Search Console so you see ranking movement in real time.',
    whyUsPoints: [
      'SERP intent analysis before optimising every page — content matched to what actually ranks',
      'Keyword-to-page mapping to eliminate cannibalisation and targeting conflicts',
      'Internal link architecture built to pass authority to priority pages',
      'Image alt-text and file naming corrected across every asset on optimised pages',
      'Monthly Search Console tracking: rankings, impressions, and CTR per page',
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
      { q: 'How much does link building cost in India?', a: 'Our off-page SEO and link building retainers start at ₹18,000–₹30,000/month targeting 5–15 quality links/month. Premium digital PR campaigns with media placements are priced higher based on target publications and research required.' },
      { q: 'Do you build links for businesses in Sonipat, Haryana, and Delhi NCR?', a: 'Yes — we build local authority links from India-based publications, business directories, and regional media for local businesses, alongside national and international link opportunities for broader ranking goals.' },
      { q: 'How long before link building improves rankings?', a: 'Link building is cumulative. Individual high-quality links can produce visible ranking movement within 4–8 weeks. Sustained link acquisition over 6–12 months builds the domain authority required to rank for competitive terms.' },
      { q: 'What metrics do you look at when selecting sites for link placement?', a: 'We evaluate Domain Rating (DR), Domain Authority (DA), the site\'s own organic traffic, topical relevance to your niche, editorial standards (no pay-to-post directories), and geographic relevance for local campaigns.' },
    ],
    whyUsDesc: 'AddMads builds backlinks through legitimate, editorial methods only — guest posts on relevant sites, digital PR campaigns, and resource page outreach. We audit existing backlink profiles, disavow toxic links, and build only links that will still be standing five years from now. Quality over quantity is our only standard: 5 high-authority, relevant links beat 100 low-quality directory submissions every time.',
    whyUsPoints: [
      'No paid links, no PBNs, no spam — only editorially earned, sustainable links',
      'Competitor backlink gap analysis to target the exact sources they are getting links from',
      'Toxic link audit and disavow filing included in onboarding for every new client',
      'Monthly link report with referring domain DR/DA metrics for every link acquired',
      'Digital PR capability: data-led content pitched to media outlets and industry bloggers',
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
      { q: 'How much does local SEO cost in India?', a: 'Our local SEO retainers start at ₹12,000–₹18,000/month for single-location businesses including GBP optimisation, citation building, and monthly reporting. Multi-location packages are priced per location with a volume discount.' },
      { q: 'How do you help businesses in Sonipat rank on Google Maps?', a: 'We fully optimise your Google Business Profile with the right categories, services, photos, posts, and Q&A content. We build local citations in Sonipat and Haryana-specific directories and implement LocalBusiness schema on your website.' },
      { q: 'Do you manage local SEO for multi-location businesses?', a: 'Yes — multi-location local SEO is a speciality. We create and optimise individual Google Business Profiles and location landing pages for each branch, ensuring each location ranks independently in its local area.' },
      { q: 'How do online reviews affect my Google Maps ranking?', a: 'Review quantity, recency, rating, and owner response rate are confirmed Google local ranking factors. We implement a systematic review generation process — prompting satisfied customers at the right moment — to build your review profile consistently.' },
    ],
    whyUsDesc: 'AddMads specialises in local SEO for businesses that need to dominate their city or region — Google Business Profile optimisation, citation cleanup, review management, and location-specific landing pages that rank in Local Pack results. We have driven first-page Local Pack rankings for businesses in Sonipat, Delhi NCR, Haryana, and across India within 60–90 days of starting work.',
    whyUsPoints: [
      'Full Google Business Profile audit and optimisation from day one',
      'NAP consistency audit across 50+ local directories — no conflicting information',
      'Review generation strategy: systematic prompting process and response templates included',
      'LocalBusiness, Service, and FAQ schema implemented on your website',
      'Monthly Local Pack ranking report by keyword and location',
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
      { q: 'How much does e-commerce SEO cost in India?', a: 'E-commerce SEO retainers start at ₹20,000–₹35,000/month for Shopify and WooCommerce stores, covering technical audit, category page optimisation, product schema, and monthly reporting. Larger catalogues (5,000+ products) are priced on scope.' },
      { q: 'Do you do e-commerce SEO for Shopify stores in India?', a: 'Yes — Shopify SEO is one of our most common e-commerce engagements. We address Shopify-specific challenges: canonical tag issues, collection page pagination, and duplicate product URLs from variants.' },
      { q: 'Should I focus on SEO or paid ads for my e-commerce store?', a: 'Both work best together — paid ads deliver immediate traffic while SEO builds sustainable organic revenue that reduces acquisition costs over time. Most mature e-commerce businesses run both, with SEO delivering the higher long-term ROI.' },
      { q: 'How do you handle out-of-stock seasonal products for SEO?', a: 'We advise keeping pages live with clear availability signals and related product recommendations rather than deleting them, so any ranking authority built is not lost when the product returns or a variant is restocked.' },
    ],
    whyUsDesc: 'AddMads\' e-commerce SEO team specialises in the unique challenges of large product catalogues: faceted navigation URL proliferation, thin product descriptions, duplicate content, and crawl budget waste. We prioritise category page authority building and product schema implementation to drive qualified organic shoppers directly to your highest-margin products. Clients have seen 150–300% organic revenue growth within 12 months.',
    whyUsPoints: [
      'Faceted navigation and crawl budget analysis as the very first priority',
      'Category page authority building with keyword-rich unique content',
      'Product schema (price, availability, ratings) for rich search result features',
      'Bulk product page optimisation processes — scalable to 10,000+ products',
      'Organic revenue attribution tracking in GA4 — not just traffic metrics',
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
      { q: 'How much does YouTube SEO cost in India?', a: 'Our YouTube SEO services start at ₹10,000–₹15,000/month for channel optimisation and ongoing video metadata management. One-time channel audits and back-catalogue optimisation of existing videos start from ₹15,000.' },
      { q: 'How many videos do you optimise per month?', a: 'Standard plans cover 8–12 videos/month for ongoing optimisation, plus the full existing back-catalogue in the first month. We prioritise videos with the highest existing traffic potential first.' },
      { q: 'What is the single most impactful YouTube SEO change?', a: 'Thumbnails. A thumbnail improvement that lifts CTR from 4% to 7% can effectively double your views without any other change. We treat thumbnail design as a strategic asset, not an afterthought.' },
      { q: 'Does YouTube SEO also help videos rank on Google Search?', a: 'Yes — Google surfaces YouTube videos in regular search results, especially for tutorial, review, and how-to queries. Proper title and description optimisation helps your videos appear in both YouTube search and Google Search.' },
    ],
    whyUsDesc: 'AddMads treats YouTube SEO as a search discipline, not an afterthought. We research YouTube-specific keywords using TubeBuddy and VidIQ, optimise every video\'s metadata end-to-end, and design thumbnail systems that improve impression CTR. Our optimisations have lifted views on existing videos by 50–200% within 60 days simply by improving searchability without changing the content itself.',
    whyUsPoints: [
      'YouTube-specific keyword research with TubeBuddy and VidIQ data — not Google keyword tools',
      'Title, description, and tag optimisation for every existing video in your back-catalogue',
      'Thumbnail template system designed for consistent, high-CTR visual identity',
      'Chapter marker and transcript optimisation for full indexability by YouTube and Google',
      'Monthly analytics review: impressions, CTR, watch time, and subscriber growth tracked',
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
      { q: 'How much does WordPress website development cost in India?', a: 'WordPress websites start at ₹25,000–₹40,000 for standard business sites. WooCommerce stores with custom themes and payment gateway integration start from ₹60,000–₹1,00,000. Complex custom plugin development is priced on scope.' },
      { q: 'Do you build WordPress websites for businesses in Sonipat and Haryana?', a: 'Yes — we build WordPress sites for businesses across Sonipat, Haryana, Delhi NCR, and pan-India. We also serve UK, US, and UAE clients remotely. All projects are managed with video calls and shared project trackers.' },
      { q: 'Can you fix or redesign a slow or broken WordPress site?', a: 'Yes — WordPress performance fixes and redesigns are common projects. We audit the existing site, fix security issues, migrate to a clean custom theme, and optimise for Core Web Vitals while preserving all content and SEO metadata.' },
      { q: 'How do you handle WordPress hosting recommendations?', a: 'We recommend managed WordPress hosting (Kinsta, WP Engine, or Cloudways) for performance and security. We can configure your hosting account and CDN as part of the project, or advise on the right plan for your traffic level.' },
    ],
    whyUsDesc: 'AddMads builds WordPress websites without page builders — clean custom themes, properly configured security, and Core Web Vitals-optimised performance from day one. Every site is delivered with CMS training so your team can manage content without a developer. We serve clients in Sonipat, Delhi NCR, and internationally with WordPress builds ranging from business sites to complex WooCommerce stores.',
    whyUsPoints: [
      'Custom themes only — no Elementor bloat, no page builder performance penalties',
      'Security hardening included: login protection, hidden admin URL, SSL, and WAF',
      'Core Web Vitals optimised from launch: LCP, CLS, and INP all within passing range',
      'CMS training session included — your team manages content from day one',
      'Maintenance retainer available: updates, backups, and security monitoring',
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
      { q: 'How much does Shopify development cost in India?', a: 'Premium theme customisation starts at ₹25,000–₹40,000. Custom Shopify theme development starts from ₹60,000–₹1,20,000. Shopify Plus builds with advanced checkout customisation and multi-store setups are priced on scope.' },
      { q: 'Do you build Shopify stores for businesses in Delhi NCR and India?', a: 'Yes — we build Shopify stores for D2C brands, retailers, and e-commerce businesses across Delhi NCR, Haryana, and pan-India, as well as UK and UAE clients selling internationally.' },
      { q: 'Can you migrate our store from WooCommerce to Shopify?', a: 'Yes — we handle complete WooCommerce-to-Shopify migrations: products, customers, orders, blog posts, and SEO (301 redirects for all old URLs to preserve your Google rankings).' },
      { q: 'What Shopify apps do you recommend for Indian e-commerce stores?', a: 'For Indian stores: Razorpay or PayU for payments, Shiprocket or Delhivery for shipping integration, Klaviyo for email, Judge.me for reviews, and AfterShip for order tracking. We configure all integrations as part of the build.' },
    ],
    whyUsDesc: 'AddMads builds Shopify stores optimised for conversion from the first page load. We design and develop in Liquid with conversion psychology at the centre — clear hierarchy, trust signals, and a seamless checkout flow. Every store includes GA4 and Meta Pixel tracking correctly configured so every sale is attributed accurately. We serve D2C brands across India, UK, and internationally with Shopify and Shopify Plus.',
    whyUsPoints: [
      'Custom Liquid theme development — no reliance on third-party app bloat',
      'Conversion-optimised UX: product page, collection, and checkout flow designed together',
      'GA4 + Meta Pixel + Conversions API fully configured on every store from launch',
      'App selection guidance: only the apps you need, evaluated for performance impact',
      'Post-launch monitoring for 2 weeks — launch-day issues caught and resolved immediately',
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
      { q: 'How much does Next.js development cost in India?', a: 'Next.js projects start at ₹40,000–₹80,000 for marketing sites and simpler applications. Full-stack SaaS platforms with authentication, database, and API layers start from ₹1,50,000–₹5,00,000 depending on complexity and feature scope.' },
      { q: 'Do you build Next.js applications for startups in India?', a: 'Yes — Next.js is our recommended stack for Indian startups building SaaS products, marketplaces, or data-driven web applications. We have delivered for clients in Delhi NCR, Bangalore, Mumbai, and remotely for UK and US startups.' },
      { q: 'Do you use Supabase, Neon, or PlanetScale with Next.js?', a: 'We use Supabase (PostgreSQL + auth + storage), Neon (serverless Postgres), and PlanetScale (MySQL) depending on your requirements. We advise the right database based on scale, query patterns, and budget.' },
      { q: 'Can you improve an existing Next.js codebase while continuing feature development?', a: 'Yes — codebase audits and phased takeovers are common. We assess TypeScript coverage, dependency health, and architecture, then present a phased improvement plan that runs alongside ongoing feature development.' },
    ],
    whyUsDesc: 'AddMads builds production-grade Next.js applications with TypeScript, proper architecture, and CI/CD pipelines configured from day one. We do not ship fast-and-fix-later — architecture is designed upfront, component libraries are built for reuse, and code is reviewed before it reaches main. Our Next.js projects have powered SaaS platforms, marketing sites, and data-driven dashboards for clients across India and internationally.',
    whyUsPoints: [
      'TypeScript by default — type errors caught at build time, not runtime',
      'App Router or Pages Router with proper SSR/SSG/ISR data fetching strategy',
      'GitHub Actions CI/CD with lint, type-check, and test gates before every merge',
      'Vercel or AWS deployment configured and monitored from the day of launch',
      'Full source code ownership — no vendor lock-in, ever, on any project',
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
      { q: 'How much does Laravel development cost in India?', a: 'Laravel API projects start at ₹40,000–₹80,000 for standard REST APIs with authentication and admin panels. Complex multi-module platforms with third-party integrations and payment gateways start from ₹1,50,000–₹4,00,000 depending on scope.' },
      { q: 'Do you build Laravel applications for businesses in India?', a: 'Yes — we build Laravel backends for businesses across India, including Delhi NCR, Haryana, Bangalore, and Mumbai, as well as remote clients in the UK, US, and UAE requiring PHP-based backend solutions.' },
      { q: 'Do you work with existing Laravel codebases or only new projects?', a: 'Both. We audit and refactor existing Laravel codebases — improving architecture, adding test coverage, and fixing security issues — as well as building new Laravel applications from scratch.' },
      { q: 'What payment gateways can you integrate with Laravel?', a: 'We integrate Razorpay, Stripe, PayU, Cashfree, and Paytm for Indian businesses, and Stripe or Braintree for international payment processing. All integrations include idempotent payment handling and webhook verification.' },
    ],
    whyUsDesc: 'AddMads delivers Laravel backends built to enterprise standards — service classes, form requests, policies, and jobs used correctly, with feature test coverage targeting 80%+. We document APIs in OpenAPI spec before writing code so frontend and mobile teams have a reliable contract. Our Laravel projects have handled payment gateways, ERP integrations, and high-traffic API backends for clients across India and internationally.',
    whyUsPoints: [
      'OpenAPI spec documentation before any code is written — your frontend team won\'t be guessing',
      'Laravel best practices: services, requests, policies, events — no business logic in controllers',
      'Feature tests targeting 80%+ coverage — meaningful tests, not just line coverage metrics',
      'Razorpay, Stripe, and PayU payment gateway integration with proper webhook handling',
      'Docker-based local environment for consistent development across your team',
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
      { q: 'How much does Webflow development cost in India?', a: 'Webflow sites start at ₹30,000–₹50,000 for standard marketing sites. Complex sites with advanced animations, CMS, and custom code start from ₹60,000–₹1,00,000. Ongoing Webflow support retainers are available post-launch.' },
      { q: 'Should I choose Webflow or Wix for my business website?', a: 'Webflow offers more design precision, animation control, and developer-level custom code — better for brands needing a bespoke result. Wix is easier for teams wanting maximum self-service editing. We advise after understanding your design requirements and team\'s comfort level.' },
      { q: 'Is Webflow good for SEO compared to WordPress?', a: 'Webflow generates clean semantic HTML, supports custom metadata, and is hosted on a fast global CDN — making it genuinely competitive with WordPress for SEO. For most marketing sites, it performs extremely well.' },
      { q: 'Do you migrate existing WordPress sites to Webflow?', a: 'Yes — WordPress-to-Webflow migrations are a common project. We rebuild the design in Webflow, migrate blog content via CSV, and set up 301 redirects for all old URLs to preserve your Google rankings.' },
    ],
    whyUsDesc: 'AddMads builds Webflow and Wix sites that look custom-coded because we design in Figma before building — not from a template. We use custom code where the builder falls short to deliver the design vision precisely. Every site includes CMS configuration for easy content updates, form integration with your CRM, and a training session so your team is fully self-sufficient at launch.',
    whyUsPoints: [
      'Figma design first — build second, so the result exactly matches the approved vision',
      'Custom code added where the builder cannot achieve the required design precision',
      'CMS collections configured for blog, team, portfolio, or case studies',
      'Form integration: HubSpot, Mailchimp, or Zapier connected on delivery',
      '60-minute training session included — your team is independent from day one',
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
      { q: 'How much does custom web application development cost in India?', a: 'Internal tools and simple custom applications start at ₹60,000–₹1,50,000. Multi-role SaaS platforms and complex workflow systems start from ₹2,00,000–₹8,00,000 depending on features, integrations, and scale requirements.' },
      { q: 'How do you manage scope and prevent budget overruns?', a: 'We use a change request process — any feature addition outside agreed scope is estimated, priced, and approved before work begins. Fixed-price engagements work for well-defined projects; T&M retainers suit evolving products.' },
      { q: 'Do you build multi-tenant SaaS platforms?', a: 'Yes — multi-tenant architecture with proper data isolation is a speciality. We design the database schema and access control layer for correct multi-tenancy from day one of the project.' },
      { q: 'What happens after the web app is launched?', a: 'Every project includes a 30-day post-launch support window. After that, clients move to a monthly maintenance retainer covering bug fixes, security updates, hosting management, and ongoing feature development.' },
    ],
    whyUsDesc: 'AddMads builds custom web applications with a software engineering mindset — requirements are documented, architecture is designed before coding begins, and development happens in sprint cycles with regular demos. We have delivered internal tools, client portals, SaaS platforms, and multi-role workflow systems for businesses across India and internationally. You own all source code and documentation at project completion.',
    whyUsPoints: [
      'Requirements specification and system design documented before any code is written',
      '2-week sprint cycles with working software demos throughout development',
      'Role-based authentication and access control built into every project from the start',
      'Full source code ownership on completion — no vendor lock-in, no ongoing licensing',
      '30-day post-launch support window included in every project as standard',
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
      { q: 'How much does landing page design and development cost in India?', a: 'A single conversion-optimised landing page with design, development, copywriting, and tracking setup starts at ₹15,000–₹25,000. A/B test variants are available from ₹8,000–₹12,000 additional. Rush 48-hour builds carry an expedite fee.' },
      { q: 'Do you build landing pages specifically for Google Ads and Meta Ads campaigns?', a: 'Yes — landing pages built for paid campaigns are our most common request. We align the page message to your ad creative, use the same keywords in headlines, and build trust elements that reduce bounce and improve Quality Score.' },
      { q: 'What platform do you build landing pages on?', a: 'We build in Next.js (fastest, most flexible), Webflow (easy client editing), or Unbounce (best for rapid A/B testing). Platform choice depends on your tech stack, team\'s editing needs, and campaign volume.' },
      { q: 'How do you measure landing page conversion rate?', a: 'We set up GA4 conversion events for form submissions, button clicks, and calls. Conversion rate (form fills divided by sessions) is tracked daily in a Looker Studio dashboard. We establish a baseline in the first 2 weeks, then test variations to improve it.' },
    ],
    whyUsDesc: 'AddMads builds landing pages with conversion as the only metric that matters. Messaging is aligned to the ad that drove the click, hierarchy is designed with conversion psychology, and load speed is treated as both a ranking and conversion factor. Every landing page includes full tracking setup — GA4, Google Ads, and Meta Pixel — so every lead is attributed accurately back to its source.',
    whyUsPoints: [
      'Message match verified: landing page copy aligned precisely to the ad that drove the click',
      'Conversion psychology hierarchy: hero, social proof, benefits, objections, CTA in sequence',
      'Page speed prioritised: optimised images, minimal JS, and fast hosting from launch day',
      'Full tracking configured: GA4 events, Google Ads conversion, and Meta Pixel',
      'A/B test variant available as a standard add-on to every landing page project',
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
      { q: 'How much does AI automation cost in India?', a: 'Simple no-code automations (lead routing, data syncing, notification workflows) start at ₹8,000–₹20,000 per automation. Complex LLM-powered pipelines (document processing, AI agents, custom chatbots) start from ₹50,000–₹2,00,000 depending on scope.' },
      { q: 'What is the best first AI automation for a small business?', a: 'Lead routing — automatically receiving a new form submission, enriching the lead data, notifying the right salesperson in Slack or WhatsApp, and logging it to a CRM — is the highest-ROI first automation for most small businesses. It typically saves 2–5 hours per week and reduces lead response time from hours to minutes.' },
      { q: 'Can you integrate AI automation with Indian business tools like Razorpay, Zoho, and Tally?', a: 'Yes — we integrate with Razorpay, Zoho CRM, Zoho Books, and Tally via API or Make/Zapier connectors. Tally integration typically requires a custom API or file-based sync depending on your Tally version.' },
      { q: 'Is our business data safe when using OpenAI or Claude APIs?', a: 'API calls to OpenAI and Anthropic are not used to train their models by default under enterprise API agreements. We configure data handling to minimise exposure and can deploy local models (via Ollama or self-hosted Llama) for sensitive data that cannot leave your infrastructure.' },
    ],
    whyUsDesc: 'AddMads builds AI automation systems that eliminate repetitive tasks and accelerate workflows using LLMs, no-code platforms, and custom integrations. We audit your workflows first — scoring each by time cost, error rate, and automation feasibility — so you invest in automations that deliver real ROI, not technology for its own sake. Simple no-code automations can be live in 1–3 days; complex LLM pipelines are delivered in phased sprints.',
    whyUsPoints: [
      'Workflow audit first — we identify ROI-positive automations before any build starts',
      'Human-in-the-loop review built into high-stakes AI outputs as a standard safeguard',
      'No-code options: Make, Zapier, and n8n for automations your team can manage independently',
      'LLM-powered pipelines: OpenAI, Claude, and Gemini APIs for complex reasoning tasks',
      'Full documentation: every workflow documented so you are never dependent on us to maintain it',
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
                {data?.whyUsDesc ?? 'We don\'t take a cookie-cutter approach. Every ' + title + ' engagement starts with a deep understanding of your business, audience, and competitive landscape — then we build a strategy that delivers real, measurable results.'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {(data?.whyUsPoints ?? ['Performance-first methodology', 'Transparent reporting & full visibility', 'Dedicated account manager', 'Proven track record across 250+ projects']).map((item, i) => (
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
