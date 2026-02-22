'use client'

interface SizeSelectorProps {
  sizes: string[]
  selectedSize: string
  onSizeChange: (size: string) => void
}

export default function SizeSelector({ sizes, selectedSize, onSizeChange }: SizeSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-[#111111]">Size</label>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChange(size)}
            className={`w-12 h-12 rounded-lg font-semibold text-sm transition-all duration-200 ${
              selectedSize === size
                ? 'bg-[#F59E0B] text-black ring-2 ring-[#F59E0B] ring-offset-2'
                : 'bg-[#F3F4F6] text-[#111111] hover:bg-[#E5E7EB]'
            }`}
            aria-label={`Select size ${size}`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
