import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className= 'bg-white shadow-md'> {/* bg-[#f5f5dc] */}
      <div className='max-w-7xl mx-auto px-6 flex justify-between items-center h-18'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <Link to='/' className='flex items-center space-x-2'>
            <img src={logo} alt='HMSH' className='w-20 h-14' />
            <div className='flex flex-col leading-tight'>
              <span className='text-2xl font-bold' style={{color: '#cc7722'}}>HMSH</span>  {/*text-emerald-800*/}
              <span className='text-sm font-semibold text-emerald-800'>Harsha Multi Speciality Hospital</span>
            </div>
          </Link>
        </div>

        {/* Links (desktop) */}
        <div className='hidden md:flex space-x-8 font-bold text-emerald-900'>
          <Link to='/' className=' hover:text-[#cc7722] '>Home</Link>  {/* hover:text-[#cc7722] ochre ||  hover:text-emerald-600*/}
          <Link to='/about' className='hover:text-[#cc7722]'>About Us</Link>
          <Link to='/departments' className='hover:text-[#cc7722]'>Departments</Link>
          <Link to='/doctors' className='hover:text-[#cc7722]'>Doctors</Link>
          <Link to='/services' className='hover:text-[#cc7722]'>Services</Link>
          <Link to='/blog' className='hover:text-[#cc7722]'>Blog</Link>
          <Link to='/contact' className='hover:text-[#cc7722]'>Contact Us</Link>
        </div>

        {/* CTA (desktop) */}
        <div className='hidden md:block'>
          <Button text="Book Appointment" variant="primary" className="px-4 py-2 rounded transition" disabled hideWhenDisabled/>
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
          <Button text="Book Appointment" variant="primary" className="w-full" disabled={true} hideWhenDisabled/>
        </div>
      )}
    </nav>
  )
}