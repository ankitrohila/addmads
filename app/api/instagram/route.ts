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

export async function GET() {
  const token = process.env.INSTAGRAM_TOKEN
  if (!token) return NextResponse.json([])

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,timestamp&limit=6&access_token=${token}`,
      { next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000) },
    )
    if (!res.ok) return NextResponse.json([])
    const data = await res.json()
    if (data.error) return NextResponse.json([])
    return NextResponse.json((data.data as InstaPost[]) || [])
  } catch {
    return NextResponse.json([])
  }
}
