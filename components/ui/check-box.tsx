import Image from 'next/image'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type CheckBoxProps = Omit<ComponentProps<'input'>, 'type'> & {
  alert?: boolean
}

export function CheckBox({
  alert = false,
  className,
  disabled,
  ...props
}: CheckBoxProps) {
  return (
    <label
      className={cn(
        'relative inline-flex size-7 shrink-0 cursor-pointer',
        disabled && 'cursor-not-allowed',
        className,
      )}
    >
      <input
        type="checkbox"
        aria-invalid={alert || undefined}
        disabled={disabled}
        className="peer sr-only"
        {...props}
      />

      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 rounded-[5px] border-[1.5px] bg-transparent shadow-[1px_1px_2px_0_rgba(5,12,22,0.2)] transition-[background-color,border-color,opacity,box-shadow]',
          alert ? 'border-Red' : 'border-Gray',
          'peer-checked:border-KeyReal peer-checked:bg-KeyReal',
          'peer-focus-visible:ring-2 peer-focus-visible:ring-KeyReal peer-focus-visible:ring-offset-2',
          'peer-disabled:opacity-50',
        )}
      />

      <Image
        src="/ui/ui_check.svg"
        alt=""
        aria-hidden="true"
        width={18}
        height={14}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity peer-checked:opacity-100 peer-disabled:opacity-50"
      />
    </label>
  )
}
