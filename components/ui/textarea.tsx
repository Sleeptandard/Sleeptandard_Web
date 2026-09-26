import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type TextareaProps = ComponentProps<'textarea'> & {
  alert?: boolean
}

export function Textarea({
  alert = false,
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      aria-invalid={alert || undefined}
      className={cn(
        'min-h-[120px] w-full resize-y rounded-[5px] bg-transparent px-4 py-3 text-[14px] outline-none transition-[border-color,border-width,color] placeholder:text-[14px] disabled:cursor-not-allowed disabled:opacity-50',
        alert
          ? 'border-[1.5px] border-Red text-Red placeholder:text-Red focus:border-Red focus:text-Red'
          : 'border border-Gray2 text-Gray placeholder:text-Gray focus:border-[1.5px] focus:border-KeyReal focus:text-Key',
        className,
      )}
      {...props}
    />
  )
}
