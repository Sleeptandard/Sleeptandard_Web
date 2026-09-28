'use client'

import { useEffect, useRef, type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

export function FixedSubmitButton({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'button'>) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    const footer = document.querySelector<HTMLElement>('footer')
    if (!button || !footer) return

    let frame = 0
    let currentOffset = 0

    const updatePosition = () => {
      frame = 0
      const fixedBottom = button.getBoundingClientRect().bottom + currentOffset
      const footerTop = footer.getBoundingClientRect().top
      currentOffset = Math.max(0, fixedBottom - footerTop)
      button.style.transform = `translate3d(0, -${currentOffset}px, 0)`
    }

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updatePosition)
    }

    const resizeObserver = new ResizeObserver(scheduleUpdate)
    resizeObserver.observe(footer)
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    updatePosition()

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [])

  return (
    <button
      ref={buttonRef}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 flex min-h-[60px] w-full items-center justify-center gap-2 bg-KeyReal px-5 pb-[calc(16px+env(safe-area-inset-bottom))] pt-4 text-[16px] font-semibold leading-none text-White shadow-[0_-8px_24px_rgba(5,12,22,0.14)] transition-[filter] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
