import React from 'react'
import Button from './Button'

export default function DoctorCard({ name, specialty, image }) {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
      <img
        src={image}
        alt={name}
        className='w-full h-64 object-cover'
      />
      <div className='p-6 text-center'>
        <h3 className='text-lg font-semibold text-emerald-700'>{name}</h3>
        <p className='text-gray-600'>{specialty}</p>
        <div className='mt-4'>
          <Button text='View Profile' variant='outline' />
        </div>
      </div>  
    </div>
  )
}