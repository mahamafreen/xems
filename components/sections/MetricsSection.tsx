'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, SectionContainer } from '@/components/Section'
import { ScrollReveal } from '@/components/ScrollReveal'
import { AnimatedCounter } from '@/components/AnimatedCounter'

const metrics = [
  { label: 'Projects Delivered', value: 50, suffix: '+', color: '#00d9ff', gradient: 'linear-gradient(135deg, #00d9ff, #3a86ff)' },
  { label: 'Team Members', value: 150, suffix: '+', color: '#9d4edd', gradient: 'linear-gradient(135deg, #9d4edd, #ff006e)' },
  { label: 'Years in Business', value: 12, suffix: '+', color: '#3a86ff', gradient: 'linear-gradient(135deg, #3a86ff, #0099ff)' },
  { label: 'Global Clients', value: 200, suffix: '+', color: '#06ffa5', gradient: 'linear-gradient(135deg, #06ffa5, #00d9ff)' },
  { label: 'Daily Active Users', value: 100, prefix: '', suffix: 'M+', color: '#ff6b35', gradient: 'linear-gradient(135deg, #ff6b35, #ff006e)' },
  { label: 'Uptime SLA', value: 99.99, prefix: '', suffix: '%', decimals: 2, color: '#ff006e', gradient: 'linear-gradient(135deg, #ff006e, #9d4edd)' },
]

export const MetricsSection = () => {
  return (
    <Section variant="dark" withDivider>
      <SectionContainer>
        <ScrollReveal variant="fadeUp" className="mb-16">
          <div>
            <h2 className="text-4xl font-heading font-600 mb-4">By The Numbers</h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Our impact measured in infrastructure built, clients served, and users empowered.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div 
                className="p-8 rounded-lg border-2 bg-surface-secondary transition-all duration-300 group-hover:shadow-lg"
                style={{
                  borderColor: metric.color,
                  boxShadow: `0 0 30px ${metric.color}20`,
                }}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div 
                    style={{
                      fontSize: '3rem',
                      fontWeight: 700,
                      background: metric.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    <AnimatedCounter
                      end={metric.value}
                      prefix={metric.prefix || ''}
                      suffix={metric.suffix || ''}
                      decimals={metric.decimals || 0}
                      duration={2500}
                    />
                  </div>
                </div>
                <p className="text-text-secondary font-600 group-hover:text-foreground transition-colors">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </Section>
  )
}
