import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

const CLEAR_CARD_BACKGROUND =
  'linear-gradient(135deg, rgba(194, 228, 233, 0) 0%, rgba(5, 12, 22, 0.2) 100%)'

type ClearCardProps = ComponentPropsWithoutRef<'div'>

export function ClearCard({
  children,
  className,
  style,
  ...props
}: ClearCardProps) {
  return (
    <div
      className={cn('overflow-hidden rounded-[24px] p-6 text-White', className)}
      style={{
        background: CLEAR_CARD_BACKGROUND,
        WebkitBackdropFilter: 'blur(15px)',
        backdropFilter: 'blur(15px)',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
