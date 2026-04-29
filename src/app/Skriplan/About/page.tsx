'use client'

import React from 'react'
import Navbar6 from '../../Component/navbar6'

export default function page() {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar6 />
      <div className='flex-1 flex' style={{ background: 'linear-gradient(to right, #B8D8F0 0%, #E8E0D0 33%, #FFEDD4 100%)' }}>
        {/* Left Section */}
        <div className='w-1/3 flex flex-col items-center justify-center mt-10'>
          <img src="/assets/Skriplannobg.png" alt="About" className='h-65 w-60 mb-4' />
          <div className='flex gap-0'>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-2/3 flex flex-col items-center justify-center px-8 mt-10'>
          <div className='pr-30'>
            <div className='flex gap-0 mb-5 mt-6'>
              <h1 className='font-poppins text-[#1E3E62] text-4xl font-bold'>
                Skri
              </h1>
              <h1 className='font-poppins text-[#FF7F11] text-4xl font-bold'>
                Plan
              </h1>
            </div>
            <p className='font-poppins text-justify text-slate-700 leading-relaxed'>
              <span className='font-bold text-[#1E3E62] text-xl'>Skrip</span>
              <span className='font-bold text-[#FF7F11] text-xl mr-2'>Plan</span>
              adalah Aplikasi yang dirancang untuk mempermudah pengaturan jadwal bimbingan antara mahasiswa dan dosen, secara efisien dan terstruktur. Aplikasi ini membantu mengurangi kesalahan komunikasi, bentrok jadwal, dan proses manual yang memakan waktu. Dengan tampilan yang sederhana dan fitur yang terintegrasi, proses bimbingan menjadi lebih terstruktur, transparan, dan produktif bagi kedua belah pihak sehingga Mahasiswa dapat menyelesaikan proses studinyanya tepat waktu.
            </p>
          </div>
          <a href="/Skriplan/About2" className='font-poppins bg-gradient-to-b from-[#FF7418] to-[#FDDC95] text-[#1E3E62] border border-[#1E3E62] font-bold py-3 px-8 rounded-full hover:scale-110 transition-all duration-400 cursor-pointer shadow-lg mt-5 mr-30'>
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </div>
  )
}
