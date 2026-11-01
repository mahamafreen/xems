'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Section, SectionContainer } from '@/components/Section'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Button } from '@/components/Button'
import {
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Briefcase,
  AlertCircle,
  X,
  Maximize2
} from 'lucide-react'

// =============================================================================
// UPCOMING EVENTS CONFIGURATION
// =============================================================================

export interface EventItem {
  id: string
  title: string
  subtitle?: string
  tagline?: string
  date: string
  dayNumber: string
  monthYear: string
  time: string
  location: string
  category: string
  icon: typeof ShieldCheck | typeof Briefcase
  description: string
  highlights: string[]
  accentColor: string
  accentGradient: string
  borderGlow: string
  image?: string
  // Registration Form URL
  registrationFormUrl: string
}

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'safe-mode-byte-bite',
    title: 'Safe mode × Byte & Bite',
    subtitle: 'The AI Tools Hackathon',
    tagline: 'What if you could COOK AI?',
    date: 'Friday, 13th November 2026',
    dayNumber: '13',
    monthYear: 'NOV 2026',
    time: '3:00 PM – 5:15 PM',
    location: 'Daftarkhwan | Alpha, NASTP Alpha, Rawalpindi',
    category: 'The AI Tools Hackathon',
    icon: ShieldCheck,
    image: '/events/safe-mode-byte-bite.jpg',
    description:
      'What if you could COOK AI? Bid. Build. Battle. in the ultimate AI hackathon! Bring your idea, assemble your team, and compete in the ultimate showdown at NASTP Alpha.',
    highlights: [
      'Theme: "What If You Could Cook AI?"',
      'Bid. Build. Battle. in the Ultimate AI Hackathon',
      'Your Idea. Your Team. Your Showdown.',
      'Venue: Daftarkhwan | Alpha, NASTP Alpha, Rawalpindi',
    ],
    accentColor: '#ff6b35',
    accentGradient: 'linear-gradient(135deg, #9d4edd, #ff6b35)',
    borderGlow: 'rgba(255, 107, 53, 0.35)',
    // Event 1 Form Link (Tally)
    registrationFormUrl: 'https://tally.so/r/aO9BJy',
  },
  {
    id: 'fde-event',
    title: 'The Emergence of Forward Deployed Engineering',
    subtitle: 'Inside Forward Deployed Engineering',
    tagline: 'Inside Forward Deployed Engineering',
    date: 'Saturday, 21st November 2026',
    dayNumber: '21',
    monthYear: 'NOV 2026',
    time: '2:00 PM – 6:00 PM (PKT)',
    location: 'CoWork24, I-10/3, Islamabad',
    category: 'XEMS Technologies × CoWork24',
    icon: Briefcase,
    image: '/events/fde-event.jpg',
    description:
      'Step inside the world of Forward Deployed Engineering (FDE) with XEMS Technologies and CoWork24. Discover how engineers solve mission-critical client challenges directly on the front lines, build resilient architectures, and accelerate their tech careers.',
    highlights: [
      'Inside Forward Deployed Engineering (FDE) Paradigms',
      'Solving Mission-Critical Challenges at the Production Edge',
      'Co-hosted by XEMS Technologies & CoWork24',
      'Venue: CoWork24, I-10/3, Islamabad',
    ],
    accentColor: '#ff7a59',
    accentGradient: 'linear-gradient(135deg, #9d4edd, #ff7a59)',
    borderGlow: 'rgba(255, 122, 89, 0.35)',
    // Event 2 Form Link (Google Form)
    registrationFormUrl: 'https://forms.gle/vDNWAWoHncnB26aGA',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export const UpcomingEventsSection = () => {
  const [modalEvent, setModalEvent] = useState<EventItem | null>(null)
  const [selectedPoster, setSelectedPoster] = useState<{
    image: string
    title: string
    link: string
    date: string
    time: string
    location: string
  } | null>(null)

  const handleRegisterClick = (event: EventItem) => {
    if (event.registrationFormUrl && event.registrationFormUrl.trim() !== '') {
      window.open(event.registrationFormUrl, '_blank', 'noopener,noreferrer')
    } else {
      setModalEvent(event)
    }
  }

  return (
    <Section id="upcoming-events" variant="dark" withDivider className="scroll-mt-20 relative overflow-hidden py-10">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full blur-3xl bg-electric-cyan/10 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full blur-3xl bg-purple-neon/10 pointer-events-none" />

      <SectionContainer>
        {/* Section Header */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-neon/30 bg-purple-neon/10 mb-4">
                <Sparkles className="w-4 h-4 text-purple-neon animate-pulse" />
                <span className="text-purple-neon text-sm font-semibold tracking-wide">
                  XEMS Community & Flagship Gatherings
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-700 text-foreground tracking-tight">
                Upcoming{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00d9ff, #9d4edd, #ff006e)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Events
                </span>
              </h2>
              <p className="text-text-secondary text-lg mt-4 leading-relaxed">
                Connect with engineers, innovators, and industry leaders. Reserve your spot for our upcoming hackathons,
                interactive workshops, and engineering summits.
              </p>
            </div>

            <div className="flex items-center gap-2 text-text-secondary text-sm bg-surface-secondary/80 border border-graphite-700 px-4 py-2.5 rounded-lg w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric-cyan"></span>
              </span>
              <span>2 Events Scheduled for November 2026</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {UPCOMING_EVENTS.map((event) => {
            const Icon = event.icon
            return (
              <motion.div key={event.id} variants={itemVariants} className="flex flex-col h-full">
                <div
                  className="group relative flex flex-col justify-between h-full rounded-2xl bg-surface-secondary/90 border border-graphite-700 p-6 md:p-8 transition-all duration-300 hover:border-graphite-600 hover:shadow-2xl hover:scale-[1.01]"
                  style={{
                    boxShadow: `0 10px 40px -15px ${event.borderGlow}`,
                  }}
                >
                  {/* Neon top accent line */}
                  <div
                    className="absolute top-0 left-8 right-8 h-1 rounded-b-full transition-all duration-300 group-hover:left-4 group-hover:right-4"
                    style={{ background: event.accentGradient }}
                  />

                  <div>
                    {/* Top Bar: Date badge & Category */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pt-2">
                      {/* Date Badge */}
                      <div className="flex items-center gap-3">
                        <div
                          className="flex flex-col items-center justify-center w-16 h-16 rounded-xl border border-graphite-700 bg-surface-primary shadow-inner"
                          style={{
                            boxShadow: `0 0 15px ${event.borderGlow}`,
                          }}
                        >
                          <span
                            className="text-2xl font-heading font-700 leading-none"
                            style={{ color: event.accentColor }}
                          >
                            {event.dayNumber}
                          </span>
                          <span className="text-[10px] font-semibold tracking-wider text-text-secondary uppercase mt-1">
                            {event.monthYear.split(' ')[0]}
                          </span>
                        </div>
                        <div>
                          <span className="text-xs font-semibold tracking-wide uppercase text-electric-cyan block">
                            Event Date
                          </span>
                          <span className="text-foreground font-medium text-sm flex items-center gap-1.5 mt-0.5">
                            <Calendar size={14} className="text-text-secondary" />
                            {event.date}
                          </span>
                        </div>
                      </div>

                      {/* Category tag */}
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-graphite-700 bg-surface-primary/70 text-xs text-text-secondary">
                        <Icon size={14} style={{ color: event.accentColor }} />
                        <span>{event.category}</span>
                      </div>
                    </div>

                    {/* Event Banner / Poster Image if available */}
                    {event.image && (
                      <div className="relative mb-6 rounded-xl overflow-hidden border border-graphite-700/80 group/poster cursor-pointer bg-black/40">
                        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover object-center group-hover/poster:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/20" />
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedPoster({
                                image: event.image!,
                                title: event.title,
                                link: event.registrationFormUrl,
                                date: event.date,
                                time: event.time,
                                location: event.location,
                              })
                            }
                            className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-secondary/90 hover:bg-surface-primary border border-graphite-600 text-xs text-foreground backdrop-blur-md transition-all shadow-md group-hover/poster:border-electric-cyan"
                          >
                            <Maximize2 size={13} className="text-electric-cyan" />
                            <span>View Poster</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Subtitle / Tagline pill */}
                    {event.subtitle && (
                      <div className="mb-2">
                        <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: event.accentColor }}>
                          {event.subtitle}
                        </span>
                      </div>
                    )}

                    {/* Event Title */}
                    <h3 className="text-2xl md:text-3xl font-heading font-700 text-foreground mb-3 group-hover:text-electric-cyan transition-colors">
                      {event.title}
                    </h3>

                    {/* Tagline if available */}
                    {event.tagline && (
                      <p className="text-base font-semibold text-purple-neon mb-3">
                        &quot;{event.tagline}&quot;
                      </p>
                    )}

                    {/* Event Description */}
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Metadata: Time and Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-surface-primary/60 border border-graphite-700/60 mb-6 text-sm">
                      <div className="flex items-center gap-2.5 text-text-secondary">
                        <Clock size={16} className="text-electric-cyan flex-shrink-0" />
                        <span className="truncate">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-text-secondary">
                        <MapPin size={16} className="text-magenta flex-shrink-0" />
                        <span className="truncate" title={event.location}>{event.location}</span>
                      </div>
                    </div>

                    {/* Key Highlights / Agenda list */}
                    <div className="mb-8">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-3 flex items-center gap-1.5">
                        <Sparkles size={13} style={{ color: event.accentColor }} />
                        Event Highlights
                      </h4>
                      <ul className="space-y-2.5">
                        {event.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2.5 text-sm text-text-secondary">
                            <CheckCircle2
                              size={16}
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: event.accentColor }}
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 border-t border-graphite-700/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-electric-cyan animate-pulse" />
                      <span className="text-xs text-text-secondary font-medium">
                        Registrations Open • Register Now
                      </span>
                    </div>

                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => handleRegisterClick(event)}
                      className="group/btn gap-2 shadow-lg hover:shadow-electric-cyan/40 transition-all font-semibold"
                    >
                      <span>Register Now</span>
                      <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </SectionContainer>

      {/* Poster Lightbox Modal */}
      {selectedPoster && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-surface-secondary border border-graphite-600 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-graphite-700 mb-4">
              <h3 className="font-heading font-600 text-lg text-foreground truncate pr-4">
                {selectedPoster.title} — Official Event Flyer
              </h3>
              <button
                onClick={() => setSelectedPoster(null)}
                className="p-1.5 text-text-secondary hover:text-foreground rounded-lg transition-colors"
                aria-label="Close flyer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative aspect-square max-h-[70vh] w-full rounded-xl overflow-hidden border border-graphite-700 mb-4">
              <Image
                src={selectedPoster.image}
                alt={selectedPoster.title}
                fill
                className="object-contain bg-black"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-2">
              <span className="text-xs text-text-secondary">
                {selectedPoster.date} • {selectedPoster.time} • {selectedPoster.location}
              </span>
              {selectedPoster.link && (
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto gap-2"
                  onClick={() => window.open(selectedPoster.link, '_blank', 'noopener,noreferrer')}
                >
                  <span>Register Now</span>
                  <ExternalLink size={15} />
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Notice Modal if Form URL is not yet populated */}
      {modalEvent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in"
        >
          <div className="relative w-full max-w-md bg-surface-secondary border border-graphite-600 rounded-2xl p-6 shadow-2xl">
            <button
              onClick={() => setModalEvent(null)}
              className="absolute top-4 right-4 p-2 text-text-secondary hover:text-foreground rounded-lg transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-electric-cyan" />
              </div>
              <h3 className="text-xl font-heading font-600 text-foreground">Registration Notice</h3>
            </div>

            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              The registration form for <strong className="text-foreground">{modalEvent.title}</strong> is being
              finalized and will be live shortly.
            </p>

            <div className="p-3.5 rounded-lg bg-surface-primary border border-graphite-700 text-xs text-text-tertiary mb-6">
              <p className="font-semibold text-text-secondary mb-1">Developer Notice:</p>
              <p>
                Add the form link in <code className="text-electric-cyan">components/sections/UpcomingEventsSection.tsx</code> under{' '}
                <code className="text-electric-cyan">registrationFormUrl</code>.
              </p>
            </div>

            <Button
              variant="secondary"
              className="w-full"
              onClick={() => setModalEvent(null)}
            >
              Got it
            </Button>
          </div>
        </div>
      )}
    </Section>
  )
}
