import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* 1. Hero Section */}
      <section className="relative flex h-screen w-full snap-start flex-col items-center justify-center bg-background px-5 pt-16">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/4 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
        />
        <div className="relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            수면 상태 기반 웨어러블 알람 패치
          </span>
          <h1 className="mt-4 text-pretty font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
            가장 개운한 아침의 시작,<br />
            <span className="text-primary">Sleeptandard</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-balance text-lg leading-relaxed text-muted-foreground">
            우리는 수면 데이터를 분석하여 강제 기상이 아닌, 당신의 몸이 가장 깨어나기 좋은 완벽한 타이밍을 찾아냅니다.
          </p>
        </div>
      </section>

      {/* 2. Product Summary Section */}
      <section className="flex h-screen w-full snap-start flex-col items-center justify-center bg-secondary/30 px-5 pt-16">
        <div className="max-w-4xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Product
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            수면 리듬에 맞춘 웨어러블 패치
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            이마에 붙이고 주무시기만 하면 됩니다. 뇌파와 생체 신호를 실시간으로 모니터링하여, 설정한 시간대 내에서 수면이 가장 얕아졌을 때 부드러운 진동으로 깨워드립니다.
          </p>
          <Link
            href="/product"
            className="mt-8 group inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Product 자세히 보기
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* 3. Team Summary Section */}
      <section className="flex h-screen w-full snap-start flex-col items-center justify-center bg-background px-5 pt-16">
        <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative w-full overflow-hidden rounded-3xl border border-border/50 shadow-2xl bg-secondary/10 flex items-center justify-center">
            <Image
              src="/images/team/team6.jpg"
              alt="Sleeptandard Team"
              width={1200}
              height={900}
              className="w-full h-auto object-contain rounded-3xl"
            />
          </div>
          <div className="text-left">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Team
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              전문성과 열정을 갖춘 팀
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              수면 공학, 하드웨어 엔지니어링, 소프트웨어 개발 분야의 전문가 5인이 모여 더 나은 아침을 만들기 위해 치열하게 고민하고 연구합니다.
            </p>
            <Link
              href="/team"
              className="mt-6 group inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Sleeptandard 팀 만나보기
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Contact Summary Section */}
      <section className="flex h-screen w-full snap-start flex-col items-center justify-center bg-secondary/30 px-5 pt-16">
        <div className="max-w-4xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            협력과 소통을 환영합니다
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            제휴, 투자, 제품 관련 문의 사항이 있으시다면 언제든 편하게 연락해 주세요.
          </p>
          <Link
            href="/contact"
            className="mt-8 group inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Contact 정보 보기
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* 5. Apply Summary Section */}
      <section className="flex h-screen w-full snap-start flex-col items-center justify-center bg-background px-5 pt-16">
        <div className="max-w-4xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Apply
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            가장 먼저 경험해 보세요
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            베타테스터 신청 및 뉴스레터를 구독하고 Sleeptandard의 정식 출시 소식과 한정 얼리버드 혜택을 누구보다 빠르게 받아보세요.
          </p>
          <Link
            href="/apply"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            사전 신청하기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
