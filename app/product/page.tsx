import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product | Sleeptandard',
  description: 'Sleeptandard 메인 프로덕트 설명',
}

export default function ProductPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-5">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Product
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Sleeptandard의 혁신적인 제품에 대한 상세 설명이 들어갈 자리입니다. (추후 디자인 반영 예정)
        </p>
        
        {/* Figma 디자인 컨테이너 뼈대 */}
        <div className="mt-12 min-h-[60vh] rounded-3xl border border-border/50 bg-secondary/20 p-8 flex items-center justify-center border-dashed">
          <p className="text-muted-foreground">Product Design Area</p>
        </div>
      </div>
    </main>
  )
}
