import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Team | Sleeptandard',
  description: '더 나은 아침을 만드는 Sleeptandard 팀을 소개합니다.',
}

const TEAM_MEMBERS = [
  {
    name: '대표 / CEO',
    role: 'CEO',
    image: '/images/team/member1.jpg', // Placeholder image path
    description: '비전을 제시하고 팀을 이끕니다.',
  },
  {
    name: '팀원 1',
    role: 'CTO',
    image: '/images/team/member2.jpg',
    description: '기술 전략과 하드웨어/소프트웨어 개발을 총괄합니다.',
  },
  {
    name: '팀원 2',
    role: 'Sleep Scientist',
    image: '/images/team/member3.jpg',
    description: '수면 데이터 분석과 알고리즘을 연구합니다.',
  },
  {
    name: '팀원 3',
    role: 'Product Designer',
    image: '/images/team/member4.jpg',
    description: '사용자 경험(UX)과 제품 디자인을 설계합니다.',
  },
  {
    name: '팀원 4',
    role: 'Marketing Lead',
    image: '/images/team/member5.jpg',
    description: '브랜드 가치를 알리고 고객과 소통합니다.',
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Meet Our Team
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            전문성과 활기로 뭉친 5명의 전문가가 당신의 가장 개운한 아침을 위해 매일 치열하게 연구합니다.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-secondary/20 p-6 transition-colors hover:bg-secondary/40"
            >
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-secondary">
                {/* Fallback image area if actual image is missing. In Next.js, broken image paths will error unless handled, so we use a visual placeholder div behind the image. */}
                <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                  Photo
                </div>
                {/* 
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                */}
              </div>
              <div className="mt-6">
                <h3 className="font-display text-xl font-bold">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
