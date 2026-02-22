'use client'

import { Minus, Plus } from 'lucide-react'

interface QuantitySelectorProps {
  quantity: number
  onQuantityChange: (quantity: number) => void
  min?: number
  max?: number
}

export default function QuantitySelector({ 
  quantity, 
  onQuantityChange, 
  min = 1, 
  max = 10 
}: QuantitySelectorProps) {
  const decrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1)
    }
  }

  const increase = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1)
    }
  }

  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-[#111111]">Quantity</label>
      <div className="flex items-center gap-3">
        <button
          onClick={decrease}
          disabled={quantity <= min}
          className="w-10 h-10 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7EB] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus className="w-4 h-4 text-[#111111]" />
        </button>
        
        <span className="w-12 text-center font-semibold text-lg text-[#111111]">
          {quantity}
        </span>
        
        <button
          onClick={increase}
          disabled={quantity >= max}
          className="w-10 h-10 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7EB] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="w-4 h-4 text-[#111111]" />
        </button>
      </div>
    </div>
  )
}
