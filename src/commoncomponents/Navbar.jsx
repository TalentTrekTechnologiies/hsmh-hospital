import React, { useState, useRef, useEffect } from 'react'
import logo from '../assets/logo.png'
import { Menu, X, User, LogOut, Calendar, IdCard } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // ✅ Load user from localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user")
    return storedUser ? JSON.parse(storedUser) : null
  })

  const [profileOpen, setProfileOpen] = useState(false)
  const dropdownRef = useRef(null)

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

        {/* LOGO */}
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

        {/* DESKTOP LINKS */}
        <div className='hidden md:flex space-x-8 font-bold text-emerald-900'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/departments'>Departments</Link>
          <Link to='/doctors'>Doctors</Link>
          <Link to='/services'>Services</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact Us</Link>
        </div>

        {/* DESKTOP CTA + AUTH */}
        <div className='hidden md:flex items-center space-x-3 relative' ref={dropdownRef}>
          
          <Link to="/book-appointment">
            <Button
              text="Book Appointment"
              variant="primary"
              className="px-4 py-2 rounded hover:bg-emerald-800 transition"
            />
          </Link>

          {!user ? (
            <Link to="/login">
              <Button
                text="Login"
                variant="outline"
                className="px-4 py-2 rounded border border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white transition"
              />
            </Link>
          ) : (
            <>
              {/* Profile Icon */}
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center"
              >
                <User size={18} />
              </button>

              {/* Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 top-14 w-52 bg-white shadow-xl rounded-lg py-2 border">
                  <div className="px-4 py-2 font-semibold text-emerald-800">
                    {user.name}
                  </div>

                  <Link to="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                    <IdCard size={16} /> View Profile
                  </Link>

                  <Link to="/appointments" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                    <Calendar size={16} /> Appointments
                  </Link>

                  <button
                    onClick={() => {
                      localStorage.removeItem("user")
                      setUser(null)
                      setProfileOpen(false)
                    }}
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-red-50 text-red-600"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className='md:hidden p-2 text-emerald-800'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-white shadow-md px-6 py-4 space-y-3'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/departments'>Departments</Link>
          <Link to='/doctors'>Doctors</Link>
          <Link to='/services'>Services</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact Us</Link>

          <Link to="/book-appointment">
            <Button text="Book Appointment" variant="primary" className="w-full" />
          </Link>

          {!user ? (
            <Link to="/login">
              <Button text="Login" variant="outline" className="w-full" />
            </Link>
          ) : (
            <>
              <div className="font-semibold text-emerald-800">{user.name}</div>
              <button
                onClick={() => {
                  localStorage.removeItem("user")
                  setUser(null)
                }}
                className="text-red-600"
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