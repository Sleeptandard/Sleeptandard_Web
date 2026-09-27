import { ProductFaqAccordion } from '@/components/product/faq-accordion'

export function ProductFaqSection() {
  return (
    <section className="flex min-h-svh w-full flex-col bg-White px-5 py-[clamp(48px,11svh,100px)]">
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col">
        <h2 className="mb-8 text-[24px] font-semibold leading-normal text-Key">FAQ</h2>
        <ProductFaqAccordion />
        <div className="flex flex-1 items-end justify-center pt-16">
          <span
            role="img"
            aria-label="Sleeptandard"
            className="block h-[47px] w-[160px] bg-KeyReal"
            style={{
              WebkitMask: 'url(/images/logo/logo.svg) center / contain no-repeat',
              mask: 'url(/images/logo/logo.svg) center / contain no-repeat',
            }}
          />
        </div>
      </div>
    </section>
  )
}
