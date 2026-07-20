import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — AddMads',
  description: 'Privacy Policy for AddMads, compliant with India\'s Digital Personal Data Protection Act 2023 and IT Act 2000.',
}

const SECTIONS = [
  {
    title: '1. Introduction',
    body: `AddMads ("we", "us", "our") is committed to protecting the privacy and personal data of our clients, website visitors, and business contacts. This Privacy Policy explains how we collect, use, store, and protect your personal data in accordance with the Digital Personal Data Protection Act, 2023 (DPDPA 2023), the Information Technology Act, 2000 (IT Act), the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules), and all applicable Indian laws.\n\nBy using our website or engaging our services, you acknowledge that you have read and agree to this Privacy Policy.`,
  },
  {
    title: '2. Data Fiduciary Information',
    body: `AddMads operates as a Data Fiduciary under DPDPA 2023.\n\nContact for privacy matters:\nEmail: info@addmads.com\nPhone: +91-9220872212\nIndia`,
  },
  {
    title: '3. Personal Data We Collect',
    body: `We collect the following categories of personal data:\n\n• Identity Data: name, designation, company name\n• Contact Data: email address, phone number, postal address\n• Project Data: briefs, requirements, feedback, files shared during engagement\n• Usage Data: IP address, browser type, pages visited, referring URLs (via analytics)\n• Communication Data: emails, messages, and enquiries sent to us\n• Payment Data: billing name and address (payment card details are processed by our payment gateway and never stored by us)\n\nWe do not knowingly collect personal data from individuals below 18 years of age.`,
  },
  {
    title: '4. Legal Basis and Purpose of Processing',
    body: `We process personal data on the following lawful bases under DPDPA 2023:\n\n• Consent: when you submit a contact form, enquiry, or opt into communications\n• Contractual Necessity: to provide agreed design, branding, advertising, and website services\n• Legitimate Interests: to respond to enquiries, improve our services, and maintain security\n• Legal Obligation: to comply with applicable Indian laws, court orders, or regulatory directions\n\nPurposes include: delivering services, sending project updates, billing and invoicing, improving our website, and complying with legal requirements.`,
  },
  {
    title: '5. Data Sharing and Third Parties',
    body: `We do not sell or rent your personal data. We may share data with:\n\n• Service Providers: cloud hosting, email delivery, analytics, and payment gateway providers — bound by confidentiality obligations\n• Professional Advisors: lawyers and accountants under legal professional privilege\n• Regulatory Authorities: government agencies, courts, or law enforcement when legally required\n\nAll third-party processors are required to handle data securely and only for the specified purpose.`,
  },
  {
    title: '6. Cookies and Tracking Technologies',
    body: `Our website may use cookies and similar technologies for essential functionality, performance analytics, and user experience. You may control cookie settings through your browser. Disabling certain cookies may affect site functionality.\n\nWe do not use cookies to build advertising profiles or share data with ad networks.`,
  },
  {
    title: '7. Data Retention',
    body: `We retain personal data only as long as necessary for the purposes for which it was collected:\n\n• Active client data: duration of engagement plus 3 years\n• Enquiry data: 12 months from last contact\n• Accounting and billing records: 7 years as required under Indian tax law\n• Website analytics data: 26 months (aggregated and anonymised thereafter)\n\nAfter the retention period, data is securely deleted or anonymised.`,
  },
  {
    title: '8. Your Rights as a Data Principal',
    body: `Under DPDPA 2023, you have the following rights:\n\n• Right to Access: obtain information about what personal data we hold about you\n• Right to Correction: request correction of inaccurate or incomplete data\n• Right to Erasure: request deletion of your personal data subject to legal retention obligations\n• Right to Grievance Redressal: raise complaints with our designated contact\n• Right to Withdraw Consent: at any time, without affecting lawfulness of prior processing\n• Right to Nominate: nominate another individual to exercise rights in case of death or incapacity\n\nTo exercise these rights, email us at info@addmads.com. We will respond within 30 days.`,
  },
  {
    title: '9. Security',
    body: `We implement reasonable security practices as required by SPDI Rules 2011, including encryption in transit (TLS), access controls, and secure data storage. While we take all reasonable precautions, no transmission over the internet is 100% secure. Please notify us immediately of any suspected breach at info@addmads.com.`,
  },
  {
    title: '10. Cross-Border Data Transfers',
    body: `If personal data is transferred outside India, we ensure adequate safeguards are in place, consistent with DPDPA 2023 and applicable Central Government notifications regarding permissible countries.`,
  },
  {
    title: '11. Grievance Officer',
    body: `In accordance with the IT Act 2000 and the SPDI Rules 2011, a Grievance Officer is available to address concerns:\n\nGrievance Officer: Ankit\nEmail: info@addmads.com\nPhone: +91-9220872212\n\nWe will acknowledge your grievance within 24 hours and resolve it within 30 days.`,
  },
  {
    title: '12. Changes to This Policy',
    body: `We may update this Privacy Policy periodically. The updated policy will be posted on this page with a revised effective date. Continued use of our services after changes constitutes acceptance.`,
  },
  {
    title: '13. Governing Law',
    body: `This Privacy Policy is governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.`,
  },
]

export default function PrivacyPolicy() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      {/* Nav bar */}
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

      {/* Hero */}
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
          Privacy Policy
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          color: 'rgba(17,17,17,0.45)',
          margin: 0,
        }}>
          Effective Date: 12 May 2026 &nbsp;·&nbsp; Compliant with DPDPA 2023 &amp; IT Act 2000
        </p>
      </div>

      {/* Content */}
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

        {/* Footer links */}
        <div style={{
          borderTop: '1px solid rgba(17,17,17,0.07)',
          paddingTop: 32,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 24,
        }}>
          {[
            { label: 'Terms of Service', href: '/terms-of-service' },
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
