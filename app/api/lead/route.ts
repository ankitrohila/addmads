import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY ?? ''
const ZOHO_WEB_TO_LEAD_URL = 'https://crm.zoho.in/crm/WebToLeadForm'
const ZOHO_XNQSJSDP = process.env.ZOHO_XNQSJSDP ?? '4c7905d5759a0daffb3468ae9a3699cdb4a57be9e884a22532d13d9b5cc98998'
const ZOHO_XMIWTLD = process.env.ZOHO_XMIWTLD ?? '32a1e2d59c171a4b580dd87720a20d10a8b9b3bd70960328052dd2fa712820137fda61d6c2fa85d6cc23b2727a7993c0'

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
  const data = (await res.json()) as { success?: boolean }
  return data.success === true
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

  return NextResponse.json({ ok: true })
}
