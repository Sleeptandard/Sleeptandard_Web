'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function TeamHeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const beamRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const beam = beamRef.current
    const dot = dotRef.current
    const nextSection = section?.nextElementSibling
    if (!section || !beam || !dot || !(nextSection instanceof HTMLElement)) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const update = () => {
      frame = 0
      // Track progress from the hero into the next section.
      const scrollTop = window.scrollY
      const start = section.getBoundingClientRect().top + scrollTop
      const end = nextSection.getBoundingClientRect().top + scrollTop - parseFloat(getComputedStyle(nextSection).scrollMarginTop)
      const progress = Math.min(1, Math.max(0, (scrollTop - start) / Math.max(1, end - start)))

      beam.style.opacity = String(progress)
      dot.style.transform = `translateY(${(reducedMotion.matches ? 1 : progress) * beam.clientHeight}px)`
    }

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    const observer = new ResizeObserver(scheduleUpdate)
    observer.observe(section)
    observer.observe(nextSection)
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    reducedMotion.addEventListener('change', scheduleUpdate)
    update()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      reducedMotion.removeEventListener('change', scheduleUpdate)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="team-hero-title"
      className="team-hero relative flex h-svh min-h-[560px] flex-col overflow-hidden bg-[linear-gradient(180deg,var(--Key)_0%,var(--KeyReal)_100%)] px-5 text-White"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 mx-auto max-w-6xl select-none">
        <Image
          src="/images/home/home_glassicon1.png"
          alt=""
          width={102}
          height={103}
          priority
          className="absolute -left-9 top-[18%] h-auto w-[clamp(102px,20vw,170px)]"
        />
        <Image
          src="/images/home/home_glassicon2.png"
          alt=""
          width={46}
          height={45}
          priority
          className="absolute right-[6%] top-[32%] h-auto w-[clamp(46px,8vw,72px)]"
        />
        <Image
          src="/images/home/home_glassicon3.png"
          alt=""
          width={218}
          height={215}
          priority
          className="absolute -right-12 top-[62%] h-auto w-[clamp(140px,28vw,250px)]"
        />
      </div>

      <div className="relative z-10 mx-auto mt-[max(160px,34svh)] w-full max-w-xl text-center">
        <h1 id="team-hero-title" className="text-[40px] font-bold leading-[1.2] tracking-[-0.03em]">
          We are
          <span className="sr-only"> Sleeptandard</span>
        </h1>
        <span
          aria-hidden="true"
          className="mx-auto mt-1 block aspect-[128/37] w-[82%] max-w-[360px] bg-[#E8F3FF]"
          style={{
            maskImage: 'url(/images/logo/logo.svg)',
            WebkitMaskImage: 'url(/images/logo/logo.svg)',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
          }}
        />
        <p className="mt-8 text-balance text-[18px] font-semibold leading-[1.4] tracking-[-0.04em]">
          더 나은 수면의 기준을 만들어가는 사람들
        </p>
        <div
          aria-hidden="true"
          className="mt-4 h-px w-full bg-[linear-gradient(90deg,transparent_0%,transparent_17%,var(--SkyBlue)_50%,transparent_79%,transparent_100%)]"
        />
      </div>

      <div
        ref={beamRef}
        aria-hidden="true"
        className="pointer-events-none relative z-10 mx-auto mb-[5svh] min-h-12 w-px flex-1 bg-[linear-gradient(180deg,rgba(4,47,86,0)_0%,var(--KeyReal)_39%,#FFFFFF_85%,#FFFFFF_100%)] opacity-0"
      >
        <span ref={dotRef} className="absolute -left-[3px] -top-[3px] size-[7px] rounded-full bg-white shadow-[0_0_6px_5px_rgba(255,255,255,0.6)] will-change-transform" />
      </div>
    </section>
  )
}
