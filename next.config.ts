import type { NextConfig } from 'next'

// All client sites shown as iframes on /portfolio — allow them in frame-src
const PORTFOLIO_FRAME_ORIGINS = [
  'https://bluebellsluxury.com',
  'https://ibfwweddings.com',
  'https://littleriddercup.com',
  'https://flowvillas.in',
  'https://absvacations.com',
  'https://mikediamondservices.com',
  'https://www.allisr.com',
  'https://allisr.com',
  'https://www.hirechillybilly.com',
  'https://hirechillybilly.com',
  'https://www.jamesarmstrongplumbing.com',
  'https://jamesarmstrongplumbing.com',
  'https://www.aima.in',
  'https://aima.in',
  'https://anantacentre.in',
  'https://byst.org.in',
  'https://ems-works.com',
  'https://enseur.in',
  'https://www.brandforce360.com',
  'https://brandforce360.com',
  'https://avglogistics.com',
  'https://www.maxvoltenergy.com',
  'https://maxvoltenergy.com',
  'https://netexpressuae.com',
  'https://superpattern.in',
  'https://boxika.in',
  'https://pdmetalcraft.co.in',
  'https://rssolar.in',
  'https://shambhudayalschool.in',
  'https://gsiledusociety.com',
  'https://vidyarthijuniors.com',
  'https://ohmypetgrooming.in',
  'https://softhics.com',
].join(' ')

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control',    value: 'on' },
  { key: 'X-Frame-Options',           value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options',    value: 'nosniff' },
  { key: 'X-XSS-Protection',          value: '1; mode=block' },
  { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://images.unsplash.com https://cdn.prod.website-files.com",
      "connect-src 'self' https://crm.zoho.in https://crm.zoho.com https://www.google-analytics.com",
      `frame-src https://www.google.com https://recaptcha.google.com ${PORTFOLIO_FRAME_ORIGINS}`,
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://crm.zoho.in https://crm.zoho.com",
      "upgrade-insecure-requests",
    ].join('; '),
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
]

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  eslint: { ignoreDuringBuilds: true },
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
}

export default nextConfig
