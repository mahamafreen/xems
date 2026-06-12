'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Section, SectionContainer } from '@/components/Section'
import { HeroSlideshow } from '@/components/HeroSlideshow'
import { ArrowRight } from 'lucide-react'

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <Section variant="dark" className="relative overflow-hidden">
      {/* Hero background slideshow */}
      <HeroSlideshow />

      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl bg-gradient-to-br from-purple-neon via-magenta to-transparent opacity-40 animate-float" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl bg-gradient-to-br from-electric-cyan via-indigo-bright to-transparent opacity-40 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,217,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <SectionContainer className="relative z-10 min-h-[600px] flex flex-col justify-center py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-cyan/30 bg-electric-cyan/5 mb-6">
              <div className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse" />
              <span className="text-electric-cyan text-sm font-600">Building Tomorrow&apos;s Infrastructure</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-heading font-700 mb-6">
            Enterprise Technology{' '}
            <span 
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #00d9ff, #9d4edd, #ff006e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Infrastructure
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-text-secondary max-w-2xl mb-8">
            We design, build, and maintain cutting-edge digital systems that power ambitious businesses at scale. 
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="gap-2">
                Start Your Project <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="secondary" size="lg">Learn More</Button>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-gradient-to-r from-transparent via-purple-neon to-transparent grid grid-cols-3 gap-8">
            <div className="group">
              <div className="text-3xl font-heading font-700 bg-gradient-to-r from-electric-cyan to-purple-neon bg-clip-text text-transparent mb-2 group-hover:from-purple-neon group-hover:to-magenta transition-all duration-300">50+</div>
              <p className="text-text-secondary text-sm">Projects Delivered</p>
            </div>
            <div className="group">
              <div className="text-3xl font-heading font-700 bg-gradient-to-r from-indigo-bright to-electric-cyan bg-clip-text text-transparent mb-2 group-hover:from-magenta group-hover:to-indigo-bright transition-all duration-300">100M+</div>
              <p className="text-text-secondary text-sm">Users Impacted</p>
            </div>
            <div className="group">
              <div className="text-3xl font-heading font-700 bg-gradient-to-r from-purple-neon to-indigo-bright bg-clip-text text-transparent mb-2 group-hover:from-orange-neon group-hover:to-purple-neon transition-all duration-300">12+</div>
              <p className="text-text-secondary text-sm">Years Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </SectionContainer>
    </Section>
  )
}
