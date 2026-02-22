'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Heart, 
  Smartphone, 
  Building2, 
  Globe, 
  Package, 
  Banknote,
  Copy,
  X,
  Check,
  MessageCircle,
  MapPin,
  Clock,
  Award,
  Trophy,
  Utensils,
  Users,
  ChevronRight,
  Mail,
  User,
  DollarSign,
  FileText,
  ArrowLeft
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Header from '@/components/layout/Header'
import Link from 'next/link'

// Impact Stats
const impactStats = [
  { icon: Award, value: '15', label: 'Awards Won', suffix: '' },
  { icon: Trophy, value: '20', label: 'Competitions Won', suffix: '+' },
  { icon: Utensils, value: '10,000', label: 'Meals Provided', suffix: '+' },
  { icon: Users, value: '50', label: 'Children Supported', suffix: '+' },
]

// Donation Methods
const donationMethods = [
  {
    id: 'mpesa',
    title: 'Mobile Money',
    subtitle: 'M-Pesa',
    icon: Smartphone,
    description: 'Quick and convenient mobile payment',
    color: 'bg-green-500',
  },
  {
    id: 'bank',
    title: 'Bank Transfer',
    subtitle: 'Direct Deposit',
    icon: Building2,
    description: 'Secure bank-to-bank transfer',
    color: 'bg-blue-600',
  },
  {
    id: 'western',
    title: 'Western Union',
    subtitle: 'International',
    icon: Globe,
    description: 'Send from anywhere in the world',
    color: 'bg-yellow-500',
  },
  {
    id: 'postal',
    title: 'Postal Donations',
    subtitle: 'Physical Items',
    icon: Package,
    description: 'Send clothing, books, supplies',
    color: 'bg-purple-500',
  },
  {
    id: 'cash',
    title: 'Cash / Cheque',
    subtitle: 'In-Person',
    icon: Banknote,
    description: 'Visit our office directly',
    color: 'bg-emerald-600',
  },
]

// Modal Components
function MpesaModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const phoneNumber = '+254 794 679 931'
  
  const copyNumber = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/\s/g, ''))
    // Could add toast notification here
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hello, I have just sent a donation via M-Pesa to Mathare Kids Talents Hub. Transaction details: ')
    window.open(`https://wa.me/254794679931?text=${message}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111111]">M-Pesa</h3>
                  <p className="text-sm text-gray-500">Mobile Money Transfer</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F9FAFB] rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-2">Safaricom Number</p>
                <p className="text-2xl font-bold text-[#111111]">{phoneNumber}</p>
                <p className="text-xs text-gray-400 mt-2">
                  Kindly include the reason for your transaction when sending your donation.
                </p>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={copyNumber}
                  variant="outline" 
                  className="w-full py-6 border-2 hover:bg-gray-50"
                >
                  <Copy className="w-5 h-5 mr-2" />
                  Copy Number
                </Button>
                <Button 
                  onClick={openWhatsApp}
                  className="w-full py-6 bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Confirm via WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function BankModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const bankDetails = {
    bank: 'ABSA Bank',
    account: '2055861199',
    holder: 'Emmanuel Tony John',
    swift: 'BARCKENX',
    branch: '067'
  }

  const copyAll = () => {
    const text = `Bank: ${bankDetails.bank}
Account: ${bankDetails.account}
Holder: ${bankDetails.holder}
SWIFT: ${bankDetails.swift}
Branch: ${bankDetails.branch}`
    navigator.clipboard.writeText(text)
  }

  const confirmDonation = () => {
    const message = encodeURIComponent('Hello, I have just made a bank transfer donation to Mathare Kids Talents Hub. Here are the details: ')
    window.open(`https://wa.me/254794679931?text=${message}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111111]">Bank Transfer</h3>
                  <p className="text-sm text-gray-500">Direct Bank Deposit</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-[#F9FAFB] rounded-xl p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Bank Name</span>
                  <span className="font-semibold text-[#111111]">{bankDetails.bank}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Account Number</span>
                  <span className="font-semibold text-[#111111]">{bankDetails.account}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Account Holder</span>
                  <span className="font-semibold text-[#111111]">{bankDetails.holder}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">SWIFT/BIC</span>
                  <span className="font-semibold text-[#111111]">{bankDetails.swift}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Branch Code</span>
                  <span className="font-semibold text-[#111111]">{bankDetails.branch}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={copyAll}
                  variant="outline" 
                  className="w-full py-6 border-2 hover:bg-gray-50"
                >
                  <Copy className="w-5 h-5 mr-2" />
                  Copy All Details
                </Button>
                <Button 
                  onClick={confirmDonation}
                  className="w-full py-6 bg-[#FACC15] hover:bg-[#E6B800] text-[#111111] font-semibold"
                >
                  <Check className="w-5 h-5 mr-2" />
                  I Have Donated
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function WesternUnionModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const confirmDonation = () => {
    const message = encodeURIComponent('Hello, I have just sent a donation via Western Union to Emmanuel Tony John for Mathare Kids Talents Hub. MTCN: ')
    window.open(`https://wa.me/254794679931?text=${message}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111111]">Western Union</h3>
                  <p className="text-sm text-gray-500">International Transfer</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F9FAFB] rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-3">Send via Western Union to:</p>
                <p className="text-xl font-bold text-[#111111]">Emmanuel Tony John</p>
                <p className="text-sm text-gray-500 mt-1">Nairobi, Kenya</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <p className="text-sm text-yellow-800">
                  After sending, please share the MTCN (tracking number) with us via WhatsApp for confirmation.
                </p>
              </div>

              <Button 
                onClick={confirmDonation}
                className="w-full py-6 bg-[#FACC15] hover:bg-[#E6B800] text-[#111111] font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Confirm Donation
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function PostalModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const contactUs = () => {
    const message = encodeURIComponent('Hello, I would like to send postal donations to Mathare Kids Talents Hub. Can you provide more details?')
    window.open(`https://wa.me/254794679931?text=${message}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111111]">Postal Donations</h3>
                  <p className="text-sm text-gray-500">Physical Items</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F9FAFB] rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-3">You may send:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#111111]">
                    <ChevronRight className="w-4 h-4 text-[#FACC15]" />
                    Clothing
                  </li>
                  <li className="flex items-center gap-2 text-[#111111]">
                    <ChevronRight className="w-4 h-4 text-[#FACC15]" />
                    School materials
                  </li>
                  <li className="flex items-center gap-2 text-[#111111]">
                    <ChevronRight className="w-4 h-4 text-[#FACC15]" />
                    Other essential supplies
                  </li>
                </ul>
              </div>

              <div className="bg-[#F9FAFB] rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FACC15] mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#111111]">Delivery Address:</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Mathare Kids Talents Hub<br />
                      Kamunde Road, Kariobangi South<br />
                      Sanoda Plaza, 2nd Floor<br />
                      Nairobi, Kenya<br />
                      <span className="text-xs text-gray-500">Landmark: Kamunde Road</span>
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={contactUs}
                className="w-full py-6 bg-[#FACC15] hover:bg-[#E6B800] text-[#111111] font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us Before Sending
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CashModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Banknote className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111111]">Cash / Cheque</h3>
                  <p className="text-sm text-gray-500">In-Person Donation</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F9FAFB] rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FACC15] mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#111111]">Inspire Mathare Kids Office</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Kamunde Road, Kariobangi South<br />
                      Sanoda Plaza, 2nd Floor<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F9FAFB] rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FACC15] mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#111111]">Office Hours</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Monday – Sunday<br />
                      8:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={onClose}
                className="w-full py-6 bg-[#FACC15] hover:bg-[#E6B800] text-[#111111] font-semibold"
              >
                <Check className="w-5 h-5 mr-2" />
                Got It
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Success Modal
function SuccessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-green-500" fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold text-[#111111] mb-4">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Thank you for supporting Mathare Kids Talents Hub. Your generosity changes lives and helps us continue our mission of nurturing young talent.
            </p>
            <Link href="/">
              <Button 
                className="w-full py-6 bg-[#FACC15] hover:bg-[#E6B800] text-[#111111] font-semibold"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Return to Home
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Donation Form Component
function DonationForm({ onSuccess }: { onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    method: '',
    amount: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Send email
    const subject = encodeURIComponent('Donation Notification - Mathare Kids Talents Hub')
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Donation Method: ${formData.method}
Amount: ${formData.amount || 'Not specified'}
Message: ${formData.message}
    `)
    
    window.open(`mailto:matharekidstalentshub1@gmail.com?subject=${subject}&body=${body}`, '_blank')
    
    // Also open WhatsApp
    const whatsappMessage = encodeURIComponent(`Hello, I have just submitted a donation notification. My name is ${formData.name} and I donated via ${formData.method}. Amount: ${formData.amount || 'Not specified'}`)
    window.open(`https://wa.me/254794679931?text=${whatsappMessage}`, '_blank')
    
    onSuccess()
  }

  return (
    <Card className="bg-white border-0 shadow-xl rounded-2xl overflow-hidden">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#FACC15]/20 rounded-xl flex items-center justify-center">
            <Mail className="w-6 h-6 text-[#FACC15]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#111111]">Notify Us of Your Donation</h3>
            <p className="text-sm text-gray-500">Let us know about your contribution</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#111111]">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input 
                  id="name"
                  placeholder="Your name"
                  className="pl-10 h-12 border-gray-200"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#111111]">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input 
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="pl-10 h-12 border-gray-200"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="method" className="text-[#111111]">Donation Method</Label>
              <Select 
                value={formData.method} 
                onValueChange={(value: string) => setFormData({...formData, method: value})}
              >
                <SelectTrigger className="h-12 border-gray-200">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mpesa">M-Pesa</SelectItem>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                  <SelectItem value="western">Western Union</SelectItem>
                  <SelectItem value="cash">Cash/Cheque</SelectItem>
                  <SelectItem value="postal">Postal Items</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-[#111111]">Amount (Optional)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input 
                  id="amount"
                  placeholder="e.g. 5000 Ksh"
                  className="pl-10 h-12 border-gray-200"
                  value={formData.amount}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, amount: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#111111]">Message (Optional)</Label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Textarea 
                id="message"
                placeholder="Any additional information..."
                className="pl-10 min-h-[100px] border-gray-200"
                value={formData.message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, message: e.target.value})}
              />
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full py-6 bg-[#FACC15] hover:bg-[#E6B800] text-[#111111] font-semibold text-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Notify Us of My Donation
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

// Donation Method Card Component
function DonationMethodCard({ 
  method, 
  onClick 
}: { 
  method: typeof donationMethods[0]
  onClick: () => void 
}) {
  const Icon = method.icon
  
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -4 }}
      className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden text-left group"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
            <Icon className="w-7 h-7" />
          </div>
          <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-[#FACC15] group-hover:translate-x-1 transition-all" />
        </div>
        <h3 className="text-xl font-bold text-[#111111] mb-1">{method.title}</h3>
        <p className="text-sm text-[#FACC15] font-medium mb-2">{method.subtitle}</p>
        <p className="text-sm text-gray-500">{method.description}</p>
      </div>
      <div className="h-1 bg-gradient-to-r from-[#FACC15] to-[#FACC15]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.button>
  )
}

// Main Page Component
export default function DonatePage() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const scrollToMethods = () => {
    document.getElementById('donation-methods')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FACC15]/20 rounded-full mb-6">
              <Heart className="w-5 h-5 text-[#FACC15]" fill="currentColor" />
              <span className="text-[#111111] font-semibold text-sm">Support Our Mission</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[#111111] mb-6 leading-tight">
              Support a Child.<br />
              <span className="text-[#FACC15]">Support a Dream.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Your donation helps us provide meals, training, education support, and safe shelter for children at Mathare Kids Talents Hub.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToMethods}
                size="lg" 
                className="bg-[#FACC15] hover:bg-[#E6B800] text-[#111111] font-semibold px-8 py-6 text-lg"
              >
                <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                Donate Now
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className=" !text-white hover:bg-[#E6B800] hover:!text-[#111111] px-8 py-6 text-lg"
              >
                Other Ways to Give
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {impactStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  className="bg-[#FACC15]/10 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Icon className="w-8 h-8 text-[#FACC15] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-[#111111]">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Donation Methods Section */}
      <section id="donation-methods" className="py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Choose Your Donation Method
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the most convenient way for you to support our children
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {donationMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <DonationMethodCard 
                  method={method} 
                  onClick={() => setActiveModal(method.id)} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-3">
              Your Support in <span className="text-[#FACC15]">Action</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              See how donations help transform lives at Mathare Kids Talents Hub
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { src: '/1.jpeg', alt: 'Kids performing' },
              { src: '/2.jpeg', alt: 'Dance practice' },
              { src: '/3.jpeg', alt: 'Group photo' },
              { src: '/4.jpeg', alt: 'Talent showcase' },
            ].map((img, index) => (
              <motion.div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section id="donation-form" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <DonationForm onSuccess={() => setShowSuccess(true)} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">MKTH</h3>
            <p className="text-white/60 mb-6">Mathare Kids Talents Hub - Where talent meets opportunity</p>
            <div className="flex justify-center gap-6">
              <Link href="/" className="text-white/60 hover:text-[#FACC15] transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-white/60 hover:text-[#FACC15] transition-colors">
                Shop
              </Link>
              <Link href="/donate" className="text-[#FACC15]">
                Donate
              </Link>
            </div>
            <p className="text-white/40 text-sm mt-8">
              © {new Date().getFullYear()} Mathare Kids Talents Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <MpesaModal isOpen={activeModal === 'mpesa'} onClose={() => setActiveModal(null)} />
      <BankModal isOpen={activeModal === 'bank'} onClose={() => setActiveModal(null)} />
      <WesternUnionModal isOpen={activeModal === 'western'} onClose={() => setActiveModal(null)} />
      <PostalModal isOpen={activeModal === 'postal'} onClose={() => setActiveModal(null)} />
      <CashModal isOpen={activeModal === 'cash'} onClose={() => setActiveModal(null)} />
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </main>
  )
}
