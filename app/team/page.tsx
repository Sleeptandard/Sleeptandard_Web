import { Metadata } from 'next'
import { TeamPortrait } from '@/components/team/team-portrait'
import { TeamHeroSection } from '@/components/team/team-hero-section'
import { TeamBeliefSection } from '@/components/team/team-belief-section'
import { TeamCreateSection } from '@/components/team/team-create-section'

export const metadata: Metadata = {
  title: 'Team | Sleeptandard',
  description: '더 나은 수면의 기준을 만들어가는 Sleeptandard 팀을 소개합니다.',
}

const TEAM_MEMBERS = [
  {
    name: '박상준',
    role: '대표',
    photo: '/images/team/team_portrait_psj.png',
    photoPosition: 'left' as const,
    points: [
      '오랫동안 당연하게 여겨온 수면의 방식에 질문을 던졌습니다.',
      '응용물리학, 전자공학 전공',
    ],
  },
  {
    name: '김강연',
    role: 'Product Owner',
    photo: '/images/team/team_portrait_kky.png',
    photoPosition: 'right' as const,
    points: [
      '사용자의 문제에서 시작해, 아이디어가 제품이 되기까지의 과정을 설계합니다',
      '경영학 전공',
    ],
  },
  {
    name: '이찬',
    role: 'Software Engineer',
    photo: '/images/team/team_portrait_lc.png',
    photoPosition: 'left' as const,
    points: [
      '쌓이는 데이터를 안전하게 관리해, 더 나은 경험의 기반을 만듭니다',
      '소프트웨어 전공',
    ],
  },
  {
    name: '강현수',
    role: 'UI/UX Designer',
    photo: '/images/team/team_portrait_khs.png',
    photoPosition: 'right' as const,
    points: [
      '복잡한 기능은 단순하게, 필요한 경험은 분명하게 설계합니다',
      '디자인테크놀로지 전공',
    ],
  },
  {
    name: '장준영',
    role: 'Software Engineer',
    photo: '/images/team/team_portrait_jjy.png',
    photoPosition: 'left' as const,
    points: [
      '사용자의 작은 불편을 발견하고, 더 나은 모바일 경험으로 풀어냅니다',
      '소프트웨어 전공',
    ],
  },
]

export default function TeamPage() {
  return (
    <div data-team-scroll className="h-svh w-full snap-y snap-proximity overflow-x-hidden overflow-y-auto overscroll-y-contain scroll-smooth bg-KeyReal [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden">
      <TeamHeroSection />

      <TeamBeliefSection />

      {/* 3. Team Section */}
      <section aria-labelledby="team-members-title" className="bg-White py-[68px] text-Key sm:py-24">
        <div className="mx-auto max-w-[640px]">
          <div className="text-center">
            <div className="flex items-center gap-5">
              <span aria-hidden="true" className="h-[6px] flex-1 bg-KeyReal" />
              <h2 id="team-members-title" className="text-[24px] font-bold leading-[1.2] tracking-[-0.025em] text-KeyReal">Team</h2>
              <span aria-hidden="true" className="h-[6px] flex-1 bg-KeyReal" />
            </div>
            <p className="mt-4 px-5 text-[18px] font-semibold leading-[1.3] tracking-[-0.035em]">
              서로 다른 전문성으로,
              <br />
              하나의 질문을 풀어갑니다.
            </p>
          </div>

          {/* 5 Member Rows */}
          <div className="mt-16 space-y-[60px] sm:space-y-20">
            {TEAM_MEMBERS.map((member) => (
              <TeamPortrait
                key={member.name}
                imageSrc={member.photo}
                imagePosition={member.photoPosition}
                name={member.name}
                role={member.role}
                major={member.points[1]}
                introduction={`“${member.points[0].replace(/\.$/, '')}.”`}
              />
            ))}
          </div>
        </div>
      </section>

      <TeamCreateSection />
    </div>
  )
}
