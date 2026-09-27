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
        'relative grid min-h-[239px] w-full overflow-hidden bg-transparent',
        imageOnLeft ? 'grid-cols-[58%_42%]' : 'grid-cols-[42%_58%]',
        className,
      )}
    >
      <div
        className={cn(
          'relative z-10 min-h-[clamp(239px,66vw,360px)]',
          imageOnLeft ? 'order-1' : 'order-2',
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt ?? `${name} 프로필 사진`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 58vw, 372px"
          className="object-contain object-bottom"
        />
      </div>

      <div
        className={cn(
          'relative z-20 flex flex-col justify-end pb-8 pt-4 text-left sm:px-5 sm:pb-10',
          imageOnLeft ? 'order-2 pl-1 pr-5' : 'order-1 pl-7 pr-0',
        )}
      >
        <h3 className="text-[20px] font-bold leading-tight tracking-[-0.03em] text-KeyReal">
          {name}
        </h3>
        <p className="text-[14px] font-medium leading-tight tracking-[-0.04em] text-Key">
          {role}
        </p>
        <p className="mt-1 text-[12px] leading-tight tracking-[-0.04em] text-Gray">{major}</p>
        <p className="mt-2 whitespace-pre-line text-[12px] font-medium leading-[1.2] tracking-[-0.035em] text-Key">
          {introduction}
        </p>
      </div>

      <div
        aria-hidden="true"
        className={cn(
          'absolute bottom-0 z-0 h-[22px] w-[calc(100%-20px)] bg-KeyReal',
          imageOnLeft
            ? 'left-0 rounded-r-[5px]'
            : 'right-0 rounded-l-[5px]',
        )}
      />
    </article>
  )
}
