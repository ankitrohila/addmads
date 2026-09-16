import { NextRequest, NextResponse } from 'next/server'
import { pickCaseStudies, caseStudyUrl, CASE_STUDIES_URL } from '@/lib/case-studies'

export const runtime = 'nodejs'

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY ?? ''
const ZOHO_WEB_TO_LEAD_URL = 'https://crm.zoho.in/crm/WebToLeadForm'
// Credentials live only as Worker secrets (wrangler secret put / dashboard).
// Both are confirmed set on the production Worker; there is deliberately no
// hardcoded fallback, because this repository is public.
const ZOHO_XNQSJSDP = process.env.ZOHO_XNQSJSDP ?? ''
const ZOHO_XMIWTLD = process.env.ZOHO_XMIWTLD ?? ''

// Customer auto-reply (Resend). If RESEND_API_KEY is unset the send is skipped and
// the lead still succeeds - the auto-reply must never be able to fail a submission -
// but the skip is logged loudly, because a silently missing key means no enquirer
// ever receives a confirmation and nothing surfaces to say so.
const RESEND_API_KEY = process.env.RESEND_API_KEY ?? ''
const AUTOREPLY_FROM = process.env.AUTOREPLY_FROM ?? 'AddMads <hello@addmads.com>'
const AUTOREPLY_REPLY_TO = process.env.AUTOREPLY_REPLY_TO ?? 'theaddmads@gmail.com'
const BOOKING_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3P6DvF2rYdsuLER7Fg_kipPONU0Ij9BYBvv6ciwKitV5_fON03lEwHr-G680unMlNe_Fw9joAH'

interface LeadPayload {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  source?: string
  page?: string
  recaptchaToken?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+\d\s\-()]{7,15}$/

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!RECAPTCHA_SECRET) return true // verification disabled until secret is configured
  if (!token) return false
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret: RECAPTCHA_SECRET, response: token }),
  })
  const data = (await res.json()) as { success?: boolean; 'error-codes'?: string[] }
  if (data.success !== true) {
    // Surface Google's reason. 'invalid-input-secret' means the deployed
    // RECAPTCHA_SECRET_KEY is wrong; 'timeout-or-duplicate' means the token
    // expired (2 min) or was already used.
    console.error('reCAPTCHA verify failed:', JSON.stringify(data['error-codes'] ?? []))
  }
  return data.success === true
}

function escapeHtml(v: string): string {
  return v.replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))
}

/**
 * Emails the customer a confirmation with the booking link plus the two or
 * three case studies that match the service they enquired about - prospects
 * ask for proof before they book, so it ships with the first reply instead of
 * waiting for a sales call.
 * Never throws - a failed auto-reply must not fail the lead.
 */
async function sendAutoReply(toEmail: string, toName: string, service: string): Promise<void> {
  if (!RESEND_API_KEY) {
    console.error(
      'RESEND_API_KEY is not set on this Worker - customer auto-reply skipped. ' +
      'The lead was still captured, but no confirmation email was sent.',
    )
    return
  }
  const first = escapeHtml((toName.split(/\s+/)[0] || 'there'))

  // utm_* only - never put the lead's own details in a URL.
  const utm = 'utm_source=email&utm_medium=autoreply&utm_campaign=lead_case_studies'
  const studies = pickCaseStudies(service, 3)
  const studyRows = studies.map(c => `
    <tr><td style="padding:0 0 10px">
      <a href="${caseStudyUrl(c.slug)}&${utm}" style="display:block;text-decoration:none;border:1px solid #eee;border-radius:10px;padding:14px 16px">
        <div style="color:#111;font-size:14px;font-weight:600;line-height:1.4">${escapeHtml(c.client)}</div>
        <div style="color:#888;font-size:11px;letter-spacing:.04em;text-transform:uppercase;margin-top:3px">${escapeHtml(c.industry)}</div>
        <div style="color:#C82A2A;font-size:13px;font-weight:600;margin-top:7px">${escapeHtml(c.headline)}</div>
      </a>
    </td></tr>`).join('')

  const caseStudyBlock = studies.length ? `
  <tr><td style="padding:4px 32px 0">
    <div style="border-top:1px solid #eee;padding-top:24px">
      <div style="color:#111;font-size:15px;font-weight:600;margin-bottom:4px">While you wait &mdash; results like yours</div>
      <div style="color:#666;font-size:13px;line-height:1.6;margin-bottom:16px">Picked because you asked about ${escapeHtml(service || 'growth')}.</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${studyRows}</table>
      <div style="margin-top:6px">
        <a href="${CASE_STUDIES_URL}?${utm}" style="color:#C82A2A;font-size:13px;font-weight:600;text-decoration:none">See all case studies &rarr;</a>
      </div>
    </div>
  </td></tr>` : ''
  const html = `<!doctype html><html><body style="margin:0;background:#f5f5f5;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 16px">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:16px;overflow:hidden">
  <tr><td style="background:#0a0a0a;padding:32px 32px 28px">
    <div style="color:#C82A2A;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase">Enquiry received</div>
    <div style="color:#fff;font-size:26px;font-weight:700;margin-top:10px">Thanks, ${first}.</div>
  </td></tr>
  <tr><td style="padding:28px 32px 8px;color:#333;font-size:15px;line-height:1.7">
    <p style="margin:0 0 16px">We&rsquo;ve got your enquiry and a member of the AddMads team will get back to you within 24 hours.</p>
    <p style="margin:0 0 24px">Don&rsquo;t want to wait? Book a free 1-hour strategy call at a time that suits you &mdash; available every day, and you&rsquo;ll get a Google Meet link straight away.</p>
  </td></tr>
  <tr><td align="center" style="padding:0 32px 32px">
    <a href="${BOOKING_URL}" style="display:inline-block;background:#C82A2A;color:#fff;font-size:15px;font-weight:600;padding:15px 34px;border-radius:999px;text-decoration:none">Book your free call</a>
  </td></tr>
  ${caseStudyBlock}
  <tr><td style="padding:24px 32px 30px;color:#888;font-size:12px;line-height:1.6;border-top:1px solid #eee">
    AddMads &middot; Performance marketing that pays for itself<br>
    <a href="https://www.addmads.com" style="color:#C82A2A;text-decoration:none">www.addmads.com</a>
  </td></tr>
</table>
</td></tr></table></body></html>`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: AUTOREPLY_FROM,
        to: [toEmail],
        reply_to: AUTOREPLY_REPLY_TO,
        subject: `Thanks ${toName.split(/\s+/)[0] || 'there'} - your free strategy call + 3 relevant case studies`,
        html,
      }),
    })
    if (!res.ok) {
      console.error('Auto-reply send failed:', res.status, await res.text().catch(() => ''))
    }
  } catch (err) {
    console.error('Auto-reply request threw:', err)
  }
}

export async function POST(req: NextRequest) {
  let body: LeadPayload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const name = (body.name ?? '').trim().slice(0, 120)
  const email = (body.email ?? '').trim().slice(0, 200)
  const phone = (body.phone ?? '').trim().slice(0, 20)
  const service = (body.service ?? '').trim().slice(0, 100)
  const message = (body.message ?? '').trim().slice(0, 2000)
  const source = (body.source ?? 'Website Lead').trim().slice(0, 60)
  // Page path the lead was submitted from, e.g. /services/branding/logo-design
  const rawPage = (body.page ?? '').trim().slice(0, 300)
  const page = /^\/[\w\-/?=&%.]*$/.test(rawPage) ? rawPage : ''

  if (name.length < 2) return NextResponse.json({ error: 'Please enter your full name' }, { status: 400 })
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 })
  if (!PHONE_RE.test(phone)) return NextResponse.json({ error: 'Please enter a valid phone number' }, { status: 400 })
  if (!service) return NextResponse.json({ error: 'Please select a service' }, { status: 400 })

  // Fail loudly rather than silently posting an unauthenticated lead to Zoho.
  if (!ZOHO_XNQSJSDP || !ZOHO_XMIWTLD) {
    console.error('Zoho Web-to-Lead secrets are not configured on this Worker')
    return NextResponse.json(
      { error: 'Could not save your enquiry. Please try again or call us.' },
      { status: 500 },
    )
  }

  const captchaOk = await verifyRecaptcha(body.recaptchaToken ?? '')
  if (!captchaOk) {
    return NextResponse.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 403 })
  }

  const nameParts = name.split(/\s+/)
  const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(' ') : name
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '.'

  const description = [
    message ? message : '',
    message ? '—' : '',
    `Service: ${service}`,
    page ? `Page: https://www.addmads.com${page}` : '',
    `Form: ${source}`,
  ].filter(Boolean).join('\n')

  const fd = new FormData()
  fd.append('xnQsjsdp', ZOHO_XNQSJSDP)
  fd.append('zc_gad', '')
  fd.append('xmIwtLD', ZOHO_XMIWTLD)
  fd.append('actionType', 'TGVhZHM=')
  fd.append('returnURL', 'https://www.addmads.com/contact')
  fd.append('Company', 'Not Provided')
  fd.append('First Name', firstName)
  fd.append('Last Name', lastName)
  fd.append('Email', email)
  fd.append('Phone', phone)
  fd.append('Lead Source', 'Web Site')
  fd.append('Industry', service)
  fd.append('Description', description)

  try {
    const zohoRes = await fetch(ZOHO_WEB_TO_LEAD_URL, { method: 'POST', body: fd })
    if (!zohoRes.ok) {
      console.error('Zoho Web-to-Lead responded with status', zohoRes.status)
      return NextResponse.json({ error: 'Could not save your enquiry. Please try again or call us.' }, { status: 502 })
    }
  } catch (err) {
    console.error('Zoho Web-to-Lead request failed:', err)
    return NextResponse.json({ error: 'Could not save your enquiry. Please try again or call us.' }, { status: 502 })
  }

  // Fire the customer auto-reply after Zoho has accepted the lead. Awaited so the
  // Worker is not torn down mid-request, but its failure cannot fail the response.
  await sendAutoReply(email, name, service)

  return NextResponse.json({ ok: true })
}
