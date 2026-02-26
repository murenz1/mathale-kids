'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Mail } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ColorSelector from './ColorSelector'
import SizeSelector from './SizeSelector'
import QuantitySelector from './QuantitySelector'

interface ColorOption {
  name: string
  value: string
  image?: string
}

interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
  badge?: string | null
  colors?: ColorOption[]
  sizes?: string[]
}

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

const PHONE_NUMBER = '254794679931'
const EMAIL = 'matharekidstalentshub1@gmail.com'

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [currentImage, setCurrentImage] = useState('')

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors?.[0]?.value || '')
      setSelectedSize(product.sizes?.[0] || '')
      setQuantity(1)
      setCurrentImage(product.image)
    }
  }, [product])

  const handleColorChange = (colorValue: string) => {
    setSelectedColor(colorValue)
    const color = product?.colors?.find(c => c.value === colorValue)
    if (color?.image) {
      setCurrentImage(color.image)
    }
  }

  const generateWhatsAppMessage = () => {
    const colorName = product?.colors?.find(c => c.value === selectedColor)?.name || selectedColor
    const message = `Hello, I would like to order:

Product: ${product?.name}
Color: ${colorName}
Size: ${selectedSize}
Quantity: ${quantity}

Please confirm availability.`
    return encodeURIComponent(message)
  }

  const generateEmailBody = () => {
    const colorName = product?.colors?.find(c => c.value === selectedColor)?.name || selectedColor
    return `Product: ${product?.name}
Color: ${colorName}
Size: ${selectedSize}
Quantity: ${quantity}

Please confirm availability.`
  }

  const handleWhatsAppOrder = () => {
    const encodedMessage = generateWhatsAppMessage()
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`, '_blank')
  }

  const handleEmailOrder = () => {
    const subject = encodeURIComponent('New Order')
    const body = encodeURIComponent(generateEmailBody())
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, '_blank')
  }

  const hasColors = product?.colors && product.colors.length > 0
  const hasSizes = product?.sizes && product.sizes.length > 0

  return (
    <AnimatePresence>
      {isOpen && product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          
          {/* Modal Container - Centered */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto md:min-h-[500px] bg-[#F9FAFB] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
                  <Image
                    src={currentImage || product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#F59E0B] text-black text-xs font-bold rounded-full">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col">
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 text-[#111111]" />
                  </button>

                  {/* Product Info */}
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-2">
                      {product.name}
                    </h2>
                    <p className="text-3xl font-bold text-[#F59E0B] mb-3">
                      {product.price}
                    </p>
                    <p className="text-[#111111]/70">
                      {product.description}
                    </p>
                  </div>

                  {/* Variant Selectors */}
                  <div className="space-y-6 mb-8">
                    {hasColors && (
                      <ColorSelector
                        colors={product.colors!}
                        selectedColor={selectedColor}
                        onColorChange={handleColorChange}
                      />
                    )}
                    
                    {hasSizes && (
                      <SizeSelector
                        sizes={product.sizes!}
                        selectedSize={selectedSize}
                        onSizeChange={setSelectedSize}
                      />
                    )}
                    
                    <QuantitySelector
                      quantity={quantity}
                      onQuantityChange={setQuantity}
                    />
                  </div>

                  {/* Order Buttons */}
                  <div className="space-y-3 mt-auto">
                    <Button
                      onClick={handleWhatsAppOrder}
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Order via WhatsApp
                    </Button>
                    
                    <Button
                      onClick={handleEmailOrder}
                      variant="outline"
                      size="lg"
                      className="w-full border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white font-semibold py-6"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Order via Email
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
