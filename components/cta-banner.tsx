import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-border">
        <Image
          src="/images/morning.png"
          alt="커튼 사이로 들어오는 부드러운 아침 햇살"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="relative px-8 py-16 md:px-14 md:py-20">
          <h2 className="max-w-lg text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            내일 아침, 알람 없이 개운하게
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            지금 사전 신청하면 정식 출시 소식과 얼리버드 혜택을 가장 먼저
            받아보실 수 있습니다.
          </p>
          <Link
            href="/apply"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            사전 신청하기
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
