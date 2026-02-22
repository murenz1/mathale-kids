'use client'

import { Check } from 'lucide-react'

interface ColorOption {
  name: string
  value: string
  image?: string
}

interface ColorSelectorProps {
  colors: ColorOption[]
  selectedColor: string
  onColorChange: (color: string) => void
}

export default function ColorSelector({ colors, selectedColor, onColorChange }: ColorSelectorProps) {
  const getColorClass = (colorName: string) => {
    const colorMap: { [key: string]: string } = {
      'Black': 'bg-black',
      'White': 'bg-white border-2 border-gray-300',
      'Pink': 'bg-pink-500',
      'Purple': 'bg-purple-600',
      'Green': 'bg-green-600',
    }
    return colorMap[colorName] || 'bg-gray-400'
  }

  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-[#111111]">Color</label>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => onColorChange(color.value)}
            className={`relative w-10 h-10 rounded-full ${getColorClass(color.name)} transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-offset-2`}
            aria-label={`Select ${color.name} color`}
          >
            {selectedColor === color.value && (
              <span className="absolute inset-0 flex items-center justify-center">
                <Check className={`w-5 h-5 ${color.name === 'White' ? 'text-gray-800' : 'text-white'}`} />
              </span>
            )}
            {color.name === 'White' && selectedColor !== color.value && (
              <span className="absolute inset-0 rounded-full border-2 border-gray-300" />
            )}
          </button>
        ))}
      </div>
      <p className="text-sm text-[#111111]/60">
        {colors.find(c => c.value === selectedColor)?.name}
      </p>
    </div>
  )
}
