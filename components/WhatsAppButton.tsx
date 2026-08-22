'use client'

import { useEffect, useState } from 'react'

const WA_NUMBER = '919220872212'
const WA_MSG = encodeURIComponent('Hi AddMads! I\'d like to discuss my digital marketing requirements.')

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: 88,
        right: 20,
        zIndex: 9000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
        borderRadius: '50%',
        background: '#25D366',
        boxShadow: '0 4px 16px rgba(37,211,102,0.45)',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
      }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)'
        ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 22px rgba(37,211,102,0.55)'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'
        ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(37,211,102,0.45)'
      }}
    >
      {/* WhatsApp SVG icon */}
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M16 1C7.716 1 1 7.716 1 16c0 2.624.672 5.088 1.856 7.232L1 31l8.016-2.096A14.924 14.924 0 0 0 16 31c8.284 0 15-6.716 15-15S24.284 1 16 1Z"
          fill="#fff"/>
        <path fillRule="evenodd" clipRule="evenodd"
          d="M16 3.5c6.904 0 12.5 5.596 12.5 12.5 0 6.904-5.596 12.5-12.5 12.5a12.46 12.46 0 0 1-6.224-1.664l-.448-.264-4.64 1.216 1.232-4.512-.288-.464A12.46 12.46 0 0 1 3.5 16C3.5 9.096 9.096 3.5 16 3.5Zm-2.816 7.6c-.192-.432-.4-.44-.584-.448L12 10.64c-.18 0-.464.064-.708.32-.244.256-.936.912-.936 2.224 0 1.312.956 2.58 1.088 2.76.132.18 1.856 2.944 4.56 4.012 2.256.888 2.704.712 3.192.668.488-.044 1.576-.644 1.8-1.268.224-.624.224-1.16.156-1.268-.064-.108-.244-.172-.512-.3-.268-.128-1.576-.776-1.82-.864-.244-.088-.42-.132-.596.132-.176.264-.684.864-.84 1.044-.156.18-.312.2-.58.068-.268-.132-1.132-.416-2.156-1.328-.796-.708-1.332-1.584-1.488-1.852-.156-.268-.016-.412.116-.544.12-.12.268-.312.4-.468.132-.156.176-.268.264-.448.088-.18.044-.34-.02-.468-.065-.128-.577-1.444-.793-1.972Z"
          fill="#25D366"/>
      </svg>
    </a>
  )
}
