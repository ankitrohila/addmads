'use client'

import dynamic from 'next/dynamic'

const LeadPopup      = dynamic(() => import('@/components/LeadPopup'),      { ssr: false })
const ChatBot        = dynamic(() => import('@/components/ChatBot'),        { ssr: false })
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), { ssr: false })

export default function ClientWidgets() {
  return (
    <>
      <LeadPopup />
      <ChatBot />
      <WhatsAppButton />
    </>
  )
}
