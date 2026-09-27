import Image from 'next/image'

const MORNING_ITEMS = [
  {
    src: '/images/product/product_morning1.png',
    alt: '알람을 끄고 다시 잠든 모습',
    lines: ['알람이 울렸나요?', '다시 잠들어 늦잠'],
  },
  {
    src: '/images/product/product_morning2.png',
    alt: '침대 옆 탁자 위 알람 기기',
    lines: ["'5분만 더...'가", '어느새 1시간'],
  },
  {
    src: '/images/product/product_morning3.png',
    alt: '충분히 자고도 피곤한 모습',
    lines: ['충분히 잤는데도', '너무 피곤한 아침'],
  },
]

export function ProductMorningSection() {
  return (
    <section className="relative flex min-h-svh w-full flex-col overflow-hidden bg-White">
      <div aria-hidden="true" className="relative h-[94px] shrink-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-62px] h-[150px] w-[calc(100%+48px)] max-w-[900px] -translate-x-1/2 rounded-[50%] bg-[linear-gradient(180deg,#7096AA_0%,var(--KeyReal)_80%)]" />
        <span className="absolute bottom-[25px] left-1/2 size-1 -translate-x-1/2 rounded-full bg-white shadow-[0_0_6px_4px_rgba(255,255,255,0.45)]" />
        <span className="absolute bottom-[8px] left-1/2 size-[7px] -translate-x-1/2 rounded-full bg-white shadow-[0_0_6px_5px_rgba(255,255,255,0.6)]" />
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-5 py-6 text-center">
        <p className="text-[12px] font-medium leading-normal text-Gray">
          About Morning
        </p>
        <h2 className="mt-1 text-[24px] font-bold leading-[1.25] tracking-[-0.025em] text-Key">
          이런 아침,
          <br />
          익숙하지 않으신가요?
        </h2>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 md:mx-auto md:w-full md:max-w-3xl">
          {MORNING_ITEMS.map((item) => (
            <article key={item.src} className="min-w-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-[22px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 30vw, 220px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-[12px] font-medium leading-[1.3] tracking-[-0.025em] text-Key">
                {item.lines[0]}
                <br />
                {item.lines[1]}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="relative h-[180px] shrink-0 overflow-hidden md:h-[220px]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 z-10 h-[52px] w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(4,47,86,0)_0%,var(--Key)_62%,#FFFFFF_85%)]"
        >
          <span className="absolute bottom-0 left-1/2 size-[7px] -translate-x-1/2 rounded-full bg-white shadow-[0_0_6px_5px_rgba(255,255,255,0.6)]" />
        </div>

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[42px] h-[240px] w-[calc(100%+48px)] max-w-[900px] -translate-x-1/2 rounded-[50%] bg-[linear-gradient(180deg,var(--KeyReal)_0%,#8095A9_51%,#FFFFFF_100%)]"
        />

        <p className="absolute inset-x-5 top-[86px] z-10 text-center text-[18px] font-semibold leading-[1.35] tracking-[-0.025em] text-White md:top-[105px]">
          문제는 당신의 의지가 아니라
          <br />
          <strong className="text-[22px] font-bold">&apos;기상 타이밍&apos;</strong>
          일 수 있습니다
        </p>
      </div>
    </section>
  )
}
