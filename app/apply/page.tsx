'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Sparkles,
  Users,
  Calendar,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type ApplyView =
  | 'hub'
  | 'newsletter'
  | 'newsletter_done'
  | 'betatest'
  | 'betatest_done'

export default function ApplyPage() {
  const [view, setView] = useState<ApplyView>('hub')

  // Newsletter Form State
  const [nlForm, setNlForm] = useState({ name: '', email: '' })
  const [nlPrivacyAgreed, setNlPrivacyAgreed] = useState(false)
  const [nlMarketingAgreed, setNlMarketingAgreed] = useState(false)
  const [nlError, setNlError] = useState('')
  const [nlSubmitting, setNlSubmitting] = useState(false)

  // Beta Test Form State
  const [betaForm, setBetaForm] = useState({ name: '', phone: '' })
  const [betaPrivacyAgreed, setBetaPrivacyAgreed] = useState(false)
  const [betaError, setBetaError] = useState('')
  const [betaSubmitting, setBetaSubmitting] = useState(false)

  // Newsletter Submit Handler
  const handleNlSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!nlForm.name.trim()) {
      setNlError('이름을 입력해주세요.')
      return
    }
    if (!nlForm.email.trim() || !nlForm.email.includes('@')) {
      setNlError('올바른 이메일 주소를 입력해주세요.')
      return
    }
    if (!nlPrivacyAgreed) {
      setNlError('개인정보 수집 및 이용에 동의해주세요.')
      return
    }
    if (!nlMarketingAgreed) {
      setNlError('광고성 정보 수신에 동의해주세요.')
      return
    }

    setNlSubmitting(true)
    setNlError('')

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: '뉴스레터',
          name: nlForm.name,
          email: nlForm.email,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || '신청 접수에 실패했습니다. 다시 시도해주세요.')
      }

      setView('newsletter_done')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err: unknown) {
      if (err instanceof Error) {
        setNlError(err.message)
      } else {
        setNlError('오류가 발생했습니다. 다시 시도해주세요.')
      }
    } finally {
      setNlSubmitting(false)
    }
  }

  // Beta Test Submit Handler
  const handleBetaSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!betaForm.name.trim()) {
      setBetaError('이름을 입력해주세요.')
      return
    }
    if (!betaForm.phone.trim()) {
      setBetaError('전화번호를 입력해주세요.')
      return
    }
    if (!betaPrivacyAgreed) {
      setBetaError('개인정보 수집 및 이용에 동의해주세요.')
      return
    }

    setBetaSubmitting(true)
    setBetaError('')

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: '베타테스트',
          name: betaForm.name,
          phone: betaForm.phone,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || '신청 접수에 실패했습니다. 다시 시도해주세요.')
      }

      setView('betatest_done')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err: unknown) {
      if (err instanceof Error) {
        setBetaError(err.message)
      } else {
        setBetaError('오류가 발생했습니다. 다시 시도해주세요.')
      }
    } finally {
      setBetaSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-28 pb-20 sm:pt-36 sm:pb-28 px-5">
      <div className="mx-auto max-w-xl">
        {/* ========================================================
            VIEW 1: Apply Hub (APPLY1_m.png)
            ======================================================== */}
        {view === 'hub' && (
          <div>
            {/* Header */}
            <div className="text-left">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#042f56] leading-tight">
                Sleeptandard와
                <br />
                함께 하는 방법
              </h1>
            </div>

            {/* Cards Container */}
            <div className="mt-10 sm:mt-12 space-y-6">
              {/* Card 1: Newsletter */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200/80 transition-all hover:shadow-md">
                <div className="flex items-center gap-5 sm:gap-6">
                  {/* Left 3D Asset */}
                  <div className="w-24 sm:w-28 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/images/apply/card1_newsletter_icon.png"
                      alt="개발 소식 뉴스레터"
                      width={340}
                      height={450}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  {/* Right Text */}
                  <div className="flex-1">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-[#042f56]">
                      개발 소식 뉴스레터
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      알람의 정석이 만들어지는 과정과 주요 업데이트 소식을
                      뉴스레터로 가장 먼저 받아보세요
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => {
                    setView('newsletter')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="mt-6 w-full h-13 rounded-full bg-[#042f56] text-white font-bold text-sm sm:text-base hover:bg-[#073f72] active:scale-[0.99] transition-all flex items-center justify-center"
                >
                  개발소식 받기
                </button>
              </div>

              {/* Card 2: Beta Test */}
              <div className="relative rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200/80 transition-all hover:shadow-md">
                {/* 2차 모집중 Badge */}
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold tracking-wider">
                    2차 모집중
                  </span>
                </div>

                <div className="flex items-center gap-5 sm:gap-6 pt-2">
                  {/* Left 3D Asset */}
                  <div className="w-24 sm:w-28 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/images/apply/card2_betatest_icon.png"
                      alt="무료 베타테스트 참여"
                      width={340}
                      height={450}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  {/* Right Text */}
                  <div className="flex-1 pr-16 sm:pr-20">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-[#042f56]">
                      무료 베타테스트 참여
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      알람의 정석을 무료로 직접 사용해보고, 더 나은 제품을 만드는
                      과정에 함께해주세요
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => {
                    setView('betatest')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="mt-6 w-full h-13 rounded-full bg-[#042f56] text-white font-bold text-sm sm:text-base hover:bg-[#073f72] active:scale-[0.99] transition-all flex items-center justify-center"
                >
                  참여 신청하기
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW 2: Newsletter Input Form (APPLY_Newsletter1_M.png)
            ======================================================== */}
        {view === 'newsletter' && (
          <div>
            {/* Back Button */}
            <button
              type="button"
              onClick={() => setView('hub')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-[#042f56] transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>함께 하는 방법으로 돌아가기</span>
            </button>

            {/* Header */}
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#042f56]">
                개발 소식 뉴스레터
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                알람의 정석이 개발되는 과정을 가장 먼저 만나보세요
              </p>
            </div>

            {/* Info Box: 이런 소식을 받아볼 수 있어요 */}
            <div className="mt-8 rounded-3xl bg-[#011c35] text-white p-6 sm:p-8 shadow-md">
              <h3 className="font-display text-sm sm:text-base font-bold text-sky-300">
                이런 소식을 받아볼 수 있어요
              </h3>
              <ul className="mt-5 space-y-3.5 text-xs sm:text-sm text-white/90">
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300 font-bold">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span>새로운 기능과 제품 개발 소식</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300 font-bold">
                    <Users className="h-4 w-4" />
                  </span>
                  <span>베타테스터 모집 및 참여 기회</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300 font-bold">
                    <Calendar className="h-4 w-4" />
                  </span>
                  <span>출시·펀딩 등 주요 일정</span>
                </li>
              </ul>
              <div className="mt-5 pt-4 border-t border-white/10 text-[11px] sm:text-xs text-white/60">
                새로운 소식이 있을 때 비정기적으로 발송됩니다
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleNlSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="nl-name"
                  className="block text-xs sm:text-sm font-bold text-slate-800 mb-2"
                >
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  id="nl-name"
                  type="text"
                  required
                  placeholder="이름을 입력해주세요"
                  value={nlForm.name}
                  onChange={(e) => {
                    setNlForm({ ...nlForm, name: e.target.value })
                    if (nlError) setNlError('')
                  }}
                  className="w-full h-13 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#042f56] focus:outline-none focus:ring-1 focus:ring-[#042f56] text-sm sm:text-base transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="nl-email"
                  className="block text-xs sm:text-sm font-bold text-slate-800 mb-2"
                >
                  이메일 <span className="text-red-500">*</span>
                </label>
                <input
                  id="nl-email"
                  type="email"
                  required
                  placeholder="개발 소식을 받아볼 이메일을 입력해주세요"
                  value={nlForm.email}
                  onChange={(e) => {
                    setNlForm({ ...nlForm, email: e.target.value })
                    if (nlError) setNlError('')
                  }}
                  className="w-full h-13 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#042f56] focus:outline-none focus:ring-1 focus:ring-[#042f56] text-sm sm:text-base transition-colors"
                />
              </div>

              {/* Consent 1: Privacy */}
              <div
                onClick={() => setNlPrivacyAgreed(!nlPrivacyAgreed)}
                className="flex items-center justify-between cursor-pointer select-none rounded-xl p-2 hover:bg-slate-200/50 transition-colors"
              >
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  [필수] 개인정보 수집 및 이용에 동의합니다
                </span>
                <button
                  type="button"
                  aria-checked={nlPrivacyAgreed}
                  role="checkbox"
                  className={cn(
                    'flex h-6 w-6 items-center justify-center rounded-md border transition-colors',
                    nlPrivacyAgreed
                      ? 'bg-[#042f56] border-[#042f56] text-white'
                      : 'border-slate-300 bg-white text-transparent'
                  )}
                >
                  <Check className="h-4 w-4 stroke-[3]" />
                </button>
              </div>

              {/* Consent 2: Marketing */}
              <div
                onClick={() => setNlMarketingAgreed(!nlMarketingAgreed)}
                className="flex items-center justify-between cursor-pointer select-none rounded-xl p-2 hover:bg-slate-200/50 transition-colors"
              >
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  [필수] 광고성 정보 수신 동의
                </span>
                <button
                  type="button"
                  aria-checked={nlMarketingAgreed}
                  role="checkbox"
                  className={cn(
                    'flex h-6 w-6 items-center justify-center rounded-md border transition-colors',
                    nlMarketingAgreed
                      ? 'bg-[#042f56] border-[#042f56] text-white'
                      : 'border-slate-300 bg-white text-transparent'
                  )}
                >
                  <Check className="h-4 w-4 stroke-[3]" />
                </button>
              </div>

              {/* Error Message */}
              {nlError && (
                <p className="text-xs sm:text-sm font-medium text-red-600">
                  {nlError}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={nlSubmitting}
                className="w-full h-14 rounded-full bg-[#042f56] text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#073f72] active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
              >
                {nlSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>접수 중...</span>
                  </>
                ) : (
                  <span>제출하기</span>
                )}
              </button>
            </form>
          </div>
        )}

        {/* ========================================================
            VIEW 3: Newsletter Success (APPLY_Newsletter2_M.png)
            ======================================================== */}
        {view === 'newsletter_done' && (
          <div className="text-center py-8">
            {/* Success Illustration */}
            <div className="flex justify-center mb-6">
              <div className="w-48 sm:w-56">
                <Image
                  src="/images/apply/newsletter_success_icon.png"
                  alt="신청 완료"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#042f56]">
              신청이 완료되었습니다
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              이제 알람의 정석의 새로운 소식을
              <br />
              가장 먼저 받아볼 수 있어요
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#042f56] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-md hover:bg-[#073f72] active:scale-[0.99] transition-all"
              >
                <span>홈으로 이동하기</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW 4: Beta Test Input Form (APPLY_Betatest1_M.png)
            ======================================================== */}
        {view === 'betatest' && (
          <div>
            {/* Back Button */}
            <button
              type="button"
              onClick={() => setView('hub')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-[#042f56] transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>함께 하는 방법으로 돌아가기</span>
            </button>

            {/* Header */}
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#042f56]">
                베타테스트 참여 신청
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                알람의 정석을 비용 없이 가장 먼저 만날 기회
              </p>
            </div>

            {/* Card 1: 이런 분을 찾고 있어요 */}
            <div className="mt-8 rounded-3xl bg-[#011c35] text-white p-6 sm:p-7 flex gap-4 sm:gap-5 items-start shadow-md">
              <div className="w-14 sm:w-16 flex-shrink-0 pt-1">
                <Image
                  src="/images/apply/betatest_icon_target.png"
                  alt=""
                  width={280}
                  height={320}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-sm sm:text-base font-bold text-sky-300">
                  이런 분을 찾고 있어요
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-white/90 leading-relaxed">
                  <li>• 아침잠 때문에 하루의 시작이 자주 힘들었던 분</li>
                  <li>• 알람을 여러 번 끄거나 스누즈를 반복해본 분</li>
                  <li>• 새로운 기상 방법을 직접 경험해보고 싶은 분</li>
                </ul>
              </div>
            </div>

            {/* Card 2: 베타테스터가 되면 */}
            <div className="mt-4 rounded-3xl bg-[#011c35] text-white p-6 sm:p-7 flex gap-4 sm:gap-5 items-start shadow-md">
              <div className="w-14 sm:w-16 flex-shrink-0 pt-1">
                <Image
                  src="/images/apply/betatest_icon_benefit.png"
                  alt=""
                  width={280}
                  height={350}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-sm sm:text-base font-bold text-sky-300">
                  베타테스터가 되면
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-white/90 leading-relaxed">
                  <li>• 알람의 정석을 무료로 먼저 경험할 수 있어요</li>
                  <li>
                    • 사용하면서 느낀 의견을 전하고, 제품 개선 과정에 함께할 수
                    있어요
                  </li>
                </ul>
              </div>
            </div>

            {/* Notice Box */}
            <div className="mt-6 rounded-2xl bg-slate-200/70 p-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-center">
              테스트 일정이 확정되면 선정된 분에게 전화번호로 일정 및
              참여방법을 개별 안내드립니다
            </div>

            {/* Form */}
            <form onSubmit={handleBetaSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="beta-name"
                  className="block text-xs sm:text-sm font-bold text-slate-800 mb-2"
                >
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  id="beta-name"
                  type="text"
                  required
                  placeholder="이름을 입력해주세요"
                  value={betaForm.name}
                  onChange={(e) => {
                    setBetaForm({ ...betaForm, name: e.target.value })
                    if (betaError) setBetaError('')
                  }}
                  className="w-full h-13 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#042f56] focus:outline-none focus:ring-1 focus:ring-[#042f56] text-sm sm:text-base transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="beta-phone"
                  className="block text-xs sm:text-sm font-bold text-slate-800 mb-2"
                >
                  전화번호 <span className="text-red-500">*</span>
                </label>
                <input
                  id="beta-phone"
                  type="tel"
                  required
                  placeholder="베타테스트 안내를 받을 전화번호를 입력해주세요"
                  value={betaForm.phone}
                  onChange={(e) => {
                    setBetaForm({ ...betaForm, phone: e.target.value })
                    if (betaError) setBetaError('')
                  }}
                  className="w-full h-13 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#042f56] focus:outline-none focus:ring-1 focus:ring-[#042f56] text-sm sm:text-base transition-colors"
                />
              </div>

              {/* Consent: Privacy */}
              <div
                onClick={() => setBetaPrivacyAgreed(!betaPrivacyAgreed)}
                className="flex items-center justify-between cursor-pointer select-none rounded-xl p-2 hover:bg-slate-200/50 transition-colors"
              >
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  [필수] 개인정보 수집 및 이용에 동의합니다
                </span>
                <button
                  type="button"
                  aria-checked={betaPrivacyAgreed}
                  role="checkbox"
                  className={cn(
                    'flex h-6 w-6 items-center justify-center rounded-md border transition-colors',
                    betaPrivacyAgreed
                      ? 'bg-[#042f56] border-[#042f56] text-white'
                      : 'border-slate-300 bg-white text-transparent'
                  )}
                >
                  <Check className="h-4 w-4 stroke-[3]" />
                </button>
              </div>

              {/* Error Message */}
              {betaError && (
                <p className="text-xs sm:text-sm font-medium text-red-600">
                  {betaError}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={betaSubmitting}
                className="w-full h-14 rounded-full bg-[#042f56] text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#073f72] active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
              >
                {betaSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>접수 중...</span>
                  </>
                ) : (
                  <span>제출하기</span>
                )}
              </button>
            </form>
          </div>
        )}

        {/* ========================================================
            VIEW 5: Beta Test Success (APPLY_Betatest2_M.png)
            ======================================================== */}
        {view === 'betatest_done' && (
          <div className="text-center py-8">
            {/* Success Illustration */}
            <div className="flex justify-center mb-6">
              <div className="w-48 sm:w-56">
                <Image
                  src="/images/apply/betatest_success_icon.png"
                  alt="접수 완료"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#042f56]">
              신청이 정상적으로
              <br />
              접수되었습니다
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              알람의 정석 베타테스트에 관심을 가져주셔서 감사합니다
            </p>

            <div className="mt-6 rounded-2xl bg-white/70 border border-slate-200/80 p-5 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2 max-w-md mx-auto">
              <p>
                베타테스트 일정과 참여 방법이 확정되면
                <br />
                신청해주신 전화번호를 통해 안내드리겠습니다
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 pt-1 border-t border-slate-200/60">
                ※ 베타테스터 선정 여부 및 세부 일정은 추후 개별 안내됩니다
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#042f56] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-md hover:bg-[#073f72] active:scale-[0.99] transition-all"
              >
                <span>홈으로 이동하기</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
