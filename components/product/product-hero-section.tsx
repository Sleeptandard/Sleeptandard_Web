import Image from 'next/image'
import { NormalButton } from '@/components/ui/normal-button'

export function ProductHeroSection() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden bg-[#e9e4de]">
      <Image
        src="/images/product/product_hero_origin.png"
        alt="침구 위에 놓인 알람의 정석 웨어러블 디바이스"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:hidden"
      />
      <Image
        src="/images/product/product_hero_wide.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-center md:block"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/5" />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl flex-col items-center px-5 pb-[12svh] pt-[calc(4rem+8svh)] text-center md:px-12 lg:px-20">
        <div className="flex flex-col items-center">
          <p className="text-[16px] font-semibold leading-normal text-KeyPrint">
            실시간 수면 상태 기반 웨어러블 알람
          </p>
          <h1 className="mt-3">
            <Image
              src="/images/product/product_logo.svg"
              alt="알람의 정석"
              width={253}
              height={50}
              className="h-auto w-[253px] md:w-[320px]"
            />
          </h1>
        </div>

        <div
          className="mt-auto w-[min(300px,84vw)] rounded-full p-[1.5px] md:absolute md:bottom-[12%] md:left-[62%] md:w-[300px] md:-translate-x-1/2"
          style={{
            background:
              'conic-gradient(from 270deg, var(--KeyReal) 0%, #0967BC 15%, var(--SkyBlue) 25%, #0967BC 35%, var(--KeyReal) 50%, #0967BC 65%, var(--SkyBlue) 75%, #0967BC 85%, var(--KeyReal) 100%)',
          }}
        >
          <NormalButton
            href="/apply"
            borderColor="transparent"
            className="min-h-[58px] w-full border-0 bg-[linear-gradient(135deg,rgba(4,47,86,0.45)_0%,var(--KeyReal)_90%)] text-[18px] font-semibold text-White"
            ariaLabel="알람의 정석 베타테스트 신청"
          >
            베타테스트 신청
          </NormalButton>
        </div>
      </div>

    </section>
  )
}
