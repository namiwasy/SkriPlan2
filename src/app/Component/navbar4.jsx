import React from 'react'
import Link from 'next/link'

export default function Navbar4() {
  return (
    <div>
      <div className='bg-white h-19 w-full flex items-center shadow-2xl'>

        <img
          src="/assets/pinme2.png"
          alt="Logo"
          className="mt-1 ml-4 h-20 w-20"
        />
        
          
          <h1 className="text-black p-4 ml-225 text-2xl cursor-pointer hover:text-blue-500 duration-200">Home</h1>
        

    
        <div className="relative group">
          <h1 className="text-black p-4 text-2xl cursor-pointer hover:text-blue-500 duration-200">
            Profil
          </h1>

          <div className="
            absolute hidden group-hover:block 
            bg-white shadow-lg rounded-xl mt-2 w-40 
            text-gray-700 font-sans p-2
          ">
            <p className="p-2 hover:bg-blue-100 rounded-lg cursor-pointer">Akun Saya</p>
            <p className="p-2 hover:bg-blue-100 rounded-lg cursor-pointer">Pengaturan</p>
            <Link 
            href="/latianlogin"
            className="p-2 hover:bg-blue-100 rounded-lg cursor-pointer "
            >
            Keluar
            </Link>
            
          </div>
        </div>

        <h1 className="text-black p-4 text-2xl cursor-pointer hover:text-blue-500 duration-200">Blog</h1>
      </div>
    </div>
  )
}
