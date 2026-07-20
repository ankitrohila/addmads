'use client'

import { useEffect, useState } from 'react'
import LeadForm from './LeadForm'

const STORAGE_KEY = 'addmads_popup_seen'
const OPEN_DELAY_MS = 6000

export default function LeadPopup() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return
    const t = setTimeout(() => {
      setMounted(true)
      setOpen(true)
      sessionStorage.setItem(STORAGE_KEY, '1')
    }, OPEN_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (!mounted) return null

  return (
    <div
      className={`fixed inset-0 z-[90] flex items-center justify-center p-4 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      role="dialog"
      aria-modal="true"
      aria-label="Start your project enquiry"
    >
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="animate-pop-in relative w-full max-w-[520px] max-h-[90svh] overflow-y-auto bg-white rounded-2xl shadow-[0_32px_96px_rgba(0,0,0,0.3)] p-[clamp(20px,4vw,36px)]">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/[0.05] hover:bg-black/10 transition-colors text-[1.1rem]"
        >
          ✕
        </button>
        <p className="eyebrow mb-3">Free growth audit</p>
        <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)' }}>Let&apos;s scale your business.</h2>
        <p className="mt-2 mb-6 text-[#666] text-[0.92rem]">
          Tell us what you need — we&apos;ll reply within 24 hours with a plan and pricing.
        </p>
        <LeadForm compact sourceLabel="Popup Form" onSuccess={() => setTimeout(() => setOpen(false), 2500)} />
      </div>
    </div>
  )
}
