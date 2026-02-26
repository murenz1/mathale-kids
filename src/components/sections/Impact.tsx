'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Trophy, Target, Utensils, Users, Award, Music, Heart, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import DonationModal from '@/components/DonationModal'

interface StatItem {
  icon: any
  value: string
  label: string
  suffix?: string
}

const stats: StatItem[] = [
  { 
    icon: Trophy, 
    value: '15', 
    label: 'Awards Won', 
    suffix: ''
  },
  { 
    icon: Target, 
    value: '20', 
    label: 'Competitions Won', 
    suffix: '+'
  },
  { 
    icon: Utensils, 
    value: '10000', 
    label: 'Meals Provided', 
    suffix: '+'
  },
  { 
    icon: Users, 
    value: '100', 
    label: 'Children Supported', 
    suffix: '+'
  }
]

const successStories = [
  {
    name: "Amina K.",
    achievement: "From shy girl to lead dancer",
    icon: Star
  },
  {
    name: "Samuel O.",
    achievement: "Vocals reached national stage",
    icon: Music
  },
  {
    name: "Grace W.",
    achievement: "Youth theater director",
    icon: Target
  }
]

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const numericValue = parseInt(target.replace(/\D/g, ''))
  
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [numericValue])
  
  return <span>{count.toLocaleString()}{suffix}</span>
}

export default function Impact() {
  const [donationModalOpen, setDonationModalOpen] = useState(false)
  
  return (
    <section id="impact" className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#111111] mb-6">
            Our <span className="text-[#F59E0B]">Impact</span>
          </h2>
          <p className="text-xl text-[#111111]/70 max-w-2xl mx-auto">
            Numbers that tell stories of transformation
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-white border-[#E5E7EB] hover:border-[#F59E0B]/50 transition-all duration-300 group overflow-hidden relative shadow-sm h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10 text-center">
                  <div className="w-16 h-16 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center group-hover:bg-[#F59E0B]/30 transition-colors duration-300 mx-auto mb-6">
                    <stat.icon className="w-8 h-8 text-[#F59E0B]" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-[#111111]">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <h3 className="text-xl font-semibold text-[#111111]">
                      {stat.label}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Success Stories & Community Reach - 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white border-[#E5E7EB] p-8 h-full shadow-sm">
              <h3 className="text-2xl font-bold text-[#111111] mb-6 flex items-center">
                <Heart className="w-6 h-6 text-[#F59E0B] mr-3" />
                Success Stories
              </h3>
              <div className="space-y-6">
                {successStories.map((story, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-[#F9FAFB] rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-[#F59E0B]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <story.icon className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#111111]">{story.name}</h4>
                      <p className="text-[#111111]/70 text-sm">{story.achievement}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Community Reach */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-br from-[#F59E0B]/10 to-[#F9FAFB] border-[#F59E0B]/20 p-8 h-full shadow-sm">
              <h3 className="text-2xl font-bold text-[#111111] mb-4">Community Reach</h3>
              <div className="text-5xl font-bold text-[#F59E0B] mb-3">10,000+</div>
              <p className="text-[#111111]/70 mb-8">Lives touched through our programs and performances</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-[#F59E0B] mb-1">90%</div>
                  <div className="text-sm text-[#111111]/70">Skill Development</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-[#F59E0B] mb-1">95%</div>
                  <div className="text-sm text-[#111111]/70">Confidence Growth</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Additional Metrics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { label: 'Community Leaders', value: '25+' },
            { label: 'Scholarships', value: '12' },
            { label: 'Partner Schools', value: '8' },
            { label: 'Annual Events', value: '15+' }
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#F59E0B]/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold text-[#F59E0B] mb-2">
                {metric.value}
              </div>
              <div className="text-[#111111]/70 text-sm">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Button 
            size="lg"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold px-8 py-6 text-lg"
            onClick={() => setDonationModalOpen(true)}
          >
            Join Our Mission
          </Button>
        </motion.div>
      </div>
      
      <DonationModal isOpen={donationModalOpen} onClose={() => setDonationModalOpen(false)} />
    </section>
  )
}
