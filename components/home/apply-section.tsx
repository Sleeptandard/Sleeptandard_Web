import Image from 'next/image'
import { NormalButton } from '@/components/ui/normal-button'
import { NormalCard } from '@/components/ui/normal-card'

export function ApplySection() {
  return (
    <section className="relative flex min-h-svh w-full items-center justify-center bg-KeyReal px-5 py-16">
      <div className="mx-auto w-full max-w-xl">
        <h2 className="text-center font-display text-[24px] font-normal leading-[1.35] tracking-[-0.025em] text-White">
          더 빠르고, 더 자세히
          <br />
          <span className="text-SkyBlue">알람의 정석</span>을 만나보세요
        </h2>

        <div className="mt-8 space-y-7">
          <NormalCard className="flex min-h-[214px] snap-center snap-always flex-col p-5 sm:p-6">
            <div className="flex flex-1 items-center gap-4">
              <Image
                src="/images/home/home_mail.png"
                alt="뉴스레터 메일"
                width={96}
                height={87}
                className="h-auto w-14 shrink-0 sm:w-16"
              />
              <div className="min-w-0 text-left text-White">
                <h3 className="text-[18px] font-bold leading-normal">
                  개발 소식 뉴스레터
                </h3>
                <p className="mt-2 text-[14px] leading-[1.45]">
                  알람의 정석이 만들어 지는 과정과
                  <br />
                  주요 업데이트 소식을 뉴스레터로
                  <br />
                  가장 먼저 받아 보세요
                </p>
              </div>
            </div>

            <NormalButton
              href="/apply"
              className="mt-4 min-h-12 w-full py-2 text-[16px]"
              ariaLabel="개발 소식 뉴스레터 신청하기"
            >
              개발소식 받기
            </NormalButton>
          </NormalCard>

          <NormalCard className="flex min-h-[214px] snap-center snap-always flex-col p-5 sm:p-6">
            <div className="flex flex-1 items-center gap-4">
              <Image
                src="/images/home/home_potch2.png"
                alt="알람의 정석 웨어러블 기기"
                width={191}
                height={211}
                className="h-auto w-16 shrink-0 sm:w-20"
              />
              <div className="min-w-0 text-left text-White">
                <h3 className="text-[18px] font-bold leading-normal">
                  무료 베타테스트 참여
                </h3>
                <p className="mt-2 text-[14px] leading-[1.45]">
                  알람의 정석을 무료로 직접 사용
                  <br />
                  해보고, 더 나은 제품을 만드는
                  <br />
                  과정에 참여해주세요
                </p>
              </div>
            </div>

            <NormalButton
              href="/apply"
              className="mt-4 min-h-12 w-full py-2 text-[16px]"
              ariaLabel="무료 베타테스트 참여 신청하기"
            >
              참여 신청하기
            </NormalButton>
          </NormalCard>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,var(--KeyReal)_0%,var(--KeyReal)_17%,var(--SkyBlue)_50%,var(--KeyReal)_79%,var(--KeyReal)_100%)]"
      />
    </section>
  )
}
