import React from 'react'

export default function Button({ text, onClick, type = 'button', variant = 'primary', className = '' }) {
  // Define base styles
  const baseStyles = 'px-4 py-2 rounded font-medium transition'

  // Variants for different button styles {/*emerald-900 | [#cc7722] */}
  const variants = {
    primary: 'bg-emerald-800 text-white hover:bg-amber-600', 
    gray: 'bg-gray-800 text-white hover:bg-gray-600',
    yellow: 'bg-white text-[#cc7722] hover:bg-gray-300 border border-[#cc7722]',
    emergency: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-emerald-800 text-emerald-700 hover:bg-emerald-50',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </button>
  )
}