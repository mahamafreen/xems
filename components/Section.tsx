'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'gradient'
  withDivider?: boolean
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ children, className, variant = 'default', withDivider = false }, ref) => {
    const variantStyles = {
      default: 'bg-background',
      dark: 'bg-surface-primary',
      gradient: 'bg-gradient-to-b from-background to-surface-primary',
    }

    return (
      <section
        ref={ref}
        className={cn(
          'relative',
          variantStyles[variant],
          className
        )}
      >
      {withDivider && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-graphite-700 to-transparent" />
      )}
        {children}
      </section>
    )
  }
)

Section.displayName = 'Section'

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
}

export const SectionContainer = React.forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'section-container',
          className
        )}
      >
        {children}
      </div>
    )
  }
)

SectionContainer.displayName = 'SectionContainer'
