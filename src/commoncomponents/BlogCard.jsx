import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({ id, title, excerpt }) {
  return (
    <div className='bg-white shadow-md rounded-lg p-6'>
      <h3 className='text-lg font-semibold text-emerald-700'>{title}</h3>
      <p className='mt-2 text-gray-600'>{excerpt}</p>
      <Link
        to={`/blog/${id}`}
        className='text-emerald-700 hover:underline mt-4 inline-block'
      >
        Read More →
      </Link>
    </div>
  )
}