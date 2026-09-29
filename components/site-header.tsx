'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/product', label: 'Product' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
  { href: '/apply', label: 'Apply' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollTop = useRef(0)
  const lastTouchY = useRef<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
    lastScrollTop.current = 0
  }, [pathname])

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const target = event.target
      const currentScrollTop =
        target instanceof Element
          ? target.scrollTop
          : Math.max(
              window.scrollY,
              document.documentElement.scrollTop,
              document.body.scrollTop,
            )
      const difference = currentScrollTop - lastScrollTop.current

      if (currentScrollTop <= 8) {
        setIsVisible(true)
      } else if (Math.abs(difference) >= 8) {
        if (!open) {
          setIsVisible(difference < 0)
        }
        lastScrollTop.current = currentScrollTop
      }
    }

    const handleTouchStart = (event: TouchEvent) => {
      lastTouchY.current = event.touches[0]?.clientY ?? null
    }

    const handleTouchMove = (event: TouchEvent) => {
      const currentTouchY = event.touches[0]?.clientY
      const previousTouchY = lastTouchY.current

      if (currentTouchY === undefined || previousTouchY === null) return

      const difference = previousTouchY - currentTouchY
      if (Math.abs(difference) >= 12) {
        if (!open) {
          setIsVisible(difference < 0)
        }
        lastTouchY.current = currentTouchY
      }
    }

    const handleTouchEnd = () => {
      lastTouchY.current = null
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('scroll', handleScroll, true)
    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll, true)
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [open])

  return (
    <header
      className={cn(
        'site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-Key transition-transform duration-300 ease-out',
        isVisible ? 'translate-y-0' : '-translate-y-full',
      )}
      style={{ colorScheme: 'only light' }}
    >
      <div className="site-header-inner mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label="Sleeptandard 홈"
        >
          <Image
            src="/images/logo/logo_with_background.png"
            alt=""
            width={256}
            height={70}
            priority
            draggable={false}
            aria-hidden="true"
            className="block h-auto w-32 object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:text-white',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          className="border-t border-white/10 bg-KeyReal px-5 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                    active
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:bg-white/5 hover:text-white',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}

          </nav>
        </div>
      )}
    </header>
  )
}
