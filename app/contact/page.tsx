'use client'

import { useState } from 'react'
import { Check, CheckCircle2, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errorMessage) setErrorMessage('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      setErrorMessage('담당자명(성함)을 입력해주세요.')
      return
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('유효한 이메일 주소를 입력해주세요.')
      return
    }
    if (!formData.message.trim()) {
      setErrorMessage('문의내용을 입력해주세요.')
      return
    }
    if (!agreed) {
      setErrorMessage('개인정보 수집 및 이용에 동의해주세요.')
      return
    }

    setIsSubmitting(true)

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 800)
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' })
    setAgreed(false)
    setSubmitted(false)
    setErrorMessage('')
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-28 pb-20 sm:pt-36 sm:pb-28 px-5">
      <div className="mx-auto max-w-xl">
        {/* Header Section */}
        <div className="text-left">
          <div className="inline-flex items-center rounded-full border border-[#042f56]/20 bg-white/70 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#042f56] uppercase backdrop-blur-sm">
            Contact us
          </div>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#042f56]">
            문의를 남겨주세요
          </h1>
          <div className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>협업, 제휴, 제품 등 Sleeptandard에</p>
            <p>궁금한 점이 있다면 편하게 문의를 남겨주세요</p>
          </div>
        </div>

        {submitted ? (
          /* Submission Complete State */
          <div className="mt-12 rounded-3xl bg-white p-8 sm:p-12 text-center shadow-lg border border-slate-200/80 transition-all">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-5">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900">
              문의가 접수되었습니다
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              남겨주신 내용을 확인 후 입력하신 이메일(
              <span className="font-semibold text-slate-900">{formData.email}</span>
              )로 신속하게 답변드리겠습니다.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#042f56] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-md hover:bg-[#073f72] transition-colors"
            >
              추가 문의하기
            </button>
          </div>
        ) : (
          /* Inquiry Form */
          <form onSubmit={handleSubmit} className="mt-10 sm:mt-12 space-y-6">
            {/* Field 1: Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm font-bold text-slate-800 mb-2"
              >
                담당자명(성함) <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="담당자명 또는 성함을 입력해주세요"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-13 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#042f56] focus:outline-none focus:ring-1 focus:ring-[#042f56] text-sm sm:text-base transition-colors"
              />
            </div>

            {/* Field 2: Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-bold text-slate-800 mb-2"
              >
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="이메일 주소를 입력해주세요"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-13 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#042f56] focus:outline-none focus:ring-1 focus:ring-[#042f56] text-sm sm:text-base transition-colors"
              />
            </div>

            {/* Field 3: Phone (Optional) */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs sm:text-sm font-bold text-slate-800 mb-2"
              >
                휴대폰 번호
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="휴대폰 번호를 입력해주세요"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-13 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#042f56] focus:outline-none focus:ring-1 focus:ring-[#042f56] text-sm sm:text-base transition-colors"
              />
            </div>

            {/* Field 4: Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm font-bold text-slate-800 mb-2"
              >
                문의내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="문의내용을 입력해주세요"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#042f56] focus:outline-none focus:ring-1 focus:ring-[#042f56] text-sm sm:text-base resize-none transition-colors"
              />
            </div>

            {/* Privacy Agreement Section */}
            <div className="pt-2">
              <div
                onClick={() => setAgreed(!agreed)}
                className="flex items-center justify-between cursor-pointer select-none rounded-xl p-1 hover:bg-slate-200/50 transition-colors"
              >
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  [필수] 개인정보 수집 및 이용에 동의합니다
                </span>
                <button
                  type="button"
                  aria-checked={agreed}
                  role="checkbox"
                  className={cn(
                    'flex h-6 w-6 items-center justify-center rounded-md border transition-colors',
                    agreed
                      ? 'bg-[#042f56] border-[#042f56] text-white'
                      : 'border-slate-300 bg-white text-transparent'
                  )}
                >
                  <Check className="h-4 w-4 stroke-[3]" />
                </button>
              </div>

              {/* Privacy Details Content */}
              <div className="mt-3 rounded-2xl bg-white/70 border border-slate-200/80 p-4 text-[11px] sm:text-xs text-slate-600 leading-relaxed space-y-2">
                <p className="font-medium text-slate-700">
                  Sleeptandard 팀은 문의 접수 및 답변을 위해 아래와 같이
                  개인정보를 수집·이용합니다.
                </p>
                <ul className="space-y-1 pl-1">
                  <li>• 수집 항목: 이름, 이메일, 문의내용</li>
                  <li>• 수집 목적: 문의사항 확인 및 답변, 문의 관련 연락</li>
                  <li>• 보유 및 이용 기간: 문의 처리 완료 후 1년</li>
                </ul>
                <p className="pt-1 text-slate-500">
                  이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가
                  있습니다. 동의를 거부할 경우 문의 접수가 제한될 수 있습니다.
                </p>
              </div>
            </div>

            {/* Inline Error Message */}
            {errorMessage && (
              <p className="text-xs sm:text-sm font-medium text-red-600">
                {errorMessage}
              </p>
            )}

            {/* Quick Inquiry: KakaoTalk Banner Card */}
            <div className="rounded-3xl bg-[#042F56] p-6 sm:p-8 text-center text-white shadow-lg">
              <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight">
                빠른 문의가 필요하신가요?
              </h3>
              <div className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
                <p>간단한 질문이나 빠른 답변이 필요하다면</p>
                <p>카카오톡 채널에서 바로 이야기할 수 있습니다.</p>
              </div>

              <div className="mt-5 flex justify-center">
                <a
                  href="https://pf.kakao.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FEE500] px-6 py-3 text-xs sm:text-sm font-bold text-[#191919] shadow-sm hover:bg-[#fade0a] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  {/* KakaoTalk Speech Bubble SVG Icon */}
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 3C6.477 3 2 6.477 2 10.767c0 2.72 1.79 5.11 4.508 6.47-.198.742-.718 2.684-.822 3.097-.13.513.188.506.395.369.163-.109 2.584-1.758 3.633-2.474.743.104 1.508.16 2.286.16 5.523 0 10-3.477 10-7.767C22 6.477 17.523 3 12 3z" />
                  </svg>
                  <span>카카오톡으로 문의하기</span>
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 rounded-full bg-[#042f56] text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#073f72] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>접수 중...</span>
                  </>
                ) : (
                  <span>제출하기</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  )
}
