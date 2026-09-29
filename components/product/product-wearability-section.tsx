import Image from 'next/image'

import { ClearCard } from '@/components/ui/clear-card'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

const FEATURES = [
  {
    icon: '/images/product/product_leaf.svg',
    alt: '나뭇잎',
    align: 'self-start',
    content: (
      <>
        인체공학적 설계로
        <br />
        밤새 <strong className="font-semibold text-SkyBlue">편안하게</strong> 착용
      </>
    ),
  },
  {
    icon: '/images/product/product_kc.svg',
    alt: 'KC 인증',
    align: 'self-end',
    content: (
      <>
        <strong className="font-semibold text-SkyBlue">KC인증 모듈로</strong> 전자파,
        <br />
        등 안전 걱정 없이
      </>
    ),
  },
  {
    icon: '/images/product/product_coin.svg',
    alt: '동전',
    align: 'self-start',
    content: (
      <>
        동전보다 작은 5g
        <br />
        디바이스로 <strong className="font-semibold text-SkyBlue">이물감 없이</strong>
      </>
    ),
  },
  {
    icon: '/images/product/product_aid.svg',
    alt: '의료용 십자 기호',
    align: 'self-end',
    content: (
      <>
        매일 붙여도 <strong className="font-semibold text-SkyBlue">자극 없는</strong>
        <br />
        의료등급 실리콘 소재
      </>
    ),
  },
]

export function ProductWearabilitySection() {
  return (
    <section className="product-wearability relative h-[90svh] w-full overflow-hidden bg-Key">
      <Image
        src="/images/product/product_hero_origin.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-center md:hidden"
      />
      <Image
        src="/images/product/product_hero_wide.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="hidden object-cover object-center md:block"
      />
      <div className="absolute inset-0 bg-[rgba(5,12,22,0.62)]" />

      <div className="desktop-container relative z-10 mx-auto flex h-full w-full max-w-4xl flex-col px-6 pb-6 pt-[9svh] md:px-12">
        <h2 className="text-[24px] font-semibold leading-[1.35] tracking-[-0.025em] text-White">
          가볍게 착용하고
          <br />
          평소처럼 잠들면 됩니다
        </h2>

        <ScrollReveal name="product-wearability" className="wearability-grid scroll-reveal-cards mt-[clamp(32px,5svh,56px)] flex flex-1 flex-col justify-center gap-2">
          {FEATURES.map((feature) => (
            <ClearCard
              key={feature.icon}
              className={`scroll-reveal-item flex h-[clamp(100px,12svh,120px)] w-[52%] max-w-[210px] flex-col items-center justify-center gap-2.5 rounded-[24px] p-4 text-center ${feature.align}`}
            >
              <Image
                src={feature.icon}
                alt={feature.alt}
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <p className="text-[12px] font-medium leading-[1.25] tracking-[-0.02em] text-White">
                {feature.content}
              </p>
            </ClearCard>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
