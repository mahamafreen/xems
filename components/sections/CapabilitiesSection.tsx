'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, SectionContainer } from '@/components/Section'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Code, Smartphone, Zap, Palette, Bot, Database, Landmark } from 'lucide-react'

const capabilities = [
  {
    icon: Code,
    title: 'Web Engineering',
    description: 'High-performance web applications built with modern frameworks and cutting-edge optimization techniques.',
    color: '#00d9ff',
    bgColor: 'rgba(0, 217, 255, 0.1)',
    gradient: 'linear-gradient(135deg, #00d9ff, #3a86ff)',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile solutions that deliver exceptional user experiences on iOS and Android.',
    color: '#9d4edd',
    bgColor: 'rgba(157, 78, 221, 0.1)',
    gradient: 'linear-gradient(135deg, #9d4edd, #ff006e)',
  },
  {
    icon: Zap,
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure, and resilient cloud architectures designed for enterprise-grade performance.',
    color: '#3a86ff',
    bgColor: 'rgba(58, 134, 255, 0.1)',
    gradient: 'linear-gradient(135deg, #3a86ff, #0099ff)',
  },
  {
    icon: Database,
    title: 'Data Solutions',
    description: 'Advanced data engineering, analytics, and visualization for actionable business intelligence.',
    color: '#06ffa5',
    bgColor: 'rgba(6, 255, 165, 0.1)',
    gradient: 'linear-gradient(135deg, #06ffa5, #00d9ff)',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Intelligent systems and process automation that drive efficiency and unlock new possibilities.',
    color: '#ff6b35',
    bgColor: 'rgba(255, 107, 53, 0.1)',
    gradient: 'linear-gradient(135deg, #ff6b35, #ff006e)',
  },
  {
    icon: Palette,
    title: 'Design & UX',
    description: 'User-centered design that combines aesthetics with functionality for maximum impact.',
    color: '#ff006e',
    bgColor: 'rgba(255, 0, 110, 0.1)',
    gradient: 'linear-gradient(135deg, #ff006e, #9d4edd)',
  },
  {
    icon: Landmark,
    title: 'Digital Transformation',
    description: 'Strategic modernization of legacy systems and business processes for the digital era.',
    color: '#0099ff',
    bgColor: 'rgba(0, 153, 255, 0.1)',
    gradient: 'linear-gradient(135deg, #0099ff, #00d9ff)',
  },
]

export const CapabilitiesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <Section variant="default" withDivider>
      <SectionContainer>
        <ScrollReveal variant="fadeUp">
          <div className="mb-8">
            <h2 className="text-4xl font-heading font-600 mb-2">Our Capabilities</h2>
            <p className="text-text-secondary">
              We build tools that solve real business problems
            </p>
          </div>
        </ScrollReveal>

        {/* PROMINENT OFFER SECTION */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 shadow-xl">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
            
            <div className="relative z-10">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-white">
                   Limited Offer
                </span>
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-white">
                   48-Hour Delivery
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Custom Tool Built in 72 Hours
              </h3>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl md:text-6xl font-black text-white">RS 5000</span>
                <span className="text-white/80 text-xl">flat fee</span>
                <span className="text-white/60 line-through text-lg ml-3">RS 11,500+</span>
              </div>
              
              <p className="text-white/90 text-lg mb-6 max-w-2xl">
                You have a manual, repetitive task. I'll build you a custom automation tool. 
                <strong className="text-white block mt-1">Delivered in 2 days or it's FREE.</strong>
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-200 shadow-lg cursor-pointer inline-block"
                >
                   Start Your 5000 PKR Tool
                </a>
                <a 
                  href="/projects"
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-bold hover:bg-white/30 transition-colors duration-200 cursor-pointer inline-block"
                >
                  See Our Work
                </a>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-white/20 text-white/70 text-sm">
                <span className="flex items-center gap-1"> You keep ownership</span>
                <span className="flex items-center gap-1"> Code rights for resale</span>
                <span className="flex items-center gap-1"> Pay only on delivery</span>
              </div>
            </div>
          </div>
        </motion.div>
        {/* END OFFER SECTION */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((capability) => {
            const Icon = capability.icon
            return (
              <motion.div key={capability.title} variants={itemVariants}>
                <div 
                  className="group relative h-full overflow-hidden rounded-lg border-2 bg-surface-secondary p-6 transition-all duration-300 hover:shadow-lg"
                  style={{
                    borderColor: capability.color,
                    boxShadow: `0 0 30px ${capability.color}20`,
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                    style={{ background: capability.gradient }}
                  />
                  
                  <div className="relative flex flex-col h-full">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: capability.bgColor }}
                    >
                      <Icon style={{ color: capability.color }} size={24} />
                    </div>
                    <h3 className="font-heading font-600 mb-3 text-foreground">{capability.title}</h3>
                    <p className="text-text-secondary flex-grow text-sm leading-relaxed">{capability.description}</p>
                    
                    {/* Accent line on hover */}
                    <div 
                      className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300"
                      style={{ background: capability.gradient }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </SectionContainer>
    </Section>
  )
}