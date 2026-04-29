'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Navbar6 from '../../Component/navbar6'

export default function page() {
  const router = useRouter()

  return (
    <div className="relative w-full h-[588px] overflow-hidden">
      {/* Background */}
      <img
        src="/assets/phinisi.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/70 z-0" />

      <Navbar6 />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between px-16 h-full">
        
        {/* LEFT TEXT */}
        <div className="max-w-xl mt-16">
          <h1 className="font-poppins text-5xl font-bold text-[#1E3E62] leading-tight">
            Waktu Selaras,
          </h1>
          <h1 className="font-poppins text-5xl font-bold text-[#1E3E62] mt-2">
            Bimbingan
          </h1>
          <h1 className="font-poppins text-5xl font-bold text-[#1E3E62] mt-2">
            Berkualitas
          </h1>

          <div className="font-poppins mt-3 text-5xl font-bold">
            <span className="text-[#1E3E62]">Hanya di</span>
            <span className="text-[#1E3E62] ml-2">Skri</span>
            <span className="text-[#FF7F11]">Plan</span>
          </div>

          <p className=" font-poppins mt-4 text-lg font-medium text-[#FF7F11]">
            Lebih cepat atur jadwal, lebih fokus pada bimbingan
          </p>

          <button 
            onClick={() => router.push('/Skriplan/Landingpage2')}
            className=" font-poppins px-6 py-3 mt-6 text-lg font-semibold text-[#1E3E62] bg-gradient-to-b from-[#FF7418] to-[#FDDC95] rounded-full border border-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer shadow-2xl">
            Get Started
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex flex-col items-center">
          <img
            src="/assets/Fotomama.png"
            alt="foto"
            className="w-[500px] object-cover mt-10 opacity-75"
          />

          {/* Nama */}
          <h1 className="absolute bottom-8 font-poppins px-4 py-2  text-lg font-bold text-[#1E3E62] mt-2">
            Dr. Citra Ayni Kamaruddin, S.P., M.Si.
          </h1>
        </div>

      </div>
    </div>
  )
}
