'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ApplyForm } from '@/components/apply-form'
import { NormalButton } from '@/components/ui/normal-button'
import { NormalCard } from '@/components/ui/normal-card'

type ApplyView =
  | 'hub'
  | 'newsletter'
  | 'newsletter_done'
  | 'betatest'
  | 'betatest_done'

export default function ApplyPage() {
  const [view, setView] = useState<ApplyView>('hub')

  return (
    <main
      data-submit-container
      className={
        view === 'hub'
          ? 'min-h-svh bg-[linear-gradient(180deg,var(--Key)_0%,var(--KeyReal)_100%)] px-5 pb-20 pt-32 text-White sm:pb-28 sm:pt-40'
          : view === 'newsletter_done' || view === 'betatest_done'
            ? 'min-h-svh bg-[linear-gradient(180deg,var(--Key)_0%,var(--KeyReal)_100%)] px-5 pb-8 pt-20 text-White sm:pb-12 sm:pt-24'
          : view === 'newsletter' || view === 'betatest'
            ? 'flex min-h-screen flex-col bg-White px-5 pt-28 sm:pt-36'
          : 'min-h-screen bg-[#f5f5f5] px-5 pb-20 pt-28 sm:pb-28 sm:pt-36'
      }
    >
      <div className={`mx-auto w-full max-w-xl ${view === 'newsletter' || view === 'betatest' ? 'flex-1' : ''}`}>
        {/* ========================================================
            VIEW 1: Apply Hub (APPLY1_m.png)
            ======================================================== */}
        {view === 'hub' && (
          <div>
            <div className="text-center">
              <h1 className="text-[40px] font-bold leading-[1.2] tracking-[-0.035em] text-White">
                Sleeptandard와
                <br />
                함께 하는 방법
              </h1>
            </div>

            <div className="mt-10 space-y-9 sm:mt-12">
              <NormalCard className="rounded-[28px] px-5 pb-7 pt-8 sm:px-8">
                <div className="flex items-center gap-5 sm:gap-7">
                  <div className="flex w-[84px] flex-shrink-0 items-center justify-center sm:w-28">
                    <Image
                      src="/images/home/home_mail.png"
                      alt="개발 소식 뉴스레터"
                      width={216}
                      height={216}
                      className="mx-auto h-auto w-[70%] object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-[18px] font-bold leading-[1.3] text-White">
                      개발 소식 뉴스레터
                    </h2>
                    <p className="mt-2 text-[14px] font-medium leading-[1.25] tracking-[-0.025em] text-White">
                      알람의 정석이 만들어지는 과정과
                      <br />
                      주요 업데이트 소식을 뉴스레터로
                      <br />
                      가장 먼저 받아보세요
                    </p>
                  </div>
                </div>

                <NormalButton
                  href="#newsletter"
                  ariaLabel="개발 소식 뉴스레터 신청"
                  onClick={(event) => {
                    event.preventDefault()
                    setView('newsletter')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="mt-7 min-h-[50px] w-full text-[16px] font-semibold"
                >
                  개발소식 받기
                </NormalButton>
              </NormalCard>

              <div className="relative">
                <NormalCard className="rounded-[28px] px-5 pb-7 pt-8 sm:px-8">
                  <div className="flex items-center gap-5 sm:gap-7">
                    <div className="flex w-[84px] flex-shrink-0 items-center justify-center sm:w-28">
                      <Image
                        src="/images/home/home_potch2.png"
                        alt="무료 베타테스트 참여"
                        width={244}
                        height={195}
                        className="h-auto w-[150%] max-w-none object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[18px] font-bold leading-[1.3] text-White">
                        무료 베타테스트 참여
                      </h2>
                      <p className="mt-2 text-[14px] font-medium leading-[1.25] tracking-[-0.025em] text-White">
                        알람의 정석을 무료로 직접 사용
                        <br />
                        해보고, 더 나은 제품을 만드는
                        <br />
                        과정에 함께해주세요
                      </p>
                    </div>
                  </div>

                  <NormalButton
                    href="#betatest"
                    ariaLabel="무료 베타테스트 참여 신청"
                    onClick={(event) => {
                      event.preventDefault()
                      setView('betatest')
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="mt-7 min-h-[50px] w-full text-[16px] font-semibold"
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
        )}

        {/* ========================================================
            VIEW 2: Newsletter Input Form (APPLY_Newsletter1_M.png)
            ======================================================== */}
        {view === 'newsletter' && (
          <div>
            <div>
              <h1 className="text-[32px] font-bold leading-[1.2] tracking-[-0.035em] text-KeyReal">
                개발 소식 뉴스레터
              </h1>
              <p className="mt-4 text-[16px] font-semibold leading-[1.3] tracking-[-0.03em] text-Key">
                알람의 정석이 개발되는 과정을 가장 먼저 만나보세요
              </p>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#001C35_0%,#001C35_50%,#06254C_100%)] p-6 text-White sm:p-8">
              <Image
                src="/images/home/home_glassicon3.png"
                alt=""
                aria-hidden="true"
                width={218}
                height={215}
                className="pointer-events-none absolute -bottom-10 -right-9 h-auto w-[112px] select-none opacity-50"
              />

              <div className="relative z-10">
              <h3 className="text-[14px] font-medium leading-[1.3] text-SkyBlue">
                이런 소식을 받아볼 수 있어요
              </h3>
              <ul className="mt-5 space-y-3.5 text-[14px] font-medium leading-[1.3] text-White">
                <li className="flex items-center gap-3">
                  <Image src="/images/apply/apply_notify.svg" alt="" width={24} height={24} className="size-5 flex-none" />
                  <span>새로운 기능과 제품 개발 소식</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image src="/images/apply/apply_beta.svg" alt="" width={24} height={24} className="size-5 flex-none" />
                  <span>베타테스터 모집 및 참여 기회</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image src="/images/apply/apply_date.svg" alt="" width={24} height={24} className="size-5 flex-none" />
                  <span>출시·펀딩 등 주요 일정</span>
                </li>
              </ul>
              <p className="mt-6 pr-14 text-[12px] font-medium leading-[1.3] text-Gray2">
                새로운 소식이 있을 때 비정기적으로 발송됩니다
              </p>
              </div>
            </div>

            <ApplyForm
              type="newsletter"
              onSuccess={() => {
                setView('newsletter_done')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
          </div>
        )}

        {/* ========================================================
            VIEW 3: Newsletter Success (APPLY_Newsletter2_M.png)
            ======================================================== */}
        {view === 'newsletter_done' && (
          <div className="flex min-h-[calc(100svh-7rem)] flex-col items-center text-center sm:min-h-[calc(100svh-9rem)]">
            <Image
              src="/images/home/home_mail.png"
              alt="개발 소식 뉴스레터 신청 완료"
              width={216}
              height={216}
              priority
              className="mt-[4svh] h-auto w-[132px] sm:mt-[2svh] sm:w-[152px]"
            />

            <h1 className="mt-8 text-[28px] font-bold leading-[1.3] tracking-[-0.035em] text-White">
              신청이 완료되었습니다
            </h1>
            <p className="mt-6 text-[16px] font-medium leading-[1.3] tracking-[-0.025em] text-White">
              이제 알람의 정석의 새로운 소식을
              <br />
              가장 먼저 받아볼 수 있어요 🎉
            </p>

            <NormalButton
              href="/"
              ariaLabel="홈으로 이동하기"
              className="mt-auto min-h-[52px] w-full text-[16px] font-semibold"
            >
              홈으로 이동하기 →
            </NormalButton>
          </div>
        )}

        {/* ========================================================
            VIEW 4: Beta Test Input Form (APPLY_Betatest1_M.png)
            ======================================================== */}
        {view === 'betatest' && (
          <div>
            <div>
              <h1 className="text-[32px] font-bold leading-[1.2] tracking-[-0.035em] text-KeyReal">
                베타테스트 참여 신청
              </h1>
              <p className="mt-4 text-[16px] font-semibold leading-[1.3] tracking-[-0.03em] text-Key">
                알람의 정석을 비용 없이 가장 먼저 만날 기회
              </p>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[#001C35] px-5 pb-6 pt-7 text-White sm:px-7 sm:pb-7 sm:pt-8">
              <Image
                src="/images/home/home_glassicon3.png"
                alt=""
                aria-hidden="true"
                width={102}
                height={103}
                className="pointer-events-none absolute -right-9 -top-10 h-auto w-[108px] -scale-x-100 select-none "
              />

              <div className="relative z-10 flex items-center gap-4">
                <span className="flex size-[44px] flex-none items-center justify-center rounded-full bg-[#124B7F]">
                  <Image src="/images/apply/apply_tester.svg" alt="" width={24} height={24} className="size-8" />
                </span>
                <div className="min-w-0 text-left">
                  <h3 className="text-[14px] font-semibold leading-[1.3]">이런 분을 찾고 있어요</h3>
                  <ul className="mt-2 text-[12px] font-medium leading-[1.25] tracking-[-0.02em]">
                    <li>- 아침잠 때문에 하루의 시작이 자주 힘들었던 분</li>
                    <li>- 알람을 여러 번 끄거나 스누즈를 반복해본 분</li>
                    <li>- 새로운 기상 방법을 직접 경험해보고 싶은 분</li>
                  </ul>
                </div>
              </div>

              <div aria-hidden="true" className="my-6 h-px w-full bg-[linear-gradient(90deg,transparent_0%,var(--SkyBlue)_50%,transparent_100%)]" />

              <div className="relative z-10 flex items-center gap-4">
                <span className="flex size-[44px] flex-none items-center justify-center rounded-full bg-[#124B7F]">
                  <Image src="/images/apply/apply_gift.svg" alt="" width={24} height={24} className="size-8" />
                </span>
                <div className="min-w-0 text-left">
                  <h3 className="text-[14px] font-semibold leading-[1.3]">베타테스터가 되면</h3>
                  <ul className="mt-2 text-[12px] font-medium leading-[1.25] tracking-[-0.02em]">
                    <li>- 알람의 정석을 무료로 먼저 경험할 수 있어요</li>
                    <li>- 사용하면서 느낀 의견을 전하고,</li>
                    <li className="pl-[7px]">제품 개선 과정에 함께할 수 있어요</li>
                  </ul>
                </div>
              </div>

              <p className="relative z-10 mt-7 text-center text-[12px] font-medium leading-[1.3] text-Gray">
                테스트 일정이 확정되면 선정된 분에게 전화번호로
                <br />
                일정 및 참여방법을 개별 안내드립니다
              </p>
            </div>

            <ApplyForm
              type="betatest"
              onSuccess={() => {
                setView('betatest_done')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
          </div>
        )}

        {/* ========================================================
            VIEW 5: Beta Test Success (APPLY_Betatest2_M.png)
            ======================================================== */}
        {view === 'betatest_done' && (
          <div className="flex min-h-[calc(100svh-7rem)] flex-col items-center text-center sm:min-h-[calc(100svh-9rem)]">
            <Image
              src="/images/product/product_potch_big.png"
              alt="알람의 정석 베타테스트 제품"
              width={1140}
              height={800}
              priority
              className="h-auto w-[190px] object-contain sm:w-[220px] mt-3"
            />

            <h1 className="mt-5 text-[28px] font-bold leading-[1.25] tracking-[-0.035em] text-White">
              신청이 정상적으로
              <br />
              접수되었습니다 💌
            </h1>

            <p className="mt-6 text-[14px] font-medium leading-[1.3] tracking-[-0.025em] text-White">
              알람의 정석 베타테스트에 관심을 가져주셔서 감사합니다
            </p>

            <p className="mt-6 text-[14px] font-medium leading-[1.3] tracking-[-0.025em] text-Gray2">
              베타테스트 일정과 참여 방법이 확정되면
              <br />
              신청해주신 전화번호를 통해 안내드리겠습니다
            </p>

            <p className="mt-6 text-[12px] font-medium leading-[1.3] tracking-[-0.02em] text-Gray2">
              ※ 베타테스터 선정 여부 및 세부 일정은 추후 개별 안내됩니다
            </p>

            <NormalButton
              href="/"
              ariaLabel="홈으로 이동하기"
              className="mt-auto min-h-[52px] w-full text-[16px] font-semibold"
            >
              홈으로 이동하기 →
            </NormalButton>
          </div>
        )}
      </div>
    </main>
  )
}
