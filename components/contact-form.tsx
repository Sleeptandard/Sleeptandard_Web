'use client'

import { useState } from 'react'
import { Check, Loader2 } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
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
          문의가 접수되었어요
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
          빠른 시일 내에 입력하신 이메일로 답변드리겠습니다. 소중한 의견
          감사합니다.
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
        <div>
          <label htmlFor="c-name" className="mb-2 block text-sm font-medium">
            이름
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            required
            placeholder="홍길동"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="c-email" className="mb-2 block text-sm font-medium">
            이메일
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="c-subject" className="mb-2 block text-sm font-medium">
          제목
        </label>
        <input
          id="c-subject"
          name="subject"
          type="text"
          required
          placeholder="문의 제목을 입력해 주세요"
          className={inputClass}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="c-message" className="mb-2 block text-sm font-medium">
          내용
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          required
          placeholder="문의하실 내용을 자세히 적어주세요."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            보내는 중...
          </>
        ) : (
          '문의 보내기'
        )}
      </button>
    </form>
  )
}

const inputClass =
  'w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary'
