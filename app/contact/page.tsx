'use client'

import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Section, SectionContainer } from '@/components/Section'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    console.log('[v0] Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <Section variant="dark">
          <SectionContainer className="py-32 text-center">
            <ScrollReveal variant="fadeUp">
              <h1 className="text-6xl font-heading font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Have a project in mind? Let&apos;s discuss how XEMS can help you achieve your technology goals.
              </p>
            </ScrollReveal>
          </SectionContainer>
        </Section>

        {/* Contact Info & Form */}
        <Section variant="default" withDivider>
          <SectionContainer>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <ScrollReveal variant="fadeUp">
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-6">Contact Information</h3>
                  </div>
                </ScrollReveal>

                <ScrollReveal variant="fadeUp" delay={0.1}>
                  <a href="mailto:hello@xems.dev" className="flex gap-4 items-start hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 bg-electric-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-electric-cyan/20">
                      <Mail className="text-electric-cyan" size={20} />
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm mb-1">Email</p>
                      <p className="text-foreground">maham@xems.dev</p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal variant="fadeUp" delay={0.15}>
                  <a href="tel:+1234567890" className="flex gap-4 items-start hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 bg-electric-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-electric-cyan/20">
                      <Phone className="text-electric-cyan" size={20} />
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm mb-1">Phone</p>
                      <p className="text-foreground">+92 (334) 123-4567</p>
                    </div>
                  </a>
                </ScrollReveal>

                <ScrollReveal variant="fadeUp" delay={0.2}>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-electric-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-electric-cyan/20">
                      <MapPin className="text-electric-cyan" size={20} />
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm mb-1">Headquarters</p>
                      <p className="text-foreground">Pakistan Islamabad</p>
                      <p className="text-text-secondary text-sm">Paksitan</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal variant="fadeUp" delay={0.25}>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-electric-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-electric-cyan/20">
                      <Clock className="text-electric-cyan" size={20} />
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm mb-1">Hours</p>
                      <p className="text-foreground">Mon - Fri</p>
                      <p className="text-text-secondary text-sm">9:00 AM - 6:00 PM </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ScrollReveal variant="fadeUp">
                  <Card variant="default">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Maham Afreen"
                          required
                          className="w-full px-4 py-3 bg-surface-primary border border-graphite-700 rounded-lg text-foreground placeholder-text-tertiary focus:border-electric-cyan transition-colors focus-ring"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="maham@example.com"
                          required
                          className="w-full px-4 py-3 bg-surface-primary border border-graphite-700 rounded-lg text-foreground placeholder-text-tertiary focus:border-electric-cyan transition-colors focus-ring"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full px-4 py-3 bg-surface-primary border border-graphite-700 rounded-lg text-foreground placeholder-text-tertiary focus:border-electric-cyan transition-colors focus-ring"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-surface-primary border border-graphite-700 rounded-lg text-foreground placeholder-text-tertiary focus:border-electric-cyan transition-colors focus-ring resize-none"
                        />
                      </div>

                      <Button variant="primary" type="submit" className="w-full">
                        {submitted ? 'Message Sent!' : 'Send Message'}
                      </Button>

                      {submitted && (
                        <p className="text-electric-cyan text-sm text-center">
                          Thank you! We&apos;ll get back to you within 24 hours.
                        </p>
                      )}
                    </form>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </SectionContainer>
        </Section>

        {/* Additional Info */}
        <Section variant="dark" withDivider>
          <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal variant="fadeUp">
                <Card variant="dark" className="text-center">
                  <div className="text-3xl font-heading font-bold text-electric-cyan mb-2">7+</div>
                  <p className="text-text-secondary">Years of Experience</p>
                </Card>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.1}>
                <Card variant="dark" className="text-center">
                  <div className="text-3xl font-heading font-bold text-electric-cyan mb-2">20+</div>
                  <p className="text-text-secondary">Projects Completed</p>
                </Card>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.2}>
                <Card variant="dark" className="text-center">
                  <div className="text-3xl font-heading font-bold text-electric-cyan mb-2">24hrs</div>
                  <p className="text-text-secondary">Average Response Time</p>
                </Card>
              </ScrollReveal>
            </div>
          </SectionContainer>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
