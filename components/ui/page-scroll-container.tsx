import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export function PageScrollContainer({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('page-scroll', className)} {...props}>
      {children}
    </div>
  )
}
