import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type TermsTextBox2Props = HTMLAttributes<HTMLDivElement>

export function TermsTextBox2({
  children,
  className,
  ...props
}: TermsTextBox2Props) {
  return (
    <div
      tabIndex={0}
      className={cn(
        'h-[142px] w-full overflow-y-auto whitespace-pre-wrap break-words rounded-[5px] border border-Gray2 bg-[#EFEFEF] p-4 text-[14px] leading-normal text-Gray outline-none [overflow-wrap:anywhere] focus-visible:border-KeyReal focus-visible:ring-1 focus-visible:ring-KeyReal',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
