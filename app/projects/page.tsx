import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Section, SectionContainer } from '@/components/Section'
import { Card } from '@/components/Card'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Archman Consultants',
    category: ['Next.js', 'TypeScript', 'Tailwind'],
    description: 'An archtitectural consultancy website with project showcases using interactive data visualizations.',
    challenge: 'Handle streaming data at scale while providing real-time insights to 10k+ daily active users',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'D3.js'],
  },
  {
    title: 'Cactus Coffee',
    category: ['React', 'Tailwind', 'Node.js'],
    description: 'An e-commerce website for a coffee shop, featuring a modern design and seamless user experience.',
    challenge: 'Create a responsive and performant shopping experience that works across all devices',
    stack: ['React', 'Tailwind', 'Node.js'],
  },
  {
    title: 'Real-Time Analytics Dashboard',
    category: ['Full Stack', 'Data'],
    description: 'Developed a data visualization platform ingesting 1TB+ daily. Features real-time dashboards, custom reports, and predictive analytics.',
    challenge: 'Handle streaming data at scale while providing real-time insights to 10k+ daily active users',
    stack: ['React', 'Apache Kafka', 'Elasticsearch', 'TimescaleDB', 'Python', 'D3.js'],
  },
  {
    title: 'AI-Powered Content Platform',
    category: ['Full Stack', 'AI'],
    description: 'Created an intelligent content management system with ML-driven recommendations. Serves 50M+ users across mobile and web.',
    challenge: 'Deliver personalized content recommendations at scale with sub-500ms response times',
    stack: ['Python', 'TensorFlow', 'FastAPI', 'MongoDB', 'React', 'React Native'],
  },
  {
    title: 'Enterprise Resource Planning System',
    category: ['Backend', 'Integration'],
    description: 'Built comprehensive ERP system integrating with 30+ third-party services. Handles complex workflows and reporting.',
    challenge: 'Integrate disparate systems while maintaining data consistency and audit trails',
    stack: ['Node.js', 'PostgreSQL', 'RabbitMQ', 'GraphQL', 'Docker', 'Next.js'],
  },
  {
    title: 'Mobile Social Network',
    category: ['Mobile', 'Full Stack'],
    description: 'Engineered a mobile-first social platform with real-time messaging, notifications, and media streaming.',
    challenge: 'Build real-time collaborative features with offline support for global audience',
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io', 'AWS Cloudfront'],
  },
  
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <Section variant="dark">
          <SectionContainer className="py-32 text-center">
            <ScrollReveal variant="fadeUp">
              <h1 className="text-6xl font-heading font-bold mb-6">Our Projects</h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Engineering case studies showcasing our expertise in building systems at massive scale.
              </p>
            </ScrollReveal>
          </SectionContainer>
        </Section>

        {/* Projects */}
        <Section variant="default">
          <SectionContainer>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <ScrollReveal key={project.title} variant="fadeUp" delay={index * 0.05}>
                  <Card variant="default">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Main Content */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-heading font-semibold text-2xl">{project.title}</h3>
                          <span className="px-3 py-1 bg-electric-cyan/10 text-electric-cyan text-xs font-semibold rounded border border-electric-cyan/30 whitespace-nowrap ml-4">
                            {project.category}
                          </span>
                        </div>

                        <p className="text-text-secondary mb-6">{project.description}</p>

                        <div className="space-y-6 mb-6 border-t border-graphite-700 pt-6">
                          <div>
                            <h4 className="font-heading font-semibold text-electric-cyan text-sm mb-2">Challenge</h4>
                            <p className="text-text-secondary text-sm">{project.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-heading font-semibold text-electric-cyan text-sm mb-2">Solution</h4>
                            <p className="text-text-secondary text-sm">{project.solution}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-surface-tertiary text-electric-cyan text-xs rounded border border-electric-cyan/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </SectionContainer>
        </Section>

        {/* CTA */}
        <Section variant="dark" withDivider>
          <SectionContainer className="py-32 text-center">
            <ScrollReveal variant="fadeUp">
              <h2 className="text-4xl font-heading font-bold mb-6">Ready to work together?</h2>
              <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your project and how we can help you achieve your goals.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-electric-cyan text-background font-semibold rounded-lg hover:bg-electric-cyan-light transition-colors">
                Start a Project <ExternalLink size={20} />
              </a>
            </ScrollReveal>
          </SectionContainer>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
