import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Section, SectionContainer } from '@/components/Section'
import { Card } from '@/components/Card'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Code, Smartphone, Cloud, Database, Zap, Palette, Landmark } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Engineering',
    shortDesc: 'High-performance web applications',
    fullDesc: 'We build modern, scalable web applications using React, Next.js, Vue, and other cutting-edge frameworks. Every application is optimized for performance, accessibility, and user experience.',
    benefits: ['SEO Optimized', 'Performance Focused', 'Scalable Architecture', 'Real-time Features'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    process: ['Discovery', 'Design', 'Development', 'Testing', 'Deployment']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    shortDesc: 'Native and cross-platform solutions',
    fullDesc: 'From iOS and Android native development to cross-platform solutions with React Native and Flutter, we deliver mobile apps that users love.',
    benefits: ['Native Performance', 'Cross-platform Support', 'Offline Capability', 'Push Notifications'],
    stack: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
    process: ['Market Research', 'Prototyping', 'Development', 'Beta Testing', 'App Store Launch']
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    shortDesc: 'Scalable and secure cloud solutions',
    fullDesc: 'We architect and manage cloud infrastructure on AWS, Google Cloud, and Azure. Ensuring security, scalability, and cost-efficiency at every layer.',
    benefits: ['99.99% Uptime', 'Auto-scaling', 'Security Compliance', 'Disaster Recovery'],
    stack: ['AWS', 'Kubernetes', 'Docker',  'CloudFormation'],
    process: ['Assessment', 'Planning', 'Migration', 'Optimization', 'Monitoring']
  },
  {
    icon: Database,
    title: 'Data Solutions',
    shortDesc: 'Analytics and data-driven insights',
    fullDesc: 'Advanced data engineering, warehousing, and analytics platforms that transform raw data into actionable business intelligence.',
    benefits: ['Real-time Analytics', 'Data Visualization', 'Predictive Models', 'Data Warehouse'],
    stack: ['PostgreSQL', 'MongoDB'],
    process: ['Data Audit', 'Schema Design', 'ETL Pipeline', 'Analytics Setup', 'Insights & Reports']
  },
  {
    icon: Zap,
    title: 'AI & Automation',
    shortDesc: 'Intelligent systems and automation',
    fullDesc: 'Implement machine learning models, chatbots, and process automation to increase efficiency and unlock new business opportunities.',
    benefits: ['Process Automation', 'ML Models', 'AI Chatbots', 'Workflow Optimization'],
    stack: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face'],
    process: ['Problem Definition', 'Data Preparation', 'Model Training', 'Testing', 'Deployment']
  },
  {
    icon: Palette,
    title: 'Design & UX',
    shortDesc: 'User-centered design excellence',
    fullDesc: 'Beautiful, intuitive interfaces that users love. From wireframes to interactive prototypes, we design experiences that convert.',
    benefits: ['User Research', 'Wireframing', 'Interactive Prototypes', 'Design Systems'],
    stack: ['Figma', 'Adobe XD', 'Framer'],
    process: ['Discovery', 'User Research', 'Wireframes', 'Prototyping', 'Handoff to Dev']
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <Section variant="dark">
          <SectionContainer className="py-32 text-center">
            <ScrollReveal variant="fadeUp">
              <h1 className="text-6xl font-heading font-bold mb-6">Our Services</h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Comprehensive technology solutions across the entire development lifecycle. From concept to scale.
              </p>
            </ScrollReveal>
          </SectionContainer>
        </Section>

        {/* Services Grid */}
        <Section variant="default">
          <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <ScrollReveal key={service.title} variant="fadeUp" delay={index * 0.1}>
                    <Card variant="default">
                      <div className="w-12 h-12 bg-electric-cyan/10 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="text-electric-cyan" size={28} />
                      </div>
                      <h3 className="font-heading font-semibold text-xl mb-3">{service.title}</h3>
                      <p className="text-text-secondary mb-6">{service.fullDesc}</p>
                      
                      <div className="mb-6 border-t border-graphite-700 pt-6">
                        <h4 className="font-heading font-semibold text-sm text-electric-cyan mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="text-text-secondary text-sm flex gap-2">
                              <span className="text-electric-cyan">→</span> {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-graphite-700 pt-6">
                        <h4 className="font-heading font-semibold text-sm text-electric-cyan mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.stack.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-surface-tertiary text-electric-cyan text-xs rounded border border-electric-cyan/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </ScrollReveal>
                )
              })}
            </div>
          </SectionContainer>
        </Section>

        {/* Process Section */}
        <Section variant="dark" withDivider>
          <SectionContainer>
            <div className="text-center mb-16">
              <ScrollReveal variant="fadeUp">
                <h2 className="text-4xl font-heading font-semibold mb-4">Our Process</h2>
                <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                  Every project follows a proven methodology designed for success, collaboration, and results.
                </p>
              </ScrollReveal>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                {['Discovery', 'Design', 'Development', 'Testing', 'Launch'].map((step, index) => (
                  <div key={step} className="relative">
                    <ScrollReveal variant="fadeUp" delay={index * 0.1}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-electric-cyan/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-electric-cyan/30">
                          <span className="text-electric-cyan font-heading font-bold text-xl">{index + 1}</span>
                        </div>
                        <p className="font-heading font-semibold">{step}</p>
                      </div>
                    </ScrollReveal>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-8 -right-2 w-4 h-0.5 bg-electric-cyan/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SectionContainer>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
