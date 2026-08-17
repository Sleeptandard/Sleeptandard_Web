import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { Mail, Building2, Clock, Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | Sleeptandard',
  description:
    '슬립텐다드(Sleeptandard)에 궁금한 점을 문의하세요. 제휴, 투자, 언론 문의를 환영합니다.',
}

const INFO = [
  {
    icon: Building2,
    label: '상호명',
    value: '슬립텐다드 (Sleeptandard)',
  },
  {
    icon: Mail,
    label: '이메일',
    value: 'sleeptandard@gmail.com',
    href: 'mailto:sleeptandard@gmail.com',
  },
  {
    icon: Clock,
    label: '응답 시간',
    value: '평일 10:00 – 18:00 (KST)',
  },
  {
    icon: Camera,
    label: '인스타그램',
    value: '@sleeptandard',
    href: 'https://instagram.com',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="무엇이든 물어보세요"
        description="제품에 대한 궁금증부터 제휴·투자·언론 문의까지, 슬립텐다드 팀이 정성껏 답변드리겠습니다."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-balance font-display text-2xl font-bold tracking-tight">
              연락처
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              {INFO.map((item) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-primary/40">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 ring-1 ring-primary/25">
                      <item.icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-0.5 font-medium">{item.value}</p>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
