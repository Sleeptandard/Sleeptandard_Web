import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <main data-submit-container className="flex min-h-screen flex-col bg-White px-5 pt-28 sm:pt-36">
      <div className="mx-auto w-full max-w-xl flex-1">
        <div className="text-left">
          <h1 className="text-[40px] font-bold leading-[1.2] tracking-[-0.035em] text-KeyReal">
            Contact us
          </h1>
          <h2 className="mt-3 text-[24px] font-semibold leading-[1.3] tracking-[-0.035em] text-Key">
            문의를 남겨주세요
          </h2>
          <div className="mt-4 text-[14px] font-medium leading-[1.3] tracking-[-0.025em] text-Key">
            <p>협업, 제휴, 제품 등 Sleeptandard에</p>
            <p>궁금한 점이 있다면 편하게 문의를 남겨주세요</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  )
}
