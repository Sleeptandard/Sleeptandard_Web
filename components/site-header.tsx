'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
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
  const useDarkHeader =
    pathname === '/' ||
    pathname.startsWith('/team') ||
    pathname.startsWith('/apply')

  const headerGradient = useDarkHeader
    ? 'linear-gradient(135deg, rgba(5, 12, 22, 0.6) 0%, rgba(4, 47, 86, 0.8) 100%)'
    : 'linear-gradient(135deg, rgba(245, 245, 245, 0.6) 0%, rgba(245, 245, 245, 0.8) 100%)'

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl',
        useDarkHeader ? 'border-white/10' : 'border-[#042F56]/10',
      )}
      style={{ backgroundImage: headerGradient }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label="Sleeptandard 홈"
        >
          <span
            aria-hidden="true"
            className={cn(
              'block h-[37px] w-32 transition-colors',
              useDarkHeader ? 'bg-white' : 'bg-[#042F56]',
            )}
            style={{
              WebkitMaskImage: 'url(/images/logo/logo.svg)',
              maskImage: 'url(/images/logo/logo.svg)',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
            }}
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
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  useDarkHeader
                    ? active
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:text-white'
                    : active
                      ? 'bg-[#042F56]/10 text-[#042F56]'
                      : 'text-[#042F56]/70 hover:text-[#042F56]',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          {/* Apply button is now part of the nav links or we can keep it as a highlighted CTA. I'll remove it since user requested 4 items. */}
        </div>

        <button
          type="button"
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full md:hidden',
            useDarkHeader ? 'text-white' : 'text-[#042F56]',
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          className={cn(
            'border-t px-5 py-4 backdrop-blur-xl md:hidden',
            useDarkHeader
              ? 'border-white/10 bg-[#050C16]/95'
              : 'border-[#042F56]/10 bg-[#F5F5F5]/95',
          )}
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
                    useDarkHeader
                      ? active
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                      : active
                        ? 'bg-[#042F56]/10 text-[#042F56]'
                        : 'text-[#042F56]/70 hover:bg-[#042F56]/5 hover:text-[#042F56]',
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
