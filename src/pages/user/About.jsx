// src/pages/user/About.jsx
import React from 'react'
import Header from '../../commoncomponents/Header'
import Footer from '../../commoncomponents/Footer'
import Button from '../../commoncomponents/Button'


export default function About() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main className='pt-40 md:pt-44 text-center'>
        <h1 className='text-4xl font-bold text-emerald-800'>About Us</h1>
        <p className='mt-4 text-lg text-gray-600'>
          Learn more about Harsha Multi Speciality Hospital.
        </p>
        <Button text="Learn More" variant="secondary" onClick={() => alert('Clicked!')} />
      </main>
      <Footer />
    </div>
  )
}