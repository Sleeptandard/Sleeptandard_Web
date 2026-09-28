import Image from 'next/image'
import { NormalButton } from '@/components/ui/normal-button'
import { NormalCard } from '@/components/ui/normal-card'

export function ApplySection() {
  return (
    <section className="relative flex min-h-svh w-full items-center justify-center bg-KeyReal px-5 py-16">
      <div className="mx-auto w-full max-w-xl">
        <h2 className="text-center font-display text-[24px] font-medium leading-[1.35] tracking-[-0.025em] text-White">
          더 빠르고, 더 자세히
          <br />
          <span className="text-SkyBlue">알람의 정석</span>을 만나보세요
        </h2>

        <div className="mt-8 space-y-7">
          <NormalCard className="snap-center snap-always rounded-[28px] px-5 pb-7 pt-8 sm:px-8">
            <div className="flex items-center gap-5 sm:gap-7">
              <div className="flex w-[84px] shrink-0 items-center justify-center sm:w-28">
                <Image
                  src="/images/home/home_mail.png"
                  alt="개발 소식 뉴스레터"
                  width={216}
                  height={216}
                  className="mx-auto h-auto w-[70%] object-contain"
                />
              </div>
              <div className="min-w-0 flex-1 text-left text-White">
                <h3 className="text-[18px] font-bold leading-[1.3]">
                  개발 소식 뉴스레터
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.25] tracking-[-0.025em]">
                  알람의 정석이 만들어지는 과정과
                  <br />
                  주요 업데이트 소식을 뉴스레터로
                  <br />
                  가장 먼저 받아보세요
                </p>
              </div>
            </div>

            <NormalButton
              href="/apply"
              className="mt-7 min-h-[50px] w-full text-[16px] font-semibold"
              ariaLabel="개발 소식 뉴스레터 신청하기"
            >
              개발소식 받기
            </NormalButton>
          </NormalCard>

          <div className="relative">
            <NormalCard className="snap-center snap-always rounded-[28px] px-5 pb-7 pt-8 sm:px-8">
              <div className="flex items-center gap-5 sm:gap-7">
                <div className="flex w-[84px] shrink-0 items-center justify-center sm:w-28">
                  <Image
                    src="/images/home/home_potch2.png"
                    alt="무료 베타테스트 참여"
                    width={244}
                    height={195}
                    className="h-auto w-[150%] max-w-none object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1 text-left text-White">
                  <h3 className="text-[18px] font-bold leading-[1.3]">
                    무료 베타테스트 참여
                  </h3>
                  <p className="mt-2 text-[14px] font-medium leading-[1.25] tracking-[-0.025em]">
                    알람의 정석을 무료로 직접 사용
                    <br />
                    해보고, 더 나은 제품을 만드는
                    <br />
                    과정에 함께해주세요
                  </p>
                </div>
              </div>

              <NormalButton
                href="/apply"
                className="mt-7 min-h-[50px] w-full text-[16px] font-semibold"
                ariaLabel="무료 베타테스트 참여 신청하기"
              >
                참여 신청하기
              </NormalButton>
            </NormalCard>

            <div className="absolute -right-1 -top-4">
              <span className="inline-flex min-h-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#088AFF_0%,#005CAF_100%)] px-5 text-[14px] font-medium text-White shadow-[0_8px_18px_rgba(0,92,175,0.3)]">
                2차 모집중
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,var(--KeyReal)_0%,var(--KeyReal)_17%,var(--SkyBlue)_50%,var(--KeyReal)_79%,var(--KeyReal)_100%)]"
      />
    </section>
  )
}
