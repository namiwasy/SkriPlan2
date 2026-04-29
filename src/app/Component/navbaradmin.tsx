'use client'
import React from 'react'
import { useRouter } from "next/navigation";
export default function navbaradmin() {
  const router = useRouter();
  return (
    <div>
      <div className='bg-[#FF7F11] w-screen h-[58px] absolute top-0 left-0 z-50 flex items-center justify-center shadow-2xl'>
      <img 
      src="/assets/SkriplanLogo.jpeg" 
      alt="Logo" 
      className='h-10 w-10 rounded-full items-center justify-start hover:scale-110 transition-all duration-400 cursor-pointer ml-5 '
       />
      <h1 className='font-poppins text-[#1E3E62] text-2xl font-bold hover:scale-110 transition-all duration-400 cursor-pointer ml-2 '>Skri</h1>
      <h1 className='font-poppins text-[#ffffff] text-2xl font-bold hover:scale-110 transition-all duration-400 cursor-pointer'>Plan</h1>
      <div className='font-poppins flex flex-row ml-auto mr-10 items-center justify-center text-white font-bold'>
        <div className='flex items-center space-x-2'>
          <img 
          src="/assets/IconUserAdmin.png" 
          alt="Logo" 
          className='h-10 w-10 rounded-full items-center justify-start hover:scale-110 transition-all duration-400 cursor-pointer '
          onClick={() => router.push("/Skriplan/Admin/AkunAdmin")} />
          <a href="/Skriplan/Admin/AkunAdmin" className='text-xl font-medium hover:text-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer'>Ibu Citra</a>
        </div>
        <img 
        src="/assets/Iconlogout2.png" 
        alt="Logo" 
        className='h-10 w-10 rounded-full items-center justify-start hover:scale-110 transition-all duration-400 cursor-pointer ml-5 mr-5'
         onClick={() => router.push("/Skriplan/Landingpage")}/>
        </div>
      </div>
    </div>
  )
}
