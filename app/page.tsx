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

export default function Home() {
  return (
    <>
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
