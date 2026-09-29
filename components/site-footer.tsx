import Link from 'next/link'
import { Mail } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="site-footer-inner mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-semibold tracking-tight">
                Sleeptandard
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol
              title="제품"
              links={[
                { href: '/product', label: '제품 소개' },
                { href: '/apply', label: '사전 신청' },
              ]}
            />
            <FooterCol
              title="회사"
              links={[
                { href: '/team', label: '팀 소개' },
                { href: '/contact', label: '문의하기' },
              ]}
            />
            <div>
              <h3 className="text-sm font-semibold text-foreground">연결</h3>
              <div className="mt-4 flex gap-3">
                <a
                  href="mailto:contact@sleeptandard.com"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="이메일"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/sleeptandard?stkn=a25kaHE2enMxdGRw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="인스타그램"
                >
                  <span
                    aria-hidden="true"
                    className="h-5 w-5 bg-current"
                    style={{
                      WebkitMask: 'url(/ui/ui_instagram.svg) center / contain no-repeat',
                      mask: 'url(/ui/ui_instagram.svg) center / contain no-repeat',
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p>상호명: 슬립텐다드(Sleeptandard)</p>
            <p>대표 이메일: contact@sleeptandard.com</p>
          </div>
          <p>Copyright &copy; 2026 Sleeptandard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  links,
}: {
  title: string
  links: { href: string; label: string }[]
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
