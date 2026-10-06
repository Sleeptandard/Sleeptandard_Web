import { Metadata } from 'next'
import { ProductFaqSection } from '@/components/product/product-faq-section'
import { ProductHeroSection } from '@/components/product/product-hero-section'
import { ProductMorningSection } from '@/components/product/product-morning-section'
import { ProductDeviceSection } from '@/components/product/product-device-section'
import { ProductWakeTimingSection } from '@/components/product/product-wake-timing-section'
import { ProductWearabilitySection } from '@/components/product/product-wearability-section'
import { ProductSensorSection } from '@/components/product/product-sensor-section'
import { ProductAnalysisSection } from '@/components/product/product-analysis-section'
import { ProductOptimalWakeSection } from '@/components/product/product-optimal-wake-section'
import { ProductPersonalizationSection } from '@/components/product/product-personalization-section'
import { ProductCtaSection } from '@/components/product/product-cta-section'
import { PageScrollContainer } from '@/components/ui/page-scroll-container'

export const metadata: Metadata = {
  title: '알람의 정석 | 수면 상태 기반 초소형 웨어러블 알람',
  description:
    '같은 시간을 자도, 언제 깨느냐에 따라 아침은 달라집니다. 알람의 정석은 실시간 수면 상태를 분석해 최적의 기상 타이밍에 깨워주는 웨어러블 알람입니다.',
  openGraph: {
    title: '알람의 정석 | 수면 상태 기반 초소형 웨어러블 알람',
    description:
      '언제 깨느냐에 따라 아침은 달라집니다. 알람의 정석은 실시간 수면 상태를 분석해 최적의 기상 타이밍을 찾아 깨워줍니다.',
    url: '/product',
    images: [
      {
        url: '/SoAGOimage.png',
        width: 1200,
        height: 630,
        alt: '알람의 정석 | 수면 상태 기반 초소형 웨어러블 알람',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '알람의 정석 | 수면 상태 기반 초소형 웨어러블 알람',
    description:
      '언제 깨느냐에 따라 아침은 달라집니다. 알람의 정석은 실시간 수면 상태를 분석해 최적의 기상 타이밍을 찾아 깨워줍니다.',
    images: ['/SoAGOimage.png'],
  },
}

export default function ProductPage() {
  return (
    <PageScrollContainer className="w-full overflow-x-clip bg-background font-sans text-foreground">
      <ProductHeroSection />
      <ProductMorningSection />
      <ProductWakeTimingSection />
      <ProductDeviceSection />
      <ProductWearabilitySection />
      <ProductSensorSection />
      <ProductAnalysisSection />
      <ProductOptimalWakeSection />
      <ProductPersonalizationSection />
      <ProductCtaSection />

      <ProductFaqSection />
    </PageScrollContainer>
  )
}
