import React from 'react'

interface GradientBlobProps {
  className?: string
  color1?: string
  color2?: string
  color3?: string
  blur?: 'sm' | 'md' | 'lg' | 'xl'
  opacity?: number
}

export const GradientBlob: React.FC<GradientBlobProps> = ({
  className = '',
  color1 = '#00d9ff',
  color2 = '#9d4edd',
  color3 = '#ff006e',
  blur = 'lg',
  opacity = 0.4,
}) => {
  const blurMap = {
    sm: 'blur-2xl',
    md: 'blur-3xl',
    lg: 'blur-3xl',
    xl: 'blur-3xl',
  }

  return (
    <div
      className={`absolute rounded-full ${blurMap[blur]} pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(circle, ${color1}, ${color2}, ${color3})`,
        opacity,
      }}
    />
  )
}
