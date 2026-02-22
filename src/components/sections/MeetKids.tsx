'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Kid {
  id: number
  name: string
  image: string
  dreamHeadline: string
  story: string
}

const kidsData: Kid[] = [
  {
    id: 1,
    name: 'Sheldon Bresson Onyango',
    image: '/a.jpeg',
    dreamHeadline: 'Future Doctor & Dancer',
    story: 'When I grow up, I dream of becoming a doctor and a great dancer. I look forward to helping my patients feel better and bringing them joy through dance. This dream makes me very happy and excited for the future.'
  },
  {
    id: 2,
    name: 'Chelsey Ann Mulwa',
    image: '/b.jpeg',
    dreamHeadline: 'Born to Dance',
    story: 'I want to become a great dancer. I\'ve seen many dancers who inspire me, and they make me believe that my dream is possible. I do well in school, but dancing is what truly makes me feel free. When I dance, it feels like I am on another planet filled with good vibes, happiness, and peace. Dancing is not just a talent for me — it is part of who I am.'
  },
  {
    id: 3,
    name: 'Simiyu Obama',
    image: '/c.jpeg',
    dreamHeadline: 'The Next Big Star',
    story: 'I dream of becoming a great dancer, and I believe I have the power to make it happen. Whenever I step onto the stage, I bring energy, confidence, and passion that makes everyone focus on my performance. Dancing is not just something I do — it is who I am.'
  },
  {
    id: 4,
    name: 'DesmondLevy Tony Maru',
    image: '/d.jpeg',
    dreamHeadline: 'Pilot with a Passion for Dance',
    story: 'I dream of becoming a pilot when I grow up, and I can\'t wait for the day I\'ll fly across the skies. Dancing is a big part of who I am, and my fellow dancers are my family. One day, I hope to combine my love for flight and dance while inspiring others to believe in their dreams.'
  },
  {
    id: 5,
    name: 'Elizabeth Atieno – "Madam Money"',
    image: '/e.jpeg',
    dreamHeadline: 'Future Richest Woman in the World',
    story: 'They call me Madam Money because I dream big and believe in a future without limits. I want to become the richest girl in the world and change the story people always tell about "the richest man." My journey is about inspiring young girls to believe in themselves, rise above challenges, and build powerful legacies.'
  }
]

export default function MeetKids() {
  const [selectedKid, setSelectedKid] = useState<Kid | null>(null)

  return (
    <section id="kids" className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#111111] mb-6">
            Meet the <span className="text-[#F59E0B]">Kids</span>
          </h2>
          <p className="text-xl text-[#111111]/70 max-w-3xl mx-auto">
            Every child has a dream. Every dream deserves a stage.
          </p>
        </motion.div>

        {/* Kids Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {kidsData.map((kid, index) => (
            <motion.div
              key={kid.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedKid(kid)}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={kid.image}
                  alt={kid.name}
                  fill

                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#111111] mb-2">
                  {kid.name}
                </h3>
                <p className="text-[#F59E0B] font-semibold text-sm mb-3">
                  {kid.dreamHeadline}
                </p>
                <p className="text-[#111111]/60 text-sm leading-relaxed line-clamp-3">
                  {kid.story}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center py-16 px-8 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6">
            Every Child Deserves a Stage
          </h3>
          <p className="text-lg text-[#111111]/70 mb-8 max-w-2xl mx-auto">
            These stories are just the beginning. With your support, we can help more children 
            discover their talents and build brighter futures through the arts.
          </p>
          <Button 
            size="lg"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold px-8 py-6 text-lg"
            asChild
          >
            <Link href="/donate">   
              Support a Childs Dream
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Detail Modal */}
      {selectedKid && (
        <motion.div
          className="fixed inset-0 bg-[#111111]/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedKid(null)}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-[#F3F4F6] rounded-full flex items-center justify-center text-[#111111] hover:bg-[#E5E7EB] transition-colors z-10"
              onClick={() => setSelectedKid(null)}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="relative h-80">
              <Image
                src={selectedKid.image}
                alt={selectedKid.name}
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#111111] mb-2">
                {selectedKid.name}
              </h3>
              <p className="text-[#F59E0B] font-semibold mb-4">
                {selectedKid.dreamHeadline}
              </p>
              <p className="text-[#111111]/70 leading-relaxed">
                {selectedKid.story}
              </p>

              <div className="mt-8 flex justify-end">
                <Button
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold"
                  onClick={() => setSelectedKid(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
