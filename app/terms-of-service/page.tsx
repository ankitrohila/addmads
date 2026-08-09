import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — AddMads',
  description: 'Terms of Service for AddMads, governed by Indian Contract Act 1872 and IT Act 2000.',
  alternates: { canonical: 'https://www.addmads.com/terms-of-service' },
}

const SECTIONS = [
  {
    title: '1. Agreement to Terms',
    body: `These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client") and AddMads ("Studio", "we", "us") for all creative and digital services including branding, graphic design, advertising, and website development. By engaging our services, signing a proposal, or making a payment, you agree to be bound by these Terms in accordance with the Indian Contract Act, 1872 and the Information Technology Act, 2000.`,
  },
  {
    title: '2. Services',
    body: `AddMads provides creative and digital services including:\n\n• Brand Identity & Strategy\n• Graphic Design (print, digital, packaging)\n• Advertising Campaigns (concept, design, production)\n• Website Design & Development\n• Motion Graphics & Visual Content\n\nThe specific scope, deliverables, timeline, and fees for each engagement are defined in a separate Project Proposal or Statement of Work ("SOW") agreed upon before work commences.`,
  },
  {
    title: '3. Engagement and Project Initiation',
    body: `A project is initiated upon:\n\n(a) written acceptance of our Project Proposal, and\n(b) receipt of the agreed advance payment (typically 50% of total project value)\n\nVerbal or informal confirmations do not constitute binding commitments. AddMads reserves the right to decline any project at its sole discretion prior to initiation.`,
  },
  {
    title: '4. Client Responsibilities',
    body: `The Client agrees to:\n\n• Provide complete, accurate, and timely project briefs, content, materials, and approvals\n• Designate a single point of contact for project communication\n• Respond to requests for feedback or approvals within 5 working days\n• Ensure all content and materials supplied are original or properly licensed, free from third-party IP claims\n• Obtain any necessary regulatory approvals for advertising materials prior to publication\n\nDelays caused by late Client feedback or incomplete information may result in revised timelines and may attract additional charges.`,
  },
  {
    title: '5. Fees, Invoicing, and Payment',
    body: `Fees are as specified in the Project Proposal. Our standard payment schedule:\n\n• 50% advance upon project initiation\n• Remaining balance due upon final delivery or as agreed in the SOW\n\nInvoices are due within 7 days of issue. Overdue amounts attract interest at 18% per annum from the due date. AddMads reserves the right to withhold delivery of final files until full payment is received. All prices are in Indian Rupees (INR) unless stated otherwise. GST is applicable as per prevailing Indian tax law.`,
  },
  {
    title: '6. Revisions',
    body: `Project proposals specify the number of revision rounds included. Revisions beyond the agreed scope will be charged at our standard hourly rate. A "revision" means changes within the approved creative direction; a change of direction constitutes a new brief and will be quoted separately.`,
  },
  {
    title: '7. Intellectual Property',
    body: `7.1 Upon receipt of full payment, AddMads assigns to the Client all intellectual property rights in the final approved deliverables for the purposes defined in the SOW.\n\n7.2 AddMads retains ownership of all preliminary concepts, unused designs, working files, tools, methodologies, and proprietary processes used in creating the deliverables.\n\n7.3 AddMads retains the right to display the completed work in its portfolio, website, social media, and award submissions unless the Client requests confidentiality in writing.\n\n7.4 Any third-party assets (stock images, fonts, licensed software) remain subject to their respective licence terms. The Client is responsible for obtaining appropriate licences for ongoing use.`,
  },
  {
    title: '8. Confidentiality',
    body: `Each party agrees to keep confidential all non-public information disclosed by the other party. This obligation survives termination for 3 years. AddMads will not disclose Client briefs, strategies, or proprietary business information to third parties without consent, except as required by law.`,
  },
  {
    title: '9. Warranties and Representations',
    body: `AddMads warrants that deliverables will be created with reasonable skill and care and will be free from third-party IP infringement to the best of our knowledge at the time of delivery. AddMads does not warrant that creative work will achieve specific business outcomes, sales targets, or advertising results. Services are provided "as is" to the extent permitted by applicable law.`,
  },
  {
    title: '10. Limitation of Liability',
    body: `To the maximum extent permitted by Indian law, AddMads's total liability for any claim arising from a project shall not exceed the total fees paid for that specific project. AddMads is not liable for indirect, incidental, or consequential losses including lost profits or reputational damage. Nothing in these Terms excludes liability for fraud, wilful misconduct, or death and personal injury.`,
  },
  {
    title: '11. Termination',
    body: `Either party may terminate the engagement with 14 days' written notice. Upon termination:\n\n• The Client shall pay for all work completed up to the termination date, calculated pro-rata or as agreed in the SOW\n• The advance payment is non-refundable unless AddMads is in material breach\n• AddMads will deliver all completed work upon receipt of amounts due\n• Ownership of work in progress remains with AddMads until full payment is made`,
  },
  {
    title: '12. Force Majeure',
    body: `Neither party is liable for delays caused by events outside reasonable control, including natural disasters, government actions, pandemics, or internet outages, provided the affected party notifies the other promptly.`,
  },
  {
    title: '13. Dispute Resolution',
    body: `In the event of a dispute, the parties shall first attempt to resolve it through good-faith negotiation. If unresolved within 30 days, disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996, before a sole arbitrator mutually agreed upon, with proceedings conducted in English in India.`,
  },
  {
    title: '14. Governing Law and Jurisdiction',
    body: `These Terms are governed by the laws of India. Subject to the arbitration clause above, courts in India shall have jurisdiction over any remaining disputes.`,
  },
  {
    title: '15. Modifications',
    body: `AddMads reserves the right to update these Terms. Updated Terms will be posted on this page. Continued engagement after the effective date constitutes acceptance.`,
  },
]

export default function TermsOfService() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(17,17,17,0.07)',
        padding: '0 var(--container-px)',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ fontFamily: 'var(--font-tight)', fontSize: '1.15rem', fontWeight: 500, color: '#111111', textDecoration: 'none' }}>
          AddMads
        </Link>
        <Link href="/" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(17,17,17,0.5)', textDecoration: 'none' }}>
          ← Back to home
        </Link>
      </nav>

      <div style={{
        padding: 'clamp(64px, 8vw, 120px) var(--container-px) clamp(40px, 5vw, 64px)',
        borderBottom: '1px solid rgba(17,17,17,0.07)',
      }}>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#C82A2A',
          marginBottom: 16,
        }}>
          Legal
        </div>
        <h1 style={{
          fontFamily: 'var(--font-tight)',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 500,
          color: '#111111',
          lineHeight: 1.1,
          margin: '0 0 20px',
        }}>
          Terms of Service
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          color: 'rgba(17,17,17,0.45)',
          margin: 0,
        }}>
          Effective Date: 12 May 2026 &nbsp;·&nbsp; Governed by Indian Contract Act 1872 &amp; IT Act 2000
        </p>
      </div>

      <div style={{
        maxWidth: 820,
        margin: '0 auto',
        padding: 'clamp(48px, 6vw, 96px) var(--container-px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
      }}>
        {SECTIONS.map((s) => (
          <section key={s.title}>
            <h2 style={{
              fontFamily: 'var(--font-tight)',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontWeight: 500,
              color: '#111111',
              marginBottom: 14,
            }}>
              {s.title}
            </h2>
            {s.body.split('\n').map((line, i) => (
              line.trim() === '' ? <br key={i} /> :
              <p key={i} style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                color: 'rgba(17,17,17,0.65)',
                lineHeight: 1.8,
                marginBottom: 8,
              }}>
                {line}
              </p>
            ))}
          </section>
        ))}

        <div style={{
          borderTop: '1px solid rgba(17,17,17,0.07)',
          paddingTop: 32,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 24,
        }}>
          {[
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Cancellation Policy', href: '/cancellation-policy' },
            { label: 'About Us', href: '/about' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              color: '#C82A2A',
              textDecoration: 'none',
            }}>
              {l.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
