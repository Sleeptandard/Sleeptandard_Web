import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Heart,
  Activity,
  Thermometer,
  Wind,
  User,
  Zap,
  MoreHorizontal,
  Waves,
} from 'lucide-react'
import { ProductFaqAccordion } from '@/components/product/faq-accordion'

export const metadata: Metadata = {
  title: '알람의 정석 | Sleeptandard',
  description: '실시간 수면 상태 기반 웨어러블 알람 - 알람의 정석',
}

const BIOMETRIC_SENSORS = [
  { label: '심박', icon: Heart },
  { label: '호흡변이도', icon: Waves },
  { label: '심박변이도', icon: Activity },
  { label: '체온', icon: Thermometer },
  { label: '맥파', icon: Zap },
  { label: '움직임', icon: User },
  { label: '호흡', icon: Wind },
  { label: '···', icon: MoreHorizontal },
]

export default function ProductPage() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground overflow-x-hidden pt-16">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION (Linen Fabric Texture + Device)       */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#EAE6E1] overflow-hidden">
        {/* Soft Ambient Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7)_0%,_transparent_70%)] pointer-events-none" />

        <div className="relative mx-auto max-w-lg px-6 pt-12 pb-16 flex flex-col items-center text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-600 mb-2">
            실시간 수면 상태 기반 웨어러블 알람
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0D3559] mb-6">
            알람의 정석
          </h1>

          {/* Device on Bed Image */}
          <div className="relative w-full max-w-sm aspect-[4/3] my-2">
            <Image
              src="/images/product/hero-device.png"
              alt="알람의 정석 웨어러블 디바이스"
              fill
              priority
              className="object-contain drop-shadow-xl"
            />
          </div>

          {/* Hero CTA Button */}
          <div className="mt-6 w-full max-w-xs">
            <Link
              href="/apply"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#2F526F] hover:bg-[#25425b] active:scale-[0.98] py-4 px-8 text-base font-bold text-white shadow-lg shadow-slate-900/20 transition-all duration-200"
            >
              베타테스트 신청
            </Link>
          </div>
        </div>

        {/* Curved Wave Transition to Problem Section */}
        <div className="w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 80"
            className="w-full h-8 sm:h-12 text-[#f5f6f8] fill-current preserve-3d"
          >
            <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. PROBLEM AWARENESS ("About morning")               */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#f5f6f8] pt-8 pb-0">
        <div className="mx-auto max-w-lg px-6 text-center">
          <span className="text-xs sm:text-sm font-semibold text-sky-700 tracking-wider">
            About morning
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug">
            이런 아침,
            <br />
            익숙하지 않으신가요?
          </h2>

          {/* 3 Problem Cards */}
          <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-4">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md shadow-slate-300/60 bg-white">
                <Image
                  src="/images/product/problem-1.png"
                  alt="알람이 울렸나요? 다시 잠들어 늦잠"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-[11px] sm:text-xs font-semibold text-slate-800 leading-tight">
                알람이 울렸나요?
                <br />
                <span className="text-slate-900">다시 잠들어 늦잠</span>
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md shadow-slate-300/60 bg-white">
                <Image
                  src="/images/product/problem-2.png"
                  alt="'5분만 더...'가 어느새 1시간"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-[11px] sm:text-xs font-semibold text-slate-800 leading-tight">
                ‘5분만 더...’가
                <br />
                <span className="text-slate-900">어느새 1시간</span>
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md shadow-slate-300/60 bg-white">
                <Image
                  src="/images/product/problem-3.png"
                  alt="충분히 잤는데도 너무 피곤한 아침"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-[11px] sm:text-xs font-semibold text-slate-800 leading-tight">
                충분히 잤는데도
                <br />
                <span className="text-slate-900">너무 피곤한 아침</span>
              </p>
            </div>
          </div>
        </div>

        {/* Arch Dark Blue Dome Banner */}
        <div className="relative mt-12 w-full">
          <div className="relative w-full aspect-[1440/500] max-w-lg mx-auto">
            <Image
              src="/images/product/problem-arch.png"
              alt="문제는 당신의 의지가 아니라 기상 타이밍일 수 있습니다"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. PRINCIPLE SECTION (Hypnogram & Golden Moment)    */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#f5f6f8] pt-12 pb-16">
        <div className="mx-auto max-w-lg px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug">
            잠에서 개운하게 깰 수 있는
            <br />
            ‘순간’은 존재합니다
          </h2>

          {/* Hypnogram Chart Card */}
          <div className="relative mt-8 w-full aspect-[1360/950] rounded-2xl overflow-hidden shadow-sm bg-white/70">
            <Image
              src="/images/product/hypnogram-chart.png"
              alt="수면 단계 및 신체 각성도에 따른 깨어나기 좋은 순간"
              fill
              className="object-contain"
            />
          </div>

          {/* Subtext */}
          <div className="mt-12">
            <p className="text-lg sm:text-xl font-medium text-slate-700 leading-relaxed">
              같은 7시간을 자도
              <br />
              <strong className="font-extrabold text-[#0D3559]">언제 깨는가</strong>에 따라
              <br />
              아침은 달라질 수 있습니다
            </p>
          </div>

          {/* Comparison Cards (Tired vs Refreshed) */}
          <div className="relative mt-8 w-full aspect-[1300/1450]">
            <Image
              src="/images/product/comparison-cards.png"
              alt="깊은 수면 + 낮은 각성도 vs 얕은 수면 + 높은 각성도 비교"
              fill
              className="object-contain drop-shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. BRAND & 3D DEVICE SHOWCASE (Deep Navy Theme)     */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#031d37] text-white pt-16 pb-12 overflow-hidden">
        <div className="mx-auto max-w-lg px-6">
          {/* Logo Mark */}
          <div className="relative w-48 sm:w-56 h-12 mb-6">
            <Image
              src="/images/product/brand-logo-dark.png"
              alt="알람의 정석"
              fill
              className="object-contain object-left"
            />
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-md">
            알람의 정석은, 정해진 시간에 깨우는 알람을 넘어
            <br />
            내 몸의 상태를 살펴 가장 개운하게 일어날 수 있는
            <br />
            <strong className="text-white font-bold">순간</strong>을 찾는 웨어러블 알람입니다.
          </p>

          {/* 3D Device Closeup */}
          <div className="relative w-full aspect-[1440/1450] mt-6">
            <Image
              src="/images/product/device-3d.png"
              alt="알람의 정석 3D 디바이스"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. WEARABILITY & COMFORT (Sleeping Person & Badges)  */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#031427] text-white pt-12 pb-8 overflow-hidden">
        <div className="mx-auto max-w-lg px-6 mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
            가볍게 착용하고
            <br />
            평소처럼 잠들면 됩니다
          </h2>
        </div>

        {/* Sleeping Person Image with 4 Glassmorphic Badges */}
        <div className="relative w-full max-w-lg mx-auto aspect-[1440/2200]">
          <Image
            src="/images/product/wearing-sleep.png"
            alt="인체공학적 설계, KC인증 모듈, 5g 초경량, 의료등급 실리콘 소재 착용 모습"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. BIOMETRIC MULTI-SENSOR SENSING GRID               */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#020b17] text-white pt-12 pb-16">
        <div className="mx-auto max-w-lg px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug text-white">
            수면 중 몸의
            <br />
            여러 신호를 측정합니다
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
            알람의 정석 웨어러블이 매일 밤 당신의 생체 신호를 정밀하게 분석합니다.
          </p>

          {/* 2-Column Sensor Grid */}
          <div className="mt-8 grid grid-cols-2 gap-y-5 gap-x-6">
            {BIOMETRIC_SENSORS.map((sensor, i) => {
              const IconComp = sensor.icon
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0c3960] to-[#06203a] border border-sky-400/20 shadow-md shadow-sky-950/40 text-sky-300">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold tracking-tight text-slate-200">
                    {sensor.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. REAL-TIME ANALYSIS & INFERENCE CARDS              */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#020b17] text-white pt-6 pb-16">
        <div className="mx-auto max-w-lg px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug text-white">
            실시간 수면단계와
            <br />
            각성도를 추론합니다
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
            자체 알고리즘이 생체신호의 파형과 변화를 실시간으로 분석해 사용자의 수면 상태를 추론합니다
          </p>

          {/* Card 1: Sleep Stage Analysis */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-white">수면단계 분석</h3>
            <p className="text-xs text-slate-400 mt-1 mb-3">수면 사이클과 4class 수면 단계 판별</p>
            <div className="relative w-full aspect-[1280/860] rounded-2xl overflow-hidden">
              <Image
                src="/images/product/sleep-stage-card.png"
                alt="수면 사이클과 4class 수면 단계 판별 그래프"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Card 2: Arousal Analysis */}
          <div className="mt-12">
            <h3 className="text-lg font-bold text-white">각성도 분석</h3>
            <p className="text-xs text-slate-400 mt-1 mb-3">
              3대 각성 지표 연산을 통해 현재 몸이 얼마나 깨기 쉬운 상태인지 판별
            </p>
            <div className="relative w-full aspect-[1280/950] rounded-2xl overflow-hidden">
              <Image
                src="/images/product/arousal-gauge-card.png"
                alt="자율 신경계, 체성 신경계, 서카디안 리듬 3대 각성 지표 게이지"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-4 border-t border-slate-800/80">
            <h4 className="text-xs font-semibold text-slate-400 mb-1">측정 결과에 대한 주의사항</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              제공하는 수면단계와 각성도는 웨어러블 센서로 측정한 생체신호 기반 추정값입니다. 개인의 착용 상태와 환경에 따라 결과가 달라질 수 있으며, 의학적 진단이나 치료를 목적으로 하지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. OPTIMAL WAKE-UP TIMING (15-min Window)            */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#020b17] text-white pt-8 pb-16">
        <div className="mx-auto max-w-lg px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug text-white">
            분석한 수면 상태를 기반으로,
            <br />
            최적의 기상 타이밍에 깨워드립니다
          </h2>

          {/* Optimal Timing Chart */}
          <div className="relative w-full aspect-[1440/1000] mt-8">
            <Image
              src="/images/product/optimal-timing-chart.png"
              alt="수면이 얕아지고 각성도가 높아지는 순간 최대 15분 알람 구간"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 9. PERSONALIZATION & LEARNING PROGRESSION            */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#020b17] text-white pt-8 pb-16">
        <div className="mx-auto max-w-lg px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug text-white">
            쓰면 쓸수록
            <br />
            개인화되는 알람
          </h2>

          {/* Glowing Silhouette Head with Biometrics */}
          <div className="relative w-full aspect-[1360/900] mt-6">
            <Image
              src="/images/product/personalization-head.png"
              alt="개인화되는 알람 생체 신호(심박, 호흡, 체온)"
              fill
              className="object-contain"
            />
          </div>

          {/* Feedback Score Progression Chart */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-white mb-2">피드백 점수</h3>
            <div className="relative w-full aspect-[1300/980]">
              <Image
                src="/images/product/feedback-score-chart.png"
                alt="1일차 20점, 7일차 30점, 40일차 60점 피드백 점수 상승 그래프"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Explanation Text */}
          <div className="mt-8 text-xs sm:text-sm text-slate-400 space-y-3 leading-relaxed">
            <p>사람마다 심박, 움직임, 체온과 같은 생체신호의 기준은 다릅니다.</p>
            <p>
              알람의 정석은 <strong className="text-slate-200 font-semibold">개인별 생체신호의 차이</strong>를 반영하고, 사용 기록과 피드백 바탕으로 분석 기준을 조정합니다.
            </p>
            <p>
              따라서, 기록이 쌓일수록 사용자의 <strong className="text-slate-200 font-semibold">수면 패턴과 기상 반응</strong>을 더 잘 반영할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 10. FINAL CTA BANNER                                */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-gradient-to-b from-[#020b17] via-[#041c33] to-[#072d50] text-white pt-16 pb-20">
        <div className="mx-auto max-w-lg px-6 text-center">
          {/* Logo Mark */}
          <div className="relative w-48 sm:w-56 h-12 mx-auto mb-6">
            <Image
              src="/images/product/brand-logo-dark.png"
              alt="알람의 정석"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
            더 빠르고, 더 가깝게
            <br />
            알람의 정석을 먼저 만나보세요
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
            개발 소식을 먼저 받아보고, 무료 베타테스트에 참여해
            <br />
            가장 개운한 기상을 누구보다 먼저 만나보세요.
          </p>

          {/* Dual Buttons */}
          <div className="mt-8 flex flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="flex-1 max-w-[170px] inline-flex items-center justify-center rounded-full border border-sky-400/40 bg-[#092947] hover:bg-[#0c375e] active:scale-[0.98] py-3.5 px-4 text-xs sm:text-sm font-semibold text-white transition-all shadow-md shadow-sky-950/40"
            >
              개발소식 레터
            </Link>
            <Link
              href="/apply"
              className="flex-1 max-w-[170px] inline-flex items-center justify-center rounded-full bg-[#0a58ca] hover:bg-[#0c66eb] active:scale-[0.98] py-3.5 px-4 text-xs sm:text-sm font-semibold text-white transition-all shadow-lg shadow-blue-600/30"
            >
              베타테스트 신청
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 11. FAQ SECTION                                      */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#f7f8f9] pt-16 pb-20 border-t border-slate-200/70">
        <div className="mx-auto max-w-lg px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-8">
            FAQ
          </h2>

          <ProductFaqAccordion />

          {/* Sleep Standard Brand Emblem */}
          <div className="mt-16 flex justify-center">
            <div className="relative w-44 h-12 opacity-90">
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
