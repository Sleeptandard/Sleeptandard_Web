'use client'

import { useLayoutEffect, useState, type ComponentPropsWithoutRef } from 'react'
import { createPortal } from 'react-dom'

import { cn } from '@/lib/utils'

export function FixedSubmitButton({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'button'>) {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    setContainer(document.querySelector<HTMLElement>('[data-submit-container]'))
  }, [])

  if (!container) return null

  return createPortal(
    <button
      className={cn(
        'submit-bar sticky bottom-0 z-50 -mx-5 flex min-h-[60px] w-[calc(100%+2.5rem)] shrink-0 items-center justify-center gap-2 bg-KeyReal px-5 pb-[calc(16px+env(safe-area-inset-bottom))] pt-4 text-[16px] font-semibold leading-none text-White shadow-[0_-8px_24px_rgba(5,12,22,0.14)] transition-[filter] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>,
    container,
  )
}
