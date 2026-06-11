'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const backgroundImages = [
  '/hero-bg-1.png',
  '/hero-bg-2.png',
  '/hero-bg-3.png',
  '/hero-bg-4.png',
  '/hero-bg-5.png',
  '/hero-bg-6.png',
]

export const HeroSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Hero background ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
      
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/30" />
    </div>
  )
}
