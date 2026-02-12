import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-6 flex justify-between items-center h-16'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <Link to='/' className='flex items-center space-x-2'>
            <img src={logo} alt='HMSH' className='w-16 h-12' />
            <div className='flex flex-col leading-tight'>
              <span className='text-xl font-bold text-emerald-800'>HMSH</span>
              <span className='text-xs text-gray-600'>Harsha Multi Speciality Hospital</span>
            </div>
          </Link>
        </div>

        {/* Links (desktop) */}
        <div className='hidden md:flex space-x-8'>
          <Link to='/' className='text-emerald-800 hover:text-emerald-900'>Home</Link>
          <Link to='/about' className='text-emerald-800 hover:text-emerald-900'>About Us</Link>
          <Link to='/departments' className='text-emerald-800 hover:text-emerald-900'>Departments</Link>
          <Link to='/doctors' className='text-emerald-800 hover:text-emerald-900'>Doctors</Link>
          <Link to='/services' className='text-emerald-800 hover:text-emerald-900'>Services</Link>
          <Link to='/blog' className='text-emerald-800 hover:text-emerald-900'>Blog</Link>
          <Link to='/contact' className='text-emerald-800 hover:text-emerald-900'>Contact Us</Link>
        </div>

        {/* CTA (desktop) */}
        <div className='hidden md:block'>
          <Button text="Book Appointment" variant="primary" className="px-4 py-2 rounded hover:bg-emerald-800 transition" />
        </div>

        {/* Hamburger (mobile) */}
        <button
          className='md:hidden p-2 text-emerald-800 hover:text-emerald-900'
          onClick={() => setMobileMenuIsOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-white shadow-md px-6 py-4 space-y-2'>
          <Link to='/' className='block text-emerald-800'>Home</Link>
          <Link to='/about' className='block text-emerald-800'>About Us</Link>
          <Link to='/departments' className='block text-emerald-800'>Departments</Link>
          <Link to='/doctors' className='block text-emerald-800'>Doctors</Link>
          <Link to='/services' className='block text-emerald-800'>Services</Link>
          <Link to='/blog' className='block text-emerald-800'>Blog</Link>
          <Link to='/contact' className='block text-emerald-800'>Contact Us</Link>
          <button className='w-full bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 transition'>
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  )
}