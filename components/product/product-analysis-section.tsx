import Image from 'next/image'

function AnalysisBlock({
  title,
  description,
  image,
  imageAlt,
  aspectClass,
}: {
  title: string
  description: React.ReactNode
  image: string
  imageAlt: string
  aspectClass: string
}) {
  return (
    <div>
      <h3 className="text-[18px] font-medium leading-normal text-SkyBlue">
        {title}
      </h3>
      <p className="mt-2 text-[12px] font-normal leading-[1.4] text-Gray2">
        {description}
      </p>
      <div
        className={`relative mt-4 w-full overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,rgba(4,47,86,0.4)_50%,rgba(4,47,86,0)_100%)] p-4 ${aspectClass}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) calc(100vw - 40px), 640px"
          className="object-contain p-4"
        />
      </div>
    </div>
  )
}

export function ProductAnalysisSection() {
  return (
    <section className="relative w-full bg-Key px-5 py-20 text-White md:py-24">
      <div className="mx-auto w-full max-w-2xl">
        <div>
          <h2 className="text-[24px] font-semibold leading-[1.35] tracking-[-0.025em]">
            실시간 수면단계와
            <br />
            각성도를 추론합니다
          </h2>

          <p className="mt-5 text-[14px] font-normal leading-[1.45] tracking-[-0.02em] text-Gray2">
            자체 알고리즘이 생체신호의 파형과 변화를
            <br />
            실시간으로 분석해 사용자의 수면 상태를 추론합니다.
          </p>

          <div className="mt-12">
            <AnalysisBlock
              title="수면단계 분석"
              description="수면 사이클과 4class 수면 단계 판별"
              image="/images/product/product_sleepstage.png"
              imageAlt="수면 사이클과 4class 수면 단계 그래프"
              aspectClass="aspect-[3/2]"
            />
          </div>
        </div>

        <div className="mt-10">
          <AnalysisBlock
            title="각성도 분석"
            description={
              <>
                3대 각성 지표 연산을 통해 현재 몸이
                <br />
                얼마나 깨기 쉬운 상태인지 판별
              </>
            }
            image="/images/product/product_arousalstate.png"
            imageAlt="현재 각성도와 3대 각성 지표"
            aspectClass="aspect-[3/2]"
          />
        </div>

        <div className="mt-12">
          <h4 className="text-[13px] font-medium leading-normal text-Gray2">
            측정 결과에 대한 주의사항
          </h4>
          <p className="mt-3 text-[11px] font-normal leading-[1.5] text-Gray">
            제공하는 수면단계와 각성도는 웨어러블 센서로 측정한 생체신호 기반 추정값
            <br className="hidden sm:block" />
            입니다. 개인의 착용 상태와 환경에 따라 결과가 달라질 수 있으며, 의학적 진단
            <br className="hidden sm:block" />
            이나 치료를 목적으로 하지 않습니다.
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-5 bottom-8 mx-auto h-px max-w-2xl bg-[linear-gradient(90deg,var(--Key)_0%,var(--Key)_17%,var(--SkyBlue)_50%,var(--Key)_79%,var(--Key)_100%)]"
      />
    </section>
  )
}
