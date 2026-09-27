import Image from 'next/image'

export function ProductDeviceSection() {
  return (
    <section className="relative h-[80svh] w-full overflow-hidden bg-KeyReal text-White">
      <div className="relative mx-auto h-full w-full max-w-5xl px-7 pt-12 md:px-12 md:pt-16">
        <Image
          src="/images/product/product_logo2.png"
          alt="알람의 정석"
          width={448}
          height={110}
          className="h-auto w-[260px] md:w-[320px]"
        />

        <p className="mt-6 max-w-[620px] text-[16px] font-normal leading-[1.4] tracking-[-0.025em] text-White">
          알람의 정석은, 정해진 시간에 깨우는 알람을 넘어
          <br />
          내 몸의 상태를 살펴{' '}
          <strong className="font-semibold">
            가장 개운하게 일어날 수 있는
          </strong>
          <br />
          <strong className="font-semibold">순간</strong>을 찾는 웨어러블 알람입니다.
        </p>

        <div className="absolute bottom-[0%] right-[-10%] h-[50svh] w-[290%] md:bottom-[-12%] md:right-[-8%] md:h-[116svh] md:w-[156%]">
          <Image
            src="/images/product/product_potch_big.png"
            alt="알람의 정석 웨어러블 기기"
            fill
            sizes="(max-width: 768px) 125vw, 900px"
            className="object-contain object-bottom-right"
          />
        </div>
      </div>
    </section>
  )
}
