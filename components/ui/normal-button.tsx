import type { CSSProperties, ReactNode } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface NormalButtonProps {
  href: string
  children: ReactNode
  backgroundColor?: CSSProperties['backgroundColor']
  borderColor?: CSSProperties['borderColor']
  textColor?: CSSProperties['color']
  className?: string
  ariaLabel?: string
}

export function NormalButton({
  href,
  children,
  backgroundColor = '#042F56',
  borderColor = '#F5F5F5',
  textColor = '#FFFFFF',
  className,
  ariaLabel,
}: NormalButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        'inline-flex min-h-12 items-center justify-center rounded-full border px-7 py-3 text-center text-sm font-bold transition-[filter,transform] duration-200 hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#042F56] focus-visible:ring-offset-2',
        className,
      )}
      style={{
        backgroundColor,
        borderColor,
        color: textColor,
      }}
    >
      {children}
    </Link>
  )
}
