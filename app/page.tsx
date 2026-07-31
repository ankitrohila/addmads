import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import UnifiedForm from '@/components/UnifiedForm'
import About from '@/components/About'
import FAQs from '@/components/FAQs'
import Footer from '@/components/Footer'

const ServiceShowcase = dynamic(() => import('@/components/ServiceShowcase'))
const Services        = dynamic(() => import('@/components/Services'))
const FeaturedWork    = dynamic(() => import('@/components/FeaturedWork'))
const Metrics         = dynamic(() => import('@/components/Metrics'))
const Testimonials    = dynamic(() => import('@/components/Testimonials'))

export const metadata: Metadata = {
  title: 'AddMads — Best Performance Marketing Agency in Sonipat, Delhi, Haryana | India',
  description: 'AddMads is a top-rated performance marketing and digital growth agency based in Sonipat, Haryana. Serving clients in Sonipat, Ganaur, Delhi, Panipat, UK, US, UAE. Google Ads, Meta Ads, SEO, AEO, GEO, Branding, Web Development. Call +91-9220872212.',
  alternates: { canonical: 'https://addmads.com' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AddMads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AddMads is a performance marketing and digital growth agency based in Sonipat, Haryana, India. We provide Google Ads management, Meta Ads, SEO, AEO, GEO, branding, web development, and social media management to businesses across India (Sonipat, Ganaur, Delhi, Panipat, Haryana) and internationally in the UK, USA, and UAE.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does AddMads provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AddMads provides: (1) Performance Marketing — Google Ads, Meta Ads, email marketing, content marketing; (2) SEO — technical SEO, on-page SEO, local SEO, AEO, GEO; (3) Branding — brand strategy, logo design, visual identity; (4) Graphics & Design — UI/UX, motion graphics, social creatives; (5) IT Services — WordPress, Shopify, React/Next.js, web apps, AI automation; (6) Social Media Management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is AddMads located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AddMads is headquartered in Sonipat, Haryana, India. We serve clients across India including Sonipat, Ganaur, Delhi, Panipat, Gurugram, Noida, and all of Haryana, as well as international clients in the United Kingdom, United States, and United Arab Emirates.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does AddMads charge for digital marketing services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AddMads pricing: Performance marketing management from ₹25,000/month (+ ad spend); SEO retainers from ₹15,000/month; branding projects from ₹30,000; website development from ₹15,000 (landing page) to ₹3,00,000+ (custom web app); social media management from ₹12,000/month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does AddMads appear in ChatGPT or Google AI Overviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AddMads is building its presence across AI search platforms. We are indexed by GPTBot, ClaudeBot, PerplexityBot, and Google. Our llms.txt file provides structured information for AI models. We specialise in AEO (Answer Engine Optimisation) and GEO (Generative Engine Optimisation) — both for our own brand and for our clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'What ROAS can I expect from AddMads Google Ads management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AddMads clients typically achieve 3×–6× ROAS within 60–90 days of managed Google Ads optimisation. Results vary by industry, product margins, and landing page quality. We set transparent ROAS targets during onboarding based on your specific business and budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AddMads the best digital marketing agency in Sonipat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AddMads is Sonipat\'s leading digital marketing agency with 7+ years of experience, 60+ clients served, 250+ projects delivered, and a 4.9-star client satisfaction rating. We are the only full-service agency in Sonipat offering performance marketing, SEO, AEO, GEO, branding, and web development under one roof.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does SEO take to show results in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO results in India typically take 4–6 months for top-10 Google rankings and 8–12 months for top-3 positions for competitive keywords. Local SEO (Google Maps rankings) can show results faster — often within 60–90 days. AddMads uses a data-driven approach that delivers top-10 rankings in 4–6 months for most target keywords.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Navbar />
      <main>
        <Hero />

        {/* Lead form — second section, right after the hero */}
        <UnifiedForm
          heading="Let's Build Your Digital Success"
          subheading="Share your vision and we'll create something extraordinary. Fill in the details and we'll get back to you within 24 hours."
        />

        <About />
        <ServiceShowcase />
        <Services />
        <FeaturedWork />
        <Metrics />
        <Testimonials />

        {/* Second form placement — around testimonials */}
        <UnifiedForm
          heading="Ready to grow like they did?"
          subheading="Join 60+ brands scaling with AddMads. Tell us your goal — we'll map the plan."
          bgColor="#FFFFFF"
          showLeftInfo={false}
        />

        <FAQs />
      </main>
      <Footer />
    </>
  )
}
