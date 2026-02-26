'use client'

import { motion } from 'framer-motion'
import { Heart, MapPin, Users, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function Story() {
  const storySections = [
    {
      title: "Born in the Heart of Mathare",
      description: "From the vibrant streets of Mathare, Nairobi, where creativity flows through every corner. Our youth empowerment journey began in this Kenyan community, discovering talented children with incredible artistic potential in dance, music, and performance arts.",
      image: "/1.jpeg",
      imageAlt: "Mathare Kids Talents Hub - Young dancers performing in Mathare, Nairobi Kenya",
      reversed: false
    },
    {
      title: "Talent is Universal",
      description: "We discovered incredible artistic potential in every child we met. From dance training to music education, these young artists from Mathare possess natural abilities that deserve professional development and global recognition.",
      image: "/5.jpeg",
      imageAlt: "Talented children from Mathare showcasing their dance and music skills",
      reversed: true
    },
    {
      title: "Opportunity is Not",
      description: "Access to professional performing arts training remained scarce and distant for children in Kenyan slum communities. We bridge this gap, providing quality dance education, music lessons, and performance opportunities that transform lives.",
      image: "/3.jpeg",
      imageAlt: "Mathare youth receiving professional dance and music training",
      reversed: false
    },
    {
      title: "A Movement Begins",
      description: "What started as a small community initiative grew into Mathare Kids Talents Hub - a professional center for youth empowerment through creative arts. Today we nurture over 50 young artists, providing education, meals, and a path to a brighter future.",
      image: "/4.jpeg",
      imageAlt: "Mathare Kids Talents Hub - Professional youth arts organization in Nairobi",
      reversed: true
    }
  ]

  return (
    <section id="story" className="py-20 bg-[#F3F4F6]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#111111] mb-6">
            Our <span className="text-[#F59E0B]">Story</span>
          </h2>
          <p className="text-xl text-[#111111]/70 max-w-2xl mx-auto">
            Every great movement starts with a simple realization
          </p>
        </motion.div>

        {/* Story Sections with Staggered Layout */}
        <div className="space-y-24 mb-20">
          {storySections.map((section, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                section.reversed ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Text Content */}
              <div className={`${section.reversed ? 'lg:order-2' : ''}`}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-lg flex items-center justify-center mr-4">
                    {[Heart, MapPin, Users, Sparkles][index] && 
                      React.createElement([Heart, MapPin, Users, Sparkles][index], {
                        className: "w-6 h-6 text-[#F59E0B]"
                      })
                    }
                  </div>
                  <span className="text-[#F59E0B] font-semibold">Chapter {index + 1}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                  {section.title}
                </h3>
                
                <p className="text-xl text-[#111111]/80 leading-relaxed mb-8">
                  {section.description}
                </p>

                {index === storySections.length - 1 && (
                  <Button 
                    variant="outline"
                    className="border-[#F59E0B]/50 text-[#F59E0B] hover:bg-[#F59E0B]/10 group"
                    asChild
                  >
                    <a href="#contact">
                      Learn More About Our Journey
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                )}
              </div>

              {/* Image Placeholder */}
              <div className={`${section.reversed ? 'lg:order-1' : ''}`}>
                <motion.div
                  className="relative rounded-2xl overflow-hidden group shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#F3F4F6] to-[#F9FAFB]">
                    <img 
                      src={section.image}
                      alt={section.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold mb-2">{section.title}</div>
                      <div className="text-sm uppercase tracking-wide">View Gallery</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/5.jpeg')" }}
            />
            <div className="absolute inset-0 bg-[#111111]/70" />
          </div>
          <div className="relative z-10 text-center py-16 px-8">
            <blockquote className="text-2xl md:text-3xl font-light text-white italic max-w-4xl mx-auto">
              "We don't just teach dance and music—we build confidence, discipline, and 
              <span className="text-[#F59E0B] font-semibold"> futures worth fighting for.</span>"
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
