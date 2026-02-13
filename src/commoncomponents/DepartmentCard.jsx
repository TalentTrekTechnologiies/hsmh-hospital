import React from 'react'
import {Link} from 'react-router-dom'

export default function DepartmentCard({ title, description, image }) {
  return (
    <div 
      className="bg-[#fff8f0] shadow-md rounded-lg p-8 flex flex-col items-center
      transform transition duration-300 hover:scale-105 hover:shadow-xl 
      hover:bg-emerald-700/30 hover:bg-opacity-10 group"
    > {/*bg-[#f5f5dc] */}
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-contain mb-6 transition duration-300"
      />
      <h3 className='text-xl font-semibold text-emerald-700'>{title}</h3>
      <p className='mt-2 text-gray-700'>{description}</p>
    </div>
  )
}

/*
    <div className='bg-white shadow-md rounded-lg p-6 text-center'>
        <h3 className='text-xl font-semibold text-emerald-700'>{title}</h3>
        <p className='mt-2 text-gray-600'>{description}</p>
    </div>
*/

/* to add link to department page via dept name on the card
<Link to={`/department/${title.toLowerCase()}`} className='text-xl font-semibold text-emerald-700 hover:underline'>
        <h3 className='text-xl font-semibold text-emerald-700'>{title}</h3>
       </Link> 
*/