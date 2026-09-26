import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

const NORMAL_CARD_BACKGROUND =
  'linear-gradient(135deg, #001C35 0%, #001C35 50%, #06254B 100%)'

const NORMAL_CARD_SHADOW = [
  '8px 8px 15px 0 rgba(2, 7, 16, 0.2)',
  '-2px -2px 22px 0 rgba(185, 200, 223, 0.08)',
  'inset 5px 6px 25px -12px rgba(3, 14, 30, 0.8)',
].join(', ')

type NormalCardProps = ComponentPropsWithoutRef<'div'>

export function NormalCard({
  children,
  className,
  style,
  ...props
}: NormalCardProps) {
  return (
    <div
      className={cn('overflow-hidden rounded-[24px] p-6 text-white', className)}
      style={{
        background: NORMAL_CARD_BACKGROUND,
        boxShadow: NORMAL_CARD_SHADOW,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
