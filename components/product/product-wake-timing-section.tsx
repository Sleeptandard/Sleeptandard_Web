import Image from 'next/image'

import {
  ProductDiffCard1,
  ProductDiffCard2,
} from '@/components/product/product-diff-card'

function GlassCircle({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(228, 242, 255, 0.8) 100%)',
        boxShadow: '2px 9px 18px 6px rgba(206, 228, 248, 0.6)',
      }}
    />
  )
}

export function ProductWakeTimingSection() {
  return (
    <section data-split-snap className="relative w-full bg-White px-5 py-20 text-center md:py-28">
      <GlassCircle className="left-[-24px] top-[31%] size-[62px]" />
      <GlassCircle className="left-[12%] top-[43%] size-[18px]" />
      <GlassCircle className="bottom-[5%] right-[-12px] size-[72px]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <h2 className="text-[24px] font-bold leading-[1.3] tracking-[-0.025em] text-Key">
          잠에서 개운하게 깰 수 있는
          <br />
          &lsquo;순간&rsquo;은 존재합니다
        </h2>

        <div className="relative mx-auto mt-10 aspect-[626/410] w-full max-w-[626px] scroll-mt-12 snap-center snap-always">
          <Image
            src="/images/product/product_waketiming1.png"
            alt="수면 단계와 신체 각성도에 따른 깨기 좋은 순간 그래프"
            fill
            sizes="(max-width: 768px) calc(100vw - 40px), 626px"
            className="object-contain"
          />
        </div>

        <p className="mt-12 text-[18px] font-normal leading-[1.4] tracking-[-0.025em] text-Key">
          같은 7시간을 자도
          <br />
          <strong className="font-bold text-KeyReal">언제 깨는가</strong>에 따라
          <br />
          아침은 달라질 수 있습니다
        </p>

        <div className="mx-auto mt-12 grid w-full max-w-[390px] scroll-mt-12 snap-center snap-always grid-cols-[minmax(0,1fr)_minmax(0,1.16fr)] items-start gap-3 overflow-visible border-0 bg-transparent pb-8 shadow-none sm:max-w-[460px] sm:gap-5">
          <div className="space-y-3 pt-6">
            <ProductDiffCard1 className="flex h-[58px] items-center justify-center rounded-[18px] p-0 text-[14px] font-medium text-Key/80">
              깊은 수면
            </ProductDiffCard1>
            <Image
              src="/images/product/product_plus.svg"
              alt="더하기"
              width={14}
              height={14}
              className="mx-auto"
            />
            <ProductDiffCard1 className="flex h-[58px] items-center justify-center rounded-[18px] p-0 text-[14px] font-medium text-Key/80">
              낮은 각성도
            </ProductDiffCard1>

            <Image
              src="/images/product/product_bad.svg"
              alt="피곤한 표정"
              width={50}
              height={50}
              className="mx-auto mt-4"
            />
            <p className="text-[14px] font-normal leading-[1.35] tracking-[-0.02em] text-Key">
              몸과 뇌가 바로
              <br />
              깨어나지 못하는
              <br />
              수면 관성으로
              <br />
              <strong className="font-bold text-[#616161]">피곤한 아침</strong>
            </p>
          </div>

          <div className="h-auto overflow-visible rounded-[20px] border border-white bg-White px-4 pb-10 pt-6 shadow-[2px_5px_12px_rgba(5,12,22,0.4)]">
            <div className="space-y-3">
              <ProductDiffCard2 className="flex h-[58px] items-center justify-center rounded-[18px] p-0 text-[14px] font-semibold text-Key">
                얕은 수면
              </ProductDiffCard2>
              <Image
                src="/images/product/product_plus.svg"
                alt="더하기"
                width={14}
                height={14}
                className="mx-auto"
              />
              <ProductDiffCard2 className="flex h-[58px] items-center justify-center rounded-[18px] p-0 text-[14px] font-semibold text-Key">
                높은 각성도
              </ProductDiffCard2>

              <Image
                src="/images/product/product_good.svg"
                alt="개운한 표정"
                width={71}
                height={40}
                className="mx-auto mt-5"
              />
              <p className="text-[14px] font-normal leading-[1.35] tracking-[-0.02em] text-Key">
                몸과 뇌가 바로
                <br />
                활동 가능하여
                <br />
                수면 관성 없는
                <br />
                <strong className="font-bold text-[#0A3F6E]">개운한 아침</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
