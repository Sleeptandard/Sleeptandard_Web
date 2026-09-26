import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh w-full snap-center items-center justify-center overflow-hidden bg-[linear-gradient(180deg,var(--Key)_0%,var(--KeyReal)_100%)] px-5 pt-16">
      <Image
        src="/images/home/home_glassicon1.png"
        alt=""
        aria-hidden="true"
        width={102}
        height={103}
        priority
        className="pointer-events-none absolute left-[-36px] top-[18%] h-auto w-[clamp(102px,12vw,170px)] select-none"
      />
      <Image
        src="/images/home/home_glassicon2.png"
        alt=""
        aria-hidden="true"
        width={46}
        height={45}
        priority
        className="pointer-events-none absolute right-[8%] top-[32%] h-auto w-[clamp(46px,5vw,72px)] select-none"
      />
      <Image
        src="/images/home/home_glassicon3.png"
        alt=""
        aria-hidden="true"
        width={218}
        height={215}
        priority
        className="pointer-events-none absolute bottom-[-58px] right-[-62px] h-auto w-[clamp(218px,28vw,360px)] select-none"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-[18px] leading-normal text-Gray2">
          We are Sleeptandard.
        </p>
        <div aria-hidden="true" className="mt-3 h-px w-[46px] bg-Gray2" />

        <h1 className="mt-4 font-display text-[40px] font-bold leading-[1.2] tracking-[-0.03em] text-White">
          수면의 기준을
          <br />
          다시 세웁니다
        </h1>

        <div
          aria-hidden="true"
          className="relative mt-8 h-px w-[246px] bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(4,47,86,0.5)_50%,#FFFFFF_100%)]"
        >
          <span className="absolute left-0 top-1/2 size-[5px] -translate-y-1/2 rounded-full bg-white shadow-[0_0_6px_5px_rgba(255,255,255,0.6)]" />
        </div>
      </div>
    </section>
  )
}
