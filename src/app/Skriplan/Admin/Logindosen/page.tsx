'use client'
import React from 'react'
import Navbar6 from '../../../Component/navbar6'   
import { useRouter } from 'next/navigation'
export default function page() {
  const router = useRouter()
  return (
    <div className='flex items-center justify-center'>
      <Navbar6 />
      {/*  top Text */}
      <div className="mt-38 justify-center items-center">
          <h1 className="font-poppins text-5xl font-bold text-[#1E3E62] ml-25 ">
            Waktu Selaras,
          </h1>
          <h1 className="font-poppins text-5xl font-bold text-[#1E3E62] mt-2 ml-2">
            Bimbingan Berkualitas
          </h1>
            {/*  bottom Text */}
          <div className="font-poppins mt-3 text-4xl font-bold ml-28">
            <span className="text-[#1E3E62]">Hanya di</span>
            <span className="text-[#1E3E62] ml-2">Skri</span>
            <span className="text-[#FF7F11]">Plan</span>
          </div>

          <p className=" font-poppins mt-4 text-xs font-medium text-[#FF7F11] ml-29 ">
            Lebih cepat atur jadwal, lebih fokus pada bimbingan
          </p>

          <button 
            onClick={() => router.push('/Skriplan/Admin/Logindosen2')}
            className=" font-poppins w-40 h-14 py-3 mt-8 ml-50 text-lg font-bold text-[#1E3E62] bg-gradient-to-b from-[#FF7418] to-[#FDDC95] rounded-full border border-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer shadow-2xl">
            Login
          </button>

          <div className="font-poppins mt-4 text-lg font-semibold ml-36">
            <span className="text-[#1E3E62]">Belum Punya Akun?</span>
            <button 
              onClick={() => router.push('/Skriplan/Admin/Registerdosen')}
              className="text-[#FF7F11] ml-2 font-bold mt-2 text-lg hover:underline cursor-pointer hover:scale-110 transition-all duration-400">
              Register
            </button>
          </div>

      </div>
    </div>
  )
}
