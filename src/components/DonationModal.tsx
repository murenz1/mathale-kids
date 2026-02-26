'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

const MCHANGA_URL = 'https://www.mchanga.africa/fundraiser/127082'

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Modal Container - Centered */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#FACC15] to-[#E6B800] p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-[#111111]" fill="currentColor" />
                    <h3 className="text-xl font-bold text-[#111111]">Support Our Mission</h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-[#111111]/60 hover:text-[#111111] transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-[#111111]/80 text-sm mt-2">
                  Choose how you'd like to make a difference
                </p>
              </div>
              
              {/* Options */}
              <div className="p-6 space-y-4">
                {/* M-Changa Option */}
                <a
                  href={MCHANGA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="lg"
                    className="w-full bg-[#FACC15] hover:bg-[#E6B800] text-[#111111] font-semibold py-6 text-lg group"
                    onClick={onClose}
                  >
                    <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                    Donate Now
                    <ExternalLink className="w-4 h-4 ml-2 opacity-60" />
                  </Button>
                </a>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">or</span>
                  </div>
                </div>
                
                {/* Internal Donate Page Option */}
                <Link href="/donate" className="block" onClick={onClose}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-[#111111]/20 text-white hover:bg-[#111111] hover:text-white font-semibold py-6 text-lg group"
                  >
                    Other Ways to Give
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              {/* Footer */}
              <div className="px-6 pb-6">
                <p className="text-center text-xs text-gray-500">
                  Your contribution helps transform young lives through arts and education
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
