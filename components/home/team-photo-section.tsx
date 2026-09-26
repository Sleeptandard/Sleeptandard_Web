import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { NormalButton } from '@/components/ui/normal-button'

export function TeamPhotoSection() {
  return (
    <section className="flex min-h-svh w-full snap-center items-center justify-center overflow-hidden bg-KeyReal py-16">
      <div className="mx-auto w-full max-w-xl">
        <div className="relative aspect-[360/329] w-full rounded-t-[100px] bg-White">
          <Image
            src="/images/home/home_teamphoto.png"
            alt="Sleeptandard 팀원 다섯 명"
            width={1080}
            height={1137}
            className="absolute left-1/2 top-4 h-auto w-[108%] max-w-none -translate-x-1/2"
          />
        </div>

        <div className="mt-[clamp(96px,14svh,140px)] px-5">
          <NormalButton
            href="/team"
            className="min-h-[62px] w-full text-[16px] font-semibold"
            ariaLabel="Sleeptandard 팀 더 알아보기"
          >
            팀 더 알아보기
            <ArrowRight className="size-4" aria-hidden="true" />
          </NormalButton>
        </div>
      </div>
    </section>
  )
}
