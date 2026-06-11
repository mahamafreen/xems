'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Section, SectionContainer } from '@/components/Section'
import { Card } from '@/components/Card'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Button } from '@/components/Button'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'Global Payment Platform',
    description: 'Engineered a multi-currency payment system processing 500M+ transactions annually. Built with microservices, Redis caching, and real-time settlement.',
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'Kubernetes'],
    metrics: '99.99% Uptime',
    accentColor: 'from-electric-cyan to-indigo-bright',
    metricsBg: 'bg-electric-cyan/10',
    metricsText: 'text-electric-cyan',
    borderColor: 'border-electric-cyan/20',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description: 'Developed a data visualization platform ingesting 1TB+ daily. Features real-time dashboards, custom reports, and predictive analytics.',
    stack: ['React', 'Apache Kafka', 'Elasticsearch', 'TimescaleDB'],
    metrics: '< 200ms Load Time',
    accentColor: 'from-purple-neon to-magenta',
    metricsBg: 'bg-purple-neon/10',
    metricsText: 'text-purple-neon',
    borderColor: 'border-purple-neon/20',
  },
  {
    title: 'AI-Powered Content Platform',
    description: 'Created an intelligent content management system with ML-driven recommendations. Serves 50M+ users across mobile and web.',
    stack: ['Python', 'TensorFlow', 'FastAPI', 'MongoDB'],
    metrics: '45% Engagement Increase',
    accentColor: 'from-indigo-bright to-blue-accent',
    metricsBg: 'bg-indigo-bright/10',
    metricsText: 'text-indigo-bright',
    borderColor: 'border-indigo-bright/20',
  },
]

export const FeaturedProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <Section variant="default" withDivider>
      <SectionContainer>
        <ScrollReveal variant="fadeUp">
          <div className="mb-12">
            <h2 className="text-4xl font-heading font-600 mb-4">Featured Projects</h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Engineering case studies showcasing our expertise in building systems at massive scale.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '50px' }}
          className="space-y-6"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <div className="group relative overflow-hidden rounded-lg border border-graphite-700 bg-surface-secondary p-6 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:shadow-purple-neon/10">
                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                
                <div className="relative flex flex-col md:flex-row justify-between md:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="font-heading font-600 text-xl mb-3 text-foreground group-hover:bg-gradient-to-r group-hover:${project.accentColor} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{project.title}</h3>
                    <p className="text-text-secondary mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <span key={tech} className={`px-3 py-1 bg-surface-tertiary text-foreground text-sm rounded-full border ${project.borderColor} hover:border-current hover:shadow-lg hover:shadow-current/20 transition-all duration-300`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-4 flex-shrink-0">
                    <div className={`px-4 py-2 ${project.metricsBg} rounded-lg border ${project.borderColor} whitespace-nowrap group-hover:shadow-lg transition-all duration-300`}>
                      <p className={`${project.metricsText} font-semibold text-sm`}>{project.metrics}</p>
                    </div>
                    <Link href="/projects">
                      <button className={`${project.metricsText} hover:opacity-70 transition-all duration-300 flex items-center gap-2 font-600`}>
                        View Details <ArrowRight size={16} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/projects">
            <Button variant="secondary" size="lg">
              View All Projects <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </SectionContainer>
    </Section>
  )
}
