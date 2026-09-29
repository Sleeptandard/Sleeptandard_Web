'use client'

import { useEffect, useRef, type HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

interface PageScrollContainerProps extends HTMLAttributes<HTMLDivElement> {
  'data-team-scroll'?: string
}

export function PageScrollContainer({
  children,
  className,
  ...props
}: PageScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let lastTouchY: number | null = null

    const movePageAtContentBoundary = (deltaY: number) => {
      const pageScrollTop = window.scrollY
      const contentAtBottom =
        container.scrollHeight - container.clientHeight - container.scrollTop <= 2

      if (deltaY > 0) {
        if (pageScrollTop <= 0 && !contentAtBottom) return false

        window.scrollBy({ top: deltaY, behavior: 'auto' })
        return true
      }

      if (deltaY >= 0 || pageScrollTop <= 0) return false

      const pageDelta = Math.max(deltaY, -pageScrollTop)
      const containerDelta = deltaY - pageDelta

      window.scrollBy({ top: pageDelta, behavior: 'auto' })

      if (containerDelta < 0) {
        container.scrollTop += containerDelta
      }

      return true
    }

    const handleWheel = (event: WheelEvent) => {
      const multiplier =
        event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? window.innerHeight
            : 1

      if (movePageAtContentBoundary(event.deltaY * multiplier)) {
        event.preventDefault()
      }
    }

    const handleTouchStart = (event: TouchEvent) => {
      lastTouchY = event.touches[0]?.clientY ?? null
    }

    const handleTouchMove = (event: TouchEvent) => {
      const currentTouchY = event.touches[0]?.clientY
      if (currentTouchY === undefined || lastTouchY === null) return

      const deltaY = lastTouchY - currentTouchY
      lastTouchY = currentTouchY

      if (movePageAtContentBoundary(deltaY) && event.cancelable) {
        event.preventDefault()
      }
    }

    const handleTouchEnd = () => {
      lastTouchY = null
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })
    container.addEventListener('touchcancel', handleTouchEnd, { passive: true })

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
      container.removeEventListener('touchcancel', handleTouchEnd)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn(className)} {...props}>
      {children}
    </div>
  )
}
