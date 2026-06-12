import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Section, SectionContainer } from '@/components/Section'
import { Card } from '@/components/Card'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Target, Eye, Lightbulb, Users } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We are committed to delivering exceptional quality in everything we do. Every line of code, every design decision, every interaction matters.'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear communication and honest partnerships. We keep our clients informed every step of the way with regular updates and transparent pricing.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of technology trends and continuously improve our processes. Experimenting with new tools and methodologies to serve you better.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Your success is our success. We work as an extension of your team, fostering open dialogue and shared ownership of outcomes.'
  }
]

const divisions = [
  {
    name: 'Web Engineering',
    desc: 'Specializing in building scalable, high-performance web applications using modern frameworks and best practices.'
  },
  {
    name: 'Mobile Development',
    desc: 'Native and cross-platform mobile solutions that deliver exceptional user experiences across all devices.'
  },
  {
    name: 'Cloud & Infrastructure',
    desc: 'Enterprise-grade cloud architecture, DevOps, and infrastructure management on AWS, Google Cloud, and Azure.'
  },
  {
    name: 'Data & AI',
    desc: 'Advanced data engineering, machine learning, and AI solutions that drive business intelligence and automation.'
  },
  {
    name: 'Design & UX',
    desc: 'User-centered design, UI/UX strategy, and interactive experiences that engage and delight users.'
  },
  {
    name: 'Strategy & Consulting',
    desc: 'Digital transformation consulting, technology strategy, and architectural guidance for enterprise organizations.'
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <Section variant="dark">
          <SectionContainer className="py-32">
            <div className="max-w-3xl">
              <ScrollReveal variant="fadeUp">
                <h1 className="text-6xl font-heading font-bold mb-6">About XEMS</h1>
                <p className="text-xl text-text-secondary mb-8">
                  Founded on the belief that great technology should be accessible to ambitious businesses of all sizes. We&apos;re a team of engineers, designers, and strategists dedicated to building systems that matter.
                </p>
              </ScrollReveal>
            </div>
          </SectionContainer>
        </Section>

        {/* Mission & Vision */}
        <Section variant="default" withDivider>
          <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <ScrollReveal variant="fadeUp">
                <div>
                  <h2 className="text-3xl font-heading font-semibold mb-4">Our Mission</h2>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    To empower businesses by engineering custom software solutions that streamline operations, drive growth, and solve complex technical challenges with precision.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Every project is an opportunity to demonstrate our commitment to excellence, innovation, and client success.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.1}>
                <div>
                  <h2 className="text-3xl font-heading font-semibold mb-4">Our Vision</h2>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    To become the most trusted technology partner for enterprises seeking infrastructure that scales, systems that innovate, and solutions that transform. We envision a world where technology enables every organization to achieve their boldest ambitions.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    By pushing the boundaries of what&apos;s possible, we&apos;re building the future of digital infrastructure.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </SectionContainer>
        </Section>

       
      </main>
      <Footer />
    </div>
  )
}
