import { Activity, BrainCircuit, Sunrise } from 'lucide-react'

const STEPS = [
  {
    icon: Activity,
    step: 'STEP 1',
    title: '생체 신호 측정',
    desc: '패치를 부착하고 잠들면 심박, 호흡, 미세 움직임을 밤새 실시간으로 측정합니다.',
  },
  {
    icon: BrainCircuit,
    step: 'STEP 2',
    title: '수면 단계 분석',
    desc: '온디바이스 AI가 얕은 잠·깊은 잠·렘수면을 구분해 지금의 수면 단계를 판단합니다.',
  },
  {
    icon: Sunrise,
    step: 'STEP 3',
    title: '최적 타이밍 기상',
    desc: '설정한 시간 범위 안에서 가장 얕은 수면 구간을 찾아 진동으로 부드럽게 깨웁니다.',
  },
]

export function HowItWorks() {
  return (
    <section className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            잠에서 깨는 순간까지, 데이터로 설계합니다
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            알람의 정석은 정해진 시간에 억지로 깨우지 않습니다. 당신의 수면
            리듬을 읽고, 가장 일어나기 좋은 순간을 스스로 찾아냅니다.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="group relative rounded-2xl border border-border bg-background/60 p-7 transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 ring-1 ring-primary/25">
                <s.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <p className="mt-6 font-display text-xs font-semibold tracking-widest text-muted-foreground">
                {s.step}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
