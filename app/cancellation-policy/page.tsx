import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy — AddMads',
  description: 'Cancellation and Refund Policy for AddMads, compliant with India\'s Consumer Protection Act 2019.',
  alternates: { canonical: 'https://www.addmads.com/cancellation-policy' },
}

const SECTIONS = [
  {
    title: '1. Policy Overview',
    body: `This Cancellation and Refund Policy governs all service engagements with AddMads. It is framed in compliance with the Consumer Protection Act, 2019, the Consumer Protection (E-Commerce) Rules, 2020, and the Indian Contract Act, 1872. By engaging our services, you agree to this policy.`,
  },
  {
    title: '2. Nature of Services',
    body: `AddMads provides customised creative and digital services including brand identity, graphic design, advertising, and website development. Because each project is bespoke and involves significant creative labour from the moment of initiation, our cancellation and refund terms reflect the work invested at each stage of a project.`,
  },
  {
    title: '3. Cancellation by the Client',
    body: `Clients may cancel an engagement by submitting a written cancellation notice to info@addmads.com. The following schedule applies:\n\n• Before project initiation (before briefing call and before any work begins): Full refund of advance payment, less any applicable payment gateway charges\n• Within 48 hours of project initiation: 75% refund of advance payment\n• After briefing / discovery phase is complete: 50% refund of advance payment\n• After concepts or initial designs have been delivered: 25% refund of advance payment\n• After revisions have been delivered or at any stage post mid-project milestone: No refund; outstanding balance (if any) remains due\n\n"Project initiation" is defined as the date of the first project briefing call, kick-off meeting, or commencement of design work, whichever occurs first.`,
  },
  {
    title: '4. Cancellation by AddMads',
    body: `AddMads reserves the right to cancel an engagement if:\n\n• The Client provides false, incomplete, or misleading project information\n• The Client requests work that violates applicable laws, third-party rights, or our ethical standards\n• Payment obligations are not met within the agreed timeframe\n• Continued engagement becomes commercially or legally unviable\n\nIn such cases, AddMads will refund amounts proportionate to work not yet commenced. Any completed work remains property of AddMads until full payment for work done is received.`,
  },
  {
    title: '5. Refund Process',
    body: `Upon a valid cancellation request:\n\n• We will acknowledge receipt within 48 hours\n• The applicable refund will be processed within 7–10 working days to the original payment method\n• Refunds are subject to deductions for any third-party costs incurred (licensed assets, domain registrations, hosting fees, etc.) and payment gateway charges\n• Refunds are not provided for separately purchased digital assets, stock licences, or third-party subscriptions procured on the Client's behalf`,
  },
  {
    title: '6. Project Pause',
    body: `If the Client needs to pause a project, a written request must be submitted. AddMads will hold the project for up to 60 days. Work recommences upon written confirmation and, where additional resources are required, payment of a restart fee. Projects inactive beyond 60 days without communication may be treated as cancelled, with charges as per Section 3.`,
  },
  {
    title: '7. Revision Disputes',
    body: `If you are dissatisfied with delivered work, we encourage you to raise concerns before requesting cancellation. AddMads will make reasonable efforts to address feedback within the agreed revision scope. Dissatisfaction alone — without a breach of the agreed brief — does not entitle the Client to a refund beyond the applicable cancellation schedule.`,
  },
  {
    title: '8. Disputes',
    body: `Any dispute regarding cancellation or refunds should first be raised by email to info@addmads.com. We aim to resolve all disputes within 14 working days. Unresolved disputes are subject to the dispute resolution mechanism in our Terms of Service.`,
  },
  {
    title: '9. Consumer Rights',
    body: `Nothing in this policy limits any rights you may have under the Consumer Protection Act, 2019 or other applicable Indian consumer protection law. If you believe a consumer right has been violated, you may contact the National Consumer Helpline (NCH) at 1800-11-4000 or approach the relevant Consumer Disputes Redressal Commission.`,
  },
  {
    title: '10. Modifications',
    body: `AddMads reserves the right to modify this policy. Updates will be posted on this page with a revised effective date. The policy in effect at the time of project engagement applies to that project.`,
  },
  {
    title: '11. Contact',
    body: `For all cancellation, refund, or policy enquiries:\n\nEmail: info@addmads.com\nPhone: +91-9220872212\nResponse time: within 1 working day`,
  },
]

export default function CancellationPolicy() {
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
          Cancellation &amp; Refund Policy
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          color: 'rgba(17,17,17,0.45)',
          margin: 0,
        }}>
          Effective Date: 12 May 2026 &nbsp;·&nbsp; Compliant with Consumer Protection Act 2019
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
            { label: 'Terms of Service', href: '/terms-of-service' },
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
