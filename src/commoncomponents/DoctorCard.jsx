import React from 'react'
import Button from './Button'

export default function DoctorCard({ name, specialty, qualifications, image, showButton = true }) {
  return (
    <div
      className='bg-white shadow-md border border-gray-200 rounded-none overflow-hidden flex flex-col
                 transform transition duration-300 hover:scale-105 hover:shadow-xl
                 hover:bg-gray-300 w-full max-w-xs mx-auto'
    >
      {/* Overlay (covers entire card) */}
      <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 z-0'></div>

      {/* Content lifted above overlay */}
      <div className='relative z-10 flex flex-col flex-grow'>
        {/* Image */}
        <img src={image} alt={name} className="w-full h-[220px] object-cover transition duration-300 group-hover:brightness-50" />

        {/* Content */}
        <div className='p-4 text-left flex flex-col flex-grow h-[120px]'>
          <h3 className='text-xl font-bold text-emerald-700 mb-1'>{name}</h3>
          <p className='text-gray-600 text-sm mb-1'>{specialty}</p>
          <p className='text-gray-500 mb-2 text-xs italic'>{qualifications}</p>

          {showButton && (
            <div className='mt-auto'>
              <Button className='font-bold text-sm' text='View Profile' variant='outline' />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}