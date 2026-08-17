'use client'

import { useState } from 'react'
import { Check, Loader2 } from 'lucide-react'

const PLANS = [
  { id: 'single', label: '1개 (본인용)' },
  { id: 'pair', label: '2개 (커플·가족)' },
  { id: 'undecided', label: '아직 미정' },
]

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState('single')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate a request; wire to a backend/action when ready.
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card/40 p-8 text-center md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
          <Check className="h-7 w-7 text-primary" aria-hidden="true" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-bold">
          사전 신청이 완료되었어요
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
          정식 출시 소식과 얼리버드 혜택을 입력하신 이메일로 가장 먼저
          보내드릴게요. 개운한 아침을 기대해 주세요.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card/40 p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="이름" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="홍길동"
            className={inputClass}
          />
        </Field>
        <Field label="연락처" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="010-1234-5678"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="이메일" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-6">
        <span className="mb-2 block text-sm font-medium text-foreground">
          희망 수량
        </span>
        <div className="grid gap-2.5 sm:grid-cols-3">
          {PLANS.map((p) => {
            const active = plan === p.id
            return (
              <button
                type="button"
                key={p.id}
                onClick={() => setPlan(p.id)}
                aria-pressed={active}
                className={`rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                  active
                    ? 'border-primary bg-primary/12 text-foreground'
                    : 'border-border bg-background/60 text-muted-foreground hover:text-foreground'
                }`}
              >
                {p.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-5">
        <Field label="하고 싶은 말 (선택)" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="평소 기상 고민이나 기대하는 점을 알려주세요."
            className={`${inputClass} resize-none`}
          />
        </Field>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 rounded border-border accent-[oklch(0.66_0.15_264)]"
        />
        <span>
          개인정보 수집 및 이용에 동의합니다. (사전 신청 안내 목적)
        </span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            신청 중...
          </>
        ) : (
          '사전 신청 완료하기'
        )}
      </button>
    </form>
  )
}

const inputClass =
  'w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
