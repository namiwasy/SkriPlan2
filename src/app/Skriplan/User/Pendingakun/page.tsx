'use client'
import React from 'react'
import Navbar6 from '../../../Component/navbar6'
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter()
  return (
    <div className='flex justify-center items-center'>
      <Navbar6 />
      {/* Icon */}
      <div className="mt-38 flex flex-col justify-center items-center">
        <div className='h-17 w-17 bg-[#FFCA9D] rounded-full shadow-lg border-2 border-[#1E3E62] flex items-center justify-center'>
        <img src="/assets/Orangeclock.png" alt="Misi" className='h-12 w-12' />
        </div>
      {/* Text */}
        <h1 className="font-poppins text-3xl font-bold text-[#1E3E62] mt-2">
          Menunggu persetujuan
        </h1>
        <div className="font-poppins mt-3 text-2xl text-center">
          <span className="text-[#1E3E62] font-light">Akun kamu sedang di</span>
          <span className="text-[#FF7F11] font-bold"> Pending</span>
          <span className="text-[#1E3E62] ml-2 font-light">Dosen</span>
        </div>
        <h1 className="font-poppins text-xl font-light text-[#1E3E62] mt-2">
          Dosen Pembimbing akan meninjau dan menyetujui akun kamu
        </h1>
        <h1 className="font-poppins text-xl font-light text-[#1E3E62] mt-2">
          Kamu akan menerima notifikasi setelah akun disetujui
        </h1>
        
        <button 
            onClick={() => router.push('/Skriplan/User/Loginmahasiswa')}
            className=" font-poppins w-40 h-14 py-3 mt-8 text-lg font-semibold text-[#1E3E62] bg-gradient-to-b from-[#FF7418] to-[#FDDC95] rounded-full border border-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer shadow-2xl">
            Kembali
          </button>

          <div className="font-poppins mt-13 text-xl font-bold text-center">
          <span className="text-[#1E3E62]">Skri</span>
          <span className="text-[#FF7F11]">Plan</span>
          
        </div>
      </div>
    </div>
  )
}
