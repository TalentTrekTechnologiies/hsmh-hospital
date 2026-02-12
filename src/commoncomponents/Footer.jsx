import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'


export default function Footer() {
  return (
    <footer className='bg-emerald-800 text-white mt-20'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
        
        {/* Hospital Info */}
        <div>
          <h2 className='text-xl font-bold mb-4'>Harsha Multi Speciality Hospital</h2>
          <p className='text-sm'>
            Providing trusted healthcare with modern facilities and compassionate care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
          <ul className='space-y-2 text-sm'>
            <li><Link to='/' className='hover:underline'>Home</Link></li>
            <li><Link to='/about' className='hover:underline'>About Us</Link></li>
            <li><Link to='/departments' className='hover:underline'>Departments</Link></li>
            <li><Link to='/doctors' className='hover:underline'>Doctors</Link></li>
            <li><Link to='/services' className='hover:underline'>Services</Link></li>
            <li><Link to='/contact' className='hover:underline'>Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className='text-xl font-bold mb-4'>Contact</h2>
          <p className='text-sm'>📍 123 Health Street, Bangalore</p>
          <p className='text-sm'>📞 000 123 456 789</p>
          <p className='text-sm'>✉️ info@hmsh.com</p>
          <div className='mt-4'>
            <Button text="Book Appointment" variant="outline" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-emerald-900 text-center py-4 text-xs text-white">
        <p>© {new Date().getFullYear()} Harsha Multi Speciality Hospital. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-emerald-300">Twitter</a>
          <a href="#" className="hover:text-emerald-300">Instagram</a>
          <a href="#" className="hover:text-emerald-300">Facebook</a>
          <a href="#" className="hover:text-emerald-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}