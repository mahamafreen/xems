'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'dark' | 'outlined'
  hover?: boolean
  children: React.ReactNode
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', hover = true, className, children, ...props }, ref) => {
  const variantStyles = {
    default: 'bg-surface-secondary border border-graphite-700',
    dark: 'bg-surface-primary border border-graphite-700',
    outlined: 'bg-transparent border border-graphite-600',
  }

  const hoverStyles = hover ? 'hover:bg-surface-tertiary hover:border-graphite-600 transition-all duration-300' : ''

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg p-6',
          variantStyles[variant],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
