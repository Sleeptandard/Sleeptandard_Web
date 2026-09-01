import { Metadata } from 'next'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | Sleeptandard',
  description: 'Sleeptandard 문의하기',
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen items-center justify-center pt-16 pb-16">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-4 text-lg text-muted-foreground">
          제휴, 투자, 기타 문의 사항은 아래 이메일로 연락해 주시면 빠르게 답변해 드리겠습니다.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="mailto:contact@sleeptandard.com"
            className="group flex flex-col items-center gap-4 rounded-3xl border border-border/50 bg-secondary/20 px-8 py-12 transition-all hover:bg-secondary/40 hover:scale-105"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">이메일 문의</p>
              <p className="mt-1 font-display text-2xl font-bold tracking-tight text-foreground">
                contact@sleeptandard.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}
