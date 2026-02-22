'use client'

import { motion } from 'framer-motion'

export default function Vision() {
  return (
    <section id="vision" className="relative py-32 bg-[#F9FAFB] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 via-white to-[#F9FAFB]" />
      
      {/* Subtle animated gradients */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#F59E0B]/5 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-[#F59E0B]/5 to-transparent"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Vision Label */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase">
              Our Vision
            </span>
          </motion.div>

          {/* Main Quote */}
          <motion.blockquote
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-tight mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            "We envision a future where children are not defined by
            <span className="block text-[#F59E0B] mt-4">where they come from,</span>
            <span className="block text-[#F59E0B]">but by who they become.</span>"
          </motion.blockquote>

          {/* Supporting Text */}
          <motion.p
            className="text-xl text-[#111111]/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Through artistic excellence, educational empowerment, and community support, 
            we're building a world where every child has the opportunity to shine, 
            regardless of their circumstances.
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            className="mt-16 flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent to-[#F59E0B]" />
            <div className="w-2 h-2 bg-[#F59E0B] rounded-full" />
            <div className="w-24 h-1 bg-gradient-to-l from-transparent to-[#F59E0B]" />
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-[#F59E0B] rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-3 h-3 bg-[#D97706] rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-20 w-2 h-2 bg-[#F59E0B] rounded-full"
          animate={{
            x: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
    </section>
  )
}
