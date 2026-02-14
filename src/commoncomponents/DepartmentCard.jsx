import React from 'react'

export default function DepartmentCard({ title, description, icon: Icon, image }) {
  return (
    <div
      className="
        relative
        min-w-[240px] max-w-[240px]
        h-[160px]
        rounded-2xl
        overflow-hidden
        flex items-center justify-center
        text-center
        text-white
        shadow-md
        transition-transform duration-300
        hover:-translate-y-1 hover:shadow-xl
        group
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
        <Icon className="mx-auto mb-2 h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
        <h3 className="font-semibold text-sm leading-tight">{title}</h3>
        <p className="text-xs opacity-90">{description}</p>
      </div>
    </div>
  )
}
