import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Team | Sleeptandard',
  description: '더 나은 아침을 만드는 Sleeptandard 팀을 소개합니다.',
}

const TEAM_MEMBERS = [
  {
    name: '박상준',
    role: '대표',
    image: '/images/team/SJ.jpg',
  },
  {
    name: '김강연',
    role: 'PO',
    image: '/images/team/KY.jpg',
  },
  {
    name: '이찬',
    role: 'Engineer',
    image: '/images/team/C.jpg',
  },
  {
    name: '강현수',
    role: 'Designer',
    image: '/images/team/HS.jpg',
  },
  {
    name: '장준영',
    role: 'Engineer',
    image: '/images/team/JY.jpg',
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-5">
        {/* Team Banner / Group Image (Team1.jpg) */}
        <div className="relative mb-12 w-full overflow-hidden rounded-3xl border border-border/50 shadow-2xl bg-secondary/10">
          <Image
            src="/images/team/Team1.jpg"
            alt="Sleeptandard Team"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto object-contain rounded-3xl"
          />
        </div>

        <div className="text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Meet Our Team
          </h1>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-secondary/20 p-6 transition-all hover:bg-secondary/40 hover:-translate-y-1"
            >
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-secondary relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-display text-xl font-bold">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
