import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | AddMads',
  description: 'Your enquiry has been received. Book a free strategy call with the AddMads team.',
  robots: { index: false, follow: false },
}

const BOOKING_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3mZADagJfsXnSImoQqBhp_zOMpt4qZBk7lGCNs3vj-4a0lhoTCRpoB1PnJT8aLOjiQnJkqAvJ6?gv=1'

const SOCIAL = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/theaddmads/',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/addmads',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/addmads',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@addmads',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
]

const QUOTES = [
  { text: 'The best marketing doesn\'t feel like marketing.', author: 'Tom Fishburne' },
  { text: 'Data beats opinion. Results beat promises.', author: 'AddMads' },
  { text: 'Make it simple. Make it memorable. Make it measurable.', author: 'AddMads' },
]

export default function ThankYouPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0505 50%, #0a0a0a 100%)',
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(80px,12vh,140px) 24px 60px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 600 }}>
          {/* Checkmark */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: '#C82A2A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 28px',
              boxShadow: '0 0 40px rgba(200,42,42,0.45)',
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <p style={{ color: '#C82A2A', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
            Enquiry Received
          </p>
          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            You&rsquo;re in. Let&rsquo;s grow.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(1rem,1.2vw,1.15rem)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
            Our team will review your enquiry and reach out within 24 hours. In the meantime, book a free 30-minute strategy call directly on our calendar — and follow us for daily digital marketing insights.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{ background: '#C82A2A', padding: '18px 24px' }}>
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {['₹10Cr+ Ad Spend Managed', '4×+ Average ROAS', '250+ Projects Delivered', '92% Client Retention'].map((s) => (
            <span
              key={s}
              style={{
                color: '#fff',
                fontSize: '0.82rem',
                fontWeight: 600,
                padding: '4px 16px',
                borderRight: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Calendar booking section */}
      <section style={{ background: '#F5F5F5', padding: 'clamp(60px,8vw,100px) 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ color: '#C82A2A', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>
              Skip the wait
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.6rem,3.5vw,2.6rem)',
                fontWeight: 700,
                color: '#111',
                lineHeight: 1.15,
                marginBottom: 14,
              }}
            >
              Book your free strategy call
            </h2>
            <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.7, maxWidth: 500, margin: '0 auto' }}>
              30 minutes. No pitch. No pressure. Just a clear audit of your current marketing and a growth plan you can act on immediately.
            </p>
          </div>

          {/* Google Calendar embed */}
          <div
            style={{
              background: '#fff',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 4px 40px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            <iframe
              src={BOOKING_URL}
              width="100%"
              height="680"
              style={{ border: 0, display: 'block' }}
              title="Book a free strategy call with AddMads"
              loading="lazy"
            />
          </div>

          <p style={{ textAlign: 'center', color: '#999', fontSize: '0.78rem', marginTop: 16 }}>
            Powered by Google Calendar · A Google Meet link is sent to your email after booking
          </p>
        </div>
      </section>

      {/* Quotes section */}
      <section style={{ background: '#fff', padding: 'clamp(60px,7vw,90px) 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', color: '#C82A2A', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 48 }}>
            What drives us
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 28,
            }}
          >
            {QUOTES.map((q, i) => (
              <div
                key={i}
                style={{
                  background: i === 1 ? '#C82A2A' : '#F5F5F5',
                  borderRadius: 16,
                  padding: 'clamp(28px,3vw,36px)',
                }}
              >
                <p
                  style={{
                    fontSize: 'clamp(1rem,1.3vw,1.15rem)',
                    fontWeight: 600,
                    lineHeight: 1.5,
                    color: i === 1 ? '#fff' : '#111',
                    marginBottom: 16,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{q.text}&rdquo;
                </p>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, color: i === 1 ? 'rgba(255,255,255,0.7)' : '#888', letterSpacing: '0.05em' }}>
                  — {q.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social links */}
      <section
        style={{
          background: '#0a0a0a',
          padding: 'clamp(60px,7vw,90px) 24px',
          textAlign: 'center',
        }}
      >
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
          Stay in the loop
        </p>
        <h3 style={{ color: '#fff', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, marginBottom: 10 }}>
          Follow AddMads for daily insights
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', marginBottom: 40 }}>
          Google Ads tips, Meta strategies, SEO wins — straight to your feed.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 24px',
                borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'border-color 0.18s, background 0.18s',
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              {s.svg}
              {s.label}
            </a>
          ))}
        </div>

        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
            fontSize: '0.88rem',
          }}
        >
          ← Back to AddMads.com
        </Link>
      </section>
    </>
  )
}
