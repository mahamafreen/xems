'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  variant?: 'fadeUp' | 'fadeIn' | 'slideInLeft' | 'slideInRight'
  className?: string
  duration?: number
}

const variants = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
  },
}

export const ScrollReveal = ({
  children,
  delay = 0,
  variant = 'fadeUp',
  className = '',
  duration = 0.6,
}: ScrollRevealProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={variants[variant].initial}
      animate={inView ? variants[variant].animate : variants[variant].initial}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
