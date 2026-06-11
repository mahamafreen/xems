'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Share2, Code2, Send } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-surface-primary border-t border-gradient-to-r from-transparent via-purple-neon to-transparent py-12 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl bg-gradient-to-br from-electric-cyan to-purple-neon" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4 group">
              <Image
                src="/logo.png"
                alt="XEMS Logo"
                width={32}
                height={32}
                className="group-hover:shadow-lg group-hover:shadow-electric-cyan/30 transition-all duration-300"
              />
              <span className="font-heading font-bold bg-gradient-to-r from-foreground to-electric-cyan bg-clip-text text-transparent">XEMS</span>
            </div>
            <p className="text-text-secondary text-sm">
              Enterprise technology infrastructure and digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-600 mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-text-secondary hover:text-foreground text-sm transition-colors">Web Engineering</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-foreground text-sm transition-colors">Software Development</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-foreground text-sm transition-colors">Mobile Solutions</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-foreground text-sm transition-colors">AI & Automation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-600 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-text-secondary hover:text-foreground text-sm transition-colors">About</Link></li>
              <li><Link href="/projects" className="text-text-secondary hover:text-foreground text-sm transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-foreground text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-600 mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group text-text-secondary hover:text-electric-cyan transition-all duration-300 p-2 rounded-lg hover:bg-electric-cyan/10">
                <Share2 size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group text-text-secondary hover:text-purple-neon transition-all duration-300 p-2 rounded-lg hover:bg-purple-neon/10">
                <Code2 size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group text-text-secondary hover:text-magenta transition-all duration-300 p-2 rounded-lg hover:bg-magenta/10">
                <Send size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gradient-to-r from-transparent via-purple-neon/50 to-transparent py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              © {currentYear} XEMS. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-text-secondary hover:text-electric-cyan text-sm transition-colors font-500">Privacy Policy</Link>
              <Link href="#" className="text-text-secondary hover:text-purple-neon text-sm transition-colors font-500">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
