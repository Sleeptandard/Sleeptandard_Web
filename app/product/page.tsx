import Image from 'next/image'
import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CtaBanner } from '@/components/cta-banner'
import { HeartPulse, Wind, Moon, Vibrate } from 'lucide-react'

export const metadata: Metadata = {
  title: '제품 | Sleeptandard',
  description:
    '수면 중 생체 신호를 측정하고 최적의 기상 타이밍을 찾아주는 웨어러블 알람 패치의 스펙과 기능을 소개합니다.',
}

const SENSORS = [
  {
    icon: HeartPulse,
    title: '심박 변이도(HRV)',
    desc: '심박의 미세한 변화로 자율신경 상태와 수면 깊이를 추정합니다.',
  },
  {
    icon: Wind,
    title: '호흡 리듬',
    desc: '분당 호흡수와 규칙성을 측정해 렘수면 구간을 정밀하게 감지합니다.',
  },
  {
    icon: Moon,
    title: '미세 움직임',
    desc: '고감도 가속도 센서로 뒤척임과 각성 신호를 포착합니다.',
  },
  {
    icon: Vibrate,
    title: '스마트 진동',
    desc: '얕은 수면 구간에 진입하면 점진적으로 세지는 진동으로 깨웁니다.',
  },
]

const SPECS = [
  { label: '무게', value: '약 3g' },
  { label: '크기', value: '18 × 22 × 4 mm' },
  { label: '배터리', value: '연속 7일 사용' },
  { label: '충전', value: 'USB-C · 40분 완충' },
  { label: '방수 등급', value: 'IP67 생활 방수' },
  { label: '연결', value: 'Bluetooth 5.3' },
]

export default function ProductPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title="손톱만 한 패치, 밤새 켜진 수면 연구소"
        description="Sleeptandard는 붙이고 자는 것만으로 수면 데이터를 수집해, 매일 아침 당신에게 딱 맞는 기상 타이밍을 계산합니다."
      />

      {/* Sensor grid */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/patch-closeup.png"
              alt="웨어러블 알람 패치 클로즈업"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight">
              4가지 신호로 읽는 수면
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              하나의 패치 안에 정밀 센서를 담았습니다. 각 신호를 종합해 지금이
              깊은 잠인지, 깨어나기 좋은 순간인지 판단합니다.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {SENSORS.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-border bg-card/40 p-5"
                >
                  <s.icon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  <h3 className="mt-3 font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Specifications
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight">
              가볍게, 오래, 신경 쓸 필요 없이
            </h2>
          </div>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SPECS.map((spec) => (
              <div key={spec.label} className="bg-background p-6">
                <dt className="text-sm text-muted-foreground">{spec.label}</dt>
                <dd className="mt-2 font-display text-2xl font-semibold">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="pt-24" />
      <CtaBanner />
    </>
  )
}
