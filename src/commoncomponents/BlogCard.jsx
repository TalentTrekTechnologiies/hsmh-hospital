import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({ id, title, excerpt, image }) {
  return (
    <div 
      className='relative bg-white shadow-md border border-gray-200 rounded-none overflow-hidden flex flex-col
                 transform transition duration-300 hover:scale-105 hover:shadow-xl group'
    >
      {/* Overlay (covers entire card, starts invisible) */}
      <div className='absolute inset-0 bg-emerald-700 opacity-0 group-hover:opacity-40 transition duration-300 z-0'></div>
      
      {/* Content (lifted above overlay) */}
      <div className='relative z-10 flex flex-col flex-grow'>
        <img src={image} alt={title} className='w-full h-48 object-cover transition duration-300 group-hover:brightness-75' />
        <div className='p-4 flex flex-col flex-grow text-left'>
          <h3 className='text-lg font-semibold text-emerald-700 mb-2 group-hover:text-white'>{title}</h3>
          <p className='mb-4 text-gray-600 group-hover:text-gray-100'>{excerpt}</p>
          <Link to={`/blog/${id}`} className='text-emerald-700 hover:underline group-hover:text-white mt-auto'>
            Read More →
          </Link>
        </div>
      </div>
    </div>
  )
}