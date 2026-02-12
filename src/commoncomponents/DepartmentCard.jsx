import React from 'react'

export default function DepartmentCard({ title, description, image }) {
  return (
    <div className="bg-[#f5f5dc] shadow-md rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />

      <div className='bg-white shadow-md rounded-lg p-6 text-center'>
        <h3 className='text-xl font-semibold text-emerald-700'>{title}</h3>
        <p className='mt-2 text-gray-600'>{description}</p>
      </div>
    </div>
  )
}
