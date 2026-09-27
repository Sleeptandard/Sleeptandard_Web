const VALUE_CARDS = [
  {
    title: 'QUESTION',
    image: '/images/team/team_q.png',
    description: <>당연하게 여겨온 수면에<br /><strong className="font-bold">질문</strong>을 던지고</>,
  },
  {
    title: 'APPLY',
    image: '/images/team/team_a.png',
    description: <>새로운 방식을<br />실제 삶에 <strong className="font-bold">적용</strong>하고</>,
  },
  {
    title: 'REDEFINE',
    image: '/images/team/team_r.png',
    description: <>더 나은 수면의 <strong className="font-bold">기준</strong>을<br />다시 세웁니다</>,
  },
]

export function TeamBeliefSection() {
  return (
    <section
      aria-labelledby="team-belief-title"
      className="relative z-10 scroll-mt-[36svh] bg-KeyReal px-5 pb-[68px] pt-4 text-center text-White md:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px scroll-mt-[36svh] snap-start snap-always" />

      <div className="mx-auto max-w-5xl">
        <h2 id="team-belief-title" className="text-[24px] font-bold leading-[1.2] tracking-[-0.025em] text-SkyBlue">
          What we believe
        </h2>
        <p className="mt-4 text-balance text-[18px] font-semibold leading-[1.4] tracking-[-0.035em]">
          우리는 수면도 달라질 수 있다고 믿습니다
        </p>

        <div className="mx-auto mt-11 max-w-2xl space-y-11 text-[14px] font-medium leading-[1.2] tracking-[-0.035em]">
          <p>
            오랫동안 당연하게 여겨온 수면의 방식에 질문을 던졌습니다.
            <br />
            수면은 인생의 3분의 1을 차지하지만,
            <br />
            우리는 여전히 예전과 다르지 않은 방식으로 잠을 잡니다.
          </p>
          <p>
            Sleeptandard는 수면 측정과 분석에 그치지 않습니다.
            <br />
            실제 삶에 적용할 수 있는 새로운 방식을 만들고,
            <br />
            그 경험을 새로운 기준으로 만들어갑니다.
          </p>
        </div>

        <div className="mx-auto mt-11 grid max-w-sm grid-cols-1 gap-4 md:max-w-none md:grid-cols-3 md:gap-6">
          {VALUE_CARDS.map((card) => (
            <article
              key={card.title}
              className="relative isolate flex min-h-[160px] flex-col items-center justify-center overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#001C35_0%,#001C35_47%,#06264F_100%)] px-5 py-9"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 m-auto h-[108px] w-[128px] bg-[#063157]"
                style={{
                  maskImage: `url(${card.image})`,
                  WebkitMaskImage: `url(${card.image})`,
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                }}
              />
              <h3 className="text-[24px] font-bold leading-[1.2] tracking-[-0.025em]">{card.title}</h3>
              <p className="mt-4 text-[16px] font-medium leading-[1.2] tracking-[-0.025em]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
