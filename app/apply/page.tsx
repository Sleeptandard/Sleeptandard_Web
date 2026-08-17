import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ApplyForm } from '@/components/apply-form'
import { Gift, Bell, Percent } from 'lucide-react'

export const metadata: Metadata = {
  title: '신청하기 | 알람의 정석',
  description:
    '알람의 정석 사전 신청. 정식 출시 소식과 얼리버드 혜택을 가장 먼저 받아보세요.',
}

const PERKS = [
  {
    icon: Percent,
    title: '얼리버드 할인',
    desc: '정식 출시가 대비 최대 30% 할인된 가격으로 만나보세요.',
  },
  {
    icon: Bell,
    title: '출시 우선 알림',
    desc: '가장 먼저 출시 소식과 구매 링크를 받아보실 수 있어요.',
  },
  {
    icon: Gift,
    title: '한정 사은품',
    desc: '사전 신청자에게만 드리는 전용 충전 파우치를 증정합니다.',
  },
]

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pre-order"
        title="가장 먼저 개운한 아침을"
        description="알람의 정석은 지금 사전 신청을 받고 있습니다. 아래 정보를 남겨주시면 출시 소식과 얼리버드 혜택을 순차적으로 안내해 드릴게요."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-balance font-display text-2xl font-bold tracking-tight">
              사전 신청 혜택
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {PERKS.map((p) => (
                <div
                  key={p.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card/40 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/30">
                    <p.icon
                      className="h-5 w-5 text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <ApplyForm />
          </div>
        </div>
      </section>
    </>
  )
}
