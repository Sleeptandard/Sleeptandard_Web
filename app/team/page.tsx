import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CtaBanner } from '@/components/cta-banner'
import { Target, Users, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Team | 알람의 정석',
  description:
    '더 나은 아침을 만드는 사람들, 슬립텐다드(Sleeptandard) 팀을 소개합니다.',
}

const VALUES = [
  {
    icon: Target,
    title: '데이터로 증명합니다',
    desc: '감이 아닌 수면 과학과 데이터로 모든 판단을 검증합니다.',
  },
  {
    icon: Users,
    title: '사용자의 아침을 우선합니다',
    desc: '화려한 기능보다 매일의 작은 개운함을 먼저 생각합니다.',
  },
  {
    icon: Sparkles,
    title: '단순함을 고집합니다',
    desc: '붙이고 자면 끝. 복잡함은 우리가 대신 짊어집니다.',
  },
]

const MEMBERS = [
  {
    name: '김수면',
    role: 'CEO · 대표',
    initials: 'SM',
    bio: '수면 헬스케어 5년. 모두의 개운한 아침을 만드는 일에 진심입니다.',
  },
  {
    name: '이하드',
    role: 'CTO · 하드웨어',
    initials: 'HD',
    bio: '초소형 웨어러블 센서 설계 전문. 3g의 패치를 현실로 만듭니다.',
  },
  {
    name: '박알고',
    role: 'AI 리드 · 수면 분석',
    initials: 'AI',
    bio: '온디바이스 수면 단계 분석 알고리즘을 연구하고 개발합니다.',
  },
  {
    name: '최디자',
    role: 'Product Designer',
    initials: 'PD',
    bio: '기기부터 앱까지, 편안한 경험을 설계하는 디자이너입니다.',
  },
]

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="더 나은 아침을 만드는 사람들"
        description="슬립텐다드(Sleeptandard)는 수면 과학자, 하드웨어 엔지니어, AI 연구자, 디자이너가 모여 매일의 기상을 다시 설계합니다."
      />

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="rounded-3xl border border-border bg-card/40 p-8 md:p-14">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Our mission
          </p>
          <p className="mt-5 text-balance font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            &ldquo;누구나 알람 소리에 놀라 깨지 않고, 몸이 준비된 순간에
            자연스럽게 눈뜨는 아침.&rdquo; 우리는 그 당연한 하루를 기술로
            만듭니다.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-background/60 p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 ring-1 ring-primary/25">
                <v.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Members */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight">
            팀 멤버
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MEMBERS.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-border bg-background/60 p-7"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
                  <span className="font-display text-lg font-semibold text-primary">
                    {m.initials}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{m.name}</h3>
                <p className="mt-0.5 text-sm font-medium text-accent">
                  {m.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-24" />
      <CtaBanner />
    </>
  )
}
