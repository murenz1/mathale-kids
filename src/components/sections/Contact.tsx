'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general' // general, booking, partnership, donation
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const whatsappMessage = `Hello MKTH!%0A%0A*New Message from Website*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Subject:* ${encodeURIComponent(formData.subject)}%0A*Type:* ${encodeURIComponent(formData.type)}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}`
    
    window.open(`https://wa.me/254794679931?text=${whatsappMessage}`, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'general'
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'matharekidstalentshub1@gmail.com',
      action: 'mailto:matharekidstalentshub1@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 794 679 931',
      action: 'tel:+254794679931'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+254 794 679 931',
      action: 'https://wa.me/254794679931'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mathare, Nairobi, Kenya',
      action: '#'
    }
  ]

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#111111] mb-6">
            Get in <span className="text-[#F59E0B]">Touch</span>
          </h2>
          <p className="text-xl text-[#111111]/70 max-w-3xl mx-auto">
            Connect with us to support our mission, book performances, or learn more about our programs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-[#F9FAFB] border-[#E5E7EB] shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#111111] mb-6">
                  Send us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#111111]/80 mb-2 text-sm">
                      Inquiry Type
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#111111] focus:border-[#F59E0B] focus:outline-none transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="booking">Book a Performance</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="donation">Donation Information</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#111111]/80 mb-2 text-sm">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#111111] placeholder-[#111111]/40 focus:border-[#F59E0B] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[#111111]/80 mb-2 text-sm">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#111111] placeholder-[#111111]/40 focus:border-[#F59E0B] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#111111]/80 mb-2 text-sm">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#111111] placeholder-[#111111]/40 focus:border-[#F59E0B] focus:outline-none transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-[#111111]/80 mb-2 text-sm">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#111111] placeholder-[#111111]/40 focus:border-[#F59E0B] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Quick Contact */}
            <div>
              <h3 className="text-2xl font-bold text-[#111111] mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-[#F9FAFB] border-[#E5E7EB] hover:border-[#F59E0B]/50 transition-all duration-300 group cursor-pointer shadow-sm">
                      <CardContent className="p-6">
                        <a href={info.action} className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-lg flex items-center justify-center group-hover:bg-[#F59E0B]/30 transition-colors duration-300">
                            <info.icon className="w-6 h-6 text-[#F59E0B]" />
                          </div>
                          <div className="flex-1">
                            <div className="text-[#111111]/60 text-sm mb-1">
                              {info.label}
                            </div>
                            <div className="text-[#111111] font-semibold">
                              {info.value}
                            </div>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-[#111111] mb-6">
                Follow Our Journey
              </h3>
              <Card className="bg-[#F9FAFB] border-[#E5E7EB] shadow-sm">
                <CardContent className="p-6">
                  <p className="text-[#111111]/70 mb-6">
                    Stay connected with our latest performances, success stories, and opportunities to get involved.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-[#F59E0B]/10 transition-colors duration-300 group border border-[#E5E7EB] hover:border-[#F59E0B]/30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <social.icon className="w-5 h-5 text-[#F59E0B] group-hover:scale-110 transition-transform" />
                        <span className="text-[#111111] group-hover:text-[#F59E0B] transition-colors">
                          {social.label}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Visit Us */}
            <Card className="bg-gradient-to-br from-[#F59E0B]/10 to-[#F9FAFB] border-[#F59E0B]/20 shadow-sm">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold text-[#111111] mb-4">
                  Visit Our Center
                </h4>
                <p className="text-[#111111]/70 mb-4">
                  Experience the energy and creativity firsthand. 
                  We welcome visitors for tours and performances.
                </p>
                <Button variant="outline" className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-black font-semibold" asChild>
                  <a href="#contact">
                    Schedule a Visit
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
