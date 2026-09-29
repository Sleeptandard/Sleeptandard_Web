'use client'

import { useEffect, useRef, type ReactNode } from 'react'

// A new document (refresh) resets playback; route changes don't.
const playedReveals = new Set<string>()

export function ScrollReveal({
  name,
  anchorSelector,
  className,
  children,
}: {
  name: string
  anchorSelector?: string
  className: string
  children: ReactNode
}) {
  const groupRef = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const group = groupRef.current
    if (!group || startedRef.current) return
    const anchor = anchorSelector ? group.querySelector(anchorSelector) : group
    if (!anchor) return

    const reveal = (skipAnimation = false) => {
      startedRef.current = true
      group.dataset.scrollRevealState = skipAnimation ? 'complete' : 'playing'
      playedReveals.add(name)
    }

    if (playedReveals.has(name) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveal(true)
      return
    }

    const checkPosition = () => {
      if (startedRef.current) return
      const bounds = anchor.getBoundingClientRect()
      const viewportHeight = document.documentElement.clientHeight
      const nearCenter = Math.abs(bounds.top + bounds.height / 2 - viewportHeight / 2) <= viewportHeight * 0.25
      const fillsViewport = bounds.top <= 1 && bounds.bottom >= viewportHeight - 1
      if (nearCenter || fillsViewport) {
        reveal()
        stopWatching()
      }
    }

    const observer = new ResizeObserver(checkPosition)
    const stopWatching = () => {
      document.removeEventListener('scroll', checkPosition)
      window.removeEventListener('resize', checkPosition)
      window.removeEventListener('pageshow', checkPosition)
      observer.disconnect()
    }

    document.addEventListener('scroll', checkPosition, { passive: true })
    window.addEventListener('resize', checkPosition, { passive: true })
    window.addEventListener('pageshow', checkPosition)
    observer.observe(group)
    observer.observe(anchor)
    checkPosition()
    return stopWatching
  }, [name, anchorSelector])

  return (
    <div ref={groupRef} className={className} data-scroll-reveal-state="pending">
      {children}
      <noscript>
        <style>{`.scroll-reveal-item { opacity: 1 !important; transform: none !important; animation: none !important; }`}</style>
      </noscript>
    </div>
  )
}
