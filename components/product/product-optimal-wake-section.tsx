import Image from 'next/image'

export function ProductOptimalWakeSection() {
  return (
    <section className="product-optimal-wake relative flex min-h-[75svh] w-full bg-Key px-5 py-20 text-White md:py-24">
      <div className="desktop-container mx-auto flex w-full max-w-2xl flex-col">
        <h2 className="text-[24px] font-semibold leading-[1.35] tracking-[-0.025em]">
          분석한 수면 상태를 기반으로,{' '}
          <br />
          최적의 기상 타이밍에 깨워드립니다
        </h2>

        <div className="relative mt-14 aspect-[673/490] w-full">
          <Image
            src="/images/product/product_waketiming2.png"
            alt="수면이 얕아지고 각성도가 높아지는 최대 15분 알람 구간"
            fill
            sizes="(max-width: 768px) calc(100vw - 40px), 672px"
            className="object-contain"
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-5 bottom-8 mx-auto h-px max-w-2xl bg-[linear-gradient(90deg,var(--Key)_0%,var(--Key)_17%,var(--SkyBlue)_50%,var(--Key)_79%,var(--Key)_100%)]"
      />
    </section>
  )
}
