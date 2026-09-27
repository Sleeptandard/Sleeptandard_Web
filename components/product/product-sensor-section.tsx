import Image from 'next/image'

const LEFT_SENSORS = [
  { icon: '/images/product/product_hr.svg', label: '심박' },
  { icon: '/images/product/product_hrv.svg', label: '심박변이도' },
  { icon: '/images/product/product_eeg.svg', label: '맥파' },
  { icon: '/images/product/product_rr.svg', label: '호흡' },
]

const RIGHT_SENSORS = [
  { icon: '/images/product/product_rrv.svg', label: '호흡변이도' },
  { icon: '/images/product/product_temp.svg', label: '체온' },
  { icon: '/images/product/product_movement.svg', label: '움직임' },
]

function SensorItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-KeyReal">
        <Image src={icon} alt="" width={28} height={28} className="size-7 object-contain" />
      </span>
      <span className="whitespace-nowrap text-[15px] font-medium text-White">
        {label}
      </span>
    </div>
  )
}

export function ProductSensorSection() {
  return (
    <section className="relative min-h-[80svh] w-full bg-Key px-5 py-20 text-White md:px-7 md:py-24">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="text-[24px] font-semibold leading-[1.35] tracking-[-0.025em]">
          수면 중 몸의
          <br />
          여러 신호를 측정합니다
        </h2>

        <p className="mt-5 text-[14px] font-normal leading-[1.45] tracking-[-0.02em] text-Gray2">
          알람의 정석 웨어러블이 매일 밤 당신의 생체 신호를
          <br />
          정밀하게 분석합니다.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-x-5 sm:gap-x-16">
          <div className="flex flex-col gap-6">
            {LEFT_SENSORS.map((sensor) => (
              <SensorItem key={sensor.icon} {...sensor} />
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {RIGHT_SENSORS.map((sensor) => (
              <SensorItem key={sensor.icon} {...sensor} />
            ))}

            <div
              aria-label="그 밖의 생체 신호"
              className="flex h-14 -translate-x-3 flex-col items-center justify-center gap-2"
            >
              <span className="size-[6px] rounded-full bg-white" />
              <span className="size-[6px] rounded-full bg-white/60" />
              <span className="size-[6px] rounded-full bg-white/30" />
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-7 bottom-8 mx-auto h-px max-w-3xl bg-[linear-gradient(90deg,var(--Key)_0%,var(--Key)_17%,var(--SkyBlue)_50%,var(--Key)_79%,var(--Key)_100%)]"
      />
    </section>
  )
}
