import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Team | Sleeptandard',
  description: '더 나은 수면의 기준을 만들어가는 Sleeptandard 팀을 소개합니다.',
}

const VALUE_CARDS = [
  {
    key: 'question',
    title: 'QUESTION',
    descLine1: '당연하게 여겨온 수면에',
    descLine2: '질문을 던지고',
    image: '/images/team/card_val_question.png',
  },
  {
    key: 'apply',
    title: 'APPLY',
    descLine1: '새로운 방식을',
    descLine2: '실제 삶에 적용하고',
    image: '/images/team/card_val_apply.png',
  },
  {
    key: 'redefine',
    title: 'REDEFINE',
    descLine1: '더 나은 수면의 기준을',
    descLine2: '다시 세웁니다',
    image: '/images/team/card_val_redefine.png',
  },
]

const TEAM_MEMBERS = [
  {
    name: '박상준',
    role: '대표',
    photo: '/images/team/member_sj_photo.png',
    photoPosition: 'left' as const,
    points: [
      '오랫동안 당연하게 여겨온 수면의 방식에 질문을 던졌습니다.',
      '응용물리학, 전자공학 전공',
    ],
  },
  {
    name: '김강연',
    role: 'Product Owner',
    photo: '/images/team/member_ky_photo.png',
    photoPosition: 'right' as const,
    points: [
      '사용자의 문제에서 시작해, 아이디어가 제품이 되기까지의 과정을 설계합니다',
      '경영학 전공',
    ],
  },
  {
    name: '이찬',
    role: 'Software Engineer',
    photo: '/images/team/member_c_photo.png',
    photoPosition: 'left' as const,
    points: [
      '쌓이는 데이터를 안전하게 관리해, 더 나은 경험의 기반을 만듭니다',
      '소프트웨어공학 전공',
    ],
  },
  {
    name: '강현수',
    role: 'UI/UX Designer',
    photo: '/images/team/member_hs_photo.png',
    photoPosition: 'right' as const,
    points: [
      '복잡한 기능은 단순하게, 필요한 경험은 분명하게 설계합니다',
      '디자인테크놀로지 전공',
    ],
  },
  {
    name: '장준영',
    role: 'Software Engineer',
    photo: '/images/team/member_jy_photo.png',
    photoPosition: 'left' as const,
    points: [
      '사용자의 작은 불편을 발견하고, 더 나은 모바일 경험으로 풀어냅니다',
      '소프트웨어공학 전공',
    ],
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#042F56]">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#050e18] via-[#041a30] to-[#042F56] pt-32 pb-24 sm:pt-40 sm:pb-32 px-5">
        {/* Floating 3D Rings & Beam Background Graphics */}
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
          {/* Top-left Ring */}
          <div className="absolute -top-10 -left-16 sm:left-4 md:left-10 w-60 sm:w-80 md:w-96 opacity-60">
            <Image
              src="/images/team/hero_ring_top_left.png"
              alt=""
              width={650}
              height={650}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Bottom-right Ring */}
          <div className="absolute bottom-10 -right-16 sm:right-4 md:right-10 w-64 sm:w-84 md:w-96 opacity-65">
            <Image
              src="/images/team/hero_ring_bottom_right.png"
              alt=""
              width={690}
              height={650}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Center Light Beam pointing downward */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 sm:w-80 md:w-96 opacity-90">
            <Image
              src="/images/team/hero_light_beam.png"
              alt=""
              width={700}
              height={530}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-widest text-sky-200 uppercase backdrop-blur-sm">
            We are
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            Sleeptandard.
          </h1>
          <p className="mt-4 text-base sm:text-xl md:text-2xl font-normal text-white/80">
            더 나은 수면의 기준을 만들어가는 사람들
          </p>
        </div>
      </section>

      {/* 2. What we believe Section */}
      <section className="relative z-10 bg-[#042F56] py-16 sm:py-24 px-5">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-sky-300 uppercase">
              What we believe
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              우리는 수면도 달라질 수 있다고 믿습니다
            </h2>
          </div>

          <div className="mx-auto mt-6 max-w-2xl text-center space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-white/85">
            <p>
              오랫동안 당연하게 여겨온 수면의 방식에 질문을 던졌습니다.
              <br className="hidden sm:inline" /> 수면은 인생의 3분의 1을 차지하지만,
              <br className="hidden sm:inline" /> 우리는 여전히 예전과 다르지 않은 방식으로 잠을 잡니다.
            </p>
            <p className="pt-2">
              Sleeptandard는 수면 측정과 분석에 그치지 않습니다.
              <br className="hidden sm:inline" /> 실제 삶에 적용할 수 있는 새로운 방식을 만들고,
              <br className="hidden sm:inline" /> 그 경험을 새로운 기준으로 만들어갑니다.
            </p>
          </div>

          {/* 3 Value Cards: QUESTION, APPLY, REDEFINE */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {VALUE_CARDS.map((card) => (
              <div
                key={card.key}
                className="group relative overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-500/10"
              >
                <Image
                  src={card.image}
                  alt={`${card.title} - ${card.descLine1} ${card.descLine2}`}
                  width={1260}
                  height={520}
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Team Section */}
      <section className="bg-[#f5f5f5] py-20 sm:py-28 px-5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#042f56] uppercase">
              Team
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#042f56]">
              서로 다른 전문성으로, 하나의 질문을 풀어갑니다.
            </h2>
          </div>

          {/* 5 Member Rows */}
          <div className="mt-14 sm:mt-20 space-y-10 sm:space-y-14">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className={cn(
                  'flex items-center gap-4 sm:gap-8 md:gap-12',
                  member.photoPosition === 'right' ? 'flex-row-reverse' : 'flex-row'
                )}
              >
                {/* Photo Side */}
                <div className="w-[48%] sm:w-[44%] md:w-[40%] flex-shrink-0">
                  <div className="relative overflow-hidden transition-transform duration-500 hover:scale-105">
                    <Image
                      src={member.photo}
                      alt={`${member.name} - ${member.role}`}
                      width={680}
                      height={950}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 py-2 sm:py-6">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#042f56]">
                    {member.name}
                  </h3>
                  <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm md:text-base font-semibold text-slate-700">
                    {member.role}
                  </p>
                  <ul className="mt-3 sm:mt-4 md:mt-5 space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs md:text-sm leading-relaxed text-slate-800">
                    {member.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 sm:gap-2">
                        <span className="text-slate-400 select-none mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What we create Section */}
      <section className="bg-[#042F56] py-20 sm:py-28 px-5">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-sky-300 uppercase">
            What we create
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            그래서, 우리가 만드는 알람의 정석
          </h2>

          {/* 3D Device Centerpiece */}
          <div className="relative my-8 sm:my-12 flex justify-center">
            <div className="relative max-w-md sm:max-w-lg w-full">
              <div className="absolute inset-0 bg-sky-400/10 blur-3xl rounded-full transform scale-75 pointer-events-none" />
              <Image
                src="/images/team/team_create_device.png"
                alt="알람의 정석 디바이스"
                width={1140}
                height={800}
                className="relative z-10 w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="text-center text-sm sm:text-base md:text-lg leading-relaxed text-white/85 mb-8">
            <p>Sleeptandard가 만들고 있는</p>
            <p className="font-semibold text-white mt-1">
              완전히 새로운 알람을 만나보세요
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/product"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#b9cbda] px-8 py-3.5 text-sm sm:text-base font-bold text-[#042f56] shadow-lg shadow-sky-950/20 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span>지금 바로 알아보기</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
