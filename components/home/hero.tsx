import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 md:pt-40">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              수면 상태 기반 웨어러블 알람 패치
            </span>

            <h1 className="mt-6 text-pretty font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              최적의 기상 타이밍으로
              <br />
              <span className="text-primary">무조건 개운한</span> 아침
            </h1>

            <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              실시간으로 수면 중 생체 신호를 분석해, 가장 얕은 수면 구간에서
              당신을 부드럽게 깨워드릴게요.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/apply"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                사전 신청하기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                더 알아보기
              </Link>
            </div>
          </div>

          <div className="animate-rise [animation-delay:120ms]">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
              <Image
                src="/images/hero-patch.png"
                alt="손에 들려 있는 두 개의 소형 웨어러블 알람 패치"
                width={1024}
                height={1024}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
