import React from 'react'
import Button from './Button'

export default function DoctorCard({ name, specialty, qualifications, image, showButton = true }) {
  return (
    <div
      className='group relative bg-white shadow-md border border-gray-200 overflow-hidden flex flex-col
                 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl
                 w-[260px] min-w-[260px]'
    >
      {/* Softer overlay */}
      <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 z-0'></div>

      <div className='relative z-10 flex flex-col flex-grow'>
        <img
          src={image}
          alt={name}
          className="w-full h-[200px] object-cover transition duration-300 group-hover:brightness-75"
        />

        <div className='p-4 text-left flex flex-col flex-grow h-[120px]'>
          <h3 className='text-lg font-bold text-emerald-700 mb-1 transition group-hover:text-white'>
            {name}
          </h3>

          <p className='text-gray-600 text-sm mb-1 transition group-hover:text-gray-200'>
            {specialty}
          </p>

          <p className='text-gray-500 mb-2 text-xs italic transition group-hover:text-gray-300'>
            {qualifications}
          </p>

          {showButton && (
            <div className='mt-auto opacity-0 group-hover:opacity-100 transition duration-300'>
              <Button
                className='font-bold text-sm'
                text='View Profile'
                variant='outline'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
