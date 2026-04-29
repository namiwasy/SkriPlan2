'use client'
import React from 'react'
import Navbaradmin from '../../../Component/navbaradmin'
import { useRouter } from 'next/navigation'
export default function page() {
  const dosen = [
    { username: "Dr.Citra Ayni Kamaruddin, S.P., M.Si.", nidn: "NIDN 1234567", prodi: "Ekonomi Pembangunan" },
  ];
  const router = useRouter();
  return (
    <div className="relative w-full h-[588px] overflow-hidden">
      {/* Background */}
      <img
        src="/assets/phinisi.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/70 z-0" />

      <Navbaradmin />

      {/* Back Arrow */}
      <img src="/assets/leftarrow.png"
        alt="About"
        className='absolute h-10 w-10 left-6 mt-20 z-20 cursor-pointer hover:scale-110 transition-all duration-300'
        onClick={() => router.push("/Skriplan/Admin/Homepagedosen")}
      />

      {/* Content */}

      <div className="relative z-10 flex items-center justify-between px-16 h-full">

        {/* LEFT CONTENT */}
        <div className="max-w-xl ">
          <div className='px-5 py-4 relative z-10'>
            <div className='flex items-center gap-2'>
              <h1 className="font-poppins text-3xl font-bold text-[#1E3E62] mt-15">
                Selamat Datang,
              </h1>
              <h1 className="font-poppins text-3xl font-bold text-[#FF7F11] mt-15">
                Ibu
              </h1>
              <img src="/assets/Wavingicon.png" alt="halo" className="w-10 h-10 mt-15" />
            </div>
          </div>
          <div className='bg-[#F3F6FB] h-80 w-120 border border-[#1E3E62] rounded-xl ml-5 '>
            <div className='flex items-center justify-start'>
              <img src="/assets/Profileicon.png" className="w-10 h-10 ml-5 mt-5" />
              <h1 className="font-poppins text-2xl font-bold text-[#1E3E62] mt-5 ml-3">
                User Details
              </h1>
            </div>
            <h1 className='font-poppins text-xs font-light text-[#1E3E62] mt-5 ml-5'>
              USERNAME
            </h1>
            <h1 className="font-poppins text-lg font-bold text-[#1E3E62] ml-5">
              {dosen[0].username}
            </h1>
            <h1 className='font-poppins text-xs font-light text-[#1E3E62] mt-5 ml-5'>
              NIDN
            </h1>
            <h1 className="font-poppins text-lg font-bold text-[#1E3E62] ml-5">
              {dosen[0].nidn}
            </h1>
            <h1 className='font-poppins text-xs font-light text-[#1E3E62] mt-5 ml-5'>
              PRODI
            </h1>
            <h1 className="font-poppins text-lg font-bold text-[#1E3E62] ml-5">
              {dosen[0].prodi}
            </h1>
          </div>
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
