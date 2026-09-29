import Image from 'next/image'
import { HeroLine } from '@/components/home/hero-line'
import { HomeRevealSection } from '@/components/home/home-reveal-section'

export function HeroSection() {
  return (
    <HomeRevealSection name="hero" className="home-hero relative flex min-h-svh w-full snap-center items-center justify-center overflow-hidden bg-[linear-gradient(180deg,var(--Key)_0%,var(--KeyReal)_100%)] px-5 pt-16">
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

      <div className="home-hero-content relative z-10 flex flex-col items-center text-center gap-2">
        <p className="home-hero-copy home-reveal-target text-[18px] leading-normal text-Gray2">
          We are Sleeptandard.
        </p>
        <div aria-hidden="true" className="home-hero-copy home-reveal-target mt-3 h-[2px] w-[46px] bg-Gray2" />

        <h1 className="home-hero-copy home-reveal-target mt-4 font-display text-[40px] font-bold leading-[1.2] tracking-[-0.03em] text-White">
          수면의 기준을
          <br />
          다시 세웁니다
        </h1>

        <HeroLine />
      </div>
    </HomeRevealSection>
  )
}
