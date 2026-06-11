import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Section, SectionContainer } from '@/components/Section'
import { Card } from '@/components/Card'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Global Payment Platform',
    category: 'Backend / Infrastructure',
    description: 'Engineered a multi-currency payment system processing 500M+ transactions annually. Built with microservices architecture, Redis caching, and real-time settlement.',
    challenge: 'Process millions of transactions daily with sub-second latency and 99.99% uptime',
    solution: 'Microservices architecture with Kubernetes, PostgreSQL sharding, Redis caching, and event-driven processing',
    results: ['500M+ transactions annually', '99.99% uptime maintained', 'Sub-second settlement', '<50ms p99 latency'],
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'Kubernetes', 'AWS', 'GraphQL'],
  },
  {
    title: 'Real-Time Analytics Dashboard',
    category: 'Full Stack / Data',
    description: 'Developed a data visualization platform ingesting 1TB+ daily. Features real-time dashboards, custom reports, and predictive analytics.',
    challenge: 'Handle streaming data at scale while providing real-time insights to 10k+ daily active users',
    solution: 'Kafka for data ingestion, Elasticsearch for queries, React with WebSockets for real-time UI updates',
    results: ['1TB+ daily ingestion', '<200ms dashboard load', '99.9% query accuracy', '10k+ concurrent users'],
    stack: ['React', 'Apache Kafka', 'Elasticsearch', 'TimescaleDB', 'Python', 'D3.js'],
  },
  {
    title: 'AI-Powered Content Platform',
    category: 'Full Stack / AI',
    description: 'Created an intelligent content management system with ML-driven recommendations. Serves 50M+ users across mobile and web.',
    challenge: 'Deliver personalized content recommendations at scale with sub-500ms response times',
    solution: 'ML pipeline with TensorFlow, vector embeddings in Pinecone, Node.js API, React Native mobile app',
    results: ['50M+ users', '45% engagement increase', '85% recommendation accuracy', 'Multi-platform launch'],
    stack: ['Python', 'TensorFlow', 'FastAPI', 'MongoDB', 'React', 'React Native'],
  },
  {
    title: 'Enterprise Resource Planning System',
    category: 'Backend / Integration',
    description: 'Built comprehensive ERP system integrating with 30+ third-party services. Handles complex workflows and reporting.',
    challenge: 'Integrate disparate systems while maintaining data consistency and audit trails',
    solution: 'Modular architecture with service adapters, event sourcing, and comprehensive audit logging',
    results: ['30+ integrations', 'Zero data loss', 'Full audit trail', 'Multi-tenant support'],
    stack: ['Node.js', 'PostgreSQL', 'RabbitMQ', 'GraphQL', 'Docker', 'Next.js'],
  },
  {
    title: 'Mobile Social Network',
    category: 'Mobile / Full Stack',
    description: 'Engineered a mobile-first social platform with real-time messaging, notifications, and media streaming.',
    challenge: 'Build real-time collaborative features with offline support for global audience',
    solution: 'React Native frontend, Node.js backend with WebSocket support, CDN for media delivery',
    results: ['5M+ downloads', '4.8★ rating', 'Real-time messaging', 'Live streaming support'],
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io', 'AWS Cloudfront'],
  },
  {
    title: 'Healthcare Data Platform',
    category: 'Compliance / Data',
    description: 'HIPAA-compliant platform for managing patient records, scheduling, and telemedicine capabilities.',
    challenge: 'Meet strict compliance requirements while maintaining excellent user experience',
    solution: 'Encrypted databases, role-based access control, audit logging, secure video infrastructure',
    results: ['HIPAA compliant', '10k+ healthcare providers', 'Zero security incidents', '99.95% uptime'],
    stack: ['Next.js', 'PostgreSQL', 'HashiCorp Vault', 'Twilio', 'AWS', 'Kubernetes'],
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

                      {/* Results Sidebar */}
                      <div className="bg-surface-primary border border-graphite-700 rounded-lg p-6">
                        <h4 className="font-heading font-semibold text-electric-cyan mb-4">Results</h4>
                        <ul className="space-y-3">
                          {project.results.map((result) => (
                            <li key={result} className="text-text-secondary text-sm flex gap-3">
                              <span className="text-electric-cyan flex-shrink-0">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
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
