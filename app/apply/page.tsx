'use client'

import { useState } from 'react'

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the data to a backend or service.
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-xl px-5">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            사전 신청하기
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            베타테스터 신청 및 뉴스레터 구독을 통해 정식 출시 소식을 가장 먼저 받아보세요.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-border/50 bg-secondary/20 p-6 sm:p-10">
          {submitted ? (
            <div className="text-center py-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500 mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">신청이 완료되었습니다!</h2>
              <p className="mt-2 text-muted-foreground">
                Sleeptandard에 관심을 가져주셔서 감사합니다. 새로운 소식으로 찾아뵙겠습니다.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-sm font-medium text-primary hover:underline"
              >
                다른 정보로 다시 제출하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">이름</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="홍길동"
                />
              </div>
              
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">이메일</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="hello@example.com"
                />
              </div>
              
              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm font-medium">전화번호</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="010-0000-0000"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <label htmlFor="gender" className="text-sm font-medium">성별</label>
                  <select
                    id="gender"
                    required
                    className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="" disabled selected>선택해주세요</option>
                    <option value="male">남성</option>
                    <option value="female">여성</option>
                    <option value="other">기타</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="birthdate" className="text-sm font-medium">생년월일</label>
                  <input
                    id="birthdate"
                    type="date"
                    required
                    className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 flex h-12 w-full items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                신청 완료하기
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
