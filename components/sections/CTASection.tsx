'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Section, SectionContainer } from '@/components/Section'
import { Button } from '@/components/Button'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ArrowRight } from 'lucide-react'

export const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <Section variant="dark">
      <SectionContainer className="py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-heading font-700 mb-6">
            Ready to Transform Your Infrastructure?
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">
            Schedule a consultation with our engineering team to discuss your next big project.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="gap-2">
                Start Your Project <ArrowRight size={20} />
              </Button>
            </Link>
          </motion.div>

        </motion.div>
      </SectionContainer>
    </Section>
  )
}
