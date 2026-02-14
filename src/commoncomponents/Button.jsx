import React from 'react'

export default function Button({ text, onClick, type = 'button', variant = 'primary', className = '', disabled = false, hideWhenDisabled = false, }) {
  
  // If disabled and hideWhenDisabled is true → render nothing
  if (disabled && hideWhenDisabled) return null

  // Define base and disabled styles
  const baseStyles = 'px-4 py-2 rounded font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
  const disabledStyles = 'opacity-50 cursor-not-allowed hover:none'


  // Variants for different button styles {/*emerald-900 | [#cc7722] */}
  const variants = {
    primary: disabled ? 'bg-gray-400 text-gray-200 opacity-60 cursor-not-allowed' : 'bg-emerald-800 text-white hover:bg-amber-600', 
    gray: disabled ? 'bg-gray-400 text-gray-200 opacity-60 cursor-not-allowed' : 'bg-gray-800 text-white hover:bg-gray-600',
    yellow: disabled ? 'bg-gray-200 text-gray-400 opacity-60 cursor-not-allowed' : 'bg-white text-[#cc7722] hover:bg-gray-300 border border-[#cc7722]',
    emergency: disabled ? 'bg-gray-200 text-gray-400 opacity-60 cursor-not-allowed' : 'bg-red-600 text-white hover:bg-red-700',
    outline: disabled ? 'bg-gray-200 text-gray-400 opacity-60 cursor-not-allowed' : 'border border-emerald-800 text-emerald-700 hover:bg-emerald-50',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? disabledStyles : ''}`}
    >
      {text}
    </button>
  )
}
//primary: 'bg-emerald-800 text-white hover:bg-amber-600', 