import Image from 'next/image'

export function ProductPersonalizationSection() {
  return (
    <section data-split-snap className="w-full bg-Key px-5 py-20 text-White md:py-24">
      <div className="mx-auto w-full max-w-2xl">
        <h2 className="text-[24px] font-semibold leading-[1.35] tracking-[-0.025em]">
          쓰면 쓸수록
          <br />
          개인화되는 알람
        </h2>

        <div className="relative mx-auto mt-10 aspect-[566/384] w-full max-w-[566px] scroll-mt-12 snap-center snap-always">
          <Image
            src="/images/product/product_personal.png"
            alt="심박, 호흡, 체온을 분석해 개인화되는 모습"
            fill
            sizes="(max-width: 768px) calc(100vw - 40px), 566px"
            className="object-contain"
          />
        </div>

        <div className="relative mx-auto mt-10 aspect-[590/398] w-full max-w-[590px] scroll-mt-12 snap-center snap-always">
          <Image
            src="/images/product/product_feedbackscore.png"
            alt="1일차 20점에서 40일차 60점으로 상승하는 피드백 점수"
            fill
            sizes="(max-width: 768px) calc(100vw - 40px), 590px"
            className="object-contain"
          />
        </div>

        <div className="mt-12 space-y-4 text-[12px] font-normal leading-[1.5] tracking-[-0.015em] text-Gray">
          <p>
            사람마다 심박, 움직임, 체온과 같은{' '}
            <strong className="font-medium text-Gray2">생체신호</strong>의 기준은 다릅니다.
          </p>
          <p>
            알람의 정석은{' '}
            <strong className="font-medium text-Gray2">개인별 생체신호의 차이</strong>를 반영하고,
            사용 기록과 피드백을 바탕으로{' '}
            <strong className="font-medium text-Gray2">분석 기준</strong>을 조정합니다.
          </p>
          <p>
            따라서, 기록이 쌓일수록 사용자의{' '}
            <strong className="font-medium text-Gray2">수면 패턴과 기상 반응</strong>을 더 잘 반영할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
