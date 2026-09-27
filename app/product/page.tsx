import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProductFaqAccordion } from '@/components/product/faq-accordion'
import { ProductHeroSection } from '@/components/product/product-hero-section'
import { ProductMorningSection } from '@/components/product/product-morning-section'
import { ProductDeviceSection } from '@/components/product/product-device-section'
import { ProductWakeTimingSection } from '@/components/product/product-wake-timing-section'
import { ProductWearabilitySection } from '@/components/product/product-wearability-section'
import { ProductSensorSection } from '@/components/product/product-sensor-section'
import { ProductAnalysisSection } from '@/components/product/product-analysis-section'
import { ProductOptimalWakeSection } from '@/components/product/product-optimal-wake-section'
import { ProductPersonalizationSection } from '@/components/product/product-personalization-section'

export const metadata: Metadata = {
  title: '알람의 정석 | Sleeptandard',
  description: '실시간 수면 상태 기반 웨어러블 알람 - 알람의 정석',
}

export default function ProductPage() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <ProductHeroSection />
      <ProductMorningSection />
      <ProductWakeTimingSection />
      <ProductDeviceSection />
      <ProductWearabilitySection />
      <ProductSensorSection />
      <ProductAnalysisSection />
      <ProductOptimalWakeSection />
      <ProductPersonalizationSection />

      {/* ---------------------------------------------------- */}
      {/* 10. FINAL CTA BANNER (Wide Panoramic Gradient)      */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-gradient-to-b from-[#020b17] via-[#041c33] to-[#072d50] text-white pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          {/* Logo Mark */}
          <div className="relative w-48 sm:w-56 h-12 mx-auto mb-8">
            <Image
              src="/images/product/brand-logo-dark.png"
              alt="알람의 정석"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            더 빠르고, 더 가깝게
            <br />
            알람의 정석을 먼저 만나보세요
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-xl mx-auto">
            개발 소식을 먼저 받아보고, 무료 베타테스트에 참여해
            <br className="hidden sm:inline" />
            가장 개운한 기상을 누구보다 먼저 경험해 보세요.
          </p>

          {/* Dual Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto min-w-[180px] inline-flex items-center justify-center rounded-full border border-sky-400/40 bg-[#092947] hover:bg-[#0c375e] active:scale-[0.98] py-4 px-8 text-sm sm:text-base font-semibold text-white transition-all shadow-lg shadow-sky-950/40"
            >
              개발소식 레터
            </Link>
            <Link
              href="/apply"
              className="w-full sm:w-auto min-w-[180px] inline-flex items-center justify-center gap-2 rounded-full bg-[#0a58ca] hover:bg-[#0c66eb] active:scale-[0.98] py-4 px-8 text-sm sm:text-base font-bold text-white transition-all shadow-xl shadow-blue-600/35"
            >
              <span>베타테스트 신청</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 11. FAQ SECTION                                      */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#f7f8f9] pt-20 md:pt-28 pb-24 md:pb-32 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-700">
              Questions & Answers
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              자주 묻는 질문 (FAQ)
            </h2>
          </div>

          <ProductFaqAccordion />

          {/* Sleep Standard Brand Emblem */}
          <div className="mt-20 flex justify-center">
            <div className="relative w-48 h-14 opacity-90 transition-opacity hover:opacity-100">
              <Image
                src="/images/logo/logo.png"
                alt="Sleeptandard"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
