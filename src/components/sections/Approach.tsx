'use client'

import { motion } from 'framer-motion'
import { Music, Users, GraduationCap, Home, Globe, Heart } from 'lucide-react'

export default function Approach() {
  const approaches = [
    {
      icon: Music,
      title: 'Arts Training',
      description: 'Professional dance, music, and performance coaching.'
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Personal guidance from industry professionals.'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Academic support alongside artistic development.'
    },
    {
      icon: Home,
      title: 'Safe Shelter',
      description: 'Secure environment providing care and basic needs.'
    },
    {
      icon: Globe,
      title: 'Global Exposure',
      description: 'International performances and digital platforms.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Local outreach and collaborative projects.'
    }
  ]

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-3">
            Our <span className="text-[#F59E0B]">Approach</span>
          </h2>
          <p className="text-base text-[#111111]/70 max-w-xl mx-auto">
            Holistic framework for nurturing talent and transforming lives
          </p>
        </motion.div>

        {/* Compact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              className="group text-center p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#F59E0B]/30 transition-all duration-300 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="w-10 h-10 bg-[#F59E0B]/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#F59E0B]/30 transition-colors">
                <approach.icon className="w-5 h-5 text-[#F59E0B]" />
              </div>
              
              <h3 className="text-sm font-semibold text-[#111111] mb-1">
                {approach.title}
              </h3>
              
              <p className="text-[#111111]/60 text-xs leading-relaxed">
                {approach.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Philosophy - Compact */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-base text-[#111111]/70 max-w-2xl mx-auto italic">
            "Combining artistic excellence with personal development to create confident, disciplined leaders of tomorrow."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
