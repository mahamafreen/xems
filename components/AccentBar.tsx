import React from 'react'

interface AccentBarProps {
  className?: string
  animate?: boolean
  height?: 'sm' | 'md' | 'lg'
  gradient?: 'cyan-to-purple' | 'magenta-to-cyan' | 'warm' | 'cool'
}

export const AccentBar: React.FC<AccentBarProps> = ({
  className = '',
  animate = true,
  height = 'md',
  gradient = 'cyan-to-purple',
}) => {
  const heightMap = {
    sm: 'h-1',
    md: 'h-1.5',
    lg: 'h-2',
  }

  const gradientMap = {
    'cyan-to-purple': 'from-electric-cyan via-purple-neon to-magenta',
    'magenta-to-cyan': 'from-magenta via-purple-neon to-electric-cyan',
    'warm': 'from-orange-neon via-magenta to-purple-neon',
    'cool': 'from-electric-cyan via-indigo-bright to-blue-accent',
  }

  const animationClass = animate ? 'animate-pulse' : ''

  return (
    <div
      className={`w-full bg-gradient-to-r ${gradientMap[gradient]} ${heightMap[height]} rounded-full ${animationClass} ${className}`}
    />
  )
}
