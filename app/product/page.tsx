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

export const metadata: Metadata = {
  title: '알람의 정석 | Sleeptandard',
  description: '실시간 수면 상태 기반 웨어러블 알람 - 알람의 정석',
}

export default function ProductPage() {
  return (
    <div className="h-svh w-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll overscroll-y-contain scroll-smooth bg-background font-sans text-foreground [&>section:not([data-split-snap])]:scroll-mt-12 [&>section:not([data-split-snap])]:snap-center [&>section:not([data-split-snap])]:snap-always">
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
    </div>
  )
}
