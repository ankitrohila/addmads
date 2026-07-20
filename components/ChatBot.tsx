'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  matchIntent,
  buildFallback,
  GREETING_MESSAGE,
  GREETING_QUICK_REPLIES,
  type KBLink,
} from '@/data/chatbot-kb'

interface Msg {
  from: 'bot' | 'user'
  text: string
  link?: KBLink
  quickReplies?: string[]
}

function answerFor(input: string): Msg {
  const intent = matchIntent(input)
  if (intent) {
    return { from: 'bot', text: intent.answer, link: intent.link, quickReplies: intent.quickReplies }
  }
  const fb = buildFallback(input)
  return { from: 'bot', text: fb.answer, quickReplies: fb.quickReplies }
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([
    { from: 'bot', text: GREETING_MESSAGE, quickReplies: GREETING_QUICK_REPLIES },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing, open])

  const send = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || typing) return
    setMessages(m => [...m, { from: 'user', text: trimmed }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setMessages(m => [...m, answerFor(trimmed)])
      setTyping(false)
    }, 600 + Math.min(trimmed.length * 15, 500))
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Chat with AddMads'}
        className="fixed bottom-5 right-5 z-[80] w-14 h-14 rounded-full bg-[#111] text-white shadow-[0_12px_32px_rgba(0,0,0,0.3)] flex items-center justify-center transition-transform hover:scale-105"
      >
        {open ? (
          <span className="text-[1.2rem]">✕</span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>

      {/* Panel */}
      <div
        className={`fixed z-[80] bottom-[88px] right-4 left-4 sm:left-auto sm:w-[380px] max-h-[min(600px,calc(100svh-120px))] flex flex-col bg-white rounded-2xl border border-black/10 shadow-[0_24px_80px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        role="dialog"
        aria-label="AddMads chat assistant"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-[#111] text-white shrink-0">
          <span className="relative w-9 h-9 rounded-full bg-[#C82A2A] flex items-center justify-center font-semibold text-[0.85rem]" style={{ fontFamily: 'var(--font-tight)' }}>
            A
            <span className="absolute -bottom-[1px] -right-[1px] w-3 h-3 rounded-full bg-[#3DD671] border-2 border-[#111]" />
          </span>
          <div>
            <p className="font-semibold text-[0.95rem] leading-tight">AddMads Assistant</p>
            <p className="text-white/50 text-[0.75rem]">Typically replies instantly</p>
          </div>
        </div>

        {/* Messages */}
        <div ref={bodyRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#FAFAFA]">
          {messages.map((m, i) => (
            <div key={i}>
              <div
                className={`max-w-[85%] whitespace-pre-line text-[0.88rem] leading-relaxed rounded-2xl px-4 py-3 ${
                  m.from === 'bot'
                    ? 'bg-white border border-black/[0.07] text-[#222] rounded-bl-md'
                    : 'bg-[#C82A2A] text-white ml-auto rounded-br-md'
                }`}
              >
                {m.text}
              </div>

              {/* Land the user on the page that resolves the query */}
              {m.from === 'bot' && m.link && (
                <div className="mt-2">
                  {m.link.href.startsWith('http') ? (
                    <a
                      href={m.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-[0.82rem] font-medium bg-[#111] text-white rounded-full hover:bg-[#C82A2A] transition-colors"
                    >
                      {m.link.label} →
                    </a>
                  ) : (
                    <Link
                      href={m.link.href}
                      className="inline-flex items-center gap-2 px-4 py-2 text-[0.82rem] font-medium bg-[#111] text-white rounded-full hover:bg-[#C82A2A] transition-colors"
                    >
                      {m.link.label} →
                    </Link>
                  )}
                </div>
              )}

              {m.from === 'bot' && m.quickReplies && i === messages.length - 1 && !typing && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {m.quickReplies.map(qr => (
                    <button
                      key={qr}
                      onClick={() => send(qr)}
                      className="px-3 py-[6px] text-[0.8rem] bg-white border border-black/[0.12] rounded-full hover:border-[#C82A2A] hover:text-[#C82A2A] transition-colors"
                    >
                      {qr}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {typing && (
            <div className="flex gap-1 items-center bg-white border border-black/[0.07] rounded-2xl rounded-bl-md px-4 py-3 w-fit">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="w-[6px] h-[6px] rounded-full bg-black/30 animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="shrink-0 border-t border-black/[0.07] bg-white">
          <form
            onSubmit={e => { e.preventDefault(); send(input) }}
            className="flex items-center gap-2 px-3 py-3"
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question…"
              aria-label="Chat message"
              className="flex-1 px-4 py-[10px] text-[0.9rem] bg-[#F3F3F3] rounded-full outline-none focus:ring-2 focus:ring-[#C82A2A]/30"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="w-10 h-10 shrink-0 rounded-full bg-[#C82A2A] text-white flex items-center justify-center hover:bg-[#A82222] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" />
              </svg>
            </button>
          </form>
          <p className="pb-2 text-center text-[0.7rem] text-black/35">
            Prefer a human? <Link href="/contact" className="underline hover:text-[#C82A2A]">Contact us</Link>
          </p>
        </div>
      </div>
    </>
  )
}
