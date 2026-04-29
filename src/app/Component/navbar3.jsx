import React from 'react'
import Image from 'next/image'
export default function Navbar3() {
  return (
    <div className="bg-pink-300 h-16 w-screen flex items-center justify-between px-7 drop-shadow-2xl">
     <Image
              src="/assets/pinme.jpg"
              alt="gambar"
              width={50}
              height={70}
              className="rounded-2xl"
            />
      <div className="flex gap-8">
        <p className="text-white text-xl cursor-pointer hover:text-gray-200">Home</p>
        <p className="text-white text-xl cursor-pointer hover:text-gray-200">About</p>
        <p className="text-white text-xl cursor-pointer hover:text-gray-200">Skills</p>
        <p className="text-white text-xl cursor-pointer hover:text-gray-200">Contacts</p>
      </div>
    </div>
  )
}
