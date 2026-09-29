import { ApplySection } from '@/components/home/apply-section'
import { ContactSection } from '@/components/home/contact-section'
import { HeroSection } from '@/components/home/hero-section'
import { ProductSection } from '@/components/home/product-section'
import { TeamMessageSection } from '@/components/home/team-message-section'
import { TeamPhotoSection } from '@/components/home/team-photo-section'
import { PageScrollContainer } from '@/components/ui/page-scroll-container'

export default function HomePage() {
  return (
    <PageScrollContainer className="home-scroll w-full">
      <HeroSection />
      <ProductSection />
      <ApplySection />
      <TeamMessageSection />
      <TeamPhotoSection />
      <ContactSection />
    </PageScrollContainer>
  )
}
