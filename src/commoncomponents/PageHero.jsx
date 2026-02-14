// src/commoncomponents/PageHero.jsx
import React from 'react'

export default function PageHero({ title, subtitle, image }) {
    console.log('PageHero received image:', image)

  return (
    <section
      className='relative h-[45vh] bg-cover bg-center flex items-center justify-center'
      style={{ backgroundImage: `url("${image}")` }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/55 bg-opacity-30'></div>

      {/* Content */}
      <div className='relative text-center text-white px-6'>
        <h1 className='text-4xl md:text-5xl font-bold'>{title}</h1>
        {subtitle && (
          <p className='mt-4 text-lg md:text-xl font-medium'>{subtitle}</p>
        )}
      </div>
    </section>
  )
}