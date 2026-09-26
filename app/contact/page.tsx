import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-5 pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-xl">
        <div className="text-left">
          <div className="inline-flex items-center rounded-full border border-KeyReal/20 bg-white/70 px-3.5 py-1 text-xs font-semibold tracking-wider text-KeyReal uppercase backdrop-blur-sm">
            Contact us
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-KeyReal sm:text-4xl md:text-5xl">
            문의를 남겨주세요
          </h1>
          <div className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>협업, 제휴, 제품 등 Sleeptandard에</p>
            <p>궁금한 점이 있다면 편하게 문의를 남겨주세요</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  )
}
