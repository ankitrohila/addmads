import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import UnifiedForm from '@/components/UnifiedForm'
import About from '@/components/About'
import ServiceShowcase from '@/components/ServiceShowcase'
import Services from '@/components/Services'
import FeaturedWork from '@/components/FeaturedWork'
import Metrics from '@/components/Metrics'
import Testimonials from '@/components/Testimonials'
import FAQs from '@/components/FAQs'
import Footer from '@/components/Footer'

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
