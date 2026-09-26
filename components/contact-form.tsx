'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

import { FormInputField } from '@/components/ui/form-input-field'
import { FormTextareaField } from '@/components/ui/form-textarea-field'
import { TermsWithCheckBox1 } from '@/components/ui/terms-with-check-box1'

type ContactFormData = {
  name: string
  email: string
  phone: string
  message: string
}

type ContactFormErrorKey = keyof ContactFormData | 'agreement'
type ContactFormErrors = Partial<Record<ContactFormErrorKey, string>>

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const privacyTerms = `Sleeptandard 팀은 문의 접수 및 답변을 위해 아래와 같이 개인정보를 수집·이용합니다.
  • 수집 항목: 이름, 이메일, 문의내용
  • 수집 목적: 문의사항 확인 및 답변, 문의 관련 연락
  • 보유 및 이용 기간: 문의 처리 완료 후 1년
이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다.
동의를 거부할 경우 문의 접수가 제한될 수 있습니다.`

export function ContactForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [agreed, setAgreed] = useState(false)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const fieldName = event.target.name as keyof ContactFormData
    const { value } = event.target

    setFormData((current) => ({ ...current, [fieldName]: value }))
    setErrors((current) => ({ ...current, [fieldName]: undefined }))
    setSubmitError('')
  }

  const validate = () => {
    const nextErrors: ContactFormErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = '담당자명 또는 성함을 입력해주세요.'
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      nextErrors.email = '유효한 이메일 주소를 입력해주세요.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = '문의내용을 입력해주세요.'
    }

    if (!agreed) {
      nextErrors.agreement = '개인정보 수집 및 이용에 동의해주세요.'
    }

    setErrors(nextErrors)
    return nextErrors
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate()
    const firstError = Object.values(nextErrors)[0]

    if (firstError) {
      setSubmitError(firstError)
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.error || '문의 접수에 실패했습니다. 다시 시도해주세요.',
        )
      }

      setSubmitted(true)
    } catch (error: unknown) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : '오류가 발생했습니다. 다시 시도해주세요.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormData(initialFormData)
    setAgreed(false)
    setErrors({})
    setSubmitError('')
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="mt-12 rounded-3xl border border-slate-200/80 bg-white p-8 text-center shadow-lg sm:p-12">
        <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="size-10" aria-hidden="true" />
        </div>
        <h2 className="font-display text-2xl font-bold text-slate-900">
          문의가 접수되었습니다
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          남겨주신 내용을 확인 후 입력하신 이메일(
          <span className="font-semibold text-slate-900">{formData.email}</span>
          )로 신속하게 답변드리겠습니다.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-KeyReal px-8 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#073f72] sm:text-base"
        >
          추가 문의하기
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-10 sm:mt-12">
      <div className="space-y-4">
        <FormInputField
          id="contact-name"
          name="name"
          title="담당자명(성함)"
          isRequired
          placeholder={errors.name ?? '담당자명 또는 성함을 입력해주세요'}
          value={formData.name}
          onChange={handleChange}
          alert={Boolean(errors.name)}
          autoComplete="name"
        />

        <FormInputField
          id="contact-email"
          name="email"
          type="email"
          title="이메일"
          isRequired
          placeholder={errors.email ?? '이메일 주소를 입력해주세요'}
          value={formData.email}
          onChange={handleChange}
          alert={Boolean(errors.email)}
          autoComplete="email"
        />

        <FormInputField
          id="contact-phone"
          name="phone"
          type="tel"
          title="휴대폰 번호"
          placeholder="휴대폰 번호를 입력해주세요"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
        />

        <FormTextareaField
          id="contact-message"
          name="message"
          title="문의내용"
          isRequired
          placeholder={errors.message ?? '문의내용을 입력해주세요'}
          value={formData.message}
          onChange={handleChange}
          alert={Boolean(errors.message)}
          rows={5}
        />

        <TermsWithCheckBox1
          isRequired
          title="개인정보 수집 및 이용에 동의합니다"
          termsTextBox1={privacyTerms}
          checked={agreed}
          onCheckedChange={(checked) => {
            setAgreed(checked)
            setErrors((current) => ({ ...current, agreement: undefined }))
            setSubmitError('')
          }}
          alert={Boolean(errors.agreement)}
          name="privacyAgreement"
        />
      </div>

      {submitError && (
        <p role="alert" className="mt-3 text-[13px] font-medium text-Red">
          {submitError}
        </p>
      )}

      <div className="mt-6 rounded-3xl bg-KeyReal p-6 text-center text-white shadow-lg sm:p-8">
        <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl">
          빠른 문의가 필요하신가요?
        </h3>
        <div className="mt-2 text-xs leading-relaxed text-white/80 sm:text-sm">
          <p>간단한 질문이나 빠른 답변이 필요하다면</p>
          <p>카카오톡 채널에서 바로 이야기할 수 있습니다.</p>
        </div>
        <a
          href="http://pf.kakao.com/_xoQGwX/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#FEE500] px-6 py-3 text-xs font-bold text-[#191919] shadow-sm transition-transform hover:scale-[1.02] sm:text-sm"
        >
          <svg
            className="size-4 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 3C6.477 3 2 6.477 2 10.767c0 2.72 1.79 5.11 4.508 6.47-.198.742-.718 2.684-.822 3.097-.13.513.188.506.395.369.163-.109 2.584-1.758 3.633-2.474.743.104 1.508.16 2.286.16 5.523 0 10-3.477 10-7.767C22 6.477 17.523 3 12 3z" />
          </svg>
          카카오톡으로 문의하기
        </a>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-KeyReal text-sm font-bold text-white shadow-md transition-all hover:bg-[#073f72] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
      >
        {isSubmitting && (
          <span className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        )}
        {isSubmitting ? '접수 중...' : '제출하기'}
      </button>
    </form>
  )
}
