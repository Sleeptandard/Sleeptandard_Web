import { ApplySection } from '@/components/home/apply-section'
import { ContactSection } from '@/components/home/contact-section'
import { HeroSection } from '@/components/home/hero-section'
import { ProductSection } from '@/components/home/product-section'
import { TeamMessageSection } from '@/components/home/team-message-section'
import { TeamPhotoSection } from '@/components/home/team-photo-section'

export default function HomePage() {
  return (
    <div className="h-svh w-full snap-y snap-mandatory overflow-y-scroll overscroll-y-contain scroll-smooth [&>section]:snap-always">
      <HeroSection />
      <ProductSection />
      <ApplySection />
      <TeamMessageSection />
      <TeamPhotoSection />
      <ContactSection />
    </div>
  )
}
