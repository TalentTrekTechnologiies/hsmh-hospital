import React, { useState, useRef, useEffect } from 'react'
import logo from '../assets/logo.png'
import { Menu, X, User, LogOut, Calendar, IdCard } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState(null) // mock auth state
  const [profileOpen, setProfileOpen] = useState(false)

  const dropdownRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-6 flex justify-between items-center h-20'>

        {/* ================= LOGO ================= */}
        <div className='flex items-center space-x-2'>
          <Link to='/' className='flex items-center space-x-2'>
            <img src={logo} alt='HMSH' className='w-20 h-14' />
            <div className='flex flex-col leading-tight'>
              <span className='text-2xl font-bold' style={{ color: '#cc7722' }}>
                HMSH
              </span>
              <span className='text-sm font-semibold text-emerald-800'>
                Harsha Multi Speciality Hospital
              </span>
            </div>
          </Link>
        </div>

        {/* ================= DESKTOP LINKS ================= */}
        <div className='hidden md:flex space-x-8 font-bold text-emerald-900'>
          <Link to='/' className='hover:text-[#cc7722]'>Home</Link>
          <Link to='/about' className='hover:text-[#cc7722]'>About Us</Link>
          <Link to='/departments' className='hover:text-[#cc7722]'>Departments</Link>
          <Link to='/doctors' className='hover:text-[#cc7722]'>Doctors</Link>
          <Link to='/services' className='hover:text-[#cc7722]'>Services</Link>
          <Link to='/blog' className='hover:text-[#cc7722]'>Blog</Link>
          <Link to='/contact' className='hover:text-[#cc7722]'>Contact Us</Link>
        </div>

        {/* ================= DESKTOP CTA + AUTH ================= */}
        <div className='hidden md:flex items-center space-x-3 relative' ref={dropdownRef}>
          
          {/* Book Appointment */}
          <Link to="/book-appointment">
            <Button
              text="Book Appointment"
              variant="primary"
              className="px-4 py-2 rounded hover:bg-emerald-800 transition"
            />
          </Link>

          {/* If NOT logged in */}
          {!user ? (
            <Button
              text="Login"
              variant="outline"
              className="px-4 py-2 rounded border border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white transition"
              onClick={() => setUser({ name: 'Demo User' })} // mock login
            />
          ) : (
            <>
              {/* Profile Icon */}
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center hover:bg-emerald-900 transition"
              >
                <User size={18} />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute right-0 top-14 w-52 bg-white shadow-xl rounded-lg py-2 text-left border
                transform transition-all duration-200 ease-out
                ${
                  profileOpen
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 translate-y-1 pointer-events-none'
                }`}
              >
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <IdCard size={16} /> View Profile
                </Link>

                <Link
                  to="/appointments"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <Calendar size={16} /> Appointments
                </Link>

                <button
                  onClick={() => {
                    setUser(null)
                    setProfileOpen(false)
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 hover:bg-red-50 text-left text-red-600 hover:text-red-700"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </>
          )}
        </div>

        {/* ================= MOBILE HAMBURGER ================= */}
        <button
          className='md:hidden p-2 text-emerald-800'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-white shadow-md px-6 py-4 space-y-3'>

          <Link to='/' className='block text-emerald-800'>Home</Link>
          <Link to='/about' className='block text-emerald-800'>About Us</Link>
          <Link to='/departments' className='block text-emerald-800'>Departments</Link>
          <Link to='/doctors' className='block text-emerald-800'>Doctors</Link>
          <Link to='/services' className='block text-emerald-800'>Services</Link>
          <Link to='/blog' className='block text-emerald-800'>Blog</Link>
          <Link to='/contact' className='block text-emerald-800'>Contact Us</Link>

          <Link to="/book-appointment">
            <Button text="Book Appointment" variant="primary" className="w-full" />
          </Link>

          {!user ? (
            <Button
              text="Login"
              variant="outline"
              className="w-full"
              onClick={() => setUser({ name: 'Demo User' })}
            />
          ) : (
            <>
              <Link to="/profile" className="block text-emerald-800">
                View Profile
              </Link>
              <Link to="/appointments" className="block text-emerald-800">
                Appointments
              </Link>
              <button
                onClick={() => setUser(null)}
                className="block text-left text-red-600 w-full hover:text-red-700"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  )
}