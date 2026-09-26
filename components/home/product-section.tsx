import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { NormalButton } from '@/components/ui/normal-button'

export function ProductSection() {
  return (
    <section className="relative flex min-h-[70svh] w-full snap-center items-center justify-center bg-KeyReal px-5 py-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-b-[50px] bg-White"
      />

      <div className="relative z-10 mx-auto flex min-h-[max(42svh,320px)] w-full max-w-2xl flex-col justify-center">
        <h2 className="text-center font-display text-[24px] font-normal leading-[1.35] tracking-[-0.025em] text-Key">
          우리가 가장 먼저 바꾸고 싶은 건,
          <br />
          <strong className="font-bold">아침</strong>입니다
        </h2>

        <div className="mt-10 grid min-h-[210px] w-full grid-cols-[46%_54%] overflow-hidden rounded-[28px] bg-[#E6EEF4] sm:min-h-[240px]">
          <div className="relative min-h-full overflow-hidden rounded-[28px]">
            <Image
              src="/images/home/home_potch1.png"
              alt="알람의 정석 웨어러블 기기"
              fill
              sizes="(max-width: 640px) 46vw, 300px"
              className="object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-col items-center justify-center px-4 py-5 text-center sm:px-7">
            <Image
              src="/images/home/home_logo.png"
              alt="알람의 정석"
              width={330}
              height={66}
              className="h-auto w-full max-w-[165px]"
            />
            <p className="mt-5 text-[13px] leading-[1.45] text-Key">
              최적의 기상 타이밍으로,
              <br />
              가장 개운한 아침을 만나보세요
            </p>
            <NormalButton
              href="/product"
              className="mt-5 h-14 w-full max-w-[180px] gap-2 px-4 py-0"
              ariaLabel="알람의 정석 제품 자세히 보기"
            >
              자세히 보기
              <ArrowRight className="size-4" aria-hidden="true" />
            </NormalButton>
          </div>
        </div>
      </div>
    </section>
  )
}
