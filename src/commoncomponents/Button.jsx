import React from 'react'

export default function Button({ text, onClick, type = 'button', variant = 'primary', className = '' }) {
  // Define base styles
  const baseStyles = 'px-4 py-2 rounded font-medium transition'

  // Variants for different button styles
  const variants = {
    primary: 'bg-emerald-700 text-white hover:bg-emerald-800',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    emergency: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-emerald-700 text-emerald-700 hover:bg-emerald-50',
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