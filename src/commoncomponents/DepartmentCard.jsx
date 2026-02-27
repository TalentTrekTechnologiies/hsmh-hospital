import React from 'react'
import { Link } from 'react-router-dom'

export default function DepartmentCard({ title, description, image }) {
  // Format the department name for URL
  const departmentSlug = title.toLowerCase().replace(/[&,]/g, '').replace(/\s+/g, '-');
  
  return (
    <Link to={`/departments?dept=${departmentSlug}`}>
      <div
        className="
          relative
          min-w-[240px] max-w-[240px]
          h-[180px]
          rounded-2xl
          overflow-hidden
          flex items-center justify-center
          text-center
          text-white
          shadow-md
          transition-transform duration-300
          hover:-translate-y-1 hover:shadow-xl
          group
          cursor-pointer
        "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 group-hover:from-black/50 group-hover:to-black/70 transition" />

        {/* content */}
        <div className="relative z-10 px-3">
          <h3 className="font-semibold text-sm leading-tight mb-1">{title}</h3>
          <p className="text-xs opacity-90 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  )
}