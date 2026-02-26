'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import DonationModal from '@/components/DonationModal'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [donationModalOpen, setDonationModalOpen] = useState(false)
  const pathname = usePathname()
  const isSubPage = pathname === '/shop' || pathname === '/donate'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: isSubPage ? '/#home' : '#home' },
    { label: 'Our Story', href: isSubPage ? '/#story' : '#story' },
    { label: 'Impact', href: isSubPage ? '/#impact' : '#impact' },
    { label: 'Approach', href: isSubPage ? '/#approach' : '#approach' },
    { label: 'Contact', href: isSubPage ? '/#contact' : '#contact' }
  ]

  return (
    <>
    <motion.header
      className="fixed top-0 h-18 w-full z-50 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-3 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className=" container mx-auto px-6 flex justify-between items-center">
        <Link
          href={isSubPage ? '/' : '#home'}
          className="relative h-16 w-56"
        >
          <Image
            src="/logo.png"
            alt="Mathare Kids Talents Hub"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#111111]/80 hover:text-[#111111] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold px-6"
              onClick={() => setDonationModalOpen(true)}
            >
              Support Us
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <button
          className="md:hidden text-[#111111]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-[#111111]/80 hover:text-[#111111] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold w-full"
              onClick={() => setDonationModalOpen(true)}
            >
              Support Us
            </Button>
          </div>
        </motion.div>
      )}
      
    </motion.header>
    
    <DonationModal isOpen={donationModalOpen} onClose={() => setDonationModalOpen(false)} />
    </>
  )
}
