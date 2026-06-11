import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection'
import { ArchitectureSection } from '@/components/sections/ArchitectureSection'
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection'
import { MetricsSection } from '@/components/sections/MetricsSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <ArchitectureSection />
        <FeaturedProjectsSection />
        <MetricsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
