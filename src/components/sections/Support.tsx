'use client'

import { motion } from 'framer-motion'
import { HandHeart, Building2, Heart, Calendar } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Support() {
  const supportMethods = [
    {
      icon: Calendar,
      title: 'Performances & Bookings',
      description: 'Book our talented young performers for your events, corporate functions, festivals, and special occasions.',
      cta: 'Book Performance',
      features: ['Corporate Events', 'Festivals', 'Private Functions', 'International Tours']
    },
    {
      icon: Building2,
      title: 'Brand Collaborations',
      description: 'Partner with us for authentic brand storytelling, campaigns, and cause marketing initiatives.',
      cta: 'Partner With Us',
      features: ['Brand Campaigns', 'Content Creation', 'Event Sponsorship', 'Product Collaborations']
    },
    {
      icon: Heart,
      title: 'Direct Donations',
      description: 'Support our mission through one-time or recurring donations that directly fund training and resources.',
      cta: 'Donate Now',
      features: ['Training Programs', 'Equipment', 'Education Support', 'Facility Maintenance']
    },
    {
      icon: HandHeart,
      title: 'Strategic Partnerships',
      description: 'Collaborate with us on long-term initiatives that create sustainable impact and opportunities.',
      cta: 'Become Partner',
      features: ['Educational Partners', 'Technical Support', 'Mentorship Programs', 'Resource Sharing']
    }
  ]

  return (
    <section id="support" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#111111] mb-6">
            Sustainability &
            <span className="block text-[#F59E0B]">Support</span>
          </h2>
          <p className="text-xl text-[#111111]/70 max-w-3xl mx-auto">
            Multiple pathways to support our mission and create lasting impact
          </p>
        </motion.div>

        {/* Support Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {supportMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-[#E5E7EB] hover:border-[#F59E0B]/50 transition-all duration-300 group shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center group-hover:bg-[#F59E0B]/30 transition-colors duration-300">
                      <method.icon className="w-8 h-8 text-[#F59E0B]" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#111111] mb-4">
                    {method.title}
                  </h3>
                  
                  <p className="text-[#111111]/70 mb-6 leading-relaxed">
                    {method.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {method.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-[#111111]/60"
                      >
                        <div className="w-2 h-2 bg-[#F59E0B] rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold group-hover:transform group-hover:scale-105 transition-all duration-300"
                    size="lg"
                    asChild
                  >
                    <Link 
                      href={method.title === 'Direct Donations' ? '/donate' : '#contact'}
                    >
                      {method.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
              Your Support
              <span className="block text-[#F59E0B]">Creates Futures</span>
            </h3>
            
            <div className="space-y-6 text-[#111111]/80 leading-relaxed">
              <p>
                Every partnership, performance booking, and donation directly contributes to transforming 
                young lives. Your support provides professional training, educational resources, safe spaces, 
                and the opportunity for children to showcase their talents on global platforms.
              </p>
              
              <p>
                We've built a sustainable model that combines artistic excellence with social impact, 
                ensuring that our programs continue to grow and reach more children who need them most.
              </p>
              
              <p>
                When you support Mathare Kids Talents Hub, you're not just funding an organization— 
                you're investing in the future leaders, artists, and change-makers of our community.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F59E0B]/10 to-[#F3F4F6] rounded-2xl p-8 border border-[#F59E0B]/20 shadow-sm">
            <h4 className="text-xl font-bold text-[#111111] mb-6">Where Your Support Goes</h4>
            <div className="space-y-4">
              {[
                { label: 'Training Programs', percentage: '40%' },
                { label: 'Education Support', percentage: '25%' },
                { label: 'Facilities & Equipment', percentage: '20%' },
                { label: 'Performance Opportunities', percentage: '15%' }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-[#111111] mb-2">
                    <span>{item.label}</span>
                    <span className="text-[#F59E0B]">{item.percentage}</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: item.percentage }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center py-16 px-8 bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in creating opportunities for young talents to shine and transform their communities through the power of the arts.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#111111] hover:bg-[#F3F4F6] px-8 py-6 text-lg font-semibold"
              asChild
            >
              <Link href="/donate">
                Start Supporting Today
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#111111] px-8 py-6 text-lg"
            >
              <a href="/shop">
                Wear The Change
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
