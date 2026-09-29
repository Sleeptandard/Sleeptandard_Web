'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type RevealName = 'hero' | 'team-message' | 'team-photo'

// Persist through client-side navigation, but reset on a full page reload.
const playedReveals = new Set<RevealName>()

export function HomeRevealSection({
  name,
  className,
  children,
}: {
  name: RevealName
  className: string
  children: ReactNode
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || startedRef.current) return

    const reveal = (skipAnimation = false) => {
      startedRef.current = true
      section.dataset.homeRevealState = skipAnimation ? 'complete' : 'playing'
      playedReveals.add(name)
    }

    if (playedReveals.has(name) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveal(true)
      return
    }

    if (name === 'hero') {
      reveal()
      return
    }

    const checkPosition = () => {
      if (startedRef.current) return

      const bounds = section.getBoundingClientRect()
      const viewportHeight = document.documentElement.clientHeight
      const centerDistance = Math.abs(bounds.top + bounds.height / 2 - viewportHeight / 2)
      const nearby = centerDistance <= viewportHeight * 0.25
      // Tall sections can stop anywhere while they fill the snap viewport.
      const fillsViewport = bounds.top <= 1 && bounds.bottom >= viewportHeight - 1

      if (nearby || fillsViewport) {
        reveal()
        stopWatching()
      }
    }

    const resizeObserver = new ResizeObserver(checkPosition)
    const stopWatching = () => {
      document.removeEventListener('scroll', checkPosition)
      window.removeEventListener('resize', checkPosition)
      window.removeEventListener('pageshow', checkPosition)
      resizeObserver.disconnect()
    }

    // Start during scrolling as the section approaches the viewport center.
    document.addEventListener('scroll', checkPosition, { passive: true })
    window.addEventListener('resize', checkPosition, { passive: true })
    window.addEventListener('pageshow', checkPosition)
    resizeObserver.observe(section)
    checkPosition()

    return stopWatching
  }, [name])

  return (
    <section ref={sectionRef} className={className} data-home-reveal-state="pending">
      {children}
      <noscript>
        <style>{`.home-reveal-target { opacity: 1 !important; transform: none !important; animation: none !important; } .home-hero-dot { left: calc(100% - 5px) !important; }`}</style>
      </noscript>
    </section>
  )
}
