'use client'
import React from 'react'
import Navbaruser from '../../../Component/navbaruser'
import { useRouter } from 'next/navigation'
export default function page() {
  const router = useRouter()
  return (
    <div className=" font-poppins relative w-full min-h-screen">
      {/* Background */}
      <img
        src="/assets/phinisi.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-white/70 z-0" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbaruser />
      </div>

      {/* Greeting */}
      <div className='px-12 py-8 relative z-10'>
        <div className='flex items-center gap-2'>
          <h1 className="font-poppins text-4xl font-bold text-[#1E3E62] mt-15">
            Selamat Datang,
          </h1>
          <h1 className="font-poppins text-4xl font-bold text-[#FF7F11] mt-15">
            User!
          </h1>
          <img src="/assets/Wavingicon.png" alt="halo" className="w-12 h-12 mt-15" />
        </div>
      </div>

      {/* Content */}
      <div className='px-12 pb-12 flex flex-col gap-8 relative z-10'>

        {/* Progress mahasiswa */}
        <div className="flex flex-col bg-white h-108 w-290 border-2 border-[#1E3E62] rounded-2xl p-8 shadow-2xl overflow-hidden">

          <div className='flex items-center gap-3 mb-6'>
            <img src="/assets/checkmark.png" className="w-10 h-10" />
            <h2 className="text-2xl font-bold text-[#1E3E62]">Progress</h2>
            <h2 className="text-2xl font-bold text-[#FF7F11]">Konsultasi</h2>
          </div>

          <div className='flex items-center justify-between '>
            <h2 className=" text-[#1E3E62] mt-5">Progress Keseluruhan</h2>
            <h2 className=" text-[#1E3E62] mt-5 flex items-start">0%</h2>
          </div>

             {/* Progress Bar */}
             <div className='bg-white h-5 w-full border-2 border-[#1E3E62] rounded-full overflow-hidden mt-2'>
              <div className='bg-[#FF7F11] h-full w-4 border-r-2 border-[#1E3E62]'></div>
              </div>
              
              {/* Progress card individual */}
              <div className=' flex bg-[#F3F6FB] h-12 w-full border border-[#1E3E62] mt-5 rounded-2xl'>
                <img src="/assets/inprogress.png" className="w-6 h-6 m-3" />
                <h2 className="text-[#1E3E62] mt-3">Proposal Penelitian </h2>
              </div>

              <div className=' flex bg-[#F3F6FB] h-12 w-full border border-[#1E3E62] mt-5 rounded-2xl'>
                <img src="/assets/inprogress.png" className="w-6 h-6 m-3" />
                <h2 className="text-[#1E3E62] mt-3">Hasil Penelitian </h2>
              </div>

              <div className=' flex bg-[#F3F6FB] h-12 w-full border border-[#1E3E62] mt-5 rounded-2xl'>
                <img src="/assets/inprogress.png" className="w-6 h-6 m-3" />
                <h2 className="text-[#1E3E62] mt-3">Penyusunan Skripsi </h2>
              </div>
            </div>
             
              <div className="bg-white  h-108 w-290 border-2 border-[#1E3E62] rounded-2xl p-8 shadow-2xl">

            <div className='flex items-center justify-between mb-6'>
              <div className='flex items-center gap-3'>
                <img src="/assets/Iconkalender.png" className="w-10 h-10" />
                <h2 className="text-2xl font-bold text-[#1E3E62]">Jadwal</h2>
                <h2 className="text-2xl font-bold text-[#FF7F11]">Konsultasi</h2>
              </div>
              <button 
              onClick={() => router.push('/Skriplan/User/Penjadwalan')}
              className='bg-gradient-to-b from-[#FF7418] to-[#FDDC95] h-12 w-35 rounded-2xl border-2 border-[#1E3E62] flex items-center gap-2 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer '>
                <img src="/assets/addicons.png" className="w-6 h-6 ml-3" />
                <h2 className="text-xl text-[#1E3E62] font-semibold">Ajukan</h2>
              </button>
            </div>

            {/* Scrollable Cards Container */}
            <div className='flex flex-col gap-4 max-h-80 overflow-y-auto pr-2'>
              {/* Card 1 */}
              <div className='bg-[#F3F6FB] border-2 border-[#1E3E62] rounded-2xl p-6'>
                <h3 className='text-lg font-bold text-[#1E3E62] mb-4'>Belum ada jadwal konsultasi</h3>
                <div className='flex items-center gap-3 mb-3'>
                  <img src="/assets/scheduleicon.png" className="w-6 h-6" />
                  <span className='text-[#1E3E62] '>--/--/--</span>
                  <img src="/assets/clockicon.png" className="w-6 h-6" />
                  <span className='text-[#1E3E62]'>--:-- s.d. --:--</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className='bg-[#F3F6FB] border-2 border-[#1E3E62] rounded-2xl p-6'>
                <h3 className='text-lg font-bold text-[#1E3E62] mb-4'>Belum ada jadwal konsultasi</h3>
                <div className='flex items-center gap-3 mb-3'>
                  <img src="/assets/scheduleicon.png" className="w-6 h-6" />
                  <span className='text-[#1E3E62] '>--/--/--</span>
                  <img src="/assets/clockicon.png" className="w-6 h-6" />
                  <span className='text-[#1E3E62]'>--:-- s.d. --:--</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className='bg-[#F3F6FB] border-2 border-[#1E3E62] rounded-2xl p-6'>
                <h3 className='text-lg font-bold text-[#1E3E62] mb-4'>Belum ada jadwal konsultasi</h3>
                <div className='flex items-center gap-3 mb-3'>
                  <img src="/assets/scheduleicon.png" className="w-6 h-6" />
                  <span className='text-[#1E3E62] '>--/--/--</span>
                  <img src="/assets/clockicon.png" className="w-6 h-6" />
                  <span className='text-[#1E3E62]'>--:-- s.d. --:--</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className='bg-[#F3F6FB] border-2 border-[#1E3E62] rounded-2xl p-6'>
                <h3 className='text-lg font-bold text-[#1E3E62] mb-4'>Belum ada jadwal konsultasi</h3>
                <div className='flex items-center gap-3 mb-3'>
                  <img src="/assets/scheduleicon.png" className="w-6 h-6" />
                  <span className='text-[#1E3E62] '>--/--/--</span>
                  <img src="/assets/clockicon.png" className="w-6 h-6" />
                  <span className='text-[#1E3E62]'>--:-- s.d. --:--</span>
                </div>
              </div>

              {/* Card 5 */}
              <div className='bg-[#F3F6FB] border-2 border-[#1E3E62] rounded-2xl p-6'>
                <h3 className='text-lg font-bold text-[#1E3E62] mb-4'>Belum ada jadwal konsultasi</h3>
                <div className='flex items-center gap-3 mb-3'>
                  <img src="/assets/scheduleicon.png" className="w-6 h-6" />
                  <span className='text-[#1E3E62] '>--/--/--</span>
                  <img src="/assets/clockicon.png" className="w-6 h-6" />
                  <span className='text-[#1E3E62]'>--:-- s.d. --:--</span>
                </div>
              </div>

              {/* Card 6 */}
              <div className='bg-[#F3F6FB] border-2 border-[#1E3E62] rounded-2xl p-6'>
                <h3 className='text-lg font-bold text-[#1E3E62] mb-4'>Belum ada jadwal konsultasi</h3>
                <div className='flex items-center gap-3 mb-3'>
                  <img src="/assets/scheduleicon.png" className="w-6 h-6" />
                  <span className='text-[#1E3E62] '>--/--/--</span>
                  <img src="/assets/clockicon.png" className="w-6 h-6" />
                  <span className='text-[#1E3E62]'>--:-- s.d. --:--</span>
                </div>
              </div>
            </div>
            </div>
         </div>
      </div>
  )
}
