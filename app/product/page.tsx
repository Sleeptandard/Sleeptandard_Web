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
  ShieldCheck,
  Feather,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { ProductFaqAccordion } from '@/components/product/faq-accordion'

export const metadata: Metadata = {
  title: '알람의 정석 | Sleeptandard',
  description: '실시간 수면 상태 기반 웨어러블 알람 - 알람의 정석',
}

const BIOMETRIC_SENSORS = [
  { label: '심박', icon: Heart, desc: '실시간 심박수 측정' },
  { label: '호흡변이도', icon: Waves, desc: '호흡 주기 및 변동성' },
  { label: '심박변이도', icon: Activity, desc: 'HRV 기반 자율신경 분석' },
  { label: '체온', icon: Thermometer, desc: '미세 체온 변화 감지' },
  { label: '맥파', icon: Zap, desc: '말초 혈류 맥파 파형' },
  { label: '움직임', icon: User, desc: '3축 모션 및 뒤척임' },
  { label: '호흡', icon: Wind, desc: '수면 중 호흡 안정도' },
  { label: '···', icon: MoreHorizontal, desc: '복합 생체 지표' },
]

const WEARABILITY_FEATURES = [
  {
    icon: Feather,
    title: '인체공학적 설계',
    desc: '곡면 밀착 구조로 밤새 뒤척여도 편안하게 착용',
  },
  {
    icon: ShieldCheck,
    title: 'KC인증 안전 모듈',
    desc: '전자파 및 발열 테스트를 통과한 안전한 설계',
  },
  {
    icon: Sparkles,
    title: '동전보다 작은 5g',
    desc: '초경량 초소형 디바이스로 수면 중 이물감 제로',
  },
  {
    icon: CheckCircle2,
    title: '의료등급 실리콘',
    desc: '매일 피부에 부착해도 트러블·자극 없는 안전 소재',
  },
]

export default function ProductPage() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground overflow-x-hidden pt-16 font-sans">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION (Linen Texture + Device + Responsive) */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#EAE6E1] overflow-hidden">
        {/* Soft Ambient Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_rgba(255,255,255,0.85)_0%,_transparent_75%)] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left Content (Text & CTA) */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0D3559]/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-[#0D3559] mb-4">
                <Sparkles className="h-3.5 w-3.5 text-[#0D3559]" />
                실시간 수면 상태 기반 웨어러블 알람
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0D3559] leading-[1.15] mb-5">
                알람의 정석
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed mb-8 max-w-md">
                정해진 시간에 무조건 울리는 시끄러운 알람은 그만.
                <br className="hidden sm:inline" />
                내 몸의 수면 상태를 분석해 가장 상쾌하게 일어날 수 있는 순간에 깨워드립니다.
              </p>

              {/* CTA Button */}
              <div className="w-full sm:w-auto">
                <Link
                  href="/apply"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#2F526F] hover:bg-[#203c54] active:scale-[0.98] py-4 px-9 text-base font-bold text-white shadow-xl shadow-slate-900/25 transition-all duration-200"
                >
                  <span>베타테스트 신청</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Showcase (Device resting on bed) */}
            <div className="flex-1 w-full max-w-md lg:max-w-lg flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/images/product/hero-device.png"
                  alt="알람의 정석 웨어러블 디바이스"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Curved Wave Transition to Problem Section */}
        <div className="w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 80"
            className="w-full h-8 sm:h-12 md:h-16 text-[#f5f6f8] fill-current preserve-3d"
          >
            <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. PROBLEM AWARENESS ("About morning")               */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#f5f6f8] pt-12 md:pt-20 pb-0">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-sky-700">
            About morning
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-snug">
            이런 아침,
            <br />
            익숙하지 않으신가요?
          </h2>

          {/* 3 Problem Cards (Responsive: 1 col on mobile, 3 cols on desktop) */}
          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-md sm:max-w-3xl lg:max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="group flex flex-col items-center text-center p-4 rounded-3xl bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="relative w-full max-w-[240px] aspect-square rounded-2xl overflow-hidden shadow-md shadow-slate-300/50 bg-white group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/product/problem-1.png"
                  alt="알람이 울렸나요? 다시 잠들어 늦잠"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm sm:text-base font-bold text-slate-800 leading-snug">
                알람이 울렸나요?
                <br />
                <span className="text-slate-900 font-extrabold">다시 잠들어 늦잠</span>
              </p>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col items-center text-center p-4 rounded-3xl bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="relative w-full max-w-[240px] aspect-square rounded-2xl overflow-hidden shadow-md shadow-slate-300/50 bg-white group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/product/problem-2.png"
                  alt="'5분만 더...'가 어느새 1시간"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm sm:text-base font-bold text-slate-800 leading-snug">
                ‘5분만 더...’가
                <br />
                <span className="text-slate-900 font-extrabold">어느새 1시간</span>
              </p>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col items-center text-center p-4 rounded-3xl bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="relative w-full max-w-[240px] aspect-square rounded-2xl overflow-hidden shadow-md shadow-slate-300/50 bg-white group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/product/problem-3.png"
                  alt="충분히 잤는데도 너무 피곤한 아침"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm sm:text-base font-bold text-slate-800 leading-snug">
                충분히 잤는데도
                <br />
                <span className="text-slate-900 font-extrabold">너무 피곤한 아침</span>
              </p>
            </div>
          </div>
        </div>

        {/* Arch Dark Blue Dome Banner */}
        <div className="relative mt-12 md:mt-16 w-full">
          <div className="relative w-full aspect-[1440/500] max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
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
      <section className="relative w-full bg-[#f5f6f8] pt-12 md:pt-20 pb-20 md:pb-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-snug">
            잠에서 개운하게 깰 수 있는
            <br />
            ‘순간’은 존재합니다
          </h2>

          {/* Hypnogram Chart Card */}
          <div className="relative mt-8 md:mt-12 w-full max-w-3xl mx-auto aspect-[1360/950] rounded-3xl overflow-hidden shadow-lg shadow-slate-300/60 bg-white/90 border border-slate-200/80 p-2 sm:p-4">
            <Image
              src="/images/product/hypnogram-chart.png"
              alt="수면 단계 및 신체 각성도에 따른 깨어나기 좋은 순간"
              fill
              className="object-contain"
            />
          </div>

          {/* Subtext */}
          <div className="mt-12 md:mt-16">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed">
              같은 7시간을 자도
              <br />
              <strong className="font-black text-[#0D3559]">언제 깨는가</strong>에 따라
              <br />
              아침은 달라질 수 있습니다
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="relative mt-8 md:mt-12 w-full max-w-2xl lg:max-w-3xl mx-auto aspect-[1300/1450]">
            <Image
              src="/images/product/comparison-cards.png"
              alt="깊은 수면 + 낮은 각성도 vs 얕은 수면 + 높은 각성도 비교"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. BRAND & 3D DEVICE SHOWCASE (Deep Navy Theme)     */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#031d37] text-white pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">
            {/* Left Brand Copy */}
            <div className="flex flex-col items-start">
              <div className="relative w-56 sm:w-64 h-14 mb-8">
                <Image
                  src="/images/product/brand-logo-dark.png"
                  alt="알람의 정석"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6">
                정해진 시간에 깨우는 알람을 넘어,
                <br />
                <span className="text-sky-400">가장 개운한 순간</span>을 찾습니다.
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg mb-8">
                알람의 정석은 시계에 맞춰 억지로 몸을 일으키는 알람이 아닙니다.
                착용자의 수면 깊이와 신체 각성도를 실시간으로 추적하여,
                두통과 수면 관성 없이 즉시 활동할 수 있는 생체 골든타임에 부드럽게 깨워주는 웨어러블 솔루션입니다.
              </p>

              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400">
                <span className="flex items-center gap-1.5 text-sky-300 font-semibold">
                  <CheckCircle2 className="h-4 w-4" /> 실시간 생체신호 분석
                </span>
                <span className="flex items-center gap-1.5 text-sky-300 font-semibold">
                  <CheckCircle2 className="h-4 w-4" /> 15분 스마트 기상 윈도우
                </span>
              </div>
            </div>

            {/* Right 3D Device Render */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg aspect-[1440/1450] drop-shadow-2xl">
                <Image
                  src="/images/product/device-3d.png"
                  alt="알람의 정석 3D 디바이스 렌더링"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. WEARABILITY & COMFORT (Sleeping Person & Badges)  */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#031427] text-white pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400">
              Comfort & Safety
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-snug">
              가볍게 착용하고
              <br />
              평소처럼 잠들면 됩니다
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-400">
              잠을 방해하지 않는 초경량 인체공학 곡면 설계로, 착용한 것조차 잊고 편안하게 숙면을 취하세요.
            </p>
          </div>

          {/* Sleeping Person Image with Badges */}
          <div className="relative w-full max-w-3xl mx-auto aspect-[1440/2200] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/product/wearing-sleep.png"
              alt="인체공학적 설계, KC인증 모듈, 5g 초경량, 의료등급 실리콘 소재 착용 모습"
              fill
              className="object-contain"
            />
          </div>

          {/* Desktop Feature Grid (Spacious on PC) */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {WEARABILITY_FEATURES.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="flex flex-col items-start p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 mb-3">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. BIOMETRIC MULTI-SENSOR SENSING GRID               */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#020b17] text-white pt-16 md:pt-24 pb-16 md:pb-24 border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400">
              Multi-Sensory Tracking
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug text-white">
              수면 중 몸의
              <br />
              여러 신호를 측정합니다
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              알람의 정석 웨어러블이 매일 밤 당신의 생체 신호를 정밀하게 분석합니다.
            </p>
          </div>

          {/* 4-Column Sensor Grid on Desktop, 2-Column on Mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {BIOMETRIC_SENSORS.map((sensor, i) => {
              const IconComp = sensor.icon
              return (
                <div
                  key={i}
                  className="group flex flex-col items-center text-center p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-sky-500/40 transition-all duration-200 shadow-lg shadow-black/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0c3960] to-[#06203a] border border-sky-400/30 text-sky-300 mb-3 shadow-md shadow-sky-950/60 group-hover:scale-110 transition-transform">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-white mb-1">
                    {sensor.label}
                  </span>
                  <span className="text-[11px] text-slate-400 leading-tight">
                    {sensor.desc}
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
      <section className="relative w-full bg-[#020b17] text-white pt-10 md:pt-16 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400">
              AI Sleep Inference
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug text-white">
              실시간 수면단계와
              <br />
              각성도를 추론합니다
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              자체 알고리즘이 생체신호의 파형과 변화를 실시간으로 분석해 사용자의 수면 상태를 정밀하게 추론합니다.
            </p>
          </div>

          {/* 2-Column Side-by-Side Grid on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
            {/* Card 1: Sleep Stage Analysis */}
            <div className="flex flex-col p-6 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl backdrop-blur-md">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">수면단계 분석</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">수면 사이클과 4class 수면 단계 판별</p>
              <div className="relative w-full aspect-[1280/860] rounded-2xl overflow-hidden mt-auto">
                <Image
                  src="/images/product/sleep-stage-card.png"
                  alt="수면 사이클과 4class 수면 단계 판별 그래프"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Card 2: Arousal Analysis */}
            <div className="flex flex-col p-6 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl backdrop-blur-md">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">각성도 분석</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                3대 각성 지표 연산을 통해 현재 몸이 얼마나 깨기 쉬운 상태인지 판별
              </p>
              <div className="relative w-full aspect-[1280/950] rounded-2xl overflow-hidden mt-auto">
                <Image
                  src="/images/product/arousal-gauge-card.png"
                  alt="자율 신경계, 체성 신경계, 서카디안 리듬 3대 각성 지표 게이지"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-6 border-t border-slate-800/80 max-w-3xl mx-auto text-center">
            <h4 className="text-xs font-bold text-slate-400 mb-1.5">측정 결과에 대한 주의사항</h4>
            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
              제공하는 수면단계와 각성도는 웨어러블 센서로 측정한 생체신호 기반 추정값입니다. 개인의 착용 상태와 환경에 따라 결과가 달라질 수 있으며, 의학적 진단이나 치료를 목적으로 하지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. OPTIMAL WAKE-UP TIMING (15-min Window)            */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-[#020b17] text-white pt-10 md:pt-16 pb-20 md:pb-28 border-t border-slate-800/60">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400">
            Smart Wake-up Window
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug text-white">
            분석한 수면 상태를 기반으로,
            <br />
            최적의 기상 타이밍에 깨워드립니다
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            설정 시간 전 15분 동안 수면이 얕아지고 신체 각성도가 최고점에 도달하는 골든타임에 울려 수면 관성 없이 상쾌하게 일어납니다.
          </p>

          {/* Optimal Timing Chart (Wide Showcase) */}
          <div className="relative w-full max-w-3xl lg:max-w-4xl mx-auto aspect-[1440/1000] mt-10 md:mt-14 rounded-3xl overflow-hidden shadow-2xl bg-slate-900/40 border border-slate-800/60">
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
      <section className="relative w-full bg-[#020b17] text-white pt-12 md:pt-20 pb-20 md:pb-28 border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400">
              Personalized AI
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug text-white">
              쓰면 쓸수록
              <br />
              개인화되는 알람
            </h2>
          </div>

          {/* 2-Column Responsive Layout on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            {/* Left Column: Glowing Silhouette Head */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-md aspect-[1360/900] drop-shadow-2xl">
                <Image
                  src="/images/product/personalization-head.png"
                  alt="개인화되는 알람 생체 신호(심박, 호흡, 체온)"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Column: Feedback Score Progression Chart & Copy */}
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">피드백 점수</h3>
              <div className="relative w-full max-w-md aspect-[1300/980] mb-6">
                <Image
                  src="/images/product/feedback-score-chart.png"
                  alt="1일차 20점, 7일차 30점, 40일차 60점 피드백 점수 상승 그래프"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Explanation Copy */}
              <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed bg-white/[0.03] p-5 rounded-2xl border border-white/10">
                <p>사람마다 심박, 움직임, 체온과 같은 생체신호의 기준은 다릅니다.</p>
                <p>
                  알람의 정석은 <strong className="text-sky-300 font-bold">개인별 생체신호의 차이</strong>를 반영하고, 사용 기록과 피드백을 바탕으로 분석 기준을 스스로 보정합니다.
                </p>
                <p>
                  따라서 기록이 쌓일수록 사용자의 <strong className="text-sky-300 font-bold">수면 패턴과 기상 반응</strong>을 더 정확하게 반영합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
