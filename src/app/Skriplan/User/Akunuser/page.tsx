import React from 'react'
import Navbaruser from '../../../Component/navbaruser'
export default function page() {
  return (
    <div className="relative w-full h-[588px] overflow-hidden">
          {/* Background */}
          <img
            src="/assets/phinisi.jpg"
            alt="bg"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70 z-0" />
    
          <Navbaruser />
    
          {/* Content */}
          <div className="relative z-10 flex items-center justify-between px-16 h-full">
            {/* Add content here */}
          </div>
        </div>
  )
}
