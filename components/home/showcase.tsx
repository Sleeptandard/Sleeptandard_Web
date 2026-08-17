import Image from 'next/image'
import { Feather, BatteryCharging, Waves, ShieldCheck } from 'lucide-react'

const FEATURES = [
  {
    icon: Feather,
    title: '초경량 패치',
    desc: '3g 남짓의 가벼운 무게로 붙인 걸 잊을 만큼 편안합니다.',
  },
  {
    icon: Waves,
    title: '무음 진동 기상',
    desc: '옆 사람을 깨우지 않는 미세 진동으로 나만 깨어납니다.',
  },
  {
    icon: BatteryCharging,
    title: '7일 연속 사용',
    desc: '한 번 충전으로 일주일. 매일 밤 신경 쓸 필요가 없습니다.',
  },
  {
    icon: ShieldCheck,
    title: '온디바이스 분석',
    desc: '수면 데이터는 기기 안에서 처리되어 안전하게 보호됩니다.',
  },
]

export function Showcase() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Why 알람의 정석
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            작지만, 아침을 바꾸는 기술
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            거창한 기기도, 복잡한 설정도 필요 없습니다. 손톱만 한 패치 하나가
            당신의 수면을 이해하고 하루의 시작을 바꿉니다.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card/40 p-5"
              >
                <f.icon
                  className="h-5 w-5 text-accent"
                  aria-hidden="true"
                />
                <h3 className="mt-3 font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/patch-closeup.png"
              alt="어두운 배경 위에 놓인 소형 웨어러블 알람 패치 클로즈업"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
