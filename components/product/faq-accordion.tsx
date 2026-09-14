'use client'

import { useState } from 'react'
import { Plus, Minus, Search } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const FAQ_LIST: FAQItem[] = [
  {
    question: '항상 설정 시간보다 일찍 일어나게 되나요?',
    answer:
      '아닙니다. 사용자가 설정한 기상 시간(예: 오전 7시)을 초과하지 않으며, 설정 시간 직전 최대 15분 구간(예: 6시 45분 ~ 7시 00분) 내에서 신체가 가장 깨어나기 쉬운 얕은 수면과 높은 각성도 타이밍을 찾아 깨워드립니다. 만약 해당 구간 내에 최적의 각성 시점이 오지 않더라도 사용자가 지정한 정각에는 반드시 알람이 울려 늦잠 걱정 없이 안전하게 기상할 수 있습니다.',
  },
  {
    question: '스마트워치나 다른 수면 측정 앱과는 무엇이 다른가요?',
    answer:
      '일반 스마트워치는 손목의 움직임이나 단순 광학 심박 위주로 수면을 사후 분석하는 반면, 알람의 정석은 5g 초경량 웨어러블 디바이스를 흉부/쇄골 부근에 부착하여 심박, 심박변이도(HRV), 맥파, 호흡, 체온, 미세 움직임 등 다중 생체 신호를 실시간 정밀 측정합니다. 사후 리포트 전달에 그치지 않고, 3대 각성 지표를 자체 알고리즘으로 연산해 실시간 최적의 기상 골든타임에 사용자를 직접 깨워주는 혁신적인 솔루션입니다.',
  },
  {
    question: '최적의 기상 타이밍 알람이 정말 더 개운하게 깨워주나요?',
    answer:
      '네. 깊은 수면 단계(서파 수면)에서 억지로 깨어나면 뇌와 신체가 바로 활성화되지 못하는 수면 관성(Sleep Inertia)으로 인해 하루 종일 몽롱하고 피곤한 상태가 지속됩니다. 알람의 정석은 얕은 수면과 높은 각성도가 교차하는 순간에 부드럽게 깨워 수면 관성을 최소화하므로, 같은 시간을 자더라도 몸과 뇌가 즉시 활동할 수 있는 상쾌한 아침을 경험할 수 있습니다.',
  },
  {
    question: '알람 울릴 수 있는 15분 동안만 수면 분석이 진행되나요?',
    answer:
      '아닙니다. 잠자리에 드는 순간부터 밤새 실시간으로 4class 수면 단계와 생체 신호의 변화를 지속적으로 모니터링합니다. 밤새 축적된 개인별 생체 기준치와 수면 패턴을 종합하여, 기상 예정 15분 구간에서 가장 확실하고 안전한 최적의 타이밍을 판단하게 됩니다. 또한 사용할수록 개인 맞춤형 알고리즘이 고도화됩니다.',
  },
]

export function ProductFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="mx-auto w-full max-w-xl space-y-3">
      {FAQ_LIST.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl border border-sky-600/30 bg-gradient-to-r from-[#0d426d] to-[#073052] shadow-lg shadow-sky-950/20 transition-all duration-200"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition hover:brightness-110 active:scale-[0.99]"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <Search className="h-4 w-4 shrink-0 text-sky-300" />
                <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
                  {item.question}
                </span>
              </div>
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-transform">
                {isOpen ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </div>
            </button>

            {isOpen && (
              <div className="border-t border-sky-500/20 bg-[#05213b]/80 px-5 py-4 text-xs leading-relaxed text-slate-200 sm:text-sm">
                {item.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
