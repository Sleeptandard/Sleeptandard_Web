import Image from 'next/image'

import { NormalButton } from '@/components/ui/normal-button'

export function ProductCtaSection() {
  return (
    <section className="product-cta relative h-svh w-full overflow-hidden bg-Key px-5 text-White">
      <div
        aria-hidden="true"
        className="absolute bottom-[-74px] left-1/2 h-[148px] w-[calc(100%+20px)] max-w-[760px] -translate-x-1/2 rounded-[50%] bg-KeyReal shadow-[0_-4px_150px_150px_#042F56]"
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-2xl flex-col items-center justify-between py-[11svh] text-center">
        <Image
          src="/images/product/product_logo2.png"
          alt="알람의 정석"
          width={448}
          height={110}
          className="h-auto w-[250px] md:w-[300px]"
        />

        <h2 className="text-[24px] font-semibold leading-[1.35] tracking-[-0.025em]">
          더 빠르고, 더 가깝게
          <br />
          알람의 정석을 먼저 만나보세요
        </h2>

        <p className="text-[14px] font-normal leading-[1.45] tracking-[-0.02em] text-Gray2">
          개발 소식을 먼저 받아보고, 무료 베타테스트에 참여해
          <br />
          <strong className="font-semibold text-White">가장 개운한 기상</strong>을 누구보다 먼저 만나보세요.
        </p>

        <div className="flex w-full max-w-[420px] gap-3">
          <NormalButton
            href="/apply"
            className="min-h-[56px] flex-1 px-2 text-[16px] font-semibold"
            ariaLabel="개발 소식 뉴스레터 신청"
          >
            개발소식 레터
          </NormalButton>
          <NormalButton
            href="/apply"
            className="min-h-[56px] flex-1 px-2 text-[16px] font-semibold"
            ariaLabel="베타테스트 신청"
          >
            베타테스트 신청
          </NormalButton>
        </div>
      </div>
    </section>
  )
}
