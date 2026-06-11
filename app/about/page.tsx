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
                    To empower organizations through cutting-edge technology infrastructure and strategic digital transformation. We believe in building lasting partnerships with our clients, understanding their challenges deeply, and delivering solutions that not only meet today's needs but anticipate tomorrow's opportunities.
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

        {/* Core Values */}
        <Section variant="dark" withDivider>
          <SectionContainer>
            <ScrollReveal variant="fadeUp" className="mb-12">
              <h2 className="text-4xl font-heading font-semibold mb-4">Core Values</h2>
              <p className="text-text-secondary text-lg max-w-2xl">
                These principles guide every decision we make and every project we undertake.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <ScrollReveal key={value.title} variant="fadeUp" delay={index * 0.1}>
                    <Card variant="dark">
                      <div className="w-12 h-12 bg-electric-cyan/10 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="text-electric-cyan" size={28} />
                      </div>
                      <h3 className="font-heading font-semibold text-xl mb-3">{value.title}</h3>
                      <p className="text-text-secondary">{value.description}</p>
                    </Card>
                  </ScrollReveal>
                )
              })}
            </div>
          </SectionContainer>
        </Section>

        {/* Our Team */}
        <Section variant="default" withDivider>
          <SectionContainer>
            <ScrollReveal variant="fadeUp" className="text-center mb-12">
              <h2 className="text-4xl font-heading font-semibold mb-4">Our Team</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                150+ talented engineers, designers, and strategists united by a passion for building exceptional technology.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Engineers', count: '4+', desc: 'Full-stack developers, backend specialists, and infrastructure experts' },
                { title: 'Designers', count: '2+', desc: 'UI/UX designers, product designers, and design system specialists' },
                { title: 'Leaders', count: '3+', desc: 'Project managers, architects, and consultants' }
              ].map((team, index) => (
                <ScrollReveal key={team.title} variant="fadeUp" delay={index * 0.1}>
                  <Card variant="default" className="text-center">
                    <div className="text-electric-cyan text-4xl font-heading font-bold mb-2">{team.count}</div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{team.title}</h3>
                    <p className="text-text-secondary text-sm">{team.desc}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </SectionContainer>
        </Section>

        {/* Divisions */}
        <Section variant="dark" withDivider>
          <SectionContainer>
            <ScrollReveal variant="fadeUp" className="mb-12">
              <h2 className="text-4xl font-heading font-semibold mb-4">Our Divisions</h2>
              <p className="text-text-secondary text-lg max-w-2xl">
                Organized expertise across six specialized areas to deliver comprehensive solutions.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {divisions.map((division, index) => (
                <ScrollReveal key={division.name} variant="fadeUp" delay={index * 0.05}>
                  <Card variant="dark">
                    <h3 className="font-heading font-semibold text-lg mb-3 text-electric-cyan">{division.name}</h3>
                    <p className="text-text-secondary">{division.desc}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </SectionContainer>
        </Section>

        {/* Timeline */}
        <Section variant="default" withDivider>
          <SectionContainer>
            <ScrollReveal variant="fadeUp" className="text-center mb-12">
              <h2 className="text-4xl font-heading font-semibold mb-4">Our Journey</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Over a decade of building incredible technology for forward-thinking organizations.
              </p>
            </ScrollReveal>

            <div className="max-w-2xl mx-auto space-y-8">
              {[
                { year: '2013', event: 'Founded with vision to transform digital infrastructure' },
                { year: '2016', event: 'Expanded to 50+ team members across multiple offices' },
                { year: '2018', event: 'Launched AI and machine learning division' },
                { year: '2021', event: 'Reached 100M+ users impacted by our solutions' },
                { year: '2024', event: 'Celebrating 12 years of innovation and excellence' }
              ].map((milestone, index) => (
                <ScrollReveal key={milestone.year} variant="slideInLeft" delay={index * 0.1}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-electric-cyan/10 rounded-full flex items-center justify-center border border-electric-cyan/30">
                        <span className="text-electric-cyan font-heading font-bold">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="flex-grow pt-2">
                      <p className="text-text-secondary text-lg">{milestone.event}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </SectionContainer>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
