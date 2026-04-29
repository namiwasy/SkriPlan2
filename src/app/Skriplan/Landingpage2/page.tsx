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
        <div className="max-w-xl mt-14">
          <h1 className="font-poppins text-5xl font-bold text-[#1E3E62] leading-tight">
            Waktu Selaras,
          </h1>
          <h1 className="font-poppins text-5xl font-bold text-[#1E3E62] mt-2">
            Bimbingan
          </h1>
          <h1 className="font-poppins text-5xl font-bold text-[#1E3E62] mt-2">
            Berkualitas
          </h1>
          <h1 className="font-poppins text-2xl font-bold text-[#FF7F11] mt-4">
            Anda Sebagai Apa?
          </h1>

          {/* Dosen Button */}
          <button 
            onClick={() => router.push('/Skriplan/Admin/Logindosen')}
            className="relative font-poppins px-6 py-3 mt-6 text-lg font-semibold text-[#1E3E62] bg-gradient-to-b from-[#FF7418] to-[#FDDC95] rounded-full border border-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer shadow-2xl flex items-center gap-2">
            <img src="/assets/Dosennavy.png" alt="mahasiswa" className="w-6 h-6" />
            Dosen
          </button>

          {/* Mahasiswa Button */}
          <button 
            onClick={() => router.push('/Skriplan/User/Loginmahasiswa')}
            className="relative font-poppins px-6 py-3 mt-4 text-lg font-semibold text-[#1E3E62] bg-gradient-to-b from-[#FF7418] to-[#FDDC95] rounded-full border border-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer shadow-2xl flex items-center gap-2">
            <img src="/assets/Gradnavy.png" alt="dosen" className="w-6 h-6" />
            Mahasiswa
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
