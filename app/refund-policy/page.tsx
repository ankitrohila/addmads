import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund & Return Policy — AddMads',
  description:
    'Refund and Return Policy for AddMads digital marketing and web development services, compliant with the Consumer Protection Act, 2019.',
}

const SECTIONS = [
  {
    title: '1. Scope',
    body: `This Refund & Return Policy applies to all services purchased from AddMads, including performance marketing, SEO, branding, graphics design, IT and web development, and social media management services. It is framed in compliance with the Consumer Protection Act, 2019 and the Consumer Protection (E-Commerce) Rules, 2020. Because we sell professional services and digital deliverables — not physical goods — "returns" take the form of refunds or re-performance of services as described below.`,
  },
  {
    title: '2. Eligibility for Refunds',
    body: `Refunds are available in the following situations:\n\n• Duplicate payment or billing error: full refund of the excess amount within 7–10 working days\n• Service not commenced: full refund of the advance, less payment gateway charges, if you cancel before project initiation\n• Non-delivery attributable to AddMads: proportional refund for milestones not delivered\n• Material deviation from the agreed written brief that we are unable to remedy within a reasonable revision cycle: proportional refund for the affected deliverable`,
  },
  {
    title: '3. Non-Refundable Items',
    body: `The following are non-refundable:\n\n• Ad spend already remitted to platforms (Google, Meta, etc.)\n• Third-party purchases made on your behalf — domains, hosting, stock assets, plugin/theme licences, software subscriptions\n• Completed and approved milestones or deliverables\n• Monthly retainer fees for months in which services were performed\n• Change-of-mind after work has been delivered as per the agreed brief`,
  },
  {
    title: '4. Partial Refund Schedule',
    body: `For project-based engagements cancelled mid-way, the refund schedule from our Cancellation Policy applies:\n\n• Before project initiation: full refund less gateway charges\n• Within 48 hours of initiation: 75% of advance\n• After discovery/briefing: 50% of advance\n• After first concepts/designs delivered: 25% of advance\n• After revisions or mid-project milestone: no refund`,
  },
  {
    title: '5. How to Request a Refund',
    body: `Email info@addmads.com with your invoice number, the service concerned, and the reason for the request. We will:\n\n• Acknowledge your request within 48 hours\n• Review and respond with a decision within 7 working days\n• Process approved refunds within 7–10 working days to the original payment method (bank account, card, UPI, or wallet used at purchase)`,
  },
  {
    title: '6. Re-performance Option',
    body: `Where a deliverable does not conform to the agreed brief, you may opt for re-performance (a corrective revision cycle) instead of a refund. We will complete corrective work within a mutually agreed timeline at no additional cost.`,
  },
  {
    title: '7. Chargebacks',
    body: `We request that you contact us to resolve any billing concern before initiating a chargeback with your bank or card issuer. Unwarranted chargebacks on services already delivered may result in suspension of ongoing services and recovery of amounts due.`,
  },
  {
    title: '8. Consumer Rights',
    body: `Nothing in this policy limits your rights under the Consumer Protection Act, 2019 or other applicable Indian law. You may contact the National Consumer Helpline at 1800-11-4000 for guidance on your consumer rights.`,
  },
  {
    title: '9. Contact',
    body: `For refund enquiries:\n\nEmail: info@addmads.com\nPhone: +91-9220872212\nResponse time: within 1 working day`,
  },
]

export default function RefundPolicy() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <nav
        style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(17,17,17,0.07)',
          padding: '0 var(--container-px)',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/" style={{ fontFamily: 'var(--font-tight)', fontSize: '1.15rem', fontWeight: 500, color: '#111111' }}>
          AddMads
        </Link>
        <Link href="/" style={{ fontSize: '0.875rem', color: '#777' }}>← Back to home</Link>
      </nav>

      <main className="container-x" style={{ maxWidth: 860, paddingTop: 56, paddingBottom: 96 }}>
        <p className="eyebrow" style={{ marginBottom: 16 }}>Legal</p>
        <h1 className="h-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', marginBottom: 12 }}>
          Refund &amp; Return Policy
        </h1>
        <p style={{ color: '#777', fontSize: '0.9rem', marginBottom: 48 }}>Effective date: 20 July 2026</p>

        {SECTIONS.map(s => (
          <section key={s.title} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: 12 }}>{s.title}</h2>
            <p style={{ color: '#444', fontSize: '0.95rem', whiteSpace: 'pre-line' }}>{s.body}</p>
          </section>
        ))}
      </main>
    </div>
  )
}
