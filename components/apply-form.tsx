'use client'

import { useState, type FormEvent } from 'react'

import { FormInputField } from '@/components/ui/form-input-field'
import { TermsWithCheckBox2 } from '@/components/ui/terms-with-check-box2'

type ApplyFormProps = {
  type: 'newsletter' | 'betatest'
  onSuccess: () => void
}

type ApplyFormErrors = Partial<
  Record<'name' | 'email' | 'phone' | 'privacy' | 'marketing', string>
>

const privacyTerms = `Sleeptandard(이하 "운영팀")는 「개인정보 보호법」에 따라 개발 소식 안내를 위해 아래와 같이 개인정보를 수집·이용합니다.

1. 수집하는 개인정보 항목

- 이름
- 이메일 주소

2. 개인정보의 수집·이용 목적

개발 소식 및 서비스 관련 안내 제공
뉴스레터 발송
출시 일정 및 주요 업데이트 안내

3. 개인정보의 보유 및 이용 기간
수집된 개인정보는 정보주체가 수신을 거부하거나 동의를 철회할 때까지 보관·이용하며, 동의 철회 시 지체 없이 파기합니다.
다만, 관계 법령에 따라 보관이 필요한 경우에는 해당 법령에서 정한 기간 동안 보관합니다.

4. 동의 거부 권리 및 불이익
귀하는 개인정보 수집·이용에 대한 동의를 거부할 권리가 있습니다.
다만, 동의를 거부하실 경우 개발 소식 및 뉴스레터를 받아보실 수 없습니다.`

const marketingTerms = `Sleeptandard(이하 "운영팀")는 이메일을 통해 제품 개발 소식, 베타테스터 모집, 서비스 출시 안내 등 광고성 정보를 포함한 이메일을 발송할 수 있습니다.

광고성 정보가 포함된 이메일은 관련 법령에 따라 제목에 (광고)를 표시하여 발송됩니다.

광고성 정보 수신에 동의하지 않을 경우 개발 소식 이메일 서비스를 이용하실 수 없습니다.

이메일 수신을 원하지 않는 경우, 운영팀으로의 요청을 통해 언제든지 수신을 거부하실 수 있습니다.`

export function ApplyForm({ type, onSuccess }: ApplyFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [privacyAgreed, setPrivacyAgreed] = useState(false)
  const [marketingAgreed, setMarketingAgreed] = useState(false)
  const [errors, setErrors] = useState<ApplyFormErrors>({})
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateField = (field: 'name' | 'email' | 'phone', value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSubmitError('')
  }

  const validate = () => {
    const nextErrors: ApplyFormErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = '이름을 입력해주세요.'
    }

    if (
      type === 'newsletter' &&
      (!formData.email.trim() || !formData.email.includes('@'))
    ) {
      nextErrors.email = '올바른 이메일 주소를 입력해주세요.'
    }

    if (type === 'betatest' && !formData.phone.trim()) {
      nextErrors.phone = '전화번호를 입력해주세요.'
    }

    if (!privacyAgreed) {
      nextErrors.privacy = '개인정보 수집 및 이용에 동의해주세요.'
    }

    if (type === 'newsletter' && !marketingAgreed) {
      nextErrors.marketing = '광고성 정보 수신에 동의해주세요.'
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
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: type === 'newsletter' ? '뉴스레터' : '베타테스트',
          name: formData.name,
          email: type === 'newsletter' ? formData.email : '',
          phone: type === 'betatest' ? formData.phone : '',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.error || '신청 접수에 실패했습니다. 다시 시도해주세요.',
        )
      }

      onSuccess()
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

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
      <FormInputField
        id={`${type}-name`}
        name="name"
        title="이름"
        isRequired
        placeholder={errors.name ?? '이름을 입력해주세요'}
        value={formData.name}
        onChange={(event) => updateField('name', event.target.value)}
        alert={Boolean(errors.name)}
        autoComplete="name"
      />

      {type === 'newsletter' ? (
        <FormInputField
          id="newsletter-email"
          name="email"
          type="email"
          title="이메일"
          isRequired
          placeholder={
            errors.email ?? '개발 소식을 받아볼 이메일을 입력해주세요'
          }
          value={formData.email}
          onChange={(event) => updateField('email', event.target.value)}
          alert={Boolean(errors.email)}
          autoComplete="email"
        />
      ) : (
        <FormInputField
          id="betatest-phone"
          name="phone"
          type="tel"
          title="전화번호"
          isRequired
          placeholder={
            errors.phone ?? '베타테스트 안내를 받을 전화번호를 입력해주세요'
          }
          value={formData.phone}
          onChange={(event) => updateField('phone', event.target.value)}
          alert={Boolean(errors.phone)}
          autoComplete="tel"
        />
      )}

      <TermsWithCheckBox2
        isRequired
        title="개인정보 수집 및 이용에 동의합니다"
        termsTextBox2={privacyTerms}
        checked={privacyAgreed}
        onCheckedChange={(checked) => {
          setPrivacyAgreed(checked)
          setErrors((current) => ({ ...current, privacy: undefined }))
          setSubmitError('')
        }}
        defaultOpen={type === 'newsletter'}
        alert={Boolean(errors.privacy)}
        name="privacyAgreement"
      />

      {type === 'newsletter' && (
        <TermsWithCheckBox2
          isRequired
          title="광고성 정보 수신 동의"
          termsTextBox2={marketingTerms}
          checked={marketingAgreed}
          onCheckedChange={(checked) => {
            setMarketingAgreed(checked)
            setErrors((current) => ({ ...current, marketing: undefined }))
            setSubmitError('')
          }}
          alert={Boolean(errors.marketing)}
          name="marketingAgreement"
        />
      )}

      {submitError && (
        <p role="alert" className="text-[13px] font-medium text-Red">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-KeyReal text-sm font-bold text-white shadow-md transition-all hover:bg-[#073f72] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
      >
        {isSubmitting && (
          <span className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        )}
        {isSubmitting ? '접수 중...' : '제출하기'}
      </button>
    </form>
  )
}
