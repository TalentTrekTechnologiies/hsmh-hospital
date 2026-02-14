import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Button from './Button'

export default function Header() {
  const announcements = [
    "🕒 OPD: 8:00 AM - 8:00 PM",
    "📞 000 123 456 789",
    "🚑 Emergency: 020 123 456 789"
  ]

  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % announcements.length)
        setVisible(true)
      }, 500) // fade duration
    }, 4000) // cycle every 4s
    return () => clearInterval(interval)
  }, [])

  return (
    <header className='fixed top-0 w-full z-50'>
      {/* Topbar with fade-in/out announcements */}
      <div className='bg-[#006d5b] text-white font-bold text-sm h-7 flex items-center justify-center overflow-hidden'>
        <p className={`transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {announcements[index]}
        </p>
      </div>

      {/* Navbar */}
      <Navbar />
    </header>
  )
}