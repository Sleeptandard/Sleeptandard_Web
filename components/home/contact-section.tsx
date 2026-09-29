import { ArrowRight } from 'lucide-react'
import { NormalButton } from '@/components/ui/normal-button'

export function ContactSection() {
  return (
    <section className="home-contact flex min-h-80svh w-full snap-center items-center justify-center bg-White px-5 py-16">
      <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <p className="text-[18px] leading-[1.45] text-Key font-medium">
          Sleeptandard와 나누고 싶은 이야기가 있나요?
          <br />
          궁금한 점이 있다면, 언제든 이야기해주세요.
        </p>

        <NormalButton
          href="/contact"
          backgroundColor="transparent"
          borderColor="#042F56"
          textColor="#050C16"
          className="mt-12 min-h-[62px] border-2 w-full text-[18px] font-semibold"
          ariaLabel="Sleeptandard에 문의하기"
        >
          문의하기
          <ArrowRight className="size-4" aria-hidden="true" />
        </NormalButton>

        <span
          role="img"
          aria-label="Sleeptandard"
          className="mt-12 block h-[47px] w-[160px] bg-KeyReal"
          style={{
            WebkitMaskImage: 'url(/images/logo/logo.svg)',
            maskImage: 'url(/images/logo/logo.svg)',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
          }}
        />
      </div>
    </section>
  )
}
