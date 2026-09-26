import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type TermsTextBox1Props = HTMLAttributes<HTMLDivElement>

export function TermsTextBox1({
  children,
  className,
  ...props
}: TermsTextBox1Props) {
  return (
    <div
      className={cn(
        'h-auto w-full min-w-0 whitespace-pre-wrap break-words bg-transparent text-[13px] leading-normal text-Gray [overflow-wrap:anywhere]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
