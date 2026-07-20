/**
 * Chatbot knowledge base — the single "training file" for the AddMads assistant.
 *
 * Every user query is matched against these intents. Each intent carries:
 *  - keywords: words/phrases that trigger it (matched on word boundaries, scored)
 *  - answer:   the human-toned reply
 *  - link:     the page the assistant lands the user on for that query
 *  - quickReplies: follow-up chips
 *
 * To teach the bot something new, add an intent here — no code changes needed.
 */

export interface KBLink {
  href: string
  label: string
}

export interface KBIntent {
  id: string
  keywords: string[]
  answer: string
  link?: KBLink
  quickReplies?: string[]
  /** Higher wins on ties (greetings/small talk beat topic intents for tiny inputs). */
  priority?: number
}

export const CONTACT = { phone: '+91-9220872212', email: 'info@addmads.com' }

export const KB: KBIntent[] = [
  // ── Small talk ────────────────────────────────────────────────────────────
  {
    id: 'greeting',
    priority: 10,
    keywords: ['hi', 'hii', 'hiii', 'hello', 'helo', 'hey', 'heya', 'yo', 'namaste', 'good morning', 'good afternoon', 'good evening', 'greetings', 'hola', 'sup'],
    answer: "Hey there! 😊 Great to see you. I'm the AddMads assistant — I can tell you about our services, pricing, timelines, past work, or how we get brands into Google and AI search. What's on your mind?",
    quickReplies: ['Our services', 'Pricing', 'See your work', 'Talk to a human'],
  },
  {
    id: 'how-are-you',
    priority: 10,
    keywords: ['how are you', 'how r u', 'hows it going', "how's it going", 'whats up', "what's up", 'how do you do'],
    answer: "Doing great, thanks for asking! 😄 More importantly — how can I help you grow your business today?",
    quickReplies: ['Our services', 'Pricing', 'Contact us'],
  },
  {
    id: 'who-are-you',
    priority: 9,
    keywords: ['who are you', 'what are you', 'your name', 'are you a bot', 'are you human', 'are you real', 'robot'],
    answer: "I'm the AddMads assistant — think of me as the front desk of the agency. I know everything about our services, pricing, process, and portfolio. And whenever you'd rather talk to a real person, just say so and I'll point you to the team.",
    quickReplies: ['Our services', 'Talk to a human'],
  },
  {
    id: 'thanks',
    priority: 10,
    keywords: ['thank', 'thanks', 'thankyou', 'thx', 'ty', 'appreciate', 'great help', 'awesome', 'perfect', 'nice', 'good job', 'helpful'],
    answer: "You're most welcome! 🙌 Anything else you'd like to know — services, pricing, or a quick word with the team?",
    quickReplies: ['Our services', 'Pricing', 'Contact us'],
  },
  {
    id: 'bye',
    priority: 10,
    keywords: ['bye', 'goodbye', 'see you', 'see ya', 'later', 'talk soon', 'gtg', 'ok bye'],
    answer: "Bye for now! 👋 Whenever you're ready to grow, we're one message away — info@addmads.com or +91-9220872212. Have a great day!",
    quickReplies: ['Contact us'],
  },
  {
    id: 'help',
    priority: 8,
    keywords: ['help', 'confused', 'dont know', "don't know", 'not sure', 'guide me', 'where do i start', 'options'],
    answer: "No problem — let me make it easy. Most people ask me about:\n\n1. What services we offer\n2. What things cost\n3. How fast they'll see results\n4. Our past work\n\nPick one below, or just type your question in your own words — I'll understand.",
    quickReplies: ['Our services', 'Pricing', 'How fast are results?', 'See your work'],
  },

  // ── Services ──────────────────────────────────────────────────────────────
  {
    id: 'services',
    keywords: ['service', 'services', 'offer', 'offerings', 'what do you do', 'what can you do', 'help with', 'solutions', 'everything you do'],
    answer: "Here's the full menu — we handle everything under one roof:\n\n1. Performance Marketing — Google Ads, Meta Ads, PPC, retargeting\n2. SEO — technical, on-page, local, e-commerce, plus AEO & GEO for AI search\n3. Branding — strategy, logo, visual identity, guidelines\n4. Graphics & Design — UI/UX, motion, social creatives, print\n5. IT & Web Development — WordPress, Shopify, React/Next.js, Laravel\n6. Social Media Management — content, community, growth\n\nWant the details on any of these?",
    link: { href: '/services', label: 'Browse all services' },
    quickReplies: ['Google Ads', 'SEO', 'Web development', 'Pricing'],
  },
  {
    id: 'pricing',
    keywords: ['price', 'prices', 'pricing', 'cost', 'costs', 'charge', 'charges', 'fee', 'fees', 'budget', 'how much', 'rates', 'quotation', 'quote', 'package', 'packages', 'plan', 'plans', 'affordable', 'expensive', 'cheap'],
    answer: "Fair question — here's our honest, no-hidden-fees pricing:\n\n• Performance Marketing — from ₹25,000/month management (min. ad spend ₹50,000/month)\n• SEO retainers — from ₹15,000/month\n• Branding projects — from ₹30,000\n• Websites — ₹15,000 for landing pages, up to ₹3,00,000+ for custom web apps\n\nEvery project gets a custom proposal, so the best next step is a quick chat about your goals.",
    link: { href: '/contact', label: 'Get a custom quote' },
    quickReplies: ['What results can I expect?', 'Our services', 'Contact us'],
  },
  {
    id: 'ads',
    keywords: ['google ads', 'googleads', 'ppc', 'meta ads', 'facebook ads', 'fb ads', 'instagram ads', 'insta ads', 'roas', 'ads', 'advertising', 'ad campaign', 'campaigns', 'performance marketing', 'media buying', 'retargeting', 'lead generation', 'leads'],
    answer: "Ads are our home turf. 🎯 We run Google Ads, Meta/Facebook/Instagram Ads, PPC, and retargeting — and our clients typically hit 3×–6× ROAS within 60–90 days.\n\nWhat you get: precise audience targeting, creative A/B testing, bid optimisation, and a live dashboard so you see exactly where every rupee goes. Management starts at ₹25,000/month.",
    link: { href: '/services/performance-marketing', label: 'Performance Marketing details' },
    quickReplies: ['Pricing', 'What results can I expect?', 'Contact us'],
  },
  {
    id: 'seo',
    keywords: ['seo', 'rank', 'ranking', 'rankings', 'google search', 'organic', 'traffic', 'aeo', 'geo', 'chatgpt', 'gemini', 'perplexity', 'ai search', 'answer engine', 'generative engine', 'search engine', 'keywords', 'backlinks', 'link building', 'local seo'],
    answer: "We do search in three layers — and this is honestly where we're ahead of most agencies:\n\n• SEO — technical fixes, on-page, link building, local & e-commerce\n• AEO — winning Google's AI Overviews and featured snippets\n• GEO — getting your brand cited in ChatGPT, Gemini, and Perplexity answers\n\nTimeline-wise: technical gains in 4–6 weeks, solid rankings in 3–5 months. Retainers start at ₹15,000/month with monthly reports.",
    link: { href: '/services/seo', label: 'SEO services in detail' },
    quickReplies: ['How fast are results?', 'Pricing', 'Contact us'],
  },
  {
    id: 'webdev',
    keywords: ['website', 'websites', 'web development', 'webdev', 'web design', 'wordpress', 'shopify', 'woocommerce', 'next', 'nextjs', 'react', 'laravel', 'php', 'webflow', 'wix', 'app', 'web app', 'saas', 'e-commerce', 'ecommerce', 'online store', 'landing page', 'redesign', 'develop'],
    answer: "We build on whatever fits your goal best — WordPress (incl. WooCommerce), Shopify, Webflow, React/Next.js, PHP/Laravel, and Node.js.\n\nEverything ships mobile-first, Core Web Vitals-optimised, and schema-ready for search. Landing pages start at ₹15,000; full custom web apps go up to ₹3,00,000+.\n\nWant something instantly? Try our CUSTOM website generator — it builds a live preview of your site in minutes.",
    link: { href: '/services/it-services', label: 'Web development services' },
    quickReplies: ['Pricing', 'See your work', 'Contact us'],
  },
  {
    id: 'branding',
    keywords: ['brand', 'branding', 'logo', 'identity', 'rebrand', 'packaging', 'brand strategy', 'visual identity', 'guidelines', 'design', 'graphic', 'graphics', 'ui', 'ux', 'creative', 'motion graphics'],
    answer: "Branding is where businesses go from 'just another option' to 'the one people remember'. We cover brand strategy, logo design, visual identity systems, brand guidelines, packaging, UI/UX, motion graphics, and social creatives.\n\nProjects start at ₹30,000, and one of our clients doubled customer recall after their rebrand with us.",
    link: { href: '/services/branding', label: 'Branding services' },
    quickReplies: ['See your work', 'Pricing', 'Contact us'],
  },
  {
    id: 'social',
    keywords: ['social media', 'smm', 'instagram', 'insta', 'linkedin', 'youtube', 'twitter', 'content creation', 'community', 'influencer', 'reels', 'posts', 'engagement', 'followers'],
    answer: "We manage social end-to-end: content creation, posting calendars, community engagement, influencer tie-ups, and analytics — across Instagram, LinkedIn, YouTube, X, and Facebook.\n\nThe focus is real community growth around your brand, not vanity numbers.",
    link: { href: '/services/social-media', label: 'Social Media Management' },
    quickReplies: ['Pricing', 'Contact us'],
  },

  // ── Proof & process ───────────────────────────────────────────────────────
  {
    id: 'results',
    keywords: ['result', 'results', 'how long', 'timeline', 'timelines', 'when will', 'expect', 'guarantee', 'guaranteed', 'proof', 'roi', 'success', 'work for me', 'deliver'],
    answer: "Straight answer — here's what our clients typically see:\n\n• Ads: meaningful ROAS gains in 60–90 days (one client went 1.8× → 4.5×)\n• SEO: technical wins in 4–6 weeks, page-1 rankings in 3–6 months\n• Websites: landing pages in 1–2 weeks, full sites in 4–8 weeks\n• Branding: 2–6 weeks depending on scope\n\nAnd you're never in the dark — every client gets a live dashboard plus monthly reports.",
    link: { href: '/portfolio', label: 'See the proof — our work' },
    quickReplies: ['Pricing', 'See your work', 'Contact us'],
  },
  {
    id: 'portfolio',
    keywords: ['portfolio', 'work', 'projects', 'examples', 'clients', 'case study', 'case studies', 'past work', 'sample', 'samples', 'websites you made', 'built'],
    answer: "We've shipped 250+ projects for 60+ clients — real estate, home services in the USA, corporate institutions like AIMA, travel, manufacturing, education and more. Our portfolio page shows live screenshots of 27 real sites we've built, each linked to the live site.",
    link: { href: '/portfolio', label: 'Open the portfolio' },
    quickReplies: ['Our services', 'Contact us'],
  },
  {
    id: 'about',
    keywords: ['about', 'addmads', 'company', 'agency', 'team', 'where are you', 'located', 'location', 'based', 'experience', 'why you', 'why addmads', 'different'],
    answer: "AddMads is a full-service performance marketing and digital growth agency based in Sonipat, Haryana, India — working with clients worldwide. 250+ projects delivered, 60+ global clients, 98% satisfaction rate.\n\nThree things make us different: full-funnel ownership under one roof, AI-era search readiness (GEO/AEO), and completely transparent reporting — you own all your accounts and data.",
    link: { href: '/about', label: 'More about us' },
    quickReplies: ['Our services', 'See your work', 'Contact us'],
  },

  // ── Contact & policies ────────────────────────────────────────────────────
  {
    id: 'contact',
    keywords: ['contact', 'call', 'phone', 'number', 'email', 'mail', 'reach', 'talk', 'speak', 'meeting', 'consult', 'consultation', 'human', 'person', 'sales', 'whatsapp', 'connect', 'get in touch', 'enquiry', 'inquiry'],
    answer: `Here's how to reach the team directly:\n\n• Phone: ${CONTACT.phone}\n• Email: ${CONTACT.email}\n• Or the contact form — we reply within 24 hours, always.\n\nWe're in Sonipat, Haryana, India, and work with clients across the globe.`,
    link: { href: '/contact', label: 'Open the contact page' },
    quickReplies: ['Our services', 'Pricing'],
  },
  {
    id: 'policies',
    keywords: ['refund', 'refunds', 'cancel', 'cancellation', 'return', 'policy', 'policies', 'terms', 'privacy', 'money back', 'shipping', 'delivery policy', 'legal'],
    answer: "All our policies are public and plain-English:\n\n• Privacy Policy\n• Terms of Service\n• Refund & Return Policy\n• Cancellation Policy\n• Shipping & Delivery Policy\n\nShort version: monthly retainers can be cancelled with notice, refunds follow a clear published schedule, and duplicate payments are refunded in full within 7–10 working days.",
    link: { href: '/refund-policy', label: 'Read the refund policy' },
    quickReplies: ['Contact us'],
  },
  {
    id: 'custom-generator',
    keywords: ['custom website', 'generator', 'generate website', 'instant website', 'website builder', 'build my website', 'ai website', 'preview website', 'custom'],
    answer: "You'll like this — our CUSTOM tool builds you a live, working preview of your website in minutes. You fill a short brief (business name, colors, pages, tech stack), and it generates a real site on its own preview link. From there you can download it or have our team finish it.",
    link: { href: 'https://develop.addmads.com', label: 'Try the CUSTOM generator' },
    quickReplies: ['Pricing', 'Contact us'],
  },
]

export const GREETING_MESSAGE =
  "Hi! 👋 I'm the AddMads assistant. Ask me anything — services, pricing, timelines, our work, or how we get brands into Google and AI search. I'll answer and point you to the right page."

export const GREETING_QUICK_REPLIES = ['Our services', 'Pricing', 'See your work', 'Contact us']

export function buildFallback(query: string): { answer: string; quickReplies: string[] } {
  return {
    answer: `Hmm, I want to make sure I get "${query.slice(0, 60)}" right rather than guess. 🤔 Could you rephrase it, or pick a topic below? And if it's something specific to your business, the team will happily answer directly at ${CONTACT.phone} or ${CONTACT.email}.`,
    quickReplies: ['Our services', 'Pricing', 'How fast are results?', 'Contact us'],
  }
}

/**
 * Word-boundary keyword matcher. Longer/multi-word keyword hits score higher;
 * intent priority breaks ties (so "hi" beats a stray substring match).
 */
export function matchIntent(input: string): KBIntent | null {
  const q = ' ' + input.toLowerCase().replace(/[^\w\s']/g, ' ').replace(/\s+/g, ' ').trim() + ' '
  let best: KBIntent | null = null
  let bestScore = 0
  for (const intent of KB) {
    let score = 0
    for (const kw of intent.keywords) {
      if (q.includes(' ' + kw + ' ') || (kw.includes(' ') && q.includes(kw))) {
        score += kw.length + (kw.includes(' ') ? 6 : 0)
      }
    }
    if (score > 0) score += intent.priority ?? 0
    if (score > bestScore) {
      bestScore = score
      best = intent
    }
  }
  return best
}
