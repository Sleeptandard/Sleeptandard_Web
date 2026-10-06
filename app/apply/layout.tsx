import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '신청하기 | Sleeptandard',
  description:
    '‘알람의 정석’ 개발 소식 받고 무료 베타테스트 참여 기회까지. 더 개운한 기상을 누구보다 먼저 만나보세요.',
  openGraph: {
    title: '신청하기 | Sleeptandard',
    description:
      '‘알람의 정석’ 개발 소식 받고 무료 베타테스트 참여 기회까지. 더 개운한 기상을 누구보다 먼저 만나보세요.',
    url: '/apply',
    images: [
      {
        url: '/sleeptandardOGimage.png',
        width: 1200,
        height: 630,
        alt: '신청하기 | Sleeptandard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '신청하기 | Sleeptandard',
    description:
      '‘알람의 정석’ 개발 소식 받고 무료 베타테스트 참여 기회까지. 더 개운한 기상을 누구보다 먼저 만나보세요.',
    images: ['/sleeptandardOGimage.png'],
  },
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
