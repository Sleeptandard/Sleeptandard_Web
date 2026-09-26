import { NormalCard } from '@/components/ui/normal-card'

export function TeamMessageSection() {
  return (
    <section className="flex min-h-svh w-full snap-center items-center justify-center bg-KeyReal px-5 py-20">
      <div className="mx-auto w-full max-w-xl">
        <div className="text-center">
          <p className="text-[16px] leading-normal text-Gray2">
            TEAM Sleeptandard
          </p>
          <h2 className="mt-5 font-display text-[24px] font-bold leading-[1.35] tracking-[-0.025em] text-White">
            당연했던 수면의 방식에
            <br />
            질문을 던지는 사람들
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          <NormalCard className="flex h-[78px] w-[72%] max-w-[320px] items-center justify-center self-start rounded-[30px] p-0 text-[16px] font-bold text-White">
            QUESTION
          </NormalCard>
          <NormalCard className="flex h-[78px] w-[72%] max-w-[320px] items-center justify-center self-end rounded-[30px] p-0 text-[16px] font-bold text-White">
            APPLY
          </NormalCard>
          <NormalCard className="flex h-[78px] w-[72%] max-w-[320px] items-center justify-center self-start rounded-[30px] p-0 text-[16px] font-bold text-White">
            REDEFINE
          </NormalCard>
        </div>
      </div>
    </section>
  )
}
