import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { NormalButton } from '@/components/ui/normal-button'

export function TeamCreateSection() {
  return (
    <section aria-labelledby="team-create-title" className="bg-KeyReal px-5 py-[68px] text-center text-White sm:py-24">
      <div className="mx-auto w-full max-w-xl">
        <h2 id="team-create-title" className="text-[24px] font-bold leading-[1.2] tracking-[-0.025em] text-SkyBlue">
          What we create
        </h2>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <p className="text-[18px] font-semibold leading-[1.4] tracking-[-0.04em]">그래서, 우리가 만드는</p>
          <Image
            src="/images/team/team_logo.png"
            alt="알람의 정석"
            width={223}
            height={53}
            className="h-auto w-[104px]"
          />
        </div>

        <p className="mt-5 text-[18px] font-normal leading-[1.25] tracking-[-0.035em]">
          Sleeptandard가 만들고 있는
          <br />
          <strong className="font-semibold">완전히 새로운 알람</strong>을 만나보세요
        </p>

        <NormalButton
          href="/product"
          background="linear-gradient(135deg, #0967BC 0%, #042F56 100%)"
          borderColor="#FFFFFF"
          textColor="var(--White)"
          className="mt-10 min-h-[56px] w-full gap-1.5 text-[16px] font-semibold focus-visible:ring-SkyBlue focus-visible:ring-offset-KeyReal"
        >
          지금 바로 알아보기
          <ArrowRight aria-hidden="true" className="size-4" />
        </NormalButton>
      </div>
    </section>
  )
}
