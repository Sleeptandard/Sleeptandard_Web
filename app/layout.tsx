import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR, Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
  weight: '45 920',
})

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sleeptandard.com'),
  title: {
    default: 'Sleeptandard | 수면의 새로운 기준을 세우다',
    template: '%s',
  },
  description:
    '슬립텐다드는 당연하게 여겨온 수면의 방식을 다시 바라봅니다. 그 시작으로, 더 개운한 아침을 위한 웨어러블 알람 ‘알람의 정석’을 만들고 있습니다.',
  openGraph: {
    title: 'Sleeptandard | 수면의 새로운 기준을 세우다',
    description:
      '슬립텐다드는 당연하게 여겨온 수면의 방식을 다시 바라봅니다. 그 시작으로, 더 개운한 아침을 위한 웨어러블 알람 ‘알람의 정석’을 만들고 있습니다.',
    url: 'https://sleeptandard.com',
    siteName: 'Sleeptandard',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/sleeptandardOGimage.png',
        width: 1200,
        height: 630,
        alt: 'Sleeptandard | 수면의 새로운 기준을 세우다',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sleeptandard | 수면의 새로운 기준을 세우다',
    description:
      '슬립텐다드는 당연하게 여겨온 수면의 방식을 다시 바라봅니다. 그 시작으로, 더 개운한 아침을 위한 웨어러블 알람 ‘알람의 정석’을 만들고 있습니다.',
    images: ['/sleeptandardOGimage.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'only light',
  themeColor: '#0a0e1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={`bg-background ${pretendard.variable} ${notoSansKr.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased font-sans">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
