'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Heart, ArrowRight, Star, Shield, Truck, Package } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import ProductModal from '@/components/shop/ProductModal'
import DonationModal from '@/components/DonationModal'
import Breadcrumbs from '@/components/Breadcrumbs'

const products = [
  {
    id: 1,
    name: 'MKTH Hoodie',
    description: 'Premium quality hoodie featuring designs by our talented kids. Soft, warm, and made for comfort.',
    price: '1,600 Ksh',
    image: '/hoodie2.jpeg',
    badge: 'Best Seller',
    colors: [
      { name: 'Black', value: 'black', image: '/hoodie2.jpeg' },
      { name: 'Pink', value: 'pink', image: '/hoodie.jpeg' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'MKTH T-Shirt',
    description: 'Comfortable cotton t-shirt with vibrant artwork created by our talented children.',
    price: '1,200 Ksh',
    image: '/whitet-shirt.png',
    badge: 'Popular',
    colors: [
      { name: 'White', value: 'white', image: '/whitet-shirt.png' },
      { name: 'Pink', value: 'pink', image: '/pinkt-shirt.jpeg' },
      { name: 'Purple', value: 'purple', image: '/purplet-shirt.jpeg' },
      { name: 'Green', value: 'green', image: '/greent-shirt.jpeg' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3,
    name: 'MKTH Trousers',
    description: 'Stylish and durable trousers with unique patterns designed by our young artists.',
    price: '2,000 Ksh',
    image: '/trousers.jpeg',
    badge: 'New',
    colors: [
      { name: 'Black', value: 'black', image: '/trousers.jpeg' },
      { name: 'Pink', value: 'pink', image: '/hoodie.jpeg'}
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4,
    name: 'MKTH Cap',
    description: 'Adjustable cap with embroidered logo. Perfect for sunny days and showing your support.',
    price: '600 Ksh',
    image: '/cap.jpeg',
    badge: null
  }
]

const features = [
  { icon: Heart, title: 'Support a Child', description: 'Every purchase keeps a child in school' },
  { icon: Shield, title: 'Premium Quality', description: 'High-quality materials and craftsmanship' },
  { icon: Truck, title: 'Fast Delivery', description: 'Quick and reliable shipping nationwide' },
  { icon: Package, title: 'Easy Returns', description: '30-day hassle-free return policy' }
]

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [donationModalOpen, setDonationModalOpen] = useState(false)

  const openModal = (product: typeof products[0]) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProduct(null), 300)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Shop', href: '/shop' }]} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#F59E0B]/10 via-[#F9FAFB] to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F59E0B]/20 rounded-full mb-6">
              <ShoppingBag className="w-5 h-5 text-[#F59E0B]" />
              <span className="text-[#111111] font-semibold text-sm">MKTH Store</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[#111111] mb-6">
              Support a Child,
              <span className="block text-[#F59E0B]">Wear the Change! ✨</span>
            </h1>
            
            <p className="text-xl text-[#111111]/70 leading-relaxed mb-8">
              When you buy our merchandise, you&apos;re not just getting high-quality items designed by our 
              talented kids — you&apos;re keeping a child in school and feeding another. 💛
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-4">
              Our Products
            </h2>
            <p className="text-lg text-[#111111]/70 max-w-2xl mx-auto">
              Every purchase makes a difference. Shop now and be part of their journey! 🌟
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="h-full bg-white border-[#E5E7EB] hover:border-[#F59E0B]/50 transition-all duration-300 group overflow-hidden shadow-sm hover:shadow-lg cursor-pointer"
                  onClick={() => openModal(product)}
                >
                  <div className="relative h-64 bg-[#F3F4F6] overflow-hidden">
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#F59E0B] text-black text-xs font-bold rounded-full">
                        {product.badge}
                      </div>
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#F59E0B] transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 text-[#F59E0B]">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold">5.0</span>
                      </div>
                    </div>
                    
                    <p className="text-[#111111]/60 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-[#F59E0B]">{product.price}</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-[#111111] hover:bg-[#111111]/90 text-white font-semibold"
                      size="lg"
                      onClick={(e) => {
                        e.stopPropagation()
                        openModal(product)
                      }}
                    >
                      <ShoppingBag className="mr-2 w-5 h-5" />
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <h3 className="font-bold text-[#111111] mb-2">{feature.title}</h3>
                <p className="text-[#111111]/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-[#F59E0B]">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Every Purchase Makes a Difference
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Your support helps us provide education, nutrition, and opportunities for children 
              in Mathare to develop their talents and build a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#111111] hover:bg-[#F3F4F6] px-8 py-6 text-lg font-semibold"
                onClick={() => setDonationModalOpen(true)}
              >
                Donate Now
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#111111] px-8 py-6 text-lg"
                asChild
              >
                <a href="/">
                  Back to Home
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              2025 Mathare Kids Talents Hub. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-white/60 hover:text-[#F59E0B] transition-colors text-sm">
                Home
              </Link>
              <Link href="/shop" className="text-white/60 hover:text-[#F59E0B] transition-colors text-sm">
                Shop
              </Link>
              <Link href="/donate" className="text-white/60 hover:text-[#F59E0B] transition-colors text-sm">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      
      <DonationModal isOpen={donationModalOpen} onClose={() => setDonationModalOpen(false)} />
    </main>
  )
}
