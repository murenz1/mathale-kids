'use client'

import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  interface FooterLink {
    label: string
    href: string
    icon?: any
  }

  interface FooterSection {
    title: string
    links: FooterLink[]
  }

  const footerSections: FooterSection[] = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'Our Story', href: '#story' },
        { label: 'Impact', href: '#impact' },
        { label: 'Approach', href: '#approach' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Get Involved',
      links: [
        { label: 'Support the Kids', href: '#support' },
        { label: 'Book Performance', href: '#contact' },
        { label: 'Partner With Us', href: '#support' },
        { label: 'Donate', href: '#support' },
        { label: 'Volunteer', href: '#contact' }
      ]
    },
    {
      title: 'Contact Info',
      links: [
        { label: 'matharekidstalentshub1@gmail.com', href: 'mailto:matharekidstalentshub1@gmail.com', icon: Mail },
        { label: '+254 794 679 931', href: 'tel:+254794679931', icon: Phone },
        { label: 'WhatsApp', href: 'https://wa.me/254794679931', icon: MessageCircle },
        { label: 'Mathare, Nairobi, Kenya', href: '#', icon: MapPin }
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/p/Mathare-kids-talents-hub-100063888727786/', label: 'Facebook' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@matharekidstalentshub', label: 'TikTok', isCustom: true },
    { icon: Instagram, href: 'https://www.instagram.com/mathare_kids_talents_hub/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@matharekidstalentshub', label: 'YouTube' }
  ]

  return (
    <footer className="bg-[#111111] border-t border-[#1F1F1F]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                MKTH
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Mathare Kids Talents Hub - Where talent meets opportunity and dreams take flight.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1F1F1F] rounded-lg flex items-center justify-center text-white/60 hover:text-[#F59E0B] hover:bg-[#F59E0B]/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  aria-label={social.label}
                >
                  {social.isCustom ? (
                    <social.icon className="w-5 h-5" />
                  ) : (
                    <social.icon className="w-5 h-5" />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="flex items-center text-white/60 hover:text-[#F59E0B] transition-colors duration-200 group"
                    >
                      {link.icon && (
                        <link.icon className="w-4 h-4 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      )}
                      <span className="group-hover:text-[#F59E0B] transition-colors duration-200 inline-block">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-[#1F1F1F]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Mathare Kids Talents Hub. All rights reserved.
            </div>
            
            <div className="flex items-center text-white/60 text-sm">
              Made with 
              <Heart className="w-4 h-4 mx-2 text-[#F59E0B]" />
              in Mathare, Nairobi
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
