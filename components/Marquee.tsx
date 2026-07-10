'use client'

import clsx from 'clsx'
import { MARQUEE_ITEMS } from '@/constants'

interface MarqueeProps {
  items?: string[]
  reverse?: boolean
  dark?: boolean
  size?: 'sm' | 'md' | 'lg'
  bordered?: boolean
}

export default function Marquee({
  items = MARQUEE_ITEMS,
  reverse = false,
  dark = false,
  size = 'md',
  bordered = true,
}: MarqueeProps) {
  const repeated = [...items, ...items, ...items, ...items]

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { fontSize: '0.8125rem', padding: '14px 0' },
    md: { fontSize: 'clamp(1.1rem,2.2vw,1.75rem)', padding: '18px 0' },
    lg: { fontSize: 'clamp(1.8rem,3.5vw,3rem)', padding: '24px 0' },
  }

  const gapMap = { sm: 28, md: 40, lg: 56 }
  const dotSize = { sm: 4, md: 6, lg: 8 }

  return (
    <div
      className={clsx(
        'overflow-hidden w-full select-none',
        bordered && (dark ? 'border-y border-white/8' : 'border-y border-black/[0.07]'),
        dark ? 'bg-[#111111]' : 'bg-[var(--color-surface)]'
      )}
      style={sizeStyles[size]}
    >
      <div
        className={clsx(
          'marquee-track',
          reverse ? 'animate-marquee-rev' : 'animate-marquee-fwd'
        )}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-tight font-black"
            style={{
              color: dark ? 'rgba(245,244,240,0.85)' : 'rgba(17,17,17,0.8)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              paddingRight: gapMap[size],
            }}
          >
            {item}
            <span
              className="inline-block rounded-full flex-shrink-0"
              style={{
                width: dotSize[size],
                height: dotSize[size],
                background: dark ? 'rgba(212,255,0,0.7)' : 'rgba(17,17,17,0.18)',
                marginLeft: gapMap[size],
              }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
