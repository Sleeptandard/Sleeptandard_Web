import Image, { type ImageProps } from 'next/image'

import { cn } from '@/lib/utils'

type TeamPortraitProps = {
  imageSrc: ImageProps['src']
  imageAlt?: string
  name: string
  role: string
  major: string
  introduction: string
  imagePosition?: 'left' | 'right'
  priority?: boolean
  className?: string
}

export function TeamPortrait({
  imageSrc,
  imageAlt,
  name,
  role,
  major,
  introduction,
  imagePosition = 'left',
  priority = false,
  className,
}: TeamPortraitProps) {
  const imageOnLeft = imagePosition === 'left'

  return (
    <article
      className={cn(
        'relative grid min-h-[239px] w-full grid-cols-2 overflow-hidden bg-transparent',
        className,
      )}
    >
      <div
        className={cn(
          'relative z-10 min-h-[239px]',
          imageOnLeft ? 'order-1' : 'order-2',
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt ?? `${name} 프로필 사진`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 50vw, 320px"
          className="object-contain object-bottom"
        />
      </div>

      <div
        className={cn(
          'relative z-20 flex flex-col justify-center px-3 py-8 text-left sm:px-5',
          imageOnLeft ? 'order-2' : 'order-1',
        )}
      >
        <h3 className="text-lg font-bold leading-tight text-[#042F56]">
          {name}
        </h3>
        <p className="mt-1 text-sm font-bold leading-tight text-slate-900">
          {role}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-slate-500">{major}</p>
        <p className="mt-3 whitespace-pre-line text-sm leading-snug text-slate-900">
          {introduction}
        </p>
      </div>

      <div
        aria-hidden="true"
        className={cn(
          'absolute bottom-0 z-0 h-4 w-[82%] bg-[#042F56]',
          imageOnLeft
            ? 'left-0 rounded-r-[5px]'
            : 'right-0 rounded-l-[5px]',
        )}
      />
    </article>
  )
}
