'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image from /public */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/2.jpeg')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Subtle animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Video/Audio Play Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Where Talent
            <span className="block text-[#F59E0B]">Meets Opportunity.</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          From the heart of Mathare, young artists transform their lives through 
          <span className="text-[#F59E0B] font-semibold"> dance, music, and performance.</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            className="bg-[#F59E0B] hover:bg-[#D97706] text-black px-8 py-6 text-lg font-semibold group"
            asChild
          >
            <Link href="/donate">
              Support the Kids
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg font-semibold group border-0"
            asChild
          >
            <a href="/shop">
              <ShoppingBag className="mr-2 w-5 h-5" />
              Shop
            </a>
          </Button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[
            { number: "50+", label: "Young Artists" },
            { number: "100+", label: "Performances" },
            { number: "1M+", label: "Lives Impacted" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-[#F59E0B] mb-2">{stat.number}</div>
              <div className="text-white/70 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-[#F59E0B]/30 rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-[#F59E0B]/60 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
