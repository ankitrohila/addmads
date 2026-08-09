import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/*?q=',
          '/*?category=',
          '/*?search=',
          '/*?page=',
          '/*?filter=',
          '/*?sort=',
          '/*?ref=',
          '/*?utm_',
        ],
      },
      // AI / LLM crawlers — explicit allow so they index the full site
      { userAgent: 'GPTBot',           allow: '/' },
      { userAgent: 'ChatGPT-User',     allow: '/' },
      { userAgent: 'OAI-SearchBot',    allow: '/' },
      { userAgent: 'Claude-Web',       allow: '/' },
      { userAgent: 'ClaudeBot',        allow: '/' },
      { userAgent: 'anthropic-ai',     allow: '/' },
      { userAgent: 'PerplexityBot',    allow: '/' },
      { userAgent: 'Perplexity-User',  allow: '/' },
      { userAgent: 'cohere-ai',        allow: '/' },
      { userAgent: 'Gemini-User',      allow: '/' },
      { userAgent: 'Google-Extended',  allow: '/' },
      { userAgent: 'GoogleOther',      allow: '/' },
      { userAgent: 'Bingbot',          allow: '/' },
    ],
    sitemap: 'https://www.addmads.com/sitemap.xml',
    host: 'https://www.addmads.com',
  }
}
