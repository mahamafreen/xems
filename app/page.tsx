import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection'
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <FeaturedProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
