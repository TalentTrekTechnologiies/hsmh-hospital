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
    </Routes>
  )
}