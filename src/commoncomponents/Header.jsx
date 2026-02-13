import React from 'react'
import Navbar from './Navbar'
import Button from './Button'


export default function Header() {
  return (
    <header className='fixed top-0 w-full z-50'>
      {/* Topbar with scrolling/marquee effect */}
      <div className='bg-[#006d5b] text-white text-sm h-10 flex items-center overflow-hidden'>
        <div className='animate-marquee whitespace-nowrap'>
          <span className='mx-8'>🕒 OPD: 8:00 AM - 8:00 PM</span>
          <span className='mx-8'>📞 000 123 456 789</span>
          <span className='mx-8'>🚑 Emergency: 020 123 456 789</span>
        </div>
      </div>
      {/* Navbar */}
      <Navbar />
    </header>
  )
}

/*
{ Topbar inline }
      <div className='bg-[#006d5b] text-white text-sm h-10 flex justify-between items-center px-6'>
        
        {Left Side}
        <div className='flex items-center space-x-6'>
          <div className='flex items-center gap-2'>
            <span>🕒</span>
            <span>OPD: 8:00 AM - 8:00 PM</span>
          </div>
          <div className='flex items-center gap-2'>
            <span>📞</span>
            <span>000 123 456 789</span>
          </div>
        </div>

        {Right Side}
        <Button text="🚑 Emergency: 020 123 456 789" variant="emergency" className="text-xs px-3 py-1" />
      </div>

*/