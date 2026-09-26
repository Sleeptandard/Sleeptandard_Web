import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

const PRODUCT_DIFF_CARD_1_BACKGROUND =
  'linear-gradient(135deg, rgba(4, 47, 86, 0) 0%, rgba(97, 97, 97, 0.7) 100%)'

const PRODUCT_DIFF_CARD_2_BACKGROUND =
  'linear-gradient(135deg, rgba(4, 47, 86, 0) 0%, rgba(10, 63, 110, 1) 100%)'

type ProductDiffCardProps = ComponentPropsWithoutRef<'div'>

type ProductDiffCardBaseProps = ProductDiffCardProps & {
  background: string
  shadowOpacity: number
}

function ProductDiffCardBase({
  background,
  shadowOpacity,
  children,
  className,
  style,
  ...props
}: ProductDiffCardBaseProps) {
  return (
    <div
      className={cn('overflow-hidden rounded-[28px] p-6 text-White', className)}
      style={{
        background,
        boxShadow: [
          'inset 0 0 0 0.5px #FFFFFF',
          `4px 6px 20px -2px rgba(5, 12, 22, ${shadowOpacity})`,
        ].join(', '),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export function ProductDiffCard1(props: ProductDiffCardProps) {
  return (
    <ProductDiffCardBase
      background={PRODUCT_DIFF_CARD_1_BACKGROUND}
      shadowOpacity={0.1}
      {...props}
    />
  )
}

export function ProductDiffCard2(props: ProductDiffCardProps) {
  return (
    <ProductDiffCardBase
      background={PRODUCT_DIFF_CARD_2_BACKGROUND}
      shadowOpacity={0.25}
      {...props}
    />
  )
}
