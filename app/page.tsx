import { Hero } from '@/components/home/hero'
import { HowItWorks } from '@/components/home/how-it-works'
import { Showcase } from '@/components/home/showcase'
import { CtaBanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Showcase />
      <CtaBanner />
    </>
  )
}
