'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const baseStyles = 'btn inline-flex items-center justify-center font-600 transition-all duration-250 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variantStyles = {
      primary: 'bg-gradient-to-r from-electric-cyan to-indigo-bright text-background hover:shadow-lg hover:shadow-electric-cyan/30 hover:scale-105',
      secondary: 'bg-surface-secondary border border-graphite-600 text-foreground hover:bg-surface-tertiary hover:border-purple-neon/50 hover:shadow-lg hover:shadow-purple-neon/10',
      ghost: 'text-electric-cyan hover:text-electric-cyan-light border border-electric-cyan hover:border-magenta hover:shadow-lg hover:shadow-magenta/20',
    }

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm rounded-md',
      md: 'px-6 py-3 rounded-lg',
      lg: 'px-8 py-4 text-lg rounded-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
