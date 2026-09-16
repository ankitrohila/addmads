import { NextResponse } from 'next/server'

export const revalidate = 3600

export interface InstaPost {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  thumbnail_url?: string
  permalink: string
  timestamp?: string
}

const FIELDS = 'id,media_type,media_url,thumbnail_url,permalink,timestamp'

/**
 * Footer Instagram feed.
 *
 * Uses graph.instagram.com/me/media, which is the Instagram API with Instagram
 * Login (the Basic Display API it replaced was shut down in December 2024).
 * The account must be a Business or Creator account and the token must carry
 * the instagram_business_basic scope.
 *
 * Long-lived tokens last 60 days. Previously every failure here returned an
 * empty array, so an expired token looked identical to "no posts yet" and the
 * footer just went quiet. Now every failure is logged with its reason, and
 * /api/instagram?debug=1 reports what actually went wrong plus how many days
 * the current token has left — so an expiry can be caught before it bites.
 */
export async function GET(request: Request) {
  const debug = new URL(request.url).searchParams.get('debug') === '1'
  const token = process.env.INSTAGRAM_TOKEN

  const fail = (reason: string, detail?: unknown) => {
    console.error(`[instagram] ${reason}`, detail ?? '')
    return debug
      ? NextResponse.json({ ok: false, reason, detail }, { status: 200 })
      : NextResponse.json([])
  }

  if (!token) return fail('INSTAGRAM_TOKEN is not set on the Worker')

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=${FIELDS}&limit=6&access_token=${token}`,
      { next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000) },
    )

    const data = await res.json().catch(() => null)

    if (!res.ok || !data || data.error) {
      return fail(
        `Instagram API returned ${res.status}`,
        data?.error ?? (await res.text().catch(() => undefined)),
      )
    }

    const posts = (data.data as InstaPost[]) || []

    if (debug) {
      // Ask Instagram how much life the token has left, so an upcoming expiry
      // is visible here rather than discovered when the footer empties out.
      let tokenDaysLeft: number | null = null
      try {
        const t = await fetch(
          `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`,
          { cache: 'no-store', signal: AbortSignal.timeout(8000) },
        )
        const tj = await t.json()
        if (typeof tj.expires_in === 'number') tokenDaysLeft = Math.round(tj.expires_in / 86400)
      } catch {
        /* non-fatal — the posts themselves are what matter */
      }
      return NextResponse.json({ ok: true, count: posts.length, tokenDaysLeft, posts })
    }

    if (posts.length === 0) console.warn('[instagram] API returned no media')
    return NextResponse.json(posts)
  } catch (err) {
    return fail('Request to Instagram failed', err instanceof Error ? err.message : String(err))
  }
}
