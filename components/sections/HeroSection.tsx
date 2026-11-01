'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Section, SectionContainer } from '@/components/Section'
import { HeroSlideshow } from '@/components/HeroSlideshow'
import { ArrowRight, Calendar } from 'lucide-react'

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
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export const HeroSection = () => {
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
          {/* Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-cyan/30 bg-electric-cyan/5">
              <div className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse" />
              <span className="text-electric-cyan text-sm font-600">Building Tomorrow&apos;s Infrastructure</span>
            </div>
            <a
              href="#upcoming-events"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-neon/40 bg-purple-neon/10 hover:bg-purple-neon/20 hover:border-purple-neon text-purple-neon text-sm font-semibold transition-all duration-300 group cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-magenta opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-magenta"></span>
              </span>
              <span>2 Upcoming Events</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-heading font-700 mb-6">
            Building digital products that move {' '}
            <span
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #00d9ff, #9d4edd, #ff006e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Businesses Forward.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-text-secondary max-w-2xl mb-8">
            Modern websites, web applications, e-commerce experiences and AI-powered solutions built around your business.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="gap-2 w-full sm:w-auto">
                Start Your Project <ArrowRight size={20} />
              </Button>
            </Link>
            <a href="#upcoming-events">
              <Button
                variant="secondary"
                size="lg"
                className="gap-2.5 border-electric-cyan/40 hover:border-electric-cyan text-foreground hover:text-electric-cyan hover:shadow-lg hover:shadow-electric-cyan/20 w-full sm:w-auto transition-all duration-300 group"
              >
                <Calendar size={18} className="text-electric-cyan group-hover:scale-110 transition-transform" />
                <span>XEMS EVENTS</span>
              </Button>
            </a>
            <Link href="/about">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">Learn More</Button>
            </Link>
          </motion.div>
        </motion.div>
      </SectionContainer>
    </Section>
  )
}
