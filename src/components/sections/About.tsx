'use client'

import { motion } from 'framer-motion'
import { MapPin, Trophy, Globe, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function About() {
  const highlights = [
    {
      icon: MapPin,
      title: 'Based in Mathare',
      description: 'Rooted in Nairobi\'s most vibrant community, bringing world-class arts training to local talent'
    },
    {
      icon: Globe,
      title: 'Global Viral Reach',
      description: 'Millions of views worldwide showcasing the incredible talent emerging from our community'
    },
    {
      icon: Trophy,
      title: 'Professional Excellence',
      description: 'Industry-standard training producing performances that compete on international stages'
    },
    {
      icon: Sparkles,
      title: 'African Excellence',
      description: 'Celebrating and amplifying African creativity while preserving cultural heritage'
    }
  ]

  return (
    <section id="about" className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#111111] mb-6">
            About <span className="text-[#F59E0B]">MKTH</span>
          </h2>
          <p className="text-xl text-[#111111]/70 max-w-3xl mx-auto">
            A dynamic creative arts platform redefining possibilities
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
              More Than
              <span className="block text-[#F59E0B]">Performance</span>
            </h3>
            
            <div className="space-y-6 text-[#111111]/80 leading-relaxed">
              <p>
                Mathare Kids Talents Hub represents a new paradigm in youth empowerment through the arts. 
                We are a professional creative platform that transforms raw talent into polished performance, 
                while simultaneously building the foundation for sustainable futures.
              </p>
              
              <p>
                Our unique approach combines rigorous artistic training with personal development, 
                creating well-rounded individuals who excel both on stage and in life. We don't just prepare 
                children for performances—we prepare them for life.
              </p>
              
              <p>
                Through our innovative programs, we've created a ecosystem where creativity fuels education, 
                performance builds confidence, and success becomes a shared community achievement.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#F59E0B]/10 to-[#F3F4F6] rounded-2xl p-8 border border-[#F59E0B]/20 shadow-sm">
              <div className="space-y-6">
                {[
                  { label: 'Founded', value: '2020' },
                  { label: 'Location', value: 'Mathare, Nairobi' },
                  { label: 'Focus Areas', value: 'Dance, Music, Acting, Storytelling' },
                  { label: 'Global Reach', value: '50+ Countries' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-[#E5E7EB] last:border-0">
                    <span className="text-[#111111]/60">{item.label}</span>
                    <span className="text-[#111111] font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-[#E5E7EB] hover:border-[#F59E0B]/50 transition-all duration-300 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-8 h-8 text-[#F59E0B]" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#111111] mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-[#111111]/60 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          className="text-center py-16 px-8 bg-gradient-to-r from-[#F59E0B]/10 to-[#F3F4F6] rounded-2xl border border-[#F59E0B]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6">
            Our Mission
          </h3>
          <p className="text-xl text-[#111111]/80 leading-relaxed max-w-4xl mx-auto">
            To discover, develop, and showcase young artistic talent from underserved communities, 
            creating pathways to professional opportunities while building confidence, discipline, 
            and community leaders who inspire positive change.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#111111]">
              Core Values
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authenticity',
                description: 'We celebrate genuine talent and original voices, ensuring every child\'s unique story shines through.'
              },
              {
                title: 'Excellence',
                description: 'We pursue the highest standards in artistic training, performance quality, and personal development.'
              },
              {
                title: 'Community',
                description: 'We believe in collective growth, supporting each other and lifting our community together.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h4 className="text-xl font-semibold text-[#111111] mb-3">
                  {value.title}
                </h4>
                <p className="text-[#111111]/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
