import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy — AddMads',
  description:
    'Shipping and Delivery Policy for AddMads digital services — how and when deliverables for marketing, design, and development engagements are delivered.',
}

const SECTIONS = [
  {
    title: '1. Nature of Delivery',
    body: `AddMads provides digital services and deliverables only. No physical goods are shipped. All deliverables — ad campaigns, reports, design files, brand assets, website code, and credentials — are delivered electronically via email, shared cloud drives (Google Drive/Dropbox), project management tools, or direct deployment to your hosting/ad accounts.`,
  },
  {
    title: '2. Delivery Timelines',
    body: `Indicative delivery timelines by service:\n\n• Landing pages: 1–2 weeks from brief approval\n• Full websites (WordPress/Shopify/Next.js): 4–8 weeks depending on scope\n• Logo & brand identity: 2–6 weeks\n• Graphics & social creatives: 2–7 working days per batch\n• Ad campaign setup (Google/Meta): 3–7 working days from account access\n• SEO deliverables: monthly, per the agreed retainer calendar\n\nExact timelines are confirmed in your project proposal. Timelines start from receipt of the complete brief, required access/credentials, and any advance payment due.`,
  },
  {
    title: '3. Delivery Confirmation',
    body: `Each milestone delivery is confirmed by email or through the agreed project channel. You are requested to review and acknowledge deliverables within 5 working days. Deliverables not disputed within this window are treated as accepted.`,
  },
  {
    title: '4. Delays',
    body: `If a delivery is expected to be delayed, we will notify you in advance with a revised date and the reason. Delays caused by pending client inputs (content, approvals, access, payments) extend timelines correspondingly and are not treated as delivery failures by AddMads.`,
  },
  {
    title: '5. Ownership & Handover',
    body: `Final files and account ownership are handed over upon full and final payment. You own all accounts (ad accounts, analytics, hosting, domain) created for you, along with final approved deliverables, as detailed in our Terms of Service.`,
  },
  {
    title: '6. Contact',
    body: `For delivery-related enquiries:\n\nEmail: info@addmads.com\nPhone: +91-9220872212\nResponse time: within 1 working day`,
  },
]

export default function ShippingDeliveryPolicy() {
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
          Shipping &amp; Delivery Policy
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
