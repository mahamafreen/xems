'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, SectionContainer } from '@/components/Section'
import { Card } from '@/components/Card'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Shield, Zap, Grid3x3, Cpu } from 'lucide-react'

const principles = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security architecture integrated at every layer. Zero-trust methodology, encryption, compliance, and continuous monitoring.',
    color: '#00d9ff',
    gradient: 'linear-gradient(135deg, #00d9ff, #3a86ff)',
  },
  {
    icon: Zap,
    title: 'Performance at Scale',
    description: 'Systems designed to handle millions of concurrent operations. Optimized databases, edge computing, and intelligent caching strategies.',
    color: '#9d4edd',
    gradient: 'linear-gradient(135deg, #9d4edd, #ff006e)',
  },
  {
    icon: Grid3x3,
    title: 'Modular Architecture',
    description: 'Microservices-based systems enabling independent scaling, deployment, and maintenance. API-first design for seamless integration.',
    color: '#3a86ff',
    gradient: 'linear-gradient(135deg, #3a86ff, #0099ff)',
  },
  {
    icon: Cpu,
    title: 'Reliability & Resilience',
    description: 'Redundant systems, automated failover, and disaster recovery. 99.99% uptime SLA with comprehensive monitoring and alerting.',
    color: '#ff6b35',
    gradient: 'linear-gradient(135deg, #ff6b35, #ff006e)',
  },
]

export const ArchitectureSection = () => {
  return (
    <Section variant="dark" withDivider>
      <SectionContainer>
        <ScrollReveal variant="fadeUp">
          <div className="mb-16">
            <h2 className="text-4xl font-heading font-600 mb-4">Architecture Principles</h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Our foundational engineering principles ensure systems that are secure, performant, scalable, and maintainable.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <ScrollReveal key={principle.title} variant="fadeUp" delay={index * 0.1}>
                <div 
                  className="group relative overflow-hidden rounded-lg border-2 bg-surface-secondary p-8 transition-all duration-300 hover:shadow-lg"
                  style={{
                    borderColor: principle.color,
                    boxShadow: `0 0 30px ${principle.color}20`,
                  }}
                >
                  {/* Gradient background overlay */}
                  <div 
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ background: principle.gradient }}
                  />
                  
                  {/* Accent line */}
                  <div 
                    className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: principle.gradient }}
                  />
                  
                  <div className="relative z-10">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${principle.color}20` }}
                    >
                      <Icon style={{ color: principle.color }} size={28} />
                    </div>
                    <h3 className="font-heading font-600 text-xl mb-3 text-foreground">{principle.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </SectionContainer>
    </Section>
  )
}
