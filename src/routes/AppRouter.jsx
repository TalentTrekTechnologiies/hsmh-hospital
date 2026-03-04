import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/user/Home'
import About from '../pages/user/About'
import Contact from '../pages/user/Contact'
import Services from '../pages/user/Services'
import Doctors from '../pages/user/Doctors'
import DoctorProfile from '../pages/user/DoctorProfile'
import BlogList from '../pages/user/BlogList'
import BlogDetails from '../pages/user/BlogDetails'
import Departments from '../pages/user/Departments'
import DepartmentDetails from '../pages/user/DepartmentDetails'
import BookAppointment from '../pages/auth/BookAppointment'
import AppointmentHistory from '../pages/auth/AppointmentHistory'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'
import PrivacyPolicy from '../commoncomponents/PrivacyPolicy'
import TermsOfUse from '../commoncomponents/TermsOfUse'



export default function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorProfile />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:id" element={<DepartmentDetails />} />  
        <Route path="/book-appointment" element={<BookAppointment/>} />
        <Route path="/appointments" element={<AppointmentHistory/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />

    </Routes>
  )
}